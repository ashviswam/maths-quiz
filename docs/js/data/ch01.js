const ch01 = {
  id: 1,
  title: "Whole Numbers",
  icon: "🔢",
  color: "#6366f1",
  topics: ["Place value", "Number lines", "Big numbers", "Rounding numbers"],
  questions: [
    {
      id: "c1_q1",
      topic: "Place value",
      type: "mcq",
      question: "What is the value of the digit <strong>7</strong> in the number 3,748,215?",
      options: ["7,000", "700,000", "70,000", "7,000,000"],
      answer: 1,
      explanation: "In 3,748,215, reading from right: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands (7), millions. The digit 7 is in the hundred-thousands place, so its value is 7 × 100,000 = 700,000."
    },
    {
      id: "c1_q2",
      topic: "Place value",
      type: "mcq",
      question: "Which digit is in the <strong>ten-thousands</strong> place in 2,564,831?",
      options: ["2", "5", "6", "4"],
      answer: 2,
      explanation: "Counting places from the right in 2,564,831: ones (1), tens (3), hundreds (8), thousands (4), ten-thousands (6), hundred-thousands (5), millions (2). The digit in the ten-thousands place is 6."
    },
    {
      id: "c1_q3",
      topic: "Place value",
      type: "mcq",
      question: "What is the expanded form of <strong>4,306,050</strong>?",
      options: [
        "4,000,000 + 300,000 + 60,000 + 500",
        "4,000,000 + 300,000 + 6,000 + 50",
        "4,000,000 + 306,000 + 50",
        "4,000,000 + 30,000 + 6,000 + 50"
      ],
      answer: 1,
      explanation: "4,306,050 breaks down as: 4 millions = 4,000,000; 3 hundred-thousands = 300,000; 0 ten-thousands; 6 thousands = 6,000; 0 hundreds; 5 tens = 50; 0 ones. So the expanded form is 4,000,000 + 300,000 + 6,000 + 50."
    },
    {
      id: "c1_q4",
      topic: "Place value",
      type: "input",
      question: "Write <em>two million, four hundred and fifty-three thousand, seven hundred and nine</em> in digits.",
      answer: "2453709",
      acceptableAnswers: ["2453709", "2,453,709"],
      explanation: "2,000,000 + 400,000 + 53,000 + 700 + 9 = 2,453,709. Place each part carefully: 2 in the millions, 453 in the thousands group, and 709 in the last three places."
    },
    {
      id: "c1_q5",
      topic: "Place value",
      type: "input",
      question: "What is the value of the digit <strong>8</strong> in the number 1,085,426? Write your answer as a number.",
      answer: "80000",
      acceptableAnswers: ["80000", "80,000"],
      explanation: "In 1,085,426, the digit 8 sits in the ten-thousands place. Its value is 8 × 10,000 = 80,000."
    },
    {
      id: "c1_q6",
      topic: "Place value",
      type: "mcq",
      question: "Which number has a <strong>4</strong> in the hundred-thousands place and a <strong>9</strong> in the tens place?",
      options: ["4,302,091", "2,493,290", "1,493,092", "3,401,094"],
      answer: 2,
      explanation: "In 1,493,092: the hundred-thousands digit is 4 (1,<strong>4</strong>93,092) and the tens digit is 9 (1,493,0<strong>9</strong>2). Both conditions are satisfied, making this the correct answer."
    },
    {
      id: "c1_q7",
      topic: "Number lines",
      type: "mcq",
      question: "On a number line from 0 to 10,000, what number is exactly halfway between <strong>3,000</strong> and <strong>4,000</strong>?",
      options: ["3,400", "3,500", "3,600", "3,050"],
      answer: 1,
      explanation: "The midpoint of two numbers is found by adding them and dividing by 2: (3,000 + 4,000) ÷ 2 = 7,000 ÷ 2 = 3,500."
    },
    {
      id: "c1_q8",
      topic: "Number lines",
      type: "mcq",
      question: "A number line goes from 0 to 10,000 with marks every 1,000. Point P is <strong>two marks past 6,000</strong>. What number does P represent?",
      options: ["6,002", "6,200", "8,000", "6,020"],
      answer: 2,
      explanation: "Each mark on this number line represents 1,000. Starting at 6,000 and moving two marks forward: 6,000 + 2 × 1,000 = 8,000."
    },
    {
      id: "c1_q9",
      topic: "Number lines",
      type: "input",
      question: "A number line from 0 to 10,000 is divided into <strong>10 equal parts</strong>. What is the value of each part? Write your answer as a number.",
      answer: "1000",
      acceptableAnswers: ["1000", "1,000"],
      explanation: "To find the value of each part, divide the total length by the number of parts: 10,000 ÷ 10 = 1,000. Each equal part has a value of 1,000."
    },
    {
      id: "c1_q10",
      topic: "Number lines",
      type: "mcq",
      question: "On a number line, which number is <strong>500 less</strong> than 7,200?",
      options: ["6,700", "7,700", "6,200", "7,150"],
      answer: 0,
      explanation: "Moving 500 units to the left (decreasing) on a number line means subtracting: 7,200 − 500 = 6,700."
    },
    {
      id: "c1_q11",
      topic: "Big numbers",
      type: "mcq",
      question: "How do you write <strong>five million, two hundred thousand and sixty</strong> in digits?",
      options: ["5,200,600", "5,200,060", "5,020,060", "52,000,060"],
      answer: 1,
      explanation: "Five million = 5,000,000; two hundred thousand = 200,000; sixty = 60. Adding: 5,000,000 + 200,000 + 60 = 5,200,060. Note there are no thousands, no hundreds, and no ones."
    },
    {
      id: "c1_q12",
      topic: "Big numbers",
      type: "mcq",
      question: "Which of the following numbers is the <strong>largest</strong>?",
      options: ["987,654", "1,023,456", "999,999", "1,000,001"],
      answer: 1,
      explanation: "987,654 and 999,999 have 6 digits; 1,023,456 and 1,000,001 each have 7 digits and are larger. Comparing the two 7-digit numbers in the ten-thousands place: 1,023,456 has 2 and 1,000,001 has 0, so 1,023,456 is the largest."
    },
    {
      id: "c1_q13",
      topic: "Big numbers",
      type: "input",
      question: "Write the number <strong>3,070,500</strong> in words.",
      answer: "three million, seventy thousand, five hundred",
      acceptableAnswers: [
        "three million, seventy thousand, five hundred",
        "three million seventy thousand five hundred",
        "Three million, seventy thousand, five hundred",
        "Three million seventy thousand five hundred"
      ],
      explanation: "3,070,500 = 3 millions + 70 thousands + 5 hundreds + 0 ones = three million, seventy thousand, five hundred. There are no single thousands or ones."
    },
    {
      id: "c1_q14",
      topic: "Big numbers",
      type: "mcq",
      question: "The distance from Earth to the Moon is approximately <strong>384,400 km</strong>. How do you read this number in words?",
      options: [
        "Thirty-eight thousand, four hundred and forty",
        "Three hundred and eighty-four thousand and four hundred",
        "Three million, eight hundred and forty-four",
        "Three hundred and eight thousand, four hundred"
      ],
      answer: 1,
      explanation: "384,400 has 3 in the hundred-thousands, 8 in the ten-thousands, 4 in the thousands, and 4 in the hundreds: three hundred and eighty-four thousand, four hundred."
    },
    {
      id: "c1_q15",
      topic: "Rounding numbers",
      type: "mcq",
      question: "Round <strong>47,382</strong> to the nearest <strong>1,000</strong>.",
      options: ["47,000", "48,000", "47,400", "50,000"],
      answer: 0,
      explanation: "Look at the hundreds digit (3). Since 3 < 5, round down: keep the thousands digit as 7 and replace the rest with zeros. 47,382 rounded to the nearest 1,000 is 47,000."
    },
    {
      id: "c1_q16",
      topic: "Rounding numbers",
      type: "input",
      question: "Round <strong>83,650</strong> to the nearest <strong>100</strong>. Write your answer as a number.",
      answer: "83700",
      acceptableAnswers: ["83700", "83,700"],
      explanation: "Look at the tens digit (5). Since 5 ≥ 5, round up: increase the hundreds digit from 6 to 7 and replace the rest with zeros. 83,650 rounded to the nearest 100 is 83,700."
    },
    {
      id: "c1_q17",
      topic: "Rounding numbers",
      type: "mcq",
      question: "A school fundraiser collected $<strong>2,364</strong>. Rounded to the nearest <strong>10</strong>, how much did they collect?",
      options: ["$2,300", "$2,360", "$2,370", "$2,400"],
      answer: 1,
      explanation: "Look at the ones digit (4). Since 4 < 5, round down: keep the tens digit as 6 and replace the ones with zero. $2,364 rounded to the nearest 10 is $2,360."
    },
    {
      id: "c1_q18",
      topic: "Rounding numbers",
      type: "input",
      question: "Round <strong>156,749</strong> to the nearest <strong>10,000</strong>. Write your answer as a number.",
      answer: "160000",
      acceptableAnswers: ["160000", "160,000"],
      explanation: "Look at the thousands digit (6). Since 6 ≥ 5, round up: increase the ten-thousands digit from 5 to 6 and replace the rest with zeros. 156,749 rounded to the nearest 10,000 is 160,000."
    },
    {
      id: "c1_q19",
      topic: "Rounding numbers",
      type: "mcq",
      question: "A distance is measured as <strong>34,512 metres</strong>. Which shows it correctly rounded to the nearest <strong>100</strong>?",
      options: ["34,500", "34,600", "35,000", "34,000"],
      answer: 0,
      explanation: "Look at the tens digit (1). Since 1 < 5, round down: keep the hundreds digit as 5 and replace the tens and ones with zeros. 34,512 rounded to the nearest 100 is 34,500."
    },
    {
      id: "c1_q20",
      topic: "Rounding numbers",
      type: "mcq",
      question: "The population of a city is <strong>1,348,276</strong>. Rounded to the nearest <strong>10,000</strong>, what is the population?",
      options: ["1,300,000", "1,350,000", "1,348,000", "1,340,000"],
      answer: 1,
      explanation: "Look at the thousands digit (8). Since 8 ≥ 5, round up: increase the ten-thousands digit from 4 to 5 and replace the rest with zeros. 1,348,276 rounded to the nearest 10,000 is 1,350,000."
    }
  ]
};
