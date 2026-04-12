import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

/**
 * Executes a raw postgreSQL query against the Neon database using the serverless driver.
 * Returns an object with a 'rows' array to maintain compatibility with the 'pg' style.
 */
export const query = async (text, params) => {
  const result = await sql(text, params);
  return { rows: result };
};
