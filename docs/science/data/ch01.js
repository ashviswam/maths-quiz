const ch01 = {
  id: 1,
  title: "Space & The Solar System",
  icon: "🌌",
  color: "#6366f1",
  topics: ["The Big Bang", "Atoms & Elements", "Gravity & Stars", "Solar System Formation"],
  questions: [
    {
      id: "sc1_q1",
      topic: "The Big Bang",
      type: "mcq",
      question: "Approximately how old is the universe?",
      options: ["4.5 billion years", "13.8 billion years", "100 billion years", "1 billion years"],
      answer: 1,
      explanation: "The Big Bang occurred approximately 13.8 billion years ago, marking the beginning of space, time, and all matter and energy in the universe."
    },
    {
      id: "sc1_q2",
      topic: "The Big Bang",
      type: "mcq",
      question: "What does the Big Bang theory describe?",
      options: [
        "A massive explosion on the Sun",
        "The beginning of the entire universe from an extremely hot, dense point",
        "The collision of two galaxies",
        "The formation of planet Earth"
      ],
      answer: 1,
      explanation: "The Big Bang theory describes the origin of the universe from an extremely hot, dense state that expanded rapidly, creating space, time, matter, and energy."
    },
    {
      id: "sc1_q3",
      topic: "The Big Bang",
      type: "mcq",
      question: "Which two elements were formed in the earliest moments after the Big Bang?",
      options: ["Carbon and oxygen", "Iron and nickel", "Hydrogen and helium", "Nitrogen and neon"],
      answer: 2,
      explanation: "Hydrogen and helium were the first elements to form in the first few minutes after the Big Bang, and they still make up most of the matter in the universe today."
    },
    {
      id: "sc1_q4",
      topic: "The Big Bang",
      type: "mcq",
      question: "What is the main piece of evidence that supports the Big Bang theory?",
      options: [
        "The Sun produces heat and light",
        "Galaxies are moving away from us — the universe is expanding",
        "Earth orbits the Sun every 365 days",
        "The Moon causes ocean tides"
      ],
      answer: 1,
      explanation: "Astronomers observe that galaxies are moving away from us in every direction, showing the universe is expanding — exactly what you would expect if it started from a single point in the Big Bang."
    },
    {
      id: "sc1_q5",
      topic: "The Big Bang",
      type: "mcq",
      question: "After the Big Bang, which of the following formed first?",
      options: ["Planets", "Stars", "Hydrogen atoms", "Solar systems"],
      answer: 2,
      explanation: "Simple hydrogen atoms formed first, within a few hundred thousand years of the Big Bang, long before stars, planets, or solar systems existed."
    },
    {
      id: "sc1_q6",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "What is an atom?",
      options: [
        "The smallest particle of light",
        "The basic building block of all matter",
        "A type of star",
        "A cloud of gas in space"
      ],
      answer: 1,
      explanation: "An atom is the basic building block of all matter. Everything around us is made of atoms, which are incredibly tiny particles."
    },
    {
      id: "sc1_q7",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "What two particles make up a hydrogen atom?",
      options: [
        "A proton and a neutron",
        "A proton and an electron",
        "Two protons and one electron",
        "An electron and a neutron"
      ],
      answer: 1,
      explanation: "A hydrogen atom is the simplest atom: it has one proton in the nucleus and one electron orbiting around it. It has no neutron."
    },
    {
      id: "sc1_q8",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "Where is the proton found inside an atom?",
      options: ["In the outer shell", "Orbiting the nucleus", "In the nucleus", "Spread evenly throughout"],
      answer: 2,
      explanation: "The proton is found in the nucleus at the centre of the atom. Electrons orbit around the nucleus."
    },
    {
      id: "sc1_q9",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "What is an element?",
      options: [
        "A mixture of different types of atoms",
        "A substance made of only one type of atom",
        "A type of chemical reaction",
        "A layer of Earth's atmosphere"
      ],
      answer: 1,
      explanation: "An element is a pure substance made of only one type of atom. Hydrogen, carbon, and oxygen are examples of elements."
    },
    {
      id: "sc1_q10",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "Which element is the most abundant in the universe?",
      options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
      answer: 3,
      explanation: "Hydrogen is by far the most abundant element in the universe, making up about 75% of all ordinary matter. It was the first element to form after the Big Bang."
    },
    {
      id: "sc1_q11",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "What is gravity?",
      options: [
        "A force that pushes objects apart",
        "A force that pulls objects with mass toward each other",
        "The energy released by the Sun",
        "The speed at which planets orbit the Sun"
      ],
      answer: 1,
      explanation: "Gravity is a force of attraction that pulls any two objects with mass toward each other. The more massive an object, the stronger its gravitational pull."
    },
    {
      id: "sc1_q12",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "How does gravity cause a star to form?",
      options: [
        "Gravity pushes gas clouds apart, leaving a dense star behind",
        "Gravity pulls a cloud of gas and dust together until it becomes so dense and hot it begins nuclear fusion",
        "Gravity attracts only heavy metals, which clump together to form stars",
        "Gravity causes planets to crash into each other"
      ],
      answer: 1,
      explanation: "Gravity pulls a large cloud of hydrogen gas together. As the gas collapses, it heats up and becomes denser until nuclear fusion ignites in the core, giving birth to a star."
    },
    {
      id: "sc1_q13",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "What process produces the energy inside a star?",
      options: ["Combustion (burning)", "Nuclear fission", "Nuclear fusion", "Evaporation"],
      answer: 2,
      explanation: "Stars produce energy through nuclear fusion, where hydrogen nuclei are fused together under extreme heat and pressure to form helium, releasing enormous amounts of energy."
    },
    {
      id: "sc1_q14",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "Which elements can be created by nuclear fusion inside stars?",
      options: [
        "Only hydrogen and helium",
        "Only carbon and oxygen",
        "Elements heavier than hydrogen, up to iron",
        "All elements including gold and uranium"
      ],
      answer: 2,
      explanation: "Nuclear fusion inside stars can build elements heavier than hydrogen, fusing lighter nuclei into heavier ones up to iron. Elements heavier than iron are only created in supernova explosions.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q15",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "What is a supernova?",
      options: [
        "A new planet forming around a star",
        "A powerful explosion at the end of a massive star's life",
        "The bright glow of a young star just starting up",
        "A type of comet that orbits the Sun"
      ],
      answer: 1,
      explanation: "A supernova is a massive explosion that occurs when a large star reaches the end of its life. The explosion scatters elements created by the star throughout space."
    },
    {
      id: "sc1_q16",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "Why are supernovas important for life in the universe?",
      options: [
        "They destroy old galaxies to make room for new ones",
        "They scatter elements heavier than hydrogen throughout space, providing material for new planets and life",
        "They increase the temperature of nearby stars",
        "They create new black holes that hold galaxies together"
      ],
      answer: 1,
      explanation: "Supernovas are crucial because they spread heavy elements like carbon, oxygen, and iron through space. These elements become the building blocks of new planets and, ultimately, living organisms."
    },
    {
      id: "sc1_q17",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "Where did the atoms that make up your body originally come from?",
      options: [
        "They were always on Earth",
        "They were created inside stars and spread by supernovas",
        "They arrived on Earth inside comets",
        "They were made when Earth formed from rock"
      ],
      answer: 1,
      explanation: "The heavy atoms in your body — carbon, oxygen, iron — were forged inside stars through nuclear fusion and scattered into space by supernova explosions, eventually becoming part of our solar system and you.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q18",
      topic: "Solar System Formation",
      type: "mcq",
      question: "How old is our Solar System?",
      options: ["13.8 billion years", "10 billion years", "4.6 billion years", "1 billion years"],
      answer: 2,
      explanation: "Our Solar System formed about 4.6 billion years ago from a large cloud of gas and dust — much younger than the universe itself, which is 13.8 billion years old."
    },
    {
      id: "sc1_q19",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What triggered the collapse of the gas cloud that formed our Solar System?",
      options: [
        "A passing comet struck the cloud",
        "The cloud got too cold and froze",
        "Gravity caused the cloud to collapse inward",
        "A nearby star's heat pushed the cloud together"
      ],
      answer: 2,
      explanation: "Gravity caused the cloud of gas and dust to collapse inward on itself. As it collapsed, the centre became the Sun and the remaining material formed the planets."
    },
    {
      id: "sc1_q20",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What formed the planets in our Solar System?",
      options: [
        "The Sun threw off chunks of material as it formed",
        "Leftover gas and rocky material that did not fall into the Sun clumped together",
        "Planets drifted in from other solar systems",
        "The Moon broke apart and created the planets"
      ],
      answer: 1,
      explanation: "After the Sun formed, leftover gas and dust in a spinning disc around it gradually clumped together under gravity to form the planets, moons, asteroids, and comets."
    },
    {
      id: "sc1_q21",
      topic: "Solar System Formation",
      type: "mcq",
      question: "How many planets are in our Solar System?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      explanation: "There are 8 planets in our Solar System: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006."
    },
    {
      id: "sc1_q22",
      topic: "Solar System Formation",
      type: "mcq",
      question: "The inner planets (Mercury, Venus, Earth, Mars) are mostly rocky, while the outer planets (Jupiter, Saturn, Uranus, Neptune) are mostly gas. Why?",
      options: [
        "The inner planets are newer and have not become gas yet",
        "Close to the young Sun, lighter gases were blown away; only heavy rocky material stayed",
        "The outer planets are too cold for rocks to exist",
        "The inner planets were made only from supernova debris"
      ],
      answer: 1,
      explanation: "The heat and solar wind from the young Sun drove lighter gases away from the inner Solar System. Rocky materials survived close to the Sun, while gas and ice planets formed further out where it was colder.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q23",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What keeps the planets in orbit around the Sun?",
      options: [
        "Magnetism from the Sun",
        "The heat radiating from the Sun",
        "Gravity between the Sun and each planet",
        "The speed of the solar wind"
      ],
      answer: 2,
      explanation: "Gravity between the Sun and each planet keeps the planets in their orbits. The Sun's massive gravity pulls on the planets, and their orbital speed prevents them from falling directly into the Sun."
    },
    {
      id: "sc1_q24",
      topic: "The Big Bang",
      type: "mcq",
      question: "Which statement best describes what happened in the first second after the Big Bang?",
      options: [
        "Stars immediately began to form",
        "The universe was extremely hot and dense, and subatomic particles began to form",
        "Planets formed from cooling rocks",
        "The universe was cold and empty"
      ],
      answer: 1,
      explanation: "In the first fraction of a second after the Big Bang, the universe was unimaginably hot and dense. Fundamental particles like protons and neutrons formed as it rapidly expanded and cooled.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q25",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "What electric charge does an electron carry?",
      options: ["Positive", "Negative", "Neutral", "It has no charge"],
      answer: 1,
      explanation: "Electrons carry a negative electric charge. Protons in the nucleus carry a positive charge, and the attraction between them holds the atom together."
    },
    {
      id: "sc1_q26",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "What electric charge does a proton carry?",
      options: ["Negative", "Neutral", "Positive", "Variable — it depends on the element"],
      answer: 2,
      explanation: "Protons carry a positive electric charge. In a neutral atom, the number of protons equals the number of electrons, so the overall atom is neutral."
    },
    {
      id: "sc1_q27",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "A star spends most of its life fusing hydrogen into helium. What happens when its hydrogen fuel runs out?",
      options: [
        "The star gets brighter and burns forever",
        "The star immediately explodes as a supernova",
        "The star begins to change — smaller stars expand into red giants and eventually collapse",
        "The star converts directly into a planet"
      ],
      answer: 2,
      explanation: "When hydrogen fuel runs out, a star's core collapses and outer layers expand — smaller stars become red giants and eventually shed their layers to leave a white dwarf, while massive stars explode as supernovas.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q28",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What is the asteroid belt?",
      options: [
        "A ring of gas around Jupiter",
        "A band of rocky debris between Mars and Jupiter that never formed into a planet",
        "A collection of icy comets beyond Neptune",
        "The orbit path shared by Earth and Venus"
      ],
      answer: 1,
      explanation: "The asteroid belt is a region between Mars and Jupiter containing millions of rocky bodies that never clumped into a full planet, largely due to Jupiter's strong gravitational influence."
    },
    {
      id: "sc1_q29",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What is a comet?",
      options: [
        "A small rocky planet that lost its atmosphere",
        "An icy body that develops a bright tail of gas and dust when it travels close to the Sun",
        "A fragment of a destroyed planet",
        "A moon that escaped a planet's gravity"
      ],
      answer: 1,
      explanation: "A comet is a small icy body from the outer Solar System. When its orbit brings it close to the Sun, heat vaporises the ice, creating a bright tail of gas and dust that can stretch millions of kilometres."
    },
    {
      id: "sc1_q30",
      topic: "The Big Bang",
      type: "mcq",
      question: "The universe is described as expanding. What does this mean?",
      options: [
        "Stars are growing larger over time",
        "Galaxies are moving further apart from each other over time",
        "New planets are continuously being formed",
        "The Sun is getting hotter every year"
      ],
      answer: 1,
      explanation: "Expansion of the universe means that the space between galaxies is stretching over time, so galaxies are moving further apart. This was first discovered by Edwin Hubble in the 1920s."
    },
    {
      id: "sc1_q31",
      topic: "Gravity & Stars",
      type: "mcq",
      question: "Which force is responsible for holding a star together against the outward pressure of nuclear fusion?",
      options: ["Magnetism", "Electricity", "Gravity", "Friction"],
      answer: 2,
      explanation: "Gravity pulls the star's gas inward, balancing the outward pressure from nuclear fusion in the core. This balance keeps a star stable for millions or billions of years.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q32",
      topic: "Atoms & Elements",
      type: "mcq",
      question: "Carbon, oxygen, and iron are all found in your body. Where were these elements created?",
      options: [
        "In Earth's atmosphere over millions of years",
        "In the Big Bang itself",
        "Inside stars through nuclear fusion",
        "In underground volcanoes"
      ],
      answer: 2,
      explanation: "Carbon, oxygen, iron, and other heavy elements were all forged by nuclear fusion inside previous generations of stars. When those stars died in supernovas, the elements were scattered through space."
    },
    {
      id: "sc1_q33",
      topic: "Solar System Formation",
      type: "mcq",
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mars", "Mercury"],
      answer: 3,
      explanation: "Mercury is the closest planet to the Sun. Its proximity means surface temperatures can reach over 400°C during the day and drop to -180°C at night."
    },
    {
      id: "sc1_q34",
      topic: "Solar System Formation",
      type: "mcq",
      question: "What is the correct order of the inner planets from the Sun outward?",
      options: [
        "Mercury, Earth, Venus, Mars",
        "Mercury, Venus, Earth, Mars",
        "Venus, Mercury, Earth, Mars",
        "Mars, Earth, Venus, Mercury"
      ],
      answer: 1,
      explanation: "The inner planets in order from the Sun are: Mercury, Venus, Earth, Mars. A helpful way to remember is 'My Very Educated Mother'."
    },
    {
      id: "sc1_q35",
      topic: "The Big Bang",
      type: "short",
      question: "Describe what the Big Bang was and when it occurred.",
      answer: "The Big Bang was the beginning of the universe, occurring approximately 13.8 billion years ago. It was a rapid expansion of all space, time, matter, and energy from an extremely hot, dense point — not an explosion in space, but an expansion of space itself."
    },
    {
      id: "sc1_q36",
      topic: "Gravity & Stars",
      type: "short",
      question: "Explain in your own words how gravity causes a star to form from a cloud of gas and dust.",
      answer: "Gravity pulls gas and dust particles together. As they accumulate, the cloud grows denser and hotter. When the core temperature becomes high enough, nuclear fusion begins — hydrogen atoms fuse to form helium — releasing enormous energy and 'switching on' the star."
    },
    {
      id: "sc1_q37",
      topic: "Atoms & Elements",
      type: "short",
      question: "How are elements heavier than hydrogen created and spread through the universe?",
      answer: "Heavier elements are created inside stars through nuclear fusion, where lighter elements combine under extreme heat and pressure to form heavier ones (e.g. carbon, oxygen, iron). When a massive star explodes as a supernova, these elements are scattered across the universe, eventually forming new stars, planets, and even life."
    },
    {
      id: "sc1_q38",
      topic: "Solar System Formation",
      type: "short",
      question: "Describe how planets form after a star is born.",
      answer: "After a star forms, leftover gas, dust, and rocky debris remain orbiting the young star. Gravity causes these particles to slowly clump together. Over millions of years the clumps grow larger, sweep up more material, and eventually become planets.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q39",
      topic: "Atoms & Elements",
      type: "short",
      question: "Describe the structure of a hydrogen atom.",
      answer: "A hydrogen atom has one proton in its nucleus and one electron orbiting around the nucleus. It has no neutrons. It is the simplest and most abundant element in the universe."
    },
    {
      id: "sc1_q40",
      topic: "The Big Bang",
      type: "short",
      question: "In your own words, explain what scientists mean when they say the universe began with the Big Bang. What existed before it?",
      answer: "The Big Bang describes the origin of the entire universe — all space, time, matter, and energy — from an unimaginably hot, dense point approximately 13.8 billion years ago. It was not an explosion in existing space, but the rapid expansion of space itself. Scientists believe nothing (not even space or time) existed before the Big Bang.",
      explanation: "Students often say the Big Bang was 'an explosion in space'. The key correction is that space itself came into existence — there was no 'before' or 'outside'. Accept any answer that captures the idea of all space/time/matter beginning at one moment."
    },
    {
      id: "sc1_q41",
      topic: "The Big Bang",
      type: "short",
      question: "Describe two pieces of evidence that support the Big Bang theory.",
      answer: "1. The expanding universe: astronomers observe that galaxies are moving away from us in all directions — the further away a galaxy, the faster it is receding. This shows the universe is expanding, which is exactly what you would expect if it began from a single point. 2. Cosmic microwave background (CMB) radiation: faint radiation fills the universe in every direction — the leftover heat from the Big Bang, now cooled to a very low temperature.",
      explanation: "Grade 6 level: at minimum, students should know about the expanding universe (Hubble's observation). CMB radiation is a stretch answer. Accept any two well-explained points."
    },
    {
      id: "sc1_q42",
      topic: "Gravity & Stars",
      type: "short",
      question: "Explain the role of gravity in the formation of stars. Use the words 'gas cloud', 'collapse', 'temperature', and 'nuclear fusion' in your answer.",
      answer: "Stars form from large clouds of gas (mainly hydrogen) in space. Gravity pulls the gas cloud inward, causing it to collapse. As the cloud collapses, the particles are squeezed together and the temperature rises dramatically. When the core reaches millions of degrees, nuclear fusion ignites — hydrogen atoms fuse together to form helium, releasing enormous amounts of energy. This energy radiates outward as light and heat, and the star 'switches on'.",
      explanation: "Check that the student uses all four key terms correctly. The key chain of events is: gas cloud → gravity causes collapse → temperature increases → nuclear fusion begins → star is born."
    },
    {
      id: "sc1_q43",
      topic: "Gravity & Stars",
      type: "short",
      question: "Explain how a supernova spreads elements through the universe and why this is important for life.",
      answer: "During its lifetime, a massive star creates heavy elements (such as carbon, oxygen, iron, and gold) through nuclear fusion. When the star runs out of fuel, its core collapses and it explodes in a violent supernova. This explosion scatters all the elements the star has made across space. Over time, these elements mix with clouds of gas and dust that can collapse under gravity to form new stars and planets. All the heavy atoms in living things — including the carbon in our bodies — were made in stars and spread by supernovas.",
      explanation: "The key ideas are: (1) stars make heavy elements by fusion, (2) supernova scatters them, (3) these elements become part of new planets and life. 'We are made of stardust' is a poetic summary of this process.",
      difficulty: "challenging"
    },
    {
      id: "sc1_q44",
      topic: "Atoms & Elements",
      type: "short",
      question: "Using a simple model, describe the structure of a hydrogen atom. Include where each particle is found and its electric charge.",
      answer: "A hydrogen atom has two types of particles: one proton and one electron. The proton is found in the nucleus at the centre of the atom and carries a positive (+) charge. The electron is much smaller and orbits the nucleus in a shell; it carries a negative (−) charge. A hydrogen atom has no neutrons. Overall the atom is neutral because the positive and negative charges cancel each other out.",
      explanation: "Students should be able to draw or describe this as a central nucleus (proton) with one electron orbiting around it. Emphasise: proton = positive, in nucleus; electron = negative, orbiting outside."
    },
    {
      id: "sc1_q45",
      topic: "Solar System Formation",
      type: "short",
      question: "Describe how our Solar System formed from a cloud of gas and dust. Use the word 'gravity' in your answer.",
      answer: "About 4.6 billion years ago, a large cloud of gas and dust (mainly hydrogen) in space began to collapse under gravity. As it collapsed, the material in the centre became denser and hotter until nuclear fusion started, forming the Sun. The remaining gas and dust formed a spinning disc around the young Sun. Gravity caused particles in this disc to clump together over millions of years, eventually forming the planets, moons, asteroids, and comets of our Solar System.",
      explanation: "The essential steps are: cloud of gas/dust → gravity causes collapse → Sun forms at centre → remaining disc forms planets. Students should mention gravity as the driving force."
    }
  ]
};
