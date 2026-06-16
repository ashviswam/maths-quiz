const ch06 = {
  id: 6,
  title: "Investigation Skills",
  icon: "🔬",
  color: "#0ea5e9",
  topics: ["Variables", "Equipment", "Fair Tests & Reliability", "Patterns & Conclusions", "Predictions"],
  questions: [
    {
      id: "sc6_q1",
      topic: "Variables",
      type: "mcq",
      question: "In an experiment, what is the independent variable (IV)?",
      options: [
        "The variable that is measured or observed",
        "The variable that the experimenter deliberately changes",
        "Variables kept the same to make it a fair test",
        "The variable that is hardest to control"
      ],
      answer: 1,
      explanation: "The independent variable (IV) is the one factor the experimenter deliberately changes to see what effect it has. Everything else should be kept constant."
    },
    {
      id: "sc6_q2",
      topic: "Variables",
      type: "mcq",
      question: "In an experiment, what is the dependent variable (DV)?",
      options: [
        "The variable the experimenter changes",
        "Variables kept the same throughout",
        "The variable that is measured or observed as a result of changing the IV",
        "The variable that is most difficult to measure"
      ],
      answer: 2,
      explanation: "The dependent variable (DV) is what you measure or observe. It 'depends' on the independent variable — you change the IV and measure what happens to the DV."
    },
    {
      id: "sc6_q3",
      topic: "Variables",
      type: "mcq",
      question: "In an experiment, what is a control variable (CV)?",
      options: [
        "The variable that is measured",
        "The variable that is changed",
        "A variable kept the same in every trial to make the test fair",
        "The final result of the experiment"
      ],
      answer: 2,
      explanation: "Control variables are all the factors kept constant throughout an experiment. Keeping them the same ensures that any change in the DV is caused only by the IV — making it a fair test."
    },
    {
      id: "sc6_q4",
      topic: "Variables",
      type: "mcq",
      question: "A student investigates how ramp height affects the distance a toy car travels. What is the independent variable?",
      options: [
        "The distance the car travels",
        "The type of surface the car rolls on",
        "The height of the ramp",
        "The mass of the car"
      ],
      answer: 2,
      explanation: "The student is deliberately changing the ramp height to see what effect it has — so ramp height is the IV. The distance the car travels is the DV (what is measured)."
    },
    {
      id: "sc6_q5",
      topic: "Variables",
      type: "mcq",
      question: "In the ramp experiment above, what is the dependent variable?",
      options: [
        "The height of the ramp",
        "The distance the car travels after leaving the ramp",
        "The type of surface on the floor",
        "The mass of the ramp"
      ],
      answer: 1,
      explanation: "The dependent variable (DV) is what is measured as a result. The student measures the distance the car travels after the ramp height is changed — so distance is the DV."
    },
    {
      id: "sc6_q6",
      topic: "Variables",
      type: "mcq",
      question: "In the ramp experiment, which of the following would be a control variable?",
      options: [
        "The height of the ramp",
        "The distance the car travels",
        "The mass of the toy car — kept the same in every trial",
        "The conclusion about the results"
      ],
      answer: 2,
      explanation: "Control variables are kept the same to ensure a fair test. The mass of the car should be the same in every trial so that only the ramp height is causing any difference in distance."
    },
    {
      id: "sc6_q7",
      topic: "Variables",
      type: "mcq",
      question: "A student investigates whether paper towel brand affects how quickly water is absorbed. What is the dependent variable?",
      options: [
        "The brand of paper towel",
        "The temperature of the water",
        "The time taken to absorb the water (or the amount absorbed)",
        "The size of the paper towel sheet"
      ],
      answer: 2,
      explanation: "The student is changing the brand (IV) and measuring how quickly the water is absorbed (DV). Time to absorb — or volume absorbed — is the dependent variable."
    },
    {
      id: "sc6_q8",
      topic: "Variables",
      type: "mcq",
      question: "A student measures how sound level changes with distance from a speaker. What is the independent variable?",
      options: [
        "The sound level (in decibels)",
        "The type of sound played",
        "The distance from the speaker",
        "The size of the room"
      ],
      answer: 2,
      explanation: "Distance from the speaker is deliberately changed to see its effect on sound level — so distance is the IV. Sound level (measured in dB) is the DV."
    },
    {
      id: "sc6_q9",
      topic: "Variables",
      type: "mcq",
      question: "An experiment tests how light intensity affects plant growth. The student uses the same type of plant, same amount of soil, same amount of water, and same temperature in each pot. Why does the student keep these things the same?",
      options: [
        "To make the experiment faster",
        "To make the test fair — so only light intensity can be causing any difference in growth",
        "To make the results look better",
        "Because it is easier to use the same conditions"
      ],
      answer: 1,
      explanation: "Keeping all other variables constant (control variables) ensures a fair test. If two variables changed at once, you would not know which one caused the change in plant growth."
    },
    {
      id: "sc6_q10",
      topic: "Equipment",
      type: "mcq",
      question: "Which piece of equipment would you use to measure the volume of a liquid accurately?",
      options: [
        "A ruler",
        "A measuring cylinder",
        "A thermometer",
        "A spring scale (newton meter)"
      ],
      answer: 1,
      explanation: "A measuring cylinder is used to measure the volume of a liquid in millilitres (mL) or centilitres (cL). You read the scale at the bottom of the meniscus (curved liquid surface)."
    },
    {
      id: "sc6_q11",
      topic: "Equipment",
      type: "mcq",
      question: "What instrument would you use to measure the temperature of water?",
      options: [
        "A measuring cylinder",
        "A ruler",
        "A thermometer",
        "A stopwatch"
      ],
      answer: 2,
      explanation: "A thermometer measures temperature in degrees Celsius (°C). It is the correct tool when temperature is the variable being measured or controlled."
    },
    {
      id: "sc6_q12",
      topic: "Equipment",
      type: "mcq",
      question: "A student wants to measure how long sugar takes to dissolve. What instrument should they use?",
      options: [
        "A thermometer",
        "A measuring cylinder",
        "A stopwatch",
        "A ruler"
      ],
      answer: 2,
      explanation: "A stopwatch is used to measure time intervals — ideal for timing how long a process takes, such as how long it takes sugar to fully dissolve."
    },
    {
      id: "sc6_q13",
      topic: "Equipment",
      type: "mcq",
      question: "To measure the distance a toy car travels from the end of a ramp, which instrument should be used?",
      options: [
        "A thermometer",
        "A measuring cylinder",
        "A spring scale",
        "A metre ruler or tape measure"
      ],
      answer: 3,
      explanation: "Distance is measured with a ruler or tape measure in centimetres (cm) or metres (m). A metre ruler or tape measure is best for distances a car might travel along the floor."
    },
    {
      id: "sc6_q14",
      topic: "Equipment",
      type: "mcq",
      question: "A student wants to measure how loud a sound is at different distances from a speaker. Which instrument is needed?",
      options: [
        "A ruler",
        "A decibel meter (sound level meter)",
        "A measuring cylinder",
        "A stopwatch"
      ],
      answer: 1,
      explanation: "Sound level is measured in decibels (dB) using a decibel meter (or sound level meter). A ruler measures distance, which is the IV in this experiment, not the DV."
    },
    {
      id: "sc6_q15",
      topic: "Equipment",
      type: "mcq",
      question: "A student is measuring hand span and grip strength. Which equipment should they use for hand span?",
      options: [
        "A stopwatch",
        "A thermometer",
        "A ruler",
        "A measuring cylinder"
      ],
      answer: 2,
      explanation: "Hand span is a length measurement, so a ruler (measuring in mm or cm) is the correct equipment. Grip strength would be measured with a grip dynamometer (force gauge)."
    },
    {
      id: "sc6_q16",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "Why should you repeat an experiment several times and calculate an average?",
      options: [
        "To make the experiment take longer",
        "To get more data to display in a graph",
        "To improve reliability by reducing the effect of random errors or anomalous results",
        "Because the teacher requires three results"
      ],
      answer: 2,
      explanation: "Repeating an experiment and averaging results improves reliability. If one result is anomalous (an outlier caused by a random error), averaging reduces its effect on the final result."
    },
    {
      id: "sc6_q17",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "A student gets results of 45 cm, 46 cm, and 12 cm in three trials of a car experiment. The 12 cm result is likely an anomaly. What should the student do?",
      options: [
        "Use the 12 cm result as it is the lowest",
        "Average all three results including 12 cm",
        "Repeat the trial that gave 12 cm to check if it is an error, and exclude it from the average if confirmed anomalous",
        "Stop the experiment"
      ],
      answer: 2,
      explanation: "An anomalous result (outlier) should not simply be ignored — the student should repeat that trial. If it is confirmed as an error, it can be excluded from the mean, giving a more reliable result."
    },
    {
      id: "sc6_q18",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "What makes an experiment a 'fair test'?",
      options: [
        "Everyone in the class uses the same equipment",
        "Only one variable is changed at a time while all others are kept constant",
        "The teacher checks the results are correct",
        "The experiment is done in a laboratory"
      ],
      answer: 1,
      explanation: "A fair test changes only the independent variable while keeping all other variables (control variables) the same. This ensures any change in results is caused by the IV alone."
    },
    {
      id: "sc6_q19",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "A student tests three brands of paper towel by dropping different amounts of water on each one. Why is this not a fair test?",
      options: [
        "Paper towels should not be tested in school",
        "The amount of water should be the same for each brand — it is a variable that should be controlled",
        "The student should test fewer brands",
        "The test is fair because all three are paper towels"
      ],
      answer: 1,
      explanation: "For a fair test, the amount of water must be the same for each brand. If different amounts are used, you cannot tell whether differences in absorption are due to the brand or the water volume."
    },
    {
      id: "sc6_q20",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "How many times should an experiment ideally be repeated to get a reliable result?",
      options: [
        "Once is enough if it works",
        "Twice",
        "At least three times",
        "Ten or more times"
      ],
      answer: 2,
      explanation: "Repeating an experiment at least three times allows you to spot anomalous results and calculate a more reliable mean. A single result could be a fluke."
    },
    {
      id: "sc6_q21",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "A student measures sound level at different distances from a speaker. Results: 1 m = 80 dB, 2 m = 70 dB, 3 m = 62 dB, 4 m = 55 dB. Which statement describes the pattern?",
      options: [
        "As distance increases, sound level increases",
        "As distance increases, sound level decreases",
        "Sound level stays the same regardless of distance",
        "Sound level first increases then decreases with distance"
      ],
      answer: 1,
      explanation: "The data shows that as distance increases, sound level decreases. This is the correct way to describe the pattern — naming both variables and the direction of change."
    },
    {
      id: "sc6_q22",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "A student investigates ramp height vs car distance. Results: 10 cm ramp = 30 cm, 20 cm ramp = 58 cm, 30 cm ramp = 91 cm. Which conclusion is correct?",
      options: [
        "The higher the ramp, the shorter the distance the car travels",
        "Ramp height has no effect on car distance",
        "The higher the ramp, the further the car travels",
        "The car always travels the same distance regardless of ramp height"
      ],
      answer: 2,
      explanation: "The data shows a clear positive relationship: as ramp height increases, the car travels further. A good conclusion links back to the original question and is supported by the data."
    },
    {
      id: "sc6_q23",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "A student notices that plants in more light grew taller. Which conclusion is correctly worded?",
      options: [
        "Light is good for plants",
        "The greater the light intensity, the greater the height of the plant after two weeks",
        "Plants need light",
        "More light makes plants healthier"
      ],
      answer: 1,
      explanation: "A good scientific conclusion names both variables precisely and states the direction of the relationship. 'The greater the light intensity, the greater the height' is clear and specific."
    },
    {
      id: "sc6_q24",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "A student investigates dissolving time vs temperature. Results: 20°C = 120 s, 40°C = 65 s, 60°C = 30 s. What is the pattern?",
      options: [
        "As temperature increases, dissolving time increases",
        "Temperature has no effect on dissolving time",
        "As temperature increases, dissolving time decreases",
        "Dissolving time increases then decreases with temperature"
      ],
      answer: 2,
      explanation: "The data shows that as temperature increases, the time taken to dissolve decreases. At higher temperatures, particles move faster and collide more often, so dissolution is quicker."
    },
    {
      id: "sc6_q25",
      topic: "Predictions",
      type: "mcq",
      question: "Before starting an experiment, a student writes: 'I predict that the higher the ramp, the further the car will travel, because a higher ramp gives the car more gravitational potential energy.' What makes this a good prediction?",
      options: [
        "It is long",
        "It states what will happen AND gives a reason why",
        "It uses the word 'predict'",
        "It mentions the equipment"
      ],
      answer: 1,
      explanation: "A good prediction states what you expect to happen and gives a scientific reason to explain why. Predictions without reasons are just guesses."
    },
    {
      id: "sc6_q26",
      topic: "Predictions",
      type: "mcq",
      question: "A student predicts: 'Brands of paper towel that are thicker will absorb water faster.' Is this a hypothesis or a prediction?",
      options: [
        "A hypothesis — it is a testable statement explaining a relationship",
        "A prediction — it is a specific expected outcome for a specific experiment",
        "A conclusion — it summarises data",
        "A control variable"
      ],
      answer: 0,
      explanation: "This is a hypothesis — a general testable statement suggesting a relationship between thickness and absorption speed. A prediction would be more specific: 'Brand X will absorb more water in 30 seconds than Brand Y because it is thicker.'"
    },
    {
      id: "sc6_q27",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "Which of the following is the best way to display results from an experiment where both the IV and DV are continuous numerical values?",
      options: [
        "A pie chart",
        "A bar chart",
        "A line graph",
        "A table only — no graph needed"
      ],
      answer: 2,
      explanation: "When both variables are continuous (e.g. distance in cm, temperature in °C), a line graph is most appropriate. It shows trends and allows you to estimate values between measured points.",
      difficulty: "challenging"
    },
    {
      id: "sc6_q28",
      topic: "Fair Tests & Reliability",
      type: "mcq",
      question: "A student tests three paper towel brands. Results: Brand A absorbs 40 mL, Brand B absorbs 38 mL, Brand C absorbs 39 mL. The student only tested each brand once. What is the problem with this?",
      options: [
        "There are too many brands",
        "The results are not reliable because they were only measured once — any could be a chance result",
        "The volumes are too similar to compare",
        "The student needed to use more water"
      ],
      answer: 1,
      explanation: "Testing each brand only once means results may not be reliable — a single measurement could be affected by a random error. Repeating each test at least three times and averaging gives a more trustworthy result."
    },
    {
      id: "sc6_q29",
      topic: "Variables",
      type: "mcq",
      question: "A student investigates the effect of temperature on the time taken for sugar to dissolve in water. Which row correctly identifies all three variable types?",
      options: [
        "IV: time to dissolve | DV: temperature | CV: amount of sugar",
        "IV: temperature | DV: time to dissolve | CV: amount of sugar and volume of water",
        "IV: amount of sugar | DV: temperature | CV: time to dissolve",
        "IV: volume of water | DV: amount of sugar | CV: temperature"
      ],
      answer: 1,
      explanation: "Temperature is changed (IV); time to dissolve is measured (DV); amount of sugar, volume of water, and stirring rate should all be kept constant (CVs) to make it a fair test.",
      difficulty: "challenging"
    },
    {
      id: "sc6_q30",
      topic: "Patterns & Conclusions",
      type: "mcq",
      question: "A student's results show no clear pattern — some results go up and some go down. What should the student do?",
      options: [
        "Write a conclusion saying the IV has no effect",
        "Make up new results that show a clear pattern",
        "Repeat the experiment more carefully, check for errors, and see if the pattern becomes clearer with more data",
        "Change the independent variable"
      ],
      answer: 2,
      explanation: "Inconclusive results should prompt the student to check their method, look for errors, and repeat measurements. Results should never be invented — that is not scientific practice."
    },
    {
      id: "sc6_q31",
      topic: "Variables",
      type: "short",
      question: "A student investigates how hand span affects grip strength. Identify: (a) the independent variable, (b) the dependent variable, and (c) one control variable.",
      answer: "(a) Independent variable: hand span (the measurement that changes between participants). (b) Dependent variable: grip strength (what is measured). (c) Control variable: any one of — which hand is used (always dominant hand), the grip strength device used, how long the person squeezes for, whether the person has warmed up.",
      explanation: "In this investigation, hand span naturally varies between people (IV), and grip strength is measured to see if there is a relationship (DV). Control variables ensure any pattern found is due to hand span, not other factors."
    },
    {
      id: "sc6_q32",
      topic: "Variables",
      type: "short",
      question: "A student tests whether the height of a ramp affects how far a toy car travels. Write a clear prediction for this experiment, including a reason.",
      answer: "I predict that the higher the ramp, the further the toy car will travel. This is because a higher ramp gives the car more gravitational potential energy before it is released, which converts to more kinetic energy as it rolls down, so it travels faster and further.",
      explanation: "A good prediction identifies the expected direction of the relationship (higher ramp → further car) and gives a scientific reason (energy). Accept any reasonable scientific justification."
    },
    {
      id: "sc6_q33",
      topic: "Fair Tests & Reliability",
      type: "short",
      question: "Explain what a fair test is and why it is important in a scientific investigation.",
      answer: "A fair test is one where only the independent variable is changed while all other variables (control variables) are kept the same. It is important because if more than one variable changed at the same time, it would be impossible to know which variable caused the change in the dependent variable. A fair test allows scientists to draw valid conclusions.",
      explanation: "This is a key concept — only one change at a time is the foundation of controlled experiments. Encourage students to always state which variables must be controlled in a given scenario."
    },
    {
      id: "sc6_q34",
      topic: "Fair Tests & Reliability",
      type: "short",
      question: "A student gets the following results for the distance a car travels from a 20 cm ramp: 55 cm, 57 cm, 12 cm, 56 cm. Describe what the student should do with the 12 cm result and calculate the mean of the remaining results.",
      answer: "The 12 cm result is anomalous (an outlier) — it is very different from the other three results and was likely caused by a random error (e.g. the car was not released cleanly). The student should repeat that trial and, if confirmed as an error, exclude it from the mean. Mean of the other three results: (55 + 57 + 56) ÷ 3 = 168 ÷ 3 = 56 cm.",
      explanation: "Mark as correct if the student identifies the anomaly, suggests repeating it, and correctly calculates the mean as 56 cm. Show working: (55 + 57 + 56) ÷ 3 = 56.",
      difficulty: "challenging"
    },
    {
      id: "sc6_q35",
      topic: "Patterns & Conclusions",
      type: "short",
      question: "A student measures sound level at different distances from a speaker and gets these results: 1 m = 80 dB, 2 m = 72 dB, 3 m = 65 dB, 4 m = 58 dB. (a) Describe the pattern in the data. (b) Write a conclusion linking the results back to the original question.",
      answer: "(a) Pattern: as the distance from the speaker increases, the sound level (in dB) decreases. (b) Conclusion: the investigation shows that the greater the distance from the speaker, the lower the sound level. This is because sound energy spreads out over a larger area as it travels further, so less energy reaches any given point.",
      explanation: "A pattern describes the trend (both variables named, direction stated). A conclusion links the results to the question and may include a scientific reason for the pattern."
    },
    {
      id: "sc6_q36",
      topic: "Patterns & Conclusions",
      type: "short",
      question: "A student investigates the effect of temperature on dissolving time for sugar. Results: 20°C = 120 s, 40°C = 65 s, 60°C = 32 s. Write a conclusion for this experiment, including a scientific explanation.",
      answer: "As the temperature of the water increased, the time taken for the sugar to dissolve decreased. At 20°C it took 120 s, while at 60°C it took only 32 s. This supports the conclusion that higher temperatures increase the rate of dissolving. This is because at higher temperatures, the water molecules have more kinetic energy and move faster, colliding with the sugar particles more frequently and breaking them apart more quickly.",
      explanation: "Accept any answer that names both variables, states the direction of the relationship with evidence from the data, and gives a particle model explanation."
    },
    {
      id: "sc6_q37",
      topic: "Predictions",
      type: "short",
      question: "A student is about to investigate whether light intensity affects how tall a plant grows over two weeks. Write a prediction for this experiment.",
      answer: "I predict that the greater the light intensity, the taller the plant will grow over two weeks. This is because plants need light energy for photosynthesis — with more light, the plant can photosynthesise more rapidly, producing more glucose for energy and growth.",
      explanation: "A prediction should state the expected direction of the relationship and include a scientific reason. Here the reason should involve photosynthesis or light as an energy source for growth."
    },
    {
      id: "sc6_q38",
      topic: "Patterns & Conclusions",
      type: "short",
      question: "Explain the difference between 'describing a pattern' and 'drawing a conclusion' in a science investigation.",
      answer: "Describing a pattern means stating what the data shows — naming both variables and the direction of change (e.g. 'as distance increases, sound level decreases'). Drawing a conclusion goes further — it answers the original question and explains why the pattern occurred using scientific knowledge (e.g. 'the further from the speaker, the lower the sound level, because sound energy spreads over a larger area'). A conclusion should be supported by the data.",
      explanation: "Students often confuse these two. Emphasise: pattern = what the data shows; conclusion = what it means (linking back to the question and science)."
    },
    {
      id: "sc6_q39",
      topic: "Variables",
      type: "short",
      question: "A student says: 'I changed the temperature AND the amount of water in my dissolving experiment.' Why is this a problem? How should the student improve the investigation?",
      answer: "Changing two variables at once is a problem because if the results change, you cannot tell whether it was the temperature or the amount of water that caused the difference — the test is not fair. To improve the investigation, the student should only change one variable (either temperature OR amount of water) at a time, keeping all other variables constant.",
      explanation: "This tests understanding of fair testing. The key idea is: change only ONE variable at a time to ensure any change in results is caused by that variable alone."
    },
    {
      id: "sc6_q40",
      topic: "Equipment",
      type: "short",
      question: "A student is measuring how temperature affects the time it takes for sugar to dissolve. Name TWO pieces of equipment needed and state what each one is used for.",
      answer: "1. Thermometer — to measure the temperature of the water (in °C) to ensure the correct temperature is used and controlled. 2. Stopwatch — to measure the time taken for the sugar to completely dissolve (in seconds). Additional acceptable answers: measuring cylinder (to measure the same volume of water each time), balance scale (to measure equal masses of sugar).",
      explanation: "Students should be able to match equipment to the variable being measured. Thermometer = temperature; stopwatch = time; measuring cylinder = volume; ruler = length/distance; balance = mass."
    }
  ]
};
