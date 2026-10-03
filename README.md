# DocuLocate marketing site

A responsive, dependency-free static website focused on **semantic search inside one document**. Upload one document, describe what you need, and locate the original source passage.

## Run and deploy

```sh
npm run dev                     # http://localhost:3000
npm run check                   # JavaScript syntax checks
npm run build                   # deployable files in dist/
SERVE_DIST=1 PORT=3001 npm start # preview production output
```

Deploy `dist/` to a static host that serves directory index pages and uses `404.html` for missing routes. Existing CNAME, robots.txt, sitemap, favicon assets, canonical URLs, and social metadata are retained. No analytics or third-party scripts are used.

## SEO guide pages

Guide pages are defined in `pages.mjs` (title, description, sections, FAQ, related links) and rendered by `generate-pages.mjs` to `<slug>/index.html` with shared header, footer, canonical/social metadata, and JSON-LD. The generator also rewrites `sitemap.xml`. `npm run dev`, `npm start`, and `npm run build` run it automatically; run `npm run generate` on its own after editing `pages.mjs`. The build and dev server pick up new slugs from `pages.mjs`. Commit the generated files. Keep each page substantive and limited to verified product behavior.

## Application CTA

Production “Try DocuLocate” links point to **https://doculocate.com/** as specified by the owner. The source dev server rewrites those three links to **http://localhost:4100/** for the running local app; `SERVE_DIST=1` leaves the built links unchanged. If this marketing page is also served at that exact URL, the CTA returns to the homepage. A separate app address can be configured at build time:

```sh
DOCULOCATE_APP_URL=https://your-confirmed-app-host.example npm run build
```

The build replaces all three app links in its output. Secondary links open the on-page workflow or interactive example.

## Content

- `index.html`: hero, one-document demo, formats strip, three-step workflow, a "Go deeper" section linking to the guide pages, four use cases, privacy, and a link to the FAQ page. Longer explanations (Ctrl+F comparison, search modes) live on the guide pages.
- `script.js`: the interactive demo, built to look and behave like the application's own window. Four fictional files (PDF, DOCX, XLSX, TXT) each have Hybrid, Semantic, and Lexical queries and three ranked results with relevance badges and scores. The demo has the app's header (example picker and search-type pill), search bar (Match case, previous/next match with a count, Search, Clear, Reset), a viewer (PDF pages, formatted DOCX, spreadsheet grid with sheet tabs, plain text) with a drag-to-resize handle, and result cards. Selecting a result highlights its source in the viewer and scrolls to it; selecting it again turns the highlight off. Clear removes results and highlights but keeps the query; Reset restores the starting state. No live retrieval, uploads, or AI calls occur in the demo.
- `styles.css`: responsive site styles; new positioning styles follow the existing base styles. The demo's styles are one readable block at the end of the file, namespaced `ad-` and `.app-demo`, with values taken from the application's stylesheet so the demo matches the product.
- `privacy/` and `terms/`: current processing details and website terms.
- `assets/social.svg` and `assets/social.png`: social preview artwork and rendered image.

Marketed file-picker formats are PDF, DOCX, TXT, XLSX, XLS, and CSV. Add verified formats as static entries in `#formats` and update the FAQ and metadata together. The PDF viewer displays pages, DOCX uses a formatted rendering with text fallback, and spreadsheets use a grid with sheet tabs and row highlights. Structured headings are not advertised for DOCX.

The main page deliberately omits collection, workspace, team, repository, and API messaging. New product areas can later be added as separate, substantive pages using the existing static architecture: add their files to the build, development server allowlist, and sitemap. Do not publish placeholders for future capabilities.

Privacy details remain based on the application implementation: server processing, one active document in server memory, browser history (up to five entries with attempted file caching up to 3 MiB), optional external-provider processing and answers, and current access limitations. Recheck them as the app changes.

## Validation

Build and syntax checks: `npm run check && npm run build`. Check navigation targets, CTA destinations, social assets, responsive layout, all four document examples across all three search modes, source dialogs, and FAQ disclosure behavior after content changes. The initial example and the full FAQ remain readable without JavaScript.

## Implementation audit — October 2, 2026

Checked the running app at port 4100 and source files `src/api/routes/ui.route.ts`, `src/api/schemas/search.schema.ts`, `src/search/search-service.ts`, `src/documents/document-store.ts`, and `src/parsers/registry.ts`.

Hybrid is the default. Semantic and Lexical modes, Match case for Lexical, weaker-result separation, optional AI answers, embedded viewers, and recent-file history are implemented. The parser registry additionally accepts Markdown and HTML through the API; the homepage advertises the narrower, verified app file-picker list. Reset and Clear history have separate effects and are documented separately. No old capacity-eviction or no-generated-answer claims remain.
