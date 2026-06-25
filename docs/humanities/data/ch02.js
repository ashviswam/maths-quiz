const ch02 = {
  id: 2,
  title: "Early Humans",
  icon: "🦴",
  color: "#d97706",
  topics: ["Evidence from the Past", "Adaptation & Evolution", "Human Species Timeline", "Hunter-Gatherers to Farmers"],
  questions: [

    // ── Evidence from the Past ─────────────────────────────────
    {
      id: "hum2_q1",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "What is the difference between a fossil and an artefact?",
      options: [
        "A fossil is the remains of a once-living organism; an artefact is a human-made object",
        "A fossil is made by humans; an artefact is a natural remain",
        "Both are the same — they describe very old objects found underground",
        "A fossil is only found in water; an artefact is only found in caves"
      ],
      answer: 0,
      explanation: "Fossils are preserved remains or traces of once-living organisms (bones, teeth, footprints preserved in rock). Artefacts are objects made or modified by humans — tools, pottery, jewellery. Both provide evidence about life in the past."
    },
    {
      id: "hum2_q2",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "Which of the following is an example of an artefact?",
      options: ["An Oldowan stone chopper tool", "A dinosaur footprint in rock", "Lucy's fossilised bones", "A mosquito preserved in amber"],
      answer: 0,
      explanation: "An artefact is a human-made object. The Oldowan stone chopper is a tool shaped by early hominins. Dinosaur footprints and fossilised bones are fossils (natural remains). Amber-preserved insects are also fossils."
    },
    {
      id: "hum2_q3",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "A primary source is best described as:",
      options: [
        "Direct evidence from the past, such as a fossil or original artefact",
        "A book written by a historian describing the past",
        "A museum display recreating ancient life",
        "A documentary film about early humans"
      ],
      answer: 0,
      explanation: "Primary sources are direct, first-hand evidence from the time period being studied — physical objects like fossils, artefacts, or original documents. Secondary sources are interpretations created later, such as books, reconstructions, or documentaries."
    },
    {
      id: "hum2_q4",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "An inference in history and archaeology is best defined as:",
      options: [
        "A conclusion based on evidence and reasoning",
        "A proven fact confirmed by multiple sources",
        "A guess made without any supporting evidence",
        "A measurement taken from a fossil"
      ],
      answer: 0,
      explanation: "An inference is a reasoned conclusion — it uses the evidence you observe plus what you already know to make a logical guess. It is not random guessing, but it is also not a proven fact. Historians and archaeologists constantly make inferences from incomplete evidence."
    },
    {
      id: "hum2_q5",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "An archaeologist finds a flat, worn stone tool with smooth edges. The BEST inference from this evidence is that:",
      options: [
        "It was likely used for grinding plants or grain",
        "It was definitely used as a weapon",
        "It was a decorative ornament",
        "It is too old to have been made by humans"
      ],
      answer: 0,
      explanation: "When making an inference, we observe features (flat, smooth, worn) and connect them to a use. Flat, smooth stones are consistent with grinding tools for processing seeds or grain. The inference must fit the evidence — we cannot prove it was a weapon without further evidence."
    },
    {
      id: "hum2_q6",
      topic: "Evidence from the Past",
      type: "short",
      question: "The Cueva de las Manos ('Cave of the Hands') in Argentina contains hundreds of stencilled handprints made between 7,300 BC and 700 AD. Is this cave painting a fossil or an artefact? Is it a primary or secondary source? Write two inferences about what it tells us about the early humans who created it.",
      answer: "It is an artefact (human-made object, not a natural remain). It is a primary source (direct evidence from the time it was created). Inference 1: The people who made these handprints were creative and communicated through art, suggesting symbolic thinking. Inference 2: The fact that the paintings were created over a very long period (thousands of years) suggests this place had cultural or spiritual significance to many generations.",
      explanation: "The three-step inference process is: Observe → Ask Questions → Conclude. Using evidence + reasoning gives us an inference. Good inferences explain the 'why' behind what we observe."
    },
    {
      id: "hum2_q7",
      topic: "Evidence from the Past",
      type: "mcq",
      question: "A historian writes a book about early human life based on fossil evidence. This book is a:",
      options: ["Secondary source", "Primary source", "Fossil", "Artefact"],
      answer: 0,
      explanation: "The book is a secondary source — it is an interpretation written after the events, based on primary sources (the fossils). Secondary sources can be very valuable, but they are one step removed from the original evidence."
    },

    // ── Adaptation & Evolution ─────────────────────────────────
    {
      id: "hum2_q8",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "According to Darwin's theory, evolution occurs when:",
      options: [
        "Species slowly change over many generations through natural selection",
        "Organisms decide to change their behaviour to survive",
        "All members of a species change at exactly the same time",
        "New species appear suddenly after a single dramatic event"
      ],
      answer: 0,
      explanation: "Darwin's theory of evolution explains that species change gradually over many generations. Organisms with traits better suited to their environment survive longer and have more offspring — passing on those useful traits. This is called natural selection."
    },
    {
      id: "hum2_q9",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "Natural selection is best explained by which statement?",
      options: [
        "Organisms with helpful traits survive and pass them to offspring",
        "Stronger animals always defeat weaker ones in direct combat",
        "Organisms choose to develop new traits when the environment changes",
        "All organisms of a species have identical traits"
      ],
      answer: 0,
      explanation: "Natural selection means: organisms that happen to have traits better suited to their environment are more likely to survive, reproduce, and pass those traits to the next generation. The peppered moth is a classic example — darker moths survived better in polluted industrial areas."
    },
    {
      id: "hum2_q10",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "A structural adaptation is best described as:",
      options: [
        "A physical feature of an organism that helps it survive",
        "A change in behaviour in response to the environment",
        "A skill learned during an organism's lifetime",
        "A sudden change in a single generation"
      ],
      answer: 0,
      explanation: "Structural adaptations are physical features — body parts or physical characteristics that evolved over many generations to help an organism survive. Examples: a bear's thick fur, a giraffe's long neck, bipedalism (walking upright) in early humans."
    },
    {
      id: "hum2_q11",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "Bipedalism (walking upright on two legs) is a structural adaptation that helped early humans because:",
      options: [
        "It freed the hands for tool use and carrying food",
        "It made them faster runners than all predators",
        "It developed suddenly in a single generation",
        "It was only useful in cold climates"
      ],
      answer: 0,
      explanation: "Bipedalism freed the hands from the task of walking, allowing early humans to carry food, use tools, and eventually develop complex technology. It is a structural adaptation — a physical change to the body over many generations."
    },
    {
      id: "hum2_q12",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "Hibernation (sleeping through winter to conserve energy) is an example of:",
      options: [
        "A behavioural adaptation",
        "A structural adaptation",
        "An evolutionary dead end",
        "A learned skill passed through writing"
      ],
      answer: 0,
      explanation: "Behavioural adaptations are actions or patterns of behaviour that help an organism survive, such as hibernation, migration, or camouflage behaviour. They are different from structural adaptations, which are physical features."
    },
    {
      id: "hum2_q13",
      topic: "Adaptation & Evolution",
      type: "mcq",
      question: "Compared to Neanderthals, modern Homo sapiens have which physical difference?",
      options: [
        "Higher cranium (forehead) and smaller brow ridge",
        "Shorter forearms and broader rib cage",
        "Larger, more prominent nose",
        "Shorter tibias (lower leg bones)"
      ],
      answer: 0,
      explanation: "Neanderthals had a lower, flatter skull, a large brow ridge, broader rib cage, shorter forearms, and broader hips — all adaptations for cold climates and heavy physical labour. Homo sapiens developed a higher, rounder cranium allowing for greater brain capacity for language and abstract thinking."
    },
    {
      id: "hum2_q14",
      topic: "Adaptation & Evolution",
      type: "short",
      question: "Give ONE example of a structural adaptation and ONE example of a behavioural adaptation in humans (past or present). For each, explain HOW it helped humans survive.",
      answer: "Structural: Bipedalism (walking upright on two legs). It freed the hands for tool use, carrying food, and eventually making complex objects — improving survival and enabling cultural development. Behavioural: Use of fire (Homo erectus). Using fire for warmth, cooking food (making it safer and more nutritious), and protection from predators — all of which increased survival rates.",
      explanation: "Adaptations accumulate over many generations (structural) or are learned and passed on culturally (behavioural). Both are critical to human survival at different stages of evolution."
    },

    // ── Human Species Timeline ──────────────────────────────────
    {
      id: "hum2_q15",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "Which human species is known as 'Handy Man' because of its early stone tool use?",
      options: ["Homo habilis", "Homo erectus", "Homo sapiens", "Australopithecus afarensis"],
      answer: 0,
      explanation: "Homo habilis means 'Handy Man' — it is the earliest species with evidence of stone tool use. Tools and fossils of Homo habilis have been found at Olduvai Gorge, Tanzania. It lived approximately 2.4 to 1.4 million years ago."
    },
    {
      id: "hum2_q16",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "Which species was the first hominin to leave Africa and migrate to other parts of the world?",
      options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Neanderthals"],
      answer: 0,
      explanation: "Homo erectus (1.9 million to 110,000 years ago) was the first species to migrate out of Africa. Evidence includes the 'Turkana Boy' fossil in Kenya and hearth sites showing fire use. Later, Homo sapiens also spread out of Africa more widely."
    },
    {
      id: "hum2_q17",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "The fossil known as 'Lucy' belongs to which species?",
      options: ["Australopithecus afarensis", "Homo habilis", "Homo erectus", "Homo sapiens"],
      answer: 0,
      explanation: "Lucy is the famous fossil skeleton of Australopithecus afarensis, discovered in Ethiopia in 1974. She is dated to 3.2 million years ago and represents about 40% of a complete skeleton. Footprints of A. afarensis were also found in Laetoli, Tanzania."
    },
    {
      id: "hum2_q18",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "Neanderthals are known for all of the following EXCEPT:",
      options: [
        "Being the first species to leave Africa",
        "Burial of the dead",
        "Cold-climate body adaptations",
        "Making advanced stone tools"
      ],
      answer: 0,
      explanation: "Neanderthals (400,000–40,000 years ago) are known for burying their dead, cold-climate body adaptations (short stocky build), advanced tool innovation, and large brain size (~1,400 cc). Homo erectus, not Neanderthals, was the first to leave Africa."
    },
    {
      id: "hum2_q19",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "What is the correct chronological order of these species from OLDEST to most RECENT?",
      options: [
        "Australopithecus afarensis → Homo habilis → Homo erectus → Homo sapiens",
        "Homo erectus → Homo habilis → Australopithecus → Homo sapiens",
        "Homo sapiens → Neanderthals → Homo habilis → Australopithecus",
        "Homo habilis → Homo erectus → Australopithecus → Homo sapiens"
      ],
      answer: 0,
      explanation: "The chronological order is: Australopithecus afarensis (3.9–2.9 mya) → Homo habilis (2.4–1.4 mya) → Homo erectus (1.9 million–110,000 ya) → Homo sapiens (300,000 ya–present). Neanderthals (400,000–40,000 ya) overlapped with early Homo sapiens."
    },
    {
      id: "hum2_q20",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "The Assimilation Theory of human origins suggests that:",
      options: [
        "Homo sapiens evolved in Africa but interbred with Neanderthals and Denisovans while migrating",
        "Modern humans evolved simultaneously in several different regions of the world",
        "Homo sapiens originated entirely in Africa with no interbreeding with other species",
        "Neanderthals and Homo sapiens are completely separate species with no genetic connection"
      ],
      answer: 0,
      explanation: "The Assimilation Theory proposes that Homo sapiens originated in Africa but absorbed genetic traits from other species (Neanderthals, Denisovans) through interbreeding as they migrated. Evidence: non-African humans carry 1–2% Neanderthal DNA; some Southeast Asian populations have up to 5% Denisovan DNA."
    },
    {
      id: "hum2_q21",
      topic: "Human Species Timeline",
      type: "mcq",
      question: "DNA studies show that non-African Homo sapiens carry approximately 1–2% Neanderthal DNA. This evidence BEST supports which theory of human origins?",
      options: ["Assimilation Theory", "Out of Africa Theory", "Multiregional Theory", "Creationist Theory"],
      answer: 0,
      explanation: "The Assimilation Theory predicts that Homo sapiens and Neanderthals interbred. Finding Neanderthal DNA in modern non-African humans is direct evidence supporting this — it demonstrates that the two species were not completely isolated from each other."
    },
    {
      id: "hum2_q22",
      topic: "Human Species Timeline",
      type: "short",
      question: "Write a PEE paragraph (Point, Evidence, Explanation) answering the following question: 'How does the Assimilation Theory explain the origins of modern humans?' Use specific evidence in your answer.",
      answer: "Point: The Assimilation Theory suggests that modern humans (Homo sapiens) originated in Africa but then interbred with other human species, such as Neanderthals and Denisovans, as they migrated to other parts of the world. Evidence: DNA studies show that modern humans of non-African descent carry between 1–2% Neanderthal DNA, while some Southeast Asian populations have up to 5% Denisovan DNA. Additionally, fossils from Europe and Asia display traits that appear to be a mix of Homo sapiens and earlier species, supporting the idea of interbreeding. Explanation: This evidence supports the Assimilation Theory because it demonstrates that Homo sapiens did not completely replace other human species. Instead, they absorbed some genetic traits through interbreeding, which allowed modern humans to adapt to new environments as they migrated.",
      explanation: "A strong PEE paragraph states a clear point, provides at least two specific pieces of evidence, and explains how the evidence proves the point. Good connector phrases include: 'This evidence supports... because...', 'Additionally...', 'This demonstrates that...'"
    },

    // ── Hunter-Gatherers to Farmers ─────────────────────────────
    {
      id: "hum2_q23",
      topic: "Hunter-Gatherers to Farmers",
      type: "mcq",
      question: "Hunter-gatherers were called 'nomadic' because they:",
      options: [
        "Moved from place to place following food sources",
        "Built permanent stone cities in river valleys",
        "Farmed crops in one fixed location",
        "Only hunted animals and never gathered plants"
      ],
      answer: 0,
      explanation: "Hunter-gatherers were nomadic — they had no permanent settlement and moved continuously to follow animal herds and seasonal plant sources. They had no need to stay in one place because they did not grow their own food."
    },
    {
      id: "hum2_q24",
      topic: "Hunter-Gatherers to Farmers",
      type: "mcq",
      question: "The transition from hunter-gatherer to farmer is sometimes called the 'Agricultural Revolution.' Why was agriculture a turning point in human history?",
      options: [
        "It produced a food surplus, allowing people to settle in one place and develop specialised roles",
        "It made humans nomadic for the first time in history",
        "It eliminated the need for tools entirely",
        "It caused human populations to decrease significantly"
      ],
      answer: 0,
      explanation: "When humans began farming, they could produce more food than they immediately needed (a surplus). This allowed permanent settlements to develop, freed some people from food production, and enabled specialised jobs like potter, trader, and ruler — the foundation for civilisations."
    },
    {
      id: "hum2_q25",
      topic: "Hunter-Gatherers to Farmers",
      type: "mcq",
      question: "Which of the following is a behavioural adaptation of Homo sapiens that was NOT shared by most earlier species?",
      options: [
        "Developing agriculture and domesticating animals",
        "Making basic stone tools from flint",
        "Living in small groups for protection",
        "Using fire for warmth"
      ],
      answer: 0,
      explanation: "Agriculture (farming crops and keeping domesticated animals) is uniquely associated with Homo sapiens. Earlier species made tools, lived in groups, and used fire — but the shift to farming approximately 10,000 years ago was a uniquely human behavioural adaptation that transformed society."
    },
    {
      id: "hum2_q26",
      topic: "Hunter-Gatherers to Farmers",
      type: "mcq",
      question: "Which piece of evidence would BEST help an archaeologist determine that a site was used by early farmers rather than hunter-gatherers?",
      options: [
        "Grinding stones for processing grain and evidence of animal pens",
        "Spear tips and portable fire-making tools",
        "A single large camp site with no permanent structures",
        "Cave paintings showing migrating herds"
      ],
      answer: 0,
      explanation: "Grinding stones suggest crops were grown and processed. Animal pens suggest domestication. Both point to a settled farming community. Spear tips and portable tools suggest mobile hunter-gatherers. Cave paintings of herds suggest nomadic life following animals."
    },
    {
      id: "hum2_q27",
      topic: "Hunter-Gatherers to Farmers",
      type: "short",
      question: "Imagine you are an early Homo sapiens living as a hunter-gatherer about 15,000 years ago. Your group decides to stay in one place near a river and begin farming. Describe TWO advantages and ONE disadvantage of making this change.",
      answer: "Advantage 1: A stable food supply — farming produces a reliable food surplus, meaning the group no longer has to risk daily searches for food or follow unpredictable animal migrations. Advantage 2: Permanent settlement — the group can build stronger shelters, store food, develop tools, and create a community, eventually leading to specialised jobs and a more complex society. Disadvantage: Loss of freedom and diversity of diet — nomadic hunter-gatherers ate a wide variety of plants and animals; early farmers depended heavily on a few crops, making them vulnerable to crop failure from drought or disease. Also, settled communities are easier for enemies to locate and attack.",
      explanation: "The transition to farming (the Neolithic Revolution, c. 10,000 BC) was not immediately easier — it required more organised, sustained labour. However, it enabled population growth and the eventual development of civilisations."
    }

  ]
};
