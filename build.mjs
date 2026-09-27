import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
// Copy static sources; no runtime dependencies or framework required.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'assets', 'privacy', 'terms', 'robots.txt', 'sitemap.xml', 'CNAME', '404.html']) {
  await cp(file, `dist/${file}`, { recursive: true });
}
// Configure only when a working application endpoint is ready.
if (process.env.DOCULOCATE_APP_URL) {
  const url = new URL(process.env.DOCULOCATE_APP_URL);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
    throw new Error('DOCULOCATE_APP_URL must use HTTPS (or HTTP on localhost).');
  }
  const escaped = url.href.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const source = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', source.replaceAll('href="#demo" data-app-link', `href="${escaped}" data-app-link`));
}
console.log('Built DocuLocate in dist/');
