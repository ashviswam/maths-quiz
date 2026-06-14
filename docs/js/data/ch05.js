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
      options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
      answer: 2,
      explanation: "A polygon with 8 sides is called an <strong>octagon</strong>. The prefix 'octa' means eight, just like in the word octopus (eight arms)."
    },
    {
      id: "c5_q2",
      topic: "Polygons",
      type: "mcq",
      question: "The sum of the interior angles of a hexagon is:",
      options: ["540°", "360°", "720°", "900°"],
      answer: 2,
      explanation: "The sum of interior angles of any polygon = (n − 2) × 180°, where n is the number of sides. For a hexagon: (6 − 2) × 180° = 4 × 180° = <strong>720°</strong>."
    },
    {
      id: "c5_q3",
      topic: "Polygons",
      type: "mcq",
      question: "A <strong>regular polygon</strong> is one where:",
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
      answer: "1440",
      acceptableAnswers: ["1440", "1440°"],
      explanation: "Using the formula (n − 2) × 180°: (10 − 2) × 180° = 8 × 180° = <strong>1440°</strong>. A 10-sided polygon is called a decagon."
    },
    {
      id: "c5_q5",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has all three sides of equal length. What type of triangle is it?",
      options: ["Isosceles", "Scalene", "Right-angled", "Equilateral"],
      answer: 3,
      explanation: "An <strong>equilateral triangle</strong> has all three sides equal in length and all three angles equal to 60°. 'Equilateral' comes from Latin meaning 'equal sides'."
    },
    {
      id: "c5_q6",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has angles of 90°, 45°, and 45°. How would you classify this triangle by its angles?",
      options: ["Acute-angled", "Obtuse-angled", "Right-angled", "Equilateral"],
      answer: 2,
      explanation: "A triangle containing a <strong>90° angle</strong> is called a right-angled triangle. The small square symbol drawn at a corner indicates a right angle."
    },
    {
      id: "c5_q7",
      topic: "Triangles",
      type: "mcq",
      question: "A triangle has sides of length 3 cm, 5 cm, and 7 cm. What type of triangle is this <em>based on its sides</em>?",
      options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      answer: 2,
      explanation: "A <strong>scalene triangle</strong> has all three sides of different lengths. Here 3 cm, 5 cm, and 7 cm are all different, so this is a scalene triangle."
    },
    {
      id: "c5_q8",
      topic: "Triangles",
      type: "input",
      question: "Two angles of a triangle are 65° and 75°. What is the size of the third angle? (Give the number only, in degrees)",
      answer: "40",
      acceptableAnswers: ["40", "40°"],
      explanation: "The angles of any triangle add up to <strong>180°</strong>. So the third angle = 180° − 65° − 75° = <strong>40°</strong>."
    },
    {
      id: "c5_q9",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which quadrilateral has <strong>exactly one pair</strong> of parallel sides?",
      options: ["Parallelogram", "Rhombus", "Trapezoid", "Rectangle"],
      answer: 2,
      explanation: "A <strong>trapezoid</strong> (also called a trapezium) has exactly one pair of parallel sides. A parallelogram, rhombus, and rectangle all have <em>two</em> pairs of parallel sides."
    },
    {
      id: "c5_q10",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "A quadrilateral has all sides equal in length and all angles equal to 90°. What shape is it?",
      options: ["Rhombus", "Square", "Rectangle", "Kite"],
      answer: 1,
      explanation: "A <strong>square</strong> has all four sides equal <em>and</em> all four right angles (90°). A rhombus also has equal sides but its angles are not necessarily 90°."
    },
    {
      id: "c5_q11",
      topic: "Quadrilaterals",
      type: "mcq",
      question: "Which of the following statements about a <strong>rhombus</strong> is correct?",
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
      answer: "18",
      acceptableAnswers: ["18", "18 cm"],
      explanation: "The <strong>diameter</strong> of a circle is twice the radius. So diameter = 2 × 9 cm = <strong>18 cm</strong>. The diameter is the longest chord in any circle."
    },
    {
      id: "c5_q14",
      topic: "Circles",
      type: "mcq",
      question: "The region enclosed between two radii and an arc of a circle is called a:",
      options: ["Chord", "Segment", "Sector", "Tangent"],
      answer: 2,
      explanation: "A <strong>sector</strong> is a 'pie-slice' shaped region bounded by two radii and an arc. A chord divides a circle into two <em>segments</em>, which are different from sectors."
    },
    {
      id: "c5_q15",
      topic: "Solids",
      type: "mcq",
      question: "A cube has how many <strong>vertices</strong> (corners)?",
      options: ["6", "8", "12", "4"],
      answer: 1,
      explanation: "A cube has <strong>8 vertices</strong> (corners), 12 edges, and 6 faces. You can verify this using Euler's formula: Vertices − Edges + Faces = 2, so 8 − 12 + 6 = 2. ✓"
    },
    {
      id: "c5_q16",
      topic: "Solids",
      type: "mcq",
      question: "A triangular prism has triangular cross-sections. How many <strong>faces</strong> does it have in total?",
      options: ["4", "5", "6", "7"],
      answer: 1,
      explanation: "A triangular prism has <strong>5 faces</strong>: 2 triangular faces (top and bottom) and 3 rectangular faces (the sides). It also has 9 edges and 6 vertices, and Euler's formula checks out: 6 − 9 + 5 = 2."
    },
    {
      id: "c5_q17",
      topic: "Solids",
      type: "input",
      question: "A square pyramid has a square base and 4 triangular faces. How many <strong>edges</strong> does it have in total?",
      answer: "8",
      acceptableAnswers: ["8"],
      explanation: "A square pyramid has 4 edges around the square base and 4 more edges going up to the apex, giving <strong>8 edges</strong> in total. It also has 5 vertices and 5 faces, and Euler's formula: 5 − 8 + 5 = 2. ✓"
    },
    {
      id: "c5_q18",
      topic: "Nets of solids",
      type: "mcq",
      question: "A <strong>net</strong> of a solid is:",
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
      options: ["4", "5", "6", "8"],
      answer: 2,
      explanation: "A cube has <strong>6 faces</strong>, all of which are squares. Therefore the net of a cube is made up of exactly <strong>6 squares</strong> arranged so that they can be folded to cover all faces without overlap."
    },
    {
      id: "c5_q20",
      topic: "Nets of solids",
      type: "mcq",
      question: "Which solid would be formed by folding a net that has <strong>1 circle and 1 curved rectangle</strong> (a rectangle that wraps around)?",
      options: ["Sphere", "Cone", "Cylinder", "Prism"],
      answer: 2,
      explanation: "A <strong>cylinder</strong> has two circular faces (top and bottom) and one curved rectangular surface that wraps around. When this net is folded, the rectangle forms the curved side and the circle becomes each flat end."
    }
  ]
};
