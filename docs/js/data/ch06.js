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
      answer: 2,
      explanation: "When the interval from 0 to 1 is divided into 6 equal parts, each mark is 1/6 apart. The 4th mark is at 4 × (1/6) = 4/6. This fraction can also be simplified to 2/3."
    },
    {
      id: "c6_q8",
      topic: "Fractions on a number line",
      type: "mcq",
      question: "Which of the following fractions is between <strong>1/2 and 3/4</strong> on a number line?",
      options: ["1/3", "7/8", "5/8", "1/4"],
      answer: 2,
      explanation: "Convert to a common denominator of 8: 1/2 = 4/8 and 3/4 = 6/8. We need a fraction between 4/8 and 6/8 — that is 5/8. Checking: 1/3 ≈ 0.33 and 1/4 = 0.25 are both less than 1/2, while 7/8 is greater than 3/4."
    },
    {
      id: "c6_q9",
      topic: "Equal fractions",
      type: "mcq",
      question: "Which fraction is <strong>equivalent</strong> to 2/3?",
      options: ["3/4", "4/9", "8/12", "6/15"],
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
    }
  ]
};
