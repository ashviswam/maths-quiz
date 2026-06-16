const ch04 = {
  id: 4,
  title: "Living Things",
  icon: "🧬",
  color: "#a855f7",
  topics: ["Life Processes", "Organs", "Body Systems", "Cells"],
  questions: [
    {
      id: "sc4_q1",
      topic: "Life Processes",
      type: "mcq",
      question: "Which mnemonic helps you remember the 7 life processes?",
      options: ["HOMES", "SOHCAHTOA", "MRS NERG", "BODMAS"],
      answer: 2,
      explanation: "MRS NERG stands for Movement, Respiration, Sensitivity, Nutrition, Excretion, Reproduction, and Growth — the seven life processes that all living things carry out."
    },
    {
      id: "sc4_q2",
      topic: "Life Processes",
      type: "mcq",
      question: "What does the 'R' in MRS NERG stand for?",
      options: ["Reproduction only", "Respiration only", "Both Reproduction and Respiration", "Regulation"],
      answer: 2,
      explanation: "In MRS NERG, both R's stand for Respiration (releasing energy from food) and Reproduction (producing offspring). All living things must do both."
    },
    {
      id: "sc4_q3",
      topic: "Life Processes",
      type: "mcq",
      question: "What is excretion?",
      options: [
        "Taking in food and digesting it",
        "Producing offspring",
        "Removing waste products produced by chemical reactions in the body",
        "Detecting and responding to changes in the environment"
      ],
      answer: 2,
      explanation: "Excretion is the removal of waste products made by chemical reactions inside the body. Examples include exhaling CO2, urinating urea, and sweating. Do not confuse it with egestion (removing undigested food)."
    },
    {
      id: "sc4_q4",
      topic: "Life Processes",
      type: "mcq",
      question: "A rock can be pushed and can be broken up into smaller pieces. Is it alive? Why?",
      options: [
        "Yes — it moves when pushed",
        "Yes — it can be broken into smaller pieces like growth",
        "No — it does not carry out any of the 7 life processes",
        "No — it does not make a sound"
      ],
      answer: 2,
      explanation: "A rock is not alive because it does not carry out life processes such as respiration, nutrition, or reproduction. Being moved by a force is not the same as the self-directed movement of living things."
    },
    {
      id: "sc4_q5",
      topic: "Life Processes",
      type: "mcq",
      question: "Which life process describes a plant turning toward the light?",
      options: ["Nutrition", "Excretion", "Sensitivity", "Reproduction"],
      answer: 2,
      explanation: "Sensitivity (also called response or irritability) is the ability to detect and respond to changes in the environment (stimuli). A plant growing toward light is responding to a stimulus."
    },
    {
      id: "sc4_q6",
      topic: "Life Processes",
      type: "mcq",
      question: "What is respiration (as a life process)?",
      options: [
        "Breathing in oxygen through the lungs",
        "The chemical process in cells that releases energy from food",
        "Moving carbon dioxide out of the body",
        "Absorbing water through the roots of a plant"
      ],
      answer: 1,
      explanation: "Respiration is the chemical process that happens inside cells to release energy from glucose. It is not the same as breathing — breathing is how we get oxygen into the lungs."
    },
    {
      id: "sc4_q7",
      topic: "Organs",
      type: "mcq",
      question: "What is the main function of the lungs?",
      options: [
        "To pump blood around the body",
        "To digest food",
        "To exchange oxygen and carbon dioxide between air and blood",
        "To filter waste from the blood"
      ],
      answer: 2,
      explanation: "The lungs are organs of gas exchange. Oxygen from inhaled air passes into the bloodstream, and carbon dioxide from the blood passes into the air to be exhaled."
    },
    {
      id: "sc4_q8",
      topic: "Organs",
      type: "mcq",
      question: "What is the main function of the heart?",
      options: [
        "To store blood",
        "To pump blood around the body",
        "To make new blood cells",
        "To exchange gases with the air"
      ],
      answer: 1,
      explanation: "The heart is a muscular pump that contracts rhythmically to push blood around the body through blood vessels, delivering oxygen and nutrients to all cells and removing waste products."
    },
    {
      id: "sc4_q9",
      topic: "Organs",
      type: "mcq",
      question: "What is the main function of the kidneys?",
      options: [
        "To produce digestive enzymes",
        "To pump blood",
        "To filter waste products (such as urea) from the blood and produce urine",
        "To absorb nutrients from digested food"
      ],
      answer: 2,
      explanation: "The kidneys filter the blood, removing waste products like urea and excess water to form urine. Urine passes to the bladder before being excreted from the body."
    },
    {
      id: "sc4_q10",
      topic: "Organs",
      type: "mcq",
      question: "What is the role of the liver?",
      options: [
        "To filter blood, produce bile for digestion, and store glycogen",
        "To pump blood around the body",
        "To exchange gases in the lungs",
        "To move food through the digestive system"
      ],
      answer: 0,
      explanation: "The liver has many functions including filtering toxins from blood, producing bile to aid fat digestion, storing glycogen (energy), and making proteins. It is one of the most versatile organs.",
      difficulty: "challenging"
    },
    {
      id: "sc4_q11",
      topic: "Organs",
      type: "mcq",
      question: "What is the function of the diaphragm?",
      options: [
        "To pump blood to the lungs",
        "To filter waste from the blood",
        "To contract and relax to change the volume of the chest cavity, enabling breathing",
        "To store bile produced by the liver"
      ],
      answer: 2,
      explanation: "The diaphragm is a dome-shaped muscle below the lungs. When it contracts, it flattens and increases the chest volume, drawing air into the lungs. When it relaxes, air is pushed out."
    },
    {
      id: "sc4_q12",
      topic: "Organs",
      type: "mcq",
      question: "Where is digested food absorbed into the bloodstream?",
      options: ["Stomach", "Large intestine", "Small intestine", "Liver"],
      answer: 2,
      explanation: "The small intestine is where most digestion is completed and where nutrients (glucose, amino acids, fatty acids) are absorbed into the bloodstream through tiny finger-like projections called villi."
    },
    {
      id: "sc4_q13",
      topic: "Organs",
      type: "mcq",
      question: "What does the bladder do?",
      options: [
        "Filters waste from the blood",
        "Stores urine before it is excreted",
        "Digests food",
        "Pumps blood to the kidneys"
      ],
      answer: 1,
      explanation: "The bladder is a stretchy muscular sac that stores urine produced by the kidneys until it is ready to be excreted from the body through the urethra."
    },
    {
      id: "sc4_q14",
      topic: "Life Processes",
      type: "mcq",
      question: "What is photosynthesis?",
      options: [
        "The process by which animals break down glucose to release energy",
        "The process by which plants use light energy, carbon dioxide, and water to make glucose and oxygen",
        "The process by which plants take in oxygen and release carbon dioxide",
        "The process by which fungi break down dead matter"
      ],
      answer: 1,
      explanation: "Photosynthesis is the process plants use to make food. Using light energy (from the Sun), carbon dioxide (from the air), and water (from the soil), they produce glucose and oxygen."
    },
    {
      id: "sc4_q15",
      topic: "Life Processes",
      type: "mcq",
      question: "What are the raw materials (reactants) for photosynthesis?",
      options: [
        "Glucose and oxygen",
        "Carbon dioxide and water",
        "Nitrogen and carbon dioxide",
        "Water and glucose"
      ],
      answer: 1,
      explanation: "The reactants of photosynthesis are carbon dioxide (absorbed from the air through the leaves) and water (absorbed through the roots). Light energy drives the reaction."
    },
    {
      id: "sc4_q16",
      topic: "Life Processes",
      type: "mcq",
      question: "What are the products of photosynthesis?",
      options: [
        "Carbon dioxide and water",
        "Glucose and carbon dioxide",
        "Glucose and oxygen",
        "Oxygen and nitrogen"
      ],
      answer: 2,
      explanation: "Photosynthesis produces glucose (which the plant uses for energy and growth) and oxygen (which is released into the air as a by-product). This is why plants are essential for life on Earth."
    },
    {
      id: "sc4_q17",
      topic: "Cells",
      type: "mcq",
      question: "Which cell structure controls all the activities of the cell and contains DNA?",
      options: ["Cell membrane", "Cytoplasm", "Nucleus", "Cell wall"],
      answer: 2,
      explanation: "The nucleus is the control centre of the cell. It contains DNA (genetic information) that directs all the cell's activities, including growth, metabolism, and reproduction."
    },
    {
      id: "sc4_q18",
      topic: "Cells",
      type: "mcq",
      question: "What is the function of the cell membrane?",
      options: [
        "To produce energy for the cell",
        "To control what enters and leaves the cell",
        "To make proteins",
        "To carry out photosynthesis"
      ],
      answer: 1,
      explanation: "The cell membrane is a thin, flexible boundary around the cell. It controls what substances can enter and leave the cell, keeping the internal environment stable."
    },
    {
      id: "sc4_q19",
      topic: "Cells",
      type: "mcq",
      question: "Which of these structures is found in plant cells but NOT in animal cells?",
      options: ["Nucleus", "Cytoplasm", "Cell membrane", "Cell wall"],
      answer: 3,
      explanation: "Plant cells have a rigid cell wall made of cellulose surrounding the cell membrane. Animal cells do not have a cell wall — only a cell membrane. The cell wall gives the plant cell shape and support."
    },
    {
      id: "sc4_q20",
      topic: "Cells",
      type: "mcq",
      question: "What is the function of chloroplasts?",
      options: [
        "To store water in plant cells",
        "To carry out photosynthesis using light energy",
        "To provide structure and support for the plant cell",
        "To control what enters and leaves the cell"
      ],
      answer: 1,
      explanation: "Chloroplasts are organelles found in plant cells (and some algae) that contain the green pigment chlorophyll. They are the sites of photosynthesis, where light energy is converted into glucose."
    },
    {
      id: "sc4_q21",
      topic: "Cells",
      type: "mcq",
      question: "What is the large, fluid-filled space in a plant cell called?",
      options: ["Cytoplasm", "Vacuole", "Nucleus", "Chloroplast"],
      answer: 1,
      explanation: "The central vacuole in a plant cell is a large, fluid-filled space that helps maintain the cell's shape (turgor pressure), stores nutrients, and can store waste products."
    },
    {
      id: "sc4_q22",
      topic: "Cells",
      type: "mcq",
      question: "What is cytoplasm?",
      options: [
        "The rigid outer layer of a plant cell",
        "The jelly-like fluid that fills the cell and is where chemical reactions take place",
        "The green pigment in plant cells",
        "The genetic material of the cell"
      ],
      answer: 1,
      explanation: "Cytoplasm is the jelly-like substance that fills the cell between the nucleus and the cell membrane. Most of the cell's chemical reactions take place in the cytoplasm."
    },
    {
      id: "sc4_q23",
      topic: "Body Systems",
      type: "mcq",
      question: "Which body system is responsible for moving blood around the body?",
      options: ["Nervous system", "Digestive system", "Circulatory system", "Urinary system"],
      answer: 2,
      explanation: "The circulatory system consists of the heart, blood vessels (arteries, veins, capillaries), and blood. It transports oxygen, nutrients, hormones, and waste products around the body."
    },
    {
      id: "sc4_q24",
      topic: "Body Systems",
      type: "mcq",
      question: "Which body system includes the lungs and diaphragm?",
      options: ["Digestive system", "Urinary system", "Locomotor system", "Respiratory system"],
      answer: 3,
      explanation: "The respiratory (breathing) system includes the lungs, diaphragm, trachea, bronchi, and bronchioles. Its job is to bring oxygen into the body and remove carbon dioxide."
    },
    {
      id: "sc4_q25",
      topic: "Body Systems",
      type: "mcq",
      question: "Which body system includes kidneys and bladder?",
      options: ["Digestive system", "Urinary system", "Circulatory system", "Nervous system"],
      answer: 1,
      explanation: "The urinary system includes the kidneys, ureters, bladder, and urethra. It is responsible for filtering the blood, producing urine, and excreting waste from the body."
    },
    {
      id: "sc4_q26",
      topic: "Body Systems",
      type: "mcq",
      question: "What is the role of the nervous system?",
      options: [
        "To digest food and absorb nutrients",
        "To pump blood around the body",
        "To detect stimuli and send electrical signals to coordinate body responses",
        "To produce hormones for growth"
      ],
      answer: 2,
      explanation: "The nervous system (brain, spinal cord, and nerves) detects information (stimuli) from inside and outside the body, processes it, and sends electrical signals to coordinate responses."
    },
    {
      id: "sc4_q27",
      topic: "Body Systems",
      type: "mcq",
      question: "Which body system includes bones and muscles working together to allow movement?",
      options: ["Circulatory system", "Locomotor system", "Digestive system", "Nervous system"],
      answer: 1,
      explanation: "The locomotor system (also called the musculoskeletal system) includes bones, muscles, cartilage, and joints. It enables the body to move and provides structure and support."
    },
    {
      id: "sc4_q28",
      topic: "Cells",
      type: "mcq",
      question: "A student looks at two cells under a microscope. Cell A has chloroplasts; Cell B does not. What can you conclude?",
      options: [
        "Cell A is an animal cell; Cell B is a plant cell",
        "Cell A is a plant cell; Cell B could be an animal cell",
        "Both cells are plant cells",
        "Cell B is a plant cell because it has no chloroplasts"
      ],
      answer: 1,
      explanation: "Chloroplasts are only found in plant cells (and algae). So Cell A must be a plant cell. Cell B could be an animal cell (or a plant cell that does not photosynthesise, such as a root cell).",
      difficulty: "challenging"
    },
    {
      id: "sc4_q29",
      topic: "Life Processes",
      type: "mcq",
      question: "Which of the following best describes nutrition as a life process?",
      options: [
        "Removing waste products from the body",
        "Taking in and using food for energy, growth, and repair",
        "Releasing energy from food inside cells",
        "Producing offspring"
      ],
      answer: 1,
      explanation: "Nutrition involves taking in food (or making it via photosynthesis) and using it to provide energy, raw materials for growth, and materials for repair. It is not the same as respiration (releasing energy from food)."
    },
    {
      id: "sc4_q30",
      topic: "Cells",
      type: "mcq",
      question: "Which tissue in plants transports water from the roots to the leaves?",
      options: ["Phloem", "Xylem", "Root hair", "Epidermis"],
      answer: 1,
      explanation: "Xylem is the plant tissue that transports water and dissolved minerals upward from the roots to the rest of the plant. Phloem transports sugars (made in photosynthesis) around the plant."
    },
    {
      id: "sc4_q31",
      topic: "Cells",
      type: "mcq",
      question: "What is the function of root hair cells in plants?",
      options: [
        "To carry out photosynthesis underground",
        "To anchor the plant deeply in the soil",
        "To absorb water and mineral salts from the soil",
        "To transport sugars from leaves to roots"
      ],
      answer: 2,
      explanation: "Root hair cells have a long hair-like extension that greatly increases the surface area for absorbing water and dissolved mineral salts from the soil. Their large surface area makes them very efficient at absorption.",
      difficulty: "challenging"
    },
    {
      id: "sc4_q32",
      topic: "Body Systems",
      type: "mcq",
      question: "What does the digestive system do?",
      options: [
        "Transports oxygen to cells",
        "Breaks down food into small molecules that can be absorbed into the bloodstream",
        "Removes waste gases from the blood",
        "Coordinates responses to stimuli"
      ],
      answer: 1,
      explanation: "The digestive system (mouth, oesophagus, stomach, small intestine, large intestine, rectum) breaks down food mechanically and chemically into small soluble molecules that can be absorbed into the blood."
    },
    {
      id: "sc4_q33",
      topic: "Organs",
      type: "mcq",
      question: "What is the rectum?",
      options: [
        "A tube connecting the kidneys to the bladder",
        "The final section of the large intestine where faeces are stored before excretion",
        "A muscle that controls breathing",
        "A gland that produces digestive enzymes"
      ],
      answer: 1,
      explanation: "The rectum is the last part of the large intestine where undigested waste (faeces) is stored before being expelled from the body through the anus."
    },
    {
      id: "sc4_q34",
      topic: "Life Processes",
      type: "mcq",
      question: "A virus can reproduce inside a host cell and responds to its environment. Does this mean a virus is alive?",
      options: [
        "Yes — it can reproduce and respond to stimuli",
        "No — viruses are not alive because they cannot carry out all 7 life processes independently",
        "Yes — all things that can reproduce are alive",
        "No — viruses are made of rock"
      ],
      answer: 1,
      explanation: "Whether viruses are alive is debated, but scientifically they are generally not considered living organisms because they cannot carry out most life processes (like respiration or growth) independently — they need a host cell.",
      difficulty: "challenging"
    },
    {
      id: "sc4_q35",
      topic: "Cells",
      type: "mcq",
      question: "Which two tissue types are found in the human body?",
      options: [
        "Xylem and phloem",
        "Chlorophyll and cellulose",
        "Fat and muscle",
        "Root hair and epidermis"
      ],
      answer: 2,
      explanation: "Human tissues include fat (adipose tissue, for energy storage and insulation) and muscle tissue (for movement and generating force). Xylem and phloem are plant tissues."
    },
    {
      id: "sc4_q36",
      topic: "Life Processes",
      type: "short",
      question: "Name four of the seven life processes and briefly describe each one.",
      answer: "The seven life processes are remembered as MRS NERG: Movement (ability to move), Respiration (releasing energy from food), Sensitivity (responding to the environment), Nutrition (taking in food/energy), Excretion (removing waste products), Reproduction (producing offspring), Growth (increasing in size/complexity). Any four with correct descriptions are acceptable."
    },
    {
      id: "sc4_q37",
      topic: "Photosynthesis",
      type: "short",
      question: "Describe what happens in photosynthesis, naming the raw materials and the products.",
      answer: "In photosynthesis, plants use carbon dioxide (from the air through stomata) and water (absorbed by roots), along with light energy from the Sun (absorbed by chlorophyll in chloroplasts), to produce glucose (food/energy) and oxygen. Word equation: carbon dioxide + water → glucose + oxygen."
    },
    {
      id: "sc4_q38",
      topic: "Organs",
      type: "short",
      question: "Describe the functions of the heart and lungs, and explain how they work together.",
      answer: "The heart is a muscular pump that circulates blood through blood vessels to all parts of the body. The lungs are where gas exchange occurs — oxygen passes from inhaled air into the blood, and carbon dioxide passes from the blood into the air to be exhaled. They work together: the heart pumps blood to the lungs to collect oxygen, then pumps the oxygenated blood around the body."
    },
    {
      id: "sc4_q39",
      topic: "Cells",
      type: "short",
      question: "Name THREE parts of a plant cell that an animal cell does NOT have, and describe what each one does.",
      answer: "1. Cell wall — made of cellulose, provides rigid support and shape to the plant cell. 2. Chloroplasts — contain chlorophyll and are the site of photosynthesis, converting light energy into glucose. 3. Large permanent vacuole — filled with cell sap, helps support the cell and maintain its shape by keeping it turgid.",
      difficulty: "challenging"
    },
    {
      id: "sc4_q40",
      topic: "Body Systems",
      type: "short",
      question: "Name three human body systems and give the main organ(s) of each.",
      answer: "Any three of the following are acceptable: Digestive system (stomach, intestines, liver); Circulatory system (heart, blood vessels); Respiratory/Breathing system (lungs, diaphragm); Urinary system (kidneys, bladder); Nervous system (brain, spinal cord, nerves); Locomotor/Musculoskeletal system (bones, muscles)."
    },
    {
      id: "sc4_q41",
      topic: "Life Processes",
      type: "short",
      question: "List all seven life processes (MRS NERG) and write one sentence describing each one.",
      answer: "M — Movement: all living things can move, even if just part of their body (e.g. plants turning toward light). R — Respiration: releasing energy from food inside cells. S — Sensitivity: detecting and responding to changes in the environment. N — Nutrition: taking in food or making it (photosynthesis) for energy and growth. E — Excretion: removing waste products made by chemical reactions in the body. R — Reproduction: producing offspring to continue the species. G — Growth: increasing in size or complexity over time.",
      explanation: "Students must recall all seven. Common errors: confusing respiration with breathing; confusing excretion with egestion (removal of undigested food). Award one mark per correctly described process."
    },
    {
      id: "sc4_q42",
      topic: "Photosynthesis",
      type: "short",
      question: "Write the word equation for photosynthesis and describe the role of chlorophyll.",
      answer: "Word equation: carbon dioxide + water → glucose + oxygen. Chlorophyll is the green pigment found inside chloroplasts in plant cells. It absorbs light energy from the Sun, which powers the photosynthesis reaction. Without chlorophyll (and the light energy it captures), plants cannot produce glucose or release oxygen.",
      explanation: "Students should produce the correct word equation (not a formula equation at this level). They should identify chlorophyll as a light-absorbing pigment found in chloroplasts, not just 'in the leaf'."
    },
    {
      id: "sc4_q43",
      topic: "Organs",
      type: "short",
      question: "Describe the function of the liver and explain why it is described as a 'multi-function' organ.",
      answer: "The liver is described as multi-function because it carries out many different jobs: (1) it filters the blood and breaks down toxins such as alcohol and drugs; (2) it produces bile, which helps digest fats in the small intestine; (3) it stores glycogen (a form of glucose) as an energy reserve; (4) it regulates blood sugar levels; (5) it produces proteins needed by the body. It is one of the most versatile organs in the body.",
      explanation: "At Grade 6 level, students should know at least three functions of the liver. The most commonly tested are: bile production (digestion), filtering toxins from blood, and storing glycogen.",
      difficulty: "challenging"
    },
    {
      id: "sc4_q44",
      topic: "Body Systems",
      type: "short",
      question: "Describe what happens when you breathe in. Name the organs and muscles involved and explain the movement of air.",
      answer: "When you breathe in (inhale): the diaphragm contracts and flattens; the intercostal muscles between the ribs contract, pulling the ribcage upward and outward. These movements increase the volume of the chest cavity, which lowers the air pressure inside the lungs. Air rushes in from outside through the nose/mouth, down the trachea, through the bronchi, into the bronchioles, and finally into the alveoli (tiny air sacs in the lungs) where gas exchange occurs.",
      explanation: "Key organs: diaphragm, lungs, trachea, bronchi, bronchioles, alveoli. Key idea: volume increases → pressure decreases → air flows in. Students do not need to mention intercostal muscles, but it is a good stretch answer."
    },
    {
      id: "sc4_q45",
      topic: "Body Systems",
      type: "short",
      question: "Describe the path food takes through the digestive system from the mouth to the rectum. Name at least FOUR organs in the correct order.",
      answer: "Food travels through the digestive system in this order: mouth (teeth chew food; saliva begins digestion) → oesophagus (muscular tube that pushes food to the stomach) → stomach (food is churned and mixed with acid and enzymes) → small intestine (digestion is completed; nutrients are absorbed into the bloodstream through villi) → large intestine (water is absorbed; undigested waste becomes faeces) → rectum (faeces are stored) → anus (faeces are expelled from the body).",
      explanation: "Students should name at least four organs in the correct sequence. Common errors: placing the small intestine before the stomach, or forgetting the oesophagus. The liver and pancreas produce digestive substances but food does not pass through them."
    },
    {
      id: "sc4_q46",
      topic: "Organs",
      type: "short",
      question: "Explain the function of the kidneys and describe what urine is made of.",
      answer: "The kidneys filter the blood, removing waste products and excess water. The main waste product removed is urea, which is produced in the liver when it breaks down excess amino acids. The kidneys produce urine, which is a liquid made of water, urea, and other dissolved salts that the body does not need. Urine passes from the kidneys through the ureters to the bladder, where it is stored until it is excreted through the urethra.",
      explanation: "Key function: filtering blood to remove urea and excess water. Key path: kidneys → ureters → bladder → urethra. Students should know urea is a waste product of protein breakdown."
    }
  ]
};
