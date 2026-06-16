const ch16 = {
  id: 16,
  title: "Line Graphs",
  icon: "📈",
  color: "#2E86AB",
  topics: ["Line graphs", "Travel graphs", "Conversion graphs"],
  questions: [
    {
      id: "c16_q1",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows the temperature in a city over one week. On Monday the temperature was 12°C and on Friday it was 20°C. What does the rising line between Monday and Friday tell us?",
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
      options: ["3", "4", "7", "10"],
      answer: 1,
      explanation: "To find how many more, subtract: 7 − 3 = <strong>4</strong>. Reading values off the graph and finding the difference is a key skill for line graphs."
    },
    {
      id: "c16_q4",
      topic: "Line graphs",
      type: "input",
      question: "A line graph shows daily rainfall (mm) for one week.<br><br>Monday: 5 mm, Tuesday: 8 mm, Wednesday: 3 mm, Thursday: 3 mm, Friday: 10 mm.<br><br>What is the <strong>total</strong> rainfall for the week (in mm)?",
      answer: "29",
      acceptableAnswers: ["29", "29 mm", "29mm"],
      explanation: "Add all the values: 5 + 8 + 3 + 3 + 10 = <strong>29 mm</strong>. Always read each point carefully from the line graph before calculating."
    },
    {
      id: "c16_q5",
      topic: "Line graphs",
      type: "mcq",
      question: "A line graph shows the height of a candle (cm) as it burns. At 1 hour the candle is 15 cm tall; at 2 hours it is 12 cm tall; at 3 hours it is 9 cm tall. What is the trend of the line?",
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
      answer: "3 pm",
      acceptableAnswers: ["3 pm", "3pm", "15:00", "3:00 pm", "3:00pm"],
      explanation: "The highest value on the graph is <strong>25°C at 3 pm</strong>. The peak (highest point) of a line graph shows when the value was greatest."
    },
    {
      id: "c16_q7",
      topic: "Travel graphs",
      type: "mcq",
      question: "On a distance-time (travel) graph, a <strong>horizontal</strong> line segment means the traveller is:",
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
      type: "input",
      question: "A travel graph shows a car journey. The car travels <strong>150 km</strong> in <strong>3 hours</strong>.<br><br>Use the formula: Average speed = Distance ÷ Time<br><br>What is the average speed of the car in km/h?",
      answer: "50",
      acceptableAnswers: ["50", "50 km/h", "50km/h"],
      explanation: "Average speed = Distance ÷ Time = 150 ÷ 3 = <strong>50 km/h</strong>. On a travel graph, the average speed equals the total distance divided by the total time taken."
    },
    {
      id: "c16_q11",
      topic: "Travel graphs",
      type: "input",
      question: "A travel graph shows a cyclist leaving home. She cycles 24 km in 2 hours, rests for 1 hour, then cycles home in 2 hours.<br><br>What is her average speed (in km/h) for the <strong>first</strong> part of her journey (cycling away from home)?",
      answer: "12",
      acceptableAnswers: ["12", "12 km/h", "12km/h"],
      explanation: "Average speed = Distance ÷ Time = 24 ÷ 2 = <strong>12 km/h</strong>. Only use the distance and time for the first section of the graph."
    },
    {
      id: "c16_q12",
      topic: "Travel graphs",
      type: "mcq",
      question: "On a distance-time travel graph, the line goes <strong>back down towards zero</strong>. What does this mean?",
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
      options: ["8 miles", "10 miles", "12 miles", "16 miles"],
      answer: 1,
      explanation: "From the graph, 8 km = 5 miles, so 16 km = 5 × 2 = <strong>10 miles</strong>. Conversion graphs are straight lines through the origin, so you can double (or halve) values proportionally."
    },
    {
      id: "c16_q14",
      topic: "Conversion graphs",
      type: "mcq",
      question: "A conversion graph converts Australian dollars (AUD) to Euros (EUR). Reading from the graph, 50 AUD = 30 EUR. Using this graph, how many AUD is <strong>60 EUR</strong>?",
      options: ["80 AUD", "90 AUD", "100 AUD", "120 AUD"],
      answer: 2,
      explanation: "From the graph: 50 AUD = 30 EUR, so 1 EUR = 50/30 AUD. For 60 EUR: 60 × (50/30) = 60 × 5/3 = <strong>100 AUD</strong>. You can use the graph in either direction to convert."
    },
    {
      id: "c16_q15",
      topic: "Conversion graphs",
      type: "input",
      question: "A conversion graph converts litres (L) to gallons. The graph shows that <strong>10 litres = 2.5 gallons</strong>.<br><br>Using the graph, how many gallons is <strong>20 litres</strong>?",
      answer: "5",
      acceptableAnswers: ["5", "5 gallons", "5gallons"],
      explanation: "10 litres = 2.5 gallons, so 20 litres = 2.5 × 2 = <strong>5 gallons</strong>. Since the conversion graph is a straight line through the origin, doubling the litres doubles the gallons."
    },
    {
      id: "c16_q16",
      topic: "Conversion graphs",
      type: "mcq",
      question: "What is the key feature of <strong>all</strong> conversion graphs?",
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
      answer: "6.75",
      acceptableAnswers: ["6.75", "6.75 kg", "6.75kg"],
      explanation: "5 lb = 2.25 kg, so 15 lb = 2.25 × 3 = <strong>6.75 kg</strong>. Multiply both values by the same factor (here, 3) to read further up the conversion graph."
    },
    {
      id: "c16_q18",
      topic: "Travel graphs",
      type: "mcq",
      question: "A distance-time graph shows two friends, Ama and Ben, both starting from the same point at the same time. After 2 hours, Ama has travelled 10 km and Ben has travelled 6 km. Who is travelling faster?",
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
      options: ["9.7 inches", "10.9 inches", "11.7 inches", "12.9 inches"],
      answer: 2,
      explanation: "10 cm ≈ 3.9 inches, so 30 cm ≈ 3.9 × 3 = <strong>11.7 inches</strong>. Use the conversion graph by reading one value and scaling proportionally for larger measurements."
    }
  ]
};
