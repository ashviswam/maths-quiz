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
      options: ["7:95 pm", "8:25 pm", "8:35 pm", "9:05 pm"],
      answer: 2,
      explanation: "Add 1 hour to 6:50 pm to get 7:50 pm, then add 45 minutes: 7:50 + 45 minutes = 8:35 pm."
    },
    {
      id: "c11_q13",
      topic: "Time calculations",
      type: "input",
      question: "Sofia started her homework at <strong>4:15 pm</strong> and finished at <strong>5:50 pm</strong>. How many minutes did she spend on her homework?",
      answer: "95",
      acceptableAnswers: ["95", "95 minutes", "95 mins", "1 hour 35 minutes", "1 hr 35 min"],
      explanation: "From 4:15 pm to 5:15 pm is 60 minutes, and from 5:15 pm to 5:50 pm is 35 minutes. Total = 60 + 35 = 95 minutes."
    },
    {
      id: "c11_q14",
      topic: "24-hour time",
      type: "mcq",
      question: "What is <strong>3:45 pm</strong> in 24-hour time?",
      options: ["0345", "1345", "1545", "2145"],
      answer: 2,
      explanation: "For times after noon (pm), add 12 to the hours: 3 + 12 = 15. So 3:45 pm = 15:45 in 24-hour time."
    },
    {
      id: "c11_q15",
      topic: "24-hour time",
      type: "mcq",
      question: "What is <strong>22:10</strong> in 12-hour time?",
      options: ["10:10 am", "10:10 pm", "11:10 am", "11:10 pm"],
      answer: 1,
      explanation: "22:10 is after 12:00 noon, so subtract 12: 22 − 12 = 10. The time is 10:10 pm."
    },
    {
      id: "c11_q16",
      topic: "24-hour time",
      type: "input",
      question: "Write <strong>8:05 am</strong> in 24-hour time. (Write 4 digits, e.g. 0730)",
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
    }
  ]
};
