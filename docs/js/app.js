/* ── Notes ────────────────────────────────────────────────────
   Parent feedback notes, stored in localStorage by question ID.
──────────────────────────────────────────────────────────────── */
const Notes = (() => {
  function getKey() {
    return (typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG.notesKey)
      ? SUBJECT_CONFIG.notesKey : 'maths6_notes';
  }
  function all() { return JSON.parse(localStorage.getItem(getKey()) || '{}'); }
  function get(qId) { return all()[qId] || ''; }
  function set(qId, text) {
    const d = all();
    if (text.trim()) d[qId] = text.trim();
    else delete d[qId];
    localStorage.setItem(getKey(), JSON.stringify(d));
  }
  function count() { return Object.keys(all()).length; }
  return { all, get, set, count };
})();

/* ── App ──────────────────────────────────────────────────────
   Main application controller.
   Depends on: CHAPTERS (chapters.js), Progress (progress.js)
──────────────────────────────────────────────────────────────── */
const App = (() => {

  // ── State ──────────────────────────────────────────────────
  let state = {
    chapter: null,
    questions: [],
    index: 0,
    sessionCorrect: 0,
    sessionAnswers: [],  // [{id, correct}] — unique per question, for results
    sessionMap: {},      // {questionId: correct} — O(1) lookup for sidebar
    answered: false,
    retryMode: false
  };

  // ── Boot ───────────────────────────────────────────────────
  function init() { renderHome(); }

  // ── Navigation ─────────────────────────────────────────────
  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }

  function goHome() {
    document.getElementById('btn-back').classList.add('hidden');
    document.getElementById('header-right').textContent = '';
    showView('view-home');
    renderHome();
  }

  // ── Home View ──────────────────────────────────────────────
  function renderHome() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning, Pragathy! ☀️'
                   : hour < 17 ? 'Hey Pragathy! 👋'
                   : 'Good evening, Pragathy! 🌙';
    document.getElementById('home-greeting').textContent = greeting;

    const notesCta = document.getElementById('notes-cta');
    const nc = Notes.count();
    if (nc > 0) {
      notesCta.classList.remove('hidden');
      document.getElementById('notes-count').textContent = nc;
    } else {
      notesCta.classList.add('hidden');
    }

    const overall = Progress.getOverallStats(CHAPTERS);
    const bar  = document.getElementById('overall-bar');
    const fill = document.getElementById('overall-bar-fill');
    const lbl  = document.getElementById('overall-bar-label');
    if (overall.total > 0) {
      bar.classList.remove('hidden');
      fill.style.width = overall.pct + '%';
      lbl.textContent  = `Overall: ${overall.correct}/${overall.total} (${overall.pct}%)`;
    }

    const grid = document.getElementById('chapter-grid');
    grid.innerHTML = '';
    CHAPTERS.forEach(ch => {
      const stats = Progress.getChapterStats(ch.id, ch.questions.length);
      grid.appendChild(makeChapterCard(ch, stats));
    });
  }

  function makeChapterCard(ch, stats) {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.style.setProperty('--card-color', ch.color);
    card.onclick = () => startChapter(ch);

    const progPct = Math.round((stats.correct / ch.questions.length) * 100);
    const answered = stats.answered;
    const inProgress = answered > 0 && !stats.done;

    card.innerHTML = `
      <div class="ch-top">
        <span class="ch-icon">${ch.icon}</span>
        <span class="ch-num">Ch. ${ch.id}</span>
      </div>
      <div class="ch-title">${ch.title}</div>
      <div class="ch-topics">${ch.topics.slice(0, 3).join(' · ')}</div>
      <div class="ch-progress">
        <div class="ch-prog-track"><div class="ch-prog-fill" style="width:${progPct}%"></div></div>
        <span class="ch-prog-label">
          ${stats.correct > 0
            ? `${stats.correct}/${ch.questions.length} correct (${progPct}%)`
            : `${ch.questions.length} questions`}
        </span>
        ${stats.done
          ? '<span class="ch-badge-done">✓ Completed</span>'
          : inProgress
            ? `<span class="ch-badge-progress">▶ In progress (${answered} done)</span>`
            : ''}
      </div>
    `;
    return card;
  }

  // ── Start Chapter ─────────────────────────────────────────
  function startChapter(ch, wrongOnly = false) {
    state.chapter   = ch;
    state.retryMode = wrongOnly;
    state.sessionCorrect  = 0;
    state.sessionAnswers  = [];
    state.sessionMap      = {};
    state.answered        = false;

    if (wrongOnly) {
      state.questions = ch.questions.filter(q => {
        const h = Progress.getQuestionHistory(ch.id, q.id);
        return !h || !h.correct;
      });
      if (state.questions.length === 0) {
        alert("You've got all questions correct already! 🎉");
        return;
      }
      state.index = 0;
    } else {
      state.questions = [...ch.questions];
      // Resume from first unanswered question
      const firstUnanswered = state.questions.findIndex(q =>
        !Progress.getQuestionHistory(ch.id, q.id)
      );
      // If all answered already → start from 0 (review mode)
      state.index = firstUnanswered >= 0 ? firstUnanswered : 0;
    }

    document.getElementById('btn-back').classList.remove('hidden');
    document.getElementById('quiz-title').textContent = `Ch. ${ch.id}: ${ch.title}`;

    renderSidebar();
    showView('view-quiz');
    renderQuestion();
  }

  // ── Sidebar ───────────────────────────────────────────────
  function renderSidebar() {
    const list = document.getElementById('sidebar-list');
    list.innerHTML = '';
    state.questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.className = 'si-item';
      btn.id = `si-${i}`;
      btn.onclick = () => jumpToQuestion(i);
      btn.title = `Q${i + 1}: ${q.topic}`;

      const h = Progress.getQuestionHistory(state.chapter.id, q.id);
      const status = h ? (h.correct ? 'correct' : 'wrong') : 'grey';
      if (status !== 'grey') btn.classList.add(`si-${status}`);

      btn.innerHTML = `
        <span class="si-num">${i + 1}</span>
        <span class="si-topic">${q.topic}${q.difficulty === 'challenging' ? ' ⭐' : ''}${Notes.get(q.id) ? ' 📝' : ''}</span>
        <span class="si-dot"></span>
      `;
      list.appendChild(btn);
    });
    updateFinishBtn();
  }

  function updateSidebarItem(index) {
    const q   = state.questions[index];
    const btn = document.getElementById(`si-${index}`);
    if (!btn) return;
    btn.classList.remove('si-correct', 'si-wrong');

    // Session result takes priority; fall back to persistent history
    const sessionResult = state.sessionMap[q.id];
    if (sessionResult !== undefined) {
      btn.classList.add(sessionResult ? 'si-correct' : 'si-wrong');
    } else {
      const h = Progress.getQuestionHistory(state.chapter.id, q.id);
      if (h) btn.classList.add(h.correct ? 'si-correct' : 'si-wrong');
    }
  }

  function setSidebarCurrent(index) {
    document.querySelectorAll('.si-item').forEach(el => el.classList.remove('si-current'));
    const curr = document.getElementById(`si-${index}`);
    if (curr) {
      curr.classList.add('si-current');
      curr.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function updateFinishBtn() {
    const btn = document.getElementById('btn-finish-quiz');
    if (!btn) return;
    const anyAnswered = state.sessionAnswers.length > 0;
    btn.classList.toggle('hidden', !anyAnswered);
  }

  // ── Jump to any question ──────────────────────────────────
  function jumpToQuestion(index) {
    state.index   = index;
    state.answered = false;
    document.getElementById('feedback-card').classList.add('hidden');
    const fbReview = document.getElementById('fb-review');
    if (fbReview) fbReview.classList.add('hidden');
    renderQuestion();
  }

  // ── Render Question ───────────────────────────────────────
  function renderQuestion() {
    const q = state.questions[state.index];
    state.answered = false;

    // Progress bar reflects overall chapter completion
    const doneCount = state.questions.filter(q2 => {
      return state.sessionMap[q2.id] !== undefined
          || !!Progress.getQuestionHistory(state.chapter.id, q2.id);
    }).length;
    const pct = Math.round((doneCount / state.questions.length) * 100);
    document.getElementById('quiz-prog-fill').style.width = pct + '%';
    document.getElementById('quiz-counter').textContent =
      `Question ${state.index + 1} of ${state.questions.length}`;
    document.getElementById('quiz-score-live').textContent =
      `✓ ${state.sessionCorrect}  ✗ ${state.sessionAnswers.length - state.sessionCorrect}`;

    // History badge
    const history = Progress.getQuestionHistory(state.chapter.id, q.id);
    let badge = '';
    if (history) {
      badge = history.correct
        ? ' <span style="font-size:.75rem;background:#dcfce7;color:#16a34a;padding:2px 7px;border-radius:99px;margin-left:6px;">Got it before ✓</span>'
        : ' <span style="font-size:.75rem;background:#fff1f2;color:#e11d48;padding:2px 7px;border-radius:99px;margin-left:6px;">Missed before</span>';
    }

    // Difficulty badge
    const topicEl = document.getElementById('q-topic');
    topicEl.textContent = q.topic;
    const stretchBadge = document.getElementById('q-stretch-badge');
    if (q.difficulty === 'challenging') {
      stretchBadge.classList.remove('hidden');
    } else {
      stretchBadge.classList.add('hidden');
    }

    document.getElementById('q-topic').textContent = q.topic;
    document.getElementById('q-text').innerHTML = q.question + badge;
    const diagDiv = document.getElementById('q-diagram');
    if (q.diagram) {
      diagDiv.innerHTML = q.diagram;
      diagDiv.classList.remove('hidden');
    } else {
      diagDiv.innerHTML = '';
      diagDiv.classList.add('hidden');
    }
    const fb = document.getElementById('feedback-card');
    fb.classList.add('hidden');
    const fbReview = document.getElementById('fb-review');
    if (fbReview) fbReview.classList.add('hidden');

    const optDiv   = document.getElementById('q-options');
    const inputDiv = document.getElementById('q-input');
    const shortDiv = document.getElementById('q-short');
    const inp      = document.getElementById('answer-input');

    if (q.type === 'mcq') {
      optDiv.classList.remove('hidden');
      inputDiv.classList.add('hidden');
      if (shortDiv) shortDiv.classList.add('hidden');
      renderOptions(q);
    } else if (q.type === 'short') {
      optDiv.classList.add('hidden');
      inputDiv.classList.add('hidden');
      if (shortDiv) {
        shortDiv.classList.remove('hidden');
        const ta = document.getElementById('short-answer');
        ta.value = '';
        ta.disabled = false;
        document.getElementById('btn-submit-short').disabled = false;
        ta.focus();
      }
    } else {
      optDiv.classList.add('hidden');
      inputDiv.classList.remove('hidden');
      if (shortDiv) shortDiv.classList.add('hidden');
      inp.value = '';
      inp.className = '';
      inp.disabled = false;
      document.getElementById('btn-submit').disabled = false;
      inp.focus();
    }

    setSidebarCurrent(state.index);

    // Note button state
    _refreshNoteBtn(q.id);
    document.getElementById('note-panel').classList.add('hidden');
    document.getElementById('note-text').value = Notes.get(q.id);
  }

  function _refreshNoteBtn(qId) {
    const btn = document.getElementById('btn-note');
    if (!btn) return;
    const hasNote = !!Notes.get(qId);
    btn.classList.toggle('has-note', hasNote);
    btn.textContent = hasNote ? '📝 Edit note' : '📝 Leave a note';
  }

  function renderOptions(q) {
    const div = document.getElementById('q-options');
    div.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<strong>${labels[i]}.</strong> ${opt}`;
      btn.onclick = () => selectOption(btn, i, q);
      div.appendChild(btn);
    });
  }

  function selectOption(btn, index, q) {
    if (state.answered) return;
    state.answered = true;
    const correct = index === q.answer;
    document.querySelectorAll('.option-btn').forEach((b, i) => {
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      else if (i === index && !correct) b.classList.add('wrong');
    });
    handleResult(correct, q);
  }

  function submitInput() {
    if (state.answered) return;
    const q   = state.questions[state.index];
    const inp = document.getElementById('answer-input');
    const raw = inp.value.trim();
    if (!raw) { inp.focus(); return; }

    state.answered = true;
    inp.disabled = true;
    document.getElementById('btn-submit').disabled = true;

    const correct = checkInputAnswer(raw, q);
    inp.classList.add(correct ? 'input-correct' : 'input-wrong');
    handleResult(correct, q);
  }

  function checkInputAnswer(raw, q) {
    const normalize = s => s.trim().toLowerCase().replace(/,/g, '').replace(/\s+/g, ' ');
    const user = normalize(raw);
    const accepted = q.acceptableAnswers
      ? q.acceptableAnswers.map(normalize)
      : [normalize(q.answer)];
    if (accepted.includes(user)) return true;
    const uNum = parseFloat(user.replace(/[^\d.\-]/g, ''));
    const aNum = parseFloat(normalize(q.answer).replace(/[^\d.\-]/g, ''));
    if (!isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 0.0001) return true;
    return false;
  }

  // ── Handle answer result ──────────────────────────────────
  function handleResult(correct, q) {
    const prev  = state.sessionMap[q.id];
    const isNew = prev === undefined;

    if (isNew) {
      state.sessionAnswers.push({ id: q.id, correct });
      if (correct) state.sessionCorrect++;
    } else {
      // Re-answer: update existing entry
      const entry = state.sessionAnswers.find(a => a.id === q.id);
      if (entry) {
        if (!entry.correct && correct)  state.sessionCorrect++;
        if (entry.correct  && !correct) state.sessionCorrect--;
        entry.correct = correct;
      }
    }
    state.sessionMap[q.id] = correct;

    Progress.recordAnswer(state.chapter.id, q.id, correct);

    document.getElementById('quiz-score-live').textContent =
      `✓ ${state.sessionCorrect}  ✗ ${state.sessionAnswers.length - state.sessionCorrect}`;

    updateSidebarItem(state.index);
    updateFinishBtn();
    showFeedback(correct, q);
  }

  function showFeedback(correct, q) {
    const fb = document.getElementById('feedback-card');
    fb.classList.remove('hidden');
    const fbReview = document.getElementById('fb-review');
    if (fbReview) fbReview.classList.add('hidden');
    document.getElementById('btn-next').classList.remove('hidden');

    document.getElementById('fb-icon').textContent = correct ? '🎉' : '💡';
    const heading = document.getElementById('fb-heading');
    heading.textContent = correct ? 'Correct! Well done!' : 'Not quite — but now you know!';
    heading.className = 'fb-heading ' + (correct ? 'correct-heading' : 'wrong-heading');
    document.getElementById('fb-explanation').innerHTML = q.explanation;

    const isLast = state.index >= state.questions.length - 1;
    document.getElementById('btn-next').textContent = isLast ? 'Finish →' : 'Next Question →';

    fb.classList.add('pop');
    setTimeout(() => fb.classList.remove('pop'), 300);
  }

  function nextQuestion() {
    state.index++;
    if (state.index >= state.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  // ── Results ────────────────────────────────────────────────
  function showResults() {
    if (state.sessionAnswers.length === 0) {
      goHome();
      return;
    }

    const total   = state.sessionAnswers.length;
    const correct = state.sessionCorrect;
    const pct     = Math.round((correct / total) * 100);

    let emoji, title, msg;
    if (pct === 100) {
      emoji = '🏆'; title = 'Perfect Score!';
      msg = 'Absolutely brilliant — every answer correct! 🌟';
    } else if (pct >= 80) {
      emoji = '⭐'; title = 'Great Work!';
      msg = `${pct}% — really solid. A bit more review and you'll be unstoppable!`;
    } else if (pct >= 60) {
      emoji = '💪'; title = 'Good Effort!';
      msg = `${pct}% — you're getting there! Try the wrong ones again.`;
    } else {
      emoji = '📚'; title = 'Keep Practising!';
      msg = `${pct}% — the more you practise, the better you'll get. You've got this!`;
    }

    document.getElementById('results-emoji').textContent = emoji;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-msg').textContent   = msg;

    const pctClass = pct >= 80 ? 'pct-great' : pct >= 60 ? 'pct-ok' : 'pct-low';
    document.getElementById('results-score').innerHTML = `
      <span class="results-score-num">${correct}</span>
      <span class="results-score-sep">/</span>
      <span class="results-score-total">${total}</span>
      <span class="results-score-pct ${pctClass}">${pct}%</span>
    `;

    // Breakdown — only questions answered this session
    const bd = document.getElementById('results-breakdown');
    bd.innerHTML = '';
    state.sessionAnswers.forEach(ans => {
      const q   = state.questions.find(q2 => q2.id === ans.id);
      if (!q) return;
      const div = document.createElement('div');
      div.className = 'breakdown-item';
      const qText = q.question.replace(/<[^>]+>/g, '').substring(0, 70) + (q.question.length > 70 ? '…' : '');
      div.innerHTML = `
        <span class="breakdown-icon">${ans.correct ? '✅' : '❌'}</span>
        <span class="breakdown-q">${qText}</span>
        <span class="breakdown-result ${ans.correct ? 'ok' : 'bad'}">${ans.correct ? 'Correct' : 'Wrong'}</span>
      `;
      bd.appendChild(div);
    });

    const wrongCount = state.sessionAnswers.filter(a => !a.correct).length;
    const retryBtn   = document.getElementById('btn-retry-wrong');
    if (wrongCount > 0 && !state.retryMode) {
      retryBtn.classList.remove('hidden');
      retryBtn.textContent = `Retry ${wrongCount} Wrong Answer${wrongCount > 1 ? 's' : ''}`;
    } else {
      retryBtn.classList.add('hidden');
    }

    showView('view-results');
  }

  function retryWrong() {
    startChapter(state.chapter, true);
  }

  // ── Short answer (parent-reviewed) ───────────────────────────
  function submitShort() {
    if (state.answered) return;
    const q  = state.questions[state.index];
    const ta = document.getElementById('short-answer');
    const text = ta.value.trim();
    if (!text) { ta.focus(); return; }

    state.answered = true;
    ta.disabled = true;
    document.getElementById('btn-submit-short').disabled = true;
    state._shortText = text;

    const fb = document.getElementById('feedback-card');
    fb.classList.remove('hidden');
    document.getElementById('fb-icon').textContent = '🧐';
    const heading = document.getElementById('fb-heading');
    heading.textContent = 'Check your answer:';
    heading.className = 'fb-heading';
    document.getElementById('fb-explanation').innerHTML = '';
    document.getElementById('btn-next').classList.add('hidden');

    const fbReview = document.getElementById('fb-review');
    if (fbReview) {
      document.getElementById('fb-review-text').textContent = text;
      document.getElementById('fb-model-text').innerHTML = q.answer;
      fbReview.classList.remove('hidden');
    }

    fb.classList.add('pop');
    setTimeout(() => fb.classList.remove('pop'), 300);
  }

  function markShort(correct) {
    const q = state.questions[state.index];
    handleResult(correct, q);
  }

  // ── Note functions ────────────────────────────────────────
  function toggleNote() {
    const panel = document.getElementById('note-panel');
    const opening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !opening);
    if (opening) document.getElementById('note-text').focus();
  }

  function cancelNote() {
    document.getElementById('note-panel').classList.add('hidden');
  }

  function saveNote() {
    const q = state.questions[state.index];
    Notes.set(q.id, document.getElementById('note-text').value);
    document.getElementById('note-panel').classList.add('hidden');
    _refreshNoteBtn(q.id);
    // Update sidebar indicator for this question
    const sidebarBtn = document.getElementById(`si-${state.index}`);
    if (sidebarBtn) {
      const topicEl = sidebarBtn.querySelector('.si-topic');
      if (topicEl) {
        const base = q.topic + (q.difficulty === 'challenging' ? ' ⭐' : '');
        topicEl.textContent = base + (Notes.get(q.id) ? ' 📝' : '');
      }
    }
  }

  // ── Notes review overlay ──────────────────────────────────
  function openNotes() {
    const entries = Object.entries(Notes.all());
    const list = document.getElementById('notes-list');
    list.innerHTML = '';
    if (entries.length === 0) {
      list.innerHTML = '<p class="notes-empty">No notes yet.</p>';
    } else {
      entries.forEach(([qId, text]) => {
        let chTitle = '', qTopic = '', qText = '';
        for (const ch of CHAPTERS) {
          const q = ch.questions.find(q2 => q2.id === qId);
          if (q) {
            chTitle = `Ch. ${ch.id}: ${ch.title}`;
            qTopic  = q.topic;
            qText   = q.question.replace(/<[^>]+>/g, '').substring(0, 90) + (q.question.length > 90 ? '…' : '');
            break;
          }
        }
        const div = document.createElement('div');
        div.className = 'notes-entry';
        div.innerHTML = `
          <div class="notes-entry-meta">${chTitle} · ${qTopic} <span style="opacity:.6;font-weight:400">(${qId})</span></div>
          <div class="notes-entry-q">${qText}</div>
          <div class="notes-entry-note">${text}</div>
        `;
        list.appendChild(div);
      });
    }
    document.getElementById('notes-overlay').classList.remove('hidden');
  }

  function closeNotes() {
    document.getElementById('notes-overlay').classList.add('hidden');
  }

  // ── Keyboard shortcuts ────────────────────────────────────
  document.addEventListener('keydown', e => {
    const inpDiv = document.getElementById('q-input');
    if (e.key === 'Enter' && !inpDiv.classList.contains('hidden') && !state.answered) {
      submitInput();
    } else if (e.key === 'Enter' && state.answered) {
      const fb = document.getElementById('feedback-card');
      if (!fb.classList.contains('hidden')) nextQuestion();
    }
  });

  return { init, goHome, startChapter, submitInput, submitShort, markShort, nextQuestion, retryWrong, jumpToQuestion, showResults, toggleNote, cancelNote, saveNote, openNotes, closeNotes };
})();

document.addEventListener('DOMContentLoaded', App.init);
