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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Translation of point A(2,3) to A'(6,5)">
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
  <!-- axis labels -->
  <text x="174" y="168" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="218" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="268" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="318" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="122" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <text x="157" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="157" y="70" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-2</text>
  <!-- Point A at (2,3): svgX=170+2*25=220, svgY=170-3*25=95 -->
  <circle cx="220" cy="95" r="5" fill="#5b5ef4"/>
  <text x="226" y="91" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A(2,3)</text>
  <!-- Point A' at (6,5): svgX=170+6*25=320, svgY=170-5*25=45 -->
  <circle cx="320" cy="45" r="5" fill="#f43f5e"/>
  <text x="296" y="41" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A'(6,5)</text>
  <!-- translation arrow -->
  <line x1="220" y1="95" x2="316" y2="49" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr1)"/>
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/>
    </marker>
  </defs>
  <text x="255" y="63" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">+4, +2</text>
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Translation from (5,4) to (2,7)">
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
  <text x="243" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="268" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="293" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="75" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="157" y="50" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="100" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- Point at (5,4): svgX=170+5*25=295, svgY=170-4*25=70 -->
  <circle cx="295" cy="70" r="5" fill="#5b5ef4"/>
  <text x="300" y="67" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(5,4)</text>
  <!-- Image at (2,7): svgX=170+2*25=220, svgY=170-7*25=45 -->
  <circle cx="220" cy="45" r="5" fill="#f43f5e"/>
  <text x="225" y="42" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(2,7)</text>
  <!-- arrow -->
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/>
    </marker>
  </defs>
  <line x1="295" y1="70" x2="224" y2="49" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr2)"/>
  <text x="240" y="75" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">-3, +3</text>
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Translation of P(-3,1) by 5 right and 4 down">
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
  <line x1="20" y1="70" x2="20" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="320" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="300" stroke="#64748b" stroke-width="1.5"/>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="95" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="245" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-3</text>
  <!-- P at (-3,1): svgX=170+(-3)*25=95, svgY=170-1*25=145 -->
  <circle cx="95" cy="145" r="5" fill="#5b5ef4"/>
  <text x="100" y="141" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">P(-3,1)</text>
  <!-- P' at (2,-3): svgX=170+2*25=220, svgY=170-(-3)*25=245 -->
  <circle cx="220" cy="245" r="5" fill="#f43f5e"/>
  <text x="225" y="241" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">P'(2,-3)</text>
  <!-- arrow -->
  <defs>
    <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/>
    </marker>
  </defs>
  <line x1="95" y1="145" x2="216" y2="241" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr3)"/>
  <text x="135" y="205" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">+5, -4</text>
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
  <!-- B' at (3,2): svgX=245, svgY=170-2*25=120 -->
  <circle cx="245" cy="120" r="5" fill="#f43f5e"/>
  <text x="250" y="116" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B'(3,2)</text>
  <!-- dashed line showing reflection -->
  <line x1="245" y1="220" x2="245" y2="124" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
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
  <!-- C' at (4,5): svgX=170+4*25=270, svgY=45 -->
  <circle cx="270" cy="45" r="5" fill="#f43f5e"/>
  <text x="274" y="41" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C'(4,5)</text>
  <!-- dashed line showing reflection over y-axis -->
  <line x1="70" y1="45" x2="266" y2="45" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
</svg>`,
      options: ["(4, 5)", "(−4, −5)", "(5, −4)", "(4, −5)"],
      answer: 0,
      explanation: "Reflecting in the y-axis changes the sign of the x-coordinate and keeps the y-coordinate the same. So C(−4, 5) maps to C'(4, 5)."
    },
    {
      id: "c19_q7",
      topic: "Reflections",
      type: "input",
      question: "Point D is at (3, 7). It is reflected in the line <strong>y = x</strong>. Write the coordinates of the image D' in the form (x, y).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Reflection of D(3,7) in the line y=x">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="20" x2="320" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="45" x2="320" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="20" x2="20" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="20" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="170" y2="220" stroke="#64748b" stroke-width="1.5"/>
  <!-- mirror line y=x: passes through origin, slope 1 (in math), slope -1 in SVG -->
  <!-- SVG line: at (x,y) math => SVG (170+25x, 170-25y). y=x means SVG y=170-25x, SVG x=170+25x. From x=-4 to x=8 -->
  <!-- x=-4: SVG(70,270); x=8: SVG(370,70) clip to viewbox -->
  <line x1="70" y1="270" x2="320" y2="20" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="305" y="18" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">y=x</text>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="243" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="343" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <text x="157" y="45" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- D at (3,7): svgX=170+3*25=245, svgY=170-7*25=20 -->
  <circle cx="245" cy="20" r="5" fill="#5b5ef4"/>
  <text x="249" y="17" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D(3,7)</text>
  <!-- D' at (7,3): svgX=170+7*25=345 (out of view), use 320; svgY=170-3*25=95 -->
  <!-- Actually (7,3) => svgX=345 which is off-canvas. Let's note it with a label -->
  <circle cx="320" cy="95" r="5" fill="#f43f5e"/>
  <text x="268" y="91" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D'(7,3)</text>
  <!-- dashed line between D and D' -->
  <line x1="245" y1="20" x2="320" y2="95" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
      answer: "(7, 3)",
      acceptableAnswers: ["(7, 3)", "7, 3"],
      explanation: "When reflecting in the line y = x, the x and y coordinates are swapped. So D(3, 7) maps to D'(7, 3)."
    },
    {
      id: "c19_q8",
      topic: "Reflections",
      type: "mcq",
      question: "Point E is at (1, 4). It is reflected in the vertical line <strong>x = 3</strong>. What are the coordinates of the image E'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Reflection of E(1,4) in the line x=3">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="70" x2="320" y2="70" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="70" x2="20" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="70" x2="45" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="70" x2="70" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="70" x2="95" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="70" x2="145" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="70" x2="195" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="70" x2="220" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="70" x2="245" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="70" x2="270" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="70" x2="295" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="70" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170) -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="70" x2="170" y2="210" stroke="#64748b" stroke-width="1.5"/>
  <!-- mirror line x=3: svgX = 170+3*25 = 245 -->
  <line x1="245" y1="65" x2="245" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="248" y="62" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">x=3</text>
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="195" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="245" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="75" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- E at (1,4): svgX=170+1*25=195, svgY=170-4*25=70 -->
  <circle cx="195" cy="70" r="5" fill="#5b5ef4"/>
  <text x="167" y="66" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E(1,4)</text>
  <!-- E' at (5,4): svgX=170+5*25=295, svgY=70 -->
  <circle cx="295" cy="70" r="5" fill="#f43f5e"/>
  <text x="298" y="66" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E'(5,4)</text>
  <!-- horizontal dashed line showing equal distance from mirror -->
  <line x1="195" y1="70" x2="291" y2="70" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="215" y="85" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="249" y="85" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
</svg>`,
      options: ["(5, 4)", "(1, 2)", "(3, 4)", "(−1, 4)"],
      answer: 0,
      explanation: "Point E is 2 units to the left of the line x = 3 (since 3 − 1 = 2). The image is 2 units to the right of x = 3, so x = 3 + 2 = 5. The y-coordinate stays the same: E'(5, 4)."
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
  <!-- F' at (-2,4): svgX=170+(-2)*25=120, svgY=170-4*25=70 -->
  <circle cx="120" cy="70" r="5" fill="#f43f5e"/>
  <text x="55" y="67" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">F'(-2,4)</text>
  <!-- arc indicating rotation -->
  <path d="M 253 128 A 88 88 0 0 0 126 78" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="175" y="100" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">90° ACW</text>
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
  <!-- G' at (-3,1): svgX=95, svgY=170-1*25=145 -->
  <circle cx="95" cy="145" r="5" fill="#f43f5e"/>
  <text x="22" y="142" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">G'(-3,1)</text>
  <!-- line through origin showing 180 rotation -->
  <line x1="95" y1="145" x2="245" y2="195" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="170" cy="170" r="4" fill="#f59e0b"/>
  <text x="173" y="163" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">180°</text>
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
  <!-- H' at (5,-2): svgX=170+5*25=295, svgY=170-(-2)*25=220 -->
  <circle cx="295" cy="220" r="5" fill="#f43f5e"/>
  <text x="299" y="217" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">H'(5,-2)</text>
  <!-- arc indicating clockwise rotation -->
  <path d="M 207 51 A 88 88 0 0 1 288 212" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="268" y="130" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">90° CW</text>
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
  <!-- After reflection in y-axis: (-1,2) svgX=145, svgY=120 -->
  <circle cx="145" cy="120" r="5" fill="#a855f7"/>
  <text x="90" y="117" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(-1,2)</text>
  <!-- After translation +3,-1: (2,1) svgX=220, svgY=145 -->
  <circle cx="220" cy="145" r="5" fill="#f43f5e"/>
  <text x="224" y="142" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">J''(2,1)</text>
  <!-- arrows -->
  <defs>
    <marker id="arr14a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#a855f7"/>
    </marker>
    <marker id="arr14b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f43f5e"/>
    </marker>
  </defs>
  <line x1="191" y1="120" x2="149" y2="120" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr14a)"/>
  <text x="163" y="113" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="10">reflect</text>
  <line x1="148" y1="122" x2="216" y2="142" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr14b)"/>
  <text x="155" y="140" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10">translate</text>
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
  <!-- After 90CW: (y,-x) = (3,2) => svgX=245, svgY=170-2*25=120 -->
  <circle cx="245" cy="120" r="5" fill="#a855f7"/>
  <text x="249" y="117" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(3,2)</text>
  <!-- After reflect x-axis: (3,-2) => svgX=245, svgY=170+2*25=220 -->
  <circle cx="245" cy="220" r="5" fill="#f43f5e"/>
  <text x="249" y="217" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">K''(3,-2)</text>
  <defs>
    <marker id="arr15a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#a855f7"/>
    </marker>
    <marker id="arr15b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f43f5e"/>
    </marker>
  </defs>
  <path d="M 130 100 Q 185 80 241 118" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr15a)"/>
  <text x="175" y="90" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="10">90° CW</text>
  <line x1="245" y1="124" x2="245" y2="216" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr15b)"/>
  <text x="249" y="172" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10">reflect</text>
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
  <!-- Translated rectangle: A'(2,3), B'(6,3), C'(6,5), D'(2,5) -->
  <!-- A'(2,3)=220,95; B'(6,3)=320,95; C'(6,5)=320,45 (clipped); D'(2,5)=220,45 -->
  <polygon points="220,95 320,95 320,45 220,45" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="207" y="92" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A'</text>
  <text x="322" y="92" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B'(6,3)</text>
  <!-- translation arrow from B to B' -->
  <defs>
    <marker id="arr17" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/>
    </marker>
  </defs>
  <line x1="270" y1="170" x2="316" y2="99" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr17)"/>
  <text x="278" y="145" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">+2,+3</text>
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
  <!-- M' at (2,-5): svgX=220, svgY=170+5*25=295 -->
  <circle cx="220" cy="295" r="5" fill="#f43f5e"/>
  <text x="224" y="292" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">M'(2,-5)</text>
  <!-- dashed vertical line showing reflection -->
  <line x1="220" y1="49" x2="220" y2="291" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="223" y="175" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">x-axis</text>
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
  <!-- Image after 180°: (-1,-1),(-3,-1),(-3,-3),(-1,-3) -->
  <!-- (-1,-1)=145,195; (-3,-1)=95,195; (-3,-3)=95,245; (-1,-3)=145,245 -->
  <polygon points="145,195 95,195 95,245 145,245" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="125" y="208" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(-1,-1)</text>
  <text x="60" y="208" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(-3,-1)</text>
  <text x="60" y="258" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(-3,-3)</text>
  <text x="125" y="258" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">(-1,-3)</text>
  <!-- center of rotation -->
  <circle cx="170" cy="170" r="4" fill="#f59e0b"/>
  <text x="174" y="167" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">180°</text>
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
  <!-- After translate -4,+2: (-2,3) => svgX=120, svgY=95 -->
  <circle cx="120" cy="95" r="5" fill="#a855f7"/>
  <text x="62" y="92" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">(-2,3)</text>
  <!-- After reflect y-axis: (2,3) => svgX=220, svgY=95 -->
  <circle cx="220" cy="95" r="5" fill="#f43f5e"/>
  <text x="224" y="92" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">L''(2,3)</text>
  <!-- arrows -->
  <defs>
    <marker id="arr20a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#a855f7"/>
    </marker>
    <marker id="arr20b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#f43f5e"/>
    </marker>
  </defs>
  <line x1="216" y1="143" x2="124" y2="99" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr20a)"/>
  <text x="155" y="128" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="10">-4,+2</text>
  <line x1="124" y1="95" x2="216" y2="95" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr20b)"/>
  <text x="155" y="88" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10">reflect y</text>
</svg>`,
      answer: "(2, 3)",
      acceptableAnswers: ["(2, 3)", "2, 3"],
      explanation: "Step 1 — translate left 4, up 2: (2 − 4, 1 + 2) = (−2, 3). Step 2 — reflect in y-axis: (−2, 3) → (2, 3). The final image is L''(2, 3)."
    },
    {
      id: "c19_q21",
      topic: "Translations",
      type: "mcq",
      question: "A translation is described by the column vector <strong>(-3 / 5)</strong> (top number −3, bottom number 5). What does this vector mean?",
      options: [
        "3 right and 5 up",
        "3 left and 5 down",
        "3 left and 5 up",
        "3 right and 5 down"
      ],
      answer: 2,
      explanation: "In a column vector, the <strong>top number</strong> gives the horizontal movement (positive = right, negative = left) and the <strong>bottom number</strong> gives the vertical movement (positive = up, negative = down). So (−3 / 5) means 3 left and 5 up."
    },
    {
      id: "c19_q22",
      topic: "Translations",
      type: "input",
      question: "Point P is at (4, −1). It is translated by the column vector <strong>(2 / −3)</strong> (top 2, bottom −3). Write the coordinates of the image P' in the form (x, y).",
      answer: "(6, -4)",
      acceptableAnswers: ["(6, -4)", "(6, −4)", "6, -4", "6, −4"],
      explanation: "The column vector (2 / −3) means move 2 right and 3 down. So: x: 4 + 2 = 6, y: −1 + (−3) = −4. The image is P'(6, −4)."
    },
    {
      id: "c19_q23",
      topic: "Translations",
      type: "mcq",
      question: "Shape A is translated to shape B. Vertex (1, 3) on A maps to vertex (4, −2) on B. Which column vector describes this translation?",
      options: [
        "(3 / 5)",
        "(3 / −5)",
        "(−3 / 5)",
        "(5 / 3)"
      ],
      answer: 1,
      explanation: "Find the change in each coordinate: x-change = 4 − 1 = +3 (right 3), y-change = −2 − 3 = −5 (down 5). The column vector is (3 / −5) — top 3, bottom −5."
    },
    {
      id: "c19_q24",
      topic: "Reflections",
      type: "mcq",
      question: "Point Q is at (5, 2). It is reflected in the horizontal line <strong>y = −1</strong>. What are the coordinates of image Q'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" aria-label="Reflection of Q(5,2) in the line y=-1">
  <rect width="340" height="340" fill="#f8fafc" rx="8"/>
  <!-- grid -->
  <line x1="20" y1="95" x2="320" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="120" x2="320" y2="120" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="145" x2="320" y2="145" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="170" x2="320" y2="170" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="195" x2="320" y2="195" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="220" x2="320" y2="220" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="245" x2="320" y2="245" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="270" x2="320" y2="270" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="20" y1="95" x2="20" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="95" x2="45" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="95" x2="70" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="95" x2="95" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="95" x2="120" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="95" x2="145" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="95" x2="170" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="95" x2="195" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="95" x2="220" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="95" x2="245" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="95" x2="270" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="95" x2="295" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="95" x2="320" y2="285" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (170,170), 1 unit=25px -->
  <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="170" y2="285" stroke="#64748b" stroke-width="1.5"/>
  <!-- mirror line y=-1: svgY=170-(-1)*25=195 -->
  <line x1="20" y1="195" x2="320" y2="195" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="322" y="198" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">y=−1</text>
  <!-- axis labels -->
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="125" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="157" y="200" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-1</text>
  <text x="157" y="270" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">-4</text>
  <!-- Q at (5,2): svgX=170+5*25=295, svgY=170-2*25=120 -->
  <circle cx="295" cy="120" r="5" fill="#5b5ef4"/>
  <text x="299" y="117" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q(5,2)</text>
  <!-- Q' at (5,-4): svgX=295, svgY=170+4*25=270 -->
  <circle cx="295" cy="270" r="5" fill="#f43f5e"/>
  <text x="299" y="267" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Q'(5,-4)</text>
  <!-- dashed vertical line between Q and Q' through mirror -->
  <line x1="295" y1="124" x2="295" y2="266" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="299" y="198" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="299" y="240" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
</svg>`,
      options: ["(5, 0)", "(5, −3)", "(5, −4)", "(−5, 2)"],
      answer: 2,
      explanation: "Q is at y = 2, and the mirror line is y = −1. The distance from Q to the mirror is 2 − (−1) = 3. The image is 3 units below the mirror line: −1 − 3 = −4. The x-coordinate stays the same: Q'(5, −4)."
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
      question: "Point S is at (5, 1). It is rotated <strong>90° anticlockwise about the point (2, 1)</strong>. What are the coordinates of S'?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="90 anticlockwise rotation of S(5,1) about centre (2,1)">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
  <!-- grid -->
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
  <text x="174" y="183" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="220" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="295" y="183" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="157" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="157" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- centre of rotation at (2,1): svgX=220, svgY=145 -->
  <circle cx="220" cy="145" r="5" fill="#f59e0b"/>
  <text x="224" y="142" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C(2,1)</text>
  <!-- S at (5,1): svgX=295, svgY=145 -->
  <circle cx="295" cy="145" r="5" fill="#5b5ef4"/>
  <text x="299" y="142" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">S(5,1)</text>
  <!-- S' at (2,4): svgX=220, svgY=170-4*25=70 -->
  <circle cx="220" cy="70" r="5" fill="#f43f5e"/>
  <text x="224" y="67" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">S'(2,4)</text>
  <!-- arc from S to S' -->
  <path d="M 291 138 A 76 76 0 0 0 223 74" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="268" y="95" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">90° ACW</text>
</svg>`,
      options: ["(2, 4)", "(−1, 1)", "(2, −2)", "(5, 4)"],
      answer: 0,
      explanation: "To rotate about a non-origin point C(2, 1): first translate so C is at the origin by subtracting (2, 1). S(5, 1) becomes (3, 0). Apply 90° ACW rule (x,y)→(−y, x): (3, 0)→(0, 3). Then translate back by adding (2, 1): (0+2, 3+1) = (2, 4). So S'(2, 4)."
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
      id: "c19_q30",
      topic: "Enlargements",
      type: "mcq",
      question: "A rectangle has vertices at (1, 1), (3, 1), (3, 2), and (1, 2). It is enlarged with <strong>scale factor 3</strong> and <strong>centre of enlargement at the origin</strong>. What are the coordinates of the image of vertex (3, 2)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" aria-label="Enlargement of rectangle with scale factor 3 from origin">
  <rect width="340" height="280" fill="#f8fafc" rx="8"/>
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
  <line x1="20" y1="20" x2="20" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="45" y1="20" x2="45" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="70" y1="20" x2="70" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="95" y1="20" x2="95" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="145" y1="20" x2="145" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="170" y1="20" x2="170" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="195" y1="20" x2="195" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="220" y1="20" x2="220" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="20" x2="245" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="270" y1="20" x2="270" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="320" y1="20" x2="320" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes: origin at (20,245), 1 unit=25px (positive quadrant only) -->
  <line x1="20" y1="245" x2="320" y2="245" stroke="#64748b" stroke-width="1.5"/>
  <line x1="20" y1="20" x2="20" y2="255" stroke="#64748b" stroke-width="1.5"/>
  <text x="24" y="258" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="45" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="70" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="95" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="120" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="145" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="170" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="195" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <text x="220" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="245" y="258" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9</text>
  <text x="13" y="220" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="13" y="195" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="13" y="170" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="13" y="145" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="13" y="120" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="13" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <!-- svgX = 20 + x*25, svgY = 245 - y*25 -->
  <!-- Original rect: (1,1)=45,220; (3,1)=95,220; (3,2)=95,195; (1,2)=45,195 -->
  <polygon points="45,220 95,220 95,195 45,195" fill="rgba(91,94,244,0.2)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="60" y="213" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">A</text>
  <!-- Image rect sf=3: (3,3)=95,170; (9,3)=245,170; (9,6)=245,95; (3,6)=95,95 -->
  <polygon points="95,170 245,170 245,95 95,95" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="155" y="140" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A' (enlarged)</text>
  <!-- ray lines from origin through corners -->
  <line x1="20" y1="245" x2="250" y2="165" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="20" y1="245" x2="100" y2="88" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <text x="22" y="242" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">O</text>
</svg>`,
      options: ["(6, 4)", "(9, 6)", "(9, 2)", "(3, 6)"],
      answer: 1,
      explanation: "When enlarging from the origin with scale factor k, multiply each coordinate by k. So (3, 2) → (3 × 3, 2 × 3) = (9, 6). Every vertex is multiplied by the scale factor."
    },
    {
      id: "c19_q31",
      topic: "Enlargements",
      type: "mcq",
      question: "A triangle has vertices at A(0, 0), B(4, 0), C(0, 2). It is enlarged with scale factor 2 from <strong>centre (0, 0)</strong>. What are the coordinates of C'?",
      options: ["(0, 4)", "(4, 2)", "(0, 2)", "(8, 0)"],
      answer: 0,
      explanation: "Scale factor 2 from the origin: multiply each coordinate by 2. C(0, 2) → C'(0 × 2, 2 × 2) = C'(0, 4). The other vertices map: A'(0,0) and B'(8, 0)."
    },
    {
      id: "c19_q32",
      topic: "Enlargements",
      type: "mcq",
      question: "A shape and its enlarged image are shown. The original has a side length of <strong>3 cm</strong>, and the corresponding side on the image is <strong>12 cm</strong>. What is the scale factor of the enlargement?",
      options: ["3", "4", "9", "15"],
      answer: 1,
      explanation: "Scale factor = image length ÷ original length = 12 ÷ 3 = <strong>4</strong>. When the scale factor is 4, every length in the image is 4 times the corresponding length in the original."
    },
    {
      id: "c19_q33",
      topic: "Enlargements",
      type: "input",
      question: "Triangle P has vertices at (2, 1), (4, 1), (2, 4). It is enlarged with <strong>scale factor 2</strong> from <strong>centre (2, 1)</strong>. What are the coordinates of the image of vertex (4, 1)? Write in the form (x, y).",
      answer: "(6, 1)",
      acceptableAnswers: ["(6, 1)", "6, 1"],
      explanation: "To enlarge from centre C(2, 1) with scale factor 2: first find the vector from C to the point: (4−2, 1−1) = (2, 0). Multiply by scale factor 2: (4, 0). Add back to centre: (2+4, 1+0) = (6, 1). So the image is (6, 1)."
    },
    {
      id: "c19_q34",
      topic: "Enlargements",
      type: "mcq",
      question: "To <strong>fully describe an enlargement</strong>, which two pieces of information must you give?",
      options: [
        "The angle and the direction",
        "The mirror line and the scale factor",
        "The scale factor and the centre of enlargement",
        "The translation vector and the scale factor"
      ],
      answer: 2,
      explanation: "An enlargement is fully described by the <strong>scale factor</strong> (how many times bigger) and the <strong>centre of enlargement</strong> (the fixed point everything is measured from). Unlike rotations, you don't need a direction."
    },
    {
      id: "c19_q35",
      topic: "Enlargements",
      type: "mcq",
      question: "A shape is enlarged with scale factor 3 from centre C(1, 2). A vertex of the original shape is at (3, 5). Which calculation gives the image vertex?",
      options: [
        "Multiply (3, 5) by 3 → (9, 15)",
        "Add (3, 5) + (1, 2) then multiply by 3",
        "Find vector from C to vertex, multiply by 3, add back to C",
        "Multiply the distance from origin by 3"
      ],
      answer: 2,
      explanation: "The correct method: Step 1 — vector from C(1,2) to (3,5): (3−1, 5−2) = (2, 3). Step 2 — multiply by scale factor 3: (6, 9). Step 3 — add back to C: (1+6, 2+9) = (7, 11). Always work from the centre of enlargement, not the origin."
    },
    {
      id: "c19_q36",
      topic: "Enlargements",
      type: "mcq",
      question: "Shape A is enlarged to give Shape B. Shape A has a perimeter of <strong>8 cm</strong> and Shape B has a perimeter of <strong>24 cm</strong>. What is the scale factor of the enlargement?",
      options: ["16", "3", "8", "2"],
      answer: 1,
      explanation: "Scale factor = image measurement ÷ original measurement = 24 ÷ 8 = <strong>3</strong>. When the scale factor is k, all lengths (including perimeter) are multiplied by k. Note: area would be multiplied by k² = 9."
    },
    {
      id: "c19_q37",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Shape A is reflected in the line x = 1, then the image is reflected in the line x = 4. What <strong>single transformation</strong> maps Shape A to the final image?",
      options: [
        "Reflection in x = 2.5",
        "Rotation 90° about the origin",
        "Translation by vector (6 / 0)",
        "Translation by vector (3 / 0)"
      ],
      answer: 2,
      explanation: "Two reflections in <strong>parallel vertical lines</strong> x = 1 and x = 4 produce a translation. The distance between the lines is 4 − 1 = 3, so the translation is <strong>twice</strong> that distance = 6 units in the direction from first line to second (rightward). The single transformation is a translation by vector (6 / 0)."
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
      question: "A shape undergoes two successive reflections: first in the line y = 1, then in the line y = 5. What single transformation is equivalent?",
      options: [
        "Translation by vector (0 / 8)",
        "Translation by vector (0 / 4)",
        "Reflection in the line y = 3",
        "Rotation 180° about (0, 3)"
      ],
      answer: 0,
      explanation: "Two reflections in parallel horizontal lines produce a translation perpendicular to those lines. The distance between y = 1 and y = 5 is 4 units. The translation is twice that = 8 units upward (since we go from y=1 to y=5, i.e. upward). The single transformation is translation by vector (0 / 8)."
    },
    {
      id: "c19_q40",
      topic: "Enlargements",
      difficulty: "challenging",
      type: "mcq",
      question: "Triangle ABC has vertices A(2, 2), B(4, 2), C(2, 5). It is enlarged with <strong>scale factor ½</strong> from centre <strong>(0, 0)</strong>. Which describes the image triangle A'B'C'?",
      options: [
        "A'(4,4), B'(8,4), C'(4,10) — it gets bigger",
        "A'(1,1), B'(2,1), C'(1,2.5) — it gets smaller",
        "A'(1,1), B'(2,1), C'(1,2.5) — it gets bigger",
        "A'(2,2), B'(4,2), C'(2,5) — it stays the same"
      ],
      answer: 1,
      explanation: "A scale factor between 0 and 1 gives a <strong>reduction</strong> (the image is smaller). Multiply each coordinate by ½: A(2,2)→A'(1,1), B(4,2)→B'(2,1), C(2,5)→C'(1, 2.5). The image is half the size of the original but has the same shape. This is still called an enlargement even though it makes things smaller!"
    },
    {
      id: "c19_q41",
      topic: "Rotations",
      difficulty: "challenging",
      type: "mcq",
      question: "Point T is at (1, 4). It is rotated <strong>90° clockwise about the point (3, 2)</strong>. What are the coordinates of T'?",
      options: ["(5, 4)", "(5, 0)", "(1, 0)", "(−1, 4)"],
      answer: 0,
      explanation: "To rotate 90° CW about centre C(3, 2): Step 1 — translate so C is at origin: T(1, 4) → (1−3, 4−2) = (−2, 2). Step 2 — apply 90° CW rule (x, y) → (y, −x): (−2, 2) → (2, −(−2)) = (2, 2). Step 3 — translate back by adding (3, 2): (2+3, 2+2) = (5, 4). So T'(5, 4)."
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
      id: "c19_q43",
      topic: "Enlargements",
      difficulty: "challenging",
      type: "input",
      question: "Triangle A has vertices at (1, 1), (3, 1), and (1, 4). Triangle B (its enlarged image) has vertices at (1, 1), (7, 1), and (1, 10). What is the scale factor of the enlargement?",
      answer: "3",
      acceptableAnswers: ["3"],
      explanation: "Compare corresponding side lengths. The base of triangle A (from (1,1) to (3,1)) has length 2. The base of triangle B (from (1,1) to (7,1)) has length 6. Scale factor = 6 ÷ 2 = <strong>3</strong>. Check the height: A has height 4−1 = 3, B has height 10−1 = 9. Scale factor = 9 ÷ 3 = 3. Both give scale factor 3, and the centre of enlargement is (1, 1) — the shared vertex. Great work!"
    },
    {
      id: "c19_q44",
      topic: "Combinations of transformations",
      difficulty: "challenging",
      type: "mcq",
      question: "Point U is at (3, 1). It is rotated <strong>180° about the origin</strong>, then enlarged with <strong>scale factor 2 from the origin</strong>. What are the final coordinates of U?",
      options: ["(−6, −2)", "(6, 2)", "(−3, −1)", "(6, −2)"],
      answer: 0,
      explanation: "Step 1 — rotate 180° about origin: (x,y)→(−x,−y), so (3,1)→(−3,−1). Step 2 — enlarge scale factor 2 from origin: multiply by 2, so (−3,−1)→(−6,−2). The final image is U''(−6, −2). Great thinking combining two transformations!"
    },
    {
      id: "c19_q45",
      topic: "Reflections",
      difficulty: "challenging",
      type: "mcq",
      question: "Point V is at (4, 7). It is reflected in the line <strong>y = x</strong>, and then the image is reflected in the <strong>y-axis</strong>. What are the final coordinates of V?",
      options: ["(7, 4)", "(−7, 4)", "(4, −7)", "(−4, 7)"],
      answer: 1,
      explanation: "Step 1 — reflect in y=x: swap coordinates. V(4,7) → V'(7, 4). Step 2 — reflect in y-axis: change sign of x-coordinate. V'(7, 4) → V''(−7, 4). The final image is V''(−7, 4). Well done if you tracked both steps!"
    }
  ]
};
