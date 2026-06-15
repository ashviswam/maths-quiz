const ch05 = {
  id: 5,
  title: "CS First & Scratch",
  icon: "🐱",
  color: "#ec4899",
  topics: ["Sequencing & Loops", "Scratch Concepts", "Debugging & Events"],
  questions: [

    // ── Sequencing & Loops ────────────────────────────────────

    {
      id: "ict5_q1",
      topic: "Sequencing & Loops",
      type: "mcq",
      question: "In programming, what does <b>sequencing</b> mean?",
      options: [
        "Running the same instruction over and over",
        "Executing instructions in a specific order, one after another",
        "Checking whether a condition is true before running code",
        "Choosing between two different sets of instructions"
      ],
      answer: 1,
      explanation: "Sequencing means instructions are carried out in a specific order, one after another. The order matters — changing the sequence changes the result, just like following a recipe step by step."
    },

    {
      id: "ict5_q2",
      topic: "Sequencing & Loops",
      type: "mcq",
      question: "In Scratch, what is a <b>loop</b> (repeat block) used for?",
      options: [
        "Stopping the program when a key is pressed",
        "Running a set of instructions multiple times without writing them out repeatedly",
        "Sending a message to another sprite",
        "Changing the background of the stage"
      ],
      answer: 1,
      explanation: "A loop (REPEAT block in Scratch) runs a set of instructions multiple times. Instead of writing 'move 10 steps' four separate times to cross the stage, you can use 'REPEAT 4: move 10 steps'. This makes code shorter and easier to change."
    },

    {
      id: "ict5_q3",
      topic: "Sequencing & Loops",
      type: "mcq",
      question: "What is a <b>nested loop</b> in Scratch?",
      options: [
        "A loop that only runs when a sprite touches the edge",
        "A loop placed inside another loop",
        "A loop that checks a condition each time before running",
        "Two loops that run at the same time"
      ],
      answer: 1,
      explanation: "A nested loop is a loop inside another loop. The inner loop runs all its repetitions every time the outer loop runs once. Example: to draw 4 squares, the outer loop repeats 4 times; each time, the inner loop draws one square (repeat 4: move, turn)."
    },

    {
      id: "ict5_q4",
      topic: "Sequencing & Loops",
      type: "mcq",
      question: "A Scratch program uses:<br><code>REPEAT 3:<br>&nbsp;&nbsp;REPEAT 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;move 50 steps<br>&nbsp;&nbsp;&nbsp;&nbsp;turn 90°</code><br>How many times does the inner loop (move 50 steps, turn 90°) run in total?",
      options: ["3", "4", "7", "12"],
      answer: 3,
      explanation: "The outer loop runs 3 times. Each time the outer loop runs, the inner loop runs 4 times. Total = 3 × 4 = 12. This nested loop draws 3 separate squares (each square requires 4 sides)."
    },

    // ── Scratch Concepts ──────────────────────────────────────

    {
      id: "ict5_q5",
      topic: "Scratch Concepts",
      type: "mcq",
      question: "In Scratch, what is a <b>sprite</b>?",
      options: [
        "The background image behind the characters",
        "A character or object in the Scratch project that can be programmed to move, speak, or change",
        "A type of loop in Scratch",
        "The area where you write code blocks"
      ],
      answer: 1,
      explanation: "A sprite is a character or object in Scratch — like the default Scratch cat. You write scripts (code blocks) that tell the sprite what to do: move, say something, change costume, make sounds, and more."
    },

    {
      id: "ict5_q6",
      topic: "Scratch Concepts",
      type: "mcq",
      question: "In Scratch, the <b>Stage</b> is:",
      options: [
        "The list of code blocks on the left side of the screen",
        "The area where your sprites act out the programme — the background scene",
        "A type of loop that runs forever",
        "A special sprite that controls the other sprites"
      ],
      answer: 1,
      explanation: "The Stage is the area where you see your project run — sprites move around on it. You can set a background image (called a backdrop) for the stage to create a scene, like a forest, a city street, or outer space."
    },

    {
      id: "ict5_q7",
      topic: "Scratch Concepts",
      type: "mcq",
      question: "In CS First / Scratch, <b>characterisation</b> means:",
      options: [
        "Adding a loop so a sprite moves repeatedly",
        "Giving a sprite a distinct personality — through how it moves, speaks, and reacts",
        "Changing the background colour of the stage",
        "Connecting two sprites so they move together"
      ],
      answer: 1,
      explanation: "Characterisation in Scratch is about making a sprite feel like a real character — giving it a personality through its movement style, the words it says, its sounds, and how it reacts to events. A shy character might creep slowly; a brave one might charge forward."
    },

    {
      id: "ict5_q8",
      topic: "Scratch Concepts",
      type: "mcq",
      question: "In Scratch, a <b>costume</b> is:",
      options: [
        "A type of sound effect applied to a sprite",
        "A different visual appearance of a sprite — switching costumes creates animation",
        "The background image of the stage",
        "A block that makes a sprite disappear"
      ],
      answer: 1,
      explanation: "A costume is one visual version of a sprite. By switching between costumes quickly, you create animation — for example, a walking character has multiple leg positions that play in sequence to look like movement."
    },

    // ── Debugging & Events ────────────────────────────────────

    {
      id: "ict5_q9",
      topic: "Debugging & Events",
      type: "mcq",
      question: "In programming, what is a <b>bug</b>?",
      options: [
        "A feature that makes a programme run faster",
        "An error in a programme that causes it to behave in an unexpected or incorrect way",
        "A type of loop used in Scratch",
        "A virus that deletes your programme"
      ],
      answer: 1,
      explanation: "A bug is an error in a programme. Bugs can be logical errors (the code runs but gives the wrong result), syntax errors (code that the computer cannot understand), or runtime errors (the code crashes while running). The process of finding and fixing bugs is called debugging."
    },

    {
      id: "ict5_q10",
      topic: "Debugging & Events",
      type: "mcq",
      question: "What is <b>debugging</b>?",
      options: [
        "Writing new features for a programme",
        "Finding and fixing errors in a programme",
        "Deleting old versions of your code",
        "Running a programme for the first time"
      ],
      answer: 1,
      explanation: "Debugging is the process of finding and fixing bugs (errors) in a programme. Good debugging involves testing the programme, identifying where it goes wrong, understanding why, and correcting the code."
    },

    {
      id: "ict5_q11",
      topic: "Debugging & Events",
      type: "mcq",
      question: "In Scratch, an <b>event</b> is:",
      options: [
        "A special type of variable",
        "Something that triggers a script to run — such as pressing a key or clicking the green flag",
        "A sound that plays when a sprite moves",
        "A block that changes the stage background"
      ],
      answer: 1,
      explanation: "Events are triggers in Scratch. The most common event is clicking the green flag, which starts the programme. Other events include pressing a specific key, clicking on a sprite, receiving a broadcast message, or the backdrop changing."
    },

    {
      id: "ict5_q12",
      topic: "Debugging & Events",
      type: "mcq",
      question: "A student writes a Scratch programme but the sprite moves in the wrong direction. This is best described as:",
      options: [
        "A hardware fault in the computer",
        "A bug — the code contains a logical error",
        "Normal behaviour for Scratch",
        "A missing costume"
      ],
      answer: 1,
      explanation: "Moving in the wrong direction means the code is producing an incorrect result — this is a logical bug. The programme runs without crashing but doesn't do what was intended. The student needs to debug by checking the turn direction or degrees in the movement blocks."
    },

    {
      id: "ict5_q13",
      topic: "Sequencing & Loops",
      type: "mcq",
      question: "Which of these correctly describes the difference between a <b>loop</b> and a <b>sequence</b> in programming?",
      options: [
        "A sequence repeats instructions; a loop runs them only once",
        "A sequence runs instructions in order once; a loop repeats a set of instructions multiple times",
        "They are the same — 'loop' and 'sequence' mean the same thing in Scratch",
        "A sequence checks a condition; a loop does not"
      ],
      answer: 1,
      explanation: "A sequence is a set of instructions that runs once, in order. A loop repeats a set of instructions a set number of times (or forever). Most programmes use both: a sequence of steps where some parts are repeated using loops."
    },

    {
      id: "ict5_q14",
      topic: "Scratch Concepts",
      type: "short",
      question: "Describe what a <b>sprite</b> is in Scratch and give <b>three</b> examples of things you can programme a sprite to do.",
      answer: "A sprite is a character or object in a Scratch project that can be programmed. Examples of things you can programme a sprite to do: (1) Move — walk, glide, or bounce around the stage. (2) Say something — display a speech bubble with text using the 'say' block. (3) Change costume — switch between costumes to create animation. Other valid examples: make sounds, change size, react to events (like a key press), send messages to other sprites.",
      explanation: "In Scratch, every action and behaviour is attached to a sprite. Sprites are central to every Scratch project — they are the actors, and the code blocks you write are the scripts they follow."
    },

    {
      id: "ict5_q15",
      topic: "Debugging & Events",
      type: "short",
      question: "What is a <b>bug</b> in a computer programme? Describe what you would do to <b>debug</b> a Scratch programme where a sprite is not moving when the green flag is clicked.",
      answer: "A bug is an error in a programme that causes it to behave incorrectly or unexpectedly. To debug the sprite not moving: (1) Check that the movement blocks are connected to a 'When green flag clicked' event block — if there is no event trigger, the script will never run. (2) Check the 'move' block has a sensible number (not 0). (3) Check that the sprite is not hidden or frozen using a 'hide' block. (4) Click on the sprite to select it and make sure the script belongs to that sprite. Run the programme step by step to find where it stops doing what was expected.",
      explanation: "Debugging is a core programming skill. The process is: test the programme, observe the problem, identify the cause, fix the code, and test again. Breaking the problem into smaller parts (decomposition) helps find the bug faster."
    }

  ]
};
