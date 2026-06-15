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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Factor tree for 60">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Title -->
  <text x="160" y="18" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Factor Tree for 60</text>
  <!-- Root node: 60 -->
  <circle cx="160" cy="42" r="18" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="160" y="47" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">60</text>
  <!-- Branch: 60 -> 2 and 30 -->
  <line x1="148" y1="57" x2="100" y2="88" stroke="#64748b" stroke-width="1.5"/>
  <line x1="172" y1="57" x2="220" y2="88" stroke="#64748b" stroke-width="1.5"/>
  <!-- Node: 2 (prime) -->
  <circle cx="100" cy="100" r="18" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <!-- Node: 30 -->
  <circle cx="220" cy="100" r="18" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="220" y="105" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">30</text>
  <!-- Branch: 30 -> 2 and 15 -->
  <line x1="208" y1="115" x2="170" y2="145" stroke="#64748b" stroke-width="1.5"/>
  <line x1="232" y1="115" x2="270" y2="145" stroke="#64748b" stroke-width="1.5"/>
  <!-- Node: 2 (prime) -->
  <circle cx="170" cy="158" r="18" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <!-- Node: 15 -->
  <circle cx="270" cy="158" r="18" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <text x="270" y="163" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">15</text>
  <!-- Branch: 15 -> 3 and 5 -->
  <line x1="258" y1="173" x2="234" y2="196" stroke="#64748b" stroke-width="1.5"/>
  <line x1="282" y1="173" x2="296" y2="196" stroke="#64748b" stroke-width="1.5"/>
  <!-- Node: 3 (prime) -->
  <circle cx="230" cy="205" r="13" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <!-- Node: 5 (prime) -->
  <circle cx="294" cy="205" r="13" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
  <!-- Legend -->
  <circle cx="18" cy="195" r="8" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="30" y="199" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">= prime</text>
</svg>`,
      answer: "2x2x3x5",
      acceptableAnswers: ["2x2x3x5", "2×2×3×5", "2*2*3*5", "2 x 2 x 3 x 5", "2 × 2 × 3 × 5"],
      explanation: "60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. All factors in the prime factorisation must be prime numbers."
    },
    {
      id: "c4_q15",
      topic: "Highest common factor",
      type: "mcq",
      question: "What is the <strong>Highest Common Factor (HCF)</strong> of 24 and 36?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Venn diagram showing factors of 24 and 36">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- Title -->
  <text x="190" y="18" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">Factors of 24 and 36</text>
  <!-- Left circle: factors of 24 only -->
  <circle cx="145" cy="118" r="85" fill="rgba(91,94,244,0.10)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Right circle: factors of 36 only -->
  <circle cx="235" cy="118" r="85" fill="rgba(244,63,94,0.10)" stroke="#f43f5e" stroke-width="2"/>
  <!-- Circle labels -->
  <text x="90" y="48" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">24</text>
  <text x="290" y="48" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">36</text>
  <!-- Factors only in 24 -->
  <text x="95" y="100" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">8</text>
  <text x="82" y="120" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">24</text>
  <!-- Common factors (centre) -->
  <text x="190" y="88" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">1</text>
  <text x="190" y="106" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">2</text>
  <text x="190" y="124" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">3</text>
  <text x="190" y="142" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">4</text>
  <text x="190" y="160" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700" fill="#f43f5e">6</text>
  <text x="190" y="178" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12</text>
  <!-- Factors only in 36 -->
  <text x="283" y="100" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">9</text>
  <text x="290" y="120" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">18</text>
  <text x="283" y="140" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">36</text>
  <!-- HCF label -->
  <text x="190" y="210" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">HCF = ?</text>
</svg>`,
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="7 by 7 grid of 49 tiles">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <!-- Title -->
  <text x="160" y="16" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">49 tiles arranged in a square grid</text>
  <!-- Draw 7x7 grid of tiles, each tile 26x26px, grid starts at x=55, y=26 -->
  <!-- Row 1 -->
  <rect x="55" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="26" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 2 -->
  <rect x="55" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="52" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 3 -->
  <rect x="55" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="78" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 4 -->
  <rect x="55" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="104" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 5 -->
  <rect x="55" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="130" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 6 -->
  <rect x="55" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="156" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Row 7 -->
  <rect x="55" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="81" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="107" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="133" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="159" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="185" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="211" y="182" width="26" height="26" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="1.5"/>
  <!-- Side bracket (no label) -->
  <line x1="240" y1="26" x2="240" y2="208" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Bottom bracket (no label) -->
  <line x1="55" y1="212" x2="237" y2="212" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
      options: ["5", "6", "7", "8"],
      answer: 2,
      explanation: "If the total number of tiles is 49 and they are arranged in a square, we need to find the square root of 49. Since 7 × 7 = 49, there are 7 tiles along each side."
    },

    // ── NEW QUESTIONS START HERE ─────────────────────────────────────────────

    // Factor pairs
    {
      id: "c4_q21",
      topic: "Factors",
      type: "mcq",
      question: "Which of the following is a <strong>factor pair</strong> of 48?",
      options: ["5 and 9", "6 and 8", "7 and 7", "4 and 13"],
      answer: 1,
      explanation: "A factor pair multiplies to give the number. 6 × 8 = 48, so (6, 8) is a factor pair of 48. You can check the others: 5 × 9 = 45, 7 × 7 = 49, and 4 × 13 = 52 — none of those equal 48."
    },
    {
      id: "c4_q22",
      topic: "Factors",
      type: "input",
      question: "List all the <strong>factor pairs</strong> of 20 by finding them systematically. How many factor pairs does 20 have? (Count each pair once.)",
      answer: "3",
      acceptableAnswers: ["3"],
      explanation: "Work through systematically, starting from 1: 1 × 20 ✓, 2 × 10 ✓, 3 × ? — 20 ÷ 3 is not a whole number, so skip. 4 × 5 ✓. 5 × 4 is the same as 4 × 5, so stop here. The factor pairs are: (1, 20), (2, 10), and (4, 5) — that is <strong>3 factor pairs</strong>. Since 20 is not a perfect square, every factor pairs up with a different partner."
    },
    // Composite numbers
    {
      id: "c4_q23",
      topic: "Prime and composite numbers",
      type: "mcq",
      question: "Which of the following is a <strong>composite number</strong>?",
      options: ["11", "19", "23", "25"],
      answer: 3,
      explanation: "A composite number has more than two factors. 25 = 5 × 5, so its factors are 1, 5, and 25 — more than two factors, making it composite. The numbers 11, 19, and 23 are all prime (they have exactly two factors: 1 and themselves)."
    },
    {
      id: "c4_q24",
      topic: "Prime and composite numbers",
      type: "mcq",
      question: "How many <strong>prime numbers</strong> are there between 1 and 20 (not including 1 or 20)?",
      options: ["6", "7", "8", "9"],
      answer: 2,
      explanation: "The prime numbers between 1 and 20 (exclusive) are: 2, 3, 5, 7, 11, 13, 17, 19. That is 8 prime numbers. Remember, 1 is not prime, and 4, 6, 8, 9, 10, 12, 14, 15, 16, 18 are all composite."
    },
    // Multiples (standalone listing/common multiples)
    {
      id: "c4_q25",
      topic: "Multiples",
      type: "mcq",
      question: "Which of the following is the <strong>4th multiple</strong> of 7?",
      options: ["21", "28", "35", "42"],
      answer: 1,
      explanation: "The multiples of 7 in order are: 7 (1st), 14 (2nd), 21 (3rd), 28 (4th). So the 4th multiple of 7 is 28."
    },
    {
      id: "c4_q26",
      topic: "Multiples",
      type: "input",
      question: "What is the <strong>Lowest Common Multiple (LCM)</strong> of 6 and 9?",
      answer: "18",
      acceptableAnswers: ["18"],
      explanation: "List the multiples: Multiples of 6: 6, 12, <strong>18</strong>, 24... Multiples of 9: 9, <strong>18</strong>, 27... The first number appearing in both lists is 18, so LCM(6, 9) = 18."
    },
    // Divisibility rules — 2, 3, 8 individually
    {
      id: "c4_q27",
      topic: "Divisibility tests",
      type: "mcq",
      question: "Which of the following numbers is divisible by <strong>3</strong>?",
      options: ["142", "253", "364", "471"],
      answer: 3,
      explanation: "A number is divisible by 3 if the sum of its digits is divisible by 3. Check each: 1+4+2=7 (not divisible by 3), 2+5+3=10 (no), 3+6+4=13 (no), 4+7+1=12 — yes! 12 ÷ 3 = 4, so 471 is divisible by 3."
    },
    {
      id: "c4_q28",
      topic: "Divisibility tests",
      type: "mcq",
      question: "The four-digit number <strong>5,_23</strong> has a missing digit. What must the missing digit be so that the number is divisible by <strong>9</strong>?",
      options: ["5", "7", "8", "9"],
      answer: 2,
      explanation: "A number is divisible by 9 if the sum of its digits is divisible by 9. The known digits sum to 5 + 2 + 3 = 10. We need 10 + (missing digit) to be divisible by 9. The next multiple of 9 above 10 is 18, so the missing digit must be 18 − 10 = <strong>8</strong>. Check: 5 + 8 + 2 + 3 = 18, and 18 ÷ 9 = 2 ✓."
    },
    {
      id: "c4_q29",
      topic: "Divisibility tests",
      type: "mcq",
      question: "The number <strong>2,_46</strong> has a missing digit in the thousands place. For the number to be divisible by <strong>2</strong>, which statement is true?",
      options: [
        "The missing digit must be even",
        "The missing digit must be odd",
        "Any digit from 0–9 works, because divisibility by 2 depends only on the last digit",
        "The digit sum must be even"
      ],
      answer: 2,
      explanation: "Divisibility by 2 depends <strong>only on the last digit</strong>. Since the last digit of 2,_46 is 6, which is even, this number is divisible by 2 no matter what the missing digit is. The missing digit can be anything from 0 to 9."
    },
    // Square numbers (extended)
    {
      id: "c4_q30",
      topic: "Square numbers",
      type: "input",
      question: "What is 11<sup>2</sup> (eleven squared)?",
      answer: "121",
      acceptableAnswers: ["121"],
      explanation: "11 squared means 11 × 11 = 121. You can work this out as (10 + 1) × 11 = 110 + 11 = 121. The square numbers continue: 10² = 100, 11² = 121, 12² = 144."
    },
    {
      id: "c4_q31",
      topic: "Square numbers",
      type: "mcq",
      question: "Which of the following is <strong>NOT</strong> a square number?",
      options: ["36", "49", "55", "64"],
      answer: 2,
      explanation: "36 = 6 × 6, 49 = 7 × 7, and 64 = 8 × 8 are all perfect squares. 55 is not a square number — there is no whole number that multiplies by itself to give 55. (7 × 7 = 49 and 8 × 8 = 64, so 55 falls between two consecutive squares.)"
    },
    // Cubic numbers (extended)
    {
      id: "c4_q32",
      topic: "Cubic numbers",
      type: "input",
      question: "What is 4<sup>3</sup> (four cubed)?",
      answer: "64",
      acceptableAnswers: ["64"],
      explanation: "4 cubed means 4 × 4 × 4. Working step by step: 4 × 4 = 16, then 16 × 4 = 64. The first five cubic numbers are 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, and 5³ = 125."
    },
    {
      id: "c4_q33",
      topic: "Cubic numbers",
      type: "mcq",
      question: "Which of the following is a <strong>cube number</strong>?",
      options: ["16", "25", "36", "64"],
      answer: 3,
      explanation: "64 = 4 × 4 × 4 = 4³, so 64 is a cube number. The others are not: 16 = 2⁴ (not a perfect cube), 25 = 5² (a square number but not a cube), and 36 = 6² (also a square but not a cube)."
    },
    // Index notation / exponent form
    // HCF using prime factorisation
    // LCM using prime factorisation
    // ── CHALLENGING QUESTIONS ────────────────────────────────────────────────

    {
      id: "c4_q39",
      topic: "Multiples",
      difficulty: "challenging",
      type: "input",
      question: "Two bells in a clock tower ring together at noon. Bell A rings every <strong>4 minutes</strong> and Bell B rings every <strong>6 minutes</strong>. How many minutes after noon will they <strong>next ring together</strong>?",
      answer: "12",
      acceptableAnswers: ["12", "12 minutes"],
      explanation: "We need the Lowest Common Multiple of 4 and 6. Multiples of 4: 4, 8, <strong>12</strong>, 16... Multiples of 6: 6, <strong>12</strong>, 18... The first common multiple is 12. So the bells will ring together again <strong>12 minutes</strong> after noon, at 12:12. Well done — this is LCM in a real-world context!"
    },
    {
      id: "c4_q40",
      topic: "Highest common factor",
      difficulty: "challenging",
      type: "input",
      question: "A baker has <strong>48 chocolate muffins</strong> and <strong>60 blueberry muffins</strong>. She wants to arrange them into identical gift boxes, with the same mix in each box and no muffins left over. What is the <strong>maximum number of gift boxes</strong> she can make?",
      answer: "12",
      acceptableAnswers: ["12", "12 boxes"],
      explanation: "We need the HCF of 48 and 60. Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. Factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. The largest number in both lists is <strong>12</strong>. She can make 12 boxes, each with 48÷12 = 4 chocolate and 60÷12 = 5 blueberry muffins. Dividing into equal groups = HCF problem!"
    },
    {
      id: "c4_q41",
      topic: "Prime and composite numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "The prime factorisation of a mystery number is 2<sup>2</sup> × 3 × 5. Which of the following is <strong>not</strong> a factor of this number?",
      options: ["15", "20", "30", "35"],
      answer: 3,
      explanation: "The mystery number is 2² × 3 × 5 = 4 × 15 = 60. To be a factor of 60, a number can only use the primes 2, 3, and 5 (and no higher powers than 2² for the prime 2). Check each option: 15 = 3 × 5 ✓ (60 ÷ 15 = 4), 20 = 2² × 5 ✓ (60 ÷ 20 = 3), 30 = 2 × 3 × 5 ✓ (60 ÷ 30 = 2), 35 = 5 × 7 — but <strong>7 is not a prime factor of 60</strong>, so 35 cannot be a factor. 60 ÷ 35 = 1.71... not a whole number. The answer is 35."
    },
    {
      id: "c4_q44",
      topic: "Prime and composite numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "Which of the following numbers has <strong>exactly 3 factors</strong>?",
      options: ["9", "10", "12", "15"],
      answer: 0,
      explanation: "A number has exactly 3 factors only if it is the <strong>square of a prime</strong>. Check 9 = 3²: its factors are 1, 3, 9 — exactly 3 ✓. Check 10: factors are 1, 2, 5, 10 — that is 4 factors. Check 12: factors are 1,2,3,4,6,12 — 6 factors. Check 15: factors are 1,3,5,15 — 4 factors. So 9 is the only one with exactly 3 factors. This is a great pattern to remember: p² always has exactly 3 factors!"
    },
    {
      id: "c4_q45",
      topic: "Divisibility tests",
      difficulty: "challenging",
      type: "mcq",
      question: "The six-digit number <strong>47_,8_2</strong> (where _ are missing digits) is divisible by <strong>9</strong>. The digit sum so far is 4+7+8+2 = 21. If the two missing digits are <em>identical</em>, what are they?",
      options: ["0", "3", "6", "9"],
      answer: 1,
      explanation: "For divisibility by 9, the sum of ALL digits must be divisible by 9. The known digits sum to 4 + 7 + 8 + 2 = 21. Let the missing digit be d (used twice). Total sum = 21 + 2d. We need 21 + 2d to be divisible by 9. Test the options: d=0 → 21 (not divisible by 9). d=3 → 21 + 6 = 27 ✓ (27 ÷ 9 = 3). d=6 → 21 + 12 = 33 (no). d=9 → 21 + 18 = 39 (no). The missing digit is <strong>3</strong>. Excellent multi-step reasoning!"
    },
    {
      id: "c4_q46",
      topic: "Zero and one",
      type: "mcq",
      question: "What is the result of <strong>75 ÷ 0</strong>?",
      options: ["0", "75", "1", "Undefined — you cannot divide by zero"],
      answer: 3,
      explanation: "Dividing by zero is undefined — it has no answer. You cannot split 75 into zero groups. This is different from 0 ÷ 75, which equals 0. Remember: any number divided by 0 is undefined, but 0 divided by any non-zero number equals 0."
    },
    {
      id: "c4_q47",
      topic: "Zero and one",
      type: "input",
      question: "What is the result of <strong>364 ÷ 1</strong>?",
      answer: "364",
      acceptableAnswers: ["364"],
      explanation: "Dividing any number by 1 always gives the same number back. 364 ÷ 1 = 364. This is because 1 is the identity element for multiplication and division — it leaves the number unchanged. Just like 364 × 1 = 364."
    },
    {
      id: "c4_q48",
      topic: "Divisibility",
      type: "mcq",
      question: "Which of the following numbers is <strong>odd</strong>?",
      options: ["48", "73", "102", "256"],
      answer: 1,
      explanation: "A number is odd if it is NOT divisible by 2 — odd numbers end in 1, 3, 5, 7, or 9. 73 ends in 3, so it is odd. The others all end in even digits (48 ends in 8, 102 ends in 2, 256 ends in 6), so they are all even."
    },
    {
      id: "c4_q49",
      topic: "Divisibility",
      type: "mcq",
      question: "The sum of two odd numbers is always:",
      options: ["Odd", "Even", "Prime", "A multiple of 3"],
      answer: 1,
      explanation: "When you add two odd numbers, the result is always even. For example: 3 + 5 = 8, 7 + 9 = 16, 11 + 13 = 24. You can think of it this way: each odd number is one more than an even number, so the two extra 1s pair up to make another even number."
    },
    {
      id: "c4_q50",
      topic: "Factors",
      type: "mcq",
      question: "Is <strong>8</strong> a factor of <strong>56</strong>?",
      options: ["Yes, because 56 ÷ 8 = 7 exactly", "No, because 56 is not in the 8 times table", "Yes, because 8 + 56 = 64", "No, because 8 is bigger than half of 56"],
      answer: 0,
      explanation: "A number is a factor if it divides exactly with no remainder. 56 ÷ 8 = 7 exactly (no remainder), so 8 IS a factor of 56. We can also write this as 8 × 7 = 56, confirming 8 and 7 are a factor pair of 56."
    },
    {
      id: "c4_q51",
      topic: "Factors",
      type: "input",
      question: "Complete this factor pair: 45 = 9 × ___. What is the missing number?",
      answer: "5",
      acceptableAnswers: ["5"],
      explanation: "To find the missing factor, divide: 45 ÷ 9 = 5. So 45 = 9 × 5. You can check: 9 × 5 = 45 ✓. This means 9 and 5 are both factors of 45, and they form a factor pair."
    },
    {
      id: "c4_q52",
      topic: "Multiples",
      type: "mcq",
      question: "Which of the following lists shows the multiples of <strong>6</strong> that are between <strong>20 and 40</strong>?",
      options: ["24, 30, 36", "20, 24, 30, 36, 40", "6, 12, 18, 24, 30, 36, 42", "24, 36"],
      answer: 0,
      explanation: "Multiples of 6 are: 6, 12, 18, 24, 30, 36, 42... The ones between 20 and 40 (not including 20 or 40) are 24, 30, and 36. Check: 6 × 4 = 24 ✓, 6 × 5 = 30 ✓, 6 × 6 = 36 ✓."
    },
    {
      id: "c4_q53",
      topic: "Multiples",
      type: "mcq",
      question: "Is <strong>63</strong> a multiple of <strong>7</strong>?",
      options: ["Yes, because 63 ÷ 7 = 9 exactly", "No, because 63 is odd", "Yes, because 63 ends in 3", "No, because 7 does not divide 63 exactly"],
      answer: 0,
      explanation: "A number is a multiple of 7 if it appears in the 7 times table. 7 × 9 = 63, so 63 is the 9th multiple of 7. We can verify: 63 ÷ 7 = 9 exactly with no remainder, confirming 63 is a multiple of 7."
    },
    {
      id: "c4_q54",
      topic: "Square numbers",
      type: "input",
      question: "What is the <strong>12th square number</strong>? (The nth square number is n × n.)",
      answer: "144",
      acceptableAnswers: ["144"],
      explanation: "The 12th square number is 12 × 12 = 144. You can work it out as (10 + 2) × 12 = 120 + 24 = 144. The sequence of square numbers is: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144."
    },
    {
      id: "c4_q55",
      topic: "Square numbers",
      type: "input",
      question: "What is the <strong>smallest square number that is greater than 200</strong>?",
      answer: "225",
      acceptableAnswers: ["225"],
      explanation: "We need to find the first square number above 200. Check: 14² = 196 (too small), 15² = 15 × 15 = 225. Since 225 > 200 and 196 < 200, the smallest square number greater than 200 is 225."
    },
    {
      id: "c4_q56",
      topic: "Divisibility tests",
      type: "mcq",
      question: "Which of the following numbers is divisible by <strong>10</strong>?",
      options: ["105", "1005", "3215", "4870"],
      answer: 3,
      explanation: "A number is divisible by 10 if its last digit is 0. Check each option: 105 ends in 5 (no), 1005 ends in 5 (no), 3215 ends in 5 (no), 4870 ends in 0 — yes! 4870 ÷ 10 = 487 exactly. The rule: a number is divisible by 10 if and only if its last digit is 0."
    },
    {
      id: "c4_q57",
      topic: "Prime and composite numbers",
      type: "mcq",
      question: "What are the <strong>prime factors</strong> of 30? (List only the prime numbers that divide 30 exactly.)",
      options: ["1, 2, 3, 5", "2, 3, 5", "2, 5, 6", "3, 5, 10"],
      answer: 1,
      explanation: "The prime factors of 30 are the prime numbers that divide 30 exactly. 30 = 2 × 3 × 5. Check: 2 is prime ✓, 3 is prime ✓, 5 is prime ✓. Note that 1 is not a prime number, and 6 and 10 are not prime (they are composite). So the prime factors of 30 are 2, 3, and 5."
    },
    {
      id: "c4_q58",
      topic: "Prime and composite numbers",
      type: "input",
      question: "What is the sum of the <strong>first 5 prime numbers</strong>?",
      answer: "28",
      acceptableAnswers: ["28"],
      explanation: "The first 5 prime numbers are 2, 3, 5, 7, and 11. Their sum is 2 + 3 + 5 + 7 + 11 = 28. Remember that 1 is NOT a prime number — primes must have exactly two factors (1 and themselves), but 1 only has one factor."
    },
    {
      id: "c4_q59",
      topic: "Cubic numbers",
      type: "input",
      question: "How many <strong>cubic numbers</strong> are there between 100 and 500? (Do not include 100 or 500 themselves.)",
      answer: "3",
      acceptableAnswers: ["3"],
      explanation: "List the cubic numbers: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512. The cubic numbers between 100 and 500 are 125, 216, and 343 — that is 3 cubic numbers. (512 is too large as it is greater than 500.)"
    }
  ]
};
