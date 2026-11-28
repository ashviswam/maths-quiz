/* ── Subject page controller ──────────────────────────────────
   One page (subject.html?s=<id>) for every subject. Three modes:
     practice — one chapter, feedback after each question, resumable
     daily    — on-demand ~15-question test, feedback after each question
     weekly   — full-portion exam: one per subject per ISO week, timed,
                no feedback until submitted, short answers parent-marked
   Depends on: MANIFEST, Util, Store, Picker, Sync.
──────────────────────────────────────────────────────────────── */
const App = (() => {
  const $ = id => document.getElementById(id);
  const LABELS = 'ABCDEF';
  const MODE_EV = { practice: 'p', retry: 'p', daily: 'd', weekly: 'w' };

  let subj = null, chapters = [], byId = new Map();
  let S = null;            // current session
  let timerId = null, dirty = false;

  // ── Boot ───────────────────────────────────────────────────
  async function init() {
    subj = Util.subject(Util.param('s'));
    if (!subj) { location.href = './'; return; }
    document.title = `${subj.name} — Study Zone`;
    document.documentElement.style.setProperty('--subj-color', subj.color);
    $('logo').textContent = `${subj.icon} ${subj.name}`;
    try {
      chapters = await Util.loadSubject(subj);
    } catch (e) {
      $('home-empty').innerHTML = `<p class="empty-msg">⚠️ ${Util.esc(e.message)}</p>`;
      $('home-empty').classList.remove('hidden');
      return;
    }
    chapters.forEach(ch => ch.questions.forEach(q => byId.set(q.id, { q, ch })));
    Store.onChange(() => { if (!$('view-home').classList.contains('hidden')) renderHome(); });
    goHome();
    // A weekly test whose time ran out while the app was closed gets submitted now.
    const wk = currentWeekly();
    if (wk && !wk.end && Date.now() > wk.deadline) resumeTest(wk);
  }

  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    $(id).classList.remove('hidden');
    const home = id === 'view-home';
    $('link-home').classList.toggle('hidden', !home);
    $('btn-back').classList.toggle('hidden', home);
    $('btn-back').textContent = `← ${subj.name}`;
    window.scrollTo(0, 0);
  }

  function goHome() {
    if (S && S.mode === 'weekly' && !S.test.submitted) {
      if (!confirm('Leave the weekly test? The timer keeps running — you can resume until time is up.')) return;
      saveWeekly();
    }
    stopTimer();
    S = null;
    $('btn-back').classList.add('hidden');
    $('timer').classList.add('hidden');
    showView('view-home');
    renderHome();
  }

  // ── Home ───────────────────────────────────────────────────
  function todaysDailies() { return Store.tests(subj.id).filter(t => t.kind === 'daily' && t.day === Store.dayKey()); }
  function currentWeekly() { return Store.tests(subj.id).find(t => t.kind === 'weekly' && t.week === Store.weekKey()) || null; }
  function pct(t) { return t.total ? Math.round(100 * t.score / t.total) : 0; }

  function renderHome() {
    $('home-greeting').textContent = Util.greeting();
    const total = chapters.reduce((n, ch) => n + ch.questions.length, 0);
    $('home-subtitle').textContent = total
      ? `${chapters.length} chapter${chapters.length > 1 ? 's' : ''} · ${total} questions`
      : '';
    const empty = !total;
    $('home-empty').classList.toggle('hidden', !empty);
    $('home-content').classList.toggle('hidden', empty);
    if (empty) {
      $('home-empty').innerHTML = `<div class="empty-icon">📂</div>
        <p class="empty-msg">No ${Util.esc(subj.name)} material yet.</p>
        <p class="empty-sub">Add class PDFs to <code>${Util.esc(MANIFEST.materialDir)}/${subj.id}/</code>
        and run <code>/add-material</code> in Claude Code.</p>`;
      return;
    }
    renderModes();
    renderPaper();
    renderHistory();
    renderWeak();
    renderChapters();
    const nc = Store.notes(subj.id).length;
    $('notes-cta').classList.toggle('hidden', !nc);
    $('notes-count').textContent = nc;
  }

  function renderModes() {
    const dailies = todaysDailies();
    const doneToday = dailies.filter(t => t.end);
    const openDaily = dailies.find(t => !t.end);
    const dailyN = Math.min(MANIFEST.dailySize, byId.size);
    const dailyStatus = openDaily
      ? `In progress — ${Object.keys(openDaily.marks).length}/${openDaily.qs.length} answered`
      : doneToday.length
        ? `Done today ✓ ${doneToday.map(t => pct(t) + '%').join(', ')}`
        : `${dailyN} questions · newest chapter + review`;

    const wk = currentWeekly();
    const weeklyN = Math.min(MANIFEST.weeklySize, byId.size);
    let weeklyStatus, weeklyCta, weeklyDone = false;
    if (!wk) {
      const mins = Math.round(Picker.timeLimitSec(Picker.weekly(chapters, new Map(), new Set(), { size: weeklyN, rng: () => 0.5 })) / 60);
      weeklyStatus = `${weeklyN} questions · easy → hard · about ${mins} min · one attempt this week`;
      weeklyCta = 'Start timed test →';
    } else if (!wk.end) {
      weeklyStatus = wk.submitted ? 'Waiting for a parent to mark short answers'
        : `In progress — ${Util.fmtClock((wk.deadline - Date.now()) / 1000)} left`;
      weeklyCta = wk.submitted ? 'Mark answers →' : 'Resume →';
    } else {
      weeklyDone = true;
      weeklyStatus = `Done ✓ ${wk.score}/${wk.total} (${pct(wk)}%) — next test on Monday`;
      weeklyCta = 'Review answers →';
    }

    const hasCards = chapters.some(ch => (ch.flashcards || []).length);
    const arts = [...new Set(chapters.flatMap(ch => (ch.articles || []).map(a => a[1])))];
    $('mode-row').innerHTML = `
      <div class="mode-tile" onclick="App.startDaily()">
        <div class="mode-tile-icon">📅</div>
        <div class="mode-tile-name">Daily test</div>
        <div class="mode-tile-status">${Util.esc(dailyStatus)}</div>
        <div class="mode-tile-cta">${openDaily ? 'Resume →' : doneToday.length ? 'Another one →' : 'Start →'}</div>
      </div>
      <div class="mode-tile ${weeklyDone ? 'mode-tile--done' : ''}" onclick="App.${wk ? `openWeekly()` : 'startWeekly()'}">
        <div class="mode-tile-icon">📝</div>
        <div class="mode-tile-name">Timed test <span class="mode-tile-week">week ${+Store.weekKey().split('-W')[1]}</span></div>
        <div class="mode-tile-status">${Util.esc(weeklyStatus)}</div>
        <div class="mode-tile-cta">${weeklyCta}</div>
        ${weeklyDone ? `<button class="mode-tile-link" onclick="event.stopPropagation();App.allowRetake()">Parent: allow a retake</button>` : ''}
      </div>
      ${hasCards ? `<a class="mode-tile" href="flashcards.html?s=${subj.id}">
        <div class="mode-tile-icon">🃏</div>
        <div class="mode-tile-name">Flashcards</div>
        <div class="mode-tile-status">Vocabulary practice</div>
        <div class="mode-tile-cta">Open →</div></a>` : ''}
      ${arts.length ? `<a class="mode-tile" href="articles.html?s=${subj.id}">
        <div class="mode-tile-icon">⚡</div>
        <div class="mode-tile-name">${Util.esc(arts.join(', '))}?</div>
        <div class="mode-tile-status">Quick-fire masculine / feminine drill</div>
        <div class="mode-tile-cta">Play →</div></a>` : ''}`;
  }

  // Paper tasks the student has done, waiting for a parent to look at the drawing.
  function renderPaper() {
    const list = Store.paperWaiting(subj.id).map(p => ({ ...p, hit: byId.get(p.qid) })).filter(p => p.hit);
    $('paper-check').classList.toggle('hidden', !list.length);
    $('paper-list').innerHTML = list.map(({ qid, t, hit: { q, ch } }) => `
      <details class="paper-item">
        <summary><span class="paper-when">${Util.fmtDate(t)}</span> ${Util.esc(Util.stripTags(q.question, 90))}</summary>
        <div class="paper-detail">
          <div class="notes-entry-meta">Ch. ${ch.id}: ${Util.esc(ch.title)} · ${Util.esc(q.topic)}${q.ref ? ` · 📖 ${Util.esc(q.ref)}` : ''}</div>
          <div class="question-text">${q.question}</div>
          ${q.diagram ? `<div class="q-diagram">${q.diagram}</div>` : ''}
          <div class="fb-review-model"><div class="fb-review-label">What to check</div>
            <div class="fb-model-text">${q.answer}</div></div>
          <div class="fb-mark-actions">
            <button class="btn-mark-correct" onclick="App.markPaper('${qid}',1)">✓ Got it</button>
            <button class="btn-mark-wrong" onclick="App.markPaper('${qid}',0)">✗ Not yet</button>
          </div>
        </div>
      </details>`).join('');
  }

  function markPaper(qid, ok) {
    Store.recordAnswer(subj.id, qid, !!ok, 'p');
    Store.setPaper(subj.id, qid, 0);     // re-renders home via onChange
  }

  function renderHistory() {
    const done = Store.tests(subj.id).filter(t => t.end).reverse().slice(0, 8);
    $('history').classList.toggle('hidden', !done.length);
    $('history-list').innerHTML = done.map(t => `
      <button class="hist-row" onclick="App.reviewTest('${t.id}')">
        <span class="hist-kind">${t.kind === 'weekly' ? '⏱ Timed' : '📅 Daily'}</span>
        <span class="hist-date">${Util.fmtDate(t.start)}</span>
        <span class="hist-bar"><span style="width:${pct(t)}%" class="${pct(t) >= 80 ? 'pct-great' : pct(t) >= 60 ? 'pct-ok' : 'pct-low'}"></span></span>
        <span class="hist-score">${t.score}/${t.total}</span>
      </button>`).join('');
  }

  // Topics with the lowest accuracy over the last 30 days (min 3 attempts).
  function renderWeak() {
    const since = Date.now() - 30 * 86400000;
    const byTopic = {};
    for (const [, , , qid, c] of Store.events(subj.id, since)) {
      const hit = byId.get(qid);
      if (!hit) continue;
      const k = `${hit.ch.id}|${hit.q.topic}`;
      const b = byTopic[k] || (byTopic[k] = { ch: hit.ch, topic: hit.q.topic, n: 0, ok: 0 });
      b.n++; b.ok += c;
    }
    const weak = Object.values(byTopic).filter(b => b.n >= 3 && b.ok / b.n < 0.8)
      .sort((a, b) => a.ok / a.n - b.ok / b.n).slice(0, 5);
    $('weak').classList.toggle('hidden', !weak.length);
    $('weak-list').innerHTML = weak.map(b => `
      <div class="weak-row"><span class="weak-topic">${Util.esc(b.topic)}</span>
      <span class="weak-ch">Ch ${b.ch.id}</span>
      <span class="weak-pct">${Math.round(100 * b.ok / b.n)}% of ${b.n}</span></div>`).join('');
  }

  function renderChapters() {
    const stats = Store.questionStats(subj.id);
    const grid = $('chapter-grid');
    grid.innerHTML = '';
    chapters.forEach(ch => {
      const n = ch.questions.length;
      const tried = ch.questions.filter(q => stats.has(q.id)).length;
      const mastered = ch.questions.filter(q => stats.get(q.id)?.lastC).length;
      const p = Math.round(100 * mastered / n);
      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.style.setProperty('--card-color', ch.color || subj.color);
      card.onclick = () => startPractice(ch);
      card.innerHTML = `
        <div class="ch-top"><span class="ch-icon">${ch.icon || subj.icon}</span><span class="ch-num">Ch. ${ch.id}</span></div>
        <div class="ch-title">${Util.esc(ch.title)}</div>
        <div class="ch-topics">${Util.esc((ch.topics || []).slice(0, 3).join(' · '))}</div>
        <div class="ch-progress">
          <div class="ch-prog-track"><div class="ch-prog-fill" style="width:${p}%"></div></div>
          <span class="ch-prog-label">${tried ? `${mastered}/${n} mastered (${p}%)` : `${n} questions`}</span>
          ${tried === n ? '<span class="ch-badge-done">✓ All tried</span>'
            : tried ? `<span class="ch-badge-progress">▶ ${tried} tried</span>` : ''}
        </div>
        ${levelButtons(ch)}`;
      card.querySelectorAll('.lv-btn').forEach(b => b.onclick = e => { e.stopPropagation(); startPractice(ch, false, b.dataset.lv || null); });
      grid.appendChild(card);
    });
  }

  function levelButtons(ch) {
    const counts = { easy: 0, medium: 0, hard: 0 };
    ch.questions.forEach(q => { if (q.difficulty) counts[Picker.level(q)]++; });
    if (!counts.easy && !counts.medium && !counts.hard) return '';
    return `<div class="lv-row"><span class="lv-label">Practise:</span>
      <button class="lv-btn" data-lv="">All</button>
      ${['easy', 'medium', 'hard'].filter(l => counts[l]).map(l =>
        `<button class="lv-btn lv-${l}" data-lv="${l}">${l[0].toUpperCase() + l.slice(1)} <span>${counts[l]}</span></button>`).join('')}</div>`;
  }

  // ── Starting sessions ──────────────────────────────────────
  function newSession(mode, questions, extra = {}) {
    S = { mode, questions, index: 0, order: {}, results: {}, ...extra };
    $('btn-back').classList.remove('hidden');
    $('btn-back').textContent = `← ${subj.name}`;
    $('quiz-title').textContent = extra.title || '';
    $('quiz-sidebar-legend').innerHTML = mode === 'weekly'
      ? '<span class="leg-item"><span class="ldot ldot-blue"></span>Answered</span><span class="leg-item"><span class="ldot ldot-grey"></span>Not yet</span>'
      : '<span class="leg-item"><span class="ldot ldot-green"></span>Correct</span><span class="leg-item"><span class="ldot ldot-red"></span>Wrong</span><span class="leg-item"><span class="ldot ldot-grey"></span>Not tried</span>';
    $('btn-finish-quiz').textContent = mode === 'weekly' ? 'Submit test →' : 'Finish →';
    renderSidebar();
    showView('view-quiz');
  }

  function startPractice(ch, wrongOnly = false, lv = null) {
    const stats = Store.questionStats(subj.id);
    let qs = lv ? ch.questions.filter(q => Picker.level(q) === lv) : ch.questions;
    if (wrongOnly) {
      qs = qs.filter(q => stats.has(q.id) && !stats.get(q.id).lastC);   // tried, and last attempt wrong
      if (!qs.length) { alert("You've got all of these right already! 🎉"); return; }
    }
    const lvName = lv ? ` · ${lv[0].toUpperCase() + lv.slice(1)}` : '';
    newSession(wrongOnly ? 'retry' : 'practice', [...qs], { chapter: ch, level: lv, title: `Ch. ${ch.id}: ${ch.title}${lvName}${wrongOnly ? ' (retry)' : ''}` });
    const first = qs.findIndex(q => !stats.has(q.id));
    S.index = wrongOnly || first < 0 ? 0 : first;
    renderQuestion();
  }

  function startDaily() {
    const open = todaysDailies().find(t => !t.end);
    if (open) return resumeTest(open);
    const qs = Picker.daily(chapters, Store.questionStats(subj.id), { size: MANIFEST.dailySize });
    const now = Date.now();
    const t = { id: Store.newTestId(), s: subj.id, kind: 'daily', day: Store.dayKey(now), week: Store.weekKey(now),
                start: now, qs: qs.map(q => q.id), order: orders(qs), ans: {}, marks: {} };
    Store.putTest(t);
    resumeTest(t);
  }

  function startWeekly() {
    const used = new Set(Store.tests(subj.id).filter(t => t.kind === 'weekly').flatMap(t => t.qs));
    const qs = Picker.weekly(chapters, Store.questionStats(subj.id), used, { size: MANIFEST.weeklySize });
    const limit = Picker.timeLimitSec(qs);
    if (!confirm(`${subj.name} timed test\n\n${qs.length} questions (easy → hard) from all chapters · ${Math.round(limit / 60)} minutes.\n\n` +
                 `The timer starts now and can't be paused. You won't see answers until you submit. You get one try this week.\n\nReady?`)) return;
    const now = Date.now();
    const t = { id: Store.newTestId(), s: subj.id, kind: 'weekly', day: Store.dayKey(now), week: Store.weekKey(now),
                start: now, deadline: now + limit * 1000, qs: qs.map(q => q.id), order: orders(qs), ans: {}, marks: {} };
    Store.putTest(t);
    Sync.syncNow();     // claim this week's test on other devices straight away
    resumeTest(t);
  }

  function openWeekly() {
    const wk = currentWeekly();
    if (wk.end) reviewTest(wk.id); else resumeTest(wk);
  }

  function allowRetake() {
    const wk = currentWeekly();
    if (!wk || !confirm(`Discard this week's ${subj.name} test (${wk.score}/${wk.total}) so a new one can be taken?\n\nIts answers stay in practice history.`)) return;
    wk.void = true;
    Store.putTest(wk);
  }

  function orders(qs) {
    const o = {};
    qs.forEach(q => { if (q.type === 'mcq') o[q.id] = Util.optionOrder(q); });
    return o;
  }

  function resumeTest(t) {
    const qs = t.qs.map(id => byId.get(id)?.q).filter(Boolean);   // skip questions since removed from data
    const title = t.kind === 'weekly' ? `Timed test · week ${+Store.weekKey(t.start).split('-W')[1]}` : `Daily test · ${Util.fmtDate(t.start)}`;
    newSession(t.kind, qs, { test: t, title, order: t.order || {} });
    if (t.kind === 'daily') {
      qs.forEach(q => { if (q.id in t.marks) S.results[q.id] = { value: t.ans[q.id], correct: !!t.marks[q.id] }; });
      const first = qs.findIndex(q => !(q.id in t.marks));
      S.index = first < 0 ? 0 : first;
      renderSidebar();
      renderQuestion();
      return;
    }
    // weekly
    if (t.submitted || Date.now() > t.deadline) return submitWeekly(true);
    const first = qs.findIndex(q => t.ans[q.id] === undefined);
    S.index = first < 0 ? 0 : first;
    startTimer();
    renderSidebar();
    renderQuestion();
  }

  // ── Sidebar ────────────────────────────────────────────────
  const star = q => q.difficulty && Picker.level(q) === 'hard' ? ' ⭐' : '';

  function renderSidebar() {
    S.stats = Store.questionStats(subj.id);
    const list = $('sidebar-list');
    list.innerHTML = '';
    S.questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.className = 'si-item';
      btn.id = `si-${i}`;
      btn.onclick = () => jumpTo(i);
      btn.innerHTML = `<span class="si-num">${i + 1}</span>
        <span class="si-topic">${Util.esc(q.topic)}${star(q)}${Store.getNote(subj.id, q.id) ? ' 📝' : ''}</span>
        <span class="si-dot"></span>`;
      list.appendChild(btn);
      paintSidebar(i);
    });
    updateFinishBtn();
  }

  function paintSidebar(i) {
    const q = S.questions[i], btn = $(`si-${i}`);
    if (!btn) return;
    btn.classList.remove('si-correct', 'si-wrong', 'si-answered');
    if (S.mode === 'weekly') {
      if (hasAnswer(S.test.ans[q.id])) btn.classList.add('si-answered');
      return;
    }
    const r = S.results[q.id];
    if (r && r.paper) { btn.classList.add('si-answered'); return; }
    if (r) { btn.classList.add(r.correct ? 'si-correct' : 'si-wrong'); return; }
    if (q.type === 'paper' && Store.isPaperWaiting(subj.id, q.id)) { btn.classList.add('si-answered'); return; }
    if (S.mode === 'practice' || S.mode === 'retry') {
      const st = S.stats && S.stats.get(q.id);
      if (st) btn.classList.add(st.lastC ? 'si-correct' : 'si-wrong');
    }
  }

  function setSidebarCurrent(i) {
    document.querySelectorAll('.si-item').forEach(el => el.classList.remove('si-current'));
    const el = $(`si-${i}`);
    if (el) { el.classList.add('si-current'); el.scrollIntoView({ block: 'nearest' }); }
  }

  function updateFinishBtn() {
    const any = S.mode === 'weekly' || Object.keys(S.results).length > 0;
    $('btn-finish-quiz').classList.toggle('hidden', !any);
  }

  function jumpTo(i) {
    if (S.mode === 'weekly') saveCurrentWeeklyInput();
    S.index = i;
    renderQuestion();
  }

  // ── Question rendering ─────────────────────────────────────
  const hasAnswer = v => v !== undefined && v !== null && String(v).trim() !== '';

  function renderQuestion() {
    const q = S.questions[S.index];
    const exam = S.mode === 'weekly';
    S.answered = false;

    const answeredCount = exam
      ? S.questions.filter(x => hasAnswer(S.test.ans[x.id])).length
      : Object.keys(S.results).length;
    $('quiz-prog-fill').style.width = Math.round(100 * answeredCount / S.questions.length) + '%';
    $('quiz-counter').textContent = `Question ${S.index + 1} of ${S.questions.length}`;
    updateScoreLive();

    $('q-topic').textContent = q.topic;
    const lv = Picker.level(q), db = $('q-stretch-badge');
    db.textContent = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' }[lv];
    db.className = `stretch-badge diff-${lv}` + (q.difficulty ? '' : ' hidden');
    let badge = '';
    if (S.mode === 'practice' || S.mode === 'retry') {
      const st = S.stats && S.stats.get(q.id);
      if (st) badge = st.lastC ? ' <span class="hist-badge hist-ok">Got it before ✓</span>'
                               : ' <span class="hist-badge hist-bad">Missed before</span>';
    }
    $('q-text').innerHTML = q.question + badge + (q.ref && q.type !== 'paper' ? `<div class="q-ref">📖 Like ${Util.esc(q.ref)}</div>` : '');
    $('q-diagram').innerHTML = q.diagram || '';
    $('q-diagram').classList.toggle('hidden', !q.diagram);

    $('feedback-card').classList.add('hidden');
    $('fb-review').classList.add('hidden');
    ['q-options', 'q-input', 'q-short', 'q-paper'].forEach(id => $(id).classList.add('hidden'));
    $('exam-nav').classList.toggle('hidden', !exam);

    const prior = exam ? S.test.ans[q.id] : undefined;
    const done = !exam && S.results[q.id];

    if (q.type === 'mcq') {
      $('q-options').classList.remove('hidden');
      renderOptions(q, exam ? prior : undefined);
      if (done) lockOptions(q, done.value);
    } else if (q.type === 'paper') {
      $('q-paper').classList.remove('hidden');
      $('paper-ref').innerHTML = (q.ref ? `📖 ${Util.esc(q.ref)} · ` : '') + 'Draw this in your exercise book, then tap the button. A parent will check it later.';
      const waiting = Store.isPaperWaiting(subj.id, q.id);
      $('btn-paper-done').classList.toggle('hidden', !!done || waiting);
      if (waiting && !done) $('paper-ref').innerHTML += ' <strong>Already done — waiting for a parent to check.</strong>';
    } else if (q.type === 'short') {
      $('q-short').classList.remove('hidden');
      const ta = $('short-answer');
      ta.value = exam ? (prior || '') : done ? done.value : '';
      ta.disabled = !!done;
      $('btn-submit-short').classList.toggle('hidden', exam || !!done);
      if (!done) ta.focus();
    } else {
      $('q-input').classList.remove('hidden');
      const inp = $('answer-input');
      inp.value = exam ? (prior || '') : done ? done.value : '';
      inp.className = done ? (done.correct ? 'input-correct' : 'input-wrong') : '';
      inp.disabled = !!done;
      $('btn-submit').classList.toggle('hidden', exam || !!done);
      if (!done) inp.focus();
    }
    if (done && done.paper) { S.answered = true; showPaperSaved(q, false); }
    else if (done) { S.answered = true; showFeedback(done.correct, q, false); }

    if (exam) {
      $('btn-exam-prev').disabled = S.index === 0;
      $('btn-exam-next').textContent = S.index === S.questions.length - 1 ? 'Review & submit →' : 'Next →';
    }
    setSidebarCurrent(S.index);
    refreshNoteBtn(q.id);
    $('note-panel').classList.add('hidden');
    $('note-text').value = Store.getNote(subj.id, q.id);
  }

  function updateScoreLive() {
    if (S.mode === 'weekly') { $('quiz-score-live').textContent = ''; return; }
    const r = Object.values(S.results).filter(x => !x.paper), ok = r.filter(x => x.correct).length;
    $('quiz-score-live').textContent = `✓ ${ok}  ✗ ${r.length - ok}`;
  }

  function renderOptions(q, selected) {
    const div = $('q-options');
    div.innerHTML = '';
    const order = S.order[q.id] || (S.order[q.id] = Util.optionOrder(q));
    order.forEach((orig, pos) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn' + (selected === orig ? ' selected' : '');
      btn.dataset.orig = orig;
      btn.innerHTML = `<strong>${LABELS[pos]}.</strong> ${q.options[orig]}`;
      btn.onclick = () => selectOption(orig, q);
      div.appendChild(btn);
    });
  }

  function lockOptions(q, chosen) {
    document.querySelectorAll('.option-btn').forEach(b => {
      const i = Number(b.dataset.orig);
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      else if (i === chosen) b.classList.add('wrong');
    });
  }

  function selectOption(orig, q) {
    if (S.mode === 'weekly') {
      S.test.ans[q.id] = orig;
      document.querySelectorAll('.option-btn').forEach(b => b.classList.toggle('selected', Number(b.dataset.orig) === orig));
      markDirty();
      return;
    }
    if (S.answered) return;
    S.answered = true;
    lockOptions(q, orig);
    handleResult(q, orig, orig === q.answer);
  }

  function submitInput() {
    const q = S.questions[S.index];
    const inp = $('answer-input');
    if (S.mode === 'weekly') { saveCurrentWeeklyInput(); return examNext(); }
    if (S.answered) return;
    const raw = inp.value.trim();
    if (!raw) { inp.focus(); return; }
    S.answered = true;
    inp.disabled = true;
    $('btn-submit').classList.add('hidden');
    const correct = Util.checkInputAnswer(raw, q);
    inp.classList.add(correct ? 'input-correct' : 'input-wrong');
    handleResult(q, raw, correct);
  }

  function submitShort() {
    if (S.answered) return;
    const q = S.questions[S.index];
    const ta = $('short-answer');
    const text = ta.value.trim();
    if (!text) { ta.focus(); return; }
    S.answered = true;
    S.pendingShort = text;
    ta.disabled = true;
    $('btn-submit-short').classList.add('hidden');
    $('feedback-card').classList.remove('hidden');
    $('fb-icon').textContent = '🧐';
    $('fb-heading').textContent = 'Parent check — compare with the model answer:';
    $('fb-heading').className = 'fb-heading';
    $('fb-explanation').innerHTML = '';
    $('btn-next').classList.add('hidden');
    $('fb-review-text').textContent = text;
    $('fb-model-text').innerHTML = q.answer;
    $('fb-review').classList.remove('hidden');
  }

  function submitPaper() {
    if (S.answered) return;
    const q = S.questions[S.index];
    S.answered = true;
    Store.setPaper(subj.id, q.id, 1);
    S.results[q.id] = { value: '(on paper)', paper: true };
    $('btn-paper-done').classList.add('hidden');
    paintSidebar(S.index);
    updateFinishBtn();
    showPaperSaved(q, true);
  }

  function showPaperSaved(q, animate) {
    const fb = $('feedback-card');
    fb.classList.remove('hidden');
    $('btn-next').classList.remove('hidden');
    $('fb-icon').textContent = '✏️';
    $('fb-heading').textContent = 'Saved — a parent will check your drawing';
    $('fb-heading').className = 'fb-heading';
    $('fb-explanation').innerHTML = q.explanation ? `<p><strong>Check yourself first:</strong></p>${q.explanation}` : '';
    $('btn-next').textContent = S.index >= S.questions.length - 1 ? 'Finish →' : 'Next question →';
    if (animate) { fb.classList.add('pop'); setTimeout(() => fb.classList.remove('pop'), 300); }
  }

  function markShort(correct) {
    const q = S.questions[S.index];
    $('fb-review').classList.add('hidden');
    handleResult(q, S.pendingShort, correct);
  }

  // Practice / daily: record, update sidebar, show feedback.
  function handleResult(q, value, correct) {
    S.results[q.id] = { value, correct };
    Store.recordAnswer(subj.id, q.id, correct, MODE_EV[S.mode]);
    if (S.mode === 'daily') {
      S.test.ans[q.id] = value;
      S.test.marks[q.id] = correct ? 1 : 0;
      Store.putTest(S.test);
    }
    updateScoreLive();
    paintSidebar(S.index);
    updateFinishBtn();
    showFeedback(correct, q, true);
  }

  function showFeedback(correct, q, animate) {
    const fb = $('feedback-card');
    fb.classList.remove('hidden');
    $('btn-next').classList.remove('hidden');
    $('fb-icon').textContent = correct ? '🎉' : '💡';
    $('fb-heading').textContent = correct ? 'Correct! Well done!' : 'Not quite — but now you know!';
    $('fb-heading').className = 'fb-heading ' + (correct ? 'correct-heading' : 'wrong-heading');
    $('fb-explanation').innerHTML = (q.type !== 'mcq' && !correct ? `<p><strong>Answer:</strong> ${q.answer}</p>` : '') + (q.explanation || '');
    $('btn-next').textContent = S.index >= S.questions.length - 1 ? 'Finish →' : 'Next question →';
    if (animate) { fb.classList.add('pop'); setTimeout(() => fb.classList.remove('pop'), 300); }
  }

  function nextQuestion() {
    // Skip past questions already done in this session.
    let i = S.index + 1;
    while (i < S.questions.length && S.results[S.questions[i].id]) i++;
    if (i >= S.questions.length) {
      const firstOpen = S.questions.findIndex(q => !S.results[q.id]);
      if (firstOpen >= 0 && S.mode === 'daily' &&
          confirm(`You skipped ${S.questions.filter(q => !S.results[q.id]).length} question(s). Go back to them?`)) {
        S.index = firstOpen; return renderQuestion();
      }
      return finish();
    }
    S.index = i;
    renderQuestion();
  }

  // ── Weekly exam mode ───────────────────────────────────────
  function markDirty() { dirty = true; paintSidebar(S.index); }

  function saveCurrentWeeklyInput() {
    if (!S || S.mode !== 'weekly') return;
    const q = S.questions[S.index];
    if (q.type === 'input') S.test.ans[q.id] = $('answer-input').value.trim();
    if (q.type === 'short') S.test.ans[q.id] = $('short-answer').value.trim();
    markDirty();
  }

  function saveWeekly() {
    saveCurrentWeeklyInput();
    if (dirty) { Store.putTest(S.test); dirty = false; }
  }

  function examPrev() { saveWeekly(); if (S.index > 0) { S.index--; renderQuestion(); } }
  function examNext() {
    saveWeekly();
    if (S.index < S.questions.length - 1) { S.index++; renderQuestion(); }
    else confirmSubmit();
  }

  function confirmSubmit() {
    saveWeekly();
    const left = S.questions.filter(q => !hasAnswer(S.test.ans[q.id])).length;
    const msg = left ? `You have ${left} unanswered question(s). Submit anyway?` : 'Submit your test? You can\'t change answers after this.';
    if (confirm(msg)) submitWeekly(false);
  }

  function startTimer() {
    stopTimer();
    $('timer').classList.remove('hidden');
    const tick = () => {
      const left = (S.test.deadline - Date.now()) / 1000;
      $('timer').textContent = '⏱ ' + Util.fmtClock(left);
      $('timer').classList.toggle('timer-low', left < 120);
      if (dirty && Math.floor(left) % 5 === 0) saveWeekly();
      if (left <= 0) { stopTimer(); saveWeekly(); submitWeekly(true); alert("Time's up! Your test has been submitted."); }
    };
    tick();
    timerId = setInterval(tick, 1000);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  // Grade everything auto-gradable; short answers go to the parent.
  function submitWeekly(auto) {
    stopTimer();
    $('timer').classList.add('hidden');
    const t = S.test;
    if (!t.submitted) {
      if (!auto) saveCurrentWeeklyInput();
      t.submitted = Math.min(Date.now(), t.deadline);
      S.questions.forEach(q => {
        const v = t.ans[q.id];
        if (!hasAnswer(v)) t.marks[q.id] = 0;
        else if (q.type === 'mcq') t.marks[q.id] = v === q.answer ? 1 : 0;
        else if (q.type === 'input') t.marks[q.id] = Util.checkInputAnswer(String(v), q) ? 1 : 0;
      });
      Store.putTest(t);
    }
    const pending = S.questions.filter(q => !(q.id in t.marks));
    if (pending.length) renderMarking(pending);
    else finalizeWeekly();
  }

  function renderMarking(pending) {
    $('btn-back').classList.remove('hidden');
    $('mark-list').innerHTML = pending.map((q, i) => `
      <div class="card mark-item" id="mark-${i}">
        <div class="topic-badge">${Util.esc(q.topic)}</div>
        <div class="question-text">${q.question}</div>
        <div class="fb-review">
          <div class="fb-review-student"><div class="fb-review-label">Student's answer</div>
            <div class="fb-review-text">${Util.esc(S.test.ans[q.id])}</div></div>
          <div class="fb-review-model"><div class="fb-review-label">Model answer</div>
            <div class="fb-model-text">${q.answer}</div></div>
          <div class="fb-mark-actions">
            <button class="btn-mark-correct" onclick="App.markPending('${q.id}',1,${i})">✓ Got it</button>
            <button class="btn-mark-wrong" onclick="App.markPending('${q.id}',0,${i})">✗ Not yet</button>
          </div>
        </div>
      </div>`).join('');
    showView('view-mark');
  }

  function markPending(qid, ok, i) {
    S.test.marks[qid] = ok;
    Store.putTest(S.test);
    const el = $(`mark-${i}`);
    el.classList.add(ok ? 'mark-ok' : 'mark-bad');
    el.querySelectorAll('button').forEach(b => b.disabled = true);
    if (S.questions.every(q => q.id in S.test.marks)) finalizeWeekly();
  }

  function finalizeWeekly() {
    const t = S.test;
    if (!t.end) {
      t.end = t.submitted;
      t.total = S.questions.length;
      t.score = S.questions.filter(q => t.marks[q.id]).length;
      S.questions.forEach(q => { if (hasAnswer(t.ans[q.id])) Store.recordAnswer(subj.id, q.id, !!t.marks[q.id], 'w'); });
      Store.putTest(t);
      Sync.syncNow();
    }
    showTestResults(t);
  }

  // ── Results ────────────────────────────────────────────────
  function finish() {
    if (S.mode === 'weekly') return confirmSubmit();
    if (S.mode === 'daily') {
      const t = S.test;
      t.end = Date.now();
      t.total = Object.keys(t.marks).length;
      t.score = Object.values(t.marks).filter(Boolean).length;
      if (!t.total) { t.void = true; Store.putTest(t); return goHome(); }
      Store.putTest(t);
      Sync.syncNow();
      return showTestResults(t);
    }
    const items = S.questions.filter(q => S.results[q.id] && !S.results[q.id].paper).map(q => ({ q, value: S.results[q.id].value, correct: S.results[q.id].correct }));
    if (!items.length) return goHome();
    showResults(items, { retry: S.mode === 'practice' });
  }

  function showTestResults(t) {
    const items = t.qs.map(id => byId.get(id)?.q).filter(Boolean)
      .filter(q => t.kind === 'weekly' || q.id in t.marks)
      .map(q => ({ q, value: t.ans[q.id], correct: !!t.marks[q.id] }));
    const mins = Math.round(((t.end || Date.now()) - t.start) / 60000);
    showResults(items, { sub: `${t.kind === 'weekly' ? 'Timed' : 'Daily'} test · ${Util.fmtDate(t.start)} · ${mins} min` });
  }

  function reviewTest(id) {
    const t = Store.getTest(id);
    if (!t) return;
    S = { mode: 'review', questions: [], results: {} };
    $('btn-back').classList.remove('hidden');
    showTestResults(t);
  }

  function showResults(items, { retry = false, sub = '' } = {}) {
    stopTimer();
    const total = items.length, correct = items.filter(i => i.correct).length;
    const p = Math.round(100 * correct / total);
    const [emoji, title, msg] =
        p === 100 ? ['🏆', 'Perfect score!', 'Every answer correct — brilliant! 🌟']
      : p >= 80 ? ['⭐', 'Great work!', `${p}% — really solid.`]
      : p >= 60 ? ['💪', 'Good effort!', `${p}% — look through the ones you missed below.`]
      : ['📚', 'Keep practising!', `${p}% — read the explanations below, then try again tomorrow.`];
    $('results-emoji').textContent = emoji;
    $('results-title').textContent = title;
    $('results-msg').textContent = (sub ? sub + ' — ' : '') + msg;
    $('results-score').innerHTML = `<span class="results-score-num">${correct}</span><span class="results-score-sep">/</span>
      <span class="results-score-total">${total}</span>
      <span class="results-score-pct ${p >= 80 ? 'pct-great' : p >= 60 ? 'pct-ok' : 'pct-low'}">${p}%</span>`;

    const fmt = (q, v) => !hasAnswer(v) ? '<em>No answer</em>'
      : q.type === 'mcq' ? q.options[v] : Util.esc(v);
    $('results-breakdown').innerHTML = items.map(({ q, value, correct: ok }) => `
      <details class="breakdown-item ${ok ? '' : 'breakdown-wrong'}">
        <summary><span class="breakdown-icon">${ok ? '✅' : '❌'}</span>
          <span class="breakdown-q">${Util.esc(Util.stripTags(q.question, 80))}</span></summary>
        <div class="breakdown-detail">
          <div class="question-text">${q.question}</div>
          ${q.diagram ? `<div class="q-diagram">${q.diagram}</div>` : ''}
          <p><strong>Your answer:</strong> ${fmt(q, value)}</p>
          ${ok ? '' : `<p><strong>Correct answer:</strong> ${q.type === 'mcq' ? q.options[q.answer] : q.answer}</p>`}
          ${q.explanation ? `<div class="fb-explanation">${q.explanation}</div>` : ''}
        </div>
      </details>`).join('');

    const wrong = total - correct;
    $('btn-retry-wrong').classList.toggle('hidden', !(retry && wrong));
    $('btn-retry-wrong').textContent = `Retry ${wrong} wrong answer${wrong > 1 ? 's' : ''}`;
    showView('view-results');
  }

  function retryWrong() { startPractice(S.chapter, true, S.level); }

  // ── Notes ──────────────────────────────────────────────────
  function refreshNoteBtn(qid) {
    const has = !!Store.getNote(subj.id, qid);
    $('btn-note').classList.toggle('has-note', has);
    $('btn-note').textContent = has ? '📝 Edit note' : '📝 Leave a note';
  }
  function toggleNote() {
    const p = $('note-panel'), opening = p.classList.contains('hidden');
    p.classList.toggle('hidden', !opening);
    if (opening) $('note-text').focus();
  }
  function cancelNote() { $('note-panel').classList.add('hidden'); }
  function saveNote() {
    const q = S.questions[S.index];
    Store.setNote(subj.id, q.id, $('note-text').value);
    $('note-panel').classList.add('hidden');
    refreshNoteBtn(q.id);
    const el = $(`si-${S.index}`)?.querySelector('.si-topic');
    if (el) el.textContent = q.topic + star(q) + (Store.getNote(subj.id, q.id) ? ' 📝' : '');
  }
  function openNotes() {
    const list = Store.notes(subj.id);
    $('notes-list').innerHTML = list.length ? list.map(n => {
      const hit = byId.get(n.qid);
      return `<div class="notes-entry">
        <div class="notes-entry-meta">${hit ? `Ch. ${hit.ch.id}: ${Util.esc(hit.ch.title)} · ${Util.esc(hit.q.topic)}` : 'Question no longer in the quiz'}
          <span style="opacity:.6;font-weight:400">(${Util.esc(n.qid)})</span></div>
        ${hit ? `<div class="notes-entry-q">${Util.esc(Util.stripTags(hit.q.question))}</div>` : ''}
        <div class="notes-entry-note">${Util.esc(n.text)}</div></div>`;
    }).join('') : '<p class="notes-empty">No notes yet.</p>';
    $('notes-overlay').classList.remove('hidden');
  }
  function closeNotes() { $('notes-overlay').classList.add('hidden'); }

  // ── Keyboard ───────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (!S || $('view-quiz').classList.contains('hidden')) return;
    if (e.target.tagName === 'TEXTAREA') return;
    if (e.key !== 'Enter') return;
    if (e.target.id === 'answer-input' && (!S.answered || S.mode === 'weekly')) { e.preventDefault(); return submitInput(); }
    // Advance only when Next is visible (short answers wait for the parent's mark).
    if (S.answered && !$('feedback-card').classList.contains('hidden') && !$('btn-next').classList.contains('hidden')) nextQuestion();
  });

  window.addEventListener('beforeunload', () => { if (S && S.mode === 'weekly' && !S.test.submitted) saveWeekly(); });

  document.addEventListener('DOMContentLoaded', init);

  return { goHome, startDaily, startWeekly, openWeekly, allowRetake, reviewTest, submitInput, submitShort, markShort,
           submitPaper, markPaper,
           nextQuestion, finish, retryWrong, examPrev, examNext, confirmSubmit, markPending,
           toggleNote, cancelNote, saveNote, openNotes, closeNotes };
})();
