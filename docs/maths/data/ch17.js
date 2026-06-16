const ch17 = {
  id: 17,
  title: "Probability",
  icon: "🎲",
  color: "#d97706",
  topics: ["Describing probability", "Using numbers to describe probabilities", "Outcomes", "Calculating probabilities"],
  questions: [
    {
      id: "c17_q1",
      topic: "Describing probability",
      type: "mcq",
      question: "Which word best describes the probability of rolling a number greater than 6 on a standard six-sided die?",
      options: ["Unlikely", "Even chance", "Certain", "Impossible"],
      answer: 3,
      explanation: "A standard die has faces numbered 1 to 6. There is no number greater than 6, so this event can never happen — it is impossible."
    },
    {
      id: "c17_q2",
      topic: "Describing probability",
      type: "mcq",
      question: "A bag contains 3 red counters and 3 blue counters. You pick one counter without looking. Which word best describes the chance of picking a red counter?",
      options: ["Impossible", "Unlikely", "Even chance", "Certain"],
      answer: 2,
      explanation: "There are 3 red and 3 blue counters, so exactly half the counters are red. This gives an even chance (50-50) of picking red."
    },
    {
      id: "c17_q3",
      topic: "Describing probability",
      type: "mcq",
      question: "It is going to rain every day next week according to the forecast. Which word best describes the probability that it will rain at least one day next week?",
      options: ["Unlikely", "Even chance", "Likely", "Certain"],
      answer: 3,
      explanation: "If it is forecast to rain every single day, then rain on at least one day is guaranteed — that makes it certain."
    },
    {
      id: "c17_q4",
      topic: "Describing probability",
      type: "mcq",
      question: "A jar has 10 lollies: 8 are green and 2 are yellow. You pick one without looking. Which word best describes the chance of picking a yellow lolly?",
      options: ["Impossible", "Unlikely", "Even chance", "Likely"],
      answer: 1,
      explanation: "Only 2 out of 10 lollies are yellow, which is a small fraction (1/5). This means it is unlikely, but not impossible, to pick a yellow lolly."
    },
    {
      id: "c17_q5",
      topic: "Describing probability",
      type: "input",
      question: "A spinner has 5 equal sections: 4 are red and 1 is blue. Describe the probability of spinning <strong>red</strong> using one of these words: <em>impossible, unlikely, even chance, likely, certain</em>.",
      answer: "likely",
      acceptableAnswers: ["likely", "Likely"],
      explanation: "4 out of 5 sections are red, which is more than half. Since red is much more common than the other colour, spinning red is likely."
    },
    {
      id: "c17_q6",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Probability is always a number between which two values?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale from 0 to 1">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- End caps -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <!-- Quarter marks -->
  <line x1="115" y1="36" x2="115" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="265" y1="36" x2="265" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels below ticks -->
  <text x="40" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">0</text>
  <text x="115" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0.25</text>
  <text x="190" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">0.5</text>
  <text x="265" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0.75</text>
  <text x="340" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <!-- Labels above -->
  <text x="40" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Impossible</text>
  <text x="190" y="24" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Even chance</text>
  <text x="340" y="24" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Certain</text>
</svg>`,
      options: ["−1 and 1", "0 and 10", "0 and 1", "1 and 100"],
      answer: 2,
      explanation: "Probability is always measured on a scale from 0 to 1. A probability of 0 means impossible, and a probability of 1 means certain."
    },
    {
      id: "c17_q7",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "An event has a probability of 0. What does this mean?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale with 0 highlighted">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- End caps -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <!-- Quarter marks -->
  <line x1="115" y1="36" x2="115" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="265" y1="36" x2="265" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <!-- Highlighted point at 0 -->
  <circle cx="40" cy="40" r="7" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <!-- Labels below ticks -->
  <text x="40" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">0</text>
  <text x="115" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0.25</text>
  <text x="190" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0.5</text>
  <text x="265" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0.75</text>
  <text x="340" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <!-- Labels above -->
  <text x="40" y="22" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">← P = 0 here</text>
  <text x="340" y="24" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Certain</text>
</svg>`,
      options: ["The event is certain to happen", "The event is likely to happen", "The event is unlikely to happen", "The event is impossible"],
      answer: 3,
      explanation: "A probability of 0 means there is no chance the event can occur — it is impossible. A probability of 1 would mean it is certain."
    },
    {
      id: "c17_q8",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Which probability value represents an <strong>even chance</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale from 0 to 1 with quarter marks">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- End caps -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <!-- Quarter marks -->
  <line x1="115" y1="36" x2="115" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="265" y1="36" x2="265" y2="44" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels below ticks -->
  <text x="40" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">0</text>
  <text x="115" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1/4</text>
  <text x="190" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1/2</text>
  <text x="265" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3/4</text>
  <text x="340" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <!-- Labels above -->
  <text x="40" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Impossible</text>
  <text x="340" y="24" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Certain</text>
</svg>`,
      options: ["0", "1/4", "1/2", "1"],
      answer: 2,
      explanation: "An even chance means the event is equally likely to happen or not happen. This is represented by the probability 1/2, which is exactly halfway between 0 and 1."
    },
    {
      id: "c17_q9",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Which of the following correctly places the probabilities in order from <strong>least likely</strong> to <strong>most likely</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale with five marked points">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- Ticks at all 5 positions -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <line x1="115" y1="34" x2="115" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="265" y1="34" x2="265" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2.5"/>
  <!-- Circles at each position -->
  <circle cx="40" cy="40" r="5" fill="#64748b"/>
  <circle cx="115" cy="40" r="5" fill="#64748b"/>
  <circle cx="190" cy="40" r="5" fill="#64748b"/>
  <circle cx="265" cy="40" r="5" fill="#64748b"/>
  <circle cx="340" cy="40" r="5" fill="#64748b"/>
  <!-- Labels below — letters only, not values -->
  <text x="40" y="63" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">A</text>
  <text x="115" y="63" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B</text>
  <text x="190" y="63" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">C</text>
  <text x="265" y="63" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">D</text>
  <text x="340" y="63" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">E</text>
  <!-- Scale endpoints labelled -->
  <text x="40" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">0</text>
  <text x="340" y="24" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">1</text>
</svg>`,
      options: ["1/2, 1/4, 3/4, 0, 1", "0, 1/4, 1/2, 3/4, 1", "1, 3/4, 1/2, 1/4, 0", "1/4, 0, 1/2, 1, 3/4"],
      answer: 1,
      explanation: "Probabilities increase from 0 (impossible) to 1 (certain). In order: 0, 1/4, 1/2, 3/4, 1."
    },
    {
      id: "c17_q10",
      topic: "Using numbers to describe probabilities",
      type: "input",
      question: "A fair coin is flipped. What is the probability of getting <strong>tails</strong>? Write your answer as a fraction.",
      answer: "1/2",
      acceptableAnswers: ["1/2", "0.5"],
      explanation: "A fair coin has two equally likely outcomes: heads and tails. The probability of tails is 1 out of 2, which is written as 1/2."
    },
    {
      id: "c17_q11",
      topic: "Outcomes",
      type: "mcq",
      question: "A standard six-sided die is rolled. How many possible outcomes are there in the sample space?",
      options: ["3", "4", "6", "12"],
      answer: 2,
      explanation: "A standard die has faces numbered 1, 2, 3, 4, 5, and 6. There are 6 possible outcomes in the sample space."
    },
    {
      id: "c17_q12",
      topic: "Outcomes",
      type: "mcq",
      question: "A bag contains 1 red (R), 1 yellow (Y), 1 green (G), and 1 white (W) marble. You pick one marble at random. Which list correctly shows <strong>all</strong> possible outcomes?",
      options: ["R, Y, G", "R, Y, G, W, R", "R, Y, G, W", "Red and White only"],
      answer: 2,
      explanation: "The sample space lists every possible result. Since there are four different coloured marbles (R, Y, G, W), all four must be included. The complete sample space is: R, Y, G, W — giving 4 outcomes."
    },
    {
      id: "c17_q13",
      topic: "Outcomes",
      type: "mcq",
      question: "A bag contains 1 red (R), 1 green (G), and 1 blue (B) counter. You draw one counter. Which of the following correctly lists <strong>all</strong> possible outcomes?",
      options: ["R, G", "R, G, B, R", "R, G, B", "Red only"],
      answer: 2,
      explanation: "The sample space contains every possible result. Since there are three different coloured counters, the outcomes are R, G, and B — giving a sample space of 3 outcomes."
    },
    {
      id: "c17_q14",
      topic: "Outcomes",
      type: "input",
      question: "A spinner has sections labelled 1, 2, 3, and 4. How many outcomes are in the sample space?",
      answer: "4",
      acceptableAnswers: ["4"],
      explanation: "The sample space lists all possible results. Since the spinner has 4 sections (1, 2, 3, 4), there are 4 outcomes in the sample space."
    },
    {
      id: "c17_q15",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A bag contains 2 red, 3 blue, and 5 green counters. One counter is chosen at random. What is the probability of choosing a <strong>blue</strong> counter?",
      options: ["2/10", "3/10", "5/10", "3/5"],
      answer: 1,
      explanation: "There are 3 blue counters out of 10 total (2 + 3 + 5 = 10). P(blue) = favourable outcomes ÷ total outcomes = 3/10."
    },
    {
      id: "c17_q16",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A fair six-sided die is rolled. What is the probability of rolling an <strong>even number</strong>?",
      options: ["1/6", "2/6", "3/6", "4/6"],
      answer: 2,
      explanation: "The even numbers on a die are 2, 4, and 6 — that is 3 favourable outcomes out of 6 total. P(even) = 3/6, which can also be written as 1/2."
    },
    {
      id: "c17_q17",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A spinner has 8 equal sections numbered 1 to 8. What is the probability of spinning a number <strong>greater than 5</strong>?",
      options: ["3/8", "5/8", "2/8", "4/8"],
      answer: 0,
      explanation: "Numbers greater than 5 on the spinner are 6, 7, and 8 — that is 3 favourable outcomes out of 8 total equally likely outcomes. P(greater than 5) = 3/8."
    },
    {
      id: "c17_q18",
      topic: "Calculating probabilities",
      type: "input",
      question: "A standard pack of 52 playing cards is shuffled. A card is drawn at random. What is the probability of drawing a <strong>heart</strong>? Write your answer as a fraction.",
      answer: "1/4",
      acceptableAnswers: ["1/4", "13/52"],
      explanation: "There are 13 hearts in a standard pack of 52 cards. P(heart) = 13/52 = 1/4."
    },
    {
      id: "c17_q19",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A bag has 4 yellow and 6 purple counters. One counter is picked at random. What is the probability of picking a <strong>yellow</strong> counter?",
      options: ["4/6", "4/10", "6/10", "4/4"],
      answer: 1,
      explanation: "There are 4 yellow counters out of 4 + 6 = 10 total. P(yellow) = 4/10, which simplifies to 2/5."
    },
    {
      id: "c17_q20",
      topic: "Calculating probabilities",
      type: "input",
      question: "A bag has 5 red counters and 3 blue counters. One counter is picked at random. What is P(red)? Write your answer as a fraction.",
      answer: "5/8",
      acceptableAnswers: ["5/8"],
      explanation: "Total counters = 5 + 3 = 8. There are 5 red counters. P(red) = favourable outcomes ÷ total outcomes = 5/8."
    },
    {
      id: "c17_q21",
      topic: "Fairness",
      type: "mcq",
      question: "A spinner has 4 equal sections coloured red, blue, green, and yellow. Is this spinner <strong>fair</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" aria-label="Spinner with 4 equal sections">
  <rect width="320" height="220" fill="#f8fafc" rx="8"/>
  <text x="160" y="18" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Spinner with 4 equal sections</text>
  <!-- Circle background -->
  <circle cx="160" cy="120" r="85" fill="#e2e8f0"/>
  <!-- 4 equal quarter sections -->
  <path d="M160,120 L160,35 A85,85 0 0,1 245,120 Z" fill="#f43f5e"/>
  <path d="M160,120 L245,120 A85,85 0 0,1 160,205 Z" fill="#5b5ef4"/>
  <path d="M160,120 L160,205 A85,85 0 0,1 75,120 Z" fill="#22c55e"/>
  <path d="M160,120 L75,120 A85,85 0 0,1 160,35 Z" fill="#f59e0b"/>
  <!-- Centre dot -->
  <circle cx="160" cy="120" r="6" fill="#1e293b"/>
  <!-- Labels -->
  <text x="193" y="85" text-anchor="middle" fill="#fff" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Red</text>
  <text x="205" y="155" text-anchor="middle" fill="#fff" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Blue</text>
  <text x="118" y="155" text-anchor="middle" fill="#fff" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Green</text>
  <text x="118" y="85" text-anchor="middle" fill="#fff" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Yellow</text>
</svg>`,
      options: ["No, because it has 4 colours", "Yes, because each colour has an equal chance of being landed on", "No, because red is at the top", "Yes, but only if you spin it fast enough"],
      answer: 1,
      explanation: "A spinner is fair when all outcomes are equally likely. Since each section is the same size (1/4 of the spinner), every colour has a probability of 1/4 — so this spinner is fair."
    },
    {
      id: "c17_q22",
      topic: "Fairness",
      type: "mcq",
      question: "A bag contains 3 red marbles and 7 blue marbles. Soren says: 'This bag is fair because it has two colours.' Is Soren correct?",
      options: ["Yes, because there are two colours", "No, because red and blue are not equally likely — P(red) = 3/10 and P(blue) = 7/10", "Yes, because marbles are round", "No, because the bag needs exactly 5 of each colour to be fair"],
      answer: 1,
      explanation: "For a bag to be 'fair' (equally likely outcomes), each colour must have the same probability. Here P(red) = 3/10 and P(blue) = 7/10 — these are not equal, so the bag is NOT fair. Soren is wrong."
    },
    {
      id: "c17_q23",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A box contains 4 orange, 6 purple, and 2 white balls. One ball is chosen at random. What is the probability of choosing an <strong>orange</strong> ball?",
      options: ["4/6", "4/8", "4/12", "6/12"],
      answer: 2,
      explanation: "Total balls = 4 + 6 + 2 = 12. There are 4 orange balls. P(orange) = 4/12 = 1/3. Always count the total number of outcomes first."
    },
    {
      id: "c17_q24",
      topic: "Using numbers to describe probabilities",
      type: "input",
      question: "Write the probability 3/5 as a <strong>decimal</strong>.",
      answer: "0.6",
      acceptableAnswers: ["0.6", "0.60"],
      explanation: "To convert a fraction to a decimal, divide the numerator by the denominator: 3 ÷ 5 = 0.6. So P = 3/5 = 0.6. As a percentage this would be 60%."
    },
    {
      id: "c17_q25",
      topic: "Describing probability",
      type: "mcq",
      question: "Which word best describes the probability of rolling a 7 on a standard six-sided die?",
      options: ["Unlikely", "Even chance", "Likely", "Impossible"],
      answer: 3,
      explanation: "A standard die has faces numbered 1 to 6 only. Rolling a 7 cannot happen — there is no 7 on the die. So the probability is 0, which means the event is impossible."
    },
    {
      id: "c17_q26",
      topic: "Describing probability",
      type: "mcq",
      question: "A bag has 9 red balls and 1 blue ball. You pick one without looking. Which word best describes the probability of picking <strong>blue</strong>?",
      options: ["Impossible", "Unlikely", "Likely", "Certain"],
      answer: 1,
      explanation: "Only 1 out of 10 balls is blue. P(blue) = 1/10, which is close to 0. The event is possible but not very likely — so 'unlikely' is the best description."
    },
    {
      id: "c17_q27",
      topic: "Outcomes",
      type: "input",
      question: "A fair coin is flipped once. Write down <strong>all</strong> possible outcomes. How many outcomes are there in the sample space?",
      answer: "2",
      acceptableAnswers: ["2"],
      explanation: "When flipping a coin, there are exactly two possible outcomes: Heads (H) and Tails (T). The sample space is {H, T}, which has 2 outcomes."
    },
    {
      id: "c17_q28",
      topic: "Experimental probability",
      type: "mcq",
      question: "Mia flips a coin 40 times and gets heads 18 times. What is the <strong>experimental probability</strong> of getting heads?",
      options: ["18/40", "20/40", "18/20", "22/40"],
      answer: 0,
      explanation: "Experimental probability (relative frequency) = number of times event happened ÷ total number of trials. Heads came up 18 times out of 40 flips, so P(heads) = 18/40 = 9/20."
    },
    {
      id: "c17_q29",
      topic: "Experimental probability",
      type: "mcq",
      question: "A spinner is spun 200 times. It lands on yellow 50 times. What is the experimental probability of landing on yellow?",
      options: ["1/2", "1/4", "50/150", "200/50"],
      answer: 1,
      explanation: "Experimental probability = frequency ÷ total trials = 50 ÷ 200 = 1/4 = 0.25. The spinner landed on yellow 1 in every 4 spins on average."
    },
    {
      id: "c17_q30",
      topic: "Experimental probability",
      type: "input",
      question: "Tom rolls a die 30 times. The number 6 comes up 5 times. What is the experimental probability of rolling a 6? Write your answer as a fraction in its simplest form.",
      answer: "1/6",
      acceptableAnswers: ["1/6", "5/30"],
      explanation: "Experimental probability = number of 6s ÷ total rolls = 5/30 = 1/6. This is actually the same as the theoretical probability — nice!"
    },
    {
      id: "c17_q31",
      topic: "Theoretical vs experimental probability",
      type: "mcq",
      question: "The theoretical probability of a fair coin showing heads is 1/2. Priya flips a coin 10 times and gets heads 7 times. Which statement is correct?",
      options: ["The coin must be biased because 7/10 ≠ 1/2", "Experimental results don't always match theoretical probability, especially in a small number of trials", "Priya made a mistake — she should flip again until she gets 5 heads", "The theoretical probability should be changed to 7/10"],
      answer: 1,
      explanation: "Theoretical probability tells us what we <em>expect</em> in the long run. With only 10 trials, random variation means results can differ quite a lot. As the number of trials increases, experimental probability gets closer to theoretical probability. 7/10 is just random variation — the coin is probably still fair!"
    },
    {
      id: "c17_q32",
      topic: "Theoretical vs experimental probability",
      type: "mcq",
      question: "A fair die is rolled 30 times. The number 4 comes up 8 times. What is the <strong>experimental</strong> probability of rolling a 4, and how does it compare to the theoretical probability?",
      options: ["Experimental P(4) = 8/30; theoretical P(4) = 1/6 — they are very close", "Experimental P(4) = 8/30; theoretical P(4) = 1/6 — they are completely different numbers", "Experimental P(4) = 4/30; theoretical P(4) = 1/4", "Experimental P(4) = 1/6; theoretical P(4) = 8/30"],
      answer: 0,
      explanation: "Experimental P(4) = number of 4s ÷ total rolls = 8/30 ≈ 0.267. Theoretical P(4) = 1/6 ≈ 0.167. These are not identical but are in the same region. With only 30 trials, some variation from theoretical is expected."
    },
    {
      id: "c17_q33",
      topic: "Theoretical vs experimental probability",
      type: "mcq",
      question: "After 100 spins of a spinner, red came up 38 times. The spinner has 4 equal sections (red, blue, green, yellow). The theoretical probability of red is 1/4 = 0.25. Which conclusion is most reasonable?",
      options: ["The spinner is definitely biased because 38 ≠ 25", "The spinner might be slightly biased, but with only 100 trials we cannot be certain", "The spinner is definitely fair", "We need exactly 25 reds in 100 spins for the spinner to be fair"],
      answer: 1,
      explanation: "With 100 trials, some variation from theoretical is normal. Getting 38 reds is higher than expected (25), which could suggest bias — but we would need many more trials to be confident. We <em>cannot</em> be certain from just 100 spins. The most reasonable conclusion is that we are unsure."
    },
    {
      id: "c17_q40",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A spinner has 5 equal sections numbered 1, 2, 3, 4, 5. What is the probability of spinning a number <strong>greater than 3</strong>?",
      options: ["1/5", "2/5", "3/5", "4/5"],
      answer: 1,
      explanation: "Numbers greater than 3 on this spinner are 4 and 5 — that is 2 favourable outcomes out of 5 total equally likely outcomes. P(greater than 3) = 2/5."
    },
    {
      id: "c17_q41",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A bag contains 4 red, 3 blue, and 2 green marbles. One marble is chosen at random. What is P(blue)?",
      options: ["3/4", "3/7", "3/9", "2/9"],
      answer: 2,
      explanation: "Total marbles = 4 + 3 + 2 = 9. There are 3 blue marbles. P(blue) = 3/9 = 1/3. Always count the total number of marbles before writing the probability."
    },
    {
      id: "c17_q42",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A six-sided die is rolled. What is the probability of rolling a number <strong>greater than 4</strong>?",
      options: ["1/6", "2/6", "3/6", "4/6"],
      answer: 1,
      explanation: "Numbers greater than 4 on a die are 5 and 6 — that's 2 favourable outcomes out of 6. P(greater than 4) = 2/6 = 1/3."
    },
    {
      id: "c17_q43",
      topic: "Calculating probabilities",
      type: "input",
      question: "A class has 12 boys and 18 girls. One student is chosen at random to answer a question. What is the probability of choosing a <strong>boy</strong>? Write your answer as a fraction in its simplest form.",
      answer: "2/5",
      acceptableAnswers: ["2/5", "12/30"],
      explanation: "Total students = 12 + 18 = 30. P(boy) = 12/30 = 2/5. Always simplify your fraction by dividing both numbers by the highest common factor (here, 6)."
    },
    {
      id: "c17_q44",
      topic: "Experimental probability",
      type: "mcq",
      question: "Yuki rolls a die 50 times. She records these results: 1 appears 9 times, 2 appears 7 times, 3 appears 8 times, 4 appears 10 times, 5 appears 6 times, 6 appears 10 times. What is the experimental probability of rolling a <strong>1</strong>?",
      options: ["1/6", "9/50", "9/41", "1/9"],
      answer: 1,
      explanation: "Experimental probability = number of times the event occurred ÷ total number of trials = 9 ÷ 50 = 9/50. This is close to, but not exactly, the theoretical probability of 1/6 ≈ 0.167."
    },
    {
      id: "c17_q45",
      topic: "Experimental probability",
      type: "mcq",
      question: "A drawing pin is dropped 80 times. It lands point-up 32 times. What is the experimental probability of it landing point-up?",
      options: ["32/80 = 2/5", "32/48", "80/32 = 5/2", "48/80 = 3/5"],
      answer: 0,
      explanation: "Experimental probability = number of times event occurred ÷ total trials = 32/80 = 2/5 = 0.4. Always use the total number of trials as the denominator."
    },
    // CHALLENGING QUESTIONS
    {
      id: "c17_q47",
      topic: "Calculating probabilities",
      difficulty: "challenging",
      type: "input",
      question: "A class jar has 15 red tokens and some blue tokens. A token is chosen at random and P(red) = 3/5. How many <strong>blue</strong> tokens are in the jar?",
      answer: "10",
      acceptableAnswers: ["10"],
      explanation: "P(red) = 3/5 means 3 out of every 5 tokens are red. If there are 15 red tokens and 15 = 3 × 5, then the total number of tokens = 5 × 5 = 25. Blue tokens = 25 − 15 = 10. Check: P(red) = 15/25 = 3/5 ✓"
    },
    {
      id: "c17_q48",
      topic: "Calculating probabilities",
      difficulty: "challenging",
      type: "mcq",
      question: "A bag has 3 red, 5 blue, and 2 green balls. One ball is removed at random. Compare P(red), P(blue), and P(green). Which colour is <strong>most likely</strong> to be removed?",
      options: ["Red, because it is listed first", "Blue, because P(blue) = 5/10 is the largest probability", "Green, because P(green) = 2/10 is the smallest probability", "Red and green together, because 3 + 2 = 5 = P(blue)"],
      answer: 1,
      explanation: "Total balls = 3 + 5 + 2 = 10. P(red) = 3/10, P(blue) = 5/10, P(green) = 2/10. Blue has the highest probability (5/10 = 1/2), so picking blue is most likely. Compare fractions with the same denominator to decide."
    },
    {
      id: "c17_q49",
      topic: "Calculating probabilities",
      difficulty: "challenging",
      type: "input",
      question: "A spinner is spun 40 times. Red comes up 14 times, blue comes up 10 times, green comes up 16 times. Write the experimental probability of landing on <strong>green</strong> as a fraction in its simplest form.",
      answer: "2/5",
      acceptableAnswers: ["2/5", "16/40"],
      explanation: "Experimental P(green) = number of greens ÷ total spins = 16/40. Simplify by dividing both by 8: 16/40 = 2/5. Check: 14 + 10 + 16 = 40 ✓"
    },
    {
      id: "c17_q50",
      topic: "Theoretical vs experimental probability",
      difficulty: "challenging",
      type: "mcq",
      question: "A spinner has 4 equal sections (red, blue, green, yellow). After 100 spins: red = 38, blue = 22, green = 26, yellow = 14. Which colour's experimental probability is <strong>furthest</strong> from its theoretical probability of 1/4 = 0.25?",
      options: ["Red (0.38)", "Blue (0.22)", "Green (0.26)", "Yellow (0.14)"],
      answer: 0,
      explanation: "Theoretical probability for each colour = 1/4 = 0.25. Calculate the absolute difference from 0.25 for each: Red: |0.38 − 0.25| = 0.13. Blue: |0.22 − 0.25| = 0.03. Green: |0.26 − 0.25| = 0.01. Yellow: |0.14 − 0.25| = 0.11. Red has the largest gap (0.13), so red is furthest from the theoretical probability. Great work computing all four differences!"
    },
    {
      id: "c17_q52",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Match the probability value <strong>0.14</strong> to the best word or phrase.",
      options: ["Impossible", "Unlikely", "50-50 chance", "Highly likely"],
      answer: 1,
      explanation: "0.14 is close to 0 (impossible) but not equal to it. On the scale from 0 to 1, a value of 0.14 is much less than 0.5, meaning the event is not very likely to happen. The best description is unlikely."
    },
    {
      id: "c17_q53",
      topic: "Using numbers to describe probabilities",
      type: "input",
      question: "A spinner has 5 equal sections. The probability of each colour is shown: P(red) = 2/5, P(blue) = 2/5, P(green) = 1/5. What do all three probabilities add up to? Write your answer as a whole number.",
      answer: "1",
      acceptableAnswers: ["1"],
      explanation: "The probabilities of all possible outcomes must always add up to 1. Check: 2/5 + 2/5 + 1/5 = 5/5 = 1. This is always true — if you list every possible outcome, the total probability is 1 (certain that one of them will happen)."
    },
    {
      id: "c17_q54",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A bag contains 3 red and 7 blue counters. One counter is chosen at random. What is the probability of <strong>not</strong> choosing red? (Hint: P(not red) = 1 − P(red))",
      options: ["3/10", "7/10", "3/7", "1/10"],
      answer: 1,
      explanation: "P(red) = 3/10. The complementary probability is P(not red) = 1 − P(red) = 1 − 3/10 = 7/10. You can also count directly: 7 blue counters out of 10 total gives 7/10. Both methods give the same answer."
    },
    {
      id: "c17_q55",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "A kitchen drawer contains 9 forks, 5 knives, and 6 spoons. Alexander selects an item at random. What is the probability of selecting a knife? Give your answer as a <strong>percentage</strong>.",
      options: ["5%", "20%", "25%", "45%"],
      answer: 2,
      explanation: "Total items = 9 + 5 + 6 = 20. P(knife) = 5/20 = 1/4. To convert to a percentage: 1/4 × 100 = 25%. So there is a 25% chance of selecting a knife."
    },
    {
      id: "c17_q56",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "Tickets numbered 1 to 20 are placed in a bag. One ticket is drawn at random. What is the probability of drawing a <strong>prime number</strong>?",
      options: ["4/20", "7/20", "8/20", "9/20"],
      answer: 2,
      explanation: "The prime numbers from 1 to 20 are: 2, 3, 5, 7, 11, 13, 17, 19 — that is 8 prime numbers. (Remember: 1 is not prime.) P(prime) = 8/20 = 2/5."
    },
    {
      id: "c17_q57",
      topic: "Outcomes",
      type: "mcq",
      question: "A spinner has sections of <strong>different sizes</strong> — one large red section and one tiny blue section. Jack says the probability of red is 1/2 because there are 2 colours. Why is Jack wrong?",
      options: [
        "Jack is wrong because there must always be more than 2 outcomes",
        "Jack is wrong because the sections are not equal in size, so the outcomes are not equally likely",
        "Jack is wrong because you need to spin it at least 10 times first",
        "Jack is correct — any spinner with 2 colours gives P(red) = 1/2"
      ],
      answer: 1,
      explanation: "The formula P(event) = favourable ÷ total outcomes only works when all outcomes are equally likely. If the red section is much larger than the blue section, red is more likely to come up. Equal-sized sections are needed for equally likely outcomes."
    },
    {
      id: "c17_q58",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "Petra has 5 petunias, 7 marigolds, and 8 roses in her garden. One plant was damaged by a possum. What is the probability that the damaged plant was a <strong>marigold or a rose</strong>?",
      options: ["7/20", "8/20", "15/20", "13/20"],
      answer: 2,
      explanation: "Total plants = 5 + 7 + 8 = 20. P(marigold) = 7/20 and P(rose) = 8/20. These are separate outcomes so we add them: P(marigold or rose) = 7/20 + 8/20 = 15/20 = 3/4."
    },
    {
      id: "c17_q59",
      topic: "Calculating probabilities",
      type: "mcq",
      question: "All 26 letters of the alphabet are placed in a hat. One letter is drawn at random. What is the probability of drawing a <strong>vowel</strong> (A, E, I, O, U)?",
      options: ["5/26", "5/21", "6/26", "21/26"],
      answer: 0,
      explanation: "There are 26 letters in the alphabet. The vowels are A, E, I, O, U — that is 5 vowels. P(vowel) = 5/26. (The remaining 21 are consonants.)"
    },
    {
      id: "c17_q60",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Simon has a probability of 0.64 of winning a darts game. His opponent Trent has a probability of 0.36 of winning. Who is more likely to win, and what do the two probabilities add up to?",
      options: [
        "Trent is more likely to win; they add up to 1",
        "Simon is more likely to win; they add up to 1",
        "Simon is more likely to win; they add up to 0.64",
        "They are equally likely; they add up to 0.5"
      ],
      answer: 1,
      explanation: "Simon has the higher probability (0.64 > 0.36), so Simon is more likely to win. The sum: 0.64 + 0.36 = 1.00. The probabilities of all possible outcomes (Simon wins or Trent wins) must always add up to 1."
    }
  ]
};
