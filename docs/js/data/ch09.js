const ch09 = {
  id: 9,
  title: "Measurement: Length",
  icon: "📏",
  color: "#84cc16",
  topics: ["Units of length", "Operations with lengths", "Perimeter", "Scale diagrams"],
  questions: [
    {
      id: "c9_q1", topic: "Units of length", type: "mcq",
      question: "How many centimetres (cm) are in 1 metre (m)?",
      options: ["10", "100", "1,000", "10,000"],
      answer: 1,
      explanation: "There are 100 centimetres in 1 metre. The prefix <em>centi-</em> means one hundredth, so 1 cm = 1/100 of a metre."
    },
    {
      id: "c9_q2", topic: "Units of length", type: "mcq",
      question: "Convert <strong>3.5 km</strong> to metres.",
      options: ["35 m", "350 m", "3,500 m", "35,000 m"],
      answer: 2,
      explanation: "To convert kilometres to metres, multiply by 1,000. So 3.5 × 1,000 = 3,500 m."
    },
    {
      id: "c9_q3", topic: "Units of length", type: "mcq",
      question: "Which of the following correctly converts <strong>85 mm</strong> to centimetres?",
      options: ["850 cm", "0.85 cm", "8.5 cm", "8,500 cm"],
      answer: 2,
      explanation: "There are 10 mm in 1 cm. To convert mm to cm, divide by 10. So 85 ÷ 10 = 8.5 cm."
    },
    {
      id: "c9_q4", topic: "Units of length", type: "input",
      question: "Convert <strong>4,700 m</strong> to kilometres. Write your answer as a decimal.",
      answer: "4.7",
      acceptableAnswers: ["4.7", "4.70"],
      explanation: "To convert metres to kilometres, divide by 1,000. So 4,700 ÷ 1,000 = 4.7 km."
    },
    {
      id: "c9_q5", topic: "Units of length", type: "mcq",
      question: "Which of the following measurements is the <em>longest</em>?",
      options: ["450 cm", "0.004 km", "38 m", "3,900 mm"],
      answer: 2,
      explanation: "Convert all to cm: 450 cm = 450 cm; 0.004 km = 400 cm; 38 m = 3,800 cm; 3,900 mm = 390 cm. The longest is 38 m = 3,800 cm."
    },
    {
      id: "c9_q6", topic: "Units of length", type: "input",
      question: "Convert <strong>2.35 m</strong> to centimetres.",
      answer: "235",
      acceptableAnswers: ["235", "235 cm"],
      explanation: "To convert metres to centimetres, multiply by 100. So 2.35 × 100 = 235 cm."
    },
    {
      id: "c9_q7", topic: "Units of length", type: "mcq",
      question: "Which of the following correctly orders these lengths from <em>shortest</em> to <em>longest</em>?<br>45 mm &nbsp;&nbsp; 0.4 m &nbsp;&nbsp; 38 cm &nbsp;&nbsp; 0.004 km",
      options: [
        "45 mm, 0.4 m, 38 cm, 0.004 km",
        "45 mm, 38 cm, 0.4 m, 0.004 km",
        "0.004 km, 38 cm, 0.4 m, 45 mm",
        "38 cm, 45 mm, 0.004 km, 0.4 m"
      ],
      answer: 1,
      explanation: "Convert all to cm: 45 mm = 4.5 cm; 38 cm = 38 cm; 0.4 m = 40 cm; 0.004 km = 400 cm. In order from shortest to longest: 4.5, 38, 40, 400 — so 45 mm, 38 cm, 0.4 m, 0.004 km."
    },
    {
      id: "c9_q8", topic: "Operations with lengths", type: "mcq",
      question: "Add <strong>1 m 45 cm</strong> and <strong>2 m 80 cm</strong>.",
      options: ["3 m 25 cm", "4 m 25 cm", "3 m 125 cm", "4 m 15 cm"],
      answer: 1,
      explanation: "Add the centimetres: 45 + 80 = 125 cm = 1 m 25 cm carry 1 m. Add the metres: 1 + 2 + 1 = 4 m. Total = 4 m 25 cm."
    },
    {
      id: "c9_q9", topic: "Operations with lengths", type: "mcq",
      question: "Subtract <strong>3 m 40 cm</strong> from <strong>7 m 10 cm</strong>.",
      options: ["4 m 70 cm", "3 m 70 cm", "3 m 30 cm", "4 m 30 cm"],
      answer: 1,
      explanation: "Since 10 cm &lt; 40 cm, borrow 1 m: 7 m 10 cm = 6 m 110 cm. Then 110 − 40 = 70 cm and 6 − 3 = 3 m. The answer is 3 m 70 cm."
    },
    {
      id: "c9_q10", topic: "Operations with lengths", type: "input",
      question: "A ribbon is <strong>5 m 60 cm</strong> long. A piece of <strong>2 m 85 cm</strong> is cut off. How many centimetres of ribbon remain?",
      answer: "275",
      acceptableAnswers: ["275", "275 cm", "2 m 75 cm"],
      explanation: "Convert both to cm: 5 m 60 cm = 560 cm, and 2 m 85 cm = 285 cm. Then 560 − 285 = 275 cm (which equals 2 m 75 cm)."
    },
    {
      id: "c9_q11", topic: "Operations with lengths", type: "mcq",
      question: "A fence has four sections measuring <strong>2.3 m, 1.75 m, 3 m</strong> and <strong>85 cm</strong>. What is the total length of the fence in metres?",
      options: ["7.9 m", "8.1 m", "7.0 m", "8.9 m"],
      answer: 0,
      explanation: "Convert 85 cm to metres: 85 cm = 0.85 m. Then add: 2.3 + 1.75 + 3 + 0.85 = 7.9 m."
    },
    {
      id: "c9_q12", topic: "Perimeter", type: "mcq",
      question: "Find the perimeter of a rectangle with length <strong>12 cm</strong> and width <strong>5 cm</strong>.",
      options: ["17 cm", "60 cm", "34 cm", "24 cm"],
      answer: 2,
      explanation: "Perimeter of a rectangle = 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34 cm."
    },
    {
      id: "c9_q13", topic: "Perimeter", type: "mcq",
      question: "An equilateral triangle has a perimeter of <strong>27 cm</strong>. What is the length of each side?",
      options: ["6 cm", "9 cm", "7 cm", "13.5 cm"],
      answer: 1,
      explanation: "An equilateral triangle has 3 equal sides. Each side = 27 ÷ 3 = 9 cm."
    },
    {
      id: "c9_q14", topic: "Perimeter", type: "input",
      question: "A square has a perimeter of <strong>52 cm</strong>. What is the length of one side in centimetres?",
      answer: "13",
      acceptableAnswers: ["13", "13 cm"],
      explanation: "A square has 4 equal sides. Side length = perimeter ÷ 4 = 52 ÷ 4 = 13 cm."
    },
    {
      id: "c9_q15", topic: "Perimeter", type: "mcq",
      question: "An irregular polygon has sides measuring <strong>4 cm, 7 cm, 5 cm, 9 cm</strong> and <strong>6 cm</strong>. What is its perimeter?",
      options: ["25 cm", "30 cm", "31 cm", "28 cm"],
      answer: 2,
      explanation: "Perimeter is the sum of all sides: 4 + 7 + 5 + 9 + 6 = 31 cm."
    },
    {
      id: "c9_q16", topic: "Perimeter", type: "input",
      question: "A rectangle has a perimeter of <strong>38 cm</strong> and a length of <strong>12 cm</strong>. What is the width of the rectangle in centimetres?",
      answer: "7",
      acceptableAnswers: ["7", "7 cm"],
      explanation: "Perimeter = 2 × (length + width), so 38 = 2 × (12 + width). Dividing both sides by 2: 19 = 12 + width, giving width = 19 − 12 = 7 cm."
    },
    {
      id: "c9_q17", topic: "Scale diagrams", type: "mcq",
      question: "A map has a scale of <strong>1 : 100</strong>. A wall on the map measures <strong>5 cm</strong>. What is the actual length of the wall?",
      options: ["5 m", "50 m", "500 m", "0.5 m"],
      answer: 0,
      explanation: "Scale 1 : 100 means 1 cm on the map represents 100 cm in real life. So 5 × 100 = 500 cm = 5 m."
    },
    {
      id: "c9_q18", topic: "Scale diagrams", type: "mcq",
      question: "On a map with scale <strong>1 : 50,000</strong>, the distance between two towns is <strong>4 cm</strong>. What is the actual distance in kilometres?",
      options: ["2 km", "20 km", "200 km", "0.2 km"],
      answer: 0,
      explanation: "Actual distance = 4 × 50,000 = 200,000 cm. Converting: 200,000 ÷ 100 = 2,000 m, and 2,000 ÷ 1,000 = 2 km."
    },
    {
      id: "c9_q19", topic: "Scale diagrams", type: "input",
      question: "A room is <strong>6 m</strong> long in real life. A scale drawing uses a scale of <strong>1 : 50</strong>. How many centimetres long is the room in the scale drawing?",
      answer: "12",
      acceptableAnswers: ["12", "12 cm"],
      explanation: "Convert 6 m to cm: 6 × 100 = 600 cm. Using scale 1 : 50, the drawing length = 600 ÷ 50 = 12 cm."
    },
    {
      id: "c9_q20", topic: "Scale diagrams", type: "mcq",
      question: "A scale diagram shows a garden path as <strong>3.5 cm</strong> long. The scale is <strong>1 : 200</strong>. What is the actual length of the path in metres?",
      options: ["57 m", "7 m", "700 m", "0.7 m"],
      answer: 1,
      explanation: "Actual length = 3.5 × 200 = 700 cm. Converting to metres: 700 ÷ 100 = 7 m."
    }
  ]
};
