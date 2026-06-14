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
  <!-- count labels above each stack -->
  <text x="100" y="122" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="180" y="86" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="260" y="140" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="340" y="158" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
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
  <!-- mode label -->
  <text x="180" y="84" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">MODE</text>
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
  <!-- Angle arc label -->
  <text x="148" y="75" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">90°</text>
  <!-- Sector label -->
  <text x="150" y="92" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">25%</text>
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
  <text x="130" y="210" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">120 + 90 + 80 + ? = 360</text>
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
      type: "mcq",
      question: "Find the <strong>median</strong> of the data set: 3, 9, 5, 1, 7.",
      options: ["1", "5", "7", "9"],
      answer: 1,
      explanation: "First arrange the values in order: 1, 3, 5, 7, 9. The middle value (3rd of 5) is 5. The median is the middle value when data is sorted from smallest to largest."
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
      question: "A student scores 60, 70, 80, 70, 90, 70 on six tests. Which measure of centre would be the <strong>most appropriate</strong> to describe the typical score, and what is its value?",
      options: ["Mean = 73.3", "Median = 70", "Mode = 70", "Mean = 70"],
      answer: 2,
      explanation: "The mode is 70 because it appears 3 times. Both the mode and median equal 70, but the mode directly shows the most repeated score. Here all three measures are close, but the mode at 70 is easy to identify as the most frequent score."
    },
    {
      id: "c18_q21",
      topic: "Primary vs secondary data",
      type: "mcq",
      question: "Pragathy goes outside and measures the heights of 20 plants in the school garden herself. What type of data collection is this?",
      options: ["Secondary data, because it involves plants", "Primary data, because she collected it herself", "Categorical data, because heights are labels", "Secondary data, because the school garden already exists"],
      answer: 1,
      explanation: "<strong>Primary data</strong> is data you collect yourself, first-hand. Pragathy measured the plants herself, so this is primary data. Secondary data is data that someone else collected (for example, from a book, website, or database)."
    },
    {
      id: "c18_q22",
      topic: "Primary vs secondary data",
      type: "mcq",
      question: "A student downloads population figures from the government website to use in a project. Which type of data is this?",
      options: ["Primary data", "Secondary data", "Discrete data", "Continuous data"],
      answer: 1,
      explanation: "<strong>Secondary data</strong> is data that was collected by someone else and already exists. Downloading government statistics means using data that others gathered — so this is secondary data."
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
      id: "c18_q26",
      topic: "Range",
      type: "mcq",
      question: "What is the <strong>range</strong> of the data set: 13, 7, 25, 4, 19?",
      options: ["13", "16", "21", "25"],
      answer: 2,
      explanation: "<strong>Range = maximum − minimum</strong>. The largest value is 25 and the smallest is 4. Range = 25 − 4 = <strong>21</strong>. The range tells you how spread out the data is."
    },
    {
      id: "c18_q27",
      topic: "Range",
      type: "input",
      question: "The daily high temperatures (°C) for a week were: 18, 22, 15, 26, 20, 24, 17. What is the <strong>range</strong> of the temperatures? Write your answer as a number.",
      answer: "11",
      acceptableAnswers: ["11", "11°C", "11 °C"],
      explanation: "Range = maximum − minimum. The highest temperature is 26°C and the lowest is 15°C. Range = 26 − 15 = <strong>11°C</strong>. A larger range means the temperatures varied a lot."
    },
    {
      id: "c18_q28",
      topic: "Median",
      type: "mcq",
      question: "Find the <strong>median</strong> of the data set: 12, 5, 8, 20, 14, 3, 9.",
      options: ["8", "9", "12", "14"],
      answer: 1,
      explanation: "Sort the values in order: 3, 5, 8, <strong>9</strong>, 12, 14, 20. There are 7 values, so the median is the 4th value = <strong>9</strong>. For an odd number of values, the median is the middle one."
    },
    {
      id: "c18_q29",
      topic: "Median",
      type: "mcq",
      question: "The ages of 6 students are: 11, 13, 12, 14, 11, 12. What is the <strong>median</strong> age?",
      options: ["11", "12", "12.5", "13"],
      answer: 1,
      explanation: "Sort in order: 11, 11, 12, 12, 13, 14. With 6 values (even count), the median is the average of the 3rd and 4th values: (12 + 12) ÷ 2 = <strong>12</strong>."
    },
    {
      id: "c18_q30",
      topic: "When to use mean vs median vs mode",
      type: "mcq",
      question: "A shoe shop records the sizes sold in one day: 5, 6, 6, 7, 7, 7, 8, 8, 9. Which measure of centre is <strong>most useful</strong> for deciding which size to stock the most of?",
      options: ["Mean, because it uses all the data", "Median, because it is the middle value", "Mode, because it shows the most popular size", "Range, because it shows how spread out the sizes are"],
      answer: 2,
      explanation: "The <strong>mode</strong> is the value that appears most often. For a shoe shop, knowing the most commonly sold size (7) is most useful for stocking decisions. The mode is best used with categorical or discrete data where you need the most frequent value."
    },
    {
      id: "c18_q31",
      topic: "When to use mean vs median vs mode",
      type: "mcq",
      question: "Seven students' pocket money per week (£) is: 2, 3, 3, 4, 4, 5, 40. A new student joins and wants to know the 'typical' amount. Which measure gives the <strong>most representative</strong> value?",
      options: ["Mean = 8.71, because it uses all values", "Median = 4, because it is not affected by the extreme value of 40", "Mode = 3 or 4, because two values tie", "Range = 38, because it shows the spread"],
      answer: 1,
      explanation: "When there is an <strong>outlier</strong> (an extreme value like 40), the mean is pulled upward and gives a misleading picture. The <strong>median</strong> is resistant to outliers and gives a better idea of the typical value. The median here is 4, which better represents the group."
    },
    {
      id: "c18_q32",
      topic: "Stem-and-leaf diagrams",
      type: "mcq",
      question: "A stem-and-leaf diagram shows the following data:<br><br><strong>Stem | Leaf</strong><br>1 &nbsp;&nbsp;&nbsp;| 2 &nbsp;5 &nbsp;8<br>2 &nbsp;&nbsp;&nbsp;| 0 &nbsp;3 &nbsp;3 &nbsp;7<br>3 &nbsp;&nbsp;&nbsp;| 1 &nbsp;4<br><br>(Stem = tens digit, Leaf = units digit)<br><br>How many data values are in the diagram?",
      options: ["3", "7", "9", "10"],
      answer: 2,
      explanation: "Count all the leaves: Row 1 has 3 leaves (2, 5, 8), Row 2 has 4 leaves (0, 3, 3, 7), Row 3 has 2 leaves (1, 4). Total = 3 + 4 + 2 = <strong>9</strong> data values."
    },
    {
      id: "c18_q33",
      topic: "Stem-and-leaf diagrams",
      type: "mcq",
      question: "Using the same stem-and-leaf diagram:<br><br><strong>Stem | Leaf</strong><br>1 &nbsp;&nbsp;&nbsp;| 2 &nbsp;5 &nbsp;8<br>2 &nbsp;&nbsp;&nbsp;| 0 &nbsp;3 &nbsp;3 &nbsp;7<br>3 &nbsp;&nbsp;&nbsp;| 1 &nbsp;4<br><br>What is the <strong>mode</strong>?",
      options: ["12", "20", "23", "27"],
      answer: 2,
      explanation: "The mode is the value that appears most often. In the diagram, the leaf 3 appears twice in the 2 | row, making the value <strong>23</strong> appear twice. No other value is repeated. The mode is 23."
    },
    {
      id: "c18_q34",
      topic: "Stem-and-leaf diagrams",
      type: "input",
      question: "A stem-and-leaf diagram shows test scores:<br><br><strong>Stem | Leaf</strong><br>4 &nbsp;&nbsp;&nbsp;| 5 &nbsp;8<br>5 &nbsp;&nbsp;&nbsp;| 2 &nbsp;6 &nbsp;9<br>6 &nbsp;&nbsp;&nbsp;| 0 &nbsp;3 &nbsp;7<br>7 &nbsp;&nbsp;&nbsp;| 1<br><br>What is the <strong>range</strong> of the scores? Write your answer as a number.",
      answer: "26",
      acceptableAnswers: ["26"],
      explanation: "The smallest value is 45 (stem 4, leaf 5) and the largest is 71 (stem 7, leaf 1). Range = 71 − 45 = <strong>26</strong>."
    },
    {
      id: "c18_q35",
      topic: "Dual bar charts",
      type: "mcq",
      question: "A dual bar chart compares boys' and girls' scores on two subjects. In Maths, boys scored 72 and girls scored 68. In Science, boys scored 65 and girls scored 74. Which statement is correct?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Dual bar chart comparing boys and girls scores in Maths and Science">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- plot area y=20..185, scores range 60..80, range=20 -->
  <!-- y = 185 - ((v-60)/20)*165 -->
  <!-- 60: 185, 65: 144, 70: 103, 75: 62, 80: 20 -->
  <line x1="55" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="55" y1="20" x2="55" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="55" y1="185" x2="382" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- y labels -->
  <text x="48" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">60</text>
  <text x="48" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">65</text>
  <text x="48" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">70</text>
  <text x="48" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">75</text>
  <text x="48" y="25" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">80</text>
  <!-- MATHS group: boys=72, girls=68 -->
  <!-- boys 72: y=185-((72-60)/20)*165=185-99=86 -->
  <rect x="80" y="86" width="38" height="99" fill="#5b5ef4" rx="3"/>
  <text x="99" y="81" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">72</text>
  <!-- girls 68: y=185-((68-60)/20)*165=185-66=119 -->
  <rect x="122" y="119" width="38" height="66" fill="#f43f5e" rx="3"/>
  <text x="141" y="114" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">68</text>
  <text x="121" y="201" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Maths</text>
  <!-- SCIENCE group: boys=65, girls=74 -->
  <!-- boys 65: y=185-((65-60)/20)*165=185-41=144 -->
  <rect x="225" y="144" width="38" height="41" fill="#5b5ef4" rx="3"/>
  <text x="244" y="139" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">65</text>
  <!-- girls 74: y=185-((74-60)/20)*165=185-115.5=69.5≈70 -->
  <rect x="267" y="70" width="38" height="115" fill="#f43f5e" rx="3"/>
  <text x="286" y="65" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">74</text>
  <text x="267" y="201" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Science</text>
  <!-- Legend -->
  <rect x="330" y="30" width="12" height="12" fill="#5b5ef4" rx="2"/>
  <text x="346" y="41" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10">Boys</text>
  <rect x="330" y="50" width="12" height="12" fill="#f43f5e" rx="2"/>
  <text x="346" y="61" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10">Girls</text>
</svg>`,
      options: ["Boys scored higher in both subjects", "Girls scored higher in both subjects", "Boys scored higher in Maths; girls scored higher in Science", "Girls scored higher in Maths; boys scored higher in Science"],
      answer: 2,
      explanation: "In <strong>Maths</strong>: boys (72) > girls (68), so boys scored higher. In <strong>Science</strong>: girls (74) > boys (65), so girls scored higher. A dual bar chart lets you compare two groups side by side for each category."
    },
    {
      id: "c18_q36",
      topic: "Dual bar charts",
      type: "mcq",
      question: "The dual bar chart shows students' scores in two subjects. How much higher did girls score than boys in Science?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Dual bar chart showing boys scored 65 and girls scored 74 in Science">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <line x1="55" y1="185" x2="280" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="144" x2="280" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="103" x2="280" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="62" x2="280" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="20" x2="280" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="55" y1="20" x2="55" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="55" y1="185" x2="282" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <text x="48" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">60</text>
  <text x="48" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">65</text>
  <text x="48" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">70</text>
  <text x="48" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">75</text>
  <text x="48" y="25" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">80</text>
  <!-- boys 65 -->
  <rect x="80" y="144" width="45" height="41" fill="#5b5ef4" rx="3"/>
  <text x="102" y="139" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">65</text>
  <!-- girls 74: y=185-((74-60)/20)*165=70 -->
  <rect x="130" y="70" width="45" height="115" fill="#f43f5e" rx="3"/>
  <text x="152" y="65" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">74</text>
  <text x="128" y="201" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">Science</text>
  <!-- Legend -->
  <rect x="220" y="60" width="12" height="12" fill="#5b5ef4" rx="2"/>
  <text x="235" y="71" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10">Boys</text>
  <rect x="220" y="80" width="12" height="12" fill="#f43f5e" rx="2"/>
  <text x="235" y="91" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="10">Girls</text>
</svg>`,
      options: ["5", "7", "9", "11"],
      answer: 2,
      explanation: "Girls scored 74 and boys scored 65 in Science. Difference = 74 − 65 = <strong>9</strong>. Reading dual bar charts: find the value of each bar, then subtract to find the difference."
    },
    {
      id: "c18_q37",
      topic: "Misleading statistics",
      type: "mcq",
      question: "A newspaper headline says: <em>'Our town's average salary is £45,000!'</em> However, one billionaire lives in the town and earns £10,000,000 per year. Why might this average be misleading?",
      options: ["The mean is always the best average to use", "The billionaire's huge salary pulls the mean up, making it unrepresentative of most people", "The median would be lower than £45,000 so the mean is correct", "The mode would equal the mean in this case"],
      answer: 1,
      explanation: "When there is a very large <strong>outlier</strong> (like the billionaire's salary), the <strong>mean</strong> is dragged upward and no longer represents a typical person's salary. The <strong>median</strong> would be a fairer measure here, as it is not affected by extreme values."
    },
    {
      id: "c18_q38",
      topic: "Misleading statistics",
      type: "mcq",
      question: "A column graph shows sales with the y-axis starting at 980 instead of 0. The bars for Week 1 (995) and Week 2 (1000) look very different in height. Why is this misleading?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Two versions of a bar chart side by side: left starts y-axis at 980, right starts at 0">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- LEFT CHART: axis starts at 980 (misleading) -->
  <text x="95" y="15" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Misleading (starts at 980)</text>
  <line x1="30" y1="20" x2="30" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="30" y1="185" x2="175" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- range 980-1000=20. height=165 per 20 units. 1 unit=8.25px -->
  <!-- 980: y=185, 990: y=185-82=103, 1000: y=185-165=20 -->
  <text x="28" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">980</text>
  <text x="28" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">990</text>
  <text x="28" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">1000</text>
  <!-- Week1=995: y=185-((995-980)/20)*165=185-123.75=61 -->
  <rect x="45" y="61" width="35" height="124" fill="#5b5ef4" rx="3"/>
  <text x="62" y="56" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="700">995</text>
  <text x="62" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9">Wk 1</text>
  <!-- Week2=1000: y=20 -->
  <rect x="100" y="20" width="35" height="165" fill="#f43f5e" rx="3"/>
  <text x="117" y="15" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="700">1000</text>
  <text x="117" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9">Wk 2</text>
  <!-- RIGHT CHART: axis starts at 0 (honest) -->
  <text x="300" y="15" text-anchor="middle" fill="#22c55e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Honest (starts at 0)</text>
  <line x1="220" y1="20" x2="220" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="185" x2="390" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- range 0-1000. height=165. 1 unit=0.165px -->
  <!-- 0:185, 500:102.5≈103, 1000:20 -->
  <text x="218" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">0</text>
  <text x="218" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">500</text>
  <text x="218" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="9">1000</text>
  <!-- Week1=995: y=185-(995/1000)*165=185-164.2=20.8≈21 -->
  <rect x="235" y="21" width="35" height="164" fill="#5b5ef4" rx="3"/>
  <text x="252" y="16" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="700">995</text>
  <text x="252" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9">Wk 1</text>
  <!-- Week2=1000: y=20 -->
  <rect x="285" y="20" width="35" height="165" fill="#f43f5e" rx="3"/>
  <text x="302" y="15" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9" font-weight="700">1000</text>
  <text x="302" y="200" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="9">Wk 2</text>
</svg>`,
      options: ["It is not misleading — the bars correctly show a large difference", "Starting the axis at 980 exaggerates the difference, making a small change look enormous", "The graph is misleading because bars should always be the same colour", "The y-axis should start at 100, not 0 or 980"],
      answer: 1,
      explanation: "When a bar chart's y-axis starts at a value other than 0, it <strong>exaggerates differences</strong>. Here, the actual difference is only 5 units (995 vs 1000), but starting the axis at 980 makes Week 2 look much, much taller than Week 1. Always check where the y-axis starts!"
    },
    {
      id: "c18_q39",
      topic: "Misleading statistics",
      type: "mcq",
      question: "A company claims: <em>'Our most popular product is loved by the majority of customers!'</em> The mode score is 5/5 but the mean score is 2.8/5. Why might the company's claim be misleading?",
      options: ["The mode is always more reliable than the mean", "A few customers giving 5 stars makes 5 the mode, but the mean shows most customers actually rated it poorly", "The mean of 2.8 proves the product is very good", "Both the mode and mean agree that the product is popular"],
      answer: 1,
      explanation: "The <strong>mode</strong> only tells you the most common single value, but if many customers gave low scores (1, 2, 3) and a few gave 5, the mode of 5 can be very misleading. The <strong>mean of 2.8</strong> tells us the overall experience was below average. This is a classic example of choosing a statistic that sounds best rather than the most representative one."
    },
    {
      id: "c18_q40",
      topic: "Measuring the centre of a data set",
      type: "input",
      question: "A frequency table shows marks in a test:<br><br>Mark 5: frequency 2<br>Mark 6: frequency 4<br>Mark 7: frequency 3<br>Mark 8: frequency 1<br><br>What is the <strong>mean</strong> mark? Write your answer as a decimal.",
      answer: "6.3",
      acceptableAnswers: ["6.3"],
      explanation: "First find the total: (5×2) + (6×4) + (7×3) + (8×1) = 10 + 24 + 21 + 8 = 63. Total frequency = 2 + 4 + 3 + 1 = 10. Mean = 63 ÷ 10 = <strong>6.3</strong>."
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
      id: "c18_q42",
      topic: "Stem-and-leaf diagrams",
      type: "mcq",
      question: "A stem-and-leaf diagram shows:<br><br><strong>Stem | Leaf</strong><br>2 &nbsp;&nbsp;&nbsp;| 4 &nbsp;6 &nbsp;9<br>3 &nbsp;&nbsp;&nbsp;| 1 &nbsp;1 &nbsp;5 &nbsp;8<br>4 &nbsp;&nbsp;&nbsp;| 0 &nbsp;2<br><br>What is the <strong>median</strong> of this data?",
      options: ["31", "35", "36", "38"],
      answer: 0,
      explanation: "List all values in order: 24, 26, 29, 31, 31, 35, 38, 40, 42. There are 9 values so the median is the 5th value = <strong>31</strong>. Always read the stem-and-leaf diagram from top-left to bottom-right to get values in order."
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
      id: "c18_q45",
      topic: "Stem-and-leaf diagrams",
      difficulty: "challenging",
      type: "mcq",
      question: "A back-to-back stem-and-leaf diagram compares heights (cm) of boys and girls:<br><br><strong>Boys | Stem | Girls</strong><br>8 4 | 14 | 2 5 7<br>9 6 3 | 15 | 1 3 6 8<br>5 2 | 16 | 0 4<br><br>(Read boys' leaves right-to-left from the stem)<br><br>How many students are represented in total?",
      options: ["12", "14", "16", "18"],
      answer: 2,
      explanation: "Count all leaves: Boys — row 14: 2 leaves (4, 8), row 15: 3 leaves (3, 6, 9), row 16: 2 leaves (2, 5) = 7 boys. Girls — row 14: 3 leaves (2, 5, 7), row 15: 4 leaves (1, 3, 6, 8), row 16: 2 leaves (0, 4) = 9 girls. Total = 7 + 9 = <strong>16</strong> students."
    },
    {
      id: "c18_q46",
      topic: "Measuring the centre of a data set",
      difficulty: "challenging",
      type: "mcq",
      question: "Six students' test scores are: 45, 52, 63, 63, 71, 86. A seventh student joins and the <strong>mean increases by 1</strong> to become 64. What did the seventh student score?",
      options: ["64", "68", "70", "74"],
      answer: 2,
      explanation: "New mean = 64, with 7 students, so new total = 7 × 64 = 448. Old total of 6 students = 45 + 52 + 63 + 63 + 71 + 86 = 380. Old mean = 380 ÷ 6 ≈ 63.3 (note: the problem says the mean increases by 1 to 64). Seventh student's score = 448 − 380 = <strong>68</strong>. This is a great 'working backwards from the mean' problem — well done if you spotted that!"
    },
    {
      id: "c18_q47",
      topic: "Misleading statistics",
      difficulty: "challenging",
      type: "mcq",
      question: "Two graphs show the same data about a shop's profits (£1000 in Year 1, £1100 in Year 2). Graph A has a y-axis starting at 0. Graph B has a y-axis starting at 900. In Graph B, Year 2's bar looks <strong>10 times taller</strong> than Year 1's bar. What is the <strong>actual</strong> percentage increase in profit?",
      options: ["10%", "100%", "110%", "1000%"],
      answer: 0,
      explanation: "Actual increase = £1100 − £1000 = £100. Percentage increase = (100 ÷ 1000) × 100% = <strong>10%</strong>. Graph B is misleading because starting the axis at 900 makes Year 1's bar very short (just 100 units tall) vs Year 2's bar (200 units tall), making the increase look 100% visually when it's really only 10%. Always check the scale before drawing conclusions!"
    },
    {
      id: "c18_q48",
      topic: "Range",
      type: "mcq",
      question: "Two students each took 5 tests. Amara's scores: 60, 65, 62, 64, 59. Ben's scores: 40, 75, 55, 80, 50. Both students have the same mean score. What does the <strong>range</strong> tell us about their performance?",
      options: ["Amara and Ben performed equally well overall", "Ben's scores are more consistent because his range is smaller", "Amara's scores are more consistent because her range is smaller", "Range does not tell us anything useful here"],
      answer: 2,
      explanation: "Amara's range = 65 − 59 = 6. Ben's range = 80 − 40 = 40. A <strong>smaller range means more consistent</strong> scores. Even though they have the same mean, Amara's marks are much more consistent (always close to 62), while Ben's vary wildly from 40 to 80."
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
      topic: "Primary vs secondary data",
      type: "mcq",
      question: "Which of the following is an example of <strong>primary data collection</strong>?",
      options: ["Using results from last year's school sports day that are stored on a spreadsheet", "Looking up the average rainfall for your city in an encyclopedia", "Asking your classmates to rate their favourite food out of 10", "Reading a scientific report about the effects of exercise"],
      answer: 2,
      explanation: "When you ask your classmates yourself, you are collecting data first-hand — this is <strong>primary data</strong>. The other options all involve using data that was collected by someone else (secondary data)."
    }
  ]
};
