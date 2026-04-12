const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// INITIALIZE DATABASE TABLE
const initDB = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT,
        property_interest VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Leads table verified/created.');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

initDB();

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

app.get('/health', (req, res) => {
  res.json({ status: 'server is operational' });
});

app.listen(PORT, () => {
  console.log(`Server executing on port ${PORT}`);
});
