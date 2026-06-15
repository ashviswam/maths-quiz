const ch16 = {
  id: 16,
  title: "Line Graphs",
  icon: "📈",
  color: "#dc2626",
  topics: ["Line graphs", "Travel graphs", "Conversion graphs"],
  questions: [
    {
      id: "c16_q1",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows the temperature in a city over one week. On Monday the temperature was 12°C and on Friday it was 20°C. What does the rising line between Monday and Friday tell us?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph showing temperature rising from Monday 12°C to Friday 20°C">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- data line: Mon(12)→Fri(20), minV=12 maxV=20 range=8, N=5 xStep=82.5 -->
  <!-- Mon i=0: x=50  y=185-((12-12)/8)*165=185 -->
  <!-- Tue i=1: x=133 y=185-((14-12)/8)*165=185-41=144 -->
  <!-- Wed i=2: x=215 y=185-((16-12)/8)*165=185-82=103 -->
  <!-- Thu i=3: x=298 y=185-((18-12)/8)*165=185-123=62 -->
  <!-- Fri i=4: x=380 y=185-((20-12)/8)*165=20 -->
  <polyline points="50,185 133,144 215,103 298,62 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="144" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="4" fill="#5b5ef4"/>
  <circle cx="298" cy="62" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="5" fill="#f43f5e"/>
  <!-- x-axis labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Mon</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Tue</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wed</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Thu</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Fri</text>
  <!-- y-axis labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">14</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">16</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">18</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Day</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Temp (°C)</text>
</svg>`,
      options: [
        "The temperature stayed the same",
        "The temperature decreased over the week",
        "The temperature increased over the week",
        "The temperature was 20°C all week"
      ],
      answer: 2,
      explanation: "A rising line on a line graph shows that the value is <strong>increasing</strong> over time. Because the line goes upward from Monday to Friday, the temperature increased during that period."
    },
    {
      id: "c16_q2",
      topic: "Line graphs",
      type: "mcq",
      question: "On a line graph showing plant growth over 6 weeks, the line is <strong>horizontal</strong> between week 3 and week 4. What does this mean?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph of plant growth showing horizontal segment between week 3 and week 4">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="57" x2="380" y2="57" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="95" x2="380" y2="95" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="132" x2="380" y2="132" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=6 xStep=66, minV=0 maxV=10 range=10 yScale=16.5
       wk1(i=0):x=50  y=185-(2/10)*165=152
       wk2(i=1):x=116 y=185-(4/10)*165=119
       wk3(i=2):x=182 y=185-(6/10)*165=86
       wk4(i=3):x=248 y=86  (horizontal!)
       wk5(i=4):x=314 y=185-(8/10)*165=53
       wk6(i=5):x=380 y=185-(10/10)*165=20 -->
  <polyline points="50,152 116,119 182,86 248,86 314,53 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight horizontal segment -->
  <line x1="182" y1="86" x2="248" y2="86" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="50" cy="152" r="4" fill="#5b5ef4"/>
  <circle cx="116" cy="119" r="4" fill="#5b5ef4"/>
  <circle cx="182" cy="86" r="5" fill="#f43f5e"/>
  <circle cx="248" cy="86" r="5" fill="#f43f5e"/>
  <circle cx="314" cy="53" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 1</text>
  <text x="116" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 2</text>
  <text x="182" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 3</text>
  <text x="248" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 4</text>
  <text x="314" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 5</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 6</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="136" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="99" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="44" y="61" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <!-- annotation -->
  <text x="215" y="78" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">flat!</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Week</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Height (cm)</text>
</svg>`,
      options: [
        "The plant grew the most in that period",
        "The plant died",
        "The plant's height did not change in that period",
        "The plant grew faster than in other weeks"
      ],
      answer: 2,
      explanation: "A <strong>horizontal</strong> (flat) section on a line graph means the value is <strong>constant</strong> — it is not increasing or decreasing. The plant's height stayed the same between week 3 and week 4."
    },
    {
      id: "c16_q3",
      topic: "Line graphs",
      type: "mcq",
      question: "The line graph below shows the number of books a student read each month. In January she read 3 books and in February she read 7 books. How many <em>more</em> books did she read in February than in January?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: January 3 books, February 7 books">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=0 maxV=8 range=8 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Jan(i=0):x=50  y=185-(3/8)*165=185-61.9=123
       Feb(i=1):x=380 y=185-(7/8)*165=185-144.4=41 -->
  <polyline points="50,123 380,41" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="123" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="41" r="5" fill="#f43f5e"/>
  <!-- value labels -->
  <text x="50" y="115" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <text x="380" y="33" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">7</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">January</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">February</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Month</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Books</text>
</svg>`,
      options: ["3", "4", "7", "10"],
      answer: 1,
      explanation: "To find how many more, subtract: 7 − 3 = <strong>4</strong>. Reading values off the graph and finding the difference is a key skill for line graphs."
    },
    {
      id: "c16_q4",
      topic: "Line graphs",
      type: "input",
      question: "A line graph shows daily rainfall (mm) for one week.<br><br>Monday: 5 mm, Tuesday: 8 mm, Wednesday: 3 mm, Thursday: 3 mm, Friday: 10 mm.<br><br>What is the <strong>total</strong> rainfall for the week (in mm)?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: rainfall Mon=5 Tue=8 Wed=3 Thu=3 Fri=10 mm">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=0 maxV=10 range=10 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="152" x2="380" y2="152" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="119" x2="380" y2="119" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="86" x2="380" y2="86" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="53" x2="380" y2="53" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=5 xStep=82.5
       Mon(i=0):x=50  y=185-(5/10)*165=102.5≈103
       Tue(i=1):x=133 y=185-(8/10)*165=185-132=53
       Wed(i=2):x=215 y=185-(3/10)*165=185-49.5=136
       Thu(i=3):x=298 y=136
       Fri(i=4):x=380 y=185-(10/10)*165=20 -->
  <polyline points="50,103 133,53 215,136 298,136 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="103" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="53" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="136" r="4" fill="#5b5ef4"/>
  <circle cx="298" cy="136" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="5" fill="#f43f5e"/>
  <!-- value labels -->
  <text x="50" y="96" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">5</text>
  <text x="133" y="46" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">8</text>
  <text x="215" y="128" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3</text>
  <text x="298" y="128" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3</text>
  <text x="380" y="13" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">10</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Mon</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Tue</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wed</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Thu</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Fri</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="156" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="44" y="123" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="90" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <text x="44" y="57" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Day</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Rainfall (mm)</text>
</svg>`,
      answer: "29",
      acceptableAnswers: ["29", "29 mm", "29mm"],
      explanation: "Add all the values: 5 + 8 + 3 + 3 + 10 = <strong>29 mm</strong>. Always read each point carefully from the line graph before calculating."
    },
    {
      id: "c16_q5",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows the height of a candle (cm) as it burns. At 1 hour the candle is 15 cm tall; at 2 hours it is 12 cm tall; at 3 hours it is 9 cm tall. What is the trend of the line?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: candle height falling from 15cm to 12cm to 9cm">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=8 maxV=16 range=8 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=3 xStep=165
       1hr(i=0):x=50  y=185-((15-8)/8)*165=185-144.4=41
       2hr(i=1):x=215 y=185-((12-8)/8)*165=185-82.5=103
       3hr(i=2):x=380 y=185-((9-8)/8)*165=185-20.6=164 -->
  <polyline points="50,41 215,103 380,164" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="41" r="5" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="164" r="5" fill="#5b5ef4"/>
  <!-- value labels -->
  <text x="62" y="36" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">15 cm</text>
  <text x="227" y="98" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">12 cm</text>
  <text x="335" y="158" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">9 cm</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1 hr</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2 hr</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3 hr</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">14</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">16</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Height (cm)</text>
</svg>`,
      options: [
        "Rising — the candle is getting taller",
        "Falling — the candle is getting shorter",
        "Horizontal — the candle height is not changing",
        "There is no clear trend"
      ],
      answer: 1,
      explanation: "The candle's height decreases from 15 cm to 12 cm to 9 cm, so the line is <strong>falling</strong>. A falling (descending) line shows the value is decreasing over time."
    },
    {
      id: "c16_q6",
      topic: "Line graphs",
      type: "input",
      question: "A line graph shows the temperature (°C) at different times of day.<br><br>9 am: 14°C, 12 pm: 22°C, 3 pm: 25°C, 6 pm: 19°C.<br><br>At what time was the temperature the <strong>highest</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: temperature 9am=14 12pm=22 3pm=25 6pm=19">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=12 maxV=26 range=14 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="138" x2="380" y2="138" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="91" x2="380" y2="91" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="44" x2="380" y2="44" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=4 xStep=110
       9am(i=0):x=50  y=185-((14-12)/14)*165=185-23.6=161
       12pm(i=1):x=160 y=185-((22-12)/14)*165=185-117.9=67
       3pm(i=2):x=270 y=185-((25-12)/14)*165=185-153.2=32
       6pm(i=3):x=380 y=185-((19-12)/14)*165=185-82.5=103 -->
  <polyline points="50,161 160,67 270,32 380,103" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="161" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="67" r="4" fill="#5b5ef4"/>
  <circle cx="270" cy="32" r="6" fill="#f43f5e"/>
  <circle cx="380" cy="103" r="4" fill="#5b5ef4"/>
  <!-- value labels -->
  <text x="50" y="153" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">14°</text>
  <text x="160" y="59" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">22°</text>
  <text x="270" y="24" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">25°</text>
  <text x="380" y="95" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">19°</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9 am</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12 pm</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3 pm</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6 pm</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <text x="44" y="142" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">17</text>
  <text x="44" y="95" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">22</text>
  <text x="44" y="48" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">26</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Temp (°C)</text>
</svg>`,
      answer: "3 pm",
      acceptableAnswers: ["3 pm", "3pm", "15:00", "3:00 pm", "3:00pm"],
      explanation: "The highest value on the graph is <strong>25°C at 3 pm</strong>. The peak (highest point) of a line graph shows when the value was greatest."
    },
    {
      id: "c16_q7",
      topic: "Travel graphs",
      type: "mcq",
      question: "On a distance-time (travel) graph, a <strong>horizontal</strong> line segment means the traveller is:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph showing a horizontal segment indicating the traveller is stationary">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- journey: rising 0→8km (x=50→160), horizontal 8km (x=160→270), rising again 8→12km (x=270→380)
       minV=0 maxV=12 yScale=165/12=13.75
       0km:y=185, 8km:y=185-8*13.75=185-110=75, 12km:y=185-165=20 -->
  <polyline points="50,185 160,75 270,75 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight the horizontal segment -->
  <line x1="160" y1="75" x2="270" y2="75" stroke="#f43f5e" stroke-width="3.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="75" r="5" fill="#f43f5e"/>
  <circle cx="270" cy="75" r="5" fill="#f43f5e"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Moving at constant speed",
        "Accelerating",
        "Stationary (not moving)",
        "Moving backwards"
      ],
      answer: 2,
      explanation: "On a distance-time graph, a <strong>horizontal</strong> line means the distance from the starting point is not changing — so the traveller is <strong>stationary</strong> (stopped)."
    },
    {
      id: "c16_q8",
      topic: "Travel graphs",
      type: "mcq",
      question: "Two students cycle from home. On a distance-time graph, Student A's line is <strong>steeper</strong> than Student B's line. What does this tell us?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: Student A line steeper than Student B line">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Student A: steep line, reaches 12km in 2hrs: from (50,185) to (380,20) -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- Student B: less steep, reaches 8km in 3hrs: from (50,185) to (380,75) -->
  <line x1="50" y1="185" x2="380" y2="75" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- labels -->
  <text x="260" y="50" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Student A</text>
  <text x="300" y="110" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Student B</text>
  <!-- start dot -->
  <circle cx="50" cy="185" r="5" fill="#64748b"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Student A is slower than Student B",
        "Student A is faster than Student B",
        "Student A stopped for a rest",
        "Both students travel at the same speed"
      ],
      answer: 1,
      explanation: "On a distance-time graph, a <strong>steeper</strong> line means the distance increases more quickly per unit of time — so Student A is travelling <strong>faster</strong> than Student B."
    },
    {
      id: "c16_q9",
      topic: "Travel graphs",
      type: "mcq",
      question: "A travel graph shows Mia walking from home. She leaves home at 9:00 am and arrives at a park 6 km away at 10:30 am. She then stays at the park until 11:00 am. What does the graph look like between 10:30 am and 11:00 am?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: Mia walks 0 to 6km from 9am to 10:30am, stays until 11am">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Time range 9:00 to 11:00 = 2hrs. xScale=330/2=165px/hr
       9:00:  x=50
       10:30: x=50+1.5*165=297.5≈298
       11:00: x=50+2*165=380
       Distance: 0km=y=185, 6km=y=185-165=20 -->
  <polyline points="50,185 298,20 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight stationary segment -->
  <line x1="298" y1="20" x2="380" y2="20" stroke="#f43f5e" stroke-width="3.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="298" cy="20" r="5" fill="#f43f5e"/>
  <circle cx="380" cy="20" r="5" fill="#f43f5e"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9:00</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10:00</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10:30</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">11:00</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "A steep rising line",
        "A falling line back to zero",
        "A horizontal line at 6 km",
        "A curved line"
      ],
      answer: 2,
      explanation: "When Mia is stationary at the park, her distance from home stays at 6 km. This is shown by a <strong>horizontal line at 6 km</strong> on the distance-time graph."
    },
    {
      id: "c16_q10",
      topic: "Travel graphs",
      type: "mcq",
      question: "Look at the travel graph below showing a student's journey. The graph has three sections: A (rising steeply), B (horizontal), and C (rising gently).<br><br>In which section was the student <strong>stationary</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph with three sections: A steep rise, B horizontal, C gentle rise">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Section A: steep 0→8km in 1hr, x=50→160, y=185→75
       Section B: horizontal 8km for 1hr, x=160→270, y=75
       Section C: gentle 8→12km in 1hr, x=270→380, y=75→20
       yScale=165/12=13.75 -->
  <polyline points="50,185 160,75 270,75 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="270" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- section labels -->
  <text x="105" y="145" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <text x="215" y="65" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <text x="330" y="40" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Section A",
        "Section B",
        "Section C",
        "None — the student is always moving"
      ],
      answer: 1,
      explanation: "Section B is <strong>horizontal</strong> — the distance from home does not change over that hour. A horizontal line on a distance-time graph means the traveller is <strong>stationary</strong> (not moving)."
    },
    {
      id: "c16_q11",
      topic: "Travel graphs",
      type: "mcq",
      question: "The travel graph below shows Priya's journey. She leaves home and travels in three sections labelled P, Q, and R.<br><br>In which section did Priya travel the <strong>greatest distance</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: three sections P, Q, R with different distances covered">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Section P: 0→3km in 1hr, x=50→160, y=185→130
       Section Q: 3→10km in 1hr, x=160→270, y=130→20
       Section R: 10→14km in 1hr, x=270→380, y=20→-34... clamp to y=20 area
       yScale=165/15=11px/km
       P end: y=185-3*11=185-33=152
       Q end: y=185-10*11=185-110=75
       R end: y=185-14*11=185-154=31 -->
  <polyline points="50,185 160,152 270,75 380,31" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="152" r="4" fill="#5b5ef4"/>
  <circle cx="270" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="31" r="4" fill="#5b5ef4"/>
  <!-- section labels -->
  <text x="105" y="180" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">P</text>
  <text x="215" y="100" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Q</text>
  <text x="330" y="45" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">R</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">15</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Section P — 3 km",
        "Section Q — 7 km",
        "Section R — 4 km",
        "All sections cover the same distance"
      ],
      answer: 1,
      explanation: "Read the distance covered in each section from the graph: Section P goes from 0 km to 3 km (3 km), Section Q goes from 3 km to 10 km (<strong>7 km</strong>), Section R goes from 10 km to 14 km (4 km). Section Q covers the greatest distance."
    },
    {
      id: "c16_q12",
      topic: "Travel graphs",
      type: "mcq",
      question: "On a distance-time travel graph, the line goes <strong>back down towards zero</strong>. What does this mean?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph showing line going back down to zero, meaning traveller is returning">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- journey: go out 0→10km in 2hrs, come back to 0 in 2hrs
       xScale=330/4=82.5, 0km=y=185, 10km=y=20
       t=0: x=50,  y=185
       t=2: x=215, y=20
       t=4: x=380, y=185 -->
  <polyline points="50,185 215,20 380,185" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight return segment -->
  <line x1="215" y1="20" x2="380" y2="185" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="20" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="185" r="5" fill="#f43f5e"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "The traveller is speeding up",
        "The traveller is returning towards the starting point",
        "The traveller has stopped",
        "The traveller is going further away"
      ],
      answer: 1,
      explanation: "When the line on a distance-time graph slopes <strong>downward</strong>, the distance from the starting point is decreasing — the traveller is <strong>returning</strong> to where they started."
    },
    {
      id: "c16_q13",
      topic: "Conversion graphs",
      type: "mcq",
      question: "A conversion graph shows kilometres (km) on the horizontal axis and miles on the vertical axis. The graph passes through (0, 0) and (8 km, 5 miles). How many miles is <strong>16 km</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: km to miles, through (0,0) and (8km,5miles)">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x-axis: 0 to 16km, xScale=330/16=20.625px/km
       y-axis: 0 to 10 miles, yScale=165/10=16.5px/mile
       origin (0km): x=50, y=185
       (8km, 5mi): x=50+8*20.625=215, y=185-5*16.5=185-82.5=103
       (16km,10mi): x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- reference points -->
  <circle cx="50" cy="185" r="5" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="6" fill="#f43f5e"/>
  <!-- dashed guide lines for (8,5) -->
  <line x1="50" y1="103" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="215" y1="185" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guide lines for (16,10) -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="380" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- labels at key points -->
  <text x="215" y="196" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="380" y="196" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">16</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="44" y="24" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">10</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2.5</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7.5</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Distance (km)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Miles</text>
</svg>`,
      options: ["8 miles", "10 miles", "12 miles", "16 miles"],
      answer: 1,
      explanation: "From the graph, 8 km = 5 miles, so 16 km = 5 × 2 = <strong>10 miles</strong>. Conversion graphs are straight lines through the origin, so you can double (or halve) values proportionally."
    },
    {
      id: "c16_q14",
      topic: "Conversion graphs",
      type: "mcq",
      question: "A conversion graph converts Australian dollars (AUD) to Euros (EUR). Reading from the graph, 50 AUD = 30 EUR. Using this graph, how many AUD is <strong>60 EUR</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: AUD to EUR, 50 AUD = 30 EUR">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-100 AUD, xScale=330/100=3.3px/AUD
       y: 0-60 EUR, yScale=165/60=2.75px/EUR
       (0,0):   x=50,  y=185
       (50,30): x=50+50*3.3=215, y=185-30*2.75=185-82.5=103
       (100,60):x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="5" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="5" fill="#5b5ef4"/>
  <!-- dashed guides for 50AUD=30EUR -->
  <line x1="50" y1="103" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="215" y1="185" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guides for 100AUD=60EUR -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="380" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">30</text>
  <text x="44" y="24" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">60</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">50</text>
  <text x="380" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">100</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">AUD ($)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">EUR (€)</text>
</svg>`,
      options: ["80 AUD", "90 AUD", "100 AUD", "120 AUD"],
      answer: 2,
      explanation: "From the graph: 50 AUD = 30 EUR, so 1 EUR = 50/30 AUD. For 60 EUR: 60 × (50/30) = 60 × 5/3 = <strong>100 AUD</strong>. You can use the graph in either direction to convert."
    },
    {
      id: "c16_q15",
      topic: "Conversion graphs",
      type: "input",
      question: "A conversion graph converts litres (L) to gallons. The graph shows that <strong>10 litres = 2.5 gallons</strong>.<br><br>Using the graph, how many gallons is <strong>20 litres</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: litres to gallons, 10L=2.5 gallons">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-20L, xScale=330/20=16.5px/L
       y: 0-5 gallons, yScale=165/5=33px/gallon
       (0,0):    x=50,  y=185
       (10,2.5): x=50+10*16.5=215, y=185-2.5*33=185-82.5=103
       (20,5):   x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="5" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="6" fill="#f43f5e"/>
  <!-- dashed guides for 10L=2.5gal -->
  <line x1="50" y1="103" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="215" y1="185" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guides for 20L=5gal -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="380" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2.5</text>
  <text x="44" y="24" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">5</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="380" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">20</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Litres (L)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Gallons</text>
</svg>`,
      answer: "5",
      acceptableAnswers: ["5", "5 gallons", "5gallons"],
      explanation: "10 litres = 2.5 gallons, so 20 litres = 2.5 × 2 = <strong>5 gallons</strong>. Since the conversion graph is a straight line through the origin, doubling the litres doubles the gallons."
    },
    {
      id: "c16_q16",
      topic: "Conversion graphs",
      type: "mcq",
      question: "What is the key feature of <strong>all</strong> conversion graphs?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph passing through the origin (0,0)">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- straight line through origin -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight origin -->
  <circle cx="50" cy="185" r="7" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#f43f5e"/>
  <!-- annotation -->
  <text x="65" y="178" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Always passes</text>
  <text x="65" y="192" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">through (0, 0)</text>
  <!-- origin label -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">(0, 0)</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Unit A</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Unit B</text>
</svg>`,
      options: [
        "They always pass through the point (0, 0)",
        "They are always curved",
        "They always have a horizontal section",
        "They only work for currency conversions"
      ],
      answer: 0,
      explanation: "Conversion graphs are always <strong>straight lines that pass through the origin (0, 0)</strong>. This is because zero of one unit always equals zero of the other unit."
    },
    {
      id: "c16_q17",
      topic: "Conversion graphs",
      type: "input",
      question: "A conversion graph converts pounds (lb) to kilograms (kg). From the graph, 5 lb = 2.25 kg.<br><br>Using the graph, how many kg is <strong>15 lb</strong>? Give your answer in kg.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: pounds to kg, 5lb=2.25kg">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-15lb, xScale=330/15=22px/lb
       y: 0-6.75kg, yScale=165/6.75=24.44px/kg
       (0,0):      x=50,  y=185
       (5,2.25):   x=50+5*22=160, y=185-2.25*24.44=185-55=130
       (10,4.5):   x=50+10*22=270, y=185-4.5*24.44=185-110=75
       (15,6.75):  x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="130" r="5" fill="#5b5ef4"/>
  <circle cx="270" cy="75" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="6" fill="#f43f5e"/>
  <!-- dashed guides for 5lb=2.25kg -->
  <line x1="50" y1="130" x2="160" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="160" y1="185" x2="160" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guides for 15lb=6.75kg -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="380" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2.25</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4.5</text>
  <text x="44" y="24" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6.75</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="380" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">15</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Pounds (lb)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">kg</text>
</svg>`,
      answer: "6.75",
      acceptableAnswers: ["6.75", "6.75 kg", "6.75kg"],
      explanation: "5 lb = 2.25 kg, so 15 lb = 2.25 × 3 = <strong>6.75 kg</strong>. Multiply both values by the same factor (here, 3) to read further up the conversion graph."
    },
    {
      id: "c16_q18",
      topic: "Travel graphs",
      type: "mcq",
      question: "A distance-time graph shows two friends, Ama and Ben, both starting from the same point at the same time. After 2 hours, Ama has travelled 10 km and Ben has travelled 6 km. Who is travelling faster?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: Ama reaches 10km and Ben reaches 6km after 2 hours">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-2hrs, xScale=330/2=165px/hr
       y: 0-10km, yScale=165/10=16.5px/km
       Ama: (0,0)→(2hrs,10km): x=50→380, y=185→20
       Ben: (0,0)→(2hrs,6km): x=50→380, y=185→185-6*16.5=185-99=86 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="50" y1="185" x2="380" y2="86" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,3"/>
  <circle cx="50" cy="185" r="4" fill="#64748b"/>
  <circle cx="380" cy="20" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="86" r="5" fill="#f43f5e"/>
  <!-- labels -->
  <text x="290" y="35" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Ama</text>
  <text x="290" y="100" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">Ben</text>
  <!-- value labels at t=2hrs -->
  <text x="388" y="24" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">10 km</text>
  <text x="388" y="90" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">6 km</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Ben, because his line is less steep",
        "Ama, because she has covered more distance in the same time",
        "They are travelling at the same speed",
        "It is impossible to tell from a distance-time graph"
      ],
      answer: 1,
      explanation: "<strong>Ama</strong> is faster because she covered 10 km in 2 hours (5 km/h) compared to Ben's 6 km in 2 hours (3 km/h). A steeper line on a distance-time graph always means a greater speed."
    },
    {
      id: "c16_q19",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows the number of ice creams sold each month. Sales are rising from January to June, then falling from June to December. What is the <strong>general trend</strong> of ice cream sales over the full year?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: ice cream sales rising Jan-Jun then falling Jun-Dec">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=12 months xStep=330/11=30px
       minV=10 maxV=100 range=90 yScale=165/90=1.833px/unit
       Jan(i=0):x=50,  sales=20, y=185-((20-10)/90)*165=185-18.3=167
       Feb(i=1):x=80,  sales=30, y=185-((30-10)/90)*165=185-36.7=148
       Mar(i=2):x=110, sales=45, y=185-((45-10)/90)*165=185-64.2=121
       Apr(i=3):x=140, sales=60, y=185-((60-10)/90)*165=185-91.7=93
       May(i=4):x=170, sales=80, y=185-((80-10)/90)*165=185-128.3=57
       Jun(i=5):x=200, sales=100,y=185-((100-10)/90)*165=185-165=20
       Jul(i=6):x=230, sales=85, y=185-((85-10)/90)*165=185-137.5=48
       Aug(i=7):x=260, sales=75, y=185-((75-10)/90)*165=185-119.2=66
       Sep(i=8):x=290, sales=55, y=185-((55-10)/90)*165=185-82.5=103
       Oct(i=9):x=320, sales=35, y=185-((35-10)/90)*165=185-45.8=139
       Nov(i=10):x=350,sales=25, y=185-((25-10)/90)*165=185-27.5=158
       Dec(i=11):x=380,sales=15, y=185-((15-10)/90)*165=185-9.2=176 -->
  <polyline points="50,167 80,148 110,121 140,93 170,57 200,20 230,48 260,66 290,103 320,139 350,158 380,176" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- peak circle -->
  <circle cx="200" cy="20" r="6" fill="#f43f5e"/>
  <!-- small circles at ends -->
  <circle cx="50" cy="167" r="3" fill="#5b5ef4"/>
  <circle cx="380" cy="176" r="3" fill="#5b5ef4"/>
  <!-- x labels - selected months -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Jan</text>
  <text x="200" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="10" font-weight="700">Jun</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">Dec</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">50</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">80</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">100</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Month</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Sales</text>
</svg>`,
      options: [
        "Sales increased all year",
        "Sales decreased all year",
        "Sales peaked in summer (June) and were lower in winter",
        "Sales stayed the same all year"
      ],
      answer: 2,
      explanation: "The line rises to a peak in June (summer) and then falls, showing that ice cream sales are <strong>highest in summer and lower in winter</strong>. Identifying trends from a line graph is an important skill."
    },
    {
      id: "c16_q20",
      topic: "Conversion graphs",
      type: "mcq",
      question: "A conversion graph converts centimetres (cm) to inches. You read from the graph that 10 cm ≈ 3.9 inches. A ruler is 30 cm long. Approximately how many inches is this?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: cm to inches, 10cm=3.9 inches">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-30cm, xScale=330/30=11px/cm
       y: 0-12in, yScale=165/12=13.75px/in
       (0,0):      x=50,  y=185
       (10,3.9):   x=50+10*11=160, y=185-3.9*13.75=185-53.6=131
       (20,7.8):   x=50+20*11=270, y=185-7.8*13.75=185-107.25=78
       (30,11.7):  x=380, y=185-11.7*13.75=185-160.9=24 -->
  <line x1="50" y1="185" x2="380" y2="24" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="131" r="5" fill="#5b5ef4"/>
  <circle cx="270" cy="78" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="24" r="6" fill="#f43f5e"/>
  <!-- dashed guides for 10cm=3.9in -->
  <line x1="50" y1="131" x2="160" y2="131" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="160" y1="185" x2="160" y2="131" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guides for 30cm -->
  <line x1="50" y1="24" x2="380" y2="24" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="380" y1="185" x2="380" y2="24" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="135" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3.9</text>
  <text x="44" y="82" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">7.8</text>
  <text x="44" y="28" text-anchor="end" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">11.7</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <text x="380" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">30</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Centimetres (cm)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Inches</text>
</svg>`,
      options: ["9.7 inches", "10.9 inches", "11.7 inches", "12.9 inches"],
      answer: 2,
      explanation: "10 cm ≈ 3.9 inches, so 30 cm ≈ 3.9 × 3 = <strong>11.7 inches</strong>. Use the conversion graph by reading one value and scaling proportionally for larger measurements."
    },
    {
      id: "c16_q21",
      topic: "Line graphs",
      type: "mcq",
      question: "The line graph below shows the number of visitors to a museum on two days: Saturday (blue) and Sunday (red). At 12 pm, how many <em>more</em> visitors were there on Saturday than on Sunday?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Two line graphs: Saturday visitors vs Sunday visitors across a day">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 4 time points at 9am, 12pm, 3pm, 6pm  i=0,1,2,3 xStep=110
       y: 0-200 visitors, yScale=165/200=0.825px/visitor
       Saturday: 9am=40, 12pm=160, 3pm=120, 6pm=60
         9am:  x=50,  y=185-40*0.825=185-33=152
         12pm: x=160, y=185-160*0.825=185-132=53
         3pm:  x=270, y=185-120*0.825=185-99=86
         6pm:  x=380, y=185-60*0.825=185-49.5=136
       Sunday: 9am=20, 12pm=100, 3pm=90, 6pm=50
         9am:  x=50,  y=185-20*0.825=185-16.5=169
         12pm: x=160, y=185-100*0.825=185-82.5=103
         3pm:  x=270, y=185-90*0.825=185-74.25=111
         6pm:  x=380, y=185-50*0.825=185-41.25=144 -->
  <polyline points="50,152 160,53 270,86 380,136" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <polyline points="50,169 160,103 270,111 380,144" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- Saturday dots -->
  <circle cx="50" cy="152" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="53" r="5" fill="#5b5ef4"/>
  <circle cx="270" cy="86" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="136" r="4" fill="#5b5ef4"/>
  <!-- Sunday dots -->
  <circle cx="50" cy="169" r="4" fill="#f43f5e"/>
  <circle cx="160" cy="103" r="5" fill="#f43f5e"/>
  <circle cx="270" cy="111" r="4" fill="#f43f5e"/>
  <circle cx="380" cy="144" r="4" fill="#f43f5e"/>
  <!-- value labels at 12pm -->
  <text x="172" y="48" text-anchor="start" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">160</text>
  <text x="172" y="98" text-anchor="start" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">100</text>
  <!-- legend -->
  <line x1="55" y1="32" x2="85" y2="32" stroke="#5b5ef4" stroke-width="2.5"/>
  <text x="90" y="36" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Saturday</text>
  <line x1="155" y1="32" x2="185" y2="32" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="190" y="36" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">Sunday</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9 am</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12 pm</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3 pm</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6 pm</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">50</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">100</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">150</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">200</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Visitors</text>
</svg>`,
      options: ["40", "60", "80", "100"],
      answer: 1,
      explanation: "At 12 pm, Saturday had <strong>160 visitors</strong> and Sunday had <strong>100 visitors</strong>. The difference is 160 − 100 = <strong>60</strong>. When comparing two line graphs, always read each value carefully at the same point before subtracting."
    },
    {
      id: "c16_q22",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows a student's test scores over 5 weeks. The scores are: Week 1: 40, Week 2: 45, Week 3: 55, Week 4: 75, Week 5: 75.<br><br>Between which two weeks did the score <strong>increase the most</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: test scores 40, 45, 55, 75, 75 over 5 weeks">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=30 maxV=80 range=50 yScale=165/50=3.3 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="152" x2="380" y2="152" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="119" x2="380" y2="119" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="87" x2="380" y2="87" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="54" x2="380" y2="54" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=5 xStep=82.5, minV=30 maxV=80 range=50 yScale=165/50=3.3
       Wk1(i=0):x=50,  score=40, y=185-((40-30)/50)*165=185-33=152
       Wk2(i=1):x=133, score=45, y=185-((45-30)/50)*165=185-49.5=136
       Wk3(i=2):x=215, score=55, y=185-((55-30)/50)*165=185-82.5=103
       Wk4(i=3):x=298, score=75, y=185-((75-30)/50)*165=185-148.5=37
       Wk5(i=4):x=380, score=75, y=37 -->
  <polyline points="50,152 133,136 215,103 298,37 380,37" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="152" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="136" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="4" fill="#5b5ef4"/>
  <circle cx="298" cy="37" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="37" r="4" fill="#5b5ef4"/>
  <!-- value labels -->
  <text x="50" y="144" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">40</text>
  <text x="133" y="128" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">45</text>
  <text x="215" y="95" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">55</text>
  <text x="298" y="29" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">75</text>
  <text x="380" y="29" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">75</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 1</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 2</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 3</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 4</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wk 5</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">30</text>
  <text x="44" y="156" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">40</text>
  <text x="44" y="123" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">50</text>
  <text x="44" y="91" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">60</text>
  <text x="44" y="58" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">70</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">80</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Week</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Score (%)</text>
</svg>`,
      options: [
        "Week 1 to Week 2 (increase of 5)",
        "Week 2 to Week 3 (increase of 10)",
        "Week 3 to Week 4 (increase of 20)",
        "Week 4 to Week 5 (increase of 0)"
      ],
      answer: 2,
      explanation: "Check each gap: Wk 1→2: 45−40=<strong>5</strong>, Wk 2→3: 55−45=<strong>10</strong>, Wk 3→4: 75−55=<strong>20</strong>, Wk 4→5: 75−75=<strong>0</strong>. The largest increase is from Week 3 to Week 4 (20 marks). Always calculate the difference for each interval before deciding."
    },
    {
      id: "c16_q23",
      topic: "Line graphs",
      type: "mcq",
      question: "You want to draw a line graph showing the temperature (°C) recorded every hour from 8 am to 12 pm. The readings are: 8 am: 16°C, 9 am: 18°C, 10 am: 21°C, 11 am: 23°C, 12 pm: 22°C.<br><br>Which of the following correctly describes how to plot this data?",
      options: [
        "Plot temperature on the horizontal axis and time on the vertical axis",
        "Plot time on the horizontal axis and temperature on the vertical axis, then join the points with straight lines",
        "Draw a bar for each time, touching the next bar",
        "Plot only the highest and lowest values and draw a straight line between them"
      ],
      answer: 1,
      explanation: "To draw a line graph: put <strong>time on the horizontal (x) axis</strong> and the <strong>measured value (temperature) on the vertical (y) axis</strong>. Plot each data point and <strong>join them with straight lines</strong> in order. This is different from a bar chart — line graphs show continuous change over time."
    },
    {
      id: "c16_q24",
      topic: "Line graphs",
      type: "input",
      question: "A line graph shows the number of people in a swimming pool. At 2 pm there were 48 people. At 4 pm there were 30 people.<br><br>What is the <strong>decrease</strong> in the number of people from 2 pm to 4 pm?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: pool visitors decrease from 48 at 2pm to 30 at 4pm">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=20 maxV=60 range=40 yScale=165/40=4.125 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- 2pm(i=0):x=50  y=185-((48-20)/40)*165=185-115.5=70
       4pm(i=1):x=380 y=185-((30-20)/40)*165=185-41.25=144 -->
  <line x1="50" y1="70" x2="380" y2="144" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="70" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="144" r="5" fill="#f43f5e"/>
  <!-- value labels -->
  <text x="62" y="65" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">48</text>
  <text x="335" y="139" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">30</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2 pm</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4 pm</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">30</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">40</text>
  <text x="44" y="66" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">50</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">60</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">People</text>
</svg>`,
      answer: "18",
      acceptableAnswers: ["18", "18 people"],
      explanation: "Decrease = 48 − 30 = <strong>18 people</strong>. To find a decrease from a line graph, read the two values and subtract the smaller from the larger: 48 − 30 = 18."
    },
    {
      id: "c16_q25",
      topic: "Travel graphs",
      type: "mcq",
      question: "The travel graph below shows Zara's walk from home. Look at the four sections labelled W, X, Y, Z.<br><br>In which section is the line the <strong>steepest</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph with four sections W, X, Y, Z of varying steepness">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- W: gentle 0→2km in 1hr, x=50→132, y=185→157
       X: steep 2→8km in 0.5hr, x=132→173, y=157→48
       Y: horizontal 8km for 0.5hr, x=173→214, y=48
       Z: gentle 8→10km in 1hr, x=214→296, y=48→12...
       yScale=165/12=13.75
       W end: y=185-2*13.75=185-27.5=158
       X end: y=185-8*13.75=185-110=75
       Z end: y=185-10*13.75=185-137.5=48 -->
  <polyline points="50,185 132,158 173,75 214,75 296,48" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="132" cy="158" r="4" fill="#5b5ef4"/>
  <circle cx="173" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="214" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="296" cy="48" r="4" fill="#5b5ef4"/>
  <!-- section labels -->
  <text x="91" y="183" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">W</text>
  <text x="153" y="120" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">X</text>
  <text x="194" y="65" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Y</text>
  <text x="258" y="55" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Z</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="132" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="173" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1.5</text>
  <text x="214" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="296" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Section W",
        "Section X",
        "Section Y",
        "Section Z"
      ],
      answer: 1,
      explanation: "Section X is the <strong>steepest</strong> — it rises the most sharply out of all sections. On a distance-time graph, the steeper the line, the faster the traveller is moving. Section Y is horizontal (stationary) and sections W and Z are much gentler slopes than X."
    },
    {
      id: "c16_q26",
      topic: "Conversion graphs",
      type: "input",
      question: "A conversion graph converts Euros (€) to British pounds (£). The graph passes through (0, 0) and shows that <strong>€20 = £17</strong>.<br><br>Using the graph, how many pounds is <strong>€40</strong>? (Write just the number.)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: Euros to pounds, 20 euros = 17 pounds">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-40 euros xScale=330/40=8.25px/€
       y: 0-34 pounds yScale=165/34=4.853px/£
       (0,0):   x=50, y=185
       (20,17): x=50+20*8.25=215, y=185-17*4.853=185-82.5=103
       (40,34): x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- dashed guides for 20€=17£ -->
  <line x1="50" y1="103" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="215" y1="185" x2="215" y2="103" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guides for 40€ -->
  <line x1="380" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">17</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <text x="380" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">40</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Euros (€)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Pounds (£)</text>
</svg>`,
      answer: "34",
      acceptableAnswers: ["34", "£34", "34 pounds"],
      explanation: "The graph shows €20 = £17. Since €40 is double €20, the equivalent is also doubled: £17 × 2 = <strong>£34</strong>. Conversion graphs are straight lines through (0, 0), so doubling the amount on one axis doubles the amount on the other."
    },
    {
      id: "c16_q27",
      topic: "Conversion graphs",
      type: "mcq",
      question: "You are drawing a conversion graph for the rate: <strong>£1 = $1.25</strong>. The horizontal axis shows pounds (£) from 0 to 80. The vertical axis shows dollars ($). Which of the following points should you plot to draw the graph correctly?",
      options: [
        "(0, 0) and (80, 80)",
        "(0, 0) and (80, 100)",
        "(0, 1.25) and (80, 100)",
        "(1, 1.25) and (80, 80)"
      ],
      answer: 1,
      explanation: "A conversion graph starts at <strong>(0, 0)</strong> — because £0 = $0. Then use the rate: £80 × 1.25 = <strong>$100</strong>. So plot (0, 0) and (80, 100) and draw a straight line through them. Never start a conversion graph above zero!"
    },
    {
      id: "c16_q28",
      topic: "Line graphs",
      type: "input",
      question: "A line graph shows the number of steps a student walked each day.<br>Monday: 8000, Tuesday: 6000, Wednesday: 9000, Thursday: 7000, Friday: 10000.<br><br>Using the line graph, on which day did the student walk the <strong>fewest</strong> steps? (Write the day name.)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: steps walked Mon=8000, Tue=6000, Wed=9000, Thu=7000, Fri=10000">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=5000 maxV=11000 range=6000 yScale=165/6000=0.0275 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=5 xStep=82.5
       Mon(i=0):x=50,  y=185-((8000-5000)/6000)*165=185-82.5=103
       Tue(i=1):x=133, y=185-((6000-5000)/6000)*165=185-27.5=158
       Wed(i=2):x=215, y=185-((9000-5000)/6000)*165=185-110=75
       Thu(i=3):x=298, y=185-((7000-5000)/6000)*165=185-55=130
       Fri(i=4):x=380, y=185-((10000-5000)/6000)*165=185-137.5=48 -->
  <polyline points="50,103 133,158 215,75 298,130 380,48" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- highlight lowest point (Tuesday) -->
  <circle cx="50" cy="103" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="158" r="6" fill="#f43f5e"/>
  <circle cx="215" cy="75" r="4" fill="#5b5ef4"/>
  <circle cx="298" cy="130" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="48" r="4" fill="#5b5ef4"/>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Mon</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Tue</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Wed</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Thu</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Fri</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">5000</text>
  <text x="44" y="148" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">7000</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">9000</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">11000</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Day</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Steps</text>
</svg>`,
      answer: "Tuesday",
      acceptableAnswers: ["Tuesday", "Tue"],
      explanation: "The <strong>lowest point</strong> on the line graph is on Tuesday with 6000 steps. This is the minimum (trough) of the graph. Always look for the lowest plotted point to find the minimum value."
    },
    {
      id: "c16_q29",
      topic: "Travel graphs",
      type: "mcq",
      question: "The travel graph below shows Layla's journey from home. She leaves at 8:00 am.<br><br>Between which two times was Layla <strong>stationary</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: Layla leaves home at 8am, travels, stops, then continues">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Total 60 min xScale=330/60=5.5px/min
       0km=y=185, 8km=y=20, yScale=165/8=20.625px/km
       8:00 (t=0):   x=50,  y=185 (0km)
       8:15 (t=15):  x=50+15*5.5=133, y=185-3*20.625=185-61.9=123 (3km)
       8:25 (t=25):  x=50+25*5.5=188, y=123 (stopped at 3km)
       8:50 (t=50):  x=50+50*5.5=325, y=185-8*20.625=185-165=20 (8km)
       9:00 (t=60):  x=380, y=20 (stays at 8km) -->
  <polyline points="50,185 133,123 188,123 325,20 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <!-- horizontal (stationary) segment highlighted -->
  <line x1="133" y1="123" x2="188" y2="123" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="123" r="5" fill="#f43f5e"/>
  <circle cx="188" cy="123" r="5" fill="#f43f5e"/>
  <circle cx="325" cy="20" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8:00</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8:15</text>
  <text x="188" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8:25</text>
  <text x="325" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8:50</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">9:00</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "8:00 am and 8:15 am",
        "8:15 am and 8:25 am",
        "8:25 am and 8:50 am",
        "8:50 am and 9:00 am"
      ],
      answer: 1,
      explanation: "The graph is <strong>horizontal</strong> (flat) between 8:15 am and 8:25 am — Layla's distance from home stays the same during that period, which means she is <strong>stationary</strong>. A flat line on a distance-time graph always means the traveller has stopped."
    },
    {
      id: "c16_q30",
      topic: "Conversion graphs",
      type: "input",
      question: "A conversion graph for British pounds (£) to Indian rupees (₹) shows that <strong>£1 = ₹100</strong> (simplified for this question). The graph goes from £0 to £10.<br><br>If you need to convert <strong>£7</strong>, what is the equivalent amount in rupees?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: pounds to rupees, £1 = ₹100">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="152" x2="380" y2="152" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="119" x2="380" y2="119" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="87" x2="380" y2="87" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="54" x2="380" y2="54" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-10 pounds, xScale=330/10=33px/£
       y: 0-1000 rupees, yScale=165/1000=0.165px/₹
       (0,0):    x=50,  y=185
       (5,500):  x=50+5*33=215, y=185-500*0.165=185-82.5=103
       (10,1000):x=380, y=20
       Reading point £7: x=50+7*33=281, y=185-700*0.165=185-115.5=70 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="103" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- dashed reading guide for £7 -->
  <line x1="281" y1="185" x2="281" y2="70" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="50" y1="70" x2="281" y2="70" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="281" cy="70" r="5" fill="#f43f5e"/>
  <!-- labels -->
  <text x="281" y="200" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">£7</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">500</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1000</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Pounds (£)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Rupees (₹)</text>
</svg>`,
      answer: "700",
      acceptableAnswers: ["700", "₹700", "700 rupees"],
      explanation: "From the graph, go up from £7 on the x-axis until you hit the line, then read across to the y-axis: £7 × 100 = <strong>₹700</strong>. This is how you read a conversion graph — trace from one axis to the line, then across to the other axis."
    },
    {
      id: "c16_q31",
      topic: "Travel graphs",
      type: "mcq",
      difficulty: "challenging",
      question: "The travel graph below shows a cyclist's full journey. The journey has three segments.<br><br>Which statement <strong>correctly describes</strong> segment 3?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: rise in segment 1, flat in segment 2 (rest), falling line in segment 3 (return home)">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Total 4hrs xScale=330/4=82.5, 0km=185, 15km=20, yScale=165/15=11
       t=0: x=50,  y=185 (0km)
       t=1: x=133, y=20  (15km — arrived)
       t=2: x=215, y=20  (rest at 15km)
       t=4: x=380, y=185 (returned home 0km) -->
  <polyline points="50,185 133,20 215,20 380,185" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="133" cy="20" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="20" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="185" r="4" fill="#5b5ef4"/>
  <!-- segment number labels -->
  <text x="80" y="90" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">1</text>
  <text x="174" y="13" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">2</text>
  <text x="305" y="90" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">3</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">5</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">15</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="133" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="298" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "The cyclist is stationary at 15 km from home",
        "The cyclist is travelling further away from home",
        "The cyclist is returning towards home",
        "The cyclist is speeding up"
      ],
      answer: 2,
      explanation: "In segment 3, the line <strong>slopes downward</strong> — the distance from home decreases from 15 km back to 0 km. A falling line on a distance-time graph means the traveller is <strong>returning towards their starting point</strong>."
    },
    {
      id: "c16_q32",
      topic: "Travel graphs",
      type: "mcq",
      difficulty: "challenging",
      question: "The travel graph below shows two friends, Maya (solid blue) and Ethan (dashed red), leaving the same home. Maya leaves at 9:00 am and Ethan leaves at 9:30 am. Both travel in the same direction.<br><br>What does the graph tell you about how fast each person is travelling?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: Maya's line is less steep than Ethan's line — Ethan is faster">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 9:00 to 10:30 (1.5hrs), xScale=330/1.5=220px/hr
       y: 0-6km, yScale=165/6=27.5px/km
       Maya: starts 9:00 at x=50, gentler slope (less steep)
         At 9:00: x=50,  y=185
         At 10:30: x=380, y=185-3.75*27.5=185-103=82 (3.75km in 1.5hr)
       Ethan: starts 9:30 at x=160, steeper slope (faster)
         At 9:30: x=160, y=185 (0km)
         At 10:30: x=380, y=185-7.5*27.5=185-206... clamp: show 6km ending
         At 10:00: x=270, y=185-5*27.5=185-137.5=48
         At 10:30: x=380, y=20 (6km) -->
  <line x1="50" y1="185" x2="380" y2="82" stroke="#5b5ef4" stroke-width="2.5"/>
  <line x1="160" y1="185" x2="380" y2="20" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,3"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="185" r="4" fill="#f43f5e"/>
  <!-- name labels -->
  <text x="100" y="155" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Maya</text>
  <text x="280" y="165" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="700">Ethan</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">2</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">6</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9:00</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">9:30</text>
  <text x="270" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10:00</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10:30</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Maya is faster because she left earlier",
        "Ethan is faster because his line is steeper",
        "Maya is faster because her line is less steep",
        "They are travelling at the same speed"
      ],
      answer: 1,
      explanation: "Ethan's line (dashed red) is <strong>steeper</strong> than Maya's line (solid blue). On a distance-time graph, a steeper line means the traveller is covering more distance in the same time — so <strong>Ethan is travelling faster</strong>. The time they started does not affect who is faster."
    },
    {
      id: "c16_q33",
      topic: "Conversion graphs",
      type: "mcq",
      difficulty: "challenging",
      question: "A conversion graph converts miles to kilometres. It shows that <strong>5 miles = 8 km</strong>. The graph is a straight line passing through the origin.<br><br>Using the graph, approximately how many kilometres is <strong>15 miles</strong>?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Conversion graph: miles to km, 5 miles = 8 km, straight line through origin">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="62" x2="380" y2="62" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="103" x2="380" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="144" x2="380" y2="144" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- x: 0-25 miles xScale=330/25=13.2px/mi
       y: 0-40 km yScale=165/40=4.125px/km
       (0,0):   x=50,  y=185
       (5,8):   x=50+5*13.2=116, y=185-8*4.125=185-33=152
       (10,16): x=50+10*13.2=182, y=185-16*4.125=185-66=119
       (15,24): x=50+15*13.2=248, y=185-24*4.125=185-99=86
       (25,40): x=380, y=20 -->
  <line x1="50" y1="185" x2="380" y2="20" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="116" cy="152" r="5" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- dashed guides for 5mi=8km reference point -->
  <line x1="50" y1="152" x2="116" y2="152" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="116" y1="185" x2="116" y2="152" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- dashed guide for reading 15 miles -->
  <line x1="248" y1="185" x2="248" y2="86" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="50" y1="86" x2="248" y2="86" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="248" cy="86" r="5" fill="#f43f5e"/>
  <!-- labels -->
  <text x="116" y="197" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">5</text>
  <text x="248" y="197" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">15</text>
  <text x="44" y="156" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="107" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">40</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="182" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">25</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Miles</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Kilometres</text>
</svg>`,
      options: ["16 km", "20 km", "24 km", "30 km"],
      answer: 2,
      explanation: "The graph shows 5 miles = 8 km. 15 miles is three times 5 miles, so the equivalent distance is 3 × 8 km = <strong>24 km</strong>. You can also read directly from the graph: go up from 15 on the miles axis until you reach the line, then read across to the km axis."
    },
    {
      id: "c16_q34",
      topic: "Line graphs",
      type: "input",
      difficulty: "challenging",
      question: "The line graph below shows the temperature (°C) in a greenhouse recorded every 2 hours. Use the graph to answer: what was the <strong>maximum temperature</strong> recorded, and at what time did it occur?<br><br>Write your answer as: temperature,time (e.g. 28,2pm)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Line graph: greenhouse temperatures over a day, peak at 2pm">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines minV=10 maxV=35 range=25 yScale=165/25=6.6 -->
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="152" x2="380" y2="152" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="119" x2="380" y2="119" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="86" x2="380" y2="86" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="53" x2="380" y2="53" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- N=6 xStep=66
       6am(i=0): x=50,  temp=12, y=185-((12-10)/25)*165=185-13.2=172
       8am(i=1): x=116, temp=16, y=185-((16-10)/25)*165=185-39.6=145
       10am(i=2):x=182, temp=22, y=185-((22-10)/25)*165=185-79.2=106
       12pm(i=3):x=248, temp=28, y=185-((28-10)/25)*165=185-118.8=66
       2pm(i=4): x=314, temp=32, y=185-((32-10)/25)*165=185-145.2=40
       4pm(i=5): x=380, temp=20, y=185-((20-10)/25)*165=185-66=119 -->
  <polyline points="50,172 116,145 182,106 248,66 314,40 380,119" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="172" r="4" fill="#5b5ef4"/>
  <circle cx="116" cy="145" r="4" fill="#5b5ef4"/>
  <circle cx="182" cy="106" r="4" fill="#5b5ef4"/>
  <circle cx="248" cy="66" r="4" fill="#5b5ef4"/>
  <circle cx="314" cy="40" r="5" fill="#f43f5e"/>
  <circle cx="380" cy="119" r="4" fill="#5b5ef4"/>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">10</text>
  <text x="44" y="156" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">15</text>
  <text x="44" y="123" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">20</text>
  <text x="44" y="90" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">25</text>
  <text x="44" y="57" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">30</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">35</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">6 am</text>
  <text x="116" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">8 am</text>
  <text x="182" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">10 am</text>
  <text x="248" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">12 pm</text>
  <text x="314" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">2 pm</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="10">4 pm</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Temp (°C)</text>
</svg>`,
      answer: "32,2pm",
      acceptableAnswers: ["32,2pm", "32, 2pm", "32°C,2pm", "32°C, 2pm", "32 at 2pm", "32°C at 2pm"],
      explanation: "Look for the <strong>highest point</strong> on the graph — this is at 2 pm, where the temperature reaches <strong>32°C</strong>. The red dot marks this peak. Always identify the maximum by finding the point that is furthest up the vertical axis."
    },
    {
      id: "c16_q35",
      topic: "Travel graphs",
      type: "mcq",
      difficulty: "challenging",
      question: "The travel graph below shows a train journey with three segments A, B, and C.<br><br>Which segment shows the train travelling <strong>fastest</strong>? (Do not calculate — use the steepness of the line.)",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" aria-label="Travel graph: three segments A, B, C — B is steepest (fastest)">
  <rect width="400" height="220" fill="#f8fafc" rx="8"/>
  <!-- grid lines -->
  <line x1="50" y1="20" x2="380" y2="20" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="76" x2="380" y2="76" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="130" x2="380" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="50" y1="185" x2="380" y2="185" stroke="#e2e8f0" stroke-width="1"/>
  <!-- axes -->
  <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <line x1="50" y1="185" x2="385" y2="185" stroke="#64748b" stroke-width="1.5"/>
  <!-- Segment A: gentle slope 0→3km in 1hr, x=50→160, yScale=165/12=13.75
       A end: y=185-3*13.75=185-41=144
       Segment B: steep 3→10km in 0.5hr, x=160→215
       B end: y=185-10*13.75=185-137.5=48
       Segment C: moderate 10→12km in 1hr, x=215→380
       C end: y=185-12*13.75=185-165=20 -->
  <polyline points="50,185 160,144 215,48 380,20" fill="none" stroke="#5b5ef4" stroke-width="2.5"/>
  <circle cx="50" cy="185" r="4" fill="#5b5ef4"/>
  <circle cx="160" cy="144" r="4" fill="#5b5ef4"/>
  <circle cx="215" cy="48" r="4" fill="#5b5ef4"/>
  <circle cx="380" cy="20" r="4" fill="#5b5ef4"/>
  <!-- segment labels -->
  <text x="105" y="175" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">A</text>
  <text x="188" y="85" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">B</text>
  <text x="305" y="25" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="13" font-weight="700">C</text>
  <!-- y labels -->
  <text x="44" y="189" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="44" y="134" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">4</text>
  <text x="44" y="79" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">8</text>
  <text x="44" y="24" text-anchor="end" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">12</text>
  <!-- x labels -->
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">0</text>
  <text x="160" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1</text>
  <text x="215" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">1.5</text>
  <text x="380" y="200" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">3</text>
  <!-- axis titles -->
  <text x="215" y="215" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11">Time (hours)</text>
  <text x="12" y="103" text-anchor="middle" fill="#64748b" font-family="Nunito,Arial,sans-serif" font-size="11" transform="rotate(-90,12,103)">Distance (km)</text>
</svg>`,
      options: [
        "Segment A — it is the longest section",
        "Segment B — it is the steepest",
        "Segment C — it covers the most distance",
        "All segments have the same steepness"
      ],
      answer: 1,
      explanation: "Segment B is clearly the <strong>steepest</strong> section on the graph — it rises the most sharply, meaning the distance increases very quickly in a short time. On a distance-time graph, the <strong>steeper the line, the faster the speed</strong>. You do not need to calculate any numbers to compare steepness."
    }
  ]
};
