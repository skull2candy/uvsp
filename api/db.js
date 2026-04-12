const { neon } = require('@neondatabase/serverless');

const db = neon(process.env.DATABASE_URL);

module.exports = {
  query: async (text, params) => {
    // For neon(), we can't use params in the same way as pg.Pool
    // We need to use template literals or a specific query builder if we want it clean
    // But for simple queries, we can just use the sql tagged template
    // Actually, neon() supports a raw query style if needed.
    // Let's use a simpler approach that matches what we have.
    
    // In serverless environment, pooling is managed differently.
    // We'll use the basic neon() client for simplicity.
    return { rows: await db(text, params) };
  }
};
