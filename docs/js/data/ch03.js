const ch03 = {
  id: 3,
  title: "Lines and Angles",
  icon: "📐",
  color: "#f59e0b",
  topics: ["Lines", "Angles", "Measuring angles", "Calculating angles", "Vertically opposite angles", "Parallel lines and transversals", "Angle sum of triangles and quadrilaterals"],
  questions: [
    {
      id: "c3_q1",
      topic: "Lines",
      type: "mcq",
      question: "Which term describes two lines that never meet and are always the same distance apart?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Parallel lines diagram">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Parallel line 1 -->
  <line x1="30" y1="75" x2="250" y2="75" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Parallel line 2 -->
  <line x1="30" y1="130" x2="250" y2="130" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers on line 1 -->
  <polyline points="115,68 125,75 115,82" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Arrow markers on line 2 -->
  <polyline points="115,123 125,130 115,137" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Equal distance tick marks -->
  <line x1="55" y1="65" x2="55" y2="85" stroke="#64748b" stroke-width="1.5"/>
  <line x1="55" y1="120" x2="55" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <line x1="200" y1="65" x2="200" y2="85" stroke="#64748b" stroke-width="1.5"/>
  <line x1="200" y1="120" x2="200" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <!-- Distance label -->
  <line x1="258" y1="75" x2="258" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="253" y1="75" x2="263" y2="75" stroke="#64748b" stroke-width="1"/>
  <line x1="253" y1="130" x2="263" y2="130" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="50" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Parallel lines — same distance apart, never meet</text>
  <text x="269" y="106" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">same</text>
  <text x="269" y="118" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">gap</text>
</svg>`,
      options: ["Intersecting lines", "Perpendicular lines", "Parallel lines", "Curved lines"],
      answer: 2,
      explanation: "Parallel lines always remain the same distance apart and never meet, no matter how far they are extended. They are often marked with small arrows pointing in the same direction."
    },
    {
      id: "c3_q5",
      topic: "Angles",
      type: "mcq",
      question: "An angle that measures <strong>137°</strong> is best described as:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Obtuse angle of 137 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Vertex at (70, 150) -->
  <!-- Ray 1: horizontal to the right -->
  <line x1="70" y1="150" x2="240" y2="150" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Ray 2: at 137° from positive x-axis (43° above the left horizontal) -->
  <!-- 137° from right = 43° above the leftward direction -->
  <!-- endpoint: 70 + 160*cos(137°) ≈ 70 + 160*(-0.7314) ≈ 70 - 117 = -47 → clip -->
  <!-- Use shorter ray: 70 + 130*cos(137°*pi/180), 150 - 130*sin(137°*pi/180) -->
  <!-- cos(137°) ≈ -0.7314, sin(137°) ≈ 0.6820 -->
  <!-- x = 70 + 130*(-0.7314) = 70 - 95 = -25  → too far left, use length 110 -->
  <!-- x = 70 + 110*(-0.7314) = 70 - 80.5 = -10.5  → still off, use length 90 -->
  <!-- x = 70 + 90*(-0.7314) = 70 - 65.8 = 4.2, y = 150 - 90*0.6820 = 150 - 61.4 = 88.6 -->
  <line x1="70" y1="150" x2="4" y2="89" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Angle arc for 137° -->
  <!-- Large arc from (240,150) going counter-clockwise to the second ray endpoint -->
  <!-- Using a path: start at 40px along ray1 from vertex, sweep to 40px along ray2 -->
  <!-- 40px along ray1: (110, 150) -->
  <!-- 40px along ray2: 70+40*cos(137°)=70-29.26=40.7, 150-40*sin(137°)=150-27.28=122.7 -->
  <path d="M 110,150 A 40,40 0 0,0 40.7,122.7" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- 137° label -->
  <text x="100" y="135" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">137°</text>
  <text x="140" y="185" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Obtuse angle (between 90° and 180°)</text>
</svg>`,
      options: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: 2,
      explanation: "An obtuse angle is greater than 90° but less than 180°. Since 137° is between 90° and 180°, it is an obtuse angle."
    },
    {
      id: "c3_q6",
      topic: "Angles",
      type: "mcq",
      question: "Which of the following correctly lists angle types in order from <strong>smallest to largest</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Angle types from smallest to largest">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- Acute ~50° at x=30 -->
  <line x1="30" y1="170" x2="90" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="30" y1="170" x2="68" y2="123" stroke="#5b5ef4" stroke-width="2"/>
  <path d="M 50,170 A 20,20 0 0,0 43.6,153.6" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="165" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">50°</text>
  <text x="60" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Acute</text>
  <text x="60" y="207" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">&lt;90°</text>

  <!-- Right 90° at x=120 -->
  <line x1="120" y1="170" x2="180" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="120" y1="170" x2="120" y2="110" stroke="#5b5ef4" stroke-width="2"/>
  <rect x="120" y="158" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="150" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Right</text>
  <text x="150" y="207" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">= 90°</text>

  <!-- Obtuse ~120° at x=210 -->
  <line x1="210" y1="170" x2="270" y2="170" stroke="#5b5ef4" stroke-width="2"/>
  <!-- 120° from positive x: cos(120°)=-0.5, sin(120°)=0.866 → length 55: x=210+55*(-0.5)=182.5, y=170-55*0.866=122.4 -->
  <line x1="210" y1="170" x2="182" y2="122" stroke="#5b5ef4" stroke-width="2"/>
  <path d="M 230,170 A 20,20 0 0,0 220,152.7" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="225" y="163" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">120°</text>
  <text x="240" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Obtuse</text>
  <text x="240" y="207" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">90°–180°</text>

  <!-- Straight 180° at x=295 -->
  <line x1="295" y1="150" x2="390" y2="150" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="295" y1="150" x2="200" y2="150" stroke="#5b5ef4" stroke-width="2"/>
  <text x="295" y="140" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">180°</text>
  <text x="295" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Straight</text>
  <text x="295" y="207" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">= 180°</text>

  <text x="200" y="18" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Angle types: smallest → largest</text>
</svg>`,
      options: [
        "Acute, right, obtuse, straight, reflex",
        "Right, acute, obtuse, reflex, straight",
        "Acute, obtuse, right, straight, reflex",
        "Reflex, straight, obtuse, right, acute"
      ],
      answer: 0,
      explanation: "Acute angles are less than 90°, a right angle is exactly 90°, obtuse angles are between 90° and 180°, a straight angle is exactly 180°, and reflex angles are greater than 180° but less than 360°."
    },
    {
      id: "c3_q7",
      topic: "Angles",
      type: "mcq",
      question: "A <strong>reflex angle</strong> measures:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Reflex angle diagram">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Vertex at (100, 120) -->
  <!-- Ray 1: horizontal to the right -->
  <line x1="100" y1="120" x2="240" y2="120" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Ray 2: at 40° above horizontal (so reflex is 360-40=320°, but show ~250° reflex) -->
  <!-- Ray 2 at 40° above: cos40≈0.766, sin40≈0.643; x=100+100*0.766=176.6, y=120-100*0.643=55.7 -->
  <line x1="100" y1="120" x2="177" y2="56" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Large reflex arc going clockwise from ray1 around the bottom/left and back to ray2 -->
  <!-- Arc from 0° clockwise to 320° (i.e., the reflex side) -->
  <!-- Start at 60px along ray1: (160, 120) -->
  <!-- Large arc sweeping through bottom: large-arc-flag=1 -->
  <!-- End at 60px along ray2 at 40°: 100+60*cos40=145.9, 120-60*sin40=81.4 -->
  <path d="M 160,120 A 60,60 0 1,1 145.9,81.4" fill="rgba(91,94,244,0.12)" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Label for reflex angle -->
  <text x="55" y="165" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">320°</text>
  <!-- Arrow hint -->
  <text x="140" y="190" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Reflex angle (180° – 360°)</text>
</svg>`,
      options: ["Exactly 90°", "Between 0° and 90°", "Between 90° and 180°", "Between 180° and 360°"],
      answer: 3,
      explanation: "A reflex angle is any angle greater than 180° and less than 360°. It is the 'larger' portion when two rays meet at a point."
    },
    {
      id: "c3_q8",
      topic: "Angles",
      type: "input",
      question: "An angle measures exactly <strong>90°</strong>. What is the specific name for this type of angle?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Right angle of 90 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Vertex at (80, 150) -->
  <!-- Ray 1: horizontal to the right -->
  <line x1="80" y1="150" x2="230" y2="150" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Ray 2: vertical upward -->
  <line x1="80" y1="150" x2="80" y2="50" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Right-angle box -->
  <rect x="80" y="138" width="14" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- 90° label -->
  <text x="105" y="135" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">90°</text>
  <text x="140" y="185" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Right angle = exactly 90°</text>
</svg>`,
      answer: "right angle",
      acceptableAnswers: ["right angle", "Right angle", "right", "Right"],
      explanation: "An angle of exactly 90° is called a right angle. It is shown by a small square symbol drawn at the vertex where the two rays meet."
    },
    {
      id: "c3_q9",
      topic: "Measuring angles",
      type: "mcq",
      question: "When measuring an angle with a protractor, where must the centre of the protractor be placed?",
      options: [
        "At the end of one of the rays",
        "At the vertex (corner) of the angle",
        "At the midpoint of one of the rays",
        "At any convenient point on one ray"
      ],
      answer: 1,
      explanation: "The centre (origin) of the protractor must be placed exactly on the vertex of the angle. One ray is then aligned with the zero line (baseline) of the protractor."
    },
    {
      id: "c3_q10",
      topic: "Measuring angles",
      type: "mcq",
      question: "A student measures an angle and reads <strong>55°</strong> on the protractor. The angle clearly looks obtuse. What mistake did the student most likely make?",
      options: [
        "They read the wrong scale — the correct reading is 125°",
        "They measured from the wrong vertex",
        "They forgot to add 90° to the reading",
        "They should have doubled the reading to get 110°"
      ],
      answer: 0,
      explanation: "Protractors have two scales. If the angle looks obtuse but the reading is acute, the wrong scale has been used. The correct reading is 180° − 55° = 125°."
    },
    {
      id: "c3_q11",
      topic: "Measuring angles",
      type: "input",
      question: "You use a protractor to measure an angle. One ray lines up with 0° and the other ray passes through <strong>72°</strong> on the correct scale. The angle clearly looks acute. What is the measure of the angle in degrees?",
      answer: "72",
      acceptableAnswers: ["72", "72°", "72 degrees"],
      explanation: "Since the angle is clearly acute (less than 90°), the reading of 72° is correct. There is no need to use the other scale of the protractor."
    },
    {
      id: "c3_q12",
      topic: "Calculating angles",
      type: "mcq",
      question: "Angles <em>a</em> and <em>b</em> lie on a straight line. If <em>a</em> = 65°, what is <em>b</em>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Angles a and b on a straight line, a equals 65 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Straight line from left to right -->
  <line x1="20" y1="130" x2="260" y2="130" stroke="#64748b" stroke-width="2"/>
  <!-- Vertex at (120, 130) -->
  <!-- Upward ray: at 65° from left ray. From vertex (120,130) going up-right -->
  <!-- 65° from left means the ray goes at (180-65)=115° from positive x-axis -->
  <!-- cos(115°)≈-0.4226, sin(115°)≈0.9063 -->
  <!-- x = 120 + 90*(-0.4226) = 120-38 = 82, y = 130 - 90*0.9063 = 130-81.6 = 48.4 -->
  <line x1="120" y1="130" x2="82" y2="48" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arc for angle a (left side, 65°) -->
  <!-- 40px along left ray from vertex: (80,130) -->
  <!-- 40px along the middle ray: 120+40*cos(115°)=120-16.9=103.1, 130-40*sin(115°)=130-36.3=93.7 -->
  <path d="M 80,130 A 40,40 0 0,1 103.1,93.7" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="72" y="122" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">a</text>
  <text x="55" y="108" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">65°</text>
  <!-- Arc for angle b (right side) -->
  <!-- 40px along right ray: (160,130) -->
  <!-- 40px along middle ray same end point -->
  <path d="M 103.1,93.7 A 40,40 0 0,1 160,130" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="145" y="118" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">b</text>
  <text x="155" y="108" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">?</text>
  <!-- Straight line label -->
  <text x="140" y="165" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">a + b = ?°</text>
</svg>`,
      options: ["25°", "115°", "295°", "125°"],
      answer: 1,
      explanation: "Angles on a straight line add up to 180°. So b = 180° − 65° = 115°."
    },
    {
      id: "c3_q14",
      topic: "Calculating angles",
      type: "input",
      question: "Three angles meet at a point and together form a <strong>full revolution</strong>. Two of the angles are 120° and 95°. What is the third angle in degrees?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Three angles at a point forming 360 degrees: 120, 95, and unknown">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Centre at (140, 110) -->
  <!-- Three rays from centre -->
  <!-- Ray 1: horizontal right: (220, 110) -->
  <line x1="140" y1="110" x2="220" y2="110" stroke="#64748b" stroke-width="2"/>
  <!-- Ray 2: at 120° from ray1 (counter-clockwise): cos(120°)=-0.5, sin(120°)=0.866 -->
  <!-- x=140+80*(-0.5)=100, y=110-80*0.866=110-69.3=40.7 -->
  <line x1="140" y1="110" x2="100" y2="41" stroke="#64748b" stroke-width="2"/>
  <!-- Ray 3: at 120°+95°=215° from ray1: cos(215°)≈-0.819, sin(215°)≈-0.574 -->
  <!-- x=140+80*(-0.819)=140-65.5=74.5, y=110-80*(-0.574)=110+45.9=155.9 -->
  <line x1="140" y1="110" x2="75" y2="156" stroke="#64748b" stroke-width="2"/>
  <!-- Arc for 120° (first sector, top) -->
  <!-- From ray1 at 35px: (175,110); to ray2 at 35px: 140+35*cos(120°)=122.5, 110-35*sin(120°)=79.7 -->
  <path d="M 175,110 A 35,35 0 0,0 122.5,79.7" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="168" y="90" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">120°</text>
  <!-- Arc for 95° (second sector, left-top) -->
  <!-- From ray2 at 35px: (122.5,79.7); to ray3 at 35px: 140+35*cos(215°)=140-28.7=111.3, 110-35*sin(215°)=110+20.1=130.1 -->
  <path d="M 122.5,79.7 A 35,35 0 0,0 111.3,130.1" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="98" y="108" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">95°</text>
  <!-- Arc for ? (third sector, right-bottom, 145°) -->
  <!-- From ray3 at 35px to ray1 at 35px, large arc -->
  <path d="M 111.3,130.1 A 35,35 0 0,0 175,110" fill="none" stroke="#22c55e" stroke-width="1.5"/>
  <text x="168" y="138" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">?</text>
  <text x="140" y="190" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Three angles at a point = 360°</text>
</svg>`,
      answer: "145",
      acceptableAnswers: ["145", "145°", "145 degrees"],
      explanation: "Angles at a point (a full revolution) add up to 360°. Third angle = 360° − 120° − 95° = 145°."
    },
    {
      id: "c3_q15",
      topic: "Calculating angles",
      type: "mcq",
      question: "Angles <em>p</em>, <em>q</em>, and <em>r</em> lie on a straight line. If <em>p</em> = 70° and <em>q</em> = 45°, what is <em>r</em>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Three angles p q r on a straight line: p equals 70, q equals 45, r unknown">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Straight horizontal line -->
  <line x1="15" y1="140" x2="265" y2="140" stroke="#64748b" stroke-width="2"/>
  <!-- Three rays from (80,140), (155,140), (190,140) going up -->
  <!-- Actually two rays from vertex at (90,140) dividing the upper half into p, q, r -->
  <!-- Vertex at x=90: ray1 at 70° from left (= 110° from +x-axis) -->
  <!-- cos(110°)≈-0.342, sin(110°)≈0.940 -->
  <!-- x=90+85*(-0.342)=90-29.1=60.9, y=140-85*0.940=140-79.9=60.1 -->
  <line x1="90" y1="140" x2="61" y2="60" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- ray2 at 70+45=115° from left (= 65° from +x-axis) -->
  <!-- cos(65°)≈0.423, sin(65°)≈0.906 -->
  <!-- x=90+85*0.423=90+35.9=125.9, y=140-85*0.906=140-77=63 -->
  <line x1="90" y1="140" x2="126" y2="63" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arc for p (leftmost, 70°) -->
  <!-- 30px along left ray (180°): (60, 140) -->
  <!-- 30px along ray1 at 110°: 90+30*cos(110°)=90-10.3=79.7, 140-30*sin(110°)=140-28.2=111.8 -->
  <path d="M 60,140 A 30,30 0 0,1 79.7,111.8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="50" y="125" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">p</text>
  <text x="33" y="112" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">70°</text>
  <!-- Arc for q (middle, 45°) -->
  <!-- 30px along ray1: (79.7, 111.8) -->
  <!-- 30px along ray2 at 65°: 90+30*0.423=102.7, 140-30*0.906=112.8 -->
  <path d="M 79.7,111.8 A 30,30 0 0,1 102.7,112.8" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="87" y="105" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">q</text>
  <text x="87" y="93" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">45°</text>
  <!-- Arc for r (rightmost, 65°) -->
  <!-- 30px along ray2: (102.7, 112.8) -->
  <!-- 30px along right ray (0°): (120, 140) -->
  <path d="M 102.7,112.8 A 30,30 0 0,1 120,140" fill="none" stroke="#22c55e" stroke-width="1.5"/>
  <text x="122" y="126" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">r</text>
  <text x="133" y="120" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">?</text>
  <text x="140" y="180" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">p + q + r = 180°</text>
</svg>`,
      options: ["55°", "65°", "75°", "85°"],
      answer: 1,
      explanation: "Angles on a straight line sum to 180°. So r = 180° − 70° − 45° = 65°."
    },
    {
      id: "c3_q17",
      topic: "Vertically opposite angles",
      type: "mcq",
      question: "Two straight lines intersect. One of the angles formed is 42°. What is the size of the angle <strong>vertically opposite</strong> to it?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Vertically opposite angles: 42 degrees each">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Two intersecting lines at (140, 110) -->
  <!-- Line 1: diagonal from bottom-left to top-right -->
  <line x1="30" y1="175" x2="250" y2="45" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Line 2: diagonal from top-left to bottom-right -->
  <line x1="30" y1="45" x2="250" y2="175" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Line 1 direction: angle = atan2(45-175, 250-30) = atan2(-130,220) ≈ -30.5° → 149.5° from +x -->
  <!-- Actually these make an X shape with specific angles -->
  <!-- The angle at top (vertically opposite pair) = 42° -->
  <!-- Arc for top angle (42°) -->
  <path d="M 140,90 A 20,20 0 0,1 156.6,96.7" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="142" y="88" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">42°</text>
  <!-- Arc for bottom vertically opposite (42°) -->
  <path d="M 140,130 A 20,20 0 0,1 123.4,123.3" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="138" y="147" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">42°</text>
  <!-- Labels for side angles -->
  <text x="108" y="115" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">138°</text>
  <text x="152" y="115" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">138°</text>
  <text x="140" y="190" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Vertically opposite angles are equal</text>
</svg>`,
      options: ["48°", "138°", "42°", "90°"],
      answer: 2,
      explanation: "Vertically opposite angles are always equal. When two straight lines cross, the angles directly across from each other (opposite the vertex) are the same size."
    },
    {
      id: "c3_q18",
      topic: "Vertically opposite angles",
      type: "mcq",
      question: "Two lines intersect forming four angles. One angle is 75°. Which of the following correctly describes <strong>all four</strong> angles?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Two intersecting lines forming four angles: 75, 105, 75, 105 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Intersection at (140, 105) -->
  <!-- Line 1: nearly horizontal with slight slope -->
  <line x1="20" y1="130" x2="260" y2="80" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Line 2: steep diagonal -->
  <line x1="55" y1="20" x2="225" y2="190" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Line 1 angle from +x: atan2(80-130, 260-20) = atan2(-50,240) ≈ -11.8° -->
  <!-- Line 2 angle from +x: atan2(190-20, 225-55) = atan2(170,170) = 45° -->
  <!-- Angle between lines = 45 - (-11.8) = 56.8° ... let me just label approx positions -->
  <!-- Label the four angles -->
  <!-- Top angle (75°) -->
  <text x="140" y="80" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">75°</text>
  <!-- Bottom opposite (75°) -->
  <text x="140" y="140" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">75°</text>
  <!-- Left angle (105°) -->
  <text x="100" y="110" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">105°</text>
  <!-- Right angle (105°) -->
  <text x="183" y="110" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">105°</text>
  <text x="140" y="185" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">75° + 105° = 180° (supplementary)</text>
</svg>`,
      options: [
        "75°, 105°, 75°, 105°",
        "75°, 105°, 75°, 75°",
        "75°, 90°, 90°, 105°",
        "75°, 75°, 75°, 75°"
      ],
      answer: 0,
      explanation: "When two lines cross, vertically opposite angles are equal and adjacent angles are supplementary (add to 180°). Adjacent angle = 180° − 75° = 105°, giving the four angles as 75°, 105°, 75°, 105°."
    },
    {
      id: "c3_q19",
      topic: "Vertically opposite angles",
      type: "input",
      question: "Two lines cross and one of the angles formed is <strong>128°</strong>. What is the size of the angle <em>adjacent</em> (next) to it on the straight line? Give your answer in degrees.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Two intersecting lines: one angle is 128 degrees, adjacent angle unknown">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Intersection at (140, 110) -->
  <!-- Line 1: horizontal -->
  <line x1="20" y1="110" x2="260" y2="110" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Line 2: at angle — so 128° is obtuse; the line goes at 180°-128°=52° from positive x -->
  <!-- cos(52°)≈0.616, sin(52°)≈0.788 -->
  <!-- Upper ray: 140+90*0.616=195.4, 110-90*0.788=110-70.9=39.1 -->
  <!-- Lower ray: 140-90*0.616=84.6, 110+90*0.788=110+70.9=180.9 -->
  <line x1="85" y1="181" x2="195" y2="39" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arc for 128° (left of the upper ray, going from left ray to upper ray) -->
  <!-- 45px along left ray: (95, 110) -->
  <!-- 45px along upper ray: 140+45*0.616=167.7, 110-45*0.788=74.5 -->
  <path d="M 95,110 A 45,45 0 0,1 167.7,74.5" fill="rgba(91,94,244,0.10)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="100" y="98" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">128°</text>
  <!-- Arc for adjacent ? (right of the upper ray, going from upper ray to right ray) -->
  <!-- 45px along right ray: (185, 110) -->
  <path d="M 167.7,74.5 A 45,45 0 0,1 185,110" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="180" y="97" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">?</text>
  <text x="140" y="170" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Adjacent angles on a line add to 180°</text>
</svg>`,
      answer: "52",
      acceptableAnswers: ["52", "52°", "52 degrees"],
      explanation: "Adjacent angles on a straight line are supplementary and add up to 180°. So the adjacent angle = 180° − 128° = 52°."
    },
    {
      id: "c3_q20",
      topic: "Vertically opposite angles",
      type: "mcq",
      question: "Which statement about vertically opposite angles is <strong>always</strong> true?",
      options: [
        "They add up to 90°",
        "They add up to 180°",
        "They are equal to each other",
        "They are both right angles"
      ],
      answer: 2,
      explanation: "Vertically opposite angles are always equal to each other. This is true for any pair of intersecting straight lines, regardless of the angle size."
    },
    // ─── NEW QUESTIONS FROM c3_q21 ───────────────────────────────────────────
    {
      id: "c3_q22",
      topic: "Lines",
      type: "mcq",
      question: "Look at the diagram. Which pair of lines are <strong>perpendicular</strong> to each other?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Four lines: horizontal, vertical, diagonal, and curved">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Line A: horizontal -->
  <line x1="20" y1="60" x2="150" y2="60" stroke="#5b5ef4" stroke-width="2.5"/>
  <text x="155" y="64" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <!-- Line B: vertical -->
  <line x1="70" y1="20" x2="70" y2="110" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="75" y="118" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <!-- Right-angle marker -->
  <rect x="70" y="48" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Line C: diagonal (not perpendicular to A) -->
  <line x1="180" y1="30" x2="300" y2="130" stroke="#22c55e" stroke-width="2.5"/>
  <text x="305" y="134" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <!-- Line D: horizontal (parallel to A) -->
  <line x1="20" y1="170" x2="150" y2="170" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="155" y="174" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">D</text>
</svg>`,
      options: [
        "Lines A and C",
        "Lines A and D",
        "Lines A and B",
        "Lines C and D"
      ],
      answer: 2,
      explanation: "Lines A and B are perpendicular — they cross at exactly 90°, shown by the small square at their intersection. Lines A and D are parallel (same direction), and lines A and C cross at an angle other than 90°."
    },
    {
      id: "c3_q23",
      topic: "Angles",
      type: "mcq",
      question: "An angle of <strong>47°</strong> is best described as:",
      options: ["Obtuse", "Reflex", "Right", "Acute"],
      answer: 3,
      explanation: "An acute angle is any angle greater than 0° but less than 90°. Since 47° is between 0° and 90°, it is an acute angle. Remember: Acute angles are the 'small, sharp' ones!"
    },
    {
      id: "c3_q24",
      topic: "Angles",
      type: "mcq",
      question: "A <strong>straight angle</strong> measures exactly:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" aria-label="Straight angle of 180 degrees">
  <rect width="320" height="120" fill="#f8fafc" rx="8"/>
  <!-- Straight line through vertex at (160,70) -->
  <line x1="20" y1="70" x2="300" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Vertex dot -->
  <circle cx="160" cy="70" r="4" fill="#5b5ef4"/>
  <!-- Semi-circle arc above to show 180° -->
  <path d="M 120,70 A 40,40 0 0,0 200,70" fill="rgba(91,94,244,0.12)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="160" y="52" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">180°</text>
  <text x="160" y="100" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">A straight angle forms a flat line</text>
</svg>`,
      options: ["90°", "270°", "360°", "180°"],
      answer: 3,
      explanation: "A straight angle is exactly 180°. It looks like a flat, straight line. The two rays point in exactly opposite directions from the vertex."
    },
    {
      id: "c3_q25",
      topic: "Angles",
      type: "mcq",
      question: "A clock hand sweeps all the way around in a complete circle. What type of angle has it turned through?",
      options: ["Straight angle", "Reflex angle", "Obtuse angle", "Revolution (full turn)"],
      answer: 3,
      explanation: "A complete turn (full rotation) is called a revolution and measures exactly 360°. This is different from a reflex angle, which is between 180° and 360° — a revolution is the full 360°."
    },
    {
      id: "c3_q26",
      topic: "Measuring angles",
      type: "mcq",
      question: "To draw an angle of <strong>130°</strong> using a protractor, which steps are correct?",
      options: [
        "Draw a base ray, place the protractor centre at the vertex, mark 130° on the outer scale, then draw the second ray through that mark",
        "Draw a base ray, place the protractor centre at the vertex, mark 130° on the inner scale starting from 0° on the right, then draw the second ray",
        "Draw a base ray, place the protractor edge (not the centre) at the vertex, mark 130°",
        "Draw the angle freehand then measure it afterwards to check"
      ],
      answer: 0,
      explanation: "To draw an angle: (1) Draw a base ray. (2) Place the protractor's centre exactly on the vertex and align 0° with the base ray. (3) Find 130° on the correct scale — since 130° is obtuse, use the scale that goes beyond 90° from your starting side. (4) Mark the point and draw the second ray from the vertex through the mark."
    },
    {
      id: "c3_q41",
      topic: "Angle bisectors",
      type: "mcq",
      question: "An angle bisector divides an angle into two equal parts. If an angle bisector divides an angle into two parts each measuring <strong>38°</strong>, what was the original angle?",
      options: ["19°", "76°", "52°", "142°"],
      answer: 1,
      explanation: "An angle bisector cuts an angle exactly in half. If each half is 38°, the original angle = 2 × 38° = 76°. 'Bisect' always means to cut exactly in two equal parts."
    },
    {
      id: "c3_q42",
      topic: "Angle bisectors",
      type: "input",
      question: "An angle of <strong>124°</strong> is bisected (cut exactly in half). What is the size of each new angle in degrees?",
      answer: "62",
      acceptableAnswers: ["62", "62°", "62 degrees"],
      explanation: "Bisecting means splitting into two equal halves. Each new angle = 124° ÷ 2 = 62°. You can check: 62° + 62° = 124°. Correct!"
    },
    // ─── CHALLENGING QUESTIONS ────────────────────────────────────────────────
  ]
};
