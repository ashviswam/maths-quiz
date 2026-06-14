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

    // TRIANGLES: obtuse-angled

    // TRIANGLES: acute-angled

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

    // CIRCLES: arc and circumference

    // CIRCLES: arc definition

    // SYMMETRY: lines of symmetry

    // SYMMETRY: square lines of symmetry

    // SYMMETRY: rotational symmetry

    // SYMMETRY: rotational symmetry of rectangle

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

    // EULER'S FORMULA: second question

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


    // ── CHALLENGING QUESTIONS ─────────────────────────────────────────────



    // CHALLENGING: Euler's formula — identify the shape

    // CHALLENGING: symmetry of a regular hexagon

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
