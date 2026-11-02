/* CEED English Path · B2.1 */
(function () {
  "use strict";

  const course = window.CEED_COURSE;
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const nav = document.getElementById("unit-nav");
  const topicNav = document.getElementById("topic-nav");
  const STORE_KEY = "ceed-b21-progress-v1";
  const tabs = [
    ["theory", "Theory"],
    ["vocabulary", "Vocabulary cards"],
    ["practice", "20-question practice"],
    ["reading", "Reading"],
    ["speaking", "Speaking & photo"],
    ["skills", "Exam task"],
    ["mediation", "Mediation studio"],
    ["booklet", "🖨 Print unit"]
  ];
  const sectionGuides = {
    theory: [["01", "See the pattern"], ["02", "Compare examples"], ["03", "Avoid common errors"]],
    vocabulary: [["01", "Preview the word"], ["02", "Flip the card"], ["03", "Use it in context"]],
    practice: [["01", "Choose an answer"], ["02", "Read the feedback"], ["03", "Build your streak"]],
    reading: [["01", "Read for meaning"], ["02", "Find text evidence"], ["03", "Check understanding"]],
    speaking: [["01", "Observe the image"], ["02", "Describe details"], ["03", "Share an inference"]],
    skills: [["01", "Understand the task"], ["02", "Plan your response"], ["03", "Review your work"]],
    mediation: [["01", "Select key facts"], ["02", "Rephrase clearly"], ["03", "Adapt for your reader"]],
    booklet: [["01", "Review topic by topic"], ["02", "Complete every exercise"], ["03", "Print or save as PDF"]]
  };
  const practiceByTopic = {
    1: [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 18], [11, 12, 13, 14, 15, 19], [16, 17]],
    2: [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19]],
    3: [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19]],
    4: [[0, 1, 2, 3, 4, 16, 17], [5, 6, 7, 18], [8, 9, 10, 11], [12, 13, 14, 15, 19]],
    5: [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
    6: [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19]]
  };
  const topicIllustrations = {
    1: [["🎧", "🎸", "🎤"], ["🗣️", "🔁", "🤝"], ["🧭", "🔗", "🎙️"], ["👄", "🔊", "🎶"]],
    2: [["🍎", "🍲", "🍽️"], ["⏳", "📅", "✅"], ["🧩", "🔗", "↔️"], ["⭐", "✍️", "👥"]],
    3: [["🕰️", "⏳", "📜"], ["👤", "🔎", "📖"], ["🧱", "🗣️", "🤝"], ["📝", "⚖️", "📣"]],
    4: [["💭", "⏪", "🧳"], ["🔀", "🧩", "✈️"], ["⬆️", "🔁", "💬"], ["✉️", "📝", "📮"]],
    5: [["🧒", "↩️", "🗓️"], ["🚶", "🔁", "🏡"], ["💬", "❓", "💡"]],
    6: [["🖼️", "🖌️", "🏛️"], ["⬆️", "🔁", "💬"], ["🌡️", "✨", "💯"], ["ℹ️", "✂️", "👥"]]
  };

  let state = { completed: [], answers: {}, drills: {}, readingAnswers: {}, flashcards: {}, speakingCards: {}, speakingFlips: {} };
  let oralTimerInterval = null;
  let storageWarning = "";
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    if (saved && typeof saved === "object") {
      state.completed = Array.isArray(saved.completed) ? saved.completed.filter(Number.isInteger) : [];
      state.answers = saved.answers && typeof saved.answers === "object" ? saved.answers : {};
      state.drills = saved.drills && typeof saved.drills === "object" ? saved.drills : {};
      state.readingAnswers = saved.readingAnswers && typeof saved.readingAnswers === "object" ? saved.readingAnswers : {};
      state.flashcards = saved.flashcards && typeof saved.flashcards === "object" ? saved.flashcards : {};
      state.speakingCards = saved.speakingCards && typeof saved.speakingCards === "object" ? saved.speakingCards : {};
      state.speakingFlips = saved.speakingFlips && typeof saved.speakingFlips === "object" ? saved.speakingFlips : {};
    }

  } catch (error) {
    console.error("Could not read saved B2.1 progress.", error);
    storageWarning = "Saved progress could not be read. You can still use the course, but progress may not persist.";
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
      storageWarning = "";
    } catch (error) {
      console.error("Could not save B2.1 progress.", error);
      storageWarning = "Progress could not be saved in this browser.";
    }
    updateHeaderProgress();
  }

  function stopOralTimer() {
    if (oralTimerInterval !== null) {
      window.clearInterval(oralTimerInterval);
      oralTimerInterval = null;
    }
  }

  function resetOralTimer() {
    stopOralTimer();
    const timer = main.querySelector("[data-oral-timer]");
    const status = main.querySelector("[data-oral-status]");
    const start = main.querySelector("[data-start-oral]");
    if (timer) timer.textContent = "1:30";
    if (status) status.textContent = "Use the infographic above as your source.";
    if (start) start.disabled = false;
  }

  function startOralTimer() {
    resetOralTimer();
    let remaining = 90;
    const timer = main.querySelector("[data-oral-timer]");
    const status = main.querySelector("[data-oral-status]");
    const start = main.querySelector("[data-start-oral]");
    if (!timer || !status || !start) return;
    start.disabled = true;
    status.textContent = "Your speaking time is running. Keep going!";
    oralTimerInterval = window.setInterval(function () {
      remaining -= 1;
      timer.textContent = Math.floor(remaining / 60) + ":" + String(remaining % 60).padStart(2, "0");
      if (remaining <= 0) {
        stopOralTimer();
        start.disabled = false;
        status.textContent = "Time is up. Well done—review the speaking checklist.";
      }
    }, 1000);
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function unitById(id) {
    return course.units.find(function (unit) { return unit.id === Number(id); });
  }

  function extendedUnit(id) {
    return window.CEED_EXTENDED[String(id)];
  }

  course.units.forEach(function (unit) {
    const extra = extendedUnit(unit.id);
    if (!extra || extra.quiz.length !== 20 || extra.reading.questions.length !== 6 || !extra.mediation || extra.mediation.steps.length !== 4 || extra.mediation.facts.length !== 4 || !extra.mediation.oralTask || !Array.isArray(extra.vocabularyTranslations) || extra.vocabularyTranslations.length !== unit.vocabulary.length + extra.extraVocabulary.length) {
      throw new Error("Unit " + unit.id + " must have 20 practice questions, 6 reading questions, 12 translated vocabulary cards and a complete oral mediation infographic.");
    }
    const assignedQuestions = practiceByTopic[unit.id].reduce(function (all, group) { return all.concat(group); }, []);
    if (assignedQuestions.length !== extra.quiz.length || new Set(assignedQuestions).size !== extra.quiz.length || assignedQuestions.some(function (index) { return index < 0 || index >= extra.quiz.length; })) {
      throw new Error("Unit " + unit.id + " practice questions must be assigned to exactly one theory topic.");
    }
  });

  function doneCount() {
    return state.completed.length;
  }

  function progressPercent() {
    return Math.round(doneCount() / course.units.length * 100);
  }

  function updateHeaderProgress() {
    document.getElementById("top-progress").textContent = progressPercent() + "% complete";
  }

  function renderNav(activeId, activeView, activeTopic) {
    nav.innerHTML = course.units.map(function (unit) {
      const active = Number(activeId) === unit.id;
      const done = state.completed.includes(unit.id);
      return `<button class="unit-link${active ? " active" : ""}" data-unit="${unit.id}" aria-current="${active ? "page" : "false"}">
        <span class="unit-number">${unit.id.toString().padStart(2, "0")}</span>
        <span>${esc(unit.title)}</span><span class="unit-check">${done ? "✓" : ""}</span>
      </button>`;
    }).join("");

    const activeUnit = unitById(activeId);
    topicNav.hidden = !activeUnit;
    topicNav.innerHTML = activeUnit ? `
      <div class="side-section-label topic-nav-heading">IN THIS UNIT</div>
      ${activeUnit.topics.map(function (topic, index) {
        const selected = activeTopic !== null && Number(activeTopic) === index;
        return `<a class="topic-nav-link${selected ? " active" : ""}" href="#unit/${activeUnit.id}/theory/topic-${index}"${selected ? ' aria-current="location"' : ""}>
          <span class="topic-nav-number">${String(index + 1).padStart(2, "0")}</span><span>${esc(topic.title)}</span>
        </a>`;
      }).join("")}` : "";

    document.querySelectorAll(".nav-link[data-view]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.view === activeView);
    });
  }

  function route() {
    stopOralTimer();
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const routeName = parts[0] || "home";
    sidebar.classList.remove("open");
    main.classList.remove("print-booklet-mode");

    if (routeName === "unit" && unitById(parts[1])) {
      const unit = unitById(parts[1]);
      const tab = tabs.some(function (item) { return item[0] === parts[2]; }) ? parts[2] : "theory";
      const topicMatch = /^topic-(\d+)$/.exec(parts[3] || "");
      const activeTopic = topicMatch ? Number(topicMatch[1]) : null;
      renderNav(unit.id, "", activeTopic);
      renderUnit(unit, tab);
      if (tab === "theory" && activeTopic !== null && unit.topics[activeTopic]) {
        window.requestAnimationFrame(function () {
          const topic = document.getElementById("topic-" + activeTopic);
          if (topic) topic.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return;
    }
    if (routeName === "schedule") {
      renderNav(null, "schedule");
      renderSchedule();
      return;
    }
    if (routeName === "assessment") {
      renderNav(null, "assessment");
      renderAssessment();
      return;
    }
    renderNav(null, "home");
    renderHome();
  }

  function completionNotice() {
    return storageWarning ? `<div class="notice" role="status"><strong>Progress notice:</strong> ${esc(storageWarning)}</div>` : "";
  }

  function renderHome() {
    const nextUnit = course.units.find(function (unit) { return !state.completed.includes(unit.id); }) || course.units[0];
    main.innerHTML = `
      <section class="hero">
        <div class="eyebrow">CEEDCV · ENGLISH · 2026–2027</div>
        <h1>Your B2.1 year,<br>made visible.</h1>
        <p>Explore the six units of the CEED B2.1 programme through visual English lessons, practical examples, common errors and short interactive quizzes. Follow the year plan and track your progress as you study.</p>
        <div class="hero-actions">
          <a class="button light" href="#unit/${nextUnit.id}/theory">Continue learning <span aria-hidden="true">→</span></a>
          <a class="button" href="#schedule">View the year plan</a>
        </div>
      </section>
      ${completionNotice()}
      <section class="stats-grid" aria-label="Course overview">
        <div class="stat-card"><strong>6</strong><span>themed units</span></div>
        <div class="stat-card"><strong>Sep–Jun</strong><span>course calendar</span></div>
        <div class="stat-card"><strong>6</strong><span>assessed tasks</span></div>
        <div class="stat-card"><strong>${progressPercent()}%</strong><span>units marked complete</span></div>
      </section>
      <div class="section-heading">
        <div><h2>Explore the units</h2><p>Grammar, vocabulary, skills and assessment tasks follow the CEED B2.1 programme.</p></div>
        <a class="button outline small" href="#schedule">Full schedule ↗</a>
      </div>
      <section class="unit-grid" aria-label="B2.1 course units">
        ${course.units.map(function (unit) {
          const done = state.completed.includes(unit.id);
          return `<button class="unit-card" data-unit="${unit.id}">
            <div class="unit-card-top"><span class="unit-number">${unit.id.toString().padStart(2, "0")}</span><span class="unit-week">${esc(unit.weeks)}</span></div>
            <h3>${esc(unit.title)}</h3><p>${esc(unit.focus)}</p>
            <div class="card-progress"><span style="width:${done ? 100 : 0}%"></span></div>
          </button>`;
        }).join("")}
      </section>
      <section class="panel" style="margin-top:22px">
        <div class="eyebrow">HOW TO USE THIS COURSE</div>
        <h2 style="margin-top:8px">Study at your own pace</h2>
        <p class="panel-intro">Each unit brings together visual grammar explanations, examples, common errors, topic vocabulary, exam-style output and a short self-check. Your completion and answers stay in this browser.</p>
        <div class="notice"><strong>Calendar:</strong> the schedule follows the dates supplied for 2026–2027. Two unit dates are retained exactly as shown in the calendar, even though their order is inconsistent; see the year-plan notes.</div>
      </section>`;
  }

  function renderSchedule() {
    main.innerHTML = `
      <div class="eyebrow">2026–2027 · TEACHING WEEKS</div>
      <h1>Year plan</h1>
      <p class="lead schedule-intro">The sequence below follows the calendar supplied for the course. Dates run from September 2026 to June 2027.</p>
      ${completionNotice()}
      <div class="panel">
        <div class="table-wrap">
          <table class="schedule-table">
            <thead><tr><th>Week</th><th>Unit / activity</th></tr></thead>
            <tbody>${course.weeks.map(function (item) {
              const label = item.type && item.type !== "Task" ? `<span class="schedule-type">${esc(item.type)}</span>` : "";
              const title = item.unit
                ? `<a href="#unit/${item.unit}/theory" style="color:var(--teal);text-decoration:none">${esc(item.title)}</a>`
                : `${esc(item.title)} ${label}`;
              return `<tr><td>${esc(item.week)}</td><td>${title}</td></tr>`;
            }).join("")}</tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <h2>Important calendar notes</h2>
        <ul class="strategy-list">
          <li><b>01</b><span>Welcome session: <strong>21–27 September 2026</strong>.</span></li>
          <li><b>02</b><span>First-term examination: <strong>25 January–7 February 2027</strong>.</span></li>
          <li><b>03</b><span>Second-term examination: <strong>24 May–6 June 2027</strong>.</span></li>
          <li><b>04</b><span>The supplied calendar places UNIT 4 PART 3 (22–28 March) after TASK 4 (1–7 March), and UNIT 5 PART 2 (22–28 February) after PART 1 (8–14 March). The dates above are preserved as shown.</span></li>
        </ul>
      </div>`;
  }

  function renderAssessment() {
    main.innerHTML = `
      <div class="eyebrow">TASKS · EXAMINATIONS · APTE / NO APTE</div>
      <h1>Tasks & exams</h1>
      <p class="lead">Practise the four skills and mediation through the formats in the B2.1 programme. Check official Aules instructions and centre announcements for final dates and requirements.</p>
      <div class="section-heading"><div><h2>Six assessed tasks</h2><p>One task follows each unit or learning block.</p></div></div>
      <div class="assessment-grid">
        ${[
          ["Task 1", "Listening + oral monologue", "A short talk about a memorable concert or music event."],
          ["Task 2", "Reading + review", "Evaluate a restaurant, cookbook, cooking show or food app."],
          ["Task 3", "Cloze + opinion essay", "Develop a supported position on history, politics or diversity."],
          ["Task 4", "Reading + complaint letter", "Explain a travel problem and request an appropriate solution."],
          ["Task 5", "Listening + oral mediation", "Explain the key points of a healthy-ageing leaflet."],
          ["Task 6", "Cloze + written mediation", "Summarise practical museum information for a visitor."]
        ].map(function (item, index) {
          return `<article class="assessment-card"><div class="eyebrow">${esc(item[0])} · UNIT ${index + 1}</div><h3>${esc(item[1])}</h3><p>${esc(item[2])}</p></article>`;
        }).join("")}
      </div>
      <div class="section-heading"><div><h2>Term examinations</h2><p>Both exams assess communicative performance across skills.</p></div></div>
      <div class="assessment-grid">
        <article class="assessment-card"><div class="weight">4 skills</div><h3>First-term examination</h3><p>Listening and reading comprehension, written production and oral production, including mediation. Calendar: 25 January–7 February 2027.</p></article>
        <article class="assessment-card"><div class="weight">4 skills</div><h3>Second-term examination</h3><p>Listening and reading comprehension, two written texts (including written mediation) and two oral activities, which may include monologue, interaction or mediation. Calendar: 24 May–6 June 2027.</p></article>
      </div>
      <div class="section-heading"><div><h2>Assessment routes in the programme</h2><p>These are programme summary criteria; consult the official course guide for your case.</p></div></div>
      <div class="assessment-grid">
        <article class="assessment-card"><div class="eyebrow">RECOMMENDED</div><h3>Assessment through tasks</h3><p><strong>Tasks: 60%</strong> (six tasks, 10% each) + <strong>exams: 40%</strong>. To average, each written exam exercise must reach at least 4 and the oral at least 5. The programme states a minimum of 5 in each part for APTE.</p></article>
        <article class="assessment-card"><div class="eyebrow">EXAM-ONLY OPTION</div><h3>Assessment through examinations</h3><p>Complete the two cuatrimestral exams. The programme summary specifies a minimum of 6 in each exam exercise for this route.</p></article>
      </div>
      <div class="callout-red" style="margin-top:15px"><strong>Important:</strong> APTE / NO APTE is the final grading scale, not a numerical final mark. Exam conditions, permitted exceptions and technical requirements are set by the centre; this app does not replace official guidance.</div>`;
  }

  function unitIllustrationMarkup(unit) {
    const photo = extendedUnit(unit.id).photo;
    return `<figure class="topic-illustration">
      <img src="${esc(photo.src)}" alt="${esc(photo.alt)}" loading="lazy">
      <figcaption><strong>UNIT ${unit.id} · ${esc(unit.title)}</strong> — ${esc(photo.credit)} <a href="${esc(photo.source)}" target="_blank" rel="noopener noreferrer">Source ↗</a> · <a href="${esc(photo.license)}" target="_blank" rel="noopener noreferrer">Licence ↗</a></figcaption>
    </figure>`;
  }

  function topicMarkup(topic, index, unit) {
    const explanation = extendedUnit(unit.id).explanations[index] || [];
    const rows = topic.rows.map(function (row) {
      return `<tr>${row.map(function (cell) { return `<td>${cell}</td>`; }).join("")}</tr>`;
    }).join("");
    const exampleIcons = ["✨", "💬", "📝", "🎯", "🔎", "🌟"];
    const examples = topic.examples.map(function (example, exampleIndex) {
      return `<div class="example-chip"><span class="example-icon" aria-hidden="true">${exampleIcons[exampleIndex % exampleIcons.length]}</span><span>${example}</span></div>`;
    }).join("");
    const errors = topic.errors.map(function (error) {
      return `<div class="error-row">
        <div class="error-box wrong"><b>⚠️ Common error</b>${esc(error[0])}</div>
        <div class="error-box right"><b>✅ Better English</b>${esc(error[1])}</div>
        <p class="why">${esc(error[2])}</p>
      </div>`;
    }).join("");
    return `<article class="topic-card" id="topic-${index}" tabindex="-1">
      <div class="topic-title"><span class="topic-icon" aria-hidden="true">${esc(topic.icon)}</span><div><span class="topic-kicker">TOPIC ${String(index + 1).padStart(2, "0")} · GRAMMAR & LANGUAGE</span><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p></div></div>
      <div class="topic-visual" role="img" aria-label="Emoji illustration for ${esc(topic.title)}">
        <div class="topic-visual-emojis" aria-hidden="true">${topicIllustrations[unit.id][index].map(function (icon) { return `<span>${icon}</span>`; }).join("")}</div>
        <div class="topic-visual-caption"><span>🎨 VISUAL MEMORY CUE</span><strong>${esc(topic.title)}</strong></div>
        <span class="topic-visual-spark" aria-hidden="true">✦</span>
      </div>
      <div class="visual-rule"><span class="visual-rule-icon" aria-hidden="true">💡</span><span><b>THE QUICK RULE</b><br>${esc(topic.rule)}</span></div>
      <div class="grammar-flow" aria-label="Key language patterns">
        ${topic.rows.map(function (row, rowIndex) {
          return `<div class="grammar-flow-card"><span class="grammar-flow-step">${["🧩", "🔧", "💬", "⭐"][rowIndex % 4]}</span><div><strong>${row[0]}</strong><span>${row[1]}</span><p>${row[2]}</p></div></div>`;
        }).join("")}
      </div>
      <details class="theory-table-details"><summary>📊 Open the full comparison table</summary><div class="table-wrap"><table><thead><tr>${topic.cols.map(function (cell) { return `<th>${esc(cell)}</th>`; }).join("")}</tr></thead><tbody>${rows}</tbody></table></div></details>
      ${explanation.length ? `<div class="theory-explanation"><h4>🧠 Understand the idea</h4>${explanation.map(function (paragraph, paragraphIndex) { return `<div class="explanation-point"><span aria-hidden="true">${paragraphIndex ? "🔎" : "📘"}</span><p>${esc(paragraph)}</p></div>`; }).join("")}</div>` : ""}
      <div class="eyebrow theory-label">✨ EXAMPLES IN CONTEXT</div><div class="example-row">${examples}</div>
      <div class="errors"><div class="eyebrow">🚦 WATCH OUT · COMMON ERRORS</div>${errors}</div>
    </article>`;
  }

  function renderTheory(unit) {
    return `<section class="panel">
      <div class="theory-hero"><span class="theory-hero-icon" aria-hidden="true">📘</span><div><div class="eyebrow">YOUR VISUAL GRAMMAR MAP</div><h2>Understand it · see it · use it</h2><p>Each topic shows you the key rule, the language pattern, clear examples and the mistakes to avoid.</p></div></div>
      <div class="theory-key"><span>💡 Quick rule</span><span>🧩 Language pattern</span><span>✨ Real examples</span><span>🚦 Common errors</span></div>
      ${unitIllustrationMarkup(unit)}
      ${unit.topics.map(function (topic, index) { return topicMarkup(topic, index, unit); }).join("")}
    </section>`;
  }

  function renderVocabulary(unit) {
    const extra = extendedUnit(unit.id);
    const words = unit.vocabulary.concat(extra.extraVocabulary);
    return `<section class="panel">
      <div class="section-title-row"><div><div class="eyebrow">12 VISUAL FLASHCARDS</div><h2>Vocabulary in context</h2></div><span class="pill">Tap a card to reveal it</span></div>
      <p class="panel-intro">Think of the meaning first. Turn each card over to check its English definition, Spanish translation and a natural example sentence.</p>
      <div class="flashcard-grid">${words.map(function (item, index) {
        const revealed = Array.isArray(state.flashcards[unit.id]) && state.flashcards[unit.id].includes(index);
        const icons = ["✦", "◉", "↗", "▤", "♫", "✎", "◎", "⌁", "◇", "▣", "↔", "✧"];
        const translation = extra.vocabularyTranslations[index];
        return `<button class="flashcard${revealed ? " flipped" : ""}" type="button" aria-pressed="${revealed}" data-flashcard="${index}">
          <span class="flashcard-inner">
            <span class="flashcard-face flashcard-front"><span class="flashcard-icon" aria-hidden="true">${icons[index % icons.length]}</span><span class="flashcard-term">${esc(item[0])}</span><span class="flashcard-hint">Think of the meaning · tap to flip</span></span>
            <span class="flashcard-face flashcard-back"><span class="flashcard-definition"><b>Meaning:</b> ${esc(item[1])}</span><span class="flashcard-translation"><b>Spanish:</b> ${esc(translation)}</span><span class="flashcard-example"><b>Example:</b> ${esc(item[2])}</span><span class="flashcard-hint">Tap to turn back</span></span>
          </span>
        </button>`;
      }).join("")}</div>
    </section>
    <section class="panel">
      <h2>Make the words stick</h2>
      <p class="panel-intro">Choose three cards and make a true sentence of your own. Say each sentence aloud, then check whether the word is used with the same verb, preposition or grammar pattern as the example.</p>
      <div class="notice"><strong>Memory tip:</strong> review the cards again tomorrow and use new words in your unit's conversation prompts.</div>
    </section>`;
  }

  function renderSkills(unit) {
    const output = unit.output;
    return `<section class="panel">
      <div class="section-visual" aria-hidden="true"><span>✦</span><span>PLAN</span><i></i><span>WRITE</span><i></i><span>REVIEW</span></div>
      <div class="task-callout">
        <div class="task-label">${esc(output.label)}</div>
        <h3>${esc(output.title)}</h3>
        <p>${esc(output.prompt)}</p>
      </div>
      <h2 style="margin-top:22px">A clear structure</h2>
      <ol class="strategy-list">${output.structure.map(function (item, index) {
        return `<li><b>${String(index + 1).padStart(2, "0")}</b><span>${esc(item)}</span></li>`;
      }).join("")}</ol>
      <h3 style="margin-top:22px">Useful language</h3>
      <div class="phrase-list">${output.phrases.map(function (phrase) { return `<span class="phrase">${esc(phrase)}</span>`; }).join("")}</div>
      <h3 style="margin-top:24px">Skill strategies</h3>
      <ul class="strategy-list">${output.tips.map(function (tip, index) {
        return `<li><b>${String(index + 1).padStart(2, "0")}</b><span>${esc(tip)}</span></li>`;
      }).join("")}</ul>
    </section>`;
  }

  function renderMediation(unit) {
    const data = extendedUnit(unit.id).mediation;
    return `<section class="panel mediation-panel">
      <div class="section-visual mediation-visual" aria-hidden="true"><span>1 · SELECT</span><i></i><span>2 · REPHRASE</span><i></i><span>3 · ADAPT</span></div>
      <div class="eyebrow">MEDIATION · UNIT ${unit.id}</div>
      <h2>${esc(data.title)}</h2>
      <p class="panel-intro">${esc(data.intro)}</p>
      <div class="mediation-scenario">
        <div class="mediation-scenario-icon" aria-hidden="true">${esc(data.icon)}</div>
        <div><span class="eyebrow">PRACTICE SCENARIO · FICTIONAL SOURCE</span><h3>${esc(data.scenario)}</h3><p>${esc(data.source)}</p></div>
      </div>
      <div class="mediation-flow" aria-label="Mediation process">
        ${data.steps.map(function (step, index) {
          return `<article class="mediation-step"><span class="mediation-step-number">${index + 1}</span><div><h3>${esc(step[0])}</h3><p>${esc(step[1])}</p></div></article>`;
        }).join("")}
      </div>
      <div class="mediation-audience"><span aria-hidden="true">◎</span><div><strong>Your audience</strong><p>${esc(data.audience)}</p></div></div>
      <h3 class="mediation-subheading">The information at a glance</h3>
      <div class="mediation-facts">
        ${data.facts.map(function (fact) {
          return `<article class="mediation-fact"><span class="mediation-fact-icon" aria-hidden="true">${esc(fact[0])}</span><strong>${esc(fact[1])}</strong><p>${esc(fact[2])}</p></article>`;
        }).join("")}
      </div>
      <div class="mediation-language"><h3>Useful phrases</h3><div class="phrase-list">${data.phrases.map(function (phrase) { return `<span class="phrase">${esc(phrase)}</span>`; }).join("")}</div></div>
      <div class="mediation-task"><div class="eyebrow">YOUR MEDIATION TASK</div><p>${esc(data.task)}</p></div>
      <section class="oral-mediation" aria-labelledby="oral-mediation-title">
        <div class="eyebrow">🗣️ ORAL MEDIATION · SPEAKING CHALLENGE</div>
        <h3 id="oral-mediation-title">Explain the infographic to your listener</h3>
        <p>${esc(data.oralTask)}</p>
        <ol class="oral-preparation"><li>Take 30 seconds to choose the three most useful facts.</li><li>Speak for 60–90 seconds, adapting the information to your listener.</li><li>Use your own words, keep every detail accurate and check whether your listener has a question.</li></ol>
        <div class="oral-timer-controls"><button class="button outline small" type="button" data-start-oral>▶ Start 90-second timer</button><button class="button outline small" type="button" data-reset-oral>↺ Reset</button><strong class="oral-timer" data-oral-timer role="timer" aria-live="off">1:30</strong></div>
        <p class="oral-timer-status" data-oral-status role="status" aria-live="polite">Use the infographic above as your source.</p>
        <div class="oral-language"><strong>Useful speaking frames:</strong><div class="phrase-list">${data.phrases.map(function (phrase) { return `<span class="phrase">${esc(phrase)}</span>`; }).join("")}</div></div>
        <div class="mediation-check oral-check"><strong>Speaking checklist:</strong> <span>✓ I selected relevant facts.</span><span>✓ I paraphrased clearly.</span><span>✓ I adapted my explanation to the listener.</span></div>
      </section>
      <details class="mediation-model"><summary>Open a model answer</summary><p>${esc(data.model)}</p></details>
      <div class="mediation-check"><strong>Before you share:</strong> ${data.checks.map(function (check) { return `<span>✓ ${esc(check)}</span>`; }).join("")}</div>
    </section>`;
  }

  function printQuestion(question, questionNumber) {
    return `<article class="print-question">
      <h4><span class="print-question-number">${questionNumber}.</span>${esc(question.q)}</h4>
      <div class="print-options">${question.options.map(function (option, index) {
        return `<span>○ <b>${String.fromCharCode(65 + index)}.</b> ${esc(option)}</span>`;
      }).join("")}</div>
      <div class="print-answer-line"></div>
    </article>`;
  }

  function renderPrintableBooklet(unit) {
    const extra = extendedUnit(unit.id);
    const mediation = extra.mediation;
    const reading = extra.reading;
    const words = unit.vocabulary.concat(extra.extraVocabulary);
    const groups = practiceByTopic[unit.id];
    const topicSheets = unit.topics.map(function (topic, topicIndex) {
      const questionIndexes = groups[topicIndex];
      return `<section class="print-topic">
        ${topicMarkup(topic, topicIndex, unit)}
        <div class="print-exercise-block"><h3>✍️ Practice these points</h3>
          ${questionIndexes.map(function (questionIndex) { return printQuestion(extra.quiz[questionIndex], questionIndex + 1); }).join("")}
        </div>
      </section>`;
    }).join("");
    const quizKey = groups.map(function (questionIndexes, topicIndex) {
      return `<p><strong>Topic ${topicIndex + 1}:</strong> ${questionIndexes.map(function (questionIndex) {
        return `${questionIndex + 1} ${String.fromCharCode(65 + extra.quiz[questionIndex].answer)}`;
      }).join(" · ")}</p>`;
    }).join("");
    const readingKey = reading.questions.map(function (question, index) {
      return `${index + 1} ${String.fromCharCode(65 + question[2])}`;
    }).join(" · ");

    return `<section class="print-booklet">
      <div class="print-toolbar"><p>Print this complete unit as a topic-by-topic study pack, or choose “Save as PDF” in the print dialog.</p><button class="button" type="button" data-print-booklet>🖨 Print / save as PDF</button></div>
      <header class="print-cover">
        <div class="eyebrow">CEEDCV · ENGLISH B2.1 · 2026–2027</div>
        <h1>Unit ${unit.id}: ${esc(unit.title)}</h1>
        <p>${esc(unit.focus)}</p>
        <div class="print-cover-meta"><span>📅 ${esc(unit.weeks)}</span><span>🎯 ${esc(unit.output.label)}</span><span>✍️ Theory + exercises</span></div>
        <p class="print-name-line">Name: ___________________________________________ Date: __________________</p>
        <p class="print-credit">Materials created by Ana H. Iranzo with AI assistance</p>
      </header>
      <div class="print-contents"><strong>In this study pack:</strong> ${unit.topics.map(function (topic, index) { return `${index + 1}. ${esc(topic.title)}`; }).join(" · ")} · vocabulary · reading · speaking · exam task · mediation.</div>
      ${unitIllustrationMarkup(unit)}
      ${topicSheets}
      <section class="print-extra print-vocabulary">
        <h2>🧠 Vocabulary review</h2>
        <p>Read the meaning and example. Cover the first column and try to remember the expression.</p>
        <table class="print-vocab-table"><thead><tr><th>Word / phrase</th><th>Spanish</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
          ${words.map(function (word, index) { return `<tr><td><strong>${esc(word[0])}</strong></td><td>${esc(extra.vocabularyTranslations[index])}</td><td>${esc(word[1])}</td><td>${esc(word[2])}</td></tr>`; }).join("")}
        </tbody></table>
      </section>
      <section class="print-extra print-reading">
        <h2>📖 Reading · ${esc(reading.title)}</h2>
        <figure class="print-reading-image"><img src="${esc(extra.photo.src)}" alt="${esc(extra.photo.alt)}"><figcaption>${esc(extra.photo.credit)}</figcaption></figure>
        <p class="print-reading-text">${esc(reading.text)}</p>
        <h3>Check your understanding</h3>
        ${reading.questions.map(function (question, index) {
          return `<article class="print-question"><h4><span class="print-question-number">${index + 1}.</span>${esc(question[0])}</h4><div class="print-options">${question[1].map(function (option, optionIndex) {
            return `<span>○ <b>${String.fromCharCode(65 + optionIndex)}.</b> ${esc(option)}</span>`;
          }).join("")}</div><div class="print-answer-line"></div></article>`;
        }).join("")}
      </section>
      <section class="print-extra print-speaking">
        <h2>🗣️ Speaking prompts</h2>
        <p>Speak for 45–90 seconds. Give reasons and examples; use the unit grammar.</p>
        <ol>${extra.conversation.map(function (card) { return `<li><strong>${esc(card[0])}</strong><br><span>${esc(card[1])}</span><div class="print-writing-lines"></div></li>`; }).join("")}</ol>
        <h3>🖼️ Describe the unit photo</h3>
        <figure class="print-reading-image"><img src="${esc(extra.photo.src)}" alt="${esc(extra.photo.alt)}"><figcaption>${esc(extra.photo.credit)} · ${esc(extra.photo.source)} · ${esc(extra.photo.license)}</figcaption></figure>
        <p><strong>Your task:</strong> ${esc(extra.photo.prompt)}</p>
        <p><strong>Useful language:</strong> In this picture, I can see… · In the foreground/background… · It seems/might… · What stands out is…</p>
        <p><strong>Image vocabulary:</strong> ${extra.photo.words.map(function (word) { return `${esc(word[0])} — ${esc(word[1])}`; }).join(" · ")}</p>
        <div class="print-writing-lines print-writing-lines-tall"></div>
      </section>
      <section class="print-extra print-exam">
        <h2>🎯 Exam task · ${esc(unit.output.title)}</h2>
        <p>${esc(unit.output.prompt)}</p>
        <h3>Plan your answer</h3>
        <ol>${unit.output.structure.map(function (step) { return `<li>${esc(step)}</li>`; }).join("")}</ol>
        <p><strong>Useful language:</strong> ${unit.output.phrases.map(esc).join(" · ")}</p>
        <div class="print-writing-lines print-writing-lines-tall"></div>
      </section>
      <section class="print-extra print-mediation">
        <h2>🌍 Mediation · ${esc(mediation.title)}</h2>
        <p><strong>Scenario:</strong> ${esc(mediation.scenario)}</p>
        <p><strong>Source information:</strong> ${esc(mediation.source)}</p>
        <p><strong>Your reader:</strong> ${esc(mediation.audience)}</p>
        <h3>Use the three-step process</h3>
        <ol>${mediation.steps.map(function (step) { return `<li><strong>${esc(step[0])}:</strong> ${esc(step[1])}</li>`; }).join("")}</ol>
        <p><strong>Your task:</strong> ${esc(mediation.task)}</p>
        <div class="print-writing-lines print-writing-lines-tall"></div>
        <h3>🗣️ Oral mediation · speak for 60–90 seconds</h3>
        <p><strong>Your listener:</strong> ${esc(mediation.audience)}</p>
        <p><strong>Your spoken task:</strong> ${esc(mediation.oralTask)}</p>
        <ol><li>Take 30 seconds to choose three useful facts from the infographic.</li><li>Explain them in your own words and adapt them to your listener.</li><li>Keep the details accurate and invite a question.</li></ol>
        <p><strong>Useful speaking frames:</strong> ${mediation.phrases.map(esc).join(" · ")}</p>
        <div class="print-writing-lines"></div>
      </section>
      <section class="print-extra print-answer-key">
        <h2>✅ Answer key · check after completing the exercises</h2>
        ${quizKey}
        <p><strong>Reading:</strong> ${readingKey}</p>
        <h3>Mediation model answer</h3>
        <p>${esc(mediation.model)}</p>
      </section>
    </section>`;
  }

  function renderSectionGuide(tab) {
    const steps = sectionGuides[tab];
    return `<div class="section-guide" aria-label="${esc(tabs.find(function (item) { return item[0] === tab; })[1])} learning steps">
      ${steps.map(function (step, index) {
        return `${index ? '<span class="section-guide-arrow" aria-hidden="true">→</span>' : ""}<span class="section-guide-step"><b>${step[0]}</b>${esc(step[1])}</span>`;
      }).join("")}
    </div>`;
  }

  function renderPractice(unit) {
    const questions = extendedUnit(unit.id).quiz;
    const saved = state.drills[unit.id] || { index: 0, correct: 0, streak: 0, selected: null };
    const index = Math.max(0, Math.min(Number(saved.index) || 0, questions.length));
    const finished = index >= questions.length;
    const question = questions[index];
    if (finished) {
      return `<section class="panel quiz-result">
        <div class="result-icon">${saved.correct >= 15 ? "🏆" : "🌱"}</div>
        <div class="eyebrow">UNIT ${unit.id} · PRACTICE COMPLETE</div>
        <h2>You scored ${saved.correct} / 20</h2>
        <p>${saved.correct >= 15 ? "Great work. Your answers show strong control of this unit's language." : "Good effort. Review the explanations and vocabulary cards, then try another round."}</p>
        <div class="result-score"><strong>${Math.round(saved.correct / 20 * 100)}%</strong><span>${saved.correct} correct answers · 20 questions</span></div>
        <button class="button" type="button" data-restart-drill="${unit.id}">↻ Try the 20 questions again</button>
      </section>`;
    }
    const answered = Number.isInteger(saved.selected);
    const correct = answered && saved.selected === question.answer;
    return `<section class="panel">
      <div class="quiz-topline"><span>UNIT ${unit.id} · DUOLINGO-STYLE PRACTICE</span><span>⭐ ${saved.correct * 10} XP</span></div>
      <h2>20-question challenge</h2>
      <p class="panel-intro">One question at a time. Choose an answer, read the explanation, and continue. Your score and progress are saved on this device.</p>
      <div class="quiz-progress-label"><span>Question ${index + 1} of 20</span><span>🔥 ${saved.streak} streak</span></div>
      <div class="quiz-progress"><span style="width:${Math.round(index / 20 * 100)}%"></span></div>
      <article class="quiz-question quiz-active" data-question="${index}">
        <h3>${esc(question.q)}</h3>
        <div class="quiz-options">${question.options.map(function (option, optionIndex) {
          const optionClass = answered && optionIndex === question.answer ? " correct" : answered && saved.selected === optionIndex ? " incorrect" : "";
          return `<button class="quiz-option${optionClass}" data-answer="${optionIndex}" data-question="${index}" ${answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>${esc(option)}</button>`;
        }).join("")}</div>
        ${answered ? `<div class="answer-explanation ${correct ? "good" : "bad"}" role="status"><strong>${correct ? "Correct!" : "Not quite."}</strong> ${esc(question.why)}</div>
          <button class="button quiz-next" type="button" data-next-question="${unit.id}">${index === 19 ? "See my score" : "Continue"} →</button>` : ""}
      </article>
    </section>`;
  }

  function renderGlossedText(text, glossary) {
    const entries = glossary.slice().sort(function (left, right) { return right[0].length - left[0].length; });
    const pattern = new RegExp("\\b(?:" + entries.map(function (entry) {
      return entry[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|") + ")\\b", "gi");
    const translations = {};
    entries.forEach(function (entry) { translations[entry[0].toLowerCase()] = entry; });
    let cursor = 0;
    let html = "";
    String(text).replace(pattern, function (match, offset) {
      html += esc(text.slice(cursor, offset));
      const entry = translations[match.toLowerCase()];
      const isGrammar = entry[2] === "grammar";
      const translation = (isGrammar ? "Grammar · " : "Vocabulary · ") + entry[1];
      html += `<span class="reading-gloss${isGrammar ? " grammar-gloss" : ""}" tabindex="0" title="${esc(translation)}" data-tooltip="${esc(translation)}" aria-label="${esc(match + ". " + translation)}">${esc(match)}</span>`;
      cursor = offset + match.length;
      return match;
    });
    return html + esc(text.slice(cursor));
  }

  function renderReading(unit) {
    const extra = extendedUnit(unit.id);
    const reading = extra.reading;
    const photo = extra.photo;
    const answers = state.readingAnswers[unit.id] || {};
    const correctCount = reading.questions.reduce(function (total, question, index) {
      return total + (answers[index] === question[2] ? 1 : 0);
    }, 0);
    return `<section class="panel reading-panel">
      <div class="eyebrow">UNIT ${unit.id} · READING COMPREHENSION</div>
      <h2>${esc(reading.title)}</h2>
      <figure class="reading-illustration">
        <img src="${esc(photo.src)}" alt="${esc(photo.alt)}" loading="lazy">
        <figcaption>${esc(photo.credit)} <a href="${esc(photo.source)}" target="_blank" rel="noopener noreferrer">Source ↗</a> · <a href="${esc(photo.license)}" target="_blank" rel="noopener noreferrer">Licence ↗</a></figcaption>
      </figure>
      <div class="reading-glossary-key" aria-label="Reading text annotation key"><span><i class="vocab-key"></i> Vocabulary</span><span><i class="grammar-key"></i> Topic grammar</span><span>Hover over or focus underlined text for the Spanish translation.</span></div>
      <p class="reading-text">${renderGlossedText(reading.text, reading.glossary)}</p>
      <div class="reading-score"><strong>${correctCount} / 6</strong><span>correct answers</span><button class="button outline small" type="button" data-reset-reading="${unit.id}">Reset answers</button></div>
      <h3>Check your understanding</h3>
      ${reading.questions.map(function (item, index) {
        const answered = Object.prototype.hasOwnProperty.call(answers, index);
        const correct = answered && answers[index] === item[2];
        return `<article class="reading-question" data-reading-question="${index}">
          <h4><span class="reading-number">${index + 1}</span>${esc(item[0])}</h4>
          <div class="quiz-options">${item[1].map(function (option, choice) {
            const cls = answered && choice === item[2] ? " correct" : answered && choice === answers[index] ? " incorrect" : "";
            return `<button class="quiz-option${cls}" data-reading-answer="${choice}" data-reading-index="${index}" ${answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + choice)}</span>${esc(option)}</button>`;
          }).join("")}</div>
          ${answered ? `<p class="quiz-feedback ${correct ? "good" : "bad"}" role="status">${correct ? "Correct — well done." : "Not quite. Compare your choice with the text and try again."}</p>${!correct ? `<button class="button outline small" data-reading-retry="${index}" type="button">Try again</button>` : ""}` : ""}
        </article>`;
      }).join("")}
    </section>`;
  }

  function renderSpeaking(unit) {
    const extra = extendedUnit(unit.id);
    const cardIndex = Math.max(0, Math.min(Number(state.speakingCards[unit.id]) || 0, extra.conversation.length - 1));
    const card = extra.conversation[cardIndex];
    const flipped = !!state.speakingFlips[unit.id];
    const photo = extra.photo;
    return `<section class="panel">
      <div class="eyebrow">UNIT ${unit.id} · SPEAKING FLASHCARDS</div>
      <h2>Speak about the topic</h2>
      <p class="panel-intro">Choose a prompt, think for a moment, then speak for 45–90 seconds. Tap the card for a language prompt. You can practise alone by recording yourself.</p>
      <div class="conversation-controls"><button class="button outline small" type="button" data-conversation-move="-1" data-unit-id="${unit.id}">← Previous</button><span>Card ${cardIndex + 1} of ${extra.conversation.length}</span><button class="button outline small" type="button" data-conversation-move="1" data-unit-id="${unit.id}">Next →</button></div>
      <button class="conversation-card${flipped ? " flipped" : ""}" type="button" data-conversation-flip="${unit.id}" aria-pressed="${flipped}">
        <span class="conversation-inner">
          <span class="conversation-face conversation-front"><span class="flashcard-hint">SPEAKING PROMPT · TAP TO FLIP</span><strong>${esc(card[0])}</strong><span class="conversation-timer">◷ 45–90 seconds</span></span>
          <span class="conversation-face conversation-back"><span class="flashcard-hint">LANGUAGE SUPPORT</span><strong>${esc(card[1])}</strong><span class="conversation-timer">Use your own ideas and examples.</span></span>
        </span>
      </button>
      <div class="speaking-self-check"><strong>Before you finish:</strong> Did you answer every part? Did you give a reason or example? Did you use this unit's target grammar?</div>
    </section>
    <section class="panel photo-panel">
      <div class="eyebrow">VISUAL SPEAKING · DESCRIBE THE PHOTO</div>
      <h2>${esc(unit.title)}: look, notice, describe</h2>
      <p class="panel-intro">Study the picture and describe only what you can see before adding careful ideas about what might be happening.</p>
      <figure class="lesson-photo">
        <img src="${esc(photo.src)}" alt="${esc(photo.alt)}" loading="lazy">
        <figcaption>${esc(photo.credit)} <a href="${esc(photo.source)}" target="_blank" rel="noopener noreferrer">Source ↗</a> · <a href="${esc(photo.license)}" target="_blank" rel="noopener noreferrer">Licence ↗</a></figcaption>
      </figure>
      <div class="photo-prompt"><strong>Your task</strong><p>${esc(photo.prompt)}</p></div>
      <details class="description-help">
        <summary>Open the photo-description guide</summary>
        <ol><li><strong>Overview:</strong> In this picture, I can see…</li><li><strong>Place:</strong> It seems to be… / The scene is set…</li><li><strong>Position:</strong> In the foreground… / In the background… / On the left…</li><li><strong>Action:</strong> The person is …-ing; the people seem to be…</li><li><strong>Inference:</strong> They might be… / It looks as if…</li><li><strong>Opinion:</strong> What stands out is… / The atmosphere seems…</li></ol>
        <p>Use <em>There is/are</em> for what exists, present continuous for visible actions, and <em>might/could</em> when you are making a guess rather than stating a fact.</p>
      </details>
      <details class="description-help photo-vocabulary">
        <summary>Open image vocabulary (${photo.words.length} words)</summary>
        <div class="photo-words">${photo.words.map(function (item) { return `<div><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span></div>`; }).join("")}</div>
      </details>
    </section>`;
  }

  function renderUnit(unit, tab) {
    main.classList.toggle("print-booklet-mode", tab === "booklet");
    const currentTab = tabs.find(function (item) { return item[0] === tab; }) || tabs[0];
    const done = state.completed.includes(unit.id);
    let content = renderTheory(unit);
    if (tab === "vocabulary") content = renderVocabulary(unit);
    if (tab === "skills") content = renderSkills(unit);
    if (tab === "practice") content = renderPractice(unit);
    if (tab === "reading") content = renderReading(unit);
    if (tab === "speaking") content = renderSpeaking(unit);
    if (tab === "mediation") content = renderMediation(unit);
    if (tab === "booklet") content = renderPrintableBooklet(unit);

    main.innerHTML = `
      <div class="eyebrow">UNIT ${unit.id} · ${esc(unit.weeks)} · CEED B2.1</div>
      <section class="unit-head">
        <h1>${esc(unit.title)}</h1>
        <p>${esc(unit.focus)}</p>
        <div class="unit-meta"><span class="pill">📅 ${esc(unit.weeks)}</span><span class="pill">📚 ${unit.topics.length} visual theory points</span><span class="pill">🎯 ${esc(unit.output.label)}</span></div>
      </section>
      <p class="lead" style="margin-top:15px">${esc(unit.intro)}</p>
      <div class="tabs" role="tablist" aria-label="Unit sections">
        ${tabs.map(function (item) {
          const active = currentTab[0] === item[0];
          return `<a class="tab${active ? " active" : ""}" role="tab" aria-selected="${active}" href="#unit/${unit.id}/${item[0]}">${esc(item[1])}</a>`;
        }).join("")}
      </div>
      ${renderSectionGuide(currentTab[0])}
      ${completionNotice()}
      <div class="content-grid">
        <div>${content}</div>
        <aside class="side-panel">
          <section class="panel">
            <h3>By the end of this unit</h3>
            <div class="check-list">${unit.outcomes.map(function (outcome) {
              return `<div class="check-item"><span>✓</span><span>${esc(outcome)}</span></div>`;
            }).join("")}</div>
            <div class="progress-track" aria-label="${done ? "Unit complete" : "Unit not marked complete"}"><span style="width:${done ? 100 : 0}%"></span></div>
            <button class="button mark-complete${done ? " done" : ""}" data-complete="${unit.id}">${done ? "✓ Unit completed" : "Mark unit complete"}</button>
          </section>
          <section class="panel">
            <h3>Study tip</h3>
            <p>Work through the visual theory first, then practise the unit's output. Aim to reuse the target grammar and vocabulary in your own examples.</p>
          </section>
        </aside>
      </div>`;
  }

  function answerQuestion(unitId, questionIndex, answerIndex) {
    const unit = unitById(unitId);
    if (!unit) return;
    const extra = extendedUnit(unit.id);
    const drill = state.drills[unit.id] || { index: 0, correct: 0, streak: 0, selected: null };
    const question = extra.quiz[questionIndex];
    if (!question || drill.index !== questionIndex || Number.isInteger(drill.selected)) return;
    drill.selected = answerIndex;
    if (answerIndex === question.answer) {
      drill.correct += 1;
      drill.streak += 1;
    } else {
      drill.streak = 0;
    }
    state.drills[unit.id] = drill;
    save();
    renderUnit(unit, "practice");
    const questionElement = main.querySelector(`[data-question="${questionIndex}"]`);
    if (questionElement) questionElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  document.addEventListener("click", function (event) {
    const target = event.target.closest("[data-view], [data-unit], [data-answer], [data-complete], [data-retry], [data-next-question], [data-restart-drill], [data-reading-answer], [data-reading-retry], [data-reset-reading], [data-flashcard], [data-conversation-move], [data-conversation-flip], [data-print-booklet], [data-start-oral], [data-reset-oral], #menu-button");
    if (!target) return;

    if (target.id === "menu-button") {
      sidebar.classList.toggle("open");
      return;
    }
    if (target.hasAttribute("data-print-booklet")) {
      window.print();
      return;
    }
    if (target.hasAttribute("data-start-oral")) {
      startOralTimer();
      return;
    }
    if (target.hasAttribute("data-reset-oral")) {
      resetOralTimer();
      return;
    }
    if (target.dataset.view) {
      location.hash = target.dataset.view === "home" ? "#home" : "#" + target.dataset.view;
      return;
    }
    if (target.hasAttribute("data-unit")) {
      location.hash = "#unit/" + target.dataset.unit + "/theory";
      return;
    }
    if (target.hasAttribute("data-answer")) {
      const route = location.hash.split("/");
      answerQuestion(route[1], Number(target.dataset.question), Number(target.dataset.answer));
      return;
    }
    if (target.hasAttribute("data-next-question")) {
      const id = Number(target.dataset.nextQuestion);
      const drill = state.drills[id];
      if (!drill || !Number.isInteger(drill.selected)) return;
      state.drills[id] = { index: drill.index + 1, correct: drill.correct, streak: drill.streak, selected: null };
      save();
      renderUnit(unitById(id), "practice");
      return;
    }
    if (target.hasAttribute("data-restart-drill")) {
      const id = Number(target.dataset.restartDrill);
      state.drills[id] = { index: 0, correct: 0, streak: 0, selected: null };
      save();
      renderUnit(unitById(id), "practice");
      return;
    }
    if (target.hasAttribute("data-reading-answer")) {
      const route = location.hash.split("/");
      const id = Number(route[1]);
      const questionIndex = Number(target.dataset.readingIndex);
      if (!unitById(id) || !Number.isInteger(questionIndex)) return;
      if (!state.readingAnswers[id]) state.readingAnswers[id] = {};
      if (Object.prototype.hasOwnProperty.call(state.readingAnswers[id], questionIndex)) return;
      state.readingAnswers[id][questionIndex] = Number(target.dataset.readingAnswer);
      save();
      renderUnit(unitById(id), "reading");
      return;
    }
    if (target.hasAttribute("data-reading-retry")) {
      const route = location.hash.split("/");
      const id = Number(route[1]);
      if (state.readingAnswers[id]) delete state.readingAnswers[id][target.dataset.readingRetry];
      save();
      renderUnit(unitById(id), "reading");
      return;
    }
    if (target.hasAttribute("data-reset-reading")) {
      const id = Number(target.dataset.resetReading);
      delete state.readingAnswers[id];
      save();
      renderUnit(unitById(id), "reading");
      return;
    }
    if (target.hasAttribute("data-flashcard")) {
      const route = location.hash.split("/");
      const id = Number(route[1]);
      const index = Number(target.dataset.flashcard);
      if (!unitById(id) || !Number.isInteger(index)) return;
      if (!Array.isArray(state.flashcards[id])) state.flashcards[id] = [];
      const cards = state.flashcards[id];
      state.flashcards[id] = cards.includes(index) ? cards.filter(function (card) { return card !== index; }) : cards.concat(index);
      target.classList.toggle("flipped", state.flashcards[id].includes(index));
      target.setAttribute("aria-pressed", String(state.flashcards[id].includes(index)));
      save();
      return;
    }
    if (target.hasAttribute("data-conversation-flip")) {
      const id = Number(target.dataset.conversationFlip);
      state.speakingFlips[id] = !state.speakingFlips[id];
      target.classList.toggle("flipped", state.speakingFlips[id]);
      target.setAttribute("aria-pressed", String(state.speakingFlips[id]));
      save();
      return;
    }
    if (target.hasAttribute("data-conversation-move")) {
      const id = Number(target.dataset.unitId);
      const unit = unitById(id);
      if (!unit) return;
      const prompts = extendedUnit(id).conversation;
      const current = Number(state.speakingCards[id]) || 0;
      state.speakingCards[id] = (current + Number(target.dataset.conversationMove) + prompts.length) % prompts.length;
      state.speakingFlips[id] = false;
      save();
      renderUnit(unit, "speaking");
      return;
    }
    if (target.hasAttribute("data-retry")) {
      const route = location.hash.split("/");
      const unit = unitById(route[1]);
      if (!unit) return;
      if (state.answers[unit.id]) delete state.answers[unit.id][target.dataset.retry];
      save();
      renderUnit(unit, "practice");
      return;
    }
    if (target.hasAttribute("data-complete")) {
      const id = Number(target.dataset.complete);
      if (state.completed.includes(id)) {
        state.completed = state.completed.filter(function (unitId) { return unitId !== id; });
      } else {
        state.completed.push(id);
      }
      save();
      route();
    }
  });

  document.querySelectorAll(".nav-link[data-view]").forEach(function (button) {
    button.addEventListener("click", function () { sidebar.classList.remove("open"); });
  });
  window.addEventListener("hashchange", route);
  updateHeaderProgress();
  route();
}());
