/* ── Progress ─────────────────────────────────────────────────
   Persists quiz results in localStorage.
   Key: "maths6_progress"
   Shape: { ch1: { questions: { c1_q1: { correct:bool, attempts:n } } } }
──────────────────────────────────────────────────────────────── */
const Progress = (() => {
  const KEY = 'maths6_progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function recordAnswer(chapterId, questionId, correct) {
    const data = load();
    if (!data[chapterId]) data[chapterId] = { questions: {} };
    const q = data[chapterId].questions[questionId] || { correct: false, attempts: 0 };
    q.attempts += 1;
    if (correct) q.correct = true;   // once correct, stays correct
    data[chapterId].questions[questionId] = q;
    save(data);
  }

  function getChapterStats(chapterId, totalQuestions) {
    const data = load();
    const ch = data[chapterId] || { questions: {} };
    const answered = Object.keys(ch.questions).length;
    const correct  = Object.values(ch.questions).filter(q => q.correct).length;
    return {
      answered,
      correct,
      total: totalQuestions,
      pct: totalQuestions ? Math.round((correct / totalQuestions) * 100) : 0,
      done: answered >= totalQuestions
    };
  }

  function getQuestionHistory(chapterId, questionId) {
    const data = load();
    return data[chapterId]?.questions[questionId] || null;
  }

  function clearChapter(chapterId) {
    const data = load();
    delete data[chapterId];
    save(data);
  }

  function getOverallStats(chapters) {
    let totalQ = 0, correctQ = 0;
    chapters.forEach(ch => {
      const s = getChapterStats(ch.id, ch.questions.length);
      totalQ  += ch.questions.length;
      correctQ += s.correct;
    });
    return { total: totalQ, correct: correctQ, pct: totalQ ? Math.round((correctQ / totalQ) * 100) : 0 };
  }

  return { recordAnswer, getChapterStats, getQuestionHistory, clearChapter, getOverallStats };
})();
