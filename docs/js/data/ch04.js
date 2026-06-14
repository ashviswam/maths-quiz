const ch04 = {
  id: 4,
  title: "Number Properties",
  icon: "🔢",
  color: "#10b981",
  topics: ["Zero and one","Square numbers","Cubic numbers","Divisibility","Divisibility tests","Factors","Prime and composite numbers","Highest common factor","Multiples"],
  questions: [
    {
      id: "c4_q1",
      topic: "Zero and one",
      type: "mcq",
      question: "Which of the following statements about the number <strong>1</strong> is correct?",
      options: ["1 is a prime number", "1 is a composite number", "1 is neither prime nor composite", "1 is both prime and composite"],
      answer: 2,
      explanation: "The number 1 is neither prime nor composite. A prime number must have exactly two factors (1 and itself), but 1 has only one factor — itself."
    },
    {
      id: "c4_q2",
      topic: "Zero and one",
      type: "input",
      question: "What is the result of 847 × 0?",
      answer: "0",
      acceptableAnswers: ["0"],
      explanation: "Any number multiplied by zero equals zero. This is the zero property of multiplication — it applies to every number, no matter how large."
    },
    {
      id: "c4_q3",
      topic: "Square numbers",
      type: "mcq",
      question: "Which of the following is a square number?",
      options: ["18", "50", "64", "72"],
      answer: 2,
      explanation: "64 is a square number because 8 × 8 = 64. The others (18, 50, 72) are not perfect squares."
    },
    {
      id: "c4_q4",
      topic: "Square numbers",
      type: "input",
      question: "What is 9<sup>2</sup> (nine squared)?",
      answer: "81",
      acceptableAnswers: ["81"],
      explanation: "9 squared means 9 × 9 = 81. Square numbers are found by multiplying a whole number by itself."
    },
    {
      id: "c4_q5",
      topic: "Square numbers",
      type: "mcq",
      question: "How many square numbers are there between 1 and 100 (including 1 and 100)?",
      options: ["8", "9", "10", "11"],
      answer: 2,
      explanation: "The square numbers from 1 to 100 are: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 — that is 10 square numbers."
    },
    {
      id: "c4_q6",
      topic: "Cubic numbers",
      type: "mcq",
      question: "What is 3<sup>3</sup> (three cubed)?",
      options: ["6", "9", "18", "27"],
      answer: 3,
      explanation: "3 cubed means 3 × 3 × 3 = 27. Cubic numbers are found by multiplying a whole number by itself three times."
    },
    {
      id: "c4_q7",
      topic: "Cubic numbers",
      type: "input",
      question: "What is the value of 5<sup>3</sup> (five cubed)?",
      answer: "125",
      acceptableAnswers: ["125"],
      explanation: "5 cubed means 5 × 5 × 5 = 25 × 5 = 125. The first five cubic numbers are 1, 8, 27, 64, and 125."
    },
    {
      id: "c4_q8",
      topic: "Divisibility",
      type: "mcq",
      question: "Which of the following numbers is <strong>divisible by 6</strong>?",
      options: ["22", "34", "48", "56"],
      answer: 2,
      explanation: "A number is divisible by 6 if it is divisible by both 2 and 3. 48 is even (divisible by 2) and its digits sum to 12 (divisible by 3), so 48 ÷ 6 = 8."
    },
    {
      id: "c4_q9",
      topic: "Divisibility tests",
      type: "mcq",
      question: "What is the divisibility rule for <strong>9</strong>?",
      options: [
        "The number ends in 0 or 9",
        "The sum of the digits is divisible by 9",
        "The last two digits form a number divisible by 9",
        "The number is divisible by 3 and 6"
      ],
      answer: 1,
      explanation: "A number is divisible by 9 if the sum of its digits is divisible by 9. For example, 153: 1 + 5 + 3 = 9, which is divisible by 9, so 153 is divisible by 9."
    },
    {
      id: "c4_q10",
      topic: "Divisibility tests",
      type: "mcq",
      question: "Using divisibility tests, which of the following numbers is divisible by <strong>4</strong>?",
      options: ["314", "322", "336", "350"],
      answer: 2,
      explanation: "A number is divisible by 4 if its last two digits form a number divisible by 4. The last two digits of 336 are 36, and 36 ÷ 4 = 9, so 336 is divisible by 4."
    },
    {
      id: "c4_q11",
      topic: "Factors",
      type: "input",
      question: "How many factors does the number <strong>36</strong> have?",
      answer: "9",
      acceptableAnswers: ["9"],
      explanation: "The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36 — that is 9 factors. Since 36 is a perfect square (6 × 6), it has an odd number of factors."
    },
    {
      id: "c4_q12",
      topic: "Factors",
      type: "mcq",
      question: "Which list shows <strong>all</strong> the factors of 24?",
      options: [
        "1, 2, 3, 4, 6, 8, 24",
        "1, 2, 3, 4, 6, 8, 12, 24",
        "1, 2, 4, 6, 8, 12, 24",
        "2, 3, 4, 6, 8, 12"
      ],
      answer: 1,
      explanation: "The factors of 24 are all numbers that divide into 24 exactly: 1, 2, 3, 4, 6, 8, 12, and 24. That gives 8 factors in total."
    },
    {
      id: "c4_q13",
      topic: "Prime and composite numbers",
      type: "mcq",
      question: "Which of the following is a <strong>prime number</strong>?",
      options: ["27", "33", "41", "49"],
      answer: 2,
      explanation: "41 is a prime number — it can only be divided exactly by 1 and 41. The others are composite: 27 = 3 × 9, 33 = 3 × 11, and 49 = 7 × 7."
    },
    {
      id: "c4_q14",
      topic: "Prime and composite numbers",
      type: "input",
      question: "Write the prime factorisation of <strong>60</strong> using multiplication (e.g. write your answer as 2x2x3x5).",
      answer: "2x2x3x5",
      acceptableAnswers: ["2x2x3x5", "2×2×3×5", "2*2*3*5", "2 x 2 x 3 x 5", "2 × 2 × 3 × 5"],
      explanation: "60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. All factors in the prime factorisation must be prime numbers."
    },
    {
      id: "c4_q15",
      topic: "Highest common factor",
      type: "mcq",
      question: "What is the <strong>Highest Common Factor (HCF)</strong> of 24 and 36?",
      options: ["4", "6", "12", "18"],
      answer: 2,
      explanation: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24 and the factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. The largest factor in common is 12."
    },
    {
      id: "c4_q16",
      topic: "Highest common factor",
      type: "input",
      question: "Find the <strong>HCF</strong> of 18 and 30.",
      answer: "6",
      acceptableAnswers: ["6"],
      explanation: "The factors of 18 are 1, 2, 3, 6, 9, 18 and the factors of 30 are 1, 2, 3, 5, 6, 10, 15, 30. The highest common factor is 6."
    },
    {
      id: "c4_q17",
      topic: "Multiples",
      type: "mcq",
      question: "What is the <strong>Lowest Common Multiple (LCM)</strong> of 4 and 6?",
      options: ["8", "12", "18", "24"],
      answer: 1,
      explanation: "Multiples of 4: 4, 8, 12, 16, 20... Multiples of 6: 6, 12, 18, 24... The smallest number in both lists is 12, so the LCM of 4 and 6 is 12."
    },
    {
      id: "c4_q18",
      topic: "Multiples",
      type: "mcq",
      question: "Which of the following numbers is a multiple of both <strong>3</strong> and <strong>5</strong>?",
      options: ["20", "25", "35", "45"],
      answer: 3,
      explanation: "A multiple of both 3 and 5 must be a multiple of 15. 45 = 15 × 3, so 45 is in both the 3 times table and the 5 times table."
    },
    {
      id: "c4_q19",
      topic: "Divisibility tests",
      type: "mcq",
      question: "Is the number <strong>7,350</strong> divisible by <strong>5</strong>?",
      options: ["No, because it is not even", "Yes, because the digit sum is divisible by 5", "Yes, because the last digit is 0", "No, because 7 + 3 + 5 + 0 is not divisible by 5"],
      answer: 2,
      explanation: "A number is divisible by 5 if it ends in 0 or 5. Since 7,350 ends in 0, it is divisible by 5. 7,350 ÷ 5 = 1,470."
    },
    {
      id: "c4_q20",
      topic: "Square numbers",
      type: "mcq",
      question: "A square patio is made of <strong>49</strong> identical square tiles arranged in a square grid. How many tiles are along <strong>one side</strong>?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      explanation: "If the total number of tiles is 49 and they are arranged in a square, we need to find the square root of 49. Since 7 × 7 = 49, there are 7 tiles along each side."
    }
  ]
};
