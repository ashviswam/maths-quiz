const ch02 = {
  id: 2,
  title: "Operations",
  icon: "🔣",
  color: "#ec4899",
  topics: ["Addition","Subtraction","Multiplication","Column multiplication","Division","Multiple operations","Exponent notation","Order of operations"],
  questions: [
    {
      id: "c2_q1",
      topic: "Addition",
      type: "mcq",
      question: "What is <strong>3,748 + 2,965</strong>?",
      options: ["6,713", "6,623", "6,703", "6,813"],
      answer: 0,
      explanation: "Line up the digits and add from right to left: 8+5=13 (write 3, carry 1), 4+6+1=11 (write 1, carry 1), 7+9+1=17 (write 7, carry 1), 3+2+1=6. The answer is 6,713."
    },
    {
      id: "c2_q2",
      topic: "Addition",
      type: "input",
      question: "A school library has <strong>4,256</strong> fiction books and <strong>3,847</strong> non-fiction books. How many books are there in total?",
      answer: "8103",
      acceptableAnswers: ["8103", "8,103"],
      explanation: "4,256 + 3,847 = 8,103. Adding column by column from right to left: 6+7=13 (carry 1), 5+4+1=10 (carry 1), 2+8+1=11 (carry 1), 4+3+1=8, giving 8,103."
    },
    {
      id: "c2_q3",
      topic: "Subtraction",
      type: "mcq",
      question: "What is <strong>7,302 − 4,865</strong>?",
      options: ["2,347", "2,437", "3,437", "2,537"],
      answer: 1,
      explanation: "Using borrowing from right to left: 2&lt;5 so borrow, 12−5=7; then 9−1−6=2 (after lending); 2&lt;8 so borrow, 12−1−8=3; finally 6−1−4=2. The answer is 2,437. Verify: 4,865 + 2,437 = 7,302."
    },
    {
      id: "c2_q4",
      topic: "Subtraction",
      type: "input",
      question: "A factory produced <strong>6,500</strong> items in January. <strong>2,738</strong> items were sold. How many items remain?",
      answer: "3762",
      acceptableAnswers: ["3762", "3,762"],
      explanation: "6,500 − 2,738 = 3,762. You can check by adding back: 2,738 + 3,762 = 6,500."
    },
    {
      id: "c2_q5",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>364 × 7</strong>?",
      options: ["2,448", "2,548", "2,148", "2,748"],
      answer: 1,
      explanation: "Multiply each digit by 7 from right to left: 4×7=28 (write 8, carry 2), 6×7=42+2=44 (write 4, carry 4), 3×7=21+4=25. The answer is 2,548."
    },
    {
      id: "c2_q6",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>47 × 36</strong>?",
      options: ["1,582", "1,692", "1,782", "1,892"],
      answer: 1,
      explanation: "Split the multiplier: 47×36 = 47×30 + 47×6 = 1,410 + 282 = 1,692. Always break up a 2-digit multiplier to make the calculation easier."
    },
    {
      id: "c2_q7",
      topic: "Column multiplication",
      type: "input",
      question: "Use column multiplication to find <strong>485 × 6</strong>.",
      answer: "2910",
      acceptableAnswers: ["2910", "2,910"],
      explanation: "Multiply each digit by 6 from right to left: 5×6=30 (write 0, carry 3), 8×6=48+3=51 (write 1, carry 5), 4×6=24+5=29. The answer is 2,910."
    },
    {
      id: "c2_q8",
      topic: "Column multiplication",
      type: "mcq",
      question: "Use column multiplication to find <strong>63 × 28</strong>.",
      options: ["1,664", "1,764", "1,844", "1,964"],
      answer: 1,
      explanation: "In column form: 63×8=504 (first partial product), 63×20=1,260 (second partial product, shift one place left). Sum: 504 + 1,260 = 1,764."
    },
    {
      id: "c2_q9",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>756 ÷ 4</strong>?",
      options: ["179", "189", "191", "169"],
      answer: 1,
      explanation: "Using long division: 7÷4=1 remainder 3; bring down 5 → 35÷4=8 remainder 3; bring down 6 → 36÷4=9. The answer is 189. Check: 189×4=756."
    },
    {
      id: "c2_q10",
      topic: "Division",
      type: "input",
      question: "A farmer packs <strong>2,856</strong> oranges equally into boxes of <strong>8</strong>. How many boxes does he need?",
      answer: "357",
      acceptableAnswers: ["357"],
      explanation: "2,856 ÷ 8 = 357. Long division steps: 28÷8=3 remainder 4; 45÷8=5 remainder 5; 56÷8=7. Check: 357×8=2,856."
    },
    {
      id: "c2_q11",
      topic: "Multiple operations",
      type: "mcq",
      question: "A shop sells notebooks for $<strong>3</strong> each and pens for $<strong>2</strong> each. Jake buys <strong>5</strong> notebooks and <strong>4</strong> pens. How much does he spend in total?",
      options: ["$19", "$23", "$27", "$25"],
      answer: 1,
      explanation: "Cost of notebooks: 5 × $3 = $15. Cost of pens: 4 × $2 = $8. Total = $15 + $8 = $23. Multiplication is performed before addition."
    },
    {
      id: "c2_q12",
      topic: "Multiple operations",
      type: "input",
      question: "A baker makes <strong>144</strong> muffins and divides them equally into <strong>6</strong> trays. She then adds <strong>8</strong> more muffins to each tray. How many muffins are on each tray now?",
      answer: "32",
      acceptableAnswers: ["32"],
      explanation: "First divide: 144 ÷ 6 = 24 muffins per tray. Then add: 24 + 8 = 32 muffins per tray."
    },
    {
      id: "c2_q13",
      topic: "Exponent notation",
      type: "mcq",
      question: "What is the value of <strong>2<sup>3</sup></strong>?",
      options: ["6", "9", "8", "5"],
      answer: 2,
      explanation: "2<sup>3</sup> means 2 × 2 × 2 = 8. The exponent 3 tells us to use the base 2 as a factor three times."
    },
    {
      id: "c2_q14",
      topic: "Exponent notation",
      type: "mcq",
      question: "What is the value of <strong>3<sup>4</sup></strong>?",
      options: ["12", "81", "64", "27"],
      answer: 1,
      explanation: "3<sup>4</sup> means 3 × 3 × 3 × 3. Calculate step by step: 3×3=9, then 9×3=27, then 27×3=81."
    },
    {
      id: "c2_q15",
      topic: "Exponent notation",
      type: "input",
      question: "Calculate the value of <strong>5<sup>3</sup></strong>. (This means 5 × 5 × 5.)",
      answer: "125",
      acceptableAnswers: ["125"],
      explanation: "5<sup>3</sup> = 5 × 5 × 5 = 125. First: 5×5=25, then 25×5=125. The exponent 3 means multiply the base 5 by itself 3 times."
    },
    {
      id: "c2_q16",
      topic: "Order of operations",
      type: "mcq",
      question: "Using the order of operations (BODMAS), what is <strong>3 + 4 × 2</strong>?",
      options: ["14", "11", "24", "10"],
      answer: 1,
      explanation: "According to BODMAS, multiplication is done before addition. Calculate 4 × 2 = 8 first, then 3 + 8 = 11. The answer is 11, not 14."
    },
    {
      id: "c2_q17",
      topic: "Order of operations",
      type: "mcq",
      question: "What is <strong>(6 + 4) × 3 − 5</strong>?",
      options: ["25", "23", "19", "27"],
      answer: 0,
      explanation: "BODMAS: Brackets first → 6+4=10. Then multiplication → 10×3=30. Then subtraction → 30−5=25. The answer is 25."
    },
    {
      id: "c2_q18",
      topic: "Order of operations",
      type: "input",
      question: "Calculate <strong>20 ÷ 4 + 3 × 2</strong> using the correct order of operations (BODMAS).",
      answer: "11",
      acceptableAnswers: ["11"],
      explanation: "BODMAS: Division and multiplication before addition. 20÷4=5 and 3×2=6, then 5+6=11. The answer is 11."
    },
    {
      id: "c2_q19",
      topic: "Addition",
      type: "mcq",
      question: "What is <strong>5,619 + 1,784 + 2,307</strong>?",
      options: ["9,610", "9,710", "9,720", "9,810"],
      answer: 1,
      explanation: "Add in columns: ones 9+4+7=20 (write 0, carry 2), tens 1+8+0+2=11 (write 1, carry 1), hundreds 6+7+3+1=17 (write 7, carry 1), thousands 5+1+2+1=9. The answer is 9,710."
    },
    {
      id: "c2_q20",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>945 ÷ 5</strong>?",
      options: ["189", "191", "195", "179"],
      answer: 0,
      explanation: "Using long division: 9÷5=1 remainder 4; bring down 4 → 44÷5=8 remainder 4; bring down 5 → 45÷5=9. The answer is 189. Check: 189×5=945."
    },

    // ── NEW QUESTIONS FROM HERE ──────────────────────────────────────────

    // Mental addition strategies
    {
      id: "c2_q21",
      topic: "Mental addition strategies",
      type: "mcq",
      question: "A quick mental strategy for <strong>68 + 37</strong> is to add <strong>40</strong> to 68 (getting 108) then subtract <strong>3</strong>. What is the answer?",
      options: ["104", "105", "106", "107"],
      answer: 1,
      explanation: "This is the <strong>compensating strategy</strong>: round 37 up to 40 (easy to add), then adjust back. 68 + 40 = 108, then 108 − 3 = 105. Great for mental maths!"
    },
    {
      id: "c2_q22",
      topic: "Mental addition strategies",
      type: "mcq",
      question: "Using number bonds to 100, which pair adds to <strong>100</strong>?",
      options: ["43 and 67", "56 and 44", "72 and 29", "35 and 75"],
      answer: 1,
      explanation: "<strong>Number bonds to 100</strong> are pairs that sum to 100. Check: 56 + 44 = 100. The ones digits must sum to 10 (or both be 0), and the tens digits must sum to 9 (or 10 with a carry). 6+4=10 ✓ and 5+4+1=10 ✓. The answer is 56 and 44."
    },
    {
      id: "c2_q23",
      topic: "Mental addition strategies",
      type: "input",
      question: "Use a mental strategy to find <strong>297 + 156</strong>.<br>Hint: round 297 up to 300, add 156, then adjust.",
      answer: "453",
      acceptableAnswers: ["453"],
      explanation: "<strong>Compensating method:</strong> 297 is close to 300 (just 3 less). So: 300 + 156 = 456, then subtract 3 (because we added 3 too many) → 456 − 3 = 453. Much faster than column addition!"
    },

    // Mental subtraction strategies
    {
      id: "c2_q24",
      topic: "Mental subtraction strategies",
      type: "mcq",
      question: "What is <strong>503 − 298</strong> using the compensating strategy?",
      options: ["205", "195", "215", "207"],
      answer: 0,
      explanation: "<strong>Compensating:</strong> 298 is close to 300. So subtract 300 first: 503 − 300 = 203, then add back 2 (because we subtracted 2 too many): 203 + 2 = 205."
    },
    {
      id: "c2_q25",
      topic: "Mental subtraction strategies",
      type: "input",
      question: "Find <strong>1,000 − 374</strong> mentally.<br>Hint: use number bonds — the hundreds, tens and ones digits must each make the right bond.",
      answer: "626",
      acceptableAnswers: ["626"],
      explanation: "To subtract from 1,000: each digit 'pairs up' to make 9 (except the last digit, which pairs to 10). So: 3 pairs with 6 (hundreds), 7 pairs with 2 (tens), 4 pairs with 6 (ones) → 626. Check: 374 + 626 = 1,000."
    },

    // Division with remainders
    {
      id: "c2_q26",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>47 ÷ 5</strong>? Write the answer as a quotient and remainder.",
      options: ["9 remainder 3", "9 remainder 2", "8 remainder 7", "10 remainder 3"],
      answer: 1,
      explanation: "5 goes into 47 nine times: 5 × 9 = 45. The remainder is 47 − 45 = <strong>2</strong>. So 47 ÷ 5 = <strong>9 remainder 2</strong>. Always check: (quotient × divisor) + remainder = dividend: (9 × 5) + 2 = 47 ✓"
    },
    {
      id: "c2_q27",
      topic: "Division",
      type: "mcq",
      question: "<strong>263</strong> students are divided into teams of <strong>6</strong>. How many complete teams are there, and how many students are left over?",
      options: ["43 teams, 3 left over", "44 teams, 0 left over", "43 teams, 5 left over", "42 teams, 11 left over"],
      answer: 2,
      explanation: "263 ÷ 6: 6 × 40 = 240, remainder 23. 6 × 3 = 18, remainder 5. So 6 × 43 = 258, remainder 5. There are <strong>43 complete teams</strong> with <strong>5 students left over</strong>. Check: 43 × 6 + 5 = 258 + 5 = 263 ✓"
    },

    // Squares and square roots
    {
      id: "c2_q28",
      topic: "Exponent notation",
      type: "mcq",
      question: "What is <strong>9<sup>2</sup></strong> (9 squared)?",
      options: ["18", "81", "72", "27"],
      answer: 1,
      explanation: "9<sup>2</sup> = 9 × 9 = <strong>81</strong>. 'Squared' means multiplied by itself once. Don't confuse with 9 × 2 = 18 — that's a common mistake!"
    },

    // More order of operations
    {
      id: "c2_q34",
      topic: "Order of operations",
      type: "mcq",
      question: "What is <strong>2<sup>3</sup> + 4 × 3 − 6 ÷ 2</strong>?",
      options: ["23", "29", "17", "19"],
      answer: 2,
      explanation: "BODMAS — Orders (powers) first: 2<sup>3</sup> = 8. Then × and ÷ left to right: 4×3 = 12, 6÷2 = 3. Then + and − left to right: 8 + 12 − 3 = <strong>17</strong>. A common mistake is to calculate left-to-right without following BODMAS, which would give a wrong answer."
    },
    {
      id: "c2_q35",
      topic: "Order of operations",
      type: "mcq",
      question: "What is <strong>50 − (3 + 2) × 6</strong>?",
      options: ["282", "20", "270", "18"],
      answer: 1,
      explanation: "BODMAS: Brackets first → 3+2=5. Then multiplication → 5×6=30. Then subtraction → 50−30 = <strong>20</strong>. Notice: if you ignored the brackets and went left-to-right you'd get the wrong answer!"
    },

    // More multiplication word problems
    {
      id: "c2_q36",
      topic: "Multiplication",
      type: "input",
      question: "A school orders <strong>24</strong> boxes of crayons. Each box contains <strong>48</strong> crayons. How many crayons are there in total?",
      answer: "1152",
      acceptableAnswers: ["1152", "1,152"],
      explanation: "24 × 48: split as 24 × 40 + 24 × 8 = 960 + 192 = <strong>1,152</strong>. Or use column multiplication: 24×8=192, 24×40=960, sum = 1,152."
    },
    {
      id: "c2_q37",
      topic: "Column multiplication",
      type: "mcq",
      question: "A cinema has <strong>35</strong> rows of seats and <strong>42</strong> seats in each row. What is the total number of seats?",
      options: ["1,370", "1,470", "1,540", "1,570"],
      answer: 1,
      explanation: "35 × 42: use column multiplication. 35 × 2 = 70 (first partial product). 35 × 40 = 1,400 (second partial product). Total: 70 + 1,400 = <strong>1,470</strong>."
    },

    // ── CHALLENGING QUESTIONS ────────────────────────────────────────────

    {
      id: "c2_q38",
      topic: "Order of operations",
      difficulty: "challenging",
      type: "input",
      question: "Evaluate <strong>((3 + 4) × 2) ÷ 7 − 1</strong>.<br>Show careful use of BODMAS with nested brackets.",
      answer: "1",
      acceptableAnswers: ["1"],
      explanation: "Work from the <strong>innermost</strong> brackets outward. Step 1 — inner brackets: 3+4=7. Step 2 — outer brackets: 7×2=14. Step 3 — division: 14÷7=2. Step 4 — subtraction: 2−1=<strong>1</strong>. Nested brackets mean 'do the innermost first, then work outward.'"
    },
    {
      id: "c2_q39",
      topic: "Multiple operations",
      difficulty: "challenging",
      type: "input",
      question: "Find the <strong>missing number</strong>: &nbsp;<strong>5 × ? + 12 = 47</strong>",
      answer: "7",
      acceptableAnswers: ["7"],
      explanation: "Work <strong>backwards</strong>: the equation says 'multiply something by 5, add 12, and get 47.' Undo addition first: 47 − 12 = 35. Then undo multiplication: 35 ÷ 5 = <strong>7</strong>. Check: 5 × 7 + 12 = 35 + 12 = 47 ✓. This 'working backwards' technique is really useful!"
    },
    {
      id: "c2_q40",
      topic: "Multiple operations",
      difficulty: "challenging",
      type: "input",
      question: "The answer is <strong>144</strong> after dividing a mystery number by <strong>4</strong> and then adding <strong>8</strong>. What was the mystery number?",
      answer: "544",
      acceptableAnswers: ["544"],
      explanation: "Work <strong>backwards</strong> through the operations. The last step was '+8', so undo it: 144 − 8 = 136. The first step was '÷4', so undo it (multiply): 136 × 4 = <strong>544</strong>. Check: 544 ÷ 4 + 8 = 136 + 8 = 144 ✓. Always undo operations in reverse order!"
    },
    {
      id: "c2_q42",
      topic: "Multiple operations",
      difficulty: "challenging",
      type: "input",
      question: "Pragathy earns $<strong>8</strong> per hour babysitting. She works for <strong>6</strong> hours on Saturday and <strong>4</strong> hours on Sunday. She spends $<strong>15</strong> on a book and saves the rest. How much does she save?",
      answer: "65",
      acceptableAnswers: ["65", "$65"],
      explanation: "This needs <strong>3 steps</strong>. Step 1 — total hours: 6 + 4 = 10 hours. Step 2 — total earnings: 10 × $8 = $80. Step 3 — savings: $80 − $15 = <strong>$65</strong>. Multi-step problems become easier when you write down each step clearly."
    },
    {
      id: "c2_q43",
      topic: "Multiple operations",
      difficulty: "challenging",
      type: "mcq",
      question: "A box holds <strong>144</strong> chocolates arranged in <strong>12</strong> equal rows. If <strong>3</strong> complete rows are eaten, how many chocolates remain? Then if these are shared equally among <strong>9</strong> friends, how many does each friend get?",
      options: ["9", "10", "11", "12"],
      answer: 3,
      explanation: "Step 1 — chocolates per row: 144 ÷ 12 = 12. Step 2 — rows eaten: 3 rows × 12 = 36 chocolates eaten. Step 3 — remaining: 144 − 36 = 108. Step 4 — per friend: 108 ÷ 9 = <strong>12</strong>. Four operations in one problem — well done for keeping track!"
    },

    // ── ADDED IN AUDIT — missing textbook types ─────────────────────────────

    {
      id: "c2_q44",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>346 × 10</strong>?",
      options: ["3,046", "3,460", "34,600", "346"],
      answer: 1,
      explanation: "When you multiply a whole number by 10, each digit moves one place to the left and you add one zero on the end. So 346 × 10 = <strong>3,460</strong>. Quick rule: multiply by 10 → add one zero; multiply by 100 → add two zeros; multiply by 1,000 → add three zeros."
    },
    {
      id: "c2_q45",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>57 × 100</strong>?",
      options: ["570", "5,007", "5,700", "57,000"],
      answer: 2,
      explanation: "Multiplying by 100 moves each digit two places to the left, so you add two zeros. 57 × 100 = <strong>5,700</strong>. Check: 57 × 10 = 570, then 570 × 10 = 5,700."
    },
    {
      id: "c2_q46",
      topic: "Multiplication",
      type: "mcq",
      question: "What is <strong>40 × 30</strong>?",
      options: ["120", "1,200", "12,000", "400"],
      answer: 1,
      explanation: "Break it into parts: 40 × 30 = 4 × 3 × 10 × 10 = 12 × 100 = <strong>1,200</strong>. Multiply the non-zero digits first (4 × 3 = 12), then count the total zeros (one from 40, one from 30 = two zeros) and attach them: 1,200."
    },
    {
      id: "c2_q47",
      topic: "Multiplication",
      type: "mcq",
      question: "Find <strong>5 × 13 × 2</strong> by choosing the most convenient order.",
      options: ["120", "130", "140", "150"],
      answer: 1,
      explanation: "Look for numbers whose product ends in 0 or 00 to make the calculation easier. 5 × 2 = 10, which ends in 0. So: 5 × 13 × 2 = (5 × 2) × 13 = 10 × 13 = <strong>130</strong>. Changing the order of multiplication does not change the answer!"
    },
    {
      id: "c2_q48",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>4,700 ÷ 10</strong>?",
      options: ["47", "470", "4,070", "47,000"],
      answer: 1,
      explanation: "When you divide a whole number by 10, each digit moves one place to the right — this removes one zero from the end. 4,700 ÷ 10 = <strong>470</strong>. Rule: divide by 10 → remove one zero; divide by 100 → remove two zeros; divide by 1,000 → remove three zeros."
    },
    {
      id: "c2_q49",
      topic: "Division",
      type: "mcq",
      question: "What is <strong>56,000 ÷ 1,000</strong>?",
      options: ["560", "56", "5,600", "5.6"],
      answer: 1,
      explanation: "Dividing by 1,000 removes three zeros from the end. 56,000 ÷ 1,000 = <strong>56</strong>. Check: 56 × 1,000 = 56,000 ✓."
    },
    {
      id: "c2_q50",
      topic: "Division",
      type: "mcq",
      question: "You know that <strong>35 ÷ 7 = 5</strong>. Use this fact to find <strong>3,500 ÷ 7</strong>.",
      options: ["5", "50", "500", "5,000"],
      answer: 2,
      explanation: "This is a scaling pattern: 3,500 is 35 × 100, so 3,500 ÷ 7 = (35 × 100) ÷ 7 = (35 ÷ 7) × 100 = 5 × 100 = <strong>500</strong>. Knowing your basic division facts lets you quickly solve much larger problems!"
    },
    {
      id: "c2_q51",
      topic: "Exponent notation",
      type: "mcq",
      question: "Write <strong>5 × 7 × 7</strong> using exponent notation.",
      options: ["5<sup>1</sup> × 7<sup>2</sup>", "5<sup>2</sup> × 7<sup>1</sup>", "35<sup>2</sup>", "5 × 7<sup>2</sup>"],
      answer: 3,
      explanation: "Group the repeated factors: 7 appears twice (7 × 7 = 7<sup>2</sup>), and 5 appears once (5<sup>1</sup> = 5). So the expression is written <strong>5 × 7<sup>2</sup></strong>. Since 5<sup>1</sup> = 5, we don't need to write the exponent 1. Always group identical bases together."
    },
    {
      id: "c2_q52",
      topic: "Exponent notation",
      type: "mcq",
      question: "Which number is larger: <strong>2<sup>3</sup></strong> or <strong>3<sup>2</sup></strong>?",
      options: ["2<sup>3</sup>, because the exponent 3 is larger", "3<sup>2</sup>, because 3<sup>2</sup> = 9 and 2<sup>3</sup> = 8", "They are equal", "3<sup>2</sup>, because the base 3 is larger"],
      answer: 1,
      explanation: "Calculate each one: 2<sup>3</sup> = 2 × 2 × 2 = <strong>8</strong> and 3<sup>2</sup> = 3 × 3 = <strong>9</strong>. So 3<sup>2</sup> is larger. You cannot compare powers just by looking at the base or exponent alone — you must evaluate them."
    },
    {
      id: "c2_q53",
      topic: "Exponent notation",
      type: "input",
      question: "What is the value of <strong>10<sup>4</sup></strong>? (Hint: count the number of zeros after the 1.)",
      answer: "10000",
      acceptableAnswers: ["10000", "10,000"],
      explanation: "10<sup>4</sup> means 10 × 10 × 10 × 10. Each ×10 adds one zero: 10 → 100 → 1,000 → 10,000. The exponent tells you how many zeros follow the 1. So 10<sup>4</sup> = <strong>10,000</strong> (ten thousand)."
    },
    {
      id: "c2_q54",
      topic: "Order of operations",
      type: "mcq",
      question: "Find the value of <strong>17 − 8 + 6 − 3</strong>.",
      options: ["0", "18", "12", "6"],
      answer: 2,
      explanation: "When an expression has <em>only</em> addition and subtraction, work from <strong>left to right</strong>. Step 1: 17 − 8 = 9. Step 2: 9 + 6 = 15. Step 3: 15 − 3 = <strong>12</strong>. A common mistake is to add all the subtracted numbers first — always go left to right!"
    },
    {
      id: "c2_q55",
      topic: "Order of operations",
      type: "mcq",
      question: "Insert <strong>+, −, ×,</strong> or <strong>÷</strong> into the box to make this statement true: <strong>6 □ 7 − 12 = 30</strong>.",
      options: ["+", "−", "×", "÷"],
      answer: 2,
      explanation: "Test each operation, remembering BEDMAS (× and ÷ before − ):<br>6 + 7 − 12 = 13 − 12 = 1 (not 30).<br>6 − 7 − 12 = −13 (not 30).<br>6 × 7 − 12 = 42 − 12 = <strong>30</strong> ✓.<br>The answer is <strong>×</strong>. Always apply order of operations when testing each option."
    }
  ]
};
