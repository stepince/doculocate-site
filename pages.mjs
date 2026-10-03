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
<ul><li><strong>Hybrid</strong> (the default) combines meaning and keyword matches.</li><li><strong>Semantic</strong> focuses on meaning.</li><li><strong>Lexical</strong> is Ctrl+F inside DocuLocate: every occurrence of the text you type, in order, with an optional Match case control.</li></ul>
<p>Switching modes does not change the active document.</p>`
      },
      {
        h2: 'Semantic search in DocuLocate',
        html: `<p>DocuLocate searches <strong>one document at a time</strong>. Upload a PDF, Word (.docx), text, Excel (.xlsx or .xls), or CSV file, then describe what you need.</p>
<ul><li>Results show the matching passage or spreadsheet row, with a relevance indication.</li><li>Selecting a result highlights its location in the viewer, so you can read it in context.</li><li>Weaker results are shown separately as lower-confidence matches. If there is no strong match, the app says so.</li></ul>
<p>Relevance is a guide, not a verdict. Always read the source passage before you rely on it.</p>
<p>For a question like “who is the tenant?”, DocuLocate can also show a short <strong>answer taken word for word from your document</strong>, linked to the passage it came from. That needs no AI and no key, and when the app is not confident it shows no answer (the Answer label appears struck through) rather than guessing. If you choose to add your own AI provider, it can write answers instead. Read the <a href="/privacy/">privacy details</a> to see what is sent to a provider.</p>`
      },
      {
        h2: 'What to know before you start',
        html: `<ul><li><strong>Scanned PDFs:</strong> a PDF needs extractable text. Image-only scans need OCR first, and DocuLocate does not perform OCR.</li><li><strong>Specific questions work best.</strong> “What happens if I end the agreement before the term is over?” usually beats a single word.</li><li><strong>If nothing looks right,</strong> rephrase the query or switch search type.</li></ul>`
      }
    ],
    faq: [
      ['What is semantic document search?', 'Semantic document search finds passages based on their meaning rather than exact wording. You describe what you want to find, and the search looks for related information in the document.'],
      ['Is semantic search the same as AI chat?', 'No. Semantic search returns the passages in your document that best match your query, so you can read the source yourself. DocuLocate can show a short answer taken word for word from the document (no AI needed), and an AI-written answer if you add your own provider, but it is not a general-purpose chat tool.'],
      ['Do I need to use the same words as the document?', 'No. Use natural language to describe the information you need. Specific questions and clear concepts tend to find more relevant passages.'],
      ['Does semantic search replace keyword search?', 'Not entirely. Keyword search is better for exact names, numbers, and phrases. DocuLocate’s default Hybrid mode combines both, and Lexical mode is available when you want words only.']
    ],
    related: ['ctrl-f-alternative', 'search-pdf']
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
<tr><th scope="row">Finds</th><td>Exact text you type</td><td>Passages related to what you describe, plus keyword matches in Hybrid mode. Lexical mode finds exact text like Ctrl+F.</td></tr>
<tr><th scope="row">Best for</th><td>Known words, names, numbers</td><td>Questions where you don’t know the wording</td></tr>
<tr><th scope="row">Result</th><td>Every occurrence in order</td><td>Passages ranked by relevance, with weaker matches separated (Lexical mode lists every occurrence in order)</td></tr>
<tr><th scope="row">Formats</th><td>Depends on the app you use</td><td>PDF, DOCX, TXT, XLSX/XLS, CSV</td></tr>
<tr><th scope="row">Source</th><td>Highlights the word</td><td>Highlights the passage or spreadsheet row in a viewer</td></tr>
</tbody></table></div>`
      },
      {
        h2: 'Keep Ctrl+F for what it does best',
        html: `<p>You do not have to give up exact search. When you need a specific name, number, or phrase, choose <strong>Lexical</strong> search in DocuLocate. It works like Ctrl+F: it finds every occurrence of the text, including part of a word, and highlights each one in the viewer. Turn on <strong>Match case</strong> if capitalization matters. For everything else, <strong>Hybrid</strong>, the default, combines meaning and keyword matches.</p>`
      },
      {
        h2: 'Queries that work well',
        html: `<ul><li>“what happens if I end the agreement early?”</li><li>“when does a purchase need approval?”</li><li>“how does the system recover from a failure?”</li><li>“what limitations affected the findings?”</li></ul>
<p>Prefer specific questions to single words. If the first results are off, rephrase or switch search type.</p>`
      }
    ],
    faq: [
      ['Is DocuLocate a replacement for Ctrl+F?', 'It is an alternative for the moments when exact text search fails. DocuLocate’s Lexical mode works like Ctrl+F for an uploaded document: every occurrence, in order, highlighted in its own viewer. It searches one uploaded document, not the page you happen to have open.'],
      ['Can it search PDFs and spreadsheets?', 'Yes. The app accepts PDF, Word (.docx), plain text, Excel (.xlsx and .xls), and CSV files. PDFs need extractable text, because image-only scans need OCR first and DocuLocate does not perform OCR.'],
      ['What if the answer isn’t in the document?', 'The app can report that no strong match was found and show lower-confidence matches separately. When a question has no answer, the Answer label is shown struck through (hover it for the reason). Try rephrasing the query or changing the search type, then review the source yourself.']
    ],
    related: ['semantic-document-search', 'search-pdf']
  },
  {
    slug: 'search-pdf',
    nav: 'Search PDFs',
    title: 'Search a PDF by Meaning — Find the Right Page | DocuLocate',
    description: 'Search a PDF in your own words and jump to the matching passage in a page viewer, even when the wording differs. Works with PDFs that have extractable text.',
    eyebrow: 'GUIDE',
    h1: 'Search a PDF by meaning',
    lead: 'Long PDFs, such as contracts, policies, manuals, and reports, are hard to search when you don’t know the exact wording. Upload one, describe what you need, and DocuLocate highlights the matching passage on its page.',
    sections: [
      {
        h2: 'Why searching a PDF is harder than it should be',
        html: `<p>A PDF reader’s find box looks for exact text. If you search for “refund” and the document says “reimbursement,” or you search “deadline” and it says “must be completed within thirty days,” you get nothing, or hits that don’t matter.</p>
<p>The longer the PDF, the more this costs you. You end up trying synonyms, scrolling, and skimming headings.</p>`
      },
      {
        h2: 'How to search a PDF with DocuLocate',
        html: `<ol><li><strong>Upload the PDF.</strong> The app prepares it for search before opening the viewer.</li><li><strong>Describe what you need,</strong> for example “who pays if the project is delayed?”</li><li><strong>Select a result.</strong> The built-in page viewer jumps to its location and highlights the passage.</li><li><strong>Read it in context.</strong> Step between matches, or open or download the original file.</li></ol>
<p>Each result shows the page it came from, when the app can determine it, plus a relevance indication.</p>`
      },
      {
        h2: 'Example: finding a termination clause',
        html: `<div class="seo-example"><p class="mini-label">YOU SEARCH</p><p class="seo-query">What happens if I end the agreement early?</p><p class="mini-label">MASTER-SERVICE-AGREEMENT.PDF · PAGE 37 · ILLUSTRATIVE</p><blockquote>“12.2 In the event Customer elects to <mark>discontinue Services prior to expiration of the Initial Term</mark>, Customer shall pay an amount equal to the remaining monthly charges.”</blockquote><span class="source-line">Fictional example · review the full terms in context</span></div>
<p>The query and the clause share almost no words, which is exactly the case where a find box fails.</p>`
      },
      {
        h2: 'Choosing a search type for a PDF',
        html: `<ul><li><strong>Hybrid</strong> is the default and works well for most questions.</li><li><strong>Semantic</strong> helps when you can describe an idea but not the wording.</li><li><strong>Lexical</strong> works like Ctrl+F and suits exact terms, such as a defined term, a name, or a section number. It finds every occurrence, including part of a word. Turn on Match case when capitalization matters.</li></ul>`
      },
      {
        h2: 'Limits to know about',
        html: `<ul><li><strong>The PDF needs extractable text.</strong> Image-only scans need OCR first, and DocuLocate does not perform OCR. If you can select and copy text in your PDF reader, it will usually work.</li><li><strong>Relevance is a guide.</strong> Read the highlighted passage and its surroundings before relying on it, especially for legal or financial decisions.</li><li><strong>One document at a time.</strong> DocuLocate searches the active document, not a folder of PDFs.</li></ul>
<p>Before you upload anything sensitive, read the <a href="/privacy/">privacy details</a>.</p>`
      }
    ],
    faq: [
      ['Can I search a scanned PDF?', 'Only if it contains extractable text. Image-only scans need OCR first, and DocuLocate does not perform OCR.'],
      ['Will it show me the page the result came from?', 'Yes. Selecting a result jumps to its location in the built-in page viewer and highlights the passage. Results show the PDF page when it is available.'],
      ['Can I search several PDFs at once?', 'No. DocuLocate searches one active document at a time. Replace the document to search another file.'],
      ['Is this a chat-with-PDF tool?', 'No. You search, review the matching passages, and inspect the source. The app can show a short answer taken word for word from the document (no AI needed), or an AI-written one if you add your own provider, but there is no general chat conversation.']
    ],
    related: ['semantic-document-search', 'search-excel-csv']
  },
  {
    slug: 'search-excel-csv',
    nav: 'Search spreadsheets',
    title: 'Search Excel and CSV Files by Meaning | DocuLocate',
    description: 'Search an Excel workbook or CSV file in plain language and jump to the matching row, with sheet tabs and highlighted rows in a grid viewer.',
    eyebrow: 'GUIDE',
    h1: 'Search an Excel or CSV file by meaning',
    lead: 'Spreadsheets hide information in rows, columns, and sheet tabs. Describe what you need in plain language, and DocuLocate highlights the matching row in a grid viewer.',
    sections: [
      {
        h2: 'Why spreadsheets are awkward to search',
        html: `<p>Excel’s find works on exact cell text, one workbook at a time. In a workbook with several sheets and hundreds of rows, you still have to guess the label someone used: “late fee,” “penalty,” “overdue charge.”</p>
<p>Row-level answers are what you usually want: the line that says what applies, to whom, and how much.</p>`
      },
      {
        h2: 'What DocuLocate does with a spreadsheet',
        html: `<ul><li>Accepts <strong>.xlsx, .xls, and .csv</strong> files.</li><li>Shows the file in a <strong>grid with sheet tabs</strong>.</li><li>Returns matching <strong>rows</strong> and highlights them in the grid.</li><li>Shows the <strong>sheet and row</strong> for each result, when available.</li></ul>
<p>A workbook can contain multiple sheets. You still search one file at a time.</p>`
      },
      {
        h2: 'Example: finding a fee',
        html: `<div class="seo-example"><p class="mini-label">YOU SEARCH</p><p class="seo-query">What do I pay if I’m late with a payment?</p><p class="mini-label">FEES-SCHEDULE.XLSX · ILLUSTRATIVE ROW</p><blockquote><mark>Overdue balance · Monthly interest · 1.0%</mark></blockquote><span class="source-line">Fictional example · check the full sheet for conditions and exceptions</span></div>
<p>The sheet says “overdue balance,” not “late.” A meaning-based search can still connect the two.</p>`
      },
      {
        h2: 'Tips for better spreadsheet searches',
        html: `<ul><li><strong>Describe the row you want,</strong> not a single column header.</li><li><strong>Use Lexical</strong> for exact codes, SKUs, IDs, or names. It works like Ctrl+F on the cell text, and you can turn on Match case if it matters.</li><li><strong>Check neighbouring rows and other sheets.</strong> A matching row can depend on a note or condition elsewhere in the workbook.</li></ul>`
      },
      {
        h2: 'Limits to know about',
        html: `<ul><li>DocuLocate finds and highlights rows. It does not edit the spreadsheet, and it is not a calculation or reporting tool.</li><li>Relevance is a guide. Read the highlighted row in context before relying on it.</li><li>One file at a time.</li></ul>
<p>Before you upload anything sensitive, read the <a href="/privacy/">privacy details</a>.</p>`
      }
    ],
    faq: [
      ['Which spreadsheet formats work?', 'The app’s file picker accepts Excel (.xlsx and .xls) and CSV files.'],
      ['Can it search across all the sheets in a workbook?', 'A workbook can contain multiple sheets, and the viewer shows them as tabs. Results show the sheet and row when available. You search one file at a time.'],
      ['Can DocuLocate calculate totals or build reports?', 'No. It locates relevant rows and passages. It does not calculate, edit, or report on your data.'],
      ['What if I only know the exact code or ID?', 'Use Lexical search. It works like Ctrl+F: it finds every cell containing the code, including part of it, and you can turn on Match case if capitalization matters.']
    ],
    related: ['ctrl-f-alternative', 'search-pdf']
  }  ,
  {
    slug: 'search-contracts',
    nav: 'Search contracts',
    title: 'Find Clauses in a Contract by Meaning | DocuLocate',
    description: 'Search a contract in plain language and jump to the clause you mean: termination, liability, payment, renewal. Read the source passage in context.',
    eyebrow: 'GUIDE',
    h1: 'Find clauses in a contract by meaning',
    lead: 'You know what you need to find out: can I leave early, who is liable, when is payment due. You don’t know which section, or what words the drafter used. Describe the question, and DocuLocate highlights the passage that addresses it.',
    sections: [
      {
        h2: 'Why contracts resist keyword search',
        html: `<p>Contracts use formal, defined, and sometimes indirect language. “Cancel” may appear as “terminate,” “discontinue,” or “elect not to renew.” “Who pays if data is lost” may sit inside an indemnity clause that never uses those words.</p>
<p>Exact-match search forces you to guess the drafter’s vocabulary. Searching by meaning lets you start from your own question.</p>`
      },
      {
        h2: 'Questions people ask of contracts',
        html: `<ul><li>“What happens if I end the agreement early?”</li><li>“Who is responsible if customer data is lost?”</li><li>“When does a payment become overdue, and what is the penalty?”</li><li>“Does this renew automatically?”</li><li>“What are the confidentiality obligations?”</li></ul>
<p>Each of these can lead to a clause that doesn’t contain the words in the question.</p>`
      },
      {
        h2: 'Example: liability for lost data',
        html: `<div class="seo-example"><p class="mini-label">YOU SEARCH</p><p class="seo-query">Who is responsible if customer data is lost?</p><p class="mini-label">POSSIBLE SOURCE PASSAGE · PAGE 28 · ILLUSTRATIVE</p><blockquote>“Provider shall <mark>indemnify Customer against losses arising from unauthorized disclosure or destruction of Customer Data.</mark>”</blockquote><span class="source-line">Illustrative clause · review the full terms in context</span></div>
<p>The result is a place to start reading, not a conclusion. Related terms, such as limits of liability or exceptions, often sit in other sections.</p>`
      },
      {
        h2: 'How to use it',
        html: `<ol><li>Upload the contract as a PDF or Word (.docx) file.</li><li>Describe the clause or situation you are looking for.</li><li>Select a result to highlight it in the viewer, then read the surrounding text.</li><li>Search again for related terms: exceptions, definitions, caps, notice periods.</li></ol>
<p>Use <strong>Lexical</strong> search (Ctrl+F style, every occurrence) with Match case for defined terms and exact capitalised phrases. Hybrid, the default, is a good starting point for everything else.</p>`
      },
      {
        h2: 'What it is not',
        html: `<ul><li><strong>Not legal advice.</strong> DocuLocate finds passages. It does not interpret them or tell you what a contract means for you. For decisions that matter, have a qualified professional review it.</li><li><strong>Relevance is a guide.</strong> A highest-ranked result may not be the controlling clause. Read the whole section.</li><li><strong>PDFs need extractable text.</strong> Image-only scans need OCR first, and DocuLocate does not perform OCR.</li><li><strong>One document at a time.</strong></li></ul>
<p>Contracts are often confidential. Read the <a href="/privacy/">privacy details</a> before uploading one.</p>`
      }
    ],
    faq: [
      ['Does DocuLocate review or summarize contracts?', 'No. It locates the passages that match your question so you can read them. It can also show a short answer taken word for word from the contract (no AI needed), or an AI-written one if you add your own provider, and you should check the passage it points to yourself.'],
      ['Which contract file types work?', 'PDF with extractable text and Word (.docx) files both work, along with plain text. Image-only scans need OCR first.'],
      ['Can it find a clause if I don’t know the legal term?', 'Often, yes. Describe the situation in plain language, and the search looks for passages with related meaning. If results look off, rephrase or try Semantic or Lexical mode.'],
      ['Is it safe to upload a confidential contract?', 'Check the privacy details before you upload. The active document is processed on the application server and held in its memory, private to your browser or account, recent-file history can save a copy in your browser, and only if you add your own AI provider does that provider receive your query and candidate passages.']
    ],
    related: ['search-pdf', 'semantic-document-search']
  },
  {
    slug: 'faq',
    nav: 'FAQ',
    header: false,
    faqHeading: null,
    title: 'DocuLocate FAQ — Semantic Search, Formats, Privacy | DocuLocate',
    description: 'Answers about semantic document search, supported file formats, PDF search, search types, recent files, and what to do when there is no good match.',
    eyebrow: 'FAQ',
    h1: 'Questions, answered',
    lead: 'Quick answers about how DocuLocate searches a document, what it supports, and what to expect from the results.',
    sections: [],
    faq: [
      [
            "What is semantic document search?",
            "Semantic document search finds passages based on their meaning. Describe what you want to find, and DocuLocate looks for related information inside the document you upload."
      ],
      [
            "How is DocuLocate different from Ctrl+F?",
            "Ctrl+F searches for exact text. DocuLocate can find a passage that expresses the same idea using different words. A search for “cancel early” might locate wording about “discontinuing services prior to expiration.”"
      ],
      [
            "Does my search need to use the same words as the document?",
            "No. Use natural language to describe the information you need. Specific questions and clear concepts can help you find more relevant passages."
      ],
      [
            "What document formats are supported?",
            "The app’s file picker accepts PDF, Word (.docx), plain text (.txt), Excel (.xlsx and .xls), and CSV. Search one file at a time; a workbook can contain multiple sheets."
      ],
      [
            "Does DocuLocate generate answers or find source text?",
            "Source passages are the core results. DocuLocate can also show a short answer taken word for word from your document, linked to the passage it came from, with no AI or key needed. It only answers when it is confident; otherwise the Answer label is struck through. If you add your own AI provider, it can write answers instead. Either way, inspect the passage in the document viewer."
      ],
      [
            "Can I search PDFs?",
            "Yes. Search a PDF with extractable text, then select a result to jump to and highlight its location in the built-in page viewer. Image-only scans need OCR first; DocuLocate does not perform OCR."
      ],
      [
            "Is DocuLocate a “chat with PDF” tool?",
            "DocuLocate is primarily designed to locate relevant information within a document. You search, review passages, and inspect the source. A short answer, taken from the document or written by an AI provider you add, can help with a match, but there is no general-purpose chat conversation."
      ],
      [
            "What do Hybrid, Semantic, and Lexical mean?",
            "Hybrid, the default, combines meaning and keyword matches. Semantic focuses on meaning. Lexical works like Ctrl+F: every occurrence of the text you type, in order, with an optional Match case control."
      ],
      [
            "Are recent documents saved?",
            "The active document is held in server memory. Separately, browser history lists up to five recent uploads and attempts to cache file contents for files up to 3 MiB, subject to browser storage limits. Larger files may be listed but require uploading again. DocuLocate always opens at the empty upload screen; pick a recent file from History to bring it back. Reset does not clear this history; use Clear history."
      ],
      [
            "Do I need to sign in?",
            "No. You can upload a document, search it and get answers without an account. Sign in only if you want to use your own AI provider, which needs an account so your key can be stored for you. Without signing in, your document is private to your browser."
      ],
      [
            "What does a struck-through Answer mean?",
            "A question was asked but there is no answer to show. DocuLocate would rather show nothing than guess, so it leaves the Answer label struck through when it is not confident, when the document says more than one thing, or when the passages do not state it directly. Hover the label for the reason, and read the matching passages below it."
      ],
      [
            "What if there is no good match?",
            "The app can report that no strong match was found and show lower-confidence matches separately. Try rephrasing the query or changing search mode, then review the source yourself."
      ]
],
    related: ['semantic-document-search', 'ctrl-f-alternative', 'search-pdf', 'search-excel-csv']
  }
];

export const siteUrl = 'https://doculocate.com';
