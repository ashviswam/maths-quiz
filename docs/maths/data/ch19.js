const ch19 = {
  id: 19,
  title: "Transformations",
  icon: "🔄",
  color: "#9333ea",
  topics: ["Translations", "Reflections", "Rotations", "Enlargements", "Combinations of transformations"],
  questions: [
    {
      id: "c19_q1",
      topic: "Translations",
      type: "mcq",
      question: "Point A is at (2, 3). It is translated <strong>4 right and 2 up</strong>. What are the coordinates of the image A'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Coordinate grid showing point A at (2, 3)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
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
  <!-- axes: origin at (170,170), 1 unit = 25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#64748b" stroke-width="1.5"/>
  <!-- axis labels: x-axis positions = 170 + n*25; y-axis svgY = 170 - n*25 -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="320" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="70" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <!-- Point A at (2,3): svgX=170+2*25=220, svgY=170-3*25=95 -->
  <circle cx="220" cy="95" r="5" fill="#5b5ef4"/>
  <text x="226" y="91" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A(2,3)</text>
</svg>`,
      options: ["(6, 1)", "(6, 5)", "(−2, 5)", "(2, 7)"],
      answer: 1,
      explanation: "To translate right 4, add 4 to the x-coordinate: 2 + 4 = 6. To translate up 2, add 2 to the y-coordinate: 3 + 2 = 5. The image is A'(6, 5)."
    },
    {
      id: "c19_q2",
      topic: "Translations",
      type: "mcq",
      question: "A triangle has a vertex at (5, 4). After a translation, the image of this vertex is at (2, 7). Which vector describes this translation?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Coordinate grid showing point at (5, 4)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
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
  <!-- axes -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="70" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="20" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <!-- Point at (5,4): svgX=170+5*25=295, svgY=170-4*25=70 -->
  <circle cx="295" cy="70" r="5" fill="#5b5ef4"/>
  <text x="300" y="67" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(5,4)</text>
</svg>`,
      options: ["Right 3, down 3", "Left 3, up 3", "Right 3, up 3", "Left 3, down 3"],
      answer: 1,
      explanation: "The x-coordinate decreased by 3 (5 − 3 = 2), which means move left 3. The y-coordinate increased by 3 (4 + 3 = 7), which means move up 3. So the translation is left 3, up 3."
    },
    {
      id: "c19_q3",
      topic: "Translations",
      type: "input",
      question: "Point P is at (−3, 1). It is translated <strong>5 right and 4 down</strong>. Write the coordinates of image P' in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Coordinate grid showing point P at (-3, 1)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid: origin (170,170), 1 unit=25px; x from -6 to +6, y from -4 to +4 -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="65" x2="170" y2="290" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis labels (y=183): every integer -4 to 4 -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="70"  y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-4</text>
  <text x="95"  y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- y-axis labels (x=157, text-anchor=end): every integer -4 to 4 excl. 0 -->
  <text x="157" y="70"  text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="95"  text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <text x="157" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-4</text>
  <!-- P at (-3,1): svgX=170+(-3)*25=95, svgY=170-1*25=145 -->
  <circle cx="95" cy="145" r="5" fill="#5b5ef4"/>
  <text x="100" y="141" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">P(-3,1)</text>
</svg>`,
      answer: "(2, -3)",
      acceptableAnswers: ["(2, -3)", "(2,−3)", "(2, −3)", "2, -3"],
      explanation: "Add 5 to the x-coordinate: −3 + 5 = 2. Subtract 4 from the y-coordinate: 1 − 4 = −3. The image is P'(2, −3)."
    },
    {
      id: "c19_q4",
      topic: "Translations",
      type: "mcq",
      question: "Which statement about a translation is <strong>always true</strong>?",
      options: [
        "The shape changes size after a translation.",
        "The shape is flipped after a translation.",
        "Every point moves the same distance in the same direction.",
        "The shape is turned after a translation."
      ],
      answer: 2,
      explanation: "A translation slides a shape so that every single point moves the same distance in the same direction. The shape's size, angles, and orientation all stay exactly the same."
    },
    {
      id: "c19_q5",
      topic: "Reflections",
      type: "mcq",
      question: "Point B is at (3, −2). It is reflected in the <strong>x-axis</strong>. What are the coordinates of the image B'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Reflection of B(3,-2) in the x-axis">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="20" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="120" x2="45" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="120" x2="70" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="120" x2="95" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="120" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="120" x2="145" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="120" x2="170" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="120" x2="195" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="120" x2="220" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="120" x2="245" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="120" x2="270" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="120" x2="295" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="120" x2="320" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="120" x2="170" y2="280" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis label -->
  <text x="310" y="165" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">x-axis</text>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="243" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <!-- B at (3,-2): svgX=170+3*25=245, svgY=170-(-2)*25=220 -->
  <circle cx="245" cy="220" r="5" fill="#5b5ef4"/>
  <text x="250" y="216" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B(3,-2)</text>
</svg>`,
      options: ["(−3, −2)", "(3, 2)", "(−3, 2)", "(2, 3)"],
      answer: 1,
      explanation: "Reflecting in the x-axis keeps the x-coordinate the same and changes the sign of the y-coordinate. So B(3, −2) maps to B'(3, 2)."
    },
    {
      id: "c19_q6",
      topic: "Reflections",
      type: "mcq",
      question: "Point C is at (−4, 5). It is reflected in the <strong>y-axis</strong>. What are the coordinates of the image C'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Reflection of C(-4,5) in the y-axis">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="20" x2="320" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="20" x2="20" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="20" x2="320" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="170" y2="200" stroke="#64748b" stroke-width="2"/>
  <text x="165" y="15" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">y-axis</text>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="70" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-4</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <!-- C at (-4,5): svgX=170+(-4)*25=70, svgY=170-5*25=45 -->
  <circle cx="70" cy="45" r="5" fill="#5b5ef4"/>
  <text x="22" y="41" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C(-4,5)</text>
</svg>`,
      options: ["(4, 5)", "(−4, −5)", "(5, −4)", "(4, −5)"],
      answer: 0,
      explanation: "Reflecting in the y-axis changes the sign of the x-coordinate and keeps the y-coordinate the same. So C(−4, 5) maps to C'(4, 5)."
    },
    {
      id: "c19_q7",
      topic: "Reflections",
      type: "input",
      question: "Point D is at (5, 3). It is reflected in the vertical line <strong>x = 2</strong> (shown as a dashed green line on the grid). Write the coordinates of image D' in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="Reflection of D(5,3) in the line x=2">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170), 1 unit=25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#64748b" stroke-width="1.5"/>
  <!-- mirror line x=2: svgX=170+2*25=220 -->
  <line x1="220" y1="65" x2="220" y2="260" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="223" y="63" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">x=2</text>
  <!-- axis labels -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- D at (5,3): svgX=170+5*25=295, svgY=170-3*25=95 -->
  <circle cx="295" cy="95" r="5" fill="#5b5ef4"/>
  <text x="299" y="92" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D(5,3)</text>
</svg>`,
      answer: "(-1, 3)",
      acceptableAnswers: ["(-1, 3)", "(−1, 3)", "-1, 3", "−1, 3"],
      explanation: "D is at x = 5, and the mirror line is x = 2. Distance from D to the mirror is 5 − 2 = 3. The image is 3 units to the left of x = 2: 2 − 3 = −1. The y-coordinate stays the same. So D'(−1, 3)."
    },
    {
      id: "c19_q8",
      topic: "Rotations",
      type: "mcq",
      question: "Triangle ABC has vertices A(1, 2), B(3, 2), C(3, 4). It is rotated <strong>90° clockwise</strong> about the origin. What are the coordinates of the image A'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="Triangle ABC to rotate 90 degrees clockwise">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170), 1 unit=25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#64748b" stroke-width="1.5"/>
  <!-- axis labels -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="75" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- Triangle ABC: A(1,2)=svgX195,svgY120; B(3,2)=245,120; C(3,4)=245,70 -->
  <polygon points="195,120 245,120 245,70" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="182" y="117" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A</text>
  <text x="248" y="117" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B</text>
  <text x="248" y="68" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
</svg>`,
      options: ["(2, −1)", "(−1, 2)", "(2, 1)", "(1, −2)"],
      answer: 0,
      explanation: "For a 90° clockwise rotation about the origin, the rule is (x, y) → (y, −x). Applying this to A(1, 2): A' = (2, −1)."
    },
    {
      id: "c19_q9",
      topic: "Reflections",
      type: "mcq",
      question: "A shape is reflected in a mirror line. Which property is <strong>NOT</strong> preserved?",
      options: [
        "The size of the shape",
        "The angles of the shape",
        "The orientation (the way the shape faces)",
        "The side lengths of the shape"
      ],
      answer: 2,
      explanation: "A reflection preserves size, angles, and side lengths — these are properties of an isometry. However, the orientation is reversed (the shape is flipped), so orientation is not preserved."
    },
    {
      id: "c19_q10",
      topic: "Rotations",
      type: "mcq",
      question: "Point F is at (4, 2). It is rotated <strong>90° anticlockwise</strong> about the origin. What are the coordinates of the image F'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="90 degree anticlockwise rotation of F(4,2) about origin">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="20" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="120" x2="45" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="120" x2="70" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="120" x2="95" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="120" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="120" x2="145" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="120" x2="170" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="120" x2="195" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="120" x2="220" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="120" x2="245" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="120" x2="270" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="120" x2="295" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="120" x2="320" y2="280" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="120" x2="170" y2="280" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <!-- F at (4,2): svgX=170+4*25=270, svgY=170-2*25=120 -->
  <circle cx="270" cy="120" r="5" fill="#5b5ef4"/>
  <text x="274" y="117" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">F(4,2)</text>
</svg>`,
      options: ["(2, −4)", "(−2, 4)", "(−4, −2)", "(2, 4)"],
      answer: 1,
      explanation: "For a 90° anticlockwise rotation about the origin, the rule is (x, y) → (−y, x). So F(4, 2) maps to F'(−2, 4)."
    },
    {
      id: "c19_q11",
      topic: "Rotations",
      type: "mcq",
      question: "Point G is at (3, −1). It is rotated <strong>180°</strong> about the origin. What are the coordinates of the image G'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="180 degree rotation of G(3,-1) about origin">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="20" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="120" x2="45" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="120" x2="70" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="120" x2="95" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="120" x2="120" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="120" x2="145" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="120" x2="170" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="120" x2="195" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="120" x2="220" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="120" x2="245" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="120" x2="270" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="120" x2="295" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="120" x2="320" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="120" x2="170" y2="240" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="95" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <!-- G at (3,-1): svgX=245, svgY=170-(-1)*25=195 -->
  <circle cx="245" cy="195" r="5" fill="#5b5ef4"/>
  <text x="249" y="192" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">G(3,-1)</text>
</svg>`,
      options: ["(1, 3)", "(−3, 1)", "(1, −3)", "(3, 1)"],
      answer: 1,
      explanation: "For a 180° rotation about the origin, the rule is (x, y) → (−x, −y). So G(3, −1) maps to G'(−3, 1)."
    },
    {
      id: "c19_q12",
      topic: "Rotations",
      type: "input",
      question: "Point H is at (2, 5). It is rotated <strong>90° clockwise</strong> about the origin. Write the coordinates of the image H' in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="90 degree clockwise rotation of H(2,5) about origin">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="20" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="45" x2="45" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="45" x2="70" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="45" x2="95" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="45" x2="120" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="45" x2="145" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="45" x2="170" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="45" x2="195" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="45" x2="220" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="45" x2="245" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="45" x2="270" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="45" x2="295" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="45" x2="320" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="45" x2="170" y2="240" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="50" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <!-- H at (2,5): svgX=220, svgY=170-5*25=45 -->
  <circle cx="220" cy="45" r="5" fill="#5b5ef4"/>
  <text x="224" y="42" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">H(2,5)</text>
</svg>`,
      answer: "(5, -2)",
      acceptableAnswers: ["(5, -2)", "(5, −2)", "5, -2", "5, −2"],
      explanation: "For a 90° clockwise rotation about the origin, the rule is (x, y) → (y, −x). So H(2, 5) maps to H'(5, −2)."
    },
    {
      id: "c19_q13",
      topic: "Rotations",
      type: "mcq",
      question: "A shape is rotated <strong>270° clockwise</strong> about the origin. This is the same as which other rotation?",
      options: [
        "90° clockwise",
        "180° anticlockwise",
        "90° anticlockwise",
        "270° anticlockwise"
      ],
      answer: 2,
      explanation: "A 270° clockwise rotation is the same as a 90° anticlockwise rotation, because 360° − 270° = 90°. Clockwise and anticlockwise are opposite directions, so going 270° one way is the same as 90° the other way."
    },
    {
      id: "c19_q14",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Point J starts at (1, 2). It is first reflected in the <strong>y-axis</strong>, then translated <strong>3 right and 1 down</strong>. What are the final coordinates of J after both transformations?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Combined transformation: reflection then translation of J(1,2)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="20" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="95" x2="45" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="95" x2="70" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="95" x2="95" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="95" x2="120" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="95" x2="145" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="95" x2="170" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="95" x2="195" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="95" x2="220" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="95" x2="245" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="95" x2="270" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="95" x2="295" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="95" x2="320" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="170" y2="240" stroke="#64748b" stroke-width="2"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="145" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <!-- J at (1,2): svgX=195, svgY=170-2*25=120 -->
  <circle cx="195" cy="120" r="5" fill="#5b5ef4"/>
  <text x="199" y="117" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">J(1,2)</text>
</svg>`,
      options: ["(−4, 1)", "(4, 1)", "(2, 1)", "(−2, 3)"],
      answer: 2,
      explanation: "Step 1 — reflect in the y-axis: J(1, 2) → (−1, 2). Step 2 — translate right 3, down 1: (−1 + 3, 2 − 1) = (2, 1). Applying each transformation in order gives J''(2, 1)."
    },
    {
      id: "c19_q15",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Point K is at (−2, 3). It is rotated <strong>90° clockwise</strong> about the origin, then reflected in the <strong>x-axis</strong>. What are the final coordinates of K?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Combined transformation of K(-2,3)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="95" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="95" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="95" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="95" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="95" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="95" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="95" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="95" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="95" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="95" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="95" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="170" y2="260" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <!-- K at (-2,3): svgX=120, svgY=170-3*25=95 -->
  <circle cx="120" cy="95" r="5" fill="#5b5ef4"/>
  <text x="80" y="92" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">K(-2,3)</text>
</svg>`,
      options: ["(3, 2)", "(−3, 2)", "(3, −2)", "(2, 3)"],
      answer: 2,
      explanation: "Step 1 — rotate 90° clockwise: (x,y) → (y, −x), so (−2, 3) → (3, 2). Step 2 — reflect in x-axis: (x, y) → (x, −y), so (3, 2) → (3, −2). The final image is K''(3, −2)."
    },
    {
      id: "c19_q16",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Which mathematical term describes a transformation that preserves both the <strong>size and shape</strong> of a figure?",
      options: ["Enlargement", "Isometry", "Dilation", "Distortion"],
      answer: 1,
      explanation: "An isometry is a transformation that preserves both size and shape. Translations, reflections, and rotations are all isometries because the image is congruent to the original figure."
    },
    {
      id: "c19_q17",
      topic: "Translations",
      type: "input",
      question: "Rectangle ABCD has vertex A at (0, 0) and vertex B at (4, 0). After a translation of <strong>right 2, up 3</strong>, what are the coordinates of the image of vertex B? Write your answer in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Translation of rectangle vertex B(4,0) by right 2 up 3">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="20" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="95" x2="45" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="95" x2="70" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="95" x2="95" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="95" x2="120" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="95" x2="145" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="95" x2="170" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="95" x2="195" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="95" x2="220" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="95" x2="245" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="95" x2="270" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="95" x2="295" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="95" x2="320" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="170" y2="240" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="270" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="320" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <!-- Rectangle ABCD: A(0,0), B(4,0), C(4,2), D(0,2) -->
  <!-- A(0,0)=svgX=170,svgY=170; B(4,0)=270,170; C(4,2)=270,120; D(0,2)=170,120 -->
  <polygon points="170,170 270,170 270,120 170,120" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="165" y="180" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A</text>
  <text x="272" y="180" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B</text>
  <text x="272" y="116" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
  <text x="157" y="116" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D</text>
</svg>`,
      answer: "(6, 3)",
      acceptableAnswers: ["(6, 3)", "6, 3"],
      explanation: "Vertex B is at (4, 0). Translate right 2: 4 + 2 = 6. Translate up 3: 0 + 3 = 3. The image B' is at (6, 3)."
    },
    {
      id: "c19_q18",
      topic: "Reflections",
      type: "mcq",
      question: "Look at the points: M(2, 5) and M'(2, −5). Which transformation maps M to M'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Points M(2,5) and M'(2,-5) shown on coordinate grid">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
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
  <line x1="20" y1="20" x2="20" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="20" x2="170" y2="320" stroke="#64748b" stroke-width="1.5"/>
  <text x="310" y="165" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">x-axis</text>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="295" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-5</text>
  <!-- M at (2,5): svgX=220, svgY=170-5*25=45 -->
  <circle cx="220" cy="45" r="5" fill="#5b5ef4"/>
  <text x="224" y="42" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">M(2,5)</text>
</svg>`,
      options: [
        "Reflection in the y-axis",
        "Reflection in the x-axis",
        "Rotation 180° about the origin",
        "Reflection in the line y = x"
      ],
      answer: 1,
      explanation: "The x-coordinate stays the same (2) but the y-coordinate changes sign (5 → −5). This matches the rule for reflection in the x-axis: (x, y) → (x, −y)."
    },
    {
      id: "c19_q19",
      topic: "Rotations",
      type: "mcq",
      question: "A square has vertices at (1,1), (3,1), (3,3), and (1,3). After a <strong>180° rotation about the origin</strong>, which set of coordinates gives the image vertices?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="180 degree rotation of square about origin">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="290" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="290" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="95" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <!-- Original square: (1,1),(3,1),(3,3),(1,3) -->
  <!-- svgX=170+x*25, svgY=170-y*25 -->
  <!-- (1,1)=195,145; (3,1)=245,145; (3,3)=245,95; (1,3)=195,95 -->
  <polygon points="195,145 245,145 245,95 195,95" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="198" y="158" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(1,1)</text>
  <text x="247" y="158" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(3,1)</text>
  <text x="247" y="92" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(3,3)</text>
  <text x="163" y="92" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(1,3)</text>
</svg>`,
      options: [
        "(−1,−1), (−3,−1), (−3,−3), (−1,−3)",
        "(1,−1), (3,−1), (3,−3), (1,−3)",
        "(−1,1), (−3,1), (−3,3), (−1,3)",
        "(1,1), (3,1), (3,3), (1,3)"
      ],
      answer: 0,
      explanation: "A 180° rotation about the origin applies the rule (x, y) → (−x, −y). Each vertex maps: (1,1)→(−1,−1), (3,1)→(−3,−1), (3,3)→(−3,−3), (1,3)→(−1,−3)."
    },
    {
      id: "c19_q20",
      topic: "Combinations of transformations",
      type: "input",
      question: "Point L is at (2, 1). It is first translated <strong>left 4 and up 2</strong>, then reflected in the <strong>y-axis</strong>. Write the final coordinates of L in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Combined transformation of L(2,1)">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="20" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="95" x2="45" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="95" x2="70" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="95" x2="95" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="95" x2="120" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="95" x2="145" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="95" x2="170" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="95" x2="195" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="95" x2="220" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="95" x2="245" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="95" x2="270" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="95" x2="295" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="95" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="170" y2="220" stroke="#64748b" stroke-width="2"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="120" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <!-- L at (2,1): svgX=220, svgY=145 -->
  <circle cx="220" cy="145" r="5" fill="#5b5ef4"/>
  <text x="224" y="142" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">L(2,1)</text>
</svg>`,
      answer: "(2, 3)",
      acceptableAnswers: ["(2, 3)", "2, 3"],
      explanation: "Step 1 — translate left 4, up 2: (2 − 4, 1 + 2) = (−2, 3). Step 2 — reflect in y-axis: (−2, 3) → (2, 3). The final image is L''(2, 3)."
    },
    {
      id: "c19_q21",
      topic: "Translations",
      type: "mcq",
      question: "Point P is at (1, 5). After a translation, the image P' is at (4, 2). Describe the translation.",
      options: [
        "3 right and 3 down",
        "3 left and 3 up",
        "3 right and 7 down",
        "4 right and 3 down"
      ],
      answer: 0,
      explanation: "x-change: 4 − 1 = +3 (right 3). y-change: 2 − 5 = −3 (down 3). The translation is 3 right and 3 down."
    },
    {
      id: "c19_q22",
      topic: "Translations",
      type: "input",
      question: "Triangle PQR has vertex P at (−1, 2). It is translated <strong>5 right and 3 down</strong>. Write the coordinates of image P' in the form (x, y).",
      answer: "(4, -1)",
      acceptableAnswers: ["(4, -1)", "(4, −1)", "4, -1", "4, −1"],
      explanation: "Add 5 to the x-coordinate: −1 + 5 = 4. Subtract 3 from the y-coordinate: 2 − 3 = −1. Image P' is at (4, −1)."
    },
    {
      id: "c19_q23",
      topic: "Translations",
      type: "mcq",
      question: "Shape A is translated to shape B. Vertex (2, 6) on A maps to vertex (−1, 4) on B. Which description gives the translation?",
      options: [
        "3 right and 2 down",
        "3 left and 2 down",
        "3 left and 2 up",
        "1 right and 4 down"
      ],
      answer: 1,
      explanation: "x-change: −1 − 2 = −3 (left 3). y-change: 4 − 6 = −2 (down 2). The translation is 3 left and 2 down."
    },
    {
      id: "c19_q24",
      topic: "Reflections",
      type: "mcq",
      question: "Point Q is at (3, 4). It is reflected in the horizontal line <strong>y = 1</strong> (shown as a dashed green line on the grid). What are the coordinates of image Q'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="Reflection of Q(3,4) in the line y=1">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170), 1 unit=25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#64748b" stroke-width="1.5"/>
  <!-- mirror line y=1: svgY=170-1*25=145 -->
  <line x1="20" y1="145" x2="320" y2="145" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="322" y="148" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">y=1</text>
  <!-- axis labels -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="75" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="150" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="225" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <!-- Q at (3,4): svgX=170+3*25=245, svgY=170-4*25=70 -->
  <circle cx="245" cy="70" r="5" fill="#5b5ef4"/>
  <text x="249" y="67" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q(3,4)</text>
</svg>`,
      options: ["(3, −2)", "(3, 2)", "(−3, 4)", "(3, 0)"],
      answer: 0,
      explanation: "Q is at y = 4, and the mirror line is y = 1. Distance from Q to mirror = 4 − 1 = 3. Image is 3 units below the mirror: 1 − 3 = −2. The x-coordinate stays the same. So Q'(3, −2)."
    },
    {
      id: "c19_q25",
      topic: "Reflections",
      type: "mcq",
      question: "Point R is at (−2, 6). It is reflected in the horizontal line <strong>y = 3</strong>. What are the coordinates of image R'?",
      options: ["(−2, 0)", "(2, 6)", "(−2, −6)", "(2, 0)"],
      answer: 0,
      explanation: "R is at y = 6. Distance from R to mirror line y = 3 is 6 − 3 = 3 units (above). The image is 3 units below the mirror: 3 − 3 = 0. The x-coordinate stays the same: R'(−2, 0)."
    },
    {
      id: "c19_q26",
      topic: "Reflections",
      type: "mcq",
      question: "Shape P maps to Shape P' on a coordinate grid. Every point (x, y) on P maps to (x, −y + 4) on P'. What is the mirror line?",
      options: ["y = 4", "y = 2", "x = 2", "y = −2"],
      answer: 1,
      explanation: "The rule (x, y) → (x, −y + 4) reflects in a horizontal line. For the mirror line y = k, the rule is (x, y) → (x, 2k − y). So 2k = 4, giving k = 2. The mirror line is <strong>y = 2</strong>."
    },
    {
      id: "c19_q27",
      topic: "Rotations",
      type: "mcq",
      question: "Triangle ABC has vertices A(1, 1), B(4, 1), and C(4, 3). It is rotated <strong>180° about the origin</strong>. What are the coordinates of A'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="Triangle ABC to rotate 180 degrees about origin">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170), 1 unit=25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="260" stroke="#64748b" stroke-width="1.5"/>
  <!-- axis labels -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- Triangle ABC: A(1,1)=195,145; B(4,1)=270,145; C(4,3)=270,95 -->
  <polygon points="195,145 270,145 270,95" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="182" y="142" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A</text>
  <text x="272" y="142" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B</text>
  <text x="272" y="92" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
  <!-- centre of rotation at origin -->
  <circle cx="170" cy="170" r="4" fill="#f59e0b"/>
  <text x="174" y="167" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">O</text>
</svg>`,
      options: ["(−1, −1)", "(1, −1)", "(−1, 1)", "(−4, −1)"],
      answer: 0,
      explanation: "A 180° rotation about the origin uses the rule (x, y) → (−x, −y). So A(1, 1) maps to A'(−1, −1)."
    },
    {
      id: "c19_q28",
      topic: "Rotations",
      type: "mcq",
      question: "Which information is needed to <strong>fully describe</strong> a rotation?",
      options: [
        "The angle only",
        "The centre and the angle only",
        "The angle, direction, and centre of rotation",
        "The direction and the mirror line"
      ],
      answer: 2,
      explanation: "To fully describe a rotation you must state: the <strong>angle</strong> of rotation (e.g. 90°), the <strong>direction</strong> (clockwise or anticlockwise), and the <strong>centre of rotation</strong> (e.g. the origin). Missing any one of these makes the description incomplete."
    },
    {
      id: "c19_q29",
      topic: "Rotations",
      type: "mcq",
      question: "Triangle T has a vertex at (4, 0). After a rotation, that vertex moves to (0, 4). The centre of rotation is the origin. What rotation was applied?",
      options: [
        "90° clockwise about the origin",
        "90° anticlockwise about the origin",
        "180° about the origin",
        "270° anticlockwise about the origin"
      ],
      answer: 1,
      explanation: "Check the 90° ACW rule (x, y) → (−y, x): (4, 0) → (0, 4). Yes — that matches! So the rotation is 90° anticlockwise about the origin. (You can also check: 90° CW gives (0, −4), which does not match.)"
    },
    {
      id: "c19_q37",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Shape A is reflected in the line <strong>x = 1</strong>, then the image is reflected in the line <strong>x = 4</strong>. What <strong>single transformation</strong> maps Shape A to the final image?",
      options: [
        "Reflection in x = 2.5",
        "Rotation 90° about the origin",
        "Translation 6 units right",
        "Translation 3 units right"
      ],
      answer: 2,
      explanation: "Two reflections in parallel vertical lines produce a translation. The distance between the lines x = 1 and x = 4 is 3 units. The translation distance is twice that: 2 × 3 = 6 units. Since we go from x = 1 toward x = 4 (rightward), the single transformation is a translation 6 units right."
    },
    {
      id: "c19_q38",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Look at shapes P and Q on a grid. P has vertices (1, 2), (3, 2), (3, 4). Q has vertices (−1, 2), (−3, 2), (−3, 4). What <strong>single transformation</strong> maps P to Q?",
      options: [
        "Translation left 4",
        "Rotation 90° clockwise about the origin",
        "Reflection in the y-axis",
        "Reflection in the x-axis"
      ],
      answer: 2,
      explanation: "Compare each vertex: (1,2)→(−1,2), (3,2)→(−3,2), (3,4)→(−3,4). In every case the x-coordinate changes sign and the y-coordinate stays the same. This matches the rule (x,y)→(−x,y), which is a <strong>reflection in the y-axis</strong>."
    },
    {
      id: "c19_q39",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "A shape undergoes two reflections: first in the line <strong>y = 1</strong>, then in the line <strong>y = 5</strong>. What single transformation is equivalent?",
      options: [
        "Translation 8 units up",
        "Translation 4 units up",
        "Reflection in the line y = 3",
        "Rotation 180° about the origin"
      ],
      answer: 0,
      explanation: "Two reflections in parallel horizontal lines produce a translation perpendicular to those lines. The distance between y = 1 and y = 5 is 4 units. The translation distance is twice that: 2 × 4 = 8 units. Since we go from y = 1 toward y = 5 (upward), the single transformation is a translation 8 units up."
    },
    {
      id: "c19_q41",
      topic: "Rotations",
      difficulty: "challenging",
      type: "mcq",
      question: "Point T is at (3, 0). It is rotated <strong>90° anticlockwise about the origin</strong>. What are the coordinates of T'?",
      options: ["(0, 3)", "(0, −3)", "(−3, 0)", "(3, 0)"],
      answer: 0,
      explanation: "For a 90° anticlockwise rotation about the origin, the rule is (x, y) → (−y, x). Applying to T(3, 0): T' = (−0, 3) = (0, 3)."
    },
    {
      id: "c19_q42",
      topic: "Combinations of transformations",
      difficulty: "challenging",
      type: "mcq",
      question: "Shape A maps to Shape B by a <strong>single transformation</strong>. Vertex (2, 3) on A maps to (6, 3) on B; vertex (2, 5) on A maps to (6, 5) on B. What is the single transformation?",
      options: [
        "Translation by vector (4 / 0)",
        "Reflection in the line x = 4",
        "Enlargement scale factor 3, centre origin",
        "Rotation 180° about (4, 4)"
      ],
      answer: 0,
      explanation: "Compare each vertex: x-coordinate increases by 4 (2→6) and y-coordinate is unchanged. This matches a translation by vector (4 / 0) — 4 right, 0 up. You can rule out enlargement (the shape doesn't grow) and rotation (the orientation doesn't change). A translation moves every point the same distance in the same direction — which is exactly what happens here."
    },
    {
      id: "c19_q44",
      topic: "Combinations of transformations",
      difficulty: "challenging",
      type: "mcq",
      question: "Point U is at (1, 3). It is first rotated <strong>90° clockwise about the origin</strong>, then translated <strong>2 right and 1 up</strong>. What are the final coordinates of U?",
      options: ["(5, 0)", "(3, −1)", "(5, −1)", "(3, 0)"],
      answer: 0,
      explanation: "Step 1 — rotate 90° CW about origin: (x,y)→(y,−x), so U(1,3)→(3,−1). Step 2 — translate 2 right and 1 up: (3+2, −1+1) = (5, 0). The final image is U''(5, 0)."
    },
    {
      id: "c19_q45",
      topic: "Reflections",
      difficulty: "challenging",
      type: "mcq",
      question: "Point V is at (2, 5). It is first reflected in the <strong>x-axis</strong>, then translated <strong>3 right and 4 up</strong>. What are the final coordinates of V?",
      options: ["(5, −1)", "(−1, 5)", "(5, 1)", "(5, −5)"],
      answer: 0,
      explanation: "Step 1 — reflect in x-axis: (x,y)→(x,−y), so V(2,5)→V'(2,−5). Step 2 — translate 3 right, 4 up: (2+3, −5+4) = (5, −1). The final image is V''(5, −1)."
    },
    {
      id: "c19_q46",
      topic: "Translations",
      type: "mcq",
      question: "Shape A is translated <strong>3 right and 5 up</strong> to give shape B. What translation is needed to move shape B back to shape A?",
      options: [
        "3 right and 5 down",
        "3 left and 5 down",
        "5 left and 3 down",
        "3 left and 5 up"
      ],
      answer: 1,
      explanation: "To reverse a translation, you go the opposite direction by the same amount. The original translation was 3 right and 5 up, so the reverse translation is 3 left and 5 down. This moves B back exactly on top of A."
    },
    {
      id: "c19_q47",
      topic: "Translations",
      type: "mcq",
      question: "Shape A is translated <strong>4 right and 1 up</strong> to give shape B. Shape A is also translated <strong>2 right and 5 up</strong> to give shape C. What single translation moves shape B to shape C?",
      options: [
        "2 left and 4 up",
        "6 right and 6 up",
        "2 right and 4 up",
        "6 left and 4 down"
      ],
      answer: 0,
      explanation: "Think of A as the starting point. B is 4 right and 1 up from A. C is 2 right and 5 up from A. To go from B to C: x-change = 2 − 4 = −2 (left 2), y-change = 5 − 1 = +4 (up 4). So the translation from B to C is 2 left and 4 up."
    },
    {
      id: "c19_q48",
      topic: "Rotations",
      type: "mcq",
      question: "The hour hand of a clock is pointing at the <strong>12</strong>. The dial is rotated <strong>90° clockwise</strong>. Which number does the hour hand now point to?",
      options: ["3", "6", "9", "1"],
      answer: 0,
      explanation: "Imagine the clock face. The 12 is at the top. A 90° clockwise turn moves the hand a quarter-turn to the right. After a quarter-turn clockwise from 12, the hand points to the 3."
    },
    {
      id: "c19_q49",
      topic: "Rotations",
      type: "mcq",
      question: "A shape is rotated <strong>90° anticlockwise</strong> about the origin, and then the result is rotated <strong>another 90° anticlockwise</strong> about the origin. What <strong>single rotation</strong> is equivalent to these two steps?",
      options: [
        "90° clockwise about the origin",
        "180° about the origin",
        "270° clockwise about the origin",
        "360° about the origin"
      ],
      answer: 1,
      explanation: "Each rotation is 90° anticlockwise. Two of them together give 90° + 90° = 180°. A 180° rotation about the origin is the same regardless of direction (clockwise or anticlockwise), so the single equivalent rotation is 180° about the origin."
    },
    {
      id: "c19_q50",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "A shape undergoes a translation, a reflection, and a rotation (separately). Which property of the shape is <strong>changed</strong> by <strong>all three</strong> of these transformations?",
      options: [
        "The size of the shape",
        "The angle measures",
        "The position of the shape",
        "The side lengths"
      ],
      answer: 2,
      explanation: "Translations, reflections, and rotations are all isometries — they preserve size, side lengths, and angles. The one thing that always changes is the <strong>position</strong> of the shape, because it moves to a new location on the grid after each transformation."
    }
  ]
};
