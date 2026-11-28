/* ── Manifest ─────────────────────────────────────────────────
   The single registry of subjects and their chapter files.
   To add a chapter: put the file in docs/data/<subject>/ and list it
   in that subject's `chapters` array. `node tools/check.js` verifies
   every listed file exists and every file on disk is listed.
──────────────────────────────────────────────────────────────── */
const MANIFEST = {
  student: 'Pragathy',
  grade: 7,
  materialDir: '~/Documents/Pragathy',

  dailySize: 15,                                // questions per daily test
  weeklySize: 40,                               // questions per weekly timed test (30% easy / 40% medium / 30% hard)
  secondsPer: { mcq: 60, input: 90, short: 180 }, // weekly test time budget per question

  subjects: [
    { id: 'dutch',      name: 'Dutch',      icon: '🇳🇱', color: '#f97316', desc: 'Language Acquisition', chapters: [] },
    { id: 'english',    name: 'English',    icon: '📚',  color: '#be185d', desc: 'Language & Literature', chapters: [] },
    { id: 'french',     name: 'French',     icon: '🇫🇷', color: '#a855f7', desc: 'Language Acquisition', chapters: [] },
    { id: 'humanities', name: 'Humanities', icon: '🌍',  color: '#0ea5e9', desc: 'Individuals & Societies', chapters: [] },
    { id: 'ict',        name: 'ICT',        icon: '💻',  color: '#f59e0b', desc: 'Design & Technology', chapters: ['ch01.js'] },
    { id: 'maths',      name: 'Maths',      icon: '🧮',  color: '#6366f1', desc: 'Mathematics', chapters: ['ch02.js', 'ch08.js'] },
    { id: 'science',    name: 'Science',    icon: '🔬',  color: '#22c55e', desc: 'Sciences', chapters: [] },
    { id: 'spanish',    name: 'Spanish',    icon: '🇪🇸', color: '#eab308', desc: 'Language Acquisition', chapters: ['ch02.js'] }
  ]
};

if (typeof module !== 'undefined') module.exports = MANIFEST;
