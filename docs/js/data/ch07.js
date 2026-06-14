const ch07 = {
  id: 7,
  title: "Decimals",
  icon: "🔢",
  color: "#8b5cf6",
  topics: ["Decimal numbers","Decimal numbers on a number line","Ordering decimal numbers","Rounding decimal numbers","Converting decimals to fractions","Converting fractions to decimals","Adding and subtracting decimal numbers","Multiplying by powers of 10","Dividing by powers of 10","Multiplying decimals by a whole number","Dividing decimals by a whole number"],
  questions: [
    {
      id: "c7_q1",
      topic: "Decimal numbers",
      type: "mcq",
      question: "What is the value of the digit <strong>4</strong> in the number <strong>3.742</strong>?",
      options: ["4 tenths", "4 hundredths", "4 thousandths", "4 ones"],
      answer: 1,
      explanation: "In 3.742, the digits after the decimal point represent tenths, hundredths, and thousandths. The digit 4 is in the hundredths place, so its value is 4 hundredths (0.04)."
    },
    {
      id: "c7_q2",
      topic: "Decimal numbers",
      type: "mcq",
      question: "Which of the following correctly reads the decimal <strong>0.053</strong>?",
      options: ["Fifty-three tenths", "Five point three", "Fifty-three thousandths", "Five hundredths and three"],
      answer: 2,
      explanation: "0.053 has a zero in the tenths place, a 5 in the hundredths place, and a 3 in the thousandths place. It is read as 'fifty-three thousandths' because 53 × (1/1000) = 0.053."
    },
    {
      id: "c7_q3",
      topic: "Decimal numbers on a number line",
      type: "mcq",
      question: "A number line goes from <strong>0.3</strong> to <strong>0.4</strong> and is divided into 10 equal parts. What decimal does the <strong>7th mark</strong> (counting from 0.3) represent?",
      options: ["0.37", "0.307", "0.73", "0.403"],
      answer: 0,
      explanation: "Each of the 10 equal parts between 0.3 and 0.4 represents 0.01. The 7th mark from 0.3 is 0.3 + 7 × 0.01 = 0.3 + 0.07 = 0.37."
    },
    {
      id: "c7_q4",
      topic: "Decimal numbers on a number line",
      type: "input",
      question: "On a number line, point P is exactly halfway between <strong>1.4</strong> and <strong>1.5</strong>. What decimal does point P represent?",
      answer: "1.45",
      acceptableAnswers: ["1.45"],
      explanation: "The midpoint between 1.4 and 1.5 is found by adding them and dividing by 2: (1.4 + 1.5) ÷ 2 = 2.9 ÷ 2 = 1.45."
    },
    {
      id: "c7_q5",
      topic: "Ordering decimal numbers",
      type: "mcq",
      question: "Which list shows these decimals in order from <strong>smallest to largest</strong>?<br>3.42, 3.4, 3.402, 3.24",
      options: ["3.4, 3.24, 3.402, 3.42", "3.24, 3.4, 3.402, 3.42", "3.24, 3.402, 3.4, 3.42", "3.4, 3.402, 3.24, 3.42"],
      answer: 1,
      explanation: "Compare digit by digit: 3.24 is smallest (2 tenths vs 4 tenths for the others), then 3.4 = 3.400, then 3.402, then 3.42 = 3.420. The correct order is 3.24, 3.4, 3.402, 3.42."
    },
    {
      id: "c7_q6",
      topic: "Ordering decimal numbers",
      type: "mcq",
      question: "Which decimal is the <strong>greatest</strong>?<br>0.6, 0.59, 0.605, 0.61",
      options: ["0.6", "0.59", "0.605", "0.61"],
      answer: 3,
      explanation: "Writing all to three decimal places: 0.600, 0.590, 0.605, 0.610. Comparing hundredths digits: 0.610 has the largest value since 61 hundredths is more than 60 or 59. So 0.61 is the greatest."
    },
    {
      id: "c7_q7",
      topic: "Rounding decimal numbers",
      type: "mcq",
      question: "Round <strong>4.783</strong> to one decimal place.",
      options: ["4.7", "4.8", "4.78", "5.0"],
      answer: 1,
      explanation: "To round to one decimal place, look at the hundredths digit: 8. Since 8 ≥ 5, round up the tenths digit from 7 to 8. So 4.783 ≈ 4.8."
    },
    {
      id: "c7_q8",
      topic: "Rounding decimal numbers",
      type: "input",
      question: "Round <strong>12.345</strong> to two decimal places.",
      answer: "12.35",
      acceptableAnswers: ["12.35"],
      explanation: "To round to two decimal places, look at the thousandths digit: 5. Since 5 ≥ 5, round up the hundredths digit from 4 to 5. So 12.345 ≈ 12.35."
    },
    {
      id: "c7_q9",
      topic: "Converting decimals to fractions",
      type: "mcq",
      question: "Convert <strong>0.35</strong> to a fraction in its simplest form.",
      options: ["35/100", "7/20", "3/5", "7/10"],
      answer: 1,
      explanation: "0.35 = 35/100. Simplify by dividing numerator and denominator by their GCF (5): 35 ÷ 5 = 7 and 100 ÷ 5 = 20. So 0.35 = 7/20."
    },
    {
      id: "c7_q10",
      topic: "Converting decimals to fractions",
      type: "input",
      question: "Convert <strong>0.125</strong> to a fraction in its simplest form. Write your answer using slash notation (e.g. 1/8).",
      answer: "1/8",
      acceptableAnswers: ["1/8", "125/1000"],
      explanation: "0.125 = 125/1000. Divide both by their GCF (125): 125 ÷ 125 = 1 and 1000 ÷ 125 = 8. So 0.125 = 1/8."
    },
    {
      id: "c7_q11",
      topic: "Converting fractions to decimals",
      type: "mcq",
      question: "Convert <strong>3/8</strong> to a decimal by dividing.",
      options: ["0.325", "0.375", "0.38", "0.385"],
      answer: 1,
      explanation: "Divide 3 by 8: 3.000 ÷ 8 = 0.375. You can check: 0.375 × 8 = 3. So 3/8 = 0.375."
    },
    {
      id: "c7_q12",
      topic: "Converting fractions to decimals",
      type: "input",
      question: "Convert <strong>7/4</strong> to a decimal.",
      answer: "1.75",
      acceptableAnswers: ["1.75"],
      explanation: "Divide 7 by 4: 7 ÷ 4 = 1 remainder 3, then 30 ÷ 4 = 7 remainder 2, then 20 ÷ 4 = 5. So 7/4 = 1.75."
    },
    {
      id: "c7_q13",
      topic: "Adding and subtracting decimal numbers",
      type: "mcq",
      question: "Calculate <strong>12.6 + 4.85</strong>.",
      options: ["16.45", "17.45", "16.85", "17.35"],
      answer: 1,
      explanation: "Align the decimal points: 12.60 + 4.85. Hundredths: 0 + 5 = 5. Tenths: 6 + 8 = 14, write 4 carry 1. Ones: 2 + 4 + 1 = 7. Tens: 1. Result = 17.45."
    },
    {
      id: "c7_q14",
      topic: "Adding and subtracting decimal numbers",
      type: "input",
      question: "Calculate <strong>9.3 − 4.75</strong>.",
      answer: "4.55",
      acceptableAnswers: ["4.55"],
      explanation: "Write 9.3 as 9.30 to align decimal places. Hundredths: 0 − 5, borrow to get 10 − 5 = 5. Tenths: 2 − 7 (after borrowing), borrow to get 12 − 7 = 5. Ones: 8 − 4 = 4. Result = 4.55."
    },
    {
      id: "c7_q15",
      topic: "Multiplying by powers of 10",
      type: "mcq",
      question: "Calculate <strong>3.47 × 100</strong>.",
      options: ["347", "34.7", "0.347", "3470"],
      answer: 0,
      explanation: "Multiplying by 100 moves the decimal point 2 places to the right. 3.47 × 100 = 347. The decimal shifts: 3.47 → 34.7 → 347."
    },
    {
      id: "c7_q16",
      topic: "Dividing by powers of 10",
      type: "mcq",
      question: "Calculate <strong>56.8 ÷ 1000</strong>.",
      options: ["5680", "5.68", "0.568", "0.0568"],
      answer: 3,
      explanation: "Dividing by 1000 moves the decimal point 3 places to the left. 56.8 ÷ 1000 = 0.0568. The decimal shifts: 56.8 → 5.68 → 0.568 → 0.0568."
    },
    {
      id: "c7_q17",
      topic: "Dividing by powers of 10",
      type: "mcq",
      question: "A strip of paper is <strong>7200 mm</strong> long. Divide by 1000 to convert to metres. What is the length in metres?",
      options: ["72 m", "720 m", "7.2 m", "0.72 m"],
      answer: 2,
      explanation: "Dividing by 1000 moves the decimal point 3 places to the left. 7200 ÷ 1000 = 7.2. So 7200 mm = 7.2 m."
    },
    {
      id: "c7_q18",
      topic: "Multiplying by powers of 10",
      type: "mcq",
      question: "Calculate <strong>0.056 × 1000</strong>.",
      options: ["0.56", "5.6", "56", "560"],
      answer: 2,
      explanation: "Multiplying by 1000 moves the decimal point 3 places to the right. 0.056 × 1000 = 56. The decimal shifts: 0.056 → 0.56 → 5.6 → 56."
    },
    {
      id: "c7_q19",
      topic: "Multiplying decimals by a whole number",
      type: "mcq",
      question: "Calculate <strong>2.34 × 6</strong>.",
      options: ["12.04", "14.04", "13.04", "14.4"],
      answer: 1,
      explanation: "Multiply as whole numbers: 234 × 6 = 1404. The original number has 2 decimal places, so place the decimal point 2 places from the right: 14.04."
    },
    {
      id: "c7_q20",
      topic: "Dividing decimals by a whole number",
      type: "mcq",
      question: "Calculate <strong>9.6 ÷ 4</strong>.",
      options: ["0.24", "2.4", "24", "2.04"],
      answer: 1,
      explanation: "Divide keeping the decimal point in place: 8 ÷ 4 = 2 for the ones, and 1.6 ÷ 4 = 0.4 for the rest. So 9.6 ÷ 4 = 2.4. Check: 2.4 × 4 = 9.6."
    }
  ]
};
