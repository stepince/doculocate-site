// Prepared examples from one fictional document. No live retrieval happens here.
const examples = {
  termination: {
    heading: 'Termination', page: 37, section: '12.2',
    passage: 'In the event Customer elects to discontinue Services prior to expiration of the Initial Term, Customer shall pay an amount equal to the remaining monthly charges.',
    highlight: 'discontinue Services prior to expiration of the Initial Term',
    before: '12. Termination\n12.1 The parties may end this agreement in accordance with the conditions below.',
    after: '12.3 The obligations set out in this section are subject to the exceptions in Section 13.',
    note: '“Early termination fees” never appears in this passage. The meaning does.',
  },
  liability: {
    heading: 'Customer data', page: 28, section: '9.4',
    passage: 'Provider shall indemnify Customer against losses arising from unauthorized disclosure or destruction of Customer Data.',
    highlight: 'indemnify Customer against losses arising from unauthorized disclosure or destruction of Customer Data',
    before: '9. Customer data\n9.3 The parties will notify each other promptly when an incident affecting Customer Data is identified.',
    after: '9.5 The obligations in this section remain subject to the limitations and exclusions stated elsewhere in this agreement.',
    note: 'Your question and the source use different words. The result points to the related idea.',
  },
  notice: {
    heading: 'Written notification', page: 38, section: '12.5',
    passage: 'A party electing to discontinue Services must deliver written notification to the other party no fewer than thirty calendar days before the intended effective date.',
    highlight: 'deliver written notification to the other party no fewer than thirty calendar days',
    before: '12. Written notification\n12.4 All communications under this section must be delivered to the designated contract representative.',
    after: '12.6 Receipt of notification does not waive any obligations that have already accrued.',
    note: '“Notice period” can be expressed as “written notification” and “thirty calendar days.”',
  },
};
let activeExample = 'termination';
const query = document.querySelector('#example-query');
const results = document.querySelector('#results');
const dialog = document.querySelector('#source-dialog');
function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
function renderExample(key) {
  const item = examples[key];
  if (!item) return;
  activeExample = key;
  query.value = key;
  document.querySelectorAll('[data-example]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.example === key)));
  const card = element('article', 'result');
  const top = element('div', 'result-top');
  const detail = element('div');
  detail.append(element('h3', '', `${item.heading} — Page ${item.page}`), element('p', '', 'Master-Service-Agreement.pdf'));
  const marker = element('span', 'passage-marker', '↳');
  marker.setAttribute('aria-hidden', 'true');
  top.append(marker, detail, element('span', 'relevance', 'High relevance'));
  const quote = element('blockquote');
  const [before, after] = item.passage.split(item.highlight);
  quote.append(document.createTextNode('“' + before), element('mark', '', item.highlight), document.createTextNode(after + '”'));
  const bottom = element('div', 'result-bottom');
  const button = element('button', 'text-link', 'View in document ↗');
  button.type = 'button';
  button.dataset.source = '';
  bottom.append(element('span', '', `Section ${item.section} · Original source passage`), button);
  card.append(top, quote, bottom);
  results.replaceChildren(card);
  document.querySelector('#results-status').textContent = `Relevant passage found · Page ${item.page}`;
  document.querySelector('#meaning-note').textContent = item.note;
}
function openSource(item) {
  document.querySelector('#source-title').textContent = 'Master-Service-Agreement.pdf';
  document.querySelector('#source-location').textContent = `${item.heading} · Page ${item.page} · Section ${item.section}`;
  document.querySelector('#source-context-before').textContent = item.before;
  document.querySelector('#source-passage').textContent = item.passage;
  document.querySelector('#source-context-after').textContent = item.after;
  dialog.showModal();
}
query.addEventListener('change', () => renderExample(query.value));
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => renderExample(button.dataset.example)));
results.addEventListener('click', event => { if (event.target.closest('[data-source]')) openSource(examples[activeExample]); });
document.querySelector('#evidence-source').addEventListener('click', () => openSource(examples.termination));
document.querySelector('#liability-example').addEventListener('click', () => renderExample('liability'));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});
