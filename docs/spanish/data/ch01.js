const ch01 = {
  id: 1,
  title: "¡Hola! Introductions & Grammar",
  icon: "👋",
  color: "#f59e0b",
  topics: ["Llamarse", "Ser", "Pronouns & Possessives", "Adjective Agreement", "Question Words"],
  flashcards: [
    // ── Llamarse ────────────────────────────────────────────
    { id: "sp1_f1",  es: "(yo) me llamo",          en: "my name is / I am called" },
    { id: "sp1_f2",  es: "(tú) te llamas",          en: "your name is / you are called" },
    { id: "sp1_f3",  es: "(él/ella) se llama",      en: "his/her name is / he/she is called" },
    { id: "sp1_f4",  es: "(nosotros) nos llamamos", en: "our name is / we are called" },
    { id: "sp1_f5",  es: "(vosotros) os llamáis",   en: "your name is (plural) / you are called" },
    { id: "sp1_f6",  es: "(ellos/ellas) se llaman", en: "their name is / they are called" },
    { id: "sp1_f7",  es: "¿Cómo te llamas?",        en: "What is your name?" },
    { id: "sp1_f8",  es: "Me llamo Pragathy.",       en: "My name is Pragathy." },
    { id: "sp1_f9",  es: "Se llama Carlos.",         en: "His name is Carlos." },
    { id: "sp1_f10", es: "llamarse",                 en: "to be called (reflexive verb)" },
    // ── Ser ────────────────────────────────────────────────
    { id: "sp1_f11", es: "(yo) soy",                en: "I am" },
    { id: "sp1_f12", es: "(tú) eres",               en: "you are" },
    { id: "sp1_f13", es: "(él/ella) es",            en: "he/she is" },
    { id: "sp1_f14", es: "(nosotros) somos",        en: "we are" },
    { id: "sp1_f15", es: "(vosotros) sois",         en: "you are (plural)" },
    { id: "sp1_f16", es: "(ellos/ellas) son",       en: "they are" },
    { id: "sp1_f17", es: "Yo soy alto.",            en: "I am tall. (boy)" },
    { id: "sp1_f18", es: "Ella es simpática.",      en: "She is friendly." },
    { id: "sp1_f19", es: "Nosotros somos rubios.",  en: "We are blond." },
    { id: "sp1_f20", es: "Ellos son morenos.",      en: "They are dark-haired." },
    { id: "sp1_f21", es: "ser",                     en: "to be (permanent qualities: nationality, personality, appearance)" },
    // ── Personal Pronouns ───────────────────────────────────
    { id: "sp1_f22", es: "yo",                      en: "I" },
    { id: "sp1_f23", es: "tú",                      en: "you (informal)" },
    { id: "sp1_f24", es: "usted",                   en: "you (formal)" },
    { id: "sp1_f25", es: "él",                      en: "he" },
    { id: "sp1_f26", es: "ella",                    en: "she" },
    { id: "sp1_f27", es: "nosotros / nosotras",     en: "we (masc or mixed / all-female)" },
    { id: "sp1_f28", es: "vosotros / vosotras",     en: "you all (masc or mixed / all-female, Spain)" },
    { id: "sp1_f29", es: "ustedes",                 en: "you all (formal / Latin America)" },
    { id: "sp1_f30", es: "ellos",                   en: "they (masculine or mixed group)" },
    { id: "sp1_f31", es: "ellas",                   en: "they (all-female group)" },
    // ── Possessive Adjectives ───────────────────────────────
    { id: "sp1_f32", es: "mi / mis",                en: "my (singular / plural)" },
    { id: "sp1_f33", es: "tu / tus",                en: "your (singular / plural, informal)" },
    { id: "sp1_f34", es: "su / sus",                en: "his / her / their (singular / plural)" },
    { id: "sp1_f35", es: "nuestro / nuestra",       en: "our (masculine / feminine)" },
    { id: "sp1_f36", es: "nuestros / nuestras",     en: "our (masc plural / fem plural)" },
    { id: "sp1_f37", es: "vuestro / vuestra",       en: "your (masc / fem, plural, Spain)" },
    { id: "sp1_f38", es: "vuestros / vuestras",     en: "your (masc pl / fem pl, Spain)" },
    { id: "sp1_f39", es: "mi hermano",              en: "my brother" },
    { id: "sp1_f40", es: "nuestra escuela",         en: "our school" },
    { id: "sp1_f41", es: "su familia es muy grande", en: "his/her/their family is very big" },
    // ── Adjective Agreement ─────────────────────────────────
    { id: "sp1_f42", es: "alto",                    en: "tall (masculine singular)" },
    { id: "sp1_f43", es: "alta",                    en: "tall (feminine singular)" },
    { id: "sp1_f44", es: "altos",                   en: "tall (masculine plural)" },
    { id: "sp1_f45", es: "altas",                   en: "tall (feminine plural)" },
    { id: "sp1_f46", es: "inteligente / inteligentes", en: "intelligent — same masc/fem; add -s for plural" },
    { id: "sp1_f47", es: "azul / azules",           en: "blue — same masc/fem; add -es for plural" },
    { id: "sp1_f48", es: "verde / verdes",          en: "green — same masc/fem; add -s for plural" },
    { id: "sp1_f49", es: "gris / grises",           en: "grey — same masc/fem; add -es for plural" },
    { id: "sp1_f50", es: "Adjectives go AFTER the noun in Spanish", en: "e.g. 'una camisa azul' (a blue shirt), NOT 'una azul camisa'" },
    // ── Question Words (Interrogativos) ─────────────────────
    { id: "sp1_f51", es: "¿Qué?",                  en: "What?" },
    { id: "sp1_f52", es: "¿Cómo?",                 en: "How?" },
    { id: "sp1_f53", es: "¿Cuándo?",               en: "When?" },
    { id: "sp1_f54", es: "¿Quién?",                en: "Who?" },
    { id: "sp1_f55", es: "¿Cuánto/a?",             en: "How much?" },
    { id: "sp1_f56", es: "¿Cuántos/as?",           en: "How many?" },
    { id: "sp1_f57", es: "¿De dónde?",             en: "Where from?" },
    { id: "sp1_f58", es: "¿Adónde?",               en: "Where to?" },
    { id: "sp1_f59", es: "¿Dónde?",                en: "Where?" },
    { id: "sp1_f60", es: "¿Cuál?",                 en: "Which one? (also used for preferences/favourites)" },
    { id: "sp1_f61", es: "¿Cuál es tu color favorito?", en: "What is your favourite colour?" },
    { id: "sp1_f62", es: "No word order change for questions — just add ¿?", en: "e.g. 'Tú te llamas Pragathy.' → '¿Tú te llamas Pragathy?'" }
  ],
  questions: [
    {
      id: "sp1_q1",
      topic: "Llamarse",
      type: "mcq",
      question: "Which form of <em>llamarse</em> is used with <em>ella</em> (she)?",
      options: ["me llama", "se llamas", "se llama", "te llamas"],
      answer: 2,
      explanation: "<em>Se llama</em> is used with él/ella (he/she). All third-person singular reflexive verbs use <em>se</em>: él/ella se llama."
    },
    {
      id: "sp1_q2",
      topic: "Llamarse",
      type: "input",
      question: "Translate: <em>My name is Pragathy.</em> (use the correct llamarse form)",
      answer: "Me llamo Pragathy",
      acceptableAnswers: ["me llamo Pragathy", "me llamo pragathy", "Me llamo Pragathy."],
      explanation: "For 'I am called / my name is', use <em>me llamo</em> (yo form of llamarse)."
    },
    {
      id: "sp1_q3",
      topic: "Llamarse",
      type: "mcq",
      question: "How do you ask <em>What is your name?</em> in Spanish?",
      options: ["¿Qué te llamas?", "¿Cómo te llamas?", "¿Cómo se llama?", "¿Cómo llamas tú?"],
      answer: 1,
      explanation: "¿Cómo te llamas? literally means 'How are you called?' and is the standard way to ask someone's name. <em>¿Cómo se llama?</em> asks about a third person (he/she)."
    },
    {
      id: "sp1_q4",
      topic: "Ser",
      type: "mcq",
      question: "Which form of <em>ser</em> completes: <em>Nosotros _____ rubios.</em>",
      options: ["son", "sois", "somos", "eres"],
      answer: 2,
      explanation: "<em>Nosotros</em> (we) takes <em>somos</em>. The ser conjugation: soy, eres, es, somos, sois, son."
    },
    {
      id: "sp1_q5",
      topic: "Ser",
      type: "input",
      question: "Translate: <em>She is friendly.</em> (use ser + the correct adjective agreement)",
      answer: "Ella es simpática",
      acceptableAnswers: ["ella es simpática", "Ella es simpática.", "es simpática"],
      explanation: "<em>Ella es simpática.</em> — ella = she, es = is (ser), simpática = friendly (feminine form, -o → -a)."
    },
    {
      id: "sp1_q6",
      topic: "Ser",
      type: "mcq",
      question: "What does <em>Ellos son morenos</em> mean?",
      options: ["They are blond", "She is dark-haired", "They are dark-haired / dark-skinned", "We are tall"],
      answer: 2,
      explanation: "<em>Ellos</em> = they (masc/mixed). <em>Son</em> = are (ser, 3rd pl). <em>Morenos</em> = dark-haired/dark-skinned (masc pl)."
    },
    {
      id: "sp1_q7",
      topic: "Pronouns & Possessives",
      type: "mcq",
      question: "Which possessive adjective means <em>our</em> for a feminine noun like <em>escuela</em>?",
      options: ["nuestro", "nuestra", "vuestro", "su"],
      answer: 1,
      explanation: "<em>Nuestra</em> is the feminine form of 'our'. <em>Nuestra escuela</em> = our school. Possessives agree with the noun they describe, not the owner."
    },
    {
      id: "sp1_q8",
      topic: "Pronouns & Possessives",
      type: "mcq",
      question: "What does <em>mi hermano es alto</em> mean?",
      options: ["My brother is tall", "My sister is tall", "His brother is tall", "Your brother is tall"],
      answer: 0,
      explanation: "<em>Mi</em> = my (same for masc/fem singular). <em>hermano</em> = brother. <em>es alto</em> = is tall."
    },
    {
      id: "sp1_q9",
      topic: "Pronouns & Possessives",
      type: "mcq",
      question: "Which pronoun means <em>they</em> for an all-female group?",
      options: ["ellos", "vosotras", "ellas", "ustedes"],
      answer: 2,
      explanation: "<em>Ellas</em> = they (all-female). <em>Ellos</em> = they (all-male or mixed). <em>Vosotras</em> = you all (all-female, Spain)."
    },
    {
      id: "sp1_q10",
      topic: "Adjective Agreement",
      type: "mcq",
      question: "A girl is described as tall. Which form is correct?",
      options: ["El chico es altos", "La chica es alto", "La chica es alta", "Las chicas es alta"],
      answer: 2,
      explanation: "Adjectives agree with the noun in gender. <em>chica</em> is feminine, so the adjective ends in -a: <em>alta</em>. La chica es alta = The girl is tall."
    },
    {
      id: "sp1_q11",
      topic: "Adjective Agreement",
      type: "mcq",
      question: "Which adjective does NOT change between masculine and feminine?",
      options: ["alto/alta", "rubio/rubia", "inteligente", "moreno/morena"],
      answer: 2,
      explanation: "Adjectives ending in -e (like <em>inteligente</em>) stay the same for both masculine and feminine. Only the plural form adds -s: <em>inteligentes</em>."
    },
    {
      id: "sp1_q12",
      topic: "Adjective Agreement",
      type: "input",
      question: "Give the feminine singular form of the adjective <em>simpático</em>.",
      answer: "simpática",
      explanation: "Adjectives ending in -o change to -a in the feminine: simpático (m) → simpática (f)."
    },
    {
      id: "sp1_q13",
      topic: "Question Words",
      type: "mcq",
      question: "Which question word means <em>Where from?</em>",
      options: ["¿Dónde?", "¿Adónde?", "¿De dónde?", "¿Cuándo?"],
      answer: 2,
      explanation: "¿De dónde? = Where from? (origin). ¿Dónde? = Where? (location). ¿Adónde? = Where to? (destination). ¿Cuándo? = When?"
    },
    {
      id: "sp1_q14",
      topic: "Question Words",
      type: "mcq",
      question: "When is <em>¿Cuál?</em> used instead of <em>¿Qué?</em>?",
      options: [
        "When asking about a person",
        "When asking about favourites or making a choice between options",
        "When asking where something is",
        "When asking how many"
      ],
      answer: 1,
      explanation: "¿Cuál? (which one?) is used for preferences and choices: ¿Cuál es tu color favorito? = What is your favourite colour? ¿Qué? is used for definitions or general 'what' questions."
    },
    {
      id: "sp1_q15",
      topic: "Question Words",
      type: "mcq",
      question: "How do you ask <em>What does he/she study?</em> in Spanish?",
      options: ["¿Cuándo estudia?", "¿Qué estudia?", "¿Cómo estudia?", "¿Quién estudia?"],
      answer: 1,
      explanation: "¿Qué? = What? So ¿Qué estudia? = What does he/she study? In Spanish there is no word order change — you just add ¿? around the question."
    },
    {
      id: "sp1_q16",
      topic: "Llamarse",
      type: "mcq",
      question: "Which is the correct form for <em>Vosotros</em> (you all, Spain)?",
      options: ["os llamamos", "os llamáis", "se llaman", "os llamais"],
      answer: 1,
      explanation: "The vosotros form of llamarse is <em>os llamáis</em> (note the accent on the í). This is used in Spain for a group of people you know well."
    },
    {
      id: "sp1_q17",
      topic: "Ser",
      type: "short",
      question: "Write three sentences in Spanish using <em>ser</em> to describe yourself and two people you know. Use three different pronouns and make adjectives agree correctly.",
      answer: "Model answers: Yo soy inteligente y trabajador/a. Mi hermano es alto y gracioso. Mis amigos son simpáticos. Check: (1) correct ser form for each pronoun (soy/es/son etc.), (2) adjective agrees in gender/number with the subject, (3) adjective comes AFTER the noun or after ser.",
      explanation: "Ser is used for permanent characteristics like appearance and personality. Remember: adjectives agree with the subject (male → -o, female → -a, plural → -os/-as, or -es for -e endings)."
    },
    {
      id: "sp1_q18",
      topic: "Pronouns & Possessives",
      type: "input",
      question: "Translate: <em>Their family is very big.</em>",
      answer: "Su familia es muy grande",
      acceptableAnswers: ["su familia es muy grande", "Su familia es muy grande."],
      explanation: "<em>Su</em> = his/her/their (same form). <em>familia</em> = family (feminine noun). <em>es</em> = is (ser, 3rd sg). <em>muy grande</em> = very big. Note: grande has the same masc/fem form."
    },
    {
      id: "sp1_q19",
      topic: "Adjective Agreement",
      type: "mcq",
      question: "Which sentence is grammatically correct?",
      options: [
        "Las chicas son alto.",
        "Los chicos son alta.",
        "Las chicas son altas.",
        "Los chicos son altas."
      ],
      answer: 2,
      explanation: "<em>Las chicas</em> is feminine plural, so the adjective must be feminine plural: <em>altas</em>. Masculine plural would be <em>altos</em> (for los chicos)."
    },
    {
      id: "sp1_q20",
      topic: "Question Words",
      type: "short",
      question: "Write four different questions in Spanish using four different interrogativos (question words). Each question must make sense and have accents on the question word.",
      answer: "Examples: ¿Cómo te llamas? (What is your name?) / ¿De dónde eres? (Where are you from?) / ¿Cuántos años tienes? (How old are you?) / ¿Cuál es tu asignatura favorita? (What is your favourite subject?). Any four correct questions using different question words are valid.",
      explanation: "The nine interrogativos are: ¿Qué? ¿Cómo? ¿Cuándo? ¿Quién? ¿Cuánto/a? ¿Cuántos/as? ¿De dónde? ¿Adónde? ¿Dónde? ¿Cuál? All carry a written accent mark."
    }
  ]
};
