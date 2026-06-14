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
      options: ["4", "9", "11", "12"],
      answer: 2,
      explanation: "Count all the dots: 3 + 5 + 2 + 1 = 11 students were surveyed in total. Each dot on a dot plot represents one data value."
    },
    {
      id: "c18_q6",
      topic: "Dot plots",
      type: "mcq",
      question: "Using the dot plot from the previous question (siblings: 0→3 dots, 1→5 dots, 2→2 dots, 3→1 dot), what is the <strong>most common</strong> number of siblings?",
      options: ["0", "1", "2", "3"],
      answer: 1,
      explanation: "The value with the most dots is 1 sibling, which has 5 dots. On a dot plot, the tallest stack of dots shows the most frequent (modal) value."
    },
    {
      id: "c18_q7",
      topic: "Dot plots",
      type: "input",
      question: "A dot plot records the scores (out of 10) on a quiz for 8 students:<br><strong>6:</strong> ●<br><strong>7:</strong> ● ●<br><strong>8:</strong> ● ● ●<br><strong>9:</strong> ●<br><strong>10:</strong> ●<br>What is the total of all the scores? Write your answer as a number.",
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
      options: ["2", "4", "8", "20"],
      answer: 1,
      explanation: "Read the height of each bar and subtract: 12 − 8 = 4. January had 4 more rainy days than February."
    },
    {
      id: "c18_q11",
      topic: "Column graphs",
      type: "mcq",
      question: "A column graph shows test scores for four classes. The heights of the bars are: Class A = 72, Class B = 85, Class C = 68, Class D = 91. Which class had the <strong>lowest</strong> average score?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: 2,
      explanation: "The lowest bar value is 68, which belongs to Class C. On a column graph, the shortest bar shows the smallest value."
    },
    {
      id: "c18_q12",
      topic: "Column graphs",
      type: "input",
      question: "A column graph shows how many students chose each sport. The values are: Soccer = 15, Basketball = 12, Tennis = 8, Swimming = 10. What is the <strong>total</strong> number of students? Write your answer as a number.",
      answer: "45",
      acceptableAnswers: ["45"],
      explanation: "Add all the bar values: 15 + 12 + 8 + 10 = 45 students in total."
    },
    {
      id: "c18_q13",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart shows how 200 students travel to school. The 'bus' sector takes up <strong>35%</strong> of the chart. How many students travel by bus?",
      options: ["35", "65", "70", "100"],
      answer: 2,
      explanation: "Find 35% of 200: 35/100 × 200 = 70 students. Always multiply the percentage (as a decimal or fraction) by the total to find the actual number."
    },
    {
      id: "c18_q14",
      topic: "Pie charts",
      type: "mcq",
      question: "A pie chart sector represents <strong>25%</strong> of the data. What is the angle of this sector?",
      options: ["25°", "45°", "90°", "180°"],
      answer: 2,
      explanation: "A full circle is 360°. To find the angle: 25/100 × 360° = 90°. A quarter of a pie chart (25%) forms a right angle."
    },
    {
      id: "c18_q15",
      topic: "Pie charts",
      type: "input",
      question: "A pie chart has four sectors. Three of the sectors have angles of 120°, 90°, and 80°. What is the angle of the <strong>fourth</strong> sector? Write your answer in degrees (just the number).",
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
    }
  ]
};
