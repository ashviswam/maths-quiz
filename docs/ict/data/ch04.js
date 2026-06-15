const ch04 = {
  id: 4,
  title: "Computational Thinking & Logic",
  icon: "🔣",
  color: "#f59e0b",
  topics: ["Computational Thinking", "Logic Gates", "Logical Reasoning & Venn Diagrams", "Algorithms & Compression", "Abstraction & Networks"],
  questions: [

    // ── Computational Thinking ─────────────────────────────────

    {
      id: "ict4_q1",
      topic: "Computational Thinking",
      type: "mcq",
      question: "What is <b>computational thinking</b>?",
      options: [
        "Typing on a computer very quickly",
        "How computer scientists think about problems — breaking large, difficult problems into smaller ones that are easier to solve",
        "Writing computer programs using a programming language",
        "Using a calculator to do maths"
      ],
      answer: 1,
      explanation: "Computational thinking is a way of approaching and solving problems. It involves breaking big problems into smaller, manageable pieces and thinking logically about how to solve each part."
    },

    {
      id: "ict4_q2",
      topic: "Computational Thinking",
      type: "mcq",
      question: "What is <b>decomposition</b> in computational thinking?",
      options: [
        "Writing a step-by-step set of instructions for solving a problem",
        "Removing unnecessary details from a problem",
        "Breaking a big problem down into smaller, more manageable parts",
        "Checking an algorithm for errors"
      ],
      answer: 2,
      explanation: "Decomposition means dividing a large or complex problem into smaller, easier-to-handle pieces. Like sorting a jigsaw puzzle into groups by colour — you tackle one group at a time rather than the whole pile at once."
    },

    {
      id: "ict4_q3",
      topic: "Computational Thinking",
      type: "mcq",
      question: "What is <b>abstraction</b> in computational thinking?",
      options: [
        "Running a program on a computer",
        "Focusing on the important details and ignoring the unnecessary ones",
        "Breaking a problem into smaller steps",
        "Repeating an instruction many times"
      ],
      answer: 1,
      explanation: "Abstraction means removing or hiding details that are not needed for your purpose. For example, a floor plan of a room ignores carpet colour and bedding — it only shows what matters for measuring the space."
    },

    {
      id: "ict4_q4",
      topic: "Computational Thinking",
      type: "mcq",
      question: "What is <b>algorithmic thinking</b>?",
      options: [
        "Using emojis to represent words, like in text messages",
        "Thinking about how to design a step-by-step set of instructions to solve a problem",
        "Using logic gates to build circuits",
        "Breaking a problem into groups"
      ],
      answer: 1,
      explanation: "Algorithmic thinking is creating a precise, ordered set of instructions — like a recipe — that solves a problem. Each step is clear and must be carried out in the right order."
    },

    {
      id: "ict4_q5",
      topic: "Computational Thinking",
      type: "mcq",
      question: "What is <b>logical thinking</b>?",
      options: [
        "Memorising facts and repeating them",
        "Looking at facts and information and figuring out what makes the most sense",
        "Writing code in a programming language",
        "Drawing a diagram of a network"
      ],
      answer: 1,
      explanation: "Logical thinking means using evidence and facts to draw conclusions that make sense. Example: you see dark clouds, hear thunder, and feel rain → you logically conclude a storm is coming."
    },

    // ── Logic Gates — Binary & Basics ─────────────────────────

    {
      id: "ict4_q6",
      topic: "Logic Gates",
      type: "mcq",
      question: "In binary, what does the digit <b>1</b> represent in the context of logic gates?",
      options: ["OFF / FALSE", "ON / TRUE", "An error", "Half-power"],
      answer: 1,
      explanation: "In binary logic, 1 means ON or TRUE (like a light switch that is on). 0 means OFF or FALSE. Computers use billions of these two-state signals to process all information."
    },

    {
      id: "ict4_q7",
      topic: "Logic Gates",
      type: "mcq",
      question: "In binary, what does the digit <b>0</b> represent in the context of logic gates?",
      options: ["ON / TRUE", "Half power", "OFF / FALSE", "An error in the circuit"],
      answer: 2,
      explanation: "In binary logic, 0 means OFF or FALSE. Every computer circuit ultimately works with just these two states: 0 (OFF/FALSE) and 1 (ON/TRUE)."
    },

    // ── AND Gate ──────────────────────────────────────────────

    {
      id: "ict4_q8",
      topic: "Logic Gates",
      type: "mcq",
      question: "How does an <b>AND gate</b> work?",
      options: [
        "The output is ON if at least one input is ON",
        "The output is ON only when BOTH inputs are ON",
        "The output is always the opposite of the input",
        "The output is ON when both inputs are OFF"
      ],
      answer: 1,
      explanation: "An AND gate outputs ON (1) only when ALL its inputs are ON. If either input is OFF, the output is OFF. Think of it as two switches in a series — both must be pressed to turn the light on."
    },

    {
      id: "ict4_q9",
      topic: "Logic Gates",
      type: "mcq",
      question: "AND gate: Input A = ON, Input B = ON. What is the output?",
      options: ["OFF", "ON", "It depends on a third input", "Unknown"],
      answer: 1,
      explanation: "AND gate rule: output is ON only when BOTH inputs are ON. Since A=ON and B=ON, the output is ON (1)."
    },

    {
      id: "ict4_q10",
      topic: "Logic Gates",
      type: "mcq",
      question: "AND gate: Input A = ON, Input B = OFF. What is the output?",
      options: ["ON", "OFF", "ON — because at least one input is ON", "It alternates"],
      answer: 1,
      explanation: "AND gate rule: output is ON only when BOTH inputs are ON. Since B=OFF, the output is OFF (0). Both inputs must be ON — one being OFF is enough to make the output OFF."
    },

    {
      id: "ict4_q11",
      topic: "Logic Gates",
      type: "mcq",
      question: "AND gate: Input A = OFF, Input B = OFF. What is the output?",
      options: ["ON", "OFF", "Half-ON", "It equals the first input"],
      answer: 1,
      explanation: "AND gate: output is ON only when BOTH inputs are ON. Since both are OFF, the output is OFF (0)."
    },

    {
      id: "ict4_q12",
      topic: "Logic Gates",
      type: "mcq",
      question: "What shape is used to represent an AND gate in a logic circuit diagram?",
      options: [
        "A curved/arrow shape pointing to the right",
        "A D-shape (flat left side, curved right side)",
        "A triangle with a small circle (bubble) on the output",
        "A circle with a cross inside"
      ],
      answer: 1,
      explanation: "An AND gate is drawn as a D-shape — flat on the left where the inputs enter and curved on the right where the output exits. This symbol is standardised so all circuit diagrams look the same."
    },

    // ── OR Gate ───────────────────────────────────────────────

    {
      id: "ict4_q13",
      topic: "Logic Gates",
      type: "mcq",
      question: "How does an <b>OR gate</b> work?",
      options: [
        "The output is ON only when BOTH inputs are ON",
        "The output is ON when at least ONE input is ON",
        "The output is always the opposite of the input",
        "The output is OFF when both inputs are ON"
      ],
      answer: 1,
      explanation: "An OR gate outputs ON (1) when at least one input is ON. Only when ALL inputs are OFF does the output stay OFF. Think of two parallel switches — either one being pressed turns the light on."
    },

    {
      id: "ict4_q14",
      topic: "Logic Gates",
      type: "mcq",
      question: "OR gate: Input A = OFF, Input B = ON. What is the output?",
      options: ["OFF", "ON", "It depends on a third input", "Unknown"],
      answer: 1,
      explanation: "OR gate rule: output is ON if at least one input is ON. Since B=ON, the output is ON (1) — even though A=OFF."
    },

    {
      id: "ict4_q15",
      topic: "Logic Gates",
      type: "mcq",
      question: "OR gate: Input A = OFF, Input B = OFF. What is the output?",
      options: ["ON", "OFF", "ON — because the gate is energised", "Half-ON"],
      answer: 1,
      explanation: "OR gate rule: output is ON if at least one input is ON. Since BOTH inputs are OFF, the output is OFF (0). This is the only combination that gives an OFF output for an OR gate."
    },

    {
      id: "ict4_q16",
      topic: "Logic Gates",
      type: "mcq",
      question: "OR gate: Input A = ON, Input B = ON. What is the output?",
      options: ["OFF", "ON", "Unknown", "It overloads"],
      answer: 1,
      explanation: "OR gate rule: output is ON if at least one input is ON. Both inputs are ON, so the output is ON (1). An OR gate only outputs OFF when ALL inputs are OFF."
    },

    {
      id: "ict4_q17",
      topic: "Logic Gates",
      type: "mcq",
      question: "What shape is used to represent an OR gate in a logic circuit diagram?",
      options: [
        "A D-shape with a flat left side",
        "A curved/arrow shape — both the input side and output side are curved",
        "A triangle with a bubble on the output",
        "A rectangle with an X inside"
      ],
      answer: 1,
      explanation: "An OR gate is drawn as a curved/arrow shape — both the input side (left) and the output tip (right) are curved. This distinguishes it from the flat-sided AND gate."
    },

    // ── NOT Gate ──────────────────────────────────────────────

    {
      id: "ict4_q18",
      topic: "Logic Gates",
      type: "mcq",
      question: "How does a <b>NOT gate</b> work?",
      options: [
        "It adds two inputs together",
        "It inverts the input — ON becomes OFF, and OFF becomes ON",
        "It requires two inputs to produce an output",
        "It only works when the input is OFF"
      ],
      answer: 1,
      explanation: "A NOT gate (also called an inverter) has only ONE input and ONE output. It flips the signal: if the input is ON (1), the output is OFF (0); if the input is OFF (0), the output is ON (1)."
    },

    {
      id: "ict4_q19",
      topic: "Logic Gates",
      type: "input",
      question: "NOT gate: Input = ON. What is the output? (Type ON or OFF)",
      answer: "OFF",
      acceptableAnswers: ["off", "0", "false"],
      explanation: "A NOT gate inverts its input. ON (1) becomes OFF (0). If the input is ON, the output is the opposite: OFF."
    },

    {
      id: "ict4_q20",
      topic: "Logic Gates",
      type: "input",
      question: "NOT gate: Input = OFF. What is the output? (Type ON or OFF)",
      answer: "ON",
      acceptableAnswers: ["on", "1", "true"],
      explanation: "A NOT gate inverts its input. OFF (0) becomes ON (1). If the input is OFF, the output is the opposite: ON."
    },

    {
      id: "ict4_q21",
      topic: "Logic Gates",
      type: "mcq",
      question: "What symbol is used for a NOT gate in a logic circuit?",
      options: [
        "A D-shape (flat on the left)",
        "A curved arrow shape",
        "A triangle with a small circle (bubble) on the output end",
        "A square with a minus sign"
      ],
      answer: 2,
      explanation: "A NOT gate is drawn as a triangle pointing to the right, with a small circle (bubble) at the output end. The bubble is the key feature — it represents the inversion of the signal."
    },

    {
      id: "ict4_q22",
      topic: "Logic Gates",
      type: "mcq",
      question: "Who invented Boolean algebra, on which logic gates are based?",
      options: [
        "Alan Turing, in the 20th century",
        "George Boole, a mathematician from 19th century England",
        "Ada Lovelace, the first programmer",
        "Tim Berners-Lee, inventor of the World Wide Web"
      ],
      answer: 1,
      explanation: "George Boole was a mathematician from England in the 19th century who developed a system of algebraic logic now called Boolean algebra. This is the foundation of all digital circuits and computer logic. Boolean algebra is named after him."
    },

    // ── Truth Tables ──────────────────────────────────────────

    {
      id: "ict4_q23",
      topic: "Logic Gates",
      type: "mcq",
      question: "A truth table for an AND gate with inputs A and B shows all possible combinations. Which row gives an output of ON?",
      options: [
        "A=OFF, B=OFF",
        "A=ON, B=OFF",
        "A=OFF, B=ON",
        "A=ON, B=ON"
      ],
      answer: 3,
      explanation: "An AND gate only outputs ON when BOTH inputs are ON. The only row where A=ON and B=ON gives output=ON. All other combinations give OFF.",
      diagram: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;font-family:monospace">
  <rect width="320" height="160" rx="8" fill="#1e293b"/>
  <text x="30" y="24" fill="#94a3b8" font-size="13" font-weight="bold">A</text>
  <text x="100" y="24" fill="#94a3b8" font-size="13" font-weight="bold">B</text>
  <text x="200" y="24" fill="#94a3b8" font-size="13" font-weight="bold">Output (A AND B)</text>
  <line x1="10" y1="30" x2="310" y2="30" stroke="#334155" stroke-width="1"/>
  <text x="30" y="55" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="100" y="55" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="200" y="55" fill="#ef4444" font-size="13">OFF</text>
  <text x="30" y="85" fill="#e2e8f0" font-size="13">ON</text>
  <text x="100" y="85" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="200" y="85" fill="#ef4444" font-size="13">OFF</text>
  <text x="30" y="115" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="100" y="115" fill="#e2e8f0" font-size="13">ON</text>
  <text x="200" y="115" fill="#ef4444" font-size="13">OFF</text>
  <rect x="8" y="126" width="304" height="26" rx="4" fill="#166534" opacity="0.4"/>
  <text x="30" y="143" fill="#86efac" font-size="13" font-weight="bold">ON</text>
  <text x="100" y="143" fill="#86efac" font-size="13" font-weight="bold">ON</text>
  <text x="200" y="143" fill="#86efac" font-size="13" font-weight="bold">ON ✓</text>
</svg>`
    },

    {
      id: "ict4_q24",
      topic: "Logic Gates",
      type: "mcq",
      question: "A truth table for an OR gate with inputs A and B shows all possible combinations. Which row gives an output of <b>OFF</b>?",
      options: [
        "A=ON, B=ON",
        "A=ON, B=OFF",
        "A=OFF, B=ON",
        "A=OFF, B=OFF"
      ],
      answer: 3,
      explanation: "An OR gate outputs OFF only when ALL inputs are OFF. The only combination that gives output=OFF is A=OFF and B=OFF. All other combinations give ON.",
      diagram: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;font-family:monospace">
  <rect width="320" height="160" rx="8" fill="#1e293b"/>
  <text x="30" y="24" fill="#94a3b8" font-size="13" font-weight="bold">A</text>
  <text x="100" y="24" fill="#94a3b8" font-size="13" font-weight="bold">B</text>
  <text x="200" y="24" fill="#94a3b8" font-size="13" font-weight="bold">Output (A OR B)</text>
  <line x1="10" y1="30" x2="310" y2="30" stroke="#334155" stroke-width="1"/>
  <text x="30" y="55" fill="#e2e8f0" font-size="13">ON</text>
  <text x="100" y="55" fill="#e2e8f0" font-size="13">ON</text>
  <text x="200" y="55" fill="#86efac" font-size="13">ON</text>
  <text x="30" y="85" fill="#e2e8f0" font-size="13">ON</text>
  <text x="100" y="85" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="200" y="85" fill="#86efac" font-size="13">ON</text>
  <text x="30" y="115" fill="#e2e8f0" font-size="13">OFF</text>
  <text x="100" y="115" fill="#e2e8f0" font-size="13">ON</text>
  <text x="200" y="115" fill="#86efac" font-size="13">ON</text>
  <rect x="8" y="126" width="304" height="26" rx="4" fill="#7f1d1d" opacity="0.4"/>
  <text x="30" y="143" fill="#fca5a5" font-size="13" font-weight="bold">OFF</text>
  <text x="100" y="143" fill="#fca5a5" font-size="13" font-weight="bold">OFF</text>
  <text x="200" y="143" fill="#fca5a5" font-size="13" font-weight="bold">OFF ✓</text>
</svg>`
    },

    {
      id: "ict4_q25",
      topic: "Logic Gates",
      type: "mcq",
      question: "Look at this logic circuit:<br><br><code>Input: ON → [NOT gate] → [AND gate with second input OFF] → output?</code><br><br>What is the final output?",
      options: ["ON", "OFF", "Depends on a third gate", "The circuit is invalid"],
      answer: 1,
      explanation: "Step by step: The NOT gate inverts ON → OFF. Now the AND gate has inputs OFF and OFF. AND gate requires both ON → output is OFF. The final output is OFF."
    },

    {
      id: "ict4_q26",
      topic: "Logic Gates",
      type: "mcq",
      question: "In the Ryan the Robot circuit, the robot's light comes on when: <code>(battery OR solar_panels) AND eye_lights AND NOT speak</code>. The battery is ON, eye_lights are ON, and speaking is ON. Do the lights come on?",
      options: [
        "Yes — the battery and eye lights are both ON",
        "No — the NOT speak part means speaking=ON makes that part OFF, so the AND fails",
        "Yes — any one part being ON is enough for an AND gate",
        "No — the solar panels are not mentioned so the circuit fails"
      ],
      answer: 1,
      explanation: "Work it through: (battery OR solar_panels) = ON OR unknown = ON. NOT speak = NOT ON = OFF. The AND gate now has ON AND ON AND OFF = OFF. Because NOT speak is OFF, the whole circuit is OFF. The robot's lights do NOT come on while it is speaking."
    },

    {
      id: "ict4_q27",
      topic: "Logic Gates",
      type: "short",
      question: "Complete the truth table for a <b>NOT gate</b> below, then explain in one sentence what a NOT gate does.<br><br>Input: ON → Output: ?<br>Input: OFF → Output: ?",
      answer: "NOT gate truth table: Input ON → Output OFF. Input OFF → Output ON. A NOT gate inverts its input — it turns ON into OFF and OFF into ON.",
      explanation: "A NOT gate is also called an inverter. It has only one input and one output and always produces the opposite signal. It is represented by a triangle with a small circle (bubble) at the output."
    },

    {
      id: "ict4_q28",
      topic: "Logic Gates",
      type: "short",
      question: "Complete this truth table for an <b>AND gate</b>:<br><br>A=OFF, B=OFF → Output = ?<br>A=ON, B=OFF → Output = ?<br>A=OFF, B=ON → Output = ?<br>A=ON, B=ON → Output = ?<br><br>Then write the rule for an AND gate in one sentence.",
      answer: "AND gate truth table: OFF+OFF=OFF, ON+OFF=OFF, OFF+ON=OFF, ON+ON=ON. Rule: An AND gate outputs ON only when ALL inputs are ON — if even one input is OFF, the output is OFF.",
      explanation: "The AND gate is like two switches in series — both must be pressed for the light to turn on. It is drawn as a D-shape (flat left, curved right)."
    },

    // ── Logical Reasoning & Venn Diagrams ─────────────────────

    {
      id: "ict4_q29",
      topic: "Logical Reasoning & Venn Diagrams",
      type: "mcq",
      question: "In a Venn diagram used to represent Boolean logic, the <b>OR</b> operator is shown as:",
      options: [
        "Only the overlapping (intersection) region of the two circles",
        "Both circles fully shaded (everything in either circle)",
        "Only one circle, with the other empty",
        "Neither circle — the area outside both"
      ],
      answer: 1,
      explanation: "In Boolean Venn diagrams, OR means 'at least one' — so the result includes everything in circle A, everything in circle B, and the overlap. Both circles are fully shaded."
    },

    {
      id: "ict4_q30",
      topic: "Logical Reasoning & Venn Diagrams",
      type: "mcq",
      question: "In a Venn diagram, the <b>AND</b> operator is shown as:",
      options: [
        "Both circles fully shaded",
        "Only the overlapping region where both circles meet",
        "Only the left circle",
        "The area outside both circles"
      ],
      answer: 1,
      explanation: "AND means 'both at the same time' — in a Venn diagram this is only the intersection (overlap) where both circles meet. Only things that belong to BOTH groups are included."
    },

    {
      id: "ict4_q31",
      topic: "Logical Reasoning & Venn Diagrams",
      type: "mcq",
      question: "You ask yes/no questions to guess a secret number between 1 and 64. What is the <b>minimum</b> number of questions needed if you always halve the remaining possibilities?",
      options: ["64", "32", "6", "10"],
      answer: 2,
      explanation: "By always asking 'Is it in the first half or second half?' you halve the search space each time: 64→32→16→8→4→2→1. That's 6 questions. This is the concept behind binary search — also used to improve how computers find data efficiently."
    },

    {
      id: "ict4_q32",
      topic: "Logical Reasoning & Venn Diagrams",
      type: "mcq",
      question: "Use logical deduction to answer: All cats are mammals. Whiskers is a cat. Therefore:",
      options: [
        "Whiskers might or might not be a mammal",
        "Whiskers is definitely a mammal",
        "All mammals are cats",
        "Whiskers is not a mammal because cats are a separate group"
      ],
      answer: 1,
      explanation: "This is a syllogism — a logical argument where two facts lead to a certain conclusion. If all cats are mammals, and Whiskers is a cat, it follows with certainty that Whiskers is a mammal. This is how logical deduction works."
    },

    {
      id: "ict4_q33",
      topic: "Logical Reasoning & Venn Diagrams",
      type: "mcq",
      question: "Five friends compare their ages: Ali is older than Beth. Beth is older than Chris. Chris is older than Dan. Dan is older than Emma. Who is the <b>youngest</b>?",
      options: ["Ali", "Beth", "Dan", "Emma"],
      answer: 3,
      explanation: "Working through the logical chain: Ali > Beth > Chris > Dan > Emma. Emma is at the end of the chain, making her the youngest. Logical puzzles like this test your ability to order information using given clues."
    },

    // ── Algorithms & Compression ──────────────────────────────

    {
      id: "ict4_q34",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "What is an <b>algorithm</b>?",
      options: [
        "A type of computer virus",
        "A step-by-step set of instructions for solving a problem",
        "A programming language used to build websites",
        "A shortcut key in Microsoft Word"
      ],
      answer: 1,
      explanation: "An algorithm is a precise, ordered sequence of instructions that solves a problem. Like a recipe: each step must be followed in the right order to get the correct result."
    },

    {
      id: "ict4_q35",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "In an algorithm, what does a <b>REPEAT</b> structure do?",
      options: [
        "It skips an instruction if a condition is not met",
        "It runs a set of instructions more than once (a loop)",
        "It ends the algorithm early",
        "It checks two conditions at the same time"
      ],
      answer: 1,
      explanation: "A REPEAT (or loop) structure makes a set of instructions run multiple times without writing them out repeatedly. Example: REPEAT 4 TIMES → move forward → turn right. This draws a square with 4 sides."
    },

    {
      id: "ict4_q36",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "What is a <b>nested loop</b>?",
      options: [
        "A loop that never ends",
        "Two loops where one loop is placed inside another loop",
        "A loop that checks a condition before starting",
        "A loop used only in Scratch"
      ],
      answer: 1,
      explanation: "A nested loop is a loop inside another loop. The inner loop completes all its repetitions each time the outer loop runs once. Example: to draw 3 squares, the outer loop runs 3 times; each time, the inner loop draws one square (repeating 4 sides)."
    },

    {
      id: "ict4_q37",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "What does <b>compression</b> mean in computing?",
      options: [
        "Encrypting data so that only authorised users can read it",
        "Reducing the amount of data needed to store or transmit something",
        "Speeding up a computer by deleting unused programs",
        "Converting text into binary code"
      ],
      answer: 1,
      explanation: "Compression means reducing the size of data. Smaller files are faster to send and use less storage. Without compression, streaming HD video would require about 3,000 megabits per second — with compression, just 25 megabits per second."
    },

    {
      id: "ict4_q38",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "What is the difference between <b>lossy</b> and <b>lossless</b> compression?",
      options: [
        "Lossy is faster; lossless is slower",
        "Lossy compression permanently removes some original data; lossless compression keeps all the original data",
        "Lossless compression is only for videos; lossy is only for text",
        "They are the same — just different names for the same process"
      ],
      answer: 1,
      explanation: "Lossy compression discards some data permanently to achieve a smaller file size (e.g. removing vowels from text, or reducing image quality). Lossless compression reduces size without losing any data — the original can be perfectly restored."
    },

    {
      id: "ict4_q39",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "In ASCII encoding, each character (letter, number, or punctuation mark) requires how many <b>bits</b>?",
      options: ["4 bits", "8 bits", "16 bits", "32 bits"],
      answer: 1,
      explanation: "In standard ASCII, each character is stored using 8 bits (one byte). A bit is a single 0 or 1. So the word 'HELLO' (5 characters) requires 5 × 8 = 40 bits to store in ASCII."
    },

    {
      id: "ict4_q40",
      topic: "Algorithms & Compression",
      type: "mcq",
      question: "An algorithm for compressing text says: <i>'IF the word is a number, replace it with a digit.'</i> Applying this rule to the phrase <b>'one small step'</b>, which word would be replaced?",
      options: ["step", "small", "one", "No words — none are numbers"],
      answer: 2,
      explanation: "'one' is a number word, so it would be replaced with the digit '1', giving '1 small step'. This is an example of a lossy compression algorithm — the compressed version can still be understood but uses fewer characters."
    },

    // ── Abstraction & Networks ─────────────────────────────────

    {
      id: "ict4_q41",
      topic: "Abstraction & Networks",
      type: "mcq",
      question: "A floor plan of a bedroom shows walls, doors, and furniture positions — but not the carpet colour or the posters on the wall. This is an example of:",
      options: ["Decomposition", "Abstraction", "An algorithm", "Compression"],
      answer: 1,
      explanation: "Abstraction means keeping only the information that matters for the purpose and ignoring the rest. A floor plan only needs walls, doors, and furniture positions — carpet colour and decorations are irrelevant for measuring the space."
    },

    {
      id: "ict4_q42",
      topic: "Abstraction & Networks",
      type: "mcq",
      question: "In network (graph) theory, the <b>circles</b> (points) in a diagram are called:",
      options: ["Edges", "Arcs", "Nodes (or vertices)", "Lines"],
      answer: 2,
      explanation: "In a network diagram, the circles or points are called nodes (also called vertices). The lines connecting them are called edges (also called arcs). Nodes represent junctions, locations, or choices."
    },

    {
      id: "ict4_q43",
      topic: "Abstraction & Networks",
      type: "mcq",
      question: "In network (graph) theory, the <b>lines</b> connecting the circles are called:",
      options: ["Nodes", "Edges (or arcs)", "Vertices", "Paths"],
      answer: 1,
      explanation: "The lines connecting nodes in a network are called edges (also called arcs). Each edge represents a connection or route between two nodes."
    },

    {
      id: "ict4_q44",
      topic: "Abstraction & Networks",
      type: "mcq",
      question: "Why is turning a maze into a <b>network diagram</b> (with nodes and edges) useful?",
      options: [
        "It makes the maze bigger and easier to see",
        "It removes irrelevant details (like wall thickness and colour) and shows only the key decision points, making it easier to find a route",
        "It adds extra paths that weren't in the original maze",
        "It converts the maze into a logic circuit"
      ],
      answer: 1,
      explanation: "Abstracting a maze into a network removes unhelpful details (hedge height, wall material) and keeps only what matters: the start, the end, dead ends, and junctions where you choose a direction. This makes it much easier for a computer — or a human — to find the solution."
    },

    {
      id: "ict4_q45",
      topic: "Abstraction & Networks",
      type: "short",
      question: "Explain the difference between <b>lossy</b> and <b>lossless</b> compression. Give a <b>real-world example</b> of why compression is important.",
      answer: "Lossy compression permanently removes some of the original data to make the file smaller — once compressed, the exact original cannot be recovered (e.g. removing vowels from common words or reducing image quality). Lossless compression reduces file size without losing any data — the original can be perfectly restored. Real-world importance: without compression, one second of HD video requires about 3,000 megabits — with compression, just 25 megabits. This is why we can stream TV and share photos online without using enormous amounts of data or storage.",
      explanation: "Compression is fundamental to modern digital life. JPEG images, MP3 music, and streaming video all use compression. Understanding lossy vs lossless helps you choose the right format for your purpose (e.g. a medical scan must be lossless; a social media photo can be lossy)."
    }

  ]
};
