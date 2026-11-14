/* ── Picker ───────────────────────────────────────────────────
   Chooses questions for daily and weekly tests. Pure functions so they
   can be tested in Node (see tools/check.js --picker).

   stats: Map qid → {n, ok, lastC, lastT} from Store.questionStats()
──────────────────────────────────────────────────────────────── */
const Picker = (() => {
  const DAY = 86400000;

  // Difficulty: 'easy' | 'medium' | 'hard' ('challenging' is the old name for hard).
  function level(q) { return q.difficulty === 'challenging' ? 'hard' : (q.difficulty || 'medium'); }
  const MIX = { easy: 0.3, medium: 0.4, hard: 0.3 };   // weekly test difficulty spread

  function flatten(chapters) {
    return chapters.flatMap(ch => ch.questions.map(q => ({ q, ch })));
  }

  // The chapter most recently added (by `added` date, then by id).
  function newestChapter(chapters) {
    return [...chapters].sort((a, b) =>
      (a.added || '').localeCompare(b.added || '') || a.id - b.id).pop();
  }

  // Lower = more worth asking. Unseen and recently-wrong questions first;
  // questions answered correctly long ago come back for spaced review.
  function need(q, stats, now) {
    const st = stats.get(q.id);
    if (!st) return 0;                                   // never seen
    if (!st.lastC) return 1;                             // last attempt wrong
    const age = (now - st.lastT) / DAY;
    return age > 14 ? 2 : age > 7 ? 3 : 4 + st.ok / st.n; // spaced review, then mastered
  }

  function byNeed(items, stats, now, rng) {
    return items
      .map(it => ({ it, k: need(it.q, stats, now) + rng() * 0.5 }))
      .sort((a, b) => a.k - b.k)
      .map(x => x.it);
  }

  // Take from `pool` in order, skipping already-picked ids and keeping
  // short (parent-marked) questions under `maxShort`.
  function take(pool, n, picked, limits) {
    const out = [];
    for (const it of pool) {
      if (out.length >= n) break;
      if (picked.has(it.q.id)) continue;
      if (it.q.type === 'short' && limits.short >= limits.maxShort) continue;
      if (it.q.type === 'short') limits.short++;
      picked.add(it.q.id);
      out.push(it);
    }
    return out;
  }

  /* Daily: ~50% newest chapter, ~30% due for review (wrong / not seen
     for a while) from anywhere, rest from older chapters — unseen first. */
  function daily(chapters, stats, { size = 15, now = Date.now(), rng = Math.random } = {}) {
    const all = flatten(chapters);
    if (!all.length) return [];
    const newest = newestChapter(chapters);
    const picked = new Set(), limits = { short: 0, maxShort: 2 };

    const fromNewest = byNeed(all.filter(it => it.ch === newest), stats, now, rng);
    const due = all
      .filter(it => { const n = need(it.q, stats, now); return n >= 1 && n < 4; })
      .sort((a, b) => need(a.q, stats, now) - need(b.q, stats, now)
                   || (stats.get(a.q.id).lastT - stats.get(b.q.id).lastT));
    const older = byNeed(all.filter(it => it.ch !== newest), stats, now, rng);

    const result = [
      ...take(fromNewest, chapters.length === 1 ? size : Math.round(size * 0.5), picked, limits),
      ...take(due, Math.round(size * 0.3), picked, limits)
    ];
    result.push(...take(older, size - result.length, picked, limits));
    result.push(...take(byNeed(all, stats, now, rng), size - result.length, picked, limits));
    return Util.shuffle(result, rng).map(it => it.q);
  }

  /* Weekly: the full portion. Every chapter is represented in proportion
     to its size (min 2), preferring questions not used in earlier weekly
     tests, then weak ones. */
  function weekly(chapters, stats, usedBefore, { size = 30, now = Date.now(), rng = Math.random } = {}) {
    const total = chapters.reduce((n, ch) => n + ch.questions.length, 0);
    if (!total) return [];
    size = Math.min(size, total);
    const picked = new Set(), limits = { short: 0, maxShort: Math.max(1, Math.round(size * 0.15)) };
    const rank = it => (usedBefore.has(it.q.id) ? 10 : 0) + need(it.q, stats, now) + rng() * 0.5;

    const pools = chapters.map(ch => ch.questions
      .map(q => ({ q, ch })).map(it => ({ it, k: rank(it) }))
      .sort((a, b) => a.k - b.k).map(x => x.it));

    const result = [];
    chapters.forEach((ch, i) => {
      const quota = Math.max(2, Math.round(size * ch.questions.length / total));
      // Balance difficulty within each chapter, then top up from whatever is left.
      const got = [];
      for (const [lv, share] of Object.entries(MIX))
        got.push(...take(pools[i].filter(it => level(it.q) === lv), Math.round(quota * share), picked, limits));
      got.push(...take(pools[i], quota - got.length, picked, limits));
      result.push(...got);
    });
    // Too many (lots of small chapters) → trim evenly; too few → fill from the biggest gaps.
    let out = Util.shuffle(result, rng).slice(0, size);
    if (out.length < size) {
      const rest = pools.flat().map(it => ({ it, k: rank(it) })).sort((a, b) => a.k - b.k).map(x => x.it);
      out.push(...take(rest, size - out.length, picked, limits));
    }
    // Keep chapter order, easy → hard within a chapter, so the paper reads like an exam.
    const rankLv = { easy: 0, medium: 1, hard: 2 };
    return out.sort((a, b) => a.ch.id - b.ch.id || rankLv[level(a.q)] - rankLv[level(b.q)]).map(it => it.q);
  }

  function timeLimitSec(questions) {
    const per = MANIFEST.secondsPer;
    return questions.reduce((s, q) => s + (per[q.type] || per.mcq), 0);
  }

  return { daily, weekly, timeLimitSec, newestChapter, level };
})();

if (typeof module !== 'undefined') module.exports = Picker;
