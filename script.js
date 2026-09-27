// Prepared examples explain the product; this page does not perform live semantic search.
const examples = {
  cancel: [
    { name: 'Master-Service-Agreement.pdf', type: 'pdf', label: 'PDF', location: 'Page 42', passage: 'Either party may discontinue this agreement prior to the expiration date without incurring an early cancellation charge, provided written notice is delivered at least thirty days in advance.', highlight: 'discontinue this agreement prior to the expiration date without incurring an early cancellation charge', before: '12. Termination\n12.1 Either party may terminate this agreement upon material breach, subject to the notice and cure periods set out below.', after: '12.3 All obligations accrued before the effective date of termination remain payable in accordance with this agreement.' },
    { name: 'Customer-Amendment.docx', type: 'word', label: 'DOC', location: 'Source passage', passage: 'Customer may elect not to continue the service without additional fees when the revised service terms materially reduce the agreed scope of delivery.', highlight: 'elect not to continue the service without additional fees', before: '8. Service amendments\n8.2 Changes to the scope of service will be communicated in writing before taking effect.', after: '8.4 Customer must provide written notice of this election within thirty days of receiving the revised terms.' },
  ],
  delay: [
    { name: 'Customer-Amendment.docx', type: 'word', label: 'DOC', location: 'Source passage', passage: 'Where the supplier misses a delivery milestone, the customer may request that the acceptance period be extended by an equivalent number of business days.', highlight: 'the customer may request that the acceptance period be extended', before: '4. Delivery and acceptance\nThe parties will agree on a schedule for each deliverable before work begins.', after: 'Any revised acceptance date must be recorded in writing and shared with the project owners.' },
    { name: 'Service-Policy.md', type: 'text', label: 'MD', location: 'Heading: Delivery exceptions', passage: 'If a shipment arrives later than the agreed date, buyers can ask for more time to complete their review before the order is deemed accepted.', highlight: 'buyers can ask for more time to complete their review', before: 'Delivery exceptions\nThe standard review window begins when the complete order is received.', after: 'Support should record the revised review deadline and notify the assigned account owner.' },
  ],
  data: [
    { name: 'Master-Service-Agreement.pdf', type: 'pdf', label: 'PDF', location: 'Page 38', passage: 'Within thirty days of termination, the supplier shall return or securely erase all customer records in its possession, except where retention is required by applicable law.', highlight: 'return or securely erase all customer records', before: '10. Customer records\nCustomer retains ownership of all records supplied during the term of this agreement.', after: 'Upon request, the supplier shall provide written confirmation that the required disposal has been completed.' },
    { name: 'Service-Policy.md', type: 'text', label: 'MD', location: 'Heading: Account closure', passage: 'Following account closure, a copy of the organization’s files is available for export for fourteen days. After this period, the files are removed from active systems.', highlight: 'the files are removed from active systems', before: 'Account closure\nAn administrator can request closure after exporting the organization’s required records.', after: 'Requests to reopen an account must be submitted before the export period ends.' },
  ],
};
let activeExample = 'cancel';
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
  if (!examples[key]) return;
  activeExample = key;
  query.value = key;
  document.querySelectorAll('[data-example]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.example === key)));
  results.replaceChildren(...examples[key].map((item, index) => {
    const card = element('article', 'result');
    const top = element('div', 'result-top');
    const detail = element('div');
    detail.append(element('h3', '', item.name), element('p', '', item.location));
    top.append(element('span', `file-icon ${item.type}`, item.label), detail, element('span', 'relevance', 'High relevance'));
    const quote = element('blockquote');
    const [before, after] = item.passage.split(item.highlight);
    quote.append(document.createTextNode('“' + before), element('mark', '', item.highlight), document.createTextNode(after + '”'));
    const bottom = element('div', 'result-bottom');
    const button = element('button', 'text-link', 'View in document ↗');
    button.type = 'button';
    button.dataset.source = index;
    bottom.append(element('span', '', 'Original source passage'), button);
    card.append(top, quote, bottom);
    return card;
  }));
  document.querySelector('#results-status').textContent = `2 relevant passages · ${key === 'cancel' ? 'cancellation' : key === 'delay' ? 'delivery delays' : 'data retention'}`;
}
function openSource(item) {
  document.querySelector('#source-title').textContent = item.name;
  document.querySelector('#source-location').textContent = item.location;
  document.querySelector('#source-context-before').textContent = item.before;
  document.querySelector('#source-passage').textContent = item.passage;
  document.querySelector('#source-context-after').textContent = item.after;
  dialog.showModal();
}
query.addEventListener('change', () => renderExample(query.value));
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => renderExample(button.dataset.example)));
results.addEventListener('click', event => {
  const button = event.target.closest('[data-source]');
  if (button) openSource(examples[activeExample][Number(button.dataset.source)]);
});
document.querySelector('#evidence-source').addEventListener('click', () => openSource(examples.cancel[0]));
document.querySelector('#collection-example').addEventListener('click', () => renderExample('delay'));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});
