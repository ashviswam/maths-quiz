/* ── Picker ───────────────────────────────────────────────────
   Chooses questions for daily and weekly tests. Pure functions so they
   can be tested in Node (see tools/check.js --picker).

   stats: Map qid → {n, ok, lastC, lastT} from Store.questionStats()
──────────────────────────────────────────────────────────────── */
const Picker = (() => {
  const DAY = 86400000;

  // Difficulty: 'easy' | 'medium' | 'hard' ('challenging' is the old name for hard).
  function level(q) { return q.difficulty === 'challenging' ? 'hard' : (q.difficulty || 'medium'); }
  const MIX = { easy: 0.1, medium: 0.5, hard: 0.4 };   // weekly test difficulty spread
  const MCQ_MAX = 0.4;                                  // weekly test: at most 40% multiple choice

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

  // Paper (drawing) tasks take too long for a test: they are practice-only.
  const noPaper = chs => chs.map(ch => ({ ...ch, questions: ch.questions.filter(q => q.type !== 'paper') }));

  /* Daily: ~50% newest chapter, ~30% due for review (wrong / not seen
     for a while) from anywhere, rest from older chapters — unseen first. */
  function daily(chapters, stats, { size = 15, now = Date.now(), rng = Math.random } = {}) {
    chapters = noPaper(chapters);
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

  /* Split `quota` between a chapter's topics: equal shares, or weighted by
     ch.weeklyWeights ({ topic: weight }, default 1). Largest remainder, so
     the shares add up to exactly `quota`. */
  function topicQuotas(ch, quota) {
    const topics = [...new Set(ch.questions.map(q => q.topic))];
    const w = t => (ch.weeklyWeights && ch.weeklyWeights[t] != null ? ch.weeklyWeights[t] : 1);
    const sum = topics.reduce((s, t) => s + w(t), 0) || 1;
    const shares = topics.map(t => { const x = quota * w(t) / sum; return { topic: t, n: Math.floor(x), r: x % 1 }; });
    let left = quota - shares.reduce((s, x) => s + x.n, 0);
    [...shares].sort((a, b) => b.r - a.r).forEach(x => { if (left > 0) { x.n++; left--; } });
    return shares;
  }

  /* Weekly: the full portion. Every chapter is represented in proportion
     to its size (min 2), preferring questions not used in earlier weekly
     tests, then weak ones. */
  function weekly(chapters, stats, usedBefore, { size = 30, now = Date.now(), rng = Math.random } = {}) {
    chapters = noPaper(chapters);
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
      // Share the chapter's quota between its topics, so small topics aren't
      // crowded out, then balance difficulty within each topic. Top up from
      // whatever is left.
      const got = [];
      for (const { topic, n } of topicQuotas(ch, quota)) {
        const pool = pools[i].filter(it => it.q.topic === topic), mine = [];
        for (const [lv, share] of Object.entries(MIX))
          mine.push(...take(pool.filter(it => level(it.q) === lv), Math.round(n * share), picked, limits));
        mine.push(...take(pool, n - mine.length, picked, limits));
        got.push(...mine);
      }
      got.push(...take(pools[i], quota - got.length, picked, limits));
      result.push(...got);
    });
    // Too many (lots of small chapters) → trim evenly; too few → fill from the biggest gaps.
    let out = Util.shuffle(result, rng).slice(0, size);
    if (out.length < size) {
      const rest = pools.flat().map(it => ({ it, k: rank(it) })).sort((a, b) => a.k - b.k).map(x => x.it);
      out.push(...take(rest, size - out.length, picked, limits));
    }
    rebalance(out, pools, size);
    // Keep chapter order, easy → hard within a chapter, so the paper reads like an exam.
    const rankLv = { easy: 0, medium: 1, hard: 2 };
    return out.sort((a, b) => a.ch.id - b.ch.id || rankLv[level(a.q)] - rankLv[level(b.q)]).map(it => it.q);
  }

  /* Hit the whole-test difficulty mix and the multiple-choice cap by swapping
     questions for unused ones from the same topic (else the same chapter), so
     topic and chapter coverage stay as picked. Best effort: a subject without
     enough hard or typed questions keeps what it has. */
  function rebalance(out, pools, size) {
    const LV = ['easy', 'medium', 'hard'];
    const ranked = pools.flat();                                  // each chapter's pool is in need order
    const inOut = new Set(out.map(it => it.q.id));
    const count = f => out.filter(f).length;
    const shortMax = Math.max(1, Math.round(size * 0.15));
    const allowed = (c, leaving) => !inOut.has(c.q.id)
      && (c.q.type !== 'short' || leaving.q.type === 'short' || count(it => it.q.type === 'short') < shortMax);
    const find = (leaving, test) =>
      ranked.find(c => c.ch === leaving.ch && c.q.topic === leaving.q.topic && test(c) && allowed(c, leaving))
      || ranked.find(c => c.ch === leaving.ch && test(c) && allowed(c, leaving));
    const swap = (i, c) => { inOut.delete(out[i].q.id); inOut.add(c.q.id); out[i] = c; };

    // 1. Difficulty: move questions from over-full levels to under-full ones, preferring typed answers.
    const want = lv => Math.round(size * MIX[lv]);
    const n = lv => count(it => level(it.q) === lv);
    for (let guard = 0; guard < size * 3; guard++) {
      const over = LV.filter(lv => n(lv) > want(lv)), under = LV.filter(lv => n(lv) < want(lv));
      if (!over.length || !under.length) break;
      let moved = false;
      for (let i = 0; i < out.length && !moved; i++) {
        if (!over.includes(level(out[i].q))) continue;
        const toUnder = c => under.includes(level(c.q));
        const c = find(out[i], c => toUnder(c) && c.q.type !== 'mcq') || find(out[i], toUnder);
        if (c) { swap(i, c); moved = true; }
      }
      if (!moved) break;
    }
    // 2. Fewer multiple choice: swap MCQs for typed questions of the same level.
    const mcqMax = Math.round(size * MCQ_MAX);
    for (let i = 0; i < out.length && count(it => it.q.type === 'mcq') > mcqMax; i++) {
      if (out[i].q.type !== 'mcq') continue;
      const lv = level(out[i].q), c = find(out[i], c => c.q.type !== 'mcq' && level(c.q) === lv);
      if (c) swap(i, c);
    }
  }

  function timeLimitSec(questions) {
    const per = MANIFEST.secondsPer;
    return questions.reduce((s, q) => s + (per[q.type] || per.mcq), 0);
  }

  return { daily, weekly, timeLimitSec, newestChapter, level };
})();

if (typeof module !== 'undefined') module.exports = Picker;
