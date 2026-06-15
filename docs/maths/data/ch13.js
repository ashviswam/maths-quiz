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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing -3, -1, 0, 2">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Number line -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Arrow heads -->
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks every 40px: -4 at x=60, -3 at x=100, -2 at x=140, -1 at x=180, 0 at x=220, 1 at x=260, 2 at x=300, 3 at x=340 -->
  <!-- range: -4 to 3, 8 steps, step size = (340-60)/7 = 40px -->
  <!-- -4: x=60, -3: x=100, -2: x=140, -1: x=180, 0: x=220, 1: x=260, 2: x=300, 3: x=340 -->
  <line x1="60" y1="35" x2="60" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="35" x2="100" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="140" y1="35" x2="140" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="35" x2="180" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="33" x2="220" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <line x1="260" y1="35" x2="260" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="300" y1="35" x2="300" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="340" y1="35" x2="340" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="60" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−4</text>
  <text x="100" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−3</text>
  <text x="140" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−2</text>
  <text x="180" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−1</text>
  <text x="220" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="260" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="300" y="62" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2</text>
  <text x="340" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- Highlight the four values: -3, 0, 2, -1 -->
  <circle cx="100" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="180" cy="40" r="4" fill="#f43f5e" opacity="0.7"/>
  <circle cx="220" cy="40" r="4" fill="#1e293b" opacity="0.6"/>
  <circle cx="300" cy="40" r="4" fill="#22c55e"/>
</svg>`,
      options: ["-3", "0", "2", "-1"],
      answer: 0,
      explanation: "On a number line, numbers decrease as you move left. −3 is less than −1, 0, and 2, so it is furthest to the left."
    },
    {
      id: "c13_q2",
      topic: "The number line",
      type: "mcq",
      question: "What is the distance between <strong>−4</strong> and <strong>3</strong> on the number line?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing distance between -4 and 3">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Number line: range -5 to 4, 10 values, step = (360-20)/9 = ~37.8px -->
  <!-- -5:x=20, -4:x=57.8, -3:x=95.6, -2:x=133.3, -1:x=171.1, 0:x=208.9, 1:x=246.7, 2:x=284.4, 3:x=322.2, 4:x=360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks -->
  <line x1="58" y1="35" x2="58" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="96" y1="35" x2="96" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="133" y1="35" x2="133" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="171" y1="35" x2="171" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="209" y1="33" x2="209" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <line x1="247" y1="35" x2="247" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="284" y1="35" x2="284" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="322" y1="35" x2="322" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="58" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−4</text>
  <text x="96" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−3</text>
  <text x="133" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−2</text>
  <text x="171" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−1</text>
  <text x="209" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="247" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="284" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="322" y="62" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <!-- Highlight -4 and 3 -->
  <circle cx="58" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="322" cy="40" r="5" fill="#22c55e"/>
  <!-- Distance brace -->
  <line x1="58" y1="22" x2="322" y2="22" stroke="#5b5ef4" stroke-width="2" marker-start="url(#arr)" marker-end="url(#arr)"/>
  <line x1="58" y1="18" x2="58" y2="26" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="322" y1="18" x2="322" y2="26" stroke="#5b5ef4" stroke-width="2"/>
</svg>`,
      options: ["1", "7", "−7", "−1"],
      answer: 1,
      explanation: "To find the distance between two numbers on the number line, count the steps from −4 to 3: that is 4 steps to reach 0, then 3 more steps to reach 3, giving 4 + 3 = 7."
    },
    {
      id: "c13_q3",
      topic: "The number line",
      type: "input",
      question: "On a number line, what integer is exactly halfway between <strong>−6</strong> and <strong>2</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing midpoint between -6 and 2">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -7 to 3, 11 values, step = (360-20)/10 = 34px -->
  <!-- -7:20, -6:54, -5:88, -4:122, -3:156, -2:190, -1:224, 0:258, 1:292, 2:326, 3:360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks -->
  <line x1="54" y1="35" x2="54" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="88" y1="35" x2="88" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="122" y1="35" x2="122" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="156" y1="35" x2="156" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="35" x2="190" y2="45" stroke="#64748b" stroke-width="2"/>
  <line x1="224" y1="35" x2="224" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="258" y1="33" x2="258" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <line x1="292" y1="35" x2="292" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="326" y1="35" x2="326" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="54" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−6</text>
  <text x="88" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−5</text>
  <text x="122" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−4</text>
  <text x="156" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−3</text>
  <text x="190" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">?</text>
  <text x="224" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−1</text>
  <text x="258" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="292" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="326" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2</text>
  <!-- Highlight -6 and 2 -->
  <circle cx="54" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="326" cy="40" r="5" fill="#f43f5e"/>
  <!-- Midpoint marker (unlabelled) -->
  <circle cx="190" cy="40" r="6" fill="#64748b"/>
  <text x="190" y="18" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">midpoint</text>
</svg>`,
      answer: "-2",
      acceptableAnswers: ["-2"],
      explanation: "The midpoint is found by calculating (−6 + 2) ÷ 2 = −4 ÷ 2 = −2. You can also count 4 steps from each end: −6 + 4 = −2 and 2 − 4 = −2."
    },
    {
      id: "c13_q4",
      topic: "Ordering numbers",
      type: "mcq",
      question: "Which list shows these numbers in order from <strong>least to greatest</strong>?<br>−5, 3, −1, 0, −8",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing -8, -5, -1, 0, 3">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -9 to 4, 14 values, step = (360-20)/13 = ~26.2px -->
  <!-- -9:20, -8:46, -7:72, -6:98, -5:124, -4:150, -3:176, -2:202, -1:228, 0:254, 1:280, 2:306, 3:332, 4:358 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Major ticks for labeled values -->
  <line x1="46" y1="34" x2="46" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="124" y1="34" x2="124" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="228" y1="34" x2="228" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="254" y1="32" x2="254" y2="48" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="332" y1="34" x2="332" y2="46" stroke="#22c55e" stroke-width="2"/>
  <!-- Minor ticks -->
  <line x1="72" y1="37" x2="72" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="98" y1="37" x2="98" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="37" x2="150" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="176" y1="37" x2="176" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="202" y1="37" x2="202" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="37" x2="280" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="306" y1="37" x2="306" y2="43" stroke="#64748b" stroke-width="1"/>
  <!-- Labels -->
  <text x="46" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−8</text>
  <text x="124" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−5</text>
  <text x="228" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−1</text>
  <text x="254" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="332" y="62" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <!-- Dots -->
  <circle cx="46" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="124" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="228" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="254" cy="40" r="5" fill="#1e293b"/>
  <circle cx="332" cy="40" r="5" fill="#22c55e"/>
  <!-- Order label -->
  <text x="190" y="16" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">least ← → greatest</text>
</svg>`,
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing temperatures -10, -3, -1, 0, 5">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -11 to 6, 18 values, step = (360-20)/17 = 20px -->
  <!-- -11:20, -10:40, -9:60, -8:80, -7:100, -6:120, -5:140, -4:160, -3:180, -2:200, -1:220, 0:240, 1:260, 2:280, 3:300, 4:320, 5:340, 6:360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Labeled ticks -->
  <line x1="40" y1="34" x2="40" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="180" y1="34" x2="180" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="220" y1="34" x2="220" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="240" y1="32" x2="240" y2="48" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="340" y1="34" x2="340" y2="46" stroke="#22c55e" stroke-width="2"/>
  <!-- Minor ticks -->
  <line x1="60" y1="37" x2="60" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="37" x2="80" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="37" x2="100" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="37" x2="120" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="140" y1="37" x2="140" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="37" x2="160" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="200" y1="37" x2="200" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="37" x2="260" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="280" y1="37" x2="280" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="37" x2="300" y2="43" stroke="#64748b" stroke-width="1"/>
  <line x1="320" y1="37" x2="320" y2="43" stroke="#64748b" stroke-width="1"/>
  <!-- Labels -->
  <text x="40" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−10</text>
  <text x="180" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−3</text>
  <text x="220" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−1</text>
  <text x="240" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="340" y="62" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">5</text>
  <!-- Dots -->
  <circle cx="40" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="180" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="220" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="240" cy="40" r="5" fill="#1e293b"/>
  <circle cx="340" cy="40" r="5" fill="#22c55e"/>
  <!-- Order label -->
  <text x="100" y="16" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">colder</text>
  <text x="300" y="16" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">warmer</text>
</svg>`,
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line: start at -3, move 5 right to reach 2">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -5 to 4, step = (360-20)/9 = ~37.8px -->
  <!-- -5:20, -4:57.8, -3:95.5, -2:133.3, -1:171.1, 0:208.9, 1:246.7, 2:284.4, 3:322.2, 4:360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks -->
  <line x1="58" y1="35" x2="58" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="96" y1="34" x2="96" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="133" y1="35" x2="133" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="171" y1="35" x2="171" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="209" y1="33" x2="209" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <line x1="247" y1="35" x2="247" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="284" y1="34" x2="284" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="322" y1="35" x2="322" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="58" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−4</text>
  <text x="96" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−3</text>
  <text x="133" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−2</text>
  <text x="171" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−1</text>
  <text x="209" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="247" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="284" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="322" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- Start and end dots -->
  <circle cx="96" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="284" cy="40" r="6" fill="#64748b"/>
  <!-- Arrow from -3 pointing right 5 steps -->
  <path d="M 96 26 Q 190 10 278 26" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polygon points="284,26 274,20 278,30" fill="#5b5ef4"/>
  <text x="190" y="10" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">+5 (move right)</text>
</svg>`,
      options: ["-8", "2", "8", "-2"],
      answer: 1,
      explanation: "Moving right on the number line means adding. −3 + 5 = 2. Starting at −3, move right 5 steps: −3, −2, −1, 0, 1, 2."
    },
    {
      id: "c13_q11",
      topic: "Addition and subtraction on the number line",
      type: "input",
      question: "Use the number line to calculate: <strong>−2 + (−4)</strong>",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line: start at -2, move 4 left to reach -6">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -8 to 2, step = (360-20)/10 = 34px -->
  <!-- -8:20, -7:54, -6:88, -5:122, -4:156, -3:190, -2:224, -1:258, 0:292, 1:326, 2:360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks -->
  <line x1="54" y1="35" x2="54" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="88" y1="34" x2="88" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="122" y1="35" x2="122" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="156" y1="35" x2="156" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="190" y1="35" x2="190" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="224" y1="34" x2="224" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="258" y1="35" x2="258" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="292" y1="33" x2="292" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <line x1="326" y1="35" x2="326" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="54" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−7</text>
  <text x="88" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−6</text>
  <text x="122" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−5</text>
  <text x="156" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−4</text>
  <text x="190" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−3</text>
  <text x="224" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−2</text>
  <text x="258" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−1</text>
  <text x="292" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <text x="326" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <!-- Start and end dots -->
  <circle cx="224" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="88" cy="40" r="6" fill="#64748b"/>
  <!-- Arrow from -2 pointing left 4 steps -->
  <path d="M 224 26 Q 156 10 94 26" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polygon points="88,26 98,20 94,30" fill="#5b5ef4"/>
  <text x="156" y="10" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">−4 (move left)</text>
</svg>`,
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
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line: -7 minus (-4) equals -3, move right 4 steps">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- range -8 to 1, step = (360-20)/9 = ~37.8px -->
  <!-- -8:20, -7:57.8, -6:95.5, -5:133.3, -4:171.1, -3:208.9, -2:246.7, -1:284.4, 0:322.2, 1:360 -->
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,35 352,45" fill="#64748b"/>
  <polygon points="20,40 28,35 28,45" fill="#64748b"/>
  <!-- Ticks -->
  <line x1="58" y1="34" x2="58" y2="46" stroke="#f43f5e" stroke-width="2"/>
  <line x1="96" y1="35" x2="96" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="133" y1="35" x2="133" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="171" y1="35" x2="171" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="209" y1="34" x2="209" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="247" y1="35" x2="247" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="284" y1="35" x2="284" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="322" y1="33" x2="322" y2="47" stroke="#64748b" stroke-width="2.5"/>
  <!-- Labels -->
  <text x="58" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">−7</text>
  <text x="96" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−6</text>
  <text x="133" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−5</text>
  <text x="171" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−4</text>
  <text x="209" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−3</text>
  <text x="247" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−2</text>
  <text x="284" y="62" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">−1</text>
  <text x="322" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">0</text>
  <!-- Start and end dots -->
  <circle cx="58" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="209" cy="40" r="6" fill="#64748b"/>
  <!-- Arrow from -7 pointing right 4 steps -->
  <path d="M 58 26 Q 133 10 203 26" fill="none" stroke="#5b5ef4" stroke-width="2"/>
  <polygon points="209,26 199,20 203,30" fill="#5b5ef4"/>
  <text x="133" y="10" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">+?</text>
</svg>`,
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
    },
    {
      id: "c13_q24",
      topic: "Negative numbers in context",
      type: "mcq",
      question: "A lift starts at <strong>floor −2</strong> (the basement). It goes up <strong>6 floors</strong>. Which floor does it reach?",
      options: ["Floor 4", "Floor 8", "Floor −8", "Floor −4"],
      answer: 0,
      explanation: "Starting at floor −2 and going up 6 floors: −2 + 6 = 4. The lift reaches floor 4. Going up means adding a positive number."
    },
    {
      id: "c13_q25",
      topic: "Negative numbers in context",
      type: "input",
      question: "The temperature at midnight is <strong>−8°C</strong>. By noon it has risen by <strong>11°C</strong>. What is the temperature at noon?",
      answer: "3",
      acceptableAnswers: ["3", "3°C", "3 degrees"],
      explanation: "Starting at −8°C and rising 11°C: −8 + 11 = 3. The temperature at noon is 3°C. You can picture this on a number line: start at −8 and move 11 steps to the right."
    },
    {
      id: "c13_q26",
      topic: "Negative numbers in context",
      type: "mcq",
      question: "Tom's bank account has <strong>$20</strong>. He spends <strong>$35</strong>. What is his new balance?",
      options: ["$55", "$15", "−$15", "−$55"],
      answer: 2,
      explanation: "Starting with $20 and spending $35: 20 − 35 = −15. Tom's balance is −$15, meaning he is overdrawn by $15. When you spend more than you have, your balance goes negative."
    },
    {
      id: "c13_q27",
      topic: "Addition and subtraction on the number line",
      type: "mcq",
      question: "Calculate: <strong>−6 − 4</strong>",
      options: ["-2", "10", "-10", "2"],
      answer: 2,
      explanation: "Subtracting a positive from a negative makes it more negative: −6 − 4 = −10. On the number line, start at −6 and move 4 steps to the left to reach −10."
    },
    {
      id: "c13_q28",
      topic: "Adding and subtracting negative numbers",
      type: "mcq",
      question: "Which calculation is <strong>equivalent</strong> to 4 − (−9)?",
      options: ["4 − 9", "4 + 9", "−4 + 9", "−4 − 9"],
      answer: 1,
      explanation: "Subtracting a negative number is the same as adding the positive. So 4 − (−9) = 4 + 9 = 13. The two negatives (the subtraction sign and the negative sign on 9) combine to make a positive."
    },
    {
      id: "c13_q29",
      topic: "Mixed operations",
      type: "mcq",
      question: "Calculate: <strong>(−3) × (−2) + (−8)</strong>",
      options: ["14", "−2", "2", "−14"],
      answer: 1,
      explanation: "Follow the order of operations — multiplication before addition. Step 1: (−3) × (−2) = +6 (negative times negative = positive). Step 2: 6 + (−8) = 6 − 8 = −2. The answer is −2."
    },
    {
      id: "c13_q30",
      topic: "Mixed operations",
      type: "input",
      question: "Calculate: <strong>−20 ÷ (−4) + (−3)</strong>",
      answer: "2",
      acceptableAnswers: ["2"],
      explanation: "Division before addition. Step 1: −20 ÷ (−4) = +5 (negative ÷ negative = positive). Step 2: 5 + (−3) = 5 − 3 = 2. The answer is 2."
    },
    {
      id: "c13_q31",
      topic: "Comparing integers",
      type: "mcq",
      question: "Fill in the blank with &lt;, &gt; or =: &nbsp; <strong>−12 ___ −7</strong>",
      options: ["&lt; (less than)", "&gt; (greater than)", "= (equal to)", "Cannot be determined"],
      answer: 0,
      explanation: "On the number line, −12 is further to the left than −7, so −12 is less than −7. We write −12 &lt; −7. A common mistake is thinking that −12 is bigger because 12 is a large number — but the negative sign reverses the comparison!"
    },
    {
      id: "c13_q32",
      topic: "Comparing integers",
      type: "mcq",
      question: "Which of the following correctly orders the integers from <strong>greatest to least</strong>?<br>2, −6, −2, 5, −9",
      options: [
        "−9, −6, −2, 2, 5",
        "5, 2, −2, −6, −9",
        "5, 2, −6, −2, −9",
        "2, 5, −2, −6, −9"
      ],
      answer: 1,
      explanation: "Greatest to least means right to left on the number line. The correct order is: 5, 2, −2, −6, −9. Notice that −2 is greater than −6 because it is closer to 0 (and to the right of −6 on the number line)."
    },
    {
      id: "c13_q33",
      topic: "Multiplying negative numbers",
      type: "mcq",
      question: "Which sign rule gives a <strong>negative</strong> answer?",
      options: [
        "negative × negative",
        "positive × positive",
        "negative × positive",
        "negative ÷ negative"
      ],
      answer: 2,
      explanation: "Different signs always give a negative result. Negative × positive = negative. The other options all involve the same sign, so they give a positive result."
    },
    {
      id: "c13_q34",
      topic: "Dividing negative numbers",
      type: "mcq",
      question: "Calculate: <strong>(−72) ÷ (−8)</strong>",
      options: ["−9", "9", "−64", "64"],
      answer: 1,
      explanation: "Same signs give a positive result: (−72) ÷ (−8) = +9. Check: 9 × (−8) = −72. Both numbers are negative, so the result is positive."
    },
    {
      id: "c13_q35",
      topic: "Negative numbers in context",
      difficulty: "challenging",
      type: "input",
      question: "The temperature <strong>dropped 7°C</strong> and is now <strong>−4°C</strong>. What was the <strong>original</strong> temperature?",
      answer: "3",
      acceptableAnswers: ["3", "3°C", "3 degrees"],
      explanation: "Work backwards: if the temperature dropped 7°C to reach −4°C, then the original temperature was −4 + 7 = 3°C. Think of it this way: original − 7 = −4, so original = −4 + 7 = 3°C. Great thinking for working backwards!"
    },
    {
      id: "c13_q36",
      topic: "Negative numbers in context",
      difficulty: "challenging",
      type: "input",
      question: "A submarine is at <strong>−240 m</strong>. It rises <strong>135 m</strong>, then dives <strong>75 m</strong>. What is its final depth?",
      answer: "-180",
      acceptableAnswers: ["-180", "-180 m", "-180m", "−180", "−180 m"],
      explanation: "Start at −240 m. Step 1: rises 135 m → −240 + 135 = −105 m. Step 2: dives 75 m → −105 − 75 = −180 m. The submarine's final depth is −180 m. Always do multi-step problems one step at a time!"
    },
    {
      id: "c13_q37",
      topic: "Mixed operations",
      difficulty: "challenging",
      type: "input",
      question: "Calculate: <strong>(−12) ÷ (−3) + 5</strong>",
      answer: "9",
      acceptableAnswers: ["9"],
      explanation: "Follow the order of operations — division before addition. Step 1: (−12) ÷ (−3) = +4 (negative ÷ negative = positive). Step 2: 4 + 5 = 9. The answer is 9."
    },
    {
      id: "c13_q38",
      topic: "Mixed operations",
      difficulty: "challenging",
      type: "mcq",
      question: "Aisha's score changes over three rounds of a game:<br><strong>Round 1: −5 points, Round 2: +12 points, Round 3: −3 points</strong>.<br>What is her total score?",
      options: ["20", "4", "−4", "−20"],
      answer: 1,
      explanation: "Add all three rounds: −5 + 12 + (−3). Step 1: −5 + 12 = 7. Step 2: 7 + (−3) = 7 − 3 = 4. Aisha's total score is 4 points. When adding multiple integers, it helps to deal with them two at a time."
    },
    {
      id: "c13_q40",
      topic: "Mixed operations",
      difficulty: "challenging",
      type: "input",
      question: "What integer must be added to <strong>−8</strong> to give an answer of <strong>3</strong>?",
      answer: "11",
      acceptableAnswers: ["11"],
      explanation: "We need to find n such that −8 + n = 3. Work backwards: n = 3 − (−8) = 3 + 8 = 11. Check: −8 + 11 = 3. This type of problem is called solving an equation — you can think of it as 'what number do I add to −8 to get to 3 on the number line?'"
    },
    {
      id: "c13_q41",
      topic: "The number line",
      type: "mcq",
      question: "Is the number <strong>−7</strong> positive, negative, or neither?",
      options: ["Positive", "Negative", "Neither", "It depends on context"],
      answer: 1,
      explanation: "−7 is a negative number because it is less than zero. Positive numbers are greater than zero, and zero itself is neither positive nor negative. The minus sign (−) before 7 tells us it is negative."
    },
    {
      id: "c13_q42",
      topic: "The number line",
      type: "mcq",
      question: "What is the <strong>opposite</strong> of −4?",
      options: ["−4", "0", "+4", "−(−4) = 8"],
      answer: 2,
      explanation: "The opposite of a number is the same distance from zero on the number line, but on the other side. −4 is 4 units to the left of zero, so its opposite is +4, which is 4 units to the right of zero."
    },
    {
      id: "c13_q43",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "A town is <strong>15 km south</strong> of the equator. If north is the positive direction, which integer represents this position?",
      options: ["15", "−15", "0", "+150"],
      answer: 1,
      explanation: "North is positive, so south is negative. 15 km south is represented by −15. If the town were 15 km north, it would be +15."
    },
    {
      id: "c13_q44",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "A clock is <strong>8 minutes slow</strong>. If fast is positive, which integer represents this?",
      options: ["8", "−8", "0", "+80"],
      answer: 1,
      explanation: "Fast is defined as positive, so slow is negative. 8 minutes slow is represented by −8. If the clock were 8 minutes fast, it would be +8."
    },
    {
      id: "c13_q45",
      topic: "Words indicating positive and negative",
      type: "mcq",
      question: "What is the <strong>opposite</strong> of 'gaining $12'?",
      options: ["Gaining $12", "Gaining $24", "Losing $12", "Losing $1"],
      answer: 2,
      explanation: "Gaining $12 means your money increases by $12, which is a positive change (+12). The opposite is losing $12, which means your money decreases by $12 (−12). Opposites have the same size but opposite sign."
    },
    {
      id: "c13_q46",
      topic: "Adding and subtracting negative numbers",
      type: "input",
      question: "Find the <strong>difference</strong> between 3 and −5.<br>(Hint: difference = greater number minus lesser number)",
      answer: "8",
      acceptableAnswers: ["8"],
      explanation: "3 is to the right of −5 on the number line, so 3 is greater. Difference = 3 − (−5) = 3 + 5 = 8. You can also count the steps from −5 to 3 on the number line: 5 steps to reach 0, then 3 more steps to reach 3, giving 5 + 3 = 8."
    },
    {
      id: "c13_q47",
      topic: "Multiplying negative numbers",
      type: "input",
      question: "Calculate: <strong>(−2) × 3 × (−4)</strong>",
      answer: "24",
      acceptableAnswers: ["24"],
      explanation: "Work left to right. Step 1: (−2) × 3 = −6 (different signs → negative). Step 2: −6 × (−4) = +24 (same signs → positive). The answer is 24. With three factors, count the negatives: two negatives give a positive overall sign."
    },
    {
      id: "c13_q48",
      topic: "Addition and subtraction on the number line",
      type: "input",
      question: "Use the number line to calculate: <strong>2 + 3 − 6</strong>",
      answer: "-1",
      acceptableAnswers: ["-1"],
      explanation: "Work left to right on the number line. Start at 2. Step 1: add 3, move right → 2 + 3 = 5. Step 2: subtract 6, move left → 5 − 6 = −1. The answer is −1."
    }
  ]
};
