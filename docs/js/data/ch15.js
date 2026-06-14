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
      options: ["4C", "C4", "34", "43"],
      answer: 1,
      explanation: "Grid references are always written column first, then row. The column is C and the row is 4, so the grid reference is C4."
    },
    {
      id: "c15_q2",
      topic: "Grid references",
      type: "mcq",
      question: "A treasure map has columns labelled A to F and rows labelled 1 to 6. The treasure is at grid reference <strong>D2</strong>. Which column and row does this describe?",
      options: ["Column 2, Row D", "Column D, Row 2", "Column 4, Row 2", "Column D, Row 4"],
      answer: 1,
      explanation: "In a grid reference, the letter gives the column and the number gives the row. So D2 means column D, row 2."
    },
    {
      id: "c15_q3",
      topic: "Grid references",
      type: "input",
      question: "Look at a grid where columns are labelled A, B, C, D and rows are labelled 1, 2, 3, 4. A post office is in the <strong>third column</strong> and the <strong>first row</strong>. Write the grid reference for the post office.",
      answer: "C1",
      acceptableAnswers: ["C1"],
      explanation: "The third column is C and the first row is 1. Grid references are written column first, then row, so the answer is C1."
    },
    {
      id: "c15_q4",
      topic: "Grid references",
      type: "mcq",
      question: "On a grid, two parks are at grid references <strong>B3</strong> and <strong>B5</strong>. What do these two locations have in common?",
      options: ["They are in the same row", "They are in the same column", "They are at the same point", "They are diagonally opposite"],
      answer: 1,
      explanation: "Both grid references start with B, which is the column label. This means both parks are in column B, just in different rows (row 3 and row 5)."
    },
    {
      id: "c15_q5",
      topic: "Locating points",
      type: "mcq",
      question: "On a Cartesian plane, which axis runs <strong>horizontally</strong> (left and right)?",
      options: ["The y-axis", "The origin", "The x-axis", "The z-axis"],
      answer: 2,
      explanation: "The x-axis is the horizontal axis on a Cartesian plane. The y-axis runs vertically (up and down). They meet at the origin."
    },
    {
      id: "c15_q6",
      topic: "Locating points",
      type: "mcq",
      question: "A point is plotted by moving <strong>5 units right</strong> and <strong>3 units up</strong> from the origin. What are the coordinates of this point?",
      options: ["(3, 5)", "(5, 3)", "(−5, 3)", "(5, −3)"],
      answer: 1,
      explanation: "Coordinates are written as (x, y). Moving right gives a positive x-value of 5, and moving up gives a positive y-value of 3. So the point is (5, 3)."
    },
    {
      id: "c15_q7",
      topic: "Locating points",
      type: "input",
      question: "A point P is located at 4 units along the x-axis and 7 units up the y-axis. Write the coordinates of point P in the form (x, y).",
      answer: "(4, 7)",
      acceptableAnswers: ["(4, 7)", "4, 7", "4,7"],
      explanation: "The x-coordinate is the horizontal distance (4) and the y-coordinate is the vertical distance (7). Coordinates are written as (x, y), so point P is at (4, 7)."
    },
    {
      id: "c15_q8",
      topic: "Coordinates",
      type: "mcq",
      question: "What are the coordinates of the <strong>origin</strong> on a Cartesian plane?",
      options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
      answer: 3,
      explanation: "The origin is the point where the x-axis and y-axis cross. At this point, both the x-value and y-value are zero, so the coordinates are (0, 0)."
    },
    {
      id: "c15_q9",
      topic: "Coordinates",
      type: "mcq",
      question: "Point A has coordinates <strong>(6, 0)</strong>. Where is this point located?",
      options: ["On the y-axis", "At the origin", "On the x-axis", "In Quadrant 1"],
      answer: 2,
      explanation: "When the y-coordinate is 0, the point lies on the x-axis. Point A is 6 units to the right of the origin, directly on the x-axis."
    },
    {
      id: "c15_q10",
      topic: "Coordinates",
      type: "input",
      question: "A square has three vertices at (1, 1), (4, 1), and (4, 4). What are the coordinates of the <strong>fourth vertex</strong>? Write your answer in the form (x, y).",
      answer: "(1, 4)",
      acceptableAnswers: ["(1, 4)", "1, 4", "1,4"],
      explanation: "The square has vertices at (1,1), (4,1), (4,4). The fourth corner must be directly above (1,1) and to the left of (4,4), which is at (1, 4)."
    },
    {
      id: "c15_q11",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "In which quadrant is the point <strong>(−3, 5)</strong> located?",
      options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"],
      answer: 1,
      explanation: "Quadrant 2 has a negative x-value and a positive y-value. Since −3 is negative and 5 is positive, the point (−3, 5) is in Quadrant 2."
    },
    {
      id: "c15_q12",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "A point has a <strong>negative x-coordinate</strong> and a <strong>negative y-coordinate</strong>. In which quadrant does it lie?",
      options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"],
      answer: 2,
      explanation: "Quadrant 3 is the lower-left region where both x and y are negative. Quadrant 1 is (+, +), Quadrant 2 is (−, +), and Quadrant 4 is (+, −)."
    },
    {
      id: "c15_q13",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "Which of the following points is in <strong>Quadrant 4</strong>?",
      options: ["(3, 7)", "(−4, 2)", "(−5, −6)", "(2, −8)"],
      answer: 3,
      explanation: "Quadrant 4 has a positive x-coordinate and a negative y-coordinate. Only (2, −8) fits this pattern: x = 2 (positive) and y = −8 (negative)."
    },
    {
      id: "c15_q14",
      topic: "Positive and negative coordinates",
      type: "input",
      question: "Point B is at (−4, −3) and point C is the reflection of B across the <strong>y-axis</strong>. What are the coordinates of point C? Write your answer in the form (x, y).",
      answer: "(4, -3)",
      acceptableAnswers: ["(4, -3)", "4, -3", "4,-3", "(4, −3)"],
      explanation: "Reflecting across the y-axis changes the sign of the x-coordinate but keeps the y-coordinate the same. So (−4, −3) becomes (4, −3)."
    },
    {
      id: "c15_q15",
      topic: "Compass points",
      type: "mcq",
      question: "You are facing <strong>North</strong> and turn <strong>90° clockwise</strong>. Which direction are you now facing?",
      options: ["South", "West", "North-East", "East"],
      answer: 3,
      explanation: "Turning 90° clockwise from North brings you to East. A full clockwise rotation goes: North → East → South → West → North."
    },
    {
      id: "c15_q16",
      topic: "Compass points",
      type: "mcq",
      question: "Which compass direction is exactly <strong>between South and West</strong>?",
      options: ["SE", "NW", "SW", "WS"],
      answer: 2,
      explanation: "South-West (SW) is the compass direction that lies exactly halfway between South and West. It is at 225° measured clockwise from North."
    },
    {
      id: "c15_q17",
      topic: "Compass points",
      type: "mcq",
      question: "A hiker walks due <strong>East</strong>. How many degrees clockwise from North is she travelling?",
      options: ["45°", "90°", "180°", "270°"],
      answer: 1,
      explanation: "Compass bearings are measured clockwise from North. East is exactly 90° clockwise from North. South is 180° and West is 270°."
    },
    {
      id: "c15_q18",
      topic: "Compass points",
      type: "input",
      question: "A compass shows 8 main directions: N, NE, E, SE, S, SW, W, NW. How many degrees apart is each neighbouring direction from the next? Write just the number.",
      answer: "45",
      acceptableAnswers: ["45", "45°"],
      explanation: "A full circle is 360°. With 8 equally spaced compass points, the angle between each neighbouring direction is 360° ÷ 8 = 45°."
    },
    {
      id: "c15_q19",
      topic: "Compass points",
      type: "mcq",
      question: "Town B is directly <strong>North-East</strong> of Town A. Which bearing (degrees clockwise from North) describes this direction?",
      options: ["45°", "90°", "135°", "315°"],
      answer: 0,
      explanation: "North-East is exactly halfway between North (0°) and East (90°). Halfway between 0° and 90° is 45°, so NE has a bearing of 45°."
    },
    {
      id: "c15_q20",
      topic: "Positive and negative coordinates",
      type: "mcq",
      question: "The point <strong>(0, −5)</strong> is plotted on a Cartesian plane. Which statement best describes its position?",
      options: [
        "It is 5 units above the x-axis on the y-axis",
        "It is 5 units to the left of the origin on the x-axis",
        "It is 5 units below the x-axis on the y-axis",
        "It is in Quadrant 3"
      ],
      answer: 2,
      explanation: "When x = 0, the point lies on the y-axis. A y-value of −5 means the point is 5 units below the origin, so it is on the y-axis, 5 units below the x-axis."
    }
  ]
};
