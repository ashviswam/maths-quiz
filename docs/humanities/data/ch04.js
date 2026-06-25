const ch04 = {
  id: 4,
  title: "World Religions",
  icon: "🕌",
  color: "#dc2626",
  topics: ["Monotheism & Polytheism", "Abrahamic Religions", "Eastern & Other Religions", "Comparing World Religions"],
  questions: [

    // ── Monotheism & Polytheism ─────────────────────────────────
    {
      id: "hum4_q1",
      topic: "Monotheism & Polytheism",
      type: "mcq",
      question: "A monotheistic religion is one that believes in:",
      options: ["One god", "Many gods", "No gods at all", "Nature as a spiritual force"],
      answer: 0,
      explanation: "Monotheism comes from Greek: 'mono' = one, 'theos' = god. Monotheistic religions believe in one single god. The main Abrahamic monotheistic religions are Judaism, Christianity, and Islam."
    },
    {
      id: "hum4_q2",
      topic: "Monotheism & Polytheism",
      type: "mcq",
      question: "Which of the following is a polytheistic religion?",
      options: ["Hinduism (traditionally)", "Islam", "Judaism", "Christianity"],
      answer: 0,
      explanation: "Hinduism is traditionally considered polytheistic — it includes many gods and goddesses (such as Brahma, Vishnu, Shiva, Lakshmi). However, many Hindu scholars say all deities are aspects of one ultimate reality (Brahman), making it more complex. Islam, Judaism, and Christianity are strictly monotheistic."
    },
    {
      id: "hum4_q3",
      topic: "Monotheism & Polytheism",
      type: "mcq",
      question: "Which of the following groups are ALL monotheistic religions?",
      options: ["Judaism, Christianity, Islam", "Hinduism, Buddhism, Islam", "Judaism, Confucianism, Daoism", "Islam, Hinduism, Christianity"],
      answer: 0,
      explanation: "Judaism, Christianity, and Islam are the three main monotheistic religions — all believe in one God and share the Abrahamic tradition. Buddhism does not worship a personal god; Hinduism is polytheistic; Confucianism and Daoism are primarily philosophical traditions."
    },
    {
      id: "hum4_q4",
      topic: "Monotheism & Polytheism",
      type: "input",
      question: "What is the term for a religion that believes in many gods? (one word)",
      answer: "polytheistic",
      acceptableAnswers: ["polytheism"],
      explanation: "Polytheism (from Greek 'poly' = many) refers to belief in multiple gods. Ancient Mesopotamian, Greek, Roman, and Egyptian religions were polytheistic. Hinduism is the largest polytheistic religion practised today."
    },

    // ── Abrahamic Religions ─────────────────────────────────────
    {
      id: "hum4_q5",
      topic: "Abrahamic Religions",
      type: "mcq",
      question: "Which is the correct set of details for Islam?",
      options: [
        "Monotheistic; holy book is the Quran; followers pray in mosques; founded by the Prophet Muhammad",
        "Monotheistic; holy book is the Torah; followers pray in synagogues; oldest Abrahamic religion",
        "Monotheistic; holy book is the Bible; followers pray in churches; based on teachings of Jesus",
        "Polytheistic; holy book is the Vedas; followers pray in temples; originated in India"
      ],
      answer: 0,
      explanation: "Islam: founded by the Prophet Muhammad in Arabia in the 7th century AD. Holy book: the Quran (believed to be the word of Allah revealed to Muhammad). Place of worship: mosque. Islam is strictly monotheistic — there is only one God (Allah)."
    },
    {
      id: "hum4_q6",
      topic: "Abrahamic Religions",
      type: "mcq",
      question: "Which religion's holy book is the Torah, and where do its followers worship?",
      options: ["Judaism — synagogue", "Christianity — church", "Islam — mosque", "Hinduism — temple"],
      answer: 0,
      explanation: "Judaism is the oldest of the three Abrahamic religions. Its central text is the Torah (the first five books of the Hebrew Bible). Jewish people worship in synagogues and follow laws given to Moses by God. Judaism originated in the ancient Middle East."
    },
    {
      id: "hum4_q7",
      topic: "Abrahamic Religions",
      type: "mcq",
      question: "Christianity, Judaism, and Islam are called 'Abrahamic religions' because:",
      options: [
        "All three trace their spiritual lineage to the biblical figure Abraham",
        "All three were founded by a man named Abraham",
        "Abraham is the god worshipped by all three religions",
        "They all originated in the city of Abraham in ancient Mesopotamia"
      ],
      answer: 0,
      explanation: "All three religions recognise Abraham as a founding patriarch in their history. Judaism and Christianity share the Hebrew scriptures; Islam regards Abraham (Ibrahim) as a prophet. Despite sharing origins, the three religions have important theological differences."
    },
    {
      id: "hum4_q8",
      topic: "Abrahamic Religions",
      type: "mcq",
      question: "The Five Pillars of Islam include Salat (prayer five times a day) and Sawm (fasting during Ramadan). These practices are examples of:",
      options: [
        "Core obligations that all devout Muslims must fulfil",
        "Optional rituals only practised by religious leaders",
        "Customs shared by all three Abrahamic religions",
        "Cultural traditions with no religious meaning"
      ],
      answer: 0,
      explanation: "The Five Pillars of Islam are the five duties that form the foundation of Muslim life: Shahada (declaration of faith), Salat (five daily prayers), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca). All observant Muslims are expected to fulfil them."
    },
    {
      id: "hum4_q9",
      topic: "Abrahamic Religions",
      type: "mcq",
      question: "Christians believe that Jesus Christ was:",
      options: [
        "The Son of God whose teachings form the basis of Christianity",
        "The founder of Judaism who wrote the Torah",
        "The final prophet of Islam mentioned in the Quran",
        "A Mesopotamian king who established the Code of Hammurabi"
      ],
      answer: 0,
      explanation: "Christianity is based on the life and teachings of Jesus of Nazareth. Christians believe Jesus was the Son of God. The Bible (Old and New Testaments) is the holy text. Christians worship in churches. Jesus is also considered a prophet in Islam, but is not considered the Son of God in Islamic belief."
    },
    {
      id: "hum4_q10",
      topic: "Abrahamic Religions",
      type: "short",
      question: "Compare Judaism, Christianity, and Islam. What do they have in common? What is one key difference between them? Use specific details for each religion.",
      answer: "Similarities: All three are monotheistic (belief in one God). All three trace their origins to Abraham and consider him a spiritual patriarch. All three have sacred texts (Torah, Bible, Quran) that guide followers' lives. All three emphasise moral living, prayer, and care for others. All three have a tradition of prophets — Abraham, Moses, Jesus, and Muhammad are all recognised. Difference: A key difference is their view of Jesus. Christians believe Jesus is the Son of God and the Messiah whose death and resurrection offer salvation. Jews do not accept Jesus as the Messiah — they await the Messiah's coming. Muslims respect Jesus (Isa) as a prophet but do not believe he was divine or the Son of God — they believe Muhammad was the final prophet.",
      explanation: "When comparing religions, a strong answer identifies both genuine similarities (to avoid stereotyping all as completely different) and specific differences (not just 'they have different names'). The view of Jesus is the clearest doctrinal difference between the three."
    },

    // ── Eastern & Other Religions ───────────────────────────────
    {
      id: "hum4_q11",
      topic: "Eastern & Other Religions",
      type: "mcq",
      question: "Buddhism was founded by Siddhartha Gautama. A core teaching of Buddhism is:",
      options: [
        "That suffering can be overcome by following the Noble Eightfold Path",
        "That one must pray five times daily to achieve enlightenment",
        "That worshipping many gods brings peace and balance",
        "That the Torah is the ultimate guide to spiritual life"
      ],
      answer: 0,
      explanation: "Buddhism was founded by Siddhartha Gautama (the Buddha) in India around the 5th century BC. Core teachings include the Four Noble Truths (life involves suffering; suffering has a cause; suffering can end; the path is the Eightfold Path) and the Noble Eightfold Path guiding ethical, mindful living. Buddhism does not require belief in a personal creator god."
    },
    {
      id: "hum4_q12",
      topic: "Eastern & Other Religions",
      type: "mcq",
      question: "Hinduism is one of the world's oldest religions. Which statement about Hinduism is correct?",
      options: [
        "It has many gods and goddesses, and followers believe in karma and reincarnation",
        "It is a strictly monotheistic religion worshipping a single god called Allah",
        "It was founded in the 7th century AD in the Arabian Peninsula",
        "Its followers worship only in mosques and read from the Quran"
      ],
      answer: 0,
      explanation: "Hinduism originated in India and is among the oldest living religions. It features many deities (including Brahma, Vishnu, Shiva). Core beliefs include karma (actions have consequences), reincarnation (rebirth after death), and dharma (moral duty). The Vedas and Upanishads are important Hindu scriptures."
    },
    {
      id: "hum4_q13",
      topic: "Eastern & Other Religions",
      type: "mcq",
      question: "Confucianism is often described as a philosophy or ethical system rather than a religion because:",
      options: [
        "It focuses on moral behaviour, social harmony, and respect rather than worship of a god",
        "It was created after all major world religions were already established",
        "It teaches that nature is the only true divine force",
        "It requires followers to pray five times a day in temples"
      ],
      answer: 0,
      explanation: "Confucianism, based on the teachings of Confucius (Kong Qiu, 551–479 BC), emphasises ethics, filial piety (respect for parents and ancestors), loyalty, and social harmony. It does not involve the worship of a god in the traditional sense — it is more a guide for ethical living and good governance."
    },
    {
      id: "hum4_q14",
      topic: "Eastern & Other Religions",
      type: "mcq",
      question: "Which religion does NOT have a belief in a personal creator god at its centre?",
      options: [
        "Buddhism",
        "Islam",
        "Christianity",
        "Judaism"
      ],
      answer: 0,
      explanation: "Buddhism does not centre on a personal creator god. The Buddha is a teacher who achieved enlightenment, not a god to be worshipped in the way the Abrahamic religions worship God/Allah. Some forms of Buddhism do include worship of bodhisattvas, but at its philosophical core, Buddhism does not require theism."
    },
    {
      id: "hum4_q15",
      topic: "Eastern & Other Religions",
      type: "mcq",
      question: "The concept of 'karma' in Hinduism and Buddhism means:",
      options: [
        "Your actions in this life affect your future — good actions lead to good outcomes",
        "You must pray to all gods equally to achieve a balanced afterlife",
        "All suffering in life is caused by evil spirits from the past",
        "The universe was created by a series of divine accidents"
      ],
      answer: 0,
      explanation: "Karma (Sanskrit: 'action' or 'deed') is the concept that every action has a consequence — good actions lead to positive outcomes (in this life or the next), and harmful actions lead to suffering. It is central to both Hindu and Buddhist belief systems."
    },

    // ── Comparing World Religions ───────────────────────────────
    {
      id: "hum4_q16",
      topic: "Comparing World Religions",
      type: "mcq",
      question: "Which of the following is a similarity shared by ALL the world's major religions?",
      options: [
        "Each religion has moral guidelines encouraging followers to treat others with care and respect",
        "All major religions worship exactly the same god under different names",
        "All major religions were founded in the same region of the world",
        "All major religions reject the idea of an afterlife"
      ],
      answer: 0,
      explanation: "Despite differences in theology, ritual, and history, virtually all major religions include moral guidelines — the 'Golden Rule' (treat others as you wish to be treated) appears in Christianity, Islam, Judaism, Hinduism, Buddhism, and Confucianism in various forms."
    },
    {
      id: "hum4_q17",
      topic: "Comparing World Religions",
      type: "mcq",
      question: "Match the religion to its place of worship: mosque → _____, church → _____, synagogue → _____.",
      options: [
        "Islam, Christianity, Judaism",
        "Christianity, Islam, Hinduism",
        "Judaism, Islam, Christianity",
        "Buddhism, Islam, Christianity"
      ],
      answer: 0,
      explanation: "Mosque = Islam; Church = Christianity; Synagogue = Judaism. Other places of worship: Temple = Hinduism and Buddhism; Gurdwara = Sikhism. Knowing places of worship is part of identifying key features of each religion."
    },
    {
      id: "hum4_q18",
      topic: "Comparing World Religions",
      type: "mcq",
      question: "The holy books of three Abrahamic religions in order of age (oldest first) are:",
      options: [
        "Torah (Judaism) → Bible (Christianity) → Quran (Islam)",
        "Quran (Islam) → Bible (Christianity) → Torah (Judaism)",
        "Bible (Christianity) → Torah (Judaism) → Quran (Islam)",
        "Torah (Judaism) → Quran (Islam) → Bible (Christianity)"
      ],
      answer: 0,
      explanation: "The Torah (Hebrew Bible) dates to approximately 1000–600 BC. The Christian Bible's New Testament was written in the 1st century AD. The Quran was revealed to Muhammad in the 7th century AD (610–632 AD). This also reflects the chronological order of the three religions' founding."
    },
    {
      id: "hum4_q19",
      topic: "Comparing World Religions",
      type: "mcq",
      question: "Daoism (Taoism) originated in China and teaches that:",
      options: [
        "Living in harmony with the natural flow of the universe ('the Tao') brings peace and wisdom",
        "Strict laws and social hierarchies are the path to a good society",
        "Worshipping one God through prayer and fasting ensures eternal life",
        "The only purpose of life is to accumulate wisdom through military conquest"
      ],
      answer: 0,
      explanation: "Daoism, founded by Laozi (c. 6th century BC), teaches that the Tao ('the Way') is the fundamental principle underlying the universe. Living simply, gently, and in harmony with nature leads to peace. Daoism contrasts with Confucianism's emphasis on social rules and hierarchy."
    },
    {
      id: "hum4_q20",
      topic: "Comparing World Religions",
      type: "short",
      question: "Choose TWO world religions you have studied. Write a comparison paragraph that explains: (1) One important similarity between them, and (2) One important difference. Give specific details for each religion in your answer.",
      answer: "Example — Islam and Buddhism: Similarity: Both Islam and Buddhism teach that moral behaviour and ethical living are essential. Islam teaches that Muslims must follow the Five Pillars, which include giving to charity (Zakat) and caring for others. Similarly, Buddhism's Eightfold Path emphasises right action, right speech, and right livelihood — all focusing on how we treat other people and ourselves. Both traditions believe that how we act in life matters deeply. Difference: A key difference is their view of God. Islam is strictly monotheistic — Muslims believe there is one God (Allah) who created the universe, revealed the Quran, and to whom all Muslims will be accountable on the Day of Judgement. Buddhism, however, does not centre on a personal creator god — the Buddha was a human teacher who achieved enlightenment, and Buddhist practice focuses on personal spiritual development through meditation and ethical living rather than prayer to a divine being.",
      explanation: "Strong comparison answers use the structure: 'Similarity: Both [Religion A] and [Religion B]...' followed by 'Difference: [Religion A] believes/does... whereas [Religion B] believes/does...' Avoid vague claims like 'they are both good religions' — be specific."
    },
    {
      id: "hum4_q21",
      topic: "Comparing World Religions",
      type: "short",
      question: "A student says: 'All religions are basically the same — they all just tell people to be good.' Is this a fair summary? Write a response that agrees with the student's idea in ONE way, but then challenges it using specific examples from at least TWO different religions.",
      answer: "The student makes a point that has some truth — it is fair to say that almost all major world religions do teach ethical behaviour and care for others. For example, Islam's Five Pillars include Zakat (obligatory charity), and Buddhism's Eightfold Path includes 'right action' towards others. In this sense, they share a common moral foundation. However, the student's statement is too simple. Religions differ significantly in their core beliefs, practices, and worldview. For example, Islam is strictly monotheistic — belief in one God (Allah) is the absolute foundation of Islamic faith, and associating any partner with God is the greatest sin. In contrast, traditional Hinduism is polytheistic — Hindus worship many gods, each representing different aspects of the divine. These are not minor differences — they lead to fundamentally different ways of worshipping, praying, and understanding the universe. So while 'being good' is a shared goal, religions differ deeply in HOW they understand God, reality, and the path to a meaningful life.",
      explanation: "This question tests higher-order thinking — agreeing AND disagreeing with a statement. The best answers don't just list differences; they engage with the student's argument, show they understand it, then use specific evidence to complicate it."
    }

  ]
};
