import express from 'express';
import cors from 'cors';
import * as db from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

// API ROUTES
app.post('/api/leads', async (req, res) => {
  const { name, email, phone, message, property_interest } = req.body;
  
  try {
    const result = await db.query(
      'INSERT INTO leads (name, email, phone, message, property_interest) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, message, property_interest]
    );
    res.status(201).json({ success: true, lead: result.rows[0] });
  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

app.get('/api/leads', async (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== 'UVSP-2026') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  try {
    const result = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
    res.json({ success: true, leads: result.rows });
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'serverless api is operational' });
});

export default app;
