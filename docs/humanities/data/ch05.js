const ch05 = {
  id: 5,
  title: "Biomes & Climates",
  icon: "🌍",
  color: "#16a34a",
  topics: ["Weather vs Climate", "Seasons", "Climate Classification", "Major Biomes", "Biome Location & Climate Links"],
  questions: [

    // ── Weather vs Climate ─────────────────────────────────────
    {
      id: "hum5_q1",
      topic: "Weather vs Climate",
      type: "mcq",
      question: "What is the key difference between weather and climate?",
      options: [
        "Weather is short-term day-to-day conditions; climate is the long-term average pattern over many years",
        "Weather only refers to temperature; climate includes wind and rain",
        "Climate changes minute to minute; weather stays the same for decades",
        "They are the same thing described by different scientists"
      ],
      answer: 0,
      explanation: "Weather = the short-term state of the atmosphere (what is happening right now or today — rain, sunshine, wind). Climate = the long-term pattern of weather averaged over approximately 30 years for a specific place. The saying: 'Climate is what you expect; weather is what you get.'"
    },
    {
      id: "hum5_q2",
      topic: "Weather vs Climate",
      type: "mcq",
      question: "Which of the following is an example of CLIMATE (not weather)?",
      options: [
        "Antarctica is cold and dry all year round",
        "It is raining outside right now",
        "Tomorrow will be sunny but windy",
        "It was unexpectedly hot last Tuesday"
      ],
      answer: 0,
      explanation: "Antarctica being cold and dry all year round describes the long-term pattern — that is climate. 'It is raining right now' or 'tomorrow will be sunny' are short-term conditions — that is weather. A helpful rule: if it uses 'usually' or 'typically' or spans many years, it is climate."
    },
    {
      id: "hum5_q3",
      topic: "Weather vs Climate",
      type: "mcq",
      question: "You are planning a trip to the Netherlands next autumn. Should you 'pack for the weather or the climate'? Why?",
      options: [
        "Pack for the climate — it tells you what to generally expect (cool, rainy autumn), even if the specific days vary",
        "Pack for the weather — check the exact forecast to ensure you have the right clothes for that week",
        "Both are identical — there is no difference between Dutch weather and climate",
        "Neither — packing depends only on the month of travel, not weather or climate"
      ],
      answer: 0,
      explanation: "When preparing for a trip, you pack for the climate — the typical conditions of that region in that season (cool, rainy Dutch autumn). You cannot predict exact weather weeks ahead. However, once you arrive, checking the local weather forecast helps fine-tune your daily plans."
    },
    {
      id: "hum5_q4",
      topic: "Weather vs Climate",
      type: "mcq",
      question: "Four students describe conditions. Which is describing CLIMATE?",
      options: [
        "Zara: 'My grandfather says Dutch canals froze every winter when he was young.'",
        "Tom: 'It is going to be cold this weekend.'",
        "Anika: 'Look out the window — it is raining right now!'",
        "Lee: 'Yesterday's temperature was 3°C.'"
      ],
      answer: 0,
      explanation: "Zara's statement describes a long-term pattern ('every winter') — that is climate. Tom is predicting this weekend (weather). Anika is describing current conditions (weather). Lee is reporting a single day's temperature (weather). Note: long-term patterns (every winter, typically, always) = climate."
    },
    {
      id: "hum5_q5",
      topic: "Weather vs Climate",
      type: "input",
      question: "Climate is defined as the average of the weather over how many years?",
      answer: "30",
      acceptableAnswers: ["approximately 30", "30 years"],
      explanation: "Climate is officially calculated as the average weather conditions over a 30-year period for a specific location. This long timeframe smooths out unusual years and reveals the true typical conditions."
    },
    {
      id: "hum5_q6",
      topic: "Weather vs Climate",
      type: "short",
      question: "A sports event organiser says: 'We should hold our outdoor sports day in late June because it tends to be hotter then.' Is the organiser thinking about weather or climate? Explain your reasoning. Then write your own example of each — one sentence about weather and one about climate.",
      answer: "The organiser is thinking about climate — they are using the long-term typical pattern ('it tends to be hotter') to make a decision, not a specific short-term forecast. This is how climate is useful: it helps us plan for typical conditions. Own example: Weather — 'It is currently 18°C with light clouds and a gentle breeze.' Climate — 'The Netherlands typically gets more rain in autumn and winter than in summer.'",
      explanation: "The key test: does the statement describe what IS happening right now (or in the next few days)? That is weather. Does it describe what USUALLY happens over many years? That is climate."
    },

    // ── Seasons ────────────────────────────────────────────────
    {
      id: "hum5_q7",
      topic: "Seasons",
      type: "mcq",
      question: "What causes Earth to have seasons?",
      options: [
        "Earth's axis is tilted at 23.5°, causing different parts to receive varying amounts of sunlight",
        "Earth moves closer to the Sun in summer and further away in winter",
        "The Moon's gravity pulls heat toward certain regions at certain times of year",
        "The Sun produces more energy in summer and less in winter"
      ],
      answer: 0,
      explanation: "Seasons are caused by Earth's 23.5° axial tilt — NOT by distance from the Sun. When the Northern Hemisphere is tilted toward the Sun, sunlight hits more directly → summer. When it is tilted away, sunlight is indirect → winter. Earth is actually slightly closer to the Sun in January (Northern Hemisphere winter)."
    },
    {
      id: "hum5_q8",
      topic: "Seasons",
      type: "mcq",
      question: "When it is summer in the Northern Hemisphere, what season is it in the Southern Hemisphere?",
      options: ["Winter", "Summer", "Spring", "The same as the Northern Hemisphere"],
      answer: 0,
      explanation: "When the Northern Hemisphere is tilted toward the Sun (summer, around June 21), the Southern Hemisphere is tilted away from the Sun — experiencing winter. This is why Australia has summer in December while Europe has winter."
    },
    {
      id: "hum5_q9",
      topic: "Seasons",
      type: "mcq",
      question: "In the Northern Hemisphere, the summer solstice (longest day) occurs around:",
      options: ["June 20/21", "December 21/22", "March 20", "September 22/23"],
      answer: 0,
      explanation: "The Northern Hemisphere summer solstice is around June 20/21 — when the Northern Hemisphere is most tilted toward the Sun. The winter solstice is December 21/22. The spring equinox is March 20 and the autumn equinox is September 22/23."
    },
    {
      id: "hum5_q10",
      topic: "Seasons",
      type: "mcq",
      question: "Why is it always warm near the equator, even in the months that give temperate regions their winter?",
      options: [
        "The equator receives direct sunlight year-round because it is never tilted away from the Sun",
        "The equator is physically closer to the Sun than the poles",
        "Warm ocean currents heat the equator from below",
        "The equator faces the Moon, which reflects heat constantly"
      ],
      answer: 0,
      explanation: "The equator sits at 0° latitude. Because of Earth's tilt, the equatorial region always receives direct (or near-direct) sunlight regardless of the time of year. Direct sunlight is more concentrated and heats the surface more efficiently — this is why tropical regions near the equator are warm year-round."
    },
    {
      id: "hum5_q11",
      topic: "Seasons",
      type: "mcq",
      question: "Direct sunlight produces MORE heat than indirect sunlight because:",
      options: [
        "It hits a smaller area more concentrated, delivering more energy per square metre",
        "It travels a shorter distance through space to reach Earth",
        "The Sun produces more light rays in summer than in winter",
        "Direct sunlight contains special heat particles that indirect sunlight lacks"
      ],
      answer: 0,
      explanation: "Direct sunlight hits Earth at a steep angle, concentrating its energy on a small area. Indirect (low-angle) sunlight spreads the same energy over a larger area — like a flashlight shining straight down vs. at an angle. This is why tropical regions are hot and polar regions are cold, and why summers are warmer than winters."
    },
    {
      id: "hum5_q12",
      topic: "Seasons",
      type: "short",
      question: "A student says: 'Summer is warmer because the Earth is closer to the Sun.' Explain why this student is WRONG. Use the correct scientific explanation with specific evidence to support your answer.",
      answer: "The student is incorrect. Seasons are caused by the tilt of Earth's axis (23.5°), not by Earth's distance from the Sun. Evidence against the student's claim: Earth is actually slightly closer to the Sun in January (around 147 million km) than in July (around 152 million km) — yet January is winter in the Northern Hemisphere. If distance caused seasons, the Northern Hemisphere should be warmer in January, but the opposite is true. The real cause: When the Northern Hemisphere is tilted toward the Sun (around June 21), sunlight hits more directly and concentrates more energy per square metre — bringing summer heat. When tilted away (around December 21), sunlight hits at a lower angle and spreads over a larger area — bringing winter cold. The Southern Hemisphere experiences the opposite: summer in December, winter in June.",
      explanation: "This is a classic misconception. A strong answer (1) identifies the mistake, (2) provides evidence that disproves the incorrect idea, and (3) explains the correct mechanism clearly with specific detail."
    },

    // ── Climate Classification ──────────────────────────────────
    {
      id: "hum5_q13",
      topic: "Climate Classification",
      type: "mcq",
      question: "In the Köppen climate classification system, which letter represents a Tropical climate?",
      options: ["A", "B", "C", "E"],
      answer: 0,
      explanation: "The Köppen classification uses letters: A = Tropical (warm year-round, >18°C every month); B = Dry (arid/semi-arid); C = Temperate (moderate, mild winters); D = Continental (large seasonal temperature range); E = Polar (<10°C even in the warmest month)."
    },
    {
      id: "hum5_q14",
      topic: "Climate Classification",
      type: "mcq",
      question: "Which climate type best describes a region with very hot, dry summers and very cold winters, with large seasonal temperature differences?",
      options: ["Continental (D)", "Tropical (A)", "Polar (E)", "Temperate (C)"],
      answer: 0,
      explanation: "Continental climate (D) features large seasonal variations — warm/hot summers and cold winters. The interior of large continents (e.g., central Russia, northern Canada) experiences this because they lack the moderating effect of nearby oceans."
    },
    {
      id: "hum5_q15",
      topic: "Climate Classification",
      type: "mcq",
      question: "A Polar climate (E) is defined as one where:",
      options: [
        "Even the warmest month has an average temperature below 10°C",
        "No rainfall occurs throughout the year",
        "Temperatures are always exactly 0°C",
        "It experiences four distinct seasons with extreme heat in summer"
      ],
      answer: 0,
      explanation: "Polar climate (E) is extremely cold year-round. Even in the warmest month, average temperatures stay below 10°C. The Arctic, Antarctic, and high-altitude mountain peaks experience this climate. Vegetation is limited to mosses and lichens (tundra) or absent entirely (ice caps)."
    },
    {
      id: "hum5_q16",
      topic: "Climate Classification",
      type: "mcq",
      question: "The annual temperature range of a location is:",
      options: [
        "The difference between the hottest and coldest average monthly temperatures",
        "The total rainfall measured over 12 months",
        "The average temperature across all 12 months",
        "The number of days per year above 20°C"
      ],
      answer: 0,
      explanation: "Annual temperature range = highest monthly average − lowest monthly average. A large range (e.g. 40°C) indicates a continental climate with extreme seasons. A small range (e.g. 5°C) suggests a maritime or tropical climate with stable temperatures."
    },

    // ── Major Biomes ────────────────────────────────────────────
    {
      id: "hum5_q17",
      topic: "Major Biomes",
      type: "mcq",
      question: "A biome is best defined as:",
      options: [
        "A large geographical area with a similar climate, vegetation, and animal life",
        "The interaction between all living and non-living things in one small area",
        "A type of weather system that affects one country",
        "A government-protected area of natural forest"
      ],
      answer: 0,
      explanation: "A biome is a very large area characterised by its climate and the dominant organisms that live there. Examples: tropical rainforest, desert, grassland, tundra. An ecosystem (different concept) is the interaction of living and non-living things in a specific area — many ecosystems can exist within one biome."
    },
    {
      id: "hum5_q18",
      topic: "Major Biomes",
      type: "mcq",
      question: "Which biome receives little rainfall, has extreme temperature variation between day and night, and has sparse, drought-resistant vegetation?",
      options: ["Desert", "Tropical rainforest", "Temperate forest", "Tundra"],
      answer: 0,
      explanation: "Deserts receive less than 250 mm of rainfall per year. Temperatures can swing dramatically — very hot by day, cold at night (due to no cloud cover). Sparse vegetation (cacti, succulents) is adapted to store water. Deserts cover about 30% of Earth's land surface."
    },
    {
      id: "hum5_q19",
      topic: "Major Biomes",
      type: "mcq",
      question: "The tropical rainforest biome is found near the equator and is characterised by:",
      options: [
        "High temperatures and very high rainfall year-round, supporting enormous biodiversity",
        "Cool temperatures, moderate rainfall, and seasonal leaf loss",
        "Low rainfall, extreme cold, and no trees",
        "Hot summers, mild winters, and grassland vegetation"
      ],
      answer: 0,
      explanation: "Tropical rainforests (e.g., Amazon, Congo, Southeast Asian rainforests) are hot and wet year-round. They contain the highest biodiversity of any biome — roughly 50% of all species on Earth. The dense canopy, understory, and forest floor each host distinct communities of plants and animals."
    },
    {
      id: "hum5_q20",
      topic: "Major Biomes",
      type: "mcq",
      question: "The Tundra biome is found near the Arctic Circle. Which features correctly describe it?",
      options: [
        "Permanently frozen subsoil (permafrost), very short growing season, mosses and lichens",
        "Tropical temperatures, dense tree cover, and year-round rain",
        "Very dry conditions, sand dunes, and no vegetation at all",
        "Mild climate, rich soil, and deciduous forests"
      ],
      answer: 0,
      explanation: "Tundra is found in the Arctic and high mountain areas. Key features: permafrost (permanently frozen ground below the surface), very short summer growing season, low precipitation, and vegetation limited to mosses, lichens, and low shrubs. Animals include Arctic foxes, caribou, and snowy owls."
    },
    {
      id: "hum5_q21",
      topic: "Major Biomes",
      type: "mcq",
      question: "The Savanna biome is a type of tropical grassland found mainly in Africa and South America. What characterises the climate of a Savanna?",
      options: [
        "A distinct wet season and dry season, with warm temperatures year-round",
        "Constant heavy rainfall with no dry season",
        "Freezing winters and brief, cool summers",
        "Extremely dry conditions with under 50 mm of rain annually"
      ],
      answer: 0,
      explanation: "Savannas have two seasons: a long dry season and a shorter wet season. Temperatures are warm throughout the year (tropical location). Vegetation includes grasses and scattered trees (acacias, baobabs). This biome supports large herbivores like wildebeest and elephants, and predators like lions."
    },
    {
      id: "hum5_q22",
      topic: "Major Biomes",
      type: "mcq",
      question: "A Taiga (Boreal Forest) biome is found in northern Canada and Russia. Which is correct?",
      options: [
        "It is dominated by conifer trees that survive cold, long winters",
        "It has the highest biodiversity of any land biome",
        "It is characterised by year-round rainfall and warm temperatures",
        "It has no trees — only grasses and mosses"
      ],
      answer: 0,
      explanation: "The Taiga (also called Boreal Forest) stretches across northern North America, Europe, and Asia. It is dominated by cone-bearing trees (conifers like spruce, pine, fir) that are adapted to cold, long winters and short summers. It is the world's largest land biome by area."
    },

    // ── Biome Location & Climate Links ──────────────────────────
    {
      id: "hum5_q23",
      topic: "Biome Location & Climate Links",
      type: "mcq",
      question: "Which factor has the GREATEST influence on which biome is found in a particular location?",
      options: [
        "Latitude (distance from the equator), which determines temperature and sunlight",
        "The colour of the soil in that region",
        "The number of rivers that pass through the area",
        "The altitude of the nearest mountain"
      ],
      answer: 0,
      explanation: "Latitude is the primary control of biome distribution because it determines how much solar energy an area receives. Near the equator = tropical; mid-latitudes = temperate; polar regions = tundra/polar. Altitude also matters (high mountains = cold like polar zones), as does distance from the ocean (affects moisture)."
    },
    {
      id: "hum5_q24",
      topic: "Biome Location & Climate Links",
      type: "mcq",
      question: "Why do deserts often form in the interior of large continents or on the leeward side of mountain ranges?",
      options: [
        "These areas receive little moisture — either too far from oceans or blocked by mountains",
        "The soil in continental interiors repels water",
        "Deserts are always found near the equator where temperatures are highest",
        "Large continents generate their own heat that evaporates rainfall"
      ],
      answer: 0,
      explanation: "Desert formation: (1) Continental interiors are far from oceans — moist air loses its moisture before reaching them. (2) Rain shadow deserts form when mountains block moist air — the windward side gets rain; the leeward side is dry (e.g., Atacama Desert, Death Valley). Both create arid conditions."
    },
    {
      id: "hum5_q25",
      topic: "Biome Location & Climate Links",
      type: "mcq",
      question: "Climate classification helps geographers predict biomes because:",
      options: [
        "Climate determines the temperature and rainfall conditions, which control what plants and animals can survive",
        "Climate and biome are the same thing and always have the same borders",
        "Climate only affects oceans, not land-based biomes",
        "Biomes are determined by soil type, which has no link to climate"
      ],
      answer: 0,
      explanation: "Climate is the primary driver of biome distribution. Temperature and precipitation determine which plants can survive — and plants determine which animals can live there. A Köppen Type A (Tropical) climate correlates with tropical rainforest or savanna biomes. Type E (Polar) correlates with tundra or ice cap biomes."
    },
    {
      id: "hum5_q26",
      topic: "Biome Location & Climate Links",
      type: "mcq",
      question: "Why does the interior of Africa (near the equator) experience a tropical rainforest climate, while North Africa (further from the equator) is desert?",
      options: [
        "Equatorial Africa receives direct, intense sunlight and high rainfall year-round; North Africa receives less rainfall and intense heat causes evaporation",
        "North Africa is at a higher altitude, so temperatures are colder",
        "Equatorial Africa has more volcanoes that produce moisture",
        "The distance from the Atlantic Ocean is greater in equatorial Africa"
      ],
      answer: 0,
      explanation: "Near the equator, the air is heated strongly, rises, cools, and produces heavy rainfall — creating tropical conditions. In North Africa (~20–30°N), descending dry air (part of global atmospheric circulation) suppresses rainfall and creates the Sahara Desert. Latitude and global wind patterns both control this."
    },
    {
      id: "hum5_q27",
      topic: "Biome Location & Climate Links",
      type: "short",
      question: "A student is preparing for a geography exam and asks: 'Why are biomes distributed the way they are across the world? Why isn't a rainforest found in northern Canada?' Write a full explanation using the concepts of latitude, sunlight, temperature, and rainfall.",
      answer: "Biomes are not distributed randomly — their location is controlled mainly by climate, which is determined by latitude. Latitude decides how much direct sunlight a location receives. The equatorial region (near 0° latitude) receives direct, intense sunlight year-round, producing high temperatures and high evaporation, which fuels heavy rainfall. This creates the hot, wet climate needed for tropical rainforests (Amazon, Congo). Moving away from the equator, sunlight hits at a more oblique angle, temperatures decrease, and seasonal variation increases. In the mid-latitudes (40–60°N or S), a temperate climate develops — this is where temperate forests and grasslands are found. Northern Canada (60–70°N) receives very little direct sunlight, especially in winter. Average temperatures are very low, and the ground remains frozen (permafrost). These conditions suit only tundra and boreal forest (taiga), not tropical rainforest. A tropical rainforest cannot grow in northern Canada because it requires year-round warmth and heavy rainfall — conditions that simply do not exist at high latitudes far from the equator.",
      explanation: "A strong answer explains the causal chain: latitude → angle of sunlight → temperature and rainfall → plant and animal life → biome. Connecting each step with 'because' or 'which means' shows understanding rather than just listing facts."
    }

  ]
};
