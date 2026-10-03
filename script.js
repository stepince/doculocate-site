// Fictional, prepared examples. No file upload, retrieval model, or AI calls run on this page.
// Each example mirrors what the application shows: a viewer for the document, ranked result cards with a
// score, and a highlight that follows the selected result. `find` locates a result's passage inside the viewer.
const samples = {
  pdf: {
    name: 'Master-Service-Agreement.pdf', type: 'PDF', icon: '', meta: '48 pages · 612 KB', unit: 'passage',
    queries: { hybrid: 'early termination charges', semantic: 'What happens if I end the agreement early?', lexical: 'remaining monthly charges' },
    view: { kind: 'pages', pages: [
      { n: 36, blocks: [
        { k: 'h', t: '11. Payment terms' },
        { k: 'p', t: '11.1 Customer shall pay all undisputed invoices within thirty (30) days of the invoice date.' },
        { k: 'p', t: '11.2 Charges not paid when due accrue interest at one percent (1%) per month until paid in full.' },
      ] },
      { n: 37, blocks: [
        { k: 'h', t: '12. Termination' },
        { k: 'p', t: '12.1 Either party may terminate this Agreement for material breach if the breach is not cured within thirty (30) days of written notice.' },
        { k: 'p', t: '12.2 In the event Customer elects to discontinue Services prior to expiration of the Initial Term, Customer shall pay an amount equal to the remaining monthly charges.' },
        { k: 'p', t: '12.3 The obligations set out in this section are subject to the exceptions in Section 13.' },
      ] },
    ] },
    results: [
      { find: '12.2 In the event', scores: { hybrid: 0.94, semantic: 0.91, lexical: 0.88 } },
      { find: '12.1 Either party', scores: { hybrid: 0.57, semantic: 0.62, lexical: 0.4 } },
      { find: '11.2 Charges not paid', scores: { hybrid: 0.51, semantic: 0.48, lexical: 0.3 } },
    ],
  },
  docx: {
    name: 'Purchase-Policy.docx', type: 'DOC', icon: 'word', meta: '34 KB', unit: 'passage',
    queries: { hybrid: 'purchase approval threshold', semantic: 'When do I need permission before buying something?', lexical: 'written authorization' },
    view: { kind: 'doc', blocks: [
      { k: 'h1', t: 'Purchasing policy' },
      { k: 'h2', t: '1. Purpose' },
      { k: 'p', t: 'This policy explains how staff request, approve, and record purchases made with company funds.' },
      { k: 'h2', t: '2. Purchase approvals' },
      { k: 'p', t: 'Staff should confirm the business need and available budget before placing an order.' },
      { k: 'p', t: 'Any purchase exceeding $2,500 requires written authorization from the department manager before an order is placed.' },
      { k: 'p', t: 'Keep the authorization with the order record for subsequent review.' },
      { k: 'h2', t: '3. Approval limits' },
      { k: 'th', cells: ['Role', 'Spending limit'] },
      { k: 'tr', cells: ['Team lead', '$500'] },
      { k: 'tr', cells: ['Department manager', '$2,500'] },
      { k: 'tr', cells: ['Finance director', '$10,000'] },
      { k: 'h2', t: '4. Emergency purchases' },
      { k: 'p', t: 'In an emergency, a team lead may approve a purchase up to $1,000 and must report it to the department manager within two business days.' },
    ] },
    results: [
      { find: 'Any purchase exceeding', scores: { hybrid: 0.93, semantic: 0.9, lexical: 0.86 } },
      { find: 'Department manager | $2,500', scores: { hybrid: 0.61, semantic: 0.66, lexical: 0.35 } },
      { find: 'In an emergency', scores: { hybrid: 0.52, semantic: 0.5, lexical: 0.3 } },
    ],
  },
  sheet: {
    name: 'Fees-Schedule.xlsx', type: 'XLS', icon: 'sheet', meta: '2 sheets · 9 rows · 19 KB', unit: 'row',
    queries: { hybrid: 'late payment fee', semantic: 'What will I owe if I pay rent late?', lexical: 'Late payment fee' },
    view: { kind: 'sheet', sheets: [
      { name: 'Fees', columns: ['Item', 'Amount', 'When due', 'Notes'], rows: [
        ['Monthly rent', '$1,850.00', 'First of each month', 'Includes one assigned parking space'],
        ['Security deposit', '$1,850.00', 'At signing', 'Refundable within 30 days of move-out'],
        ['Late payment fee', '$50.00', 'After five days', ''],
        ['Returned payment fee', '$35.00', 'Per occurrence', 'Bank charges may also apply'],
        ['Pet deposit', '$300.00', 'Before pet arrives', 'Written consent required'],
      ] },
      { name: 'Tenants', columns: ['Tenant', 'Unit', 'Lease end', 'Status'], rows: [
        ['Alex J. Morgan', '5B', 'Mar 31, 2027', 'Active'],
        ['Priya Natarajan', '2A', 'Aug 31, 2026', 'Active'],
        ['Marcus Webb', '3C', 'May 31, 2025', 'Expired'],
        ['Elena Rossi', '1D', 'Dec 31, 2026', 'Active'],
      ] },
    ] },
    results: [
      { find: 'Late payment fee', sheet: 'Fees', scores: { hybrid: 0.95, semantic: 0.92, lexical: 0.9 } },
      { find: 'Returned payment fee', sheet: 'Fees', scores: { hybrid: 0.66, semantic: 0.7, lexical: 0.38 } },
      { find: 'Security deposit', sheet: 'Fees', scores: { hybrid: 0.52, semantic: 0.5, lexical: 0.3 } },
    ],
  },
  text: {
    name: 'Operations-Notes.txt', type: 'TXT', icon: 'text', meta: '3 KB', unit: 'passage',
    queries: { hybrid: 'failed deployment recovery', semantic: 'How do we get back online after a bad release?', lexical: 'last healthy version' },
    view: { kind: 'text', blocks: [
      { k: 'p', t: 'SERVICE HEALTH' },
      { k: 'p', t: 'Check service health immediately after every deployment.' },
      { k: 'p', t: 'RECOVERY' },
      { k: 'p', t: 'If a release fails its health checks, restore the last healthy version and confirm that traffic is flowing before investigating the failed release.' },
      { k: 'p', t: 'Record the incident and attach the deployment logs to the internal review.' },
      { k: 'p', t: 'COMMUNICATION' },
      { k: 'p', t: 'Announce every rollback in the #ops channel and update the status page within fifteen minutes.' },
    ] },
    results: [
      { find: 'If a release fails', scores: { hybrid: 0.92, semantic: 0.9, lexical: 0.85 } },
      { find: 'Announce every rollback', scores: { hybrid: 0.63, semantic: 0.64, lexical: 0.3 } },
      { find: 'Check service health', scores: { hybrid: 0.51, semantic: 0.5, lexical: 0.3 } },
    ],
  },
};

const $ = id => document.getElementById(id);
const documentSelect = $('demo-document');
const modeSelect = $('demo-mode');
const queryInput = $('demo-query');

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== '') node.textContent = text;
  return node;
}

// ---------- Resolve each example's results against its viewer content ----------

function blockText(block) { return block.cells ? block.cells.join(' | ') : block.t; }
function rowText(sheet, row) { return '[' + sheet.name + '] ' + sheet.columns.map((c, i) => row[i] ? c + ': ' + row[i] : '').filter(Boolean).join(' | '); }

/** Fills in each result's text, location label and the viewer content it points at. */
function resolve(item) {
  const v = item.view;
  item.results.forEach(r => {
    if (v.kind === 'sheet') {
      const sheet = v.sheets.find(s => s.name === r.sheet);
      const rowIdx = sheet.rows.findIndex(row => row.some(cell => cell === r.find));
      r.sheetRef = sheet; r.rowIdx = rowIdx;
      r.text = rowText(sheet, sheet.rows[rowIdx]);
      r.location = sheet.name + ' · Row ' + (rowIdx + 2);
      return;
    }
    const blocks = v.kind === 'pages' ? v.pages.flatMap(p => p.blocks.map(b => ({ b, page: p.n }))) : v.blocks.map(b => ({ b, page: 0 }));
    const hit = blocks.find(x => blockText(x.b).includes(r.find));
    r.block = hit.b; r.text = blockText(hit.b);
    r.location = v.kind === 'pages' ? 'Page ' + hit.page : 'Source passage';
  });
}
Object.values(samples).forEach(resolve);

// ---------- State ----------

let results = [];      // the cards currently shown, in rank order
let current = -1;      // index of the selected result, or -1
let visible = false;   // whether a result's highlight is showing in the viewer
let marked = null;     // what to un-highlight next

const sample = () => samples[documentSelect.value];
const scoreOf = r => r.scores[modeSelect.value];
const relevanceOf = score => score >= 0.55 ? 'high' : score >= 0.4 ? 'medium' : 'low';

// ---------- Viewer ----------

function buildViewer() {
  const item = sample(); const v = item.view; const body = $('viewer-body');
  body.replaceChildren();
  $('viewer-type').textContent = item.type;
  $('viewer-type').className = 'file-icon ' + item.icon;
  $('viewer-name').textContent = item.name;
  $('viewer-meta').textContent = item.meta;
  marked = null;

  if (v.kind === 'pages') {
    v.pages.forEach(page => {
      const sheet = el('div', 'ad-page');
      page.blocks.forEach(b => { b.el = el(b.k === 'h' ? 'h4' : 'p', '', b.t); sheet.append(b.el); });
      sheet.append(el('div', 'ad-page-foot', '— ' + page.n + ' —'));
      body.append(sheet);
    });
  } else if (v.kind === 'doc') {
    const article = el('article', 'ad-docx');
    let table = null; let tbody = null;
    v.blocks.forEach(b => {
      if (b.k === 'th' || b.k === 'tr') {
        if (!table) { table = el('table'); tbody = el('tbody'); table.append(tbody); article.append(table); }
        const tr = el('tr');
        b.cells.forEach(c => tr.append(el(b.k === 'th' ? 'th' : 'td', '', c)));
        tbody.append(tr); b.el = tr;
        return;
      }
      table = null;
      b.el = el(b.k, '', b.t); article.append(b.el);
    });
    body.append(article);
  } else if (v.kind === 'text') {
    const pane = el('div', 'ad-text');
    v.blocks.forEach(b => { b.el = el('p', '', b.t); pane.append(b.el); });
    body.append(pane);
  } else {
    const pane = el('div', 'ad-sheet');
    const tabs = el('div', 'ad-tabs'); tabs.setAttribute('role', 'tablist');
    v.sheets.forEach((sheet, i) => {
      const tab = el('button', 'ad-tab' + (i === 0 ? ' active' : ''), sheet.name);
      tab.type = 'button'; tab.dataset.sheet = sheet.name; tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(i === 0));
      tab.addEventListener('click', () => showSheet(sheet.name));
      tabs.append(tab);
    });
    pane.append(tabs);
    v.sheets.forEach((sheet, i) => {
      const panel = el('div', 'ad-sheet-panel'); panel.dataset.sheet = sheet.name; panel.hidden = i !== 0;
      const scroll = el('div', 'ad-sheet-scroll'); const table = el('table', 'ad-grid');
      const head = el('tr'); head.append(el('th', 'rownum', '#'));
      sheet.columns.forEach(c => { const th = el('th', '', c); th.scope = 'col'; head.append(th); });
      const thead = el('thead'); thead.append(head); table.append(thead);
      const tbody = el('tbody');
      sheet.rows.forEach((row, ri) => {
        const tr = el('tr'); tr.append(el('th', 'rownum', String(ri + 2)));
        row.forEach(cell => tr.append(el('td', '', cell)));
        tbody.append(tr); row.el = tr;
      });
      table.append(tbody); scroll.append(table); panel.append(scroll); pane.append(panel);
    });
    body.append(pane);
  }
}

function showSheet(name) {
  document.querySelectorAll('#viewer-body .ad-tab').forEach(t => { const on = t.dataset.sheet === name; t.classList.toggle('active', on); t.setAttribute('aria-selected', String(on)); });
  document.querySelectorAll('#viewer-body .ad-sheet-panel').forEach(p => { p.hidden = p.dataset.sheet !== name; });
}

function clearHighlight() {
  if (!marked) return;
  if (marked.mark) marked.block.el.textContent = marked.block.t;
  if (marked.cells) marked.cells.forEach(td => td.classList.remove('ad-hit'));
  marked = null;
}

/** Highlights a result's source in the viewer, then scrolls it into view: first the page brings the viewer on screen, then the viewer's own scroll area centers the match (the same two-step the app uses, so nested scrolling doesn't leave it out of sight). */
function highlight(r) {
  clearHighlight();
  let target;
  if (r.sheetRef) {
    showSheet(r.sheetRef.name);
    const cells = Array.from(r.sheetRef.rows[r.rowIdx].el.querySelectorAll('td'));
    cells.forEach(td => td.classList.add('ad-hit'));
    marked = { cells }; target = cells[0];
  } else if (r.block.cells) {
    const cells = Array.from(r.block.el.querySelectorAll('td'));
    cells.forEach(td => td.classList.add('ad-hit'));
    marked = { cells }; target = cells[0];
  } else {
    const mark = el('mark', 'ad-mark', r.block.t);
    r.block.el.replaceChildren(mark);
    marked = { mark: true, block: r.block }; target = mark;
  }
  const body = $('viewer-body');
  $('demo-viewer').scrollIntoView({ block: 'nearest', behavior: 'auto' });
  const top = target.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
  body.scrollTop = Math.max(0, Math.min(top - body.clientHeight / 2 + target.offsetHeight / 2, body.scrollHeight - body.clientHeight));
  target.scrollIntoView({ block: 'center', behavior: 'auto' });
}

// ---------- Results ----------

function syncActive() {
  document.querySelectorAll('#results .ad-card').forEach((card, i) => {
    const on = visible && i === current;
    card.classList.toggle('active', on);
    card.setAttribute('aria-pressed', String(on));
  });
}

function updateCount() {
  $('demo-count').textContent = (current >= 0 ? current + 1 : '–') + ' / ' + results.length;
}

function goTo(index) {
  if (!results.length) return;
  current = ((index % results.length) + results.length) % results.length;
  visible = true;
  highlight(results[current]);
  syncActive(); updateCount();
}

function hideHighlight() {
  visible = false; current = -1;
  clearHighlight();
  syncActive(); updateCount();
}

/** A card: jump and highlight, or — if that result's highlight is already showing — turn it off. */
function toggleResult(index) {
  if (visible && current === index) hideHighlight(); else goTo(index);
}

function placeholder(icon, message) {
  const wrap = el('div', 'ad-placeholder'); const i = el('span', 'icon', icon); i.setAttribute('aria-hidden', 'true');
  wrap.append(i, el('p', '', message));
  return wrap;
}

function scoreChip(score) {
  const chip = el('span', 'score', 'Score ' + score.toFixed(2) + ' · hybrid retrieval');
  chip.title = 'Hybrid retrieval score (0–1): semantic + keyword match, normalized within this query’s candidates — not comparable across searches.';
  return chip;
}

function cardFor(r, i) {
  const item = sample(); const score = scoreOf(r); const rel = relevanceOf(score);
  const card = el('article', 'ad-card'); card.tabIndex = 0; card.setAttribute('role', 'button'); card.setAttribute('aria-pressed', 'false');
  card.setAttribute('aria-label', 'Show ' + item.name + ', ' + r.location + ', in the viewer');
  const top = el('div', 'ad-card-top'); const detail = el('div');
  detail.append(el('h3', '', item.name), el('p', '', r.location));
  top.append(el('span', 'file-icon ' + item.icon, item.type), detail, el('span', 'ad-rel ' + rel, rel + ' relevance'));
  const quote = el('blockquote', '', '“' + r.text + '”');
  const bottom = el('div', 'ad-card-bottom'); bottom.append(el('span', '', 'Click to view in document'), scoreChip(score));
  card.append(top, quote, bottom);
  card.addEventListener('click', () => toggleResult(i));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleResult(i); } });
  return card;
}

function render() {
  const item = sample(); const mode = modeSelect.value;
  queryInput.value = item.queries[mode];
  $('demo-clear-query').hidden = false;
  const lexical = mode === 'lexical';
  $('demo-case').disabled = !lexical;
  $('demo-case-label').classList.toggle('disabled', !lexical);
  if (!lexical) $('demo-case').checked = false;

  // Rank by this mode's score; Lexical only keeps passages that literally contain the query (exact case when Match case is on).
  results = item.results.slice().sort((a, b) => b.scores[mode] - a.scores[mode]);
  if (lexical) {
    const q = item.queries.lexical;
    const exact = $('demo-case').checked;
    results = results.filter(r => exact ? r.text.includes(q) : r.text.toLowerCase().includes(q.toLowerCase()));
  } else {
    results = results.filter(r => r.scores[mode] >= 0.5);
  }

  buildViewer();
  current = -1; visible = false;

  const list = $('results'); list.replaceChildren();
  if (!results.length) list.append(placeholder('∅', 'No strong semantic matches found. Try rephrasing your search.'));
  else results.forEach((r, i) => list.append(cardFor(r, i)));
  $('results-status').textContent = results.length ? results.length + ' relevant ' + item.unit + (results.length === 1 ? '' : 's') : '';
  $('results-sort').hidden = !results.length;

  const hasResults = results.length > 0;
  $('demo-prev').disabled = !hasResults; $('demo-next').disabled = !hasResults;
  updateCount(); syncActive();
  if (lexical && hasResults) goTo(0); // like the app: Lexical jumps straight to the first occurrence
}

/** Clear: removes the highlight and results but keeps the query, search type and document. */
function clearResults() {
  results = []; current = -1; visible = false;
  clearHighlight();
  $('results').replaceChildren(placeholder('⌕', 'Search by meaning — try words that don’t appear in the document.'));
  $('results-status').textContent = ''; $('results-sort').hidden = true;
  $('demo-prev').disabled = true; $('demo-next').disabled = true;
  updateCount(); syncActive();
}

// ---------- Wiring ----------

documentSelect.addEventListener('change', render);
modeSelect.addEventListener('change', render);
$('demo-search').addEventListener('click', render);
$('demo-case').addEventListener('change', render);
$('demo-clear').addEventListener('click', clearResults);
$('demo-reset').addEventListener('click', () => {
  documentSelect.value = 'pdf'; modeSelect.value = 'hybrid'; $('demo-case').checked = false;
  render();
});
$('demo-clear-query').addEventListener('click', () => { queryInput.value = ''; $('demo-clear-query').hidden = true; });
$('demo-prev').addEventListener('click', () => goTo(current < 0 ? results.length - 1 : current - 1));
$('demo-next').addEventListener('click', () => goTo(current + 1));

// Drag handle under the viewer (same behavior as the app's).
(function () {
  const handle = $('viewer-resize'); const body = $('viewer-body');
  let startY = 0; let startHeight = 0;
  const move = e => { body.style.height = Math.min(640, Math.max(120, startHeight + e.clientY - startY)) + 'px'; };
  const up = e => { handle.classList.remove('dragging'); handle.releasePointerCapture?.(e.pointerId); handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up); handle.removeEventListener('pointercancel', up); };
  handle.addEventListener('pointerdown', e => {
    e.preventDefault(); handle.setPointerCapture(e.pointerId); handle.classList.add('dragging');
    startY = e.clientY; startHeight = body.getBoundingClientRect().height;
    handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up); handle.addEventListener('pointercancel', up);
  });
})();

render();
