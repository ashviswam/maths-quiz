const ch05 = {
  id: 5,
  title: "Matter & Particles",
  icon: "⚗️",
  color: "#f43f5e",
  topics: ["States of Matter", "Particle Model", "Diffusion", "Brownian Motion"],
  questions: [
    {
      id: "sc5_q1",
      topic: "States of Matter",
      type: "mcq",
      question: "What are the three states of matter?",
      options: [
        "Metal, wood, and plastic",
        "Solid, liquid, and gas",
        "Hot, cold, and warm",
        "Dense, light, and medium"
      ],
      answer: 1,
      explanation: "The three states of matter are solid, liquid, and gas. Each has different properties due to the arrangement and movement of their particles."
    },
    {
      id: "sc5_q2",
      topic: "States of Matter",
      type: "mcq",
      question: "Which property is unique to solids?",
      options: [
        "Solids can flow",
        "Solids have a fixed volume but no fixed shape",
        "Solids have a fixed shape and a fixed volume",
        "Solids expand to fill their container"
      ],
      answer: 2,
      explanation: "Solids have a fixed shape and a fixed volume because their particles are held tightly in a regular arrangement and can only vibrate in place — they cannot move past each other."
    },
    {
      id: "sc5_q3",
      topic: "States of Matter",
      type: "mcq",
      question: "Which statement describes a liquid?",
      options: [
        "Has a fixed shape and fixed volume",
        "Has no fixed shape but has a fixed volume",
        "Has no fixed shape and no fixed volume",
        "Its particles are spread far apart and move randomly"
      ],
      answer: 1,
      explanation: "A liquid has a fixed volume (it doesn't expand to fill its container) but no fixed shape — it takes the shape of whatever container it is in. Liquid particles are close together but can flow past each other."
    },
    {
      id: "sc5_q4",
      topic: "States of Matter",
      type: "mcq",
      question: "Which statement describes a gas?",
      options: [
        "Has a fixed shape and fixed volume",
        "Has a fixed volume but takes the shape of its container",
        "Has no fixed shape and no fixed volume — it fills any container",
        "Its particles are tightly packed in a regular pattern"
      ],
      answer: 2,
      explanation: "A gas has no fixed shape and no fixed volume — it expands to fill whatever container it is in. Gas particles move very quickly and are spread far apart."
    },
    {
      id: "sc5_q5",
      topic: "Particle Model",
      type: "mcq",
      question: "How are particles arranged in a solid?",
      options: [
        "Spread far apart in random positions, moving quickly",
        "Close together but able to move and slide past each other",
        "Tightly packed in a regular, ordered arrangement, vibrating in fixed positions",
        "In small clusters spread around a large empty space"
      ],
      answer: 2,
      explanation: "In a solid, particles are tightly packed in a regular (ordered) arrangement. They vibrate about fixed positions but cannot move past each other, which is why solids have a fixed shape."
    },
    {
      id: "sc5_q6",
      topic: "Particle Model",
      type: "mcq",
      question: "How are particles arranged in a liquid?",
      options: [
        "Tightly packed in a regular pattern with no movement",
        "Close together but randomly arranged, able to flow past each other",
        "Spread far apart with large gaps between them",
        "In a perfectly ordered grid, sliding smoothly"
      ],
      answer: 1,
      explanation: "In a liquid, particles are close together (similar density to solids) but arranged randomly, and they can slide past each other. This allows liquids to flow and take the shape of their container."
    },
    {
      id: "sc5_q7",
      topic: "Particle Model",
      type: "mcq",
      question: "How are particles arranged in a gas?",
      options: [
        "Closely packed in a regular grid",
        "Closely packed but able to move",
        "Spread far apart, moving rapidly in random directions with large spaces between them",
        "In small groups that bounce around together"
      ],
      answer: 2,
      explanation: "In a gas, particles are spread far apart with large gaps between them. They move rapidly and randomly in all directions, which is why gases expand to fill their container."
    },
    {
      id: "sc5_q8",
      topic: "Particle Model",
      type: "mcq",
      question: "Why can solids not be compressed (squashed into a smaller volume)?",
      options: [
        "Solids are too hard",
        "The particles in a solid are already as close together as possible — there is no space between them",
        "Solids are held together by magnetism",
        "The particles in a solid move too fast to be pushed together"
      ],
      answer: 1,
      explanation: "Solids cannot be easily compressed because the particles are already packed very closely together with virtually no empty space between them. There is nowhere for the particles to move closer to."
    },
    {
      id: "sc5_q9",
      topic: "Particle Model",
      type: "mcq",
      question: "Why can gases be compressed much more easily than solids or liquids?",
      options: [
        "Gas particles are softer than solid or liquid particles",
        "There are large gaps between gas particles, so they can be pushed closer together",
        "Gas particles are moving too slowly to resist being compressed",
        "Gases have more particles than solids or liquids"
      ],
      answer: 1,
      explanation: "Gas particles are spread far apart with large spaces between them. When compressed, the particles are pushed closer together into the available gaps — making gases far easier to compress than solids or liquids."
    },
    {
      id: "sc5_q10",
      topic: "Particle Model",
      type: "mcq",
      question: "When a solid melts into a liquid, what happens to the particles?",
      options: [
        "The particles break apart and disappear",
        "The particles gain energy, vibrate more, and eventually break free from their fixed positions",
        "The particles shrink in size as they gain heat",
        "New particles are created by the heat"
      ],
      answer: 1,
      explanation: "When heated, solid particles gain kinetic energy and vibrate more vigorously. Eventually they have enough energy to break free from their fixed positions and flow past each other — the solid becomes a liquid (melting)."
    },
    {
      id: "sc5_q11",
      topic: "Particle Model",
      type: "mcq",
      question: "What happens to particles when a liquid evaporates into a gas?",
      options: [
        "The particles merge together to form larger particles",
        "The fastest-moving particles gain enough energy to escape the liquid surface and become gas particles",
        "All particles suddenly jump apart at the same time",
        "The particles shrink and take up less space"
      ],
      answer: 1,
      explanation: "Evaporation occurs when the fastest-moving particles at the liquid surface gain enough energy to overcome the attractive forces holding them in the liquid, and they escape as gas particles.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q12",
      topic: "Diffusion",
      type: "mcq",
      question: "What is diffusion?",
      options: [
        "The movement of particles from an area of low concentration to an area of high concentration",
        "The net movement of particles from an area of high concentration to an area of low concentration",
        "The process by which solids dissolve in liquids",
        "The movement of water through a selectively permeable membrane"
      ],
      answer: 1,
      explanation: "Diffusion is the net (overall) movement of particles from a region of high concentration to a region of low concentration. It occurs because particles move randomly and tend to spread out."
    },
    {
      id: "sc5_q13",
      topic: "Diffusion",
      type: "mcq",
      question: "Why does a smell from perfume spread across a room?",
      options: [
        "Wind in the room pushes the perfume molecules across",
        "The perfume molecules heat up and expand",
        "Perfume molecules diffuse from high concentration (near bottle) to low concentration (across the room)",
        "The perfume molecules grow in size until they fill the room"
      ],
      answer: 2,
      explanation: "Perfume molecules move from the area of high concentration near the bottle to areas of low concentration further away. This random spreading of particles is diffusion."
    },
    {
      id: "sc5_q14",
      topic: "Diffusion",
      type: "mcq",
      question: "How does temperature affect the rate of diffusion?",
      options: [
        "Higher temperature slows diffusion because particles move more carefully",
        "Temperature has no effect on diffusion",
        "Higher temperature increases the rate of diffusion because particles move faster",
        "Lower temperature increases the rate of diffusion"
      ],
      answer: 2,
      explanation: "At higher temperatures, particles have more kinetic energy and move faster. Faster-moving particles spread out more quickly, so diffusion is faster at higher temperatures."
    },
    {
      id: "sc5_q15",
      topic: "Diffusion",
      type: "mcq",
      question: "Does diffusion happen faster in gases or in liquids, and why?",
      options: [
        "Faster in liquids — liquid particles are closer together",
        "At the same rate — diffusion speed is not affected by the state of matter",
        "Faster in gases — gas particles move much faster and have more space to move through",
        "Faster in solids — solid particles vibrate constantly"
      ],
      answer: 2,
      explanation: "Diffusion is faster in gases than in liquids because gas particles move much faster and have large spaces between them, allowing them to spread quickly. In liquids, particles are closer and move more slowly.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q16",
      topic: "Brownian Motion",
      type: "mcq",
      question: "What is Brownian motion?",
      options: [
        "The circular movement of planets around the Sun",
        "The random, jiggling movement of small visible particles (like pollen or smoke) caused by collisions with invisible moving molecules",
        "The flow of water molecules through a membrane",
        "The gradual settling of particles in a liquid"
      ],
      answer: 1,
      explanation: "Brownian motion is the random, unpredictable movement of small particles suspended in a fluid (liquid or gas) caused by constant collisions with the much smaller, fast-moving molecules of the fluid."
    },
    {
      id: "sc5_q17",
      topic: "Brownian Motion",
      type: "mcq",
      question: "Who first observed Brownian motion?",
      options: ["Albert Einstein", "Robert Brown", "Isaac Newton", "Louis Pasteur"],
      answer: 1,
      explanation: "Robert Brown, a botanist, first observed this motion in 1827 when he noticed pollen grains suspended in water jiggling randomly under his microscope. The phenomenon was later named after him."
    },
    {
      id: "sc5_q18",
      topic: "Brownian Motion",
      type: "mcq",
      question: "Why is Brownian motion considered evidence for the particle model?",
      options: [
        "It shows that all matter is made of waves",
        "It shows that particles in fluids are stationary",
        "The random jiggling of visible particles can only be explained by them being constantly hit by invisible, fast-moving molecules",
        "It shows that particles are destroyed and created randomly"
      ],
      answer: 2,
      explanation: "Brownian motion provides evidence for the particle model because the random jiggling of visible particles (like smoke particles) can only be explained if they are being bombarded from all sides by invisible, rapidly moving molecules.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q19",
      topic: "Brownian Motion",
      type: "mcq",
      question: "In a classic experiment, smoke particles are observed under a microscope in a glass cell. What do you observe?",
      options: [
        "Smoke particles move in a straight line",
        "Smoke particles are stationary",
        "Smoke particles move in a random, zigzag path",
        "Smoke particles all move in the same direction"
      ],
      answer: 2,
      explanation: "Smoke particles move in a random, erratic zigzag path because they are being hit from all sides by the invisible air molecules around them. The hits are random and unequal, giving the particles a random motion."
    },
    {
      id: "sc5_q20",
      topic: "Particle Model",
      type: "mcq",
      question: "What is the name for the change of state from solid to liquid?",
      options: ["Evaporation", "Condensation", "Melting", "Sublimation"],
      answer: 2,
      explanation: "Melting is the change of state from solid to liquid. It occurs when a solid is heated and its particles gain enough energy to break free from their fixed positions and flow."
    },
    {
      id: "sc5_q21",
      topic: "Particle Model",
      type: "mcq",
      question: "What is the name for the change of state from gas to liquid?",
      options: ["Freezing", "Melting", "Evaporation", "Condensation"],
      answer: 3,
      explanation: "Condensation is the change of state from gas to liquid. It occurs when gas particles lose energy (e.g. when cooled) and slow down enough to be attracted back together into a liquid."
    },
    {
      id: "sc5_q22",
      topic: "Particle Model",
      type: "mcq",
      question: "What causes air pressure?",
      options: [
        "The weight of the atmosphere pressing down",
        "Gas particles constantly colliding with surfaces",
        "The movement of wind across a surface",
        "Gravity pulling air molecules into surfaces"
      ],
      answer: 1,
      explanation: "Air pressure is caused by the constant collisions of gas (air) particles with any surface they encounter. The more frequent and energetic these collisions, the greater the pressure."
    },
    {
      id: "sc5_q23",
      topic: "Particle Model",
      type: "mcq",
      question: "If the temperature of a gas in a sealed container increases, what happens to the pressure?",
      options: [
        "Pressure decreases because particles move slower",
        "Pressure stays the same",
        "Pressure increases because particles move faster and hit the walls more often and with more force",
        "Pressure decreases because the particles spread out"
      ],
      answer: 2,
      explanation: "When temperature increases, gas particles move faster, colliding with the container walls more frequently and with greater force. This increases the pressure inside the container.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q24",
      topic: "States of Matter",
      type: "mcq",
      question: "Convert 5 nm to metres.",
      options: ["5 × 10⁻⁶ m", "5 × 10⁻⁹ m", "5 × 10⁻¹² m", "5 × 10⁶ m"],
      answer: 1,
      explanation: "1 nanometre (nm) = 1 × 10⁻⁹ metres. Therefore, 5 nm = 5 × 10⁻⁹ m. Nanometres are used to measure the size of atoms and molecules.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q25",
      topic: "States of Matter",
      type: "mcq",
      question: "A particle has a diameter of 3 × 10⁻⁹ m. How many nanometres is this?",
      options: ["3 nm", "0.3 nm", "300 nm", "30 nm"],
      answer: 0,
      explanation: "Since 1 nm = 1 × 10⁻⁹ m, a particle 3 × 10⁻⁹ m in diameter is 3 nm. Nanometres are a convenient unit for describing particle sizes.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q26",
      topic: "Particle Model",
      type: "mcq",
      question: "In an experiment, a student changes the temperature and measures how far a dye spreads in water. What is the independent variable (IV)?",
      options: [
        "How far the dye spreads",
        "The type of dye used",
        "The temperature of the water",
        "The volume of water in the container"
      ],
      answer: 2,
      explanation: "The independent variable (IV) is the variable that the experimenter deliberately changes. Here the student is changing the temperature, so temperature is the IV."
    },
    {
      id: "sc5_q27",
      topic: "Particle Model",
      type: "mcq",
      question: "In the same diffusion experiment, what is the dependent variable (DV)?",
      options: [
        "The temperature of the water",
        "The type of container used",
        "The time the experiment takes",
        "How far the dye spreads (the distance or rate of diffusion)"
      ],
      answer: 3,
      explanation: "The dependent variable (DV) is what you measure as a result of changing the IV. Since the student changes temperature to see how far the dye spreads, the distance/rate of diffusion is the DV."
    },
    {
      id: "sc5_q28",
      topic: "Particle Model",
      type: "mcq",
      question: "In the diffusion experiment, what would be a control variable (CV)?",
      options: [
        "The temperature of the water",
        "How far the dye spreads",
        "The volume of water or the concentration of dye — kept the same in each trial",
        "The colour of the container"
      ],
      answer: 2,
      explanation: "Control variables (CVs) are factors kept constant so they do not affect the results. In this experiment, the volume of water and the concentration of dye should be kept the same in each trial."
    },
    {
      id: "sc5_q29",
      topic: "Diffusion",
      type: "mcq",
      question: "A drop of food colouring is placed in cold water and another in hot water. In which beaker will the dye spread faster, and why?",
      options: [
        "Cold water — cold particles move faster",
        "Hot water — particles have more energy and move faster, so diffusion is quicker",
        "Both will spread at the same rate",
        "Cold water — the dye sinks faster in cold water"
      ],
      answer: 1,
      explanation: "In hot water, both the water molecules and dye particles have more kinetic energy and move faster. This leads to faster spreading of the dye — a higher rate of diffusion."
    },
    {
      id: "sc5_q30",
      topic: "States of Matter",
      type: "mcq",
      question: "Which state of matter has the highest density?",
      options: ["Gas", "Liquid", "Solid", "All states have the same density"],
      answer: 2,
      explanation: "Solids generally have the highest density because their particles are packed most closely together. Gases have the lowest density because their particles are spread far apart."
    },
    {
      id: "sc5_q31",
      topic: "Particle Model",
      type: "mcq",
      question: "What is sublimation?",
      options: [
        "The change from liquid to gas",
        "The change from gas to liquid",
        "The change directly from solid to gas without passing through the liquid state",
        "The change from liquid to solid"
      ],
      answer: 2,
      explanation: "Sublimation is when a substance changes directly from solid to gas without becoming a liquid first. Dry ice (solid carbon dioxide) and iodine crystals are common examples.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q32",
      topic: "Brownian Motion",
      type: "mcq",
      question: "If you heated the gas in the Brownian motion experiment, what would happen to the movement of smoke particles?",
      options: [
        "They would move more slowly",
        "They would stop moving",
        "They would move more rapidly and erratically",
        "They would move in straight lines"
      ],
      answer: 2,
      explanation: "Heating the gas gives the air molecules more kinetic energy. They move faster and collide with the smoke particles more forcefully, causing the smoke particles to move more rapidly and erratically.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q33",
      topic: "Diffusion",
      type: "mcq",
      question: "Oxygen diffuses from the lungs into the blood. Why does it move in this direction?",
      options: [
        "Blood actively pumps oxygen into it from the lungs",
        "Oxygen concentration is higher in the lungs than in the blood, so it diffuses down the concentration gradient",
        "Oxygen is heavier than blood so it sinks into it",
        "The heart creates pressure that forces oxygen into the blood"
      ],
      answer: 1,
      explanation: "Diffusion always occurs from high concentration to low concentration. Freshly inhaled air in the lungs has a high concentration of oxygen, while blood arriving at the lungs has already delivered oxygen and has a low concentration — so oxygen diffuses from lungs into blood."
    },
    {
      id: "sc5_q34",
      topic: "States of Matter",
      type: "mcq",
      question: "Which of the following correctly matches the state of matter with its property?",
      options: [
        "Gas: fixed shape, fixed volume",
        "Liquid: fixed shape, variable volume",
        "Solid: variable shape, fixed volume",
        "Gas: variable shape, variable volume"
      ],
      answer: 3,
      explanation: "A gas has no fixed shape and no fixed volume — it fills whatever container it is placed in. Solids have fixed shape and fixed volume; liquids have variable shape but fixed volume."
    },
    {
      id: "sc5_q35",
      topic: "Particle Model",
      type: "mcq",
      question: "Why do liquids and gases flow, but solids do not?",
      options: [
        "Liquids and gases are lighter than solids",
        "In liquids and gases, particles can move past each other; in solids, particles are held in fixed positions",
        "Liquids and gases have fewer particles than solids",
        "Solid particles are too large to move"
      ],
      answer: 1,
      explanation: "In liquids and gases, particles have enough energy to move past each other, allowing the substance to flow. In solids, strong forces hold particles in fixed positions — they can only vibrate, not flow."
    },
    {
      id: "sc5_q36",
      topic: "States of Matter",
      type: "short",
      question: "Describe the particle arrangement and movement in solids, liquids, and gases.",
      answer: "Solid: particles tightly packed in a regular pattern, can only vibrate — fixed shape and volume. Liquid: particles close together but can move past each other — fixed volume, takes the shape of its container. Gas: particles far apart, moving rapidly in all directions — no fixed shape or volume, fills any container."
    },
    {
      id: "sc5_q37",
      topic: "Brownian Motion",
      type: "short",
      question: "Explain what Brownian motion is and why it is evidence for the particle model.",
      answer: "Brownian motion is the random, erratic movement of small visible particles (like pollen grains or smoke particles) when observed under a microscope. It is evidence for the particle model because the random motion is caused by the uneven bombardment of the visible particles by invisible, constantly moving molecules. This supports the idea that matter is made of tiny, moving particles."
    },
    {
      id: "sc5_q38",
      topic: "Diffusion",
      type: "short",
      question: "Explain diffusion using the particle model. Give a real-life example.",
      answer: "Diffusion is the net movement of particles from a region of high concentration to a region of low concentration, until evenly spread. This happens because particles are in constant random motion and naturally spread out. Example: the smell of perfume spreading across a room — perfume molecules move from the high concentration near the bottle to the low concentration elsewhere.",
      difficulty: "challenging"
    },
    {
      id: "sc5_q39",
      topic: "Air Pressure",
      type: "short",
      question: "Using the particle model, explain why air exerts pressure on surfaces.",
      answer: "Air is made of gas particles (mainly nitrogen and oxygen molecules) that move randomly at high speed. These particles constantly collide with all surfaces they encounter — walls, skin, the inside of tyres. Each collision exerts a tiny force on the surface. Billions of these collisions per second create a continuous force per unit area, which we call air pressure."
    },
    {
      id: "sc5_q40",
      topic: "Scientific Method",
      type: "short",
      question: "A student investigates how temperature affects the rate of diffusion of food colouring in water. Identify the independent variable, dependent variable, and one control variable.",
      answer: "Independent variable (IV): the temperature of the water. Dependent variable (DV): the rate of diffusion (e.g. how long it takes the colour to spread, or how far it spreads in a set time). Control variable (CV): any one of — volume of water, amount/type of food colouring, size/shape of container, starting position of the drop.",
      difficulty: "challenging"
    }
  ]
};
