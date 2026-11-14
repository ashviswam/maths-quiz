---
name: add-material
description: Turn new class material (PDFs, slides, photos) dropped into ~/Documents/Pragathy/<subject>/ into quiz chapters for the Study Zone app. Use when the user says they added material, asks to process/import new material, or runs /add-material (optionally with a subject name).
---

# Add material → quiz chapters

Source material lives **outside the repo** in `~/Documents/Pragathy/<subject>/`, optionally in chapter subfolders (`03-forces/`). It is school-owned and must never be committed. Only the questions we write go into the repo.

## 1. Find what's new

- Processed-file log: `private/processed.json` (gitignored). Shape: `{ "<subject>/<relative path>": { "chapter": "ch03.js", "date": "YYYY-MM-DD", "size": <bytes> } }`. Create it as `{}` if missing.
- List every file under `~/Documents/Pragathy/` (or just `$ARGUMENTS`'s subject if one was given). A file is **new** if its key is missing from the log, or its size changed.
- Ignore `.DS_Store` and other hidden files. If nothing is new, say so and stop.
- **Inbox:** `~/Documents/Pragathy/inbox/` holds unsorted files. For each one, read it, decide its subject (and chapter, per step 2), then **move** it into `<subject>/` (or the chapter subfolder) before processing. Log it under its new location. Watch for language mix-ups: French vs Spanish vs Dutch slides look alike, so go by the actual language of the content. If a file's subject is unclear, leave it in the inbox and ask.
- Tell the user what you found, grouped by subject, before generating anything.

## 2. Decide the chapter for each new file

- A subfolder like `03-forces/` → chapter 3, title "Forces" (unless the material gives a better title).
- Loose files in the subject folder → read them and decide: either they extend an existing chapter (same topic as an existing `docs/data/<subject>/chNN.js`) or they start the next chapter number.
- If the mapping is genuinely ambiguous, ask the user.

## 3. Read the material

- PDFs: use the `pdf` skill / Read tool with `pages`. Slide decks are mostly images and short text, so read all pages.
- Images (`.jpg`, `.png`, e.g. WhatsApp photos of worksheets): Read them directly.
- `.docx` / `.pptx`: use the matching skill.
- Look for learning objectives, key vocabulary, worked examples, and any "revision checklist" or study guide. These define what's in scope.

## 4. Write the chapter file

Path: `docs/data/<subject>/chNN.js` (two-digit number). One file per chapter, wrapped in `addChapter({...});` — not `const chNN =`.

```js
addChapter({
  id: 3,                         // number, matches the file name
  title: "Forces",
  icon: "🧲",
  color: "#0ea5e9",
  added: "2026-11-14",           // today's date. Daily tests weight the newest chapter by this
  topics: ["Contact forces", "Friction", "Balanced forces"],
  questions: [
    { id: "sc3_q1", topic: "Friction", type: "mcq",
      question: "…", options: ["…", "…", "…", "…"], answer: 2,
      explanation: "…" },
    { id: "sc3_q2", topic: "Balanced forces", type: "input",
      question: "…", answer: "12", acceptableAnswers: ["12 N"], explanation: "…" },
    { id: "sc3_q3", topic: "Friction", type: "short",
      question: "Explain…", answer: "Model answer the parent compares against.", explanation: "…" }
  ],
  // Language subjects only. Front = target language, back = English.
  flashcards: [ { id: "fr3_f1", front: "la grenouille", back: "the frog", note: "feminine" } ]
});
```

When **extending** an existing chapter, append questions with new ids. Never renumber or reuse ids, because the student's history is keyed by id. Leave `added` unchanged, unless the new material is the class's current focus.

**Id prefixes:** dutch `nl`, english `en`, french `fr`, humanities `hum`, ict `ict`, maths `c`, science `sc`, spanish `sp` + chapter number + `_q` + n (`sc3_q14`). Flashcards use `_f`.

### Question-writing rules

- **Size:** 25–45 questions per chapter, so the weekly test (30 questions across all chapters) and daily tests (15) have room to vary. Roughly 70% mcq, 15% input, 15% short. Maths should lean more on `input`.
- **Stay in scope:** only what the material teaches. Grade 7 / IB MYP Year 2 level. Mark about 15% harder questions with `difficulty: "challenging"`.
- **MCQ:** exactly 4 plausible options, with distractors drawn from real misconceptions. Options are **shuffled at display time**, so never write "Both A and B", "All of the above" or "option C". If order truly matters, set `fixedOrder: true`. Spread `answer` indices anyway.
- **Input:** short exact answers (a number, a word). Put every reasonable variant in `acceptableAnswers` (units, spelling, "1/2" vs "0.5" if both are acceptable). The checker ignores case, spaces and thousands separators, and accepts trailing units on a single number.
- **Short:** open "explain/describe/compare" questions. `answer` is a model answer a parent can mark against in 10 seconds: 2–4 key points.
- **Explanation required** on every question. It must teach *why*, not restate the answer.
- **No duplicates:** grep the subject's existing chapters for the same scenario/numbers before adding.
- **Check accuracy:** verify every calculation (sum the data for means, etc.) and every factual claim against the material.
- **SVG diagrams** (`diagram: \`<svg…>\``) are welcome for maths and science. They must never reveal the answer: no label on the asked-about part, no tick value that equals the answer. Keep `viewBox` with no fixed width.
- **Don't copy text** from the material verbatim beyond short quotes the question needs. The repo is public.

## 5. Register and validate

1. Add the file to that subject's `chapters` array in `docs/data/manifest.js`, in order.
2. Run `node tools/check.js`. Fix every ❌ and re-run until it passes.
3. Update `private/processed.json` with each processed source file → chapter.
4. Open `docs/subject.html?s=<subject>` locally if possible (e.g. `python3 -m http.server -d docs`) and click through a few questions.

## 6. Report

Summarise per subject: chapter(s) created or extended, question counts by type, and anything skipped or uncertain. Do **not** commit or push unless the user asks. When they do, commit only `docs/` and tool changes, never the source material.
