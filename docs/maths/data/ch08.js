const ch08 = {
  id: 8,
  title: "Measurement: Introduction",
  icon: "📏",
  color: "#06b6d4",
  topics: ["Units", "Reading scales", "Mass"],
  questions: [
    {
      id: "c8_q1",
      topic: "Units",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the distance between two cities?",
      options: ["Millimetres (mm)", "Centimetres (cm)", "Metres (m)", "Kilometres (km)"],
      answer: 3,
      explanation: "Kilometres (km) are used for large distances such as between cities. Millimetres and centimetres are far too small, and metres would give an inconveniently large number."
    },
    {
      id: "c8_q2",
      topic: "Units",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the capacity of a medicine dropper bottle?",
      options: ["Litres (L)", "Millilitres (mL)", "Kilograms (kg)", "Kilometres (km)"],
      answer: 1,
      explanation: "Millilitres (mL) are used for small volumes of liquid such as medicine. A medicine dropper bottle typically holds only a few millilitres, making litres far too large a unit."
    },
    {
      id: "c8_q3",
      topic: "Mass",
      type: "mcq",
      question: "A bag of flour has a mass of <strong>2.5 kg</strong>. What is this mass in grams?<br><br>1 kg = 1000 g.",
      options: ["25 g", "250 g", "2500 g", "25 000 g"],
      answer: 2,
      explanation: "To convert kilograms to grams, multiply by 1000. 2.5 × 1000 = <strong>2500 g</strong>. Moving to a smaller unit always means multiplying."
    },
    {
      id: "c8_q4",
      topic: "Mass",
      type: "input",
      question: "A recipe needs <strong>750 g</strong> of butter. The cook already has <strong>0.5 kg</strong> of butter.<br><br>How many <strong>more</strong> grams of butter does the cook still need? Write your answer in grams.",
      answer: "250",
      acceptableAnswers: ["250", "250 g", "250g"],
      explanation: "First convert 0.5 kg to grams: 0.5 × 1000 = 500 g. Then subtract: 750 − 500 = <strong>250 g</strong>. Always convert all measurements to the same unit before calculating."
    },
    {
      id: "c8_q5",
      topic: "Mass",
      type: "input",
      question: "A tablet contains <strong>500 mg</strong> of medicine. How many grams is this?<br><br>1000 mg = 1 g. Write your answer in grams.",
      answer: "0.5",
      acceptableAnswers: ["0.5", "0.5 g", "0.50", "0.50 g"],
      explanation: "To convert milligrams to grams, divide by 1000. 500 ÷ 1000 = <strong>0.5 g</strong>. Moving to a larger unit always means dividing."
    },
    {
      id: "c8_q6",
      topic: "Mass",
      type: "input",
      question: "A truck carries <strong>3.2 t</strong> of cargo. Express this mass in kilograms.<br><br>1 t = 1000 kg. Write your answer in kilograms.",
      answer: "3200",
      acceptableAnswers: ["3200", "3200 kg", "3,200", "3,200 kg"],
      explanation: "To convert tonnes to kilograms, multiply by 1000. 3.2 × 1000 = <strong>3200 kg</strong>. Moving to a smaller unit always means multiplying."
    },
    {
      id: "c8_q7",
      topic: "Reading scales",
      type: "mcq",
      question: "A ruler is marked at every centimetre. Between the 4 cm and 5 cm marks there are <strong>9 smaller divisions</strong>, making 10 equal spaces. Each small division therefore equals:",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" aria-label="Ruler showing 4 cm to 5 cm with 10 equal spaces of 1 mm each">
  <rect width="380" height="80" fill="#f8fafc" rx="8"/>
  <!-- Ruler body -->
  <rect x="20" y="20" width="340" height="35" fill="#fef9c3" stroke="#64748b" stroke-width="1.5" rx="3"/>
  <!-- Major cm marks at 4 cm and 5 cm (at x=20 and x=360) -->
  <line x1="20" y1="20" x2="20" y2="55" stroke="#1e293b" stroke-width="2"/>
  <line x1="360" y1="20" x2="360" y2="55" stroke="#1e293b" stroke-width="2"/>
  <!-- 9 small division lines (making 10 equal spaces of 34px each) -->
  <line x1="54" y1="28" x2="54" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="28" x2="88" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="122" y1="28" x2="122" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="156" y1="28" x2="156" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="28" x2="190" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="224" y1="28" x2="224" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="258" y1="28" x2="258" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="28" x2="292" y2="47" stroke="#64748b" stroke-width="1"/>
  <line x1="326" y1="28" x2="326" y2="47" stroke="#64748b" stroke-width="1"/>
  <!-- cm labels -->
  <text x="20" y="68" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">4 cm</text>
  <text x="360" y="68" text-anchor="middle" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="12" font-weight="600">5 cm</text>
  <!-- Label showing 10 equal spaces -->
  <text x="190" y="15" text-anchor="middle" fill="#5b5ef4" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">10 equal spaces = 1 cm</text>
</svg>`,
      options: ["1 mm", "2 mm", "0.5 mm", "5 mm"],
      answer: 0,
      explanation: "10 equal spaces span 1 cm = 10 mm, so each small division = 10 mm ÷ 10 = <strong>1 mm</strong>. Counting the number of spaces (not lines) between two known markings is the key step when reading a scale."
    },
    {
      id: "c8_q8",
      topic: "Reading scales",
      type: "mcq",
      question: "A thermometer scale goes from 0°C to 50°C. There are <strong>5 equal divisions</strong> between each 10-degree marking. A student reads the thermometer and the mercury sits exactly on the <strong>third</strong> small mark above 20°C. What is the temperature?",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" aria-label="Thermometer scale from 0 to 50 degrees C with mercury at third small mark above 20 degrees">
  <rect width="200" height="220" fill="#f8fafc" rx="8"/>
  <!-- Thermometer tube -->
  <rect x="88" y="10" width="24" height="180" fill="white" stroke="#64748b" stroke-width="1.5" rx="12"/>
  <!-- Mercury fill up to 26°C: 0→185px top, 50→10px top, so 1°C = 3.5px; 26°C = 185-(26*3.5)=185-91=94px from top of tube -->
  <rect x="92" y="94" width="16" height="96" fill="#f43f5e" rx="4"/>
  <!-- Bulb -->
  <circle cx="100" cy="195" r="12" fill="#f43f5e" stroke="#64748b" stroke-width="1.5"/>
  <!-- Major tick marks every 10°C (0,10,20,30,40,50) -->
  <!-- y for T: y = 185 - (T/50)*175 -->
  <!-- 0°C  y=185, 10°C y=150, 20°C y=115, 30°C y=80, 40°C y=45, 50°C y=10 -->
  <line x1="112" y1="185" x2="130" y2="185" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="189" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">0°C</text>
  <line x1="112" y1="150" x2="130" y2="150" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="154" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">10°C</text>
  <line x1="112" y1="115" x2="130" y2="115" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="119" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">20°C</text>
  <line x1="112" y1="80" x2="130" y2="80" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="84" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">30°C</text>
  <line x1="112" y1="45" x2="130" y2="45" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="49" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">40°C</text>
  <line x1="112" y1="10" x2="130" y2="10" stroke="#1e293b" stroke-width="2"/>
  <text x="134" y="14" fill="#1e293b" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="600">50°C</text>
  <!-- Small division ticks between 20°C and 30°C (5 spaces = 35px each = 7px per space) -->
  <!-- 20°C at y=115, each small div = 35/5 = 7px up -->
  <line x1="112" y1="108" x2="120" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="101" x2="120" y2="101" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="94" x2="120" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="87" x2="120" y2="87" stroke="#64748b" stroke-width="1"/>
  <!-- Arrow pointing to 3rd mark above 20°C = y=94 -->
  <circle cx="88" cy="94" r="4" fill="#f43f5e"/>
  <text x="50" y="98" text-anchor="middle" fill="#f43f5e" font-family="Nunito,Arial,sans-serif" font-size="11" font-weight="700">3rd mark</text>
  <line x1="70" y1="95" x2="86" y2="94" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arr)"/>
</svg>`,
      options: ["23°C", "26°C", "23.5°C", "25°C"],
      answer: 1,
      explanation: "Each small division = 10°C ÷ 5 = 2°C. Three marks above 20°C = 20 + 3 × 2 = <strong>26°C</strong>. Always find the value of one small division first, then count up from the nearest labelled mark."
    },
    {
      id: "c8_q9",
      topic: "Reading scales",
      type: "mcq",
      question: "A measuring jug has markings at 0 mL, 100 mL, 200 mL, 300 mL, and 400 mL. There are <strong>4 equal spaces</strong> between each 100 mL mark. The water level sits halfway between the 200 mL and 300 mL marks. How much water is in the jug?",
      options: ["225 mL", "250 mL", "275 mL", "240 mL"],
      answer: 1,
      explanation: "Halfway between 200 mL and 300 mL is (200 + 300) ÷ 2 = <strong>250 mL</strong>. When a level falls exactly between two marks, the reading is the average of those two values."
    },
    {
      id: "c8_q10",
      topic: "Reading scales",
      type: "input",
      question: "A ruler shows markings at 6 cm and 7 cm with <strong>10 equal spaces</strong> between them (each small division = 1 mm). A pencil end sits at the <strong>4th small mark</strong> above 6 cm.<br><br>What is the length reading in millimetres from the 0 end, given the pencil tip starts at 0 mm and the end is at this point? Write just the scale reading in mm (i.e. how far the end is from the 6 cm mark, added to 60 mm).",
      answer: "64",
      acceptableAnswers: ["64", "64 mm", "64mm"],
      explanation: "Each small division = 1 mm. Four small marks above 6 cm = 60 mm + 4 mm = <strong>64 mm</strong>. Reading a ruler means locating the nearest labelled mark and counting on using the value of each small division."
    },
    {
      id: "c8_q11",
      topic: "Reading scales",
      type: "mcq",
      question: "A weighing scale dial goes from 0 kg to 5 kg. Between 0 and 1 kg there are <strong>4 equal divisions</strong> (so 4 spaces). The pointer rests on the <strong>second</strong> small mark past 3 kg. What does the scale read?",
      options: ["3.2 kg", "3.4 kg", "3.5 kg", "3.25 kg"],
      answer: 2,
      explanation: "Each small division = 1 kg ÷ 4 = 0.25 kg. Two marks past 3 kg = 3 + 2 × 0.25 = <strong>3.5 kg</strong>. First find the value of each small division, then count on from the nearest labelled mark."
    },
    {
      id: "c8_q12",
      topic: "Reading scales",
      type: "input",
      question: "A measuring jug has markings at 0 mL, 500 mL, and 1000 mL. There are <strong>5 equal spaces</strong> between 0 mL and 500 mL. The liquid level sits on the <strong>3rd</strong> small mark above 500 mL.<br><br>How many mL is in the jug?",
      answer: "800",
      acceptableAnswers: ["800", "800 mL", "800ml", "800 ml"],
      explanation: "Each small division = 500 mL ÷ 5 = 100 mL. Three marks above 500 mL = 500 + 3 × 100 = <strong>800 mL</strong>. Always divide the gap between two labelled marks by the number of spaces to find the value of one small division."
    },
    {
      id: "c8_q13",
      topic: "Mass",
      type: "mcq",
      question: "How many grams are in <strong>1 kilogram</strong>?",
      options: ["10 g", "100 g", "1000 g", "10 000 g"],
      answer: 2,
      explanation: "The prefix <em>kilo-</em> means one thousand, so 1 kilogram = <strong>1000 grams</strong>. This is the most important mass conversion in the metric system."
    },
    {
      id: "c8_q14",
      topic: "Mass",
      type: "mcq",
      question: "A bag of flour has a mass of <strong>2.75 kg</strong>. How many grams is this?",
      options: ["275 g", "2075 g", "2750 g", "27 500 g"],
      answer: 2,
      explanation: "To convert kilograms to grams, multiply by 1000. 2.75 × 1000 = <strong>2750 g</strong>. Converting to a smaller unit always involves multiplying."
    },
    {
      id: "c8_q15",
      topic: "Mass",
      type: "input",
      question: "Convert <strong>4500 g</strong> to kilograms.<br><br>1 kg = 1000 g. Write your answer in kilograms.",
      answer: "4.5",
      acceptableAnswers: ["4.5", "4.5 kg", "4.50", "4.50 kg"],
      explanation: "To convert grams to kilograms, divide by 1000. 4500 ÷ 1000 = <strong>4.5 kg</strong>. Converting to a larger unit always involves dividing."
    },
    {
      id: "c8_q16",
      topic: "Mass",
      type: "mcq",
      question: "Which unit would be most appropriate for measuring the mass of a vitamin tablet?",
      options: ["Kilograms (kg)", "Grams (g)", "Milligrams (mg)", "Tonnes (t)"],
      answer: 2,
      explanation: "A vitamin tablet has a very small mass, typically measured in <strong>milligrams (mg)</strong>. Milligrams are used for very small masses such as medicines and nutritional quantities."
    },
    {
      id: "c8_q17",
      topic: "Mass",
      type: "input",
      question: "A recipe needs <strong>250 g</strong> of butter. A cook has a block of butter with a mass of <strong>1 kg</strong>. How many grams of butter will be left after the cook uses the amount needed for the recipe?",
      answer: "750",
      acceptableAnswers: ["750", "750 g", "750g"],
      explanation: "First convert: 1 kg = 1000 g. Then subtract: 1000 − 250 = <strong>750 g</strong>. Always convert all measurements to the same unit before calculating."
    },
    {
      id: "c8_q18",
      topic: "Units",
      type: "mcq",
      question: "A student says the length of a classroom is about 8 <em>millimetres</em>. Is this reasonable?",
      options: [
        "Yes, 8 mm is a sensible length for a classroom",
        "No, 8 mm is far too short — the length should be about 8 metres",
        "No, 8 mm is far too short — the length should be about 8 kilometres",
        "No, 8 mm is too long — the length should be about 8 micrometres"
      ],
      answer: 1,
      explanation: "A millimetre is about the thickness of a fingernail, so 8 mm is far too small for a classroom. A typical classroom is about <strong>8 metres</strong> long. Choosing appropriate units requires a sense of real-world sizes."
    },
    {
      id: "c8_q19",
      topic: "Reading scales",
      type: "mcq",
      question: "A thermometer shows markings every 10°C from −10°C to 50°C, with <strong>5 equal spaces</strong> between each 10-degree mark. The mercury column ends between the 30°C and 40°C marks, exactly on the <strong>first</strong> small mark above 30°C. What is the temperature?",
      options: ["31°C", "32°C", "33°C", "35°C"],
      answer: 1,
      explanation: "Each small division = 10°C ÷ 5 = 2°C. One mark above 30°C = 30 + 1 × 2 = <strong>32°C</strong>. Finding the value of one small division is always the first step when interpolating on a scale."
    },
    {
      id: "c8_q20",
      topic: "Mass",
      type: "input",
      question: "A parcel has a mass of <strong>3 kg 450 g</strong>. Express this mass entirely in grams.",
      answer: "3450",
      acceptableAnswers: ["3450", "3,450", "3450 g", "3,450 g"],
      explanation: "3 kg = 3 × 1000 g = 3000 g. Add the extra grams: 3000 + 450 = <strong>3450 g</strong>. Convert the kilograms to grams first, then add any remaining grams."
    },

    // ── NEW QUESTIONS ─────────────────────────────────────────────────────────

    // Units of length: mm ↔ cm

    // Mass: mg ↔ g
    {
      id: "c8_q24",
      topic: "Units of mass",
      type: "mcq",
      question: "How many milligrams (mg) are in <strong>1 gram</strong>?",
      options: ["10 mg", "100 mg", "1000 mg", "10 000 mg"],
      answer: 2,
      explanation: "The prefix <em>milli-</em> means one thousandth, so 1 g = <strong>1000 mg</strong>. This is just like the relationship between kilometres and metres — each step down the metric ladder multiplies by 1000."
    },
    {
      id: "c8_q25",
      topic: "Units of mass",
      type: "input",
      question: "A bag of rice has a mass of <strong>2500 g</strong>. Write this mass in kilograms.<br><br>1000 g = 1 kg. Write your answer in kilograms.",
      answer: "2.5",
      acceptableAnswers: ["2.5", "2.5 kg", "2.50", "2.50 kg"],
      explanation: "To convert grams to kilograms, divide by 1000. 2500 ÷ 1000 = <strong>2.5 kg</strong>. Moving to a larger unit always means dividing."
    },

    // Mass: tonnes
    {
      id: "c8_q26",
      topic: "Units of mass",
      type: "mcq",
      question: "How many kilograms are in <strong>1 tonne</strong>?",
      options: ["10 kg", "100 kg", "1000 kg", "10 000 kg"],
      answer: 2,
      explanation: "1 tonne = <strong>1000 kg</strong>. A tonne is a metric unit used for very heavy objects — a small car weighs about 1 tonne, and a large truck can weigh many tonnes."
    },
    {
      id: "c8_q27",
      topic: "Units of mass",
      type: "input",
      question: "A delivery truck carries a load of <strong>3.2 tonnes</strong>. Express this mass in kilograms.<br><br>1 tonne = 1000 kg. Write your answer in kilograms.",
      answer: "3200",
      acceptableAnswers: ["3200", "3200 kg", "3,200", "3,200 kg"],
      explanation: "To convert tonnes to kilograms, multiply by 1000. 3.2 × 1000 = <strong>3200 kg</strong>. Moving from tonnes (large unit) to kilograms (smaller unit) means multiplying."
    },

    // Capacity: mL ↔ L

    // Units of time

    // Estimation
    {
      id: "c8_q36",
      topic: "Estimation",
      type: "mcq",
      question: "A student estimates the mass of a large watermelon. Which is the most reasonable estimate?",
      options: ["50 g", "500 g", "5 kg", "50 kg"],
      answer: 2,
      explanation: "A large watermelon typically has a mass of about <strong>5 kg</strong>. 50 g is far too light (about the mass of a small apple), 500 g is too light, and 50 kg would be an enormous weight. Developing a feel for everyday masses helps you choose sensible units."
    },
    {
      id: "c8_q37",
      topic: "Estimation",
      type: "mcq",
      question: "A student estimates the capacity of a standard kitchen teaspoon. Which is the most reasonable estimate?",
      options: ["5 mL", "50 mL", "500 mL", "5 L"],
      answer: 0,
      explanation: "A standard kitchen teaspoon holds about <strong>5 mL</strong>. This is why medicine doses are often given as 'one teaspoon = 5 mL'. 50 mL would be closer to 10 teaspoons, and 500 mL is a large drink."
    },
    {
      id: "c8_q38",
      topic: "Estimation",
      type: "mcq",
      question: "Which is the most reasonable estimate for the length of a standard school bus?",
      options: ["1.2 m", "6 m", "12 m", "120 m"],
      answer: 2,
      explanation: "A standard school bus is about <strong>12 metres</strong> long. 1.2 m is barely taller than a person, 6 m is roughly the length of a large car, and 120 m is the length of a city block. Developing a sense of real-world lengths is an important skill."
    },

    // Imperial and metric comparisons

    // Compound measures preview: speed

    // CHALLENGING QUESTIONS ───────────────────────────────────────────────────

    {
      id: "c8_q44",
      topic: "Units of mass",
      difficulty: "challenging",
      type: "mcq",
      question: "Which is heavier: <strong>3.2 kg</strong> or <strong>3150 g</strong>?<br><br>(You will need to convert one measurement before comparing.)",
      options: [
        "3.2 kg, because 3.2 is greater than 3.15",
        "3150 g, because 3150 > 3200 when compared directly",
        "3150 g, because you must always compare the numbers as written without converting",
        "They are equal"
      ],
      answer: 0,
      explanation: "Convert 3.2 kg to grams: 3.2 × 1000 = 3200 g. Now compare: 3200 g vs 3150 g. Since 3200 > 3150, <strong>3.2 kg is heavier</strong>. The key is to always convert to the same unit before comparing — 3.2 kg = 3200 g, not 3.2 g!"
    },
    {
      id: "c8_q45",
      topic: "Units of mass",
      difficulty: "challenging",
      type: "input",
      question: "A car has a mass of <strong>1.4 tonnes</strong>. How many <strong>grams</strong> is this?<br><br>Hint: 1 tonne = 1000 kg and 1 kg = 1000 g.",
      answer: "1400000",
      acceptableAnswers: ["1400000", "1 400 000", "1,400,000", "1400000 g", "1,400,000 g"],
      explanation: "Step 1: tonnes → kg: 1.4 tonnes × 1000 = 1400 kg<br>Step 2: kg → g: 1400 × 1000 = <strong>1 400 000 g</strong> (one million four hundred thousand grams!)<br>It is usually better to express this as 1.4 tonnes or 1400 kg — this shows why we choose units that give manageable numbers."
    },
    {
      id: "c8_q46",
      topic: "Units",
      type: "mcq",
      question: "Match each description with the most suitable measurement.<br><br>Which option correctly pairs <em>\"The amount of juice in a bottle\"</em> with the right measurement?",
      options: ["50 km/h", "350 mL", "7 hours", "55°C"],
      answer: 1,
      explanation: "Juice in a bottle is a <strong>capacity</strong>, measured in millilitres (mL) or litres (L). 350 mL is a typical bottle of juice. 50 km/h is a speed, 7 hours is a time, and 55°C is a temperature — none of these measure capacity."
    },
    {
      id: "c8_q47",
      topic: "Units",
      type: "mcq",
      question: "A bulldozer has a mass of about 18 000 kg. A student writes its mass as <strong>18 000 000 g</strong>. Why is using grams a poor choice of unit here?",
      options: [
        "Grams cannot be used for objects heavier than 1000 g",
        "The number of grams is far too large to be practical — tonnes or kilograms give a much more manageable number",
        "Grams are only used for liquids, not solid objects",
        "18 000 000 g is not the correct conversion"
      ],
      answer: 1,
      explanation: "18 000 kg = 18 000 000 g — that is eighteen million grams! The number is so large that it is hard to work with. We choose units that give <strong>sensible-sized numbers</strong>. For heavy objects like vehicles or machinery, tonnes or kilograms are far more practical. (18 000 kg = 18 t.)"
    },
    {
      id: "c8_q48",
      topic: "Mass",
      type: "input",
      question: "Convert <strong>7 g</strong> to milligrams.<br><br>1 g = 1000 mg. Write your answer in milligrams.",
      answer: "7000",
      acceptableAnswers: ["7000", "7000 mg", "7,000", "7,000 mg"],
      explanation: "To convert grams to milligrams, multiply by 1000. 7 × 1000 = <strong>7000 mg</strong>. Moving from grams (larger unit) to milligrams (smaller unit) means multiplying."
    },
    {
      id: "c8_q49",
      topic: "Mass",
      type: "input",
      question: "Convert <strong>4150 kg</strong> to tonnes.<br><br>1 t = 1000 kg. Write your answer in tonnes.",
      answer: "4.15",
      acceptableAnswers: ["4.15", "4.15 t"],
      explanation: "To convert kilograms to tonnes, divide by 1000. 4150 ÷ 1000 = <strong>4.15 t</strong>. Moving from kilograms (smaller unit) to tonnes (larger unit) means dividing."
    },
    {
      id: "c8_q50",
      topic: "Mass",
      type: "input",
      question: "Ervin bought a <strong>1.5 kg</strong> box of cereal and a <strong>700 g</strong> box of cereal. What is the <strong>total mass</strong> of the cereal in grams?",
      answer: "2200",
      acceptableAnswers: ["2200", "2200 g", "2,200", "2,200 g"],
      explanation: "First convert 1.5 kg to grams: 1.5 × 1000 = 1500 g. Then add: 1500 + 700 = <strong>2200 g</strong>. Always convert all measurements to the same unit before adding."
    },
    {
      id: "c8_q51",
      topic: "Mass",
      type: "input",
      question: "A block of chocolate has a mass of <strong>120 g</strong>. A factory produces <strong>200</strong> such blocks. What is the total mass of the blocks in <strong>kilograms</strong>?<br><br>1 kg = 1000 g.",
      answer: "24",
      acceptableAnswers: ["24", "24 kg"],
      explanation: "Step 1: Find total mass in grams: 120 × 200 = 24 000 g.<br>Step 2: Convert to kilograms: 24 000 ÷ 1000 = <strong>24 kg</strong>. Multiply first, then convert to the required unit."
    },
    {
      id: "c8_q52",
      topic: "Mass",
      type: "input",
      question: "350 sandbags are used to hold back floodwater. Each sandbag has a mass of <strong>20 kg</strong>. What is the total mass of all the sandbags in <strong>tonnes</strong>?<br><br>1 t = 1000 kg.",
      answer: "7",
      acceptableAnswers: ["7", "7 t", "7 tonnes"],
      explanation: "Step 1: Find total mass in kilograms: 350 × 20 = 7000 kg.<br>Step 2: Convert to tonnes: 7000 ÷ 1000 = <strong>7 t</strong>. Multiply the number of bags by the mass per bag, then convert units."
    },
    {
      id: "c8_q53",
      topic: "Reading scales",
      type: "mcq",
      question: "A speedometer has markings at 0, 20, 40, 60, 80, 100, 120, 140, 160, 180 and 200 km/h. Between each 20 km/h marking there are <strong>4 equal spaces</strong> (with 3 small marks between them). The needle points to the <strong>third small mark</strong> past the 80 km/h marking. What speed is shown?",
      options: ["83 km/h", "85 km/h", "90 km/h", "95 km/h"],
      answer: 3,
      explanation: "Each small division = 20 km/h ÷ 4 = 5 km/h. Three marks past 80 km/h = 80 + 3 × 5 = <strong>95 km/h</strong>. Reading a speedometer uses exactly the same method as reading any other scale: find the value of one small division, then count on from the nearest labelled mark."
    },
    {
      id: "c8_q54",
      topic: "Mass",
      type: "input",
      question: "A suitcase has a mass of <strong>21.2 kg</strong>. Write this mass in <strong>tonnes</strong>.<br><br>1 t = 1000 kg. Write your answer in tonnes.",
      answer: "0.0212",
      acceptableAnswers: ["0.0212", "0.0212 t"],
      explanation: "To convert kilograms to tonnes, divide by 1000. 21.2 ÷ 1000 = <strong>0.0212 t</strong>. This shows why we do not usually express everyday luggage in tonnes — the number becomes very small and awkward."
    },
  ]
};
