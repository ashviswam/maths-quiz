const ch03 = {
  id: 3,
  title: "Civilisations",
  icon: "🏛️",
  color: "#7c3aed",
  topics: ["8 Characteristics", "River Valley Civilisations", "Mesopotamia & Sumer", "Indus Valley", "Egypt & Social Structure"],
  questions: [

    // ── 8 Characteristics ──────────────────────────────────────
    {
      id: "hum3_q1",
      topic: "8 Characteristics",
      type: "mcq",
      question: "How many characteristics are used to define a civilisation in this course?",
      options: ["8", "5", "10", "6"],
      answer: 0,
      explanation: "Historians have identified 8 key characteristics that define a civilisation: (1) Large cities, (2) Organised central government, (3) Complex religion, (4) Labour specialisation, (5) Social classes, (6) Written language, (7) Art, (8) Public works."
    },
    {
      id: "hum3_q2",
      topic: "8 Characteristics",
      type: "mcq",
      question: "A surplus food supply was critical to the development of cities because it:",
      options: [
        "Allowed people to stay in one place and grow in population",
        "Prevented all conflict between neighbouring groups",
        "Made writing systems unnecessary",
        "Ensured that everyone had the same social status"
      ],
      answer: 0,
      explanation: "When farmers produced more food than they needed, communities could grow and people did not need to move to find food. This surplus supported larger populations and permanent settlements — the foundation for cities."
    },
    {
      id: "hum3_q3",
      topic: "8 Characteristics",
      type: "mcq",
      question: "Labour specialisation means that in a civilisation:",
      options: [
        "Not everyone grows their own food — workers focus on one skill or trade",
        "All citizens do the same type of work to ensure equality",
        "Only the government controls all forms of work",
        "People only perform agricultural tasks"
      ],
      answer: 0,
      explanation: "Labour specialisation (also called division of labour) means workers specialise in one trade — pottery, metalwork, trading, medicine. This is possible only when a food surplus means not everyone needs to farm. Specialised workers make societies more productive and complex."
    },
    {
      id: "hum3_q4",
      topic: "8 Characteristics",
      type: "mcq",
      question: "Which civilisation is famous for the 'Code of Hammurabi' — one of the world's earliest written law codes?",
      options: ["Mesopotamia (Babylon)", "Indus Valley", "Ancient Egypt", "Ancient China"],
      answer: 0,
      explanation: "The Code of Hammurabi was a set of 282 laws created by the Babylonian king Hammurabi (~1754 BC). It addressed topics from trade to family law. It is one of the earliest examples of the characteristic 'organised central government' — using laws to control society."
    },
    {
      id: "hum3_q5",
      topic: "8 Characteristics",
      type: "mcq",
      question: "Public works — one of the 8 characteristics of civilisation — refers to:",
      options: [
        "Government-built structures for public benefit (roads, dams, temples)",
        "Art created by ordinary citizens for personal use",
        "Religious ceremonies held in public spaces",
        "Private businesses run by wealthy merchants"
      ],
      answer: 0,
      explanation: "Public works are large structures funded and built by the government for the benefit of the whole community — irrigation systems, roads, walls, pyramids, ziggurats. They require organised labour and demonstrate a powerful central government."
    },
    {
      id: "hum3_q6",
      topic: "8 Characteristics",
      type: "mcq",
      question: "Why was written language considered essential for the growth of early civilisations?",
      options: [
        "It was needed to keep trade records, store food information, and communicate laws",
        "It was mainly used for entertainment and storytelling",
        "It replaced the need for a spoken language entirely",
        "Only priests could write and it kept government decisions secret"
      ],
      answer: 0,
      explanation: "Written language developed because complex societies needed to record trades, taxes, laws, and food storage. In Mesopotamia, cuneiform writing on clay tablets tracked business deals. Without writing, large-scale organisation across a city or empire would be impossible."
    },
    {
      id: "hum3_q7",
      topic: "8 Characteristics",
      type: "short",
      question: "A student says: 'A large village with 500 people, a chief, and some farmers is the same as a civilisation.' Do you agree? Use at least THREE of the 8 characteristics to explain why a village is NOT the same as a civilisation.",
      answer: "I disagree. A civilisation requires far more than a village. First, civilisations have large, densely populated cities — a village of 500 is far too small; Mesopotamian cities like Uruk housed thousands. Second, civilisations have labour specialisation — in a simple village most people farm; in a civilisation, dedicated potters, metalworkers, scribes, and soldiers exist. Third, civilisations have written language — a simple village chief passes on rules verbally; a civilisation uses writing to record laws, trade, and history across generations. A village may have a leader but lacks the complexity, scale, and systems of a true civilisation.",
      explanation: "The 8 characteristics work together — no single one defines a civilisation, and most must be present. A small village typically lacks written language, labour specialisation, social classes, and monumental public works."
    },

    // ── River Valley Civilisations ──────────────────────────────
    {
      id: "hum3_q8",
      topic: "River Valley Civilisations",
      type: "mcq",
      question: "Why did the world's first civilisations develop in river valleys rather than other areas?",
      options: [
        "River flooding deposited rich soil, making agriculture and food surpluses possible",
        "Rivers were the only source of drinking water in the ancient world",
        "Mountains near rivers protected civilisations from all invasion",
        "Rivers made trade impossible, forcing people to become self-sufficient"
      ],
      answer: 0,
      explanation: "Annual flooding deposited nutrient-rich silt, making river valley land extremely fertile. Good farming conditions led to food surpluses → population growth → cities. The four main river valley civilisations: Mesopotamia (Tigris/Euphrates), Egypt (Nile), Indus Valley (Indus), and Shang China (Yellow River)."
    },
    {
      id: "hum3_q9",
      topic: "River Valley Civilisations",
      type: "mcq",
      question: "The Fertile Crescent is described as 'rich farmland stretching from Mesopotamia to Egypt.' What made it fertile?",
      options: [
        "Flood waters from rivers depositing rich silt onto the soil",
        "Rainfall that was perfectly consistent every year",
        "Volcanic soil from nearby eruptions",
        "Its location directly on the equator providing maximum sunlight"
      ],
      answer: 0,
      explanation: "The Fertile Crescent received rich, nutrient-dense silt deposits from the flooding Tigris, Euphrates, and Nile rivers. This made the soil ideal for growing wheat, barley, and other crops. It also had domesticated animals and trade routes connecting early civilisations."
    },
    {
      id: "hum3_q10",
      topic: "River Valley Civilisations",
      type: "mcq",
      question: "Which pairing correctly matches a civilisation with its river(s)?",
      options: [
        "Indus Valley → Indus and Ganges Rivers",
        "Mesopotamia → Nile River",
        "Ancient Egypt → Tigris and Euphrates Rivers",
        "Shang China → Amazon River"
      ],
      answer: 0,
      explanation: "Mesopotamia = Tigris and Euphrates; Ancient Egypt = Nile; Indus Valley = Indus (and Ganges in the broader Indian subcontinent); Shang China = Yellow River (Huang He). Each civilisation used its river for irrigation, transport, and trade."
    },
    {
      id: "hum3_q11",
      topic: "River Valley Civilisations",
      type: "mcq",
      question: "Which of these was a SHARED challenge for all early river valley civilisations?",
      options: [
        "Unpredictable flooding that could destroy crops and homes",
        "Complete lack of water in a desert environment",
        "Being surrounded by impassable mountain ranges",
        "Having no available building materials"
      ],
      answer: 0,
      explanation: "All early river civilisations faced unpredictable floods. While flooding brought fertile soil, it could also be devastating. Mesopotamia's floods were especially erratic. This challenge pushed civilisations to develop irrigation systems, dams, and strong governments to manage water."
    },

    // ── Mesopotamia & Sumer ─────────────────────────────────────
    {
      id: "hum3_q12",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "The word 'Mesopotamia' comes from Greek and means:",
      options: [
        "'Land between the rivers'",
        "'Land of the sun gods'",
        "'Home of the first farmers'",
        "'Place of the great flood'"
      ],
      answer: 0,
      explanation: "Mesopotamia is a Greek word meaning 'land between the rivers' — referring to the Tigris and Euphrates rivers in what is now modern Iraq. It was called the 'cradle of civilisation' because some of the world's earliest complex societies developed there."
    },
    {
      id: "hum3_q13",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "Sumer is NOT the same as Mesopotamia. The correct relationship is:",
      options: [
        "Sumer was a region in the southern part of Mesopotamia",
        "Sumer was a completely different continent from Mesopotamia",
        "Mesopotamia was a small city inside the larger region of Sumer",
        "They are the same — historians use the two names interchangeably"
      ],
      answer: 0,
      explanation: "Mesopotamia refers to the entire region between the Tigris and Euphrates rivers. Sumer was the southern portion of Mesopotamia, where the earliest cities (Ur, Uruk, Eridu) developed around 3000 BC. Babylon and Assyria were other important Mesopotamian regions."
    },
    {
      id: "hum3_q14",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "A ziggurat was a massive stepped temple built in Mesopotamian cities. Its purpose was to:",
      options: [
        "Serve as a temple to the city's chief god, with priests controlling access",
        "Store grain for the entire city's population",
        "Provide housing for the lowest social class",
        "Mark the border between two competing city-states"
      ],
      answer: 0,
      explanation: "A ziggurat ('mountain of god' or 'hill of heaven') was a stepped pyramid-shaped temple. At the top was a shrine accessible only to priests. It also served as the city's treasury. The priests who controlled the ziggurat held enormous power in Mesopotamian society."
    },
    {
      id: "hum3_q15",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "Cuneiform was the writing system of ancient Mesopotamia. It consisted of:",
      options: [
        "Wedge-shaped marks pressed into damp clay tablets",
        "Picture symbols carved into stone walls",
        "Alphabetic letters written on papyrus",
        "Knots tied in coloured ropes to record numbers"
      ],
      answer: 0,
      explanation: "Cuneiform was written by pressing a sharp-ended reed into soft clay tablets, creating wedge-shaped marks. Thousands of cuneiform tablets have been found, recording trade, laws, stories (including the Epic of Gilgamesh), and administrative records."
    },
    {
      id: "hum3_q16",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "The Code of Hammurabi was important because it:",
      options: [
        "Was one of the earliest written legal codes, establishing rules and consequences for all citizens",
        "Was a religious text explaining the creation of the world",
        "Described farming techniques used in the Fertile Crescent",
        "Was a trade treaty between Mesopotamia and Egypt"
      ],
      answer: 0,
      explanation: "The Code of Hammurabi (~1754 BC) contained 282 laws covering crime, trade, property, and family. It established the principle that rulers have a responsibility to maintain justice. It is an early example of the '8 characteristics' trait of organised central government."
    },
    {
      id: "hum3_q17",
      topic: "Mesopotamia & Sumer",
      type: "mcq",
      question: "The challenges of Mesopotamia's geography — unpredictable floods, no natural barriers, hot dry summers — led directly to which development?",
      options: [
        "A strong centralised government with kings, laws, and organised irrigation",
        "The population abandoning the region entirely for cooler areas",
        "The development of sea trade replacing river farming",
        "A system where every family lived completely independently"
      ],
      answer: 0,
      explanation: "Geographic challenges pushed Mesopotamian societies to cooperate: kings built and controlled irrigation systems to manage floods; laws settled disputes over water rights; armies defended against invasion (possible due to no natural barriers). The land shaped the civilisation."
    },
    {
      id: "hum3_q18",
      topic: "Mesopotamia & Sumer",
      type: "short",
      question: "Case study: You are a Mesopotamian king in 2500 BC. Four problems face your city-state: (1) Flooding destroyed your fields. (2) Farmers are fighting over water use. (3) An enemy city-state is attacking. (4) A drought has ruined crops. For EACH problem, describe one specific action you would take and explain which characteristic of civilisation your action represents.",
      answer: "(1) Flooding: Build irrigation canals and dams to control seasonal floods and direct water to fields. This represents 'public works' — government-funded structures for public benefit. (2) Water disputes: Create a written law code (like Hammurabi's) setting fair rules for water sharing, with penalties for those who break them. This represents 'organised central government.' (3) Enemy attack: Build city walls and assemble an army, possibly taxing citizens to fund defence. This represents 'organised central government' and 'public works.' (4) Drought: Use grain stored in the ziggurat treasury to feed the population and offer sacrifices to the gods to ask for rain. This represents 'complex religion' and the government's role in managing resources.",
      explanation: "Mesopotamian civilisation's complexity came directly from solving real geographic challenges. Each solution required organisation, law, labour, and belief — all characteristics of civilisation."
    },

    // ── Indus Valley ────────────────────────────────────────────
    {
      id: "hum3_q19",
      topic: "Indus Valley",
      type: "mcq",
      question: "The Indus Valley Civilisation is also known as the Harappan Civilisation because:",
      options: [
        "Many archaeological discoveries were made at the site of Harappa",
        "The word 'Harappan' means 'river people' in the local language",
        "It was founded by a king named Harappa",
        "All Indus Valley cities were built in the Harappa region"
      ],
      answer: 0,
      explanation: "The Indus Valley Civilisation (c. 2500–1500 BC) is called the Harappan Civilisation because of the major archaeological discoveries at Harappa, Pakistan. Other key cities include Mohenjo-Daro and Kalibangan."
    },
    {
      id: "hum3_q20",
      topic: "Indus Valley",
      type: "mcq",
      question: "Which feature of Mohenjo-Daro was remarkably advanced compared to other ancient civilisations?",
      options: [
        "A sophisticated sewage and plumbing system with private bathrooms in almost every house",
        "A written language that has been fully deciphered by modern scholars",
        "A massive standing army that conquered all surrounding regions",
        "Monumental pyramids larger than those in Egypt"
      ],
      answer: 0,
      explanation: "Mohenjo-Daro had almost every house with a private bathroom and toilet connected to an underground sewer system. Waste flowed through clay pipes to sewage pits outside the city walls. This level of urban sanitation was not matched again until the 19th–20th centuries."
    },
    {
      id: "hum3_q21",
      topic: "Indus Valley",
      type: "mcq",
      question: "How were the cities of the Indus Valley different from other early civilisations like Mesopotamia?",
      options: [
        "Indus cities were built on a precise grid system with planned streets and drainage",
        "Indus cities had no central government or social classes",
        "Indus cities were built entirely from wood rather than brick",
        "Indus cities were much smaller than Mesopotamian cities"
      ],
      answer: 0,
      explanation: "Mesopotamian cities grew with winding, irregular streets. In contrast, Indus Valley cities like Harappa and Mohenjo-Daro were laid out on a precise grid — streets crossing at right angles, standard brick sizes, and organised into residential blocks. This suggests exceptional city planning and a strong central authority."
    },
    {
      id: "hum3_q22",
      topic: "Indus Valley",
      type: "mcq",
      question: "One mystery about the Indus Valley Civilisation is that:",
      options: [
        "Its writing system has not yet been deciphered",
        "Archaeologists have found no evidence of any cities",
        "It had no form of trade with other civilisations",
        "It disappeared overnight due to a single volcanic explosion"
      ],
      answer: 0,
      explanation: "Unlike Mesopotamian cuneiform or Egyptian hieroglyphics, the Harappan script (found on seals and pottery) remains undeciphered. This means historians know less about Harappan beliefs, rulers, and society than about other ancient civilisations."
    },

    // ── Egypt & Social Structure ────────────────────────────────
    {
      id: "hum3_q23",
      topic: "Egypt & Social Structure",
      type: "mcq",
      question: "In Ancient Egypt, the Pharaoh was considered to be:",
      options: [
        "A living god who ruled with absolute authority over all aspects of society",
        "An elected leader chosen by the people every four years",
        "A title given to the head priest with no political power",
        "A regional governor who served under the high court"
      ],
      answer: 0,
      explanation: "The Pharaoh was considered a living god — embodying Horus on earth — with absolute authority over laws, military, and temple-building projects. This divine status combined religious and political power and helped maintain social order."
    },
    {
      id: "hum3_q24",
      topic: "Egypt & Social Structure",
      type: "mcq",
      question: "In the Egyptian social pyramid, which group occupied the HIGHEST position?",
      options: ["Pharaoh and priests", "Scribes and officials", "Artisans and merchants", "Farmers and labourers"],
      answer: 0,
      explanation: "The Egyptian social hierarchy (from top to bottom): Pharaoh → Priests and officials → Scribes → Artisans and merchants → Farmers → Labourers/enslaved people. The Pharaoh held the top position as the divine ruler."
    },
    {
      id: "hum3_q25",
      topic: "Egypt & Social Structure",
      type: "mcq",
      question: "Egyptian scribes held an important role in society because they:",
      options: [
        "Were trained to read and write hieroglyphics, enabling them to manage records, taxes, and laws",
        "Were the only people allowed to trade with foreign nations",
        "Served as the main military commanders in the Egyptian army",
        "Built the pyramids using secret knowledge passed between generations"
      ],
      answer: 0,
      explanation: "Scribes were trained to read and write in hieroglyphics and hieratic script. They documented taxes, trade records, and legal decrees — without them, Egypt's centralised administration would have collapsed. Only sons from noble families could typically become scribes, as literacy was rare and highly valued."
    },
    {
      id: "hum3_q26",
      topic: "Egypt & Social Structure",
      type: "mcq",
      question: "Farmers in Ancient Egypt occupied a low position in the social hierarchy, yet they were called 'the foundation of society.' Why?",
      options: [
        "They produced the agricultural surplus that fed the entire population and paid taxes in grain",
        "They built the pyramids and all major monuments",
        "They controlled the trade routes along the Nile",
        "They held the most religious authority in Egyptian society"
      ],
      answer: 0,
      explanation: "Most Egyptians were farmers who worked land owned by the Pharaoh, temples, or nobles. They paid taxes in grain and were required to work on state projects such as pyramid construction during flood seasons. Despite low social status, their labour was the economic foundation of Egyptian civilisation."
    },
    {
      id: "hum3_q27",
      topic: "Egypt & Social Structure",
      type: "short",
      question: "Read the source: 'Egyptian civilization thrived along the Nile River, developing a structured social hierarchy that allowed it to sustain agricultural production, monumental construction, and a centralised government. Each class had specific roles that ensured the continuity of the kingdom.' Using this source AND your own knowledge, explain how Egypt's social structure helped it function as a successful civilisation. Use specific examples of at least TWO social classes in your answer.",
      answer: "Egypt's social hierarchy gave every person a specific role that contributed to the civilisation's success. At the top, the Pharaoh provided divine authority — his absolute rule meant decisions were made quickly and obeyed without question. For example, the Pharaoh could command thousands of workers to build the pyramids. Scribes were essential to government — they kept records of taxes, trade, and laws using hieroglyphics, preventing the complex administration from collapsing. Without scribes, the Pharaoh could not effectively govern a large country. Farmers, though at the bottom of the hierarchy, produced the food surplus that fed everyone else and paid taxes in grain that funded the government and building projects. Each class depended on the others — without farmers there was no food, without scribes there was no order, and without the Pharaoh there was no direction. This organised social structure is itself one of the 8 characteristics of a civilisation.",
      explanation: "A strong answer connects the source quote to specific evidence (named social classes with specific roles) and links back to the idea of civilisation characteristics. Good answers show how the social classes are interdependent, not just listing what each one does."
    }

  ]
};
