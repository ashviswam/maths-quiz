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
      options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
      answer: 2,
      explanation: "The area of a square = side × side = 4 × 4 = 16 cm². A square is a special rectangle where all sides are equal."
    },
    {
      id: "c10_q3",
      topic: "Area",
      type: "input",
      question: "A floor is covered by a square mat with side length <strong>9 m</strong>. What is the area of the mat in m²?",
      answer: "81",
      acceptableAnswers: ["81", "81 m²", "81m²"],
      explanation: "Area of a square = side × side = 9 × 9 = 81 m²."
    },
    {
      id: "c10_q4",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A rectangle has a length of <strong>8 cm</strong> and a width of <strong>5 cm</strong>. What is its area?",
      options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
      answer: 2,
      explanation: "Area of a rectangle = length × width = 8 × 5 = 40 cm²."
    },
    {
      id: "c10_q5",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A garden is <strong>12 m</strong> long and <strong>7 m</strong> wide. What is the area of the garden?",
      options: ["19 m²", "38 m²", "84 m²", "96 m²"],
      answer: 2,
      explanation: "Area of a rectangle = length × width = 12 × 7 = 84 m²."
    },
    {
      id: "c10_q6",
      topic: "The area of a rectangle",
      type: "input",
      question: "A rectangular photo frame has a length of <strong>15 cm</strong> and a width of <strong>10 cm</strong>. What is the area of the frame in cm²?",
      answer: "150",
      acceptableAnswers: ["150", "150 cm²", "150cm²"],
      explanation: "Area = length × width = 15 × 10 = 150 cm²."
    },
    {
      id: "c10_q7",
      topic: "The area of a rectangle",
      type: "mcq",
      question: "A rectangle has an area of <strong>48 cm²</strong> and a width of <strong>6 cm</strong>. What is its length?",
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
      options: ["30 cm²", "60 cm²", "16 cm²", "120 cm²"],
      answer: 0,
      explanation: "Area of a triangle = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm²."
    },
    {
      id: "c10_q10",
      topic: "The area of a triangle",
      type: "input",
      question: "A triangular sail has a base of <strong>4 m</strong> and a height of <strong>9 m</strong>. What is the area of the sail in m²?",
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
      options: ["1 cm", "1 cm²", "1 cm³", "3 cm³"],
      answer: 2,
      explanation: "Volume = length × width × height = 1 × 1 × 1 = 1 cm³. This unit cube is the basic building block for measuring volume."
    },
    {
      id: "c10_q13",
      topic: "The volume of a rectangular prism",
      type: "mcq",
      question: "A box has a length of <strong>5 cm</strong>, width of <strong>4 cm</strong>, and height of <strong>3 cm</strong>. What is its volume?",
      options: ["12 cm³", "47 cm³", "60 cm³", "80 cm³"],
      answer: 2,
      explanation: "Volume of a rectangular prism = length × width × height = 5 × 4 × 3 = 60 cm³."
    },
    {
      id: "c10_q14",
      topic: "The volume of a rectangular prism",
      type: "mcq",
      question: "A rectangular fish tank is <strong>30 cm</strong> long, <strong>20 cm</strong> wide, and <strong>25 cm</strong> tall. What is its volume?",
      options: ["15,000 cm³", "1,500 cm³", "75 cm³", "600 cm³"],
      answer: 0,
      explanation: "Volume = length × width × height = 30 × 20 × 25 = 15,000 cm³."
    },
    {
      id: "c10_q15",
      topic: "The volume of a rectangular prism",
      type: "input",
      question: "A rectangular box has a length of <strong>6 cm</strong>, width of <strong>5 cm</strong>, and height of <strong>4 cm</strong>. What is the volume in cm³?",
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
    }
  ]
};
