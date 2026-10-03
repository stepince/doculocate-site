// Content for the SEO pages. `node generate-pages.mjs` renders each entry to <slug>/index.html.
// Keep claims limited to what the application does (see README "Implementation audit").
export const pages = [
  {
    slug: 'semantic-document-search',
    nav: 'Semantic search',
    title: 'Semantic Document Search — Find Passages by Meaning | DocuLocate',
    description: 'Semantic document search finds the passage you mean, even when it uses different words. See how it works and when keyword search is the better choice.',
    eyebrow: 'GUIDE',
    h1: 'Semantic document search',
    lead: 'Semantic document search finds the passages that match what you <em>mean</em>, not only the words you typed. Describe what you are looking for, and get the relevant passage back, even if the author phrased it differently.',
    sections: [
      {
        h2: 'How semantic search works',
        html: `<p>Keyword search asks, “Does this text contain these characters?” Semantic search asks, “Which passage is about the same thing as this question?”</p>
<p>Semantic search systems typically split a document into passages and turn each one into a numerical representation of its meaning. Your query gets the same treatment. The passages whose meaning sits closest to the query are ranked first.</p>
<p>That is why a question in everyday language can lead to formal, technical, or legal wording in the source.</p>`
      },
      {
        h2: 'An example',
        html: `<p>Suppose you search a service agreement for this:</p>
<div class="seo-example"><p class="mini-label">YOU SEARCH</p><p class="seo-query">Can I cancel early?</p><p class="mini-label">POSSIBLE SOURCE PASSAGE</p><blockquote>“Customer may <mark>discontinue Services prior to expiration of the Initial Term</mark>…”</blockquote><span class="source-line">Illustrative clause · review the full terms in context</span></div>
<p>The document never says “cancel” or “early.” An exact-match search for those words finds nothing. A semantic search connects “cancel early” with “discontinue … prior to expiration.”</p>`
      },
      {
        h2: 'When keyword search is still the better tool',
        html: `<p>Meaning-based search is not always the right choice. Use exact matching when you are looking for:</p>
<ul><li>a name, ID, invoice number, or section number</li><li>a quoted phrase or a defined term</li><li>a specific capitalization or spelling</li></ul>
<p>DocuLocate offers three search types so you can pick the right one for the question:</p>
<ul><li><strong>Hybrid</strong> (the default) combines meaning and keyword matches.</li><li><strong>Semantic</strong> focuses on meaning.</li><li><strong>Lexical</strong> focuses on words, with an optional Match case control.</li></ul>
<p>Switching modes does not change the active document.</p>`
      },
      {
        h2: 'Semantic search in DocuLocate',
        html: `<p>DocuLocate searches <strong>one document at a time</strong>. Upload a PDF, Word (.docx), text, Excel (.xlsx or .xls), or CSV file, then describe what you need.</p>
<ul><li>Results show the matching passage or spreadsheet row, with a relevance indication.</li><li>Selecting a result highlights its location in the viewer, so you can read it in context.</li><li>Weaker results are shown separately as lower-confidence matches. If there is no strong match, the app says so.</li></ul>
<p>Relevance is a guide, not a verdict. Always read the source passage before you rely on it.</p>
<p>When an AI provider is configured, the app can also show a short generated answer linked to its supporting passage. This is optional, and search works without it. Read the <a href="/privacy/">privacy details</a> to see what is sent to a provider.</p>`
      },
      {
        h2: 'What to know before you start',
        html: `<ul><li><strong>Scanned PDFs:</strong> a PDF needs extractable text. Image-only scans need OCR first, and DocuLocate does not perform OCR.</li><li><strong>Specific questions work best.</strong> “What happens if I end the agreement before the term is over?” usually beats a single word.</li><li><strong>If nothing looks right,</strong> rephrase the query or switch search type.</li></ul>`
      }
    ],
    faq: [
      ['What is semantic document search?', 'Semantic document search finds passages based on their meaning rather than exact wording. You describe what you want to find, and the search looks for related information in the document.'],
      ['Is semantic search the same as AI chat?', 'No. Semantic search returns the passages in your document that best match your query, so you can read the source yourself. DocuLocate can optionally show a short generated answer when an AI provider is configured, but it is not a general-purpose chat tool.'],
      ['Do I need to use the same words as the document?', 'No. Use natural language to describe the information you need. Specific questions and clear concepts tend to find more relevant passages.'],
      ['Does semantic search replace keyword search?', 'Not entirely. Keyword search is better for exact names, numbers, and phrases. DocuLocate’s default Hybrid mode combines both, and Lexical mode is available when you want words only.']
    ],
    related: ['ctrl-f-alternative']
  },
  {
    slug: 'ctrl-f-alternative',
    nav: 'Ctrl+F alternative',
    title: 'A Better Alternative to Ctrl+F for Long Documents | DocuLocate',
    description: 'Ctrl+F only finds exact text. Search a document by meaning instead and jump to the passage you need, in PDFs, Word files, text, and spreadsheets.',
    eyebrow: 'GUIDE',
    h1: 'A better alternative to Ctrl+F for long documents',
    lead: 'Ctrl+F is great when you know the exact words. It is much less helpful when you know the question but not the author’s wording. DocuLocate lets you describe what you need and jumps to the passage that answers it.',
    sections: [
      {
        h2: 'Where Ctrl+F falls short',
        html: `<p>Ctrl+F (or Cmd+F) looks for a string of characters. That works well for names and numbers, and it breaks down in a few common situations:</p>
<ul><li><strong>Different wording.</strong> You search “cancel” and the document says “terminate” or “discontinue.”</li><li><strong>You have to guess the term.</strong> Several searches later, you are still trying synonyms.</li><li><strong>Too many hits.</strong> A common word appears 200 times and none of the hits is the one you want.</li><li><strong>Long documents and workbooks.</strong> Finding the right spot in a 48-page agreement or a multi-sheet spreadsheet by exact words alone is slow.</li></ul>`
      },
      {
        h2: 'Search by meaning instead',
        html: `<p>With DocuLocate you type what you are looking for, in your own words:</p>
<div class="seo-example"><p class="mini-label">CTRL+F</p><p class="seo-query">Can I cancel early? <span class="seo-miss">→ No matches</span></p><p class="mini-label">DOCULOCATE</p><blockquote><mark>“…Customer elects to discontinue Services prior to expiration of the Initial Term…”</mark></blockquote><span class="source-line">Illustrative example · review the full terms in context</span></div>
<p>The result is the relevant source passage, highlighted in the document viewer, so you can read it in context rather than trusting a summary.</p>`
      },
      {
        h2: 'Ctrl+F vs. DocuLocate',
        html: `<div class="seo-table-wrap"><table class="seo-table"><thead><tr><th scope="col"></th><th scope="col">Ctrl+F</th><th scope="col">DocuLocate</th></tr></thead><tbody>
<tr><th scope="row">Finds</th><td>Exact text you type</td><td>Passages related to what you describe, plus keyword matches in Hybrid or Lexical mode</td></tr>
<tr><th scope="row">Best for</th><td>Known words, names, numbers</td><td>Questions where you don’t know the wording</td></tr>
<tr><th scope="row">Result</th><td>Every occurrence in order</td><td>Passages ranked by relevance, with weaker matches separated</td></tr>
<tr><th scope="row">Formats</th><td>Depends on the app you use</td><td>PDF, DOCX, TXT, XLSX/XLS, CSV</td></tr>
<tr><th scope="row">Source</th><td>Highlights the word</td><td>Highlights the passage or spreadsheet row in a viewer</td></tr>
</tbody></table></div>`
      },
      {
        h2: 'Keep Ctrl+F for what it does best',
        html: `<p>You do not have to give up exact search. When you need a specific name, number, or phrase, choose <strong>Lexical</strong> search in DocuLocate and turn on <strong>Match case</strong> if capitalization matters. For everything else, <strong>Hybrid</strong>, the default, combines meaning and keyword matches.</p>`
      },
      {
        h2: 'Queries that work well',
        html: `<ul><li>“what happens if I end the agreement early?”</li><li>“when does a purchase need approval?”</li><li>“how does the system recover from a failure?”</li><li>“what limitations affected the findings?”</li></ul>
<p>Prefer specific questions to single words. If the first results are off, rephrase or switch search type.</p>`
      }
    ],
    faq: [
      ['Is DocuLocate a replacement for Ctrl+F?', 'It is an alternative for the moments when exact text search fails. DocuLocate also has a Lexical mode for keyword searches, but it searches one uploaded document in its own viewer, not the page you happen to have open.'],
      ['Can it search PDFs and spreadsheets?', 'Yes. The app accepts PDF, Word (.docx), plain text, Excel (.xlsx and .xls), and CSV files. PDFs need extractable text, because image-only scans need OCR first and DocuLocate does not perform OCR.'],
      ['What if the answer isn’t in the document?', 'The app can report that no strong match was found and show lower-confidence matches separately. Try rephrasing the query or changing the search type, then review the source yourself.']
    ],
    related: ['semantic-document-search']
  }
];

export const siteUrl = 'https://doculocate.com';
