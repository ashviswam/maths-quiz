/* ── Common helpers ───────────────────────────────────────────
   Shared by every page. Depends on MANIFEST (data/manifest.js).
──────────────────────────────────────────────────────────────── */
const Util = (() => {
  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function stripTags(html, max = 90) {
    const t = String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return t.length > max ? t.slice(0, max) + '…' : t;
  }

  function shuffle(arr, rng = Math.random) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Display order for a question's options. Shuffled unless the question
  // sets `fixedOrder: true` (e.g. options that refer to each other).
  function optionOrder(q) {
    const idx = [...q.options.keys()];
    return q.fixedOrder ? idx : shuffle(idx);
  }

  function checkInputAnswer(raw, q) {
    // Lower-case, unify minus/times signs, drop thousands separators only
    // (so "(4,7)" stays a coordinate but "1,000" becomes 1000), ignore spacing.
    const normalize = s => String(s).trim().toLowerCase()
      .replace(/[−–]/g, '-').replace(/×/g, 'x')
      .replace(/(\d),(?=\d{3}(?!\d))/g, '$1')
      .replace(/\s+/g, '');
    const user = normalize(raw);
    // acceptableAnswers are *extra* accepted strings — the main answer always counts.
    const accepted = [q.answer, ...(q.acceptableAnswers || [])].map(normalize);
    if (accepted.includes(user)) return true;
    // exact: algebra answers like "5p" must not accept a bare "5".
    if (q.exact) return false;
    // Numeric match tolerating units/currency ("12", "12 cm", "$12"), only when
    // both sides are a single number — so "34" never matches "3:4" or "(3, 4)".
    const asNumber = s => {
      const m = s.match(/^[$€£]?(-?\d+(?:\.\d+)?)[a-z%°²³$€£]*$/);
      return m ? parseFloat(m[1]) : NaN;
    };
    const u = asNumber(user);
    return !isNaN(u) && accepted.some(a => Math.abs(asNumber(a) - u) < 1e-4);
  }

  function subject(id) { return MANIFEST.subjects.find(s => s.id === id) || null; }
  function param(name) { return new URLSearchParams(location.search).get(name); }

  function fmtClock(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function fmtDate(t) {
    return new Date(t).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
  }

  function greeting() {
    const h = new Date().getHours(), n = MANIFEST.student;
    return h < 12 ? `Good morning, ${n}! ☀️` : h < 17 ? `Hey ${n}! 👋` : `Good evening, ${n}! 🌙`;
  }

  // Chapter files call addChapter({...}). Loading them in order via script
  // tags keeps the "no build step, just static files" deployment.
  const _loaded = [];
  window.addChapter = ch => _loaded.push(ch);

  function loadSubject(subj) {
    return subj.chapters.reduce((p, file) => p.then(() => new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = `data/${subj.id}/${file}`;
      el.onload = resolve;
      el.onerror = () => reject(new Error(`Could not load data/${subj.id}/${file}`));
      document.head.appendChild(el);
    })), Promise.resolve()).then(() => [..._loaded].sort((a, b) => a.id - b.id));
  }

  return { esc, stripTags, shuffle, optionOrder, checkInputAnswer, subject, param, fmtClock, fmtDate, greeting, loadSubject };
})();
