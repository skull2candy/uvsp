import pg from 'pg';
const { Pool } = pg;

const connectionString = "postgresql://neondb_owner:npg_qW45uURtbpJn@ep-restless-shadow-a4ryms6i.us-east-1.aws.neon.tech/neondb?sslmode=require";

const pool = new Pool({
  connectionString,
});

async function test() {
  try {
    console.log("Connecting to Neon...");
    const res = await pool.query('SELECT NOW()');
    console.log("Success! Server time:", res.rows[0].now);
    
    console.log("Checking leads table...");
    const tableCheck = await pool.query("SELECT to_regclass('leads')");
    console.log("Table exists:", tableCheck.rows[0].to_regclass !== null);
    
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    await pool.end();
  }
}

test();
