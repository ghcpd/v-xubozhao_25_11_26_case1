const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const puppeteer = require('puppeteer');

const PORT = process.env.PORT || 0; // 0 lets OS choose an available port
const ROOT = process.cwd();

function serveStatic(req, res) {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(ROOT, urlPath === '/' ? '/index.html' : urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }
    const type = mime.lookup(filePath) || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

async function run() {
  const server = http.createServer(serveStatic);
  await new Promise(resolve => server.listen(PORT, resolve));
  const address = server.address();
  const actualPort = typeof address === 'object' && address ? address.port : PORT;
  console.log(`Server running at http://localhost:${actualPort}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.type(), msg.text());
  });
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err);
  });

  await page.goto(`http://localhost:${actualPort}/index.html`, { waitUntil: 'networkidle0' });
  
  const result = await page.evaluate(() => {
    const cards = document.querySelectorAll('.zodiac-card');
    const emptyState = document.querySelector('.empty-state');
    return {
      cards: cards.length,
      emptyState: !!emptyState,
      headerText: document.querySelector('#appTitle')?.textContent || null,
    };
  });

  console.log('Result:', result);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
  server.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
