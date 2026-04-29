import fs from 'fs';
import path from 'path';
import { journalData } from './src/data/journalData.js';

const DOMAIN = 'https://uvspbuildcon.com';

const staticRoutes = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/journal',
  '/builder-floors-vasant-kunj',
  '/builder-floors-mehrauli'
];

const projectRoutes = [
  '/property/the-crown',
  '/property/ryhan-square'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
staticRoutes.forEach(route => {
  xml += `  <url>\n    <loc>${DOMAIN}${route}</loc>\n    <changefreq>${route === '/' ? 'daily' : 'monthly'}</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

// Add project routes
projectRoutes.forEach(route => {
  xml += `  <url>\n    <loc>${DOMAIN}${route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
});

// Add all journal articles dynamically
journalData.forEach(article => {
  xml += `  <url>\n    <loc>${DOMAIN}/journal/${article.id}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
});

xml += `</urlset>\n`;

const outputPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`Successfully generated sitemap with ${staticRoutes.length + projectRoutes.length + journalData.length} URLs!`);
