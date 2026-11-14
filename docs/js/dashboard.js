/* ── Dashboard (index.html) ───────────────────────────────────
   This week's checklist, daily streak and per-subject status.
   Depends on: MANIFEST, Util, Store.
──────────────────────────────────────────────────────────────── */
(() => {
  const $ = id => document.getElementById(id);
  const pct = t => t.total ? Math.round(100 * t.score / t.total) : 0;
  const pctClass = p => p >= 80 ? 'pct-great' : p >= 60 ? 'pct-ok' : 'pct-low';

  function streak() {
    const days = new Set(Store.tests().filter(t => t.kind === 'daily' && t.end).map(t => t.day));
    let n = 0;
    const d = new Date();
    if (!days.has(Store.dayKey(d))) d.setDate(d.getDate() - 1);   // today not done yet — streak still alive
    while (days.has(Store.dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return { n, today: days.has(Store.dayKey()) };
  }

  function weekRange() {
    const d = new Date(), dow = (d.getDay() + 6) % 7;
    const mon = new Date(d); mon.setDate(d.getDate() - dow);
    const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
    const f = x => x.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
    return `${f(mon)} – ${f(sun)}`;
  }

  function render() {
    $('logo').textContent = `✏️ Study Zone · Grade ${MANIFEST.grade}`;
    $('home-greeting').textContent = Util.greeting();
    const active = MANIFEST.subjects.filter(s => s.chapters.length);
    const week = Store.weekKey();
    const all = Store.tests();
    const weeklyDone = active.filter(s => all.some(t => t.s === s.id && t.kind === 'weekly' && t.week === week && t.end));
    const st = streak();

    $('home-subtitle').textContent = active.length
      ? 'Practise any time, do a daily test, and take each subject\'s timed test once a week.'
      : `No material yet — add class PDFs to ${MANIFEST.materialDir}/<subject>/ and run /add-material in Claude Code.`;

    $('week-strip').innerHTML = active.length ? `
      <div class="ws-item"><div class="ws-num">${st.n}${st.n ? ' 🔥' : ''}</div><div class="ws-label">day streak${st.today ? '' : ' · do a daily test today!'}</div></div>
      <div class="ws-item"><div class="ws-num">${weeklyDone.length}/${active.length}</div><div class="ws-label">timed tests done · ${Util.esc(weekRange())}</div></div>
      <div class="ws-item"><div class="ws-num">${all.filter(t => t.end && t.week === week).length}</div><div class="ws-label">test${all.filter(t => t.end && t.week === week).length === 1 ? '' : 's'} this week</div></div>` : '';

    $('subject-grid').innerHTML = MANIFEST.subjects.map(s => {
      if (!s.chapters.length) {
        return `<div class="subject-card subject-card--soon">
          <div class="subj-top"><span class="subj-icon">${s.icon}</span><span class="subj-soon-badge">No material yet</span></div>
          <div class="subj-name">${Util.esc(s.name)}</div><div class="subj-desc">${Util.esc(s.desc)}</div></div>`;
      }
      const mine = all.filter(t => t.s === s.id && t.end);
      const wk = all.find(t => t.s === s.id && t.kind === 'weekly' && t.week === week);
      const dailyToday = mine.filter(t => t.kind === 'daily' && t.day === Store.dayKey());
      const trend = mine.filter(t => t.kind === 'weekly').slice(-6);
      const weeklyChip = !wk ? '<span class="chip chip-due">Timed test due</span>'
        : !wk.end ? `<span class="chip chip-prog">${wk.submitted || Date.now() > wk.deadline ? 'Timed test: open to finish' : 'Timed test in progress'}</span>`
        : `<span class="chip chip-done">Timed test ✓ ${pct(wk)}%</span>`;
      const dailyChip = dailyToday.length ? `<span class="chip chip-done">Daily ✓ ${dailyToday.map(pct).join('%, ')}%</span>` : '';
      return `<a href="subject.html?s=${s.id}" class="subject-card" style="--subj-color:${s.color}">
        <div class="subj-top"><span class="subj-icon">${s.icon}</span>
          <span class="subj-q-count">${s.chapters.length} chapter${s.chapters.length > 1 ? 's' : ''}</span></div>
        <div class="subj-name">${Util.esc(s.name)}</div>
        <div class="subj-desc">${Util.esc(s.desc)}</div>
        <div class="subj-chips">${weeklyChip}${dailyChip}</div>
        ${trend.length ? `<div class="trend" title="Last ${trend.length} weekly tests">${trend.map(t =>
          `<span class="trend-bar ${pctClass(pct(t))}" style="height:${Math.max(8, pct(t))}%" title="${t.week}: ${pct(t)}%"></span>`).join('')}</div>` : ''}
        <div class="subj-cta">Open →</div></a>`;
    }).join('');
  }

  Store.onChange(render);
  document.addEventListener('DOMContentLoaded', render);
})();
