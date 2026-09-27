import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = resolve(process.env.SERVE_DIST === '1' ? 'dist' : '.');
const types = { '.ico': 'image/x-icon', '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml' };
const files = new Set(['favicon.ico', 'index.html', 'styles.css', 'script.js', 'robots.txt', 'sitemap.xml', '404.html', 'privacy/index.html', 'terms/index.html']);
createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (['/privacy', '/terms'].includes(path)) {
      res.writeHead(301, { Location: `${path}/` }).end();
      return;
    }
    if (path.endsWith('/')) path += 'index.html';
    const file = resolve(root, '.' + path);
    const relative = file.slice(root.length + 1);
    if (!file.startsWith(root + sep) || (!files.has(relative) && !/^assets\/[a-zA-Z0-9_-]+\.(svg|png)$/.test(relative))) throw new Error('Not found');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' }).end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    try { res.end(await readFile(resolve(root, '404.html'))); } catch { res.end('Not found'); }
  }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log(`DocuLocate: http://localhost:${process.env.PORT || 3000}`));
