/* ── Sync ─────────────────────────────────────────────────────
   Keeps history in step across devices using a *secret* GitHub Gist.
   No server needed: the browser talks to api.github.com directly.

   Setup (once, by a parent):
     1. github.com/settings/tokens → "Generate new token (classic)",
        tick ONLY the `gist` scope, no expiry (or a long one).
     2. On the first device: Sync settings → paste token → "Create sync".
     3. Copy the pairing code shown, paste it on every other device.
   The token is stored only in that browser's localStorage (never in
   the repo). With only the `gist` scope it cannot touch any repository.

   Merge rules live in Store.mergeInto — answers are an append-only log,
   so syncing in any order, or after days offline, never loses anything.
──────────────────────────────────────────────────────────────── */
const Sync = (() => {
  const CFG_KEY = 'studyzone_g7_sync';   // device-local; deliberately not synced
  const FILE = 'studyzone-g7.json';
  const API = 'https://api.github.com/gists';
  let status = 'off';                    // off | syncing | ok | error
  let lastError = '';
  let timer = null, running = null;
  const listeners = [];

  function cfg() { try { return JSON.parse(localStorage.getItem(CFG_KEY)) || null; } catch { return null; } }
  function setCfg(c) { c ? localStorage.setItem(CFG_KEY, JSON.stringify(c)) : localStorage.removeItem(CFG_KEY); }
  function enabled() { const c = cfg(); return !!(c && c.token && c.gist); }

  function setStatus(s, err = '') {
    status = s; lastError = err;
    listeners.forEach(fn => fn(status, lastError));
  }
  function onStatus(fn) { listeners.push(fn); fn(enabled() ? status : 'off', lastError); }

  async function api(method, path, token, body) {
    const res = await fetch(API + path, {
      method, cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        ...(body ? { 'Content-Type': 'application/json' } : {})
      },
      body: body ? JSON.stringify(body) : undefined
    });
    if (!res.ok) {
      const msg = res.status === 401 ? 'Token rejected — check it has the gist scope'
                : res.status === 404 ? 'Sync gist not found — check the pairing code'
                : `GitHub error ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  }

  async function pull(c) {
    const g = await api('GET', `/${c.gist}`, c.token);
    const f = g.files && g.files[FILE];
    if (!f) return null;
    // The API truncates files over ~1 MB; fetch the raw file in that case.
    const text = f.truncated ? await (await fetch(f.raw_url, { cache: 'no-store' })).text() : f.content;
    return JSON.parse(text);
  }

  function push(c) {
    return api('PATCH', `/${c.gist}`, c.token, { files: { [FILE]: { content: JSON.stringify(Store.snapshot()) } } });
  }

  // Pull → merge into local → push back if the remote is missing anything.
  function syncNow() {
    if (!enabled()) return Promise.resolve();
    if (running) return running;
    const c = cfg();
    setStatus('syncing');
    running = (async () => {
      try {
        const remote = await pull(c);
        if (remote) Store.mergeFrom(remote);
        const remoteCopy = remote ? JSON.parse(JSON.stringify(remote)) : { v: 1, ev: [], tests: {}, notes: {}, fc: {} };
        if (Store.mergeInto(remoteCopy, Store.snapshot())) await push(c);
        setCfg({ ...cfg(), last: Date.now() });
        setStatus('ok');
      } catch (e) {
        setStatus('error', e.message);
      } finally {
        running = null;
      }
    })();
    return running;
  }

  // Debounced sync after local changes (answers come in quick bursts).
  function schedule(delayMs = 15000) {
    if (!enabled()) return;
    clearTimeout(timer);
    timer = setTimeout(syncNow, delayMs);
  }

  async function create(token) {
    const g = await api('POST', '', token, {
      description: 'Study Zone progress (private sync file)',
      public: false,
      files: { [FILE]: { content: JSON.stringify(Store.snapshot()) } }
    });
    setCfg({ token, gist: g.id });
    await syncNow();
    return pairingCode();
  }

  async function connect(code) {
    let parsed;
    try { parsed = JSON.parse(atob(code.trim())); } catch { throw new Error('That pairing code is not valid'); }
    if (!parsed.t || !parsed.g) throw new Error('That pairing code is not valid');
    await pull({ token: parsed.t, gist: parsed.g });      // verify before saving
    setCfg({ token: parsed.t, gist: parsed.g });
    await syncNow();
  }

  function pairingCode() { const c = cfg(); return c ? btoa(JSON.stringify({ t: c.token, g: c.gist })) : ''; }
  function disconnect() { setCfg(null); setStatus('off'); }
  function lastSync() { const c = cfg(); return c && c.last; }

  // Sync when a page opens, when it comes back into view, and shortly after changes.
  Store.onChange(() => schedule());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') syncNow();
    else if (timer) { clearTimeout(timer); syncNow(); }
  });

  return { enabled, syncNow, schedule, create, connect, disconnect, pairingCode, onStatus, lastSync };
})();
