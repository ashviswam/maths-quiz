const ch09 = {
  id: 9,
  title: "Measurement: Length",
  icon: "📏",
  color: "#84cc16",
  topics: ["Units of length", "Operations with lengths", "Perimeter", "Scale diagrams"],
  questions: [
    {
      id: "c9_q1", topic: "Units of length", type: "mcq",
      question: "How many centimetres (cm) are in 1 metre (m)?",
      options: ["10", "100", "1,000", "10,000"],
      answer: 1,
      explanation: "There are 100 centimetres in 1 metre. The prefix <em>centi-</em> means one hundredth, so 1 cm = 1/100 of a metre."
    },
    {
      id: "c9_q2", topic: "Units of length", type: "mcq",
      question: "Convert <strong>3.5 km</strong> to metres.",
      options: ["35 m", "350 m", "3,500 m", "35,000 m"],
      answer: 2,
      explanation: "To convert kilometres to metres, multiply by 1,000. So 3.5 × 1,000 = 3,500 m."
    },
    {
      id: "c9_q3", topic: "Units of length", type: "mcq",
      question: "Which of the following correctly converts <strong>85 mm</strong> to centimetres?",
      options: ["850 cm", "0.85 cm", "8.5 cm", "8,500 cm"],
      answer: 2,
      explanation: "There are 10 mm in 1 cm. To convert mm to cm, divide by 10. So 85 ÷ 10 = 8.5 cm."
    },
    {
      id: "c9_q4", topic: "Units of length", type: "input",
      question: "Convert <strong>4,700 m</strong> to kilometres. Write your answer as a decimal.",
      answer: "4.7",
      acceptableAnswers: ["4.7", "4.70"],
      explanation: "To convert metres to kilometres, divide by 1,000. So 4,700 ÷ 1,000 = 4.7 km."
    },
    {
      id: "c9_q5", topic: "Units of length", type: "mcq",
      question: "Which of the following measurements is the <em>longest</em>?",
      options: ["450 cm", "0.004 km", "38 m", "3,900 mm"],
      answer: 2,
      explanation: "Convert all to cm: 450 cm = 450 cm; 0.004 km = 400 cm; 38 m = 3,800 cm; 3,900 mm = 390 cm. The longest is 38 m = 3,800 cm."
    },
    {
      id: "c9_q6", topic: "Units of length", type: "input",
      question: "Convert <strong>2.35 m</strong> to centimetres.",
      answer: "235",
      acceptableAnswers: ["235", "235 cm"],
      explanation: "To convert metres to centimetres, multiply by 100. So 2.35 × 100 = 235 cm."
    },
    {
      id: "c9_q7", topic: "Units of length", type: "mcq",
      question: "Which of the following correctly orders these lengths from <em>shortest</em> to <em>longest</em>?<br>45 mm &nbsp;&nbsp; 0.4 m &nbsp;&nbsp; 38 cm &nbsp;&nbsp; 0.004 km",
      options: [
        "45 mm, 0.4 m, 38 cm, 0.004 km",
        "45 mm, 38 cm, 0.4 m, 0.004 km",
        "0.004 km, 38 cm, 0.4 m, 45 mm",
        "38 cm, 45 mm, 0.004 km, 0.4 m"
      ],
      answer: 1,
      explanation: "Convert all to cm: 45 mm = 4.5 cm; 38 cm = 38 cm; 0.4 m = 40 cm; 0.004 km = 400 cm. In order from shortest to longest: 4.5, 38, 40, 400 — so 45 mm, 38 cm, 0.4 m, 0.004 km."
    },
    {
      id: "c9_q8", topic: "Operations with lengths", type: "mcq",
      question: "Add <strong>1 m 45 cm</strong> and <strong>2 m 80 cm</strong>.",
      options: ["3 m 25 cm", "4 m 25 cm", "3 m 125 cm", "4 m 15 cm"],
      answer: 1,
      explanation: "Add the centimetres: 45 + 80 = 125 cm = 1 m 25 cm carry 1 m. Add the metres: 1 + 2 + 1 = 4 m. Total = 4 m 25 cm."
    },
    {
      id: "c9_q9", topic: "Operations with lengths", type: "mcq",
      question: "Subtract <strong>3 m 40 cm</strong> from <strong>7 m 10 cm</strong>.",
      options: ["4 m 70 cm", "3 m 70 cm", "3 m 30 cm", "4 m 30 cm"],
      answer: 1,
      explanation: "Since 10 cm &lt; 40 cm, borrow 1 m: 7 m 10 cm = 6 m 110 cm. Then 110 − 40 = 70 cm and 6 − 3 = 3 m. The answer is 3 m 70 cm."
    },
    {
      id: "c9_q10", topic: "Operations with lengths", type: "input",
      question: "A ribbon is <strong>5 m 60 cm</strong> long. A piece of <strong>2 m 85 cm</strong> is cut off. How many centimetres of ribbon remain?",
      answer: "275",
      acceptableAnswers: ["275", "275 cm", "2 m 75 cm"],
      explanation: "Convert both to cm: 5 m 60 cm = 560 cm, and 2 m 85 cm = 285 cm. Then 560 − 285 = 275 cm (which equals 2 m 75 cm)."
    },
    {
      id: "c9_q11", topic: "Operations with lengths", type: "mcq",
      question: "A fence has four sections measuring <strong>2.3 m, 1.75 m, 3 m</strong> and <strong>85 cm</strong>. What is the total length of the fence in metres?",
      options: ["7.9 m", "8.1 m", "7.0 m", "8.9 m"],
      answer: 0,
      explanation: "Convert 85 cm to metres: 85 cm = 0.85 m. Then add: 2.3 + 1.75 + 3 + 0.85 = 7.9 m."
    },
    {
      id: "c9_q12", topic: "Perimeter", type: "mcq",
      question: "Find the perimeter of a rectangle with length <strong>12 cm</strong> and width <strong>5 cm</strong>.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with length 12 cm and width 5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: centered, width proportional to 12cm, height to 5cm -->
  <!-- Using 160px wide, 67px tall to keep 12:5 ratio roughly -->
  <rect x="80" y="77" width="160" height="67" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dimension label: length (top) -->
  <text x="160" y="68" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <!-- Dimension label: length (bottom) -->
  <text x="160" y="162" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <!-- Dimension label: width (left) -->
  <text x="68" y="114" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5 cm</text>
  <!-- Dimension label: width (right) -->
  <text x="252" y="114" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5 cm</text>
  <!-- Right-angle boxes at corners -->
  <rect x="80" y="77" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="230" y="77" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="80" y="134" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="230" y="134" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["17 cm", "60 cm", "34 cm", "24 cm"],
      answer: 2,
      explanation: "Perimeter of a rectangle = 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34 cm."
    },
    {
      id: "c9_q13", topic: "Perimeter", type: "mcq",
      question: "An equilateral triangle has a perimeter of <strong>27 cm</strong>. What is the length of each side?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Equilateral triangle with perimeter 27 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Equilateral triangle: apex at (160,40), base from (60,185) to (260,185) -->
  <polygon points="160,40 60,185 260,185" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Label: each side = ? (perimeter 27 cm, so 9 cm each) -->
  <!-- Left side label -->
  <text x="96" y="122" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700" transform="rotate(-60,96,122)">? cm</text>
  <!-- Right side label -->
  <text x="224" y="122" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700" transform="rotate(60,224,122)">? cm</text>
  <!-- Base label -->
  <text x="160" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <!-- Perimeter label -->
  <text x="160" y="20" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Perimeter = 27 cm</text>
  <!-- Tick marks to show equal sides -->
  <!-- Left side midpoint ~(110,112): tick marks -->
  <line x1="104" y1="109" x2="116" y2="115" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right side midpoint ~(210,112): tick marks -->
  <line x1="204" y1="115" x2="216" y2="109" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Base midpoint (160,185): tick mark -->
  <line x1="157" y1="179" x2="163" y2="191" stroke="#5b5ef4" stroke-width="2"/>
</svg>`,
      options: ["6 cm", "9 cm", "7 cm", "13.5 cm"],
      answer: 1,
      explanation: "An equilateral triangle has 3 equal sides. Each side = 27 ÷ 3 = 9 cm."
    },
    {
      id: "c9_q14", topic: "Perimeter", type: "input",
      question: "A square has a perimeter of <strong>52 cm</strong>. What is the length of one side in centimetres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square with perimeter 52 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square: centered, 130x130 -->
  <rect x="95" y="45" width="130" height="130" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dimension labels: ? cm on each side -->
  <text x="160" y="36" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <text x="160" y="192" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <text x="82" y="114" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <text x="238" y="114" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <!-- Right-angle boxes at corners -->
  <rect x="95" y="45" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="215" y="45" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="95" y="165" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="215" y="165" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Perimeter label -->
  <text x="160" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Perimeter = 52 cm</text>
</svg>`,
      answer: "13",
      acceptableAnswers: ["13", "13 cm"],
      explanation: "A square has 4 equal sides. Side length = perimeter ÷ 4 = 52 ÷ 4 = 13 cm."
    },
    {
      id: "c9_q15", topic: "Perimeter", type: "mcq",
      question: "An irregular polygon has sides measuring <strong>4 cm, 7 cm, 5 cm, 9 cm</strong> and <strong>6 cm</strong>. What is its perimeter?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Irregular pentagon with sides 4, 7, 5, 9, 6 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Irregular pentagon vertices (roughly proportional to side lengths):
       A(160,25) -> B(260,80) -> C(240,170) -> D(100,170) -> E(60,90) -> back to A
       Side AB ~ 7cm, BC ~ 5cm, CD ~ 9cm, DE ~ 6cm, EA ~ 4cm -->
  <polygon points="160,25 260,80 240,170 100,170 60,90" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side labels, placed near midpoint of each side -->
  <!-- AB midpoint (210,52): 7 cm -->
  <text x="218" y="50" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">7 cm</text>
  <!-- BC midpoint (250,125): 5 cm -->
  <text x="254" y="128" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5 cm</text>
  <!-- CD midpoint (170,170): 9 cm -->
  <text x="160" y="186" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">9 cm</text>
  <!-- DE midpoint (80,130): 6 cm -->
  <text x="44" y="134" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6 cm</text>
  <!-- EA midpoint (110,57): 4 cm -->
  <text x="100" y="50" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4 cm</text>
</svg>`,
      options: ["25 cm", "30 cm", "31 cm", "28 cm"],
      answer: 2,
      explanation: "Perimeter is the sum of all sides: 4 + 7 + 5 + 9 + 6 = 31 cm."
    },
    {
      id: "c9_q16", topic: "Perimeter", type: "input",
      question: "A rectangle has a perimeter of <strong>38 cm</strong> and a length of <strong>12 cm</strong>. What is the width of the rectangle in centimetres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with length 12 cm and unknown width">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: centered, width proportional to 12cm length -->
  <rect x="70" y="70" width="180" height="80" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dimension label: length top -->
  <text x="160" y="61" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <!-- Dimension label: length bottom -->
  <text x="160" y="168" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <!-- Dimension label: width left (unknown) -->
  <text x="56" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <!-- Dimension label: width right (unknown) -->
  <text x="264" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">? cm</text>
  <!-- Right-angle boxes at corners -->
  <rect x="70" y="70" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="240" y="70" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="70" y="140" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="240" y="140" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Perimeter label -->
  <text x="160" y="205" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Perimeter = 38 cm</text>
</svg>`,
      answer: "7",
      acceptableAnswers: ["7", "7 cm"],
      explanation: "Perimeter = 2 × (length + width), so 38 = 2 × (12 + width). Dividing both sides by 2: 19 = 12 + width, giving width = 19 − 12 = 7 cm."
    },
    {
      id: "c9_q17", topic: "Scale diagrams", type: "mcq",
      question: "A map uses a scale where <strong>1 cm represents 100 cm</strong>. A wall on the map measures <strong>5 cm</strong>. What is the actual length of the wall?",
      options: ["5 m", "50 m", "500 m", "0.5 m"],
      answer: 0,
      explanation: "The scale means 1 cm on the map represents 100 cm in real life. So 5 × 100 = 500 cm = 5 m."
    },
    {
      id: "c9_q18", topic: "Scale diagrams", type: "mcq",
      question: "On a map where <strong>1 cm represents 50,000 cm</strong>, the distance between two towns is <strong>4 cm</strong>. What is the actual distance in kilometres?",
      options: ["2 km", "20 km", "200 km", "0.2 km"],
      answer: 0,
      explanation: "Actual distance = 4 × 50,000 = 200,000 cm. Converting: 200,000 ÷ 100 = 2,000 m, and 2,000 ÷ 1,000 = 2 km."
    },
    {
      id: "c9_q19", topic: "Scale diagrams", type: "input",
      question: "A room is <strong>6 m</strong> long in real life. A scale drawing uses a scale where <strong>1 cm represents 50 cm</strong>. How many centimetres long is the room in the scale drawing?",
      answer: "12",
      acceptableAnswers: ["12", "12 cm"],
      explanation: "Convert 6 m to cm: 6 × 100 = 600 cm. The scale is 1 cm represents 50 cm, so the drawing length = 600 ÷ 50 = 12 cm."
    },
    {
      id: "c9_q20", topic: "Scale diagrams", type: "mcq",
      question: "A scale diagram shows a garden path as <strong>3.5 cm</strong> long. The scale is such that <strong>1 cm represents 200 cm</strong>. What is the actual length of the path in metres?",
      options: ["57 m", "7 m", "700 m", "0.7 m"],
      answer: 1,
      explanation: "Actual length = 3.5 × 200 = 700 cm. Converting to metres: 700 ÷ 100 = 7 m."
    },

    // ── NEW QUESTIONS ──────────────────────────────────────────────────────────

    // Perimeter of triangles (more coverage)
    {
      id: "c9_q21", topic: "Perimeter of triangles", type: "mcq",
      question: "A right-angled triangle has two shorter sides of <strong>6 cm</strong> and <strong>8 cm</strong>. Its longest side (hypotenuse) is <strong>10 cm</strong>. What is its perimeter?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Right-angled triangle with sides 6, 8 and 10 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Right-angled triangle: right angle at bottom-left -->
  <!-- A(60,170) B(60,50) C(220,170) -->
  <polygon points="60,170 60,50 220,170" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right angle box -->
  <rect x="60" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Side labels -->
  <!-- AB (left vertical) = 6 cm, midpoint (60,110) -->
  <text x="46" y="114" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6 cm</text>
  <!-- BC (base) = 8 cm, midpoint (140,170) -->
  <text x="140" y="188" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- AC (hypotenuse) = 10 cm, midpoint (140,110) -->
  <text x="158" y="100" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">10 cm</text>
</svg>`,
      options: ["24 cm", "48 cm", "14 cm", "20 cm"],
      answer: 0,
      explanation: "Perimeter = sum of all three sides = 6 + 8 + 10 = 24 cm. Remember: perimeter is always all the way around the outside of the shape."
    },
    {
      id: "c9_q22", topic: "Perimeter of triangles", type: "input",
      question: "An isosceles triangle has two equal sides of <strong>11 cm</strong> each and a base of <strong>8 cm</strong>. What is its perimeter in centimetres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Isosceles triangle with equal sides 11 cm and base 8 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Isosceles triangle: apex at (160,30), base from (100,185) to (220,185) -->
  <polygon points="160,30 100,185 220,185" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Left side label: 11 cm -->
  <text x="110" y="108" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">11 cm</text>
  <!-- Right side label: 11 cm -->
  <text x="210" y="108" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">11 cm</text>
  <!-- Base label: 8 cm -->
  <text x="160" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- Tick marks on equal sides -->
  <line x1="126" y1="104" x2="134" y2="116" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="186" y1="116" x2="194" y2="104" stroke="#5b5ef4" stroke-width="2"/>
</svg>`,
      answer: "30",
      acceptableAnswers: ["30", "30 cm"],
      explanation: "Perimeter = side + side + base = 11 + 11 + 8 = 30 cm. The two equal sides each measure 11 cm, so add them both then add the base."
    },
    {
      id: "c9_q23", topic: "Perimeter of triangles", type: "mcq",
      question: "A triangle has sides of <strong>5 cm, 7 cm</strong> and <strong>9 cm</strong>. Which of the following is its perimeter?",
      options: ["16 cm", "21 cm", "19 cm", "315 cm"],
      answer: 1,
      explanation: "Perimeter = 5 + 7 + 9 = 21 cm. Just add all three sides together!"
    },

    // Perimeter of regular polygons
    {
      id: "c9_q24", topic: "Perimeter of regular polygons", type: "mcq",
      question: "A regular hexagon has each side measuring <strong>4.5 cm</strong>. What is its perimeter?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Regular hexagon with side 4.5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Regular hexagon centred at (160,110), radius 80 -->
  <polygon points="160,30 229,70 229,150 160,190 91,150 91,70" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side label on top side -->
  <text x="160" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4.5 cm</text>
  <!-- Tick marks on all 6 sides to show equal -->
  <line x1="191" y1="47" x2="197" y2="55" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="226" y1="107" x2="234" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="194" y1="167" x2="188" y2="175" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="129" y1="175" x2="123" y2="167" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="86" y1="113" x2="94" y2="107" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="123" y1="55" x2="129" y2="47" stroke="#5b5ef4" stroke-width="2"/>
</svg>`,
      options: ["22.5 cm", "27 cm", "18 cm", "4.5 cm"],
      answer: 1,
      explanation: "A regular hexagon has 6 equal sides. Perimeter = 6 × 4.5 = 27 cm. For any regular polygon, perimeter = number of sides × side length."
    },
    {
      id: "c9_q25", topic: "Perimeter of regular polygons", type: "input",
      question: "A regular pentagon has a perimeter of <strong>45 cm</strong>. How long is each side in centimetres?",
      answer: "9",
      acceptableAnswers: ["9", "9 cm"],
      explanation: "A regular pentagon has 5 equal sides. Each side = perimeter ÷ 5 = 45 ÷ 5 = 9 cm. Great — working backwards from the perimeter is a really useful skill!"
    },
    {
      id: "c9_q26", topic: "Perimeter of regular polygons", type: "mcq",
      question: "A regular octagon has sides of <strong>3 cm</strong> each. What is its perimeter?",
      options: ["21 cm", "24 cm", "32 cm", "18 cm"],
      answer: 1,
      explanation: "An octagon has 8 sides. Perimeter = 8 × 3 = 24 cm. Remember: <em>octo</em> means eight (like octopus — 8 arms!)."
    },

    // Perimeter of composite/compound shapes
    {
      id: "c9_q27", topic: "Composite shapes", type: "mcq",
      question: "The shape below is made by joining a rectangle and a square. Find its perimeter.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="L-shaped composite of rectangle and square">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- L-shape:
       Outer rectangle: x=50,y=40 width=180 height=80
       Square notch removed from bottom-right: x=170,y=80 width=60 height=40
       Resulting points (going clockwise from top-left):
       (50,40) → (230,40) → (230,80) → (170,80) → (170,120) → (50,120) → back
  -->
  <polygon points="50,40 230,40 230,80 170,80 170,120 50,120" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dimension labels -->
  <!-- Top: 180 px represents 12 cm -->
  <text x="140" y="30" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <!-- Right top: 40 px represents 4 cm (50→80 in y) -->
  <text x="242" y="63" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4 cm</text>
  <!-- Step horizontal: 60 px → 4 cm -->
  <text x="200" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- Step vertical: 40 px → 4 cm  -->
  <text x="175" y="103" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- Bottom: 120 px → 8 cm -->
  <text x="110" y="133" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- Left side: 80px → 8 cm (but here 80px = 8cm) -->
  <text x="36" y="83" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
</svg>`,
      options: ["40 cm", "44 cm", "36 cm", "48 cm"],
      answer: 0,
      explanation: "Walk around the outside and add every side: top 12 + right top 4 + step across 4 + step down 4 + bottom 8 + left 8 = 40 cm. <strong>Key tip:</strong> always trace carefully around composite shapes — only count the edges on the outside!"
    },
    {
      id: "c9_q28", topic: "Composite shapes", type: "input",
      question: "A path runs around the outside of a rectangular flower bed that is <strong>10 m long</strong> and <strong>6 m wide</strong>. What is the total distance around the outside of the flower bed in metres?",
      answer: "32",
      acceptableAnswers: ["32", "32 m"],
      explanation: "The distance around = perimeter of the rectangle = 2 × (length + width) = 2 × (10 + 6) = 2 × 16 = 32 m. This is just the perimeter of the rectangular bed."
    },
    {
      id: "c9_q29", topic: "Composite shapes", type: "mcq",
      question: "A shape is made of two rectangles joined together (see below). What is its perimeter?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="T-shape or step shape made of two rectangles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!--
    Shape: Two rectangles stacked, bottom one wider.
    Top rectangle: x=90,y=30  width=140 height=60  (14 cm × 6 cm)
    Bottom rectangle: x=50,y=90  width=220 height=80 (22 cm × 8 cm)
    Outline (clockwise from top-left of top rect):
    (90,30)→(230,30)→(230,90)→(270,90)→(270,170)→(50,170)→(50,90)→(90,90)→(90,30)
  -->
  <polygon points="90,30 230,30 230,90 270,90 270,170 50,170 50,90 90,90" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Labels -->
  <text x="160" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">14 cm</text>
  <text x="244" y="62" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6 cm</text>
  <text x="254" y="132" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <text x="160" y="184" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">22 cm</text>
  <text x="36" y="132" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- left step: from (50,90) to (90,90) = 4 cm -->
  <text x="70" y="85" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- left top: (50,90)→(50,170)=8 already labelled; left step vertical: (90,30)→(90,90)=6 cm -->
  <text x="80" y="62" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6 cm</text>
  <!-- right step horizontal: (230,90)→(270,90) = 4 cm -->
  <text x="250" y="85" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
</svg>`,
      options: ["72 cm", "76 cm", "68 cm", "80 cm"],
      answer: 0,
      explanation: "Trace around the outside: top 14 + right-top 6 + step-right 4 + right-side 8 + bottom 22 + left-side 8 + step-left 4 + left-top 6 = 72 cm. Always count every edge on the boundary — the two inner edges where rectangles join are <em>not</em> part of the perimeter."
    },

    // Circumference of a circle

    // Arc length

    // Converting perimeter units

    // Scale drawings — extra coverage
    {
      id: "c9_q40", topic: "Scale diagrams", type: "input",
      question: "A scale drawing uses a scale where <strong>1 cm represents 500 cm</strong>. A road on the drawing is <strong>6.4 cm</strong> long. What is the actual length of the road in metres?",
      answer: "32",
      acceptableAnswers: ["32", "32 m"],
      explanation: "Actual length = drawn length × scale factor = 6.4 × 500 = 3,200 cm. Converting to metres: 3,200 ÷ 100 = 32 m."
    },
    {
      id: "c9_q41", topic: "Scale diagrams", type: "mcq",
      question: "Two cities are <strong>180 km</strong> apart in real life. On a map where <strong>1 cm represents 3,000,000 cm</strong>, how many centimetres apart are they on the map?",
      options: ["6 cm", "0.6 cm", "60 cm", "600 cm"],
      answer: 0,
      explanation: "Convert 180 km to cm: 180 × 1,000 × 100 = 18,000,000 cm. Map distance = real distance ÷ scale factor = 18,000,000 ÷ 3,000,000 = 6 cm."
    },

    // ── CHALLENGING QUESTIONS ──────────────────────────────────────────────────

    {
      id: "c9_q42", topic: "Composite shapes", difficulty: "challenging", type: "input",
      question: "A small square with side <strong>4 cm</strong> is removed from the corner of a rectangle that is <strong>10 cm</strong> long and <strong>7 cm</strong> wide. What is the perimeter of the new shape in centimetres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with a square corner removed">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!--
    Rectangle was 10cm × 7cm. Scale: 1cm ≈ 14px.
    Original: x=50,y=40, width=140,height=98
    Remove top-right square (4cm=56px): from (134,40) to (190,96) removed.
    Outer shape (clockwise):
    (50,40)→(134,40)→(134,96)→(190,96)→(190,138)→(50,138)
  -->
  <polygon points="50,40 134,40 134,96 190,96 190,138 50,138" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dashed lines showing the removed corner -->
  <line x1="134" y1="40" x2="190" y2="40" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="190" y1="40" x2="190" y2="96" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Labels -->
  <!-- Top from (50,40)→(134,40) = 6 cm -->
  <text x="92" y="32" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6 cm</text>
  <!-- Dashed top = 4 cm -->
  <text x="162" y="32" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- Step down (134,40)→(134,96) = 4 cm -->
  <text x="122" y="71" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- Step right (134,96)→(190,96) = 4 cm -->
  <text x="162" y="90" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4 cm</text>
  <!-- Right side (190,96)→(190,138) = 3 cm -->
  <text x="204" y="120" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3 cm</text>
  <!-- Bottom (50,138)→(190,138) = 10 cm -->
  <text x="120" y="153" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">10 cm</text>
  <!-- Left side (50,40)→(50,138) = 7 cm -->
  <text x="36" y="92" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">7 cm</text>
</svg>`,
      answer: "34",
      acceptableAnswers: ["34", "34 cm"],
      explanation: "This is a classic trap — students often think the perimeter gets smaller when a corner is removed, but it stays the same! <br><br>Trace the new shape: 6 + 4 + 4 + 4 + 3 + 10 + 7 = 34 cm? Wait, let's check carefully: the two new edges (4 cm down + 4 cm across) replace the two edges they would have been (4 cm + 3 cm). Original perimeter = 2 × (10 + 7) = 34 cm. When you remove a rectangular corner, the two new interior sides equal the two sides they replaced, so the perimeter stays at <strong>34 cm</strong>!"
    },
    {
      id: "c9_q44", topic: "Composite shapes", difficulty: "challenging", type: "input",
      question: "A 1-metre-wide path runs all the way around the outside of a rectangular garden that is <strong>8 m long</strong> and <strong>5 m wide</strong>. What is the perimeter of the <em>outer edge</em> of the path in metres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangular garden with 1m wide path around it">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Outer rectangle (garden + path): 10m × 7m, scale ~18px/m -->
  <!-- Outer: x=30,y=30 width=180,height=126 (10m × 7m) -->
  <rect x="30" y="30" width="180" height="126" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Inner rectangle (garden): 8m × 5m -->
  <!-- Inner: x=66,y=66 width=144,height=90 -->
  <rect x="66" y="66" width="144" height="90" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Path fill between them (approximated by SVG order — inner is on top) -->
  <!-- Labels on inner -->
  <text x="138" y="112" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 m</text>
  <text x="138" y="105" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="10">garden</text>
  <!-- 1m path indicator -->
  <line x1="30" y1="60" x2="66" y2="60" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="48" y="57" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">1 m</text>
  <!-- 5m label on garden side -->
  <text x="56" y="112" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">5 m</text>
</svg>`,
      answer: "34",
      acceptableAnswers: ["34", "34 m"],
      explanation: "The path is 1 m wide on all four sides. So the outer rectangle is: length = 8 + 1 + 1 = 10 m, width = 5 + 1 + 1 = 7 m.<br><br>Outer perimeter = 2 × (10 + 7) = 2 × 17 = 34 m.<br><br><strong>Key idea:</strong> Adding a 1 m border on each side adds 2 m to both the length and the width."
    },
    {
      id: "c9_q45", topic: "Scale diagrams", difficulty: "challenging", type: "mcq",
      question: "A scale drawing shows a field as a rectangle <strong>4.5 cm long</strong> and <strong>3 cm wide</strong>. The scale is such that <strong>1 cm represents 400 cm</strong>. What is the <em>actual perimeter</em> of the field in metres?",
      options: ["30 m", "60 m", "1,200 m", "600 m"],
      answer: 1,
      explanation: "Step 1: Find the actual dimensions.<br>Actual length = 4.5 × 400 = 1,800 cm = 18 m.<br>Actual width = 3 × 400 = 1,200 cm = 12 m.<br><br>Step 2: Perimeter = 2 × (18 + 12) = 2 × 30 = 60 m.<br><br><strong>Shortcut:</strong> the perimeter on the drawing = 2 × (4.5 + 3) = 15 cm. Multiply by the scale: 15 × 400 = 6,000 cm = 60 m."
    },
    {
      id: "c9_q46", topic: "Missing side / Perimeter", difficulty: "challenging", type: "input",
      question: "The perimeter of the L-shaped figure below is <strong>48 cm</strong>. Three sides are labelled. Find the length of the <strong>missing side x</strong> in centimetres.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="L-shaped figure with one missing side x">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!--
    L-shape (clockwise from top-left):
    A(50,30) → B(210,30) → C(210,110) → D(130,110) → E(130,180) → F(50,180)
    AB = 16 cm (top), BC = 8 cm (right top), CD = ?, DE = ?, EF = 7 cm (left bottom portion if…
    Actually let's make a cleaner problem:
    Sides: top=16, right=8, step-across=x (unknown), step-down=5, bottom=?, left=13
    But we need only one unknown. Let's set:
    AB (top) = 16 cm
    BC (right) = 8 cm
    CD (step left) = x cm  ← unknown
    DE (step down) = 5 cm
    EF (bottom) = 10 cm
    FA (left) = 13 cm
    Perimeter = 16+8+x+5+10+13 = 52+x. If perimeter=48 that gives x=-4, which is wrong.
    Re-do: AB=12, BC=9, CD=x, DE=5, EF=7, FA=14 → 12+9+x+5+7+14=47+x=48 → x=1 (too small)
    Let's try: AB=10, BC=4, CD=x, DE=4, EF=6, FA=8 → 10+4+x+4+6+8=32+x=48 → x=16? That's bigger than AB.
    Better: AB=14, BC=6, CD=x, DE=4, EF=8, FA=10 → 14+6+x+4+8+10=42+x=48 → x=6.
  -->
  <!-- Scale: 14cm top → 140px, so 1cm=10px -->
  <!-- A(40,30) B(180,30) C(180,90) D(120,90) E(120,130) F(40,130) -->
  <polygon points="40,30 180,30 180,90 120,90 120,130 40,130" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side labels -->
  <!-- AB top = 14 cm -->
  <text x="110" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">14 cm</text>
  <!-- BC right = 6 cm -->
  <text x="192" y="63" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6 cm</text>
  <!-- CD step = x cm -->
  <text x="150" y="84" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="800">x cm</text>
  <!-- DE step down = 4 cm -->
  <text x="130" y="113" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4 cm</text>
  <!-- EF bottom = 8 cm -->
  <text x="80" y="145" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- FA left = 10 cm -->
  <text x="28" y="83" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">10 cm</text>
  <!-- Perimeter label -->
  <text x="160" y="175" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Perimeter = 48 cm</text>
</svg>`,
      answer: "6",
      acceptableAnswers: ["6", "6 cm"],
      explanation: "Add the five known sides: 14 + 6 + 4 + 8 + 10 = 42 cm. The total perimeter is 48 cm, so the missing side x = 48 − 42 = 6 cm. <br><br><strong>Shortcut for L-shapes:</strong> the horizontal step-in (x) equals the difference between the top and bottom sides: 14 − 8 = 6 cm. Both methods agree!"
    },

    // ── ADDITIONAL QUESTIONS (audit fill-in) ──────────────────────────────────

    // Choose best unit for a real-world object
    {
      id: "c9_q47", topic: "Units of length", type: "mcq",
      question: "Which unit of length is most suitable for measuring the length of a fly?",
      options: ["kilometres (km)", "metres (m)", "centimetres (cm)", "millimetres (mm)"],
      answer: 3,
      explanation: "A fly is tiny — only about 7 mm long. Millimetres are the best unit for very small objects. Centimetres would also be possible but millimetres give a more precise, whole-number answer for something so small."
    },

    // Multi-step conversion: metres to millimetres
    {
      id: "c9_q48", topic: "Units of length", type: "input",
      question: "Convert <strong>1.24 m</strong> to millimetres. Write your answer as a whole number.",
      answer: "1240",
      acceptableAnswers: ["1240", "1240 mm"],
      explanation: "Step 1: Convert metres to centimetres: 1.24 × 100 = 124 cm.<br>Step 2: Convert centimetres to millimetres: 124 × 10 = 1240 mm.<br><br>Or in one step: multiply by 1000, so 1.24 × 1000 = 1240 mm."
    },

    // Add mixed units — convert to metres first (km + m)
    {
      id: "c9_q49", topic: "Operations with lengths", type: "mcq",
      question: "By first writing each length in metres, find the sum of <strong>3 km</strong> and <strong>580 m</strong>.",
      options: ["583 m", "3580 m", "358 m", "3058 m"],
      answer: 1,
      explanation: "Convert 3 km to metres: 3 × 1000 = 3000 m.<br>Add: 3000 + 580 = 3580 m.<br><br>Always convert to the same unit before adding!"
    },

    // Multiply a length — repeated word problem (bricks)
    {
      id: "c9_q50", topic: "Operations with lengths", type: "input",
      question: "A house brick is <strong>23 cm</strong> long. Eight bricks are laid end to end. What is the total length in metres?",
      answer: "1.84",
      acceptableAnswers: ["1.84", "1.84 m"],
      explanation: "Total length in cm = 8 × 23 = 184 cm.<br>Convert to metres: 184 ÷ 100 = 1.84 m."
    },

    // Divide total distance by unit length (number of jumps)
    {
      id: "c9_q51", topic: "Operations with lengths", type: "input",
      question: "A rabbit travels <strong>30 cm</strong> with each jump. How many jumps does the rabbit need to travel <strong>15 m</strong>?",
      answer: "50",
      acceptableAnswers: ["50", "50 jumps"],
      explanation: "Convert 15 m to centimetres: 15 × 100 = 1500 cm.<br>Number of jumps = total distance ÷ distance per jump = 1500 ÷ 30 = 50 jumps."
    },

    // Perimeter with mixed units — convert first, then add
    {
      id: "c9_q52", topic: "Perimeter", type: "mcq",
      question: "A triangle has sides of <strong>15 mm</strong>, <strong>9 mm</strong>, and <strong>2 cm</strong>. What is its perimeter in millimetres?",
      options: ["26 mm", "44 mm", "260 mm", "2.6 cm"],
      answer: 1,
      explanation: "First convert all sides to the same unit (mm).<br>2 cm = 20 mm.<br>Perimeter = 15 + 9 + 20 = 44 mm."
    },

    // Perimeter word problem with cost per metre
    {
      id: "c9_q53", topic: "Perimeter", type: "mcq",
      question: "A rectangular tablecloth is <strong>3.2 m</strong> long and <strong>1.6 m</strong> wide. Lace trim costs <strong>$4 per metre</strong>. How much does it cost to put lace all the way around the tablecloth?",
      options: ["$19.20", "$38.40", "$20.48", "$76.80"],
      answer: 1,
      explanation: "Step 1: Find the perimeter.<br>Perimeter = 2 × (3.2 + 1.6) = 2 × 4.8 = 9.6 m.<br><br>Step 2: Find the cost.<br>Cost = 9.6 × $4 = $38.40."
    },

    // Perimeter using tick-marks (equal sides on isosceles triangle)
    {
      id: "c9_q54", topic: "Perimeter", type: "mcq",
      question: "The triangle below has two equal sides shown by tick marks. One of the equal sides is <strong>15 cm</strong> and the base is <strong>24 cm</strong>. What is the perimeter?",
      options: ["39 cm", "54 cm", "63 cm", "30 cm"],
      answer: 1,
      explanation: "The tick marks mean the two slanted sides are equal in length — both are 15 cm.<br>Perimeter = 15 + 15 + 24 = 54 cm.<br><br>Tick marks are a shorthand way of showing equal sides without labelling every one."
    },

    // Find scale given actual and drawn lengths
    {
      id: "c9_q55", topic: "Scale diagrams", type: "mcq",
      question: "A boat is <strong>30 m</strong> long. On its scale diagram it has a length of <strong>15 cm</strong>. Which of the following correctly states the scale of the diagram?",
      options: [
        "1 represents 2",
        "1 represents 20",
        "1 represents 200",
        "1 represents 2000"
      ],
      answer: 2,
      explanation: "Convert the actual length to centimetres: 30 m = 3000 cm.<br>Scale factor = actual length ÷ drawn length = 3000 ÷ 15 = 200.<br><br>So the scale is <strong>1 represents 200</strong>."
    }
  ]
};
