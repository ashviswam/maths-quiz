const ch03 = {
  id: 3,
  title: "Lines and Angles",
  icon: "📐",
  color: "#f59e0b",
  topics: ["Lines", "Angles", "Measuring angles", "Calculating angles", "Vertically opposite angles"],
  questions: [
    {
      id: "c3_q1",
      topic: "Lines",
      type: "mcq",
      question: "Which term describes two lines that never meet and are always the same distance apart?",
      options: ["Intersecting lines", "Perpendicular lines", "Parallel lines", "Curved lines"],
      answer: 2,
      explanation: "Parallel lines always remain the same distance apart and never meet, no matter how far they are extended. They are often marked with small arrows pointing in the same direction."
    },
    {
      id: "c3_q2",
      topic: "Lines",
      type: "mcq",
      question: "Two lines that cross each other at exactly <strong>90°</strong> are called:",
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
      options: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: 2,
      explanation: "An obtuse angle is greater than 90° but less than 180°. Since 137° is between 90° and 180°, it is an obtuse angle."
    },
    {
      id: "c3_q6",
      topic: "Angles",
      type: "mcq",
      question: "Which of the following correctly lists angle types in order from <strong>smallest to largest</strong>?",
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
      options: ["Exactly 90°", "Between 0° and 90°", "Between 90° and 180°", "Between 180° and 360°"],
      answer: 3,
      explanation: "A reflex angle is any angle greater than 180° and less than 360°. It is the 'larger' portion when two rays meet at a point."
    },
    {
      id: "c3_q8",
      topic: "Angles",
      type: "input",
      question: "An angle measures exactly <strong>90°</strong>. What is the specific name for this type of angle?",
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
      options: ["25°", "115°", "295°", "125°"],
      answer: 1,
      explanation: "Angles on a straight line add up to 180°. So b = 180° − 65° = 115°."
    },
    {
      id: "c3_q13",
      topic: "Calculating angles",
      type: "mcq",
      question: "Two angles are <strong>complementary</strong>. One angle is 34°. What is the other angle?",
      options: ["146°", "56°", "66°", "124°"],
      answer: 1,
      explanation: "Complementary angles add up to 90°. So the other angle = 90° − 34° = 56°."
    },
    {
      id: "c3_q14",
      topic: "Calculating angles",
      type: "input",
      question: "Three angles meet at a point and together form a <strong>full revolution</strong>. Two of the angles are 120° and 95°. What is the third angle in degrees?",
      answer: "145",
      acceptableAnswers: ["145", "145°", "145 degrees"],
      explanation: "Angles at a point (a full revolution) add up to 360°. Third angle = 360° − 120° − 95° = 145°."
    },
    {
      id: "c3_q15",
      topic: "Calculating angles",
      type: "mcq",
      question: "Angles <em>p</em>, <em>q</em>, and <em>r</em> lie on a straight line. If <em>p</em> = 70° and <em>q</em> = 45°, what is <em>r</em>?",
      options: ["55°", "65°", "75°", "85°"],
      answer: 1,
      explanation: "Angles on a straight line sum to 180°. So r = 180° − 70° − 45° = 65°."
    },
    {
      id: "c3_q16",
      topic: "Calculating angles",
      type: "input",
      question: "Two angles are <strong>supplementary</strong>. One angle is 112°. What is the other angle in degrees?",
      answer: "68",
      acceptableAnswers: ["68", "68°", "68 degrees"],
      explanation: "Supplementary angles add up to 180°. So the other angle = 180° − 112° = 68°."
    },
    {
      id: "c3_q17",
      topic: "Vertically opposite angles",
      type: "mcq",
      question: "Two straight lines intersect. One of the angles formed is 42°. What is the size of the angle <strong>vertically opposite</strong> to it?",
      options: ["48°", "138°", "42°", "90°"],
      answer: 2,
      explanation: "Vertically opposite angles are always equal. When two straight lines cross, the angles directly across from each other (opposite the vertex) are the same size."
    },
    {
      id: "c3_q18",
      topic: "Vertically opposite angles",
      type: "mcq",
      question: "Two lines intersect forming four angles. One angle is 75°. Which of the following correctly describes <strong>all four</strong> angles?",
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
    }
  ]
};
