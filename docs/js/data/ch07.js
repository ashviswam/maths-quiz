const ch07 = {
  id: 7,
  title: "Decimals",
  icon: "🔢",
  color: "#8b5cf6",
  topics: ["Decimal numbers","Decimal numbers on a number line","Ordering decimal numbers","Rounding decimal numbers","Converting decimals to fractions","Converting fractions to decimals","Adding and subtracting decimal numbers","Multiplying by powers of 10","Dividing by powers of 10","Multiplying decimals by a whole number","Dividing decimals by a whole number","Multiplying decimals by decimals","Dividing decimals by decimals","Terminating and recurring decimals","Significant figures"],
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
    {
      id: "c7_q28",
      topic: "Multiplying decimals by decimals",
      type: "mcq",
      question: "Calculate <strong>0.4 × 0.3</strong>.",
      options: ["1.2", "0.12", "0.012", "12"],
      answer: 1,
      explanation: "Multiply as whole numbers: 4 × 3 = 12. Count the total decimal places in both numbers: 0.4 has 1 decimal place and 0.3 has 1 decimal place, so 1 + 1 = 2 decimal places in the answer. Place the decimal point: 0.12. So 0.4 × 0.3 = 0.12."
    },
    {
      id: "c7_q29",
      topic: "Multiplying decimals by decimals",
      type: "mcq",
      question: "Calculate <strong>1.2 × 0.5</strong>.",
      options: ["6", "0.06", "0.6", "60"],
      answer: 2,
      explanation: "Multiply as whole numbers: 12 × 5 = 60. Count total decimal places: 1.2 has 1 decimal place, 0.5 has 1 decimal place, so 1 + 1 = 2 decimal places in the answer. Place the decimal: 0.60 = 0.6. So 1.2 × 0.5 = 0.6."
    },
    {
      id: "c7_q30",
      topic: "Multiplying decimals by decimals",
      type: "input",
      question: "A rectangle has a length of <strong>2.4 cm</strong> and a width of <strong>1.5 cm</strong>. What is its area in cm²?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Rectangle with length 2.4 cm and width 1.5 cm">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Rectangle shape -->
  <rect x="60" y="50" width="200" height="120" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Length label (bottom) -->
  <line x1="60" y1="188" x2="260" y2="188" stroke="#5b5ef4" stroke-width="1"/>
  <polygon points="60,185 60,191 53,188" fill="#5b5ef4"/>
  <polygon points="260,185 260,191 267,188" fill="#5b5ef4"/>
  <text x="160" y="204" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">2.4 cm</text>
  <!-- Width label (right) -->
  <line x1="278" y1="50" x2="278" y2="170" stroke="#5b5ef4" stroke-width="1"/>
  <polygon points="275,50 281,50 278,43" fill="#5b5ef4"/>
  <polygon points="275,170 281,170 278,177" fill="#5b5ef4"/>
  <text x="302" y="114" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1.5 cm</text>
</svg>`,
      answer: "3.6",
      acceptableAnswers: ["3.6", "3.6 cm²", "3.60"],
      explanation: "Area = length × width = 2.4 × 1.5. Multiply as whole numbers: 24 × 15 = 360. Count decimal places: 2.4 has 1, 1.5 has 1, so 2 decimal places in total. The answer is 3.60 = 3.6 cm²."
    },

    // Dividing a decimal by a decimal
    {
      id: "c7_q31",
      topic: "Dividing decimals by decimals",
      type: "mcq",
      question: "Calculate <strong>0.8 ÷ 0.2</strong>.",
      options: ["0.04", "0.4", "4", "40"],
      answer: 2,
      explanation: "Multiply both numbers by 10 to remove the decimal from the divisor: 0.8 ÷ 0.2 = 8 ÷ 2 = 4. This works because multiplying both the dividend and divisor by the same number doesn't change the answer."
    },
    {
      id: "c7_q32",
      topic: "Dividing decimals by decimals",
      type: "mcq",
      question: "Calculate <strong>1.8 ÷ 0.6</strong>.",
      options: ["0.3", "3", "30", "0.03"],
      answer: 1,
      explanation: "Multiply both numbers by 10: 1.8 ÷ 0.6 = 18 ÷ 6 = 3. Alternatively, think of it as: how many 0.6s fit into 1.8? 0.6 × 3 = 1.8, so the answer is 3."
    },
    {
      id: "c7_q33",
      topic: "Dividing decimals by decimals",
      type: "input",
      question: "A piece of rope is <strong>2.4 m</strong> long. It is cut into pieces each <strong>0.3 m</strong> long. How many pieces are there?",
      answer: "8",
      acceptableAnswers: ["8", "8 pieces"],
      explanation: "Divide 2.4 ÷ 0.3. Multiply both by 10 to get 24 ÷ 3 = 8. There are 8 pieces of rope. Check: 8 × 0.3 = 2.4. ✓"
    },

    // Terminating vs recurring decimals
    {
      id: "c7_q34",
      topic: "Terminating and recurring decimals",
      type: "mcq",
      question: "Which of these fractions gives a <strong>terminating decimal</strong> when divided?",
      options: ["1/3", "1/6", "1/4", "1/9"],
      answer: 2,
      explanation: "A terminating decimal is one that ends after a finite number of digits. 1/4 = 0.25 (terminates). In contrast, 1/3 = 0.333... (recurring), 1/6 = 0.1666... (recurring), and 1/9 = 0.111... (recurring). Fractions whose denominators only have factors of 2 and/or 5 always give terminating decimals."
    },
    {
      id: "c7_q35",
      topic: "Terminating and recurring decimals",
      type: "mcq",
      question: "What type of decimal does <strong>1/3</strong> produce when you divide 1 by 3?",
      options: ["A terminating decimal (ends after 1 digit)", "A terminating decimal (ends after 3 digits)", "A recurring decimal (digit 3 repeats forever)", "A whole number"],
      answer: 2,
      explanation: "When you divide 1 by 3, you get 0.3333... — the digit 3 keeps repeating without end. This is called a recurring (or repeating) decimal. We sometimes write it as 0.3̄ with a dot or bar over the 3."
    },
    {
      id: "c7_q36",
      topic: "Terminating and recurring decimals",
      type: "mcq",
      question: "Convert <strong>1/6</strong> to a decimal. Which answer is correct?",
      options: ["0.16", "0.1666... (6 recurs)", "0.6", "0.166 (terminates)"],
      answer: 1,
      explanation: "Dividing 1 by 6: 10 ÷ 6 = 1 remainder 4, 40 ÷ 6 = 6 remainder 4, 40 ÷ 6 = 6 remainder 4 — the remainder 4 keeps appearing, so the digit 6 recurs. 1/6 = 0.1666... = 0.16̄."
    },

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
    {
      id: "c7_q38",
      topic: "Significant figures",
      type: "mcq",
      question: "Round <strong>4.627</strong> to <strong>2 significant figures</strong>.",
      options: ["4.6", "4.7", "4.63", "5.0"],
      answer: 0,
      explanation: "Significant figures are counted from the first non-zero digit. In 4.627, the first significant figure is 4 and the second is 6. To round to 2 significant figures, look at the third significant figure: 2. Since 2 < 5, keep the second significant figure as 6. So 4.627 ≈ 4.6 (2 sig. fig.)."
    },
    {
      id: "c7_q39",
      topic: "Significant figures",
      type: "mcq",
      question: "Round <strong>0.00853</strong> to <strong>1 significant figure</strong>.",
      options: ["0.008", "0.009", "0.01", "0.1"],
      answer: 1,
      explanation: "Leading zeros are not significant — they just show place value. The first significant figure in 0.00853 is 8. To round to 1 significant figure, look at the next digit: 5. Since 5 ≥ 5, round up the 8 to 9. So 0.00853 ≈ 0.009 (1 sig. fig.)."
    },

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
      topic: "Rounding decimal numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "A decimal rounded to <strong>2 decimal places</strong> gives <strong>5.40</strong>. What is the <strong>largest</strong> possible original value?",
      options: ["5.404", "5.409", "5.404999...", "5.405"],
      answer: 2,
      explanation: "For a number to round to 5.40, it must satisfy 5.395 ≤ x < 5.405. The largest possible value approaches 5.405 but never quite reaches it (because 5.405 would round up to 5.41). The largest value is just under 5.405, which we can write as 5.4049999... . This is a really important idea — the upper boundary is not included!"
    },
    {
      id: "c7_q43",
      topic: "Multiplying decimals by decimals",
      difficulty: "challenging",
      type: "input",
      question: "A square tile has a side length of <strong>0.35 m</strong>. What is the area of the tile in m²? Give your answer to 4 decimal places.",
      answer: "0.1225",
      acceptableAnswers: ["0.1225", "0.1225 m²"],
      explanation: "Area of a square = side × side = 0.35 × 0.35. Multiply as whole numbers: 35 × 35 = 1225. Count decimal places: 0.35 has 2 decimal places, and we have two of them, so 2 + 2 = 4 decimal places in the answer. Place the decimal: 0.1225. The area is 0.1225 m²."
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
    {
      id: "c7_q45",
      topic: "Dividing decimals by decimals",
      difficulty: "challenging",
      type: "mcq",
      question: "Petrol costs <strong>£1.48 per litre</strong>. A driver spends exactly <strong>£18.50</strong>. How many litres did they buy?",
      options: ["10.5 litres", "12.5 litres", "11.5 litres", "13.5 litres"],
      answer: 1,
      explanation: "Divide the total cost by the cost per litre: 18.50 ÷ 1.48. Multiply both by 100 to clear decimals: 1850 ÷ 148. Estimate: 148 × 12 = 1776 and 148 × 13 = 1924, so the answer is between 12 and 13. 148 × 12.5 = 148 × 12 + 148 × 0.5 = 1776 + 74 = 1850. ✓ So the driver bought 12.5 litres."
    }
  ]
};
