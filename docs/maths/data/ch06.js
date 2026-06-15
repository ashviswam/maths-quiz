const ch06 = {
  id: 6,
  title: "Fractions",
  icon: "🍕",
  color: "#ef4444",
  topics: ["Fractions","Fractions as division","Proper and improper fractions","Fractions on a number line","Equal fractions","Lowest terms","Comparing fractions","Adding and subtracting fractions","Multiplying a fraction by a whole number","A fraction of a quantity"],
  questions: [
    {
      id: "c6_q1",
      topic: "Fractions",
      type: "mcq",
      question: "In the fraction <strong>5/8</strong>, which number is the <em>denominator</em>?",
      options: ["5", "8", "3", "13"],
      answer: 1,
      explanation: "In a fraction, the <em>denominator</em> is the bottom number — it tells you how many equal parts the whole is divided into. Here the denominator is 8, meaning the whole is split into 8 equal parts. The top number (5) is called the numerator."
    },
    {
      id: "c6_q2",
      topic: "Fractions as division",
      type: "mcq",
      question: "Which division expression is the same as the fraction <strong>3/4</strong>?",
      options: ["4 ÷ 3", "3 ÷ 4", "3 × 4", "4 + 3"],
      answer: 1,
      explanation: "A fraction represents division: the numerator is divided by the denominator. So 3/4 means 3 ÷ 4. For example, sharing 3 pizzas equally among 4 people gives each person 3/4 of a pizza."
    },
    {
      id: "c6_q3",
      topic: "Fractions as division",
      type: "input",
      question: "Five friends share 3 chocolate bars equally. Write a fraction to show how much chocolate each friend gets.",
      answer: "3/5",
      acceptableAnswers: ["3/5"],
      explanation: "Division as a fraction: 3 chocolate bars shared among 5 friends = 3 ÷ 5 = 3/5. The total being shared (3) becomes the numerator and the number of people sharing (5) becomes the denominator."
    },
    {
      id: "c6_q4",
      topic: "Proper and improper fractions",
      type: "mcq",
      question: "Which of the following is a <strong>proper fraction</strong>?",
      options: ["9/4", "7/7", "11/5", "5/9"],
      answer: 3,
      explanation: "A proper fraction has a numerator that is <em>less than</em> its denominator, so its value is less than 1. In 5/9, the numerator 5 is less than the denominator 9. The others (9/4, 7/7, 11/5) all have numerators greater than or equal to their denominators."
    },
    {
      id: "c6_q5",
      topic: "Proper and improper fractions",
      type: "mcq",
      question: "Convert the mixed number <strong>2 3/5</strong> to an improper fraction.",
      options: ["7/5", "10/5", "13/5", "11/5"],
      answer: 2,
      explanation: "To convert a mixed number to an improper fraction, multiply the whole number by the denominator and add the numerator: 2 × 5 + 3 = 13. Keep the same denominator, so 2 3/5 = 13/5."
    },
    {
      id: "c6_q6",
      topic: "Proper and improper fractions",
      type: "input",
      question: "Convert the improper fraction <strong>17/4</strong> to a mixed number. Write your answer in the form <em>a b/c</em> (for example, write two and three quarters as <strong>2 3/4</strong>).",
      answer: "4 1/4",
      acceptableAnswers: ["4 1/4"],
      explanation: "Divide 17 by 4: 17 ÷ 4 = 4 remainder 1. The quotient (4) becomes the whole number part and the remainder (1) goes over the original denominator (4), giving 4 1/4."
    },
    {
      id: "c6_q7",
      topic: "Fractions on a number line",
      type: "mcq",
      question: "A number line from 0 to 1 is divided into 6 equal parts. At which fraction is the <strong>4th mark</strong> from 0?",
      options: ["4/1", "6/4", "4/6", "1/4"],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0 to 1 divided into 6 equal parts, 4th mark highlighted">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main number line -->
  <line x1="30" y1="40" x2="350" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- Arrow at right end -->
  <polygon points="350,35 360,40 350,45" fill="#64748b"/>
  <!-- Tick marks at 0, 1/6, 2/6, 3/6, 4/6, 5/6, 1 -->
  <!-- 0 at x=30, 1 at x=330, spacing = 300/6 = 50px -->
  <line x1="30" y1="33" x2="30" y2="47" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="35" x2="80" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="130" y1="35" x2="130" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="35" x2="180" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- 4th mark highlighted -->
  <circle cx="230" cy="40" r="6" fill="#5b5ef4"/>
  <line x1="280" y1="35" x2="280" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="330" y1="33" x2="330" y2="47" stroke="#64748b" stroke-width="2"/>
  <!-- Labels -->
  <text x="30" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">0</text>
  <text x="80" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1/6</text>
  <text x="130" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2/6</text>
  <text x="180" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3/6</text>
  <text x="280" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5/6</text>
  <text x="330" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">1</text>
  <!-- "4th mark" label above -->
  <text x="230" y="24" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">4th mark</text>
</svg>`,
      answer: 2,
      explanation: "When the interval from 0 to 1 is divided into 6 equal parts, each mark is 1/6 apart. The 4th mark is at 4 × (1/6) = 4/6. This fraction can also be simplified to 2/3."
    },
    {
      id: "c6_q8",
      topic: "Fractions on a number line",
      type: "mcq",
      question: "Which of the following fractions is between <strong>1/2 and 3/4</strong> on a number line?",
      options: ["1/3", "7/8", "5/8", "1/4"],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0 to 1 showing fractions in eighths with 1/2 and 3/4 marked">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main number line -->
  <line x1="30" y1="40" x2="355" y2="40" stroke="#64748b" stroke-width="2"/>
  <polygon points="355,35 365,40 355,45" fill="#64748b"/>
  <!-- Ticks at 0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1 — spacing = 300/8 = 37.5px -->
  <line x1="30" y1="33" x2="30" y2="47" stroke="#64748b" stroke-width="2"/>
  <line x1="67.5" y1="36" x2="67.5" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="105" y1="36" x2="105" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="142.5" y1="36" x2="142.5" y2="44" stroke="#64748b" stroke-width="1"/>
  <!-- 1/2 = 4/8 -->
  <line x1="180" y1="33" x2="180" y2="47" stroke="#f59e0b" stroke-width="2"/>
  <!-- 5/8 highlighted -->
  <circle cx="217.5" cy="40" r="6" fill="#5b5ef4"/>
  <!-- 3/4 = 6/8 -->
  <line x1="255" y1="33" x2="255" y2="47" stroke="#f59e0b" stroke-width="2"/>
  <line x1="292.5" y1="36" x2="292.5" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="33" x2="330" y2="47" stroke="#64748b" stroke-width="2"/>
  <!-- Shaded region between 1/2 and 3/4 -->
  <rect x="180" y="36" width="75" height="8" fill="rgba(91,94,244,0.15)" rx="2"/>
  <!-- Labels -->
  <text x="30" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">0</text>
  <text x="180" y="62" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1/2</text>
  <text x="255" y="62" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3/4</text>
  <text x="330" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">1</text>
  <!-- Region label -->
  <text x="217.5" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">between 1/2 and 3/4</text>
</svg>`,
      answer: 2,
      explanation: "Convert to a common denominator of 8: 1/2 = 4/8 and 3/4 = 6/8. We need a fraction between 4/8 and 6/8 — that is 5/8. Checking: 1/3 ≈ 0.33 and 1/4 = 0.25 are both less than 1/2, while 7/8 is greater than 3/4."
    },
    {
      id: "c6_q9",
      topic: "Equal fractions",
      type: "mcq",
      question: "Which fraction is <strong>equivalent</strong> to 2/3?",
      options: ["3/4", "4/9", "8/12", "6/15"],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 120" aria-label="Two fraction bars showing 2/3 equals 8/12">
  <rect width="380" height="120" fill="#f8fafc" rx="8"/>
  <!-- Label: 2/3 -->
  <text x="10" y="34" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2/3</text>
  <!-- Bar 1: divided into 3 parts, 2 shaded — bar starts x=45, width=300, height=30 -->
  <!-- Each part = 100px wide -->
  <rect x="45" y="15" width="300" height="30" fill="white" stroke="#64748b" stroke-width="1.5" rx="3"/>
  <rect x="45" y="15" width="100" height="30" fill="rgba(91,94,244,0.6)" stroke="#5b5ef4" stroke-width="1.5" rx="3"/>
  <rect x="145" y="15" width="100" height="30" fill="rgba(91,94,244,0.6)" stroke="#5b5ef4" stroke-width="1.5"/>
  <rect x="245" y="15" width="100" height="30" fill="white" stroke="#64748b" stroke-width="1"/>
  <!-- Part dividers for bar 1 -->
  <line x1="145" y1="15" x2="145" y2="45" stroke="#64748b" stroke-width="1"/>
  <line x1="245" y1="15" x2="245" y2="45" stroke="#64748b" stroke-width="1"/>
  <!-- "=" sign -->
  <text x="352" y="34" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="16" font-weight="700">=</text>
  <!-- Bar 2: divided into 12 parts, 8 shaded — each part = 25px wide -->
  <rect x="45" y="65" width="300" height="30" fill="white" stroke="#64748b" stroke-width="1.5" rx="3"/>
  <!-- Shade first 8 parts -->
  <rect x="45" y="65" width="200" height="30" fill="rgba(91,94,244,0.6)" stroke="#5b5ef4" stroke-width="1.5" rx="3"/>
  <rect x="245" y="65" width="100" height="30" fill="white" stroke="#64748b" stroke-width="1"/>
  <!-- Part dividers for bar 2 (every 25px) -->
  <line x1="70" y1="65" x2="70" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="95" y1="65" x2="95" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="120" y1="65" x2="120" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="145" y1="65" x2="145" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="170" y1="65" x2="170" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="195" y1="65" x2="195" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="220" y1="65" x2="220" y2="95" stroke="#5b5ef4" stroke-width="0.8"/>
  <line x1="245" y1="65" x2="245" y2="95" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="65" x2="270" y2="95" stroke="#64748b" stroke-width="0.8"/>
  <line x1="295" y1="65" x2="295" y2="95" stroke="#64748b" stroke-width="0.8"/>
  <line x1="320" y1="65" x2="320" y2="95" stroke="#64748b" stroke-width="0.8"/>
  <!-- "=" sign row 2 -->
  <text x="352" y="84" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="16" font-weight="700">=</text>
  <!-- Caption -->
  <text x="190" y="113" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Both bars show the same amount shaded</text>
</svg>`,
      answer: 2,
      explanation: "Equivalent fractions are formed by multiplying (or dividing) both numerator and denominator by the same non-zero number. 2/3 × 4/4 = 8/12. You can verify: 8 ÷ 12 = 2 ÷ 3 = 0.666..."
    },
    {
      id: "c6_q10",
      topic: "Equal fractions",
      type: "input",
      question: "Find the missing numerator: <strong>?/20 = 3/4</strong>",
      answer: "15",
      acceptableAnswers: ["15"],
      explanation: "The denominator increased from 4 to 20 (multiplied by 5), so the numerator must also be multiplied by 5. 3 × 5 = 15. Therefore 15/20 = 3/4."
    },
    {
      id: "c6_q11",
      topic: "Lowest terms",
      type: "mcq",
      question: "Write <strong>18/24</strong> in its lowest terms.",
      options: ["9/12", "3/4", "6/8", "2/3"],
      answer: 1,
      explanation: "To reduce to lowest terms, divide both numerator and denominator by their Highest Common Factor (HCF). The HCF of 18 and 24 is 6. 18 ÷ 6 = 3 and 24 ÷ 6 = 4, so 18/24 = 3/4 in lowest terms."
    },
    {
      id: "c6_q12",
      topic: "Lowest terms",
      type: "input",
      question: "Write <strong>30/45</strong> in its lowest terms as a fraction.",
      answer: "2/3",
      acceptableAnswers: ["2/3"],
      explanation: "The HCF of 30 and 45 is 15. Dividing both by 15: 30 ÷ 15 = 2 and 45 ÷ 15 = 3, so 30/45 = 2/3 in lowest terms. Since 2 and 3 share no common factor other than 1, this is the simplest form."
    },
    {
      id: "c6_q13",
      topic: "Comparing fractions",
      type: "mcq",
      question: "Which symbol correctly compares <strong>3/4</strong> and <strong>5/8</strong>?",
      options: ["3/4 &lt; 5/8", "3/4 = 5/8", "3/4 &gt; 5/8", "Cannot be compared"],
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 120" aria-label="Two fraction bars comparing 3/4 and 5/8">
  <rect width="380" height="120" fill="#f8fafc" rx="8"/>
  <!-- Label: 3/4 -->
  <text x="10" y="34" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3/4</text>
  <!-- Bar 1: divided into 4 parts, 3 shaded — bar x=45, width=300, each part=75px -->
  <rect x="45" y="15" width="300" height="30" fill="white" stroke="#64748b" stroke-width="1.5" rx="3"/>
  <rect x="45" y="15" width="225" height="30" fill="rgba(91,94,244,0.6)" stroke="#5b5ef4" stroke-width="1.5" rx="3"/>
  <rect x="270" y="15" width="75" height="30" fill="white" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="15" x2="120" y2="45" stroke="#5b5ef4" stroke-width="1"/>
  <line x1="195" y1="15" x2="195" y2="45" stroke="#5b5ef4" stroke-width="1"/>
  <line x1="270" y1="15" x2="270" y2="45" stroke="#64748b" stroke-width="1"/>
  <!-- Label: 5/8 -->
  <text x="10" y="84" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5/8</text>
  <!-- Bar 2: divided into 8 parts, 5 shaded — each part = 37.5px -->
  <rect x="45" y="65" width="300" height="30" fill="white" stroke="#64748b" stroke-width="1.5" rx="3"/>
  <rect x="45" y="65" width="187.5" height="30" fill="rgba(244,63,94,0.5)" stroke="#f43f5e" stroke-width="1.5" rx="3"/>
  <rect x="232.5" y="65" width="112.5" height="30" fill="white" stroke="#64748b" stroke-width="1"/>
  <line x1="82.5" y1="65" x2="82.5" y2="95" stroke="#f43f5e" stroke-width="0.8"/>
  <line x1="120" y1="65" x2="120" y2="95" stroke="#f43f5e" stroke-width="0.8"/>
  <line x1="157.5" y1="65" x2="157.5" y2="95" stroke="#f43f5e" stroke-width="0.8"/>
  <line x1="195" y1="65" x2="195" y2="95" stroke="#f43f5e" stroke-width="0.8"/>
  <line x1="232.5" y1="65" x2="232.5" y2="95" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="65" x2="270" y2="95" stroke="#64748b" stroke-width="0.8"/>
  <line x1="307.5" y1="65" x2="307.5" y2="95" stroke="#64748b" stroke-width="0.8"/>
  <!-- Dashed comparison line at 6/8 = 3/4 boundary (x=270) -->
  <line x1="270" y1="12" x2="270" y2="98" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Caption -->
  <text x="190" y="113" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Both bars start at the same left edge — compare the shaded lengths</text>
</svg>`,
      answer: 2,
      explanation: "Convert to a common denominator of 8: 3/4 = 6/8. Since 6/8 &gt; 5/8, we have 3/4 &gt; 5/8. Always rewrite fractions with a common denominator before comparing them."
    },
    {
      id: "c6_q14",
      topic: "Adding and subtracting fractions",
      type: "mcq",
      question: "What is <strong>2/9 + 5/9</strong>?",
      options: ["7/18", "10/9", "7/9", "7/81"],
      answer: 2,
      explanation: "When fractions share the same denominator, simply add the numerators and keep the denominator the same. 2/9 + 5/9 = (2 + 5)/9 = 7/9. The denominator stays 9 because the size of each part has not changed."
    },
    {
      id: "c6_q15",
      topic: "Adding and subtracting fractions",
      type: "input",
      question: "Calculate <strong>1/2 + 1/3</strong>. Write your answer as a fraction in lowest terms.",
      answer: "5/6",
      acceptableAnswers: ["5/6"],
      explanation: "The LCD of 2 and 3 is 6. Convert: 1/2 = 3/6 and 1/3 = 2/6. Add the numerators: 3/6 + 2/6 = 5/6. Since 5 and 6 share no common factors, 5/6 is already in lowest terms."
    },
    {
      id: "c6_q16",
      topic: "Adding and subtracting fractions",
      type: "mcq",
      question: "What is <strong>5/6 − 1/4</strong>?",
      options: ["4/2", "4/12", "7/12", "1/3"],
      answer: 2,
      explanation: "The LCD of 6 and 4 is 12. Convert: 5/6 = 10/12 and 1/4 = 3/12. Subtract: 10/12 − 3/12 = 7/12. Since 7 and 12 share no common factors other than 1, 7/12 is in lowest terms."
    },
    {
      id: "c6_q17",
      topic: "Multiplying a fraction by a whole number",
      type: "mcq",
      question: "What is <strong>4 × 3/7</strong>?",
      options: ["12/28", "7/12", "12/7", "3/28"],
      answer: 2,
      explanation: "To multiply a fraction by a whole number, multiply the numerator by the whole number and keep the denominator the same. 4 × 3/7 = (4 × 3)/7 = 12/7. This can also be written as the mixed number 1 5/7."
    },
    {
      id: "c6_q18",
      topic: "Multiplying a fraction by a whole number",
      type: "input",
      question: "Calculate <strong>5 × 2/3</strong>. Write your answer as a mixed number in the form <em>a b/c</em>.",
      answer: "3 1/3",
      acceptableAnswers: ["3 1/3", "10/3"],
      explanation: "Multiply the numerator: 5 × 2/3 = 10/3. Convert to a mixed number by dividing: 10 ÷ 3 = 3 remainder 1, so the answer is 3 1/3."
    },
    {
      id: "c6_q19",
      topic: "A fraction of a quantity",
      type: "mcq",
      question: "What is <strong>3/4</strong> of 24?",
      options: ["6", "8", "18", "16"],
      answer: 2,
      explanation: "To find a fraction of a quantity, divide by the denominator then multiply by the numerator. 24 ÷ 4 = 6, then 6 × 3 = 18. So 3/4 of 24 = 18."
    },
    {
      id: "c6_q20",
      topic: "A fraction of a quantity",
      type: "input",
      question: "A bag contains 40 marbles. <strong>2/5</strong> of the marbles are red. How many marbles are red?",
      answer: "16",
      acceptableAnswers: ["16"],
      explanation: "Find 2/5 of 40: first divide by the denominator, 40 ÷ 5 = 8, then multiply by the numerator, 8 × 2 = 16. There are 16 red marbles."
    },
    {
      id: "c6_q21",
      topic: "Fraction vocabulary",
      type: "mcq",
      question: "Which of the following is an <strong>improper fraction</strong>?",
      options: ["3/7", "5/12", "11/4", "1/2"],
      answer: 2,
      explanation: "An <strong>improper fraction</strong> has a numerator that is <em>greater than or equal to</em> its denominator, which means its value is 1 or more. In 11/4, the numerator 11 is greater than the denominator 4, making it an improper fraction. The others (3/7, 5/12, 1/2) are all proper fractions because their numerators are smaller than their denominators."
    },
    {
      id: "c6_q22",
      topic: "Fraction vocabulary",
      type: "mcq",
      question: "The number <strong>3 2/7</strong> is best described as which type of number?",
      options: ["A proper fraction", "An improper fraction", "A mixed number", "A whole number"],
      answer: 2,
      explanation: "A <strong>mixed number</strong> combines a whole number and a proper fraction. Here, 3 is the whole number part and 2/7 is the proper fraction part, so 3 2/7 is a mixed number. It sits between 3 and 4 on the number line."
    },
    {
      id: "c6_q23",
      topic: "Fraction vocabulary",
      type: "mcq",
      question: "In the fraction <strong>7/10</strong>, the number 7 is called the _____ and the number 10 is called the _____.",
      options: ["denominator … numerator", "quotient … divisor", "numerator … denominator", "factor … multiple"],
      answer: 2,
      explanation: "In any fraction, the <strong>numerator</strong> is the top number (it counts how many parts you have) and the <strong>denominator</strong> is the bottom number (it tells you how many equal parts the whole is split into). So in 7/10, 7 is the numerator and 10 is the denominator."
    },
    {
      id: "c6_q24",
      topic: "Comparing fractions",
      type: "mcq",
      question: "Which fraction is <strong>greater</strong>: <strong>2/3</strong> or <strong>3/5</strong>?",
      options: ["3/5, because 3 &gt; 2", "2/3, because 3 &lt; 5", "They are equal", "Cannot be determined"],
      answer: 1,
      explanation: "Find a common denominator: LCD of 3 and 5 is 15. Convert: 2/3 = 10/15 and 3/5 = 9/15. Since 10/15 &gt; 9/15, we have 2/3 &gt; 3/5. Be careful — a bigger numerator alone doesn't decide it; you must compare with the same denominator."
    },
    {
      id: "c6_q25",
      topic: "Comparing fractions",
      type: "mcq",
      question: "Which list shows the fractions in <strong>ascending order</strong> (smallest to largest)?",
      options: ["3/4, 1/2, 2/3", "1/2, 3/4, 2/3", "1/2, 2/3, 3/4", "2/3, 1/2, 3/4"],
      answer: 2,
      explanation: "Convert to a common denominator of 12: 1/2 = 6/12, 2/3 = 8/12, 3/4 = 9/12. In ascending order: 6/12, 8/12, 9/12 — which is 1/2, 2/3, 3/4. Always convert before ordering!"
    },
    {
      id: "c6_q26",
      topic: "Ordering fractions",
      type: "mcq",
      question: "Put these fractions in order from <strong>smallest to largest</strong>: <strong>5/6, 3/4, 7/12</strong>",
      options: ["3/4, 5/6, 7/12", "7/12, 3/4, 5/6", "5/6, 7/12, 3/4", "7/12, 5/6, 3/4"],
      answer: 1,
      explanation: "The LCD of 6, 4, and 12 is 12. Convert: 5/6 = 10/12, 3/4 = 9/12, 7/12 = 7/12. Ordering from smallest: 7/12, 9/12, 10/12 — which is 7/12, 3/4, 5/6. Great work using common denominators!"
    },
    {
      id: "c6_q27",
      topic: "Ordering fractions",
      type: "input",
      question: "Which fraction is the <strong>largest</strong>: 3/8, 1/2, or 5/12? Write your answer as a fraction.",
      answer: "1/2",
      acceptableAnswers: ["1/2"],
      explanation: "Find the LCD of 8, 2, and 12, which is 24. Convert: 3/8 = 9/24, 1/2 = 12/24, 5/12 = 10/24. The largest is 12/24 = 1/2. So 1/2 is the greatest of the three fractions."
    },
    {
      id: "c6_q28",
      topic: "Adding and subtracting fractions",
      type: "input",
      question: "Calculate <strong>7/8 − 3/8</strong>. Write your answer in lowest terms.",
      answer: "1/2",
      acceptableAnswers: ["1/2", "4/8"],
      explanation: "When denominators are the same, subtract the numerators and keep the denominator. 7/8 − 3/8 = 4/8. Now simplify: the HCF of 4 and 8 is 4, so 4/8 = 1/2."
    },
    {
      id: "c6_q29",
      topic: "Adding and subtracting fractions",
      type: "mcq",
      question: "A pizza is cut into 10 equal slices. Asha eats <strong>3/10</strong> of it and Ben eats <strong>4/10</strong>. What fraction of the pizza is left?",
      options: ["7/10", "4/10", "3/10", "1/2"],
      answer: 2,
      explanation: "Together, Asha and Ben eat 3/10 + 4/10 = 7/10. The fraction left is 1 − 7/10 = 10/10 − 7/10 = 3/10. The pizza has 3 slices remaining out of 10."
    },
    {
      id: "c6_q30",
      topic: "Adding and subtracting fractions",
      type: "input",
      question: "Calculate <strong>3/4 − 2/5</strong>. Write your answer as a fraction in lowest terms.",
      answer: "7/20",
      acceptableAnswers: ["7/20"],
      explanation: "The LCD of 4 and 5 is 20. Convert: 3/4 = 15/20 and 2/5 = 8/20. Subtract: 15/20 − 8/20 = 7/20. Since 7 is prime and does not divide 20, this fraction is already in lowest terms."
    },
    {
      id: "c6_q37",
      topic: "A fraction of a quantity",
      type: "mcq",
      question: "A school has 360 students. <strong>5/9</strong> of the students walk to school. How many students walk?",
      options: ["40", "180", "200", "45"],
      answer: 2,
      explanation: "Find 5/9 of 360: divide by the denominator first, 360 ÷ 9 = 40, then multiply by the numerator, 40 × 5 = 200. So 200 students walk to school."
    },
    {
      id: "c6_q38",
      topic: "A fraction of a quantity",
      type: "input",
      question: "Pragathy spends <strong>3/8</strong> of her 48-minute free period reading. How many minutes does she spend reading?",
      answer: "18",
      acceptableAnswers: ["18", "18 minutes"],
      explanation: "Find 3/8 of 48: 48 ÷ 8 = 6, then 6 × 3 = 18. Pragathy spends 18 minutes reading. Nice work — dividing first makes the numbers easier!"
    },
    {
      id: "c6_q39",
      topic: "Equivalent fractions",
      type: "input",
      question: "Find the missing denominator: <strong>5/6 = 35/?</strong>",
      answer: "42",
      acceptableAnswers: ["42"],
      explanation: "The numerator went from 5 to 35 — it was multiplied by 7. So the denominator must also be multiplied by 7: 6 × 7 = 42. Therefore 5/6 = 35/42."
    },
    {
      id: "c6_q40",
      topic: "Lowest terms",
      type: "mcq",
      question: "Which of these fractions is <strong>already</strong> in its lowest terms?",
      options: ["6/10", "15/20", "7/11", "4/14"],
      answer: 2,
      explanation: "A fraction is in lowest terms when the numerator and denominator share no common factor other than 1. 7 and 11 are both prime numbers, so their only common factor is 1 — 7/11 is already in lowest terms. The others can all be simplified: 6/10 = 3/5, 15/20 = 3/4, and 4/14 = 2/7."
    },
    {
      id: "c6_q41",
      topic: "Mixed number arithmetic",
      difficulty: "challenging",
      type: "input",
      question: "Calculate <strong>2 3/4 + 1 5/6</strong>. Write your answer as a mixed number in the form <em>a b/c</em>.",
      answer: "4 7/12",
      acceptableAnswers: ["4 7/12"],
      explanation: "Step 1 — Add the whole numbers: 2 + 1 = 3.<br>Step 2 — Add the fractions. LCD of 4 and 6 is 12: 3/4 = 9/12 and 5/6 = 10/12. So 9/12 + 10/12 = 19/12.<br>Step 3 — Convert the improper fraction: 19/12 = 1 7/12.<br>Step 4 — Add to the whole number: 3 + 1 7/12 = 4 7/12."
    },
    {
      id: "c6_q43",
      topic: "Multi-step fractions",
      difficulty: "challenging",
      type: "input",
      question: "A water tank is <strong>2/3 full</strong>. After watering the garden, <strong>3/8 of a full tank</strong> is used. What fraction of the full tank is left? Write your answer in lowest terms.",
      answer: "7/24",
      acceptableAnswers: ["7/24"],
      explanation: "Start with 2/3 of a full tank. Subtract 3/8 (of a full tank).<br>Find LCD of 3 and 8: LCD = 24.<br>Convert: 2/3 = 16/24 and 3/8 = 9/24.<br>Subtract: 16/24 − 9/24 = 7/24.<br>Check: 7 and 24 share no common factor, so 7/24 is the final answer."
    },
    {
      id: "c6_q44",
      topic: "Ordering fractions",
      difficulty: "challenging",
      type: "input",
      question: "Arrange these five fractions in <strong>descending order</strong> (largest first) and write the <strong>middle (3rd) fraction</strong>: <strong>1/2, 3/5, 7/10, 2/5, 3/4</strong>",
      answer: "3/5",
      acceptableAnswers: ["3/5"],
      explanation: "Convert all to a common denominator of 20:<br>1/2 = 10/20, 3/5 = 12/20, 7/10 = 14/20, 2/5 = 8/20, 3/4 = 15/20.<br>Descending order: 15/20, 14/20, 12/20, 10/20, 8/20 → 3/4, 7/10, 3/5, 1/2, 2/5.<br>The middle (3rd) fraction is 3/5."
    },
    {
      id: "c6_q45",
      topic: "A fraction of a quantity",
      difficulty: "challenging",
      type: "input",
      question: "A farmer plants crops on <strong>2/5</strong> of a 35-hectare field. How many hectares have crops planted on them?",
      answer: "14",
      acceptableAnswers: ["14", "14 hectares"],
      explanation: "To find a fraction of a quantity, divide by the denominator then multiply by the numerator.<br>35 ÷ 5 = 7, then 7 × 2 = 14.<br>So 2/5 of 35 = 14 hectares."
    },
    {
      id: "c6_q46",
      topic: "Fractions",
      type: "mcq",
      question: "How do you write the fraction <strong>3/5</strong> in words?",
      options: ["Three fives", "Three fifths", "Five thirds", "Three over five"],
      answer: 1,
      explanation: "The denominator tells us the name of each part. When the denominator is 5, each part is called a <em>fifth</em>. The numerator 3 tells us how many parts, so 3/5 is read as <strong>three fifths</strong>. (Other examples: 2/3 = two thirds, 3/4 = three quarters, 1/8 = one eighth.)"
    },
    {
      id: "c6_q47",
      topic: "Fractions as division",
      type: "mcq",
      question: "Write <strong>7 ÷ 9</strong> as a fraction.",
      options: ["9/7", "7/9", "16/1", "63/1"],
      answer: 1,
      explanation: "A division can always be written as a fraction: the number being divided (7) becomes the numerator, and the number we divide by (9) becomes the denominator. So 7 ÷ 9 = 7/9."
    },
    {
      id: "c6_q48",
      topic: "Fractions as division",
      type: "input",
      question: "Write the fraction <strong>20/4</strong> as a division and work it out as a whole number. Write your answer as a whole number.",
      answer: "5",
      acceptableAnswers: ["5"],
      explanation: "20/4 means 20 ÷ 4. Dividing: 20 ÷ 4 = 5. So the fraction 20/4 equals the whole number 5. This works whenever the numerator is exactly divisible by the denominator."
    },
    {
      id: "c6_q49",
      topic: "Proper and improper fractions",
      type: "mcq",
      question: "Which of these numbers is a <strong>mixed number</strong>?",
      options: ["7/3", "3/7", "3 1/7", "7"],
      answer: 2,
      explanation: "A <strong>mixed number</strong> has a whole-number part AND a fraction part written together. 3 1/7 has the whole number 3 and the fraction 1/7, so it is a mixed number. 7/3 is an improper fraction (numerator > denominator), 3/7 is a proper fraction, and 7 on its own is just a whole number."
    },
    {
      id: "c6_q50",
      topic: "Fractions on a number line",
      type: "mcq",
      question: "A number line from 0 to 1 is divided into <strong>5 equal parts</strong>. A dot is placed at the <strong>3rd mark</strong> from 0. What fraction does the dot represent?",
      options: ["3/1", "5/3", "3/5", "2/5"],
      answer: 2,
      explanation: "When the space from 0 to 1 is divided into 5 equal parts, each mark is 1/5 apart. The 1st mark is 1/5, the 2nd mark is 2/5, and the 3rd mark is 3/5. So the dot is at 3/5."
    },
    {
      id: "c6_q51",
      topic: "Equal fractions",
      type: "mcq",
      question: "Write <strong>2/3</strong> as an equivalent fraction with denominator 12.",
      options: ["4/12", "6/12", "8/12", "3/12"],
      answer: 2,
      explanation: "To change the denominator from 3 to 12, multiply by 4 (since 3 × 4 = 12). You must also multiply the numerator by the same number: 2 × 4 = 8. So 2/3 = 8/12. You can check: 8 ÷ 12 = 2 ÷ 3."
    },
    {
      id: "c6_q52",
      topic: "Comparing fractions",
      type: "mcq",
      question: "Which symbol correctly compares <strong>5/9</strong> and <strong>7/9</strong>?",
      options: ["5/9 &gt; 7/9", "5/9 = 7/9", "5/9 &lt; 7/9", "Cannot be compared"],
      answer: 2,
      explanation: "Both fractions have the <em>same denominator</em> (9), so we just compare the numerators. Since 5 &lt; 7, we have 5/9 &lt; 7/9. When denominators are the same, the fraction with the bigger numerator is bigger."
    },
    {
      id: "c6_q53",
      topic: "Adding and subtracting fractions",
      type: "input",
      question: "Find: <strong>3 + 2/9 + 4/9</strong>. Write your answer as a mixed number in the form <em>a b/c</em>.",
      answer: "3 2/3",
      acceptableAnswers: ["3 2/3", "3 6/9"],
      explanation: "First add the fractions with the same denominator: 2/9 + 4/9 = 6/9. Now simplify 6/9: the HCF of 6 and 9 is 3, so 6/9 = 2/3. Then add the whole number: 3 + 2/3 = 3 2/3."
    },
    {
      id: "c6_q54",
      topic: "Adding and subtracting fractions",
      type: "mcq",
      question: "Find <strong>4 − 1 2/3</strong>.",
      options: ["3 2/3", "2 2/3", "2 1/3", "3 1/3"],
      answer: 2,
      explanation: "Write 4 as an improper fraction with denominator 3: 4 = 12/3. Write 1 2/3 as an improper fraction: 1 × 3 + 2 = 5, so 1 2/3 = 5/3. Subtract: 12/3 − 5/3 = 7/3. Convert back: 7 ÷ 3 = 2 remainder 1, so 7/3 = 2 1/3."
    },
    {
      id: "c6_q55",
      topic: "Multiplying a fraction by a whole number",
      type: "input",
      question: "Calculate <strong>1/4 × 20</strong>. Write your answer as a whole number.",
      answer: "5",
      acceptableAnswers: ["5"],
      explanation: "Multiply the numerator by the whole number and keep the denominator: 1/4 × 20 = (1 × 20)/4 = 20/4 = 5. The answer is a whole number because 20 is exactly divisible by 4."
    },
    {
      id: "c6_q56",
      topic: "A fraction of a quantity",
      type: "mcq",
      question: "What is <strong>1/5</strong> of 35?",
      options: ["5", "7", "175", "30"],
      answer: 1,
      explanation: "To find a unit fraction (1/n) of a quantity, divide by the denominator. 35 ÷ 5 = 7. So 1/5 of 35 = 7. Because the numerator is 1, there is no need to multiply at the end."
    }
  ]
};
