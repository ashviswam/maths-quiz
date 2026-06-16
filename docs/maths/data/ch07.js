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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0.3 to 0.4 divided into 10 equal parts with the 7th mark highlighted">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main number line -->
  <line x1="30" y1="40" x2="350" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Left arrow -->
  <polygon points="22,40 30,36 30,44" fill="#64748b"/>
  <!-- Right arrow -->
  <polygon points="358,40 350,36 350,44" fill="#64748b"/>
  <!-- Tick marks at i=0 to 10, x = 30 + i*32 -->
  <!-- i=0: x=30 (0.3) -->
  <line x1="30" y1="33" x2="30" y2="47" stroke="#64748b" stroke-width="1.5"/>
  <text x="30" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">0.3</text>
  <!-- i=1: x=62 -->
  <line x1="62" y1="36" x2="62" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=2: x=94 -->
  <line x1="94" y1="36" x2="94" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=3: x=126 -->
  <line x1="126" y1="36" x2="126" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=4: x=158 -->
  <line x1="158" y1="36" x2="158" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=5: x=190 (midpoint 0.35) -->
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="1.2"/>
  <text x="190" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">0.35</text>
  <!-- i=6: x=222 -->
  <line x1="222" y1="36" x2="222" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=7: x=254 (7th mark = 0.37) HIGHLIGHTED -->
  <line x1="254" y1="33" x2="254" y2="47" stroke="#f43f5e" stroke-width="2"/>
  <circle cx="254" cy="40" r="5" fill="#f43f5e"/>
  <text x="254" y="22" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">?</text>
  <!-- i=8: x=286 -->
  <line x1="286" y1="36" x2="286" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=9: x=318 -->
  <line x1="318" y1="36" x2="318" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- i=10: x=350 (0.4) -->
  <line x1="350" y1="33" x2="350" y2="47" stroke="#64748b" stroke-width="1.5"/>
  <text x="350" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">0.4</text>
</svg>`,
      options: ["0.37", "0.307", "0.73", "0.403"],
      answer: 0,
      explanation: "Each of the 10 equal parts between 0.3 and 0.4 represents 0.01. The 7th mark from 0.3 is 0.3 + 7 × 0.01 = 0.3 + 0.07 = 0.37."
    },
    {
      id: "c7_q4",
      topic: "Decimal numbers on a number line",
      type: "input",
      question: "On a number line, point P is exactly halfway between <strong>1.4</strong> and <strong>1.5</strong>. What decimal does point P represent?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 1.4 to 1.5 with point P marked at the midpoint">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main number line -->
  <line x1="30" y1="40" x2="350" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Left arrow -->
  <polygon points="22,40 30,36 30,44" fill="#64748b"/>
  <!-- Right arrow -->
  <polygon points="358,40 350,36 350,44" fill="#64748b"/>
  <!-- Left endpoint 1.4 at x=30 -->
  <line x1="30" y1="33" x2="30" y2="47" stroke="#64748b" stroke-width="1.5"/>
  <text x="30" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">1.4</text>
  <!-- Right endpoint 1.5 at x=350 -->
  <line x1="350" y1="33" x2="350" y2="47" stroke="#64748b" stroke-width="1.5"/>
  <text x="350" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">1.5</text>
  <!-- Midpoint P at x=190 -->
  <line x1="190" y1="33" x2="190" y2="47" stroke="#5b5ef4" stroke-width="2"/>
  <circle cx="190" cy="40" r="5" fill="#5b5ef4"/>
  <text x="190" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">P</text>
  <!-- Brace arrows indicating halves -->
  <line x1="30" y1="53" x2="188" y2="53" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="192" y1="53" x2="350" y2="53" stroke="#5b5ef4" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`,
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
    },

    // ── NEW QUESTIONS START HERE ──────────────────────────────────────────

    // Rounding to the nearest whole number
    {
      id: "c7_q21",
      topic: "Rounding decimal numbers",
      type: "mcq",
      question: "Round <strong>7.49</strong> to the nearest whole number.",
      options: ["7", "8", "7.5", "7.4"],
      answer: 0,
      explanation: "To round to the nearest whole number, look at the tenths digit: 4. Since 4 < 5, keep the ones digit as 7. So 7.49 rounds down to 7. Remember: only the very next digit after where you are rounding tells you whether to round up or down."
    },
    {
      id: "c7_q22",
      topic: "Rounding decimal numbers",
      type: "input",
      question: "A runner completes a race in <strong>23.851</strong> seconds. Round this time to the nearest whole second.",
      answer: "24",
      acceptableAnswers: ["24", "24 seconds", "24s"],
      explanation: "Look at the tenths digit of 23.851, which is 8. Since 8 ≥ 5, round up the ones digit from 3 to 4. So 23.851 ≈ 24 seconds."
    },

    // Reading and writing decimals (place value — third question)
    {
      id: "c7_q23",
      topic: "Decimal numbers",
      type: "mcq",
      question: "What is the value of the digit <strong>9</strong> in the number <strong>5.097</strong>?",
      options: ["9 ones", "9 tenths", "9 hundredths", "9 thousandths"],
      answer: 2,
      explanation: "In 5.097, the digits after the decimal point occupy tenths, hundredths, and thousandths positions. The 0 is in the tenths place, the 9 is in the hundredths place, and the 7 is in the thousandths place. So 9 is worth 9 hundredths (0.09)."
    },

    // Multiplying decimals by a whole number — extra question
    {
      id: "c7_q24",
      topic: "Multiplying decimals by a whole number",
      type: "input",
      question: "A chocolate bar costs <strong>£1.35</strong>. How much do <strong>7</strong> chocolate bars cost in total?",
      answer: "9.45",
      acceptableAnswers: ["9.45", "£9.45", "9.45 pounds"],
      explanation: "Multiply 1.35 × 7. First ignore the decimal: 135 × 7 = 945. The original number has 2 decimal places, so place the decimal point 2 places from the right: 9.45. So 7 chocolate bars cost £9.45."
    },
    {
      id: "c7_q25",
      topic: "Multiplying decimals by a whole number",
      type: "mcq",
      question: "Calculate <strong>0.08 × 9</strong>.",
      options: ["0.72", "7.2", "0.072", "72"],
      answer: 0,
      explanation: "Multiply as whole numbers: 8 × 9 = 72. The original number 0.08 has 2 decimal places, so place the decimal point 2 places from the right: 0.72. So 0.08 × 9 = 0.72."
    },

    // Dividing decimals by a whole number — extra questions
    {
      id: "c7_q26",
      topic: "Dividing decimals by a whole number",
      type: "input",
      question: "Four friends share a ribbon that is <strong>3.6 m</strong> long equally. How many metres does each person get?",
      answer: "0.9",
      acceptableAnswers: ["0.9", "0.9 m", "0.9 metres"],
      explanation: "Divide 3.6 ÷ 4. Keep the decimal point in place: 3 ÷ 4 = 0 remainder 3, so bring down to get 36 ÷ 4 = 9 tenths = 0.9. Each person gets 0.9 m. Check: 0.9 × 4 = 3.6. ✓"
    },
    {
      id: "c7_q27",
      topic: "Dividing decimals by a whole number",
      type: "mcq",
      question: "Calculate <strong>8.55 ÷ 5</strong>.",
      options: ["1.71", "1.7", "17.1", "0.171"],
      answer: 0,
      explanation: "Divide 8.55 ÷ 5 keeping the decimal point aligned. 8 ÷ 5 = 1 remainder 3. Bring down 5: 35 ÷ 5 = 7. Bring down 5: 5 ÷ 5 = 1. So 8.55 ÷ 5 = 1.71. Check: 1.71 × 5 = 8.55. ✓"
    },

    // Multiplying a decimal by a decimal

    // Dividing a decimal by a decimal

    // Terminating vs recurring decimals

    // Ordering a mixture of fractions and decimals
    {
      id: "c7_q37",
      topic: "Ordering decimal numbers",
      type: "mcq",
      question: "Place these values in order from <strong>smallest to largest</strong>:<br>0.6, <sup>3</sup>&frasl;<sub>4</sub>, 0.08, <sup>1</sup>&frasl;<sub>2</sub>",
      options: [
        "0.08, 0.6, 1/2, 3/4",
        "0.08, 1/2, 0.6, 3/4",
        "0.08, 1/2, 3/4, 0.6",
        "1/2, 0.08, 0.6, 3/4"
      ],
      answer: 1,
      explanation: "Convert fractions to decimals: 3/4 = 0.75 and 1/2 = 0.5. Now compare: 0.08, 0.5, 0.6, 0.75. In order: 0.08, 0.5 (= 1/2), 0.6, 0.75 (= 3/4). Great thinking to convert everything to the same format first!"
    },

    // Significant figures

    // Adding decimals word problem (extra)
    {
      id: "c7_q40",
      topic: "Adding and subtracting decimal numbers",
      type: "input",
      question: "Pragathy buys a book for <strong>£6.99</strong>, a pen for <strong>£1.25</strong>, and a ruler for <strong>£0.80</strong>. How much does she spend in total?",
      answer: "9.04",
      acceptableAnswers: ["9.04", "£9.04", "9.04 pounds"],
      explanation: "Add the three amounts in a column, aligning decimal points:<br>  6.99<br>  1.25<br>+ 0.80<br>────<br>Hundredths: 9 + 5 + 0 = 14, write 4 carry 1.<br>Tenths: 9 + 2 + 8 + 1 = 20, write 0 carry 2.<br>Ones: 6 + 1 + 0 + 2 = 9.<br>Total = £9.04."
    },

    // ── CHALLENGING QUESTIONS ─────────────────────────────────────────────

    {
      id: "c7_q41",
      topic: "Rounding decimal numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "A number is rounded to <strong>1 decimal place</strong> and the result is <strong>3.7</strong>. Which of the following could <strong>not</strong> be the original number?",
      options: ["3.65", "3.74", "3.75", "3.69"],
      answer: 2,
      explanation: "When a number rounds to 3.7 (to 1 d.p.), the original must be in the range 3.65 ≤ x < 3.75. Let's check each: 3.65 → rounds to 3.7 ✓; 3.74 → rounds to 3.7 ✓; 3.75 → rounds to 3.8 (since 5 rounds up) ✗; 3.69 → rounds to 3.7 ✓. So 3.75 could NOT round to 3.7 — it rounds up to 3.8."
    },
    {
      id: "c7_q42",
      topic: "Ordering decimal numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "Which of the following decimals, when placed in order from smallest to largest, is in the <strong>correct</strong> position as the <strong>second smallest</strong>?<br>0.502, 0.52, 0.5, 0.052",
      options: ["0.052", "0.5", "0.502", "0.52"],
      answer: 1,
      explanation: "First convert all to the same number of decimal places: 0.502, 0.520, 0.500, 0.052. Now compare: 0.052 is smallest (only 5 hundredths), then 0.500, then 0.502, then 0.520. The correct order is 0.052, 0.5, 0.502, 0.52 — so the second smallest is 0.5."
    },
    {
      id: "c7_q44",
      topic: "Adding and subtracting decimal numbers",
      difficulty: "challenging",
      type: "input",
      question: "Mia has <strong>£20.00</strong>. She buys three items costing <strong>£6.49</strong>, <strong>£8.75</strong>, and <strong>£3.30</strong>. How much change does she receive?",
      answer: "1.46",
      acceptableAnswers: ["1.46", "£1.46", "1.46 pounds"],
      explanation: "Step 1 — add the three prices:<br>  6.49 + 8.75 + 3.30<br>Hundredths: 9 + 5 + 0 = 14, write 4 carry 1.<br>Tenths: 4 + 7 + 3 + 1 = 15, write 5 carry 1.<br>Ones: 6 + 8 + 3 + 1 = 18, write 8 carry 1.<br>Tens: 0 + 0 + 0 + 1 = 1.<br>Total spent = £18.54.<br><br>Step 2 — subtract from £20.00:<br>20.00 − 18.54 = 1.46.<br><br>Mia receives £1.46 change."
    },

    // c7_q46 — Identify which two whole numbers a decimal lies between (Section A, Ex 7A Q3)
    {
      id: "c7_q46",
      topic: "Decimal numbers",
      type: "mcq",
      question: "Between which two consecutive whole numbers does <strong>19.76</strong> lie?",
      options: ["18 and 19", "19 and 20", "20 and 21", "17 and 20"],
      answer: 1,
      explanation: "The whole number part of 19.76 is 19, and the decimal part 0.76 is between 0 and 1. So 19.76 lies between 19 and 20. A quick check: 19 < 19.76 < 20. ✓"
    },

    // c7_q47 — State number of decimal places (Section A, Ex 7A Q4)
    {
      id: "c7_q47",
      topic: "Decimal numbers",
      type: "mcq",
      question: "How many decimal places does the number <strong>57.813</strong> have?",
      options: ["1", "2", "3", "5"],
      answer: 2,
      explanation: "The number of decimal places is the number of digits written after the decimal point. In 57.813, the digits after the decimal point are 8, 1, and 3 — that is 3 digits. So 57.813 has 3 decimal places."
    },

    // c7_q48 — Write decimal in expanded form (Section A, Ex 7A Q9)
    {
      id: "c7_q48",
      topic: "Decimal numbers",
      type: "mcq",
      question: "Which of the following is the <strong>expanded form</strong> of <strong>3.072</strong>?",
      options: [
        "3 + 0/10 + 7/100 + 2/1000",
        "3 + 7/10 + 2/100",
        "3 + 7/100 + 2/1000",
        "3 + 0/10 + 7/1000 + 2/100"
      ],
      answer: 2,
      explanation: "In 3.072: the 3 is in the units place, 0 is in the tenths place (worth 0/10 = 0, so we skip it), 7 is in the hundredths place (7/100), and 2 is in the thousandths place (2/1000). The expanded form is 3 + 7/100 + 2/1000. We do not need to write the zero term."
    },

    // c7_q49 — Write expanded fraction form as decimal (Section A, Ex 7A Q10)
    {
      id: "c7_q49",
      topic: "Decimal numbers",
      type: "input",
      question: "Write <strong>6 + 5/10 + 2/100</strong> as a decimal number.",
      answer: "6.52",
      acceptableAnswers: ["6.52"],
      explanation: "Place each part in its column: 6 goes in the units column, 5/10 gives a 5 in the tenths column, and 2/100 gives a 2 in the hundredths column. So the decimal number is 6.52."
    },

    // c7_q50 — Write fraction with denominator 1000 as decimal (Section A, Ex 7A Q11/Q12)
    {
      id: "c7_q50",
      topic: "Decimal numbers",
      type: "input",
      question: "Write <strong>307/1000</strong> as a decimal number.",
      answer: "0.307",
      acceptableAnswers: ["0.307"],
      explanation: "A fraction with denominator 1000 always gives 3 decimal places. 307/1000 means 3 hundredths and 7 thousandths, but written out it is 0.307. Think of it as: _ . _ _ _ with 307 filling the three decimal places: 0.307."
    },

    // c7_q51 — Write decimal as fraction with denominator 100 (Section A, Ex 7A Q13)
    {
      id: "c7_q51",
      topic: "Decimal numbers",
      type: "mcq",
      question: "Write <strong>0.45</strong> as a fraction with denominator <strong>100</strong>.",
      options: ["4/100", "5/100", "45/100", "450/100"],
      answer: 2,
      explanation: "0.45 means 4 tenths and 5 hundredths. To write it as a fraction over 100: 0.45 = 45/100. You can verify: 45 ÷ 100 = 0.45. ✓"
    },

    // c7_q52 — Insert >, < or = between two decimals (Section C, Ex 7C Q3)
    {
      id: "c7_q52",
      topic: "Ordering decimal numbers",
      type: "mcq",
      question: "Which symbol correctly completes the statement: <strong>0.81 __ 0.803</strong>?",
      options: ["<", ">", "=", "Cannot be determined"],
      answer: 1,
      explanation: "Compare digit by digit from the left. Both numbers have 0 units. Tenths: 0.81 has 8 tenths and 0.803 also has 8 tenths — equal so far. Hundredths: 0.81 has 1 hundredth, but 0.803 has 0 hundredths. Since 1 > 0, we get 0.81 > 0.803."
    },

    // c7_q53 — Multiply by 10 specifically (Section H, Ex 7H Q1)
    {
      id: "c7_q53",
      topic: "Multiplying by powers of 10",
      type: "mcq",
      question: "Calculate <strong>0.238 × 10</strong>.",
      options: ["0.0238", "2.38", "23.8", "238"],
      answer: 1,
      explanation: "Multiplying by 10 moves the decimal point one place to the right. 0.238 × 10 = 2.38. The digits stay the same; only the decimal point shifts: 0.238 → 2.38."
    },

    // c7_q54 — Divide by 10 specifically (Section I, Ex 7I Q1)
    {
      id: "c7_q54",
      topic: "Dividing by powers of 10",
      type: "mcq",
      question: "Calculate <strong>6.3 ÷ 10</strong>.",
      options: ["63", "0.63", "0.063", "630"],
      answer: 1,
      explanation: "Dividing by 10 moves the decimal point one place to the left. 6.3 ÷ 10 = 0.63. The digits stay the same; the decimal point shifts left: 6.3 → 0.63."
    },

    // c7_q55 — Divide by 100 specifically (Section I, Ex 7I Q2)
    {
      id: "c7_q55",
      topic: "Dividing by powers of 10",
      type: "mcq",
      question: "Calculate <strong>9.2 ÷ 100</strong>.",
      options: ["920", "0.92", "0.092", "0.0092"],
      answer: 2,
      explanation: "Dividing by 100 moves the decimal point two places to the left. 9.2 ÷ 100 = 0.092. The decimal shifts: 9.2 → 0.92 → 0.092. We add a zero to fill the empty tenths place."
    },

    // c7_q56 — Find missing power of 10 (Section I, Ex 7I Q5 / Review 7B Q9)
    {
      id: "c7_q56",
      topic: "Dividing by powers of 10",
      type: "mcq",
      question: "What number completes the statement: <strong>203 ÷ ___ = 2.03</strong>?",
      options: ["10", "100", "1000", "10 000"],
      answer: 1,
      explanation: "We need to move the decimal point 2 places to the left to turn 203 into 2.03. Moving 2 places left means dividing by 100. Check: 203 ÷ 100 = 2.03. ✓"
    },

    // c7_q57 — Convert decimal > 1 to mixed number fraction (Section E, Ex 7E Q1)
    {
      id: "c7_q57",
      topic: "Converting decimals to fractions",
      type: "mcq",
      question: "Convert <strong>4.3</strong> to a mixed number in its simplest form.",
      options: ["43/10", "4 and 1/3", "4 and 3/10", "4 and 3/100"],
      answer: 2,
      explanation: "The whole number part is 4. The decimal part 0.3 = 3/10. So 4.3 = 4 and 3/10 (written as a mixed number). The fraction 3/10 is already in simplest form because 3 and 10 share no common factors other than 1."
    },

    // c7_q58 — Convert fraction to decimal by scaling denominator (Section F, Ex 7F Q3)
    {
      id: "c7_q58",
      topic: "Converting fractions to decimals",
      type: "mcq",
      question: "Convert <strong>9/25</strong> to a decimal by finding an equivalent fraction with denominator 100.",
      options: ["0.025", "0.36", "0.9", "0.45"],
      answer: 1,
      explanation: "Multiply numerator and denominator by 4 (since 25 × 4 = 100): 9/25 = (9 × 4)/(25 × 4) = 36/100 = 0.36."
    },

    // c7_q59 — Round to 3 decimal places (Section D, Ex 7D Q11)
    {
      id: "c7_q59",
      topic: "Rounding decimal numbers",
      type: "mcq",
      question: "Round <strong>0.46172</strong> to <strong>3 decimal places</strong>.",
      options: ["0.461", "0.462", "0.46", "0.4617"],
      answer: 1,
      explanation: "To round to 3 decimal places, look at the 4th decimal digit: it is 7. Since 7 ≥ 5, round up the 3rd decimal digit from 1 to 2. So 0.46172 ≈ 0.462."
    },

    // c7_q60 — Multiply decimal by two-digit whole number (Section J, Ex 7J Q5)
    {
      id: "c7_q60",
      topic: "Multiplying decimals by a whole number",
      type: "mcq",
      question: "Calculate <strong>3.9 × 15</strong>.",
      options: ["5.85", "58.5", "585", "5.085"],
      answer: 1,
      explanation: "Ignore the decimal and multiply: 39 × 15 = 585. (Check: 39 × 10 = 390, 39 × 5 = 195, total = 585.) The original number 3.9 has 1 decimal place, so place the decimal point 1 place from the right: 58.5. So 3.9 × 15 = 58.5."
    }
  ]
};
