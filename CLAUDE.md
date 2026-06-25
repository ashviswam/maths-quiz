# DevusExamPrep — Claude Context

## What this project is
A static web quiz app for **Pragathy** (IB MYP Grade 6 student) deployed on GitHub Pages from the `docs/` folder. No build step — pure HTML/CSS/JS.

## Subjects
Eight subjects are planned. Current status:

| Subject    | Status       | Location          | Notes                          |
|------------|--------------|-------------------|--------------------------------|
| Dutch      | Coming soon  | docs/dutch/       | No content yet                 |
| English    | ✅ Live       | docs/english/     | 5 chapters, 84 questions (figurative language, poetry devices, exam poem 'I Don't Like Poetry', short story 'Eleven', mythology) |
| French     | Coming soon  | docs/french/      | No content yet                 |
| Humanities | ✅ Live       | docs/humanities/  | 5 topics, 125 questions (Maps, Early Humans, Civilisations, World Religions, Biomes & Climates) |
| ICT        | ✅ Live       | docs/ict/         | 5 units, ~90 questions (logic gates, algorithms, digital citizenship, doc production, Scratch) |
| Maths      | ✅ Live       | docs/maths/       | 19 chapters, ~841 questions, Haese Grade 6 textbook |
| Science    | ✅ Live       | docs/science/     | 5 topics, 195 questions (172 MCQ + 23 short), RISS Grade 6 |
| Spanish    | Coming soon  | docs/spanish/     | No content yet                 |

Source materials in `~/Downloads/pragathy/<subject>/` — PDFs of class slide decks and curriculum docs. These live **outside** the git repo and are never committed. `docs/curriculum*.md` and anything in `private/` are gitignored.

**GitHub remote:** `https://github.com/ashviswam/maths-quiz.git` (public repo — do not commit school-owned PDFs or curriculum text).

## File structure
```
docs/
  index.html             ← Subject selector landing page
  css/style.css          ← Shared styles (quiz + subject grid + coming-soon)
  js/
    app.js               ← Shared quiz engine (reads SUBJECT_CONFIG global)
    progress.js          ← Shared progress store (reads SUBJECT_CONFIG.progressKey)
  maths/
    index.html           ← Maths quiz page (sets SUBJECT_CONFIG, loads data/)
    data/
      ch01.js–ch19.js    ← Chapter question data
      chapters.js        ← CHAPTERS array (registry)
  science/
    index.html           ← Science quiz page
    data/
      ch01.js–ch05.js    ← Topic question data
      chapters.js        ← CHAPTERS array
  dutch|english|french|humanities|ict|spanish/
    index.html           ← "Coming soon" placeholder
```

## Adding a new subject
1. Create `docs/<subject>/index.html` — copy from `docs/science/index.html`, update `SUBJECT_CONFIG` (id, name, icon, progressKey, notesKey).
2. Create `docs/<subject>/data/chapters.js` and `docs/<subject>/data/ch01.js` etc. following the maths or science data format.
3. Add a subject card in `docs/index.html` — change `subject-card--soon` to `subject-card`, set `--subj-color`, add href.
4. Copy source PDFs from `Downloads/pragathy/<subject>/` for reference.

## Question data format

Three question types are supported:

```js
const ch01 = {
  id: 1,
  title: "Chapter Title",
  icon: "🔢",
  color: "#6366f1",          // accent colour for the card
  topics: ["Topic A", "Topic B"],
  questions: [
    // ── MCQ (auto-graded) ──────────────────────────────────────
    {
      id: "c1_q1",           // unique — prefix by subject (sc1_q1 for science, c1_q1 for maths)
      topic: "Topic A",
      type: "mcq",
      question: "Question text (HTML allowed)",
      options: ["A", "B", "C", "D"],
      answer: 0,             // 0-based index
      explanation: "Why the answer is correct.",
      difficulty: "challenging",  // optional — adds ⭐ Stretch badge
      diagram: `<svg>...</svg>`   // optional SVG diagram
    },
    // ── Free-text input (auto-graded by exact/numeric match) ───
    {
      id: "c1_q2",
      topic: "Topic A",
      type: "input",
      question: "What is 3 + 4?",
      answer: "7",
      acceptableAnswers: ["seven"],  // optional extra accepted strings
      explanation: "3 + 4 = 7."
    },
    // ── Short answer (parent-reviewed) ────────────────────────
    {
      id: "sc1_q35",
      topic: "Topic B",
      type: "short",
      question: "Explain in your own words why…",
      answer: "Model answer shown to parent/student after submission.",
      explanation: "Optional extra explanation shown after grading."
      // No options field. explanation is optional for short type.
    }
  ]
};
```
`chapters.js` is always: `const CHAPTERS = [ch01, ch02, ...];`

### Short answer flow
1. Student types in a textarea and clicks "Submit Answer →"
2. Feedback card opens showing **their answer** and the **model answer** (green box)
3. Parent clicks **"✓ Got it!"** or **"✗ Need more practice"** — result recorded to progress
4. `explanation` (if present) shows after grading

Short answer HTML (`#q-short`, `#fb-review`) is only in `docs/science/index.html` currently. Copy from there when adding it to other subjects.

## SUBJECT_CONFIG (set in each subject's index.html, before loading app.js)
```js
const SUBJECT_CONFIG = {
  id: 'science',
  name: 'Science',
  icon: '🔬',
  progressKey: 'science6_progress',  // localStorage key for progress
  notesKey: 'science6_notes'         // localStorage key for parent notes
};
```

## Science curriculum (RISS Grade 6, 2025–2026)
5 topics mapped to chapters:
- Ch 1: Space & The Solar System (Big Bang, atoms, gravity, star formation)
- Ch 2: Mass, Weight & Gravity (mass vs weight, W=mg, Galileo, Newtons)
- Ch 3: Earth in Space (day/night, seasons, Earth's 23.5° tilt, rotation vs revolution)
- Ch 4: Living Things (life processes, organs, body systems, cells, photosynthesis)
- Ch 5: Matter & Particles (states of matter, particle model, diffusion, Brownian motion)

Future topics to add: Reproduction, Elements & Compounds, Investigation Skills.

## Maths curriculum (Haese Grade 6, IB MYP)
19 chapters covering: Whole Numbers, Fractions, Decimals, Algebra, Geometry, Statistics, Probability, and more. See `docs/maths/data/chapters.js` for full list.

## Quiz engine behaviour
- Progress is stored per-subject in localStorage using the subject's `progressKey`.
- Resuming: starts from the first unanswered question automatically.
- Retry mode: shows only previously wrong questions.
- Parent notes: stored under `notesKey`; visible in notes overlay on the home screen.
- Stretch questions: marked `difficulty: "challenging"` show a ⭐ badge.
- MCQ (4 options, auto-graded), free-text input (auto-graded), and short answer (parent-reviewed) types are supported.

## GitHub Pages
Deployed from `docs/` on the `main` branch. The root URL serves `docs/index.html` (subject selector). Each subject is at `/<subject>/`.

## Privacy — what NOT to commit
This is a **public** repo. School-owned content must stay out:
- PDFs and slide decks → keep in `~/Downloads/pragathy/` (outside repo) or in `private/` (gitignored)
- Curriculum documents → `docs/curriculum*.md` is gitignored
- Generated quiz JS files (ch01.js etc.) are fine — they are our own work

## Source PDFs
- Maths textbook: `~/Downloads/Math6-3rdEd.pdf` (Haese Mathematics 6, 3rd edition, ~400 pages). Use this for auditing question coverage by chapter.
- Science and other subjects: `~/Downloads/pragathy/<subject>/` — slide deck PDFs.

## Pitfall: generating quiz content with background agents
When spawning a background agent to write quiz data files, explicitly tell it the target path (`docs/<subject>/data/`) and variable naming convention (`const ch01`, not `const sc01`). In practice agents have written to the wrong directory; plan to move/rename files after the agent completes if needed.

## SVG diagram patterns

### Physical-interaction diagrams
Some diagram types require the student to interact physically with the screen — these are fine to implement as SVGs:
- **Protractor questions**: Draw a protractor SVG (semicircle, tick marks every 10°, labels at 0/30/60/90/120/150/180, centre dot). Show the angle ray and a `?°` label. The student places a real protractor on the laptop screen to verify. Never annotate the tick that matches the answer.
- **Net identification**: Draw the unfolded net with filled squares/rectangles (blue tint) and triangles (pink tint) in the correct arrangement. The student looks at the net and predicts the 3D solid. Options name the solid; the diagram must not label faces with the solid's name.

### SVG answer-safety rule
Never include any text, label, or annotation in an SVG that identifies the correct answer. This includes:
- Labelling a specific column/row with the place value being asked about
- Annotating a tick mark with its degree value when that value is the answer
- Writing the name of a shape on its net
- Any comment-style text visible in the rendered output

## Content accuracy checks
Run these mentally before finalising any question:

1. **Arithmetic consistency** — For mean/median/mode questions, verify the dataset's actual statistics match what the question claims. E.g. if the question says "the mean is 63", sum the values and divide — don't trust the numbers by eye.
2. **No duplicate scenarios** — Grep the chapter file for keywords from a new question before adding it; duplicates (same context, same numbers) have appeared within the same chapter.
3. **Conversion graph scope** — Not all conversion graphs pass through (0, 0). Proportional graphs (km↔miles, currency) do; non-proportional graphs (°C↔°F) do not. Questions asserting a universal rule about conversion graphs are factually wrong — scope any claim to the specific graph shown.
4. **Cylinder net** — A cylinder net has **2** circles (top + bottom) and 1 curved rectangle. "1 circle" is a common mistake.
5. **SVG arc direction** — In SVG (y-axis points down), `sweep-flag=0` draws counter-clockwise on screen (right → up → left). Use `A rx,ry 0 0,0 x,y` for arcs that sweep upward from the baseline.

## Key rules when editing quiz data
- Never put the answer text in the question or option labels in a way that reveals it visually in SVG diagrams.
- Keep questions in-syllabus (matched to the curriculum objectives above).
- Maintain unique `id` values across all questions in a subject.
- All questions must have an `explanation` field.
