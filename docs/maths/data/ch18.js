const ch18 = {
  id: 18,
  title: "Statistics",
  icon: "📊",
  color: "#0891b2",
  topics: ["Categorical data", "Dot plots", "Pictograms", "Column graphs", "Pie charts", "Numerical data", "Measuring the centre of a data set"],
  questions: [
    {
      id: "c18_q1",
      topic: "Categorical data",
      type: "mcq",
      question: "Which of the following is an example of <strong>categorical data</strong>?",
      options: ["The heights of students in centimetres", "The number of books each student read", "The favourite colours of students in a class", "The temperatures recorded each day in a week"],
      answer: 2,
      explanation: "Categorical data describes qualities or categories that cannot be measured with numbers, such as favourite colours. Heights, book counts, and temperatures are all numerical data."
    },
    {
      id: "c18_q2",
      topic: "Categorical data",
      type: "mcq",
      question: "A survey asks students: <em>'What type of pet do you have?'</em> with answers like dog, cat, fish, or none. What type of data is collected?",
      options: ["Continuous numerical data", "Discrete numerical data", "Categorical data", "Measurement data"],
      answer: 2,
      explanation: "Pet type is a category label, not a number, so it is categorical data. Categorical data sorts things into named groups rather than measuring quantities."
    },
    {
      id: "c18_q3",
      topic: "Numerical data",
      type: "mcq",
      question: "Which of the following is an example of <strong>discrete</strong> numerical data?",
      options: ["The mass of apples in kilograms", "The number of goals scored in each football match", "The time taken to run 100 metres", "The temperature of a swimming pool"],
      answer: 1,
      explanation: "Discrete data can only take exact, countable values (like 0, 1, 2, 3 goals). Mass, time, and temperature can take any value in a range, making them continuous data."
    },
    {
      id: "c18_q4",
      topic: "Numerical data",
      type: "mcq",
      question: "The distances students travel to school (recorded in kilometres, e.g. 1.3 km, 2.75 km) are best described as:",
      options: ["Categorical data", "Discrete numerical data", "Continuous numerical data", "Pictogram data"],
      answer: 2,
      explanation: "Distance is continuous because it can take any value within a range and is measured rather than counted. Continuous data includes measurements such as length, mass, and time."
    },
    {
      id: "c18_q5",
      topic: "Dot plots",
      type: "mcq",
      question: "A dot plot shows the number of siblings students have. The dots above each value are:<br><strong>0:</strong> ● ● ●<br><strong>1:</strong> ● ● ● ● ●<br><strong>2:</strong> ● ●<br><strong>3:</strong> ●<br>How many students were surveyed in total?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Dot plot showing number of siblings">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- x-axis -->
  <line x1="40" y1="185" x2="360" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis tick marks and labels -->
  <line x1="100" y1="182" x2="100" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="182" x2="180" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="260" y1="182" x2="260" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="340" y1="182" x2="340" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <text x="100" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">0</text>
  <text x="180" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">1</text>
  <text x="260" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">2</text>
  <text x="340" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">3</text>
  <text x="200" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Number of Siblings</text>
  <!-- 0 siblings: 3 dots -->
  <circle cx="100" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="100" cy="152" r="7" fill="#5b5ef4"/>
  <circle cx="100" cy="134" r="7" fill="#5b5ef4"/>
  <!-- 1 sibling: 5 dots -->
  <circle cx="180" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="180" cy="152" r="7" fill="#5b5ef4"/>
  <circle cx="180" cy="134" r="7" fill="#5b5ef4"/>
  <circle cx="180" cy="116" r="7" fill="#5b5ef4"/>
  <circle cx="180" cy="98" r="7" fill="#5b5ef4"/>
  <!-- 2 siblings: 2 dots -->
  <circle cx="260" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="260" cy="152" r="7" fill="#5b5ef4"/>
  <!-- 3 siblings: 1 dot -->
  <circle cx="340" cy="170" r="7" fill="#5b5ef4"/>
</svg>`,
      options: ["4", "9", "11", "12"],
      answer: 2,
      explanation: "Count all the dots: 3 + 5 + 2 + 1 = 11 students were surveyed in total. Each dot on a dot plot represents one data value."
    },
    {
      id: "c18_q6",
      topic: "Dot plots",
      type: "mcq",
      question: "Using the dot plot from the previous question (siblings: 0→3 dots, 1→5 dots, 2→2 dots, 3→1 dot), what is the <strong>most common</strong> number of siblings?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Dot plot showing number of siblings, tallest stack highlighted">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- x-axis -->
  <line x1="40" y1="185" x2="360" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis tick marks and labels -->
  <line x1="100" y1="182" x2="100" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="182" x2="180" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="260" y1="182" x2="260" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="340" y1="182" x2="340" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <text x="100" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">0</text>
  <text x="180" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">1</text>
  <text x="260" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">2</text>
  <text x="340" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">3</text>
  <text x="200" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Number of Siblings</text>
  <!-- 0 siblings: 3 dots (normal) -->
  <circle cx="100" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="100" cy="152" r="7" fill="#5b5ef4"/>
  <circle cx="100" cy="134" r="7" fill="#5b5ef4"/>
  <!-- 1 sibling: 5 dots (highlighted — most common) -->
  <circle cx="180" cy="170" r="7" fill="#f43f5e"/>
  <circle cx="180" cy="152" r="7" fill="#f43f5e"/>
  <circle cx="180" cy="134" r="7" fill="#f43f5e"/>
  <circle cx="180" cy="116" r="7" fill="#f43f5e"/>
  <circle cx="180" cy="98" r="7" fill="#f43f5e"/>
  <!-- 2 siblings: 2 dots -->
  <circle cx="260" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="260" cy="152" r="7" fill="#5b5ef4"/>
  <!-- 3 siblings: 1 dot -->
  <circle cx="340" cy="170" r="7" fill="#5b5ef4"/>
</svg>`,
      options: ["0", "1", "2", "3"],
      answer: 1,
      explanation: "The value with the most dots is 1 sibling, which has 5 dots. On a dot plot, the tallest stack of dots shows the most frequent (modal) value."
    },
    {
      id: "c18_q7",
      topic: "Dot plots",
      type: "input",
      question: "A dot plot records the scores (out of 10) on a quiz for 8 students:<br><strong>6:</strong> ●<br><strong>7:</strong> ● ●<br><strong>8:</strong> ● ● ●<br><strong>9:</strong> ●<br><strong>10:</strong> ●<br>What is the total of all the scores? Write your answer as a number.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Dot plot of quiz scores from 6 to 10">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- x-axis -->
  <line x1="40" y1="185" x2="360" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis tick marks and labels: scores 6,7,8,9,10 evenly at x=80,150,220,290,360 -->
  <line x1="80" y1="182" x2="80" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="150" y1="182" x2="150" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="182" x2="220" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="290" y1="182" x2="290" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <line x1="360" y1="182" x2="360" y2="188" stroke="#64748b" stroke-width="1.5"/>
  <text x="80" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">6</text>
  <text x="150" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">7</text>
  <text x="220" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">8</text>
  <text x="290" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">9</text>
  <text x="360" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="600">10</text>
  <text x="200" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Quiz Score</text>
  <!-- 6: 1 dot -->
  <circle cx="80" cy="170" r="7" fill="#5b5ef4"/>
  <!-- 7: 2 dots -->
  <circle cx="150" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="150" cy="152" r="7" fill="#5b5ef4"/>
  <!-- 8: 3 dots -->
  <circle cx="220" cy="170" r="7" fill="#5b5ef4"/>
  <circle cx="220" cy="152" r="7" fill="#5b5ef4"/>
  <circle cx="220" cy="134" r="7" fill="#5b5ef4"/>
  <!-- 9: 1 dot -->
  <circle cx="290" cy="170" r="7" fill="#5b5ef4"/>
  <!-- 10: 1 dot -->
  <circle cx="360" cy="170" r="7" fill="#5b5ef4"/>
</svg>`,
      answer: "63",
      acceptableAnswers: ["63"],
      explanation: "Multiply each score by its frequency and add: (6×1) + (7×2) + (8×3) + (9×1) + (10×1) = 6 + 14 + 24 + 9 + 10 = 63."
    },
    {
      id: "c18_q8",
      topic: "Pictograms",
      type: "mcq",
      question: "A pictogram shows the number of books sold each day. The key states: <strong>1 book symbol = 4 books</strong>. On Monday there are <strong>3.5</strong> book symbols. How many books were sold on Monday?",
      options: ["3.5", "12", "14", "16"],
      answer: 2,
      explanation: "Multiply the number of symbols by the scale value: 3.5 × 4 = 14 books. A half symbol represents half the scale value, which is 4 ÷ 2 = 2."
    },
    {
      id: "c18_q9",
      topic: "Pictograms",
      type: "input",
      question: "A pictogram uses <strong>1 star symbol = 10 students</strong>. Tuesday shows <strong>4</strong> star symbols and Wednesday shows <strong>2.5</strong> star symbols. How many more students chose Tuesday than Wednesday? Write your answer as a number.",
      answer: "15",
      acceptableAnswers: ["15"],
      explanation: "Tuesday: 4 × 10 = 40 students. Wednesday: 2.5 × 10 = 25 students. Difference: 40 − 25 = 15 students more on Tuesday."
    },
    {
      id: "c18_q10",
      topic: "Column graphs",
      type: "mcq",
      question: "A column graph shows the number of rainy days per month. January has a bar reaching 12 and February has a bar reaching 8. How many more rainy days did January have than February?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Column graph showing rainy days in January and February">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- horizontal grid lines: y-axis 0..15, plot area y=20..185, height=165, 1 unit=11px -->
  <!-- gridline at 5: y=185-(5/15)*165=185-55=130 -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <!-- gridline at 10: y=185-(10/15)*165=185-110=75 -->
  <line x1="50" y1="75" x2="350" y2="75" stroke="#e2e8f0" stroke-width="1"/>
  <!-- gridline at 15: y=185-(15/15)*165=185-165=20 -->
  <line x1="50" y1="20" x2="350" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="355" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- y-axis labels -->
  <text x="42" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="42" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="42" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="42" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">15</text>
  <!-- y-axis title -->
  <text x="12" y="110" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90 12 110)">Rainy Days</text>
  <!-- January bar: value=12, height=(12/15)*165=132, top y=185-132=53 -->
  <rect x="90" y="53" width="70" height="132" fill="#5b5ef4" rx="3"/>
  <text x="125" y="48" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12</text>
  <text x="125" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">January</text>
  <!-- February bar: value=8, height=(8/15)*165=88, top y=185-88=97 -->
  <rect x="220" y="97" width="70" height="88" fill="#a855f7" rx="3"/>
  <text x="255" y="92" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">8</text>
  <text x="255" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">February</text>
</svg>`,
      options: ["2", "4", "8", "20"],
      answer: 1,
      explanation: "Read the height of each bar and subtract: 12 − 8 = 4. January had 4 more rainy days than February."
    },
    {
      id: "c18_q11",
      topic: "Column graphs",
      type: "mcq",
      question: "A column graph shows test scores for four classes. The heights of the bars are: Class A = 72, Class B = 85, Class C = 68, Class D = 91. Which class had the <strong>lowest</strong> average score?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Column graph of average test scores for four classes">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- plot area y=20..185, height=165; scores range 60..100, range=40 -->
  <!-- gridlines at 60,70,80,90,100 -->
  <!-- y=185-((v-60)/40)*165 -->
  <!-- 60: y=185, 70: y=185-41=144, 80: y=185-82=103, 90: y=185-123=62, 100: y=185-165=20 -->
  <line x1="50" y1="185" x2="370" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="370" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="370" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="370" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="370" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="372" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- y-axis labels -->
  <text x="42" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">60</text>
  <text x="42" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">70</text>
  <text x="42" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">80</text>
  <text x="42" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">90</text>
  <text x="42" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">100</text>
  <!-- y-axis title -->
  <text x="12" y="110" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90 12 110)">Average Score</text>
  <!-- Class A: 72, y=185-((72-60)/40)*165=185-49.5=135.5≈136 -->
  <rect x="60" y="136" width="48" height="49" fill="#5b5ef4" rx="3"/>
  <text x="84" y="131" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">72</text>
  <text x="84" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Class A</text>
  <!-- Class B: 85, y=185-((85-60)/40)*165=185-103=82 -->
  <rect x="140" y="82" width="48" height="103" fill="#a855f7" rx="3"/>
  <text x="164" y="77" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">85</text>
  <text x="164" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Class B</text>
  <!-- Class C: 68, y=185-((68-60)/40)*165=185-33=152, highlighted (lowest) -->
  <rect x="220" y="152" width="48" height="33" fill="#f43f5e" rx="3"/>
  <text x="244" y="147" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">68</text>
  <text x="244" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Class C</text>
  <!-- Class D: 91, y=185-((91-60)/40)*165=185-128=57 -->
  <rect x="300" y="57" width="48" height="128" fill="#5b5ef4" rx="3"/>
  <text x="324" y="52" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">91</text>
  <text x="324" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Class D</text>
</svg>`,
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: 2,
      explanation: "The lowest bar value is 68, which belongs to Class C. On a column graph, the shortest bar shows the smallest value."
    },
    {
      id: "c18_q12",
      topic: "Column graphs",
      type: "input",
      question: "A column graph shows how many students chose each sport. The values are: Soccer = 15, Basketball = 12, Tennis = 8, Swimming = 10. What is the <strong>total</strong> number of students? Write your answer as a number.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 220" aria-label="Column graph of students choosing each sport">
  <rect width="380" height="220" fill="#f8fafc" rx="8"/>
  <!-- plot area y=20..185, height=165; values 0..16, range=16 -->
  <!-- gridlines at 0,4,8,12,16: y=185-((v/16)*165) -->
  <!-- 0:185, 4:144, 8:103, 12:62, 16:20 -->
  <line x1="50" y1="185" x2="370" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="370" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="370" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="370" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="370" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="372" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- y-axis labels -->
  <text x="42" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="42" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="42" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="42" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <text x="42" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">16</text>
  <!-- y-axis title -->
  <text x="12" y="110" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90 12 110)">Students</text>
  <!-- Soccer: 15, height=(15/16)*165=154.7≈155, top y=185-155=30 -->
  <rect x="60" y="30" width="48" height="155" fill="#5b5ef4" rx="3"/>
  <text x="84" y="25" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">15</text>
  <text x="84" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Soccer</text>
  <!-- Basketball: 12, height=(12/16)*165=123.75≈124, top y=185-124=61 -->
  <rect x="140" y="61" width="48" height="124" fill="#a855f7" rx="3"/>
  <text x="164" y="56" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">12</text>
  <text x="164" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Basketball</text>
  <!-- Tennis: 8, height=(8/16)*165=82.5≈83, top y=185-83=102 -->
  <rect x="220" y="102" width="48" height="83" fill="#f59e0b" rx="3"/>
  <text x="244" y="97" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">8</text>
  <text x="244" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Tennis</text>
  <!-- Swimming: 10, height=(10/16)*165=103.1≈103, top y=185-103=82 -->
  <rect x="300" y="82" width="48" height="103" fill="#22c55e" rx="3"/>
  <text x="324" y="77" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">10</text>
  <text x="324" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="600">Swimming</text>
</svg>`,
      answer: "45",
      acceptableAnswers: ["45"],
      explanation: "Add all the bar values: 15 + 12 + 8 + 10 = 45 students in total."
    },
    {
      id: "c18_q13",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart shows how 200 students travel to school. The 'bus' sector takes up <strong>35%</strong> of the chart. How many students travel by bus?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" aria-label="Pie chart showing how students travel to school">
  <rect width="260" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (110,110) r=85 -->
  <!-- Bus = 35% = 126 degrees, from top (270deg = -90deg) -->
  <!-- Start angle: -90deg = 270deg; Bus ends at 270+126=396=36deg -->
  <!-- Converting to SVG arc: start at top -->
  <!-- Bus sector: 35% = 126deg; arc from 270 to 396(36) -->
  <!-- Start point (top): (110, 110-85) = (110, 25) -->
  <!-- End point at 36deg from positive x: x=110+85*cos(36deg)=110+68.8=178.8, y=110-85*sin(36deg)=110-49.9=60.1 -->
  <!-- Bus slice: purple/pink highlight -->
  <path d="M110,110 L110,25 A85,85 0 0,1 178,61 Z" fill="#5b5ef4" opacity="0.85"/>
  <!-- Remaining 65%: from 36deg continuing around back to 270deg (360-126=234deg arc) -->
  <path d="M110,110 L178,61 A85,85 0 1,1 110,25 Z" fill="#e2e8f0" opacity="0.9"/>
  <!-- Circle outline -->
  <circle cx="110" cy="110" r="85" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Bus label inside sector -->
  <text x="130" y="70" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Bus</text>
  <text x="130" y="84" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">35%</text>
  <!-- Other label -->
  <text x="85" y="145" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <text x="85" y="157" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">65%</text>
  <!-- Title and key -->
  <text x="200" y="70" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Bus</text>
  <rect x="175" y="59" width="12" height="12" fill="#5b5ef4" rx="2"/>
  <text x="200" y="90" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <rect x="175" y="79" width="12" height="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1" rx="2"/>
  <text x="130" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Total = 200 students</text>
</svg>`,
      options: ["35", "65", "70", "100"],
      answer: 2,
      explanation: "Find 35% of 200: 35/100 × 200 = 70 students. Always multiply the percentage (as a decimal or fraction) by the total to find the actual number."
    },
    {
      id: "c18_q14",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart sector represents <strong>25%</strong> of the data. What is the angle of this sector?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" aria-label="Pie chart showing a 25% sector with a right angle">
  <rect width="260" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle centered at (115,115) r=85 -->
  <!-- 25% = 90 degrees sector, starting from top going clockwise -->
  <!-- Start at top: (115, 115-85) = (115, 30) -->
  <!-- End at 90deg (right): (115+85, 115) = (200, 115) -->
  <!-- 25% sector: blue -->
  <path d="M115,115 L115,30 A85,85 0 0,1 200,115 Z" fill="rgba(91,94,244,0.25)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Remaining 75%: from right back to top, large arc -->
  <path d="M115,115 L200,115 A85,85 0 1,1 115,30 Z" fill="#e2e8f0" opacity="0.7"/>
  <!-- Circle outline -->
  <circle cx="115" cy="115" r="85" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Right angle box at center for the 90 degree angle -->
  <rect x="115" y="105" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Sector label -->
  <text x="150" y="82" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">25%</text>
  <!-- Other label -->
  <text x="90" y="155" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">75%</text>
  <!-- Note -->
  <text x="130" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">25% of 360° = ?°</text>
</svg>`,
      options: ["25°", "45°", "90°", "180°"],
      answer: 2,
      explanation: "A full circle is 360°. To find the angle: 25/100 × 360° = 90°. A quarter of a pie chart (25%) forms a right angle."
    },
    {
      id: "c18_q15",
      topic: "Pie charts",
      type: "input",
      question: "A pie chart has four sectors. Three of the sectors have angles of 120°, 90°, and 80°. What is the angle of the <strong>fourth</strong> sector? Write your answer in degrees (just the number).",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" aria-label="Pie chart with four sectors, one unknown angle">
  <rect width="260" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle at (115,110) r=82 -->
  <!-- Sectors starting from top (270deg), clockwise: 120, 90, 80, 70 -->
  <!-- Angles in standard SVG coords (0=right, clockwise positive): -->
  <!-- Convert from "clockwise from top": angle_svg = (angle_from_top - 90) mod 360 -->
  <!-- Sector 1 (120deg): from 270deg to 390deg(=30deg) -->
  <!--   start: (115+82*cos(270), 110+82*sin(270)) = (115+0,110-82)=(115,28) -->
  <!--   end:   (115+82*cos(30),  110+82*sin(30))  = (115+71,110+41)=(186,151) -->
  <path d="M115,110 L115,28 A82,82 0 0,1 186,151 Z" fill="rgba(91,94,244,0.25)" stroke="#5b5ef4" stroke-width="2"/>
  <!-- Sector 2 (90deg): from 30deg to 120deg -->
  <!--   start: (186,151) -->
  <!--   end:   (115+82*cos(120), 110+82*sin(120)) = (115-41,110+71)=(74,181) -->
  <path d="M115,110 L186,151 A82,82 0 0,1 74,181 Z" fill="rgba(168,85,247,0.25)" stroke="#a855f7" stroke-width="2"/>
  <!-- Sector 3 (80deg): from 120deg to 200deg -->
  <!--   start: (74,181) -->
  <!--   end:   (115+82*cos(200), 110+82*sin(200)) = (115-77,110-28)=(38,82) -->
  <path d="M115,110 L74,181 A82,82 0 0,1 38,82 Z" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" stroke-width="2"/>
  <!-- Sector 4 (70deg): from 200deg to 270deg -->
  <!--   start: (38,82) -->
  <!--   end:   (115,28) -->
  <path d="M115,110 L38,82 A82,82 0 0,1 115,28 Z" fill="rgba(244,63,94,0.25)" stroke="#f43f5e" stroke-width="2"/>
  <!-- Circle outline -->
  <circle cx="115" cy="110" r="82" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Sector labels -->
  <!-- Sector 1 midpoint at 270+60=330deg: x=115+82*0.7*cos(330)=115+50=165, y=110+82*0.7*sin(330)=110-29=81 -->
  <text x="163" y="79" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">120°</text>
  <!-- Sector 2 midpoint at 30+45=75deg: x=115+82*0.65*cos(75)=115+14=129, y=110+82*0.65*sin(75)=110+51=161 -->
  <text x="155" y="168" text-anchor="middle" fill="#a855f7" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">90°</text>
  <!-- Sector 3 midpoint at 120+40=160deg: x=115+82*0.65*cos(160)=115-50=65, y=110+82*0.65*sin(160)=110+18=128 -->
  <text x="60" y="148" text-anchor="middle" fill="#f59e0b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">80°</text>
  <!-- Sector 4 midpoint at 200+35=235deg: x=115+82*0.65*cos(235)=115-31=84, y=110+82*0.65*sin(235)=110-44=66 -->
  <text x="72" y="62" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">?°</text>
  <!-- Note -->
</svg>`,
      answer: "70",
      acceptableAnswers: ["70", "70°"],
      explanation: "All angles in a pie chart add up to 360°. The fourth sector = 360° − 120° − 90° − 80° = 70°."
    },
    {
      id: "c18_q16",
      topic: "Measuring the centre of a data set",
      type: "mcq",
      question: "Find the <strong>mean</strong> of the data set: 4, 7, 5, 8, 6.",
      options: ["5", "6", "7", "8"],
      answer: 1,
      explanation: "Mean = sum ÷ count = (4 + 7 + 5 + 8 + 6) ÷ 5 = 30 ÷ 5 = 6. Add all the values, then divide by how many there are."
    },
    {
      id: "c18_q17",
      topic: "Measuring the centre of a data set",
      type: "input",
      question: "The daily high temperatures one week were: 15, 18, 21, 24, 12, 20, 16°C. What is the <strong>mean</strong> temperature? Write your answer as a number.",
      answer: "18",
      acceptableAnswers: ["18", "18.0"],
      explanation: "Mean = sum ÷ count = (15 + 18 + 21 + 24 + 12 + 20 + 16) ÷ 7 = 126 ÷ 7 = 18°C. Add all the values together, then divide by how many there are."
    },
    {
      id: "c18_q18",
      topic: "Measuring the centre of a data set",
      type: "mcq",
      question: "What is the <strong>mode</strong> of the data set: 2, 5, 3, 5, 7, 5, 2?",
      options: ["2", "3", "5", "7"],
      answer: 2,
      explanation: "The mode is the value that appears most often. The number 5 appears 3 times, more than any other value, so the mode is 5."
    },
    {
      id: "c18_q19",
      topic: "Measuring the centre of a data set",
      type: "input",
      question: "The number of goals scored by a team in 5 matches are: 2, 4, 3, 1, 5. What is the <strong>mean</strong> number of goals? Write your answer as a number.",
      answer: "3",
      acceptableAnswers: ["3", "3.0"],
      explanation: "Mean = sum ÷ count = (2 + 4 + 3 + 1 + 5) ÷ 5 = 15 ÷ 5 = 3. Add all the values together, then divide by how many there are."
    },
    {
      id: "c18_q20",
      topic: "Measuring the centre of a data set",
      type: "mcq",
      question: "Find the <strong>mean</strong> of the data set: 11, 14, 8, 17, 10.",
      options: ["10", "11", "12", "13"],
      answer: 2,
      explanation: "Mean = sum ÷ count = (11 + 14 + 8 + 17 + 10) ÷ 5 = 60 ÷ 5 = 12. Add all the values together, then divide by how many there are."
    },
    {
      id: "c18_q21",
      topic: "Tally charts and frequency tables",
      type: "mcq",
      question: "A frequency table records the number of books students read last month:<br><br><strong>Books | Frequency</strong><br>0 | 3<br>1 | 8<br>2 | 5<br>3 | 4<br><br>What is the <strong>mode</strong>?",
      options: ["0", "1", "2", "3"],
      answer: 1,
      explanation: "The mode is the value with the highest frequency. The frequency for 1 book is 8, which is higher than any other row. So the mode is 1."
    },
    {
      id: "c18_q22",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart shows favourite sports. The sector for swimming represents a frequency of 8 out of a total of 40 students. What is the <strong>sector angle</strong> for swimming?",
      options: ["36°", "72°", "80°", "90°"],
      answer: 1,
      explanation: "Sector angle = (frequency ÷ total) × 360° = (8 ÷ 40) × 360° = 0.2 × 360° = 72°. Always divide the category frequency by the total, then multiply by 360."
    },
    {
      id: "c18_q23",
      topic: "Tally charts and frequency tables",
      type: "mcq",
      question: "A tally chart records the favourite fruits of students. The tallies for 'Apple' are <strong>||||  |||</strong>. How many students chose apple?",
      options: ["4", "5", "8", "9"],
      answer: 2,
      explanation: "In tally charts, every fifth tally is drawn as a diagonal line crossing the previous four, making a group of 5. <strong>|||| |||</strong> = 5 + 3 = <strong>8</strong>. Count the full groups of five, then add the extras."
    },
    {
      id: "c18_q24",
      topic: "Tally charts and frequency tables",
      type: "mcq",
      question: "A frequency table shows:<br><br><strong>Colour | Frequency</strong><br>Red &nbsp;&nbsp;&nbsp;| 6<br>Blue &nbsp;&nbsp;| 9<br>Green | 5<br>Yellow | 4<br><br>What is the <strong>total frequency</strong>?",
      options: ["20", "24", "25", "30"],
      answer: 1,
      explanation: "Add all the frequencies: 6 + 9 + 5 + 4 = <strong>24</strong>. The total frequency tells you how many data values (people, items) there are altogether."
    },
    {
      id: "c18_q25",
      topic: "Tally charts and frequency tables",
      type: "input",
      question: "A frequency table shows the number of letters in students' first names:<br><br>4 letters: 3 students<br>5 letters: 7 students<br>6 letters: 5 students<br>7 letters: 2 students<br><br>How many students have names with <strong>more than 5 letters</strong>? Write your answer as a number.",
      answer: "7",
      acceptableAnswers: ["7"],
      explanation: "Names with more than 5 letters means 6 letters or 7 letters. Add those frequencies: 5 + 2 = <strong>7</strong> students."
    },
    {
      id: "c18_q37",
      topic: "Pictograms",
      type: "mcq",
      question: "A pictogram shows books read by students. The key is: <strong>1 book symbol = 5 books</strong>. The rows show:<br>Monday: ★★★<br>Tuesday: ★★★★½<br>Wednesday: ★★<br><br>How many books in total were read across all three days?",
      options: ["42", "42.5", "45", "47.5"],
      answer: 3,
      explanation: "Monday: 3 × 5 = 15. Tuesday: 4.5 × 5 = 22.5. Wednesday: 2 × 5 = 10. Total = 15 + 22.5 + 10 = 47.5. A half symbol represents half the key value (5 ÷ 2 = 2.5)."
    },
    {
      id: "c18_q38",
      topic: "Dot plots",
      type: "mcq",
      question: "A dot plot shows the number of pets students own:<br><strong>0:</strong> ● ●<br><strong>1:</strong> ● ● ● ●<br><strong>2:</strong> ● ● ●<br><strong>3:</strong> ●<br><br>What is the <strong>mode</strong> of this data set?",
      options: ["0", "1", "2", "3"],
      answer: 1,
      explanation: "The mode is the value with the most dots. The value 1 has 4 dots, which is more than any other value. On a dot plot, the tallest stack shows the mode."
    },
    {
      id: "c18_q39",
      topic: "Pie charts",
      type: "input",
      question: "A survey of 60 students found that 15 students chose cycling as their favourite activity. What is the <strong>sector angle</strong> for cycling in a pie chart? Write your answer in degrees (just the number).",
      answer: "90",
      acceptableAnswers: ["90", "90°"],
      explanation: "Sector angle = (frequency ÷ total) × 360° = (15 ÷ 60) × 360° = 0.25 × 360° = 90°. A quarter of the students chose cycling, so the sector is a quarter of the full circle."
    },
    {
      id: "c18_q40",
      topic: "Measuring the centre of a data set",
      type: "input",
      question: "Eight friends counted how many text messages they sent yesterday: 5, 3, 8, 6, 4, 7, 3, 4. What is the <strong>mean</strong> number of messages? Write your answer as a number.",
      answer: "5",
      acceptableAnswers: ["5", "5.0"],
      explanation: "Mean = sum ÷ count = (5 + 3 + 8 + 6 + 4 + 7 + 3 + 4) ÷ 8 = 40 ÷ 8 = 5. Add all values together, then divide by how many there are."
    },
    {
      id: "c18_q41",
      topic: "Pictograms",
      type: "mcq",
      question: "A pictogram uses <strong>1 football symbol = 6 matches</strong>. How many symbols are needed to represent <strong>15 matches</strong>?",
      options: ["1.5", "2", "2.5", "3"],
      answer: 2,
      explanation: "15 ÷ 6 = 2.5 symbols. A half symbol represents 3 matches (half of 6). So 2 full symbols and 1 half symbol are needed to show 15 matches."
    },
    {
      id: "c18_q43",
      topic: "Measuring the centre of a data set",
      difficulty: "challenging",
      type: "input",
      question: "Five numbers have a mean of 14. Four of the numbers are 12, 15, 9, and 18. What is the <strong>fifth</strong> number? Write your answer as a number.",
      answer: "16",
      acceptableAnswers: ["16"],
      explanation: "If the mean of 5 numbers is 14, the total of all five must be 5 × 14 = 70. The sum of the four known numbers is 12 + 15 + 9 + 18 = 54. So the fifth number = 70 − 54 = <strong>16</strong>. Great thinking — this is a classic 'working backwards' problem!"
    },
    {
      id: "c18_q44",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "mcq",
      question: "A class of 30 students was asked their favourite subject. Results: Maths = 9, English = 6, Science = 12, Art = 3. What is the <strong>sector angle</strong> for Science in a pie chart?",
      options: ["72°", "108°", "120°", "144°"],
      answer: 3,
      explanation: "Sector angle = (frequency ÷ total) × 360°. Science has 12 out of 30 students. Angle = (12/30) × 360° = 0.4 × 360° = <strong>144°</strong>. Always divide the individual frequency by the total first, then multiply by 360."
    },
    {
      id: "c18_q46",
      topic: "Measuring the centre of a data set",
      difficulty: "challenging",
      type: "mcq",
      question: "Six students' test scores are: 45, 52, 63, 63, 72, 83. A seventh student joins and the <strong>mean increases by 1</strong> to become 64. What did the seventh student score?",
      options: ["64", "68", "70", "74"],
      answer: 2,
      explanation: "Old total = 45 + 52 + 63 + 63 + 72 + 83 = 378. Old mean = 378 ÷ 6 = 63. New mean = 64 (one more than 63). New total needed = 7 × 64 = 448. Seventh student's score = 448 − 378 = <strong>70</strong>. This is a great 'working backwards from the mean' problem — well done if you spotted that!"
    },
    {
      id: "c18_q47",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "input",
      question: "A pie chart has 5 sectors. Four of the sector angles are 80°, 65°, 72°, and 55°. What is the angle of the <strong>fifth</strong> sector? Write your answer in degrees (just the number).",
      answer: "88",
      acceptableAnswers: ["88", "88°"],
      explanation: "All sector angles in a pie chart add up to 360°. Fifth sector = 360° − 80° − 65° − 72° − 55° = 360° − 272° = 88°."
    },
    {
      id: "c18_q49",
      topic: "Tally charts and frequency tables",
      type: "mcq",
      question: "A frequency table shows types of vehicles passing a school in one hour:<br><br>Car: 24, Bus: 8, Bicycle: 12, Lorry: 6. Total = 50.<br><br>What <strong>fraction</strong> of vehicles were bicycles?",
      options: ["1/5", "6/25", "12/25", "1/4"],
      answer: 1,
      explanation: "Fraction = frequency ÷ total = 12 ÷ 50 = <strong>6/25</strong>. Simplify by dividing both by 2: 12/50 = 6/25. You can check: 6/25 = 0.24 = 24%, and 24% of 50 = 12. Correct!"
    },
    {
      id: "c18_q50",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart shows 25% red, 35% blue, and 40% green. How many <strong>degrees</strong> is the green sector?",
      options: ["40°", "100°", "144°", "160°"],
      answer: 2,
      explanation: "Sector angle = percentage ÷ 100 × 360°. Green sector = 40/100 × 360° = 0.4 × 360° = 144°. Always multiply the percentage as a decimal by 360 to convert to degrees."
    },
    {
      id: "c18_q51",
      topic: "Tally charts and frequency tables",
      type: "mcq",
      question: "A survey asked 40 students their favourite subject. The frequency table shows:<br><br><strong>Subject | Frequency</strong><br>Maths &nbsp;&nbsp;&nbsp;| 12<br>English &nbsp;| 8<br>Science &nbsp;| 14<br>Art &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 6<br><br>What <strong>percentage</strong> of students chose Maths?",
      options: ["12%", "25%", "30%", "40%"],
      answer: 2,
      explanation: "Percentage = (frequency ÷ total) × 100 = (12 ÷ 40) × 100 = 0.3 × 100 = 30%. Divide the category frequency by the total, then multiply by 100 to convert to a percentage."
    },
    {
      id: "c18_q52",
      topic: "Dot plots",
      type: "mcq",
      question: "A dot plot shows the number of books students read last month:<br><strong>1:</strong> ●<br><strong>2:</strong> ● ● ●<br><strong>3:</strong> ● ●<br><strong>4:</strong> ● ●<br><strong>5:</strong> ● ●<br><br>What <strong>fraction</strong> of students read <strong>3 or more</strong> books? Write as a fraction in lowest terms.",
      options: ["2/10", "3/5", "3/10", "1/2"],
      answer: 1,
      explanation: "Total students = 1 + 3 + 2 + 2 + 2 = 10. Students who read 3 or more = 2 + 2 + 2 = 6. Fraction = 6/10 = 3/5. Simplify by dividing both numerator and denominator by 2."
    },
    {
      id: "c18_q53",
      topic: "Numerical data",
      type: "input",
      question: "A dot plot shows the number of fillings children received at their last dental visit:<br><strong>0:</strong> ● ● ● ●<br><strong>1:</strong> ● ● ●<br><strong>2:</strong> ● ●<br><strong>3:</strong> ● ●<br><strong>4:</strong> ●<br><br>How many children received <strong>at least 2</strong> fillings? Write your answer as a number.",
      answer: "5",
      acceptableAnswers: ["5"],
      explanation: "At least 2 fillings means 2, 3, or 4 fillings. Count the dots: 2 fillings = 2 dots, 3 fillings = 2 dots, 4 fillings = 1 dot. Total = 2 + 2 + 1 = 5 children."
    },
    {
      id: "c18_q54",
      topic: "Numerical data",
      type: "mcq",
      question: "A column graph shows the number of goals scored per match by a football team over several matches:<br><br>Goals | Frequency<br>0 &nbsp;&nbsp;&nbsp;&nbsp;| 2<br>1 &nbsp;&nbsp;&nbsp;&nbsp;| 4<br>2 &nbsp;&nbsp;&nbsp;&nbsp;| 7<br>3 &nbsp;&nbsp;&nbsp;&nbsp;| 5<br>4 &nbsp;&nbsp;&nbsp;&nbsp;| 2<br><br>The tallest bar is above the value 2. What is the <strong>mode</strong> of this data set?",
      options: ["1", "2", "3", "7"],
      answer: 1,
      explanation: "The mode is the value that occurs most often — it has the tallest bar in the column graph. The bar above 2 goals has height 7, which is the tallest bar. So the mode is 2 goals. Note: the mode is the number of goals (2), not the frequency (7)."
    },
    {
      id: "c18_q55",
      topic: "Measuring the centre of a data set",
      type: "input",
      question: "A student recorded how long it took her to walk to school each day for 5 days (in minutes): 12.4, 11.8, 13.2, 12.6, 15.0. What is the <strong>mean</strong> walking time? Write your answer as a decimal number.",
      answer: "13",
      acceptableAnswers: ["13", "13.0"],
      explanation: "Mean = sum ÷ count = (12.4 + 11.8 + 13.2 + 12.6 + 15.0) ÷ 5 = 65.0 ÷ 5 = 13.0 minutes. Add all the values carefully, then divide by how many there are."
    },
    {
      id: "c18_q56",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart shows how students travel to school with these sectors:<br>Walk = 40%, Bus = 30%, Car = 20%, Cycle = 10%.<br><br>Which is the <strong>least common</strong> way students travel to school?",
      options: ["Walk", "Bus", "Car", "Cycle"],
      answer: 3,
      explanation: "The least common category has the smallest percentage (smallest sector). Cycle = 10%, which is smaller than Car (20%), Bus (30%), and Walk (40%). So cycling is the least common way to travel."
    },
    {
      id: "c18_q57",
      topic: "Pictograms",
      type: "mcq",
      question: "A pictogram shows the number of houses sold each month. Key: <strong>1 house symbol = 10 houses</strong>.<br><br>April: ★★★★<br>May: ★★<br>June: ★★★<br>July: ★★★★★<br><br>Which month had the <strong>greatest</strong> number of houses sold?",
      options: ["April", "May", "June", "July"],
      answer: 3,
      explanation: "Count the symbols in each row: April = 4, May = 2, June = 3, July = 5. July has the most symbols, so July had the greatest number of houses sold (5 × 10 = 50 houses)."
    },
    {
      id: "c18_q58",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart represents data from <strong>480 students</strong>. The 'Drama' sector has an angle of <strong>45°</strong>. How many students chose Drama?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" aria-label="Pie chart with a 45 degree Drama sector">
  <rect width="260" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle at (110,110) r=85. Drama = 45° CW from top -->
  <!-- Start (top): (110,25). End (45° CW): (110+85*sin45, 110-85*cos45) = (170,50) -->
  <path d="M110,110 L110,25 A85,85 0 0,1 170,50 Z" fill="#5b5ef4" opacity="0.85"/>
  <!-- Remaining 315° arc back to top, large-arc=1 -->
  <path d="M110,110 L170,50 A85,85 0 1,1 110,25 Z" fill="#e2e8f0" opacity="0.9"/>
  <circle cx="110" cy="110" r="85" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Drama label: midpoint at 22.5° CW from top -->
  <text x="130" y="62" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Drama</text>
  <text x="130" y="74" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="10">45°</text>
  <text x="88" y="130" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <rect x="196" y="59" width="12" height="12" fill="#5b5ef4" rx="2"/>
  <text x="214" y="70" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Drama</text>
  <rect x="196" y="79" width="12" height="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1" rx="2"/>
  <text x="214" y="90" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <text x="130" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Total = 480 students</text>
</svg>`,
      options: ["45", "60", "80", "120"],
      answer: 1,
      explanation: "Frequency = (angle ÷ 360°) × total = (45 ÷ 360) × 480 = (1/8) × 480 = <strong>60 students</strong>. To go from angle to frequency: divide the sector angle by 360° to find the fraction, then multiply by the total."
    },
    {
      id: "c18_q59",
      topic: "Pie charts",
      type: "mcq",
      question: "A sector in a pie chart has an angle of <strong>108°</strong>. What <strong>percentage</strong> of the total data does this sector represent?",
      options: ["18%", "27%", "30%", "36%"],
      answer: 2,
      explanation: "Percentage = (angle ÷ 360°) × 100 = (108 ÷ 360) × 100 = 0.3 × 100 = <strong>30%</strong>. Dividing by 360° gives the fraction of the full circle; multiplying by 100 converts that fraction to a percentage."
    },
    {
      id: "c18_q60",
      topic: "Pie charts",
      type: "input",
      question: "A pie chart shows results of a sports survey. The sector for '<strong>Hockey</strong>' has an angle of <strong>120°</strong> and represents <strong>40 students</strong>. How many students were surveyed in <strong>total</strong>? Write your answer as a number.",
      answer: "120",
      acceptableAnswers: ["120"],
      explanation: "Use the formula: angle = (frequency ÷ total) × 360°. Rearranging gives: total = frequency × (360° ÷ angle) = 40 × (360 ÷ 120) = 40 × 3 = <strong>120 students</strong>. Check: (120 ÷ 360) × 120 = 40 ✓"
    },
    {
      id: "c18_q61",
      topic: "Pie charts",
      type: "mcq",
      question: "A sector of a pie chart represents <strong>3/8</strong> of the total data. What is the <strong>angle</strong> of this sector?",
      options: ["108°", "120°", "135°", "150°"],
      answer: 2,
      explanation: "Sector angle = fraction × 360° = (3/8) × 360° = (3 × 360) ÷ 8 = 1080 ÷ 8 = <strong>135°</strong>. Multiply the fraction directly by 360° to find the sector angle."
    },
    {
      id: "c18_q62",
      topic: "Pie charts",
      type: "mcq",
      question: "A survey of <strong>72 students</strong> asked them to choose their favourite season. The results are:<br><br><strong>Season &nbsp;&nbsp;| Students</strong><br>Spring &nbsp;&nbsp;| 18<br>Summer &nbsp;| 24<br>Autumn &nbsp;| 12<br>Winter &nbsp;| 18<br><br>What is the <strong>sector angle</strong> for Summer in a pie chart?",
      options: ["80°", "100°", "120°", "144°"],
      answer: 2,
      explanation: "Sector angle = (frequency ÷ total) × 360° = (24 ÷ 72) × 360° = (1/3) × 360° = <strong>120°</strong>. Notice that 24 is exactly one-third of 72 — simplify the fraction before multiplying to make the arithmetic easier."
    },
    {
      id: "c18_q63",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "mcq",
      question: "In a pie chart, the sector for '<strong>Reading</strong>' represents <strong>30%</strong> of the students surveyed. If <strong>54 students</strong> chose Reading, how many students were surveyed in <strong>total</strong>?",
      options: ["120", "150", "162", "180"],
      answer: 3,
      explanation: "30% of total = 54. Rearrange: total = 54 ÷ 0.30 = <strong>180 students</strong>. You can also think of it as: total = 54 × (100 ÷ 30) = 54 × 10/3 = 180. Check: 30% of 180 = 54 ✓"
    },
    {
      id: "c18_q64",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "input",
      question: "A survey of <strong>200 students</strong> asked which app they use most. Some results are shown:<br><br><strong>App &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Students</strong><br>YouTube &nbsp;&nbsp;| 80<br>TikTok &nbsp;&nbsp;&nbsp;| 50<br>Instagram | ?<br>Snapchat &nbsp;| 30<br><br>The sector for <strong>Instagram</strong> has an angle of <strong>72°</strong>. How many students chose Instagram? Write your answer as a number.",
      answer: "40",
      acceptableAnswers: ["40"],
      explanation: "Frequency = (angle ÷ 360°) × total = (72 ÷ 360) × 200 = (1/5) × 200 = <strong>40 students</strong>. Check by adding all frequencies: 80 + 50 + 40 + 30 = 200 ✓ — all four groups must sum to the total."
    },
    {
      id: "c18_q65",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "mcq",
      question: "Two sectors are from different pie charts:<br><br><strong>Sector A</strong> covers <strong>35%</strong> of its chart.<br><strong>Sector B</strong> has an angle of <strong>140°</strong>.<br><br>Which sector is <strong>larger</strong>?",
      options: ["Sector A is larger", "Sector B is larger", "They are equal in size", "Cannot be determined from this information"],
      answer: 1,
      explanation: "Convert Sector A to degrees: 35% × 360° = (35 ÷ 100) × 360 = 126°. Compare: Sector A = 126°, Sector B = 140°. Since 140° > 126°, <strong>Sector B is larger</strong>. Always convert to the same unit before comparing sectors."
    },
    {
      id: "c18_q66",
      topic: "Pie charts",
      type: "input",
      question: "A pie chart shows how <strong>240 people</strong> spent their weekend. Three of the four sector angles are known:<br><br>Sports = 90°<br>Reading = 60°<br>Gaming = 45°<br>Socialising = ?°<br><br>What is the <strong>sector angle</strong> for Socialising? Write your answer in degrees (just the number).",
      answer: "165",
      acceptableAnswers: ["165", "165°"],
      explanation: "All sector angles in a pie chart sum to 360°. Socialising = 360° − 90° − 60° − 45° = 360° − 195° = <strong>165°</strong>. Check: 90 + 60 + 45 + 165 = 360 ✓"
    },
    {
      id: "c18_q67",
      topic: "Pie charts",
      difficulty: "challenging",
      type: "mcq",
      question: "A pie chart shows how <strong>180 students</strong> chose their favourite subject. The sector angles are: Art = <strong>60°</strong>, Science = <strong>100°</strong>, Other = <strong>200°</strong>.<br><br>How many <strong>more</strong> students chose Science than Art?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" aria-label="Pie chart showing Art, Science and Other sectors">
  <rect width="280" height="220" fill="#f8fafc" rx="8"/>
  <!-- Circle at (110,110) r=85 -->
  <!-- Art: 60° CW from top. End=(110+85*sin60, 110-85*cos60)=(184,68) -->
  <path d="M110,110 L110,25 A85,85 0 0,1 184,68 Z" fill="#5b5ef4" opacity="0.85"/>
  <!-- Science: 100° from 60° to 160°. End=(110+85*sin160, 110-85*cos160)=(139,190) -->
  <path d="M110,110 L184,68 A85,85 0 0,1 139,190 Z" fill="#22c55e" opacity="0.85"/>
  <!-- Other: 200° from 160° to 360°, large-arc=1 -->
  <path d="M110,110 L139,190 A85,85 0 1,1 110,25 Z" fill="#e2e8f0" opacity="0.9"/>
  <circle cx="110" cy="110" r="85" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <!-- Art label: midpoint at 30° CW from top, r*0.65=55 -->
  <text x="138" y="62" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Art</text>
  <text x="138" y="74" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="10">60°</text>
  <!-- Science label: midpoint at 110° CW from top -->
  <text x="162" y="129" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Science</text>
  <text x="162" y="141" text-anchor="middle" fill="white" font-family="Nunito,Arial,sans-serif" font-size="10">100°</text>
  <!-- Other label: midpoint at 260° CW from top -->
  <text x="56" y="118" text-anchor="middle" fill="#475569" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <text x="56" y="130" text-anchor="middle" fill="#475569" font-family="Nunito,Arial,sans-serif" font-size="10">200°</text>
  <!-- Legend -->
  <rect x="210" y="50" width="12" height="12" fill="#5b5ef4" rx="2"/>
  <text x="228" y="60" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Art</text>
  <rect x="210" y="70" width="12" height="12" fill="#22c55e" rx="2"/>
  <text x="228" y="80" text-anchor="start" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Science</text>
  <rect x="210" y="90" width="12" height="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1" rx="2"/>
  <text x="228" y="100" text-anchor="start" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Other</text>
  <text x="130" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Total = 180 students</text>
</svg>`,
      options: ["10", "20", "30", "50"],
      answer: 1,
      explanation: "Find each frequency: Art = (60 ÷ 360) × 180 = (1/6) × 180 = 30 students. Science = (100 ÷ 360) × 180 = (5/18) × 180 = 50 students. Difference = 50 − 30 = <strong>20 more students</strong> chose Science. Always convert the angle to a fraction of 360° first, then multiply by the total."
    }
  ]
};
