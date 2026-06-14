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
      id: "c3_q2",
      topic: "Lines",
      type: "mcq",
      question: "Two lines that cross each other at exactly <strong>90°</strong> are called:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Perpendicular lines at 90 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Horizontal line -->
  <line x1="30" y1="100" x2="250" y2="100" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Vertical line -->
  <line x1="140" y1="20" x2="140" y2="180" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Right-angle box at intersection -->
  <rect x="140" y="88" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- 90° label -->
  <text x="162" y="88" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">90°</text>
  <text x="140" y="195" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Perpendicular lines</text>
</svg>`,
      options: ["Parallel lines", "Perpendicular lines", "Oblique lines", "Straight lines"],
      answer: 1,
      explanation: "Perpendicular lines meet at a right angle of exactly 90°. A small square symbol is drawn at the point of intersection to show the right angle."
    },
    {
      id: "c3_q3",
      topic: "Lines",
      type: "mcq",
      question: "A road running exactly north and a road running exactly east meet at a junction. What type of lines do these two roads form?",
      options: ["Parallel lines", "Intersecting lines (non-perpendicular)", "Perpendicular lines", "Skew lines"],
      answer: 2,
      explanation: "North and east are at 90° to each other, so roads running in those directions are perpendicular. Perpendicular lines always meet at a right angle."
    },
    {
      id: "c3_q4",
      topic: "Lines",
      type: "input",
      question: "Lines that cross each other at any angle are called <em>intersecting</em> lines. What is the special name given to intersecting lines that cross at exactly <strong>90°</strong>?",
      answer: "perpendicular",
      acceptableAnswers: ["perpendicular", "Perpendicular", "perpendicular lines", "Perpendicular lines"],
      explanation: "When two lines cross at exactly 90°, they are called perpendicular lines. A small square at the intersection marks the right angle."
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
  <text x="140" y="165" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">a + b = 180° (angles on a straight line)</text>
</svg>`,
      options: ["25°", "115°", "295°", "125°"],
      answer: 1,
      explanation: "Angles on a straight line add up to 180°. So b = 180° − 65° = 115°."
    },
    {
      id: "c3_q13",
      topic: "Calculating angles",
      type: "mcq",
      question: "Two angles are <strong>complementary</strong>. One angle is 34°. What is the other angle?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Complementary angles adding to 90 degrees, one angle is 34 degrees">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Right angle formed by horizontal and vertical rays from vertex (80, 155) -->
  <line x1="80" y1="155" x2="230" y2="155" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="155" x2="80" y2="50" stroke="#64748b" stroke-width="2"/>
  <!-- Right-angle box -->
  <rect x="80" y="143" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Middle ray at 34° from horizontal: cos(34°)≈0.829, sin(34°)≈0.559 -->
  <!-- x = 80 + 120*0.829 = 80+99.5=179.5, y = 155 - 120*0.559 = 155-67.1 = 87.9 -->
  <line x1="80" y1="155" x2="180" y2="88" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arc for 34° (lower angle) -->
  <path d="M 120,155 A 40,40 0 0,1 113.2,132.4" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="128" y="150" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">34°</text>
  <!-- Arc for complementary angle (upper angle) -->
  <!-- 40px along vertical from vertex: (80, 115) -->
  <!-- 40px along middle ray: 80+40*0.829=113.2, 155-40*0.559=132.6 -->
  <path d="M 113.2,132.4 A 40,40 0 0,1 80,115" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="102" y="118" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">?</text>
  <text x="140" y="185" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Complementary angles add up to 90°</text>
</svg>`,
      options: ["146°", "56°", "66°", "124°"],
      answer: 1,
      explanation: "Complementary angles add up to 90°. So the other angle = 90° − 34° = 56°."
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
      id: "c3_q16",
      topic: "Calculating angles",
      type: "input",
      question: "Two angles are <strong>supplementary</strong>. One angle is 112°. What is the other angle in degrees?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-label="Supplementary angles on a straight line: 112 degrees and unknown">
  <rect width="280" height="200" fill="#f8fafc" rx="8"/>
  <!-- Straight horizontal line -->
  <line x1="20" y1="130" x2="260" y2="130" stroke="#64748b" stroke-width="2"/>
  <!-- Vertex at (130, 130): upward ray at 112° from right, so 68° above left -->
  <!-- Angle from positive x-axis = 180° - 112° = 68° -->
  <!-- cos(68°)≈0.375, sin(68°)≈0.927 -->
  <!-- x=130+90*0.375=163.8, y=130-90*0.927=130-83.4=46.6 -->
  <line x1="130" y1="130" x2="164" y2="47" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arc for 112° (left side) -->
  <!-- 40px along left ray: (90, 130) -->
  <!-- 40px along middle ray: 130+40*cos(68°)=130+15=145, 130-40*sin(68°)=130-37.1=92.9 -->
  <path d="M 90,130 A 40,40 0 0,1 145,92.9" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="78" y="116" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">112°</text>
  <!-- Arc for unknown angle (right side) -->
  <!-- 40px along right ray: (170, 130) -->
  <path d="M 145,92.9 A 40,40 0 0,1 170,130" fill="none" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="166" y="116" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">?</text>
  <text x="140" y="170" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Supplementary angles add up to 180°</text>
</svg>`,
      answer: "68",
      acceptableAnswers: ["68", "68°", "68 degrees"],
      explanation: "Supplementary angles add up to 180°. So the other angle = 180° − 112° = 68°."
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
      id: "c3_q21",
      topic: "Lines",
      type: "mcq",
      question: "Which of the following is the best description of a <strong>transversal</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Transversal crossing two parallel lines">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Two horizontal parallel lines -->
  <line x1="30" y1="80" x2="290" y2="80" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="150" x2="290" y2="150" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers on parallel lines -->
  <polyline points="148,73 158,80 148,87" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,143 158,150 148,157" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Transversal crossing both lines -->
  <line x1="80" y1="20" x2="220" y2="210" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Labels -->
  <text x="226" y="80" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">line m</text>
  <text x="226" y="150" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">line n</text>
  <text x="228" y="175" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">transversal</text>
  <text x="160" y="215" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">A transversal crosses two or more lines</text>
</svg>`,
      options: [
        "A line that runs exactly horizontal",
        "A line that cuts across two or more other lines",
        "A line that is parallel to another line",
        "A line that has no fixed direction"
      ],
      answer: 1,
      explanation: "A transversal is a line that crosses (intersects) two or more other lines. When it cuts parallel lines, it creates special angle pairs such as corresponding, alternate, and co-interior angles."
    },
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
      id: "c3_q27",
      topic: "Angle sum — triangle",
      type: "mcq",
      question: "What do the three interior angles of <strong>any</strong> triangle always add up to?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangle with angles a, b, c">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangle vertices: A(50,180), B(270,180), C(160,40) -->
  <polygon points="50,180 270,180 160,40" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Angle labels -->
  <text x="55" y="170" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="15" font-weight="700">a</text>
  <text x="253" y="170" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="15" font-weight="700">b</text>
  <text x="153" y="58" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="15" font-weight="700">c</text>
  <!-- Angle arc markers -->
  <path d="M 70,180 A 18,18 0 0,1 58,163" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M 252,163 A 18,18 0 0,1 265,180" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 152,56 A 18,18 0 0,1 170,53" fill="none" stroke="#22c55e" stroke-width="1.5"/>
  <text x="160" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">a + b + c = ?</text>
</svg>`,
      options: ["90°", "270°", "360°", "180°"],
      answer: 3,
      explanation: "The angles inside any triangle always add up to 180°. This is called the angle sum of a triangle. It is true for every triangle — whether it is equilateral, isosceles, right-angled, or scalene."
    },
    {
      id: "c3_q28",
      topic: "Angle sum — triangle",
      type: "input",
      question: "A triangle has two angles of <strong>54°</strong> and <strong>73°</strong>. What is the third angle in degrees?",
      answer: "53",
      acceptableAnswers: ["53", "53°", "53 degrees"],
      explanation: "The angles in a triangle add up to 180°. So the third angle = 180° − 54° − 73° = 53°. Always check: 54 + 73 + 53 = 180. Correct!"
    },
    {
      id: "c3_q29",
      topic: "Angle sum — triangle",
      type: "mcq",
      question: "An isosceles triangle has one angle of <strong>40°</strong> at the top (apex). What are the two base angles?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Isosceles triangle with apex 40 degrees">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Isosceles triangle: apex at (160,30), base at (60,190) and (260,190) -->
  <polygon points="160,30 60,190 260,190" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Tick marks on equal sides -->
  <!-- Left side midpoint ~(110,110) -->
  <line x1="103" y1="113" x2="117" y2="107" stroke="#64748b" stroke-width="2"/>
  <!-- Right side midpoint ~(210,110) -->
  <line x1="203" y1="107" x2="217" y2="113" stroke="#64748b" stroke-width="2"/>
  <!-- Angle labels -->
  <text x="148" y="55" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">40°</text>
  <text x="73" y="178" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">?</text>
  <text x="240" y="178" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">?</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Equal sides → equal base angles</text>
</svg>`,
      options: ["60° each", "65° each", "70° each", "80° each"],
      answer: 2,
      explanation: "In an isosceles triangle the two base angles are equal. The apex angle is 40°, so the remaining angles share 180° − 40° = 140° equally. Each base angle = 140° ÷ 2 = 70°."
    },
    {
      id: "c3_q30",
      topic: "Angle sum — quadrilateral",
      type: "mcq",
      question: "What do the four interior angles of <strong>any</strong> quadrilateral always add up to?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Quadrilateral with four angles labelled">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Quadrilateral: A(40,170), B(280,170), C(260,40), D(80,40) -->
  <polygon points="40,170 280,170 260,40 80,40" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Angle labels at each vertex -->
  <text x="44" y="158" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">A</text>
  <text x="264" y="158" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">B</text>
  <text x="252" y="57" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">C</text>
  <text x="82" y="57" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">D</text>
  <!-- Diagonal to show split into two triangles -->
  <line x1="40" y1="170" x2="260" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="160" y="210" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">A + B + C + D = ?  (Hint: 2 triangles)</text>
</svg>`,
      options: ["180°", "270°", "360°", "540°"],
      answer: 2,
      explanation: "The four angles inside any quadrilateral add up to 360°. A useful way to see why: draw a diagonal to split the quadrilateral into two triangles. Each triangle has angles summing to 180°, so together they give 2 × 180° = 360°."
    },
    {
      id: "c3_q31",
      topic: "Angle sum — quadrilateral",
      type: "input",
      question: "A quadrilateral has three angles of <strong>85°</strong>, <strong>110°</strong>, and <strong>95°</strong>. What is the fourth angle in degrees?",
      answer: "70",
      acceptableAnswers: ["70", "70°", "70 degrees"],
      explanation: "The four angles of a quadrilateral add up to 360°. So the fourth angle = 360° − 85° − 110° − 95° = 70°. Check: 85 + 110 + 95 + 70 = 360. Correct!"
    },
    {
      id: "c3_q32",
      topic: "Angle sum — quadrilateral",
      type: "mcq",
      question: "A rectangle has four angles. Three of them are each <strong>90°</strong>. What is the fourth angle?",
      options: ["45°", "90°", "180°", "270°"],
      answer: 1,
      explanation: "The angles in a quadrilateral always add up to 360°. In a rectangle all four angles are right angles: 90° × 4 = 360°. So the fourth angle = 360° − 90° − 90° − 90° = 90°."
    },
    {
      id: "c3_q33",
      topic: "Parallel lines — corresponding angles",
      type: "mcq",
      question: "When a transversal crosses two parallel lines, the <strong>corresponding angles</strong> are:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Corresponding angles: F-shape, both angles equal">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Two parallel lines -->
  <line x1="30" y1="70" x2="290" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="155" x2="290" y2="155" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers -->
  <polyline points="148,63 158,70 148,77" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,148 158,155 148,162" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Transversal: from (90,15) to (180,210) -->
  <line x1="90" y1="15" x2="190" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Intersection points: transversal at y=70 → x≈ 90 + (70-15)*(190-90)/(215-15) = 90+55*100/200 = 117.5 -->
  <!--                       transversal at y=155 → x≈ 90 + (155-15)*100/200 = 90+70 = 160 -->
  <!-- Corresponding angle at top intersection (above the line, right of transversal) -->
  <path d="M 132,70 A 18,18 0 0,0 123,54" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="138" y="58" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">a</text>
  <!-- Corresponding angle at bottom intersection (above the line, right of transversal) -->
  <path d="M 175,155 A 18,18 0 0,0 166,139" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="181" y="143" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">a</text>
  <!-- F-shape hint label -->
  <text x="260" y="110" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">F-angles</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Corresponding angles are in matching positions</text>
</svg>`,
      options: [
        "Supplementary (add to 180°)",
        "Complementary (add to 90°)",
        "Equal to each other",
        "Always both right angles"
      ],
      answer: 2,
      explanation: "When a transversal crosses parallel lines, corresponding angles are equal. They are in the same position at each intersection — for example, both above the parallel line and on the same side of the transversal. They form an 'F' shape."
    },
    {
      id: "c3_q34",
      topic: "Parallel lines — corresponding angles",
      type: "input",
      question: "Two parallel lines are cut by a transversal. One corresponding angle is <strong>68°</strong>. What is the other corresponding angle in degrees?",
      answer: "68",
      acceptableAnswers: ["68", "68°", "68 degrees"],
      explanation: "Corresponding angles are equal when lines are parallel. So the other corresponding angle is also 68°. Look for the 'F' shape to identify corresponding angles."
    },
    {
      id: "c3_q35",
      topic: "Parallel lines — alternate angles",
      type: "mcq",
      question: "When a transversal crosses two parallel lines, the <strong>alternate angles</strong> are:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Alternate angles: Z-shape, both angles equal">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Two parallel lines -->
  <line x1="30" y1="70" x2="290" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="155" x2="290" y2="155" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers -->
  <polyline points="148,63 158,70 148,77" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,148 158,155 148,162" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Transversal -->
  <line x1="90" y1="15" x2="190" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Alternate angle at top intersection (below the line, right of transversal) -->
  <!-- top intersection ≈ (117.5, 70) -->
  <path d="M 123,84 A 18,18 0 0,1 135,72" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
  <text x="138" y="90" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">b</text>
  <!-- Alternate angle at bottom intersection (above the line, left of transversal) -->
  <!-- bottom intersection ≈ (160, 155) -->
  <path d="M 148,141 A 18,18 0 0,1 158,153" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
  <text x="133" y="143" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">b</text>
  <!-- Z-shape hint -->
  <text x="260" y="110" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Z-angles</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Alternate angles are on opposite sides of the transversal</text>
</svg>`,
      options: [
        "Supplementary (add to 180°)",
        "Equal to each other",
        "Each always 90°",
        "Complementary (add to 90°)"
      ],
      answer: 1,
      explanation: "Alternate angles are equal when lines are parallel. They sit on opposite sides of the transversal between the parallel lines. They form a 'Z' shape (sometimes called 'Z-angles')."
    },
    {
      id: "c3_q36",
      topic: "Parallel lines — alternate angles",
      type: "input",
      question: "Two parallel lines are cut by a transversal. One alternate angle is <strong>115°</strong>. What is the other alternate angle in degrees?",
      answer: "115",
      acceptableAnswers: ["115", "115°", "115 degrees"],
      explanation: "Alternate angles are equal when lines are parallel. So the other alternate angle is also 115°. Remember: alternate angles are on opposite sides of the transversal and form a 'Z' shape."
    },
    {
      id: "c3_q37",
      topic: "Parallel lines — co-interior angles",
      type: "mcq",
      question: "When a transversal crosses two parallel lines, the <strong>co-interior angles</strong> (also called allied or C-angles) are:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Co-interior angles: C-shape, angles add to 180 degrees">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Two parallel lines -->
  <line x1="30" y1="70" x2="290" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="155" x2="290" y2="155" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers -->
  <polyline points="148,63 158,70 148,77" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,148 158,155 148,162" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Transversal -->
  <line x1="90" y1="15" x2="190" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Co-interior angle at top intersection (below the line, left of transversal = inside, left) -->
  <!-- top intersection ≈ (117.5, 70) -->
  <path d="M 105,84 A 18,18 0 0,0 115,70" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2"/>
  <text x="90" y="92" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">c</text>
  <!-- Co-interior angle at bottom intersection (above the line, left of transversal = inside, left) -->
  <!-- bottom intersection ≈ (160, 155) -->
  <path d="M 146,141 A 18,18 0 0,0 159,155" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2"/>
  <text x="128" y="145" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">d</text>
  <!-- C-shape hint -->
  <text x="258" y="110" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">C-angles</text>
  <text x="40" y="117" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">c + d = 180°</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Co-interior: same side, between the parallel lines</text>
</svg>`,
      options: [
        "Equal to each other",
        "Supplementary (add to 180°)",
        "Complementary (add to 90°)",
        "Both always obtuse"
      ],
      answer: 1,
      explanation: "Co-interior angles (also called allied or C-angles) are on the same side of the transversal, between the two parallel lines. They add up to 180°. They form a 'C' shape. Remember: C for Co-interior = C for 180° (a semi-circle)."
    },
    {
      id: "c3_q38",
      topic: "Parallel lines — co-interior angles",
      type: "input",
      question: "Two parallel lines are cut by a transversal. One co-interior angle is <strong>74°</strong>. What is the other co-interior angle in degrees?",
      answer: "106",
      acceptableAnswers: ["106", "106°", "106 degrees"],
      explanation: "Co-interior angles add up to 180°. So the other angle = 180° − 74° = 106°. These angles are on the same side of the transversal, between the parallel lines (C-shape)."
    },
    {
      id: "c3_q39",
      topic: "Parallel lines — corresponding angles",
      type: "mcq",
      question: "In the diagram, lines <em>l</em> and <em>m</em> are parallel. The transversal creates angle <em>x</em> = 55°. Which angle is equal to <em>x</em> because it is a <strong>corresponding angle</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Parallel lines with transversal: angle x = 55 degrees, find corresponding angle">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallel lines l and m -->
  <line x1="30" y1="70" x2="290" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="155" x2="290" y2="155" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Arrow markers -->
  <polyline points="148,63 158,70 148,77" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,148 158,155 148,162" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <text x="295" y="74" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">l</text>
  <text x="295" y="159" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">m</text>
  <!-- Transversal -->
  <line x1="100" y1="10" x2="200" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- top intersection ≈ x = 100 + (70-10)*(200-100)/(215-10) = 100 + 60*100/205 ≈ 129 -->
  <!-- bottom intersection ≈ x = 100 + (155-10)*100/205 ≈ 100+70.7 = 171 -->
  <!-- Angle x: above top line, right of transversal (F-angle position) -->
  <path d="M 144,70 A 18,18 0 0,0 135,56" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="150" y="60" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">x = 55°</text>
  <!-- Four angles at bottom intersection labelled P, Q, R, S -->
  <!-- P: above bottom line, right of transversal (= corresponding to x) -->
  <path d="M 185,155 A 18,18 0 0,0 176,141" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="1.5"/>
  <text x="191" y="141" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">P</text>
  <!-- Q: above bottom line, left of transversal -->
  <text x="152" y="142" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Q</text>
  <!-- R: below bottom line, left of transversal -->
  <text x="152" y="176" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">R</text>
  <!-- S: below bottom line, right of transversal -->
  <text x="189" y="176" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">S</text>
</svg>`,
      options: ["Angle Q", "Angle R", "Angle S", "Angle P"],
      answer: 3,
      explanation: "Corresponding angles are in the same position at each intersection — both above the parallel line and on the same side of the transversal. Angle x is above line l, to the right of the transversal. Angle P is in the same position relative to line m. So P = x = 55°. This is the 'F-angle' pair."
    },
    {
      id: "c3_q40",
      topic: "Parallel lines — alternate angles",
      type: "mcq",
      question: "In the diagram, lines <em>l</em> and <em>m</em> are parallel and the transversal creates angle <em>y</em> = 63°. Which statement is correct about the <strong>alternate angle</strong> to <em>y</em>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Alternate angle to y = 63 degrees with parallel lines">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallel lines -->
  <line x1="30" y1="70" x2="290" y2="70" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="30" y1="155" x2="290" y2="155" stroke="#5b5ef4" stroke-width="2.5"/>
  <polyline points="148,63 158,70 148,77" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,148 158,155 148,162" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Transversal -->
  <line x1="100" y1="10" x2="200" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- Angle y: below top line, right of transversal -->
  <!-- top intersection ≈ (129, 70) -->
  <path d="M 143,82 A 18,18 0 0,1 131,70" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
  <text x="150" y="95" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">y = 63°</text>
  <!-- Alternate angle: above bottom line, LEFT of transversal -->
  <!-- bottom intersection ≈ (171, 155) -->
  <path d="M 159,141 A 18,18 0 0,0 170,155" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="130" y="143" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">alt.</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Z-angles: opposite sides, between parallel lines</text>
</svg>`,
      options: [
        "It equals 117° because co-interior angles add to 180°",
        "It equals 63° because alternate angles are equal",
        "It equals 27° because it is complementary to y",
        "It equals 126° because it is double the angle"
      ],
      answer: 1,
      explanation: "Alternate angles are equal when lines are parallel. Angle y = 63°, so its alternate angle is also 63°. Alternate angles form a 'Z' shape and lie on opposite sides of the transversal between the parallel lines."
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
    {
      id: "c3_q43",
      topic: "Parallel lines — mixed angle rules",
      difficulty: "challenging",
      type: "input",
      question: "In the diagram, lines <em>AB</em> and <em>CD</em> are parallel. A transversal crosses both lines. The angle at the top intersection (between the transversal and line <em>AB</em>, on the left) is <strong>125°</strong>.<br><br>Find angle <em>x</em>, the co-interior angle at the bottom intersection (same side of the transversal). Then use the fact that alternate angles are equal to state the value of angle <em>y</em>, the alternate angle to the <strong>supplement</strong> of 125°.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Parallel lines with transversal: find co-interior and alternate angles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallel lines AB and CD -->
  <line x1="20" y1="65" x2="300" y2="65" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="20" y1="160" x2="300" y2="160" stroke="#5b5ef4" stroke-width="2.5"/>
  <polyline points="148,58 158,65 148,72" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,153 158,160 148,167" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <text x="305" y="69" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">AB</text>
  <text x="305" y="164" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">CD</text>
  <!-- Transversal -->
  <line x1="90" y1="10" x2="195" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- top intersection ≈ x=90+(65-10)*(195-90)/(215-10)=90+55*105/205≈90+28=118 -->
  <!-- bottom intersection ≈ x=90+(160-10)*105/205≈90+76.8=167 -->
  <!-- 125° angle: above top line, left of transversal -->
  <path d="M 105,65 A 22,22 0 0,1 118,65" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
  <text x="72" y="60" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">125°</text>
  <!-- x: co-interior at bottom intersection, same side (left), above line CD -->
  <path d="M 154,145 A 18,18 0 0,0 165,160" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2"/>
  <text x="133" y="147" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">x</text>
  <!-- y: alternate to supplement of 125 = 55°, so y is below top line, right of transversal -->
  <path d="M 120,78 A 18,18 0 0,1 134,68" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <text x="136" y="85" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">y</text>
</svg>`,
      answer: "55",
      acceptableAnswers: ["55", "55°", "55 degrees"],
      explanation: "Step 1 — Find x (co-interior angle): Co-interior angles add to 180°. So x = 180° − 125° = 55°.<br>Step 2 — Find y: The supplement of 125° (angle on the straight line at the top intersection) = 180° − 125° = 55°. Angle y is the alternate angle to this 55°. Alternate angles are equal, so y = 55°.<br>In this case x and y are both 55° — great thinking if you spotted they must be equal! The question asks specifically for x."
    },
    {
      id: "c3_q44",
      topic: "Angle sum — triangle",
      difficulty: "challenging",
      type: "input",
      question: "The <strong>exterior angle</strong> of a triangle equals the sum of the two <strong>non-adjacent interior angles</strong>. In triangle PQR, the exterior angle at R is <strong>112°</strong> and the interior angle at P is <strong>48°</strong>. What is the interior angle at Q in degrees?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Triangle PQR with exterior angle at R = 112 degrees, interior angle P = 48 degrees">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Triangle: P(40,180), Q(230,180), R(150,50) -->
  <polygon points="40,180 230,180 150,50" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Extend side QR beyond R to show exterior angle -->
  <!-- Direction QR: from (230,180) to (150,50) = (-80,-130), unit length = 152.6, unit = (-0.524,-0.852) -->
  <!-- Extend 60px beyond R: (150-60*0.524, 50-60*0.852) = (118.6, 18.9) — too close to edge, use 50px -->
  <line x1="150" y1="50" x2="124" y2="7" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Exterior angle arc at R -->
  <!-- Angle between PR and the extension of QR -->
  <path d="M 138,62 A 22,22 0 0,0 162,60" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2"/>
  <text x="150" y="88" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">ext. = 112°</text>
  <!-- Labels at vertices -->
  <text x="22" y="178" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">P</text>
  <text x="234" y="178" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">Q</text>
  <text x="153" y="45" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">R</text>
  <!-- Angle at P -->
  <path d="M 58,180 A 16,16 0 0,0 49,165" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="56" y="162" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">48°</text>
  <!-- Angle at Q = ? -->
  <text x="212" y="165" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">?</text>
</svg>`,
      answer: "64",
      acceptableAnswers: ["64", "64°", "64 degrees"],
      explanation: "The exterior angle of a triangle equals the sum of the two non-adjacent interior angles. The exterior angle at R = angle P + angle Q. So: 112° = 48° + angle Q. Therefore angle Q = 112° − 48° = 64°.<br>You can verify using the triangle angle sum: interior angle at R = 180° − 112° = 68°. Then 48° + 64° + 68° = 180°. Correct!"
    },
    {
      id: "c3_q45",
      topic: "Vertically opposite angles",
      difficulty: "challenging",
      type: "input",
      question: "Two straight lines intersect. One of the four angles is <strong>(3x + 15)°</strong> and the angle <strong>vertically opposite</strong> to it is <strong>(5x − 9)°</strong>. Find the value of <em>x</em>, then state the size of all four angles.",
      answer: "12",
      acceptableAnswers: ["12", "x = 12", "x=12"],
      explanation: "Vertically opposite angles are equal, so: 3x + 15 = 5x − 9. Solve: 15 + 9 = 5x − 3x → 24 = 2x → x = 12.<br>The vertically opposite pair = 3(12) + 15 = 36 + 15 = 51°. The other pair = 180° − 51° = 129° each. All four angles: 51°, 129°, 51°, 129°. Check: 51 + 129 + 51 + 129 = 360°. Correct!"
    },
    {
      id: "c3_q46",
      topic: "Angle sum — triangle",
      difficulty: "challenging",
      type: "input",
      question: "In the figure, two straight lines intersect inside a triangle. The three interior angles of the triangle are <em>a</em>, <em>b</em>, and <em>c</em>. The angles at the intersection point inside sum to 360°.<br><br>A triangle has angles <strong>a = 50°</strong> and <strong>b = 65°</strong>. A line from the vertex of angle <em>a</em> to the opposite side bisects angle <em>a</em>. What is the size of each half of angle <em>a</em> in degrees?",
      answer: "25",
      acceptableAnswers: ["25", "25°", "25 degrees"],
      explanation: "The angle bisector from vertex A divides angle a exactly in half. Angle a = 50°, so each half = 50° ÷ 2 = 25°. This is the definition of an angle bisector — it splits an angle into two equal parts."
    },
    {
      id: "c3_q47",
      topic: "Parallel lines — mixed angle rules",
      difficulty: "challenging",
      type: "mcq",
      question: "In the diagram, <em>AB</em> ∥ <em>CD</em>. The transversal makes an angle of <strong>47°</strong> with line <em>AB</em> (corresponding angle position). A second line from the same intersection point on <em>CD</em> forms a co-interior angle of <strong>85°</strong> with line <em>CD</em> on the same side. What is the angle between the transversal and this second line at their shared point on <em>CD</em>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Two parallel lines with transversal and a second line at the lower intersection">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Parallel lines AB and CD -->
  <line x1="20" y1="60" x2="300" y2="60" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="20" y1="165" x2="300" y2="165" stroke="#5b5ef4" stroke-width="2.5"/>
  <polyline points="148,53 158,60 148,67" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polyline points="148,158 158,165 148,172" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <text x="305" y="64" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">AB</text>
  <text x="305" y="169" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">CD</text>
  <!-- Transversal from ~(100,10) to ~(195,215) -->
  <line x1="100" y1="10" x2="200" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
  <!-- top intersection ≈ (126, 60): 47° angle labelled -->
  <text x="130" y="52" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">47°</text>
  <!-- bottom intersection ≈ (171, 165) -->
  <!-- Second line from (171,165) going right and up -->
  <line x1="171" y1="165" x2="290" y2="100" stroke="#22c55e" stroke-width="2.5"/>
  <!-- co-interior angle (left of transversal, above CD) = 85° -->
  <text x="140" y="155" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">85°</text>
  <!-- angle between transversal and second line = ? -->
  <text x="185" y="148" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">?</text>
  <text x="160" y="212" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Find the angle between the transversal and the green line at their shared point</text>
</svg>`,
      options: ["38°", "48°", "42°", "28°"],
      answer: 1,
      explanation: "Step 1 — The corresponding angle to 47° at the lower intersection is also 47° (corresponding angles, parallel lines).<br>Step 2 — The co-interior angle on the left of the transversal is 85°. This means the angles above line CD at that intersection on the left = 85°.<br>Step 3 — Angles on a straight line (above CD) sum to 180°: 85° (left of transversal) + 47° (right of transversal, from corresponding) = 132°. Wait — the transversal itself cuts above CD into: 47° on the right and (180°−47°) = 133° on the left. The co-interior is 85°, so angle between transversal and green line = 133° − 85° = 48°."
    },
    {
      id: "c3_q48",
      topic: "Angle sum — quadrilateral",
      difficulty: "challenging",
      type: "input",
      question: "The four angles of a quadrilateral are in the ratio <strong>2 : 3 : 4 : 6</strong>. Find the size of the <strong>largest</strong> angle in degrees.",
      answer: "144",
      acceptableAnswers: ["144", "144°", "144 degrees"],
      explanation: "The four angles of a quadrilateral add up to 360°. The ratio 2 : 3 : 4 : 6 has parts: 2 + 3 + 4 + 6 = 15 parts. Each part = 360° ÷ 15 = 24°. The largest angle corresponds to 6 parts: 6 × 24° = 144°. Check: 48° + 72° + 96° + 144° = 360°. Correct!"
    }
  ]
};
