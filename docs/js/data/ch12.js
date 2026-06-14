const ch12 = {
  id: 12,
  title: "Percentage",
  icon: "%",
  color: "#db2777",
  topics: [
    "Percentage",
    "Converting percentages into fractions",
    "Converting fractions into percentages",
    "Converting percentages into decimals",
    "Converting decimals into percentages",
    "Number lines",
    "Expressing one quantity as a percentage of another",
    "Finding a percentage of a quantity",
    "Percentage increase or decrease",
    "Percentage change",
    "Profit and loss",
    "Simple interest",
    "Reverse percentages"
  ],
  questions: [
    {
      id: "c12_q1",
      topic: "Percentage",
      type: "mcq",
      question: "The word <em>percent</em> means:",
      options: ["per thousand", "per hundred", "per ten", "per million"],
      answer: 1,
      explanation: "The word 'percent' comes from the Latin <em>per centum</em>, meaning 'per hundred'. So 45% means 45 out of every 100."
    },
    {
      id: "c12_q2",
      topic: "Percentage",
      type: "mcq",
      question: "In a class of 100 students, 37 play a sport. What percentage of the class plays a sport?",
      options: ["37%", "63%", "3.7%", "73%"],
      answer: 0,
      explanation: "Percentage means out of 100. Since 37 out of 100 students play a sport, the answer is simply 37%."
    },
    {
      id: "c12_q3",
      topic: "Converting percentages into fractions",
      type: "mcq",
      question: "Write <strong>45%</strong> as a fraction in its simplest form.",
      options: ["45/10", "9/20", "45/1000", "4/5"],
      answer: 1,
      explanation: "45% = 45/100. To simplify, divide both top and bottom by 5: 45 ÷ 5 = 9 and 100 ÷ 5 = 20. So 45% = 9/20."
    },
    {
      id: "c12_q4",
      topic: "Converting percentages into fractions",
      type: "input",
      question: "Write <strong>60%</strong> as a fraction in its simplest form. (Write your answer using a slash, e.g. 3/5)",
      answer: "3/5",
      acceptableAnswers: ["3/5"],
      explanation: "60% = 60/100. Divide both by 20: 60 ÷ 20 = 3 and 100 ÷ 20 = 5. So 60% = 3/5."
    },
    {
      id: "c12_q5",
      topic: "Converting fractions into percentages",
      type: "mcq",
      question: "Convert <strong>3/4</strong> into a percentage.",
      options: ["34%", "43%", "75%", "25%"],
      answer: 2,
      explanation: "To convert 3/4 to a percentage, multiply by 100: (3 ÷ 4) × 100 = 0.75 × 100 = 75%."
    },
    {
      id: "c12_q6",
      topic: "Converting fractions into percentages",
      type: "input",
      question: "Convert <strong>7/20</strong> into a percentage. Write only the number (e.g. 35).",
      answer: "35",
      acceptableAnswers: ["35", "35%"],
      explanation: "To convert 7/20 to a percentage, multiply by 100: (7 ÷ 20) × 100 = 0.35 × 100 = 35%."
    },
    {
      id: "c12_q7",
      topic: "Converting percentages into decimals",
      type: "mcq",
      question: "Write <strong>72%</strong> as a decimal.",
      options: ["7.2", "0.072", "0.72", "72.0"],
      answer: 2,
      explanation: "To convert a percentage to a decimal, divide by 100. 72 ÷ 100 = 0.72. You can also move the decimal point two places to the left."
    },
    {
      id: "c12_q8",
      topic: "Converting percentages into decimals",
      type: "mcq",
      question: "Write <strong>5%</strong> as a decimal.",
      options: ["5.0", "0.5", "0.05", "0.005"],
      answer: 2,
      explanation: "5% = 5 ÷ 100 = 0.05. Remember to move the decimal point two places to the left when dividing by 100."
    },
    {
      id: "c12_q9",
      topic: "Converting decimals into percentages",
      type: "mcq",
      question: "Write <strong>0.38</strong> as a percentage.",
      options: ["3.8%", "380%", "0.38%", "38%"],
      answer: 3,
      explanation: "To convert a decimal to a percentage, multiply by 100. 0.38 × 100 = 38%. Move the decimal point two places to the right."
    },
    {
      id: "c12_q10",
      topic: "Converting decimals into percentages",
      type: "input",
      question: "Write <strong>0.9</strong> as a percentage. Write only the number (e.g. 90).",
      answer: "90",
      acceptableAnswers: ["90", "90%"],
      explanation: "To convert 0.9 to a percentage, multiply by 100: 0.9 × 100 = 90%. Moving the decimal two places right gives 90."
    },
    {
      id: "c12_q11",
      topic: "Number lines",
      type: "mcq",
      question: "On a number line from 0% to 100%, which percentage is exactly halfway?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0% to 100%">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- Left end cap -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2"/>
  <!-- Right end cap -->
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2"/>
  <!-- Midpoint tick -->
  <line x1="190" y1="32" x2="190" y2="48" stroke="#64748b" stroke-width="2"/>
  <!-- Quarter tick -->
  <line x1="115" y1="36" x2="115" y2="44" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Three-quarter tick -->
  <line x1="265" y1="36" x2="265" y2="44" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Midpoint highlight circle -->
  <circle cx="190" cy="40" r="7" fill="rgba(91,94,244,0.18)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Question mark at midpoint -->
  <text x="190" y="22" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">?</text>
  <!-- Labels -->
  <text x="40" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">0%</text>
  <text x="340" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">100%</text>
</svg>`,
      options: ["25%", "75%", "50%", "40%"],
      answer: 2,
      explanation: "The midpoint between 0% and 100% is (0 + 100) ÷ 2 = 50%. On a number line, 50% sits exactly in the middle."
    },
    {
      id: "c12_q12",
      topic: "Number lines",
      type: "mcq",
      question: "A number line goes from 0% to 100% divided into 4 equal parts. What percentage is marked at the <strong>third</strong> division point from zero?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0% to 100% in 4 equal parts">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Main line -->
  <line x1="40" y1="40" x2="340" y2="40" stroke="#64748b" stroke-width="2"/>
  <!-- End caps -->
  <line x1="40" y1="32" x2="40" y2="48" stroke="#64748b" stroke-width="2"/>
  <line x1="340" y1="32" x2="340" y2="48" stroke="#64748b" stroke-width="2"/>
  <!-- Division ticks: each part = 75px, positions at 115, 190, 265 -->
  <line x1="115" y1="30" x2="115" y2="50" stroke="#64748b" stroke-width="2"/>
  <line x1="190" y1="30" x2="190" y2="50" stroke="#64748b" stroke-width="2"/>
  <!-- Third division point highlighted -->
  <line x1="265" y1="28" x2="265" y2="52" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="265" cy="40" r="7" fill="rgba(244,63,94,0.18)" stroke="#f43f5e" stroke-width="2"/>
  <!-- Question mark above third tick -->
  <text x="265" y="22" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">?</text>
  <!-- Tick labels -->
  <text x="40" y="64" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">0%</text>
  <text x="115" y="64" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1st</text>
  <text x="190" y="64" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2nd</text>
  <text x="265" y="64" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3rd</text>
  <text x="340" y="64" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">100%</text>
</svg>`,
      options: ["25%", "50%", "75%", "80%"],
      answer: 2,
      explanation: "Each part = 100% ÷ 4 = 25%. The division points are at 25%, 50%, and 75%. The third one is 75%."
    },
    {
      id: "c12_q13",
      topic: "Expressing one quantity as a percentage of another",
      type: "mcq",
      question: "A student scored <strong>15</strong> out of <strong>60</strong> on a test. What is their score as a percentage?",
      options: ["15%", "25%", "40%", "45%"],
      answer: 1,
      explanation: "Express 15 as a percentage of 60: (15 ÷ 60) × 100 = 0.25 × 100 = 25%."
    },
    {
      id: "c12_q14",
      topic: "Expressing one quantity as a percentage of another",
      type: "input",
      question: "There are <strong>18</strong> girls in a class of <strong>30</strong> students. What percentage of the class are girls? Write only the number.",
      answer: "60",
      acceptableAnswers: ["60", "60%"],
      explanation: "(18 ÷ 30) × 100 = 0.6 × 100 = 60%. So 60% of the class are girls."
    },
    {
      id: "c12_q15",
      topic: "Finding a percentage of a quantity",
      type: "mcq",
      question: "Find <strong>30%</strong> of <strong>250</strong>.",
      options: ["75", "70", "80", "30"],
      answer: 0,
      explanation: "30% of 250 = (30 ÷ 100) × 250 = 0.3 × 250 = 75."
    },
    {
      id: "c12_q16",
      topic: "Finding a percentage of a quantity",
      type: "input",
      question: "Find <strong>15%</strong> of <strong>$80</strong>. Write only the number (without the $ sign).",
      answer: "12",
      acceptableAnswers: ["12", "12.00", "$12"],
      explanation: "15% of 80 = (15 ÷ 100) × 80 = 0.15 × 80 = 12. So 15% of $80 is $12."
    },
    {
      id: "c12_q17",
      topic: "Percentage increase or decrease",
      type: "mcq",
      question: "A jacket costs $<strong>120</strong>. Its price increases by <strong>25%</strong>. What is the new price?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 100" aria-label="Percentage bar showing 25% increase on $120">
  <rect width="380" height="100" fill="#f8fafc" rx="8"/>
  <!-- Full new price bar outline (125% = $150) -->
  <rect x="30" y="28" width="320" height="34" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3" rx="4"/>
  <!-- Original price bar (100% = $120): 320 * (100/125) = 256px -->
  <rect x="30" y="28" width="256" height="34" fill="rgba(91,94,244,0.15)" stroke="#5b5ef4" stroke-width="2" rx="4"/>
  <!-- Increase portion (25% = $30): 320 * (25/125) = 64px -->
  <rect x="286" y="28" width="64" height="34" fill="rgba(34,197,94,0.25)" stroke="#22c55e" stroke-width="2" rx="4"/>
  <!-- Label: original -->
  <text x="158" y="50" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">$120 (100%)</text>
  <!-- Label: increase -->
  <text x="318" y="50" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">+25%</text>
  <!-- Brace / arrow below -->
  <line x1="30" y1="72" x2="350" y2="72" stroke="#64748b" stroke-width="1.5"/>
  <line x1="30" y1="68" x2="30" y2="76" stroke="#64748b" stroke-width="1.5"/>
  <line x1="350" y1="68" x2="350" y2="76" stroke="#64748b" stroke-width="1.5"/>
</svg>`,
      options: ["$25", "$145", "$150", "$95"],
      answer: 2,
      explanation: "25% of 120 = 0.25 × 120 = 30. New price = 120 + 30 = $150. You can also calculate 125% of 120 = 1.25 × 120 = $150."
    },
    {
      id: "c12_q18",
      topic: "Percentage increase or decrease",
      type: "mcq",
      question: "A shop reduces the price of a bike from $<strong>200</strong> to $<strong>160</strong>. What is the percentage decrease?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 100" aria-label="Percentage bar showing price decrease from $200 to $160">
  <rect width="380" height="100" fill="#f8fafc" rx="8"/>
  <!-- Original price bar (100% = $200): full width 320px -->
  <rect x="30" y="28" width="320" height="34" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2" rx="4"/>
  <!-- Decrease portion (right side, $40 out of $200 = 20%): 320 * 0.2 = 64px -->
  <rect x="286" y="28" width="64" height="34" fill="rgba(244,63,94,0.22)" stroke="#f43f5e" stroke-width="2" rx="4"/>
  <!-- Label: new price -->
  <text x="158" y="50" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">$160</text>
  <!-- Label: decrease -->
  <text x="318" y="50" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">−$40</text>
  <!-- Full bar label -->
  <text x="190" y="20" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Original price: $200 (100%)</text>
  <!-- Brace below -->
  <line x1="30" y1="72" x2="350" y2="72" stroke="#64748b" stroke-width="1.5"/>
  <line x1="30" y1="68" x2="30" y2="76" stroke="#64748b" stroke-width="1.5"/>
  <line x1="350" y1="68" x2="350" y2="76" stroke="#64748b" stroke-width="1.5"/>
  <text x="190" y="88" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Decrease = (40 ÷ 200) × 100 = ?%</text>
</svg>`,
      options: ["20%", "25%", "40%", "80%"],
      answer: 0,
      explanation: "Decrease = 200 − 160 = 40. Percentage decrease = (40 ÷ 200) × 100 = 20%."
    },
    {
      id: "c12_q19",
      topic: "Percentage increase or decrease",
      type: "input",
      question: "A tree is <strong>80 cm</strong> tall. After one year it grows by <strong>20%</strong>. What is its new height in cm?",
      answer: "96",
      acceptableAnswers: ["96", "96 cm"],
      explanation: "20% of 80 = 0.2 × 80 = 16 cm. New height = 80 + 16 = 96 cm."
    },
    {
      id: "c12_q20",
      topic: "Finding a percentage of a quantity",
      type: "mcq",
      question: "A survey found that <strong>40%</strong> of 350 people prefer tea over coffee. How many people prefer tea?",
      options: ["120", "140", "160", "180"],
      answer: 1,
      explanation: "40% of 350 = (40 ÷ 100) × 350 = 0.4 × 350 = 140 people prefer tea."
    },
    {
      id: "c12_q21",
      topic: "Finding a percentage of a quantity",
      type: "input",
      question: "Find <strong>35%</strong> of <strong>240</strong>. Write only the number.",
      answer: "84",
      acceptableAnswers: ["84"],
      explanation: "35% of 240 = (35 ÷ 100) × 240 = 0.35 × 240 = 84. Well done!"
    },
    {
      id: "c12_q22",
      topic: "Expressing one quantity as a percentage of another",
      type: "mcq",
      question: "A bag of flour weighs <strong>500 g</strong>. A recipe uses <strong>75 g</strong>. What percentage of the bag is used?",
      options: ["7.5%", "15%", "20%", "25%"],
      answer: 1,
      explanation: "(75 ÷ 500) × 100 = 0.15 × 100 = 15%. So 15% of the bag is used in the recipe."
    },
    {
      id: "c12_q32",
      topic: "Percentage increase or decrease",
      type: "mcq",
      question: "A coat is priced at £<strong>90</strong>. In a sale it is reduced by <strong>30%</strong>. What is the sale price?",
      options: ["£27", "£60", "£63", "£87"],
      answer: 2,
      explanation: "30% of 90 = 0.3 × 90 = 27. Sale price = 90 − 27 = £63. You can also find 70% of 90: 0.7 × 90 = £63."
    },
    {
      id: "c12_q33",
      topic: "Percentage increase or decrease",
      type: "input",
      question: "A school has <strong>850</strong> students. Enrolment increases by <strong>12%</strong> next year. How many students will there be? Write only the number.",
      answer: "952",
      acceptableAnswers: ["952"],
      explanation: "12% of 850 = 0.12 × 850 = 102. New number = 850 + 102 = 952 students."
    },
  ]
};
