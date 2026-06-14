const ch10 = {
  id: 10,
  title: "Measurement: Area, Volume, and Capacity",
  icon: "📐",
  color: "#f97316",
  topics: ["Area","The area of a rectangle","The area of a triangle","Volume","The volume of a rectangular prism","Capacity"],
  questions: [
    {
      id: "c10_q1",
      topic: "Area",
      type: "mcq",
      question: "Which unit is used to measure <strong>area</strong>?",
      options: ["cm", "cm²", "cm³", "L"],
      answer: 1,
      explanation: "Area measures the amount of surface covered by a shape. It is always expressed in square units such as cm², m², or mm²."
    },
    {
      id: "c10_q2",
      topic: "Area",
      type: "mcq",
      question: "A tile is shaped like a square with each side measuring 4 cm. What is the area of the tile?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square with side 4 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square shape centered -->
  <rect x="90" y="40" width="140" height="140" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side length labels -->
  <text x="160" y="32" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">4 cm</text>
  <text x="160" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">4 cm</text>
  <text x="75" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">4 cm</text>
  <text x="245" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">4 cm</text>
  <!-- Right angle marks -->
  <rect x="90" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="218" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="90" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="218" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
      answer: 2,
      explanation: "The area of a square = side × side = 4 × 4 = 16 cm². A square is a special rectangle where all sides are equal."
    },
    {
      id: "c10_q3",
      topic: "Area",
      type: "input",
      question: "A floor is covered by a square mat with side length <strong>9 m</strong>. What is the area of the mat in m²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Square mat with side 9 m">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Square shape centered -->
  <rect x="90" y="40" width="140" height="140" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Side length labels -->
  <text x="160" y="32" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 m</text>
  <text x="160" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 m</text>
  <text x="75" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 m</text>
  <text x="245" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 m</text>
  <!-- Right angle marks -->
  <rect x="90" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="218" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="90" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="218" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      answer: "81",
      acceptableAnswers: ["81", "81 m²", "81m²"],
      explanation: "Area of a square = side × side = 9 × 9 = 81 m²."
    },
    {
      id: "c10_q4",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A rectangle has a length of <strong>8 cm</strong> and a width of <strong>5 cm</strong>. What is its area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle 8 cm by 5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: length 8, width 5 => ratio 8:5, scale to fit -->
  <!-- 8 units wide => 200px, 5 units tall => 125px, centered -->
  <rect x="60" y="48" width="200" height="125" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Length label (top) -->
  <text x="160" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">8 cm</text>
  <!-- Length label (bottom) -->
  <text x="160" y="192" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">8 cm</text>
  <!-- Width label (left) -->
  <text x="42" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">5 cm</text>
  <!-- Right angle marks -->
  <rect x="60" y="48" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="48" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="60" y="161" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="161" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
      answer: 2,
      explanation: "Area of a rectangle = length × width = 8 × 5 = 40 cm²."
    },
    {
      id: "c10_q5",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A garden is <strong>12 m</strong> long and <strong>7 m</strong> wide. What is the area of the garden?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Garden rectangle 12 m by 7 m">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: 12 long, 7 wide => ratio ~1.7:1, scale: 200px wide, 115px tall, centered -->
  <rect x="60" y="52" width="200" height="117" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <!-- Length label (top) -->
  <text x="160" y="42" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">12 m</text>
  <!-- Length label (bottom) -->
  <text x="160" y="186" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">12 m</text>
  <!-- Width label (left) -->
  <text x="40" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">7 m</text>
  <!-- Right angle marks -->
  <rect x="60" y="52" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="52" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="60" y="157" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="157" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["19 m²", "38 m²", "84 m²", "96 m²"],
      answer: 2,
      explanation: "Area of a rectangle = length × width = 12 × 7 = 84 m²."
    },
    {
      id: "c10_q6",
      topic: "The area of a rectangle",
      type: "input",
      question: "A rectangular photo frame has a length of <strong>15 cm</strong> and a width of <strong>10 cm</strong>. What is the area of the frame in cm²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Photo frame rectangle 15 cm by 10 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: 15 long, 10 wide => ratio 1.5:1, scale 210px wide, 140px tall -->
  <rect x="55" y="40" width="210" height="140" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Inner frame detail -->
  <rect x="70" y="55" width="180" height="110" fill="none" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <!-- Length label (top) -->
  <text x="160" y="30" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">15 cm</text>
  <!-- Length label (bottom) -->
  <text x="160" y="197" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">15 cm</text>
  <!-- Width label (left) -->
  <text x="36" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">10 cm</text>
  <!-- Right angle marks -->
  <rect x="55" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="253" y="40" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="55" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="253" y="168" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      answer: "150",
      acceptableAnswers: ["150", "150 cm²", "150cm²"],
      explanation: "Area = length × width = 15 × 10 = 150 cm²."
    },
    {
      id: "c10_q7",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A rectangle has an area of <strong>48 cm²</strong> and a width of <strong>6 cm</strong>. What is its length?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with area 48 cm squared and width 6 cm, find length">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: unknown length (shown with ?) x width 6 cm -->
  <!-- Scale: 6 cm height => 120px, length unknown => show as wider shape -->
  <rect x="60" y="50" width="200" height="120" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Area label inside -->
  <text x="160" y="117" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">Area = 48 cm²</text>
  <!-- Length label (top) with question mark -->
  <text x="160" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">? cm</text>
  <!-- Width label (left) -->
  <text x="40" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">6 cm</text>
  <!-- Right angle marks -->
  <rect x="60" y="50" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="50" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="60" y="158" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <rect x="248" y="158" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: 2,
      explanation: "Area = length × width, so length = area ÷ width = 48 ÷ 6 = 8 cm."
    },
    {
      id: "c10_q8",
      topic: "The area of a triangle",
      type: "mcq",
      question: "What is the formula for the area of a triangle with base <em>b</em> and height <em>h</em>?",
      options: ["b × h", "2 × b × h", "1/2 × b × h", "b + h"],
      answer: 2,
      explanation: "The area of a triangle = 1/2 × base × height. A triangle is exactly half of a rectangle with the same base and height."
    },
    {
      id: "c10_q9",
      topic: "The area of a triangle",
      type: "mcq",
      question: "A triangle has a base of <strong>10 cm</strong> and a height of <strong>6 cm</strong>. What is its area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangle with base 10 cm and height 6 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangle: base=10cm, height=6cm. Scale: 10cm=>200px, 6cm=>120px -->
  <!-- Base from (60,170) to (260,170), apex at (160,50) -->
  <polygon points="60,170 260,170 160,50" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Height dashed line from apex to base -->
  <line x1="160" y1="50" x2="160" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Right angle box at base of height -->
  <rect x="160" y="158" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Base label -->
  <text x="160" y="192" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">10 cm</text>
  <!-- Height label -->
  <text x="185" y="115" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">6 cm</text>
  <!-- h arrow indicators -->
  <line x1="178" y1="50" x2="178" y2="170" stroke="#5b5ef4" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)" opacity="0.5"/>
</svg>`,
      options: ["30 cm²", "60 cm²", "16 cm²", "120 cm²"],
      answer: 0,
      explanation: "Area of a triangle = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm²."
    },
    {
      id: "c10_q10",
      topic: "The area of a triangle",
      type: "input",
      question: "A triangular sail has a base of <strong>4 m</strong> and a height of <strong>9 m</strong>. What is the area of the sail in m²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangular sail with base 4 m and height 9 m">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangle: base=4m, height=9m. Scale: height much larger than base => tall narrow triangle -->
  <!-- Base from (130,190) to (190,190) = 60px (4m), height = 9m => 135px up -->
  <!-- Apex at (130,55) (right-angle sail shape: vertical left edge) -->
  <polygon points="130,55 130,190 190,190" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right angle box at bottom-left -->
  <rect x="130" y="178" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Base label (bottom) -->
  <text x="160" y="210" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">4 m</text>
  <!-- Height label (left side) -->
  <text x="108" y="125" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 m</text>
  <!-- Sail label -->
  <text x="170" y="145" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600" opacity="0.7">Sail</text>
</svg>`,
      answer: "18",
      acceptableAnswers: ["18", "18 m²", "18m²"],
      explanation: "Area = 1/2 × base × height = 1/2 × 4 × 9 = 18 m²."
    },
    {
      id: "c10_q11",
      topic: "Volume",
      type: "mcq",
      question: "Which unit is used to measure <strong>volume</strong>?",
      options: ["m", "m²", "m³", "mL"],
      answer: 2,
      explanation: "Volume measures the amount of three-dimensional space an object occupies. It is always expressed in cubic units such as cm³, m³, or mm³."
    },
    {
      id: "c10_q12",
      topic: "Volume",
      type: "mcq",
      question: "A small cube has each side measuring <strong>1 cm</strong>. What is its volume?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Unit cube with side 1 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection of unit cube, centered -->
  <!-- Front face: rect at (110,80), size 100x100 -->
  <rect x="110" y="80" width="100" height="100" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face: parallelogram -->
  <polygon points="110,80 150,50 250,50 210,80" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face: parallelogram -->
  <polygon points="210,80 250,50 250,150 210,180" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Labels -->
  <!-- Width on front bottom -->
  <text x="160" y="195" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1 cm</text>
  <!-- Height on left edge -->
  <text x="93" y="133" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1 cm</text>
  <!-- Depth on top edge -->
  <text x="196" y="42" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1 cm</text>
</svg>`,
      options: ["1 cm", "1 cm²", "1 cm³", "3 cm³"],
      answer: 2,
      explanation: "Volume = length × width × height = 1 × 1 × 1 = 1 cm³. This unit cube is the basic building block for measuring volume."
    },
    {
      id: "c10_q13",
      topic: "The volume of a rectangular prism",
      type: "mcq",
      question: "A box has a length of <strong>5 cm</strong>, width of <strong>4 cm</strong>, and height of <strong>3 cm</strong>. What is its volume?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangular box 5 cm by 4 cm by 3 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection: L=5, W=4, H=3 -->
  <!-- Scale: 5cm=>120px, 4cm=>80px depth(offset=32px,24px), H=3cm=>72px -->
  <!-- Front face bottom-left at (70,100), width=120px, height=72px -->
  <rect x="70" y="100" width="120" height="72" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram -->
  <!-- TL(70,100) -> offset(32,24) -> (102,76), TR=(190,100) -> (222,76) -->
  <polygon points="70,100 102,76 222,76 190,100" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <!-- BR-front=(190,172), TR-front=(190,100), TR-top=(222,76), BR-top=(222,148) -->
  <polygon points="190,100 222,76 222,148 190,172" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Length label on front bottom edge -->
  <text x="130" y="188" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">L = 5 cm</text>
  <!-- Height label on left front edge -->
  <text x="52" y="140" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">H = 3 cm</text>
  <!-- Width label on top receding edge -->
  <text x="160" y="66" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">W = 4 cm</text>
</svg>`,
      options: ["12 cm³", "47 cm³", "60 cm³", "80 cm³"],
      answer: 2,
      explanation: "Volume of a rectangular prism = length × width × height = 5 × 4 × 3 = 60 cm³."
    },
    {
      id: "c10_q14",
      topic: "The volume of a rectangular prism",
      type: "mcq",
      question: "A rectangular fish tank is <strong>30 cm</strong> long, <strong>20 cm</strong> wide, and <strong>25 cm</strong> tall. What is its volume?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Fish tank 30 cm by 20 cm by 25 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection: L=30, W=20, H=25 -->
  <!-- Scale: 30cm=>130px, W depth offset=28px,21px, H=25cm=>100px -->
  <!-- Front face: BL=(60,110), W=130px, H=100px -->
  <rect x="60" y="110" width="130" height="100" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram -->
  <polygon points="60,110 88,89 218,89 190,110" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <polygon points="190,110 218,89 218,189 190,210" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Water fill suggestion -->
  <rect x="61" y="140" width="128" height="69" fill="rgba(56,189,248,0.18)" stroke="none"/>
  <!-- Length label on front bottom edge -->
  <text x="125" y="210" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">L = 30 cm</text>
  <!-- Height label on left front edge -->
  <text x="43" y="160" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">H = 25 cm</text>
  <!-- Width label on top receding edge -->
  <text x="153" y="80" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">W = 20 cm</text>
</svg>`,
      options: ["15,000 cm³", "1,500 cm³", "75 cm³", "600 cm³"],
      answer: 0,
      explanation: "Volume = length × width × height = 30 × 20 × 25 = 15,000 cm³."
    },
    {
      id: "c10_q15",
      topic: "The volume of a rectangular prism",
      type: "input",
      question: "A rectangular box has a length of <strong>6 cm</strong>, width of <strong>5 cm</strong>, and height of <strong>4 cm</strong>. What is the volume in cm³?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangular box 6 cm by 5 cm by 4 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection: L=6, W=5, H=4 -->
  <!-- Scale: 6cm=>132px, W depth offset=30px,22px, H=4cm=>88px -->
  <!-- Front face: BL=(65,112), W=132px, H=88px -->
  <rect x="65" y="112" width="132" height="88" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram -->
  <polygon points="65,112 95,90 227,90 197,112" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <polygon points="197,112 227,90 227,178 197,200" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Length label on front bottom edge -->
  <text x="131" y="213" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">L = 6 cm</text>
  <!-- Height label on left front edge -->
  <text x="47" y="158" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">H = 4 cm</text>
  <!-- Width label on top receding edge -->
  <text x="162" y="81" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">W = 5 cm</text>
</svg>`,
      answer: "120",
      acceptableAnswers: ["120", "120 cm³", "120cm³"],
      explanation: "Volume = length × width × height = 6 × 5 × 4 = 120 cm³."
    },
    {
      id: "c10_q16",
      topic: "Capacity",
      type: "mcq",
      question: "How many millilitres (mL) are in <strong>1 litre (L)</strong>?",
      options: ["10 mL", "100 mL", "1,000 mL", "10,000 mL"],
      answer: 2,
      explanation: "1 litre = 1,000 millilitres. This is an important unit conversion: 1 L = 1,000 mL."
    },
    {
      id: "c10_q17",
      topic: "Capacity",
      type: "mcq",
      question: "A container holds <strong>2,500 mL</strong> of water. How many litres is this?",
      options: ["0.25 L", "2.5 L", "25 L", "250 L"],
      answer: 1,
      explanation: "To convert mL to L, divide by 1,000: 2,500 ÷ 1,000 = 2.5 L."
    },
    {
      id: "c10_q18",
      topic: "Capacity",
      type: "mcq",
      question: "A rectangular container is <strong>10 cm</strong> long, <strong>5 cm</strong> wide, and <strong>8 cm</strong> tall. If 1 cm³ = 1 mL, what is its capacity in mL?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangular container 10 cm by 5 cm by 8 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection: L=10, W=5, H=8 -->
  <!-- Scale: 10cm=>150px, W depth offset=25px,19px, H=8cm=>120px -->
  <!-- Front face: BL=(65,105), W=150px, H=120px -->
  <rect x="65" y="90" width="150" height="120" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram -->
  <polygon points="65,90 90,71 240,71 215,90" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <polygon points="215,90 240,71 240,191 215,210" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Water fill -->
  <rect x="66" y="130" width="148" height="79" fill="rgba(56,189,248,0.20)" stroke="none"/>
  <!-- Length label on front bottom edge -->
  <text x="140" y="213" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">L = 10 cm</text>
  <!-- Height label on left front edge -->
  <text x="47" y="152" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">H = 8 cm</text>
  <!-- Width label on top receding edge -->
  <text x="163" y="62" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">W = 5 cm</text>
</svg>`,
      options: ["23 mL", "230 mL", "400 mL", "4,000 mL"],
      answer: 2,
      explanation: "Volume = 10 × 5 × 8 = 400 cm³. Since 1 cm³ = 1 mL, the capacity is 400 mL."
    },
    {
      id: "c10_q19",
      topic: "Capacity",
      type: "input",
      question: "A rectangular fish tank has a volume of <strong>6,000 cm³</strong>. Since 1 cm³ = 1 mL, how many litres of water can it hold?",
      answer: "6",
      acceptableAnswers: ["6", "6 L", "6L", "6 litres", "6 liters"],
      explanation: "Volume = 6,000 cm³ = 6,000 mL. Convert to litres: 6,000 ÷ 1,000 = 6 L."
    },
    {
      id: "c10_q20",
      topic: "Capacity",
      type: "input",
      question: "A bottle holds <strong>3.5 litres</strong> of juice. How many millilitres is this?",
      answer: "3500",
      acceptableAnswers: ["3500", "3,500", "3500 mL", "3,500 mL", "3500mL"],
      explanation: "To convert litres to mL, multiply by 1,000: 3.5 × 1,000 = 3,500 mL."
    },

    // ── NEW QUESTIONS ────────────────────────────────────────────────────────

    // Area of parallelogram (0 questions before)
    {
      id: "c10_q21",
      topic: "Area of a parallelogram",
      type: "mcq",
      question: "What is the formula for the area of a parallelogram with base <em>b</em> and perpendicular height <em>h</em>?",
      options: ["b + h", "½ × b × h", "b × h", "2 × (b + h)"],
      answer: 2,
      explanation: "Area of a parallelogram = base × perpendicular height (A = b × h). The height must be the <strong>perpendicular</strong> height — the vertical distance between the two parallel sides, not the slanted side length."
    },
    {
      id: "c10_q22",
      topic: "Area of a parallelogram",
      type: "mcq",
      question: "A parallelogram has a base of <strong>9 cm</strong> and a perpendicular height of <strong>5 cm</strong>. What is its area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Parallelogram with base 9 cm and height 5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallelogram: base 9cm ~ 180px, height 5cm ~ 100px, offset 30px -->
  <!-- BL=(60,165), BR=(240,165), TR=(270,65), TL=(90,65) -->
  <polygon points="70,165 250,165 280,65 100,65" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Perpendicular height dashed line -->
  <line x1="100" y1="65" x2="100" y2="165" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Right angle marker at base of height -->
  <rect x="100" y="153" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Base label -->
  <text x="160" y="185" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">9 cm</text>
  <!-- Height label -->
  <text x="85" y="118" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">5 cm</text>
  <!-- h label -->
  <text x="122" y="118" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-style="italic">h</text>
</svg>`,
      options: ["14 cm²", "22.5 cm²", "45 cm²", "50 cm²"],
      answer: 2,
      explanation: "Area of a parallelogram = base × height = 9 × 5 = 45 cm². Remember: use the <strong>perpendicular</strong> height, not the slanted side."
    },
    {
      id: "c10_q23",
      topic: "Area of a parallelogram",
      type: "input",
      question: "A parallelogram-shaped sign has a base of <strong>14 cm</strong> and a perpendicular height of <strong>6 cm</strong>. What is its area in cm²?",
      answer: "84",
      acceptableAnswers: ["84", "84 cm²", "84cm²"],
      explanation: "Area = base × height = 14 × 6 = 84 cm². Great work — parallelogram area is just like a rectangle: base times height!"
    },

    // Area of trapezium (0 questions before)
    {
      id: "c10_q24",
      topic: "Area of a trapezium",
      type: "mcq",
      question: "A trapezium has two parallel sides. The formula for its area is:<br>A = ½ × (a + b) × h<br>where <em>a</em> and <em>b</em> are the two parallel sides and <em>h</em> is the perpendicular height.<br><br>Which of the following correctly describes what <strong>h</strong> is?",
      options: [
        "The length of one of the slanted sides",
        "The sum of both parallel sides",
        "The perpendicular distance between the two parallel sides",
        "Half the difference of the two parallel sides"
      ],
      answer: 2,
      explanation: "In the trapezium area formula A = ½ × (a + b) × h, the height <strong>h</strong> is the <strong>perpendicular distance</strong> between the two parallel sides — not the length of any slanted side."
    },
    {
      id: "c10_q25",
      topic: "Area of a trapezium",
      type: "mcq",
      question: "A trapezium has parallel sides of <strong>8 cm</strong> and <strong>4 cm</strong>, and a perpendicular height of <strong>5 cm</strong>. What is its area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Trapezium with parallel sides 8 cm and 4 cm, height 5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Trapezium: bottom=160px(8cm), top=80px(4cm), height=100px(5cm) -->
  <!-- Bottom from (80,175) to (240,175), top from (110,75) to (210,75) -->
  <polygon points="80,175 240,175 210,75 110,75" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Perpendicular height dashed line -->
  <line x1="110" y1="75" x2="110" y2="175" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Right angle marker -->
  <rect x="110" y="163" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Bottom label (a = 8 cm) -->
  <text x="160" y="197" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">a = 8 cm</text>
  <!-- Top label (b = 4 cm) -->
  <text x="160" y="65" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">b = 4 cm</text>
  <!-- Height label -->
  <text x="96" y="128" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">h = 5 cm</text>
</svg>`,
      options: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"],
      answer: 1,
      explanation: "Area of trapezium = ½ × (a + b) × h = ½ × (8 + 4) × 5 = ½ × 12 × 5 = ½ × 60 = 30 cm²."
    },
    {
      id: "c10_q26",
      topic: "Area of a trapezium",
      type: "input",
      question: "A trapezium has parallel sides of <strong>10 m</strong> and <strong>6 m</strong>, and a perpendicular height of <strong>4 m</strong>. What is its area in m²?",
      answer: "32",
      acceptableAnswers: ["32", "32 m²", "32m²"],
      explanation: "Area = ½ × (a + b) × h = ½ × (10 + 6) × 4 = ½ × 16 × 4 = ½ × 64 = 32 m²."
    },

    // Composite shapes (0 questions before)
    {
      id: "c10_q27",
      topic: "Composite shapes",
      type: "mcq",
      question: "The L-shaped figure below is made of two rectangles. What is its total area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="L-shaped composite figure">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- L-shape: overall 8cm wide, 6cm tall; top-right 5cm wide, 4cm tall cut out -->
  <!-- Scale: 1cm = 20px. Full shape bottom-left corner at (60,180) -->
  <!-- Bottom rectangle: 8cm wide x 2cm tall => 160px x 40px, from (60,140) to (220,180) -->
  <rect x="60" y="140" width="160" height="40" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Left rectangle (top part): 3cm wide x 4cm tall => 60px x 80px, from (60,60) to (120,140) -->
  <rect x="60" y="60" width="60" height="80" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dimension labels -->
  <!-- Bottom width: 8 cm -->
  <text x="140" y="198" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8 cm</text>
  <!-- Left height: 6 cm -->
  <text x="42" y="120" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6 cm</text>
  <!-- Top part width: 3 cm -->
  <text x="90" y="52" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3 cm</text>
  <!-- Right cutout height: 4 cm -->
  <text x="232" y="120" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4 cm</text>
  <!-- Bottom section height: 2 cm -->
  <text x="232" y="163" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2 cm</text>
  <!-- Right section width: 5 cm (dashed to show what's missing) -->
  <line x1="120" y1="60" x2="220" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="220" y1="60" x2="220" y2="140" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`,
      options: ["16 cm²", "28 cm²", "32 cm²", "48 cm²"],
      answer: 2,
      explanation: "Split the L-shape into two rectangles:<br>• Bottom rectangle: 8 cm × 2 cm = 16 cm²<br>• Top-left rectangle: 3 cm × 4 cm = 12 cm²<br>• Total = 16 + 12 = <strong>28 cm²</strong>.<br>(Alternatively: full 8×6 rectangle = 48 cm², minus the missing 5×4 = 20 cm² corner → 48 − 20 = 28 cm²)"
    },
    {
      id: "c10_q28",
      topic: "Composite shapes",
      type: "input",
      question: "A shape is made by joining a <strong>rectangle (10 cm × 4 cm)</strong> with a <strong>triangle (base 10 cm, height 3 cm)</strong> on top. What is the total area in cm²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with triangle on top">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle: 10cm x 4cm. Scale: 1cm=18px. Width=180px, height=72px -->
  <!-- Centred: x from 70 to 250, y from 120 to 192 -->
  <rect x="70" y="120" width="180" height="72" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Triangle on top: base 10cm=180px, height 3cm=54px, apex at (160, 66) -->
  <polygon points="70,120 250,120 160,66" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="2"/>
  <!-- Labels -->
  <!-- Rectangle width -->
  <text x="160" y="208" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">10 cm</text>
  <!-- Rectangle height -->
  <text x="54" y="159" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">4 cm</text>
  <!-- Triangle height dashed -->
  <line x1="160" y1="66" x2="160" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="160" y="108" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.2"/>
  <text x="172" y="97" text-anchor="start" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3 cm</text>
</svg>`,
      answer: "55",
      acceptableAnswers: ["55", "55 cm²", "55cm²"],
      explanation: "Add the two areas together:<br>• Rectangle area = 10 × 4 = 40 cm²<br>• Triangle area = ½ × 10 × 3 = 15 cm²<br>• Total = 40 + 15 = <strong>55 cm²</strong>"
    },

    // Area unit conversion (0 questions before)
    {
      id: "c10_q29",
      topic: "Area unit conversion",
      type: "mcq",
      question: "How many cm² are in <strong>1 m²</strong>?",
      options: ["100 cm²", "1,000 cm²", "10,000 cm²", "1,000,000 cm²"],
      answer: 2,
      explanation: "1 m = 100 cm, so 1 m² = 100 × 100 = <strong>10,000 cm²</strong>. When converting square units, you multiply (or divide) by the conversion factor <em>squared</em>."
    },
    {
      id: "c10_q30",
      topic: "Area unit conversion",
      type: "mcq",
      question: "A room has an area of <strong>24 m²</strong>. What is this in cm²?",
      options: ["2,400 cm²", "24,000 cm²", "240,000 cm²", "2,400,000 cm²"],
      answer: 2,
      explanation: "1 m² = 10,000 cm², so 24 m² = 24 × 10,000 = 240,000 cm²."
    },
    {
      id: "c10_q31",
      topic: "Area unit conversion",
      type: "mcq",
      question: "1 hectare (ha) = 10,000 m². A small park has an area of <strong>30,000 m²</strong>. What is this in hectares?",
      options: ["0.3 ha", "3 ha", "30 ha", "300 ha"],
      answer: 1,
      explanation: "To convert m² to hectares, divide by 10,000: 30,000 ÷ 10,000 = <strong>3 ha</strong>. Hectares are used for large land areas like farms and parks."
    },

    // Surface area of a cuboid (0 questions before)
    {
      id: "c10_q32",
      topic: "Surface area of a cuboid",
      type: "mcq",
      question: "A cuboid has <strong>6 rectangular faces</strong>. To find its total surface area, which of the following is correct?",
      options: [
        "Multiply length × width × height",
        "Add up the areas of all 6 faces",
        "Add the length, width, and height together",
        "Multiply the area of one face by 6"
      ],
      answer: 1,
      explanation: "The surface area of a cuboid is the <strong>total area of all 6 rectangular faces</strong>. A cuboid has 3 pairs of identical faces: top/bottom, front/back, and left/right."
    },
    {
      id: "c10_q33",
      topic: "Surface area of a cuboid",
      type: "mcq",
      question: "A rectangular box is <strong>5 cm</strong> long, <strong>3 cm</strong> wide, and <strong>2 cm</strong> tall. What is its total surface area?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Cuboid 5 cm by 3 cm by 2 cm for surface area">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection: L=5, W=3, H=2. Scale: 5cm=>120px, H=2cm=>48px, depth offset 24px,18px -->
  <!-- Front face: BL=(65,130), W=120px, H=48px -->
  <rect x="65" y="130" width="120" height="48" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram -->
  <polygon points="65,130 89,112 209,112 185,130" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <polygon points="185,130 209,112 209,160 185,178" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Length label -->
  <text x="125" y="192" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">l = 5 cm</text>
  <!-- Height label -->
  <text x="48" y="157" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">h = 2 cm</text>
  <!-- Width label -->
  <text x="147" y="103" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">w = 3 cm</text>
</svg>`,
      options: ["30 cm²", "62 cm²", "46 cm²", "71 cm²"],
      answer: 1,
      explanation: "A cuboid has 3 pairs of faces:<br>• Top &amp; bottom: 2 × (5 × 3) = 2 × 15 = 30 cm²<br>• Front &amp; back: 2 × (5 × 2) = 2 × 10 = 20 cm²<br>• Left &amp; right: 2 × (3 × 2) = 2 × 6 = 12 cm²<br>• Total = 30 + 20 + 12 = <strong>62 cm²</strong>"
    },
    {
      id: "c10_q34",
      topic: "Surface area of a cuboid",
      type: "input",
      question: "A gift box is <strong>8 cm</strong> long, <strong>6 cm</strong> wide, and <strong>4 cm</strong> tall. How much wrapping paper (in cm²) is needed to cover all 6 faces exactly?",
      answer: "208",
      acceptableAnswers: ["208", "208 cm²", "208cm²"],
      explanation: "Find the area of each pair of faces:<br>• Top &amp; bottom: 2 × (8 × 6) = 2 × 48 = 96 cm²<br>• Front &amp; back: 2 × (8 × 4) = 2 × 32 = 64 cm²<br>• Left &amp; right: 2 × (6 × 4) = 2 × 24 = 48 cm²<br>• Total surface area = 96 + 64 + 48 = <strong>208 cm²</strong>"
    },

    // ── CHALLENGING QUESTIONS ────────────────────────────────────────────────

    {
      id: "c10_q35",
      topic: "Area unit conversion",
      difficulty: "challenging",
      type: "mcq",
      question: "A rectangular sports field is <strong>120 m</strong> long and <strong>85 m</strong> wide. What is its area in <strong>hectares</strong>? (1 ha = 10,000 m²)",
      options: ["0.102 ha", "1.02 ha", "10.2 ha", "102 ha"],
      answer: 1,
      explanation: "Step 1: Find the area in m²: 120 × 85 = 10,200 m²<br>Step 2: Convert to hectares: 10,200 ÷ 10,000 = <strong>1.02 ha</strong><br>Great thinking — this is a two-step problem combining area calculation with unit conversion!"
    },
    {
      id: "c10_q36",
      topic: "Capacity",
      difficulty: "challenging",
      type: "input",
      question: "A rectangular swimming pool is <strong>25 m</strong> long, <strong>12 m</strong> wide, and <strong>2 m</strong> deep. How many <strong>litres</strong> of water does it hold when completely full?<br>(1 m³ = 1,000 L)",
      answer: "600000",
      acceptableAnswers: ["600000", "600,000", "600000 L", "600,000 L", "600000L"],
      explanation: "Step 1: Volume = length × width × height = 25 × 12 × 2 = 600 m³<br>Step 2: Convert to litres: 600 × 1,000 = <strong>600,000 L</strong><br>That's a huge amount of water — over half a million litres!"
    },
    {
      id: "c10_q37",
      topic: "The volume of a rectangular prism",
      difficulty: "challenging",
      type: "mcq",
      question: "A rectangular container has a volume of <strong>360 cm³</strong>. Its length is <strong>12 cm</strong> and its width is <strong>5 cm</strong>. What is its height?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Cuboid with volume 360 cm cubed, length 12 cm, width 5 cm, find height">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Oblique projection with unknown height -->
  <!-- Front face: BL=(55,110), W=150px, H=? shown as 90px -->
  <rect x="55" y="80" width="150" height="90" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Top face parallelogram (depth 25px,19px) -->
  <polygon points="55,80 80,61 230,61 205,80" fill="rgba(91,94,244,0.20)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right face parallelogram -->
  <polygon points="205,80 230,61 230,151 205,170" fill="rgba(91,94,244,0.08)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Volume label inside -->
  <text x="130" y="130" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">V = 360 cm³</text>
  <!-- Length label -->
  <text x="130" y="185" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">l = 12 cm</text>
  <!-- Height label with ? -->
  <text x="38" y="128" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">h = ?</text>
  <!-- Width label -->
  <text x="155" y="52" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">w = 5 cm</text>
</svg>`,
      options: ["3 cm", "4 cm", "6 cm", "8 cm"],
      answer: 2,
      explanation: "Volume = length × width × height<br>360 = 12 × 5 × h<br>360 = 60 × h<br>h = 360 ÷ 60 = <strong>6 cm</strong><br>Working backwards from volume is great algebraic thinking — well done!"
    },
    {
      id: "c10_q38",
      topic: "Composite shapes",
      difficulty: "challenging",
      type: "mcq",
      question: "A rectangular piece of card is <strong>20 cm</strong> long and <strong>15 cm</strong> wide. A circular hole of radius <strong>3 cm</strong> is cut from the middle. Using π ≈ 3.14, what is the remaining area of the card (to the nearest whole number)?",
      options: ["245 cm²", "272 cm²", "271 cm²", "300 cm²"],
      answer: 1,
      explanation: "Step 1: Rectangle area = 20 × 15 = 300 cm²<br>Step 2: Circle area = π × r² = 3.14 × 3² = 3.14 × 9 = 28.26 cm²<br>Step 3: Remaining area = 300 − 28.26 ≈ <strong>271.74 ≈ 272 cm²</strong> (to the nearest whole number).<br>This combines two area formulas — excellent multi-step thinking!"
    },
    {
      id: "c10_q39",
      topic: "Surface area of a cuboid",
      difficulty: "challenging",
      type: "input",
      question: "A cube has a total surface area of <strong>216 cm²</strong>. What is the <strong>side length</strong> of the cube in cm?<br><em>Hint: A cube has 6 identical square faces.</em>",
      answer: "6",
      acceptableAnswers: ["6", "6 cm", "6cm"],
      explanation: "Step 1: A cube has 6 square faces, all the same size.<br>Area of each face = 216 ÷ 6 = 36 cm²<br>Step 2: Each face is a square with area 36 cm², so:<br>side × side = 36 → side = √36 = <strong>6 cm</strong><br>Working backwards from surface area requires careful thinking — great job!"
    },
    {
      id: "c10_q40",
      topic: "Composite shapes",
      difficulty: "challenging",
      type: "input",
      question: "The diagram shows a large rectangle with a smaller rectangle removed from one corner.<br>Large rectangle: <strong>12 cm × 9 cm</strong>. Removed piece: <strong>4 cm × 3 cm</strong>.<br>What is the area of the remaining shape in cm²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Large rectangle with corner piece removed">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Large rectangle outline: 12cm x 9cm, scale 1cm=16px => 192px x 144px, centred from (64,38) -->
  <!-- Removed corner: top-right, 4cm x 3cm => 64px x 48px -->
  <!-- L-shape path: start BL, go right, up, left (64px), down (48px), left, close -->
  <polygon points="64,182 256,182 256,86 192,86 192,38 64,38" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Dashed lines to show missing corner -->
  <line x1="192" y1="38" x2="256" y2="38" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="256" y1="38" x2="256" y2="86" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Right angle at notch corner -->
  <rect x="192" y="86" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Dimension labels -->
  <!-- Full width at bottom: 12 cm -->
  <text x="160" y="200" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">12 cm</text>
  <!-- Full height on left: 9 cm -->
  <text x="47" y="112" text-anchor="end" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">9 cm</text>
  <!-- Removed piece width: 4 cm (top-right) -->
  <text x="224" y="30" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4 cm</text>
  <!-- Removed piece height: 3 cm (right edge top) -->
  <text x="268" y="65" text-anchor="start" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3 cm</text>
</svg>`,
      answer: "96",
      acceptableAnswers: ["96", "96 cm²", "96cm²"],
      explanation: "Step 1: Area of full large rectangle = 12 × 9 = 108 cm²<br>Step 2: Area of removed corner piece = 4 × 3 = 12 cm²<br>Step 3: Remaining area = 108 − 12 = <strong>96 cm²</strong><br>The subtraction method works perfectly for shapes made by removing a piece!"
    }
  ]
};
