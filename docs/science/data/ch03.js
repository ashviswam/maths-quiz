const ch03 = {
  id: 3,
  title: "Earth in Space",
  icon: "🌍",
  color: "#22c55e",
  topics: ["Day and Night", "Seasons", "Earth's Tilt", "Orbit"],
  questions: [
    {
      id: "sc3_q1",
      topic: "Day and Night",
      type: "mcq",
      question: "What causes day and night on Earth?",
      options: [
        "The Sun moves around the Earth every 24 hours",
        "Earth rotates on its own axis once every 24 hours",
        "The Moon blocks sunlight from reaching part of Earth",
        "Clouds cover different parts of Earth throughout the day"
      ],
      answer: 1,
      explanation: "Day and night are caused by Earth spinning (rotating) on its axis once every 24 hours. The side facing the Sun has day; the side facing away has night."
    },
    {
      id: "sc3_q2",
      topic: "Day and Night",
      type: "mcq",
      question: "What is the term for Earth spinning on its own axis?",
      options: ["Revolution", "Rotation", "Orbit", "Inclination"],
      answer: 1,
      explanation: "Rotation refers to an object spinning on its own axis. Earth completes one full rotation every 24 hours, giving us the daily cycle of day and night."
    },
    {
      id: "sc3_q3",
      topic: "Day and Night",
      type: "mcq",
      question: "How long does it take Earth to complete one full rotation on its axis?",
      options: ["12 hours", "24 hours", "365 days", "28 days"],
      answer: 1,
      explanation: "Earth takes approximately 24 hours (one day) to complete one full rotation on its axis, which is why we have a 24-hour day-night cycle."
    },
    {
      id: "sc3_q4",
      topic: "Day and Night",
      type: "mcq",
      question: "In which direction does Earth rotate when viewed from above the North Pole?",
      options: ["Clockwise", "Anti-clockwise (counter-clockwise)", "It alternates direction each year", "It does not rotate — the Sun moves instead"],
      answer: 1,
      explanation: "Viewed from above the North Pole, Earth rotates anti-clockwise (counter-clockwise). This is why the Sun appears to rise in the east and set in the west."
    },
    {
      id: "sc3_q5",
      topic: "Day and Night",
      type: "mcq",
      question: "Why does the Sun appear to rise in the east and set in the west?",
      options: [
        "The Sun travels from east to west around Earth each day",
        "Earth rotates from west to east, making the Sun appear to move from east to west",
        "The Moon pushes the Sun across the sky",
        "Wind in the atmosphere carries sunlight from east to west"
      ],
      answer: 1,
      explanation: "Earth rotates from west to east (anti-clockwise from above the North Pole). This rotation makes the Sun appear to move across our sky from east to west each day."
    },
    {
      id: "sc3_q6",
      topic: "Orbit",
      type: "mcq",
      question: "What is Earth's revolution?",
      options: [
        "Earth spinning on its axis",
        "Earth orbiting the Sun",
        "The Moon orbiting Earth",
        "The movement of tectonic plates"
      ],
      answer: 1,
      explanation: "Revolution refers to Earth's orbit around the Sun. One complete revolution takes approximately 365.25 days (one year)."
    },
    {
      id: "sc3_q7",
      topic: "Orbit",
      type: "mcq",
      question: "How long does it take Earth to complete one orbit around the Sun?",
      options: ["24 hours", "28 days", "365.25 days", "12 months exactly"],
      answer: 2,
      explanation: "Earth takes approximately 365.25 days to complete one orbit (revolution) around the Sun. The extra 0.25 day accumulates into a leap year every 4 years."
    },
    {
      id: "sc3_q8",
      topic: "Orbit",
      type: "mcq",
      question: "What shape is Earth's orbit around the Sun?",
      options: [
        "A perfect circle",
        "A slightly oval (elliptical) shape",
        "A figure-of-eight",
        "A straight line"
      ],
      answer: 1,
      explanation: "Earth's orbit is slightly elliptical (oval), not a perfect circle. This means Earth is sometimes slightly closer to the Sun and sometimes slightly further away during its orbit.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q9",
      topic: "Earth's Tilt",
      type: "mcq",
      question: "By how many degrees is Earth's axis tilted?",
      options: ["0°", "90°", "45°", "23.5°"],
      answer: 3,
      explanation: "Earth's axis is tilted at 23.5° relative to its orbital plane around the Sun. This tilt is the key reason Earth experiences seasons."
    },
    {
      id: "sc3_q10",
      topic: "Earth's Tilt",
      type: "mcq",
      question: "What would happen to the seasons if Earth's axis were not tilted?",
      options: [
        "Seasons would be more extreme",
        "There would be no seasons — every day would be the same",
        "Seasons would swap between north and south",
        "Only the polar regions would have seasons"
      ],
      answer: 1,
      explanation: "Seasons are caused by Earth's axial tilt. If Earth were not tilted, every location would receive the same amount of sunlight year-round and there would be no seasons.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q11",
      topic: "Seasons",
      type: "mcq",
      question: "What causes Earth to have seasons?",
      options: [
        "Earth's distance from the Sun changes greatly throughout the year",
        "Earth's axial tilt means different hemispheres receive more direct sunlight at different times of year",
        "The Moon blocks sunlight during winter",
        "Earth slows down in its orbit in winter"
      ],
      answer: 1,
      explanation: "Seasons are caused by Earth's 23.5° axial tilt. As Earth orbits the Sun, the Northern Hemisphere tilts toward the Sun in summer (receiving more direct sunlight) and away in winter."
    },
    {
      id: "sc3_q12",
      topic: "Seasons",
      type: "mcq",
      question: "When is it summer in the Northern Hemisphere?",
      options: [
        "When Earth is closest to the Sun in its orbit",
        "When the Northern Hemisphere is tilted toward the Sun",
        "When the Southern Hemisphere is tilted toward the Sun",
        "When days are shortest in the Northern Hemisphere"
      ],
      answer: 1,
      explanation: "It is summer in the Northern Hemisphere when that hemisphere is tilted toward the Sun, receiving more direct sunlight for longer each day. This is not necessarily when Earth is closest to the Sun."
    },
    {
      id: "sc3_q13",
      topic: "Seasons",
      type: "mcq",
      question: "When it is summer in the Northern Hemisphere, what season is it in the Southern Hemisphere?",
      options: ["Summer", "Spring", "Autumn", "Winter"],
      answer: 3,
      explanation: "When the Northern Hemisphere is tilted toward the Sun (summer), the Southern Hemisphere is tilted away from the Sun, experiencing winter. The two hemispheres always have opposite seasons."
    },
    {
      id: "sc3_q14",
      topic: "Seasons",
      type: "mcq",
      question: "Why are summer days longer than winter days?",
      options: [
        "Earth rotates faster in summer",
        "The Sun is larger in summer",
        "When your hemisphere is tilted toward the Sun, that part of Earth spends more time in daylight as it rotates",
        "The Moon causes Earth to slow its rotation in winter"
      ],
      answer: 2,
      explanation: "When your hemisphere is tilted toward the Sun, more of your daily rotation is spent in sunlight. This gives longer days in summer. In winter, more of your rotation is in darkness, giving shorter days."
    },
    {
      id: "sc3_q15",
      topic: "Seasons",
      type: "mcq",
      question: "At the summer solstice in the Northern Hemisphere, what is true?",
      options: [
        "It is the shortest day of the year in the Northern Hemisphere",
        "It is the longest day of the year in the Northern Hemisphere",
        "Day and night are of equal length everywhere",
        "The Northern Hemisphere is tilted away from the Sun"
      ],
      answer: 1,
      explanation: "The summer solstice (around 21 June) is the longest day of the year in the Northern Hemisphere. The Northern Hemisphere is tilted most directly toward the Sun, giving the most daylight hours."
    },
    {
      id: "sc3_q16",
      topic: "Seasons",
      type: "mcq",
      question: "What is the equinox?",
      options: [
        "The day when Earth is closest to the Sun",
        "The day when day and night are of approximately equal length everywhere on Earth",
        "The first day of summer",
        "The day when the Moon is fullest"
      ],
      answer: 1,
      explanation: "An equinox occurs twice a year (around 21 March and 23 September) when neither hemisphere is tilted toward the Sun, making day and night approximately equal in length everywhere on Earth."
    },
    {
      id: "sc3_q17",
      topic: "Day and Night",
      type: "mcq",
      question: "Which part of the Earth experiences midnight sun (sunlight 24 hours a day) in summer?",
      options: ["The equator", "The tropics", "The polar regions", "The temperate zones"],
      answer: 2,
      explanation: "During summer, the polar regions (areas near the North or South Pole) can experience 24-hour sunlight because they remain tilted toward the Sun throughout Earth's entire daily rotation.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q18",
      topic: "Orbit",
      type: "mcq",
      question: "What keeps Earth in its orbit around the Sun?",
      options: [
        "The heat from the Sun pushes Earth along its orbit",
        "Magnetism between Earth and the Sun",
        "Gravity between Earth and the Sun",
        "The force of Earth's rotation"
      ],
      answer: 2,
      explanation: "Gravity between Earth and the Sun keeps Earth in its orbit. The Sun's massive gravity pulls Earth toward it, while Earth's orbital speed prevents it from falling directly into the Sun."
    },
    {
      id: "sc3_q19",
      topic: "Orbit",
      type: "mcq",
      question: "How does the Moon get its light?",
      options: [
        "The Moon generates its own light like the Sun",
        "The Moon reflects light from the Sun",
        "The Moon absorbs heat from Earth and glows",
        "Stars shine on the Moon and it re-emits light"
      ],
      answer: 1,
      explanation: "The Moon does not produce its own light. It reflects sunlight from its surface. The phases of the Moon are caused by how much of the lit side we can see from Earth."
    },
    {
      id: "sc3_q20",
      topic: "Day and Night",
      type: "mcq",
      question: "If you were standing at the North Pole on the day of the winter solstice (December 21), what would you experience?",
      options: [
        "24 hours of daylight",
        "12 hours of day and 12 hours of night",
        "24 hours of darkness",
        "Constantly changing light conditions"
      ],
      answer: 2,
      explanation: "At the winter solstice, the North Pole is tilted away from the Sun. The entire Arctic region experiences 24 hours of darkness — the Sun never rises above the horizon.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q21",
      topic: "Earth's Tilt",
      type: "mcq",
      question: "Earth's axis always points toward which star?",
      options: ["Sirius", "Betelgeuse", "The North Star (Polaris)", "Alpha Centauri"],
      answer: 2,
      explanation: "Earth's axis is currently aligned to point toward Polaris, the North Star. This is why Polaris appears fixed in the sky while other stars appear to rotate around it.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q22",
      topic: "Orbit",
      type: "mcq",
      question: "Why do we have a leap year every 4 years?",
      options: [
        "Earth slows down slightly every 4 years",
        "Because Earth's orbit takes 365.25 days, and four extra quarter-days add up to one extra day",
        "To keep calendars aligned with the Moon's phases",
        "Because the Sun's gravity changes every 4 years"
      ],
      answer: 1,
      explanation: "Earth's orbit takes 365.25 days. Calendars use 365 days, so the extra 0.25 accumulates. Every 4 years we add a leap day (Feb 29) to keep our calendar aligned with Earth's actual orbit."
    },
    {
      id: "sc3_q23",
      topic: "Seasons",
      type: "mcq",
      question: "A student claims: 'It is summer because Earth is closer to the Sun.' Why is this claim wrong?",
      options: [
        "It is wrong because the Sun is the same distance from Earth all year",
        "It is wrong because seasons are caused by tilt, not distance — Earth is actually slightly closer to the Sun in January (Northern Hemisphere winter)",
        "It is correct — distance is the main cause of seasons",
        "It is wrong because distance does not affect temperature"
      ],
      answer: 1,
      explanation: "Seasons are primarily caused by Earth's axial tilt, not distance. In fact, Earth is closest to the Sun around January (Northern Hemisphere winter), proving that distance alone cannot explain seasons.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q24",
      topic: "Day and Night",
      type: "mcq",
      question: "What is the imaginary line through the centre of the Earth that it rotates around called?",
      options: ["The equator", "The prime meridian", "Earth's axis", "The orbital plane"],
      answer: 2,
      explanation: "Earth's axis is the imaginary line running through the Earth from the North Pole to the South Pole. Earth rotates around this axis once every 24 hours."
    },
    {
      id: "sc3_q25",
      topic: "Earth's Tilt",
      type: "mcq",
      question: "When the Northern Hemisphere is tilted toward the Sun, sunlight hits it at a more direct angle. Why does this cause higher temperatures?",
      options: [
        "Direct sunlight travels faster than angled sunlight",
        "The Sun is larger when viewed at a direct angle",
        "Direct sunlight concentrates more energy on a smaller area of ground, making it hotter",
        "Direct sunlight contains more ultraviolet radiation only"
      ],
      answer: 2,
      explanation: "When sunlight hits at a direct angle, the same amount of solar energy is concentrated in a smaller area, delivering more heat per square metre. At low angles, the energy spreads over a larger area and is less intense.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q26",
      topic: "Orbit",
      type: "mcq",
      question: "Which of the following is a revolution but not a rotation?",
      options: [
        "Earth spinning on its axis in 24 hours",
        "Earth orbiting the Sun in 365.25 days",
        "The Moon spinning on its axis",
        "A top spinning on a table"
      ],
      answer: 1,
      explanation: "Revolution is the motion of one object orbiting another. Earth orbiting the Sun is a revolution. Earth spinning on its own axis is rotation."
    },
    {
      id: "sc3_q27",
      topic: "Day and Night",
      type: "mcq",
      question: "At which location on Earth is the length of day and night almost always equal throughout the year?",
      options: ["North Pole", "South Pole", "The equator", "The Arctic Circle"],
      answer: 2,
      explanation: "At the equator, day and night are roughly equal (about 12 hours each) throughout the year. This is because the equator is equidistant from both poles and is not significantly affected by Earth's tilt."
    },
    {
      id: "sc3_q28",
      topic: "Seasons",
      type: "mcq",
      question: "Australia has its summer in December and January. Why?",
      options: [
        "Australia is in the Southern Hemisphere, which is tilted toward the Sun in December",
        "Australia is closer to the Sun in December",
        "The equator keeps Australia warm in December",
        "Australia does not experience seasons"
      ],
      answer: 0,
      explanation: "Australia is in the Southern Hemisphere. In December, the Southern Hemisphere is tilted toward the Sun, receiving more direct sunlight — making it summer. The Northern Hemisphere is tilted away, experiencing winter."
    },
    {
      id: "sc3_q29",
      topic: "Orbit",
      type: "mcq",
      question: "What is one astronomical unit (AU)?",
      options: [
        "The distance light travels in one year",
        "The average distance from Earth to the Sun",
        "The distance from Earth to the Moon",
        "The diameter of the Solar System"
      ],
      answer: 1,
      explanation: "One astronomical unit (AU) is the average distance from Earth to the Sun, approximately 150 million km. It is used to measure distances within the Solar System."
    },
    {
      id: "sc3_q30",
      topic: "Day and Night",
      type: "mcq",
      question: "If Earth rotated twice as fast (a 12-hour day instead of 24 hours), what would change?",
      options: [
        "Seasons would be twice as long",
        "Years would be twice as long",
        "Day and night periods would each be about 6 hours long",
        "The Moon would orbit Earth twice as fast"
      ],
      answer: 2,
      explanation: "If Earth rotated twice as fast, each rotation would take 12 hours. Each half would be in sunlight or darkness for about 6 hours. Seasons and the length of the year would not change — they depend on Earth's orbit, not rotation.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q31",
      topic: "Earth's Tilt",
      type: "mcq",
      question: "The winter solstice in the Northern Hemisphere occurs around which date?",
      options: ["21 March", "21 June", "23 September", "21 December"],
      answer: 3,
      explanation: "The winter solstice in the Northern Hemisphere occurs around 21 December — the shortest day and longest night of the year in the Northern Hemisphere."
    },
    {
      id: "sc3_q32",
      topic: "Seasons",
      type: "mcq",
      question: "Why do areas near the equator not experience distinct seasons?",
      options: [
        "They are always shielded from sunlight by clouds",
        "They receive roughly the same amount of direct sunlight throughout the year due to Earth's tilt",
        "Gravity is weaker near the equator",
        "The equator always faces away from the Sun"
      ],
      answer: 1,
      explanation: "The equator is roughly equidistant from both poles, so Earth's 23.5° tilt does not greatly change the angle at which sunlight hits equatorial regions throughout the year. They receive fairly consistent solar energy year-round."
    },
    {
      id: "sc3_q33",
      topic: "Orbit",
      type: "mcq",
      question: "What do we call the path Earth follows as it travels around the Sun?",
      options: ["Rotation", "Axis", "Orbit", "Tilt"],
      answer: 2,
      explanation: "An orbit is the path one object takes as it travels around another under the influence of gravity. Earth's orbit around the Sun is slightly elliptical and takes 365.25 days to complete."
    },
    {
      id: "sc3_q34",
      topic: "Day and Night",
      type: "mcq",
      question: "A friend says the Sun 'rises' each morning. As a scientist, what is a more accurate description?",
      options: [
        "The Sun moves up over the horizon as it orbits Earth",
        "Earth's rotation carries your location from the night side into the sunlit side, making the Sun appear to rise",
        "The atmosphere bends sunlight upward in the morning",
        "The Moon pulls the Sun into view each morning"
      ],
      answer: 1,
      explanation: "The Sun does not actually move — it only appears to rise because Earth's rotation carries you from the dark (night) side of Earth into the sunlit side. The apparent sunrise is an effect of Earth's rotation.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q35",
      topic: "Day and Night",
      type: "short",
      question: "Explain in your own words why we have day and night on Earth.",
      answer: "Earth spins on its own axis once every 24 hours. The half of Earth facing the Sun experiences daytime, while the half facing away is in darkness (night). As Earth rotates, different places move into and out of sunlight, creating the cycle of day and night."
    },
    {
      id: "sc3_q36",
      topic: "Rotation vs Revolution",
      type: "short",
      question: "Describe the difference between Earth's rotation and its revolution around the Sun.",
      answer: "Rotation is Earth spinning on its own axis, taking 24 hours. It causes day and night. Revolution is Earth's journey in its orbit around the Sun, taking 365.25 days (one year). It contributes to the cycle of seasons."
    },
    {
      id: "sc3_q37",
      topic: "Seasons",
      type: "short",
      question: "Explain why the Northern Hemisphere has summer at the same time that the Southern Hemisphere has winter.",
      answer: "Earth's axis is tilted at 23.5°. When the Northern Hemisphere is tilted toward the Sun, it receives more direct sunlight and longer days — this is Northern summer. At the same time, the Southern Hemisphere is tilted away, receiving less direct sunlight and shorter days — this is Southern winter. Six months later the situation is reversed.",
      difficulty: "challenging"
    },
    {
      id: "sc3_q38",
      topic: "Earth's Tilt",
      type: "short",
      question: "Why does Earth have seasons? What is the key cause?",
      answer: "Earth has seasons because its axis is tilted at 23.5° relative to its orbit. As Earth travels around the Sun, different hemispheres receive more or less direct sunlight at different times of year. More direct sunlight = more energy per unit area = higher temperatures (summer). The distance from the Sun is NOT the main cause."
    }
  ]
};
