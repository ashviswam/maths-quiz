const ch02 = {
  id: 2,
  title: "Mass, Weight & Gravity",
  icon: "⚖️",
  color: "#f59e0b",
  topics: ["Mass vs Weight", "Gravity on Planets", "Newtons", "Free Fall"],
  questions: [
    {
      id: "sc2_q1",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "What is mass?",
      options: [
        "The force of gravity pulling on an object",
        "The amount of matter in an object",
        "The speed at which an object falls",
        "The volume of space an object takes up"
      ],
      answer: 1,
      explanation: "Mass is the amount of matter in an object. It is measured in kilograms (kg) or grams (g) and does not change regardless of where you are in the universe."
    },
    {
      id: "sc2_q2",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "What is weight?",
      options: [
        "The amount of matter in an object",
        "The size of an object",
        "The gravitational force acting on an object",
        "The density of an object"
      ],
      answer: 2,
      explanation: "Weight is the gravitational force pulling on an object. It depends on both the object's mass and the strength of gravity where the object is located."
    },
    {
      id: "sc2_q3",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "What unit is used to measure mass?",
      options: ["Newtons (N)", "Kilograms (kg)", "Metres (m)", "Joules (J)"],
      answer: 1,
      explanation: "Mass is measured in kilograms (kg) or grams (g). Newtons are used for weight (force), not mass."
    },
    {
      id: "sc2_q4",
      topic: "Newtons",
      type: "mcq",
      question: "What unit is used to measure weight?",
      options: ["Kilograms (kg)", "Grams (g)", "Newtons (N)", "Metres per second (m/s)"],
      answer: 2,
      explanation: "Weight is a force, so it is measured in Newtons (N), named after Sir Isaac Newton. On Earth, a 1 kg mass has a weight of approximately 10 N."
    },
    {
      id: "sc2_q5",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "An astronaut has a mass of 80 kg on Earth. What is their mass on the Moon?",
      options: ["13 kg", "480 kg", "80 kg", "8 kg"],
      answer: 2,
      explanation: "Mass does not change with location — the astronaut still has 80 kg of matter. Only weight changes because the Moon has weaker gravity than Earth."
    },
    {
      id: "sc2_q6",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "An astronaut weighs 800 N on Earth. What happens to their weight on the Moon (where gravity is about 1/6 of Earth's)?",
      options: [
        "It stays 800 N",
        "It increases to 4800 N",
        "It decreases to about 133 N",
        "It becomes zero"
      ],
      answer: 2,
      explanation: "Weight depends on gravity. The Moon's gravity is about 1/6 of Earth's, so the astronaut's weight would be approximately 800 ÷ 6 ≈ 133 N on the Moon."
    },
    {
      id: "sc2_q7",
      topic: "Newtons",
      type: "mcq",
      question: "What is the formula for calculating weight?",
      options: ["W = m ÷ g", "W = m + g", "W = m × g", "W = g ÷ m"],
      answer: 2,
      explanation: "Weight (W) = mass (m) × gravitational field strength (g). On Earth, g = 10 N/kg, so a 5 kg object has a weight of 5 × 10 = 50 N."
    },
    {
      id: "sc2_q8",
      topic: "Newtons",
      type: "mcq",
      question: "On Earth, g = 10 N/kg. What is the weight of a 6 kg bag?",
      options: ["6 N", "16 N", "60 N", "600 N"],
      answer: 2,
      explanation: "Using W = m × g: W = 6 kg × 10 N/kg = 60 N. The bag has a weight of 60 Newtons on Earth."
    },
    {
      id: "sc2_q9",
      topic: "Newtons",
      type: "mcq",
      question: "A book has a weight of 25 N on Earth (g = 10 N/kg). What is its mass?",
      options: ["250 kg", "2.5 kg", "25 kg", "0.25 kg"],
      answer: 1,
      explanation: "Rearranging W = m × g gives m = W ÷ g = 25 N ÷ 10 N/kg = 2.5 kg. The book has a mass of 2.5 kg."
    },
    {
      id: "sc2_q10",
      topic: "Newtons",
      type: "mcq",
      question: "A rock has a mass of 15 kg. What is its weight on Earth (g = 10 N/kg)?",
      options: ["1.5 N", "25 N", "150 N", "1500 N"],
      answer: 2,
      explanation: "W = m × g = 15 kg × 10 N/kg = 150 N. The rock weighs 150 Newtons on Earth."
    },
    {
      id: "sc2_q11",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "Why do you weigh less on the Moon than on Earth?",
      options: [
        "There is no atmosphere on the Moon",
        "The Moon has weaker gravity than Earth",
        "You lose mass during spaceflight",
        "The Moon is further from the Sun"
      ],
      answer: 1,
      explanation: "The Moon is much less massive than Earth, so its gravitational pull is weaker — about 1/6 of Earth's gravity. This means objects weigh less on the Moon, even though their mass is unchanged."
    },
    {
      id: "sc2_q12",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "On Jupiter, gravity is about 2.5 times stronger than on Earth. If your mass is 50 kg, how much would you weigh on Jupiter? (g on Earth = 10 N/kg)",
      options: ["500 N", "1250 N", "200 N", "50 N"],
      answer: 1,
      explanation: "On Jupiter, g = 10 × 2.5 = 25 N/kg. Weight = 50 kg × 25 N/kg = 1250 N. You would feel much heavier on Jupiter because of its stronger gravity.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q13",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "What determines the strength of a planet's gravitational field?",
      options: [
        "The planet's distance from the Sun",
        "The planet's colour and temperature",
        "The planet's mass — more massive planets have stronger gravity",
        "The number of moons orbiting the planet"
      ],
      answer: 2,
      explanation: "A planet's gravitational field strength depends mainly on its mass. More massive planets pull objects toward them more strongly. Distance from the surface also matters — gravity weakens with distance."
    },
    {
      id: "sc2_q14",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "An object weighs 100 N on Earth. On a planet where g = 5 N/kg, what does it weigh?",
      options: ["100 N", "50 N", "200 N", "500 N"],
      answer: 1,
      explanation: "First find mass: m = 100 N ÷ 10 N/kg = 10 kg. Then find weight on the new planet: W = 10 kg × 5 N/kg = 50 N. Weight halves because g is halved.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q15",
      topic: "Free Fall",
      type: "mcq",
      question: "Galileo dropped two balls of different masses from the Tower of Pisa. What did he discover?",
      options: [
        "The heavier ball hit the ground first",
        "The lighter ball hit the ground first",
        "Both balls hit the ground at the same time",
        "Neither ball hit the ground — they floated"
      ],
      answer: 2,
      explanation: "Galileo discovered that in the absence of air resistance, all objects fall at the same rate regardless of their mass. Both balls hit the ground at the same time."
    },
    {
      id: "sc2_q16",
      topic: "Free Fall",
      type: "mcq",
      question: "Why do a hammer and a feather fall at the same rate on the Moon but not on Earth?",
      options: [
        "The Moon has stronger gravity than Earth",
        "On the Moon there is no air resistance to slow the feather down",
        "Feathers are heavier on the Moon",
        "The Moon's surface is sticky"
      ],
      answer: 1,
      explanation: "On Earth, air resistance slows the feather much more than the hammer. On the Moon there is no atmosphere, so there is no air resistance — both fall under gravity alone and reach the ground together."
    },
    {
      id: "sc2_q17",
      topic: "Free Fall",
      type: "mcq",
      question: "According to Galileo's discovery, which object falls faster in a vacuum (no air)?",
      options: [
        "A 10 kg rock",
        "A 1 kg rock",
        "A 100 g ball",
        "All objects fall at the same rate"
      ],
      answer: 3,
      explanation: "In a vacuum, all objects fall at the same rate regardless of mass. This was Galileo's key discovery — gravity accelerates all masses equally in the absence of air resistance."
    },
    {
      id: "sc2_q18",
      topic: "Free Fall",
      type: "mcq",
      question: "On Earth, a skydiver eventually stops accelerating and falls at a constant speed. What is this constant speed called?",
      options: ["Terminal velocity", "Escape velocity", "Orbital velocity", "Maximum gravity"],
      answer: 0,
      explanation: "When the upward force of air resistance equals the downward force of weight, there is no net force and the skydiver stops accelerating. This constant speed is called terminal velocity.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q19",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "Which instrument measures weight?",
      options: ["A balance scale", "A ruler", "A thermometer", "A spring scale (newton meter)"],
      answer: 3,
      explanation: "A spring scale (newton meter) measures weight in Newtons by measuring how much a spring stretches under the gravitational force. A balance scale measures mass by comparing it to known masses."
    },
    {
      id: "sc2_q20",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "A balance scale is used to compare masses. Would it give the same reading on the Moon as on Earth?",
      options: [
        "No — the Moon's weaker gravity would change the reading",
        "Yes — a balance compares masses, which do not change with gravity",
        "No — masses are different on the Moon",
        "Yes — but only for objects lighter than 1 kg"
      ],
      answer: 1,
      explanation: "A balance scale compares the gravitational force on two sides. Since gravity acts equally on both sides, the reading is the same anywhere. Mass does not change with location.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q21",
      topic: "Newtons",
      type: "mcq",
      question: "A person has a mass of 70 kg. What is their weight on Earth (g = 10 N/kg)?",
      options: ["7 N", "70 N", "700 N", "7000 N"],
      answer: 2,
      explanation: "W = m × g = 70 kg × 10 N/kg = 700 N. The person's weight on Earth is 700 Newtons."
    },
    {
      id: "sc2_q22",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "On Mars, g ≈ 4 N/kg. What would a 30 kg object weigh on Mars?",
      options: ["30 N", "120 N", "300 N", "7.5 N"],
      answer: 1,
      explanation: "W = m × g = 30 kg × 4 N/kg = 120 N. The object weighs 120 N on Mars, much less than its 300 N weight on Earth."
    },
    {
      id: "sc2_q23",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "Which statement about mass is correct?",
      options: [
        "Mass changes depending on where you are in the universe",
        "Mass is measured in Newtons",
        "Mass is the same everywhere in the universe",
        "Mass is a type of force"
      ],
      answer: 2,
      explanation: "Mass is a measure of the amount of matter in an object and remains constant regardless of location. Only weight changes when gravity changes."
    },
    {
      id: "sc2_q24",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "Which of the following is an example of weight, not mass?",
      options: [
        "A bag of sugar has 1 kg of matter",
        "The pull of Earth's gravity on a 5 kg book is 50 N",
        "A person has 65 kg of matter in their body",
        "A brick contains 2 kg of material"
      ],
      answer: 1,
      explanation: "Weight is a force measured in Newtons — '50 N pull of gravity on the book' describes weight. The other options describe mass (amount of matter in kg)."
    },
    {
      id: "sc2_q25",
      topic: "Newtons",
      type: "mcq",
      question: "A weight of 200 N is measured on Earth (g = 10 N/kg). What is the object's mass?",
      options: ["2000 kg", "20 kg", "200 kg", "2 kg"],
      answer: 1,
      explanation: "m = W ÷ g = 200 N ÷ 10 N/kg = 20 kg. The object has a mass of 20 kg."
    },
    {
      id: "sc2_q26",
      topic: "Free Fall",
      type: "mcq",
      question: "What force always acts on a falling object on Earth, opposing its motion?",
      options: ["Gravity", "Magnetism", "Air resistance", "Normal force"],
      answer: 2,
      explanation: "Air resistance (drag) acts upward on a falling object, opposing its downward motion. This is why a feather falls more slowly than a hammer — it has a larger surface area relative to its mass."
    },
    {
      id: "sc2_q27",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "Earth's g = 10 N/kg and the Moon's g ≈ 1.6 N/kg. A 45 kg person's weight on the Moon is closest to:",
      options: ["450 N", "72 N", "45 N", "28 N"],
      answer: 1,
      explanation: "W = m × g = 45 kg × 1.6 N/kg = 72 N. On the Moon the person weighs about 72 N, compared to 450 N on Earth.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q28",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "Two objects have the same mass. Object A is on Earth and Object B is on the Moon. Which has the greater weight?",
      options: [
        "Object B on the Moon",
        "Object A on Earth",
        "They weigh the same because they have the same mass",
        "Neither — weight and mass are the same thing"
      ],
      answer: 1,
      explanation: "Object A on Earth has greater weight because Earth's gravity (10 N/kg) is about 6 times stronger than the Moon's gravity (1.6 N/kg). Same mass, but stronger gravity = greater weight."
    },
    {
      id: "sc2_q29",
      topic: "Newtons",
      type: "mcq",
      question: "Who is the unit 'Newton' named after?",
      options: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Edwin Hubble"],
      answer: 2,
      explanation: "The Newton is named after Sir Isaac Newton (1643–1727), who developed the laws of motion and universal gravitation, transforming our understanding of forces and motion."
    },
    {
      id: "sc2_q30",
      topic: "Free Fall",
      type: "mcq",
      question: "A student says: 'Heavier objects fall faster because gravity pulls them more.' Why is this statement incorrect?",
      options: [
        "Gravity does not pull heavier objects more",
        "Heavier objects do actually fall faster",
        "While gravity does pull heavier objects more, their greater mass needs more force to accelerate — the two effects cancel out",
        "Gravity pulls lighter objects more"
      ],
      answer: 2,
      explanation: "Heavier objects do experience a larger gravitational force, but they also have more mass (inertia) that resists acceleration. These two effects exactly cancel, so all objects fall at the same rate in a vacuum.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q31",
      topic: "Gravity on Planets",
      type: "mcq",
      question: "On which planet would you weigh the most (assuming the same mass)?",
      options: ["Mars (g ≈ 4 N/kg)", "Earth (g = 10 N/kg)", "The Moon (g ≈ 1.6 N/kg)", "Jupiter (g ≈ 25 N/kg)"],
      answer: 3,
      explanation: "You would weigh the most on Jupiter because it has the strongest gravitational field strength (g ≈ 25 N/kg) of the options. Bigger g means bigger weight for the same mass."
    },
    {
      id: "sc2_q32",
      topic: "Newtons",
      type: "mcq",
      question: "A shopping trolley has a mass of 8 kg and is loaded with 22 kg of groceries. What is the total weight on Earth (g = 10 N/kg)?",
      options: ["30 N", "220 N", "300 N", "80 N"],
      answer: 2,
      explanation: "Total mass = 8 + 22 = 30 kg. W = 30 kg × 10 N/kg = 300 N. The combined weight of the trolley and groceries is 300 N.",
      difficulty: "challenging"
    },
    {
      id: "sc2_q33",
      topic: "Mass vs Weight",
      type: "mcq",
      question: "Which is the correct SI unit for mass?",
      options: ["Newton (N)", "Kilogram (kg)", "Pound (lb)", "Litre (L)"],
      answer: 1,
      explanation: "The SI (International System) unit for mass is the kilogram (kg). The Newton is the SI unit for force (including weight). Pounds and litres are non-SI units."
    },
    {
      id: "sc2_q34",
      topic: "Free Fall",
      type: "mcq",
      question: "Which scientist is famous for the discovery that all objects fall at the same rate regardless of mass?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nicolaus Copernicus"],
      answer: 1,
      explanation: "Galileo Galilei (1564–1642) is credited with the discovery that in the absence of air resistance, all objects fall at the same rate. He is said to have tested this at the Leaning Tower of Pisa."
    },
    {
      id: "sc2_q35",
      topic: "Mass vs Weight",
      type: "short",
      question: "Explain the difference between mass and weight. Include the units used for each.",
      answer: "Mass is the amount of matter in an object, measured in kilograms (kg) or grams (g). It stays the same everywhere in the universe. Weight is the gravitational force acting on an object, measured in Newtons (N). Weight depends on the strength of gravity — so it changes from planet to planet, but mass does not."
    },
    {
      id: "sc2_q36",
      topic: "Newtons",
      type: "short",
      question: "A school bag has a mass of 4 kg. Calculate its weight on Earth (g = 10 N/kg). Show your working.",
      answer: "Weight = mass × gravitational field strength\nWeight = 4 kg × 10 N/kg = 40 N\nThe school bag weighs 40 Newtons on Earth."
    },
    {
      id: "sc2_q37",
      topic: "Free Fall",
      type: "short",
      question: "Galileo showed that mass does not affect how fast an object falls. Explain what this means with an example.",
      answer: "This means that a heavy object and a light object dropped from the same height at the same time will hit the ground simultaneously (ignoring air resistance). For example, a 10 kg bowling ball and a 1 kg book dropped together would land at the same time, because gravity accelerates all objects equally."
    },
    {
      id: "sc2_q38",
      topic: "Gravity on Planets",
      type: "short",
      question: "Explain why an astronaut weighs less on the Moon than on Earth, but their mass stays the same.",
      answer: "Mass is the amount of matter in the astronaut's body — this does not change. The Moon is smaller and less massive than Earth, so its gravitational field is weaker (about 1.6 N/kg compared to Earth's 10 N/kg). Since weight = mass × gravity, the weaker Moon gravity means less weight.",
      difficulty: "challenging"
    }
  ]
};
