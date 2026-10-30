/* CEED English Path · B2.1 */
(function () {
  "use strict";

  const course = window.CEED_COURSE;
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const nav = document.getElementById("unit-nav");
  const STORE_KEY = "ceed-b21-progress-v1";
  const tabs = [
    ["theory", "Theory"],
    ["vocabulary", "Vocabulary"],
    ["skills", "Skills & tasks"],
    ["practice", "Quick practice"]
  ];

  let state = { completed: [], answers: {} };
  let storageWarning = "";
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    if (saved && typeof saved === "object") {
      state.completed = Array.isArray(saved.completed) ? saved.completed.filter(Number.isInteger) : [];
      state.answers = saved.answers && typeof saved.answers === "object" ? saved.answers : {};
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

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function unitById(id) {
    return course.units.find(function (unit) { return unit.id === Number(id); });
  }

  function doneCount() {
    return state.completed.length;
  }

  function progressPercent() {
    return Math.round(doneCount() / course.units.length * 100);
  }

  function updateHeaderProgress() {
    document.getElementById("top-progress").textContent = progressPercent() + "% complete";
  }

  function renderNav(activeId, activeView) {
    nav.innerHTML = course.units.map(function (unit) {
      const active = Number(activeId) === unit.id;
      const done = state.completed.includes(unit.id);
      return `<button class="unit-link${active ? " active" : ""}" data-unit="${unit.id}" aria-current="${active ? "page" : "false"}">
        <span class="unit-number">${unit.id.toString().padStart(2, "0")}</span>
        <span>${esc(unit.title)}</span><span class="unit-check">${done ? "✓" : ""}</span>
      </button>`;
    }).join("");

    document.querySelectorAll(".nav-link[data-view]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.view === activeView);
    });
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const routeName = parts[0] || "home";
    sidebar.classList.remove("open");

    if (routeName === "unit" && unitById(parts[1])) {
      const unit = unitById(parts[1]);
      const tab = tabs.some(function (item) { return item[0] === parts[2]; }) ? parts[2] : "theory";
      renderNav(unit.id, "");
      renderUnit(unit, tab);
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
            <thead><tr><th>Week</th><th>Unit / activity</th><th>Focus</th></tr></thead>
            <tbody>${course.weeks.map(function (item) {
              const label = item.type ? `<span class="schedule-type">${esc(item.type)}</span>` : "";
              const title = item.unit
                ? `<a href="#unit/${item.unit}/theory" style="color:var(--teal);text-decoration:none">${esc(item.title)}</a>`
                : `${esc(item.title)} ${label}`;
              return `<tr><td>${esc(item.week)}</td><td>${title}</td><td>${esc(item.detail)}</td></tr>`;
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

  function topicMarkup(topic) {
    const rows = topic.rows.map(function (row) {
      return `<tr>${row.map(function (cell) { return `<td>${cell}</td>`; }).join("")}</tr>`;
    }).join("");
    const examples = topic.examples.map(function (example) {
      return `<div class="example-chip">${example}</div>`;
    }).join("");
    const errors = topic.errors.map(function (error) {
      return `<div class="error-row">
        <div class="error-box wrong"><b>Common error</b>${esc(error[0])}</div>
        <div class="error-box right"><b>Better English</b>${esc(error[1])}</div>
        <p class="why">${esc(error[2])}</p>
      </div>`;
    }).join("");
    return `<article class="topic-card">
      <div class="topic-title"><span class="topic-icon" aria-hidden="true">${esc(topic.icon)}</span><div><h3>${esc(topic.title)}</h3><p>${esc(topic.subtitle)}</p></div></div>
      <div class="visual-rule"><span aria-hidden="true">✦</span><span><b>Visual rule</b> · ${esc(topic.rule)}</span></div>
      <div class="table-wrap"><table><thead><tr>${topic.cols.map(function (cell) { return `<th>${esc(cell)}</th>`; }).join("")}</tr></thead><tbody>${rows}</tbody></table></div>
      <div class="eyebrow">EXAMPLES</div><div class="example-row">${examples}</div>
      <div class="errors"><div class="eyebrow">COMMON ERRORS</div>${errors}</div>
    </article>`;
  }

  function renderTheory(unit) {
    return `<section class="panel">
      <h2>Visual theory</h2>
      <p class="panel-intro">Read the rule, compare the patterns in the table, then notice the examples and common errors. All explanations are in English for B2.1 practice.</p>
      ${unit.topics.map(topicMarkup).join("")}
    </section>`;
  }

  function renderVocabulary(unit) {
    return `<section class="panel">
      <h2>Vocabulary in context</h2>
      <p class="panel-intro">Learn words as useful chunks. Read the meaning and example aloud, then make a new sentence connected to the unit topic.</p>
      <div class="vocab-grid">${unit.vocabulary.map(function (item) {
        return `<article class="vocab-item"><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span><em>${esc(item[2])}</em></article>`;
      }).join("")}</div>
    </section>
    <section class="panel">
      <h2>Make it yours</h2>
      <p class="panel-intro">Choose three new items and use them in a short spoken or written answer. Check that the collocation and preposition match the example.</p>
      <div class="notice"><strong>Independent practice:</strong> keep a vocabulary notebook with the word, a phrase it belongs to, one example of your own and (if useful) its pronunciation.</div>
    </section>`;
  }

  function renderSkills(unit) {
    const output = unit.output;
    return `<section class="panel">
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

  function renderPractice(unit) {
    const answers = state.answers[unit.id] || {};
    return `<section class="panel">
      <h2>Quick practice</h2>
      <p class="panel-intro">Choose the best answer. Read the feedback even when you are correct; it explains the rule. Your answers are saved in this browser.</p>
      ${unit.quiz.map(function (question, index) {
        const selected = Number.isInteger(answers[index]) ? answers[index] : null;
        const correct = selected === question.answer;
        const alreadyAnswered = selected !== null;
        const feedbackClass = !alreadyAnswered ? "" : correct ? "good" : "bad";
        const feedback = !alreadyAnswered ? "" : `${correct ? "Correct. " : "Not quite. "}${question.why}`;
        return `<article class="quiz-question" data-question="${index}">
          <h3><span class="unit-number" style="display:inline-grid;width:24px;height:24px;margin-right:6px;vertical-align:middle">${index + 1}</span>${esc(question.q)}</h3>
          <div class="quiz-options">${question.options.map(function (option, optionIndex) {
            const optionClass = alreadyAnswered && optionIndex === question.answer ? " correct" : alreadyAnswered && selected === optionIndex ? " incorrect" : "";
            return `<button class="quiz-option${optionClass}" data-answer="${optionIndex}" data-question="${index}" ${alreadyAnswered ? "disabled" : ""}>${esc(option)}</button>`;
          }).join("")}</div>
          <p class="quiz-feedback ${feedbackClass}" aria-live="polite">${esc(feedback)}</p>
          ${alreadyAnswered && !correct ? `<button class="button outline small retry-answer" data-retry="${index}">Try again</button>` : ""}
        </article>`;
      }).join("")}
    </section>`;
  }

  function renderUnit(unit, tab) {
    const currentTab = tabs.find(function (item) { return item[0] === tab; }) || tabs[0];
    const done = state.completed.includes(unit.id);
    let content = renderTheory(unit);
    if (tab === "vocabulary") content = renderVocabulary(unit);
    if (tab === "skills") content = renderSkills(unit);
    if (tab === "practice") content = renderPractice(unit);

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
    if (!state.answers[unit.id]) state.answers[unit.id] = {};
    if (Object.prototype.hasOwnProperty.call(state.answers[unit.id], questionIndex)) return;
    state.answers[unit.id][questionIndex] = answerIndex;
    save();
    renderUnit(unit, "practice");
    const question = main.querySelector(`[data-question="${questionIndex}"]`);
    if (question) question.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  document.addEventListener("click", function (event) {
    const target = event.target.closest("[data-view], [data-unit], [data-answer], [data-complete], [data-retry], #menu-button");
    if (!target) return;

    if (target.id === "menu-button") {
      sidebar.classList.toggle("open");
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
