/* ── App ──────────────────────────────────────────────────────
   Main application controller.
   Depends on: CHAPTERS (chapters.js), Progress (progress.js)
──────────────────────────────────────────────────────────────── */
const App = (() => {

  // ── State ──────────────────────────────────────────────────
  let state = {
    chapter: null,       // current chapter object
    questions: [],       // questions for current session
    index: 0,            // current question index
    sessionCorrect: 0,   // correct answers this session
    sessionAnswers: [],  // {id, correct} per question
    answered: false,     // has current question been answered
    retryMode: false     // retrying wrong answers only
  };

  // ── Boot ───────────────────────────────────────────────────
  function init() {
    renderHome();
  }

  // ── Navigation ─────────────────────────────────────────────
  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }

  function goHome() {
    document.getElementById('btn-back').classList.add('hidden');
    document.getElementById('header-right').textContent = '';
    showView('view-home');
    renderHome(); // refresh progress
  }

  // ── Home View ──────────────────────────────────────────────
  function renderHome() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning! ☀️'
                   : hour < 17 ? 'Hello! 👋'
                   : 'Good evening! 🌙';
    document.getElementById('home-greeting').textContent = greeting;

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
        ${stats.done ? '<span class="ch-badge-done">✓ Completed</span>' : ''}
      </div>
    `;
    return card;
  }

  // ── Quiz ───────────────────────────────────────────────────
  function startChapter(ch, wrongOnly = false) {
    state.chapter = ch;
    state.retryMode = wrongOnly;
    state.index = 0;
    state.sessionCorrect = 0;
    state.sessionAnswers = [];
    state.answered = false;

    if (wrongOnly) {
      // Only questions the user got wrong previously
      state.questions = ch.questions.filter(q => {
        const h = Progress.getQuestionHistory(ch.id, q.id);
        return !h || !h.correct;
      });
      if (state.questions.length === 0) {
        alert("You've got all questions correct already! 🎉");
        return;
      }
    } else {
      state.questions = [...ch.questions];
    }

    document.getElementById('btn-back').classList.remove('hidden');
    document.getElementById('quiz-title').textContent = `Ch. ${ch.id}: ${ch.title}`;

    showView('view-quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    state.answered = false;

    // Progress bar
    const pct = Math.round((state.index / state.questions.length) * 100);
    document.getElementById('quiz-prog-fill').style.width = pct + '%';
    document.getElementById('quiz-counter').textContent =
      `Question ${state.index + 1} of ${state.questions.length}`;
    document.getElementById('quiz-score-live').textContent =
      `✓ ${state.sessionCorrect}  ✗ ${state.index - state.sessionCorrect}`;

    // Previous history note
    const history = Progress.getQuestionHistory(state.chapter.id, q.id);
    let badge = '';
    if (history) {
      badge = history.correct
        ? ' <span style="font-size:.75rem;background:#dcfce7;color:#16a34a;padding:2px 7px;border-radius:99px;margin-left:6px;">Got it before ✓</span>'
        : ' <span style="font-size:.75rem;background:#fff1f2;color:#e11d48;padding:2px 7px;border-radius:99px;margin-left:6px;">Missed before</span>';
    }

    document.getElementById('q-topic').textContent = q.topic;
    document.getElementById('q-text').innerHTML = q.question + badge;

    // Hide feedback
    const fb = document.getElementById('feedback-card');
    fb.classList.add('hidden');

    // MCQ or Input
    const optDiv   = document.getElementById('q-options');
    const inputDiv = document.getElementById('q-input');
    const inp      = document.getElementById('answer-input');

    if (q.type === 'mcq') {
      optDiv.classList.remove('hidden');
      inputDiv.classList.add('hidden');
      renderOptions(q);
    } else {
      optDiv.classList.add('hidden');
      inputDiv.classList.remove('hidden');
      inp.value = '';
      inp.className = '';
      inp.disabled = false;
      document.getElementById('btn-submit').disabled = false;
      inp.focus();
    }
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
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach((b, i) => {
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
    // Try numeric comparison
    const uNum = parseFloat(user.replace(/[^\d.\-]/g, ''));
    const aNum = parseFloat(normalize(q.answer).replace(/[^\d.\-]/g, ''));
    if (!isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 0.0001) return true;
    return false;
  }

  function handleResult(correct, q) {
    state.sessionAnswers.push({ id: q.id, correct });
    if (correct) state.sessionCorrect++;

    Progress.recordAnswer(state.chapter.id, q.id, correct);

    // Update live score
    document.getElementById('quiz-score-live').textContent =
      `✓ ${state.sessionCorrect}  ✗ ${state.sessionAnswers.length - state.sessionCorrect}`;

    showFeedback(correct, q);
  }

  function showFeedback(correct, q) {
    const fb = document.getElementById('feedback-card');
    fb.classList.remove('hidden');

    document.getElementById('fb-icon').textContent = correct ? '🎉' : '💡';
    const heading = document.getElementById('fb-heading');
    heading.textContent = correct ? 'Correct! Well done!' : 'Not quite — but now you know!';
    heading.className = 'fb-heading ' + (correct ? 'correct-heading' : 'wrong-heading');

    document.getElementById('fb-explanation').innerHTML = q.explanation;

    const btnNext = document.getElementById('btn-next');
    const isLast  = state.index >= state.questions.length - 1;
    btnNext.textContent = isLast ? 'See Results →' : 'Next Question →';

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
    const total   = state.questions.length;
    const correct = state.sessionCorrect;
    const pct     = Math.round((correct / total) * 100);

    let emoji, title, msg;
    if (pct === 100) {
      emoji = '🏆'; title = 'Perfect Score!';
      msg = 'Absolutely brilliant — you got every single question right! 🌟';
    } else if (pct >= 80) {
      emoji = '⭐'; title = 'Great Work!';
      msg = `${pct}% — that's really solid. A little more review and you'll be unstoppable!`;
    } else if (pct >= 60) {
      emoji = '💪'; title = 'Good Effort!';
      msg = `${pct}% — you're getting there! Try the wrong ones again to boost your score.`;
    } else {
      emoji = '📚'; title = 'Keep Practising!';
      msg = `${pct}% this time — the more you practise, the better you'll get. You've got this!`;
    }

    document.getElementById('results-emoji').textContent = emoji;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-msg').textContent   = msg;

    // Score block
    const pctClass = pct >= 80 ? 'pct-great' : pct >= 60 ? 'pct-ok' : 'pct-low';
    document.getElementById('results-score').innerHTML = `
      <span class="results-score-num">${correct}</span>
      <span class="results-score-sep">/</span>
      <span class="results-score-total">${total}</span>
      <span class="results-score-pct ${pctClass}">${pct}%</span>
    `;

    // Breakdown
    const bd = document.getElementById('results-breakdown');
    bd.innerHTML = '';
    state.sessionAnswers.forEach((ans, i) => {
      const q   = state.questions[i];
      const div = document.createElement('div');
      div.className = 'breakdown-item';
      // Strip HTML tags for display
      const qText = q.question.replace(/<[^>]+>/g, '').substring(0, 70) + (q.question.length > 70 ? '…' : '');
      div.innerHTML = `
        <span class="breakdown-icon">${ans.correct ? '✅' : '❌'}</span>
        <span class="breakdown-q">${qText}</span>
        <span class="breakdown-result ${ans.correct ? 'ok' : 'bad'}">${ans.correct ? 'Correct' : 'Wrong'}</span>
      `;
      bd.appendChild(div);
    });

    // Show "Retry wrong" button if any wrong
    const wrongCount = total - correct;
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

  // ── Enter key for input ────────────────────────────────────
  document.addEventListener('keydown', e => {
    const inpDiv = document.getElementById('q-input');
    if (e.key === 'Enter' && !inpDiv.classList.contains('hidden') && !state.answered) {
      submitInput();
    } else if (e.key === 'Enter' && state.answered) {
      const fb = document.getElementById('feedback-card');
      if (!fb.classList.contains('hidden')) nextQuestion();
    }
  });

  return { init, goHome, startChapter, submitInput, nextQuestion, retryWrong };
})();

// Boot when DOM is ready
document.addEventListener('DOMContentLoaded', App.init);
