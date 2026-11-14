/* ── Sync & backup panel ──────────────────────────────────────
   Adds a status pill to #sync-slot and a settings modal.
   Depends on: Store, Sync, Util.
──────────────────────────────────────────────────────────────── */
const SyncUI = (() => {
  const LABEL = { off: '☁️ Sync off', syncing: '🔄 Syncing…', ok: '✅ Synced', error: '⚠️ Sync problem' };

  function mount() {
    const m = document.createElement('div');
    m.id = 'sync-modal';
    m.className = 'notes-overlay hidden';
    m.onclick = e => { if (e.target === m) close(); };
    m.innerHTML = `<div class="notes-modal"><div class="notes-header">
        <span class="notes-title">☁️ Sync &amp; backup</span>
        <button class="notes-close" onclick="SyncUI.close()">✕ Close</button>
      </div><div id="sync-body" class="notes-list"></div></div>`;
    document.body.appendChild(m);
    const slot = document.getElementById('sync-slot');
    if (slot) {
      slot.innerHTML = `<button class="sync-pill" id="sync-pill" onclick="SyncUI.open()"></button>`;
      Sync.onStatus((s, err) => {
        const p = document.getElementById('sync-pill');
        p.textContent = LABEL[s] || LABEL.off;
        p.className = 'sync-pill sync-' + s;
        p.title = err || (Sync.lastSync() ? 'Last synced ' + new Date(Sync.lastSync()).toLocaleString() : '');
        if (!document.getElementById('sync-modal').classList.contains('hidden')) render();
      });
    }
    Sync.syncNow();
  }

  function render() {
    const b = document.getElementById('sync-body');
    if (Sync.enabled()) {
      const last = Sync.lastSync();
      b.innerHTML = `
        <p class="sync-p"><strong>Sync is on.</strong> ${last ? 'Last synced ' + Util.esc(new Date(last).toLocaleString()) + '.' : ''}</p>
        <div id="sync-err" class="sync-err"></div>
        <button class="btn-primary" onclick="SyncUI.run(Sync.syncNow)">Sync now</button>
        <h4 class="sync-h">Add another device</h4>
        <p class="sync-p">Open Study Zone on the other device → Sync → paste this pairing code.
          <strong>It contains the access token — treat it like a password.</strong></p>
        <textarea class="note-textarea sync-code" readonly onclick="this.select()">${Util.esc(Sync.pairingCode())}</textarea>
        <p class="sync-p"><button class="btn-note-cancel" onclick="if(confirm('Stop syncing on this device? Local history is kept.')){Sync.disconnect();SyncUI.render()}">Turn off sync on this device</button></p>
        ${backupHtml()}`;
    } else {
      b.innerHTML = `
        <p class="sync-p">Sync keeps tests and progress the same on every device, using a private GitHub Gist.</p>
        <div id="sync-err" class="sync-err"></div>
        <h4 class="sync-h">First device</h4>
        <ol class="sync-p sync-ol">
          <li>On <a href="https://github.com/settings/tokens/new?scopes=gist&description=Study%20Zone%20sync" target="_blank" rel="noopener">GitHub → new classic token</a>, tick only <code>gist</code>, set no expiration, generate.</li>
          <li>Paste the token here:</li>
        </ol>
        <input id="sync-token" class="sync-input" type="password" placeholder="ghp_…" autocomplete="off">
        <button class="btn-primary" onclick="SyncUI.run(() => Sync.create(document.getElementById('sync-token').value.trim()))">Create sync</button>
        <h4 class="sync-h">Already set up on another device?</h4>
        <textarea id="sync-pair" class="note-textarea sync-code" placeholder="Paste the pairing code from the other device"></textarea>
        <button class="btn-primary" onclick="SyncUI.run(() => Sync.connect(document.getElementById('sync-pair').value))">Connect</button>
        ${backupHtml()}`;
    }
  }

  function backupHtml() {
    return `<h4 class="sync-h">Backup file</h4>
      <p class="sync-p">Download everything as a file, or merge a backup file into this device (nothing is overwritten).</p>
      <button class="btn-secondary" onclick="SyncUI.exportFile()">⬇️ Download backup</button>
      <label class="btn-secondary sync-file">⬆️ Import backup<input type="file" accept=".json,application/json" hidden onchange="SyncUI.importFile(this.files[0])"></label>`;
  }

  async function run(fn) {
    const err = document.getElementById('sync-err');
    err.textContent = '';
    try { await fn(); render(); }
    catch (e) { err.textContent = e.message; }
  }

  function exportFile() {
    const blob = new Blob([JSON.stringify(Store.snapshot())], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `studyzone-g7-backup-${Store.dayKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importFile(file) {
    if (!file) return;
    file.text().then(t => {
      const changed = Store.mergeFrom(JSON.parse(t));
      alert(changed ? 'Backup merged.' : 'Nothing new in that backup.');
      location.reload();
    }).catch(() => alert('That file is not a Study Zone backup.'));
  }

  function open() { render(); document.getElementById('sync-modal').classList.remove('hidden'); }
  function close() { document.getElementById('sync-modal').classList.add('hidden'); }

  document.addEventListener('DOMContentLoaded', mount);
  return { open, close, render, run, exportFile, importFile };
})();
