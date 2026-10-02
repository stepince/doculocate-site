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

## Application CTA

Production “Try DocuLocate” links point to **https://doculocate.com/** as specified by the owner. The source dev server rewrites those three links to **http://localhost:4100/** for the running local app; `SERVE_DIST=1` leaves the built links unchanged. If this marketing page is also served at that exact URL, the CTA returns to the homepage. A separate app address can be configured at build time:

```sh
DOCULOCATE_APP_URL=https://your-confirmed-app-host.example npm run build
```

The build replaces all three app links in its output. Secondary links open the on-page workflow or interactive example.

## Content

- `index.html`: hero, one-document demo, keyword comparison, three-step workflow, semantic Ctrl+F example, grounded results, four use cases, privacy, and ten FAQ answers.
- `script.js`: four fictional file examples (PDF, DOCX, XLSX, TXT), each with Hybrid, Semantic, and Lexical queries. Results highlight a passage or spreadsheet row in the inline viewer. An optional answer example links to its supporting source. No live retrieval or uploads occur in the demo.
- `styles.css`: responsive site styles; new positioning styles follow the existing base styles.
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
