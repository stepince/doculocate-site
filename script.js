// Fictional, prepared examples. No file upload, retrieval model, or AI calls run on this page.
const samples = {
  pdf: {
    name: 'Master-Service-Agreement.pdf', type: 'PDF', location: 'Page 37 of 48', heading: '12. Termination',
    hybrid: 'early termination charges', semantic: 'What happens if I end the agreement early?', lexical: 'remaining monthly charges',
    passage: 'In the event Customer elects to discontinue Services prior to expiration of the Initial Term, Customer shall pay an amount equal to the remaining monthly charges.',
    before: 'The parties may end this agreement in accordance with the conditions below.', after: 'The obligations set out in this section are subject to the exceptions in Section 13.',
    answer: 'Ending the services before the initial term expires requires payment of the remaining monthly charges, subject to the agreement’s exceptions.',
  },
  docx: {
    name: 'Purchase-Policy.docx', type: 'DOCX', location: 'Formatted document · source passage', heading: 'Purchase approvals',
    hybrid: 'purchase approval threshold', semantic: 'When do I need permission before buying something?', lexical: 'written authorization',
    passage: 'Any purchase exceeding $2,500 requires written authorization from the department manager before an order is placed.',
    before: 'Staff should confirm the business need and available budget before placing an order.', after: 'Keep the authorization with the order record for subsequent review.',
    answer: 'Purchases above $2,500 need written authorization from the department manager before the order is placed.',
  },
  sheet: {
    name: 'Fees-Schedule.xlsx', type: 'XLSX', location: 'Fees · Row 4', heading: 'Fees',
    hybrid: 'late payment fee', semantic: 'What will I owe if I pay rent late?', lexical: 'Late payment fee',
    passage: 'Item: Late payment fee | Amount: $50.00 | When due: After five days',
    before: '', after: '', answer: 'The listed late payment fee is $50.00, due after five days.',
  },
  text: {
    name: 'Operations-Notes.txt', type: 'TXT', location: 'Text viewer · source passage', heading: 'Service recovery',
    hybrid: 'failed deployment recovery', semantic: 'How do we get back online after a bad release?', lexical: 'last healthy version',
    passage: 'If a release fails its health checks, restore the last healthy version and confirm that traffic is flowing before investigating the failed release.',
    before: 'Check service health immediately after every deployment.', after: 'Record the incident and attach the deployment logs to the internal review.',
    answer: 'Restore the last healthy version, confirm traffic is flowing, and then investigate the failed release.',
  },
};
const $ = id => document.getElementById(id);
const documentSelect = $('demo-document');
const modeSelect = $('demo-mode');
let highlighted = false;
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function current() { return samples[documentSelect.value]; }
function viewer() {
  const item = current();
  $('viewer-name').textContent = item.name;
  $('viewer-type').textContent = item.type;
  $('viewer-location').textContent = item.location;
  const content = $('viewer-content');
  content.replaceChildren();
  if (documentSelect.value === 'sheet') {
    content.append(el('div', 'sheet-label', 'Fees · example sheet'));
    const table = el('table', 'demo-grid');
    const head = el('thead'); const header = el('tr');
    ['#', 'Item', 'Amount', 'When due'].forEach(text => { const cell = el('th', '', text); cell.scope = 'col'; header.append(cell); });
    head.append(header); table.append(head);
    const body = el('tbody');
    [['2','Monthly rent','$1,850.00','First of each month'],['3','Security deposit','$1,850.00','At signing'],['4','Late payment fee','$50.00','After five days'],['5','Returned payment fee','$35.00','Per occurrence']].forEach((row, i) => {
      const tr = el('tr', i === 2 && highlighted ? 'matched-row' : '');
      row.forEach(text => tr.append(el('td', '', text)));
      body.append(tr);
    });
    table.append(body); content.append(table);
  } else {
    content.append(el('p', 'paper-kicker', item.type === 'PDF' ? 'MASTER SERVICE AGREEMENT' : 'EXAMPLE DOCUMENT'), el('h3', '', item.heading), el('p', '', item.before));
    const passage = el('p');
    passage.append(el(highlighted ? 'mark' : 'span', '', item.passage));
    content.append(passage, el('p', '', item.after));
  }
}
function showSource() {
  highlighted = true;
  viewer();
  $('meaning-note').textContent = documentSelect.value === 'sheet' ? 'The matching row is highlighted in the spreadsheet viewer.' : 'The supporting passage is highlighted in the document viewer.';
  $('demo-viewer').focus({ preventScroll: true });
  $('demo-viewer').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
}
function render() {
  const item = current(); const mode = modeSelect.value;
  highlighted = false;
  $('demo-query').value = item[mode];
  $('demo-case').disabled = mode !== 'lexical';
  if (mode !== 'lexical') $('demo-case').checked = false;
  $('mode-note').textContent = {
    hybrid: 'Hybrid combines meaning and keyword matches. It is the app’s default search mode.',
    semantic: 'Semantic searches by meaning, so the query can use different wording from the source.',
    lexical: 'Lexical focuses on keyword matches. Match case restricts results to the exact capitalization of the query.',
  }[mode];
  const card = el('article', 'result'); const top = el('div', 'result-top'); const detail = el('div');
  detail.append(el('h3','',item.name),el('p','',item.location));
  top.append(el('span','file-icon',item.type),detail,el('span','relevance','High relevance'));
  const quote = el('blockquote','','“' + item.passage + '”');
  const bottom = el('div','result-bottom'); const button = el('button','text-link','Highlight in document ↑');
  button.type = 'button'; button.dataset.source = '';
  bottom.append(el('span','','Illustrative result'),button); card.append(top,quote,bottom);
  $('results').replaceChildren(card);
  $('results-status').textContent = `1 relevant ${documentSelect.value === 'sheet' ? 'row' : 'passage'} · ${mode} example${$('demo-case').checked ? ' · case matches' : ''}`;
  $('meaning-note').textContent = 'Select a result to see its location highlighted in the viewer above.';
  $('demo-answer-box').hidden = !$('demo-answer').checked;
  $('demo-answer-text').textContent = item.answer;
  viewer();
}
documentSelect.addEventListener('change',render);
modeSelect.addEventListener('change',render);
$('demo-search').addEventListener('click',render);
$('demo-case').addEventListener('change',render);
$('demo-answer').addEventListener('change',render);
$('results').addEventListener('click',event=>{if(event.target.closest('[data-source]'))showSource();});
$('answer-source').addEventListener('click',showSource);
$('liability-example').addEventListener('click',()=>{documentSelect.value='pdf';modeSelect.value='semantic';render();});
const dialog = $('source-dialog');
$('evidence-source').addEventListener('click',()=>{
  const item=samples.pdf;
  $('source-title').textContent=item.name;
  $('source-location').textContent=item.location;
  $('source-context-before').textContent=item.before;
  $('source-passage').textContent=item.passage;
  $('source-context-after').textContent=item.after;
  dialog.showModal();
});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
 if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();}
});
render();
