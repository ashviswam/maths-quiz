const topic02 = {
  id: 2,
  title: "Dans la classe",
  icon: "🏫",
  color: "#3b82f6",
  topics: ["Classroom Objects", "Articles"],
  flashcards: [
    { id: "fr2_f1",  fr: "un stylo",           en: "a pen" },
    { id: "fr2_f2",  fr: "un crayon",           en: "a pencil" },
    { id: "fr2_f3",  fr: "une règle",           en: "a ruler" },
    { id: "fr2_f4",  fr: "une gomme",           en: "a rubber (eraser)" },
    { id: "fr2_f5",  fr: "une trousse",         en: "a pencil case" },
    { id: "fr2_f6",  fr: "un cahier",           en: "an exercise book / notebook" },
    { id: "fr2_f7",  fr: "un livre",            en: "a book" },
    { id: "fr2_f8",  fr: "un sac",              en: "a bag" },
    { id: "fr2_f9",  fr: "un cartable",         en: "a school bag" },
    { id: "fr2_f10", fr: "une table",           en: "a table" },
    { id: "fr2_f11", fr: "une chaise",          en: "a chair" },
    { id: "fr2_f12", fr: "un bureau",           en: "a desk" },
    { id: "fr2_f13", fr: "un tableau",          en: "a board / blackboard" },
    { id: "fr2_f14", fr: "un taille-crayon",    en: "a pencil sharpener" },
    { id: "fr2_f15", fr: "des ciseaux",         en: "scissors" },
    { id: "fr2_f16", fr: "de la colle",         en: "glue" },
    { id: "fr2_f17", fr: "un",                  en: "a (masculine noun)" },
    { id: "fr2_f18", fr: "une",                 en: "a (feminine noun)" },
    { id: "fr2_f19", fr: "des",                 en: "some (plural)" },
    { id: "fr2_f20", fr: "le",                  en: "the (masculine singular)" },
    { id: "fr2_f21", fr: "la",                  en: "the (feminine singular)" },
    { id: "fr2_f22", fr: "les",                 en: "the (plural)" },
    { id: "fr2_f23", fr: "Qu'est-ce que c'est?", en: "What is it? / What is this?" },
    { id: "fr2_f24", fr: "C'est un/une ...",    en: "It is a ..." },
    { id: "fr2_f25", fr: "Ce sont des ...",     en: "They are ..." },
  ],
  questions: [
    {
      id: "fr2_q1",
      topic: "Classroom Objects",
      type: "mcq",
      question: "What does <em>une trousse</em> mean?",
      options: ["a ruler", "an exercise book", "a pen", "a pencil case"],
      answer: 3,
      explanation: "<em>Une trousse</em> = a pencil case. It is a feminine noun, so it takes <em>une</em>."
    },
    {
      id: "fr2_q2",
      topic: "Articles",
      type: "mcq",
      question: "Which article is correct? <em>___ stylo</em> (pen, masculine)",
      options: ["une", "des", "un", "la"],
      answer: 2,
      explanation: "<em>Stylo</em> is masculine and singular, so it takes the indefinite article <em>un</em>."
    },
    {
      id: "fr2_q3",
      topic: "Classroom Objects",
      type: "mcq",
      question: "What does <em>un crayon</em> mean?",
      options: ["a pen", "a ruler", "a pencil", "a rubber"],
      answer: 2,
      explanation: "<em>Un crayon</em> = a pencil. Don't confuse with <em>un stylo</em> = a pen."
    },
    {
      id: "fr2_q4",
      topic: "Articles",
      type: "mcq",
      question: "How do you say <em>a chair</em> in French? (chair = feminine)",
      options: ["un chaise", "des chaises", "le chaise", "une chaise"],
      answer: 3,
      explanation: "<em>Chaise</em> is feminine, so the indefinite article is <em>une</em>: <em>une chaise</em>."
    },
    {
      id: "fr2_q5",
      topic: "Classroom Objects",
      type: "mcq",
      question: "What does <em>une gomme</em> mean?",
      options: ["a ruler", "a pencil case", "a rubber (eraser)", "a pencil sharpener"],
      answer: 2,
      explanation: "<em>Une gomme</em> = a rubber (eraser). It is feminine (une)."
    },
    {
      id: "fr2_q6",
      topic: "Classroom Objects",
      type: "mcq",
      question: "What does <em>Qu'est-ce que c'est?</em> mean?",
      options: ["What do you like?", "What is it?", "What is your name?", "Where is it?"],
      answer: 1,
      explanation: "<em>Qu'est-ce que c'est?</em> = What is it? A very common question in French — used to ask about objects."
    },
    {
      id: "fr2_q7",
      topic: "Articles",
      type: "mcq",
      question: "Which article goes with <em>livre</em> (book, masculine singular)?",
      options: ["une", "la", "des", "un"],
      answer: 3,
      explanation: "<em>Livre</em> is masculine and singular, so: <em>un livre</em> = a book."
    },
    {
      id: "fr2_q8",
      topic: "Articles",
      type: "mcq",
      question: "What does <em>des</em> mean?",
      options: ["the (feminine)", "a (masculine)", "some / plural 'a'", "the (masculine)"],
      answer: 2,
      explanation: "<em>Des</em> is the plural indefinite article: 'some' or the plural of 'a/an'. Example: <em>des stylos</em> = (some) pens."
    },
    {
      id: "fr2_q9",
      topic: "Articles",
      type: "mcq",
      question: "How do you say <em>the table</em> in French? (table = feminine)",
      options: ["le table", "un table", "la table", "les table"],
      answer: 2,
      explanation: "<em>Table</em> is feminine, so the definite article is <em>la</em>: <em>la table</em>."
    },
    {
      id: "fr2_q10",
      topic: "Classroom Objects",
      type: "mcq",
      question: "What is <em>un taille-crayon</em>?",
      options: ["a pencil case", "a rubber", "a pencil sharpener", "a ruler"],
      answer: 2,
      explanation: "<em>Un taille-crayon</em> = a pencil sharpener. <em>Tailler</em> = to sharpen, <em>crayon</em> = pencil."
    },
    {
      id: "fr2_q11",
      topic: "Articles",
      type: "mcq",
      question: "How do you answer <em>Qu'est-ce que c'est?</em> about a single feminine object?",
      options: ["Ce sont des ...", "C'est un ...", "C'est une ...", "C'est les ..."],
      answer: 2,
      explanation: "For a feminine singular object: <em>C'est une ...</em> For masculine: <em>C'est un ...</em> For plurals: <em>Ce sont des ...</em>"
    },
    {
      id: "fr2_q12",
      topic: "Classroom Objects",
      type: "input",
      question: "Translate: <em>a pencil case</em> (include the article)",
      answer: "une trousse",
      explanation: "<em>Trousse</em> is feminine: <em>une trousse</em>."
    },
    {
      id: "fr2_q13",
      topic: "Classroom Objects",
      type: "input",
      question: "How do you say <em>a ruler</em> in French? (include the article)",
      answer: "une règle",
      acceptableAnswers: ["une regle", "une règle"],
      explanation: "<em>Règle</em> is feminine: <em>une règle</em>. The accent grave (è) is important!"
    },
    {
      id: "fr2_q14",
      topic: "Classroom Objects",
      type: "input",
      question: "How do you say <em>a pen</em> in French? (include the article)",
      answer: "un stylo",
      explanation: "<em>Stylo</em> is masculine: <em>un stylo</em>."
    },
    {
      id: "fr2_q15",
      topic: "Articles",
      type: "input",
      question: "What is the French for <em>the (masculine singular)</em> — one word?",
      answer: "le",
      explanation: "<em>Le</em> = the (masculine singular). Example: <em>le tableau</em> = the board."
    },
  ]
};
