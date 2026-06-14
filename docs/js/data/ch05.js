const ch05 = {
  id: 5,
  title: "Geometric Shapes",
  icon: "🔷",
  color: "#3b82f6",
  topics: ["Polygons", "Triangles", "Quadrilaterals", "Circles", "Solids", "Nets of solids"],
  questions: [
    {
      id: "c5_q1",
      topic: "Polygons",
      type: "mcq",
      question: "What is the name of a polygon with <strong>8 sides</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Octagon with 8 equal sides">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Regular octagon centered at (160,110), radius 85 -->
  <polygon points="
    192,35
    245,68
    245,152
    192,185
    128,185
    75,152
    75,68
    128,35"
    fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side count label -->
  <text x="160" y="116" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">8 sides</text>
  <!-- Vertex label hint -->
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Octagon</text>
</svg>`,
      options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
      answer: 2,
      explanation: "A polygon with 8 sides is called an <strong>octagon</strong>. The prefix 'octa' means eight, just like in the word octopus (eight arms)."
    },
    {
      id: "c5_q2",
      topic: "Polygons",
      type: "mcq",
      question: "The sum of the interior angles of a hexagon is:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Regular hexagon with 6 interior angles marked">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <polygon points="245,108 202,181 118,181 75,108 118,35 202,35"
    fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Small angle arcs at all 6 vertices -->
  <path d="M225,108 A18,18 0 0,1 232,93" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M196,165 A18,18 0 0,1 179,169" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M124,169 A18,18 0 0,1 108,163" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M95,108 A18,18 0 0,1 88,93" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M124,51 A18,18 0 0,1 140,46" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M180,46 A18,18 0 0,1 196,51" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Question mark in centre -->
  <text x="160" y="115" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="22" font-weight="700">?°</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Hexagon — 6 sides, 6 angles</text>
</svg>`,
      options: ["540°", "360°", "720°", "900°"],
      answer: 2,
      explanation: "The sum of interior angles of any polygon = (n − 2) × 180°, where n is the number of sides. For a hexagon: (6 − 2) × 180° = 4 × 180° = <strong>720°</strong>."
    },
    {
      id: "c5_q3",
      topic: "Polygons",
      type: "mcq",
      question: "A <strong>regular polygon</strong> is one where:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Regular hexagon showing equal sides and equal angles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Regular hexagon centered at (160,105), radius 80 -->
  <polygon points="
    240,105
    200,174
    120,174
    80,105
    120,36
    200,36"
    fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Tick marks on all 6 sides (single tick = all equal) -->
  <!-- Side top-right: midpoint ~(220,70) -->
  <line x1="216" y1="66" x2="224" y2="74" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side right: midpoint ~(220,140) -->
  <line x1="216" y1="144" x2="224" y2="136" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side bottom-right: midpoint ~(160,174) -->
  <line x1="156" y1="178" x2="164" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side bottom-left: midpoint ~(100,140) -->
  <line x1="96" y1="136" x2="104" y2="144" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side left: midpoint ~(100,70) -->
  <line x1="96" y1="74" x2="104" y2="66" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side top-left: midpoint ~(160,36) -->
  <line x1="156" y1="40" x2="164" y2="32" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Label -->
  <text x="160" y="108" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">All sides equal</text>
  <text x="160" y="124" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">All angles equal</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Regular Polygon (hexagon shown)</text>
</svg>`,
      options: [
        "All angles are different",
        "All sides and all angles are equal",
        "All sides are equal but angles are different",
        "It has at least one right angle"
      ],
      answer: 1,
      explanation: "A regular polygon has <strong>all sides equal in length</strong> and <strong>all interior angles equal</strong>. A square and an equilateral triangle are common examples of regular polygons."
    },
    {
      id: "c5_q4",
      topic: "Polygons",
      type: "input",
      question: "A polygon has <strong>10 sides</strong>. What is the sum of its interior angles? (Give your answer in degrees, e.g. 720)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Decagon with 10 sides">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Regular decagon centered at (160,108), radius 85 -->
  <!-- 10 vertices: angle = 90 - k*36 degrees for k=0..9 -->
  <!-- k=0: (160+85,108)=(245,108) -->
  <!-- k=1: (160+85*cos(36°),108-85*sin(36°))=(229,58) -->
  <!-- k=2: (160+85*cos(72°),108-85*sin(72°))=(186,27) -->
  <!-- k=3: (160+85*cos(108°),108-85*sin(108°)) = (160-26,108-81)=(134,27) -->
  <!-- k=4: (160+85*cos(144°),108-85*sin(144°))=(91,58) -->
  <!-- k=5: (75,108) -->
  <!-- k=6: (91,158) -->
  <!-- k=7: (134,189) -->
  <!-- k=8: (186,189) -->
  <!-- k=9: (229,158) -->
  <polygon points="245,108 229,58 186,27 134,27 91,58 75,108 91,158 134,189 186,189 229,158"
    fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="160" y="112" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">10 sides</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Decagon — (10−2)×180° = ?</text>
</svg>`,
      answer: "1440",
      acceptableAnswers: ["1440", "1440°"],
      explanation: "Using the formula (n − 2) × 180°: (10 − 2) × 180° = 8 × 180° = <strong>1440°</strong>. A 10-sided polygon is called a decagon."
    },
    {
      id: "c5_q5",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has all three sides of equal length. What type of triangle is it?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Equilateral triangle with all sides equal">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Equilateral triangle: vertices at (160,28), (60,196), (260,196) -->
  <polygon points="160,28 60,196 260,196" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Tick marks on all three sides (single tick) -->
  <!-- Left side midpoint: (110,112) -->
  <line x1="104" y1="109" x2="116" y2="115" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right side midpoint: (210,112) -->
  <line x1="204" y1="115" x2="216" y2="109" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom side midpoint: (160,196) -->
  <line x1="157" y1="190" x2="163" y2="202" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Angle arcs at each vertex -->
  <path d="M 160,50 A 22,22 0 0,1 178,47" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M 79,184 A 22,22 0 0,1 75,163" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M 241,184 A 22,22 0 0,0 245,163" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle labels -->
  <text x="160" y="62" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">60°</text>
  <text x="72" y="175" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">60°</text>
  <text x="249" y="175" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">60°</text>
  <!-- Vertex labels -->
  <text x="160" y="20" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="48" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="272" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">All sides equal — all angles 60°</text>
</svg>`,
      options: ["Isosceles", "Scalene", "Right-angled", "Equilateral"],
      answer: 3,
      explanation: "An <strong>equilateral triangle</strong> has all three sides equal in length and all three angles equal to 60°. 'Equilateral' comes from Latin meaning 'equal sides'."
    },
    {
      id: "c5_q6",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has angles of 90°, 45°, and 45°. How would you classify this triangle by its angles?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Right-angled isosceles triangle with 90, 45, 45 degrees">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Right-angled isosceles triangle: right angle at bottom-left -->
  <!-- Vertices: A=(70,185), B=(70,35), C=(250,185) -->
  <polygon points="70,185 70,35 250,185" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right angle box at A=(70,185) -->
  <rect x="70" y="170" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Angle arc at B=(70,35): 45° -->
  <path d="M 70,57 A 22,22 0 0,1 88,46" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle arc at C=(250,185): 45° -->
  <path d="M 230,185 A 22,22 0 0,0 236,167" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Tick marks on equal legs (AB and AC) -->
  <!-- Left leg AB midpoint (70,110) -->
  <line x1="63" y1="107" x2="77" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Hypotenuse BC midpoint (160,110) -->
  <!-- No tick needed; hypotenuse is longest -->
  <!-- Angle labels -->
  <text x="58" y="178" text-anchor="end" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">90°</text>
  <text x="90" y="55" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">45°</text>
  <text x="218" y="180" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">45°</text>
  <!-- Vertex labels -->
  <text x="57" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="57" y="32" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="262" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
</svg>`,
      options: ["Acute-angled", "Obtuse-angled", "Right-angled", "Equilateral"],
      answer: 2,
      explanation: "A triangle containing a <strong>90° angle</strong> is called a right-angled triangle. The small square symbol drawn at a corner indicates a right angle."
    },
    {
      id: "c5_q7",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has sides of length 3 cm, 5 cm, and 7 cm. What type of triangle is this <em>based on its sides</em>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Scalene triangle with sides 3cm, 5cm, 7cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Scalene triangle: all different sides 3, 5, 7 cm -->
  <!-- Place base (7cm) along bottom: A=(45,185), B=(255,185) -->
  <!-- Find C using 3cm from B and 5cm from A -->
  <!-- C approx: by cosine rule. a=3,b=5,c=7 -->
  <!-- cos(C)=(a²+b²-c²)/(2ab)=(9+25-49)/30=-15/30=-0.5 => C=120° -->
  <!-- Place A=(45,185), B=(255,185), base=7cm -> 210px total, 30px/cm -->
  <!-- C from A: distance 5cm=150px, from B: distance 3cm=90px -->
  <!-- C: x = (45² + 150² - ... ) let's just place visually -->
  <!-- Using law of cosines: Cx from A = (5²+7²-3²)/(2*5*7)*5... -->
  <!-- cos(A)=(b²+c²-a²)/(2bc)=(25+49-9)/70=65/70=0.929 => A=21.8° -->
  <!-- Cx = A.x + 5*cos(21.8°)*30 = 45+5*0.929*30 = 45+139 = 184 -->
  <!-- Cy = A.y - 5*sin(21.8°)*30 = 185-5*0.371*30 = 185-55.7 = 129 -->
  <polygon points="45,185 255,185 184,129" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side labels -->
  <!-- Bottom (AB=7cm): midpoint (150,185) -->
  <text x="150" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">7 cm</text>
  <!-- Right side (BC=3cm): midpoint (220,157) -->
  <text x="228" y="153" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3 cm</text>
  <!-- Left side (AC=5cm): midpoint (115,157) -->
  <text x="95" y="153" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5 cm</text>
  <!-- Vertex labels -->
  <text x="35" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="265" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="184" y="120" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="160" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">All sides different → Scalene</text>
</svg>`,
      options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      answer: 2,
      explanation: "A <strong>scalene triangle</strong> has all three sides of different lengths. Here 3 cm, 5 cm, and 7 cm are all different, so this is a scalene triangle."
    },
    {
      id: "c5_q8",
      topic: "Triangles",
      type: "input",
      question: "Two angles of a triangle are 65° and 75°. What is the size of the third angle? (Give the number only, in degrees)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangle with two known angles 65 and 75 degrees, third angle unknown">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangle: A=(50,190), B=(270,190), C=(200,35) -->
  <polygon points="50,190 270,190 200,35" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Angle arc at A=(50,190): 65° -->
  <path d="M 72,190 A 22,22 0 0,0 65,169" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle arc at B=(270,190): 75° -->
  <path d="M 248,190 A 22,22 0 0,1 255,169" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle arc at C=(200,35): unknown -->
  <path d="M 197,57 A 22,22 0 0,1 214,50" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- Angle labels -->
  <text x="82" y="182" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">65°</text>
  <text x="228" y="182" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">75°</text>
  <text x="212" y="55" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">?°</text>
  <!-- Vertex labels -->
  <text x="38" y="205" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="282" y="205" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="200" y="26" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="160" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">65° + 75° + ? = 180°</text>
</svg>`,
      answer: "40",
      acceptableAnswers: ["40", "40°"],
      explanation: "The angles of any triangle add up to <strong>180°</strong>. So the third angle = 180° − 65° − 75° = <strong>40°</strong>."
    },
    {
      id: "c5_q9",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which quadrilateral has <strong>exactly one pair</strong> of parallel sides?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Trapezoid with exactly one pair of parallel sides">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Trapezoid: top side shorter than bottom -->
  <!-- A=(80,185), B=(240,185), C=(210,65), D=(110,65) -->
  <polygon points="80,185 240,185 210,65 110,65" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Arrow marks on parallel sides (top and bottom) -->
  <!-- Bottom side arrow at midpoint (160,185) -->
  <text x="157" y="181" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">›</text>
  <!-- Top side arrow at midpoint (160,65) -->
  <text x="157" y="61" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">›</text>
  <!-- Parallel label -->
  <text x="160" y="205" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">parallel</text>
  <text x="160" y="217" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">parallel</text>
  <!-- Vertex labels -->
  <text x="68" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="252" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="218" y="58" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="102" y="58" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">D</text>
  <text x="160" y="132" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Trapezoid</text>
  <text x="160" y="148" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1 pair of parallel sides</text>
</svg>`,
      options: ["Parallelogram", "Rhombus", "Trapezoid", "Rectangle"],
      answer: 2,
      explanation: "A <strong>trapezoid</strong> (also called a trapezium) has exactly one pair of parallel sides. A parallelogram, rhombus, and rectangle all have <em>two</em> pairs of parallel sides."
    },
    {
      id: "c5_q10",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "A quadrilateral has all sides equal in length and all angles equal to 90°. What shape is it?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square with all sides equal and all angles 90 degrees">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square centered: A=(80,40), B=(240,40), C=(240,180), D=(80,180) -->
  <polygon points="80,40 240,40 240,180 80,180" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right angle boxes at all 4 corners -->
  <rect x="80" y="40" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="226" y="40" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="226" y="166" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="80" y="166" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Tick marks on all 4 sides -->
  <!-- Top midpoint (160,40) -->
  <line x1="157" y1="34" x2="163" y2="46" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right midpoint (240,110) -->
  <line x1="234" y1="107" x2="246" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom midpoint (160,180) -->
  <line x1="157" y1="174" x2="163" y2="186" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Left midpoint (80,110) -->
  <line x1="74" y1="107" x2="86" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Vertex labels -->
  <text x="68" y="36" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="252" y="36" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="252" y="194" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="68" y="194" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">D</text>
  <text x="160" y="116" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Square</text>
  <text x="160" y="132" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">All sides equal, all angles 90°</text>
</svg>`,
      options: ["Rhombus", "Square", "Rectangle", "Kite"],
      answer: 1,
      explanation: "A <strong>square</strong> has all four sides equal <em>and</em> all four right angles (90°). A rhombus also has equal sides but its angles are not necessarily 90°."
    },
    {
      id: "c5_q11",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which of the following statements about a <strong>rhombus</strong> is correct?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rhombus with all four sides equal">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rhombus: diamond shape, all sides equal -->
  <!-- A=(160,25), B=(260,110), C=(160,195), D=(60,110) -->
  <polygon points="160,25 260,110 160,195 60,110" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Tick marks on all 4 sides -->
  <!-- Top-right side midpoint: (210,68) -->
  <line x1="205" y1="63" x2="215" y2="73" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom-right side midpoint: (210,152) -->
  <line x1="205" y1="157" x2="215" y2="147" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom-left side midpoint: (110,152) -->
  <line x1="105" y1="147" x2="115" y2="157" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top-left side midpoint: (110,68) -->
  <line x1="105" y1="73" x2="115" y2="63" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Angle arcs: top (acute) -->
  <path d="M 147,43 A 20,20 0 0,1 173,43" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle arcs: right (obtuse) -->
  <path d="M 240,110 A 20,20 0 0,1 240,128" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Vertex labels -->
  <text x="160" y="17" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A</text>
  <text x="273" y="114" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">B</text>
  <text x="160" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">C</text>
  <text x="47" y="114" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">D</text>
  <text x="160" y="110" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Rhombus</text>
  <text x="160" y="126" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">All 4 sides equal</text>
</svg>`,
      options: [
        "All angles are 90°",
        "Opposite sides are equal but adjacent sides are different",
        "All four sides are equal in length",
        "It has exactly one pair of parallel sides"
      ],
      answer: 2,
      explanation: "A <strong>rhombus</strong> has all four sides equal in length. Its opposite angles are equal, but its angles are <em>not</em> necessarily 90°. It is like a 'pushed-over' square."
    },
    {
      id: "c5_q12",
      topic: "Circles",
      type: "mcq",
      question: "A chord in a circle is a line segment that:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Circle showing chord, radius, and diameter">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (160,110), radius 85 -->
  <circle cx="160" cy="110" r="85" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Center point -->
  <circle cx="160" cy="110" r="3" fill="#64748b"/>
  <text x="165" y="106" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <!-- Radius line (O to top) -->
  <line x1="160" y1="110" x2="160" y2="25" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="170" y="72" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">radius</text>
  <!-- Chord: two points on circle, not through centre -->
  <!-- Point P1: angle=210° => (160+85*cos(210°), 110+85*sin(210°)) = (160-74,110+43)=(86,153) -->
  <!-- Point P2: angle=340° => (160+85*cos(340°), 110+85*sin(340°)) = (160+80,110-29)=(240,81) -->
  <line x1="86" y1="153" x2="240" y2="81" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="86" cy="153" r="4" fill="#f43f5e"/>
  <circle cx="240" cy="81" r="4" fill="#f43f5e"/>
  <text x="60" y="162" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">chord</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">A chord joins two points on the circle</text>
</svg>`,
      options: [
        "Starts at the centre and ends on the circle",
        "Connects two points on the circle and passes through the centre",
        "Connects two points on the circle without necessarily passing through the centre",
        "Goes around the outside of the circle"
      ],
      answer: 2,
      explanation: "A <strong>chord</strong> is a straight line segment that joins any two points on a circle. The <em>diameter</em> is a special chord that passes through the centre. A radius is not a chord — it goes from the centre to the edge."
    },
    {
      id: "c5_q13",
      topic: "Circles",
      type: "input",
      question: "A circle has a radius of <strong>9 cm</strong>. What is the length of its diameter in centimetres?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Circle with radius 9cm and diameter shown">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (160,110), radius 85 -->
  <circle cx="160" cy="110" r="85" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Center point -->
  <circle cx="160" cy="110" r="3" fill="#64748b"/>
  <text x="165" y="106" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <!-- Radius line -->
  <line x1="160" y1="110" x2="245" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <text x="202" y="105" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">9 cm</text>
  <!-- Diameter line -->
  <line x1="75" y1="110" x2="245" y2="110" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- Diameter brace label -->
  <text x="160" y="135" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">diameter = 2 × 9 = ?</text>
  <!-- Points on circle -->
  <circle cx="75" cy="110" r="4" fill="#f43f5e"/>
  <circle cx="245" cy="110" r="4" fill="#f43f5e"/>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">diameter = 2 × radius</text>
</svg>`,
      answer: "18",
      acceptableAnswers: ["18", "18 cm"],
      explanation: "The <strong>diameter</strong> of a circle is twice the radius. So diameter = 2 × 9 cm = <strong>18 cm</strong>. The diameter is the longest chord in any circle."
    },
    {
      id: "c5_q14",
      topic: "Circles",
      type: "mcq",
      question: "The region enclosed between two radii and an arc of a circle is called a:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Circle showing a sector (pie slice region between two radii and an arc)">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (155,115), radius 80 -->
  <circle cx="155" cy="115" r="80" fill="rgba(91,94,244,0.06)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Sector: from angle -60° to 60° (top-right wedge) -->
  <!-- Angle 1: -60° from horizontal => (155+80*cos(-60°), 115+80*sin(-60°)) = (155+40, 115-69) = (195,46) -->
  <!-- Angle 2:  60° from horizontal => (155+80*cos(60°),  115+80*sin(60°))  = (155+40, 115+69) = (195,184) -->
  <path d="M 155,115 L 195,46 A 80,80 0 0,1 195,184 Z"
    fill="rgba(91,94,244,0.25)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Label inside sector -->
  <text x="196" y="118" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">sector</text>
  <!-- Center label -->
  <circle cx="155" cy="115" r="3" fill="#64748b"/>
  <text x="140" y="112" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <!-- Radius lines -->
  <line x1="155" y1="115" x2="195" y2="46" stroke="#64748b" stroke-width="1.5"/>
  <line x1="155" y1="115" x2="195" y2="184" stroke="#64748b" stroke-width="1.5"/>
  <!-- Arc label -->
  <text x="225" y="118" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">arc</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Sector = 2 radii + arc</text>
</svg>`,
      options: ["Chord", "Segment", "Sector", "Tangent"],
      answer: 2,
      explanation: "A <strong>sector</strong> is a 'pie-slice' shaped region bounded by two radii and an arc. A chord divides a circle into two <em>segments</em>, which are different from sectors."
    },
    {
      id: "c5_q15",
      topic: "Solids",
      type: "mcq",
      question: "A cube has how many <strong>vertices</strong> (corners)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Cube with 8 vertices labeled">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Cube drawn in isometric-ish perspective -->
  <!-- Front face: (70,80),(190,80),(190,180),(70,180) -->
  <!-- Back offset: +50px right, -40px up -->
  <!-- Back face: (120,40),(240,40),(240,140),(120,140) -->
  <!-- Front face -->
  <polygon points="70,80 190,80 190,180 70,180" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face -->
  <polygon points="70,80 120,40 240,40 190,80" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face -->
  <polygon points="190,80 240,40 240,140 190,180" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Hidden edges (dashed) -->
  <line x1="70" y1="180" x2="120" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="120" y1="40" x2="120" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="120" y1="140" x2="240" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 8 vertex dots and labels -->
  <circle cx="70" cy="80" r="4" fill="#f43f5e"/>
  <text x="58" y="78" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">1</text>
  <circle cx="190" cy="80" r="4" fill="#f43f5e"/>
  <text x="194" y="78" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">2</text>
  <circle cx="190" cy="180" r="4" fill="#f43f5e"/>
  <text x="194" y="184" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">3</text>
  <circle cx="70" cy="180" r="4" fill="#f43f5e"/>
  <text x="55" y="184" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">4</text>
  <circle cx="120" cy="40" r="4" fill="#f43f5e"/>
  <text x="117" y="33" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">5</text>
  <circle cx="240" cy="40" r="4" fill="#f43f5e"/>
  <text x="244" y="38" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">6</text>
  <circle cx="240" cy="140" r="4" fill="#f43f5e"/>
  <text x="244" y="144" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">7</text>
  <circle cx="120" cy="140" r="4" fill="#f43f5e"/>
  <text x="110" y="153" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">8</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Cube — count the red corners</text>
</svg>`,
      options: ["6", "8", "12", "4"],
      answer: 1,
      explanation: "A cube has <strong>8 vertices</strong> (corners), 12 edges, and 6 faces. You can verify this using Euler's formula: Vertices − Edges + Faces = 2, so 8 − 12 + 6 = 2. ✓"
    },
    {
      id: "c5_q16",
      topic: "Solids",
      type: "mcq",
      question: "A triangular prism has triangular cross-sections. How many <strong>faces</strong> does it have in total?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangular prism with 5 faces labeled">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangular prism: front triangle, back triangle, 3 rectangular faces -->
  <!-- Front triangle: A=(80,175), B=(195,175), C=(130,60) -->
  <!-- Back triangle offset +60px right, -35px up: D=(140,140), E=(255,140), F=(190,25) -->
  <!-- Front triangular face -->
  <polygon points="80,175 195,175 130,60" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top rectangular face (between C,F and top edges) -->
  <polygon points="130,60 190,25 255,140 195,175" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right rectangular face -->
  <polygon points="195,175 255,140 255,140 195,175" fill="rgba(91,94,244,0.05)" stroke="#5b5ef4" stroke-width="1"/>
  <!-- Back triangle (partially hidden) -->
  <polygon points="140,140 255,140 190,25" fill="rgba(91,94,244,0.06)" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Bottom rectangular face (hidden, dashed) -->
  <line x1="80" y1="175" x2="140" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="140" y1="140" x2="255" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Right rectangular solid face -->
  <polygon points="195,175 255,140 190,25 130,60" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Face labels -->
  <text x="135" y="142" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">front △</text>
  <text x="195" y="100" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">rect</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2 triangular + 3 rectangular = 5 faces</text>
</svg>`,
      options: ["4", "5", "6", "7"],
      answer: 1,
      explanation: "A triangular prism has <strong>5 faces</strong>: 2 triangular faces (top and bottom) and 3 rectangular faces (the sides). It also has 9 edges and 6 vertices, and Euler's formula checks out: 6 − 9 + 5 = 2."
    },
    {
      id: "c5_q17",
      topic: "Solids",
      type: "input",
      question: "A square pyramid has a square base and 4 triangular faces. How many <strong>edges</strong> does it have in total?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square pyramid with edges highlighted">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square pyramid -->
  <!-- Base square: A=(75,175), B=(215,175), C=(245,140), D=(105,140) -->
  <!-- Apex: E=(160,35) -->
  <!-- Base (parallelogram perspective of square) -->
  <polygon points="75,175 215,175 245,140 105,140" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Front-left triangular face -->
  <polygon points="75,175 105,140 160,35" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Front-right triangular face -->
  <polygon points="215,175 245,140 160,35" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom-front edge of base (solid) -->
  <line x1="75" y1="175" x2="215" y2="175" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right base edge (solid) -->
  <line x1="215" y1="175" x2="245" y2="140" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Back-left base edge (dashed) -->
  <line x1="75" y1="175" x2="105" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Back edge (dashed) -->
  <line x1="105" y1="140" x2="245" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Lateral edges to apex -->
  <line x1="75" y1="175" x2="160" y2="35" stroke="#f43f5e" stroke-width="2"/>
  <line x1="215" y1="175" x2="160" y2="35" stroke="#f43f5e" stroke-width="2"/>
  <line x1="245" y1="140" x2="160" y2="35" stroke="#f43f5e" stroke-width="2"/>
  <line x1="105" y1="140" x2="160" y2="35" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Apex -->
  <circle cx="160" cy="35" r="4" fill="#f43f5e"/>
  <text x="160" y="27" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">E (apex)</text>
  <!-- Base vertices -->
  <circle cx="75" cy="175" r="3" fill="#5b5ef4"/>
  <circle cx="215" cy="175" r="3" fill="#5b5ef4"/>
  <circle cx="245" cy="140" r="3" fill="#5b5ef4"/>
  <circle cx="105" cy="140" r="3" fill="#5b5ef4"/>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4 base edges + 4 lateral edges = 8 edges</text>
</svg>`,
      answer: "8",
      acceptableAnswers: ["8"],
      explanation: "A square pyramid has 4 edges around the square base and 4 more edges going up to the apex, giving <strong>8 edges</strong> in total. It also has 5 vertices and 5 faces, and Euler's formula: 5 − 8 + 5 = 2. ✓"
    },
    {
      id: "c5_q18",
      topic: "Nets of solids",
      type: "mcq",
      question: "A <strong>net</strong> of a solid is:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Net of a cube shown as 6 connected squares that fold into a cube">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Net of a cube: cross shape (T-shape with 6 squares, 50x50 each) -->
  <!-- Center the cross: columns 2-3 are the main column, rows 1-4 -->
  <!-- Square size: 48px, starting positions adjusted for center -->
  <!-- Layout (row,col): (1,2),(2,1),(2,2),(2,3),(3,2),(4,2) -->
  <!-- Col offsets: col1=72, col2=122, col3=172 -->
  <!-- Row offsets: row1=20, row2=70, row3=120, row4=170 -->
  <!-- Top square -->
  <rect x="122" y="20" width="48" height="48" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Middle-left square -->
  <rect x="72" y="70" width="48" height="48" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Middle-center square (front face) -->
  <rect x="122" y="70" width="48" height="48" fill="rgba(91,94,244,0.22)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Middle-right square -->
  <rect x="172" y="70" width="48" height="48" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom-center square -->
  <rect x="122" y="120" width="48" height="48" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Bottom-bottom square -->
  <rect x="122" y="170" width="48" height="48" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Far right extra square for 6th -->
  <rect x="222" y="70" width="48" height="48" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Label -->
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Flat net → folds to make a 3D solid</text>
</svg>`,
      options: [
        "A 3D model of the solid made from clay",
        "A flat shape that can be folded to make the solid",
        "A drawing showing only the front view of the solid",
        "A table listing the faces, edges, and vertices"
      ],
      answer: 1,
      explanation: "A <strong>net</strong> is a 2D flat pattern that can be cut out and folded along the edges to form a 3D solid. For example, a net of a cube consists of 6 connected squares."
    },
    {
      id: "c5_q19",
      topic: "Nets of solids",
      type: "mcq",
      question: "How many squares are in the net of a <strong>cube</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Net of cube showing 6 squares in a cross pattern">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Classic cross-shaped net of cube: 6 squares numbered 1-6 -->
  <!-- Square size: 46px -->
  <!-- Layout positions: top(1), left(2), center(3), right(4), bottom(5), bottom2(6) -->
  <!-- col1=78, col2=126, col3=174 -->
  <!-- row1=16, row2=63, row3=110, row4=157 -->
  <!-- Square 1: top -->
  <rect x="126" y="16" width="46" height="46" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="149" y="44" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <!-- Square 2: left -->
  <rect x="78" y="63" width="46" height="46" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="101" y="91" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">2</text>
  <!-- Square 3: center -->
  <rect x="126" y="63" width="46" height="46" fill="rgba(91,94,244,0.25)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="149" y="91" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">3</text>
  <!-- Square 4: right -->
  <rect x="174" y="63" width="46" height="46" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="197" y="91" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">4</text>
  <!-- Square 5: bottom -->
  <rect x="126" y="110" width="46" height="46" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="149" y="138" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">5</text>
  <!-- Square 6: bottom-bottom -->
  <rect x="126" y="157" width="46" height="46" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="149" y="185" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">6</text>
  <!-- Count label -->
  <text x="255" y="100" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">6</text>
  <text x="255" y="116" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">squares</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Net of a cube = 6 equal squares</text>
</svg>`,
      options: ["4", "5", "6", "8"],
      answer: 2,
      explanation: "A cube has <strong>6 faces</strong>, all of which are squares. Therefore the net of a cube is made up of exactly <strong>6 squares</strong> arranged so that they can be folded to cover all faces without overlap."
    },
    {
      id: "c5_q20",
      topic: "Nets of solids",
      type: "mcq",
      question: "Which solid would be formed by folding a net that has <strong>1 circle and 1 curved rectangle</strong> (a rectangle that wraps around)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Net of a cylinder: one circle and one rectangle">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle (curved side that wraps around) -->
  <rect x="50" y="80" width="160" height="80" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2" rx="3"/>
  <text x="130" y="117" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">curved rectangle</text>
  <text x="130" y="133" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">(wraps to form side)</text>
  <!-- Curved dashes on top and bottom of rectangle to show it curves -->
  <path d="M 50,80 Q 130,70 210,80" fill="none" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M 50,160 Q 130,170 210,160" fill="none" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Circle (top face) -->
  <circle cx="268" cy="120" r="32" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="268" y="117" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">circle</text>
  <text x="268" y="131" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">(top/bottom)</text>
  <!-- Arrow showing folding -->
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Folds to make a cylinder</text>
</svg>`,
      options: ["Sphere", "Cone", "Cylinder", "Prism"],
      answer: 2,
      explanation: "A <strong>cylinder</strong> has two circular faces (top and bottom) and one curved rectangular surface that wraps around. When this net is folded, the rectangle forms the curved side and the circle becomes each flat end."
    },

    // ── NEW QUESTIONS START HERE ──────────────────────────────────────────

    // TRIANGLES: isosceles
    {
      id: "c5_q21",
      topic: "Triangles",
      type: "mcq",
      question: "An <strong>isosceles triangle</strong> has which of the following properties?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Isosceles triangle with two equal sides and two equal base angles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Isosceles triangle: A=(160,25), B=(60,195), C=(260,195) -->
  <polygon points="160,25 60,195 260,195" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Double tick marks on equal sides (left: AB, right: AC) -->
  <!-- AB midpoint: (110,110) -->
  <line x1="104" y1="107" x2="116" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="107" y1="102" x2="119" y2="108" stroke="#5b5ef4" stroke-width="2"/>
  <!-- AC midpoint: (210,110) -->
  <line x1="204" y1="113" x2="216" y2="107" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="201" y1="108" x2="213" y2="102" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Base angles equal arcs -->
  <path d="M 82,195 A 22,22 0 0,0 77,174" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M 238,195 A 22,22 0 0,1 243,174" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Angle labels -->
  <text x="90" y="183" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">equal</text>
  <text x="230" y="183" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">equal</text>
  <!-- Side labels -->
  <text x="99" y="148" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">a</text>
  <text x="220" y="148" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">a</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Isosceles: 2 equal sides, 2 equal angles</text>
</svg>`,
      options: [
        "All three sides are equal",
        "Exactly two sides are equal and the base angles are equal",
        "All three angles are different",
        "It always has a right angle"
      ],
      answer: 1,
      explanation: "An <strong>isosceles triangle</strong> has exactly two sides equal in length. The two angles opposite the equal sides (the base angles) are also equal. For example, a triangle with sides 5 cm, 5 cm, and 8 cm is isosceles."
    },

    // TRIANGLES: obtuse-angled
    {
      id: "c5_q22",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has angles of 120°, 35°, and 25°. This triangle is classified as:",
      options: [
        "Acute-angled",
        "Right-angled",
        "Obtuse-angled",
        "Equilateral"
      ],
      answer: 2,
      explanation: "A triangle with one angle <strong>greater than 90°</strong> is called an <strong>obtuse-angled triangle</strong>. Here, 120° > 90°, so this is obtuse-angled. Check: 120° + 35° + 25° = 180°. ✓"
    },

    // TRIANGLES: acute-angled
    {
      id: "c5_q23",
      topic: "Triangles",
      type: "mcq",
      question: "Which set of angles could belong to an <strong>acute-angled triangle</strong>?",
      options: [
        "90°, 50°, 40°",
        "110°, 40°, 30°",
        "60°, 70°, 50°",
        "95°, 45°, 40°"
      ],
      answer: 2,
      explanation: "An <strong>acute-angled triangle</strong> has <em>all three</em> angles less than 90°. Only 60° + 70° + 50° = 180° with all angles below 90°. Options A has a right angle (90°), and B and D have obtuse angles."
    },

    // QUADRILATERALS: rectangle
    {
      id: "c5_q24",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which statement correctly describes a <strong>rectangle</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with two pairs of equal sides and all right angles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: A=(55,55), B=(265,55), C=(265,165), D=(55,165) -->
  <polygon points="55,55 265,55 265,165 55,165" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right angle markers -->
  <rect x="55" y="55" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="253" y="55" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="253" y="153" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="55" y="153" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Single tick on top and bottom (equal) -->
  <line x1="157" y1="49" x2="163" y2="61" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="157" y1="159" x2="163" y2="171" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Double tick on left and right (equal, different length) -->
  <line x1="49" y1="107" x2="61" y2="113" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="49" y1="102" x2="61" y2="108" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="259" y1="113" x2="271" y2="107" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="259" y1="108" x2="271" y2="102" stroke="#5b5ef4" stroke-width="2"/>
  <text x="160" y="116" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Rectangle</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Opposite sides equal, all angles 90°</text>
</svg>`,
      options: [
        "All four sides are equal and all angles are 90°",
        "Opposite sides are equal and all angles are 90°",
        "All sides are equal but angles need not be 90°",
        "It has exactly one pair of parallel sides"
      ],
      answer: 1,
      explanation: "A <strong>rectangle</strong> has opposite sides equal in length and all four angles equal to 90°. Unlike a square, adjacent sides of a rectangle are generally different lengths. It has two pairs of parallel sides."
    },

    // QUADRILATERALS: parallelogram
    {
      id: "c5_q25",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "A <strong>parallelogram</strong> is a quadrilateral where:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Parallelogram with two pairs of parallel sides">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallelogram: A=(60,175), B=(230,175), C=(260,55), D=(90,55) -->
  <polygon points="60,175 230,175 260,55 90,55" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Arrow marks for parallel sides -->
  <!-- Bottom (A→B): single arrow at midpoint (145,175) -->
  <text x="143" y="171" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">›</text>
  <!-- Top (D→C): single arrow at midpoint (175,55) -->
  <text x="173" y="51" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">›</text>
  <!-- Left (A→D): double arrow at midpoint (75,115) -->
  <text x="66" y="118" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">»</text>
  <!-- Right (B→C): double arrow at midpoint (245,115) -->
  <text x="236" y="118" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">»</text>
  <!-- Tick marks: single on top/bottom, double on left/right -->
  <line x1="143" y1="169" x2="149" y2="181" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="173" y1="49" x2="179" y2="61" stroke="#5b5ef4" stroke-width="2"/>
  <text x="160" y="125" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Parallelogram</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2 pairs of parallel sides, opposite sides equal</text>
</svg>`,
      options: [
        "All four sides are equal in length",
        "Both pairs of opposite sides are parallel and equal",
        "It has exactly one pair of parallel sides",
        "All four angles are 90°"
      ],
      answer: 1,
      explanation: "A <strong>parallelogram</strong> has two pairs of opposite sides that are both parallel and equal in length. Its opposite angles are also equal. A rectangle, rhombus, and square are all special types of parallelogram."
    },

    // QUADRILATERALS: kite
    {
      id: "c5_q26",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which of the following best describes a <strong>kite</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Kite shape with two pairs of adjacent equal sides">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Kite: A=(160,20), B=(260,110), C=(160,200), D=(70,100) -->
  <polygon points="160,20 260,110 160,200 70,100" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Tick marks: AB=AD (top pair), CB=CD (bottom pair) -->
  <!-- AB midpoint: (210,65) -->
  <line x1="208" y1="60" x2="216" y2="70" stroke="#5b5ef4" stroke-width="2"/>
  <!-- AD midpoint: (115,60) -->
  <line x1="112" y1="70" x2="120" y2="60" stroke="#5b5ef4" stroke-width="2"/>
  <!-- CB midpoint: (210,155) -->
  <line x1="208" y1="150" x2="216" y2="160" stroke="#f43f5e" stroke-width="2"/>
  <line x1="205" y1="155" x2="213" y2="145" stroke="#f43f5e" stroke-width="2"/>
  <!-- CD midpoint: (115,150) -->
  <line x1="112" y1="145" x2="120" y2="155" stroke="#f43f5e" stroke-width="2"/>
  <line x1="109" y1="150" x2="117" y2="140" stroke="#f43f5e" stroke-width="2"/>
  <text x="160" y="112" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Kite</text>
  <text x="160" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2 pairs of adjacent equal sides</text>
</svg>`,
      options: [
        "Two pairs of opposite sides are equal",
        "Two pairs of adjacent (next-to-each-other) sides are equal",
        "All four sides are equal",
        "Only one pair of sides is parallel"
      ],
      answer: 1,
      explanation: "A <strong>kite</strong> has two pairs of adjacent sides that are equal — like a traditional kite shape. Adjacent means 'next to each other', not opposite. In a kite, one pair of opposite angles is also equal."
    },

    // CIRCLES: tangent
    {
      id: "c5_q27",
      topic: "Circles",
      type: "mcq",
      question: "A <strong>tangent</strong> to a circle is a straight line that:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Circle with a tangent line touching it at exactly one point">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (150,110), radius 75 -->
  <circle cx="150" cy="110" r="75" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Center -->
  <circle cx="150" cy="110" r="3" fill="#64748b"/>
  <text x="155" y="106" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <!-- Tangent line: touches at right side (225,110), vertical-ish line -->
  <line x1="225" y1="30" x2="225" y2="195" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Point of tangency -->
  <circle cx="225" cy="110" r="5" fill="#f43f5e"/>
  <text x="232" y="108" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T</text>
  <!-- Radius to point of tangency (showing 90°) -->
  <line x1="150" y1="110" x2="225" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Right angle marker at T -->
  <rect x="213" y="98" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="232" y="140" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">tangent</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Tangent touches circle at exactly one point</text>
</svg>`,
      options: [
        "Passes through the centre of the circle",
        "Connects two points on the circle",
        "Touches the circle at exactly one point",
        "Cuts across the circle dividing it into two parts"
      ],
      answer: 2,
      explanation: "A <strong>tangent</strong> is a straight line that touches a circle at exactly one point (called the point of tangency). At that point, the tangent is perpendicular (at 90°) to the radius."
    },

    // CIRCLES: arc and circumference
    {
      id: "c5_q28",
      topic: "Circles",
      type: "mcq",
      question: "The <strong>circumference</strong> of a circle is:",
      options: [
        "The distance from the centre to the edge",
        "The total distance around the outside of the circle",
        "A straight line joining two points on the circle",
        "The area of the circle"
      ],
      answer: 1,
      explanation: "The <strong>circumference</strong> is the total distance all the way around the outside of a circle — it is the perimeter of a circle. An <em>arc</em> is just part of the circumference. The formula is C = π × diameter."
    },

    // CIRCLES: arc definition
    {
      id: "c5_q29",
      topic: "Circles",
      type: "mcq",
      question: "An <strong>arc</strong> of a circle is:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Circle with an arc highlighted in red">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (160,110), radius 80 -->
  <circle cx="160" cy="110" r="80" fill="rgba(91,94,244,0.06)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Arc: highlighted portion from 0° to 120° (top-right) -->
  <!-- Point at 0°: (240,110) -->
  <!-- Point at 120°: (160+80*cos(120°), 110+80*sin(120°)) = (160-40, 110+69) = (120,179) -->
  <path d="M 240,110 A 80,80 0 0,1 120,179" fill="none" stroke="#f43f5e" stroke-width="4"/>
  <circle cx="240" cy="110" r="5" fill="#f43f5e"/>
  <circle cx="120" cy="179" r="5" fill="#f43f5e"/>
  <!-- Arc label -->
  <text x="230" y="165" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">arc</text>
  <!-- Center -->
  <circle cx="160" cy="110" r="3" fill="#64748b"/>
  <text x="165" y="106" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">O</text>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">An arc is part of the circumference</text>
</svg>`,
      options: [
        "A straight line from the centre to the edge",
        "A part of the circumference (curved section of the circle's edge)",
        "The flat region inside a sector",
        "A line joining the centre to a point on the circle"
      ],
      answer: 1,
      explanation: "An <strong>arc</strong> is a portion (part) of the circumference of a circle — it is a curved section of the circle's edge between two points. A <em>minor arc</em> is the shorter part, and a <em>major arc</em> is the longer part."
    },

    // SYMMETRY: lines of symmetry
    {
      id: "c5_q30",
      topic: "Symmetry",
      type: "mcq",
      question: "How many <strong>lines of symmetry</strong> does an equilateral triangle have?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Equilateral triangle with 3 lines of symmetry shown">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Equilateral triangle: A=(160,20), B=(55,195), C=(265,195) -->
  <polygon points="160,20 55,195 265,195" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Line of symmetry 1: vertical from A to midpoint of BC (160,195) -->
  <line x1="160" y1="20" x2="160" y2="195" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Line of symmetry 2: from B to midpoint of AC: midpoint=(212,108) -->
  <line x1="55" y1="195" x2="212" y2="108" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Line of symmetry 3: from C to midpoint of AB: midpoint=(108,108) -->
  <line x1="265" y1="195" x2="108" y2="108" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="160" y="212" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3 lines of symmetry shown (red dashes)</text>
</svg>`,
      options: ["1", "2", "3", "6"],
      answer: 2,
      explanation: "An equilateral triangle has <strong>3 lines of symmetry</strong>. Each line goes from one vertex to the midpoint of the opposite side. A shape has a line of symmetry if it looks the same on both sides when folded along that line."
    },

    // SYMMETRY: square lines of symmetry
    {
      id: "c5_q31",
      topic: "Symmetry",
      type: "input",
      question: "How many lines of symmetry does a <strong>square</strong> have?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square with its 4 lines of symmetry shown">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square: (80,30),(240,30),(240,190),(80,190) -->
  <polygon points="80,30 240,30 240,190 80,190" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Line 1: horizontal midline -->
  <line x1="60" y1="110" x2="260" y2="110" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Line 2: vertical midline -->
  <line x1="160" y1="10" x2="160" y2="210" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Line 3: diagonal top-left to bottom-right -->
  <line x1="80" y1="30" x2="240" y2="190" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Line 4: diagonal top-right to bottom-left -->
  <line x1="240" y1="30" x2="80" y2="190" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="160" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">How many red lines are shown?</text>
</svg>`,
      answer: "4",
      acceptableAnswers: ["4"],
      explanation: "A square has <strong>4 lines of symmetry</strong>: two along the midpoints of opposite sides (horizontal and vertical), and two along the diagonals. Each line divides the square into two identical mirror images."
    },

    // SYMMETRY: rotational symmetry
    {
      id: "c5_q32",
      topic: "Symmetry",
      type: "mcq",
      question: "The <strong>order of rotational symmetry</strong> of a shape is:",
      options: [
        "The number of lines of symmetry it has",
        "The number of times the shape looks the same during one full 360° rotation",
        "The angle you must rotate it by",
        "The number of sides the shape has"
      ],
      answer: 1,
      explanation: "The <strong>order of rotational symmetry</strong> is the number of times a shape looks identical to its original position as it is rotated through 360°. For example, a square has order 4 (it looks the same at 90°, 180°, 270°, and 360°)."
    },

    // SYMMETRY: rotational symmetry of rectangle
    {
      id: "c5_q33",
      topic: "Symmetry",
      type: "mcq",
      question: "A rectangle (that is not a square) has what <strong>order of rotational symmetry</strong>?",
      options: ["1", "2", "4", "0"],
      answer: 1,
      explanation: "A rectangle has order of rotational symmetry <strong>2</strong>. It looks identical to its starting position after a rotation of 180°, and again at 360°. It does <em>not</em> look the same at 90° or 270° (unlike a square, which has order 4)."
    },

    // 3D SHAPES: cuboid
    {
      id: "c5_q34",
      topic: "Solids",
      type: "mcq",
      question: "A <strong>cuboid</strong> (rectangular box) has how many faces, edges, and vertices?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Cuboid with faces edges and vertices labelled">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Cuboid: front face (70,80)-(230,80)-(230,175)-(70,175), depth offset (+45,-35) -->
  <!-- Front face -->
  <polygon points="70,80 230,80 230,175 70,175" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face -->
  <polygon points="70,80 115,45 275,45 230,80" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face -->
  <polygon points="230,80 275,45 275,140 230,175" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Hidden edges -->
  <line x1="70" y1="175" x2="115" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="115" y1="45" x2="115" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="115" y1="140" x2="275" y2="140" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Labels -->
  <text x="150" y="134" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6 faces</text>
  <text x="150" y="149" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">12 edges</text>
  <text x="150" y="164" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">8 vertices</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Cuboid (rectangular box)</text>
</svg>`,
      options: [
        "4 faces, 6 edges, 4 vertices",
        "6 faces, 12 edges, 8 vertices",
        "5 faces, 8 edges, 5 vertices",
        "6 faces, 8 edges, 6 vertices"
      ],
      answer: 1,
      explanation: "A <strong>cuboid</strong> has <strong>6 faces</strong> (all rectangles), <strong>12 edges</strong>, and <strong>8 vertices</strong>. This is the same count as a cube. Check with Euler's formula: 8 − 12 + 6 = 2. ✓"
    },

    // 3D SHAPES: cone
    {
      id: "c5_q35",
      topic: "Solids",
      type: "mcq",
      question: "A <strong>cone</strong> has which set of faces, edges, and vertices?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Cone with circular base and apex">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Cone: circular base at bottom, apex at top -->
  <!-- Base ellipse centered at (160,165), rx=80, ry=20 -->
  <ellipse cx="160" cy="165" rx="80" ry="20" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Slant sides: apex (160,35) to left (80,165) and right (240,165) -->
  <line x1="160" y1="35" x2="80" y2="165" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="160" y1="35" x2="240" y2="165" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Curved surface fill (triangle approximation) -->
  <path d="M 80,165 A 80,20 0 0,0 240,165 L 160,35 Z" fill="rgba(91,94,244,0.10)" stroke="none"/>
  <!-- Back half of base (dashed) -->
  <path d="M 80,165 A 80,20 0 0,1 240,165" fill="none" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Apex point -->
  <circle cx="160" cy="35" r="4" fill="#f43f5e"/>
  <text x="160" y="27" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">apex</text>
  <!-- Labels -->
  <text x="160" y="170" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">circular base</text>
  <text x="160" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Cone: 1 flat face, 1 curved face</text>
</svg>`,
      options: [
        "2 faces, 1 edge, 1 vertex",
        "1 face, 0 edges, 1 vertex",
        "3 faces, 2 edges, 1 vertex",
        "2 faces, 2 edges, 2 vertices"
      ],
      answer: 0,
      explanation: "A <strong>cone</strong> has <strong>2 faces</strong> (1 circular flat base + 1 curved surface), <strong>1 edge</strong> (the circular rim where the base meets the curved surface), and <strong>1 vertex</strong> (the apex/tip)."
    },

    // 3D SHAPES: sphere
    {
      id: "c5_q36",
      topic: "Solids",
      type: "mcq",
      question: "How many faces, edges, and vertices does a <strong>sphere</strong> have?",
      options: [
        "1 face, 0 edges, 0 vertices",
        "0 faces, 0 edges, 0 vertices",
        "2 faces, 1 edge, 0 vertices",
        "1 face, 1 edge, 1 vertex"
      ],
      answer: 0,
      explanation: "A <strong>sphere</strong> has <strong>1 curved face</strong>, <strong>0 edges</strong>, and <strong>0 vertices</strong>. It is a perfectly round 3D shape with no flat surfaces, no corners, and no straight edges. Note: Euler's formula applies to polyhedra (flat-faced solids) but not to a sphere."
    },

    // 3D SHAPES: cylinder V/E/F
    {
      id: "c5_q37",
      topic: "Solids",
      type: "mcq",
      question: "A <strong>cylinder</strong> has:",
      options: [
        "3 faces, 2 edges, 0 vertices",
        "2 faces, 1 edge, 0 vertices",
        "4 faces, 4 edges, 4 vertices",
        "2 faces, 0 edges, 0 vertices"
      ],
      answer: 0,
      explanation: "A <strong>cylinder</strong> has <strong>3 faces</strong> (2 flat circular faces + 1 curved rectangular face), <strong>2 edges</strong> (the two circular rims), and <strong>0 vertices</strong> (no corners/points). Like a sphere, cylinders are not polyhedra so Euler's formula does not apply."
    },

    // EULER'S FORMULA
    {
      id: "c5_q38",
      topic: "Euler's Formula",
      type: "mcq",
      question: "Euler's formula for polyhedra states that V − E + F = 2, where V = vertices, E = edges, F = faces. A shape has 6 vertices and 9 edges. How many <strong>faces</strong> does it have?",
      options: ["4", "5", "6", "7"],
      answer: 1,
      explanation: "Using Euler's formula: V − E + F = 2 → 6 − 9 + F = 2 → F = 2 − 6 + 9 = <strong>5</strong>. A triangular prism has exactly V=6, E=9, F=5, so this matches!"
    },

    // EULER'S FORMULA: second question
    {
      id: "c5_q39",
      topic: "Euler's Formula",
      type: "input",
      question: "A solid has <strong>5 faces</strong> and <strong>5 vertices</strong>. Using Euler's formula (V − E + F = 2), how many <strong>edges</strong> does it have?",
      answer: "8",
      acceptableAnswers: ["8"],
      explanation: "Euler's formula: V − E + F = 2 → 5 − E + 5 = 2 → 10 − E = 2 → E = <strong>8</strong>. This matches a square pyramid, which has a square base (4 edges) plus 4 edges going to the apex = 8 edges. Great algebra thinking!"
    },

    // NETS: triangular prism net
    {
      id: "c5_q40",
      topic: "Nets of solids",
      type: "mcq",
      question: "The net of a <strong>triangular prism</strong> must contain:",
      options: [
        "3 triangles and 2 rectangles",
        "2 triangles and 3 rectangles",
        "4 triangles and 1 square",
        "6 rectangles"
      ],
      answer: 1,
      explanation: "A triangular prism has 2 triangular faces (the two ends) and 3 rectangular faces (the three sides). So its net must contain <strong>2 triangles and 3 rectangles</strong>. These 5 shapes fold up to make all 5 faces of the prism."
    },

    // NETS: square pyramid net
    {
      id: "c5_q41",
      topic: "Nets of solids",
      type: "mcq",
      question: "How many shapes are in the net of a <strong>square pyramid</strong>?",
      options: [
        "4 triangles only",
        "1 square and 4 triangles",
        "1 square and 3 triangles",
        "4 squares and 1 triangle"
      ],
      answer: 1,
      explanation: "A square pyramid has 1 square base and 4 triangular faces (one for each side of the square). So its net has <strong>1 square and 4 triangles</strong> — 5 shapes in total, matching its 5 faces."
    },

    // POLYGONS: interior angle of a regular polygon (for a pentagon)
    {
      id: "c5_q42",
      topic: "Polygons",
      type: "input",
      question: "What is the size of each interior angle in a <strong>regular pentagon</strong> (5 sides)? Give your answer in degrees.",
      answer: "108",
      acceptableAnswers: ["108", "108°"],
      explanation: "Step 1 — Find the angle sum: (n − 2) × 180° = (5 − 2) × 180° = 3 × 180° = 540°. Step 2 — Divide equally (regular polygon, all angles equal): 540° ÷ 5 = <strong>108°</strong>. Each interior angle of a regular pentagon is 108°."
    },

    // ── CHALLENGING QUESTIONS ─────────────────────────────────────────────

    // CHALLENGING: interior angle of regular polygon — work backwards
    {
      id: "c5_q43",
      topic: "Polygons",
      difficulty: "challenging",
      type: "input",
      question: "Each interior angle of a regular polygon is <strong>120°</strong>. How many sides does the polygon have?",
      answer: "6",
      acceptableAnswers: ["6"],
      explanation: "Let the number of sides be n. For a regular polygon, each interior angle = (n − 2) × 180° ÷ n.<br>Set this equal to 120°: (n − 2) × 180 = 120n → 180n − 360 = 120n → 60n = 360 → n = <strong>6</strong>.<br>A regular polygon with 120° interior angles is a <strong>hexagon</strong>. You can check: (6−2) × 180° = 720°, and 720° ÷ 6 = 120°. ✓"
    },

    // CHALLENGING: exterior angle and sides
    {
      id: "c5_q44",
      topic: "Polygons",
      difficulty: "challenging",
      type: "mcq",
      question: "The <strong>exterior angle</strong> of a regular polygon is 45°. How many sides does this polygon have?",
      options: ["6", "7", "8", "9"],
      answer: 2,
      explanation: "The sum of all exterior angles of any polygon is always <strong>360°</strong>. For a regular polygon, each exterior angle is equal, so: number of sides = 360° ÷ exterior angle = 360° ÷ 45° = <strong>8</strong>. This is a regular octagon! Check: each interior angle = 180° − 45° = 135°, and (8−2) × 180° ÷ 8 = 1080° ÷ 8 = 135°. ✓"
    },

    // CHALLENGING: Euler's formula — identify the shape
    {
      id: "c5_q45",
      topic: "Euler's Formula",
      difficulty: "challenging",
      type: "mcq",
      question: "A polyhedron has <strong>V = 4, E = 6, F = 4</strong>. Which shape is this?",
      options: ["Cube", "Square pyramid", "Triangular pyramid (tetrahedron)", "Triangular prism"],
      answer: 2,
      explanation: "Check Euler's formula: V − E + F = 4 − 6 + 4 = <strong>2</strong>. ✓ A shape with 4 vertices, 6 edges, and 4 faces is a <strong>triangular pyramid</strong> (also called a tetrahedron) — it has a triangular base and 3 triangular faces, giving 4 triangular faces in total. A cube has V=8, E=12, F=6. A square pyramid has V=5, E=8, F=5."
    },

    // CHALLENGING: symmetry of a regular hexagon
    {
      id: "c5_q46",
      topic: "Symmetry",
      difficulty: "challenging",
      type: "mcq",
      question: "A regular hexagon has how many lines of symmetry, and what is its order of rotational symmetry?",
      options: [
        "3 lines of symmetry, order 3",
        "6 lines of symmetry, order 6",
        "4 lines of symmetry, order 4",
        "6 lines of symmetry, order 3"
      ],
      answer: 1,
      explanation: "A regular hexagon has <strong>6 lines of symmetry</strong> — 3 through opposite vertices and 3 through midpoints of opposite sides. It also has <strong>order of rotational symmetry 6</strong> because it looks identical every 60° rotation (360° ÷ 6 = 60°). In general, a regular n-sided polygon has n lines of symmetry and rotational symmetry of order n."
    },

    // CHALLENGING: multi-step — net identification + Euler check
    {
      id: "c5_q47",
      topic: "Nets of solids",
      difficulty: "challenging",
      type: "mcq",
      question: "A net has <strong>2 circles and 1 rectangle</strong>. The 3D solid it makes has V vertices, E edges, and F faces. What is V + F?",
      options: ["2", "3", "5", "0"],
      answer: 1,
      explanation: "The net of 2 circles + 1 rectangle makes a <strong>cylinder</strong>. A cylinder has: 0 vertices (V = 0), 2 edges (the two circular rims, E = 2), and 3 faces (2 circular + 1 curved, F = 3). So V + F = 0 + 3 = <strong>3</strong>. Note: cylinders are not polyhedra so Euler's formula (V − E + F = 2) gives 0 − 2 + 3 = 1, not 2 — that is expected for curved solids."
    }
  ]
};
