const ch08 = {
  id: 8,
  title: "Measurement: Introduction",
  icon: "📏",
  color: "#2E86AB",
  topics: ["Units", "Reading scales", "Mass"],
  questions: [
    {
      id: "c8_q1",
      topic: "Units",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the length of a swimming pool?",
      options: ["millimetres (mm)", "centimetres (cm)", "metres (m)", "kilometres (km)"],
      answer: 2,
      explanation: "A standard swimming pool is about 25–50 m long, so metres is the most appropriate unit. Millimetres and centimetres are too small, and kilometres are too large."
    },
    {
      id: "c8_q2",
      topic: "Units",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the distance from London to Paris?",
      options: ["millimetres (mm)", "centimetres (cm)", "metres (m)", "kilometres (km)"],
      answer: 3,
      explanation: "Large distances between cities are measured in kilometres. The distance from London to Paris is about 340 km."
    },
    {
      id: "c8_q3",
      topic: "Units",
      type: "mcq",
      question: "How many centimetres are in 1 metre?",
      options: ["10", "100", "1000", "10 000"],
      answer: 1,
      explanation: "The prefix <em>centi-</em> means one hundredth, so 1 m = 100 cm. This is a key metric conversion to remember."
    },
    {
      id: "c8_q4",
      topic: "Units",
      type: "mcq",
      question: "Convert 3.5 km into metres.",
      options: ["35 m", "350 m", "3500 m", "35 000 m"],
      answer: 2,
      explanation: "To convert km to m, multiply by 1000. So 3.5 × 1000 = 3500 m."
    },
    {
      id: "c8_q5",
      topic: "Units",
      type: "input",
      question: "Convert <strong>4.7 km</strong> to metres. Write only the number.",
      answer: "4700",
      acceptableAnswers: ["4700", "4,700"],
      explanation: "To convert kilometres to metres, multiply by 1000. So 4.7 × 1000 = 4700 m."
    },
    {
      id: "c8_q6",
      topic: "Units",
      type: "mcq",
      question: "Which unit is most appropriate for measuring the capacity of a teaspoon of medicine?",
      options: ["litres (L)", "millilitres (mL)", "kilometres (km)", "kilograms (kg)"],
      answer: 1,
      explanation: "A teaspoon holds about 5 mL, so millilitres is the most appropriate unit. Litres would be far too large for such a small volume."
    },
    {
      id: "c8_q7",
      topic: "Units",
      type: "input",
      question: "Convert <strong>2500 mL</strong> to litres. Write only the number.",
      answer: "2.5",
      acceptableAnswers: ["2.5"],
      explanation: "To convert millilitres to litres, divide by 1000. So 2500 ÷ 1000 = 2.5 L."
    },
    {
      id: "c8_q8",
      topic: "Reading scales",
      type: "mcq",
      question: "A ruler shows markings at 0 cm, 1 cm, 2 cm, and so on. There are <strong>10 small divisions</strong> between each centimetre. What length does each small division represent?",
      options: ["1 mm", "2 mm", "5 mm", "10 mm"],
      answer: 0,
      explanation: "There are 10 divisions in each centimetre, and 1 cm = 10 mm, so each small division is 10 ÷ 10 = 1 mm."
    },
    {
      id: "c8_q9",
      topic: "Reading scales",
      type: "mcq",
      question: "A thermometer scale goes from 0°C to 50°C. The markings are at every 10°C, with <strong>5 equal divisions</strong> between each pair of markings. The mercury reaches the 3rd small mark above 20°C. What is the temperature?",
      options: ["23°C", "24°C", "26°C", "28°C"],
      answer: 2,
      explanation: "Each division between 10°C markings represents 10 ÷ 5 = 2°C. Three divisions above 20°C means 20 + 3 × 2 = 26°C."
    },
    {
      id: "c8_q10",
      topic: "Reading scales",
      type: "mcq",
      question: "A measuring jug has markings at 0 mL, 100 mL, 200 mL, 300 mL, 400 mL, and 500 mL, with <strong>5 equal divisions</strong> between each 100 mL mark. The water level is at the 2nd small mark above 200 mL. How much water is in the jug?",
      options: ["210 mL", "220 mL", "240 mL", "250 mL"],
      answer: 2,
      explanation: "Each small division represents 100 ÷ 5 = 20 mL. Two divisions above 200 mL gives 200 + 2 × 20 = 240 mL."
    },
    {
      id: "c8_q11",
      topic: "Reading scales",
      type: "input",
      question: "A ruler has markings at every centimetre, with <strong>10 small divisions</strong> between each centimetre mark. A pencil reaches the <strong>4th small mark after 7 cm</strong>. What is the length of the pencil in centimetres? Write your answer as a decimal (e.g. 7.4).",
      answer: "7.4",
      acceptableAnswers: ["7.4"],
      explanation: "Each small division is 1 mm = 0.1 cm. Four divisions past 7 cm gives 7 + 4 × 0.1 = 7.4 cm."
    },
    {
      id: "c8_q12",
      topic: "Reading scales",
      type: "mcq",
      question: "A weighing scale has markings at 0 kg, 1 kg, 2 kg, 3 kg, 4 kg, and 5 kg. There are <strong>4 equal divisions</strong> between each kilogram mark. The pointer is at the 3rd small mark after 2 kg. What is the mass shown?",
      options: ["2.3 kg", "2.5 kg", "2.6 kg", "2.75 kg"],
      answer: 3,
      explanation: "With 4 divisions per kilogram, each division = 1 ÷ 4 = 0.25 kg. Three divisions after 2 kg gives 2 + 3 × 0.25 = 2.75 kg."
    },
    {
      id: "c8_q13",
      topic: "Mass",
      type: "mcq",
      question: "How many grams are in 1 kilogram?",
      options: ["10 g", "100 g", "1000 g", "10 000 g"],
      answer: 2,
      explanation: "The prefix <em>kilo-</em> means one thousand, so 1 kg = 1000 g. This is an essential metric conversion for mass."
    },
    {
      id: "c8_q14",
      topic: "Mass",
      type: "mcq",
      question: "A bag of flour has a mass of 2.35 kg. What is this mass in grams?",
      options: ["23.5 g", "235 g", "2350 g", "23 500 g"],
      answer: 2,
      explanation: "To convert kilograms to grams, multiply by 1000. So 2.35 × 1000 = 2350 g."
    },
    {
      id: "c8_q15",
      topic: "Mass",
      type: "input",
      question: "A tablet of medicine has a mass of <strong>500 mg</strong>. Convert this mass to grams. Write only the number.",
      answer: "0.5",
      acceptableAnswers: ["0.5"],
      explanation: "To convert milligrams to grams, divide by 1000. So 500 ÷ 1000 = 0.5 g."
    },
    {
      id: "c8_q16",
      topic: "Mass",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the mass of a grain of rice?",
      options: ["kilograms (kg)", "grams (g)", "milligrams (mg)", "tonnes (t)"],
      answer: 2,
      explanation: "A grain of rice has a mass of about 25–30 mg, so milligrams is the most appropriate unit. Grams and kilograms would be far too large."
    },
    {
      id: "c8_q17",
      topic: "Mass",
      type: "input",
      question: "Convert <strong>3.75 kg</strong> to grams. Write only the number.",
      answer: "3750",
      acceptableAnswers: ["3750", "3,750"],
      explanation: "To convert kilograms to grams, multiply by 1000. So 3.75 × 1000 = 3750 g."
    },
    {
      id: "c8_q18",
      topic: "Units",
      type: "mcq",
      question: "A student measures the thickness of a coin. Which unit is most appropriate?",
      options: ["kilometres (km)", "metres (m)", "centimetres (cm)", "millimetres (mm)"],
      answer: 3,
      explanation: "A coin is about 1–3 mm thick, so millimetres is the most appropriate unit. Centimetres would still work but millimetres gives a more precise and natural measurement."
    },
    {
      id: "c8_q19",
      topic: "Reading scales",
      type: "mcq",
      question: "A thermometer reads –5°C at the bottom marking and 5°C at the top marking. There are <strong>10 equal divisions</strong> between these two markings. Which temperature does the 7th mark from the bottom represent?",
      options: ["–5°C", "0°C", "2°C", "3°C"],
      answer: 2,
      explanation: "The range is –5°C to 5°C, which is 10°C total. Each of the 10 divisions = 1°C. Starting at –5°C, the 7th mark is –5 + 7 = 2°C."
    },
    {
      id: "c8_q20",
      topic: "Mass",
      type: "mcq",
      question: "A recipe calls for 750 g of sugar. How many kilograms is this?",
      options: ["7.5 kg", "0.75 kg", "75 kg", "0.075 kg"],
      answer: 1,
      explanation: "To convert grams to kilograms, divide by 1000. So 750 ÷ 1000 = 0.75 kg."
    }
  ]
};
