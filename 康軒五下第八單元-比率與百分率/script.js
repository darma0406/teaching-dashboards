const focuses = [
  {
    title: "認識比率",
    goal: "理解部分數量占全部數量的幾分之幾就是比率，並能比較不同總量下的比率。",
    summary: "assets/deck-page-01.svg",
    caption: "部分量、全部量與比率",
    misconceptions: ["只看進球數或人數，沒有看總量。", "把全部量和部分量放反。", "以為兩個互補比率的和不一定是 1。"],
    prompts: ["分母代表哪一個全部？", "如果總量不同，怎麼公平比較？", "出席率和缺席率合起來是多少？"],
    quiz: [
      {
        q: "五年孝班 25 人，有 20 人到校，出席率是多少？",
        options: ["20/25", "5/25", "25/20"],
        answer: 0,
        feedback: "出席率是出席人數占全班人數的比率。"
      },
      {
        q: "投籃進球率要比較什麼？",
        options: ["進球數占投球數的比率", "誰投進最多球", "誰投球數最少"],
        answer: 0,
        feedback: "總量不同時，要比較比率才公平。"
      }
    ],
    visual: "ratio"
  },
  {
    title: "認識百分率",
    goal: "把百分率理解為分母 100 的比率，能說明 20% 是 100 份中的 20 份。",
    summary: "assets/deck-page-02.svg",
    caption: "百分率就是以 100 為基準的比率",
    misconceptions: ["把 20% 說成 20 倍。", "忘記 1% = 1/100 = 0.01。", "不知道各部分百分率合起來是 100%。"],
    prompts: ["把全部平分成 100 份，20% 是幾份？", "18/100 可以寫成幾 %？", "三區座位百分率合起來為什麼是 100%？"],
    quiz: [
      {
        q: "手機電量 20% 表示什麼？",
        options: ["剩下電量占滿電的 20/100", "手機只能用 20 分鐘", "用掉 20/100"],
        answer: 0,
        feedback: "百分率描述部分占全部的比例。"
      },
      {
        q: "18/100 用百分率表示是？",
        options: ["18%", "0.18%", "180%"],
        answer: 0,
        feedback: "分母是 100 時，分子就是百分率的數字。"
      }
    ],
    visual: "percent"
  },
  {
    title: "小數、分數與百分率互換",
    goal: "能在小數、分數與百分率之間轉換，並理解小數點移動的原因。",
    summary: "assets/deck-page-03.svg",
    caption: "百分率、分數、小數的互換",
    misconceptions: ["百分率化小數時小數點移錯方向。", "0.8% 誤寫成 0.8。", "分母不是 100 時不知道可先化為小數。"],
    prompts: ["32% 先寫成哪一個分數？", "0.286 為什麼是 28.6%？", "7/8 可以先化成小數嗎？"],
    quiz: [
      {
        q: "60% 化成小數是？",
        options: ["0.6", "6", "0.06"],
        answer: 0,
        feedback: "百分率化小數，小數點向左移兩位。"
      },
      {
        q: "0.035 化成百分率是？",
        options: ["3.5%", "35%", "0.35%"],
        answer: 0,
        feedback: "小數化百分率，小數點向右移兩位再加 %。"
      }
    ],
    visual: "convert"
  },
  {
    title: "百分率的應用",
    goal: "能用整體量和百分率求部分量，也能由部分量和整體量求百分率。",
    summary: "assets/deck-page-04.svg",
    caption: "求部分量與求百分率",
    misconceptions: ["分不清楚要求部分量還是百分率。", "百分率沒有先化為小數或分數就直接乘。", "忽略互補百分率可用 1 減去已知比率。"],
    prompts: ["題目給的是整體量、部分量，還是百分率？", "24 公斤的 75% 要怎麼列式？", "答對率和答錯率有什麼關係？"],
    quiz: [
      {
        q: "一份考卷 25 題，答對率 96%，答對幾題？",
        options: ["24 題", "23 題", "25 題"],
        answer: 0,
        feedback: "25 x 96% = 24。"
      },
      {
        q: "答對 32 題、答錯 8 題，答對率是多少？",
        options: ["80%", "32%", "20%"],
        answer: 0,
        feedback: "全部 40 題，32/40 = 80%。"
      }
    ],
    visual: "apply"
  },
  {
    title: "折扣、off、幾成與加成",
    goal: "理解打折是售價占定價的百分率，% off 是減去的百分率，幾成可轉成百分率處理。",
    summary: "assets/deck-page-05.svg",
    caption: "生活中的百分率語言",
    misconceptions: ["把 30% off 誤認為打三折。", "打七五折和 75% off 混淆。", "加二成只算 20%，忘記加回成本。"],
    prompts: ["打六折是付原價的幾 %？", "30% off 是付幾 %？", "加二成作為定價要先算什麼？"],
    quiz: [
      {
        q: "30% off 和打幾折相同？",
        options: ["七折", "三折", "三成"],
        answer: 0,
        feedback: "30% off 是少付 30%，所以付 70%。"
      },
      {
        q: "成本 2000 元，加二成作為定價，定價是多少？",
        options: ["2400 元", "2200 元", "400 元"],
        answer: 0,
        feedback: "2000 + 2000 x 20% = 2400。"
      }
    ],
    visual: "discount"
  }
];

let activeFocus = 0;
let activeQuiz = 0;

const focusButtons = document.querySelectorAll(".focus-btn");
const focusLabel = document.querySelector("#focusLabel");
const focusTitle = document.querySelector("#focusTitle");
const focusGoal = document.querySelector("#focusGoal");
const visualStage = document.querySelector("#visualStage");
const visualControls = document.querySelector("#visualControls");
const visualHint = document.querySelector("#visualHint");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const quizStatus = document.querySelector("#quizStatus");
const summaryImage = document.querySelector("#summaryImage");
const summaryCaption = document.querySelector("#summaryCaption");
const misconceptions = document.querySelector("#misconceptions");
const teacherPrompts = document.querySelector("#teacherPrompts");

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFocus(Number(button.dataset.focus));
  });
});

function setFocus(index) {
  activeFocus = index;
  activeQuiz = 0;
  const focus = focuses[index];
  focusButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
  focusLabel.textContent = `教學焦點 ${index + 1}`;
  focusTitle.textContent = focus.title;
  focusGoal.textContent = focus.goal;
  summaryImage.src = focus.summary;
  summaryImage.alt = focus.caption;
  summaryCaption.textContent = focus.caption;
  renderList(misconceptions, focus.misconceptions);
  renderList(teacherPrompts, focus.prompts);
  renderVisual(focus.visual);
  renderQuiz();
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderQuiz() {
  const focus = focuses[activeFocus];
  const item = focus.quiz[activeQuiz];
  quizStatus.textContent = `第 ${activeQuiz + 1} / ${focus.quiz.length} 題`;
  quizQuestion.textContent = item.q;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = item.options.map((option, index) => (
    `<button type="button" data-answer="${index}">${option}</button>`
  )).join("");
  quizOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button, item));
  });
}

function checkAnswer(button, item) {
  const selected = Number(button.dataset.answer);
  quizOptions.querySelectorAll("button").forEach((option) => {
    option.disabled = true;
    const optionIndex = Number(option.dataset.answer);
    option.classList.toggle("correct", optionIndex === item.answer);
  });
  button.classList.toggle("wrong", selected !== item.answer);
  quizFeedback.textContent = item.feedback;
  window.setTimeout(() => {
    activeQuiz = (activeQuiz + 1) % focuses[activeFocus].quiz.length;
    renderQuiz();
  }, 1700);
}

function renderVisual(type) {
  const renderers = { ratio, percent, convert, apply, discount };
  renderers[type]();
}

function ratio() {
  let made = 7;
  let attempts = 10;
  visualHint.textContent = "調整進球數與投球數，觀察比率不只看進球數。";
  visualControls.innerHTML = controls([
    ["進球數", "made", 0, 20, made],
    ["投球數", "attempts", 1, 20, attempts]
  ]);
  const update = () => {
    made = Math.min(Number(document.querySelector("[data-control='made']").value), attempts);
    attempts = Number(document.querySelector("[data-control='attempts']").value);
    made = Math.min(made, attempts);
    drawRatio(made, attempts);
  };
  visualControls.addEventListener("input", update, { once: true });
  drawRatio(made, attempts);
}

function drawRatio(made, attempts) {
  const percentValue = Math.round((made / attempts) * 1000) / 10;
  visualStage.innerHTML = `
    <div class="ratio-board">
      <p class="big-number">${made}/${attempts} = ${percentValue}%</p>
      <div class="tile-grid" style="--cols:${Math.min(attempts, 10)}">
        ${Array.from({ length: attempts }, (_, index) => `<span class="tile ${index < made ? "on" : ""}"></span>`).join("")}
      </div>
      <p>進球率是進球數占投球數的比率。</p>
    </div>
  `;
  bindControls(() => {
    const nextMade = Number(document.querySelector("[data-control='made']").value);
    const nextAttempts = Number(document.querySelector("[data-control='attempts']").value);
    drawRatio(Math.min(nextMade, nextAttempts), nextAttempts);
  });
}

function percent() {
  visualHint.textContent = "百分率把全部固定想成 100 份。";
  visualControls.innerHTML = controls([["百分率", "percent", 0, 100, 20]]);
  const draw = () => {
    const value = Number(document.querySelector("[data-control='percent']").value);
    visualStage.innerHTML = `
      <div class="ratio-board">
        <p class="big-number">${value}% = ${value}/100</p>
        <div class="tile-grid" style="--cols:10">
          ${Array.from({ length: 100 }, (_, index) => `<span class="tile ${index < value ? "on" : ""}"></span>`).join("")}
        </div>
      </div>
    `;
  };
  draw();
  bindControls(draw);
}

function convert() {
  visualHint.textContent = "觀察百分率和小數互換時，小數點移動兩位。";
  visualControls.innerHTML = controls([["百分率", "percent", 0, 100, 32]]);
  const draw = () => {
    const value = Number(document.querySelector("[data-control='percent']").value);
    visualStage.innerHTML = `
      <div class="ratio-board">
        <p class="big-number">${value}%</p>
        <div class="compare-row">
          <div class="compare-card"><strong>分數</strong><br>${value}/100</div>
          <div class="compare-card"><strong>小數</strong><br>${value / 100}</div>
        </div>
      </div>
    `;
  };
  draw();
  bindControls(draw);
}

function apply() {
  visualHint.textContent = "用整體量乘百分率，可以求出部分量。";
  visualControls.innerHTML = controls([
    ["整體量", "whole", 1, 100, 25],
    ["百分率", "percent", 0, 100, 96]
  ]);
  const draw = () => {
    const whole = Number(document.querySelector("[data-control='whole']").value);
    const percentValue = Number(document.querySelector("[data-control='percent']").value);
    const part = Math.round(whole * percentValue) / 100;
    visualStage.innerHTML = `
      <div class="ratio-board">
        <p class="big-number">${whole} x ${percentValue}% = ${part}</p>
        <div class="bar"><div class="bar-fill" style="--w:${percentValue}%"></div></div>
        <p>整體量 x 百分率 = 部分量。</p>
      </div>
    `;
  };
  draw();
  bindControls(draw);
}

function discount() {
  visualHint.textContent = "切換折扣語言，分辨付多少與減多少。";
  visualControls.innerHTML = controls([
    ["定價", "price", 100, 5000, 1600],
    ["off 百分率", "off", 0, 90, 30]
  ]);
  const draw = () => {
    const price = Number(document.querySelector("[data-control='price']").value);
    const off = Number(document.querySelector("[data-control='off']").value);
    const payPercent = 100 - off;
    visualStage.innerHTML = `
      <div class="ratio-board">
        <p class="big-number">${off}% off = 付 ${payPercent}%</p>
        <div class="compare-row">
          <div class="compare-card"><strong>少付</strong><br>${Math.round(price * off) / 100} 元</div>
          <div class="compare-card"><strong>售價</strong><br>${Math.round(price * payPercent) / 100} 元</div>
        </div>
      </div>
    `;
  };
  draw();
  bindControls(draw);
}

function controls(items) {
  return items.map(([label, name, min, max, value]) => `
    <label class="control">${label}
      <input type="range" min="${min}" max="${max}" value="${value}" data-control="${name}">
    </label>
  `).join("");
}

function bindControls(handler) {
  visualControls.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", handler);
  });
}

setFocus(0);
