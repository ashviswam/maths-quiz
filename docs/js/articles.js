/* ── Articles drill ────────────────────────────────────────────
   articles.html?s=<subject>. Quick-fire "which article?" rounds built
   from each chapter's `articles: [[word, article, english, note?], …]`.
   Missed words are remembered on this device (localStorage, best effort)
   and come up first in the next round. Not part of the answer log.
   Depends on: MANIFEST, Util.
──────────────────────────────────────────────────────────────── */
const Articles = (() => {
  const ROUND = 20;
  const $ = id => document.getElementById(id);

  // Fallback hint by word ending, used when a word has no note of its own.
  const ENDING_TIPS = {
    spanish: w => /os$/.test(w) ? 'Words ending in -o are usually masculine (plural: -os → los).'
      : /o$/.test(w) ? 'Words ending in -o are usually masculine.'
      : /as$/.test(w) ? 'Words ending in -a are usually feminine (plural: -as → las).'
      : /a$/.test(w) ? 'Words ending in -a are usually feminine.' : ''
  };

  let subj, words = [], arts = [], modes = [], mode = 0;
  let queue = [], pos = 0, total = 0, firstTry = 0, missed = [], answered = false, timer = null;

  const KEY = () => `studyzone_g7_articles_${subj.id}`;
  function loadMissed() { try { return JSON.parse(localStorage.getItem(KEY())) || {}; } catch { return {}; } }
  function saveMissed(m) { try { localStorage.setItem(KEY(), JSON.stringify(m)); } catch { /* private mode */ } }

  async function init() {
    subj = Util.subject(Util.param('s'));
    if (!subj) { location.href = './'; return; }
    const back = $('ar-back');
    back.href = `subject.html?s=${subj.id}`;
    back.textContent = `← ${subj.name}`;
    const chapters = await Util.loadSubject(subj);
    words = chapters.flatMap(ch => (ch.articles || []).map(([word, art, en, note]) => ({ word, art, en, note })));
    if (!words.length) { location.href = back.href; return; }
    arts = [...new Set(words.map(w => w.art))];
    document.title = `${arts.join(', ')}? — ${subj.name}`;
    $('ar-heading').textContent = `${arts.join(', ')}?`;
    // Modes: all articles, or singular-only (the first two, e.g. el/la) when there are four.
    modes = [{ label: `All (${arts.join(' / ')})`, arts }];
    if (arts.length === 4) modes.push({ label: `${arts[0]} / ${arts[1]} only`, arts: arts.slice(0, 2) });
    $('ar-modes').innerHTML = modes.length > 1 ? modes.map((m, i) =>
      `<button class="ar-mode ${i === mode ? 'on' : ''}" onclick="Articles.setMode(${i})">${Util.esc(m.label)}</button>`).join('') : '';
    const n = Object.keys(loadMissed()).length;
    $('ar-missed-hint').textContent = n ? `${n} word${n > 1 ? 's' : ''} you missed before will come up first.` : '';
    document.addEventListener('keydown', onKey);
  }

  function setMode(i) {
    mode = i;
    document.querySelectorAll('.ar-mode').forEach((b, j) => b.classList.toggle('on', j === i));
  }

  function start() {
    const pool = words.filter(w => modes[mode].arts.includes(w.art));
    const old = loadMissed();
    const again = Util.shuffle(pool.filter(w => old[w.word])).slice(0, Math.ceil(ROUND / 2));
    const rest = Util.shuffle(pool.filter(w => !again.includes(w)));
    queue = Util.shuffle([...again, ...rest.slice(0, ROUND - again.length)]);
    total = queue.length; pos = 0; firstTry = 0; missed = [];
    $('ar-buttons').innerHTML = modes[mode].arts.map((a, i) =>
      `<button class="ar-btn" data-art="${Util.esc(a)}" onclick="Articles.pick('${Util.esc(a)}')">${Util.esc(a)}<small>${i + 1}</small></button>`).join('');
    $('ar-keys').textContent = `Keys: ${modes[mode].arts.map((a, i) => `${i + 1} = ${a}`).join(' · ')} · Enter = next`;
    show('ar-play');
    render();
  }

  function show(id) { ['ar-start', 'ar-play', 'ar-end'].forEach(s => $(s).classList.toggle('hidden', s !== id)); }

  function render() {
    const w = queue[pos];
    answered = false;
    $('ar-blank').textContent = '___';
    $('ar-blank').className = 'ar-blank';
    $('ar-word').textContent = w.word;
    $('ar-en').textContent = w.en || '';
    $('ar-feedback').classList.add('hidden');
    $('ar-next').classList.add('hidden');
    document.querySelectorAll('.ar-btn').forEach(b => { b.disabled = false; b.className = 'ar-btn'; });
    $('ar-count').textContent = pos < total ? `${pos + 1} / ${total}` : `Missed words: ${queue.length - pos} left`;
    $('ar-score').textContent = `✓ ${firstTry}`;
    $('ar-fill').style.width = `${Math.min(100, pos / total * 100)}%`;
  }

  function pick(a) {
    if (answered) return;
    answered = true;
    const w = queue[pos];
    const ok = a === w.art;
    const store = loadMissed();
    document.querySelectorAll('.ar-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.art === w.art) b.classList.add('right');
      else if (b.dataset.art === a) b.classList.add('wrong');
    });
    $('ar-blank').textContent = w.art;
    $('ar-blank').className = `ar-blank ${ok ? 'ok' : 'bad'}`;
    if (ok) {
      if (pos < total && !missed.includes(w)) firstTry++;
      if (pos >= total) delete store[w.word];   // got a missed word right on the retry
      else if (store[w.word]) store[w.word] = Math.max(0, store[w.word] - 1) || undefined;
      saveMissed(JSON.parse(JSON.stringify(store)));
      $('ar-score').textContent = `✓ ${firstTry}`;
      timer = setTimeout(next, w.note ? 1400 : 650);
      if (w.note) feedback(true, w);
    } else {
      store[w.word] = (store[w.word] || 0) + 1;
      saveMissed(store);
      if (!missed.includes(w)) { missed.push(w); queue.push(w); }
      feedback(false, w);
      $('ar-next').classList.remove('hidden');
    }
  }

  function feedback(ok, w) {
    const tip = w.note || (ENDING_TIPS[subj.id] || (() => ''))(w.word);
    $('ar-feedback').className = `ar-feedback ${ok ? 'ok' : 'bad'}`;
    $('ar-feedback').innerHTML = `<strong>${Util.esc(w.art)} ${Util.esc(w.word)}</strong>${tip ? `<br>${Util.esc(tip)}` : ''}`;
  }

  function next() {
    clearTimeout(timer);
    if (!answered) return;
    pos++;
    if (pos >= queue.length) return finish();
    render();
  }

  function finish() {
    show('ar-end');
    const pct = Math.round(firstTry / total * 100);
    $('ar-final').textContent = `${firstTry} / ${total}`;
    $('ar-final-msg').textContent = pct === 100 ? '¡Perfecto! Every one right first time. 🎉'
      : pct >= 80 ? '¡Muy bien! Nearly all of them.' : pct >= 60 ? 'Good. Play again to fix the ones below.'
      : 'Keep going. Each round gets easier.';
    $('ar-missed-list').innerHTML = missed.length ? `<h3 class="ar-mh">Learn these:</h3><ul class="ar-missed">${
      missed.map(w => `<li><strong>${Util.esc(w.art)} ${Util.esc(w.word)}</strong> <span>${Util.esc(w.en || '')}</span>${
        w.note ? `<em>${Util.esc(w.note)}</em>` : ''}</li>`).join('')}</ul>` : '';
  }

  function onKey(e) {
    if ($('ar-play').classList.contains('hidden')) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= modes[mode].arts.length) pick(modes[mode].arts[n - 1]);
    else if (e.key === 'Enter' && answered) { e.preventDefault(); next(); }
  }

  document.addEventListener('DOMContentLoaded', init);
  return { start, pick, next, setMode };
})();
