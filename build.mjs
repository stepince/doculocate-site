import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { pages } from './pages.mjs';
import './generate-pages.mjs';
// Copy static sources; no runtime dependencies or framework required.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'app-ping.js', 'assets', 'privacy', 'terms', ...pages.map((p) => p.slug), 'robots.txt', 'sitemap.xml', 'CNAME', 'favicon.ico', '404.html']) {
  await cp(file, `dist/${file}`, { recursive: true });
}
// Configure only when a working application endpoint is ready.
if (process.env.DOCULOCATE_APP_URL) {
  const url = new URL(process.env.DOCULOCATE_APP_URL);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
    throw new Error('DOCULOCATE_APP_URL must use HTTPS (or HTTP on localhost).');
  }
  const escaped = url.href.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  for (const file of ['index.html', ...pages.map((p) => `${p.slug}/index.html`)]) {
    const source = await readFile(`dist/${file}`, 'utf8');
    await writeFile(`dist/${file}`, source.replaceAll('href="https://app.doculocate.com/" data-app-link', `href="${escaped}" data-app-link`));
  }
}
console.log('Built DocuLocate in dist/');
