const ch13 = {
  id: 13,
  title: "Positive and Negative Numbers",
  icon: "➕➖",
  color: "#7c3aed",
  topics: ["The number line","Ordering numbers","Words indicating positive and negative","Addition and subtraction on the number line","Adding and subtracting negative numbers","Multiplying negative numbers","Dividing negative numbers"],
  questions: [
    {
      id: "c13_q1",
      topic: "The number line",
      type: "mcq",
      question: "On a number line, which number is <strong>furthest to the left</strong>?",
      options: ["-3", "0", "2", "-1"],
      answer: 0,
      explanation: "On a number line, numbers decrease as you move left. −3 is less than −1, 0, and 2, so it is furthest to the left."
    },
    {
      id: "c13_q2",
      topic: "The number line",
      type: "mcq",
      question: "What is the distance between <strong>−4</strong> and <strong>3</strong> on the number line?",
      options: ["1", "7", "−7", "−1"],
      answer: 1,
      explanation: "To find the distance between two numbers on the number line, count the steps from −4 to 3: that is 4 steps to reach 0, then 3 more steps to reach 3, giving 4 + 3 = 7."
    },
    {
      id: "c13_q3",
      topic: "The number line",
      type: "input",
      question: "On a number line, what integer is exactly halfway between <strong>−6</strong> and <strong>2</strong>?",
      answer: "-2",
      acceptableAnswers: ["-2"],
      explanation: "The midpoint is found by calculating (−6 + 2) ÷ 2 = −4 ÷ 2 = −2. You can also count 4 steps from each end: −6 + 4 = −2 and 2 − 4 = −2."
    },
    {
      id: "c13_q4",
      topic: "Ordering numbers",
      type: "mcq",
      question: "Which list shows these numbers in order from <strong>least to greatest</strong>?<br>−5, 3, −1, 0, −8",
      options: [
        "−1, −5, −8, 0, 3",
        "3, 0, −1, −5, −8",
        "−8, −5, −1, 0, 3",
        "−8, −1, −5, 0, 3"
      ],
      answer: 2,
      explanation: "Negative numbers with larger absolute values are smaller. So the correct order least to greatest is: −8, −5, −1, 0, 3."
    },
    {
      id: "c13_q5",
      topic: "Ordering numbers",
      type: "mcq",
      question: "Which statement is <strong>true</strong>?",
      options: ["-7 > -3", "-2 < -9", "0 > -1", "-5 > 1"],
      answer: 2,
      explanation: "Zero is greater than any negative number, so 0 > −1 is true. On the number line, 0 is to the right of −1."
    },
    {
      id: "c13_q6",
      topic: "Ordering numbers",
      type: "input",
      question: "Write these temperatures in order from <strong>coldest to warmest</strong>, separated by commas:<br>−3°C, 5°C, −10°C, 0°C, −1°C",
      answer: "-10, -3, -1, 0, 5",
      acceptableAnswers: ["-10, -3, -1, 0, 5", "-10,-3,-1,0,5", "−10, −3, −1, 0, 5"],
      explanation: "Coldest means lowest value. Ordering from least to greatest: −10°C, −3°C, −1°C, 0°C, 5°C. The more negative a temperature, the colder it is."
    },
    {
      id: "c13_q7",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "A submarine is <em>200 metres below sea level</em>. Which integer best represents this?",
      options: ["200", "−200", "0", "−20"],
      answer: 1,
      explanation: "Below sea level is represented by a negative number. 200 metres below sea level is written as −200 metres. Sea level itself is 0."
    },
    {
      id: "c13_q8",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "Sarah has a bank balance of <strong>−$45</strong>. What does this mean in real life?",
      options: [
        "She has $45 in her account",
        "She owes $45 to the bank",
        "She earned $45 today",
        "She has no money"
      ],
      answer: 1,
      explanation: "A negative bank balance means you owe money. −$45 means Sarah owes the bank $45; her account is overdrawn by $45."
    },
    {
      id: "c13_q9",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "Which word or phrase indicates a <strong>positive</strong> number?",
      options: ["below", "loss", "above sea level", "withdrawal"],
      answer: 2,
      explanation: "Above sea level means higher than zero, which is represented by a positive number. Words like below, loss, and withdrawal all indicate negative values."
    },
    {
      id: "c13_q10",
      topic: "Addition and subtraction on the number line",
      type: "mcq",
      question: "Starting at <strong>−3</strong> on the number line and moving <strong>5 steps to the right</strong>, where do you land?",
      options: ["-8", "2", "8", "-2"],
      answer: 1,
      explanation: "Moving right on the number line means adding. −3 + 5 = 2. Starting at −3, move right 5 steps: −3, −2, −1, 0, 1, 2."
    },
    {
      id: "c13_q11",
      topic: "Addition and subtraction on the number line",
      type: "input",
      question: "Use the number line to calculate: <strong>−2 + (−4)</strong>",
      answer: "-6",
      acceptableAnswers: ["-6"],
      explanation: "Adding a negative number means moving left on the number line. Start at −2 and move 4 steps to the left: −2 − 4 = −6."
    },
    {
      id: "c13_q12",
      topic: "Adding and subtracting negative numbers",
      type: "mcq",
      question: "Calculate: <strong>5 − (−3)</strong>",
      options: ["2", "8", "-2", "-8"],
      answer: 1,
      explanation: "Subtracting a negative number is the same as adding the positive: 5 − (−3) = 5 + 3 = 8. Two negatives together make a positive."
    },
    {
      id: "c13_q13",
      topic: "Adding and subtracting negative numbers",
      type: "mcq",
      question: "Calculate: <strong>−3 + (−5)</strong>",
      options: ["2", "8", "−8", "−2"],
      answer: 2,
      explanation: "Adding two negative numbers gives a more negative result: −3 + (−5) = −3 − 5 = −8. Both numbers are negative so we add their sizes and keep the negative sign."
    },
    {
      id: "c13_q14",
      topic: "Adding and subtracting negative numbers",
      type: "input",
      question: "Calculate: <strong>−7 − (−4)</strong>",
      answer: "-3",
      acceptableAnswers: ["-3"],
      explanation: "Subtracting a negative is the same as adding the positive: −7 − (−4) = −7 + 4 = −3. Start at −7 and move 4 steps to the right."
    },
    {
      id: "c13_q15",
      topic: "Multiplying negative numbers",
      type: "mcq",
      question: "Calculate: <strong>(−4) × (−6)</strong>",
      options: ["-24", "24", "10", "-10"],
      answer: 1,
      explanation: "When multiplying two negative numbers, the result is positive. (−4) × (−6) = +24. The rule is: same signs give a positive result."
    },
    {
      id: "c13_q16",
      topic: "Multiplying negative numbers",
      type: "mcq",
      question: "Calculate: <strong>3 × (−7)</strong>",
      options: ["21", "4", "-21", "-4"],
      answer: 2,
      explanation: "When multiplying a positive number by a negative number, the result is negative. 3 × (−7) = −21. Different signs give a negative result."
    },
    {
      id: "c13_q17",
      topic: "Multiplying negative numbers",
      type: "input",
      question: "Calculate: <strong>(−5) × 8</strong>",
      answer: "-40",
      acceptableAnswers: ["-40"],
      explanation: "A negative times a positive gives a negative result. (−5) × 8 = −40. Different signs always produce a negative answer."
    },
    {
      id: "c13_q18",
      topic: "Dividing negative numbers",
      type: "mcq",
      question: "Calculate: <strong>−36 ÷ (−4)</strong>",
      options: ["-9", "9", "-40", "40"],
      answer: 1,
      explanation: "When dividing two negative numbers, the result is positive. −36 ÷ (−4) = +9. The rule for division is the same as for multiplication: same signs give a positive result."
    },
    {
      id: "c13_q19",
      topic: "Dividing negative numbers",
      type: "mcq",
      question: "Calculate: <strong>−48 ÷ 6</strong>",
      options: ["8", "-8", "-42", "42"],
      answer: 1,
      explanation: "When dividing a negative by a positive, the result is negative. −48 ÷ 6 = −8. Different signs give a negative result, just like in multiplication."
    },
    {
      id: "c13_q20",
      topic: "Dividing negative numbers",
      type: "input",
      question: "Calculate: <strong>56 ÷ (−7)</strong>",
      answer: "-8",
      acceptableAnswers: ["-8"],
      explanation: "A positive divided by a negative gives a negative result. 56 ÷ (−7) = −8. The division rules follow the same sign rules as multiplication: different signs produce a negative answer."
    }
  ]
};
