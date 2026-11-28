(() => {
  // ── SVG kit ──────────────────────────────────────────────
  // Diagrams are drawn from the same numbers the answers are computed from.
  // Rules: never label the asked-about angle with its value; "?" or a letter only.
  const INK = '#334155', ARC = '#6366f1', HI = '#e11d48', TXT = '#0f172a';
  const rad = d => d * Math.PI / 180;
  const r1 = n => Math.round(n * 10) / 10;
  const P = (c, r, deg) => [c[0] + r * Math.cos(rad(deg)), c[1] - r * Math.sin(rad(deg))];   // maths angle, SVG y-down
  const dir = (a, b) => ((Math.atan2(a[1] - b[1], b[0] - a[0]) * 180 / Math.PI) + 360) % 360;   // angle of a→b
  const svg = (w, h, body, label = 'Geometry diagram') =>
    `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}" font-family="Arial, sans-serif" font-size="15">${body}</svg>`;
  const line = (a, b, o = {}) => `<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b[0])}" y2="${r1(b[1])}" stroke="${o.color || INK}" stroke-width="${o.w || 2}"${o.dash ? ' stroke-dasharray="6 5"' : ''}/>`;
  const text = (p, s, o = {}) => `<text x="${r1(p[0])}" y="${r1(p[1])}" text-anchor="${o.anchor || 'middle'}" dominant-baseline="middle" fill="${o.color || TXT}" font-size="${o.size || 15}"${o.bold ? ' font-weight="bold"' : ''}${o.italic ? ' font-style="italic"' : ''}>${s}</text>`;
  const dot = p => `<circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="3.5" fill="${INK}"/>`;
  // Arc from direction a1 counter-clockwise to a2 at vertex c, with label at the middle.
  function arc(c, a1, a2, label, o = {}) {
    let span = ((a2 - a1) % 360 + 360) % 360;
    const r = o.r || (span < 30 ? 44 : 30);
    const col = o.color || ARC;
    let mark;
    if (Math.abs(span - 90) < 0.01 && o.right !== false) {
      const s = 13, p1 = P(c, s, a1), p3 = P(c, s, a2), p2 = P(c, s * Math.SQRT2, a1 + 45);
      mark = `<path d="M${r1(p1[0])},${r1(p1[1])} L${r1(p2[0])},${r1(p2[1])} L${r1(p3[0])},${r1(p3[1])}" fill="none" stroke="${col}" stroke-width="1.8"/>`;
    } else {
      const s = P(c, r, a1), e = P(c, r, a2);
      mark = `<path d="M${r1(s[0])},${r1(s[1])} A${r},${r} 0 ${span > 180 ? 1 : 0} 0 ${r1(e[0])},${r1(e[1])}" fill="none" stroke="${col}" stroke-width="2"/>`;
    }
    const lr = o.lr || r + (span < 30 ? 20 : 17) + (label && label.length > 4 ? 6 : 0);
    return mark + (label ? text(P(c, lr, a1 + span / 2), label, { color: o.labelColor || TXT, italic: /^[a-z]/.test(label) }) : '');
  }
  // Interior angle at vertex v of a polygon whose other neighbours are p and q.
  const cornerArc = (v, p, q, label, o) => {
    const a = dir(v, p), b = dir(v, q);
    const ccw = ((b - a) % 360 + 360) % 360;
    return ccw <= 180 ? arc(v, a, b, label, o) : arc(v, b, a, label, o);
  };
  const ticks = (a, b, n = 1) => {          // equal-length marks across a side
    const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], d = dir(a, b);
    let s = '';
    for (let i = 0; i < n; i++) {
      const c = P(m, (i - (n - 1) / 2) * 6, d);
      s += line(P(c, 7, d + 90), P(c, 7, d - 90), { w: 1.6 });
    }
    return s;
  };
  const chevron = (p, d, n = 1) => {        // parallel-line arrow marks pointing along direction d
    let s = '';
    for (let i = 0; i < n; i++) {
      const tip = P(p, i * 8, d);
      s += `<path d="M${r1(P(tip, 9, d + 150)[0])},${r1(P(tip, 9, d + 150)[1])} L${r1(tip[0])},${r1(tip[1])} L${r1(P(tip, 9, d - 150)[0])},${r1(P(tip, 9, d - 150)[1])}" fill="none" stroke="${INK}" stroke-width="2"/>`;
    }
    return s;
  };
  const arrowHead = (p, d) => `<path d="M${r1(P(p, 11, d + 155)[0])},${r1(P(p, 11, d + 155)[1])} L${r1(p[0])},${r1(p[1])} L${r1(P(p, 11, d - 155)[0])},${r1(P(p, 11, d - 155)[1])}" fill="none" stroke="${INK}" stroke-width="2"/>`;
  const fmtDeg = n => `${n}°`;

  // Rays from one point. rays: directions in degrees. arcs: [from, to, label].
  function fan(rays, arcs, { lineThrough = false, len = 130, w = 360, h = 220, c = [180, 150], pts = [] } = {}) {
    let s = '';
    if (lineThrough) s += line(P(c, len + 20, 180), P(c, len + 20, 0));
    rays.forEach(d => { s += line(c, P(c, len, d)); });
    arcs.forEach(([a, b, l, o]) => { s += arc(c, a, b, l, o); });
    pts.forEach(([d, name]) => { s += text(P(c, len + 14, d), name, { bold: true }); });
    return svg(w, h, s + dot(c));
  }

  // Two lines crossing at the centre.
  function cross(d1, d2, arcs) {
    const c = [180, 110];
    let s = line(P(c, 150, d1), P(c, 150, d1 + 180)) + line(P(c, 150, d2), P(c, 150, d2 + 180));
    arcs.forEach(([a, b, l]) => { s += arc(c, a, b, l); });
    return svg(360, 220, s + dot(c));
  }

  // Two horizontal lines cut by a transversal at angle th (acute, measured from the right).
  // Quadrants at each crossing: TR [0,th], TL [th,180], BL [180,180+th], BR [180+th,360].
  const QUAD = { TR: th => [0, th], TL: th => [th, 180], BL: th => [180, 180 + th], BR: th => [180 + th, 360] };
  const quadSize = (q, th) => (q === 'TR' || q === 'BL') ? th : 180 - th;
  function parallel(th, marks, { arrows = true, labels = true } = {}) {
    const y = [70, 170], w = 420;
    const dx = 100 / Math.tan(rad(th));
    const X = [210 + dx / 2, 210 - dx / 2];      // crossing points on the top and bottom line
    let s = line([20, y[0]], [w - 20, y[0]]) + line([20, y[1]], [w - 20, y[1]]);
    const top = P([X[0], y[0]], 55 / Math.sin(rad(th)), th), bot = P([X[1], y[1]], 55 / Math.sin(rad(th)), th + 180);
    s += line(bot, top);
    if (arrows) s += chevron([w - 70, y[0]], 0) + chevron([w - 70, y[1]], 0);
    marks.forEach(([i, q, l, o]) => { const [a, b] = QUAD[q](th); s += arc([X[i], y[i]], a, b, l, o); });
    return svg(w, 240, s);
  }

  // Triangle with base angles b (left, at B) and c (right, at C), drawn to scale.
  function triangle({ b, c, labels = {}, ext = false, tick = null, names = false, scale = 1 }) {
    const L = 300, Bp = [40, 0];
    const tb = Math.tan(rad(b)), tc = Math.tan(rad(c));
    const x = L * tc / (tb + tc), hgt = x * tb;
    const H = Math.min(hgt, 210);
    const k = H / hgt;              // shrink very tall triangles
    const B = [60, 40 + H + 10], C = [60 + L * k, 40 + H + 10], A = [60 + x * k, 50];
    let s = `<polygon points="${[A, B, C].map(p => p.map(r1).join(',')).join(' ')}" fill="#f8fafc" stroke="${INK}" stroke-width="2"/>`;
    if (ext) s += line(C, [C[0] + 90, C[1]]);
    if (labels.A != null) s += cornerArc(A, B, C, labels.A);
    if (labels.B != null) s += cornerArc(B, C, A, labels.B);
    if (labels.C != null) s += cornerArc(C, A, B, labels.C);
    if (labels.E) s += arc(C, 0, dir(C, A), labels.E, { color: HI, r: 26 });
    if (tick === 'AB=AC') s += ticks(A, B) + ticks(A, C);
    if (tick === 'all') s += ticks(A, B) + ticks(A, C) + ticks(B, C);
    if (names) s += text([A[0], A[1] - 14], 'A', { bold: true }) + text([B[0] - 14, B[1] + 4], 'B', { bold: true }) + text([C[0] + 10, C[1] + 16], 'C', { bold: true });
    return svg(ext ? C[0] + 110 : C[0] + 40, B[1] + 30, s, 'Triangle');
  }

  // Quadrilateral drawn with the given interior angles (in order, going anticlockwise).
  function quadPts(angles) {
    const h = [0]; for (let i = 1; i < 4; i++) h.push(h[i - 1] + 180 - angles[i]);
    const u = h.map(d => [Math.cos(rad(d)), Math.sin(rad(d))]);
    for (const [s1, s2] of [[1, 1], [1, 0.8], [1, 1.3], [1.3, 1], [0.8, 1], [1, 0.6], [1, 1.6], [1.6, 1]]) {
      // s3*u3 + s4*u4 = -(s1*u1 + s2*u2)
      const rx = -(s1 * u[0][0] + s2 * u[1][0]), ry = -(s1 * u[0][1] + s2 * u[1][1]);
      const det = u[2][0] * u[3][1] - u[3][0] * u[2][1];
      if (Math.abs(det) < 1e-9) continue;
      const s3 = (rx * u[3][1] - u[3][0] * ry) / det, s4 = (u[2][0] * ry - rx * u[2][1]) / det;
      if (s3 > 0.45 && s4 > 0.45 && s3 < 2.4 && s4 < 2.4) {
        const pts = [[0, 0]]; [s1, s2, s3].forEach((s, i) => { const p = pts[i]; pts.push([p[0] + s * u[i][0], p[1] + s * u[i][1]]); });
        return pts;
      }
    }
    throw new Error('cannot draw quadrilateral ' + angles);
  }
  function quad(angles, labels, { ticksOn = [], arrowsOn = [] } = {}) {
    const raw = quadPts(angles);
    const xs = raw.map(p => p[0]), ys = raw.map(p => p[1]);
    const k = Math.min(300 / (Math.max(...xs) - Math.min(...xs)), 190 / (Math.max(...ys) - Math.min(...ys)));
    const pts = raw.map(p => [40 + (p[0] - Math.min(...xs)) * k, 30 + (Math.max(...ys) - p[1]) * k]);
    let s = `<polygon points="${pts.map(p => p.map(r1).join(',')).join(' ')}" fill="#f8fafc" stroke="${INK}" stroke-width="2"/>`;
    pts.forEach((v, i) => { if (labels[i] != null) s += cornerArc(v, pts[(i + 3) % 4], pts[(i + 1) % 4], labels[i]); });
    ticksOn.forEach(([i, n]) => { s += ticks(pts[i], pts[(i + 1) % 4], n); });
    arrowsOn.forEach(([i, n]) => { const a = pts[i], b = pts[(i + 1) % 4]; s += chevron([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], dir(a, b), n); });
    const W = Math.max(...pts.map(p => p[0])) + 40, H = Math.max(...pts.map(p => p[1])) + 30;
    return svg(W, H, s, 'Quadrilateral');
  }

  // Irregular convex polygon with n sides (deterministic wobble so it is not regular).
  function polygon(n, { convex = true, regular = false } = {}) {
    const c = [150, 120], pts = [];
    for (let i = 0; i < n; i++) {
      let r = regular ? 95 : 92 + 6 * Math.sin(i * 2.3 + n);
      if (!convex && i === 1) r = 30;
      pts.push(P(c, r, 90 + i * 360 / n + (regular ? 0 : 3 * Math.cos(i * 1.7))));
    }
    return svg(300, 240, `<polygon points="${pts.map(p => p.map(r1).join(',')).join(' ')}" fill="#fde7d4" stroke="${INK}" stroke-width="2"/>`, 'Polygon');
  }

  // Semicircular protractor, ticks every 10°, labels at 0/30/…/180 on both scales, one arm at `a`.
  function protractor(a) {
    const c = [210, 200], R = 170;
    let s = `<path d="M${c[0] - R},${c[1]} A${R},${R} 0 0 1 ${c[0] + R},${c[1]} Z" fill="#fff7ed" stroke="#c2410c" stroke-width="1.5"/>`;
    for (let d = 0; d <= 180; d += 10) {
      const long = d % 30 === 0;
      s += line(P(c, R, d), P(c, R - (long ? 16 : 10), d), { color: '#c2410c', w: 1.2 });
      if (long) {
        const ld = d === 0 ? 5 : d === 180 ? 175 : d;   // lift the end labels off the base line
        s += text(P(c, R - 30, ld), String(d), { size: 12, color: '#9a3412' });          // inner scale: 0 on the right
        s += text(P(c, R - 50, ld), String(180 - d), { size: 11, color: '#64748b' });   // outer scale: 0 on the left
      }
    }
    s += line([c[0] - R - 15, c[1]], [c[0] + R + 25, c[1]], { w: 2.5 }) + line(c, P(c, R + 25, a), { w: 2.5 });
    s += arc(c, 0, a, '?°', { r: 34, color: HI });
    s += `<circle cx="${c[0]}" cy="${c[1]}" r="4" fill="#c2410c"/>`;
    return svg(420, 230, s, 'Protractor');
  }

  // Cube nets on a square grid. A net folds into a cube if rolling a cube across
  // the squares lands a different face on each one.
  function foldsToCube(cells) {
    const key = ([x, y]) => x + ',' + y, set = new Set(cells.map(key));
    const start = { bottom: 0, top: 1, north: 2, south: 3, east: 4, west: 5 };
    const roll = (o, d) => d === 'E' ? { ...o, bottom: o.east, east: o.top, top: o.west, west: o.bottom }
      : d === 'W' ? { ...o, bottom: o.west, west: o.top, top: o.east, east: o.bottom }
      : d === 'N' ? { ...o, bottom: o.north, north: o.top, top: o.south, south: o.bottom }
      : { ...o, bottom: o.south, south: o.top, top: o.north, north: o.bottom };
    const seen = new Map([[key(cells[0]), start]]), queue = [cells[0]];
    while (queue.length) {
      const [x, y] = queue.shift(), o = seen.get(key([x, y]));
      for (const [d, nx, ny] of [['E', x + 1, y], ['W', x - 1, y], ['N', x, y - 1], ['S', x, y + 1]]) {
        const k = key([nx, ny]);
        if (set.has(k) && !seen.has(k)) { seen.set(k, roll(o, d)); queue.push([nx, ny]); }
      }
    }
    return cells.length === 6 && seen.size === 6 && new Set([...seen.values()].map(o => o.bottom)).size === 6;
  }
  function nets(list) {      // list: [[name, cells], …] side by side
    const u = 22;
    let s = '', x0 = 10;
    list.forEach(([name, cells]) => {
      const mx = Math.max(...cells.map(c => c[0])), my = Math.max(...cells.map(c => c[1]));
      cells.forEach(([x, y]) => { s += `<rect x="${x0 + x * u}" y="${30 + y * u}" width="${u}" height="${u}" fill="#dbeafe" stroke="${INK}" stroke-width="1.5"/>`; });
      s += text([x0 + (mx + 1) * u / 2, 14], `Net ${name}`, { bold: true, size: 14 });
      x0 += (mx + 1) * u + 26;
      if (my > 5) throw new Error('net too tall');
    });
    return svg(x0, 30 + 5 * u + 10, s, 'Nets');
  }

  // Isometric drawing of a block made of unit cubes: cubes = [[x,y,z]], x right-back, y left-back, z up.
  function iso(cubes, { w = 260, h = 220 } = {}) {
    const u = 34, ox = w / 2, oy = h - 40;
    const pt = (x, y, z) => [ox + (x - y) * u * Math.cos(rad(30)), oy - (x + y) * u * Math.sin(rad(30)) - z * u];
    const sorted = [...cubes].sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]) || a[2] - b[2]);
    const face = (pts, fill) => `<polygon points="${pts.map(p => p.map(r1).join(',')).join(' ')}" fill="${fill}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`;
    let s = '';
    sorted.forEach(([x, y, z]) => {
      s += face([pt(x, y, z + 1), pt(x + 1, y, z + 1), pt(x + 1, y + 1, z + 1), pt(x, y + 1, z + 1)], '#e0e7ff');   // top
      s += face([pt(x, y, z), pt(x + 1, y, z), pt(x + 1, y, z + 1), pt(x, y, z + 1)], '#c7d2fe');                   // right-front
      s += face([pt(x, y, z), pt(x, y + 1, z), pt(x, y + 1, z + 1), pt(x, y, z + 1)], '#a5b4fc');                   // left-front
    });
    return svg(w, h, s, 'Solid made of cubes');
  }

  // ── Generated drills ─────────────────────────────────────
  function drills() {
    const out = [];
    const add = q => out.push({ difficulty: 'medium', ...q });

    // Complementary and supplementary angles.
    [[37, 'c', 'easy'], [64, 'c', 'easy'], [18, 'c', null], [81, 'c', null], [129, 's', 'easy'], [57, 's', 'easy'], [90, 's', null], [163, 's', null], [8, 's', null]].forEach(([a, k, d]) => {
      const tot = k === 'c' ? 90 : 180, ans = tot - a;
      add({ id: `c2_cs_${k}${a}`, topic: 'Angle properties', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 3D Q2–3 (p.52–53)',
        question: `What is the size of the angle ${k === 'c' ? 'complementary' : 'supplementary'} to ${a}°?`,
        answer: String(ans), acceptableAnswers: [ans + '°'],
        explanation: `${k === 'c' ? 'Complementary angles add up to 90° (a right angle)' : 'Supplementary angles add up to 180° (a straight angle)'}: ${tot}° − ${a}° = ${ans}°.` });
    });
    // Pairs: complementary, supplementary or neither?
    [[109, 71], [62, 28], [155, 31], [25, 55], [44, 46], [118, 72]].forEach(([a, b]) => {
      const s = a + b, ans = s === 90 ? 0 : s === 180 ? 1 : 2;
      add({ id: `c2_pair_${a}_${b}`, topic: 'Angle properties', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3D Q1 (p.52)',
        question: `Are angles of ${a}° and ${b}° complementary, supplementary, or neither?`,
        options: ['Complementary', 'Supplementary', 'Neither'], answer: ans, fixedOrder: true,
        explanation: `${a}° + ${b}° = ${s}°. ${s === 90 ? 'They add to 90°, so they are complementary.' : s === 180 ? 'They add to 180°, so they are supplementary.' : 'That is neither 90° nor 180°, so they are neither.'}` });
    });

    // Angle types: reason about the size first, then name it (replaces plain "what type is 180°?").
    const kinds = ['Acute', 'Right angle', 'Obtuse', 'Straight angle', 'Reflex', 'Revolution'];
    const kindOf = a => a < 90 ? 0 : a === 90 ? 1 : a < 180 ? 2 : a === 180 ? 3 : a < 360 ? 4 : 5;
    const kindOpts = k => [k, ...[0, 1, 2, 3, 4, 5].filter(x => x !== k).sort((x, y) => Math.abs(x - k) - Math.abs(y - k)).slice(0, 3)].map(i => kinds[i]);
    const KEY = 'Acute &lt; 90° · right = 90° · obtuse 90°–180° · straight = 180° · reflex 180°–360° · revolution = 360°.';
    // Fractions of a turn.
    [[3, 4], [2, 3], [5, 8], [1, 3], [3, 8]].forEach(([n, dn]) => {
      const a = 360 * n / dn, k = kindOf(a);
      add({ id: `c2_turn_${n}_${dn}`, topic: 'Angles', type: 'mcq', difficulty: dn === 8 ? 'challenging' : 'medium', ref: 'Textbook 3B (p.47)',
        question: `An angle is ${n}/${dn} of a full turn. What type of angle is it?`, options: kindOpts(k), answer: 0,
        explanation: `A full turn is 360°, so ${n}/${dn} of a turn is 360 ÷ ${dn} × ${n} = ${a}°. ${KEY}` });
    });
    // Clock hands (the smaller angle unless asked for the reflex one).
    [[4, false], [5, false], [10, false], [2, true]].forEach(([h, reflex]) => {
      const small = Math.min(30 * h, 360 - 30 * h), a = reflex ? 360 - small : small;
      add({ id: `c2_clock_${h}${reflex ? 'r' : ''}`, topic: 'Angles', type: 'input', difficulty: reflex ? 'challenging' : 'medium', ref: 'Textbook 3B Q9 (p.50)',
        question: reflex ? `At exactly ${h} o'clock, what is the <b>reflex</b> angle between the clock hands?` : `At exactly ${h} o'clock, what is the smaller angle between the clock hands? Is it acute, obtuse or reflex?`,
        answer: String(a), acceptableAnswers: [a + '°', ...(reflex ? [] : [`${a} ${kinds[kindOf(a)].toLowerCase()}`, `${a}° ${kinds[kindOf(a)].toLowerCase()}`])],
        explanation: `Each hour mark is 360 ÷ 12 = 30°. ${h} o'clock: the hands are ${Math.min(h, 12 - h)} hour marks apart, so ${small}°${reflex ? `, and the reflex angle is the long way round: 360 − ${small} = ${a}°` : ` (${kinds[kindOf(a)].toLowerCase()})`}.` });
    });
    // Reflex ↔ ordinary angle.
    [[290, 'ord'], [205, 'ord'], [95, 'ref']].forEach(([v, k]) => {
      const a = 360 - v;
      add({ id: `c2_refl_${v}`, topic: 'Angles', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 3B (p.48)',
        question: k === 'ord' ? `Reflex ∠PQR measures ${v}°. What type of angle is the ordinary (non-reflex) ∠PQR?` : `∠PQR measures ${v}°. How big is reflex ∠PQR, and what type is it?`,
        options: k === 'ord' ? kindOpts(kindOf(a)) : [`${a}°, reflex`, `${180 - v}°, acute`, `${a}°, obtuse`, `${v + 180}°, reflex`], answer: 0,
        explanation: `An angle and its reflex angle go all the way round, so they add to 360°: 360 − ${v} = ${a}°. ${k === 'ord' ? KEY : ''}` });
    });
    // Reasoning about types.
    [
      ['Two acute angles are added together. Which type can the answer <b>never</b> be?', ['Reflex', 'Acute', 'Right angle', 'Obtuse'],
       'Each acute angle is under 90°, so two of them add to less than 180°. The answer could be acute (30 + 40), right (45 + 45) or obtuse (60 + 70), but never reflex.'],
      ['An obtuse angle is bisected (cut exactly in half). What type is each half?', ['Acute', 'Obtuse', 'Right angle', 'It depends on the angle'],
       'Obtuse is between 90° and 180°, so half of it is between 45° and 90°: always acute.'],
      ['A reflex angle is bisected. What type is each half?', ['Obtuse', 'Acute', 'Reflex', 'Right angle'],
       'Reflex is between 180° and 360°, so half of it is between 90° and 180°: obtuse.'],
      ['The supplement of an acute angle is always …', ['obtuse', 'acute', 'reflex', 'a right angle'],
       'Supplement = 180° − the angle. Take away less than 90° from 180° and you get more than 90° (but under 180°): obtuse.'],
      ['You face North and turn clockwise to face South-East. What type of angle have you turned through?', ['Obtuse', 'Acute', 'Reflex', 'Right angle'],
       'North → East is 90°, and East → South-East is another 45°: 135° in total, which is obtuse.'],
    ].forEach(([q, opts, why], i) => add({ id: `c2_why_${i + 1}`, topic: 'Angles', type: 'mcq', difficulty: i === 0 || i === 4 ? 'medium' : 'challenging', ref: 'Textbook 3B (p.47)',
      question: q, options: opts, answer: 0, explanation: why }));

    // Read a protractor (two scales: start from the 0 on the arm you measure from).
    [40, 70, 110, 160, 125].forEach(a => add({ id: `c2_prot_${a}`, topic: 'Angles', type: 'input', difficulty: a === 125 ? 'challenging' : 'medium', ref: 'Textbook 3B Q5 (p.49)',
      question: 'One arm of the angle lies along the base line, going to the right. What size is the marked angle? Read it off the protractor.',
      diagram: protractor(a), answer: String(a), acceptableAnswers: [a + '°'],
      explanation: `The first arm points right, where the <b>inner</b> scale starts at 0. Count up the inner scale to the second arm: ${a}°. Reading the outer scale gives ${180 - a}°, the wrong answer, because that scale starts from 0 on the left. Quick check: the angle is ${a < 90 ? 'acute, so it must be less than 90°' : 'obtuse, so it must be more than 90°'}.` }));

    // Angles on a line and at a point (drawn to scale).
    const LINE = [
      { id: 'l1', rays: [52], known: [[0, 52, '52°']], ask: [52, 180], ans: 128, d: 'easy' },
      { id: 'l2', rays: [40, 115], known: [[0, 40, '40°'], [115, 180, '65°']], ask: [40, 115], ans: 75, d: null },
      { id: 'l3', rays: [90, 130], known: [[0, 90, ''], [130, 180, '50°']], ask: [90, 130], ans: 40, d: null },
    ];
    LINE.forEach(L => add({ id: `c2_line_${L.id}`, topic: 'Angle properties', type: 'input', ...(L.d ? { difficulty: L.d } : {}), ref: 'Textbook 3D Q6 (p.53)',
      question: 'The angles sit on a straight line. Find the value of <i>x</i>.',
      diagram: fan(L.rays, [...L.known, [L.ask[0], L.ask[1], 'x°', { color: HI }]], { lineThrough: true }),
      answer: String(L.ans), acceptableAnswers: [L.ans + '°'],
      explanation: `Angles on a straight line add up to 180°. ${L.known.map(k => k[2] || '90° (the square marks a right angle)').join(' + ')} + <i>x</i> = 180, so <i>x</i> = ${L.ans}.` }));
    const POINT = [
      { id: 'p1', rays: [0, 120, 240], known: [[0, 120, '120°'], [120, 240, '120°']], ask: [240, 360], ans: 120, d: 'easy' },
      { id: 'p2', rays: [0, 90, 215], known: [[0, 90, ''], [90, 215, '125°']], ask: [215, 360], ans: 145, d: null },
      { id: 'p3', rays: [10, 85, 160, 250], known: [[10, 85, '75°'], [85, 160, '75°'], [160, 250, '']], ask: [250, 370], ans: 120, d: 'challenging' },
    ];
    POINT.forEach(Pp => add({ id: `c2_point_${Pp.id}`, topic: 'Angle properties', type: 'input', ...(Pp.d ? { difficulty: Pp.d } : {}), ref: 'Textbook 3D Q7 (p.54)',
      question: 'Find the value of <i>x</i> (the angles meet at one point).',
      diagram: fan(Pp.rays, [...Pp.known, [Pp.ask[0], Pp.ask[1], 'x°', { color: HI }]], { len: 95, h: 240, c: [180, 120] }),
      answer: String(Pp.ans), acceptableAnswers: [Pp.ans + '°'],
      explanation: `Angles at a point add up to 360°. ${Pp.known.map(k => k[2] || '90°').join(' + ')} + <i>x</i> = 360, so <i>x</i> = ${Pp.ans}.` }));
    // Equal angles on a line: 3x = 180 style.
    add({ id: 'c2_line_eq3', topic: 'Angle properties', type: 'input', ref: 'Textbook 3D Q6 (p.53)',
      question: 'The three marked angles on the straight line are equal. Find <i>x</i>.',
      diagram: fan([60, 120], [[0, 60, 'x°'], [60, 120, 'x°'], [120, 180, 'x°']], { lineThrough: true }),
      answer: '60', acceptableAnswers: ['60°'], explanation: 'Three equal angles on a line: 3<i>x</i> = 180, so <i>x</i> = 180 ÷ 3 = 60.' });
    add({ id: 'c2_comp_diag', topic: 'Angle properties', type: 'input', ref: 'Textbook 3D Q6 (p.53)',
      question: 'The two angles together make a right angle. Find <i>a</i>.',
      diagram: fan([0, 34, 90], [[0, 34, '34°'], [34, 90, 'a°', { color: HI }]], { c: [100, 180], w: 300, h: 210, len: 150 }),
      answer: '56', acceptableAnswers: ['56°'], explanation: 'Angles in a right angle add up to 90° (they are complementary): 90 − 34 = 56.' });

    // Vertically opposite + angles on a line at a crossing.
    [[38, 'v'], [38, 'l'], [71, 'v'], [124, 'l']].forEach(([a, k], i) => {
      const ans = k === 'v' ? a : 180 - a;
      add({ id: `c2_vo_${a}${k}`, topic: 'Angle properties', type: 'input', difficulty: i < 2 ? 'easy' : 'medium', ref: 'Textbook 3E Q2 (p.55)',
        question: 'Two straight lines cross. Find the value of <i>y</i>.',
        diagram: cross(0, a, [[0, a, fmtDeg(a)], k === 'v' ? [180, 180 + a, 'y°', { color: HI }] : [a, 180, 'y°']].map(x => x)),
        answer: String(ans), acceptableAnswers: [ans + '°'],
        explanation: k === 'v' ? `<i>y</i> is vertically opposite the ${a}° angle, and vertically opposite angles are equal: <i>y</i> = ${a}.`
          : `<i>y</i> and ${a}° sit next to each other on a straight line, so they add to 180°: <i>y</i> = 180 − ${a} = ${ans}.` });
    });

    // Parallel lines: name the pair, then find the angle.
    const REL = (i1, q1, i2, q2) => {
      if (i1 === i2) return ({ TR: 'BL', BL: 'TR', TL: 'BR', BR: 'TL' })[q1] === q2 ? 'vertically opposite' : 'on a line';
      if (q1 === q2) return 'corresponding';
      const [tq, bq] = i1 === 0 ? [q1, q2] : [q2, q1];
      if (!['BL', 'BR'].includes(tq) || !['TL', 'TR'].includes(bq)) return null;
      return (tq === 'BL' && bq === 'TR') || (tq === 'BR' && bq === 'TL') ? 'alternate' : 'co-interior';
    };
    const RULE = { corresponding: 'Corresponding angles on parallel lines are equal (the F shape).', alternate: 'Alternate angles on parallel lines are equal (the Z shape).',
      'co-interior': 'Co-interior angles on parallel lines add up to 180° (the C or U shape).', 'vertically opposite': 'Vertically opposite angles are equal.', 'on a line': 'Angles on a straight line add up to 180°.' };
    [[0, 'TR', 1, 'TR'], [0, 'BL', 1, 'TR'], [0, 'BR', 1, 'TR'], [0, 'TL', 1, 'TL'], [0, 'BR', 1, 'TL'], [0, 'BL', 1, 'TL'], [1, 'BR', 1, 'TL']].forEach(([i1, q1, i2, q2], n) => {
      const r = REL(i1, q1, i2, q2), opts = ['corresponding', 'alternate', 'co-interior', 'vertically opposite'];
      add({ id: `c2_pairname_${n + 1}`, topic: 'Parallel lines', type: 'mcq', difficulty: n < 3 ? 'easy' : 'medium', ref: 'Textbook 3F Q1–6 (p.56–57)',
        question: 'What kind of angle pair are <i>a</i> and <i>b</i>?',
        diagram: parallel([60, 65, 70, 55, 72, 58, 62][n], [[i1, q1, 'a'], [i2, q2, 'b']], { arrows: false }),
        options: opts.map(o => o[0].toUpperCase() + o.slice(1) + ' angles'), answer: opts.indexOf(r), fixedOrder: true,
        explanation: { corresponding: 'They are in the same position at each crossing: same side of the transversal, same side of each line (an F shape).',
          alternate: 'They are between the two lines, on opposite sides of the transversal (a Z shape).',
          'co-interior': 'They are between the two lines, on the same side of the transversal (a C or U shape).',
          'vertically opposite': 'They are opposite each other at the same crossing.' }[r] });
    });
    [[62, 0, 'TR', 1, 'TR', 'easy'], [55, 0, 'BL', 1, 'TR', null], [70, 0, 'BR', 1, 'TR', null], [48, 0, 'TL', 1, 'TL', null], [65, 0, 'BL', 1, 'TL', null],
     [58, 0, 'TR', 1, 'BL', 'challenging'], [75, 1, 'TL', 0, 'BL', 'challenging'], [52, 0, 'BR', 1, 'TL', null]].forEach(([th, i1, q1, i2, q2, d]) => {
      const given = quadSize(q1, th), ans = quadSize(q2, th);
      let r = REL(i1, q1, i2, q2), why;
      if (r) why = `${RULE[r]} So <i>x</i> = ${r === 'co-interior' || r === 'on a line' ? `180 − ${given} = ${ans}` : given}.`;
      else {   // two steps: vertically opposite, then corresponding
        const via = ({ TR: 'BL', BL: 'TR', TL: 'BR', BR: 'TL' })[q1];
        why = `Two steps. The angle vertically opposite ${given}° is also ${given}°. That angle and <i>x</i> are ${REL(i1, via, i2, q2)} angles, so <i>x</i> = ${ans}.`;
      }
      add({ id: `c2_par_${th}_${q1}${i1}_${q2}${i2}`, topic: 'Parallel lines', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 3G Q1–3 (p.58–59)',
        question: 'The arrows show the two lines are parallel. Find <i>x</i>, and know the reason.',
        diagram: parallel(th, [[i1, q1, fmtDeg(given)], [i2, q2, 'x°', { color: HI }]]),
        answer: String(ans), acceptableAnswers: [ans + '°'], explanation: why });
    });
    // Tests for parallelism.
    [[0, 'BL', 1, 'TR', 50, 50], [0, 'BR', 1, 'TR', 100, 60], [0, 'TR', 1, 'TR', 72, 72], [0, 'BL', 1, 'TL', 115, 65], [0, 'BL', 1, 'TL', 110, 75]].forEach(([i1, q1, i2, q2, a, b], n) => {
      const r = REL(i1, q1, i2, q2), par = r === 'co-interior' ? a + b === 180 : a === b;
      add({ id: `c2_test_${n + 1}`, topic: 'Parallel lines', type: 'mcq', difficulty: n > 2 ? 'challenging' : 'medium', ref: 'Textbook 3H Q1 (p.60)',
        question: 'Are the two lines parallel? (The diagram is not drawn to scale.)',
        diagram: parallel(r === 'co-interior' ? 65 : 60, [[i1, q1, fmtDeg(a)], [i2, q2, fmtDeg(b)]], { arrows: false }),
        options: par ? [`Yes: the ${r} angles are ${r === 'co-interior' ? 'supplementary' : 'equal'}`, `No: the ${r} angles are ${r === 'co-interior' ? 'not supplementary' : 'not equal'}`, 'You cannot tell without a protractor', 'Yes: any two lines cut by a transversal are parallel']
          : [`No: the ${r} angles are ${r === 'co-interior' ? 'not supplementary' : 'not equal'}`, `Yes: the ${r} angles are ${r === 'co-interior' ? 'supplementary' : 'equal'}`, 'You cannot tell without a protractor', 'Yes: any two lines cut by a transversal are parallel'],
        answer: 0,
        explanation: `These are ${r} angles. ${r === 'co-interior' ? `${a}° + ${b}° = ${a + b}°. Lines are parallel only if co-interior angles add to 180°.` : `${a}° and ${b}°: lines are parallel only if ${r} angles are equal.`} So the lines ${par ? 'are' : 'are not'} parallel.` });
    });

    // Triangle angle sum (drawn to scale).
    [[50, 60, 'easy'], [42, 74, null], [90, 35, null], [28, 37, null], [65, 65, null], [110, 30, 'challenging']].forEach(([b, c, d]) => {
      const a = 180 - b - c;
      add({ id: `c2_tri_${b}_${c}`, topic: 'Triangles', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 11C Q1 (p.229)',
        question: 'Find the value of <i>x</i>.',
        diagram: triangle({ b, c, labels: { A: 'x°', B: b === 90 ? '' : fmtDeg(b), C: fmtDeg(c) } }),
        answer: String(a), acceptableAnswers: [a + '°'],
        explanation: `The angles in a triangle add up to 180°: <i>x</i> + ${b} + ${c} = 180, so <i>x</i> = 180 − ${b + c} = ${a}.${b === 90 ? ' (The square marks a 90° angle.)' : ''}` });
    });
    // Algebra in the angle sum.
    add({ id: 'c2_tri_2x', topic: 'Triangles', type: 'input', difficulty: 'challenging', ref: 'Textbook 11C Q2 (p.229)',
      question: 'Find the value of <i>x</i>.', diagram: triangle({ b: 81, c: 33, labels: { A: '2x°', B: '81°', C: 'x°' } }),
      answer: '33', acceptableAnswers: ['33°'],
      explanation: 'Angle sum: 2<i>x</i> + <i>x</i> + 81 = 180. Collect like terms: 3<i>x</i> + 81 = 180, so 3<i>x</i> = 99 and <i>x</i> = 33. Check: 66 + 33 + 81 = 180 ✓.' });
    // Exterior angle theorem.
    [[48, 65, 'ext', 'easy'], [35, 80, 'ext', null], [57, 70, 'int', null], [40, 100, 'int', 'challenging']].forEach(([a, b, k, d]) => {
      // a = angle at A (top), b = angle at B (left), exterior at C = a + b
      const c = 180 - a - b, e = a + b;
      const labels = k === 'ext' ? { A: fmtDeg(a), B: fmtDeg(b), E: 'x°' } : { A: 'x°', B: fmtDeg(b), E: fmtDeg(e) };
      add({ id: `c2_ext_${a}_${b}_${k}`, topic: 'Triangles', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 11D Q1 (p.231)',
        question: 'One side of the triangle has been extended. Find the value of <i>x</i>.',
        diagram: triangle({ b, c, labels, ext: true }),
        answer: String(k === 'ext' ? e : a), acceptableAnswers: [(k === 'ext' ? e : a) + '°'],
        explanation: k === 'ext' ? `An exterior angle equals the sum of the two interior opposite angles: <i>x</i> = ${a} + ${b} = ${e}.`
          : `Exterior angle = sum of the two interior opposite angles: <i>x</i> + ${b} = ${e}, so <i>x</i> = ${e} − ${b} = ${a}.` });
    });
    // Isosceles triangles.
    [[24, 'base'], [70, 'base'], [40, 'apex'], [100, 'apex'], [56, 'base']].forEach(([v, k], n) => {
      const base = k === 'base' ? v : (180 - v) / 2, apex = 180 - 2 * base;
      const labels = k === 'base' ? { A: 'x°', B: fmtDeg(v) } : { A: fmtDeg(v), C: 'x°' };
      const ans = k === 'base' ? apex : base;
      add({ id: `c2_iso_${k}${v}`, topic: 'Triangles', type: 'input', difficulty: n === 0 ? 'easy' : n === 4 ? 'challenging' : 'medium', ref: 'Textbook 11E Q1 (p.233)',
        question: 'The tick marks show two equal sides. Find the value of <i>x</i>.',
        diagram: triangle({ b: base, c: base, labels, tick: 'AB=AC' }),
        answer: String(ans), acceptableAnswers: [ans + '°'],
        explanation: k === 'base' ? `The triangle is isosceles, so the two base angles are equal: both are ${v}°. Then <i>x</i> = 180 − ${v} − ${v} = ${apex}.`
          : `The base angles are equal, so 2<i>x</i> + ${v} = 180, 2<i>x</i> = ${180 - v}, <i>x</i> = ${base}.` });
    });

    // Quadrilateral angle sum (drawn with the right angles).
    [[[90, 57, 89, 124], 3, 'easy'], [[110, 70, 110, 70], 0, null], [[80, 95, 75, 110], 2, null], [[120, 60, 85, 95], 1, null], [[100, 100, 64, 96], 2, 'challenging']].forEach(([angs, ask, d], n) => {
      const labels = angs.map((a, i) => i === ask ? 'x°' : a === 90 ? '' : fmtDeg(a));
      const others = angs.filter((_, i) => i !== ask);
      add({ id: `c2_quad_${angs.join('_')}`, topic: 'Quadrilaterals', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 11G Q1 (p.239)',
        question: 'Find the value of <i>x</i>.', diagram: quad(angs, labels),
        answer: String(angs[ask]), acceptableAnswers: [angs[ask] + '°'],
        explanation: `The angles of a quadrilateral add up to 360°: <i>x</i> + ${others.join(' + ')} = 360, so <i>x</i> = 360 − ${others.reduce((s, x) => s + x, 0)} = ${angs[ask]}.${angs.includes(90) ? ' (The square marks 90°.)' : ''}` });
    });

    // Polygons: name from a picture, diagonals.
    const NAMES = { 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon', 12: 'dodecagon' };
    [[5, true], [6, false], [7, true], [8, true], [9, true], [10, true], [12, true]].forEach(([n, cv]) => {
      const ns = [3, 4, 5, 6, 7, 8, 9, 10, 12], near = ns.filter(x => x !== n).sort((a, b) => Math.abs(a - n) - Math.abs(b - n)).slice(0, 3);
      add({ id: `c2_name_${n}${cv ? '' : 'nc'}`, topic: 'Polygons', type: 'mcq', difficulty: n >= 9 ? 'medium' : 'easy', ref: 'Textbook 11A Q2 (p.224)',
        question: `Count the sides. What is this polygon called?`, diagram: polygon(n, { convex: cv }),
        options: [n, ...near].map(x => (NAMES[x][0].toUpperCase() + NAMES[x].slice(1)) + (x === n && !cv ? ' (non-convex)' : '')), answer: 0,
        explanation: `It has ${n} sides (and ${n} vertices), so it is a${'aeiou'.includes(NAMES[n][0]) ? 'n' : ''} ${NAMES[n]}.${cv ? '' : ' It is non-convex because one interior angle is reflex (it points inwards).'}` });
    });
    [[5, 'easy'], [6, null], [8, null], [10, 'challenging']].forEach(([n, d]) => {
      const ans = n * (n - 3) / 2;
      add({ id: `c2_diag_${n}`, topic: 'Polygons', type: 'input', ...(d ? { difficulty: d } : {}), ref: 'Textbook 11A Investigation 1 (p.225)',
        question: `How many diagonals does a convex ${NAMES[n]} have?`, answer: String(ans),
        explanation: `From each of the ${n} vertices you can draw a diagonal to every vertex except itself and its two neighbours: ${n - 3} diagonals. That counts each diagonal twice (once from each end), so ${n} × ${n - 3} ÷ 2 = ${ans}.` });
    });

    // Prisms and pyramids: faces, edges, vertices.
    const BASE = { 3: 'triangular', 4: 'square', 5: 'pentagonal', 6: 'hexagonal', 8: 'octagonal' };
    [['prism', 3, 'F'], ['prism', 5, 'E'], ['prism', 6, 'V'], ['prism', 8, 'F'], ['pyramid', 4, 'F'], ['pyramid', 5, 'E'], ['pyramid', 6, 'V'], ['pyramid', 3, 'E']].forEach(([kind, n, k], i) => {
      const F = kind === 'prism' ? n + 2 : n + 1, E = kind === 'prism' ? 3 * n : 2 * n, V = kind === 'prism' ? 2 * n : n + 1;
      const ans = { F, E, V }[k], word = { F: 'faces', E: 'edges', V: 'vertices' }[k];
      const name = kind === 'prism' ? `${BASE[n]} prism` : `${BASE[n]}-based pyramid`;
      const why = kind === 'prism'
        ? { F: `2 ends (${BASE[n]} shapes) + ${n} rectangles = ${F}.`, E: `${n} edges round each end × 2 + ${n} edges joining the ends = ${E}.`, V: `${n} corners on each end × 2 = ${V}.` }[k]
        : { F: `1 base + ${n} triangles = ${F}.`, E: `${n} edges round the base + ${n} edges up to the apex = ${E}.`, V: `${n} corners of the base + 1 apex = ${V}.` }[k];
      add({ id: `c2_fev_${kind}${n}${k}`, topic: 'Solids and nets', type: 'input', difficulty: i % 4 === 3 ? 'challenging' : 'medium', ref: 'Textbook 13A (p.270)',
        question: `How many ${word} does a ${name} have?`, answer: String(ans), explanation: why });
    });

    // Cube nets: exactly one net in each set folds into a cube (checked by rolling a cube).
    const NETSETS = [
      { id: 'a', ask: 'folds', list: [['P', [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [1, 2]]], ['Q', [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]]], ['R', [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [2, 0]]], ['S', [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [1, 0]]]] },
      { id: 'b', ask: 'folds', list: [['P', [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]]], ['Q', [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [1, 2]]], ['R', [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [2, 2]]], ['S', [[0, 0], [0, 1], [1, 1], [2, 1], [2, 0], [1, 2]]]] },
      { id: 'c', ask: 'folds', list: [['P', [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1]]], ['Q', [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [3, 0]]], ['R', [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [3, 1]]], ['S', [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [2, 0]]]] },
    ];
    NETSETS.forEach(ns => {
      const ok = ns.list.filter(([, c]) => foldsToCube(c));
      if (ok.length !== 1) throw new Error(`net set ${ns.id}: ${ok.length} nets fold into a cube`);
      const names = ns.list.map(x => x[0]);
      add({ id: `c2_net_${ns.id}`, topic: 'Solids and nets', type: 'mcq', difficulty: ns.id === 'c' ? 'challenging' : 'medium', ref: 'Textbook 13B Q3 (p.272)',
        question: 'Only one of these nets folds up into a cube. Which one?', diagram: nets(ns.list),
        options: names.map(n => 'Net ' + n), answer: names.indexOf(ok[0][0]),
        explanation: `Imagine folding net ${ok[0][0]}: every square becomes a different face. In the others, two squares land on the same face (they overlap) and one face is left open. Tip: a net with 4 squares in a row needs exactly one square above and one below that row. Cut one out of paper to check!` });
    });

    return out;
  }

  // ── Hand-written questions ───────────────────────────────
  const Q = [
    // Lines and points
    { id: 'c2_q1', topic: 'Lines and points', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3A (p.45)',
      question: 'What does the notation [AB] mean?',
      options: ['The line segment that starts at A and ends at B', 'The line through A, then B, that goes on forever both ways', 'The ray that starts at A and goes through B', 'The length of the line from A to B'], answer: 0,
      explanation: 'Square brackets on both ends mean the line stops at both ends: a segment. (AB) is the whole line, [AB) is a ray from A, and AB without brackets is the length.' },
    { id: 'c2_q2', topic: 'Lines and points', type: 'mcq', ref: 'Textbook 3A (p.45)',
      question: 'Which notation describes this?',
      diagram: svg(360, 80, line([40, 50], [320, 50]) + arrowHead([320, 50], 0) + dot([60, 50]) + dot([200, 50]) + text([60, 28], 'P', { bold: true }) + text([200, 28], 'Q', { bold: true })),
      options: ['[PQ)', '(PQ)', '[PQ]', '(QP]'], answer: 0,
      explanation: 'It starts at P (no arrow there) and goes on forever through Q (arrow). A ray starting at P is written [PQ): square bracket at the start, round bracket at the end that never stops.' },
    { id: 'c2_q3', topic: 'Lines and points', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3A (p.45)',
      question: 'What does it mean when three or more points are <b>collinear</b>?',
      options: ['They all lie on one straight line', 'They are all the same distance apart', 'Lines through them all meet at one point', 'They form a triangle'], answer: 0,
      explanation: '"Co-linear" = on the same line. Three points that form a triangle are NOT collinear.' },
    { id: 'c2_q4', topic: 'Lines and points', type: 'mcq', ref: 'Textbook 3A (p.45)',
      question: 'What does it mean when three or more lines are <b>concurrent</b>?',
      options: ['They all pass through the same point', 'They are all parallel', 'They are all the same length', 'They are all perpendicular to each other'], answer: 0,
      explanation: 'Concurrent lines all meet (intersect) at one single point.' },
    { id: 'c2_q5', topic: 'Lines and points', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3C (p.50)',
      question: 'What does [PQ] ⊥ [PS] mean?',
      options: ['[PQ] is perpendicular to [PS]', '[PQ] is parallel to [PS]', '[PQ] is the same length as [PS]', '[PQ] and [PS] never meet'], answer: 0,
      explanation: '⊥ means "is perpendicular to": the two segments meet at a right angle (90°). The symbol for parallel is <b>||</b>.' },
    { id: 'c2_q6', topic: 'Lines and points', type: 'mcq', ref: 'Textbook 3A (p.45)',
      question: 'Two different straight lines are drawn on a flat sheet of paper (a plane). Which is true?',
      options: ['They are either parallel or they intersect', 'They always intersect', 'They are always parallel', 'They can be neither parallel nor intersecting'], answer: 0,
      explanation: 'On a plane there are only two choices: the lines never meet (parallel) or they cross at one point (intersecting).' },
    { id: 'c2_q7', topic: 'Lines and points', type: 'mcq', ref: 'Textbook 3A (p.46)',
      question: 'How do we show on a diagram that two lines are parallel?',
      options: ['Matching arrowheads drawn in the middle of each line', 'A small square where they meet', 'Matching tick marks across each line', 'A dashed line between them'], answer: 0,
      explanation: 'Arrowheads (>) in the middle of the lines mark them as parallel. A small square marks a right angle; tick marks show equal lengths.' },
    { id: 'c2_q8', topic: 'Lines and points', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 3C Q5 (p.51)',
      question: 'If [AB] <b>||</b> [BC], what can you say about the points A, B and C?',
      options: ['They are collinear', 'They form a right angle at B', 'They form a triangle', 'Nothing at all'], answer: 0,
      explanation: '[AB] and [BC] share the point B. Parallel lines never meet, so the only way they can share a point is if they are the same straight line. So A, B and C lie on one line.' },
    { id: 'c2_q9', topic: 'Lines and points', type: 'input', ref: 'Textbook 3A Q4 (p.46)',
      question: 'Triangle PQR has three sides. How many of its sides pass through the point P?',
      answer: '2', explanation: 'Sides [PQ] and [PR] both have P as an end point. [QR] does not touch P.' },

    // Angles
    { id: 'c2_q10', topic: 'Angles', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3B (p.47)',
      question: 'Where two arms of an angle meet, the point is called the …',
      options: ['vertex', 'arm', 'ray', 'degree'], answer: 0,
      explanation: 'The lines are the arms and the point where they meet is the vertex.' },
    { id: 'c2_q11', topic: 'Angles', type: 'mcq', ref: 'Textbook 3B (p.48)',
      question: 'In this diagram, which angle is marked?',
      diagram: svg(340, 230, line([60, 200], [300, 200]) + line([60, 200], P([60, 200], 200, 40)) + line([60, 200], P([60, 200], 168, 75)) + arc([60, 200], 40, 75, '', { r: 50, color: HI })
        + text([46, 212], 'B', { bold: true }) + text([312, 206], 'A', { bold: true }) + text(P([60, 200], 216, 40), 'C', { bold: true }) + text(P([60, 200], 184, 75), 'D', { bold: true })),
      options: ['∠CBD', '∠ABC', '∠BCD', '∠ABD'], answer: 0,
      explanation: 'Three-point notation puts the vertex in the middle: the marked angle has its vertex at B and arms going to C and D, so it is ∠CBD (or ∠DBC). ∠BCD has its vertex at C, which is wrong.' },
    { id: 'c2_q12', topic: 'Angles', type: 'mcq', ref: 'Textbook 3B (p.48)',
      question: 'An angle ∠ABC measures 130°. What is the size of reflex ∠ABC?',
      options: ['230°', '50°', '130°', '310°'], answer: 0,
      explanation: 'The angle and its reflex angle go all the way round the vertex, so together they make 360°: 360 − 130 = 230°.' },
    { id: 'c2_q13', topic: 'Angles', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3B (p.47)',
      question: 'What fraction of a full turn is a right angle?',
      options: ['A quarter turn', 'A half turn', 'A third of a turn', 'Three quarters of a turn'], answer: 0,
      explanation: 'A full turn is 360°, and 90° is one quarter of 360°. A half turn (180°) is a straight angle.' },
    { id: 'c2_q14', topic: 'Angles', type: 'mcq', ref: 'Textbook 3B (p.48)',
      question: 'To measure an angle with a protractor, where do you put the centre of the protractor?',
      options: ['On the vertex, with the base line along one arm', 'On the end of one arm', 'Anywhere along an arm', 'In the middle of the angle'], answer: 0,
      explanation: 'The centre goes exactly on the vertex and the base line lies along one arm. Then count from the 0 on that arm round to the other arm.' },
    { id: 'c2_q15', topic: 'Angles', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 3B (p.48)',
      question: 'Mia measures an obtuse angle and reads 55° on her protractor. What has most likely gone wrong?',
      options: ['She read the wrong scale: the angle is really 125°', 'Nothing: obtuse angles can be 55°', 'She should have added 90°', 'Her protractor must be broken'], answer: 0,
      explanation: 'Obtuse angles are between 90° and 180°, so 55° cannot be right. Protractors have two scales; she read the one that starts on the other arm. 180 − 55 = 125°. Always ask: "does the size match the type of angle?"' },
    { id: 'c2_q16', topic: 'Angles', type: 'mcq', ref: 'Textbook 3B Q9 (p.50)',
      question: 'The hands of a clock show 3 o\'clock. What angle is between them?',
      options: ['90°', '30°', '180°', '45°'], answer: 0,
      explanation: 'From 12 to 3 is a quarter of a full turn: 360° ÷ 4 = 90°. (Each hour mark is 360 ÷ 12 = 30°, and 3 × 30 = 90.)' },

    // Angle properties
    { id: 'c2_q17', topic: 'Angle properties', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3D (p.51)',
      question: 'Angles at a point add up to …',
      options: ['360°', '180°', '90°', '270°'], answer: 0,
      explanation: 'Going all the way round a point is one full turn, which is 360°. Angles on a straight line add to 180°.' },
    { id: 'c2_q18', topic: 'Angle properties', type: 'mcq', ref: 'Textbook 3E (p.54)',
      question: 'Two straight lines cross. How many pairs of vertically opposite angles are formed?',
      options: ['2', '1', '4', '3'], answer: 0,
      explanation: 'Crossing lines make 4 angles. They form two pairs of equal, vertically opposite angles.' },
    { id: 'c2_q19', topic: 'Angle properties', type: 'mcq', ref: 'Textbook 3D Q5 (p.53)',
      question: 'Which expression gives the angle supplementary to <i>y</i>°?',
      options: ['(180 − <i>y</i>)°', '(90 − <i>y</i>)°', '(360 − <i>y</i>)°', '(<i>y</i> − 180)°'], answer: 0,
      explanation: 'Supplementary angles add to 180°, so the other angle is 180 − <i>y</i>. (90 − <i>y</i> would be the complement.)' },
    { id: 'c2_q20', topic: 'Angle properties', type: 'short', difficulty: 'challenging', ref: 'Textbook 3E (p.54)',
      question: 'Explain why vertically opposite angles are always equal. Use the fact that angles on a straight line add up to 180°.',
      answer: 'Call the angles a, b, c round the crossing, with a and c vertically opposite and b between them. a + b = 180 (on a line) and c + b = 180 (on a line). Both equal 180 − b, so a = c.',
      explanation: 'This is a proof: it works for every pair of crossing lines, not just one you measured.' },

    // Parallel lines
    { id: 'c2_q21', topic: 'Parallel lines', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3F (p.55)',
      question: 'What is a <b>transversal</b>?',
      options: ['A line that crosses two or more other lines', 'A line that is parallel to another line', 'A line at right angles to another', 'The point where two lines cross'], answer: 0,
      explanation: 'A transversal cuts across other lines, creating corresponding, alternate and co-interior angle pairs.' },
    { id: 'c2_q22', topic: 'Parallel lines', type: 'mcq', ref: 'Textbook 3G (p.57)',
      question: 'When a transversal cuts two parallel lines, co-interior angles are …',
      options: ['supplementary (they add to 180°)', 'equal', 'complementary (they add to 90°)', 'always 90°'], answer: 0,
      explanation: 'Corresponding and alternate angles are equal; co-interior angles add to 180°.' },
    { id: 'c2_q23', topic: 'Parallel lines', type: 'mcq', ref: 'Textbook 3G (p.57)',
      question: 'Which letter shape helps you spot <b>alternate</b> angles?',
      options: ['Z', 'F', 'C (or U)', 'X'], answer: 0,
      explanation: 'Alternate angles sit in the corners of a Z. Corresponding angles make an F; co-interior angles make a C or U; vertically opposite angles make an X.' },
    { id: 'c2_q24', topic: 'Parallel lines', type: 'short', difficulty: 'challenging', ref: 'Textbook 3H (p.60)',
      question: 'Describe two different tests you could use to check whether two lines cut by a transversal are parallel.',
      answer: 'Any two of: corresponding angles are equal; alternate angles are equal; co-interior angles add to 180°. If one of these is true, the lines are parallel.',
      explanation: 'These tests are the angle facts used backwards.' },

    // Constructions
    { id: 'c2_q25', topic: 'Constructions', type: 'mcq', difficulty: 'easy', ref: 'Textbook 3I (p.61)',
      question: 'In a geometric construction, which tools are you allowed to use?',
      options: ['A ruler and a compass only', 'A protractor and a ruler', 'A protractor only', 'Any tools you like'], answer: 0,
      explanation: 'Constructions use only a ruler (for straight lines) and a compass (for arcs). A protractor is only used afterwards to check.' },
    { id: 'c2_q26', topic: 'Constructions', type: 'mcq', ref: 'Textbook 3I (p.62)',
      question: 'What does it mean to <b>bisect</b> an angle?',
      options: ['Cut it into two equal angles', 'Double its size', 'Draw a line at right angles to one arm', 'Measure it with a protractor'], answer: 0,
      explanation: '"Bi-sect" means cut in two. The angle bisector splits the angle into two equal halves.' },
    { id: 'c2_q27', topic: 'Constructions', type: 'mcq', ref: 'Textbook 3I (p.62)',
      question: 'The perpendicular bisector of [AB] …',
      options: ['crosses [AB] at its midpoint, at 90°', 'crosses [AB] at A, at 90°', 'is parallel to [AB]', 'cuts [AB] into two different lengths'], answer: 0,
      explanation: 'Perpendicular = at right angles; bisector = cuts it in half. So it meets [AB] at the midpoint M, at 90°.' },
    { id: 'c2_q28', topic: 'Constructions', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 3I (p.62)',
      question: 'When constructing the perpendicular bisector of [AB], why must the compass radius be <b>more than half</b> of AB?',
      options: ['Otherwise the arcs drawn from the two end points would not meet', 'So the line comes out parallel', 'So that you can use a protractor', 'It does not matter what radius you use'], answer: 0,
      explanation: 'The arcs from A and B must cross above and below [AB]. If the radius were less than half of AB, the two circles would not reach each other. (The textbook says to use a radius just less than AB.)' },
    { id: 'c2_q29', topic: 'Constructions', type: 'mcq', ref: 'Textbook 3I (p.61)',
      question: 'What is the <b>radius</b> of a compass?',
      options: ['The distance from the sharp point to the pencil tip', 'The length of the compass arms', 'The width of the circle it draws', 'The angle between the arms'], answer: 0,
      explanation: 'The radius is the gap between the point and the pencil. Keep it fixed when the steps say "the same radius".' },
    { id: 'c2_q30', topic: 'Constructions', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 3I Q6 (p.64)',
      question: 'You construct the perpendicular bisectors of all three sides of a triangle. What do you notice?',
      options: ['They all meet at one point (they are concurrent)', 'They are all parallel', 'They all pass through the same vertex', 'They form a smaller copy of the triangle'], answer: 0,
      explanation: 'The three perpendicular bisectors of a triangle are always concurrent. That point is the same distance from all three corners.' },
    { id: 'c2_q31', topic: 'Constructions', type: 'mcq', ref: 'Textbook 3I (p.63)',
      question: 'To construct a right angle at a point P on a line, what is the first step?',
      options: ['Draw a semicircle centred at P that cuts the line twice', 'Measure 90° with a protractor', 'Draw an arc from one end of the line', 'Draw a line through P at any angle'], answer: 0,
      explanation: 'The semicircle gives two points M and N the same distance from P. Arcs from M and N then meet at a point W straight above P, and [PW] ⊥ the line.' },

    // Polygons
    { id: 'c2_q32', topic: 'Polygons', type: 'mcq', difficulty: 'easy', ref: 'Textbook 11A (p.222)',
      question: 'Which of these is a polygon?',
      options: ['A closed shape with straight sides that do not cross', 'A circle', 'A shape with one curved side', 'An open zig-zag line'], answer: 0,
      explanation: 'A polygon is closed, has only straight sides, and the sides do not cross. Circles and shapes with curves are not polygons.' },
    { id: 'c2_q33', topic: 'Polygons', type: 'mcq', ref: 'Textbook 11A (p.223)',
      question: 'What makes a polygon <b>convex</b>?',
      options: ['It has no reflex interior angles', 'All its sides are equal', 'It has at least one reflex angle', 'It has an even number of sides'], answer: 0,
      explanation: 'A convex polygon has no interior angle bigger than 180°. Any two points inside can be joined without leaving the shape.' },
    { id: 'c2_q34', topic: 'Polygons', type: 'mcq', ref: 'Textbook 11A (p.223)',
      question: 'A <b>regular</b> polygon has …',
      options: ['all sides equal and all angles equal', 'all sides equal only', 'all angles equal only', 'exactly four sides'], answer: 0,
      explanation: 'Both conditions are needed. A rhombus has equal sides but different angles, and a rectangle has equal angles but different sides, so neither is regular. A square is.' },
    { id: 'c2_q35', topic: 'Polygons', type: 'mcq', difficulty: 'easy', ref: 'Textbook 11B (p.226)',
      question: 'A triangle has sides of 5 cm, 7 cm and 5 cm. What type of triangle is it?',
      options: ['Isosceles', 'Equilateral', 'Scalene', 'Right angled'], answer: 0,
      explanation: 'Two sides are equal (5 cm and 5 cm), so it is isosceles. Equilateral needs all three equal; scalene needs none equal.' },
    { id: 'c2_q36', topic: 'Polygons', type: 'mcq', ref: 'Textbook 11B (p.226)',
      question: 'A triangle has angles 30°, 50° and 100°. Classify it by its angles.',
      options: ['Obtuse angled', 'Acute angled', 'Right angled', 'Equilateral'], answer: 0,
      explanation: 'One angle (100°) is obtuse, so the triangle is obtuse angled. An acute-angled triangle needs all three angles under 90°.' },
    { id: 'c2_q37', topic: 'Polygons', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 11B (p.226)',
      question: 'Is every equilateral triangle also isosceles?',
      options: ['Yes: it has at least two equal sides', 'No: isosceles means exactly two equal sides', 'Only if it has a right angle', 'No: they are different shapes'], answer: 0,
      explanation: 'Isosceles means at least two equal sides. An equilateral triangle has three, which includes two, so it counts as isosceles too.' },
    { id: 'c2_q38', topic: 'Polygons', type: 'mcq', ref: 'Textbook 11A (p.223)',
      question: 'What is a <b>diagonal</b> of a polygon?',
      options: ['A line segment joining two vertices that are not next to each other', 'Any side of the polygon', 'A line from a vertex to the middle of a side', 'A line of symmetry'], answer: 0,
      explanation: 'A diagonal joins two non-neighbouring vertices. Joining neighbours would just give a side.' },
    { id: 'c2_q39', topic: 'Polygons', type: 'input', ref: 'Textbook 11A Q3 (p.224)',
      question: 'How many sides does a heptagon have?',
      answer: '7', explanation: 'Hepta = 7 (like a heptathlon with 7 events). Hexagon = 6, octagon = 8.' },

    // Triangles
    { id: 'c2_q40', topic: 'Triangles', type: 'mcq', difficulty: 'easy', ref: 'Textbook 11C (p.228)',
      question: 'The interior angles of any triangle add up to …',
      options: ['180°', '360°', '90°', '270°'], answer: 0,
      explanation: 'Tear the three corners off a paper triangle and put them side by side: they make a straight line, 180°.' },
    { id: 'c2_q41', topic: 'Triangles', type: 'mcq', ref: 'Textbook 11C Q3 (p.229)',
      question: 'Each angle in an equilateral triangle measures …',
      options: ['60°', '90°', '45°', '180°'], answer: 0,
      explanation: 'All three angles are equal and add to 180°: 180 ÷ 3 = 60°.' },
    { id: 'c2_q42', topic: 'Triangles', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 11C Q4 (p.229)',
      question: 'Why is it impossible to draw a triangle with two obtuse angles?',
      options: ['Two obtuse angles already add up to more than 180°', 'Obtuse angles cannot be in triangles at all', 'The sides would be too long', 'It is possible if the triangle is big enough'], answer: 0,
      explanation: 'Each obtuse angle is more than 90°, so two of them are more than 180° before the third angle is even added. The angle sum is only 180°.' },
    { id: 'c2_q43', topic: 'Triangles', type: 'mcq', ref: 'Textbook 11D (p.230)',
      question: 'The exterior angle theorem says an exterior angle of a triangle equals …',
      options: ['the sum of the two interior opposite angles', 'the interior angle next to it', '180° minus the two opposite angles', 'half the angle sum'], answer: 0,
      explanation: 'Exterior angle = sum of the two opposite interior angles. (The interior angle next to it is supplementary to it instead.)' },
    { id: 'c2_q44', topic: 'Triangles', type: 'mcq', ref: 'Textbook 11D (p.230)',
      question: 'How many exterior angles does a triangle have?',
      options: ['6', '3', '1', '2'], answer: 0,
      explanation: 'At each of the 3 vertices you can extend either of the two sides, so there are 2 × 3 = 6 exterior angles (in 3 equal pairs).' },
    { id: 'c2_q45', topic: 'Triangles', type: 'mcq', ref: 'Textbook 11E (p.232)',
      question: 'In an isosceles triangle, the angles opposite the equal sides are called …',
      options: ['the base angles, and they are equal', 'the vertical angles, and they are equal', 'the base angles, and they add to 90°', 'the apex angles'], answer: 0,
      explanation: 'The equal sides meet at the apex (vertical angle). The other two angles, next to the base, are the base angles and are always equal.' },
    { id: 'c2_q46', topic: 'Triangles', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 11E (p.232)',
      question: 'In an isosceles triangle, a line is drawn from the apex to the midpoint of the base. Which is true?',
      options: ['It bisects the vertical angle and meets the base at 90°', 'It is parallel to one of the equal sides', 'It is always longer than the equal sides', 'It makes two different-sized triangles'], answer: 0,
      explanation: 'The triangle is symmetrical about this line, so it cuts the apex angle in half and is perpendicular to the base.' },
    { id: 'c2_q47', topic: 'Triangles', type: 'short', difficulty: 'challenging', ref: 'Textbook 11C proof (p.228)',
      question: 'Explain why the exterior angle of a triangle equals the sum of the two interior opposite angles. Call the interior angles <i>a</i>, <i>b</i>, <i>c</i> and the exterior angle <i>x</i> (next to <i>c</i>).',
      answer: 'a + b + c = 180 (angle sum of a triangle). x + c = 180 (angles on a line). Both equal 180, so x + c = a + b + c, which gives x = a + b.',
      explanation: 'Two facts you already know, put together, prove the theorem for every triangle.' },

    // Quadrilaterals
    { id: 'c2_q48', topic: 'Quadrilaterals', type: 'mcq', difficulty: 'easy', ref: 'Textbook 11G (p.238)',
      question: 'The angles of a quadrilateral add up to …',
      options: ['360°', '180°', '540°', '400°'], answer: 0,
      explanation: 'A diagonal splits any quadrilateral into two triangles: 180° + 180° = 360°.' },
    { id: 'c2_q49', topic: 'Quadrilaterals', type: 'mcq', ref: 'Textbook 11F (p.235)',
      question: 'Which quadrilateral has exactly <b>one</b> pair of parallel sides?',
      options: ['Trapezium', 'Parallelogram', 'Rhombus', 'Kite'], answer: 0,
      explanation: 'A trapezium has one pair of parallel sides. Parallelograms, rhombuses, rectangles and squares have two pairs; a kite usually has none.' },
    { id: 'c2_q50', topic: 'Quadrilaterals', type: 'mcq', ref: 'Textbook 11F (p.235)',
      question: 'A <b>kite</b> has …',
      options: ['two pairs of equal sides that are next to each other', 'two pairs of parallel sides', 'all four sides equal', 'one pair of parallel sides'], answer: 0,
      explanation: 'In a kite the equal sides are adjacent (next to each other). In a parallelogram the equal sides are opposite each other.' },
    { id: 'c2_q51', topic: 'Quadrilaterals', type: 'mcq', ref: 'Textbook 11F Q3 (p.237)',
      question: 'Which statement is true?',
      options: ['Every square is a rhombus', 'Every rhombus is a square', 'Every parallelogram is a rectangle', 'Every kite is a parallelogram'], answer: 0,
      explanation: 'A square has four equal sides, so it is a rhombus (a special one with right angles). A rhombus does not need right angles, so it is not always a square.' },
    { id: 'c2_q52', topic: 'Quadrilaterals', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 11F (p.236)',
      question: 'In which quadrilateral are the diagonals equal in length but <b>not</b> perpendicular?',
      options: ['A rectangle (that is not a square)', 'A rhombus', 'A kite', 'A square'], answer: 0,
      explanation: 'A rectangle\'s diagonals are equal and bisect each other, but they only cross at 90° if it is a square. A rhombus\'s diagonals are perpendicular but not equal.' },
    { id: 'c2_q53', topic: 'Quadrilaterals', type: 'mcq', ref: 'Textbook 11F (p.236)',
      question: 'Which property belongs to every parallelogram?',
      options: ['Opposite angles are equal', 'All angles are 90°', 'Diagonals are equal', 'Diagonals cross at right angles'], answer: 0,
      explanation: 'In a parallelogram, opposite sides are equal, opposite angles are equal, and the diagonals bisect each other. The other properties belong only to special parallelograms.' },
    { id: 'c2_q54', topic: 'Quadrilaterals', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 11F Q3 (p.237)',
      question: 'Can a kite have a pair of parallel sides?',
      options: ['Yes, but only if it is also a rhombus', 'Yes, always', 'Never', 'Only if it has a right angle'], answer: 0,
      explanation: 'A kite with all four sides equal is a rhombus, and a rhombus has parallel sides. An ordinary kite has no parallel sides.' },
    { id: 'c2_q55', topic: 'Quadrilaterals', type: 'input', difficulty: 'challenging', ref: 'Textbook 11G Q2 (p.240)',
      question: 'A parallelogram has one angle of 65°. What is the size of the angle next to it?',
      answer: '115', acceptableAnswers: ['115°'],
      explanation: 'Neighbouring angles in a parallelogram are co-interior angles between parallel sides, so they add to 180°: 180 − 65 = 115°.' },

    // Solids and nets
    { id: 'c2_q56', topic: 'Solids and nets', type: 'mcq', difficulty: 'easy', ref: 'Textbook 13A (p.268)',
      question: 'What is an <b>edge</b> of a solid?',
      options: ['A line where two surfaces meet', 'A corner of the solid', 'A flat surface', 'The inside of the solid'], answer: 0,
      explanation: 'Faces are flat surfaces, edges are where two surfaces meet, and vertices are the corners.' },
    { id: 'c2_q57', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A (p.269)',
      question: 'Which solid has a uniform cross-section that is a circle?',
      options: ['Cylinder', 'Cone', 'Sphere', 'Pyramid'], answer: 0,
      explanation: 'Slice a cylinder anywhere along its length and you get the same circle. A cone tapers (the circles get smaller); a sphere\'s slices change size too.' },
    { id: 'c2_q58', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A Q3 (p.270)',
      question: 'Which solid best describes a can of soup?',
      options: ['Cylinder', 'Rectangular prism', 'Cone', 'Sphere'], answer: 0,
      explanation: 'A can has two circular flat ends and a curved side, with the same circle all the way along: a cylinder.' },
    { id: 'c2_q59', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A Q4 (p.270)',
      question: 'What shape are the side faces of every pyramid?',
      options: ['Triangles', 'Rectangles', 'Squares', 'The same shape as the base'], answer: 0,
      explanation: 'A pyramid\'s side faces all rise from the base to meet at the apex, so they are triangles. A prism\'s side faces are rectangles.' },
    { id: 'c2_q60', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A (p.269)',
      question: 'Which pair are both <b>tapered</b> solids (they come to a point)?',
      options: ['Pyramid and cone', 'Prism and cylinder', 'Cone and cylinder', 'Sphere and cube'], answer: 0,
      explanation: 'Pyramids and cones narrow to an apex. Prisms and cylinders have a uniform cross-section instead.' },
    { id: 'c2_q61', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13B (p.271)',
      question: 'What is a <b>net</b> of a solid?',
      options: ['A flat 2-D pattern that folds up to make the solid', 'A drawing of the solid from the top', 'The dashed lines showing hidden edges', 'A slice through the solid'], answer: 0,
      explanation: 'Cut out a net, fold along the lines, and it makes the 3-D solid.' },
    { id: 'c2_q62', topic: 'Solids and nets', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 13B (p.271)',
      question: 'The net of a triangular prism is made of …',
      options: ['2 triangles and 3 rectangles', '3 triangles and 2 rectangles', '4 triangles', '1 triangle and 3 rectangles'], answer: 0,
      explanation: 'A prism has two identical end faces (here triangles) and one rectangle for each side of the end shape (3 sides → 3 rectangles).' },
    { id: 'c2_q63', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A (p.268)',
      question: 'Why do we draw some edges of a solid with dashed lines?',
      options: ['To show hidden edges at the back', 'To show the edges that are longer', 'To show where to cut the net', 'To show curved surfaces'], answer: 0,
      explanation: 'Dashed lines show edges we could not see from the front. They help the drawing look 3-D.' },
    { id: 'c2_q64', topic: 'Solids and nets', type: 'mcq', ref: 'Textbook 13A (p.269)',
      question: 'Another name for a triangular-based pyramid is a …',
      options: ['tetrahedron', 'triangular prism', 'cone', 'hexahedron'], answer: 0,
      explanation: 'It has 4 triangular faces, and "tetra" means 4.' },

    // Drawing solids
    { id: 'c2_q65', topic: 'Drawing solids', type: 'mcq', difficulty: 'easy', ref: 'Textbook 13C (p.273)',
      question: 'In an <b>oblique</b> projection, what do you draw first?',
      options: ['The front face, drawn flat and true to shape', 'The top face', 'A vertical edge', 'The hidden edges'], answer: 0,
      explanation: 'Oblique: draw the front face as it really is, then add depth lines at 45°.' },
    { id: 'c2_q66', topic: 'Drawing solids', type: 'mcq', ref: 'Textbook 13C (p.273)',
      question: 'In an oblique projection, the depth lines are drawn …',
      options: ['at 45° and shorter than the real length', 'at 30° and the real length', 'straight up', 'at 90° to the front face'], answer: 0,
      explanation: 'Oblique depth lines go back at 45° and are drawn shorter so the solid does not look stretched.' },
    { id: 'c2_q67', topic: 'Drawing solids', type: 'mcq', ref: 'Textbook 13C (p.273)',
      question: 'In an <b>isometric</b> projection, the horizontal edges are drawn …',
      options: ['at 30° to the horizontal', 'at 45° to the horizontal', 'flat across the page', 'at 60° to the horizontal'], answer: 0,
      explanation: 'Isometric paper is made of equilateral triangles; you start from a vertical edge and draw the horizontal edges at 30°.' },
    { id: 'c2_q68', topic: 'Drawing solids', type: 'mcq', difficulty: 'challenging', ref: 'Textbook 13C (p.273)',
      question: 'In an isometric drawing of a cube, how do the lengths of the drawn edges compare?',
      options: ['They are all the same length', 'The vertical edges are longer', 'The back edges are shorter', 'The 30° edges are half the length'], answer: 0,
      explanation: 'In isometric projection every edge of a cube is drawn the same length. (Only oblique drawings shorten the depth.)' },
    { id: 'c2_q69', topic: 'Drawing solids', type: 'input', ref: 'Textbook 13C Q2 (p.274)',
      question: 'How many cubes make up this solid? (No cubes are hidden behind.)',
      diagram: iso([[0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 1, 0], [0, 0, 1]]),
      answer: '5', explanation: 'Count the bottom layer: 3 in a row going right plus 1 behind on the left = 4. Then 1 on top at the front corner. 4 + 1 = 5.' },

    // ── Paper tasks (parent checks the drawing later) ──
    { id: 'c2_pp1', topic: 'Lines and points', type: 'paper', difficulty: 'easy', ref: 'Textbook 3A Q6 (p.46)',
      question: 'Draw a separate, labelled diagram for each statement:<br>a) X is a point on [PQ].<br>b) [EF) and (GH) meet at M.<br>c) R, S, T and U are collinear.<br>d) (JK) <b>||</b> (LN).<br>e) [AB], (CD) and (EF) are concurrent at O.',
      answer: 'a) A segment with P and Q at the ends (no arrows) and X between them.<br>b) A ray starting at E through F (arrow beyond F only), a full line through G and H (arrows at both ends), crossing at M.<br>c) Four points on one straight line.<br>d) Two lines with arrows at both ends and matching parallel arrowheads in the middle.<br>e) Three lines/segments all passing through one point O; [AB] has no arrows, (CD) and (EF) have arrows both ends.',
      explanation: 'Check the brackets: [ ] = stops at that end, ( ) = carries on with an arrow.' },
    { id: 'c2_pp2', topic: 'Angles', type: 'paper', ref: 'Textbook 3B Q8 (p.50)',
      question: 'Use a ruler and protractor to draw these angles accurately. Label every angle with its three letters.<br>a) ∠PQR = 47°<br>b) ∠STU = 132°<br>c) ∠ABC = 75°<br>d) ∠XYZ = 165°',
      answer: 'Measure each with a protractor: within ±2° is fine. The middle letter must be at the vertex (Q, T, B, Y). Arms drawn with a ruler. b) and d) should look obtuse; a) and c) acute.',
      explanation: 'Start with one arm, put the protractor centre on the vertex, count from the 0 on that arm.' },
    { id: 'c2_pp3', topic: 'Angles', type: 'paper', difficulty: 'challenging', ref: 'Textbook 3B (p.48)',
      question: 'Draw a reflex angle ∠DEF = 250° accurately. Explain in one line how you did it, since a protractor only goes to 180°.',
      answer: 'Method: draw the 110° angle (360 − 250) and mark the reflex angle on the outside with an arc going the long way round. Check: the small angle measures about 110°.',
      explanation: 'Reflex angle + its angle = 360°.' },
    { id: 'c2_pp4', topic: 'Lines and points', type: 'paper', ref: 'Textbook 3C Q4 (p.51)',
      question: 'Draw accurately: [AB] is 6 cm long, [AC] is 8 cm long, and [AB] ⊥ [AC]. Join B to C and measure BC.',
      answer: 'Right angle at A (check with protractor or set square), AB = 6 cm, AC = 8 cm. BC should measure 10 cm (accept 9.8–10.2 cm).',
      explanation: '⊥ means the segments meet at 90°. Mark the right angle with a small square.' },
    { id: 'c2_pp5', topic: 'Angle properties', type: 'paper', ref: 'Textbook 3D–3E (p.51–55)',
      question: 'Draw two straight lines that cross, so that one angle is 40° (use a protractor). Without measuring, write the sizes of the other three angles on your drawing and give a reason for each.',
      answer: 'The angle opposite the 40° is 40° (vertically opposite). The two others are each 140° (angles on a line: 180 − 40). All four add to 360°.',
      explanation: 'Check yourself: the four angles should add to 360°.' },
    { id: 'c2_pp6', topic: 'Parallel lines', type: 'paper', ref: 'Textbook 3G (p.58–59)',
      question: 'Copy this diagram. Mark every angle that is equal to the 65° angle with a dot, and write 115° in every other angle. Then label one pair of corresponding angles C, one pair of alternate angles A, and one pair of co-interior angles I.',
      diagram: parallel(65, [[0, 'TR', '65°']]),
      answer: 'Four angles of 65° (top-right and bottom-left at both crossings) and four of 115° (the others). Check the labels: C = same position at each crossing; A = between the lines on opposite sides of the transversal (Z); I = between the lines on the same side (C/U), one 65° and one 115°.',
      explanation: 'At each crossing there are only two sizes: the angle and 180° minus it.' },
    { id: 'c2_pp7', topic: 'Constructions', type: 'paper', ref: 'Textbook 3I Q1 (p.64)',
      question: 'Use a protractor to draw ∠ABC = 80°. Then use a <b>compass and ruler only</b> to bisect it. Check with a protractor.',
      answer: 'Arcs must still be visible (not rubbed out): one arc from B crossing both arms at P and Q, two equal arcs from P and Q crossing at M, line from B through M. Each half should measure 40° (±2°).',
      explanation: 'Do not erase your construction arcs: they show your method.' },
    { id: 'c2_pp8', topic: 'Constructions', type: 'paper', ref: 'Textbook 3I Q5 (p.64)',
      question: 'Draw [PQ] 7 cm long. Construct its perpendicular bisector with a compass and ruler. Label the crossing point M and measure MP and MQ.',
      answer: 'Two arcs from P and two from Q (same radius, more than 3.5 cm) crossing above and below; a straight line through both crossings. MP = MQ = 3.5 cm, and the angle at M is 90°.',
      explanation: 'If MP and MQ are not equal, the compass radius probably slipped between the two arcs.' },
    { id: 'c2_pp9', topic: 'Constructions', type: 'paper', ref: 'Textbook 3I Q2 (p.64)',
      question: 'Draw [AB] 10 cm long and mark C on it so that AC = 3 cm. Use a compass and ruler to construct a right angle at C.',
      answer: 'A semicircle centred at C cutting [AB] at two points; two equal arcs from those points crossing at W; line [CW]. ∠WCB should measure 90° (±2°). Arcs visible.',
      explanation: 'Check with a protractor or the corner of a book.' },
    { id: 'c2_pp10', topic: 'Constructions', type: 'paper', difficulty: 'challenging', ref: 'Textbook 3I Q4 (p.64)',
      question: 'Draw [AB] 5 cm long. Construct a 90° angle at A, then mark C on the new line so that AC = 12 cm. Draw [BC]. Measure BC and ∠CBA.',
      answer: 'Right angle at A constructed with arcs. BC = 13 cm (accept 12.8–13.2). ∠CBA ≈ 67° (accept 65–69°).',
      explanation: 'If the right angle is off, BC and the angle will be off too.' },
    { id: 'c2_pp11', topic: 'Constructions', type: 'paper', difficulty: 'challenging', ref: 'Textbook 3I + Activity 2 (p.64–65)',
      question: 'Construct an angle of exactly 45° using only a compass and ruler. (Hint: two constructions in a row.)',
      answer: 'Construct a right angle (90°) on a line, then bisect it. Both sets of arcs visible. The result measures 45° (±2°).',
      explanation: 'Bisecting halves the angle: 90 ÷ 2 = 45.' },
    { id: 'c2_pp12', topic: 'Constructions', type: 'paper', difficulty: 'challenging', ref: 'Textbook 3I Q6 (p.64)',
      question: 'Draw any large triangle. Construct the perpendicular bisector of each of its three sides. What do you notice?',
      answer: 'Three perpendicular bisectors, each with visible arcs. They all meet at one point (concurrent). Bonus: that point is the same distance from all three corners.',
      explanation: 'If they do not quite meet, it is usually a small drawing error.' },
    { id: 'c2_pp13', topic: 'Polygons', type: 'paper', ref: 'Textbook 11A Q4–5, 8 (p.224–225)',
      question: 'a) Sketch a convex pentagon and a non-convex pentagon. Mark the reflex angle on the non-convex one.<br>b) Draw a convex hexagon and draw in all of its diagonals. How many are there?',
      answer: 'a) Both have 5 straight sides; the non-convex one has one corner pointing inwards with its reflex angle marked. b) 9 diagonals, each joining two non-neighbouring corners.',
      explanation: 'Count diagonals from each corner (3 each) then halve: 6 × 3 ÷ 2 = 9.' },
    { id: 'c2_pp14', topic: 'Polygons', type: 'paper', ref: 'Textbook 11B Q2 (p.226)',
      question: 'Sketch one triangle of each kind and mark equal sides with ticks and right angles with a square:<br>a) a scalene obtuse-angled triangle<br>b) an isosceles right-angled triangle<br>c) an equilateral triangle with sides of 5 cm (use a compass for accuracy)',
      answer: 'a) No ticks (all sides different) and one angle clearly over 90°. b) A right-angle square, and ticks on the two equal sides that meet at the right angle. c) All sides 5 cm (±1 mm), all angles about 60°, with matching ticks on all three sides. Compass arcs visible.',
      explanation: 'For c): draw a 5 cm base, then arcs of radius 5 cm from each end; they cross at the third corner.' },
    { id: 'c2_pp15', topic: 'Quadrilaterals', type: 'paper', ref: 'Textbook 11F Q1 (p.237)',
      question: 'Sketch and fully label a parallelogram, a rhombus and a kite. Show equal sides with ticks, parallel sides with arrows, and equal angles with matching arcs. Draw in the diagonals of the rhombus and kite and mark any right angles.',
      answer: 'Parallelogram: two sets of arrows, opposite sides ticked in pairs, opposite angles matched. Rhombus: four equal ticks, two sets of arrows, diagonals crossing at 90° (square marked). Kite: two pairs of adjacent sides ticked, diagonals at 90°, one pair of opposite angles matched.',
      explanation: 'Use the properties table: the markings are the properties.' },
    { id: 'c2_pp16', topic: 'Solids and nets', type: 'paper', ref: 'Textbook 13A Q2 (p.270)',
      question: 'Draw each solid, using dashed lines for hidden edges:<br>a) a cone<br>b) a hexagonal-based pyramid<br>c) an octagonal prism<br>d) a sphere',
      answer: 'a) A circular base (back half dashed) and an apex. b) A 6-sided base with 6 edges up to one apex; back edges dashed. c) Two octagon ends joined by 8 parallel edges; hidden ones dashed. d) A circle with an "equator" ellipse (back half dashed).',
      explanation: 'Dashed lines are what make the drawing look 3-D.' },
    { id: 'c2_pp17', topic: 'Solids and nets', type: 'paper', ref: 'Textbook 13B Q4 (p.272)',
      question: 'Draw an accurate net of a box (rectangular prism) 4 cm long, 3 cm wide and 2 cm high. Mark all side lengths. Optional: cut it out and fold it to check.',
      answer: '6 rectangles: two 4×3, two 4×2, two 3×2, arranged so they fold into a box (no overlaps, no gaps). Edges that join must be the same length. Measurements within 1 mm.',
      explanation: 'Check: each pair of opposite faces is the same size.' },
    { id: 'c2_pp18', topic: 'Solids and nets', type: 'paper', difficulty: 'challenging', ref: 'Textbook 13B Q5 + Activity (p.272)',
      question: 'Draw a net for a square-based pyramid with a 4 cm square base and triangular faces whose sloping sides are 5 cm. Use a compass to draw the triangles accurately.',
      answer: 'A 4 cm square with an isosceles triangle on each side (sides 5 cm, 5 cm, 4 cm). Compass arcs of radius 5 cm visible where each apex was found. All 4 triangles the same.',
      explanation: 'For each triangle: from both ends of a 4 cm side, draw arcs of radius 5 cm; where they cross is the apex.' },
    { id: 'c2_pp19', topic: 'Drawing solids', type: 'paper', ref: 'Textbook 13C Q1 (p.273)',
      question: 'Draw an oblique projection of:<br>a) a cube with sides of 3 cm<br>b) a rectangular prism 3 cm wide, 2 cm high and 1 cm deep',
      answer: 'Front face drawn true size first (3×3 square; 3×2 rectangle). Depth lines at about 45°, drawn shorter than the real depth (roughly half). Hidden edges dashed.',
      explanation: 'Front face first, then go back at 45°.' },
    { id: 'c2_pp20', topic: 'Drawing solids', type: 'paper', ref: 'Textbook 13C Q2 (p.274)',
      question: 'Copy this solid onto isometric (triangle-dot) paper. Start with the front vertical edge.',
      diagram: iso([[0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1]]),
      answer: 'Vertical edges stay vertical; all other edges at 30° along the grid. Every cube edge is the same length (one grid space). Six cubes visible: bottom row of 3 going right, 1 behind on the left, 2 on top at the front.',
      explanation: 'On isometric paper nothing is drawn horizontally.' },
    { id: 'c2_pp21', topic: 'Drawing solids', type: 'paper', difficulty: 'challenging', ref: 'Textbook 13C Activity 4 (p.276–277)',
      question: 'For the solid in the picture, draw its views from the <b>front</b>, the <b>top</b> and the <b>right</b>. (The front is the face that points down-right.)',
      diagram: iso([[0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 1, 0], [0, 0, 1]]),
      answer: 'Front (looking at the down-right faces): 3 squares in a row with 1 square on top of the left-hand one. Top: an L of 4 squares (3 in a row, plus 1 behind the left end). Right: 2 squares side by side on the bottom, with 1 square on top of the front one.',
      explanation: 'Each view is flat: just squares, no slanted lines.' },
    { id: 'c2_pp22', topic: 'Triangles', type: 'paper', ref: 'Textbook 11C Investigation 2 (p.228)',
      question: 'Draw any triangle on paper and cut it out. Tear off the three corners and place them side by side with the points touching. Stick them in your book. What do you notice, and what does it show?',
      answer: 'The three corners fit together to make a straight line (180°). This shows the angles of a triangle add up to 180°.',
      explanation: 'Try it with a very different triangle too: it always works.' },
  ];

  addChapter({
    id: 2, title: "Geometry", icon: "📐", color: "#0ea5e9",
    added: "2026-11-28",
    topics: ["Lines and points", "Angles", "Angle properties", "Parallel lines", "Constructions",
             "Polygons", "Triangles", "Quadrilaterals", "Solids and nets", "Drawing solids"],
    weeklyWeights: { "Angle properties": 1.5, "Parallel lines": 1.5, "Triangles": 1.5 },
    questions: [...Q, ...drills()].map(q => ({ ...q, difficulty: q.difficulty || 'medium' })),
  });
})();
