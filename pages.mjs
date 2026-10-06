// Content for the SEO pages. `node generate-pages.mjs` renders each entry to <slug>/index.html.
// Keep claims limited to what the application does (see README "Implementation audit").
export const pages = [
  {
    slug: 'semantic-document-search',
    nav: 'Semantic search',
    title: 'Semantic Document Search: Search Documents by Meaning | DocuLocate',
    description: 'Semantic document search finds information by meaning, not just exact words, then takes you to the source passage. See how it works and when keyword search is better.',
    eyebrow: 'GUIDE',
    h1: 'Semantic document search',
    linkText: 'Semantic document search: search documents by meaning',
    lead: 'Find information by meaning, not just exact words. Describe what you are looking for, and DocuLocate finds the passages that match what you <em>mean</em> and takes you to them in the original document, even if the author phrased it differently.',
    sections: [
      {
        h2: 'How searching by meaning works',
        html: `<p>Think of it as <a href="/ctrl-f-alternative/">Ctrl+F for meaning</a>. Keyword search asks, “Does this text contain these characters?” Semantic search asks, “Which passage is about the same thing as this question?”</p>
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
        h2: 'From a meaning-based match to a source you can verify',
        html: `<p>Finding a passage is only half the job. You also need to trust it. In DocuLocate, selecting a result jumps to that passage in the original document and highlights it, so you read the actual wording in its own context. You can hide the highlight when you just want to read.</p>
<p>That is the difference between searching documents with AI and taking an AI’s word for it. Read more about <a href="/document-search-with-source-verification/">document search with source verification</a>.</p>`
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
        html: `<ul><li><strong>Scanned PDFs:</strong> a PDF needs extractable text. Image-only scans need OCR first, and DocuLocate does not perform OCR.</li><li><strong>Specific questions work best.</strong> “What happens if I end the agreement before the term is over?” usually beats a single word.</li><li><strong>If nothing looks right,</strong> rephrase the query or switch search type.</li></ul>
<p>Semantic search finds information inside a single document. To see how two documents differ instead, <a href="https://difffind.com/">DiffFind compares documents by meaning as well as wording</a>.</p>`
      }
    ],
    faq: [
      ['What is semantic document search?', 'Semantic document search finds passages based on their meaning rather than exact wording. You describe what you want to find, and the search looks for related information in the document. DocuLocate then takes you to the passage in the original document so you can verify it.'],
      ['Is semantic search the same as AI chat?', 'No. Semantic search returns the passages in your document that best match your query, so you can read the source yourself. DocuLocate can show a short answer taken word for word from the document (no AI needed), and an AI-written answer if you add your own provider, but it is not a general-purpose chat tool.'],
      ['Do I need to use the same words as the document?', 'No. Use natural language to describe the information you need. Specific questions and clear concepts tend to find more relevant passages.'],
      ['Does semantic search replace keyword search?', 'Not entirely. Keyword search is better for exact names, numbers, and phrases. DocuLocate’s default Hybrid mode combines both, and Lexical mode is available when you want words only.']
    ],
    related: ['document-search-with-source-verification', 'ctrl-f-alternative', 'search-pdf', 'ask-questions-about-a-document']
  },
  {
    slug: 'ctrl-f-alternative',
    nav: 'Ctrl+F alternative',
    title: 'Ctrl+F for Meaning: A Better Way to Search Documents | DocuLocate',
    description: 'Ctrl+F finds matching words. DocuLocate finds meaning. Search PDFs, Word files, text, and spreadsheets with AI and jump to the source passage you need.',
    eyebrow: 'GUIDE',
    h1: 'A better alternative to Ctrl+F for long documents',
    linkText: 'Ctrl+F for meaning: a better alternative to Ctrl+F',
    lead: 'DocuLocate is Ctrl+F for meaning. Ctrl+F searches for matching characters and words; DocuLocate searches for concepts, intent, and meaning. When you know the question but not the author’s wording, describe what you need and jump to the passage that answers it.',
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
<p>The result is the relevant source passage, highlighted in the document viewer, so you can read it in context and verify it rather than trusting a summary. Try a question like “How can I improve visibility?”: the passage can be found even when none of those words appear in it.</p>`
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
    related: ['semantic-document-search', 'document-search-with-source-verification', 'search-pdf']
  },
  {
    slug: 'search-pdf',
    nav: 'Search PDFs',
    title: 'AI PDF Search: Search Inside a PDF by Meaning | DocuLocate',
    description: 'Search a PDF with AI in your own words. Find answers by meaning and jump to the matching passage on its page. Works with PDFs that have extractable text.',
    eyebrow: 'GUIDE',
    h1: 'Search a PDF by meaning',
    linkText: 'AI PDF search: search a PDF by meaning',
    lead: 'Long PDFs, such as contracts, policies, manuals, and reports, are hard to search when you don’t know the exact wording. Upload one, describe what you need, and DocuLocate searches the PDF with AI by meaning and highlights the matching passage on its page.',
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
<p>Before you upload anything sensitive, read the <a href="/privacy/">privacy details</a>.</p>
<p>Need to see what changed between two versions of a PDF? That is a comparison task, and <a href="https://difffind.com/">DiffFind</a> is built for it.</p>`
      }
    ],
    faq: [
      ['Can I search a scanned PDF?', 'Only if it contains extractable text. Image-only scans need OCR first, and DocuLocate does not perform OCR.'],
      ['Will it show me the page the result came from?', 'Yes. Selecting a result jumps to its location in the built-in page viewer and highlights the passage. Results show the PDF page when it is available.'],
      ['Can I search several PDFs at once?', 'No. DocuLocate searches one active document at a time. Replace the document to search another file.'],
      ['Is this a chat-with-PDF tool?', 'Not in the usual sense. DocuLocate is a chat with PDF alternative built around finding the answer and showing the source (see the chat with PDF alternative page). You search, review the matching passages, and inspect the source. The app can show a short answer taken word for word from the document (no AI needed), or an AI-written one if you add your own provider, but there is no general chat conversation.']
    ],
    related: ['semantic-document-search', 'document-search-with-source-verification', 'chat-with-pdf-alternative', 'search-excel-csv']
  },
  {
    slug: 'search-excel-csv',
    nav: 'Search spreadsheets',
    header: false,
    footer: true,
    title: 'Search Excel and CSV Files with AI, by Meaning | DocuLocate',
    description: 'Search Excel and CSV files with AI in plain language. Find the row you mean and jump to it, with sheet tabs and highlighted rows in a grid viewer.',
    eyebrow: 'GUIDE',
    h1: 'Search an Excel or CSV file by meaning',
    linkText: 'Search Excel and CSV files with AI',
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
    header: false,
    footer: true,
    title: 'Search Contracts with AI: Find Clauses by Meaning | DocuLocate',
    description: 'Search a contract with AI in plain language and jump to the clause you mean: termination, liability, payment, renewal. Verify it in the original text.',
    eyebrow: 'GUIDE',
    h1: 'Find clauses in a contract by meaning',
    linkText: 'Search contracts with AI: find clauses by meaning',
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
<p>Contracts are often confidential. Read the <a href="/privacy/">privacy details</a> before uploading one.</p>
<p>To compare two versions of a contract and see the meaningful differences, try <a href="https://difffind.com/">DiffFind</a>.</p>`
      }
    ],
    faq: [
      ['Does DocuLocate review or summarize contracts?', 'No. It locates the passages that match your question so you can read them. It can also show a short answer taken word for word from the contract (no AI needed), or an AI-written one if you add your own provider, and you should check the passage it points to yourself.'],
      ['Which contract file types work?', 'PDF with extractable text and Word (.docx) files both work, along with plain text. Image-only scans need OCR first.'],
      ['Can it find a clause if I don’t know the legal term?', 'Often, yes. Describe the situation in plain language, and the search looks for passages with related meaning. If results look off, rephrase or try Semantic or Lexical mode.'],
      ['Is it safe to upload a confidential contract?', 'Check the privacy details before you upload. The active document is processed on the application server and held in its memory, private to your browser or account, recent-file history can save a copy in your browser, and only if you add your own AI provider does that provider receive your query and candidate passages.']
    ],
    related: ['search-pdf', 'semantic-document-search', 'ask-questions-about-a-document']
  },
  {
    slug: 'ask-questions-about-a-document',
    nav: 'Ask a document',
    title: 'Ask Questions About a Document with AI | DocuLocate',
    description: 'Ask your document anything: summaries, explanations, key points, and analysis from your own AI provider. How Ask differs from Search, its size limit, and what it sends.',
    eyebrow: 'GUIDE',
    h1: 'Ask your document anything',
    linkText: 'Ask questions about a document',
    lead: 'Ask your document anything: summarize it, explain complex content, pull out the key points, or analyze it with AI. <strong>Search</strong> is built to find evidence and connect an answer to its source passage. <strong>Ask</strong> gives your AI provider the <em>whole</em> document, for the questions a single passage can’t answer, like “summarize this” or “what are the risks for the tenant?”',
    sections: [
      {
        h2: 'Search or Ask?',
        html: `<p>DocuLocate has one text box with two modes. Pick the mode with the <strong>Search | Ask</strong> buttons at the top of the search window.</p>
<div class="seo-table-wrap"><table class="seo-table"><thead><tr><th scope="col"></th><th scope="col">Search</th><th scope="col">Ask</th></tr></thead><tbody>
<tr><th scope="row">Good for</th><td>“Where does it say…?” Finding the passage, the clause or the spreadsheet row.</td><td>Open-ended questions about the document as a whole: summaries, obligations, risks, key dates.</td></tr>
<tr><th scope="row">What it reads</th><td>The whole document is searched; the best passages are returned</td><td>The whole document text goes to your AI provider with your question</td></tr>
<tr><th scope="row">Result</th><td>Ranked source passages, highlighted in the viewer</td><td>A written answer from your AI provider</td></tr>
<tr><th scope="row">Needs an AI provider</th><td>No. Built-in answers need no AI and no key.</td><td>Yes. Your own provider and API key.</td></tr>
</tbody></table></div>
<p>Search is still the way to check an answer: it takes you to the original wording in the document, which is the idea behind <a href="/document-search-with-source-verification/">document search with source verification</a>.</p>`
      },
      {
        h2: 'Questions Ask is good at',
        html: `<ul><li>“Summarize this document in five bullet points.”</li><li>“What are the tenant’s obligations?”</li><li>“What deadlines or notice periods does this contract mention?”</li><li>“What does this report conclude, and what does it recommend?”</li><li>“Is there anything here about subletting?”</li></ul>
<p>These draw on several parts of a document at once, which is why a single highlighted passage can’t answer them.</p>`
      },
      {
        h2: 'How to use it',
        html: `<ol><li>Open <strong>Settings</strong>, choose an AI provider (Claude, OpenAI, Gemini, Groq or OpenRouter) and add your own API key. On the hosted app this needs an account, so your key can be stored for you, encrypted.</li><li>Upload a document.</li><li>Choose <strong>Ask</strong> instead of Search. The box changes to “Ask a question about the whole document.”</li><li>Type your question and press <strong>Ask</strong> (or Enter).</li><li>Read the answer in the <strong>Ask</strong> area. The Search area collapses while you ask, and both keep their content, so you can switch back to your search results.</li></ol>
<p>If no AI provider is active, the Ask button is greyed out, and its tooltip says why.</p>`
      },
      {
        h2: 'The size limit',
        html: `<p>Ask sends the entire document text, so there is a limit. By default it is <strong>100,000 characters</strong>, roughly 50 pages of ordinary text. In <strong>Settings → Ask → Largest document</strong> you can choose 50,000, 100,000, 200,000 or 400,000 characters; the choice is saved with your account on the hosted app, or in your browser on a local server.</p>
<p>A document over your limit is <strong>not silently cut short</strong>. DocuLocate tells you it is too long for Ask, and Search still works on it. Pick a size your AI model can read: a larger document costs more and needs a model with a large context window.</p>`
      },
      {
        h2: 'What to know before you rely on an answer',
        html: `<ul><li><strong>It is AI-written, so it can be wrong.</strong> DocuLocate tells the AI to answer only from your document and to say so when the document does not contain the answer, but nothing guarantees accuracy.</li><li><strong>An Ask answer is not linked to a highlighted passage.</strong> To check an important point, switch to Search and read the source wording in the viewer.</li><li><strong>It uses your key.</strong> Each question sends the full document to your provider and counts against your own account with them. Ask is also rate limited.</li><li><strong>Scanned PDFs need OCR first.</strong> Ask reads the document’s text, and DocuLocate does not perform OCR.</li><li><strong>One document at a time.</strong> Ask works on the document that is open, like search.</li></ul>`
      },
      {
        h2: 'What it sends, and when',
        html: `<p>Nothing goes to an AI provider unless you add your own key <em>and</em> press Ask. Then DocuLocate sends your question and the document’s full text to the provider you chose. Search and the built-in answers stay on the application server and use no outside service.</p>
<p>Your provider’s own retention and training policies apply to what it receives. Read the <a href="/privacy/">privacy details</a> before using Ask on a confidential document.</p>`
      }
    ],
    faq: [
      ['What is Ask?', 'Ask lets you put a question to the whole document. DocuLocate sends your question and the document’s text to the AI provider you set up, and shows the answer it writes. Use it for summaries and open-ended questions; use Search to find where the document says something.'],
      ['Do I need an AI key to use Ask?', 'Yes. Ask needs an AI provider (Claude, OpenAI, Gemini, Groq or OpenRouter) and your own API key. On the hosted app you also need an account so your key can be stored for you. Search and built-in answers need neither.'],
      ['How long can the document be?', 'By default up to 100,000 characters, roughly 50 pages of ordinary text. You can choose 50,000, 200,000 or 400,000 characters instead in Settings. A longer document is not cut short; DocuLocate tells you it is too long for Ask, and Search still works on it.'],
      ['Is an Ask answer reliable?', 'Treat it as a starting point. The AI is told to answer only from your document and to say when the document does not contain the answer, but it can still be wrong. An Ask answer does not highlight a source passage, so use Search to read the original wording before you rely on it.'],
      ['Does Ask send my document to an AI company?', 'Yes, when you press Ask. The question and the document’s full text go to the provider you chose, and that provider’s retention and training policies apply. Nothing is sent to a provider until you add your own key and use Ask.'],
      ['How is Ask different from search?', 'Search ranks passages from the document and highlights the matching text so you can read it in place. Ask has your AI provider read the whole document and write an answer. Search is better for finding where something is said; Ask is better for summaries and questions that span the document.']
    ],
    related: ['document-search-with-source-verification', 'chat-with-pdf-alternative', 'semantic-document-search', 'search-contracts']
  },
  {
    slug: 'document-search-with-source-verification',
    nav: 'Source verification',
    title: 'Document Search with Source Verification | DocuLocate',
    description: 'Get answers from a document and verify them. DocuLocate finds the supporting passage, jumps to it in the original document, and highlights it so you can check the source.',
    eyebrow: 'GUIDE',
    h1: 'AI document search with source verification',
    linkText: 'Document search with source verification',
    lead: 'Don’t just get an AI answer. See where the answer came from. Ask a question, and DocuLocate finds the supporting passage, takes you to it in the original document, and highlights it, so you can read the evidence in its own context.',
    sections: [
      {
        h2: 'Ask. Find. Answer. Verify.',
        html: `<ol><li><strong>Ask.</strong> Type a question in your own words, such as “What happens if I end the agreement early?”</li><li><strong>Find.</strong> DocuLocate searches the document by meaning and by keywords together (hybrid search) and ranks the strongest supporting passages.</li><li><strong>Answer.</strong> It can show a focused answer. By default the answer is a sentence or value taken word for word from your document. If you add your own AI provider, the AI can also rerank the evidence and write the answer.</li><li><strong>Verify.</strong> Select the answer or a source passage to jump to it in the original document. The supporting text is highlighted so you can check the answer against it. Select it again to hide the highlight when you just want to read.</li></ol>
<p>That is the whole idea: from question to source in one click.</p>`
      },
      {
        h2: 'Why a source matters',
        html: `<p>An answer you cannot check is a claim you have to take on trust. A contract clause, a policy rule, or a figure in a report is only useful if it matches what the document really says, in the context around it.</p>
<p>So DocuLocate does not stop at the answer. It connects the answer to the passage it came from and shows you that passage in the original document: the PDF page, the Word text, or the spreadsheet row. You read the evidence, and then you decide.</p>`
      },
      {
        h2: 'An example',
        html: `<div class="seo-example"><p class="mini-label">YOU ASK</p><p class="seo-query">What happens if I end the agreement early?</p><p class="mini-label">ANSWER · LINKED TO ITS SOURCE · ILLUSTRATIVE</p><blockquote>“Customer shall pay an amount equal to the remaining monthly charges.”</blockquote><p class="mini-label">SOURCE · MASTER-SERVICE-AGREEMENT.PDF · PAGE 37</p><blockquote>“12.2 In the event Customer elects to <mark>discontinue Services prior to expiration of the Initial Term</mark>, Customer shall pay an amount equal to the remaining monthly charges.”</blockquote><span class="source-line">Fictional example · review the full terms in context</span></div>
<p>The question and the clause share almost no words. The answer points back to the clause, so you can confirm the conditions around it.</p>`
      },
      {
        h2: 'What source verification does, and does not, do',
        html: `<ul><li><strong>It makes answers easier to check.</strong> You can compare an answer with the supporting text in the original document.</li><li><strong>It does not guarantee an answer is correct.</strong> Relevance is a guide. Read the highlighted passage and what surrounds it, especially for legal, financial, or medical documents.</li><li><strong>If there is no confident answer, it says so.</strong> The Answer label is shown struck through instead of guessing, and you can read the matching passages below it.</li><li><strong>Ask is different.</strong> An <a href="/ask-questions-about-a-document/">Ask answer</a> is written by your AI provider from the whole document and is not linked to a highlighted passage. Use Search to check it.</li></ul>`
      },
      {
        h2: 'The technology behind it, briefly',
        html: `<p>You do not need to know any of this to use DocuLocate. Under the hood, it combines lexical (keyword) search, semantic (meaning-based) search, hybrid retrieval, reranking, optional AI answer generation, and source navigation. Each part serves the same goal: finding the right passage and showing it to you. Read more about <a href="/semantic-document-search/">searching documents by meaning</a>.</p>
<p>Supported formats: PDF (with extractable text), Word (.docx), plain text (.txt), Excel (.xlsx and .xls), and CSV. One document at a time. Before you upload anything sensitive, read the <a href="/privacy/">privacy details</a>.</p>`
      }
    ],
    faq: [
      ['What does source verification mean in DocuLocate?', 'Every answer and result is connected to the passage it came from. Select it and DocuLocate jumps to that passage in the original document and highlights it, so you can verify the answer against the source.'],
      ['Does source verification stop AI from being wrong?', 'No. It makes answers easier to check against the original document, but it does not guarantee correctness. Always read the highlighted passage and its context before you rely on an answer.'],
      ['Can I hide the highlight?', 'Yes. Select the answer or result again to turn the highlight off, which is easier when you just want to read the document.'],
      ['Does it work with spreadsheets as well as PDFs?', 'Yes. For a PDF the source is the highlighted passage on its page. For Excel and CSV files it is the highlighted row, with sheet tabs in the viewer.'],
      ['Do I need an AI provider to verify answers?', 'No. Built-in answers are taken word for word from your document and need no AI or key. You can add your own AI provider for AI-written answers; either way, you check the source in the viewer.']
    ],
    related: ['semantic-document-search', 'chat-with-pdf-alternative', 'ask-questions-about-a-document', 'search-pdf']
  },
  {
    slug: 'chat-with-pdf-alternative',
    nav: 'Chat with PDF alternative',
    header: false,
    footer: true,
    title: 'A Chat with PDF Alternative That Shows Its Source | DocuLocate',
    description: 'Looking for a chat with PDF alternative? DocuLocate finds the answer in your document and takes you to the highlighted source, so you can verify it instead of trusting a chat reply.',
    eyebrow: 'GUIDE',
    h1: 'A chat with PDF alternative that shows the source',
    linkText: 'Chat with PDF alternative: ask a PDF and verify the source',
    lead: 'Most “chat with PDF” tools give you an answer and ask you to trust it. DocuLocate is built around the next step: ask your document, find the answer, and verify the source in the original document.',
    sections: [
      {
        h2: 'Chat with a PDF, or find and verify the answer?',
        html: `<div class="seo-table-wrap"><table class="seo-table"><thead><tr><th scope="col"></th><th scope="col">Typical chat with PDF</th><th scope="col">DocuLocate</th></tr></thead><tbody>
<tr><th scope="row">Starts with</th><td>A conversation</td><td>A question about one document</td></tr>
<tr><th scope="row">Result</th><td>A written reply</td><td>An answer plus the ranked supporting passages</td></tr>
<tr><th scope="row">Checking it</th><td>Re-read the document yourself</td><td>Click the answer or source to jump to the highlighted passage in the original</td></tr>
<tr><th scope="row">Finding wording</th><td>Often not the point</td><td>Hybrid search by meaning and keywords, plus Ctrl+F-style Lexical search</td></tr>
<tr><th scope="row">Broad questions</th><td>Core feature</td><td>Ask, with your own AI provider: summaries, explanations, analysis</td></tr>
</tbody></table></div>`
      },
      {
        h2: 'When DocuLocate is the better fit',
        html: `<ul><li>You need to <strong>check</strong> what a contract, policy, or report really says, not just read a summary.</li><li>You want to <strong>cite or quote</strong> the exact passage.</li><li>You are searching a <strong>spreadsheet</strong> and want the matching row, not a paraphrase.</li><li>You want exact-text search (Ctrl+F style) and meaning-based search in one place.</li></ul>`
      },
      {
        h2: 'When you want a broader conversation',
        html: `<p>DocuLocate’s <a href="/ask-questions-about-a-document/">Ask</a> mode covers many of the same jobs as a chat tool: summarize a document, explain complex content, list the key points, or analyze information. It sends your question and the whole document to the AI provider you choose, and it answers one question at a time. There is no ongoing chat conversation, and Ask answers are not linked to a highlighted passage, so pair them with Search when accuracy matters.</p>`
      },
      {
        h2: 'Ask a PDF in three steps',
        html: `<ol><li>Upload a PDF with extractable text (or a Word, text, Excel, or CSV file).</li><li>Ask in your own words and read the answer and ranked passages.</li><li>Select the answer to jump to the highlighted source in the original document.</li></ol>
<p>Learn more about <a href="/search-pdf/">searching a PDF by meaning</a> and <a href="/document-search-with-source-verification/">source verification</a>. Image-only scans need OCR first, and DocuLocate does not perform OCR.</p>`
      }
    ],
    faq: [
      ['Is DocuLocate a chat with PDF tool?', 'It is an alternative. You ask a question about one document and get an answer connected to its source passage. For broader questions, Ask lets your own AI provider read the whole document, one question at a time.'],
      ['What can I ask a PDF?', 'Questions such as what a clause says, what a deadline is, or who is responsible for something. With Ask and your own AI provider you can also request summaries, explanations, and key points.'],
      ['Can I see where an answer came from?', 'With Search, yes. Select the answer or a result and the supporting passage is highlighted in the original document. Ask answers are written by your AI provider and do not highlight a passage.'],
      ['Can it chat across several documents?', 'No. DocuLocate works with one active document at a time.']
    ],
    related: ['document-search-with-source-verification', 'ask-questions-about-a-document', 'search-pdf', 'semantic-document-search']
  },
  {
    slug: 'faq',
    nav: 'FAQ',
    header: false,
    faqHeading: null,
    title: 'DocuLocate FAQ: AI Document Search, Formats, Source Verification',
    description: 'Answers about AI document search, source verification, Ask vs Search, supported file formats, PDF search, search types, and what to do when there is no good match.',
    eyebrow: 'FAQ',
    h1: 'Questions, answered',
    lead: 'Quick answers about how DocuLocate searches documents with AI, how to verify an answer against its source, what it supports, and what to expect from the results.',
    sections: [],
    faq: [
      [
            "What is DocuLocate?",
            "DocuLocate is AI document search with source verification. Ask your document a question, find the answer by meaning rather than exact words, and jump to the supporting passage in the original document to verify it."
      ],
      [
            "How do I verify an answer?",
            "Select the answer or a result card. DocuLocate jumps to the supporting passage in the original document and highlights it so you can read the wording in context. Select it again to hide the highlight. This makes an answer easier to check; it does not guarantee that an answer is correct."
      ],
      [
            "What is the difference between Search and Ask?",
            "Search finds relevant evidence and connects answers to source passages. Ask sends your question and the whole document to your own AI provider for summaries, explanations, and broader analysis. Ask does not highlight a source passage, so use Search to check it."
      ],
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
            "Source passages are the core results. DocuLocate can also show a short answer taken word for word from your document, linked to the passage it came from, with no AI or key needed. It only answers when it is confident; otherwise the Answer label is struck through. If you add your own AI provider, it can write answers instead, and its Ask mode can answer open-ended questions from the whole document. Either way, inspect the passage in the document viewer."
      ],
      [
            "Can I search PDFs?",
            "Yes. Search a PDF with extractable text, then select a result to jump to and highlight its location in the built-in page viewer. Image-only scans need OCR first; DocuLocate does not perform OCR."
      ],
      [
            "Is DocuLocate a “chat with PDF” tool?",
            "DocuLocate is a chat with PDF alternative built around verification. Instead of an open-ended chat, you ask a question, find the answer, and verify the source in the original document. A short answer, taken from the document or written by an AI provider you add, can help with a match. If you add your own AI provider you can also use Ask to put a question to the whole document, for example a summary, but it answers one question at a time; there is no ongoing chat conversation."
      ],
      [
            "What do Hybrid, Semantic, and Lexical mean?",
            "Hybrid, the default, combines meaning and keyword matches. Semantic focuses on meaning. Lexical works like Ctrl+F: every occurrence of the text you type, in order, with an optional Match case control."
      ],
      [
            "Can I ask a question about the whole document?",
            "Yes, with your own AI provider. Choose Ask instead of Search, type a question such as “summarize this”, and your provider reads the whole document to answer. Ask needs an account on the hosted app and your own API key, works on documents up to a size limit you can set (100,000 characters by default), and does not highlight a source passage, so use Search to check the original wording."
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
    related: ['document-search-with-source-verification', 'semantic-document-search', 'ctrl-f-alternative', 'search-pdf', 'chat-with-pdf-alternative', 'search-excel-csv', 'ask-questions-about-a-document']
  }
];

export const siteUrl = 'https://doculocate.com';
