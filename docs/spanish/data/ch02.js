const ch02 = {
  id: 2,
  title: "¿Cómo eres? Appearance & Personality",
  icon: "🪞",
  color: "#ec4899",
  topics: ["Appearance", "Personality", "Clothes & Llevar", "Tener for Description"],
  flashcards: [
    // ── Appearance (Apariencia física) ───────────────────────
    { id: "sp2_f1",  es: "alto/a",          en: "tall" },
    { id: "sp2_f2",  es: "bajo/a",          en: "short / low" },
    { id: "sp2_f3",  es: "delgado/a",       en: "thin / slim" },
    { id: "sp2_f4",  es: "grande",          en: "big" },
    { id: "sp2_f5",  es: "rubio/a",         en: "blond" },
    { id: "sp2_f6",  es: "moreno/a",        en: "dark-haired / dark-skinned" },
    { id: "sp2_f7",  es: "barba",           en: "beard" },
    { id: "sp2_f8",  es: "fuerte",          en: "strong" },
    { id: "sp2_f9",  es: "débil",           en: "weak" },
    { id: "sp2_f10", es: "pelo castaño",    en: "brown hair" },
    { id: "sp2_f11", es: "pelo corto",      en: "short hair" },
    { id: "sp2_f12", es: "pelo largo",      en: "long hair" },
    { id: "sp2_f13", es: "pelo rizado",     en: "curly hair" },
    { id: "sp2_f14", es: "pelo liso",       en: "straight hair" },
    { id: "sp2_f15", es: "ojos oscuros",    en: "dark eyes" },
    { id: "sp2_f16", es: "ojos claros",     en: "light eyes" },
    // ── More appearance adjectives ──────────────────────────
    { id: "sp2_f17", es: "bonito/a",        en: "nice, beautiful" },
    { id: "sp2_f18", es: "feo/a",           en: "ugly" },
    { id: "sp2_f19", es: "pequeño/a",       en: "small" },
    { id: "sp2_f20", es: "antiguo/a",       en: "old (object/style)" },
    { id: "sp2_f21", es: "moderno/a",       en: "modern / new" },
    { id: "sp2_f22", es: "nuevo/a",         en: "new" },
    { id: "sp2_f23", es: "cálido/a",        en: "warm" },
    { id: "sp2_f24", es: "frío/a",          en: "cold" },
    { id: "sp2_f25", es: "cómodo/a",        en: "comfortable" },
    { id: "sp2_f26", es: "incómodo/a",      en: "uncomfortable" },
    { id: "sp2_f27", es: "enorme",          en: "huge" },
    // ── Personality (Personalidad) ──────────────────────────
    { id: "sp2_f28", es: "simpático/a",     en: "friendly / nice" },
    { id: "sp2_f29", es: "antipático/a",    en: "unfriendly / unpleasant" },
    { id: "sp2_f30", es: "tranquilo/a",     en: "quiet / calm" },
    { id: "sp2_f31", es: "nervioso/a",      en: "nervous" },
    { id: "sp2_f32", es: "callado/a",       en: "quiet / reserved" },
    { id: "sp2_f33", es: "hablador/a",      en: "talkative" },
    { id: "sp2_f34", es: "vago/a",          en: "lazy" },
    { id: "sp2_f35", es: "trabajador/a",    en: "hard-working" },
    { id: "sp2_f36", es: "tonto/a",         en: "silly / foolish" },
    { id: "sp2_f37", es: "inteligente",     en: "intelligent / clever" },
    { id: "sp2_f38", es: "aburrido/a",      en: "boring" },
    { id: "sp2_f39", es: "interesante",     en: "interesting" },
    { id: "sp2_f40", es: "serio/a",         en: "serious" },
    { id: "sp2_f41", es: "gracioso/a",      en: "funny" },
    { id: "sp2_f42", es: "alegre",          en: "happy / cheerful" },
    { id: "sp2_f43", es: "triste",          en: "sad" },
    { id: "sp2_f44", es: "famoso/a",        en: "famous" },
    { id: "sp2_f45", es: "divertido/a",     en: "fun" },
    { id: "sp2_f46", es: "rápido/a",        en: "fast" },
    { id: "sp2_f47", es: "lento/a",         en: "slow" },
    { id: "sp2_f48", es: "religioso/a",     en: "religious" },
    { id: "sp2_f49", es: "lindo/a",         en: "beautiful / cute" },
    { id: "sp2_f50", es: "hermoso/a",       en: "very beautiful / gorgeous" },
    // ── Invariable adjectives ────────────────────────────────
    { id: "sp2_f51", es: "tradicional",     en: "traditional (same m/f)" },
    { id: "sp2_f52", es: "popular",         en: "popular (same m/f)" },
    { id: "sp2_f53", es: "fascinante",      en: "fascinating (same m/f)" },
    { id: "sp2_f54", es: "elegante",        en: "elegant (same m/f)" },
    { id: "sp2_f55", es: "pasional",        en: "passionate (same m/f)" },
    { id: "sp2_f56", es: "sentimental",     en: "sentimental (same m/f)" },
    { id: "sp2_f57", es: "emocional",       en: "emotional (same m/f)" },
    // ── Tener conjugation (for describing) ──────────────────
    { id: "sp2_f58", es: "(yo) tengo",      en: "I have" },
    { id: "sp2_f59", es: "(tú) tienes",     en: "you have" },
    { id: "sp2_f60", es: "(él/ella) tiene", en: "he/she has" },
    { id: "sp2_f61", es: "(nosotros) tenemos", en: "we have" },
    { id: "sp2_f62", es: "(vosotros) tenéis", en: "you have (plural)" },
    { id: "sp2_f63", es: "(ellos/ellas) tienen", en: "they have" },
    { id: "sp2_f64", es: "Yo tengo el pelo rizado.", en: "I have curly hair." },
    { id: "sp2_f65", es: "Ella tiene ojos claros.", en: "She has light eyes." },
    { id: "sp2_f66", es: "Él tiene pelo rubio y corto.", en: "He has short blond hair." },
    // ── Clothes (Ropa) ───────────────────────────────────────
    { id: "sp2_f67", es: "la camiseta",     en: "T-shirt" },
    { id: "sp2_f68", es: "la camisa",       en: "shirt" },
    { id: "sp2_f69", es: "la falda",        en: "skirt" },
    { id: "sp2_f70", es: "los pantalones",  en: "trousers" },
    { id: "sp2_f71", es: "las zapatillas",  en: "trainers / sneakers" },
    { id: "sp2_f72", es: "los zapatos",     en: "shoes" },
    { id: "sp2_f73", es: "los calcetines",  en: "socks" },
    { id: "sp2_f74", es: "la chaqueta",     en: "jacket" },
    { id: "sp2_f75", es: "el abrigo",       en: "coat" },
    { id: "sp2_f76", es: "las gafas",       en: "glasses" },
    { id: "sp2_f77", es: "el vestido",      en: "dress" },
    { id: "sp2_f78", es: "la sudadera",     en: "sweatshirt / hoodie" },
    { id: "sp2_f79", es: "el collar",       en: "necklace" },
    // ── Llevar conjugation (to wear) ────────────────────────
    { id: "sp2_f80", es: "(yo) llevo",      en: "I wear / I am wearing" },
    { id: "sp2_f81", es: "(tú) llevas",     en: "you wear / you are wearing" },
    { id: "sp2_f82", es: "(él/ella) lleva", en: "he/she wears / is wearing" },
    { id: "sp2_f83", es: "(nosotros) llevamos", en: "we wear / are wearing" },
    { id: "sp2_f84", es: "(vosotros) lleváis", en: "you wear (plural)" },
    { id: "sp2_f85", es: "(ellos/ellas) llevan", en: "they wear / are wearing" },
    { id: "sp2_f86", es: "Llevo una camisa negra.", en: "I am wearing a black shirt." },
    { id: "sp2_f87", es: "Ella lleva un vestido largo.", en: "She is wearing a long dress." },
    { id: "sp2_f88", es: "Él lleva gafas.", en: "He wears glasses." }
  ],
  questions: [
    {
      id: "sp2_q1",
      topic: "Appearance",
      type: "mcq",
      question: "What does <em>pelo rizado</em> mean?",
      options: ["straight hair", "short hair", "curly hair", "blond hair"],
      answer: 2,
      explanation: "<em>Pelo rizado</em> = curly hair. <em>Rizado</em> means curly. Compare: pelo liso (straight), pelo corto (short), pelo largo (long)."
    },
    {
      id: "sp2_q2",
      topic: "Appearance",
      type: "mcq",
      question: "Which sentence correctly describes a girl with dark eyes?",
      options: [
        "Ella tiene ojos oscuro.",
        "Ella tiene ojos oscuros.",
        "Ella es ojos oscuros.",
        "Ella lleva ojos oscuros."
      ],
      answer: 1,
      explanation: "Use <em>tener</em> for physical features. <em>Ojos</em> is masculine plural, so the adjective is <em>oscuros</em>. Ella tiene ojos oscuros = She has dark eyes."
    },
    {
      id: "sp2_q3",
      topic: "Tener for Description",
      type: "input",
      question: "Translate: <em>I have short blond hair.</em>",
      answer: "Tengo el pelo rubio y corto",
      acceptableAnswers: ["tengo el pelo rubio y corto", "Yo tengo el pelo rubio y corto", "tengo pelo rubio y corto"],
      explanation: "<em>Tengo</em> = I have. <em>El pelo rubio y corto</em> = short blond hair. Hair adjectives agree with <em>pelo</em> (masculine), so: rubio, corto."
    },
    {
      id: "sp2_q4",
      topic: "Tener for Description",
      type: "mcq",
      question: "Complete: <em>Nosotros _____ el pelo castaño.</em>",
      options: ["tiene", "tengo", "tenemos", "tienen"],
      answer: 2,
      explanation: "<em>Nosotros</em> (we) takes <em>tenemos</em>. Tener conjugation: tengo, tienes, tiene, tenemos, tenéis, tienen."
    },
    {
      id: "sp2_q5",
      topic: "Personality",
      type: "mcq",
      question: "What is the opposite of <em>vago/a</em> (lazy)?",
      options: ["tranquilo/a", "trabajador/a", "callado/a", "tonto/a"],
      answer: 1,
      explanation: "<em>Trabajador/a</em> = hard-working. This is the opposite of <em>vago/a</em> (lazy). Note the gender ending: trabajador (masc) / trabajadora (fem)."
    },
    {
      id: "sp2_q6",
      topic: "Personality",
      type: "mcq",
      question: "Which adjective does NOT change for feminine?",
      options: ["simpático", "nervioso", "inteligente", "gracioso"],
      answer: 2,
      explanation: "<em>Inteligente</em> ends in -e, so it stays the same for masculine and feminine. <em>simpático → simpática</em>, <em>nervioso → nerviosa</em>, <em>gracioso → graciosa</em>."
    },
    {
      id: "sp2_q7",
      topic: "Clothes & Llevar",
      type: "mcq",
      question: "What does <em>Él lleva gafas</em> mean?",
      options: ["He carries bags", "He wears a jacket", "He wears glasses", "He has a hat"],
      answer: 2,
      explanation: "<em>Lleva</em> = he wears/is wearing (llevar, 3rd sg). <em>Gafas</em> = glasses. So: He wears glasses."
    },
    {
      id: "sp2_q8",
      topic: "Clothes & Llevar",
      type: "input",
      question: "Translate: <em>She is wearing a long dress.</em>",
      answer: "Ella lleva un vestido largo",
      acceptableAnswers: ["ella lleva un vestido largo", "Ella lleva un vestido largo.", "lleva un vestido largo"],
      explanation: "<em>Ella lleva</em> = she wears. <em>Un vestido</em> = a dress. <em>Largo</em> = long (masculine, agrees with vestido)."
    },
    {
      id: "sp2_q9",
      topic: "Clothes & Llevar",
      type: "mcq",
      question: "What is the Spanish word for <em>sweatshirt/hoodie</em>?",
      options: ["la chaqueta", "la camisa", "la sudadera", "el abrigo"],
      answer: 2,
      explanation: "<em>La sudadera</em> = sweatshirt/hoodie. <em>La chaqueta</em> = jacket, <em>la camisa</em> = shirt, <em>el abrigo</em> = coat."
    },
    {
      id: "sp2_q10",
      topic: "Appearance",
      type: "mcq",
      question: "Which word means <em>slim/thin</em>?",
      options: ["fuerte", "rubio", "delgado", "bajo"],
      answer: 2,
      explanation: "<em>Delgado/a</em> = thin/slim. <em>Fuerte</em> = strong, <em>rubio/a</em> = blond, <em>bajo/a</em> = short."
    },
    {
      id: "sp2_q11",
      topic: "Tener for Description",
      type: "mcq",
      question: "How do you say <em>she has curly hair</em>?",
      options: [
        "Ella es pelo rizado.",
        "Ella tiene pelo rizada.",
        "Ella tiene el pelo rizado.",
        "Ella lleva pelo rizado."
      ],
      answer: 2,
      explanation: "Use <em>tener</em> for physical features. <em>Pelo</em> is masculine, so <em>rizado</em> (not rizada). Ella tiene el pelo rizado = She has curly hair."
    },
    {
      id: "sp2_q12",
      topic: "Clothes & Llevar",
      type: "mcq",
      question: "Complete: <em>Nosotros _____ camisetas azules.</em>",
      options: ["lleva", "llevan", "llevamos", "llevas"],
      answer: 2,
      explanation: "<em>Nosotros</em> (we) uses <em>llevamos</em>. Llevar: llevo, llevas, lleva, llevamos, lleváis, llevan."
    },
    {
      id: "sp2_q13",
      topic: "Personality",
      type: "mcq",
      question: "What does <em>hablador/a</em> mean?",
      options: ["quiet", "talkative", "hard-working", "serious"],
      answer: 1,
      explanation: "<em>Hablador/a</em> = talkative (from hablar = to talk). The opposite is <em>callado/a</em> = quiet/reserved."
    },
    {
      id: "sp2_q14",
      topic: "Appearance",
      type: "mcq",
      question: "What does <em>moreno/a</em> mean in Spanish?",
      options: ["blond", "red-haired", "dark-haired / dark-skinned", "tall"],
      answer: 2,
      explanation: "<em>Moreno/a</em> describes someone with dark hair or dark skin. The opposite is <em>rubio/a</em> (blond)."
    },
    {
      id: "sp2_q15",
      topic: "Tener for Description",
      type: "mcq",
      question: "Which sentence is correct?",
      options: [
        "Yo tiene el pelo rubio.",
        "Tengo el pelo rubia.",
        "Tengo el pelo rubio.",
        "Yo tengo el pelo rubia."
      ],
      answer: 2,
      explanation: "<em>Tengo</em> = I have (yo form). <em>Pelo</em> is masculine, so the adjective is <em>rubio</em> (not rubia). Tengo el pelo rubio."
    },
    {
      id: "sp2_q16",
      topic: "Clothes & Llevar",
      type: "mcq",
      question: "What is the Spanish for <em>coat</em>?",
      options: ["la falda", "el abrigo", "la chaqueta", "el collar"],
      answer: 1,
      explanation: "<em>El abrigo</em> = coat. <em>La falda</em> = skirt, <em>la chaqueta</em> = jacket, <em>el collar</em> = necklace."
    },
    {
      id: "sp2_q17",
      topic: "Personality",
      type: "short",
      question: "Describe yourself in Spanish using at least four sentences. Include: your appearance (use <em>tener</em> for hair/eyes), your personality (use <em>ser</em>), and what you are wearing today (use <em>llevar</em>). Make sure adjectives agree.",
      answer: "Model: Me llamo [name]. Tengo el pelo castaño y largo. Tengo ojos oscuros. Soy inteligente y simpática. Llevo una camiseta azul y pantalones negros. Check: tener for hair/eyes, ser for personality, llevar for clothes, adjectives agree with gender.",
      explanation: "This tests three key verbs: tener (to have, for physical features), ser (to be, for personality), llevar (to wear, for clothes). Each has a different purpose and they are not interchangeable."
    },
    {
      id: "sp2_q18",
      topic: "Personality",
      type: "input",
      question: "Translate: <em>They are funny and friendly.</em> (they = a mixed group)",
      answer: "Son graciosos y simpáticos",
      acceptableAnswers: ["son graciosos y simpáticos", "Ellos son graciosos y simpáticos", "son simpáticos y graciosos"],
      explanation: "<em>Son</em> = they are (ser, 3rd pl). Mixed group → use masculine plural: <em>graciosos</em> and <em>simpáticos</em>. This is the default in Spanish when the group is mixed."
    },
    {
      id: "sp2_q19",
      topic: "Appearance",
      type: "mcq",
      question: "What does <em>Ella tiene ojos claros</em> mean?",
      options: ["She has dark eyes", "She has blue eyes", "She has light/clear eyes", "She sees clearly"],
      answer: 2,
      explanation: "<em>Ojos claros</em> = light eyes (clear/light-coloured). <em>Ojos oscuros</em> = dark eyes. <em>Claros</em> agrees with <em>ojos</em> (masculine plural)."
    },
    {
      id: "sp2_q20",
      topic: "Clothes & Llevar",
      type: "input",
      question: "Translate: <em>I am wearing a black shirt.</em>",
      answer: "Llevo una camisa negra",
      acceptableAnswers: ["llevo una camisa negra", "Llevo una camisa negra.", "Yo llevo una camisa negra"],
      explanation: "<em>Llevo</em> = I am wearing. <em>Una camisa</em> = a shirt (feminine). <em>Negra</em> = black (feminine, agrees with camisa)."
    }
  ]
};
