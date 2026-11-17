#!/usr/bin/env node
/* Validate quiz data before committing.
     node tools/check.js            # check docs/
     node tools/check.js <siteDir>  # check another copy of the site
   Exits non-zero on errors. Warnings don't fail the run. */
const fs = require('fs'), path = require('path'), vm = require('vm');

const site = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);

const ctx = { module: undefined, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(site, 'data/manifest.js'), 'utf8') + ';this.MANIFEST=MANIFEST;', ctx);
const M = ctx.MANIFEST;

// Stub just enough of the browser for picker.js
const pctx = { MANIFEST: M, Util: { shuffle: a => [...a] }, module: undefined };
vm.createContext(pctx);
vm.runInContext(fs.readFileSync(path.join(site, 'js/picker.js'), 'utf8') + ';this.Picker=Picker;', pctx);

let grand = 0;
for (const s of M.subjects) {
  const dir = path.join(site, 'data', s.id);
  const onDisk = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.js')) : [];
  onDisk.filter(f => !s.chapters.includes(f)).forEach(f => err(`${s.id}: data/${s.id}/${f} exists but is not listed in manifest.js`));

  const chapters = [];
  for (const f of s.chapters) {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) { err(`${s.id}: manifest lists ${f} but data/${s.id}/${f} is missing`); continue; }
    const c = { addChapter: ch => chapters.push({ ...ch, _file: f }) };
    try { vm.runInNewContext(fs.readFileSync(p, 'utf8'), c, { filename: p }); }
    catch (e) { err(`${s.id}/${f}: does not load — ${e.message}`); continue; }
  }
  if (!chapters.length) continue;

  const chIds = new Set(), qIds = new Set(), pos = [0, 0, 0, 0, 0, 0];
  let n = 0;
  for (const ch of chapters) {
    const where = `${s.id}/${ch._file}`;
    if (typeof ch.id !== 'number') err(`${where}: chapter id must be a number`);
    if (chIds.has(ch.id)) err(`${where}: duplicate chapter id ${ch.id}`);
    chIds.add(ch.id);
    if (!ch.title) err(`${where}: missing title`);
    if (ch.added && !/^\d{4}-\d{2}-\d{2}$/.test(ch.added)) err(`${where}: added must be YYYY-MM-DD`);
    if (!Array.isArray(ch.questions)) { err(`${where}: questions must be an array`); continue; }
    for (const q of ch.questions) {
      n++;
      const at = `${where} ${q.id || '(no id)'}`;
      if (!q.id) err(`${at}: missing id`);
      else if (qIds.has(q.id)) err(`${at}: duplicate question id`);
      qIds.add(q.id);
      if (!q.topic) err(`${at}: missing topic`);
      if (!q.question) err(`${at}: missing question`);
      if (!q.explanation && q.type !== 'short') err(`${at}: missing explanation`);
      if (q.type === 'mcq') {
        if (!Array.isArray(q.options) || q.options.length < 2) err(`${at}: mcq needs options`);
        else {
          if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(`${at}: answer index out of range`);
          else pos[q.answer]++;
          if (new Set(q.options).size !== q.options.length) err(`${at}: duplicate options`);
          if (!q.fixedOrder && q.options.some(o => /\b(both|all|none) of (the )?(above|these)\b|\b[A-D] and [A-D]\b|\boption [A-D]\b/i.test(o)))
            err(`${at}: an option refers to other options by position — options are shuffled; reword it or set fixedOrder: true`);
        }
      } else if (q.type === 'input' || q.type === 'short') {
        if (q.answer === undefined || q.answer === '') err(`${at}: missing answer`);
      } else err(`${at}: unknown type "${q.type}"`);
      if (q.diagram && /<script/i.test(q.diagram)) err(`${at}: diagram contains <script>`);
      if (q.difficulty && !['easy', 'medium', 'hard', 'challenging'].includes(q.difficulty)) err(`${at}: difficulty must be easy, medium or hard`);
      if (!q.difficulty) warn(`${at}: no difficulty (easy/medium/hard)`);
    }
    // Optional "which article?" drill words: [word, article, english?, note?]
    if (ch.articles !== undefined) {
      if (!Array.isArray(ch.articles)) err(`${where}: articles must be an array`);
      else {
        const seen = new Set();
        ch.articles.forEach((a, i) => {
          if (!Array.isArray(a) || !a[0] || !a[1]) err(`${where}: articles[${i}] must be [word, article, english?, note?]`);
          else if (seen.has(a[0])) err(`${where}: articles has "${a[0]}" twice`);
          else seen.add(a[0]);
        });
      }
    }
  }
  grand += n;

  // Picker smoke test: daily/weekly return unique, valid questions of the right size.
  const stats = new Map();
  const daily = pctx.Picker.daily(chapters, stats, { size: M.dailySize, rng: Math.random });
  const weekly = pctx.Picker.weekly(chapters, stats, new Set(), { size: M.weeklySize, rng: Math.random });
  for (const [name, list, want] of [['daily', daily, M.dailySize], ['weekly', weekly, M.weeklySize]]) {
    if (new Set(list.map(q => q.id)).size !== list.length) err(`${s.id}: ${name} picker returned duplicates`);
    if (list.length < Math.min(want, n) - 3) warn(`${s.id}: ${name} picker returned ${list.length}/${Math.min(want, n)} (short-answer cap may limit it)`);
  }
  const mins = Math.round(pctx.Picker.timeLimitSec(weekly) / 60);
  console.log(`✓ ${s.id.padEnd(11)} ${String(chapters.length).padStart(2)} chapters ${String(n).padStart(4)} questions · weekly ${weekly.length}q/${mins}min · answer slots ${pos.slice(0, 4).join('/')}`);
}

console.log(`\n${grand} questions total`);
warnings.forEach(w => console.log('⚠️  ' + w));
errors.forEach(e => console.log('❌ ' + e));
if (errors.length) { console.log(`\n${errors.length} error(s)`); process.exit(1); }
console.log('All checks passed.');
