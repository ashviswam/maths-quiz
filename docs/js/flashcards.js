/* ── Flashcard Engine ──────────────────────────────────────────
   Depends on: TOPICS array, FLASHCARD_CONFIG (set in page)
──────────────────────────────────────────────────────────────── */
const Flashcards = (() => {
  let allCards = [];
  let deck = [];
  let index = 0;
  let flipped = false;
  let knownSet = new Set();
  let unknownOnly = false;
  let activeTopicId = '';

  function storageKey() {
    return (typeof FLASHCARD_CONFIG !== 'undefined' ? FLASHCARD_CONFIG.progressKey : 'flashcards') + '_known';
  }

  function loadKnown() {
    try { return new Set(JSON.parse(localStorage.getItem(storageKey())) || []); }
    catch { return new Set(); }
  }

  function saveKnown() {
    localStorage.setItem(storageKey(), JSON.stringify([...knownSet]));
  }

  function collectCards(topicId) {
    const source = topicId ? TOPICS.filter(t => String(t.id) === String(topicId)) : TOPICS;
    return source.flatMap(t => (t.flashcards || []).map(f => ({ ...f, topicTitle: t.title, topicColor: t.color })));
  }

  function init() {
    knownSet  = loadKnown();
    allCards  = collectCards('');
    buildDeck();
    populateTopicFilter();
    renderCard();
    updateProgress();
  }

  function populateTopicFilter() {
    const sel = document.getElementById('fc-topic-filter');
    if (!sel) return;
    TOPICS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.title;
      sel.appendChild(opt);
    });
  }

  function buildDeck() {
    deck = unknownOnly ? allCards.filter(c => !knownSet.has(c.id)) : [...allCards];
    if (index >= deck.length) index = 0;
  }

  function renderCard() {
    const empty = document.getElementById('fc-empty');
    const wrap  = document.getElementById('fc-card-wrap');
    const ctrl  = document.getElementById('fc-controls');

    if (deck.length === 0) {
      empty.classList.remove('hidden');
      wrap.classList.add('hidden');
      ctrl.classList.add('hidden');
      document.getElementById('fc-counter').textContent = '0 / 0';
      updateProgress();
      return;
    }
    empty.classList.add('hidden');
    wrap.classList.remove('hidden');
    ctrl.classList.remove('hidden');

    const card = deck[index];
    document.getElementById('fc-front-text').textContent = card.fr ?? card.es ?? '';
    document.getElementById('fc-back-text').textContent  = card.en;

    const noteEl = document.getElementById('fc-back-note');
    if (card.note) { noteEl.textContent = card.note; noteEl.classList.remove('hidden'); }
    else { noteEl.classList.add('hidden'); }

    document.getElementById('fc-topic-label').textContent = card.topicTitle;
    document.getElementById('fc-counter').textContent = `${index + 1} / ${deck.length}`;

    const inner = document.getElementById('fc-inner');
    flipped = false;
    inner.classList.remove('flipped');

    const knownBtn = document.getElementById('btn-fc-known');
    const isKnown  = knownSet.has(card.id);
    knownBtn.textContent = isKnown ? '✓ Known' : 'Mark as Known ✓';
    knownBtn.classList.toggle('fc-known-active', isKnown);

    updateProgress();
  }

  function flip() {
    flipped = !flipped;
    document.getElementById('fc-inner').classList.toggle('flipped', flipped);
  }

  function prev() {
    if (!deck.length) return;
    index = (index - 1 + deck.length) % deck.length;
    renderCard();
  }

  function next() {
    if (!deck.length) return;
    index = (index + 1) % deck.length;
    renderCard();
  }

  function toggleKnown() {
    if (!deck.length) return;
    const card = deck[index];
    if (knownSet.has(card.id)) knownSet.delete(card.id);
    else knownSet.add(card.id);
    saveKnown();
    renderCard();
    updateProgress();
  }

  function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    index = 0;
    renderCard();
  }

  function toggleUnknownOnly() {
    unknownOnly = !unknownOnly;
    const btn = document.getElementById('btn-fc-unknown-only');
    btn.classList.toggle('fc-tool-active', unknownOnly);
    btn.textContent = unknownOnly ? '📚 Practice Only: ON' : '📚 Practice Only';
    buildDeck();
    renderCard();
  }

  function filterByTopic(topicId) {
    activeTopicId = topicId;
    allCards = collectCards(topicId);
    index = 0;
    buildDeck();
    renderCard();
    updateProgress();
  }

  function updateProgress() {
    const total = allCards.length;
    const known = allCards.filter(c => knownSet.has(c.id)).length;
    const pct   = total ? Math.round((known / total) * 100) : 0;
    document.getElementById('fc-prog-fill').style.width = pct + '%';
    document.getElementById('fc-prog-label').textContent = `${known} / ${total} known (${pct}%)`;
  }

  document.addEventListener('keydown', e => {
    if      (e.key === 'ArrowRight')            next();
    else if (e.key === 'ArrowLeft')             prev();
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    else if (e.key === 'k' || e.key === 'K')   toggleKnown();
  });

  return { init, flip, prev, next, toggleKnown, shuffle, toggleUnknownOnly, filterByTopic };
})();

document.addEventListener('DOMContentLoaded', Flashcards.init);
