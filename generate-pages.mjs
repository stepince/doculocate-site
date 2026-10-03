// Renders the SEO pages in pages.mjs to <slug>/index.html (shared header, footer, metadata, JSON-LD).
import { mkdir, writeFile } from 'node:fs/promises';
import { pages, siteUrl } from './pages.mjs';

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const strip = (s) => s.replace(/<[^>]+>/g, '');
const json = (o) => JSON.stringify(o).replaceAll('<', '\\u003c');
const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));

const nav = pages.filter((p) => p.header !== false).map((p) => `<a href="/${p.slug}/">${esc(p.nav)}</a>`).join('');

function render(page) {
  const url = `${siteUrl}/${page.slug}/`;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: page.h1, description: page.description, url, isPartOf: { '@type': 'WebSite', name: 'DocuLocate', url: `${siteUrl}/` } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'DocuLocate', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: page.nav, item: url }
    ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ];
  const related = page.related.map((s) => bySlug[s]).filter(Boolean);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="theme-color" content="#f8f9fc">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48"><link rel="icon" href="/assets/favicon-32.png" type="image/png" sizes="32x32"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180">
<meta property="og:type" content="article">
<meta property="og:site_name" content="DocuLocate">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${siteUrl}/assets/social.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${siteUrl}/assets/social.png">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${json(ld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="header wrap">
<a class="brand" href="/" aria-label="DocuLocate home"><img src="/assets/icon.svg" width="32" height="32" alt="">Docu<span>Locate</span></a>
<nav aria-label="Main navigation"><a href="/">Product</a>${nav}</nav>
<a class="button small" href="https://doculocate.com/" data-app-link>Try DocuLocate <span aria-hidden="true">↗</span></a>
</header>
<main id="main">
<article class="wrap seo-page">
<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">DocuLocate</a> <span aria-hidden="true">/</span> <span>${esc(page.nav)}</span></nav>
<p class="eyebrow">${esc(page.eyebrow)}</p>
<h1>${page.h1}</h1>
<p class="seo-lead">${page.lead}</p>
<div class="hero-actions"><a class="button" href="https://doculocate.com/" data-app-link>Try DocuLocate <span aria-hidden="true">↗</span></a><a class="secondary" href="/#demo">See the interactive example <span aria-hidden="true">↓</span></a></div>
${page.sections.map((s) => `<section><h2>${esc(s.h2)}</h2>\n${s.html}</section>`).join('\n')}
<section class="faq">${page.faqHeading === null ? '' : '<h2>Questions, answered</h2>'}<div class="faq-list">${page.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(strip(a))}</p></details>`).join('')}</div></section>
<section class="seo-related"><h2>Keep reading</h2><ul>${related.map((r) => `<li><a href="/${r.slug}/">${esc(r.h1)}</a></li>`).join('')}<li><a href="/">How DocuLocate works</a></li></ul></section>
</article>
<section class="closing wrap"><p class="eyebrow">THE PASSAGE IS IN THERE.</p><h2>Find it in your own words.</h2><p>One document. Your question. The source you need.</p><a class="button" href="https://doculocate.com/" data-app-link>Try DocuLocate <span aria-hidden="true">↗</span></a></section>
</main>
<footer class="wrap"><div><a href="/" class="brand"><img src="/assets/icon.svg" width="28" height="28" alt="">Docu<span>Locate</span></a><p>Semantic search for documents.</p></div><nav aria-label="Footer"><a href="/">Product</a>${nav}<a href="/faq/">FAQ</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav><span class="copyright">© 2026 DocuLocate<br>doculocate.com</span></footer>
</body>
</html>
`;
}

for (const page of pages) {
  await mkdir(page.slug, { recursive: true });
  await writeFile(`${page.slug}/index.html`, render(page));
}

// Keep the sitemap in step with the page list.
const urls = ['/', ...pages.map((p) => `/${p.slug}/`), '/privacy/', '/terms/'];
await writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${siteUrl}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated ${pages.length} pages and sitemap.xml`);
