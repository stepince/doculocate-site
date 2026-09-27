# DocuLocate marketing site

A responsive, dependency-free static website for doculocate.com. Uses the same plain HTML/CSS/JS and Node build/dev-server conventions as the adjacent DiffFind site.

## Run

```sh
npm run dev                     # http://localhost:3000
npm run check                   # JavaScript syntax checks
npm run build                   # deployable files in dist/
SERVE_DIST=1 PORT=3001 npm start # preview production output
```

Deploy the contents of `dist/` to a static host. `CNAME`, `robots.txt`, `sitemap.xml`, a 404 page, and social metadata are included. The host should serve directory index files and use `404.html` for missing routes.

## Application link

Until a live app endpoint is confirmed, “Try DocuLocate” opens the labeled interactive example. Set the real URL at build time:

```sh
DOCULOCATE_APP_URL=https://your-confirmed-app-host.example npm run build
```

All three app CTAs are replaced in the built homepage. Source files continue to use the demo fallback. No contact address or self-hosting offering has been invented; add these when confirmed.

## Content and evidence

The example selector and concept buttons switch between three prepared searches. “View in document” opens the corresponding fictional source with context in an accessible native dialog (Escape closes it). The page does not pretend to run actual semantic retrieval. The demo remains readable without JavaScript.

Product claims were checked against `../doculocate/src/` on September 27, 2026:

- `parsers/registry.ts`: PDF, DOCX, TXT, Markdown (.md/.mdx), HTML (.html/.htm). No spreadsheet, CSV, JSON, or XML support is advertised.
- `search/search-service.ts`: single/multiple document search, ranked passages, available location metadata. Page numbers are illustrated for PDFs and headings for Markdown. DOCX does not currently extract section metadata.
- `documents/document-store.ts`: process-lifetime server memory; removal, eviction, and restart clear stored documents.
- `search/embeddings.ts`: embeddings run on the application server.
- `search/get-reranker.ts` and `search/providers/`: optional external provider receives query and candidate text.
- The current app has a shared store without user accounts. The privacy page states this limitation. No unverified training, credential logging, private workspace, or security claims are made.

The comparison and document snippets are illustrative, not real customer documents. Website terms describe use of the marketing site; app/deployment-specific terms and operator contact details should be supplied when an offering is ready.

## Extend

- Add verified formats as static entries in `#formats`; no list is generated only in JavaScript, so crawlers and no-JS browsers see the same content.
- Update examples in `script.js`; keep the initial HTML example in sync for no-JS rendering.
- Add unique landing pages as `route/index.html`. Add each to `build.mjs`, the dev server allowlist, and `sitemap.xml`. Candidate topics: semantic-document-search, semantic-pdf-search, search-pdf, document-search, ai-document-search, search-documents-by-meaning, legal-document-search, contract-search. No thin placeholder pages are published.
- The social card is `assets/social.png`; source vector artwork is `assets/social.svg`.

No runtime dependencies, third-party fonts, remote scripts, analytics, or cookies are used.
