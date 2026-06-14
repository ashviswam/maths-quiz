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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale with 1/2 highlighted">
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
  <!-- Highlighted point at 1/2 -->
  <circle cx="190" cy="40" r="7" fill="#5b5ef4" stroke="#fff" stroke-width="2"/>
  <!-- Labels below ticks -->
  <text x="40" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">0</text>
  <text x="115" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1/4</text>
  <text x="190" y="62" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1/2</text>
  <text x="265" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3/4</text>
  <text x="340" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">1</text>
  <!-- Labels above -->
  <text x="40" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Impossible</text>
  <text x="190" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Even chance</text>
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Probability scale showing 0, 1/4, 1/2, 3/4, 1 in order">
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
  <circle cx="40" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="115" cy="40" r="5" fill="#f59e0b"/>
  <circle cx="190" cy="40" r="5" fill="#5b5ef4"/>
  <circle cx="265" cy="40" r="5" fill="#a855f7"/>
  <circle cx="340" cy="40" r="5" fill="#22c55e"/>
  <!-- Labels below -->
  <text x="40" y="63" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="115" y="63" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1/4</text>
  <text x="190" y="63" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1/2</text>
  <text x="265" y="63" text-anchor="middle" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3/4</text>
  <text x="340" y="63" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1</text>
  <!-- Arrow and labels above -->
  <text x="40" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Least</text>
  <text x="340" y="24" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Most</text>
  <!-- Arrow -->
  <line x1="60" y1="19" x2="318" y2="19" stroke="#64748b" stroke-width="1" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
    </marker>
  </defs>
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
      question: "A coin is flipped and a die is rolled at the same time. How many different outcomes are possible in total?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Sample space grid for coin and die">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- Title -->
  <text x="190" y="18" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Sample Space: Coin and Die</text>
  <!-- Column headers (die values) -->
  <text x="100" y="38" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Die →</text>
  <text x="145" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1</text>
  <text x="185" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2</text>
  <text x="225" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <text x="265" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">4</text>
  <text x="305" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5</text>
  <text x="345" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">6</text>
  <!-- Row headers (coin) -->
  <text x="60" y="85" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">H</text>
  <text x="60" y="145" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">T</text>
  <text x="60" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Coin ↓</text>
  <!-- Grid lines -->
  <line x1="120" y1="45" x2="365" y2="45" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="105" x2="365" y2="105" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="165" x2="365" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="120" y1="45" x2="120" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="165" y1="45" x2="165" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="205" y1="45" x2="205" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="245" y1="45" x2="245" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="285" y1="45" x2="285" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="325" y1="45" x2="325" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="365" y1="45" x2="365" y2="165" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Row H outcomes -->
  <rect x="122" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <rect x="163" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <rect x="203" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <rect x="243" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <rect x="283" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <rect x="323" y="47" width="41" height="56" fill="rgba(91,94,244,0.10)" rx="3"/>
  <!-- Row T outcomes -->
  <rect x="122" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <rect x="163" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <rect x="203" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <rect x="243" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <rect x="283" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <rect x="323" y="107" width="41" height="56" fill="rgba(244,63,94,0.08)" rx="3"/>
  <!-- Outcome labels Row H -->
  <text x="143" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,1</text>
  <text x="183" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,2</text>
  <text x="223" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,3</text>
  <text x="263" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,4</text>
  <text x="303" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,5</text>
  <text x="343" y="78" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">H,6</text>
  <!-- Outcome labels Row T -->
  <text x="143" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,1</text>
  <text x="183" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,2</text>
  <text x="223" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,3</text>
  <text x="263" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,4</text>
  <text x="303" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,5</text>
  <text x="343" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">T,6</text>
  <!-- Total count label -->
  <text x="190" y="195" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Total outcomes = ?</text>
</svg>`,
      options: ["2", "6", "8", "12"],
      answer: 3,
      explanation: "The coin has 2 outcomes (H, T) and the die has 6 outcomes (1–6). Using the multiplication principle: 2 × 6 = 12 possible outcomes in total."
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
      question: "The probability that it rains tomorrow is 3/5. What is the probability that it does <strong>not</strong> rain tomorrow?",
      options: ["3/5", "2/5", "1/5", "5/3"],
      answer: 1,
      explanation: "P(not event) = 1 − P(event). So P(no rain) = 1 − 3/5 = 2/5."
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
      question: "The probability of picking a red counter from a bag is 1/4. What is the probability of <strong>not</strong> picking a red counter? Write your answer as a fraction.",
      answer: "3/4",
      acceptableAnswers: ["3/4"],
      explanation: "P(not red) = 1 − P(red) = 1 − 1/4 = 3/4. The probabilities of an event and its complement always add to 1."
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
      topic: "Complementary events",
      type: "mcq",
      question: "P(winning a game) = 0.35. What is P(not winning)?",
      options: ["0.35", "0.65", "0.75", "1.35"],
      answer: 1,
      explanation: "Complementary events always add up to 1. P(not winning) = 1 − 0.35 = 0.65. The event 'not winning' is the complement of 'winning'."
    },
    {
      id: "c17_q24",
      topic: "Complementary events",
      type: "input",
      question: "A spinner lands on green with probability 2/9, red with probability 4/9, and blue otherwise. What is the probability of landing on <strong>blue</strong>? Write your answer as a fraction.",
      answer: "3/9",
      acceptableAnswers: ["3/9", "1/3"],
      explanation: "All probabilities must add up to 1. P(green) + P(red) + P(blue) = 1. So P(blue) = 1 − 2/9 − 4/9 = 3/9 = 1/3. Well done using the complement rule with three events!"
    },
    {
      id: "c17_q25",
      topic: "Expected frequency",
      type: "mcq",
      question: "A fair die is rolled 60 times. How many times would you <strong>expect</strong> to roll a 3?",
      options: ["3", "6", "10", "12"],
      answer: 2,
      explanation: "Expected frequency = P(event) × number of trials. P(rolling a 3) = 1/6. Expected frequency = 1/6 × 60 = 10. So you would expect to roll a 3 about 10 times."
    },
    {
      id: "c17_q26",
      topic: "Expected frequency",
      type: "mcq",
      question: "The probability of a drawing pin landing point-up is 0.4. If you drop it 50 times, how many times would you expect it to land point-up?",
      options: ["4", "10", "20", "40"],
      answer: 2,
      explanation: "Expected frequency = P(event) × number of trials = 0.4 × 50 = 20. You would expect it to land point-up about 20 times out of 50."
    },
    {
      id: "c17_q27",
      topic: "Expected frequency",
      type: "input",
      question: "A bag has 3 red counters and 7 white counters. You pick a counter, note its colour, and put it back. You do this 100 times. How many times would you <strong>expect</strong> to pick a red counter?",
      answer: "30",
      acceptableAnswers: ["30"],
      explanation: "P(red) = 3/10 = 0.3. Expected frequency = P(red) × number of trials = 0.3 × 100 = 30. You'd expect to pick red about 30 times."
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
      question: "A fair die has theoretical probability 1/6 for each number. After 600 rolls, how many times would you <strong>theoretically expect</strong> to roll a 5?",
      options: ["5", "60", "100", "120"],
      answer: 2,
      explanation: "Expected frequency = P(5) × total rolls = 1/6 × 600 = 100. With many trials, the experimental results should be close to this theoretical expectation."
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
      id: "c17_q34",
      topic: "Tree diagrams",
      type: "mcq",
      question: "A coin is flipped twice. Using a tree diagram, how many different outcomes are possible?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Tree diagram for flipping a coin twice">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <text x="200" y="16" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Tree Diagram: Two Coin Flips</text>
  <!-- Start point -->
  <circle cx="40" cy="110" r="5" fill="#64748b"/>
  <text x="40" y="130" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Start</text>
  <!-- First flip branches -->
  <line x1="45" y1="107" x2="155" y2="67" stroke="#5b5ef4" stroke-width="1.5"/>
  <line x1="45" y1="113" x2="155" y2="153" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- First flip labels -->
  <text x="90" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">H</text>
  <text x="90" y="145" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T</text>
  <!-- First flip nodes -->
  <circle cx="160" cy="65" r="5" fill="#5b5ef4"/>
  <circle cx="160" cy="155" r="5" fill="#f43f5e"/>
  <!-- Second flip branches from H -->
  <line x1="165" y1="63" x2="270" y2="38" stroke="#5b5ef4" stroke-width="1.5"/>
  <line x1="165" y1="67" x2="270" y2="93" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- Second flip branch labels from H -->
  <text x="218" y="38" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">H</text>
  <text x="218" y="88" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T</text>
  <!-- Second flip branches from T -->
  <line x1="165" y1="153" x2="270" y2="128" stroke="#5b5ef4" stroke-width="1.5"/>
  <line x1="165" y1="157" x2="270" y2="182" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- Second flip branch labels from T -->
  <text x="218" y="128" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">H</text>
  <text x="218" y="182" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T</text>
  <!-- Outcome nodes -->
  <circle cx="275" cy="35" r="4" fill="#64748b"/>
  <circle cx="275" cy="95" r="4" fill="#64748b"/>
  <circle cx="275" cy="125" r="4" fill="#64748b"/>
  <circle cx="275" cy="185" r="4" fill="#64748b"/>
  <!-- Outcome labels -->
  <text x="320" y="39" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">HH</text>
  <text x="320" y="99" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">HT</text>
  <text x="320" y="129" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">TH</text>
  <text x="320" y="189" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">TT</text>
  <!-- Column labels -->
  <text x="40" y="205" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Start</text>
  <text x="160" y="205" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Flip 1</text>
  <text x="275" y="205" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Flip 2</text>
  <text x="330" y="205" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Outcome</text>
</svg>`,
      options: ["2", "3", "4", "8"],
      answer: 2,
      explanation: "From the tree diagram, there are 4 possible outcomes: HH, HT, TH, TT. Each flip has 2 options, and 2 × 2 = 4 total outcomes."
    },
    {
      id: "c17_q35",
      topic: "Tree diagrams",
      type: "mcq",
      question: "A bag has 1 red (R) and 1 blue (B) ball. You pick a ball, put it back, then pick again. Using the tree diagram, what is the probability of getting <strong>red both times</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Tree diagram for picking a ball twice with replacement">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <text x="200" y="16" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Tree Diagram: Pick with Replacement</text>
  <!-- Start point -->
  <circle cx="40" cy="110" r="5" fill="#64748b"/>
  <!-- First pick branches -->
  <line x1="45" y1="107" x2="155" y2="67" stroke="#f43f5e" stroke-width="2"/>
  <line x1="45" y1="113" x2="155" y2="153" stroke="#5b5ef4" stroke-width="2"/>
  <text x="90" y="75" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">R  1/2</text>
  <text x="90" y="148" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">B  1/2</text>
  <circle cx="160" cy="65" r="5" fill="#f43f5e"/>
  <circle cx="160" cy="155" r="5" fill="#5b5ef4"/>
  <!-- Second pick branches from R -->
  <line x1="165" y1="63" x2="270" y2="38" stroke="#f43f5e" stroke-width="2"/>
  <line x1="165" y1="67" x2="270" y2="93" stroke="#5b5ef4" stroke-width="2"/>
  <text x="222" y="37" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">R  1/2</text>
  <text x="222" y="90" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">B  1/2</text>
  <!-- Second pick branches from B -->
  <line x1="165" y1="153" x2="270" y2="128" stroke="#f43f5e" stroke-width="2"/>
  <line x1="165" y1="157" x2="270" y2="182" stroke="#5b5ef4" stroke-width="2"/>
  <text x="222" y="126" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">R  1/2</text>
  <text x="222" y="182" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">B  1/2</text>
  <!-- Outcome nodes and labels -->
  <circle cx="275" cy="35" r="4" fill="#f43f5e"/>
  <circle cx="275" cy="95" r="4" fill="#64748b"/>
  <circle cx="275" cy="125" r="4" fill="#64748b"/>
  <circle cx="275" cy="185" r="4" fill="#5b5ef4"/>
  <text x="345" y="39" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">RR  → 1/4</text>
  <text x="340" y="99" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11">RB  → 1/4</text>
  <text x="340" y="129" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11">BR  → 1/4</text>
  <text x="345" y="189" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">BB  → 1/4</text>
</svg>`,
      options: ["1/2", "1/3", "1/4", "2/4"],
      answer: 2,
      explanation: "From the tree diagram, the outcome RR has probability 1/2 × 1/2 = 1/4. There are 4 equally likely outcomes (RR, RB, BR, BB), so P(RR) = 1/4."
    },
    {
      id: "c17_q36",
      topic: "Tree diagrams",
      type: "mcq",
      question: "A coin is flipped and a spinner with sections 1 and 2 is spun. Which list correctly shows <strong>all</strong> possible outcomes?",
      options: ["H1, H2, T1", "H1, T2", "H1, H2, T1, T2", "H, T, 1, 2"],
      answer: 2,
      explanation: "Using a tree diagram or list: the coin gives H or T, and the spinner gives 1 or 2. Combining them: H1, H2, T1, T2 — that's 4 outcomes in total. We need every combination of coin and spinner."
    },
    {
      id: "c17_q37",
      topic: "Independent events",
      type: "mcq",
      question: "Two events are <strong>independent</strong>. What does this mean?",
      options: ["They always happen at the same time", "The outcome of one event does not affect the outcome of the other", "They can never both happen", "One event causes the other to happen"],
      answer: 1,
      explanation: "Independent events are events where the result of one does not change the probability of the other. For example, flipping a coin and rolling a die are independent — what the coin shows has no effect on what the die shows."
    },
    {
      id: "c17_q38",
      topic: "Independent events",
      type: "mcq",
      question: "A fair coin is flipped and a fair die is rolled. What is the probability of getting <strong>heads AND a 6</strong>?",
      options: ["1/2 + 1/6 = 4/6", "1/2 × 1/6 = 1/12", "1/6", "2/6"],
      answer: 1,
      explanation: "Since a coin flip and die roll are independent events, we multiply their probabilities. P(heads) = 1/2 and P(6) = 1/6. P(heads AND 6) = 1/2 × 1/6 = 1/12."
    },
    {
      id: "c17_q39",
      topic: "Independent events",
      type: "input",
      question: "P(event A) = 1/2 and P(event B) = 1/3. A and B are independent events. What is P(A and B)? Write your answer as a fraction.",
      answer: "1/6",
      acceptableAnswers: ["1/6"],
      explanation: "For independent events: P(A and B) = P(A) × P(B) = 1/2 × 1/3 = 1/6. You multiply the probabilities because one event does not affect the other."
    },
    {
      id: "c17_q40",
      topic: "Listing sample spaces",
      type: "mcq",
      question: "Two spinners are each labelled with A, B, C. You spin both. How many outcomes are in the combined sample space?",
      options: ["3", "6", "9", "12"],
      answer: 2,
      explanation: "Each spinner has 3 outcomes. For two spinners: 3 × 3 = 9 outcomes in total. The outcomes are: AA, AB, AC, BA, BB, BC, CA, CB, CC."
    },
    {
      id: "c17_q41",
      topic: "Listing sample spaces",
      type: "mcq",
      question: "A lunch menu has 2 mains (pizza, pasta) and 3 drinks (water, juice, milk). How many different lunch combinations are possible?",
      options: ["2", "3", "5", "6"],
      answer: 3,
      explanation: "For combined sample spaces, multiply the number of choices: 2 mains × 3 drinks = 6 different combinations. For example: pizza+water, pizza+juice, pizza+milk, pasta+water, pasta+juice, pasta+milk."
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
      topic: "Expected frequency",
      type: "mcq",
      question: "A fair spinner has 5 equal sections. If you spin it 150 times, how many times would you expect to land on <strong>any one particular section</strong>?",
      options: ["5", "15", "30", "50"],
      answer: 2,
      explanation: "P(one section) = 1/5. Expected frequency = 1/5 × 150 = 30. You'd expect to land on each section about 30 times."
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
      id: "c17_q46",
      topic: "Tree diagrams",
      difficulty: "challenging",
      type: "mcq",
      question: "A coin is flipped twice. Using a tree diagram, what is the probability of getting <strong>exactly one head</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Tree diagram for two coin flips highlighting exactly one head">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <text x="200" y="16" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Two Coin Flips — Exactly One Head?</text>
  <!-- Start point -->
  <circle cx="40" cy="110" r="5" fill="#64748b"/>
  <!-- First flip -->
  <line x1="45" y1="107" x2="155" y2="67" stroke="#5b5ef4" stroke-width="1.5"/>
  <line x1="45" y1="113" x2="155" y2="153" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="90" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">H (1/2)</text>
  <text x="90" y="148" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T (1/2)</text>
  <circle cx="160" cy="65" r="5" fill="#5b5ef4"/>
  <circle cx="160" cy="155" r="5" fill="#64748b"/>
  <!-- Second flip from H -->
  <line x1="165" y1="63" x2="270" y2="38" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="165" y1="67" x2="270" y2="93" stroke="#22c55e" stroke-width="2.5"/>
  <text x="222" y="36" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">H (1/2)</text>
  <text x="222" y="90" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">T (1/2)</text>
  <!-- Second flip from T -->
  <line x1="165" y1="153" x2="270" y2="128" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="165" y1="157" x2="270" y2="182" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="222" y="126" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">H (1/2)</text>
  <text x="222" y="182" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">T (1/2)</text>
  <!-- Outcomes -->
  <rect x="278" y="26" width="35" height="18" fill="#e2e8f0" rx="3"/>
  <rect x="278" y="84" width="35" height="18" fill="#dcfce7" rx="3"/>
  <rect x="278" y="116" width="35" height="18" fill="#dcfce7" rx="3"/>
  <rect x="278" y="174" width="35" height="18" fill="#e2e8f0" rx="3"/>
  <text x="295" y="39" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">HH</text>
  <text x="295" y="97" text-anchor="middle" fill="#15803d" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">HT ✓</text>
  <text x="295" y="129" text-anchor="middle" fill="#15803d" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">TH ✓</text>
  <text x="295" y="187" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">TT</text>
  <text x="200" y="210" text-anchor="middle" fill="#15803d" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Green = exactly one head</text>
</svg>`,
      options: ["1/4", "1/2", "3/4", "1"],
      answer: 1,
      explanation: "From the tree diagram, the 4 equally likely outcomes are HH, HT, TH, TT. The outcomes with <em>exactly one head</em> are HT and TH — that's 2 out of 4. P(exactly one head) = 2/4 = 1/2. Great tree diagram thinking!"
    },
    {
      id: "c17_q47",
      topic: "Expected frequency",
      difficulty: "challenging",
      type: "input",
      question: "A biased coin has P(head) = 0.6. If the coin is tossed 200 times, how many <strong>tails</strong> would you expect?",
      answer: "80",
      acceptableAnswers: ["80"],
      explanation: "First find P(tail): P(tail) = 1 − P(head) = 1 − 0.6 = 0.4. Then use expected frequency = P(tail) × number of trials = 0.4 × 200 = 80. The key step is finding the complement probability first!"
    },
    {
      id: "c17_q48",
      topic: "Calculating probabilities",
      difficulty: "challenging",
      type: "mcq",
      question: "A bag has 3 red, 5 blue, and 2 green balls. One ball is removed at random. Which colour is <strong>most likely</strong> to be removed, and what is P(not green)?",
      options: ["Red is most likely; P(not green) = 7/10", "Blue is most likely; P(not green) = 8/10", "Green is most likely; P(not green) = 9/10", "Blue is most likely; P(not green) = 2/10"],
      answer: 1,
      explanation: "Total balls = 3 + 5 + 2 = 10. P(red) = 3/10, P(blue) = 5/10, P(green) = 2/10. Blue has the highest probability (5/10), so blue is most likely. P(not green) = 1 − P(green) = 1 − 2/10 = 8/10 = 4/5. Two steps: compare probabilities, then apply the complement rule."
    },
    {
      id: "c17_q49",
      topic: "Calculating probabilities",
      difficulty: "challenging",
      type: "input",
      question: "P(red) = 3/8 and P(blue) = 1/4. These are the only colours on a spinner. What is P(neither red nor blue)? Write your answer as a fraction.",
      answer: "3/8",
      acceptableAnswers: ["3/8"],
      explanation: "All probabilities must sum to 1. First write P(blue) with the same denominator: 1/4 = 2/8. Then P(red) + P(blue) = 3/8 + 2/8 = 5/8. P(neither red nor blue) = 1 − 5/8 = 3/8. This is a multi-step complement problem — excellent work!"
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
      id: "c17_q51",
      topic: "Independent events",
      difficulty: "challenging",
      type: "mcq",
      question: "A bag has 3 red and 2 blue balls. You pick one, <strong>replace it</strong>, then pick again. What is the probability of picking <strong>red then blue</strong>?",
      options: ["3/5 + 2/5 = 1", "3/5 × 2/5 = 6/25", "3/5 × 2/4 = 6/20", "3/10"],
      answer: 1,
      explanation: "Since the ball is replaced, the two picks are <em>independent</em> — the probabilities stay the same for both picks. P(red) = 3/5, P(blue) = 2/5. P(red then blue) = P(red) × P(blue) = 3/5 × 2/5 = 6/25. The replacement is key — it keeps the events independent!"
    }
  ]
};
