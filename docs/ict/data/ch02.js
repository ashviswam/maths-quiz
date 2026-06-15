const ch02 = {
  id: 2,
  title: "Google Apps",
  icon: "📊",
  color: "#10b981",
  topics: ["Google Docs", "Google Sheets", "Google Slides"],
  questions: [

    // ── Google Sheets ──────────────────────────────────────────

    {
      id: "ict2_q1",
      topic: "Google Sheets",
      type: "mcq",
      question: "Which Google app would you use to create a <b>budget spreadsheet</b>?",
      options: ["Google Docs", "Google Slides", "Google Sheets", "Google Forms"],
      answer: 2,
      explanation: "Google Sheets is Google's spreadsheet application. It is used for organising data in rows and columns, performing calculations with formulas (like =SUM()), and creating budgets or charts."
    },

    {
      id: "ict2_q2",
      topic: "Google Sheets",
      type: "mcq",
      question: "What does the formula <b>=SUM(B2:B6)</b> do in Google Sheets?",
      options: [
        "Counts how many cells are in the range B2 to B6",
        "Adds together all the values in cells B2 to B6",
        "Finds the average of cells B2 to B6",
        "Multiplies B2 by B6"
      ],
      answer: 1,
      explanation: "=SUM() adds up all the numbers in a selected range of cells. =SUM(B2:B6) adds the values in cells B2, B3, B4, B5, and B6 together to produce a total."
    },

    {
      id: "ict2_q3",
      topic: "Google Sheets",
      type: "mcq",
      question: "You are making a school budget spreadsheet and want to automatically calculate the total of all your expenses listed in cells C2 to C10. Which formula should you type?",
      options: ["=TOTAL(C2:C10)", "=SUM(C2:C10)", "=ADD(C2+C10)", "=COUNT(C2:C10)"],
      answer: 1,
      explanation: "=SUM(C2:C10) adds together all the values from cell C2 down to C10. This is the correct formula to calculate a total from a list of values in Google Sheets."
    },

    {
      id: "ict2_q4",
      topic: "Google Sheets",
      type: "mcq",
      question: "In a spreadsheet, what does the term <b>cell</b> refer to?",
      options: [
        "A single square where a row and a column meet",
        "The entire column of data",
        "The title at the top of the spreadsheet",
        "A formula that calculates a result"
      ],
      answer: 0,
      explanation: "A cell is the individual box where a row and column intersect. Cells are identified by their column letter and row number (e.g. B3 means column B, row 3). Each cell can hold a number, text, or a formula."
    },

    // ── Google Docs ────────────────────────────────────────────

    {
      id: "ict2_q5",
      topic: "Google Docs",
      type: "mcq",
      question: "You want to write a report with headings and paragraphs of text. Which Google app should you use?",
      options: ["Google Sheets", "Google Slides", "Google Docs", "Google Drive"],
      answer: 2,
      explanation: "Google Docs is Google's word processor, similar to Microsoft Word. It is used for creating text documents such as reports, essays, notes, and letters — complete with headings, paragraphs, and formatting."
    },

    {
      id: "ict2_q6",
      topic: "Google Docs",
      type: "mcq",
      question: "Which feature in Google Docs helps readers jump to different sections of a long document by clicking?",
      options: ["Spell checker", "Table of contents", "Page break", "Header"],
      answer: 1,
      explanation: "A Table of Contents in Google Docs automatically creates clickable links to each heading in the document. This is especially useful in long reports, allowing readers to navigate directly to any section."
    },

    {
      id: "ict2_q7",
      topic: "Google Docs",
      type: "mcq",
      question: "Google Docs is most similar to which Microsoft application?",
      options: ["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Microsoft Paint"],
      answer: 2,
      explanation: "Google Docs and Microsoft Word are both word processors used to create and edit text documents. Google Docs is cloud-based (saved on Google Drive), while Word is traditionally a desktop application."
    },

    // ── Google Slides ──────────────────────────────────────────

    {
      id: "ict2_q8",
      topic: "Google Slides",
      type: "mcq",
      question: "You are presenting your science research to the class using slides with images and bullet points. Which Google app should you use?",
      options: ["Google Docs", "Google Sheets", "Google Forms", "Google Slides"],
      answer: 3,
      explanation: "Google Slides is Google's presentation tool, similar to Microsoft PowerPoint. It allows you to create slideshows with text, images, videos, and animations to present information to an audience."
    },

    {
      id: "ict2_q9",
      topic: "Google Slides",
      type: "mcq",
      question: "Google Slides is most similar to which Microsoft application?",
      options: ["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Microsoft Access"],
      answer: 1,
      explanation: "Google Slides and Microsoft PowerPoint are both presentation tools used to create slideshows. Google Slides is cloud-based and free to use with a Google account."
    },

    // ── Mixed / Application ────────────────────────────────────

    {
      id: "ict2_q10",
      topic: "Google Sheets",
      type: "mcq",
      question: "In Google Sheets, what is the difference between a row and a column?",
      options: [
        "Rows run left-to-right (horizontal); columns run top-to-bottom (vertical)",
        "Rows run top-to-bottom (vertical); columns run left-to-right (horizontal)",
        "They are the same thing — just different names",
        "Rows contain numbers; columns contain text"
      ],
      answer: 0,
      explanation: "Rows run horizontally (left to right) and are numbered (1, 2, 3…). Columns run vertically (top to bottom) and are labelled with letters (A, B, C…). A cell is where they intersect, e.g. B3."
    },

    {
      id: "ict2_q11",
      topic: "Google Docs",
      type: "short",
      question: "What is the difference between Google Docs, Google Slides, and Google Sheets? Give <b>one specific use</b> for each app.",
      answer: "Google Docs is a word processor for writing and formatting text documents — for example, writing a science report or essay. Google Slides is a presentation tool for creating slideshows — for example, presenting research to the class. Google Sheets is a spreadsheet app for organising data and calculations — for example, creating a budget using the =SUM() formula.",
      explanation: "Each Google app has a specific purpose: Docs for text (like MS Word), Slides for presentations (like MS PowerPoint), and Sheets for data and calculations (like MS Excel). They are all stored in Google Drive and can be shared easily."
    }

  ]
};
