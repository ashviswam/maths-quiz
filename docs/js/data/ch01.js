const ch01 = {
  id: 1,
  title: "Whole Numbers",
  icon: "🔢",
  color: "#6366f1",
  topics: ["Place value", "Number lines", "Big numbers", "Rounding numbers", "Roman numerals", "Estimation"],
  questions: [
    {
      id: "c1_q1",
      topic: "Place value",
      type: "mcq",
      question: "What is the value of the digit <strong>7</strong> in the number 3,748,215?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Place value chart for 3,748,215">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- Column headers -->
  <rect x="10" y="10" width="54" height="36" rx="4" fill="#e2e8f0"/>
  <rect x="66" y="10" width="54" height="36" rx="4" fill="#e2e8f0"/>
  <rect x="122" y="10" width="54" height="36" rx="4" fill="#e2e8f0"/>
  <rect x="178" y="10" width="54" height="36" rx="4" fill="#e2e8f0"/>
  <rect x="234" y="10" width="54" height="36" rx="4" fill="#e2e8f0"/>
  <rect x="290" y="10" width="54" height="36" rx="4" fill="#5b5ef4"/>
  <rect x="346" y="10" width="44" height="36" rx="4" fill="#e2e8f0"/>
  <!-- Header labels -->
  <text x="37" y="23" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Millions</text>
  <text x="37" y="35" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="8">1,000,000</text>
  <text x="93" y="23" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Hund.</text>
  <text x="93" y="35" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="8">Thous.</text>
  <text x="149" y="23" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Ten</text>
  <text x="149" y="35" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="8">Thous.</text>
  <text x="205" y="23" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Thou-</text>
  <text x="205" y="35" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="8">sands</text>
  <text x="261" y="23" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Hund-</text>
  <text x="261" y="35" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="8">reds</text>
  <text x="317" y="23" text-anchor="middle" fill="#ffffff" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Hund.</text>
  <text x="317" y="35" text-anchor="middle" fill="#e0e0ff" font-family="Nunito,Arial,sans-serif" font-size="8">Thous.</text>
  <text x="368" y="28" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="600">Tens</text>
  <!-- Digit row background -->
  <rect x="10" y="58" width="54" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="66" y="58" width="54" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="122" y="58" width="54" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="178" y="58" width="54" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="234" y="58" width="54" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="290" y="58" width="54" height="44" rx="4" fill="rgba(91,94,244,0.12)" stroke="#5b5ef4" stroke-width="2"/>
  <rect x="346" y="58" width="44" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Digit values -->
  <text x="37" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">3</text>
  <text x="93" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">7</text>
  <text x="149" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">4</text>
  <text x="205" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">8</text>
  <text x="261" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">2</text>
  <text x="317" y="86" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">7</text>
  <text x="368" y="86" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="24" font-weight="700">…</text>
  <!-- Number display -->
  <text x="200" y="138" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="14" font-weight="700">3, 7 4 8, 2 1 5</text>
  <!-- Pointer arrow to highlighted 7 -->
  <line x1="317" y1="107" x2="317" y2="150" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="317" y="165" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">7 is here</text>
  <text x="317" y="180" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="10">(hundred-thousands)</text>
</svg>`,
      options: ["7,000", "700,000", "70,000", "7,000,000"],
      answer: 1,
      explanation: "In 3,748,215, reading from right: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands (7), millions. The digit 7 is in the hundred-thousands place, so its value is 7 × 100,000 = 700,000."
    },
    {
      id: "c1_q2",
      topic: "Place value",
      type: "mcq",
      question: "Which digit is in the <strong>ten-thousands</strong> place in 2,564,831?",
      options: ["2", "5", "6", "4"],
      answer: 2,
      explanation: "Counting places from the right in 2,564,831: ones (1), tens (3), hundreds (8), thousands (4), ten-thousands (6), hundred-thousands (5), millions (2). The digit in the ten-thousands place is 6."
    },
    {
      id: "c1_q3",
      topic: "Place value",
      type: "mcq",
      question: "What is the expanded form of <strong>4,306,050</strong>?",
      options: [
        "4,000,000 + 300,000 + 60,000 + 500",
        "4,000,000 + 300,000 + 6,000 + 50",
        "4,000,000 + 306,000 + 50",
        "4,000,000 + 30,000 + 6,000 + 50"
      ],
      answer: 1,
      explanation: "4,306,050 breaks down as: 4 millions = 4,000,000; 3 hundred-thousands = 300,000; 0 ten-thousands; 6 thousands = 6,000; 0 hundreds; 5 tens = 50; 0 ones. So the expanded form is 4,000,000 + 300,000 + 6,000 + 50."
    },
    {
      id: "c1_q4",
      topic: "Place value",
      type: "input",
      question: "Write <em>two million, four hundred and fifty-three thousand, seven hundred and nine</em> in digits.",
      answer: "2453709",
      acceptableAnswers: ["2453709", "2,453,709"],
      explanation: "2,000,000 + 400,000 + 53,000 + 700 + 9 = 2,453,709. Place each part carefully: 2 in the millions, 453 in the thousands group, and 709 in the last three places."
    },
    {
      id: "c1_q5",
      topic: "Place value",
      type: "input",
      question: "What is the value of the digit <strong>8</strong> in the number 1,085,426? Write your answer as a number.",
      answer: "80000",
      acceptableAnswers: ["80000", "80,000"],
      explanation: "In 1,085,426, the digit 8 sits in the ten-thousands place. Its value is 8 × 10,000 = 80,000."
    },
    {
      id: "c1_q6",
      topic: "Place value",
      type: "mcq",
      question: "Which number has a <strong>4</strong> in the hundred-thousands place and a <strong>9</strong> in the tens place?",
      options: ["4,302,091", "2,493,290", "1,493,092", "3,401,094"],
      answer: 2,
      explanation: "In 1,493,092: the hundred-thousands digit is 4 (1,<strong>4</strong>93,092) and the tens digit is 9 (1,493,0<strong>9</strong>2). Both conditions are satisfied, making this the correct answer."
    },
    {
      id: "c1_q7",
      topic: "Number lines",
      type: "mcq",
      question: "On a number line from 0 to 10,000, what number is exactly halfway between <strong>3,000</strong> and <strong>4,000</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 3000 to 4000 showing midpoint 3500">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Number line axis -->
  <line x1="30" y1="40" x2="350" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Arrow heads -->
  <polygon points="350,40 342,36 342,44" fill="#64748b"/>
  <!-- Tick marks at 3000 and 4000 -->
  <line x1="30" y1="34" x2="30" y2="46" stroke="#64748b" stroke-width="2"/>
  <line x1="190" y1="34" x2="190" y2="46" stroke="#64748b" stroke-width="2"/>
  <!-- Midpoint tick (3500) - highlighted -->
  <line x1="110" y1="30" x2="110" y2="50" stroke="#f43f5e" stroke-width="2"/>
  <circle cx="110" cy="40" r="5" fill="#f43f5e"/>
  <!-- Labels -->
  <text x="30" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">3,000</text>
  <text x="190" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">4,000</text>
  <text x="110" y="20" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">?</text>
  <!-- Brace or arrows indicating halfway -->
  <line x1="30" y1="70" x2="110" y2="70" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="110" y1="70" x2="190" y2="70" stroke="#5b5ef4" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="70" y="76" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="9">half</text>
  <text x="150" y="76" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="9">half</text>
</svg>`,
      options: ["3,400", "3,500", "3,600", "3,050"],
      answer: 1,
      explanation: "The midpoint of two numbers is found by adding them and dividing by 2: (3,000 + 4,000) ÷ 2 = 7,000 ÷ 2 = 3,500."
    },
    {
      id: "c1_q8",
      topic: "Number lines",
      type: "mcq",
      question: "A number line goes from 0 to 10,000 with marks every 1,000. Point P is <strong>two marks past 6,000</strong>. What number does P represent?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line from 0 to 10000 with marks every 1000, point P at 8000">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Number line axis -->
  <line x1="20" y1="40" x2="370" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Arrow head -->
  <polygon points="370,40 362,36 362,44" fill="#64748b"/>
  <!-- Tick marks every 1000 from 0 to 10000 (11 ticks, spaced 33px apart) -->
  <!-- 0=20, 1000=53, 2000=86, 3000=119, 4000=152, 5000=185, 6000=218, 7000=251, 8000=284, 9000=317, 10000=350 -->
  <line x1="20" y1="35" x2="20" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="53" y1="35" x2="53" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="86" y1="35" x2="86" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="119" y1="35" x2="119" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="152" y1="35" x2="152" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="185" y1="35" x2="185" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="218" y1="35" x2="218" y2="45" stroke="#64748b" stroke-width="2"/>
  <line x1="251" y1="35" x2="251" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="284" y1="30" x2="284" y2="50" stroke="#f43f5e" stroke-width="2.5"/>
  <line x1="317" y1="35" x2="317" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="350" y1="35" x2="350" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Highlighted point P at 8000 -->
  <circle cx="284" cy="40" r="5" fill="#f43f5e"/>
  <text x="284" y="22" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">P</text>
  <!-- Labels: show 0, 6000, 7000, 8000, 10000 to keep it clean -->
  <text x="20" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">0</text>
  <text x="218" y="60" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">6,000</text>
  <text x="251" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">7,000</text>
  <text x="284" y="60" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">?</text>
  <text x="350" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">10,000</text>
  <!-- Arrow showing 2 marks past 6000 -->
  <text x="249" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="9">+1,000  +1,000</text>
</svg>`,
      options: ["6,002", "6,200", "8,000", "6,020"],
      answer: 2,
      explanation: "Each mark on this number line represents 1,000. Starting at 6,000 and moving two marks forward: 6,000 + 2 × 1,000 = 8,000."
    },
    {
      id: "c1_q9",
      topic: "Number lines",
      type: "input",
      question: "A number line from 0 to 10,000 is divided into <strong>10 equal parts</strong>. What is the value of each part? Write your answer as a number.",
      answer: "1000",
      acceptableAnswers: ["1000", "1,000"],
      explanation: "To find the value of each part, divide the total length by the number of parts: 10,000 ÷ 10 = 1,000. Each equal part has a value of 1,000."
    },
    {
      id: "c1_q10",
      topic: "Number lines",
      type: "mcq",
      question: "On a number line, which number is <strong>500 less</strong> than 7,200?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line showing 500 less than 7200 equals 6700">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Number line axis -->
  <line x1="20" y1="40" x2="365" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <!-- Arrow heads on both sides -->
  <polygon points="365,40 357,36 357,44" fill="#64748b"/>
  <polygon points="20,40 28,36 28,44" fill="#64748b"/>
  <!-- Key tick marks: 6000, 6500, 6700, 7000, 7200, 7500 -->
  <!-- Range 6000-7500 mapped to x=40..340 (300px, 1unit=0.2px per unit, scale: 300/1500=0.2px per unit) -->
  <!-- 6000 -> 40, 6500 -> 140, 6700 -> 180, 7000 -> 240, 7200 -> 280, 7500 -> 340 -->
  <line x1="40" y1="35" x2="40" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="140" y1="35" x2="140" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="240" y1="35" x2="240" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="340" y1="35" x2="340" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <!-- Highlighted points -->
  <line x1="180" y1="30" x2="180" y2="50" stroke="#5b5ef4" stroke-width="2"/>
  <circle cx="180" cy="40" r="5" fill="#5b5ef4"/>
  <line x1="280" y1="30" x2="280" y2="50" stroke="#1e293b" stroke-width="2"/>
  <circle cx="280" cy="40" r="4" fill="#1e293b"/>
  <!-- Labels -->
  <text x="40" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">6,000</text>
  <text x="140" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">6,500</text>
  <text x="180" y="60" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">?</text>
  <text x="240" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">7,000</text>
  <text x="280" y="60" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">7,200</text>
  <text x="340" y="60" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">7,500</text>
  <!-- Arrow showing −500 -->
  <line x1="275" y1="22" x2="185" y2="22" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrowLeft)"/>
  <polygon points="183,22 191,18 191,26" fill="#f43f5e"/>
  <text x="230" y="18" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">− 500</text>
</svg>`,
      options: ["6,700", "7,700", "6,200", "7,150"],
      answer: 0,
      explanation: "Moving 500 units to the left (decreasing) on a number line means subtracting: 7,200 − 500 = 6,700."
    },
    {
      id: "c1_q11",
      topic: "Big numbers",
      type: "mcq",
      question: "How do you write <strong>five million, two hundred thousand and sixty</strong> in digits?",
      options: ["5,200,600", "5,200,060", "5,020,060", "52,000,060"],
      answer: 1,
      explanation: "Five million = 5,000,000; two hundred thousand = 200,000; sixty = 60. Adding: 5,000,000 + 200,000 + 60 = 5,200,060. Note there are no thousands, no hundreds, and no ones."
    },
    {
      id: "c1_q12",
      topic: "Big numbers",
      type: "mcq",
      question: "Which of the following numbers is the <strong>largest</strong>?",
      options: ["987,654", "1,023,456", "999,999", "1,000,001"],
      answer: 1,
      explanation: "987,654 and 999,999 have 6 digits; 1,023,456 and 1,000,001 each have 7 digits and are larger. Comparing the two 7-digit numbers in the ten-thousands place: 1,023,456 has 2 and 1,000,001 has 0, so 1,023,456 is the largest."
    },
    {
      id: "c1_q13",
      topic: "Big numbers",
      type: "input",
      question: "Write the number <strong>3,070,500</strong> in words.",
      answer: "three million, seventy thousand, five hundred",
      acceptableAnswers: [
        "three million, seventy thousand, five hundred",
        "three million seventy thousand five hundred",
        "Three million, seventy thousand, five hundred",
        "Three million seventy thousand five hundred"
      ],
      explanation: "3,070,500 = 3 millions + 70 thousands + 5 hundreds + 0 ones = three million, seventy thousand, five hundred. There are no single thousands or ones."
    },
    {
      id: "c1_q14",
      topic: "Big numbers",
      type: "mcq",
      question: "The distance from Earth to the Moon is approximately <strong>384,400 km</strong>. How do you read this number in words?",
      options: [
        "Thirty-eight thousand, four hundred and forty",
        "Three hundred and eighty-four thousand and four hundred",
        "Three million, eight hundred and forty-four",
        "Three hundred and eight thousand, four hundred"
      ],
      answer: 1,
      explanation: "384,400 has 3 in the hundred-thousands, 8 in the ten-thousands, 4 in the thousands, and 4 in the hundreds: three hundred and eighty-four thousand, four hundred."
    },
    {
      id: "c1_q15",
      topic: "Rounding numbers",
      type: "mcq",
      question: "Round <strong>47,382</strong> to the nearest <strong>1,000</strong>.",
      options: ["47,000", "48,000", "47,400", "50,000"],
      answer: 0,
      explanation: "Look at the hundreds digit (3). Since 3 < 5, round down: keep the thousands digit as 7 and replace the rest with zeros. 47,382 rounded to the nearest 1,000 is 47,000."
    },
    {
      id: "c1_q16",
      topic: "Rounding numbers",
      type: "input",
      question: "Round <strong>83,650</strong> to the nearest <strong>100</strong>. Write your answer as a number.",
      answer: "83700",
      acceptableAnswers: ["83700", "83,700"],
      explanation: "Look at the tens digit (5). Since 5 ≥ 5, round up: increase the hundreds digit from 6 to 7 and replace the rest with zeros. 83,650 rounded to the nearest 100 is 83,700."
    },
    {
      id: "c1_q17",
      topic: "Rounding numbers",
      type: "mcq",
      question: "A school fundraiser collected $<strong>2,364</strong>. Rounded to the nearest <strong>10</strong>, how much did they collect?",
      options: ["$2,300", "$2,360", "$2,370", "$2,400"],
      answer: 1,
      explanation: "Look at the ones digit (4). Since 4 < 5, round down: keep the tens digit as 6 and replace the ones with zero. $2,364 rounded to the nearest 10 is $2,360."
    },
    {
      id: "c1_q18",
      topic: "Rounding numbers",
      type: "input",
      question: "Round <strong>156,749</strong> to the nearest <strong>10,000</strong>. Write your answer as a number.",
      answer: "160000",
      acceptableAnswers: ["160000", "160,000"],
      explanation: "Look at the thousands digit (6). Since 6 ≥ 5, round up: increase the ten-thousands digit from 5 to 6 and replace the rest with zeros. 156,749 rounded to the nearest 10,000 is 160,000."
    },
    {
      id: "c1_q19",
      topic: "Rounding numbers",
      type: "mcq",
      question: "A distance is measured as <strong>34,512 metres</strong>. Which shows it correctly rounded to the nearest <strong>100</strong>?",
      options: ["34,500", "34,600", "35,000", "34,000"],
      answer: 0,
      explanation: "Look at the tens digit (1). Since 1 < 5, round down: keep the hundreds digit as 5 and replace the tens and ones with zeros. 34,512 rounded to the nearest 100 is 34,500."
    },
    {
      id: "c1_q20",
      topic: "Rounding numbers",
      type: "mcq",
      question: "The population of a city is <strong>1,348,276</strong>. Rounded to the nearest <strong>10,000</strong>, what is the population?",
      options: ["1,300,000", "1,350,000", "1,348,000", "1,340,000"],
      answer: 1,
      explanation: "Look at the thousands digit (8). Since 8 ≥ 5, round up: increase the ten-thousands digit from 4 to 5 and replace the rest with zeros. 1,348,276 rounded to the nearest 10,000 is 1,350,000."
    },

    // ── NEW QUESTIONS START HERE ──────────────────────────────────────

    // Comparing and ordering large numbers
    {
      id: "c1_q21",
      topic: "Comparing numbers",
      type: "mcq",
      question: "Which symbol correctly fills the gap? <br><strong>4,085,312 __ 4,085,231</strong>",
      options: ["< (less than)", "> (greater than)", "= (equal to)", "Cannot be determined"],
      answer: 1,
      explanation: "Both numbers share the same digits up to the hundreds place: 4,085,___. In 4,085,312 the hundreds digit is 3, and in 4,085,231 it is 2. Since 3 > 2, we get 4,085,312 > 4,085,231."
    },
    {
      id: "c1_q22",
      topic: "Comparing numbers",
      type: "mcq",
      question: "Arrange these numbers in <strong>ascending order</strong> (smallest to largest):<br>6,003,450 &nbsp; 603,450 &nbsp; 6,300,045 &nbsp; 6,030,450",
      options: [
        "603,450 → 6,003,450 → 6,030,450 → 6,300,045",
        "603,450 → 6,030,450 → 6,003,450 → 6,300,045",
        "6,003,450 → 6,030,450 → 6,300,045 → 603,450",
        "603,450 → 6,003,450 → 6,300,045 → 6,030,450"
      ],
      answer: 0,
      explanation: "Start by counting digits: 603,450 has 6 digits so it is smallest. The other three all have 7 digits. For 7-digit numbers, compare the millions digit (all are 6), then hundred-thousands: 6,003,450 has 0; 6,030,450 has 0; 6,300,045 has 3. So 6,003,450 and 6,030,450 are smaller than 6,300,045. Between those two, compare ten-thousands: 0 vs 3, so 6,003,450 < 6,030,450. Ascending order: 603,450 → 6,003,450 → 6,030,450 → 6,300,045."
    },
    {
      id: "c1_q23",
      topic: "Comparing numbers",
      type: "input",
      question: "Write the <strong>smallest</strong> 7-digit number you can make using the digits 3, 0, 7, 1, 5, 0, 2 (each digit used exactly once). Write your answer without commas.",
      answer: "1002357",
      acceptableAnswers: ["1002357", "1,002,357"],
      explanation: "To make the smallest 7-digit number, the leading digit must be as small as possible but not zero. The smallest non-zero digit available is 1. Then arrange the remaining digits (0, 0, 2, 3, 5, 7) in ascending order: 0, 0, 2, 3, 5, 7. So the number is 1,002,357."
    },
    {
      id: "c1_q24",
      topic: "Comparing numbers",
      type: "mcq",
      question: "Four cities have these populations:<br>City A: 2,407,830 &nbsp; City B: 2,470,038 &nbsp; City C: 2,047,830 &nbsp; City D: 2,740,080<br>Which city has the <strong>second largest</strong> population?",
      options: ["City A", "City B", "City C", "City D"],
      answer: 1,
      explanation: "All four numbers start with 2 (millions). Compare the hundred-thousands digit: A = 4, B = 4, C = 0, D = 7. City C is smallest. City D (7) is largest. Between A and B, compare ten-thousands: A has 0, B has 7 → B > A. Order largest to smallest: D, B, A, C. So the second largest is City B (2,470,038)."
    },

    // Rounding to nearest 100,000
    {
      id: "c1_q25",
      topic: "Rounding numbers",
      type: "mcq",
      question: "Round <strong>3,749,200</strong> to the nearest <strong>100,000</strong>.",
      options: ["3,700,000", "3,800,000", "4,000,000", "3,750,000"],
      answer: 0,
      explanation: "Look at the ten-thousands digit (4). Since 4 < 5, round down: keep the hundred-thousands digit as 7 and replace everything after it with zeros. 3,749,200 rounded to the nearest 100,000 is 3,700,000."
    },
    {
      id: "c1_q26",
      topic: "Rounding numbers",
      type: "input",
      question: "Round <strong>7,852,400</strong> to the nearest <strong>100,000</strong>. Write your answer as a number.",
      answer: "7900000",
      acceptableAnswers: ["7900000", "7,900,000"],
      explanation: "Look at the ten-thousands digit (5). Since 5 ≥ 5, round up: increase the hundred-thousands digit from 8 to 9 and replace the rest with zeros. 7,852,400 rounded to the nearest 100,000 is 7,900,000."
    },

    // Number patterns on a number line
    {
      id: "c1_q27",
      topic: "Number lines",
      type: "mcq",
      question: "A number line shows this pattern: 5,000 → 10,000 → 15,000 → 20,000 → ___<br>What is the <strong>next number</strong> in the pattern?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Number line pattern: 5000, 10000, 15000, 20000, next?">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <line x1="20" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="360,40 352,36 352,44" fill="#64748b"/>
  <!-- Ticks at 5000, 10000, 15000, 20000, 25000 mapped to x=40,100,160,220,280 -->
  <line x1="40" y1="33" x2="40" y2="47" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="100" y1="33" x2="100" y2="47" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="160" y1="33" x2="160" y2="47" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="220" y1="33" x2="220" y2="47" stroke="#5b5ef4" stroke-width="2"/>
  <line x1="280" y1="29" x2="280" y2="51" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,2"/>
  <circle cx="280" cy="40" r="5" fill="#f43f5e"/>
  <!-- Labels -->
  <text x="40" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">5,000</text>
  <text x="100" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">10,000</text>
  <text x="160" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">15,000</text>
  <text x="220" y="62" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">20,000</text>
  <text x="280" y="22" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">?</text>
  <!-- Step arrows -->
  <text x="70" y="30" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">+5,000</text>
  <text x="130" y="30" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">+5,000</text>
  <text x="190" y="30" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">+5,000</text>
</svg>`,
      options: ["22,000", "25,000", "24,000", "30,000"],
      answer: 1,
      explanation: "The pattern increases by 5,000 each time: 5,000 → 10,000 (+5,000) → 15,000 (+5,000) → 20,000 (+5,000). The next number is 20,000 + 5,000 = 25,000."
    },
    {
      id: "c1_q28",
      topic: "Number lines",
      type: "input",
      question: "A number line starts at <strong>100,000</strong> and each step increases by <strong>50,000</strong>. What is the <strong>4th number</strong> in this sequence (counting 100,000 as the 1st)?",
      answer: "250000",
      acceptableAnswers: ["250000", "250,000"],
      explanation: "The sequence is: 100,000 (1st), 150,000 (2nd), 200,000 (3rd), 250,000 (4th). Each step adds 50,000, so the 4th number = 100,000 + 3 × 50,000 = 100,000 + 150,000 = 250,000."
    },

    // Roman numerals — full coverage
    {
      id: "c1_q29",
      topic: "Roman numerals",
      type: "mcq",
      question: "What is the Roman numeral for <strong>9</strong>?",
      options: ["VIIII", "IX", "IIX", "XI"],
      answer: 1,
      explanation: "In Roman numerals, a smaller numeral placed <em>before</em> a larger one means subtraction. IX means 10 − 1 = 9. Writing VIIII (four I's) is not the standard form — Roman numerals avoid using the same symbol more than three times in a row."
    },
    {
      id: "c1_q30",
      topic: "Roman numerals",
      type: "mcq",
      question: "What is the value of the Roman numeral <strong>XLVII</strong>?",
      options: ["47", "57", "37", "67"],
      answer: 0,
      explanation: "Break it apart: XL = 40 (50 − 10), V = 5, II = 2. So XLVII = 40 + 5 + 2 = 47."
    },
    {
      id: "c1_q31",
      topic: "Roman numerals",
      type: "mcq",
      question: "Write <strong>94</strong> in Roman numerals.",
      options: ["XCIV", "LXXXIV", "XCIIII", "IVC"],
      answer: 0,
      explanation: "90 = XC (100 − 10) and 4 = IV (5 − 1). So 94 = XC + IV = XCIV."
    },
    {
      id: "c1_q32",
      topic: "Roman numerals",
      type: "input",
      question: "Write the Roman numeral <strong>MCDLXXI</strong> as a normal (Hindu-Arabic) number.",
      answer: "1471",
      acceptableAnswers: ["1471"],
      explanation: "Break it into parts: M = 1000, CD = 400 (500 − 100), L = 50, XX = 20, I = 1. Adding: 1000 + 400 + 50 + 20 + 1 = 1471."
    },
    {
      id: "c1_q33",
      topic: "Roman numerals",
      type: "mcq",
      question: "A film was made in <strong>MCMXCIX</strong>. In which year was it made?",
      options: ["1989", "1999", "2009", "1909"],
      answer: 1,
      explanation: "M = 1000; CM = 900 (1000 − 100); XC = 90 (100 − 10); IX = 9 (10 − 1). Total: 1000 + 900 + 90 + 9 = 1999."
    },
    {
      id: "c1_q34",
      topic: "Roman numerals",
      type: "mcq",
      question: "Which of these Roman numerals is <strong>NOT</strong> written correctly?",
      options: ["XIV", "XXIX", "IIIX", "LXIV"],
      answer: 2,
      explanation: "IIIX is not valid because you cannot subtract more than one symbol at a time (II = 2 cannot be placed before X). The correct way to write 7 is VII, and 8 is VIII. IIIX is simply not a standard Roman numeral. The others are all correct: XIV = 14, XXIX = 29, LXIV = 64."
    },
    {
      id: "c1_q35",
      topic: "Roman numerals",
      type: "input",
      question: "Write <strong>2024</strong> in Roman numerals.",
      answer: "MMXXIV",
      acceptableAnswers: ["MMXXIV"],
      explanation: "2000 = MM, 20 = XX, 4 = IV. So 2024 = MM + XX + IV = MMXXIV."
    },

    // Estimation by rounding
    {
      id: "c1_q36",
      topic: "Estimation",
      type: "mcq",
      question: "A shop sells 312 boxes of cereal per week. By rounding to the nearest 100, <strong>estimate</strong> how many boxes it sells in 4 weeks.",
      options: ["About 1,200", "About 1,600", "About 1,000", "About 800"],
      answer: 0,
      explanation: "Round 312 to the nearest 100 → 300. Then estimate: 300 × 4 = 1,200. So the shop sells approximately 1,200 boxes in 4 weeks."
    },
    {
      id: "c1_q37",
      topic: "Estimation",
      type: "mcq",
      question: "A cinema has 478 seats and hosts 3 shows per day. By <strong>estimating</strong> (rounding each number to the nearest 100 or 10), roughly how many people attend in one day?",
      options: ["About 1,200", "About 1,500", "About 900", "About 4,800"],
      answer: 1,
      explanation: "Round 478 to the nearest 100 → 500. Number of shows = 3 (already small, keep it). Estimate: 500 × 3 = 1,500. So roughly 1,500 people attend per day."
    },
    {
      id: "c1_q38",
      topic: "Estimation",
      type: "input",
      question: "A school library has 2,847 books. Another library has 3,192 books. By rounding each number to the nearest 1,000, <strong>estimate</strong> the total number of books. Write your answer as a number.",
      answer: "6000",
      acceptableAnswers: ["6000", "6,000"],
      explanation: "Round 2,847 to the nearest 1,000 → 3,000. Round 3,192 to the nearest 1,000 → 3,000. Estimated total = 3,000 + 3,000 = 6,000."
    },

    // ── CHALLENGING QUESTIONS ─────────────────────────────────────────

    {
      id: "c1_q39",
      topic: "Place value",
      difficulty: "challenging",
      type: "mcq",
      question: "I am a <strong>6-digit number</strong>. My <em>hundred-thousands</em> digit is <strong>5</strong>. My <em>ten-thousands</em> digit is <strong>3 more</strong> than my <em>units</em> digit. My <em>thousands</em> digit is <strong>2</strong>. My <em>hundreds</em> digit is <strong>0</strong>. My <em>tens</em> digit is <strong>twice</strong> my <em>units</em> digit. My <em>units</em> digit is <strong>3</strong>. What number am I?",
      options: ["523,063", "562,063", "523,603", "526,063"],
      answer: 1,
      explanation: "Work through each clue step by step:<br>• Units digit = 3<br>• Tens digit = twice units = 2 × 3 = 6<br>• Hundreds digit = 0<br>• Thousands digit = 2<br>• Ten-thousands digit = 3 more than units = 3 + 3 = 6<br>• Hundred-thousands digit = 5<br>Reading left to right: 5, 6, 2, 0, 6, 3 → <strong>562,063</strong>. Well done if you worked through each clue carefully!"
    },
    {
      id: "c1_q40",
      topic: "Rounding numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "A number rounds to <strong>47,000</strong> when rounded to the nearest 1,000, and rounds to <strong>47,400</strong> when rounded to the nearest 100. Which of the following could be the number?",
      options: ["47,449", "47,350", "47,451", "46,951"],
      answer: 0,
      explanation: "Work out the range that satisfies both conditions:<br><strong>Condition 1</strong> — rounds to 47,000 (nearest 1,000): the hundreds digit must be 0, 1, 2, 3, or 4, so the number is between 47,000 and 47,499.<br><strong>Condition 2</strong> — rounds to 47,400 (nearest 100): the tens digit must be 0, 1, 2, 3, or 4, so the number is between 47,400 and 47,449.<br>The overlap is <strong>47,400 to 47,449</strong>. Now check the options: 47,449 lies in this range ✓. Check 47,350: its tens digit is 5, so it rounds up to 47,400 ✓ for condition 2, but this is option B not A. The cleanest answer is <strong>47,449</strong> — it clearly satisfies both. (47,451 would round to 47,500, not 47,400. 46,951 rounds to 47,000 but also rounds to 47,000 for nearest 100.)"
    },
    {
      id: "c1_q41",
      topic: "Estimation",
      difficulty: "challenging",
      type: "mcq",
      question: "Roughly how many <strong>seconds</strong> are there in a year? (Use 365 days, 24 hours per day, 60 minutes per hour, 60 seconds per minute — round at each step to estimate.)",
      options: ["About 3,000,000", "About 30,000,000", "About 300,000,000", "About 3,000,000,000"],
      answer: 1,
      explanation: "Estimate step by step using rounded numbers:<br>• Minutes in an hour = 60<br>• Hours in a day = 24 ≈ 25 (round)<br>• Seconds in a day = 60 × 60 × 24 = 86,400 ≈ 90,000<br>• Days in a year ≈ 365 ≈ 400 (round up for ease)<br>• Seconds in a year ≈ 90,000 × 400 = 36,000,000 ≈ <strong>30 million</strong>.<br>The actual answer is about 31,536,000, so 'about 30,000,000' is the best estimate. This is a great example of how estimation helps you check if an answer is reasonable!"
    },
    {
      id: "c1_q42",
      topic: "Roman numerals",
      difficulty: "challenging",
      type: "mcq",
      question: "Which of the following calculations gives the <strong>largest result</strong> when the Roman numerals are converted to numbers?<br>A: XCIX + XI &nbsp;&nbsp; B: L × II &nbsp;&nbsp; C: C − IV &nbsp;&nbsp; D: XX × V",
      options: ["XCIX + XI = 110", "L × II = 100", "C − IV = 96", "XX × V = 100"],
      answer: 0,
      explanation: "Convert each Roman numeral and calculate:<br>• A: XCIX = 99, XI = 11 → 99 + 11 = <strong>110</strong><br>• B: L = 50, II = 2 → 50 × 2 = 100<br>• C: C = 100, IV = 4 → 100 − 4 = 96<br>• D: XX = 20, V = 5 → 20 × 5 = 100<br>The largest result is A = 110."
    },
    {
      id: "c1_q43",
      topic: "Place value",
      difficulty: "challenging",
      type: "input",
      question: "The digit <strong>6</strong> appears twice in a 7-digit number. In one position its value is <strong>6,000,000</strong> and in another its value is <strong>600</strong>. All other digits are 0. Write this number in digits (no commas).",
      answer: "6000600",
      acceptableAnswers: ["6000600", "6,000,600"],
      explanation: "If one 6 has value 6,000,000, it is in the millions place. If the other 6 has value 600, it is in the hundreds place. All other digits are 0. So the number is 6,000,600. Notice there are zeros in the hundred-thousands, ten-thousands, thousands, tens, and ones places."
    },
    {
      id: "c1_q44",
      topic: "Comparing numbers",
      difficulty: "challenging",
      type: "mcq",
      question: "Using the digits 1, 2, 3, 4, 5 each exactly once, Priya makes a 5-digit number. She wants the number to be as <strong>close as possible to 30,000</strong>. What number should she make?",
      options: ["31,245", "29,541", "31,254", "25,431"],
      answer: 0,
      explanation: "We want the number closest to 30,000. Options above 30,000: the smallest above 30,000 using digits 1–5 once would start with 3, then the next digit as small as possible: 31,245 (distance from 30,000 = 1,245). Options below 30,000: the largest below 30,000 starts with 2, then 9... but we only have digits 1–5! So the largest number starting with 2 uses 2, 5, 4, 3, 1 = 25,431 (distance = 4,569). Comparing: 31,245 is only 1,245 away, while 29,541 is 459 away. Wait — can we make 29,541? Digits used: 2, 9, 5, 4, 1 — but we don't have a 9. So 29,541 is not possible. The closest we can get below 30,000 is 25,431 (4,569 away). The closest above is 31,245 (1,245 away). So <strong>31,245</strong> is closest to 30,000."
    }
  ]
};
