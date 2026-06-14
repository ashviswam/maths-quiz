const ch19 = {
  id: 19,
  title: "Transformations",
  icon: "🔄",
  color: "#9333ea",
  topics: ["Translations", "Reflections", "Rotations", "Combinations of transformations"],
  questions: [
    {
      id: "c19_q1",
      topic: "Translations",
      type: "mcq",
      question: "Point A is at (2, 3). It is translated <strong>4 right and 2 up</strong>. What are the coordinates of the image A'?",
      options: ["(6, 1)", "(6, 5)", "(−2, 5)", "(2, 7)"],
      answer: 1,
      explanation: "To translate right 4, add 4 to the x-coordinate: 2 + 4 = 6. To translate up 2, add 2 to the y-coordinate: 3 + 2 = 5. The image is A'(6, 5)."
    },
    {
      id: "c19_q2",
      topic: "Translations",
      type: "mcq",
      question: "A triangle has a vertex at (5, 4). After a translation, the image of this vertex is at (2, 7). Which vector describes this translation?",
      options: ["Right 3, down 3", "Left 3, up 3", "Right 3, up 3", "Left 3, down 3"],
      answer: 1,
      explanation: "The x-coordinate decreased by 3 (5 − 3 = 2), which means move left 3. The y-coordinate increased by 3 (4 + 3 = 7), which means move up 3. So the translation is left 3, up 3."
    },
    {
      id: "c19_q3",
      topic: "Translations",
      type: "input",
      question: "Point P is at (−3, 1). It is translated <strong>5 right and 4 down</strong>. Write the coordinates of image P' in the form (x, y).",
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
      options: ["(−3, −2)", "(3, 2)", "(−3, 2)", "(2, 3)"],
      answer: 1,
      explanation: "Reflecting in the x-axis keeps the x-coordinate the same and changes the sign of the y-coordinate. So B(3, −2) maps to B'(3, 2)."
    },
    {
      id: "c19_q6",
      topic: "Reflections",
      type: "mcq",
      question: "Point C is at (−4, 5). It is reflected in the <strong>y-axis</strong>. What are the coordinates of the image C'?",
      options: ["(4, 5)", "(−4, −5)", "(5, −4)", "(4, −5)"],
      answer: 0,
      explanation: "Reflecting in the y-axis changes the sign of the x-coordinate and keeps the y-coordinate the same. So C(−4, 5) maps to C'(4, 5)."
    },
    {
      id: "c19_q7",
      topic: "Reflections",
      type: "input",
      question: "Point D is at (3, 7). It is reflected in the line <strong>y = x</strong>. Write the coordinates of the image D' in the form (x, y).",
      answer: "(7, 3)",
      acceptableAnswers: ["(7, 3)", "7, 3"],
      explanation: "When reflecting in the line y = x, the x and y coordinates are swapped. So D(3, 7) maps to D'(7, 3)."
    },
    {
      id: "c19_q8",
      topic: "Reflections",
      type: "mcq",
      question: "Point E is at (1, 4). It is reflected in the vertical line <strong>x = 3</strong>. What are the coordinates of the image E'?",
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
      options: ["(2, −4)", "(−2, 4)", "(−4, −2)", "(2, 4)"],
      answer: 1,
      explanation: "For a 90° anticlockwise rotation about the origin, the rule is (x, y) → (−y, x). So F(4, 2) maps to F'(−2, 4)."
    },
    {
      id: "c19_q11",
      topic: "Rotations",
      type: "mcq",
      question: "Point G is at (3, −1). It is rotated <strong>180°</strong> about the origin. What are the coordinates of the image G'?",
      options: ["(1, 3)", "(−3, 1)", "(1, −3)", "(3, 1)"],
      answer: 1,
      explanation: "For a 180° rotation about the origin, the rule is (x, y) → (−x, −y). So G(3, −1) maps to G'(−3, 1)."
    },
    {
      id: "c19_q12",
      topic: "Rotations",
      type: "input",
      question: "Point H is at (2, 5). It is rotated <strong>90° clockwise</strong> about the origin. Write the coordinates of the image H' in the form (x, y).",
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
      options: ["(−4, 1)", "(4, 1)", "(2, 1)", "(−2, 3)"],
      answer: 2,
      explanation: "Step 1 — reflect in the y-axis: J(1, 2) → (−1, 2). Step 2 — translate right 3, down 1: (−1 + 3, 2 − 1) = (2, 1). Applying each transformation in order gives J''(2, 1)."
    },
    {
      id: "c19_q15",
      topic: "Combinations of transformations",
      type: "mcq",
      question: "Point K is at (−2, 3). It is rotated <strong>90° clockwise</strong> about the origin, then reflected in the <strong>x-axis</strong>. What are the final coordinates of K?",
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
      answer: "(6, 3)",
      acceptableAnswers: ["(6, 3)", "6, 3"],
      explanation: "Vertex B is at (4, 0). Translate right 2: 4 + 2 = 6. Translate up 3: 0 + 3 = 3. The image B' is at (6, 3)."
    },
    {
      id: "c19_q18",
      topic: "Reflections",
      type: "mcq",
      question: "Look at the points: M(2, 5) and M'(2, −5). Which transformation maps M to M'?",
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
      answer: "(2, 3)",
      acceptableAnswers: ["(2, 3)", "2, 3"],
      explanation: "Step 1 — translate left 4, up 2: (2 − 4, 1 + 2) = (−2, 3). Step 2 — reflect in y-axis: (−2, 3) → (2, 3). The final image is L''(2, 3)."
    }
  ]
};
