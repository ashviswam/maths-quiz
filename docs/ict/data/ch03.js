const ch03 = {
  id: 3,
  title: "Document Production",
  icon: "📄",
  color: "#8b5cf6",
  topics: ["Fonts & Text Formatting", "Page Layout", "Tables & Structure"],
  questions: [

    // ── Fonts & Text Formatting ────────────────────────────────

    {
      id: "ict3_q1",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "What makes a <b>serif</b> font different from a <b>sans-serif</b> font?",
      options: [
        "Serif fonts are always larger than sans-serif fonts",
        "Serif fonts have small decorative strokes at the ends of letters; sans-serif fonts do not",
        "Sans-serif fonts can only be used for headings",
        "Serif fonts are only available in Microsoft Word"
      ],
      answer: 1,
      explanation: "Serif fonts (like Times New Roman and Georgia) have small decorative strokes called 'serifs' at the ends of letters. Sans-serif fonts (like Calibri and Verdana) do not. 'Sans' is French for 'without'."
    },

    {
      id: "ict3_q2",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "Which of the following is a <b>sans-serif</b> font?",
      options: [
        "<span style=\"font-family:'Times New Roman',Times,serif;font-size:1.1em\">Times New Roman</span>",
        "<span style=\"font-family:Georgia,serif;font-size:1.1em\">Georgia</span>",
        "<span style=\"font-family:Calibri,Candara,Segoe UI,sans-serif;font-size:1.1em\">Calibri</span>",
        "<span style=\"font-family:'Courier New',Courier,monospace;font-size:1.1em\">Courier New</span>"
      ],
      answer: 2,
      explanation: "Calibri is a sans-serif font — it has clean letters with no decorative strokes at the ends. Times New Roman and Georgia are serif fonts. Calibri is the default body font in Microsoft Word."
    },

    {
      id: "ict3_q3",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "Which of the following is a <b>serif</b> font?",
      options: [
        "<span style=\"font-family:Calibri,Candara,Segoe UI,sans-serif;font-size:1.1em\">Calibri</span>",
        "<span style=\"font-family:Verdana,Geneva,sans-serif;font-size:1.1em\">Verdana</span>",
        "<span style=\"font-family:Arial,Helvetica,sans-serif;font-size:1.1em\">Arial</span>",
        "<span style=\"font-family:'Times New Roman',Times,serif;font-size:1.1em\">Times New Roman</span>"
      ],
      answer: 3,
      explanation: "Times New Roman is a classic serif font — you can see the small horizontal strokes (serifs) at the ends of letters. Calibri, Verdana, and Arial are all sans-serif fonts."
    },

    {
      id: "ict3_q4",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "In Microsoft Word, which text alignment makes <b>both</b> the left AND right edges of a paragraph perfectly straight?",
      options: ["Left aligned", "Centre aligned", "Right aligned", "Justified"],
      answer: 3,
      explanation: "Justified alignment spreads text evenly so both the left and right margins form a straight edge. This is commonly used in books, newspapers, and formal reports for a neat, professional appearance."
    },

    {
      id: "ict3_q5",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "Which alignment is most commonly used for <b>titles and headings</b>?",
      options: ["Left aligned", "Centre aligned", "Right aligned", "Justified"],
      answer: 1,
      explanation: "Centre alignment positions text symmetrically in the middle of the page. This draws the reader's eye and makes titles and headings stand out visually."
    },

    {
      id: "ict3_q6",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "What is the <b>default</b> text alignment in most word processors?",
      options: ["Centre aligned", "Right aligned", "Left aligned", "Justified"],
      answer: 2,
      explanation: "Left alignment is the default in most word processors. Text starts at the left margin and the right edge is 'ragged' (uneven). This feels natural for languages read from left to right."
    },

    {
      id: "ict3_q7",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "What does <b>line spacing</b> control in a document?",
      options: [
        "The distance between the left and right margins",
        "The amount of vertical space between each line of text",
        "The size of the font used",
        "The space between individual letters"
      ],
      answer: 1,
      explanation: "Line spacing controls how much vertical space appears between lines of text. Common settings include 1.0 (single), 1.5, and 2.0 (double). More spacing makes text easier to read — useful for drafts or essays."
    },

    {
      id: "ict3_q8",
      topic: "Fonts & Text Formatting",
      type: "mcq",
      question: "Verdana is described as a sans-serif font. This means it:",
      options: [
        "Has decorative strokes at the ends of each letter",
        "Can only be used in Google Docs",
        "Has clean, simple letters with no decorative strokes",
        "Is a handwriting-style font"
      ],
      answer: 2,
      explanation: "Verdana is a sans-serif font — 'sans' means 'without' in French, so sans-serif means 'without serifs'. Its clean, simple design makes it very readable on computer screens."
    },

    // ── Page Layout ────────────────────────────────────────────

    {
      id: "ict3_q9",
      topic: "Page Layout",
      type: "mcq",
      question: "What does <b>page orientation</b> mean in document production?",
      options: [
        "The font size used in the document",
        "Whether the page is taller than it is wide (portrait) or wider than it is tall (landscape)",
        "The number of columns on a page",
        "The colour of the page background"
      ],
      answer: 1,
      explanation: "Page orientation describes the direction of the page. Portrait (tall) is standard for letters and essays. Landscape (wide) is used when content is wider than it is tall — such as wide tables, charts, or the document production tasks."
    },

    {
      id: "ict3_q10",
      topic: "Page Layout",
      type: "mcq",
      question: "A <b>header</b> in a Microsoft Word document appears:",
      options: [
        "At the bottom of every page",
        "At the top of every page",
        "Only on the first page, before the text begins",
        "In the middle of the document between sections"
      ],
      answer: 1,
      explanation: "A header appears at the top of every page. Headers often contain a document title, author name, or date. Footers appear at the bottom of every page and often contain page numbers."
    },

    {
      id: "ict3_q11",
      topic: "Page Layout",
      type: "mcq",
      question: "Page numbers in a document are typically placed in the:",
      options: [
        "Body text only",
        "Title page and nowhere else",
        "Header or footer",
        "Table of contents"
      ],
      answer: 2,
      explanation: "Page numbers are placed in the header or footer so they appear consistently on every page. They update automatically as you add or remove content, and help readers navigate the document."
    },

    {
      id: "ict3_q12",
      topic: "Page Layout",
      type: "mcq",
      question: "In a document, splitting text into multiple <b>columns</b> is useful because:",
      options: [
        "It reduces the total number of pages",
        "It makes the document look like a newspaper or magazine, improving readability for longer text",
        "It automatically adds borders between sections",
        "It prevents readers from copying the text"
      ],
      answer: 1,
      explanation: "Columns are used in newspapers and magazines to break long text into narrower strips that are easier to read. In the document production tasks, you used 2- or 3-column layouts to style articles."
    },

    {
      id: "ict3_q13",
      topic: "Page Layout",
      type: "mcq",
      question: "What are <b>margins</b> in a document?",
      options: [
        "The lines used to separate paragraphs",
        "The blank space around the edges of the page",
        "The space between two columns",
        "The font size used for headings"
      ],
      answer: 1,
      explanation: "Margins are the blank spaces between the text and the edges of the page (top, bottom, left, right). Adjusting margins changes how much text fits on a page and how the document looks when printed."
    },

    // ── Tables & Structure ─────────────────────────────────────

    {
      id: "ict3_q14",
      topic: "Tables & Structure",
      type: "mcq",
      question: "What is the purpose of <b>merging cells</b> in a table?",
      options: [
        "To add a formula that calculates across two cells",
        "To combine two or more adjacent cells into one larger cell",
        "To copy a cell's formatting to the cell next to it",
        "To delete an entire row from the table"
      ],
      answer: 1,
      explanation: "Merging cells combines two or more adjacent cells into a single larger cell. This is commonly used to create a title row that spans the full width of a table, or to group related columns together."
    },

    {
      id: "ict3_q15",
      topic: "Tables & Structure",
      type: "mcq",
      question: "You are creating a table in Word with separate columns for Monday, Tuesday, and Wednesday. You want to add a single heading row at the top that says 'Timetable' spanning all three columns. What should you do?",
      options: [
        "Write 'Timetable' three times, once in each column",
        "Merge the three cells in the top row into one cell, then type 'Timetable'",
        "Add a text box above the table",
        "Insert a new column on the left for headings"
      ],
      answer: 1,
      explanation: "Merging the cells in the top row creates one wide cell that spans all columns. You can then type your heading in the centre. This is the standard technique for table headers in document production."
    },

    // ── Short answers ──────────────────────────────────────────

    {
      id: "ict3_q16",
      topic: "Fonts & Text Formatting",
      type: "short",
      question: "Explain the difference between a serif and a sans-serif font. Give <b>one example of each</b> and say when you might choose to use each type.",
      answer: "A serif font has small decorative strokes called 'serifs' at the ends of letters — examples include Times New Roman and Georgia. A sans-serif font has no decorative strokes — examples include Calibri and Verdana. Serif fonts are traditionally used for the body text of formal printed documents and books because the serifs help guide the eye along lines of text. Sans-serif fonts are often chosen for headings or digital text on screens because they look cleaner and more modern.",
      explanation: "'Sans' is French for 'without'. So 'sans-serif' literally means 'without serifs'. Knowing the difference helps you choose fonts that match the purpose and audience of your document."
    },

    {
      id: "ict3_q17",
      topic: "Page Layout",
      type: "short",
      question: "Describe <b>three</b> formatting features you would use to make a professional-looking document in Microsoft Word, and explain what each one does.",
      answer: "Three formatting features: (1) Text alignment — setting justified alignment makes both the left and right edges of the text straight, giving a professional look. (2) Headers and footers — a header at the top of every page can show the document title; a footer can show page numbers to help readers navigate. (3) Columns — splitting text into 2 or 3 columns creates a newspaper- or magazine-style layout, making longer articles easier to read. Other valid answers: serif/sans-serif font choice, line spacing, margins, merged table cells.",
      explanation: "Professional documents use formatting deliberately — not just to look good, but to guide the reader and make information easier to find and understand."
    }

  ]
};
