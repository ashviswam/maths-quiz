const ch02 = {
  id: 2,
  title: "Operations",
  icon: "🔣",
  color: "#ec4899",
  topics: ["Addition","Subtraction","Multiplication","Column multiplication","Division","Multiple operations","Exponent notation","Order of operations"],
  questions: [
    {
      id: "c2_q1",
      topic: "Addition",
      type: "mcq",
      question: "What is <strong>3,748 + 2,965</strong>?",
      options: ["6,713", "6,623", "6,703", "6,813"],
      answer: 0,
      explanation: "Line up the digits and add from right to left: 8+5=13 (write 3, carry 1), 4+6+1=11 (write 1, carry 1), 7+9+1=17 (write 7, carry 1), 3+2+1=6. The answer is 6,713."
    },
    {
      id: "c2_q2",
      topic: "Addition",
      type: "input",
      question: "A school library has <strong>4,256</strong> fiction books and <strong>3,847</strong> non-fiction books. How many books are there in total?",
      answer: "8103",
      acceptableAnswers: ["8103", "8,103"],
      explanation: "4,256 + 3,847 = 8,103. Adding column by column from right to left: 6+7=13 (carry 1), 5+4+1=10 (carry 1), 2+8+1=11 (carry 1), 4+3+1=8, giving 8,103."
    },
    {
      id: "c2_q3",
      topic: "Subtraction",
      type: "mcq",
      question: "What is <strong>7,302 − 4,865</strong>?",
      options: ["2,347", "2,437", "3,437", "2,537"],
      answer: 1,
      explanation: "Using borrowing from right to left: 2&lt;5 so borrow, 12−5=7; then 9−1−6=2 (after lending); 2&lt;8 so borrow, 12−1−8=3; finally 6−1−4=2. The answer is 2,437. Verify: 4,865 + 2,437 = 7,302."
    },
    {
      id: "c2_q4",
      topic: "Subtraction",
      type: "input",
      question: "A factory produced <strong>6,500</strong> items in January. <strong>2,738</strong> items were sold. How many items remain?",
      answer: "3762",
      acceptableAnswers: ["3762", "3,762"],
      explanation: "6,500 − 2,738 = 3,762. You can check by adding back: 2,738 + 3,762 = 6,500."
    },
    {
      id: "c2_q5",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>364 × 7</strong>?",
      options: ["2,448", "2,548", "2,148", "2,748"],
      answer: 1,
      explanation: "Multiply each digit by 7 from right to left: 4×7=28 (write 8, carry 2), 6×7=42+2=44 (write 4, carry 4), 3×7=21+4=25. The answer is 2,548."
    },
    {
      id: "c2_q6",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>47 × 36</strong>?",
      options: ["1,582", "1,692", "1,782", "1,892"],
      answer: 1,
      explanation: "Split the multiplier: 47×36 = 47×30 + 47×6 = 1,410 + 282 = 1,692. Always break up a 2-digit multiplier to make the calculation easier."
    },
    {
      id: "c2_q7",
      topic: "Column multiplication",
      type: "input",
      question: "Use column multiplication to find <strong>485 × 6</strong>.",
      answer: "2910",
      acceptableAnswers: ["2910", "2,910"],
      explanation: "Multiply each digit by 6 from right to left: 5×6=30 (write 0, carry 3), 8×6=48+3=51 (write 1, carry 5), 4×6=24+5=29. The answer is 2,910."
    },
    {
      id: "c2_q8",
      topic: "Column multiplication",
      type: "mcq",
      question: "Use column multiplication to find <strong>63 × 28</strong>.",
      options: ["1,664", "1,764", "1,844", "1,964"],
      answer: 1,
      explanation: "In column form: 63×8=504 (first partial product), 63×20=1,260 (second partial product, shift one place left). Sum: 504 + 1,260 = 1,764."
    },
    {
      id: "c2_q9",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>756 ÷ 4</strong>?",
      options: ["179", "189", "191", "169"],
      answer: 1,
      explanation: "Using long division: 7÷4=1 remainder 3; bring down 5 → 35÷4=8 remainder 3; bring down 6 → 36÷4=9. The answer is 189. Check: 189×4=756."
    },
    {
      id: "c2_q10",
      topic: "Division",
      type: "input",
      question: "A farmer packs <strong>2,856</strong> oranges equally into boxes of <strong>8</strong>. How many boxes does he need?",
      answer: "357",
      acceptableAnswers: ["357"],
      explanation: "2,856 ÷ 8 = 357. Long division steps: 28÷8=3 remainder 4; 45÷8=5 remainder 5; 56÷8=7. Check: 357×8=2,856."
    },
    {
      id: "c2_q11",
      topic: "Multiple operations",
      type: "mcq",
      question: "A shop sells notebooks for $<strong>3</strong> each and pens for $<strong>2</strong> each. Jake buys <strong>5</strong> notebooks and <strong>4</strong> pens. How much does he spend in total?",
      options: ["$19", "$23", "$27", "$25"],
      answer: 1,
      explanation: "Cost of notebooks: 5 × $3 = $15. Cost of pens: 4 × $2 = $8. Total = $15 + $8 = $23. Multiplication is performed before addition."
    },
    {
      id: "c2_q12",
      topic: "Multiple operations",
      type: "input",
      question: "A baker makes <strong>144</strong> muffins and divides them equally into <strong>6</strong> trays. She then adds <strong>8</strong> more muffins to each tray. How many muffins are on each tray now?",
      answer: "32",
      acceptableAnswers: ["32"],
      explanation: "First divide: 144 ÷ 6 = 24 muffins per tray. Then add: 24 + 8 = 32 muffins per tray."
    },
    {
      id: "c2_q13",
      topic: "Exponent notation",
      type: "mcq",
      question: "What is the value of <strong>2<sup>3</sup></strong>?",
      options: ["6", "9", "8", "5"],
      answer: 2,
      explanation: "2<sup>3</sup> means 2 × 2 × 2 = 8. The exponent 3 tells us to use the base 2 as a factor three times."
    },
    {
      id: "c2_q14",
      topic: "Exponent notation",
      type: "mcq",
      question: "What is the value of <strong>3<sup>4</sup></strong>?",
      options: ["12", "81", "64", "27"],
      answer: 1,
      explanation: "3<sup>4</sup> means 3 × 3 × 3 × 3. Calculate step by step: 3×3=9, then 9×3=27, then 27×3=81."
    },
    {
      id: "c2_q15",
      topic: "Exponent notation",
      type: "input",
      question: "Calculate the value of <strong>5<sup>3</sup></strong>. (This means 5 × 5 × 5.)",
      answer: "125",
      acceptableAnswers: ["125"],
      explanation: "5<sup>3</sup> = 5 × 5 × 5 = 125. First: 5×5=25, then 25×5=125. The exponent 3 means multiply the base 5 by itself 3 times."
    },
    {
      id: "c2_q16",
      topic: "Order of operations",
      type: "mcq",
      question: "Using the order of operations (BODMAS), what is <strong>3 + 4 × 2</strong>?",
      options: ["14", "11", "24", "10"],
      answer: 1,
      explanation: "According to BODMAS, multiplication is done before addition. Calculate 4 × 2 = 8 first, then 3 + 8 = 11. The answer is 11, not 14."
    },
    {
      id: "c2_q17",
      topic: "Order of operations",
      type: "mcq",
      question: "What is <strong>(6 + 4) × 3 − 5</strong>?",
      options: ["25", "23", "19", "27"],
      answer: 0,
      explanation: "BODMAS: Brackets first → 6+4=10. Then multiplication → 10×3=30. Then subtraction → 30−5=25. The answer is 25."
    },
    {
      id: "c2_q18",
      topic: "Order of operations",
      type: "input",
      question: "Calculate <strong>20 ÷ 4 + 3 × 2</strong> using the correct order of operations (BODMAS).",
      answer: "11",
      acceptableAnswers: ["11"],
      explanation: "BODMAS: Division and multiplication before addition. 20÷4=5 and 3×2=6, then 5+6=11. The answer is 11."
    },
    {
      id: "c2_q19",
      topic: "Addition",
      type: "mcq",
      question: "What is <strong>5,619 + 1,784 + 2,307</strong>?",
      options: ["9,610", "9,710", "9,720", "9,810"],
      answer: 1,
      explanation: "Add in columns: ones 9+4+7=20 (write 0, carry 2), tens 1+8+0+2=11 (write 1, carry 1), hundreds 6+7+3+1=17 (write 7, carry 1), thousands 5+1+2+1=9. The answer is 9,710."
    },
    {
      id: "c2_q20",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>945 ÷ 5</strong>?",
      options: ["189", "191", "195", "179"],
      answer: 0,
      explanation: "Using long division: 9÷5=1 remainder 4; bring down 4 → 44÷5=8 remainder 4; bring down 5 → 45÷5=9. The answer is 189. Check: 189×5=945."
    }
  ]
};
