# DocuLocate marketing site

A responsive, dependency-free static website focused on **semantic search inside one document**. Upload one document, describe what you need, and locate the original source passage.

## Run and deploy

```sh
npm run dev                     # http://localhost:3000
npm run check                   # JavaScript syntax checks
npm run build                   # deployable files in dist/
SERVE_DIST=1 PORT=3001 npm start # preview production output
```

Deploy `dist/` to a static host that serves directory index pages and uses `404.html` for missing routes. Existing CNAME, robots.txt, sitemap, favicon assets, canonical URLs, and social metadata are retained. No analytics or third-party scripts are used. `app-ping.js` sends a no-cors request to the app's `/v1/health` on load and every 60 seconds while the tab is visible, so the app is awake when a visitor clicks "Try DocuLocate" (the URL comes from the page's own `data-app-link`, so build overrides and the dev rewrite apply).

## SEO guide pages

Guide pages are defined in `pages.mjs` (title, description, sections, FAQ, related links) and rendered by `generate-pages.mjs` to `<slug>/index.html` with shared header, footer, canonical/social metadata, and JSON-LD. The generator also rewrites `sitemap.xml`. `npm run dev`, `npm start`, and `npm run build` run it automatically; run `npm run generate` on its own after editing `pages.mjs`. The build and dev server pick up new slugs from `pages.mjs`. Commit the generated files. Keep each page substantive and limited to verified product behavior.

## Application CTA

Production “Try DocuLocate” links point to **https://app.doculocate.com/** as specified by the owner. The source dev server rewrites those links (on every page) to **http://localhost:4100/** for the running local app; `SERVE_DIST=1` leaves the built links unchanged. A separate app address can be configured at build time:

```sh
DOCULOCATE_APP_URL=https://your-confirmed-app-host.example npm run build
```

The build replaces all app links in its output. Secondary links open the on-page workflow or interactive example.

## Content

- `index.html`: hero, one-document demo, formats strip, three-step workflow, a "Go deeper" section linking to the guide pages, four use cases, privacy, and a link to the FAQ page. Longer explanations (Ctrl+F comparison, search modes) live on the guide pages.
- `script.js`: the interactive demo, built to look and behave like the application's own window. Four fictional files (PDF, DOCX, XLSX, TXT) each have Hybrid, Semantic, and Lexical queries. Hybrid and Semantic show three ranked results with relevance badges and scores; Lexical works like the app's Ctrl+F: every occurrence of the query in document order (Match case optional), with only the matched text highlighted and no scores or Answer. The demo has the app's header (example picker and search-type pill), search bar (Match case, previous/next match with a count, Search, Clear, Reset), a viewer (PDF pages, formatted DOCX, spreadsheet grid with sheet tabs, plain text) with a drag-to-resize handle, an example-question list (one prepared question per search type), a viewer, an Answer callout (labelled as extracted from the document, no AI, like the app's default Built-in mode), and result cards. Selecting a result or the Answer highlights its source in the viewer and scrolls to it; selecting it again turns the highlight off. Clear removes results and highlights but keeps the query; Reset restores the starting state. No live retrieval, uploads, or AI calls occur in the demo.
- `styles.css`: responsive site styles; new positioning styles follow the existing base styles. The demo's styles are one readable block at the end of the file, namespaced `ad-` and `.app-demo`, with values taken from the application's stylesheet so the demo matches the product.
- `privacy/` and `terms/`: current processing details and website terms.
- `assets/social.svg` and `assets/social.png`: social preview artwork and rendered image.
- `assets/youtube-*.svg` / `.png`: the DocuLocate YouTube channel artwork (profile, banner, watermark) and 1280x720 video thumbnails, each with an editable SVG source and a rendered PNG. `youtube-thumbnail-ask-whole-document` is the Ask feature thumbnail; the SVG is the source of truth, so edit it and re-render the PNG at exactly 1280x720 (YouTube's limit is 2 MB).

Marketed file-picker formats are PDF, DOCX, TXT, XLSX, XLS, and CSV. Add verified formats as static entries in `#formats` and update the FAQ and metadata together. The PDF viewer displays pages, DOCX uses a formatted rendering with text fallback, and spreadsheets use a grid with sheet tabs and row highlights. Structured headings are not advertised for DOCX.

The main page deliberately omits collection, workspace, team, repository, and API messaging. New product areas can later be added as separate, substantive pages using the existing static architecture: add their files to the build, development server allowlist, and sitemap. Do not publish placeholders for future capabilities.

Privacy details remain based on the application implementation: server processing, one active document in server memory, browser history (up to five entries with attempted file caching up to 3 MiB), built-in answers with no external service, optional sign-in (Google or email/password, only needed to use your own AI provider), the dl_anon and dl_session cookies, encrypted stored provider keys and account deletion, per-visitor private documents on the hosted app (a single shared document in local mode), optional external-provider processing only when a person adds their own provider (and, for Ask, the question and the document's full text go to that provider when the person presses Ask), and what the operator can see. Recheck them as the app changes.

## Validation

Build and syntax checks: `npm run check && npm run build`. Check navigation targets, CTA destinations, social assets, responsive layout, all four document examples across all three search modes, source dialogs, and FAQ disclosure behavior after content changes. The initial example and the full FAQ remain readable without JavaScript.

## Implementation audit — October 2, 2026

Checked the running app at port 4100 and source files `src/api/routes/ui.route.ts`, `src/api/schemas/search.schema.ts`, `src/search/search-service.ts`, `src/documents/document-store.ts`, and `src/parsers/registry.ts`.

Hybrid is the default. Semantic and Lexical modes, Match case for Lexical, weaker-result separation, optional AI answers, embedded viewers, and recent-file history are implemented. The parser registry additionally accepts Markdown and HTML through the API; the homepage advertises the narrower, verified app file-picker list. Reset and Clear history have separate effects and are documented separately. No old capacity-eviction or no-generated-answer claims remain.

## Implementation audit — October 3, 2026

Checked against the application's source (`src/api/routes/ui.route.ts`, `src/search/search-service.ts`, `src/search/lexical-find.ts`, `src/search/built-in/`, `src/auth/hooks.ts`, `src/documents/document-store.ts`) and its running UI.

Changed since the October 2 audit, and updated here: **Lexical is now Ctrl+F** (every occurrence in order, part of a word counts, Match case optional, no ranking, no scores, no Answer); **answers are built in by default** (a sentence, value or table cell taken word for word from the document, no AI or key, shown only when confident, otherwise the Answer label is struck through with the reason on hover), and an AI provider is optional and bring-your-own; **sign-in is optional** on the hosted app (needed only for your own AI provider and the account page), with private per-browser documents, `dl_anon` and `dl_session` cookies, encrypted provider keys, and self-service account deletion; the app **opens at the empty upload screen** (no automatic reload of the last document; pick from History). The status chip reads "Built-in (no AI)" when no provider is in use. Privacy, terms, the FAQ, the guide pages and the demo were revised to match. Verified claims only: nothing above promises answer accuracy, and answers are described as checkable against the highlighted source.

## Implementation audit — October 5, 2026

Checked against the application's source (`src/api/routes/ask.route.ts`, `src/search/ask.ts`, `src/api/routes/ui.route.ts`, `src/api/routes/settings.route.ts`) and its running UI.

New in the app, and added here as the guide page `ask-questions-about-a-document` (plus a "Go deeper" card, FAQ entries, related links and a privacy sentence): **Ask**. A Search | Ask choice beside the query box switches the same text box between finding passages and asking the AI provider a question about the **whole document**. Ask needs an active AI provider (your own key; an account on the hosted app) and is greyed out otherwise. The document is sent in full, up to a size limit (default 100,000 characters, chosen per person in Settings → Ask → Largest document from 50,000 / 100,000 / 200,000 / 400,000; an over-limit document is refused with a message, never cut short). The reply is AI-written plain text with no highlighted source passage, so the guide tells people to use Search to check it, and promises no accuracy. Search and Ask have separate collapsible result areas. Settings are saved with the account (hosted) or in the browser (local). Do not describe Ask as available in the interactive demo: the demo has no AI calls.
