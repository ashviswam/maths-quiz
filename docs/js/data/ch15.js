const ch15 = {
  id: 15,
  title: "Location",
  icon: "🗺️",
  color: "#2563eb",
  topics: ["Grid references", "Locating points", "Coordinates", "Positive and negative coordinates", "Compass points"],
  questions: [
    {
      id: "c15_q1",
      topic: "Grid references",
      type: "mcq",
      question: "On a map grid, a library is found in column <strong>C</strong> and row <strong>4</strong>. What is the grid reference for the library?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" aria-label="Map grid with library at C4">
  <rect width="280" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines vertical -->
  <line x1="50" y1="30" x2="50" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="100" y1="30" x2="100" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="200" y1="30" x2="200" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="250" y1="30" x2="250" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <!-- grid lines horizontal -->
  <line x1="50" y1="30" x2="250" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="70" x2="250" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="110" x2="250" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="150" x2="250" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="190" x2="250" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <!-- column labels A B C D -->
  <text x="75" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <text x="125" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <text x="175" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <text x="225" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">D</text>
  <!-- row labels 1 2 3 4 -->
  <text x="40" y="55" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <text x="40" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">2</text>
  <text x="40" y="135" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">3</text>
  <text x="40" y="175" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">4</text>
  <!-- highlight cell C4 -->
  <rect x="150" y="150" width="50" height="40" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- library icon text -->
  <text x="175" y="174" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Library</text>
  <!-- label removed to avoid answer leakage -->
</svg>`,
      options: ["4C", "C4", "34", "43"],
      answer: 1,
      explanation: "Grid references are always written column first, then row. The column is C and the row is 4, so the grid reference is C4."
    },
    {
      id: "c15_q2",
      topic: "Grid references",
      type: "mcq",
      question: "A treasure map has columns labelled A to F and rows labelled 1 to 6. The treasure is at grid reference <strong>D2</strong>. Which column and row does this describe?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Treasure map grid with D2 highlighted">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- vertical grid lines for 6 columns -->
  <line x1="45" y1="30" x2="45" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="85" y1="30" x2="85" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="125" y1="30" x2="125" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="165" y1="30" x2="165" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="205" y1="30" x2="205" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="30" x2="245" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="285" y1="30" x2="285" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <!-- horizontal grid lines for 6 rows -->
  <line x1="45" y1="30" x2="285" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="58" x2="285" y2="58" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="86" x2="285" y2="86" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="114" x2="285" y2="114" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="142" x2="285" y2="142" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="170" x2="285" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="200" x2="285" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <!-- column labels A-F -->
  <text x="65" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A</text>
  <text x="105" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B</text>
  <text x="145" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
  <text x="185" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D</text>
  <text x="225" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E</text>
  <text x="265" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">F</text>
  <!-- row labels 1-6 -->
  <text x="37" y="49" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1</text>
  <text x="37" y="77" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2</text>
  <text x="37" y="105" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <text x="37" y="133" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4</text>
  <text x="37" y="161" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5</text>
  <text x="37" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6</text>
  <!-- highlight D2 cell -->
  <rect x="165" y="58" width="40" height="28" fill="rgba(244,63,94,0.18)" stroke="#f43f5e" stroke-width="2"/>
  <text x="185" y="77" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="14">★</text>

</svg>`,
      options: ["Column 2, Row D", "Column D, Row 2", "Column 4, Row 2", "Column D, Row 4"],
      answer: 1,
      explanation: "In a grid reference, the letter gives the column and the number gives the row. So D2 means column D, row 2."
    },
    {
      id: "c15_q3",
      topic: "Grid references",
      type: "input",
      question: "Look at a grid where columns are labelled A, B, C, D and rows are labelled 1, 2, 3, 4. A post office is in the <strong>third column</strong> and the <strong>first row</strong>. Write the grid reference for the post office.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" aria-label="Grid showing post office at third column, first row">
  <rect width="280" height="220" fill="#f8fafc" rx="8"/>
  <!-- vertical lines -->
  <line x1="50" y1="30" x2="50" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="100" y1="30" x2="100" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="200" y1="30" x2="200" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="250" y1="30" x2="250" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <!-- horizontal lines -->
  <line x1="50" y1="30" x2="250" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="75" x2="250" y2="75" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="120" x2="250" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="165" x2="250" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="195" x2="250" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <!-- column labels -->
  <text x="75" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <text x="125" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <text x="175" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <text x="225" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">D</text>
  <!-- row labels -->
  <text x="40" y="58" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <text x="40" y="103" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">2</text>
  <text x="40" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">3</text>
  <text x="40" y="185" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">4</text>
  <!-- highlight C1 -->
  <rect x="150" y="30" width="50" height="45" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="175" y="58" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Post Office</text>

</svg>`,
      answer: "C1",
      acceptableAnswers: ["C1"],
      explanation: "The third column is C and the first row is 1. Grid references are written column first, then row, so the answer is C1."
    },
    {
      id: "c15_q4",
      topic: "Grid references",
      type: "mcq",
      question: "On a grid, two parks are at grid references <strong>B3</strong> and <strong>B5</strong>. What do these two locations have in common?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" aria-label="Grid showing parks at B3 and B5 in same column">
  <rect width="280" height="220" fill="#f8fafc" rx="8"/>
  <!-- vertical lines -->
  <line x1="50" y1="30" x2="50" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="100" y1="30" x2="100" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="200" y1="30" x2="200" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="250" y1="30" x2="250" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <!-- horizontal lines -->
  <line x1="50" y1="30" x2="250" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="63" x2="250" y2="63" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="96" x2="250" y2="96" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="129" x2="250" y2="129" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="162" x2="250" y2="162" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="195" x2="250" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <!-- column labels A B C D -->
  <text x="75" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <text x="125" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <text x="175" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <text x="225" y="22" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">D</text>
  <!-- row labels 1-5 -->
  <text x="40" y="52" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <text x="40" y="85" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">2</text>
  <text x="40" y="118" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">3</text>
  <text x="40" y="151" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">4</text>
  <text x="40" y="182" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">5</text>
  <!-- highlight B column -->
  <rect x="100" y="30" width="50" height="165" fill="rgba(91,94,244,0.07)" stroke="none"/>
  <!-- B3 cell -->
  <rect x="100" y="96" width="50" height="33" fill="rgba(34,197,94,0.25)" stroke="#22c55e" stroke-width="2"/>
  <text x="125" y="117" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Park B3</text>
  <!-- B5 cell -->
  <rect x="100" y="162" width="50" height="33" fill="rgba(34,197,94,0.25)" stroke="#22c55e" stroke-width="2"/>
  <text x="125" y="183" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Park B5</text>

</svg>`,
      options: ["They are in the same row", "They are in the same column", "They are at the same point", "They are diagonally opposite"],
      answer: 1,
      explanation: "Both grid references start with B, which is the column label. This means both parks are in column B, just in different rows (row 3 and row 5)."
    },
    {
      id: "c15_q5",
      topic: "Locating points",
      type: "mcq",
      question: "On a Cartesian plane, which axis runs <strong>horizontally</strong> (left and right)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Cartesian plane showing x and y axes">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- y-axis -->
  <line x1="140" y1="15" x2="140" y2="185" stroke="#64748b" stroke-width="2"/>
  <!-- x-axis -->
  <line x1="15" y1="100" x2="265" y2="100" stroke="#5b5ef4" stroke-width="3"/>
  <!-- arrowheads x-axis -->
  <polygon points="265,100 257,95 257,105" fill="#5b5ef4"/>
  <polygon points="15,100 23,95 23,105" fill="#5b5ef4"/>
  <!-- arrowheads y-axis -->
  <polygon points="140,15 135,23 145,23" fill="#64748b"/>
  <polygon points="140,185 135,177 145,177" fill="#64748b"/>
  <!-- labels -->
  <text x="270" y="104" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">x</text>
  <text x="144" y="13" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">y</text>
  <!-- origin -->
  <circle cx="140" cy="100" r="3" fill="#64748b"/>
  <text x="133" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <!-- vertical label -->
  <text x="20" y="55" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">y-axis</text>
  <text x="20" y="68" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">vertical</text>
</svg>`,
      options: ["The y-axis", "The origin", "The x-axis", "The z-axis"],
      answer: 2,
      explanation: "The x-axis is the horizontal axis on a Cartesian plane. The y-axis runs vertically (up and down). They meet at the origin."
    },
    {
      id: "c15_q6",
      topic: "Locating points",
      type: "mcq",
      question: "A point is plotted by moving <strong>5 units right</strong> and <strong>3 units up</strong> from the origin. What are the coordinates of this point?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" aria-label="Coordinate grid showing point at (5,3)">
  <rect width="280" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="30" y1="250" x2="260" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="220" x2="260" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="190" x2="260" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="160" x2="260" y2="160" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="130" x2="260" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="100" x2="260" y2="100" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="70" x2="260" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="250" x2="30" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="90" y1="250" x2="90" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="250" x2="120" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="250" x2="150" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="180" y1="250" x2="180" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="210" y1="250" x2="210" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="240" y1="250" x2="240" y2="30" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="30" y1="250" x2="265" y2="250" stroke="#64748b" stroke-width="2"/>
  <line x1="30" y1="250" x2="30" y2="25" stroke="#64748b" stroke-width="2"/>
  <!-- arrowheads -->
  <polygon points="265,250 257,245 257,255" fill="#64748b"/>
  <polygon points="30,25 25,33 35,33" fill="#64748b"/>
  <!-- axis labels -->
  <text x="268" y="254" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="33" y="23" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- x-axis numbers -->
  <text x="60" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="90" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="120" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="150" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="180" y="265" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">5</text>
  <text x="210" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="240" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <!-- y-axis numbers -->
  <text x="22" y="254" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="22" y="224" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="22" y="194" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="22" y="164" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3</text>
  <text x="22" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="22" y="104" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <!-- dashed lines to point -->
  <line x1="180" y1="250" x2="180" y2="160" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="30" y1="160" x2="180" y2="160" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- point at (5,3) -->
  <circle cx="180" cy="160" r="6" fill="#f43f5e"/>
</svg>`,
      options: ["(3, 5)", "(5, 3)", "(−5, 3)", "(5, −3)"],
      answer: 1,
      explanation: "Coordinates are written as (x, y). Moving right gives a positive x-value of 5, and moving up gives a positive y-value of 3. So the point is (5, 3)."
    },
    {
      id: "c15_q7",
      topic: "Locating points",
      type: "input",
      question: "A point P is located at 4 units along the x-axis and 7 units up the y-axis. Write the coordinates of point P in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" aria-label="Coordinate grid showing point P at (4,7)">
  <rect width="280" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines horizontal -->
  <line x1="30" y1="250" x2="265" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="220" x2="265" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="190" x2="265" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="160" x2="265" y2="160" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="130" x2="265" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="100" x2="265" y2="100" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="70" x2="265" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="40" x2="265" y2="40" stroke="#e2e8f0" stroke-width="1"/>
  <!-- grid lines vertical -->
  <line x1="30" y1="250" x2="30" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="90" y1="250" x2="90" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="250" x2="120" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="250" x2="150" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="180" y1="250" x2="180" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="210" y1="250" x2="210" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="240" y1="250" x2="240" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="30" y1="250" x2="265" y2="250" stroke="#64748b" stroke-width="2"/>
  <line x1="30" y1="250" x2="30" y2="25" stroke="#64748b" stroke-width="2"/>
  <polygon points="265,250 257,245 257,255" fill="#64748b"/>
  <polygon points="30,25 25,33 35,33" fill="#64748b"/>
  <text x="268" y="254" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="33" y="23" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- x-axis numbers 0-7 -->
  <text x="30" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="60" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="90" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="120" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="150" y="265" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4</text>
  <text x="180" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="210" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="240" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <!-- y-axis numbers 0-7 -->
  <text x="22" y="254" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="22" y="224" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="22" y="194" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="22" y="164" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="22" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="22" y="104" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="22" y="74" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="22" y="44" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">7</text>
  <!-- dashed lines to P(4,7): x=150, y=40 -->
  <line x1="150" y1="250" x2="150" y2="40" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="30" y1="40" x2="150" y2="40" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- point P -->
  <circle cx="150" cy="40" r="6" fill="#5b5ef4"/>
  <text x="158" y="36" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">P</text>
</svg>`,
      answer: "(4, 7)",
      acceptableAnswers: ["(4, 7)", "4, 7", "4,7"],
      explanation: "The x-coordinate is the horizontal distance (4) and the y-coordinate is the vertical distance (7). Coordinates are written as (x, y), so point P is at (4, 7)."
    },
    {
      id: "c15_q8",
      topic: "Coordinates",
      type: "mcq",
      question: "What are the coordinates of the <strong>origin</strong> on a Cartesian plane?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Cartesian plane showing origin at (0,0)">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- axes -->
  <line x1="20" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="15" x2="140" y2="185" stroke="#64748b" stroke-width="2"/>
  <polygon points="260,100 252,95 252,105" fill="#64748b"/>
  <polygon points="140,15 135,23 145,23" fill="#64748b"/>
  <text x="263" y="104" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="143" y="13" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- tick marks -->
  <line x1="100" y1="96" x2="100" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="96" x2="180" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="96" x2="60" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="96" x2="220" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <line x1="136" y1="60" x2="144" y2="60" stroke="#64748b" stroke-width="1.5"/>
  <line x1="136" y1="140" x2="144" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <!-- origin highlighted -->
  <circle cx="140" cy="100" r="7" fill="#f43f5e"/>
  <text x="148" y="94" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Origin</text>
</svg>`,
      options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
      answer: 3,
      explanation: "The origin is the point where the x-axis and y-axis cross. At this point, both the x-value and y-value are zero, so the coordinates are (0, 0)."
    },
    {
      id: "c15_q9",
      topic: "Coordinates",
      type: "mcq",
      question: "Point A has coordinates <strong>(6, 0)</strong>. Where is this point located?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Coordinate plane showing point A at (6,0) on x-axis">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- axes -->
  <line x1="20" y1="100" x2="265" y2="100" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="15" x2="140" y2="185" stroke="#64748b" stroke-width="2"/>
  <polygon points="265,100 257,95 257,105" fill="#64748b"/>
  <polygon points="140,15 135,23 145,23" fill="#64748b"/>
  <text x="268" y="104" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="143" y="13" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- x-axis ticks and labels: scale 20px per unit, origin at x=140 -->
  <line x1="160" y1="96" x2="160" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="160" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <line x1="180" y1="96" x2="180" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="180" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <line x1="200" y1="96" x2="200" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="200" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <line x1="220" y1="96" x2="220" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="220" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <line x1="240" y1="96" x2="240" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="240" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <line x1="260" y1="96" x2="260" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="260" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6</text>
  <!-- negative x -->
  <line x1="120" y1="96" x2="120" y2="104" stroke="#64748b" stroke-width="1.5"/>
  <text x="120" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <!-- y-axis ticks -->
  <line x1="136" y1="80" x2="144" y2="80" stroke="#64748b" stroke-width="1.5"/>
  <text x="134" y="84" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <line x1="136" y1="120" x2="144" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <text x="134" y="124" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <!-- origin label -->
  <text x="134" y="115" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <!-- point A at (6,0): x=140+6*20=260, y=100 -->
  <circle cx="260" cy="100" r="6" fill="#f43f5e"/>
  <text x="258" y="88" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A(6, 0)</text>

</svg>`,
      options: ["On the y-axis", "At the origin", "On the x-axis", "In Quadrant 1"],
      answer: 2,
      explanation: "When the y-coordinate is 0, the point lies on the x-axis. Point A is 6 units to the right of the origin, directly on the x-axis."
    },
    {
      id: "c15_q10",
      topic: "Coordinates",
      type: "input",
      question: "A square has three vertices at (1, 1), (4, 1), and (4, 4). What are the coordinates of the <strong>fourth vertex</strong>? Write your answer in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" aria-label="Coordinate grid showing square with three vertices and missing fourth">
  <rect width="280" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines: origin at (30,250), scale 40px/unit -->
  <line x1="30" y1="250" x2="265" y2="250" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="210" x2="265" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="170" x2="265" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="130" x2="265" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="90" x2="265" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="50" x2="265" y2="50" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="30" x2="30" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="30" x2="70" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="110" y1="30" x2="110" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="190" y1="30" x2="190" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="230" y1="30" x2="230" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="30" y1="250" x2="265" y2="250" stroke="#64748b" stroke-width="2"/>
  <line x1="30" y1="250" x2="30" y2="25" stroke="#64748b" stroke-width="2"/>
  <polygon points="265,250 257,245 257,255" fill="#64748b"/>
  <polygon points="30,25 25,33 35,33" fill="#64748b"/>
  <text x="268" y="254" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="33" y="23" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- axis labels: x=30+n*40, y=250-n*40 -->
  <text x="30" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="70" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="110" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="150" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="190" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="230" y="265" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="22" y="254" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="22" y="214" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="22" y="174" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="22" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="22" y="94" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- square: (1,1)=(70,210), (4,1)=(190,210), (4,4)=(190,90), (1,4)=(70,90) -->
  <!-- draw three sides (known vertices) solid -->
  <polygon points="70,210 190,210 190,90 70,90" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2" stroke-dasharray="none"/>
  <!-- dashed side for missing vertex connection -->
  <line x1="70" y1="210" x2="70" y2="90" stroke="#5b5ef4" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- known vertices -->
  <circle cx="70" cy="210" r="5" fill="#5b5ef4"/>
  <text x="58" y="225" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(1,1)</text>
  <circle cx="190" cy="210" r="5" fill="#5b5ef4"/>
  <text x="194" y="225" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(4,1)</text>
  <circle cx="190" cy="90" r="5" fill="#5b5ef4"/>
  <text x="194" y="87" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(4,4)</text>
  <!-- missing vertex (1,4) with question mark -->
  <circle cx="70" cy="90" r="6" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="38" y="87" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? (?,?)</text>
</svg>`,
      answer: "(1, 4)",
      acceptableAnswers: ["(1, 4)", "1, 4", "1,4"],
      explanation: "The square has vertices at (1,1), (4,1), (4,4). The fourth corner must be directly above (1,1) and to the left of (4,4), which is at (1, 4)."
    },
    {
      id: "c15_q11",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "In which quadrant is the point <strong>(−3, 5)</strong> located?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Four-quadrant coordinate grid showing point at (-3,5)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid lines: center at (170,170), 25px per unit -->
  <line x1="20" y1="20" x2="20" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="20" x2="320" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="20" x2="320" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="295" x2="320" y2="295" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="320" x2="320" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <!-- quadrant shading: Q2 top-left -->
  <rect x="20" y="20" width="150" height="150" fill="rgba(91,94,244,0.07)"/>
  <!-- axes -->
  <line x1="20" y1="170" x2="325" y2="170" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="20" x2="170" y2="325" stroke="#64748b" stroke-width="2"/>
  <polygon points="325,170 317,165 317,175" fill="#64748b"/>
  <polygon points="170,20 165,28 175,28" fill="#64748b"/>
  <text x="328" y="174" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="173" y="18" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- quadrant labels -->
  <text x="90" y="90" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q2</text>
  <text x="250" y="90" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12">Q1</text>
  <text x="90" y="250" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12">Q3</text>
  <text x="250" y="250" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12">Q4</text>
  <!-- axis labels: -6 to 6, 25px per unit from center 170 -->
  <text x="70" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <text x="95" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="120" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="145" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="195" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="220" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="245" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="270" y="184" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="162" y="70" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="162" y="95" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">5</text>
  <text x="162" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="162" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="162" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="162" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="162" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="162" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <!-- dashed lines to (-3,5): x=170+(-3)*25=95, y=170-5*25=45 -->
  <line x1="95" y1="170" x2="95" y2="45" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="170" y1="45" x2="95" y2="45" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- point (-3,5) -->
  <circle cx="95" cy="45" r="6" fill="#f43f5e"/>
  <text x="103" y="42" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(−3, 5)</text>
</svg>`,
      options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"],
      answer: 1,
      explanation: "Quadrant 2 has a negative x-value and a positive y-value. Since −3 is negative and 5 is positive, the point (−3, 5) is in Quadrant 2."
    },
    {
      id: "c15_q12",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "A point has a <strong>negative x-coordinate</strong> and a <strong>negative y-coordinate</strong>. In which quadrant does it lie?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" aria-label="Four quadrant diagram showing sign rules">
  <rect width="280" height="280" fill="#f8fafc" rx="8"/>
  <!-- quadrant fills -->
  <rect x="20" y="20" width="120" height="120" fill="rgba(91,94,244,0.08)"/>
  <rect x="140" y="20" width="120" height="120" fill="rgba(34,197,94,0.08)"/>
  <rect x="140" y="140" width="120" height="120" fill="rgba(245,158,11,0.08)"/>
  <rect x="20" y="140" width="120" height="120" fill="rgba(244,63,94,0.18)"/>
  <!-- axes -->
  <line x1="20" y1="140" x2="265" y2="140" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="20" x2="140" y2="265" stroke="#64748b" stroke-width="2"/>
  <polygon points="265,140 257,135 257,145" fill="#64748b"/>
  <polygon points="140,20 135,28 145,28" fill="#64748b"/>
  <text x="268" y="144" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="143" y="18" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- quadrant labels with sign info -->
  <text x="80" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q2</text>
  <text x="80" y="91" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11">(−, +)</text>
  <text x="200" y="75" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q1</text>
  <text x="200" y="91" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11">(+, +)</text>
  <text x="200" y="200" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q4</text>
  <text x="200" y="216" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11">(+, −)</text>
  <!-- Q3 label (unlabelled to avoid answer leakage) -->
  <text x="80" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q3</text>
</svg>`,
      options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"],
      answer: 2,
      explanation: "Quadrant 3 is the lower-left region where both x and y are negative. Quadrant 1 is (+, +), Quadrant 2 is (−, +), and Quadrant 4 is (+, −)."
    },
    {
      id: "c15_q13",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "Which of the following points is in <strong>Quadrant 4</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Four-quadrant grid showing candidate points">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="295" x2="320" y2="295" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="20" y1="170" x2="325" y2="170" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="20" x2="170" y2="325" stroke="#64748b" stroke-width="2"/>
  <polygon points="325,170 317,165 317,175" fill="#64748b"/>
  <polygon points="170,20 165,28 175,28" fill="#64748b"/>
  <text x="328" y="174" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="173" y="18" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- axis numbers: center=170, 25px/unit -->
  <text x="95" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="162" y="70" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="162" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="162" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="162" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="162" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="162" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="162" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="162" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <text x="162" y="295" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-5</text>
  <!-- (3,7): x=170+3*25=245, y=170-7*25=(-5) clamped to 25 -->
  <circle cx="245" cy="25" r="5" fill="#64748b"/>
  <text x="250" y="22" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">(3,7)</text>
  <!-- (-4,2): x=170-4*25=70, y=170-2*25=120 -->
  <circle cx="70" cy="120" r="5" fill="#64748b"/>
  <text x="55" y="117" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">(−4,2)</text>
  <!-- (-5,-6): x=170-5*25=45, y=170+6*25=320 -->
  <circle cx="45" cy="320" r="5" fill="#64748b"/>
  <text x="50" y="320" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">(−5,−6)</text>
  <!-- (2,-8): x=170+2*25=220, y=170+8*25=370 but clamped; show at y=310 -->
  <circle cx="220" cy="310" r="6" fill="#f43f5e"/>
  <text x="225" y="308" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(2,−8)</text>
</svg>`,
      options: ["(3, 7)", "(−4, 2)", "(−5, −6)", "(2, −8)"],
      answer: 3,
      explanation: "Quadrant 4 has a positive x-coordinate and a negative y-coordinate. Only (2, −8) fits this pattern: x = 2 (positive) and y = −8 (negative)."
    },
    {
      id: "c15_q14",
      topic: "Positive and negative coordinates",
      type: "input",
      question: "Point B is at (−4, −3) and point C is the reflection of B across the <strong>y-axis</strong>. What are the coordinates of point C? Write your answer in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Coordinate grid showing reflection of B(-4,-3) across y-axis to C(4,-3)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid lines: center (170,170), 25px/unit -->
  <line x1="20" y1="20" x2="20" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="20" x2="320" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="295" x2="320" y2="295" stroke="#e2e8f0" stroke-width="1"/>
  <!-- y-axis mirror line highlighted -->
  <line x1="170" y1="20" x2="170" y2="325" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- axes -->
  <line x1="20" y1="170" x2="325" y2="170" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="20" x2="170" y2="325" stroke="#64748b" stroke-width="2"/>
  <polygon points="325,170 317,165 317,175" fill="#64748b"/>
  <polygon points="170,20 165,28 175,28" fill="#64748b"/>
  <text x="328" y="174" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="173" y="18" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- axis numbers -->
  <text x="70" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <text x="95" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="162" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="162" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="162" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="162" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="162" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="162" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <!-- reflection arrow -->
  <line x1="75" y1="245" x2="265" y2="245" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- B(-4,-3): x=170+(-4)*25=70, y=170+3*25=245 -->
  <circle cx="70" cy="245" r="6" fill="#5b5ef4"/>
  <text x="55" y="240" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B(−4,−3)</text>
  <!-- C: reflected point -->
  <circle cx="270" cy="245" r="6" fill="#f43f5e"/>
  <text x="272" y="240" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
  <!-- mirror label -->
  <text x="178" y="35" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">y-axis (mirror)</text>
</svg>`,
      answer: "(4, -3)",
      acceptableAnswers: ["(4, -3)", "4, -3", "4,-3", "(4, −3)"],
      explanation: "Reflecting across the y-axis changes the sign of the x-coordinate but keeps the y-coordinate the same. So (−4, −3) becomes (4, −3)."
    },
    {
      id: "c15_q15",
      topic: "Compass points",
      type: "mcq",
      question: "You are facing <strong>North</strong> and turn <strong>90° clockwise</strong>. Which direction are you now facing?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" aria-label="Compass rose showing 90 degree clockwise turn from North to East">
  <rect width="220" height="220" fill="#f8fafc" rx="8"/>
  <!-- compass circle -->
  <circle cx="110" cy="110" r="85" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <!-- cardinal arms -->
  <line x1="110" y1="25" x2="110" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="25" y1="110" x2="195" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <!-- N arrow (highlighted start) -->
  <line x1="110" y1="110" x2="110" y2="35" stroke="#5b5ef4" stroke-width="3"/>
  <polygon points="110,28 104,42 116,42" fill="#5b5ef4"/>
  <text x="110" y="20" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">N</text>
  <!-- E arrow (highlighted end after 90 CW) -->
  <line x1="110" y1="110" x2="185" y2="110" stroke="#f43f5e" stroke-width="3"/>
  <polygon points="192,110 178,104 178,116" fill="#f43f5e"/>
  <text x="205" y="114" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">E</text>
  <!-- S and W dim -->
  <text x="110" y="208" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13">S</text>
  <text x="16" y="114" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13">W</text>
  <!-- 90 degree arc from N to E clockwise -->
  <path d="M 110 35 A 75 75 0 0 1 185 110" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="158" y="60" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">90° CW</text>
</svg>`,
      options: ["South", "West", "North-East", "East"],
      answer: 3,
      explanation: "Turning 90° clockwise from North brings you to East. A full clockwise rotation goes: North → East → South → West → North."
    },
    {
      id: "c15_q16",
      topic: "Compass points",
      type: "mcq",
      question: "Which compass direction is exactly <strong>between South and West</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" aria-label="Compass rose showing SW between South and West">
  <rect width="220" height="220" fill="#f8fafc" rx="8"/>
  <circle cx="110" cy="110" r="85" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <!-- diagonal lines -->
  <line x1="50" y1="50" x2="170" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="50" x2="50" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <!-- cardinal lines -->
  <line x1="110" y1="25" x2="110" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="25" y1="110" x2="195" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <!-- N arrow -->
  <line x1="110" y1="110" x2="110" y2="35" stroke="#64748b" stroke-width="2"/>
  <polygon points="110,28 105,40 115,40" fill="#64748b"/>
  <text x="110" y="20" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">N</text>
  <!-- E arrow -->
  <line x1="110" y1="110" x2="185" y2="110" stroke="#64748b" stroke-width="2"/>
  <text x="204" y="114" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">E</text>
  <!-- S arrow -->
  <line x1="110" y1="110" x2="110" y2="185" stroke="#64748b" stroke-width="2"/>
  <polygon points="110,192 105,180 115,180" fill="#64748b"/>
  <text x="110" y="208" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">S</text>
  <!-- W arrow -->
  <line x1="110" y1="110" x2="35" y2="110" stroke="#64748b" stroke-width="2"/>
  <polygon points="28,110 40,105 40,115" fill="#64748b"/>
  <text x="16" y="114" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">W</text>
  <!-- highlighted diagonal direction between S and W -->
  <line x1="110" y1="110" x2="50" y2="170" stroke="#f43f5e" stroke-width="3"/>
  <polygon points="44,176 52,162 62,172" fill="#f43f5e"/>
  <!-- NE, NW, SE dim labels -->
  <text x="188" y="46" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">NE</text>
  <text x="22" y="46" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">NW</text>
  <text x="186" y="192" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">SE</text>
  <!-- arc showing highlighted direction is between S and W -->
  <path d="M 110 185 A 75 75 0 0 1 35 110" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
</svg>`,
      options: ["SE", "NW", "SW", "WS"],
      answer: 2,
      explanation: "South-West (SW) is the compass direction that lies exactly halfway between South and West. It is at 225° measured clockwise from North."
    },
    {
      id: "c15_q17",
      topic: "Compass points",
      type: "mcq",
      question: "A hiker walks due <strong>East</strong>. How many degrees clockwise from North is she travelling?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" aria-label="Compass showing East is 90 degrees clockwise from North">
  <rect width="220" height="220" fill="#f8fafc" rx="8"/>
  <circle cx="110" cy="110" r="85" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <!-- cardinal lines -->
  <line x1="110" y1="25" x2="110" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="25" y1="110" x2="195" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <!-- N arrow -->
  <line x1="110" y1="110" x2="110" y2="35" stroke="#64748b" stroke-width="2.5"/>
  <polygon points="110,28 105,40 115,40" fill="#64748b"/>
  <text x="110" y="20" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">N (0°)</text>
  <!-- S -->
  <text x="110" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13">S (180°)</text>
  <!-- W -->
  <text x="14" y="114" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13">W</text>
  <text x="14" y="126" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">(270°)</text>
  <!-- E arrow highlighted -->
  <line x1="110" y1="110" x2="185" y2="110" stroke="#f43f5e" stroke-width="3"/>
  <polygon points="192,110 178,104 178,116" fill="#f43f5e"/>
  <text x="204" y="114" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">E</text>
  <!-- arc from N to E -->
  <path d="M 110 35 A 75 75 0 0 1 185 110" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="185,110 176,101 180,114" fill="#f59e0b"/>
</svg>`,
      options: ["45°", "90°", "180°", "270°"],
      answer: 1,
      explanation: "Compass bearings are measured clockwise from North. East is exactly 90° clockwise from North. South is 180° and West is 270°."
    },
    {
      id: "c15_q18",
      topic: "Compass points",
      type: "input",
      question: "A compass shows 8 main directions: N, NE, E, SE, S, SW, W, NW. How many degrees apart is each neighbouring direction from the next? Write just the number.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" aria-label="8-point compass rose showing 45 degrees between each direction">
  <rect width="220" height="220" fill="#f8fafc" rx="8"/>
  <circle cx="110" cy="110" r="85" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <!-- all 8 direction lines -->
  <line x1="110" y1="110" x2="110" y2="30" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="170" y2="50" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="190" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="170" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="110" y2="190" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="50" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="30" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="50" y2="50" stroke="#5b5ef4" stroke-width="2"/>
  <!-- direction labels -->
  <text x="110" y="20" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">N</text>
  <text x="176" y="42" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">NE</text>
  <text x="198" y="114" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E</text>
  <text x="174" y="184" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">SE</text>
  <text x="110" y="208" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">S</text>
  <text x="32" y="184" text-anchor="end" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">SW</text>
  <text x="22" y="114" text-anchor="end" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">W</text>
  <text x="38" y="42" text-anchor="end" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">NW</text>
  <!-- 45 degree arc between N and NE -->
  <path d="M 110 50 A 60 60 0 0 1 152 68" fill="none" stroke="#f43f5e" stroke-width="2"/>
  <text x="142" y="58" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">45°</text>
  <!-- center dot -->
  <circle cx="110" cy="110" r="4" fill="#64748b"/>
  <!-- formula at bottom -->
</svg>`,
      answer: "45",
      acceptableAnswers: ["45", "45°"],
      explanation: "A full circle is 360°. With 8 equally spaced compass points, the angle between each neighbouring direction is 360° ÷ 8 = 45°."
    },
    {
      id: "c15_q19",
      topic: "Compass points",
      type: "mcq",
      question: "On the 8-point compass, which direction is directly <strong>opposite</strong> to South-West (SW)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" aria-label="8-point compass rose">
  <rect width="220" height="220" fill="#f8fafc" rx="8"/>
  <circle cx="110" cy="110" r="85" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <!-- all 8 direction lines -->
  <line x1="110" y1="110" x2="110" y2="30" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="170" y2="50" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="190" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="170" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="110" y2="190" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="50" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="30" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="110" y1="110" x2="50" y2="50" stroke="#5b5ef4" stroke-width="2"/>
  <!-- direction labels -->
  <text x="110" y="20" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">N</text>
  <text x="176" y="42" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">NE</text>
  <text x="198" y="114" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E</text>
  <text x="174" y="184" text-anchor="start" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">SE</text>
  <text x="110" y="208" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">S</text>
  <text x="32" y="184" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">SW</text>
  <text x="22" y="114" text-anchor="end" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">W</text>
  <text x="38" y="42" text-anchor="end" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">NW</text>
  <!-- SW direction highlighted -->
  <line x1="110" y1="110" x2="50" y2="170" stroke="#f43f5e" stroke-width="3"/>
  <polygon points="44,176 52,162 62,172" fill="#f43f5e"/>
  <!-- center dot -->
  <circle cx="110" cy="110" r="4" fill="#64748b"/>
</svg>`,
      options: ["NW", "NE", "SE", "N"],
      answer: 1,
      explanation: "The direction directly opposite SW on the compass is NE. SW points toward the lower-left; NE points toward the upper-right — they are 180° apart."
    },
    {
      id: "c15_q20",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "The point <strong>(0, −5)</strong> is plotted on a Cartesian plane. Which statement best describes its position?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" aria-label="Coordinate plane showing point (0,-5) on y-axis below origin">
  <rect width="280" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines: center (140,140), 25px/unit -->
  <line x1="15" y1="140" x2="270" y2="140" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="115" x2="270" y2="115" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="90" x2="270" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="65" x2="270" y2="65" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="40" x2="270" y2="40" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="165" x2="270" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="190" x2="270" y2="190" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="215" x2="270" y2="215" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="240" x2="270" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="15" y1="265" x2="270" y2="265" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="140" y1="15" x2="140" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="115" y1="15" x2="115" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="90" y1="15" x2="90" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="65" y1="15" x2="65" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="40" y1="15" x2="40" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="165" y1="15" x2="165" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="190" y1="15" x2="190" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="215" y1="15" x2="215" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="240" y1="15" x2="240" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="265" y1="15" x2="265" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="15" y1="140" x2="272" y2="140" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="15" x2="140" y2="272" stroke="#64748b" stroke-width="2"/>
  <polygon points="272,140 264,135 264,145" fill="#64748b"/>
  <polygon points="140,15 135,23 145,23" fill="#64748b"/>
  <text x="275" y="144" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="143" y="13" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- axis numbers -->
  <text x="90" y="153" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="115" y="153" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="165" y="153" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="190" y="153" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="132" y="118" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="132" y="93" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="132" y="68" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">3</text>
  <text x="132" y="43" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4</text>
  <text x="132" y="168" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="132" y="193" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <text x="132" y="218" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-3</text>
  <text x="132" y="243" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-4</text>
  <text x="132" y="268" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">-5</text>
  <!-- point (0,-5): x=140, y=140+5*25=265 -->
  <circle cx="140" cy="265" r="6" fill="#f43f5e"/>
  <text x="150" y="262" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(0, −5)</text>

</svg>`,
      options: [
        "It is 5 units above the x-axis on the y-axis",
        "It is 5 units to the left of the origin on the x-axis",
        "It is 5 units below the x-axis on the y-axis",
        "It is in Quadrant 3"
      ],
      answer: 2,
      explanation: "When x = 0, the point lies on the y-axis. A y-value of −5 means the point is 5 units below the origin, so it is on the y-axis, 5 units below the x-axis."
    },
    {
      id: "c15_q32",
      topic: "Map scale",
      type: "mcq",
      question: "A map has a scale of <strong>1 cm : 5 km</strong>. Two towns are <strong>4 cm apart</strong> on the map. What is the real distance between them?",
      options: ["5 km", "9 km", "20 km", "45 km"],
      answer: 2,
      explanation: "Each centimetre on the map represents 5 km in real life. For 4 cm: real distance = 4 × 5 = 20 km."
    },
    {
      id: "c15_q33",
      topic: "Map scale",
      type: "mcq",
      question: "A map has a scale where <strong>1 cm represents 2 km</strong>. A river measures <strong>6 cm</strong> on the map. How long is the river in real life?",
      options: ["3 km", "8 km", "12 km", "20 km"],
      answer: 2,
      explanation: "If 1 cm represents 2 km, then 6 cm represents 6 × 2 = 12 km."
    },
    {
      id: "c15_q34",
      topic: "Plotting points in all four quadrants",
      type: "mcq",
      question: "Which of the following points is correctly plotted in <strong>Quadrant 3</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" aria-label="Four-quadrant grid with four candidate points">
  <rect width="300" height="300" fill="#f8fafc" rx="8"/>
  <!-- quadrant fills -->
  <rect x="20" y="150" width="130" height="130" fill="rgba(244,63,94,0.08)"/>
  <!-- grid lines: center (150,150), 30px/unit -->
  <line x1="20" y1="150" x2="285" y2="150" stroke="#64748b" stroke-width="2"/>
  <line x1="150" y1="20" x2="150" y2="285" stroke="#64748b" stroke-width="2"/>
  <polygon points="285,150 277,145 277,155" fill="#64748b"/>
  <polygon points="150,20 145,28 155,28" fill="#64748b"/>
  <text x="288" y="154" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="153" y="18" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- Q labels -->
  <text x="85" y="90" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Q2</text>
  <text x="215" y="90" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Q1</text>
  <text x="85" y="215" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q3</text>
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Q4</text>
  <!-- axis numbers: 30px/unit -->
  <text x="120" y="163" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="180" y="163" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="210" y="163" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2</text>
  <text x="142" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">1</text>
  <text x="142" y="180" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-1</text>
  <text x="142" y="210" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">-2</text>
  <!-- Point A (2,3) Q1: x=150+2*30=210, y=150-3*30=60 -->
  <circle cx="210" cy="60" r="6" fill="#64748b"/>
  <text x="218" y="57" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">A(2,3)</text>
  <!-- Point B (-1,2) Q2: x=150-30=120, y=150-2*30=90 -->
  <circle cx="120" cy="90" r="6" fill="#64748b"/>
  <text x="68" y="87" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">B(−1,2)</text>
  <!-- Point C (-2,-3) Q3: x=150-2*30=90, y=150+3*30=240 -->
  <circle cx="90" cy="240" r="7" fill="#f43f5e"/>
  <text x="38" y="237" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C(−2,−3)</text>
  <!-- Point D (1,-2) Q4: x=150+30=180, y=150+2*30=210 -->
  <circle cx="180" cy="210" r="6" fill="#64748b"/>
  <text x="184" y="207" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">D(1,−2)</text>
</svg>`,
      options: ["A(2, 3)", "B(−1, 2)", "C(−2, −3)", "D(1, −2)"],
      answer: 2,
      explanation: "Quadrant 3 has both x and y negative. A(2,3) is in Q1 (+,+). B(−1,2) is in Q2 (−,+). D(1,−2) is in Q4 (+,−). Only C(−2,−3) has both coordinates negative, placing it in Quadrant 3."
    },
    {
      id: "c15_q35",
      topic: "Plotting points in all four quadrants",
      type: "input",
      question: "Point K is at <strong>(−3, 2)</strong>. Point L is the reflection of K in the <strong>y-axis</strong>. What are the coordinates of L? Write your answer as (x, y).",
      answer: "(3, 2)",
      acceptableAnswers: ["(3, 2)", "3, 2", "3,2"],
      explanation: "Reflecting in the y-axis changes the sign of the x-coordinate but keeps the y-coordinate the same. So (−3, 2) becomes (3, 2)."
    },
    {
      id: "c15_q36",
      topic: "Coordinates of shapes",
      type: "mcq",
      question: "A triangle has vertices at <strong>(0, 0)</strong>, <strong>(4, 0)</strong> and <strong>(2, 3)</strong>. What type of triangle is it?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260" aria-label="Triangle with vertices at (0,0), (4,0) and (2,3) on coordinate grid">
  <rect width="300" height="260" fill="#f8fafc" rx="8"/>
  <!-- grid: origin at (50,220), 40px/unit -->
  <line x1="50" y1="220" x2="290" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="180" x2="290" y2="180" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="140" x2="290" y2="140" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="100" x2="290" y2="100" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="60" x2="290" y2="60" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="290" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="50" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="90" y1="20" x2="90" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="130" y1="20" x2="130" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="210" y1="20" x2="210" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="250" y1="20" x2="250" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="290" y1="20" x2="290" y2="230" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="220" x2="295" y2="220" stroke="#64748b" stroke-width="2"/>
  <line x1="50" y1="220" x2="50" y2="15" stroke="#64748b" stroke-width="2"/>
  <!-- axis labels: x=50+n*40, y=220-n*40 -->
  <text x="50" y="235" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="90" y="235" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="130" y="235" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="170" y="235" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="210" y="235" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="42" y="224" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="42" y="184" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="42" y="144" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="42" y="104" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- (0,0)=(50,220), (4,0)=(210,220), (2,3)=(130,100) -->
  <polygon points="50,220 210,220 130,100" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="220" r="5" fill="#5b5ef4"/>
  <text x="38" y="216" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11">(0,0)</text>
  <circle cx="210" cy="220" r="5" fill="#5b5ef4"/>
  <text x="215" y="216" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11">(4,0)</text>
  <circle cx="130" cy="100" r="5" fill="#5b5ef4"/>
  <text x="136" y="97" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11">(2,3)</text>
</svg>`,
      options: ["Scalene triangle", "Equilateral triangle", "Right-angled triangle", "Isosceles triangle"],
      answer: 3,
      explanation: "The base runs from (0,0) to (4,0), a width of 4. The apex is at (2,3), which is directly above the midpoint of the base at x = 2. Since the apex is above the midpoint, both slanting sides are equal in length, making it an <strong>isosceles triangle</strong>."
    },
    {
      id: "c15_q37",
      topic: "Coordinates of shapes",
      type: "input",
      question: "A square has vertices at <strong>(1, 2)</strong>, <strong>(4, 2)</strong> and <strong>(4, 5)</strong>. What are the coordinates of the <strong>fourth vertex</strong>? Write your answer as (x, y).",
      answer: "(1, 5)",
      acceptableAnswers: ["(1, 5)", "1, 5", "1,5"],
      explanation: "The side from (1,2) to (4,2) is horizontal with length 3. The side from (4,2) to (4,5) is vertical with length 3. For a square, the fourth vertex must be directly above (1,2) and to the left of (4,5), at x=1 and y=5. So the fourth vertex is (1, 5)."
    },
    {
      id: "c15_q40",
      topic: "Coordinates of shapes",
      type: "mcq",
      question: "Three corners of a rectangle are at <strong>(2, 1)</strong>, <strong>(6, 1)</strong> and <strong>(6, 4)</strong>. What are the coordinates of the <strong>fourth corner</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" aria-label="Rectangle with three known corners and one missing corner on coordinate grid">
  <rect width="300" height="240" fill="#f8fafc" rx="8"/>
  <!-- grid: origin at (30,210), 30px/unit -->
  <line x1="30" y1="210" x2="290" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="180" x2="290" y2="180" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="150" x2="290" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="120" x2="290" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="90" x2="290" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="60" x2="290" y2="60" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="30" y1="30" x2="30" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="30" x2="60" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="90" y1="30" x2="90" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="30" x2="120" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="150" y1="30" x2="150" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="180" y1="30" x2="180" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="210" y1="30" x2="210" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="240" y1="30" x2="240" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="30" x2="270" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="30" y1="210" x2="290" y2="210" stroke="#64748b" stroke-width="2"/>
  <line x1="30" y1="210" x2="30" y2="25" stroke="#64748b" stroke-width="2"/>
  <polygon points="290,210 282,205 282,215" fill="#64748b"/>
  <polygon points="30,25 25,33 35,33" fill="#64748b"/>
  <text x="293" y="214" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x</text>
  <text x="33" y="23" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y</text>
  <!-- axis labels: x=30+n*30, y=210-n*30 -->
  <text x="30" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="60" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="90" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="120" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="150" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="180" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="210" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="240" y="225" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <text x="22" y="214" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="22" y="184" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="22" y="154" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="22" y="124" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="22" y="94" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="22" y="64" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <!-- (2,1)=(90,180), (6,1)=(210,180), (6,4)=(210,90): rectangle (2,1),(6,1),(6,4),(2,4) -->
  <!-- three solid sides -->
  <line x1="90" y1="180" x2="210" y2="180" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="210" y1="180" x2="210" y2="90" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="210" y1="90" x2="90" y2="90" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- dashed side for missing vertex -->
  <line x1="90" y1="90" x2="90" y2="180" stroke="#5b5ef4" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- known vertices -->
  <circle cx="90" cy="180" r="5" fill="#5b5ef4"/>
  <text x="78" y="194" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(2,1)</text>
  <circle cx="210" cy="180" r="5" fill="#5b5ef4"/>
  <text x="214" y="194" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(6,1)</text>
  <circle cx="210" cy="90" r="5" fill="#5b5ef4"/>
  <text x="214" y="87" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(6,4)</text>
  <!-- missing vertex with question mark -->
  <circle cx="90" cy="90" r="6" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="56" y="87" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? (?,?)</text>
</svg>`,
      options: ["(2, 4)", "(1, 4)", "(2, 3)", "(4, 2)"],
      answer: 0,
      explanation: "The rectangle has corners at (2,1), (6,1) and (6,4). The fourth corner must be directly above (2,1) and to the left of (6,4), giving x = 2 and y = 4. So the fourth corner is (2, 4)."
    },
  ]
};
