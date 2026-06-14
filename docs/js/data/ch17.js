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
      options: ["−1 and 1", "0 and 10", "0 and 1", "1 and 100"],
      answer: 2,
      explanation: "Probability is always measured on a scale from 0 to 1. A probability of 0 means impossible, and a probability of 1 means certain."
    },
    {
      id: "c17_q7",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "An event has a probability of 0. What does this mean?",
      options: ["The event is certain to happen", "The event is likely to happen", "The event is unlikely to happen", "The event is impossible"],
      answer: 3,
      explanation: "A probability of 0 means there is no chance the event can occur — it is impossible. A probability of 1 would mean it is certain."
    },
    {
      id: "c17_q8",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Which probability value represents an <strong>even chance</strong>?",
      options: ["0", "1/4", "1/2", "1"],
      answer: 2,
      explanation: "An even chance means the event is equally likely to happen or not happen. This is represented by the probability 1/2, which is exactly halfway between 0 and 1."
    },
    {
      id: "c17_q9",
      topic: "Using numbers to describe probabilities",
      type: "mcq",
      question: "Which of the following correctly places the probabilities in order from <strong>least likely</strong> to <strong>most likely</strong>?",
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
    }
  ]
};
