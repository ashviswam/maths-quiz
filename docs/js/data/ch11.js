const ch11 = {
  id: 11,
  title: "Time",
  icon: "🕐",
  color: "#14b8a6",
  topics: ["Time lines","Units of time","The calendar year","Time calculations","24-hour time","Timetables"],
  questions: [
    {
      id: "c11_q1",
      topic: "Time lines",
      type: "mcq",
      question: "A timeline shows events from <strong>1990</strong> to <strong>2010</strong>. If the line is divided into 4 equal intervals, how many years does each interval represent?",
      options: ["4 years", "5 years", "10 years", "20 years"],
      answer: 1,
      explanation: "The total span is 2010 − 1990 = 20 years. Dividing into 4 equal intervals gives 20 ÷ 4 = 5 years per interval."
    },
    {
      id: "c11_q2",
      topic: "Time lines",
      type: "mcq",
      question: "On a timeline, Event A occurred in <strong>1965</strong> and Event B occurred in <strong>2003</strong>. How many years apart are the two events?",
      options: ["28 years", "38 years", "42 years", "48 years"],
      answer: 1,
      explanation: "To find the gap between two events on a timeline, subtract: 2003 − 1965 = 38 years."
    },
    {
      id: "c11_q3",
      topic: "Time lines",
      type: "input",
      question: "A timeline marks the following events: School opened in <strong>1952</strong>, the library was built <strong>15 years later</strong>, and the sports hall was added <strong>8 years after that</strong>. In what year was the sports hall added?",
      answer: "1975",
      acceptableAnswers: ["1975"],
      explanation: "Library was built in 1952 + 15 = 1967. Sports hall was added in 1967 + 8 = 1975."
    },
    {
      id: "c11_q4",
      topic: "Units of time",
      type: "mcq",
      question: "How many seconds are in <strong>1 hour</strong>?",
      options: ["60", "360", "3,600", "36,000"],
      answer: 2,
      explanation: "1 hour = 60 minutes, and 1 minute = 60 seconds. So 1 hour = 60 × 60 = 3,600 seconds."
    },
    {
      id: "c11_q5",
      topic: "Units of time",
      type: "mcq",
      question: "How many days are in <strong>3 weeks and 4 days</strong>?",
      options: ["21 days", "24 days", "25 days", "28 days"],
      answer: 2,
      explanation: "3 weeks = 3 × 7 = 21 days. Adding 4 more days gives 21 + 4 = 25 days."
    },
    {
      id: "c11_q6",
      topic: "Units of time",
      type: "input",
      question: "A movie is <strong>150 minutes</strong> long. How many hours and minutes is that? Write your answer in the form <em>h hours m minutes</em> (e.g. 2 hours 10 minutes).",
      answer: "2 hours 30 minutes",
      acceptableAnswers: ["2 hours 30 minutes", "2h 30min", "2 hr 30 min", "2hrs 30mins", "2 hours and 30 minutes"],
      explanation: "150 ÷ 60 = 2 remainder 30. So 150 minutes = 2 hours 30 minutes."
    },
    {
      id: "c11_q7",
      topic: "Units of time",
      type: "mcq",
      question: "Which of the following is the <strong>correct order</strong> from shortest to longest unit of time?",
      options: [
        "minute, second, hour, day",
        "second, minute, hour, day",
        "second, hour, minute, day",
        "minute, hour, second, day"
      ],
      answer: 1,
      explanation: "The correct order from shortest to longest is: second, minute, hour, day. Each unit is 60 times larger than the previous (for seconds to minutes to hours), then 24 times for hours to days."
    },
    {
      id: "c11_q8",
      topic: "The calendar year",
      type: "mcq",
      question: "Which of the following months has only <strong>28 or 29 days</strong>?",
      options: ["April", "February", "November", "June"],
      answer: 1,
      explanation: "February has 28 days in a normal year and 29 days in a leap year. All other months have either 30 or 31 days."
    },
    {
      id: "c11_q9",
      topic: "The calendar year",
      type: "mcq",
      question: "A year is a <strong>leap year</strong> if it is divisible by 4. Which of the following is a leap year?",
      options: ["2001", "2010", "2024", "2100"],
      answer: 2,
      explanation: "2024 ÷ 4 = 506 exactly, so 2024 is a leap year. Note: 2100 is divisible by 4 but it is also a century year not divisible by 400, so it is not a leap year — but at Grade 6 level, the simple rule is that 2024 is the correct answer here."
    },
    {
      id: "c11_q10",
      topic: "The calendar year",
      type: "input",
      question: "How many days are there in total from the <strong>1st of March to the 30th of April</strong> (inclusive of both the start and end dates)?",
      answer: "61",
      acceptableAnswers: ["61", "61 days"],
      explanation: "March has 31 days and April has 30 days. Counting from 1 March to 30 April inclusive: 31 (all of March) + 30 (all of April) = 61 days."
    },
    {
      id: "c11_q11",
      topic: "Time calculations",
      type: "mcq",
      question: "A train journey starts at <strong>9:45 am</strong> and ends at <strong>12:20 pm</strong>. How long is the journey?",
      options: ["2 hours 25 minutes", "2 hours 35 minutes", "3 hours 25 minutes", "3 hours 35 minutes"],
      answer: 1,
      explanation: "From 9:45 am to 12:20 pm: from 9:45 to 12:45 is 3 hours, but we need to go back 25 minutes to reach 12:20. So the journey is 2 hours 35 minutes."
    },
    {
      id: "c11_q12",
      topic: "Time calculations",
      type: "mcq",
      question: "A film starts at <strong>6:50 pm</strong> and lasts <strong>1 hour 45 minutes</strong>. What time does it end?",
      diagram: null,
      options: ["7:95 pm", "8:25 pm", "8:35 pm", "9:05 pm"],
      answer: 2,
      explanation: "Add 1 hour to 6:50 pm to get 7:50 pm, then add 45 minutes: 7:50 + 45 minutes = 8:35 pm."
    },
    {
      id: "c11_q13",
      topic: "Time calculations",
      type: "input",
      question: "Sofia started her homework at <strong>4:15 pm</strong> and finished at <strong>5:50 pm</strong>. How many minutes did she spend on her homework?",
      diagram: null,
      answer: "95",
      acceptableAnswers: ["95", "95 minutes", "95 mins", "1 hour 35 minutes", "1 hr 35 min"],
      explanation: "From 4:15 pm to 5:15 pm is 60 minutes, and from 5:15 pm to 5:50 pm is 35 minutes. Total = 60 + 35 = 95 minutes."
    },
    {
      id: "c11_q14",
      topic: "24-hour time",
      type: "mcq",
      question: "What is <strong>3:45 pm</strong> in 24-hour time?",
      diagram: null,
      options: ["0345", "1345", "1545", "2145"],
      answer: 2,
      explanation: "For times after noon (pm), add 12 to the hours: 3 + 12 = 15. So 3:45 pm = 15:45 in 24-hour time."
    },
    {
      id: "c11_q15",
      topic: "24-hour time",
      type: "mcq",
      question: "What is <strong>22:10</strong> in 12-hour time?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-label="Clock showing 22:10 (10:10 pm)">
  <rect width="200" height="200" fill="#f8fafc" rx="8"/>
  <circle cx="100" cy="100" r="80" fill="white" stroke="#64748b" stroke-width="2"/>
  <!-- Hour tick marks -->
  <line x1="100" y1="24" x2="100" y2="34" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="34" x2="135" y2="43" stroke="#64748b" stroke-width="1.5"/>
  <line x1="166" y1="60" x2="158" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <line x1="176" y1="100" x2="166" y2="100" stroke="#64748b" stroke-width="2"/>
  <line x1="166" y1="140" x2="158" y2="135" stroke="#64748b" stroke-width="1.5"/>
  <line x1="140" y1="166" x2="135" y2="157" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="176" x2="100" y2="166" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="166" x2="65" y2="157" stroke="#64748b" stroke-width="1.5"/>
  <line x1="34" y1="140" x2="42" y2="135" stroke="#64748b" stroke-width="1.5"/>
  <line x1="24" y1="100" x2="34" y2="100" stroke="#64748b" stroke-width="2"/>
  <line x1="34" y1="60" x2="42" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <line x1="60" y1="34" x2="65" y2="43" stroke="#64748b" stroke-width="1.5"/>
  <!-- Numbers -->
  <text x="100" y="28" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">12</text>
  <text x="172" y="104" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">3</text>
  <text x="100" y="180" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">6</text>
  <text x="28" y="104" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">9</text>
  <!-- Hour hand at 10:10 — angle = 10*30 + 10*0.5 = 305 degrees -->
  <!-- sin(305°)=-0.8192, cos(305°)=0.5736 -->
  <!-- x = 100 + 44*(-0.8192) = 63.9, y = 100 - 44*0.5736 = 74.8 -->
  <line x1="100" y1="100" x2="64" y2="75" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <!-- Minute hand at 22:10 — angle = 10*6 = 60 degrees -->
  <!-- sin(60°)=0.8660, cos(60°)=0.5 -->
  <!-- x = 100 + 60*0.8660 = 152, y = 100 - 60*0.5 = 70 -->
  <line x1="100" y1="100" x2="152" y2="70" stroke="#5b5ef4" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="100" cy="100" r="4" fill="#1e293b"/>
</svg>`,
      options: ["10:10 am", "10:10 pm", "11:10 am", "11:10 pm"],
      answer: 1,
      explanation: "22:10 is after 12:00 noon, so subtract 12: 22 − 12 = 10. The time is 10:10 pm."
    },
    {
      id: "c11_q16",
      topic: "24-hour time",
      type: "input",
      question: "Write <strong>8:05 am</strong> in 24-hour time. (Write 4 digits, e.g. 0730)",
      diagram: null,
      answer: "0805",
      acceptableAnswers: ["0805", "08:05"],
      explanation: "Times before 10:00 am in 24-hour format use a leading zero. 8:05 am = 0805 in 24-hour time. The am/pm is not needed in 24-hour time."
    },
    {
      id: "c11_q17",
      topic: "Timetables",
      type: "mcq",
      question: "Use the bus timetable below:<br><br><strong>Stop A:</strong> 07:15 &nbsp; 08:00 &nbsp; 09:30<br><strong>Stop B:</strong> 07:42 &nbsp; 08:27 &nbsp; 09:57<br><strong>Stop C:</strong> 08:05 &nbsp; 08:50 &nbsp; 10:20<br><br>If you catch the <strong>08:00 bus from Stop A</strong>, what time do you arrive at Stop C?",
      options: ["07:42", "08:27", "08:50", "09:57"],
      answer: 2,
      explanation: "Reading along the second column of the timetable: the 08:00 bus from Stop A arrives at Stop C at 08:50."
    },
    {
      id: "c11_q18",
      topic: "Timetables",
      type: "mcq",
      question: "Using the same timetable:<br><br><strong>Stop A:</strong> 07:15 &nbsp; 08:00 &nbsp; 09:30<br><strong>Stop B:</strong> 07:42 &nbsp; 08:27 &nbsp; 09:57<br><strong>Stop C:</strong> 08:05 &nbsp; 08:50 &nbsp; 10:20<br><br>How long does the journey take from <strong>Stop A to Stop B</strong> on any bus?",
      options: ["17 minutes", "27 minutes", "37 minutes", "47 minutes"],
      answer: 1,
      explanation: "For the first bus: 07:42 − 07:15 = 27 minutes. Checking the others: 08:27 − 08:00 = 27 min and 09:57 − 09:30 = 27 min. The journey from Stop A to Stop B always takes 27 minutes."
    },
    {
      id: "c11_q19",
      topic: "Timetables",
      type: "input",
      question: "A train timetable shows:<br><br><strong>City Centre:</strong> 06:30<br><strong>Riverside:</strong> 07:08<br><strong>Airport:</strong> 07:45<br><br>How many minutes does it take to travel from <strong>Riverside to Airport</strong>?",
      answer: "37",
      acceptableAnswers: ["37", "37 minutes", "37 mins"],
      explanation: "From 07:08 to 07:45: from 07:08 to 07:45 = 45 − 8 = 37 minutes."
    },
    {
      id: "c11_q20",
      topic: "Timetables",
      type: "input",
      question: "A school bus leaves the school at <strong>15:30</strong> and takes <strong>48 minutes</strong> to reach the last stop. Write the arrival time in 24-hour format.",
      answer: "16:18",
      acceptableAnswers: ["16:18", "1618"],
      explanation: "15:30 + 48 minutes: add 30 minutes to get 16:00, then add the remaining 18 minutes to get 16:18."
    },
    // ── NEW QUESTIONS START HERE ──────────────────────────────────────────
    // Reading analogue clocks
    // Reading digital clocks / 12-hour am-pm
    {
      id: "c11_q24",
      topic: "12-hour time",
      type: "mcq",
      question: "A digital clock displays <strong>12:00 am</strong>. What does this time represent?",
      options: ["Noon (midday)", "Midnight (start of the day)", "6 in the morning", "6 in the evening"],
      answer: 1,
      explanation: "<strong>12:00 am</strong> is midnight — the very start (or end) of a day. <strong>12:00 pm</strong> is noon (midday). This is a common trick question! Remember: am = after midnight, pm = after midday."
    },
    {
      id: "c11_q25",
      topic: "12-hour time",
      type: "mcq",
      question: "Pragathy goes to sleep at <strong>9:30 pm</strong> and wakes up at <strong>6:45 am</strong>. How long did she sleep?",
      options: ["8 hours 15 minutes", "8 hours 45 minutes", "9 hours 15 minutes", "9 hours 45 minutes"],
      answer: 2,
      explanation: "From 9:30 pm to 6:45 am spans midnight. From 9:30 pm to midnight is 2 hours 30 minutes. From midnight to 6:45 am is 6 hours 45 minutes. Total = 2 h 30 min + 6 h 45 min = <strong>9 hours 15 minutes</strong>."
    },
    {
      id: "c11_q26",
      topic: "12-hour time",
      type: "mcq",
      question: "Which of the following correctly describes <strong>12:15 pm</strong>?",
      options: [
        "15 minutes after midnight",
        "15 minutes before noon",
        "15 minutes after noon",
        "15 minutes before midnight"
      ],
      answer: 2,
      explanation: "<strong>12:00 pm</strong> is noon (midday), so 12:15 pm is <strong>15 minutes after noon</strong>. Remember the rule: pm times from 12:00 to 12:59 are just after midday."
    },
    // Converting between 12-hour and 24-hour
    {
      id: "c11_q27",
      topic: "Converting 12-hour and 24-hour",
      type: "mcq",
      question: "What is <strong>00:00</strong> in 12-hour time?",
      options: ["12:00 am", "12:00 pm", "0:00 am", "24:00 pm"],
      answer: 0,
      explanation: "<strong>00:00</strong> in 24-hour time is midnight, which is written as <strong>12:00 am</strong> in 12-hour time. The 24-hour clock starts at 00:00 (midnight) and goes up to 23:59."
    },
    {
      id: "c11_q28",
      topic: "Converting 12-hour and 24-hour",
      type: "input",
      question: "Convert <strong>12:30 pm</strong> to 24-hour time. Write 4 digits (e.g. 1430).",
      answer: "1230",
      acceptableAnswers: ["1230", "12:30"],
      explanation: "<strong>12:30 pm</strong> is midday plus 30 minutes. In 24-hour time, 12:00 noon stays as 12:00, so 12:30 pm = <strong>1230</strong>. (You only add 12 for pm times from 1:00 pm to 11:59 pm — not for 12 pm itself!)"
    },
    {
      id: "c11_q29",
      topic: "Converting 12-hour and 24-hour",
      type: "mcq",
      question: "What is <strong>17:55</strong> in 12-hour time?",
      options: ["5:55 am", "5:55 pm", "7:55 am", "7:55 pm"],
      answer: 1,
      explanation: "17:55 is in the afternoon (pm), so subtract 12: 17 − 12 = 5. The time is <strong>5:55 pm</strong>. Since 17 > 12, we know it is a pm time."
    },
    // Time intervals — more practice
    {
      id: "c11_q30",
      topic: "Time intervals",
      type: "input",
      question: "How many minutes are there from <strong>10:35</strong> to <strong>14:08</strong>? (Use 24-hour times.)",
      answer: "213",
      acceptableAnswers: ["213", "213 minutes"],
      explanation: "Count in stages: 10:35 → 11:00 = 25 min. Then 11:00 → 14:00 = 3 hours = 180 min. Then 14:00 → 14:08 = 8 min. Total = 25 + 180 + 8 = <strong>213 minutes</strong>."
    },
    {
      id: "c11_q31",
      topic: "Time intervals",
      type: "mcq",
      question: "A recipe says to cook a pie for <strong>1 hour 20 minutes</strong>. You put the pie in the oven at <strong>11:50 am</strong>. When should you take it out?",
      options: ["12:10 pm", "12:30 pm", "1:10 pm", "1:30 pm"],
      answer: 2,
      explanation: "11:50 am + 1 hour = 12:50 pm. Then 12:50 pm + 20 minutes = <strong>1:10 pm</strong>. Be careful — adding 20 minutes to 12:50 takes you past 1:00 pm: 12:50 + 10 min = 1:00 pm, then + 10 more = 1:10 pm."
    },
    // Time spanning midnight
    // Calendar — days/weeks in a year, and date arithmetic
    {
      id: "c11_q34",
      topic: "The calendar year",
      type: "mcq",
      question: "How many weeks are in a normal (non-leap) year?",
      options: ["48 weeks", "50 weeks", "52 weeks", "54 weeks"],
      answer: 2,
      explanation: "A normal year has 365 days. 365 ÷ 7 = 52 weeks and 1 day left over. So there are <strong>52 complete weeks</strong> (plus 1 extra day) in a non-leap year."
    },
    {
      id: "c11_q35",
      topic: "The calendar year",
      type: "mcq",
      question: "Today is the <strong>28th of February</strong> in a non-leap year. What is the date <strong>tomorrow</strong>?",
      options: ["29th February", "1st March", "2nd March", "28th March"],
      answer: 1,
      explanation: "In a non-leap year, February has only 28 days. So after the 28th of February comes the <strong>1st of March</strong>. February 29 only exists in a leap year."
    },
    {
      id: "c11_q36",
      topic: "The calendar year",
      type: "mcq",
      question: "Which of the following months have <strong>31 days</strong>? Choose the correct pair.",
      options: ["April and June", "September and November", "July and August", "February and April"],
      answer: 2,
      explanation: "Use the knuckle trick or the rhyme! <strong>July and August</strong> both have 31 days — they are two consecutive long months. April, June, September and November have 30 days; February has 28 or 29."
    },
    // Time zones
    // Units of time — conversions
    {
      id: "c11_q40",
      topic: "Units of time",
      type: "mcq",
      question: "How many minutes are in <strong>2 days</strong>?",
      options: ["480 minutes", "720 minutes", "2,880 minutes", "4,320 minutes"],
      answer: 2,
      explanation: "1 day = 24 hours. 2 days = 48 hours. 48 hours × 60 minutes = <strong>2,880 minutes</strong>."
    },
    {
      id: "c11_q41",
      topic: "Units of time",
      type: "input",
      question: "A science experiment runs for <strong>7,200 seconds</strong>. How many hours is that?",
      answer: "2",
      acceptableAnswers: ["2", "2 hours", "2 hrs"],
      explanation: "First convert seconds to minutes: 7,200 ÷ 60 = 120 minutes. Then convert minutes to hours: 120 ÷ 60 = <strong>2 hours</strong>."
    },
    // More timetable practice
    {
      id: "c11_q42",
      topic: "Timetables",
      type: "mcq",
      question: "A school bell timetable shows:<br><br><strong>Period 1 starts:</strong> 08:30<br><strong>Period 2 starts:</strong> 09:20<br><strong>Break starts:</strong> 10:10<br><strong>Period 3 starts:</strong> 10:30<br><br>How long is <strong>Period 2</strong>?",
      options: ["40 minutes", "50 minutes", "60 minutes", "70 minutes"],
      answer: 1,
      explanation: "Period 2 starts at 09:20 and ends when Break starts at 10:10. From 09:20 to 10:10 = <strong>50 minutes</strong>."
    },
    // ── CHALLENGING QUESTIONS ─────────────────────────────────────────────
    {
      id: "c11_q44",
      topic: "The calendar year",
      difficulty: "challenging",
      type: "input",
      question: "Today is <strong>18th November</strong>. What is the date exactly <strong>100 days</strong> from today? (Assume it is not a leap year.)",
      answer: "26th February",
      acceptableAnswers: ["26th February", "February 26", "26 February", "Feb 26"],
      explanation: "Count forward from 18 November: November has 30 days, so from 18 Nov there are 30 − 18 = 12 days left in November. 100 − 12 = 88 more days needed after 30 Nov. December has 31 days: 88 − 31 = 57 more days after December. January has 31 days: 57 − 31 = 26 more days into February. So the date is <strong>26th February</strong>. Careful counting across months is key!"
    },
    {
      id: "c11_q46",
      topic: "Time intervals",
      difficulty: "challenging",
      type: "input",
      question: "A cinema shows three films back-to-back with a <strong>15-minute break</strong> between each film. The first film starts at <strong>10:00</strong> and lasts <strong>1 hour 45 minutes</strong>. The second film lasts <strong>2 hours 10 minutes</strong>. The third film lasts <strong>1 hour 30 minutes</strong>.<br><br>What time does the third film end? Give your answer in 24-hour format (HH:MM).",
      answer: "15:55",
      acceptableAnswers: ["15:55", "1555"],
      explanation: "Film 1: starts 10:00, lasts 1h 45min → ends 11:45.<br>Break 1: 11:45 + 15 min = 12:00.<br>Film 2: starts 12:00, lasts 2h 10min → ends 14:10.<br>Break 2: 14:10 + 15 min = 14:25.<br>Film 3: starts 14:25, lasts 1h 30min → 14:25 + 1h = 15:25, then + 30min = <strong>15:55</strong>.<br><br>Adding up all the time: 1h45 + 15 + 2h10 + 15 + 1h30 = 5h55min from 10:00 = 15:55. Great multi-step work!",
    },
    {
      id: "c11_q47",
      topic: "Timetables",
      difficulty: "challenging",
      type: "mcq",
      question: "Use the train timetable below:<br><br><table style='border-collapse:collapse;font-size:0.95em'><tr><th style='border:1px solid #cbd5e1;padding:4px 10px'>Station</th><th style='border:1px solid #cbd5e1;padding:4px 10px'>Train 1</th><th style='border:1px solid #cbd5e1;padding:4px 10px'>Train 2</th><th style='border:1px solid #cbd5e1;padding:4px 10px'>Train 3</th></tr><tr><td style='border:1px solid #cbd5e1;padding:4px 10px'>Northgate</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>06:50</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>08:15</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>09:40</td></tr><tr><td style='border:1px solid #cbd5e1;padding:4px 10px'>Millfield</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>07:22</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>08:47</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>10:12</td></tr><tr><td style='border:1px solid #cbd5e1;padding:4px 10px'>Central</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>08:05</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>09:30</td><td style='border:1px solid #cbd5e1;padding:4px 10px'>10:55</td></tr></table><br>Anya arrives at <strong>Millfield station at 08:50</strong>. She needs to reach <strong>Central</strong> by <strong>10:40</strong>. Which is the <strong>latest train</strong> she can take?",
      options: [
        "Train 1 — departs Millfield 07:22",
        "Train 2 — departs Millfield 08:47",
        "Train 3 — departs Millfield 10:12",
        "She cannot make it to Central by 10:40 on any available train"
      ],
      answer: 3,
      explanation: "Anya arrives at Millfield at 08:50. Check each train from Millfield: Train 1 departs 07:22 — already gone. Train 2 departs 08:47 — also gone (she arrives at 08:50, 3 minutes too late!). Train 3 departs 10:12 and arrives Central at 10:55 — but her deadline is 10:40, so this is too late too.<br><br>Result: <strong>she cannot reach Central by 10:40</strong> on any available train. If she had arrived at Millfield by 08:47, Train 2 (arriving Central at 09:30) would have worked. This type of question tests careful reading — always check both departure times AND arrival deadlines!"
    },
    {
      id: "c11_q48",
      topic: "Units of time",
      difficulty: "challenging",
      type: "input",
      question: "Pragathy's summer holiday is <strong>6 weeks and 2 days</strong> long. She spends exactly <strong>half</strong> of this time at her grandparents' house. How many days does she spend at her grandparents' house?",
      answer: "22",
      acceptableAnswers: ["22", "22 days"],
      explanation: "6 weeks = 6 × 7 = 42 days. Adding 2 days: 42 + 2 = 44 days total. Half of 44 = 44 ÷ 2 = <strong>22 days</strong>. This tests whether you can combine unit conversion with fraction thinking!"
    }
  ]
};
