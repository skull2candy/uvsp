import { run } from 'react-snap';
import chromium from '@sparticuz/chromium';

async function prerender() {
  const isVercel = process.env.VERCEL === '1';
  
  let executablePath = null;
  let args = ["--no-sandbox", "--disable-setuid-sandbox"];
  
  if (isVercel) {
    console.log("Running in Vercel environment. Using @sparticuz/chromium.");
    executablePath = await chromium.executablePath();
    args = chromium.args;
  }

  await run({
    source: "dist",
    inlineCss: false,
    puppeteerExecutablePath: executablePath,
    puppeteerArgs: args
  });
}

prerender().catch(console.error);
