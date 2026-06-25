const ch01 = {
  id: 1,
  title: "Maps",
  icon: "🗺️",
  color: "#0ea5e9",
  topics: ["Types of Maps", "Map Components", "Latitude & Longitude", "Map Reading Skills"],
  questions: [

    // ── Types of Maps ──────────────────────────────────────────
    {
      id: "hum1_q1",
      topic: "Types of Maps",
      type: "mcq",
      question: "A map that shows country borders, capitals, and major cities is called a _____ map.",
      options: ["Political", "Physical", "Thematic", "Topographic"],
      answer: 0,
      explanation: "A political map shows human-made boundaries such as country and state borders, capitals, and cities. It focuses on how humans have divided the land."
    },
    {
      id: "hum1_q2",
      topic: "Types of Maps",
      type: "mcq",
      question: "Which type of map would best show the locations of rainforests around the world?",
      options: ["Thematic map", "Political map", "Road map", "City plan"],
      answer: 0,
      explanation: "A thematic map focuses on a specific theme or topic — such as vegetation, climate, population density, or natural resources. A map of rainforest locations is a thematic map."
    },
    {
      id: "hum1_q3",
      topic: "Types of Maps",
      type: "mcq",
      question: "A physical map is different from a political map because it mainly shows:",
      options: ["Mountains, rivers, and terrain", "Country names and capitals", "Population data by region", "Road networks and motorways"],
      answer: 0,
      explanation: "Physical maps show natural features of the Earth: landforms like mountains and valleys, water bodies like rivers and lakes, and the overall terrain. Political maps focus on human-made boundaries."
    },
    {
      id: "hum1_q4",
      topic: "Types of Maps",
      type: "mcq",
      question: "You want to show which parts of Europe have the highest rainfall. Which map type would you use?",
      options: ["Thematic", "Political", "Physical", "Street"],
      answer: 0,
      explanation: "A thematic map displays a specific topic — in this case, precipitation patterns. Other examples of thematic maps include population density maps, language maps, and climate maps."
    },
    {
      id: "hum1_q5",
      topic: "Types of Maps",
      type: "short",
      question: "Name and describe the THREE main types of maps you have studied. Give one example of when you would use each type.",
      answer: "Political map: shows country/state borders, capitals, cities. Use: finding which country a city is in. Physical map: shows natural landforms — mountains, rivers, plains. Use: identifying where major mountain ranges are. Thematic map: focuses on one specific topic (rainfall, population, vegetation). Use: comparing which regions receive the most rain.",
      explanation: "Maps are made for different purposes. Political maps help with understanding borders and governance; physical maps show the natural landscape; thematic maps communicate a specific pattern or data."
    },

    // ── Map Components ─────────────────────────────────────────
    {
      id: "hum1_q6",
      topic: "Map Components",
      type: "mcq",
      question: "The part of a map that explains what the symbols and colours mean is called the:",
      options: ["Legend (key)", "Scale bar", "Compass rose", "Grid reference"],
      answer: 0,
      explanation: "The legend (or key) acts as a decoder for the map. Every symbol, colour, or pattern used on the map is listed and explained in the legend."
    },
    {
      id: "hum1_q7",
      topic: "Map Components",
      type: "mcq",
      question: "A scale bar on a map is used to:",
      options: ["Measure real distances on the ground", "Show which direction is north", "Explain what map symbols mean", "Find latitude and longitude"],
      answer: 0,
      explanation: "The scale bar lets you calculate real distances. For example, if 1 cm on the map = 50 km on the ground, you can measure distances between places with a ruler."
    },
    {
      id: "hum1_q8",
      topic: "Map Components",
      type: "mcq",
      question: "Which map feature shows the four cardinal directions?",
      options: ["Compass rose", "Legend", "Scale bar", "Grid lines"],
      answer: 0,
      explanation: "The compass rose shows cardinal directions: North, South, East, West. It may also show intermediate directions (NE, NW, SE, SW). It helps you understand which direction to travel."
    },
    {
      id: "hum1_q9",
      topic: "Map Components",
      type: "input",
      question: "What are the four cardinal directions shown on a compass rose? (List all four, separated by commas)",
      answer: "North, South, East, West",
      acceptableAnswers: ["N, S, E, W", "north, south, east, west"],
      explanation: "The four cardinal directions are North, South, East, and West. A compass rose on a map always shows these to help the reader orient themselves."
    },
    {
      id: "hum1_q10",
      topic: "Map Components",
      type: "mcq",
      question: "On a map, a scale of 1:100,000 means that 1 cm on the map represents:",
      options: ["100,000 cm (1 km) in real life", "1 metre in real life", "100 km in real life", "1,000 km in real life"],
      answer: 0,
      explanation: "A scale of 1:100,000 means 1 unit on the map equals 100,000 of the same unit on the ground. So 1 cm on the map = 100,000 cm = 1 km in real life."
    },
    {
      id: "hum1_q11",
      topic: "Map Components",
      type: "short",
      question: "A map is missing its legend, scale, and compass rose. Explain WHY each of these three components matters — what problems would a map reader face without each one?",
      answer: "Without a legend: the reader cannot understand what the symbols and colours mean — the map becomes uninterpretable. Without a scale: the reader cannot calculate real distances between places and has no sense of how far apart things are. Without a compass rose: the reader does not know which direction is north and cannot navigate using the map.",
      explanation: "Each component serves a different essential purpose. Together they make a map readable, measurable, and navigable."
    },

    // ── Latitude & Longitude ────────────────────────────────────
    {
      id: "hum1_q12",
      topic: "Latitude & Longitude",
      type: "mcq",
      question: "Lines of latitude run _____ around the Earth.",
      options: ["Horizontally (east–west)", "Vertically (north–south)", "Diagonally across the globe", "Around the poles only"],
      answer: 0,
      explanation: "Lines of latitude (parallels) run horizontally around the Earth, parallel to the equator. The equator is 0° latitude. Lines of longitude (meridians) run vertically from pole to pole."
    },
    {
      id: "hum1_q13",
      topic: "Latitude & Longitude",
      type: "mcq",
      question: "The equator is a special line of latitude because it:",
      options: ["Sits at 0° and divides Earth into Northern and Southern hemispheres", "Is the northernmost line on the globe", "Passes through the North and South Poles", "Marks the boundary between time zones"],
      answer: 0,
      explanation: "The equator is 0° latitude. It divides the Earth into the Northern Hemisphere (above) and the Southern Hemisphere (below). Places near the equator tend to be warm year-round."
    },
    {
      id: "hum1_q14",
      topic: "Latitude & Longitude",
      type: "mcq",
      question: "The Prime Meridian is a line of longitude located at:",
      options: ["0° longitude", "90° East", "180° longitude", "0° latitude"],
      answer: 0,
      explanation: "The Prime Meridian is 0° longitude and passes through Greenwich, England. It divides the Earth into the Eastern Hemisphere and Western Hemisphere."
    },
    {
      id: "hum1_q15",
      topic: "Latitude & Longitude",
      type: "mcq",
      question: "A location is described as 30°N, 45°E. What do these coordinates tell you?",
      options: ["30° north of the equator and 45° east of the Prime Meridian", "30 km north and 45 km east", "30° south and 45° west of centre", "The height is 30 m and width is 45 m"],
      answer: 0,
      explanation: "Coordinates use latitude first, then longitude. 30°N means 30 degrees north of the equator (Northern Hemisphere). 45°E means 45 degrees east of the Prime Meridian (Eastern Hemisphere)."
    },
    {
      id: "hum1_q16",
      topic: "Latitude & Longitude",
      type: "mcq",
      question: "Which of the following correctly describes lines of longitude?",
      options: ["They run from the North Pole to the South Pole", "They run parallel to the equator", "They are all the same length", "They only exist in the Northern Hemisphere"],
      answer: 0,
      explanation: "Lines of longitude (meridians) run vertically from the North Pole to the South Pole. They converge at the poles and are widest apart at the equator. The Prime Meridian is 0°; the International Date Line is near 180°."
    },
    {
      id: "hum1_q17",
      topic: "Latitude & Longitude",
      type: "short",
      question: "Explain the difference between latitude and longitude. How do you use both together to find a precise location on a map?",
      answer: "Latitude lines run horizontally (east–west) and measure how far north or south a place is from the equator (0°–90°). Longitude lines run vertically (north–south) and measure how far east or west a place is from the Prime Meridian (0°–180°). To find a precise location, you use both: first the latitude (e.g. 52°N), then the longitude (e.g. 4°E). Together they give you a grid reference that pinpoints any place on Earth.",
      explanation: "Latitude tells you how far north or south; longitude tells you how far east or west. Like a grid, they work together to identify any point on the globe."
    },

    // ── Map Reading Skills ──────────────────────────────────────
    {
      id: "hum1_q18",
      topic: "Map Reading Skills",
      type: "mcq",
      question: "On a map, the scale shows that 2 cm = 100 km. Two cities are 6 cm apart on the map. What is the real distance between them?",
      options: ["300 km", "200 km", "600 km", "150 km"],
      answer: 0,
      explanation: "If 2 cm = 100 km, then 1 cm = 50 km. So 6 cm = 6 × 50 km = 300 km. Always find the km-per-cm rate first, then multiply."
    },
    {
      id: "hum1_q19",
      topic: "Map Reading Skills",
      type: "mcq",
      question: "You are facing North and you turn 90° clockwise. You are now facing:",
      options: ["East", "South", "West", "North-East"],
      answer: 0,
      explanation: "Starting from North and turning 90° clockwise brings you to East. Turning 180° from North gives South; 270° clockwise gives West. A full 360° turn returns you to North."
    },
    {
      id: "hum1_q20",
      topic: "Map Reading Skills",
      type: "mcq",
      question: "A map is described as a 'thematic map of world population density.' What would it most likely show?",
      options: ["Areas with high and low numbers of people per km²", "Where mountains and rivers are located", "National borders and country names", "Road and railway networks"],
      answer: 0,
      explanation: "Population density maps are thematic maps showing how many people live per square kilometre in different areas. Dark shading usually indicates high density; light shading indicates sparse population."
    },
    {
      id: "hum1_q21",
      topic: "Map Reading Skills",
      type: "mcq",
      question: "City A is at 10°N, 20°E. City B is at 10°N, 30°E. In which direction is City B from City A?",
      options: ["East", "West", "North", "South"],
      answer: 0,
      explanation: "Both cities share the same latitude (10°N), so they are on the same horizontal line. City B has a higher longitude (30°E vs 20°E), meaning it is further east."
    },
    {
      id: "hum1_q22",
      topic: "Map Reading Skills",
      type: "mcq",
      question: "Which statement about using a map scale is correct?",
      options: ["A larger scale number means each cm represents a greater real distance", "A scale of 1:1,000 covers more area than a scale of 1:1,000,000", "The scale never changes across different types of maps", "Scales are only needed on physical maps"],
      answer: 0,
      explanation: "A scale of 1:1,000,000 means 1 cm = 10 km; a scale of 1:1,000 means 1 cm = 10 m. The larger the second number, the more ground each centimetre represents, and the more area can be shown — but with less detail."
    },
    {
      id: "hum1_q23",
      topic: "Map Reading Skills",
      type: "short",
      question: "Look at this scenario: A classmate is planning a hiking trip. She has a map of the national park but it has no scale bar and no compass rose. Explain two specific problems she could face during her hike, and suggest how she could solve each problem.",
      answer: "Problem 1 (No scale): She cannot estimate how far she needs to walk between checkpoints. She might seriously underestimate or overestimate distances, leading to running out of water, time, or energy. Solution: Compare the map to one with a known scale, or use GPS/phone to measure distance. Problem 2 (No compass rose): She cannot tell which direction to travel. She could easily get lost, head the wrong way down a trail, or fail to reach the next landmark. Solution: Use a physical compass to find north, then orientate the map with north matching the compass direction.",
      explanation: "The scale and compass rose are not decorative — they are essential tools for safe navigation. Without them, a map is much harder to use in the real world."
    }

  ]
};
