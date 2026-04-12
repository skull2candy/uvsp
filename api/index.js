import express from 'express';
import cors from 'cors';
import { getDb } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Initialize the leads table if it doesn't exist
async function initDB() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(50),
      message TEXT,
      property_interest VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

// API ROUTES
app.post('/api/leads', async (req, res) => {
  const { name, email, phone, message, property_interest } = req.body;
  
  try {
    await initDB();
    const sql = getDb();
    const result = await sql`
      INSERT INTO leads (name, email, phone, message, property_interest)
      VALUES (${name}, ${email}, ${phone}, ${message}, ${property_interest})
      RETURNING *
    `;
    res.status(201).json({ success: true, lead: result[0] });
  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/leads', async (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== 'UVSP-2026') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  try {
    const sql = getDb();
    const result = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
    res.json({ success: true, leads: result });
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'serverless api is operational' });
});

export default app;
