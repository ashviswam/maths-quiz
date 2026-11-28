# DevusExamPrep (Study Zone): Claude context

## What this project is
A static web study app for **Pragathy** (IB MYP **Grade 7**, 2026–27), deployed on GitHub Pages from `docs/`. There's no build step: plain HTML/CSS/JS. Grade 6 content was deleted in Nov 2026 and is still in git history (before commit "Grade 7 rebuild").

**GitHub remote:** `https://github.com/ashviswam/maths-quiz.git`. This is a **public** repo, so never commit school-owned PDFs or curriculum text.

## How it's used
- **Material in:** the parent drops class PDFs, slides and photos into `~/Documents/Pragathy/<subject>/`, optionally in chapter subfolders (`03-forces/`), or unsorted into `~/Documents/Pragathy/inbox/` (the skill sorts those by subject). Then they run **`/add-material`** (skill in `.claude/skills/add-material/`), which writes `docs/data/<subject>/chNN.js` and registers it.
- **Practice:** chapter by chapter, with feedback after each question.
- **Daily test:** started on demand, per subject, 15 questions (~50% newest chapter, ~30% due for review, rest older). Feedback after each question.
- **Weekly test:** one per subject per ISO week (Mon–Sun), 30 questions across all chapters ("full portion"). Exam mode: timed (60s mcq / 90s input / 180s short), no feedback until submitted, short answers marked by a parent afterwards. Locks after it's taken. A parent can "allow a retake" from the subject page.
- **Sync:** history syncs across devices through a secret GitHub Gist. The token is pasted per device and kept in localStorage only. The dialog also offers backup export/import.

## File structure
```
docs/
  index.html            dashboard: streak, this week's weekly-test checklist, subject cards
  subject.html          ?s=<id> — practice / daily / weekly / marking / results for any subject
  flashcards.html       ?s=<id> — vocab flashcards (if chapters have `flashcards`)
  articles.html         ?s=<id> — quick-fire "el/la/los/las?" drill (if chapters have `articles`)
  css/style.css
  data/
    manifest.js         MANIFEST: student, grade, test sizes, time budget, subjects + chapter file lists
    <subject>/chNN.js   addChapter({...}) — one file per chapter
  js/
    common.js           Util: escaping, shuffle, answer checking, subject loader
    store.js            Store: answer log, tests, notes, flashcard flags (one localStorage doc, mergeable)
    sync.js / sync-ui.js  Gist sync + settings/backup modal
    picker.js           daily/weekly question selection (pure functions)
    quiz.js             subject page controller
    dashboard.js        index page
    flashcards.js
    articles.js         article drill; missed words kept per device in localStorage
tools/check.js          validator: run `node tools/check.js` before every commit
.claude/skills/add-material/SKILL.md   material → chapter workflow + question-writing rules
```

## Adding content
Use `/add-material`. By hand: create `docs/data/<subject>/chNN.js`, add the file name to the subject's `chapters` in `docs/data/manifest.js`, then run `node tools/check.js`. The checker fails if a file exists but isn't listed, or the reverse. That catches the "forgot the script tag" crash class we hit in Grade 6.

## Question data format
```js
addChapter({
  id: 3, title: "Forces", icon: "🧲", color: "#0ea5e9",
  added: "2026-11-14",          // daily tests weight the newest chapter by this
  topics: ["Friction", "Balanced forces"],
  questions: [
    { id: "sc3_q1", topic: "Friction", type: "mcq", question: "…", options: ["…","…","…","…"], answer: 2,
      explanation: "…", difficulty: "challenging" /* optional */, diagram: `<svg…>` /* optional */,
      fixedOrder: true /* optional, only if options must not be shuffled */ },
    { id: "sc3_q2", topic: "…", type: "input", question: "…", answer: "12", acceptableAnswers: ["12 N"], explanation: "…" },
    { id: "sc3_q3", topic: "…", type: "short", question: "Explain…", answer: "Model answer for the parent", explanation: "…" },
    { id: "c2_pp1", topic: "…", type: "paper", question: "Draw / construct / copy…", answer: "What the parent checks",
      ref: "Textbook 3I Q1 (p.64)" /* optional on any question: shown as 'Like …' */ }
  ],
  flashcards: [ { id: "fr3_f1", front: "la grenouille", back: "the frog", note: "optional" } ],  // language subjects
  articles: [ ["grenouille", "la", "frog", "optional note, e.g. why it's a trap"] ]          // optional: article drill words
});
```
- Id prefixes: dutch `nl`, english `en`, french `fr`, humanities `hum`, ict `ict`, maths `c`, science `sc`, spanish `sp`. Ids must be unique within a subject and **never reused or renumbered**, because history is keyed by id.
- **MCQ options are shuffled at display time.** Grade 6 data had a heavy answer-position bias (e.g. every Humanities answer was A). Never write "Both A and B" / "All of the above". The checker flags these.
- Input answers: `answer` always counts, and `acceptableAnswers` are extras. Set `exact: true` for algebra answers (e.g. "5p") so the number-with-units rule doesn't accept a bare "5". Matching ignores case, spacing, thousands separators and trailing units on a single number. Commas inside coordinates and lists are kept.
- Every question needs an `explanation` (optional for `short` and `paper`).
- `paper` = drawn in an exercise book (constructions, nets, projections). Practice only, never in daily/weekly tests. She taps "done on paper"; the task waits in "Drawings to check" on the subject page until a parent marks it (stored in `pp`, synced).

## Storage model (store.js)
One localStorage doc, `studyzone_g7`: `ev` is an append-only answer log `[id, time, subject, qid, correct, mode]`. `tests` holds daily/weekly records (last-write-wins; a finished test beats an unfinished one). `notes` and `fc` are last-write-wins maps. Merging is conflict-free, so sync and import never lose data. Mastery means "the last attempt was correct". Sync config lives in `studyzone_g7_sync` (device-only).

## Testing
- `node tools/check.js`: data and manifest validation plus a picker smoke test.
- To test the UI with sample data, copy `docs/` to the scratchpad, add chapter files there, and serve with `python3 -m http.server`. Playwright is installed globally (`$(npm root -g)/playwright`).

## Privacy: what NOT to commit
- Source material stays in `~/Documents/Pragathy/` (outside the repo).
- `private/` (incl. `private/processed.json`, the /add-material log) and `docs/curriculum*.md` are gitignored.
- Question files are our own work and fine to commit. Don't paste long verbatim passages from school material.

## Content accuracy checks (apply when writing questions)
1. **Arithmetic:** for mean/median/mode, sum the data yourself. Never trust the numbers by eye.
2. **No duplicate scenarios:** grep the subject's chapters for the same context/numbers first.
3. **Conversion graphs:** only proportional graphs pass through (0, 0). °C↔°F does not.
4. **Cylinder net:** 2 circles + 1 rectangle.
5. **SVG arcs:** y points down, so `sweep-flag=0` draws counter-clockwise on screen.

## SVG diagram rules
- Never include text or labels that reveal the answer (asked-about column labelled, tick value equal to the answer, solid's name on its net).
- Protractor questions: semicircle, ticks every 10°, labels at 0/30/…/180, a `?°` label. The student measures with a real protractor on screen.
- Nets: squares/rectangles blue-tinted, triangles pink-tinted, unlabelled.

## Pitfall: background agents writing quiz data
Tell them the exact path (`docs/data/<subject>/chNN.js`), the `addChapter({...})` wrapper, the id prefix, and to run `node tools/check.js`.
