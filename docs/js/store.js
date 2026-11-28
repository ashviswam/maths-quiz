/* ── Store ────────────────────────────────────────────────────
   All of the student's history, in one localStorage document that is
   designed to merge cleanly across devices (see sync.js):

   {
     v: 1,
     dev:   device id (local only, never synced),
     ev:    [[id, time, subject, questionId, correct 0|1, mode]]   append-only answer log
            mode: 'p' practice · 'd' daily test · 'w' weekly test
     tests: { id: TestRecord }      last-write-wins by `u`, finished beats unfinished
     notes: { 'subject/qid': [text, time] }   last-write-wins; '' = deleted
     fc:    { cardId: [known 0|1, time] }     flashcard "known" flags, last-write-wins
     pp:    { 'subject/qid': [waiting 0|1, time] }  paper (drawing) tasks waiting for a parent check
   }

   TestRecord: { id, s, kind:'daily'|'weekly', day, week, start, deadline?, end?,
                 qs:[qid], order:{qid:[optionIdx]}, ans:{qid:value},
                 marks:{qid:0|1}, score, total, void?, u }
──────────────────────────────────────────────────────────────── */
const Store = (() => {
  const KEY = 'studyzone_g7';
  const listeners = [];
  let data = load();

  function rid() { return Math.random().toString(36).slice(2, 10); }
  function blank() { return { v: 1, dev: rid(), ev: [], tests: {}, notes: {}, fc: {}, pp: {} }; }

  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY));
      if (d && d.v === 1) return Object.assign(blank(), d);
    } catch { /* fall through */ }
    return blank();
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(data));
    listeners.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  }

  function onChange(fn) { listeners.push(fn); }

  // ── Dates (local time) ─────────────────────────────────────
  function dayKey(t = Date.now()) {
    const d = new Date(t);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  // ISO-8601 week, Monday start: "2026-W46"
  function weekKey(t = Date.now()) {
    const d = new Date(t);
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dow = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dow);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const wk = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    return `${date.getUTCFullYear()}-W${String(wk).padStart(2, '0')}`;
  }

  // ── Answers ────────────────────────────────────────────────
  function recordAnswer(s, qid, correct, mode) {
    data.ev.push([Date.now().toString(36) + rid().slice(0, 4), Date.now(), s, qid, correct ? 1 : 0, mode]);
    save();
  }

  // Per-question summary for one subject: Map qid → {n, ok, lastC, lastT}
  function questionStats(s) {
    const m = new Map();
    for (const [, t, sub, qid, c] of data.ev) {
      if (sub !== s) continue;
      const st = m.get(qid) || { n: 0, ok: 0, lastC: 0, lastT: 0 };
      st.n++; st.ok += c;
      if (t >= st.lastT) { st.lastT = t; st.lastC = c; }
      m.set(qid, st);
    }
    return m;
  }

  function events(s, sinceT = 0) {
    return data.ev.filter(e => (!s || e[2] === s) && e[1] >= sinceT);
  }

  // ── Tests ──────────────────────────────────────────────────
  function putTest(t) { t.u = Date.now(); data.tests[t.id] = t; save(); }
  function getTest(id) { return data.tests[id] || null; }
  function newTestId() { return 't' + Date.now().toString(36) + rid().slice(0, 4); }
  function tests(s) {
    return Object.values(data.tests)
      .filter(t => (!s || t.s === s) && !t.void)
      .sort((a, b) => a.start - b.start);
  }

  // ── Notes ──────────────────────────────────────────────────
  function getNote(s, qid) { const n = data.notes[`${s}/${qid}`]; return n ? n[0] : ''; }
  function setNote(s, qid, text) { data.notes[`${s}/${qid}`] = [text.trim(), Date.now()]; save(); }
  function notes(s) {
    return Object.entries(data.notes)
      .filter(([k, v]) => v[0] && k.startsWith(s + '/'))
      .map(([k, v]) => ({ qid: k.slice(s.length + 1), text: v[0], t: v[1] }));
  }

  // ── Flashcards ─────────────────────────────────────────────
  function isKnown(id) { const f = data.fc[id]; return !!(f && f[0]); }
  function setKnown(id, known) { data.fc[id] = [known ? 1 : 0, Date.now()]; save(); }

  // ── Paper tasks ────────────────────────────────────────────
  // Drawn on paper, so a parent marks them later from the subject page.
  function setPaper(s, qid, waiting) { data.pp[`${s}/${qid}`] = [waiting ? 1 : 0, Date.now()]; save(); }
  function isPaperWaiting(s, qid) { const p = data.pp[`${s}/${qid}`]; return !!(p && p[0]); }
  function paperWaiting(s) {
    return Object.entries(data.pp)
      .filter(([k, v]) => v[0] && k.startsWith(s + '/'))
      .map(([k, v]) => ({ qid: k.slice(s.length + 1), t: v[1] }))
      .sort((a, b) => a.t - b.t);
  }

  // ── Merge (used by sync and import) ────────────────────────
  // Mutates `a` with anything newer in `b`. Returns true if `a` changed.
  function mergeInto(a, b) {
    let changed = false;
    const ids = new Set(a.ev.map(e => e[0]));
    for (const e of b.ev || []) {
      if (!ids.has(e[0])) { a.ev.push(e); ids.add(e[0]); changed = true; }
    }
    if (changed) a.ev.sort((x, y) => x[1] - y[1]);

    for (const [id, t] of Object.entries(b.tests || {})) {
      const mine = a.tests[id];
      const better = !mine
        || (t.end && !mine.end)
        || (!!t.end === !!mine.end && (t.u || 0) > (mine.u || 0));
      if (better) { a.tests[id] = t; changed = true; }
    }
    for (const k of ['notes', 'fc', 'pp']) {
      a[k] = a[k] || {};
      for (const [id, v] of Object.entries(b[k] || {})) {
        const mine = a[k][id];
        if (!mine || v[1] > mine[1]) { a[k][id] = v; changed = true; }
      }
    }
    return changed;
  }

  // Shareable copy (no device id)
  function snapshot() {
    const { dev, ...rest } = data;
    return JSON.parse(JSON.stringify(rest));
  }

  function mergeFrom(remote) {
    if (!remote || remote.v !== 1) return false;
    const changed = mergeInto(data, remote);
    if (changed) save();
    return changed;
  }

  return {
    dayKey, weekKey, onChange,
    recordAnswer, questionStats, events,
    putTest, getTest, newTestId, tests,
    getNote, setNote, notes,
    isKnown, setKnown,
    setPaper, isPaperWaiting, paperWaiting,
    mergeInto, mergeFrom, snapshot
  };
})();

if (typeof module !== 'undefined') module.exports = Store;
