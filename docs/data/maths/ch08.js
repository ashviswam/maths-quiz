(() => {
  // ── Tiny algebra kit ─────────────────────────────────────
  // Expressions are written in plain ASCII ("3x^2 - xy + 4") and turned into
  // HTML by m(). Drill answers and explanations are computed from the same
  // strings, so nothing is typed twice.
  const m = s => String(s)
    .replace(/[a-z]/gi, '<i>$&</i>')
    .replace(/\^(\d)/g, '<sup>$1</sup>')
    .replace(/\*/g, '×')
    .replace(/(^|[\s(])-/g, '$1−')
    .replace(/ - /g, ' − ');
  const M = text => text.replace(/\$([^$]+)\$/g, (_, e) => m(e));   // "$…$" marks maths inside prose
  const neg = n => (n < 0 ? '−' + Math.abs(n) : String(n));
  const sup = { 2: '²', 3: '³', 4: '⁴', 5: '⁵' };

  // Monomials: { c: coefficient, p: { x: 2, y: 1 } }
  function mono(s) {
    const r = s.replace(/\s/g, '').match(/^([+-]?\d*)((?:[a-z](?:\^\d)?)*)$/);
    if (!r) throw new Error('bad term ' + s);
    const c = r[1] === '' || r[1] === '+' ? 1 : r[1] === '-' ? -1 : Number(r[1]);
    const p = {};
    (r[2].match(/[a-z](\^\d)?/g) || []).forEach(t => { p[t[0]] = (p[t[0]] || 0) + (t[2] ? Number(t[2]) : 1); });
    return { c, p };
  }
  const vkey = p => Object.keys(p).sort().map(k => k + (p[k] > 1 ? '^' + p[k] : '')).join('');
  function fmtTerm(c, v, first) {
    const a = Math.abs(c), body = (a === 1 && v ? '' : a) + v;
    return first ? (c < 0 ? '-' : '') + body : (c < 0 ? ' - ' : ' + ') + body;
  }
  const fmtList = ts => ts.map((t, i) => fmtTerm(t.c, t.v, i === 0)).join('') || '0';
  function parseSum(s) {
    return s.replace(/\s/g, '').replace(/-/g, '+-').split('+').filter(Boolean)
      .map(t => { const x = mono(t); return { c: x.c, v: vkey(x.p) }; });
  }
  function collect(s) {
    const order = [], sums = {};
    parseSum(s).forEach(t => { if (!(t.v in sums)) { order.push(t.v); sums[t.v] = 0; } sums[t.v] += t.c; });
    const vars = order.filter(v => v !== '');
    if ('' in sums) vars.push('');
    return vars.filter(v => sums[v] !== 0).map(v => ({ c: sums[v], v }));
  }
  const perms = a => a.length <= 1 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map(r => [x, ...r]));
  // Typed forms a student might use for an algebraic answer.
  function typed(ts) {
    const out = new Set();
    perms(ts).forEach(o => {
      const s = fmtList(o).replace(/\s/g, '');
      out.add(s); out.add(s.replace(/\^(\d)/g, (_, d) => sup[d])); out.add(s.replace(/\^/g, ''));
    });
    return [...out];
  }
  const times = (a, b) => {
    const p = { ...a.p };
    Object.keys(b.p).forEach(k => { p[k] = (p[k] || 0) + b.p[k]; });
    return { c: a.c * b.c, p };
  };
  const monoStr = x => fmtTerm(x.c, vkey(x.p), true);
  const slug = s => s.replace(/\^/g, 'e').replace(/\*/g, 'x').replace(/\+/g, 'p').replace(/-/g, 'm').replace(/[^a-z0-9]/gi, '');

  // Substitution: tokenise, then build both a JS expression and the
  // "with numbers" line shown in the explanation.
  function substitute(expr, vals) {
    const toks = expr.replace(/\s/g, '').match(/\d+|[a-z]|\^\d|[()+\-*\/]/g);
    let js = '', shown = '', prev = null;
    const operand = t => /^\d|^[a-z]$|^\($/.test(t);
    toks.forEach(t => {
      const prevEnds = prev && (/^\d+$/.test(prev) || /^[a-z]$/.test(prev) || prev === ')' || prev[0] === '^');
      if (prevEnds && operand(t)) {             // implicit multiplication
        js += '*';
        if (t !== '(') shown += ' × ';
      }
      if (/^[a-z]$/.test(t)) {
        const v = vals[t];
        js += `(${v})`; shown += v < 0 ? `(${neg(v)})` : v;
      } else if (t[0] === '^') { js += '**' + t[1]; shown += sup[t[1]]; }
      else if (t === '-') { js += '-'; shown += ' − '; }
      else if (t === '+') { js += '+'; shown += ' + '; }
      else if (t === '*') { js += '*'; shown += ' × '; }
      else if (t === '/') { js += '/'; shown += ' ÷ '; }
      else { js += t; shown += t; }
      prev = t;
    });
    const value = Math.round(Function(`return ${js}`)() * 1e6) / 1e6;
    return { value, shown: shown.replace(/\(\s+−\s+/g, '(−').replace(/^\s*−\s+/, '−') };
  }
  const givens = vals => Object.keys(vals).map(k => `<i>${k}</i> = ${neg(vals[k])}`).join(', ');

  function drills() {
    const out = [];

    // 1. Product notation: repeated addition → collected form.
    [['a + a', 'easy'], ['p + p + p + p + p', 'easy'], ['y + y + 3', 'easy'], ['n + n + 3 + n', 'easy'],
     ['b + b + c', null], ['x + y + x + y', null], ['m + 1 + m + n', null], ['x + y + y + x + x', null],
     ['p + q + p + 4 + q', null], ['a + a - b', null], ['n - m - m - m', 'challenging']].forEach(([e, d]) => {
      const ts = collect(e), ans = typed(ts);
      out.push({ id: 'c8_pn_' + slug(e), topic: 'Product notation', type: 'input', exact: true,
        ...(d ? { difficulty: d } : {}),
        question: M(`Write using product notation: $${e}$`),
        answer: ans[0], acceptableAnswers: ans.slice(1),
        explanation: M(`Count how many of each letter there are: ${ts.filter(t => t.v).map(t => `${Math.abs(t.c)} lot${Math.abs(t.c) > 1 ? 's' : ''} of $${t.v}$`).join(', ')}. So $${e}$ = $${fmtList(ts)}$.`) });
    });

    // 2. Products → simplest form (numbers first, letters in alphabetical order, repeats as powers).
    [['b * 3', 'easy'], ['x * 5', 'easy'], ['m * n', 'easy'], ['b * 2 * a', null], ['c * 4 * d', null],
     ['z * y * 9', null], ['3 * 2 * a', null], ['k * 5 * h', null],
     ['x * x * x', 'easy'], ['p * p * p * p', 'easy'], ['2 * a * a * a * b * b', null], ['f * f * g * g * g * h', null],
     ['3 * y * 3 * y * y', 'challenging'], ['b * a * 2 * b * a * b', 'challenging']].forEach(([e, d]) => {
      const fs = e.split('*').map(s => s.trim());
      const r = fs.map(mono).reduce(times, { c: 1, p: {} }), s = monoStr(r);
      const nums = fs.filter(f => /^\d/.test(f)), lets = fs.filter(f => /^[a-z]/.test(f)).sort();
      const powers = Object.keys(r.p).some(k => r.p[k] > 1);
      out.push({ id: 'c8_pr_' + slug(e), topic: powers ? 'Exponent notation' : 'Product notation', type: 'input', exact: true,
        ...(d ? { difficulty: d } : {}),
        question: M(powers ? `Write using exponent notation: $${e}$` : `Write in product notation: $${e}$`),
        answer: typed([{ c: r.c, v: vkey(r.p) }])[0], acceptableAnswers: typed([{ c: r.c, v: vkey(r.p) }]).slice(1),
        explanation: M(`Leave out the × signs. ${nums.length > 1 ? `Multiply the numbers first: ${nums.join(' × ')} = ${r.c}. ` : nums.length ? `Write the number first: ${r.c}. ` : ''}Then the letters in alphabetical order: $${lets.join(' * ')}$${powers ? ', and a letter multiplied by itself is written with a power (e.g. $x * x * x$ = $x^3$)' : ''}. Answer: $${s}$.`) });
    });

    // 3. Multiplying terms: 3x × 2x = 6x².
    [['3x', '2x'], ['4a', '5b'], ['2x', '3x^2'], ['x^2', '2x^2'], ['2a', '3ab'], ['5m', 'm'],
     ['4c', '4d'], ['2m^2', '5m'], ['3y', '2x^2y']].forEach(([a, b]) => {
      const r = times(mono(a), mono(b)), ans = typed([{ c: r.c, v: vkey(r.p) }]);
      const A = mono(a), B = mono(b);
      out.push({ id: 'c8_mt_' + slug(a + 'x' + b), topic: 'Exponent notation', type: 'input', exact: true,
        ...(Object.values(r.p).some(n => n > 2) || Object.keys(r.p).length > 1 && Object.values(r.p).some(n => n > 1) ? { difficulty: 'challenging' } : {}),
        question: M(`Write in simplest form: $${a} * ${b}$`),
        answer: ans[0], acceptableAnswers: ans.slice(1),
        explanation: M(`Multiply the numbers: ${A.c} × ${B.c} = ${r.c}. Multiply the letters: $${vkey(A.p) || '1'} * ${vkey(B.p) || '1'}$ = $${vkey(r.p)}$ (count how many of each letter: write it out in expanded form if unsure). So $${a} * ${b}$ = $${monoStr(r)}$.`) });
    });

    // 4. Collecting like terms.
    [['3x + 4x', 'easy'], ['9r - 6r', 'easy'], ['8x - x', 'easy'], ['3x - 5x', null], ['2b - 6b', null],
     ['-3y - y - 2y', null], ['4k - 8k + 4', null], ['6x + 2x + 5y + y', null], ['4a + 3b + 3a + 3b', null],
     ['3a + 6b - a - 2b', null], ['c + d - c + d', null], ['4v + 3 - 5v - 7', null], ['5r + 5 + t - 7r', null],
     ['8x - 12y + 4x - y', 'challenging'], ['2x^2 + 3x + x^2 - 5x', 'challenging'], ['3ab + 2a - ab + 4', 'challenging'],
     ['5p + 2q - 5p + 3', null], ['-m + 4n - 2m - 4n', 'challenging']].forEach(([e, d]) => {
      const ts = collect(e), ans = typed(ts);
      const groups = [];
      parseSum(e).forEach(t => { let g = groups.find(x => x.v === t.v); if (!g) groups.push(g = { v: t.v, cs: [] }); g.cs.push(t.c); });
      const steps = groups.map(g => {
        const parts = g.cs.map((c, i) => fmtTerm(c, g.v, i === 0)).join(''), sum = g.cs.reduce((a, b) => a + b, 0);
        return g.cs.length > 1 ? `$${parts}$ = $${sum === 0 ? '0' : fmtTerm(sum, g.v, true)}$` : `$${parts}$ has no like terms, so it stays`;
      });
      out.push({ id: 'c8_ct_' + slug(e), topic: 'Collecting like terms', type: 'input', exact: true,
        ...(d ? { difficulty: d } : {}),
        question: M(`Simplify by collecting like terms: $${e}$`),
        answer: ans[0], acceptableAnswers: ans.slice(1),
        explanation: M(`Group the like terms, keeping each term's sign: ${steps.join('; ')}. Answer: $${fmtList(ts)}$.`) });
    });

    // 5. Substitution (positive and negative values).
    const SUB = [
      ['3c + 7', { c: 6 }, 'easy'], ['5y - 2', { y: 4 }, 'easy'], ['20 - 3g', { g: 5 }, 'easy'], ['4(a + 3)', { a: 2 }, 'easy'],
      ['2a - a^2', { a: 3 }, null], ['x^2 - 4', { x: 5 }, null], ['3x + 2y', { x: 4, y: 3 }, null],
      ['6x - 4y + 1', { x: 3, y: 2 }, null], ['2(5x - 3y)', { x: 3, y: 4 }, null], ['pqr', { p: 2, q: 3, r: 5 }, null],
      ['3q^2', { q: 4 }, null], ['pq + qr', { p: 4, q: 2, r: 5 }, null], ['abc', { a: 2, b: 0, c: 7 }, null],
      ['(2a - c)^2', { a: 4, c: 3 }, 'challenging'], ['3ac^2 - a', { a: 2, c: 3 }, 'challenging'],
      ['2x + 3y', { x: 5, y: -4 }, null], ['x^2 - xy', { x: 5, y: -4 }, 'challenging'], ['x - w', { w: -1, x: 2 }, null],
      ['4xy', { x: 2, y: -3 }, null], ['3y + 3w', { w: -1, y: -4 }, null], ['wxy', { w: -1, x: 2, y: -4 }, 'challenging'],
      ['f^2 - h', { f: 3, h: -5 }, null], ['4(g - h)', { g: 6, h: -2 }, null], ['h^2 - fg', { f: 2, g: 8, h: -5 }, 'challenging'],
      ['2w^2 - 3y', { w: -2, y: -4 }, 'challenging'], ['a^2 + 2a', { a: -3 }, 'challenging']];
    SUB.forEach(([e, vals, d]) => {
      const r = substitute(e, vals), hasNeg = Object.values(vals).some(v => v < 0);
      const sq = /\^2/.test(e) && Object.values(vals).some(v => v < 0);
      out.push({ id: 'c8_sb_' + slug(e) + '_' + Object.values(vals).map(v => (v < 0 ? 'm' + -v : v)).join('_'),
        topic: 'Substitution', type: 'input',
        ...(d ? { difficulty: d } : {}),
        question: M(`If ${givens(vals)}, find the value of $${e}$.`),
        answer: String(r.value), acceptableAnswers: r.value < 0 ? ['−' + Math.abs(r.value)] : [],
        explanation: `Replace each letter with its number${hasNeg ? ' (negative numbers go in brackets)' : ''}, putting back the hidden × signs: ${r.shown} = ${neg(r.value)}. Work it out with BEDMAS: brackets, then powers, then × and ÷, then + and −.${sq ? ' A negative number squared is positive, e.g. (−4)² = (−4) × (−4) = 16.' : ''}` });
    });

    // 6. Formulae: substitute into a formula.
    const FRM = [
      ['W', '3t + 2', 't', [4, 10, 0], 'easy'], ['S', 'n + 8', 'n', [7], 'easy'], ['L', '4b', 'b', [9], 'easy'],
      ['C', '2d + 7', 'd', [-1, 6], null], ['P', '3t - 4', 't', [-3, 8], null], ['A', 'x^2 + 3x', 'x', [4, -2], 'challenging'],
      ['y', '25 - 2x', 'x', [8, -5], null], ['V', 'x^2(x + 2)', 'x', [3], 'challenging']];
    FRM.forEach(([sub, rhs, v, xs, d]) => xs.forEach(x => {
      const r = substitute(rhs, { [v]: x });
      out.push({ id: `c8_fm_${sub}_${slug(rhs)}_${x < 0 ? 'm' + -x : x}`, topic: 'Formulae', type: 'input',
        ...(d ? { difficulty: d } : {}),
        question: M(`Use the formula $${sub} = ${rhs}$ to find $${sub}$ when $${v}$ = ${neg(x)}.`),
        answer: String(r.value), acceptableAnswers: r.value < 0 ? ['−' + Math.abs(r.value)] : [],
        explanation: M(`$${sub}$ is the subject of the formula, so substitute $${v}$ = ${neg(x)} into the other side: $${sub}$ = ${r.shown} = ${neg(r.value)}.`) });
    }));

    return out;
  }

  // ── Hand-written questions ───────────────────────────────
  const Q = [
    // Building expressions
    { id: 'c8_q1', topic: 'Building expressions', type: 'mcq', difficulty: 'easy',
      question: 'A pack holds $n$ stickers. Riya has 4 packs and 3 loose stickers. Which expression gives her total number of stickers?',
      options: ['$4n + 3$', '$4 + 3n$', '$7n$', '$4n - 3$'], answer: 0,
      explanation: 'Try a number first: with 10 stickers per pack she has 4 × 10 + 3. Now put $n$ in place of the 10: 4 × $n$ + 3 = $4n + 3$.' },
    { id: 'c8_q2', topic: 'Building expressions', type: 'input', difficulty: 'easy',
      question: 'Riya has $4n + 3$ stickers, where $n$ is the number in a pack. A pack holds 12 stickers. How many stickers does she have?',
      answer: '51', explanation: 'Substitute $n$ = 12: 4 × 12 + 3 = 48 + 3 = 51.' },
    { id: 'c8_q3', topic: 'Building expressions', type: 'mcq', difficulty: 'easy',
      question: 'Lena has $b$ books. She gives 5 of them to a friend. How many books does she have now?',
      options: ['$b - 5$', '$5 - b$', '$b + 5$', '$5b$'], answer: 0,
      explanation: 'She starts with $b$ and loses 5, so subtract 5 from $b$. $5 - b$ is the wrong way round: it means start with 5 and take away $b$.' },
    { id: 'c8_q4', topic: 'Building expressions', type: 'mcq',
      question: 'A market stall has $c$ crates with 12 mangoes in each, plus 7 loose mangoes. How many mangoes are there?',
      options: ['$12c + 7$', '$7c + 12$', '$c + 19$', '$19c$'], answer: 0,
      explanation: '$c$ crates of 12 is 12 × $c$ = $12c$. Then add the 7 loose ones: $12c + 7$. The 7 loose mangoes are not in crates, so they are not multiplied by $c$.' },
    { id: 'c8_q5', topic: 'Building expressions', type: 'mcq',
      question: 'Tom is $t$ years old. His sister is 3 years older than him. How old will his sister be in 5 years?',
      options: ['$t + 8$', '$t + 3$', '$t + 5$', '$3t + 5$'], answer: 0,
      explanation: 'His sister is $t + 3$ now. In 5 years she is $t + 3 + 5$ = $t + 8$. "Older" means add, not multiply.' },
    { id: 'c8_q6', topic: 'Building expressions', type: 'input', difficulty: 'challenging', exact: true,
      question: 'A teacher has 6 boxes with $x$ pencils in each, plus 9 extra pencils. She gives away 2 full boxes. Write an expression for the number of pencils she has left.',
      answer: '4x+9', acceptableAnswers: ['9+4x'],
      explanation: 'She has 6 − 2 = 4 full boxes left, which is $4x$ pencils. The 9 extra pencils are still there: $4x + 9$.' },
    { id: 'c8_q7', topic: 'Building expressions', type: 'mcq',
      question: 'The top shelf has 3 boxes of $b$ books and 2 loose books. The bottom shelf has 1 box of $b$ books and 6 loose books. How many books are there altogether?',
      options: ['$4b + 8$', '$3b + 8$', '$4b + 6$', '$12b$'], answer: 0,
      explanation: 'Add the boxes: 3 + 1 = 4 boxes, so $4b$. Add the loose books: 2 + 6 = 8. Total $3b + 2 + b + 6$ = $4b + 8$.' },
    { id: 'c8_q8', topic: 'Building expressions', type: 'short',
      question: 'In algebra, why do we call a letter such as $x$ a <b>variable</b>?',
      answer: 'The letter stands for a number we do not know (an unknown). Because the number can take many different values, it is called a variable (it can vary).',
      explanation: 'For example, the number of puppies in a kennel could be 3, 5 or 8, so we call it $d$ and write expressions with $d$.' },
    { id: 'c8_q9', topic: 'Building expressions', type: 'mcq', difficulty: 'challenging',
      question: 'A rectangle is $x$ cm long and 3 cm wide. Which expression gives its perimeter?',
      options: ['$2x + 6$', '$3x$', '$x + 3$', '$2x + 3$'], answer: 0,
      explanation: 'The perimeter is the distance all the way round: $x + 3 + x + 3$. Collect like terms: $2x + 6$. ($3x$ would be the area.)' },

    // Product notation
    { id: 'c8_q10', topic: 'Product notation', type: 'mcq', difficulty: 'easy',
      question: 'How do we write $m * 7$ in product notation?',
      options: ['$7m$', '$m7$', '$7 + m$', '$m^7$'], answer: 0,
      explanation: 'Leave out the × sign and write the number before the letter: $7m$. Never write $m7$.' },
    { id: 'c8_q11', topic: 'Product notation', type: 'mcq', difficulty: 'easy',
      question: 'Which is equal to $y + y + y + y$?',
      options: ['$4y$', '$y^4$', '$4 + y$', '$y + 4$'], answer: 0,
      explanation: 'Four lots of $y$ added together is 4 × $y$ = $4y$. $y^4$ means $y * y * y * y$ (multiplying), which is different.' },
    { id: 'c8_q12', topic: 'Product notation', type: 'mcq',
      question: 'Write $b * a * 3$ in product notation.',
      options: ['$3ab$', '$3ba$', '$ab3$', '$3 + ab$'], answer: 0,
      explanation: 'Number first, then the letters in alphabetical order: $3ab$. ($3ba$ has the same value, but the convention is alphabetical order.)' },
    { id: 'c8_q13', topic: 'Product notation', type: 'mcq', difficulty: 'challenging',
      question: 'Write $2 * x + y * 5$ in product notation.',
      options: ['$2x + 5y$', '$7xy$', '$2x + y5$', '$10xy$'], answer: 0,
      explanation: 'The + sign separates two terms. Simplify each one: $2 * x$ = $2x$ and $y * 5$ = $5y$. They are not like terms, so the answer is $2x + 5y$.' },
    { id: 'c8_q14', topic: 'Product notation', type: 'input', exact: true,
      question: 'Write using product notation: $6 - (t + t)$',
      answer: '6-2t', acceptableAnswers: ['-2t+6'],
      explanation: 'Brackets first (BEDMAS): $t + t$ = $2t$. So $6 - (t + t)$ = $6 - 2t$.' },
    { id: 'c8_q15', topic: 'Product notation', type: 'mcq',
      question: 'Which of these is <b>not</b> equal to $3p$?',
      options: ['$p^3$', '$p + p + p$', '$3 * p$', '$p * 3$'], answer: 0,
      explanation: '$p^3$ means $p * p * p$. For $p$ = 2: $3p$ = 6 but $p^3$ = 8, so they are not equal.' },
    { id: 'c8_q16', topic: 'Product notation', type: 'input', difficulty: 'challenging', exact: true,
      question: 'Write using product notation: $s + s - (t + t + t)$',
      answer: '2s-3t', acceptableAnswers: ['-3t+2s'],
      explanation: 'Brackets first: $t + t + t$ = $3t$. Then $s + s$ = $2s$. Answer: $2s - 3t$.' },

    // Exponent notation
    { id: 'c8_q17', topic: 'Exponent notation', type: 'mcq', difficulty: 'easy',
      question: 'In $a^5$, what is the 5 called?',
      options: ['The exponent (index or power)', 'The base', 'The coefficient', 'The constant'], answer: 0,
      explanation: '$a$ is the base and 5 is the exponent (also called the index or power). It tells you how many $a$s are multiplied together.' },
    { id: 'c8_q18', topic: 'Exponent notation', type: 'mcq', difficulty: 'easy',
      question: 'What is $x^3$ in expanded form?',
      options: ['$x * x * x$', '$3 * x$', '$x + x + x$', '$x * 3 * x$'], answer: 0,
      explanation: 'The exponent 3 means three $x$s multiplied together. $3 * x$ and $x + x + x$ are both $3x$, which is different.' },
    { id: 'c8_q19', topic: 'Exponent notation', type: 'mcq',
      question: 'What is $2x^2$ in expanded form?',
      options: ['$2 * x * x$', '$2 * x * 2 * x$', '$2 * 2 * x$', '$x * x$'], answer: 0,
      explanation: 'The power belongs only to the $x$ just in front of it. So $2x^2$ = 2 × $x$ × $x$. ($2 * x * 2 * x$ would be $(2x)^2$ = $4x^2$.)' },
    { id: 'c8_q20', topic: 'Exponent notation', type: 'mcq',
      question: 'What is $4mn^2$ in expanded form?',
      options: ['$4 * m * n * n$', '$4 * m * n * 2$', '$4 * m * m * n * n$', '$4 * m * 4 * n * n$'], answer: 0,
      explanation: 'Only the $n$ is squared. So $4mn^2$ = 4 × $m$ × $n$ × $n$.' },
    { id: 'c8_q21', topic: 'Exponent notation', type: 'mcq', difficulty: 'challenging',
      question: 'Simplify $3x * 2x$.',
      options: ['$6x^2$', '$5x$', '$6x$', '$5x^2$'], answer: 0,
      explanation: 'Expand it: 3 × $x$ × 2 × $x$ = 3 × 2 × $x$ × $x$ = $6x^2$. When you multiply, the numbers multiply (not add), and $x * x$ = $x^2$.' },
    { id: 'c8_q22', topic: 'Exponent notation', type: 'mcq',
      question: 'Write $m * m - 5 * n * n$ using exponent notation.',
      options: ['$m^2 - 5n^2$', '$2m - 10n$', '$m^2 - 5n$', '$(m - 5n)^2$'], answer: 0,
      explanation: 'Simplify each term on its own: $m * m$ = $m^2$ and $5 * n * n$ = $5n^2$. The − sign stays between them.' },
    { id: 'c8_q23', topic: 'Exponent notation', type: 'short', difficulty: 'challenging',
      question: 'Explain the difference between $3x$ and $x^3$. Use $x$ = 2 to show they are not equal.',
      answer: '$3x$ means 3 × $x$ (three $x$s added): when $x$ = 2 it is 6. $x^3$ means $x * x * x$ (three $x$s multiplied): when $x$ = 2 it is 8. 6 ≠ 8, so they are different.',
      explanation: 'The number in front (the coefficient) multiplies; the small raised number (the exponent) tells you how many times the letter is multiplied by itself.' },

    // Reading expressions
    { id: 'c8_q24', topic: 'Reading expressions', type: 'mcq', difficulty: 'easy',
      question: 'Write as an expression: "the product of 4 and $y$".',
      options: ['$4y$', '$4 + y$', '$y/4$', '$y^4$'], answer: 0,
      explanation: '"Product" means the answer to a multiplication, so it is 4 × $y$ = $4y$.' },
    { id: 'c8_q25', topic: 'Reading expressions', type: 'mcq',
      question: 'Write as an expression: "5 less than $x$".',
      options: ['$x - 5$', '$5 - x$', '$5x$', '$x + 5$'], answer: 0,
      explanation: '"5 less than $x$" means start at $x$ and go down by 5: $x - 5$. Check with $x$ = 10: 5 less than 10 is 5, and $10 - 5$ = 5.' },
    { id: 'c8_q26', topic: 'Reading expressions', type: 'mcq',
      question: 'Write as an expression: "the quotient of $p$ and $q$".',
      options: ['$p/q$', '$q/p$', '$pq$', '$p - q$'], answer: 0,
      explanation: '"Quotient" is the answer to a division, in the order given: $p$ divided by $q$.' },
    { id: 'c8_q27', topic: 'Reading expressions', type: 'mcq',
      question: 'Write as an expression: "the sum of twice $a$ and $b$".',
      options: ['$2a + b$', '$2(a + b)$', '$a + 2b$', '$2ab$'], answer: 0,
      explanation: '"Twice $a$" is $2a$. "The sum of $2a$ and $b$" means add them: $2a + b$.' },
    { id: 'c8_q28', topic: 'Reading expressions', type: 'mcq',
      question: 'What does $xy - 5$ mean in words?',
      options: ['The product of $x$ and $y$, minus 5', 'The sum of $x$ and $y$, minus 5', '$x$ times the result of $y$ minus 5', '5 times $x$, minus $y$'], answer: 0,
      explanation: '$xy$ is $x$ × $y$ (a product). Then 5 is subtracted from it.' },
    { id: 'c8_q29', topic: 'Reading expressions', type: 'mcq', difficulty: 'challenging',
      question: 'What does $3a^2 + b$ mean in words?',
      options: ['The product of 3 and $a$ squared, plus $b$', 'The square of $3a$, plus $b$', 'Three times the sum of $a$ squared and $b$', '3 plus $a$ squared plus $b$'], answer: 0,
      explanation: 'Only $a$ is squared, then multiplied by 3, then $b$ is added. "The square of $3a$" would be $(3a)^2$.' },
    { id: 'c8_q30', topic: 'Reading expressions', type: 'mcq',
      question: 'Write as an expression: "$c$ squared divided by $d$".',
      options: ['$c^2/d$', '$(c/d)^2$', '$c/d^2$', '$2c/d$'], answer: 0,
      explanation: 'Square $c$ first, then divide that by $d$: $c^2$ ÷ $d$.' },
    { id: 'c8_q31', topic: 'Reading expressions', type: 'input', exact: true,
      question: 'Write as an expression (no × signs): "7 less than the product of 3 and $m$".',
      answer: '3m-7', acceptableAnswers: ['-7+3m'],
      explanation: 'The product of 3 and $m$ is $3m$. "7 less than" that means subtract 7: $3m - 7$.' },
    { id: 'c8_q32', topic: 'Reading expressions', type: 'mcq',
      question: 'Which phrase does <b>not</b> mean $x + 5$?',
      options: ['5 less than $x$', '5 more than $x$', 'The sum of $x$ and 5', '$x$ increased by 5'], answer: 0,
      explanation: '"5 less than $x$" is $x - 5$. All the others describe adding 5.' },
    { id: 'c8_q33', topic: 'Reading expressions', type: 'input', difficulty: 'challenging', exact: true,
      question: 'Write as an expression (no × signs): "$p$ plus the square of $q$".',
      answer: 'p+q^2', acceptableAnswers: ['p+q²', 'p+q2', 'q^2+p', 'q²+p', 'q2+p'],
      explanation: 'The square of $q$ is $q^2$. Then add it to $p$: $p + q^2$.' },

    // Terms and coefficients
    { id: 'c8_q34', topic: 'Terms and coefficients', type: 'mcq', difficulty: 'easy',
      question: 'What are the terms of $2x - 3y - 5$?',
      options: ['$2x$, $-3y$ and $-5$', '$2x$, $3y$ and 5', '$2x - 3y$ and $-5$', '2, $x$, 3, $y$ and 5'], answer: 0,
      explanation: 'Terms are separated by + and − signs, and each term keeps the sign in front of it.' },
    { id: 'c8_q35', topic: 'Terms and coefficients', type: 'input',
      question: 'What is the coefficient of $r$ in $7 - 6r$?',
      answer: '-6', acceptableAnswers: ['−6'],
      explanation: 'The coefficient is the number in front of the letter, including its sign. The term is $-6r$, so the coefficient is −6.' },
    { id: 'c8_q36', topic: 'Terms and coefficients', type: 'input', difficulty: 'challenging',
      question: 'What is the coefficient of $x^2$ in $2x + x^2$?',
      answer: '1',
      explanation: '$x^2$ means 1 × $x^2$. We don\'t write the 1, but it is there, so the coefficient is 1.' },
    { id: 'c8_q37', topic: 'Terms and coefficients', type: 'mcq', difficulty: 'easy',
      question: 'What is the constant term in $-7 + 3x^2$?',
      options: ['−7', '7', '3', '2'], answer: 0,
      explanation: 'The constant is the term with no letter. It keeps its sign, so it is −7.' },
    { id: 'c8_q38', topic: 'Terms and coefficients', type: 'mcq', difficulty: 'easy',
      question: 'Which pair are like terms?',
      options: ['$3x$ and $7x$', '$x$ and $x^2$', '$7x$ and 7', '$xy$ and $x$'], answer: 0,
      explanation: 'Like terms have exactly the same letters with the same powers. Only the numbers in front can differ.' },
    { id: 'c8_q39', topic: 'Terms and coefficients', type: 'mcq',
      question: 'How many terms are there in $4x^2 + 6x^2 + 4x + 1$?',
      options: ['4', '3', '2', '5'], answer: 0,
      explanation: 'Count the parts separated by + and −: $4x^2$, $6x^2$, $4x$ and 1. That is 4 terms (it could be simplified to 3, but as written it has 4).' },
    { id: 'c8_q40', topic: 'Terms and coefficients', type: 'mcq', difficulty: 'challenging',
      question: 'Are $3x$ and $xy$ like terms?',
      options: ['No: $xy$ also contains $y$, so the letters are different', 'Yes: both contain $x$', 'Yes: both have a coefficient', 'No: because 3 is not equal to 1'], answer: 0,
      explanation: 'Like terms must have exactly the same letter part. $x$ and $xy$ are different, so they cannot be added together.' },
    { id: 'c8_q41', topic: 'Terms and coefficients', type: 'input',
      question: 'What is the coefficient of $b$ in $5a - b + 2$?',
      answer: '-1', acceptableAnswers: ['−1'],
      explanation: 'The term is $-b$, which means −1 × $b$. So the coefficient is −1.' },
    { id: 'c8_q42', topic: 'Terms and coefficients', type: 'mcq',
      question: 'Which statement is true?',
      options: ['In $x^2 + 3 - 4x$, the constant is 3', 'In $3x + 4y - 2$, the constant is 2', '$3x^2$ and $2x$ are like terms', '$x$ and $-x$ are not like terms'], answer: 0,
      explanation: 'In $3x + 4y - 2$ the constant is −2 (keep the sign). $x^2$ and $x$ have different powers, so $3x^2$ and $2x$ are not like terms. $x$ and $-x$ have the same letter part, so they are like terms.' },
    { id: 'c8_q43', topic: 'Terms and coefficients', type: 'mcq',
      question: 'Which are the like terms in $2x + y^2 + 3x + 2y + 4$?',
      options: ['$2x$ and $3x$', '$y^2$ and $2y$', '$2x$ and $2y$', '$2y$ and 4'], answer: 0,
      explanation: '$y^2$ and $2y$ both contain $y$ but with different powers, so they are not like terms. Only $2x$ and $3x$ match exactly.' },
    { id: 'c8_q44', topic: 'Terms and coefficients', type: 'short',
      question: 'Consider $3x + 5y - 7 - 2y$. List the terms, name the constant, give the coefficient of the 4th term, and say which terms are like terms.',
      answer: 'Terms: $3x$, $5y$, $-7$, $-2y$. Constant: −7. Coefficient of the 4th term ($-2y$): −2. Like terms: $5y$ and $-2y$.',
      explanation: 'Every term keeps the sign in front of it, which is why the constant is −7 and the coefficient is −2.' },

    // Collecting like terms
    { id: 'c8_q45', topic: 'Collecting like terms', type: 'mcq', difficulty: 'easy',
      question: 'Simplify $3p + 2p + 4$.',
      options: ['$5p + 4$', '$9p$', '9', '$5p^2 + 4$'], answer: 0,
      explanation: '$3p$ and $2p$ are like terms: 3 + 2 = 5, so $5p$. The 4 has no $p$, so it cannot join them.' },
    { id: 'c8_q46', topic: 'Collecting like terms', type: 'mcq', difficulty: 'easy',
      question: 'Simplify $3x + 4$.',
      options: ['It cannot be simplified', '$7x$', '7', '$12x$'], answer: 0,
      explanation: '$3x$ and 4 are not like terms (one has an $x$, one does not), so nothing can be collected.' },
    { id: 'c8_q47', topic: 'Collecting like terms', type: 'mcq',
      question: 'Simplify $8x - x$.',
      options: ['$7x$', '8', '7', '$8x - 1$'], answer: 0,
      explanation: '$x$ means $1x$, so $8x - 1x$ = $7x$. The letter stays; only the coefficients are subtracted.' },
    { id: 'c8_q48', topic: 'Collecting like terms', type: 'mcq', difficulty: 'challenging',
      question: 'Simplify $x^2 + 3x + 2x^2$.',
      options: ['$3x^2 + 3x$', '$6x^2$', '$6x^3$', '$3x^4 + 3x$'], answer: 0,
      explanation: '$x^2$ and $2x^2$ are like terms: 1 + 2 = 3, so $3x^2$. The power does not change when you add. $3x$ is not a like term, so it stays.' },
    { id: 'c8_q49', topic: 'Collecting like terms', type: 'mcq',
      question: 'Which expression is equal to $2m + 3 + m + 4$?',
      options: ['$3m + 7$', '$2m + 7$', '$10m$', '$3m + 12$'], answer: 0,
      explanation: 'Add the $m$ terms: $2m + m$ = $3m$. Add the numbers: 3 + 4 = 7. So $3m + 7$.' },
    { id: 'c8_q50', topic: 'Collecting like terms', type: 'short',
      question: 'Sam simplified $5a - 2b + a$ and got $4a - 2b$. Explain the mistake and give the correct answer.',
      answer: 'The last $a$ has a + sign in front of it, so it is added, not subtracted: $5a + a$ = $6a$. Correct answer: $6a - 2b$.',
      explanation: 'Each term takes the sign directly in front of it. The − belongs to $2b$ only.' },
    { id: 'c8_q51', topic: 'Collecting like terms', type: 'short', difficulty: 'challenging',
      question: 'Explain why $2x + 3y$ cannot be simplified to $5xy$. Use $x$ = 2 and $y$ = 3 to check.',
      answer: '$2x$ and $3y$ are not like terms (different letters), so they cannot be added. Check: $2x + 3y$ = 4 + 9 = 13, but $5xy$ = 5 × 2 × 3 = 30. 13 ≠ 30.',
      explanation: 'Substituting numbers is a quick way to test whether two expressions are equal.' },
    { id: 'c8_q52', topic: 'Collecting like terms', type: 'mcq',
      question: 'Each tin holds $t$ biscuits. Ana has $2t + 3$ biscuits and Ben has $3t + 5$. How many do they have together?',
      options: ['$5t + 8$', '$13t$', '$5t + 15$', '$6t + 8$'], answer: 0,
      explanation: 'Add the tins: 2 + 3 = 5 tins, so $5t$. Add the loose biscuits: 3 + 5 = 8. So $2t + 3 + 3t + 5$ = $5t + 8$.' },
    { id: 'c8_q53', topic: 'Collecting like terms', type: 'mcq',
      question: 'Simplify $4 - (p + p + p)$.',
      options: ['$4 - 3p$', '$4 + p$', '$4 - p$', '$p$'], answer: 0,
      explanation: 'The brackets mean all three $p$s are taken away: $4 - 3p$. Writing $4 - p + p + p$ would only subtract the first $p$.' },

    // Substitution
    { id: 'c8_q54', topic: 'Substitution', type: 'mcq', difficulty: 'easy',
      question: 'If $a$ = 3, what is the value of $4a$?',
      options: ['12', '43', '7', '34'], answer: 0,
      explanation: '$4a$ means 4 × $a$, so 4 × 3 = 12. It does not mean the digits 4 and 3 side by side.' },
    { id: 'c8_q55', topic: 'Substitution', type: 'mcq', difficulty: 'easy',
      question: 'If $x$ = 5, what is the value of $x^2$?',
      options: ['25', '10', '52', '7'], answer: 0,
      explanation: '$x^2$ = $x * x$ = 5 × 5 = 25. It is not 5 × 2.' },
    { id: 'c8_q56', topic: 'Substitution', type: 'mcq', difficulty: 'challenging',
      question: 'If $x$ = −3, what is the value of $x^2$?',
      options: ['9', '−9', '−6', '6'], answer: 0,
      explanation: '$x^2$ = (−3) × (−3). A negative times a negative is positive, so it is 9. Put negative numbers in brackets so you square the whole number.' },
    { id: 'c8_q57', topic: 'Substitution', type: 'mcq',
      question: 'If $x$ = 4, what is the value of $2 + 3x$?',
      options: ['14', '20', '9', '24'], answer: 0,
      explanation: 'BEDMAS: multiply before adding. 3 × 4 = 12, then 2 + 12 = 14. (20 comes from doing 2 + 3 first.)' },
    { id: 'c8_q58', topic: 'Substitution', type: 'short',
      question: 'When we substitute $y$ = −4 into $3y$, why do we write 3 × (−4) with brackets?',
      answer: 'The brackets keep the negative sign with the number, so it is not confused with a subtraction sign. 3 × (−4) = −12; writing "3 × −4" or "3 − 4" is easy to misread.',
      explanation: 'The brackets matter even more with powers: $(−4)^2$ = 16, but $−4^2$ can be read as −16.' },
    { id: 'c8_q59', topic: 'Substitution', type: 'input',
      question: 'A bag holds $p$ potatoes. There are 3 bags and 10 loose potatoes, so there are $3p + 10$ potatoes. How many are there when $p$ = 25?',
      answer: '85', explanation: '3 × 25 + 10 = 75 + 10 = 85.' },
    { id: 'c8_q60', topic: 'Substitution', type: 'mcq', difficulty: 'challenging',
      question: 'If $a$ = 2 and $b$ = 0, what is the value of $ab + 3a$?',
      options: ['6', '8', '2', '0'], answer: 0,
      explanation: '$ab$ = 2 × 0 = 0 (anything times 0 is 0). $3a$ = 6. So 0 + 6 = 6.' },

    // Formulae
    { id: 'c8_q61', topic: 'Formulae', type: 'mcq', difficulty: 'easy',
      question: 'In the formula $C = 5h + 8$, which letter is the subject?',
      options: ['$C$', '$h$', '5', '8'], answer: 0,
      explanation: 'The subject is the variable on its own on one side of the = sign. Here $C$ is written in terms of $h$.' },
    { id: 'c8_q62', topic: 'Formulae', type: 'mcq',
      question: 'A plumber charges a €35 call-out fee plus €50 for every hour. Which formula gives the total charge €$C$ for a job of $h$ hours?',
      options: ['$C = 50h + 35$', '$C = 35h + 50$', '$C = 85h$', '$C = 50 + 35h$'], answer: 0,
      explanation: 'The amount that depends on the hours is 50 × $h$ = $50h$. The call-out fee is paid once, so it is added: $C = 50h + 35$.' },
    { id: 'c8_q63', topic: 'Formulae', type: 'input',
      question: 'The plumber\'s formula is $C = 50h + 35$ (in euros). How much does a 3-hour job cost?',
      answer: '185', acceptableAnswers: ['€185'],
      explanation: '$C$ = 50 × 3 + 35 = 150 + 35 = €185.' },
    { id: 'c8_q64', topic: 'Formulae', type: 'input',
      question: 'A phone plan costs €12 a month plus €0.05 per text, so $C = 0.05t + 12$. What is the bill for a month with 200 texts?',
      answer: '22', acceptableAnswers: ['€22', '22.00'],
      explanation: '0.05 × 200 = 10, then 10 + 12 = €22.' },
    { id: 'c8_q65', topic: 'Formulae', type: 'mcq',
      question: 'Cinema tickets cost €9 each, and there is a €2 booking fee per order. Which formula gives the cost €$C$ of buying $n$ tickets in one order?',
      options: ['$C = 9n + 2$', '$C = 11n$', '$C = 2n + 9$', '$C = 9 + 2 + n$'], answer: 0,
      explanation: 'Each ticket costs 9, so $n$ tickets cost $9n$. The fee is paid once per order: $C = 9n + 2$. ($11n$ would charge the fee on every ticket.)' },
    { id: 'c8_q66', topic: 'Formulae', type: 'input',
      question: 'The distance travelled is $D = st$ km, where $s$ is the speed in km/h and $t$ is the time in hours. How far does a train travel at 60 km/h for 2.5 hours?',
      answer: '150', acceptableAnswers: ['150 km'],
      explanation: '$st$ means $s$ × $t$: 60 × 2.5 = 150 km.' },
    { id: 'c8_q67', topic: 'Formulae', type: 'input',
      question: 'A gym costs €40 to join plus €25 per month: $C = 25m + 40$. What is the total cost for one year?',
      answer: '340', acceptableAnswers: ['€340'],
      explanation: 'One year is 12 months, so $m$ = 12: 25 × 12 + 40 = 300 + 40 = €340.' },
    { id: 'c8_q68', topic: 'Formulae', type: 'input',
      question: 'An electrician\'s charges are: 1 hour €70, 2 hours €115, 3 hours €160, 4 hours €205. How much does the electrician charge for each extra hour?',
      answer: '45', acceptableAnswers: ['€45'],
      explanation: 'Find the difference between neighbouring costs: 115 − 70 = 45, 160 − 115 = 45, 205 − 160 = 45. The cost goes up by €45 for every hour.' },
    { id: 'c8_q69', topic: 'Formulae', type: 'input', difficulty: 'challenging',
      question: 'The electrician charges €45 per hour, and a 1-hour job costs €70 in total. What is the call-out fee?',
      answer: '25', acceptableAnswers: ['€25'],
      explanation: 'A 1-hour job is one hour of work plus the call-out fee: 70 − 45 = €25. So the formula is $C = 45h + 25$.' },
    { id: 'c8_q70', topic: 'Formulae', type: 'input', difficulty: 'challenging',
      question: 'Using $C = 45h + 25$, how much does a 10-hour job cost?',
      answer: '475', acceptableAnswers: ['€475'],
      explanation: '45 × 10 + 25 = 450 + 25 = €475.' },
    { id: 'c8_q71', topic: 'Formulae', type: 'mcq',
      question: 'Maya\'s aunt gives €3 for every km Maya runs in a charity run. Which formula gives the money raised €$R$ for $k$ km?',
      options: ['$R = 3k$', '$R = k + 3$', '$R = 3 + k$', '$R = k/3$'], answer: 0,
      explanation: '€3 for each km means 3 × $k$. There is no fixed fee, so $R = 3k$.' },
    { id: 'c8_q72', topic: 'Formulae', type: 'input', difficulty: 'challenging',
      question: 'Shop A has 5 boxes of $n$ pens plus 12 loose pens. Shop B has 7 boxes of $n$ pens plus 4 loose pens. If each box holds 6 pens, how many more pens does Shop B have?',
      answer: '4',
      explanation: 'Shop A: 5 × 6 + 12 = 42. Shop B: 7 × 6 + 4 = 46. Difference: 46 − 42 = 4.' },
    { id: 'c8_q73', topic: 'Formulae', type: 'short', difficulty: 'challenging',
      question: 'Kai says: "Think of a number. Double it. Add 10. Halve the result. Take away the number you first thought of." Use algebra (call the number $x$) to explain why the answer is always 5.',
      answer: 'Start with $x$. Double: $2x$. Add 10: $2x + 10$. Halve: $x + 5$. Take away $x$: 5. The $x$ cancels out, so the answer is 5 whatever number you start with.',
      explanation: 'Writing each step as an expression shows what happens for every possible number at once, which is the power of algebra.' },
  ];

  const qs = [...Q.map(q => ({
    ...q,
    question: M(q.question),
    ...(q.options ? { options: q.options.map(M) } : {}),
    ...(q.type === 'short' ? { answer: M(q.answer) } : {}),
    explanation: M(q.explanation),
  })), ...drills()].map(q => ({ ...q, difficulty: q.difficulty || 'medium' }));

  addChapter({
    id: 8, title: "Algebra", icon: "🔤", color: "#6366f1",
    added: "2026-11-24",
    topics: ["Building expressions", "Product notation", "Exponent notation", "Reading expressions",
             "Terms and coefficients", "Collecting like terms", "Substitution", "Formulae"],
    weeklyWeights: { "Collecting like terms": 2, "Substitution": 2, "Formulae": 1.5 },
    questions: qs,
  });
})();
