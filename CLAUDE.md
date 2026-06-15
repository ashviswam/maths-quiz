# DevusExamPrep — Claude Context

## What this project is
A static web quiz app for **Pragathy** (IB MYP Grade 6 student) deployed on GitHub Pages from the `docs/` folder. No build step — pure HTML/CSS/JS.

## Subjects
Eight subjects are planned. Current status:

| Subject    | Status       | Location          | Notes                          |
|------------|--------------|-------------------|--------------------------------|
| Dutch      | Coming soon  | docs/dutch/       | No content yet                 |
| English    | Coming soon  | docs/english/     | No content yet                 |
| French     | Coming soon  | docs/french/      | No content yet                 |
| Humanities | Coming soon  | docs/humanities/  | No content yet                 |
| ICT        | Coming soon  | docs/ict/         | No content yet                 |
| Maths      | ✅ Live       | docs/maths/       | 19 chapters, ~841 questions, Haese Grade 6 textbook |
| Science    | ✅ Live       | docs/science/     | 5 topics, ~150 questions, RISS Grade 6 curriculum   |
| Spanish    | Coming soon  | docs/spanish/     | No content yet                 |

Source materials in `Downloads/pragathy/<subject>/` — PDFs of class slide decks and curriculum docs.

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
```js
const ch01 = {
  id: 1,
  title: "Chapter Title",
  icon: "🔢",
  color: "#6366f1",          // accent colour for the card
  topics: ["Topic A", "Topic B"],
  questions: [
    {
      id: "c1_q1",           // unique — prefix by subject (sc1_q1 for science, c1_q1 for maths)
      topic: "Topic A",
      type: "mcq",           // or "input"
      question: "Question text (HTML allowed)",
      options: ["A", "B", "C", "D"],   // MCQ only
      answer: 0,             // 0-based index for MCQ; string for input type
      acceptableAnswers: [], // optional, for input type (array of accepted strings)
      explanation: "Why the answer is correct.",
      difficulty: "challenging",  // optional — adds ⭐ Stretch badge
      diagram: `<svg>...</svg>`   // optional SVG diagram
    }
  ]
};
```
`chapters.js` is always: `const CHAPTERS = [ch01, ch02, ...];`

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
- Both MCQ (4 options) and free-text input types are supported.

## GitHub Pages
Deployed from `docs/` on the `main` branch. The root URL serves `docs/index.html` (subject selector). Each subject is at `/<subject>/`.

## Key rules when editing quiz data
- Never put the answer text in the question or option labels in a way that reveals it visually in SVG diagrams.
- Keep questions in-syllabus (matched to the curriculum objectives above).
- Maintain unique `id` values across all questions in a subject.
- All questions must have an `explanation` field.
