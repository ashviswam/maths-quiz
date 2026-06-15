const ch01 = {
  id: 1,
  title: "Digital Citizenship",
  icon: "🌐",
  color: "#0ea5e9",
  topics: ["Digital Footprint & Online Safety", "Phishing & Passwords", "Sources & Plagiarism"],
  questions: [

    // ── Digital Footprint & Online Safety ──────────────────────

    {
      id: "ict1_q1",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "What is a digital footprint?",
      options: [
        "A record of all your online activities — posts, likes, comments, searches",
        "The amount of storage used on your device",
        "A type of computer virus",
        "Your computer's screen resolution setting"
      ],
      answer: 0,
      explanation: "Your digital footprint is the trail of data created by everything you do online. It includes posts, comments, likes, shares, and searches — and it is permanent."
    },

    {
      id: "ict1_q2",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "You post a photo online and then delete it a few minutes later. What happens to the photo?",
      options: [
        "It is permanently gone from the internet",
        "It can still be found — it may have been copied, shared, or cached",
        "It is only visible to people who saw it in those few minutes",
        "It moves to the Recycle Bin and is deleted after 30 days"
      ],
      answer: 1,
      explanation: "Once something is posted online it can be copied, screenshotted, or cached by other servers. Deleting your version does not remove all copies — everything you post online will be online forever."
    },

    {
      id: "ict1_q3",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "What does the letter <b>T</b> stand for in the <b>THINK</b> acronym used before posting online?",
      options: ["Timely", "True", "Transparent", "Trustworthy"],
      answer: 1,
      explanation: "THINK stands for: <b>T</b>rue, <b>H</b>elpful, <b>I</b>nspiring, <b>N</b>ecessary, <b>K</b>ind. Before posting, ask: Is it True?"
    },

    {
      id: "ict1_q4",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "What does the letter <b>K</b> stand for in the THINK acronym?",
      options: ["Knowledgeable", "Known", "Kind", "Keen"],
      answer: 2,
      explanation: "The K in THINK stands for <b>Kind</b>. Before posting, ask yourself: will this be hurtful to anyone? Posting unkind content contributes to cyberbullying."
    },

    {
      id: "ict1_q5",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "Which of the following is an example of <b>oversharing</b> online?",
      options: [
        "Posting your favourite book recommendation",
        "Sharing your full home address in a public chat",
        "Uploading a photo of your pet",
        "Telling online friends you enjoyed a film"
      ],
      answer: 1,
      explanation: "Oversharing means sharing more personal information than is safe or necessary. Your home address is sensitive private information — sharing it publicly could allow strangers to find where you live."
    },

    {
      id: "ict1_q6",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "Someone uses your personal information (name, photo, details) to pretend to be you online. This is called:",
      options: ["Cyberbullying", "Phishing", "Identity theft", "Plagiarism"],
      answer: 2,
      explanation: "Identity theft is when someone uses your personal details to impersonate you. Oversharing information online makes identity theft much easier for criminals."
    },

    {
      id: "ict1_q7",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "Which of the following pieces of information should you <b>NOT</b> share with people you have only met online?",
      options: [
        "Your favourite subject at school",
        "Your home address and phone number",
        "The name of a book you are reading",
        "Your opinion on a popular film"
      ],
      answer: 1,
      explanation: "You should never share your full name, home address, phone number, or bank details with people online. Always think about who you are sharing with and why they would need that information."
    },

    {
      id: "ict1_q8",
      topic: "Digital Footprint & Online Safety",
      type: "mcq",
      question: "Maya witnesses a classmate being cyberbullied in a group chat. What is the <b>best</b> thing she can do?",
      options: [
        "Join in so she doesn't seem different from the group",
        "Ignore it — it's not her problem",
        "Report the situation to a trusted adult immediately",
        "Leave the group chat without saying anything"
      ],
      answer: 2,
      explanation: "The best response is to report cyberbullying to a trusted adult immediately. Ignoring it or joining in both make the situation worse. Being a bystander who does nothing can also contribute to the harm."
    },

    // ── Phishing & Passwords ───────────────────────────────────

    {
      id: "ict1_q9",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "What is a <b>phishing</b> message?",
      options: [
        "A friendly message from a classmate asking for homework help",
        "A criminal's attempt to trick you into sharing personal information",
        "A spam advertisement for cheap products",
        "An automatic reminder from a website you use"
      ],
      answer: 1,
      explanation: "Phishing is when a criminal sends a deceptive message designed to trick you into revealing passwords, account details, or other personal information. The name comes from 'fishing' — they are fishing for your information."
    },

    {
      id: "ict1_q10",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "Which of the following is a <b>warning sign</b> that an email might be a phishing attempt?",
      options: [
        "It greets you by your full name",
        "It comes from your teacher's known school email address",
        "It creates a sense of urgency, saying your account will be deleted immediately",
        "It is written in perfect English with no spelling mistakes"
      ],
      answer: 2,
      explanation: "A sense of urgency ('act now or lose your account!') is a classic phishing tactic. Criminals use fear to stop you thinking carefully before clicking. Real organisations rarely demand instant action by email."
    },

    {
      id: "ict1_q11",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "In a phishing email, what is a <b>forged link</b>?",
      options: [
        "A link to a website the sender made themselves",
        "A link that looks real but actually leads to a different (fake) website",
        "A link that has been broken and no longer works",
        "A link shared without the original website's permission"
      ],
      answer: 1,
      explanation: "A forged link looks like a real website address (e.g. 'paypal.com') but actually takes you to a fake site designed to steal your information. Always check links carefully before clicking."
    },

    {
      id: "ict1_q12",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "Real organisations such as banks will:",
      options: [
        "Ask for your password by email if there is an urgent problem",
        "Never ask you to share personal information via email",
        "Send you a link to log in immediately to verify your account",
        "Always ask you to reply to their email with your details"
      ],
      answer: 1,
      explanation: "Legitimate organisations never ask for passwords or sensitive information via email. If you receive such a request, it is almost certainly a phishing attempt — do not reply and report it."
    },

    {
      id: "ict1_q13",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "Which of the following is the <b>strongest</b> password?",
      options: [
        "password123",
        "Pragathy2012",
        "MyD0g!sC00l#7",
        "12345678"
      ],
      answer: 2,
      explanation: "MyD0g!sC00l#7 is the strongest because it mixes uppercase letters, lowercase letters, numbers, and special characters, and is more than 8 characters long. The other options are predictable or too simple."
    },

    {
      id: "ict1_q14",
      topic: "Phishing & Passwords",
      type: "mcq",
      question: "A safe password should contain at least how many characters?",
      options: ["4", "6", "8", "20"],
      answer: 2,
      explanation: "A minimum of 8 characters is required for a safe password. Combined with uppercase, lowercase, numbers, and special characters, this makes the password very difficult to guess or crack."
    },

    {
      id: "ict1_q15",
      topic: "Phishing & Passwords",
      type: "short",
      question: "Describe <b>three</b> features of a strong password.",
      answer: "A strong password should include: (1) a mix of uppercase AND lowercase letters (e.g. AaBb), (2) at least one number (e.g. 7), (3) at least one special character (e.g. !, @, #, $), and (4) a minimum of 8 characters total. It should be easy for you to remember but hard for others to guess — avoid using your name or birthday.",
      explanation: "Using all four character types (upper, lower, number, special) dramatically increases the number of possible combinations, making the password exponentially harder to crack."
    },

    // ── Sources & Plagiarism ───────────────────────────────────

    {
      id: "ict1_q16",
      topic: "Sources & Plagiarism",
      type: "mcq",
      question: "What does <b>plagiarism</b> mean?",
      options: [
        "Summarising someone else's ideas in your own words with a citation",
        "Using someone else's words or ideas and passing them off as your own without credit",
        "Translating a text from another language",
        "Quoting a source correctly with the author's name"
      ],
      answer: 1,
      explanation: "Plagiarism is presenting someone else's work or ideas as your own without giving them credit. This is dishonest. Whether you quote, paraphrase, or summarise, you must always cite your source."
    },

    {
      id: "ict1_q17",
      topic: "Sources & Plagiarism",
      type: "mcq",
      question: "When you rewrite someone else's information completely <b>in your own words</b>, this is called:",
      options: ["Quoting", "Plagiarising", "Paraphrasing", "Summarising"],
      answer: 2,
      explanation: "Paraphrasing means rewriting information in your own words. You still need to cite the original source. This is different from summarising, which captures only the key points."
    },

    {
      id: "ict1_q18",
      topic: "Sources & Plagiarism",
      type: "mcq",
      question: "In MLA citation format, which element comes <b>first</b>?",
      options: ["The website name", "The title of the article", "The author's name", "The date of access"],
      answer: 2,
      explanation: "MLA format is: Author, Title of source, Website, Publication date, Date of Access. The author always comes first. Example: Alam, Ashraf. \"Possibilities and Apprehensions\", ieexplore.org, 26 Nov. 2011, Accessed 03/10/2023."
    },

    {
      id: "ict1_q19",
      topic: "Sources & Plagiarism",
      type: "mcq",
      question: "A <b>credible</b> source is one that is:",
      options: [
        "Long and detailed with many images",
        "The first result shown by a search engine",
        "Reliable, trustworthy, and believable",
        "Written by a student the same age as you"
      ],
      answer: 2,
      explanation: "Credible sources are reliable, trustworthy, and believable. When evaluating a source, ask: does the author know the topic? Do other sources agree? Is the information logical? Does a respected organisation back it up?"
    },

    {
      id: "ict1_q20",
      topic: "Sources & Plagiarism",
      type: "mcq",
      question: "Tom copies text from a website directly into his school assignment without citing the source. This is an example of:",
      options: ["Paraphrasing", "Quoting correctly", "Plagiarism", "Summarising"],
      answer: 2,
      explanation: "Copying text from a website without citing it is plagiarism — presenting someone else's words as your own. Even when quoting directly, you must identify the source."
    },

    {
      id: "ict1_q21",
      topic: "Sources & Plagiarism",
      type: "short",
      question: "Explain what oversharing is and give <b>two</b> specific risks of oversharing personal information online.",
      answer: "Oversharing means sharing more personal information online than is necessary or safe. Two risks: (1) Identity theft — someone could collect enough details about you (name, school, photo, birthday) to pretend to be you online. (2) Cyberbullying — someone might use personal information about you to target and bully you online. Other risks include privacy invasion and online scams.",
      explanation: "Once information is shared online, you lose control of it. Criminals and bad actors actively look for personal details shared carelessly in public profiles and group chats."
    }

  ]
};
