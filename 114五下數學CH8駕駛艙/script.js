const focuses = [
  {
    title: "認識比率",
    tag: "部分量 / 全體量",
    goal: "理解部分數量占全部數量的幾分之幾就是比率，並能用分數與小數描述。",
    note: "本焦點先讓學生辨認哪個量是部分、哪個量是全體，再把比率表示成分數與小數。比較投籃、出席、檢查結果時，不能只看部分量的大小。",
    steps: ["先圈出部分量和全體量。", "用 部分量 ÷ 全體量 或 部分量/全體量 表示。", "全體可切成互補部分時，所有比率合起來是 1。"],
    summary: "assets/deck-page-01.svg",
    caption: "部分量、全部量與比率",
    misconceptions: ["只看進球數或人數，沒有看總量。", "把全部量和部分量放反。", "以為出席率和缺席率合起來不是 1。"],
    prompts: ["分母代表哪一個全部？", "如果總量不同，怎麼公平比較？", "剩下的部分和已知部分合起來是多少？"],
    quiz: [
      choice("選擇題", "全班 25 人，有 20 人到校，出席率是多少？", ["20/25", "5/25", "25/20"], 0, "出席率是出席人數占全班人數的比率。"),
      trueFalse("判斷題", "投籃比賽只要看誰投進最多球，就能知道誰的進球率最高。", false, "進球率要看進球數占投球數的比率，總投球數不同時不能只看進球數。"),
      fill("填答題", "12 顆糖中有 3 顆是薄荷口味，薄荷口味占全部的比率是 3/____。", ["12"], "全部是 12 顆，所以分母是 12。"),
      choice("情境應用題", "甲班 24 人有 12 人訂雜誌，乙班 30 人有 15 人訂雜誌。哪一班訂閱比率較高？", ["甲班較高", "乙班較高", "一樣高"], 2, "12/24 和 15/30 都是 1/2，所以比率一樣。")
    ],
    visual: "ratio"
  },
  {
    title: "認識百分率",
    tag: "以 100 為基準",
    goal: "把百分率理解為分母 100 的比率，能說明 20% 是 100 份中的 20 份。",
    note: "百分率是比率的一種常用記法。用 100 格或長條圖能幫學生看到百分率其實是把全部想成 100 份。",
    steps: ["把全部想成 100 等份。", "百分率的數字表示其中幾份。", "各部分百分率合起來是 100%。"],
    summary: "assets/deck-page-02.svg",
    caption: "百分率就是以 100 為基準的比率",
    misconceptions: ["把 20% 說成 20 倍。", "忘記 1% = 1/100 = 0.01。", "把 100% 當成 100 個單位而不是全部。"],
    prompts: ["把全部平分成 100 份，20% 是幾份？", "18/100 可以寫成幾 %？", "為什麼三區座位合起來是 100%？"],
    quiz: [
      choice("選擇題", "手機電量 20% 表示什麼？", ["剩下電量占滿電的 20/100", "手機只能用 20 分鐘", "用掉滿電的 20/100"], 0, "百分率描述部分占全部的比率。"),
      fill("填答題", "1% = ____/100。", ["1"], "1% 就是百分之一。"),
      trueFalse("判斷題", "18/100 用百分率表示是 18%。", true, "分母是 100 時，分子就是百分率的數字。"),
      choice("情境應用題", "座位分成貴賓區 18%、學生區 52%、家長區 30%，三區合計是多少？", ["90%", "100%", "110%"], 1, "三區合起來是全部座位，所以是 100%。")
    ],
    visual: "percent"
  },
  {
    title: "互換表示",
    tag: "分數 / 小數 / 百分率",
    goal: "能在分數、小數與百分率之間轉換，並理解小數點移動的原因。",
    note: "此焦點把三種記法放在同一張概念表。學生要先理解同一個比率可以有不同寫法，再練習轉換技巧。",
    steps: ["百分率化小數：除以 100。", "小數化百分率：乘以 100 並加 %。", "分數化百分率：可先化成小數，或把分母變成 100。"],
    summary: "assets/deck-page-03.svg",
    caption: "百分率、分數、小數的互換",
    misconceptions: ["百分率化小數時小數點移錯方向。", "0.8% 誤寫成 0.8。", "分母不是 100 時不知道可先化為小數。"],
    prompts: ["32% 先寫成哪一個分數？", "0.286 為什麼是 28.6%？", "7/8 可以先化成小數嗎？"],
    quiz: [
      choice("選擇題", "60% 化成小數是？", ["0.6", "6", "0.06"], 0, "百分率化小數要除以 100。"),
      fill("填答題", "0.035 化成百分率是 ____%。", ["3.5"], "0.035 乘以 100 是 3.5，所以是 3.5%。"),
      trueFalse("判斷題", "0.8% 化成小數是 0.008。", true, "0.8% = 0.8/100 = 0.008。"),
      choice("情境應用題", "打擊率 0.286 用百分率表示最接近哪一個？", ["2.86%", "28.6%", "286%"], 1, "小數化百分率，小數點向右移兩位。")
    ],
    visual: "convert"
  },
  {
    title: "百分率應用",
    tag: "整體量 / 部分量",
    goal: "能用整體量和百分率求部分量，也能由部分量和整體量求百分率。",
    note: "學生要先判斷題目給了哪兩個量，再決定要乘還是除。這裡用可調式情境讓學生反覆看見公式的來源。",
    steps: ["求部分量：整體量 × 百分率。", "求百分率：部分量 ÷ 整體量。", "互補情境可用 1 或 100% 減掉已知部分。"],
    summary: "assets/deck-page-04.svg",
    caption: "求部分量與求百分率",
    misconceptions: ["分不清楚要求部分量還是百分率。", "百分率沒有先化為小數或分數就直接乘。", "忽略答對率和答錯率互補。"],
    prompts: ["題目給的是整體量、部分量，還是百分率？", "24 公斤的 75% 要怎麼列式？", "答對率和答錯率有什麼關係？"],
    quiz: [
      choice("選擇題", "一份考卷 25 題，答對率 96%，答對幾題？", ["24 題", "23 題", "25 題"], 0, "25 × 96% = 24。"),
      fill("填答題", "答對 32 題、答錯 8 題，答對率是 ____%。", ["80"], "全部 40 題，32/40 = 0.8 = 80%。"),
      trueFalse("判斷題", "求 72 公斤的 60%，可以列成 72 × 0.6。", true, "60% 可以先化成 0.6 再相乘。"),
      choice("情境應用題", "一面 30 平方公尺牆已完成 70%，未完成多少平方公尺？", ["9 平方公尺", "21 平方公尺", "7 平方公尺"], 0, "未完成是 30%，30 × 30% = 9。")
    ],
    visual: "apply"
  },
  {
    title: "折扣與加成",
    tag: "付多少 / 減多少 / 加多少",
    goal: "理解打折是售價占定價的百分率，% off 是減去的百分率，幾成與加成可轉成百分率處理。",
    note: "生活用語容易混淆。本焦點把打折、off、幾成、加成放在同一個金額比較器，讓學生先翻譯語意再計算。",
    steps: ["打七五折表示付 75%。", "30% off 表示減 30%，也就是付 70%。", "加二成表示在原量之外再加 20%。"],
    summary: "assets/deck-page-05.svg",
    caption: "生活中的百分率語言",
    misconceptions: ["把 30% off 誤認為打三折。", "打七五折和 75% off 混淆。", "加二成只算 20%，忘記加回成本。"],
    prompts: ["打六折是付原價的幾 %？", "30% off 是付幾 %？", "加二成作為定價要先算什麼？"],
    quiz: [
      choice("選擇題", "30% off 和打幾折相同？", ["七折", "三折", "三成"], 0, "30% off 是少付 30%，所以付 70%。"),
      fill("填答題", "成本 2000 元，加二成作為定價，定價是 ____ 元。", ["2400"], "加二成是加 20%，2000 + 400 = 2400。"),
      trueFalse("判斷題", "打八八折表示售價是定價的 88%。", true, "幾折表示要付定價的百分之幾。"),
      choice("情境應用題", "原價 8000 元的遊戲機 15% off，售價是多少？", ["1200 元", "6800 元", "9200 元"], 1, "15% off 是付 85%，8000 × 85% = 6800。")
    ],
    visual: "discount"
  }
];

let activeFocus = 0;
let activeQuiz = 0;
let timerSeconds = 0;
let timerId = null;
let penColor = "#111111";
let penSize = 7;
let drawing = false;
let laserActive = false;
let lastLaserTrail = 0;

const $ = (id) => document.getElementById(id);
const focusButtons = document.querySelectorAll(".focus-btn");
const drawCanvas = $("drawLayer");
const drawCtx = drawCanvas.getContext("2d");

function choice(type, q, options, answer, feedback) {
  return { type, mode: "choice", q, options, answer, feedback };
}

function trueFalse(type, q, answer, feedback) {
  return { type, mode: "choice", q, options: ["正確", "錯誤"], answer: answer ? 0 : 1, feedback };
}

function fill(type, q, answers, feedback) {
  return { type, mode: "fill", q, answers, feedback };
}

function setFocus(index) {
  activeFocus = index;
  activeQuiz = 0;
  const focus = focuses[index];
  $("focusLabel").textContent = `教學焦點 ${index + 1}`;
  $("focusCount").textContent = `${index + 1} / ${focuses.length}`;
  $("focusTitle").textContent = focus.title;
  $("focusGoal").textContent = focus.goal;
  $("lessonTag").textContent = focus.tag;
  $("teachingNote").textContent = focus.note;
  $("lessonSteps").innerHTML = focus.steps.map((step) => `<span>${step}</span>`).join("");
  $("summaryImage").src = focus.summary;
  $("summaryImage").alt = focus.caption;
  $("summaryCaption").textContent = focus.caption;
  renderList($("misconceptions"), focus.misconceptions);
  renderList($("teacherPrompts"), focus.prompts);
  focusButtons.forEach((button, buttonIndex) => button.classList.toggle("active", buttonIndex === index));
  renderVisual(focus.visual);
  renderQuiz();
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderQuiz() {
  const quiz = focuses[activeFocus].quiz[activeQuiz];
  $("quizStatus").textContent = `第 ${activeQuiz + 1} / ${focuses[activeFocus].quiz.length} 題`;
  $("quizType").textContent = quiz.type;
  $("quizQuestion").textContent = quiz.q;
  $("quizFeedback").textContent = "";
  $("quizFeedback").className = "quiz-feedback";
  if (quiz.mode === "fill") {
    $("quizAnswerArea").innerHTML = `
      <div class="fill-row">
        <input id="fillAnswer" type="text" inputmode="decimal" aria-label="填答答案">
        <button id="checkFill" type="button">檢查</button>
      </div>
    `;
    $("checkFill").addEventListener("click", () => checkFillAnswer(quiz));
    $("fillAnswer").addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkFillAnswer(quiz);
    });
  } else {
    $("quizAnswerArea").innerHTML = quiz.options.map((option, index) => (
      `<button type="button" data-answer="${index}">${option}</button>`
    )).join("");
    $("quizAnswerArea").querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => checkChoiceAnswer(button, quiz));
    });
  }
}

function checkChoiceAnswer(button, quiz) {
  const selected = Number(button.dataset.answer);
  $("quizAnswerArea").querySelectorAll("button").forEach((option) => {
    option.disabled = true;
    option.classList.toggle("correct", Number(option.dataset.answer) === quiz.answer);
  });
  button.classList.toggle("wrong", selected !== quiz.answer);
  showFeedback(selected === quiz.answer, quiz.feedback);
}

function checkFillAnswer(quiz) {
  const input = $("fillAnswer");
  const value = normalizeAnswer(input.value);
  const correct = quiz.answers.some((answer) => normalizeAnswer(answer) === value);
  input.disabled = true;
  $("checkFill").disabled = true;
  showFeedback(correct, quiz.feedback);
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/％/g, "%").replace(/\s/g, "");
}

function showFeedback(correct, text) {
  $("quizFeedback").className = `quiz-feedback ${correct ? "good" : "retry"}`;
  $("quizFeedback").textContent = `${correct ? "可以。" : "再想想。"}${text}`;
  if (correct) showBigEffect("✓");
}

function moveQuiz(delta) {
  const count = focuses[activeFocus].quiz.length;
  activeQuiz = (activeQuiz + delta + count) % count;
  renderQuiz();
}

function renderVisual(type) {
  const renderers = { ratio, percent, convert, apply, discount };
  renderers[type]();
}

function ratio() {
  $("visualHint").textContent = "調整部分量與全體量，觀察分數、小數與比率。";
  $("visualControls").innerHTML = controls([
    ["部分量", "part", 0, 40, 12],
    ["全體量", "whole", 1, 40, 25]
  ]);
  const draw = () => {
    const whole = Math.max(1, Number(control("whole").value));
    const part = Math.min(Number(control("part").value), whole);
    control("part").value = part;
    const decimal = part / whole;
    const percent = decimal * 100;
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <div class="visual-topline">
          <p class="big-number">${part}/${whole}</p>
          <span class="mini-note">小數 ${format(decimal)}，百分率 ${format(percent)}%</span>
        </div>
        <div class="tile-grid" style="--cols:${Math.min(10, whole)}">
          ${tiles(whole, part, "on")}
        </div>
        <div class="compare-row">
          <div class="compare-card"><strong>部分量</strong><b>${part}</b></div>
          <div class="compare-card"><strong>全體量</strong><b>${whole}</b></div>
          <div class="compare-card"><strong>比率</strong><b>${format(decimal)}</b></div>
        </div>
      </div>
    `;
  };
  draw();
  bindVisualInputs(draw);
}

function percent() {
  $("visualHint").textContent = "百分率把全部固定想成 100 份，可用 100 格或長條理解。";
  $("visualControls").innerHTML = controls([["百分率", "percent", 0, 100, 35]]);
  const draw = () => {
    const value = Number(control("percent").value);
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <div class="visual-topline">
          <p class="big-number">${value}%</p>
          <span class="mini-note">${value}/100 = ${format(value / 100)}</span>
        </div>
        <div class="bar"><div class="bar-fill" style="--w:${value}%"></div></div>
        <div class="tile-grid" style="--cols:10">${tiles(100, value, "on")}</div>
      </div>
    `;
  };
  draw();
  bindVisualInputs(draw);
}

function convert() {
  $("visualHint").textContent = "輸入分子與分母，練習同一個比率的三種表示。";
  $("visualControls").innerHTML = controls([
    ["分子", "num", 0, 100, 3],
    ["分母", "den", 1, 100, 8]
  ]);
  const draw = () => {
    const den = Math.max(1, Number(control("den").value));
    const num = Math.min(Number(control("num").value), den);
    control("num").value = num;
    const decimal = num / den;
    const percentValue = decimal * 100;
    $("visualStage").innerHTML = `
      <div class="visual-card conversion-practice">
        <div class="formula-row">
          <div class="compare-card"><strong>分數</strong><b>${num}/${den}</b></div>
          <div class="compare-card"><strong>小數</strong><b>${format(decimal)}</b></div>
          <div class="compare-card"><strong>百分率</strong><b>${format(percentValue)}%</b></div>
        </div>
        <label class="control">試填百分率
          <input id="conversionGuess" type="text" inputmode="decimal" placeholder="例如 37.5">
        </label>
        <button id="checkConversion" type="button">檢查轉換</button>
        <p id="conversionFeedback" class="mini-note">提示：先用分子除以分母，再乘以 100。</p>
      </div>
    `;
    $("checkConversion").addEventListener("click", () => {
      const guess = Number(normalizeAnswer($("conversionGuess").value).replace("%", ""));
      const correct = Math.abs(guess - percentValue) < 0.05;
      $("conversionFeedback").textContent = correct ? "轉換正確。" : `再檢查一次：${num} ÷ ${den} × 100 = ${format(percentValue)}。`;
    });
  };
  draw();
  bindVisualInputs(draw);
}

function apply() {
  $("visualHint").textContent = "切換求部分量或求百分率，判斷該乘還是該除。";
  $("visualControls").innerHTML = `
    <div class="control">
      <span>模式</span>
      <div class="segmented">
        <button class="active" type="button" data-mode="part">求部分量</button>
        <button type="button" data-mode="rate">求百分率</button>
      </div>
    </div>
    ${controls([
      ["整體量", "whole", 1, 100, 25],
      ["百分率", "percent", 0, 100, 96],
      ["部分量", "part", 0, 100, 24]
    ])}
  `;
  let mode = "part";
  const draw = () => {
    const whole = Number(control("whole").value);
    const percentValue = Number(control("percent").value);
    const part = Math.min(Number(control("part").value), whole);
    const result = mode === "part" ? whole * percentValue / 100 : part / whole * 100;
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <p class="big-number">${mode === "part" ? `${whole} × ${percentValue}% = ${format(result)}` : `${part} ÷ ${whole} = ${format(result)}%`}</p>
        <div class="bar"><div class="bar-fill" style="--w:${mode === "part" ? percentValue : result}%"></div></div>
        <div class="compare-row">
          <div class="compare-card"><strong>整體量</strong><b>${whole}</b></div>
          <div class="compare-card"><strong>${mode === "part" ? "百分率" : "部分量"}</strong><b>${mode === "part" ? `${percentValue}%` : part}</b></div>
          <div class="compare-card"><strong>結果</strong><b>${format(result)}${mode === "rate" ? "%" : ""}</b></div>
        </div>
      </div>
    `;
  };
  $("visualControls").querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.mode;
      $("visualControls").querySelectorAll("[data-mode]").forEach((item) => item.classList.toggle("active", item === button));
      draw();
    });
  });
  draw();
  bindVisualInputs(draw);
}

function discount() {
  $("visualHint").textContent = "比較打折、off、幾成與加成，先看是付、減，還是加。";
  $("visualControls").innerHTML = `
    <div class="control">
      <span>情境</span>
      <div class="segmented">
        <button class="active" type="button" data-kind="discount">打折</button>
        <button type="button" data-kind="off">off</button>
        <button type="button" data-kind="markup">加成</button>
      </div>
    </div>
    ${controls([
      ["原價 / 成本", "price", 100, 10000, 1600],
      ["百分率", "percent", 0, 100, 30]
    ])}
  `;
  let kind = "discount";
  const draw = () => {
    const price = Number(control("price").value);
    const percentValue = Number(control("percent").value);
    const payRate = kind === "discount" ? percentValue : kind === "off" ? 100 - percentValue : 100 + percentValue;
    const amount = price * payRate / 100;
    const label = kind === "discount" ? `打 ${percentValue} 折` : kind === "off" ? `${percentValue}% off` : `加 ${percentValue}%`;
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <p class="big-number">${label}</p>
        <div class="money-row">
          <div class="compare-card"><strong>原價 / 成本</strong><b>${price}</b></div>
          <div class="compare-card"><strong>實付比例</strong><b>${payRate}%</b></div>
          <div class="compare-card"><strong>金額</strong><b>${format(amount)} 元</b></div>
        </div>
        <div class="bar"><div class="bar-fill ${kind === "off" ? "discount" : ""}" style="--w:${Math.min(payRate, 100)}%"></div></div>
        <p class="mini-note">${kind === "off" ? "off 是少付多少。" : kind === "markup" ? "加成是先加再合計。" : "打折是付原價的百分率。"}</p>
      </div>
    `;
  };
  $("visualControls").querySelectorAll("[data-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      kind = button.dataset.kind;
      $("visualControls").querySelectorAll("[data-kind]").forEach((item) => item.classList.toggle("active", item === button));
      draw();
    });
  });
  draw();
  bindVisualInputs(draw);
}

function controls(items) {
  return items.map(([label, name, min, max, value]) => `
    <label class="control">${label}
      <input type="range" min="${min}" max="${max}" value="${value}" data-control="${name}">
    </label>
  `).join("");
}

function control(name) {
  return document.querySelector(`[data-control="${name}"]`);
}

function bindVisualInputs(handler) {
  $("visualControls").querySelectorAll("input[type='range']").forEach((input) => {
    input.addEventListener("input", handler);
  });
}

function tiles(total, active, className) {
  return Array.from({ length: total }, (_, index) => `<span class="tile ${index < active ? className : ""}"></span>`).join("");
}

function format(value) {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 1000) / 1000);
}

function openDrawer(id) {
  document.querySelectorAll(".drawer").forEach((drawer) => {
    drawer.classList.toggle("open", drawer.id === id && !drawer.classList.contains("open"));
  });
}

function showBigEffect(text) {
  $("bigEffect").textContent = text;
  $("bigEffect").classList.remove("show");
  void $("bigEffect").offsetWidth;
  $("bigEffect").classList.add("show");
}

function buildNames() {
  const start = Math.max(1, Number($("rangeStart").value) || 1);
  const end = Math.max(start, Number($("rangeEnd").value) || start);
  $("rangeEnd").value = end;
  $("namesInput").value = Array.from({ length: end - start + 1 }, (_, index) => String(start + index)).join("\n");
}

function updateTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  $("timerDisplay").textContent = `${minutes}:${seconds}`;
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  $("timerToggle").textContent = "開始";
}

function resizeDrawCanvas() {
  const ratio = window.devicePixelRatio || 1;
  drawCanvas.width = Math.round(window.innerWidth * ratio);
  drawCanvas.height = Math.round(window.innerHeight * ratio);
  drawCanvas.style.width = `${window.innerWidth}px`;
  drawCanvas.style.height = `${window.innerHeight}px`;
  drawCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawCtx.lineCap = "round";
  drawCtx.lineJoin = "round";
}

function enablePen(color = penColor) {
  penColor = color;
  disableLaser();
  document.body.classList.add("pen-active");
  $("openPen").classList.add("active");
  document.querySelectorAll(".pen-color").forEach((button) => {
    button.classList.toggle("active", button.dataset.color === penColor);
  });
}

function disablePen() {
  drawing = false;
  document.body.classList.remove("pen-active");
  $("openPen").classList.remove("active");
}

function enableLaser() {
  disablePen();
  laserActive = true;
  document.body.classList.add("laser-active");
  $("openLaser").classList.add("active");
  $("laserToggle").textContent = "關閉雷射筆";
  $("laserToggle").setAttribute("aria-label", "關閉雷射筆");
}

function disableLaser() {
  laserActive = false;
  document.body.classList.remove("laser-active");
  $("openLaser").classList.remove("active");
  $("laserToggle").textContent = "開啟雷射筆";
  $("laserToggle").setAttribute("aria-label", "開啟雷射筆");
}

function addLaserTrail(x, y) {
  const now = performance.now();
  if (now - lastLaserTrail < 42) return;
  lastLaserTrail = now;
  const size = Number($("laserSize").value) || 44;
  const trail = document.createElement("span");
  trail.className = "laser-trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  trail.style.setProperty("--trail-size", `${size}px`);
  $("laserLayer").appendChild(trail);
  window.setTimeout(() => trail.remove(), 760);
}

focusButtons.forEach((button) => {
  button.addEventListener("click", () => setFocus(Number(button.dataset.focus)));
});

$("prevQuiz").addEventListener("click", () => moveQuiz(-1));
$("nextQuiz").addEventListener("click", () => moveQuiz(1));

$("openPen").addEventListener("click", () => openDrawer("penDrawer"));
$("openLaser").addEventListener("click", () => openDrawer("laserDrawer"));
$("openTools").addEventListener("click", () => openDrawer("toolDrawer"));
document.querySelectorAll(".close-drawer").forEach((button) => {
  button.addEventListener("click", () => $(button.dataset.close).classList.remove("open"));
});

document.querySelectorAll(".pen-color").forEach((button) => {
  button.addEventListener("click", () => enablePen(button.dataset.color));
});

$("penSize").addEventListener("input", (event) => {
  penSize = Number(event.target.value);
});

$("clearInk").addEventListener("click", () => {
  drawCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
});

$("closePenMode").addEventListener("click", disablePen);

drawCanvas.addEventListener("pointerdown", (event) => {
  if (!document.body.classList.contains("pen-active")) return;
  event.preventDefault();
  drawing = true;
  drawCanvas.setPointerCapture(event.pointerId);
  drawCtx.beginPath();
  drawCtx.moveTo(event.clientX, event.clientY);
});

drawCanvas.addEventListener("pointermove", (event) => {
  if (!drawing || !document.body.classList.contains("pen-active")) return;
  event.preventDefault();
  drawCtx.strokeStyle = penColor;
  drawCtx.lineWidth = penSize;
  drawCtx.lineTo(event.clientX, event.clientY);
  drawCtx.stroke();
});

function endDrawing(event) {
  if (!drawing) return;
  drawing = false;
  try { drawCanvas.releasePointerCapture(event.pointerId); } catch {}
}

drawCanvas.addEventListener("pointerup", endDrawing);
drawCanvas.addEventListener("pointercancel", endDrawing);

$("laserToggle").addEventListener("click", () => {
  if (laserActive) disableLaser();
  else enableLaser();
});

$("laserSize").addEventListener("input", (event) => {
  document.documentElement.style.setProperty("--laser-size", `${event.target.value}px`);
});

document.addEventListener("pointermove", (event) => {
  if (!laserActive) return;
  $("laserDot").style.left = `${event.clientX}px`;
  $("laserDot").style.top = `${event.clientY}px`;
  addLaserTrail(event.clientX, event.clientY);
});

document.addEventListener("pointerdown", (event) => {
  if (!laserActive) return;
  $("laserDot").style.left = `${event.clientX}px`;
  $("laserDot").style.top = `${event.clientY}px`;
  addLaserTrail(event.clientX, event.clientY);
});

$("rangeStart").addEventListener("change", buildNames);
$("rangeEnd").addEventListener("change", buildNames);
$("drawName").addEventListener("click", () => {
  const names = $("namesInput").value.split(/\n|,|，/).map((name) => name.trim()).filter(Boolean);
  const picked = names.length ? names[Math.floor(Math.random() * names.length)] : "請先輸入名單";
  $("drawResult").textContent = picked;
  showBigEffect(picked);
});

document.querySelectorAll("[data-sec]").forEach((button) => {
  button.addEventListener("click", () => {
    timerSeconds = Number(button.dataset.sec);
    updateTimer();
  });
});

$("setCustomTime").addEventListener("click", () => {
  timerSeconds = Math.max(1, Number($("customMinutes").value) || 1) * 60;
  updateTimer();
});

$("timerToggle").addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    return;
  }
  timerId = window.setInterval(() => {
    if (timerSeconds > 0) timerSeconds -= 1;
    updateTimer();
    if (timerSeconds === 0) {
      stopTimer();
      showBigEffect("時間到");
    }
  }, 1000);
  $("timerToggle").textContent = "暫停";
});

$("timerReset").addEventListener("click", () => {
  stopTimer();
  timerSeconds = 0;
  updateTimer();
});

window.addEventListener("resize", resizeDrawCanvas);
resizeDrawCanvas();
buildNames();
updateTimer();
setFocus(0);
