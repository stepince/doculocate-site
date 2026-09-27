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

All “Try DocuLocate” links point to **https://doculocate.com/** as specified by the owner. If this marketing page is also served at that exact URL, the CTA returns to the homepage. A separate app address can be configured at build time:

```sh
DOCULOCATE_APP_URL=https://your-confirmed-app-host.example npm run build
```

The build replaces all three app links in its output. Secondary links open the on-page workflow or interactive example.

## Content

- `index.html`: hero, one-document demo, keyword comparison, three-step workflow, semantic Ctrl+F example, grounded results, four use cases, privacy, and seven FAQ answers.
- `script.js`: three prepared searches in one fictional Master Service Agreement. Source dialogs show the relevant page, section, passage, and surrounding context. No live retrieval or uploads occur in the demo.
- `styles.css`: responsive site styles; new positioning styles follow the existing base styles.
- `privacy/` and `terms/`: current processing details and website terms.
- `assets/social.svg` and `assets/social.png`: social preview artwork and rendered image.

Initial marketed formats are PDF, DOCX, and TXT. Add verified formats as static entries in `#formats` and update the FAQ and metadata together. The demo’s section names are illustrative document context, not a promise that all formats expose structured sections. Source locations are qualified as available; PDF page links depend on viewer support.

The main page deliberately omits collection, workspace, team, repository, and API messaging. New product areas can later be added as separate, substantive pages using the existing static architecture: add their files to the build, development server allowlist, and sitemap. Do not publish placeholders for future capabilities.

Privacy details remain based on the application implementation: server processing, in-memory storage, optional external-provider processing, and current access limitations. Recheck them as the app changes.

## Validation

Build and syntax checks: `npm run check && npm run build`. Check navigation targets, CTA destinations, social assets, responsive layout, all three demo searches, source dialogs, and FAQ disclosure behavior after content changes. The initial example and the full FAQ remain readable without JavaScript.
