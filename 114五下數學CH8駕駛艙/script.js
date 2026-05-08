const notebookUrl = "https://notebooklm.google.com/notebook/70b98192-9862-4027-b0ef-158774c478c1?addSource=true";

function frac(top, bottom) {
  return `<span class="fraction"><span class="numerator">${top}</span><span class="bar"></span><span class="denominator">${bottom}</span></span>`;
}

function choice(type, q, options, answer, feedback) {
  return { type, mode: "choice", q, options, answer, feedback };
}

function trueFalse(q, answer, feedback) {
  return { type: "判斷題", mode: "choice", q, options: ["正確", "錯誤"], answer: answer ? 0 : 1, feedback };
}

function fill(q, answers, feedback) {
  return { type: "填空題", mode: "fill", q, answers, feedback };
}

function drag(q, targets, pairs, feedback) {
  return { type: "拖曳配對題", mode: "drag", q, targets, pairs, feedback };
}

const lessons = [
  {
    title: "認識比率",
    goal: "用部分量與全體量建立比率概念。",
    visual: "ratio",
    summary: "assets/deck-page-01.svg",
    bullets: ["比率是部分量占全體量的多少。", "全體量不同時，要比較比率，不只看數量。", "互補的兩個比率合起來是 1。"],
    practice: ["調整部分量和全體量，請學生說出分子與分母各代表什麼。", "把全體量改大，觀察同樣部分量的比率變小。", "用班級出席率說明比率的生活意義。"],
    quiz: [
      choice("選擇題", `全班 25 人，有 20 人到校，出席率是多少？`, [`${frac(20, 25)}`, `${frac(5, 25)}`, `${frac(25, 20)}`], 0, "出席率是出席人數占全班人數的比率。"),
      trueFalse("投籃比賽只看誰投進最多球，就一定知道誰的進球率最高。", false, "還要看投球總數，進球率是進球數占投球數。"),
      fill("12 顆糖中有 3 顆是薄荷口味，薄荷口味占全部的比率是 3 / ____。", ["12"], "全體量是 12 顆，所以分母是 12。"),
      choice("情境題", "甲班 24 人有 12 人訂雜誌，乙班 30 人有 15 人訂雜誌。哪一班訂閱比率較高？", ["甲班", "乙班", "一樣高"], 2, "兩班都是二分之一，所以比率一樣。"),
      drag("把語詞配到正確位置。", ["部分量", "全體量"], [["到校 20 人", "部分量"], ["全班 25 人", "全體量"]], "先分清楚部分量與全體量，才能寫出比率。")
    ],
    video: ["# 教學主題\n認識比率", "# 教學目標\n學生能用部分量與全體量說明比率。", "# 核心概念\n比率 = 部分量 ÷ 全體量。", "# 教學流程\n生活情境導入，找部分量和全體量，用直式分數表示，再比較不同總量。", "# 範例題\n25人中20人到校，出席率是多少？", "# 課堂互動\n請學生拖曳「部分量」與「全體量」配對。", "# 總結\n比率是公平比較的工具。"],
    slides: [["認識比率", "部分量占全體量。", "班級人數格子圖"], ["比率的寫法", "用直式分數表示部分量/全體量。", "分子分母標註圖"], ["公平比較", "總量不同時比較比率。", "投籃紀錄表"]]
  },
  {
    title: "認識百分率",
    goal: "把百分率理解為分母 100 的比率。",
    visual: "percent",
    summary: "assets/deck-page-02.svg",
    bullets: ["百分率是以 100 為基準的比率。", "1% 是百分之一。", "全部就是 100%。"],
    practice: ["拖動百分率滑桿，觀察 100 格圖。", "把 20% 說成 100 份中的 20 份。", "用座位分區檢查各部分合計 100%。"],
    quiz: [
      choice("選擇題", "手機電量 20% 表示什麼？", ["滿電 100 份中的 20 份", "手機只能用 20 分鐘", "用掉全部的 20 倍"], 0, "百分率描述部分占全部的比率。"),
      trueFalse("18 / 100 可以寫成 18%。", true, "分母是 100 時，分子就是百分率的數字。"),
      fill("1% = ____ / 100。", ["1"], "1% 就是百分之一。"),
      choice("情境題", "貴賓區 18%、學生區 52%、家長區 30%，三區合計是多少？", ["90%", "100%", "110%"], 1, "三區合起來是全部座位，所以是 100%。"),
      drag("把百分率配到正確意思。", ["20%", "100%"], [["100份中的20份", "20%"], ["全部", "100%"]], "百分率把全體固定看成 100 份。")
    ],
    video: ["# 教學主題\n認識百分率", "# 教學目標\n學生能說明百分率是分母100的比率。", "# 核心概念\n20% = 20/100，100%代表全部。", "# 教學流程\n手機電量導入，使用100格圖，連結分數與百分率。", "# 範例題\n18/100用百分率表示是多少？", "# 課堂互動\n拖動百分率滑桿並說明亮起幾格。", "# 總結\n百分率是生活中常用的比率語言。"],
    slides: [["百分率是什麼", "全部想成100份。", "100格圖"], ["百分率符號", "20%讀作百分之二十。", "手機電量圖"], ["全部是100%", "各部分合計為100%。", "座位分區圖"]]
  },
  {
    title: "分數小數百分率互換",
    goal: "用同一個比率連結分數、小數與百分率。",
    visual: "convert",
    summary: "assets/deck-page-03.svg",
    bullets: ["百分率化小數要除以 100。", "小數化百分率要乘以 100。", "分數可先化成小數再轉百分率。"],
    practice: ["調整分子與分母，讀出三種表示。", "輸入百分率答案，檢查轉換。", "比較 0.8 與 0.8% 的差異。"],
    quiz: [
      choice("選擇題", "60% 化成小數是？", ["0.6", "6", "0.06"], 0, "百分率化小數要除以 100。"),
      trueFalse("0.8% 化成小數是 0.008。", true, "0.8% = 0.8 ÷ 100 = 0.008。"),
      fill("0.035 化成百分率是 ____%。", ["3.5"], "小數乘以 100 就是百分率的數字。"),
      choice("情境題", "打擊率 0.286 用百分率表示是多少？", ["2.86%", "28.6%", "286%"], 1, "0.286 × 100 = 28.6%。"),
      drag("把相等的表示法配在一起。", ["0.6", "0.035"], [["60%", "0.6"], ["3.5%", "0.035"]], "百分率和小數相差 100 倍。")
    ],
    video: ["# 教學主題\n分數小數百分率互換", "# 教學目標\n學生能在三種表示法間轉換。", "# 核心概念\n同一個比率可以寫成分數、小數、百分率。", "# 教學流程\n三欄對照，操作分子分母，練習百分率與小數互換。", "# 範例題\n3/8 = 0.375 = 37.5%。", "# 課堂互動\n拖曳百分率到相等的小數。", "# 總結\n先理解比率，再使用轉換技巧。"],
    slides: [["三種表示", "分數、小數、百分率是同一概念。", "三欄表"], ["小數點移動", "百分率和小數差100倍。", "箭頭轉換圖"], ["分數轉百分率", "先除再乘100。", "直式分數範例"]]
  },
  {
    title: "百分率應用",
    goal: "判斷要求部分量或百分率，選擇乘法或除法。",
    visual: "apply",
    summary: "assets/deck-page-04.svg",
    bullets: ["求部分量：整體量 × 百分率。", "求百分率：部分量 ÷ 整體量。", "未完成率可用 100% 減已完成率。"],
    practice: ["切換求部分量與求百分率模式。", "用考卷答對率示範整體量乘百分率。", "用答對題數除以全部題數求百分率。"],
    quiz: [
      choice("選擇題", "一份考卷 25 題，答對率 96%，答對幾題？", ["24 題", "23 題", "25 題"], 0, "25 × 96% = 24。"),
      trueFalse("求 72 公斤的 60%，可以列成 72 × 0.6。", true, "60% 可以先化成 0.6。"),
      fill("答對 32 題、答錯 8 題，答對率是 ____%。", ["80"], "全部 40 題，32 ÷ 40 = 80%。"),
      choice("情境題", "30 平方公尺的牆完成 70%，未完成多少平方公尺？", ["9 平方公尺", "21 平方公尺", "7 平方公尺"], 0, "未完成是 30%，30 × 30% = 9。"),
      drag("把算式配到正確情境。", ["求部分量", "求百分率"], [["25 × 96%", "求部分量"], ["32 ÷ 40", "求百分率"]], "求部分量用乘法，求百分率用除法。")
    ],
    video: ["# 教學主題\n百分率應用", "# 教學目標\n學生能解決整體量、部分量、百分率問題。", "# 核心概念\n整體量×百分率=部分量；部分量÷整體量=百分率。", "# 教學流程\n判斷已知量，選擇乘或除，檢查答案是否合理。", "# 範例題\n25題的96%是24題。", "# 課堂互動\n切換模式並說明為什麼用乘法或除法。", "# 總結\n先找整體量，再決定運算。"],
    slides: [["找整體量", "先判斷全體是什麼。", "題目標註圖"], ["求部分量", "整體量乘百分率。", "百分率長條"], ["求百分率", "部分量除以整體量。", "除法箭頭圖"]]
  },
  {
    title: "折扣與加成",
    goal: "分辨打折、off、幾成與加成的百分率語意。",
    visual: "discount",
    summary: "assets/deck-page-05.svg",
    bullets: ["打七五折是付 75%。", "30% off 是少付 30%，也就是付 70%。", "加二成是原量再加 20%。"],
    practice: ["輸入原價與折數，觀察現價與省下多少。", "切換 off，說明為什麼 30% off 是付 70%。", "切換加成，觀察金額大於原價。"],
    quiz: [
      choice("選擇題", "30% off 和打幾折相同？", ["七折", "三折", "三成"], 0, "30% off 是少付 30%，所以付 70%。"),
      trueFalse("打八八折表示售價是定價的 88%。", true, "幾折表示要付定價的百分之幾。"),
      fill("成本 2000 元，加二成作為定價，定價是 ____ 元。", ["2400"], "加二成是加 20%，2000 + 400 = 2400。"),
      choice("情境題", "原價 8000 元的遊戲機 15% off，售價是多少？", ["1200 元", "6800 元", "9200 元"], 1, "15% off 是付 85%，8000 × 85% = 6800。"),
      drag("把生活用語配到實付比例。", ["付70%", "付120%"], [["30% off", "付70%"], ["加二成", "付120%"]], "off 是減少，加成是增加。")
    ],
    video: ["# 教學主題\n折扣與加成", "# 教學目標\n學生能把生活促銷語言轉成百分率並計算。", "# 核心概念\n打折是付多少，off是減多少，加成是加多少。", "# 教學流程\n翻譯語意，找實付比例，計算現價或定價。", "# 範例題\n30% off 等於付70%。", "# 課堂互動\n拖曳生活用語到實付比例。", "# 總結\n先判斷付、減、加，再計算。"],
    slides: [["折扣語言", "打折是付原價的百分率。", "價格標籤"], ["off語言", "off是減少的百分率。", "促銷海報"], ["加成語言", "加成是原量再增加。", "成本到定價箭頭"]]
  }
];

const summaryDeckPages = [
  [1, 2, 3],
  [4, 5],
  [6, 7],
  [8, 12, 13],
  [9, 10, 11, 14, 15]
];

let currentFocus = 0;
let currentQuiz = 0;
let timerSeconds = 0;
let timerId = null;
let penColor = "#ffffff";
let penSize = 8;
let drawing = false;
let laserMode = false;
let lastLaserTrail = 0;

const $ = (id) => document.getElementById(id);
const canvas = $("drawLayer");
const ctx = canvas.getContext("2d");

function setFocus(index) {
  currentFocus = index;
  currentQuiz = 0;
  const lesson = lessons[index];
  $("focusLabel").textContent = `教學焦點 ${index + 1}`;
  $("focusTitle").textContent = lesson.title;
  $("focusGoal").textContent = lesson.goal;
  $("summaryDeck").innerHTML = summaryDeckPages[index].map((page) => `
    <figure class="summary-slide">
      <img src="assets/percent-adventure-page-${String(page).padStart(2, "0")}.png" alt="百分率大冒險簡報第 ${page} 頁" loading="lazy">
      <figcaption>簡報第 ${page} 頁</figcaption>
    </figure>
  `).join("");
  $("practiceBody").innerHTML = lesson.practice.map((item, i) => `<article><strong>${i + 1}</strong><span>${item}</span></article>`).join("");
  renderVisual();
  renderQuiz();
  document.querySelectorAll(".focus-btn").forEach((btn, i) => btn.classList.toggle("active", i === index));
}

function renderVisual() {
  const type = lessons[currentFocus].visual;
  if (type === "ratio") ratioVisual();
  if (type === "percent") percentVisual();
  if (type === "convert") convertVisual();
  if (type === "apply") applyVisual();
  if (type === "discount") discountVisual();
  decorateVisual();
}

function decorateVisual() {
  const card = $("visualStage").querySelector(".visual-card");
  if (!card || card.querySelector(".visual-examples")) return;
  const type = lessons[currentFocus].visual;
  if (type === "apply") {
    card.insertAdjacentHTML("beforeend", `
      <div class="visual-examples">
        <article><strong>求部分量</strong><span>全班 25 題，答對率 96%，答對 25 × 96% = 24 題。</span></article>
        <article><strong>求百分率</strong><span>40 題答對 32 題，32 ÷ 40 = 80%。</span></article>
      </div>
    `);
  }
  if (type === "discount") {
    card.insertAdjacentHTML("beforeend", `
      <div class="visual-examples visual-scenarios">
        <article><strong>打折</strong><span>1200 元打七五折，付 1200 × 75% = 900 元。</span></article>
        <article><strong>off</strong><span>30% off 是少付 30%，所以付原價的 70%。</span></article>
        <article><strong>加成</strong><span>成本 1000 元加二成，售價是 1000 × 120% = 1200 元。</span></article>
      </div>
    `);
  }
}

function ratioVisual() {
  $("visualHint").textContent = "調整部分量與全體量，觀察直式分數、小數與百分率。";
  $("visualControls").innerHTML = rangeControl("part", "部分量", 0, 40, 12) + rangeControl("whole", "全體量", 1, 40, 25);
  const draw = () => {
    const whole = Math.max(1, Number($("whole").value));
    const part = Math.min(Number($("part").value), whole);
    $("part").value = part;
    const decimal = part / whole;
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <div class="visual-topline">
          <div class="large-fraction">${frac(part, whole)}</div>
          <p>小數 ${fmt(decimal)}　百分率 ${fmt(decimal * 100)}%</p>
        </div>
        <div class="tile-grid" style="--cols:${Math.min(10, whole)}">${tiles(whole, part)}</div>
      </div>`;
  };
  bindRanges(draw);
  draw();
}

function percentVisual() {
  $("visualHint").textContent = "拖動百分率，100格圖、直式分數與小數會同步改變。";
  $("visualControls").innerHTML = rangeControl("percent", "百分率", 0, 100, 35);
  const draw = () => {
    const p = Number($("percent").value);
    $("visualStage").innerHTML = `
      <div class="visual-card">
        <div class="visual-topline">
          <h3>${p}%</h3>
          <div class="large-fraction">${frac(p, 100)}</div>
          <p>小數 ${fmt(p / 100)}</p>
        </div>
        <div class="bar-track"><span style="width:${p}%"></span></div>
        <div class="tile-grid hundred" style="--cols:10">${tiles(100, p)}</div>
      </div>`;
  };
  bindRanges(draw);
  draw();
}

function convertVisual() {
  $("visualHint").textContent = "調整直式分數，練習分數、小數、百分率互換。";
  $("visualControls").innerHTML = rangeControl("num", "分子", 0, 20, 3) + rangeControl("den", "分母", 1, 20, 8);
  const draw = () => {
    const den = Math.max(1, Number($("den").value));
    const num = Math.min(Number($("num").value), den);
    $("num").value = num;
    const dec = num / den;
    $("visualStage").innerHTML = `
      <div class="visual-card convert-card">
        <div>${frac(num, den)}</div>
        <div><strong>小數</strong><b>${fmt(dec)}</b></div>
        <label>試填百分率 <input id="conversionGuess" inputmode="decimal" placeholder="輸入數字"></label>
        <button id="checkConversion">檢查</button>
        <p id="conversionFeedback">先用分子除以分母，再乘以100。</p>
      </div>`;
    $("checkConversion").addEventListener("click", () => {
      const guess = Number(($("conversionGuess").value || "").replace("%", ""));
      $("conversionFeedback").textContent = Math.abs(guess - dec * 100) < .05 ? "配對成功：轉換正確。" : `再想想：答案是 ${fmt(dec * 100)}%。`;
    });
  };
  bindRanges(draw);
  draw();
}

function applyVisual() {
  $("visualHint").textContent = "切換模式，判斷要求部分量或百分率。";
  $("visualControls").innerHTML = `<div class="segmented"><button class="active" data-mode="part">求部分量</button><button data-mode="rate">求百分率</button></div>` + rangeControl("whole", "整體量", 1, 100, 25) + rangeControl("percent", "百分率", 0, 100, 96) + rangeControl("part", "部分量", 0, 100, 24);
  let mode = "part";
  const draw = () => {
    const whole = Number($("whole").value);
    const p = Number($("percent").value);
    const part = Math.min(Number($("part").value), whole);
    const result = mode === "part" ? whole * p / 100 : part / whole * 100;
    $("visualStage").innerHTML = `<div class="visual-card"><h3>${mode === "part" ? `${whole} × ${p}% = ${fmt(result)}` : `${part} ÷ ${whole} = ${fmt(result)}%`}</h3><div class="bar-track"><span style="width:${mode === "part" ? p : result}%"></span></div></div>`;
  };
  document.querySelectorAll("[data-mode]").forEach((btn) => btn.addEventListener("click", () => {
    mode = btn.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("active", b === btn));
    draw();
  }));
  bindRanges(draw);
  draw();
}

function discountVisual() {
  $("visualHint").textContent = "輸入原價與百分率，顯示現價與省下多少。";
  $("visualControls").innerHTML = `<div class="segmented"><button class="active" data-kind="discount">打折</button><button data-kind="off">off</button><button data-kind="markup">加成</button></div>` + rangeControl("price", "原價/成本", 100, 10000, 1600) + rangeControl("rate", "百分率", 0, 120, 75);
  let kind = "discount";
  const draw = () => {
    const price = Number($("price").value);
    const rate = Number($("rate").value);
    const payRate = kind === "discount" ? rate : kind === "off" ? 100 - rate : 100 + rate;
    const now = price * payRate / 100;
    const save = price - now;
    $("visualStage").innerHTML = `<div class="visual-card price-card"><h3>${fmt(now)} 元</h3><p>實付比例 ${payRate}%</p><p>${save >= 0 ? `省下 ${fmt(save)} 元` : `增加 ${fmt(Math.abs(save))} 元`}</p><div class="bar-track"><span style="width:${Math.min(100, Math.max(0, payRate))}%"></span></div></div>`;
  };
  document.querySelectorAll("[data-kind]").forEach((btn) => btn.addEventListener("click", () => {
    kind = btn.dataset.kind;
    document.querySelectorAll("[data-kind]").forEach((b) => b.classList.toggle("active", b === btn));
    draw();
  }));
  bindRanges(draw);
  draw();
}

function renderQuiz() {
  const quiz = lessons[currentFocus].quiz[currentQuiz];
  $("quizStatus").textContent = `第 ${currentQuiz + 1} / ${lessons[currentFocus].quiz.length} 題`;
  $("quizType").textContent = quiz.type;
  $("quizQuestion").innerHTML = quiz.q;
  $("quizFeedback").textContent = "";
  $("quizFeedback").className = "quiz-feedback";
  if (quiz.mode === "fill") {
    $("quizAnswerArea").innerHTML = `<div class="fill-row"><input id="fillAnswer" inputmode="decimal" aria-label="填空答案"><button id="checkFill">檢查</button></div>`;
    $("checkFill").addEventListener("click", () => checkFill(quiz));
  } else if (quiz.mode === "drag") {
    renderDragQuiz(quiz);
  } else {
    $("quizAnswerArea").innerHTML = quiz.options.map((option, i) => `<button data-answer="${i}">${option}</button>`).join("");
    document.querySelectorAll("[data-answer]").forEach((btn) => btn.addEventListener("click", () => checkChoice(btn, quiz)));
  }
}

function renderDragQuiz(quiz) {
  $("quizAnswerArea").innerHTML = `
    <div class="drag-board">
      <div class="drag-bank">${quiz.pairs.map((pair, i) => `<button class="drag-card" data-index="${i}">${pair[0]}</button>`).join("")}</div>
      <div class="drop-grid">${quiz.targets.map((target) => `<div class="drop-target" data-target="${target}"><strong>${target}</strong><div class="drop-slot"></div></div>`).join("")}</div>
      <button id="checkDrag">檢查配對</button>
    </div>`;
  setupPointerDrag(quiz);
  $("checkDrag").addEventListener("click", () => checkDrag(quiz));
}

function setupPointerDrag(quiz) {
  document.querySelectorAll(".drag-card").forEach((card) => {
    let startParent = null;
    let ghost = null;
    card.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      startParent = card.parentElement;
      card.setPointerCapture(event.pointerId);
      ghost = card;
      ghost.classList.add("dragging");
      moveDragCard(ghost, event.clientX, event.clientY);
    });
    card.addEventListener("pointermove", (event) => {
      if (!ghost) return;
      event.preventDefault();
      moveDragCard(ghost, event.clientX, event.clientY);
      highlightDrop(event.clientX, event.clientY);
    });
    card.addEventListener("pointerup", (event) => {
      if (!ghost) return;
      const target = dropAt(event.clientX, event.clientY);
      ghost.classList.remove("dragging");
      ghost.style.left = "";
      ghost.style.top = "";
      if (target) {
        target.querySelector(".drop-slot").appendChild(ghost);
        target.classList.add("pulse");
        setTimeout(() => target.classList.remove("pulse"), 420);
      } else {
        startParent.appendChild(ghost);
        ghost.classList.add("bounce");
        setTimeout(() => ghost.classList.remove("bounce"), 420);
      }
      clearDropHighlight();
      ghost = null;
    });
    card.addEventListener("pointercancel", () => {
      if (ghost && startParent) startParent.appendChild(ghost);
      if (ghost) ghost.classList.remove("dragging");
      clearDropHighlight();
      ghost = null;
    });
  });
}

function moveDragCard(card, x, y) {
  card.style.left = `${x - card.offsetWidth / 2}px`;
  card.style.top = `${y - card.offsetHeight / 2}px`;
}

function dropAt(x, y) {
  return Array.from(document.querySelectorAll(".drop-target")).find((target) => {
    const rect = target.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  });
}

function highlightDrop(x, y) {
  clearDropHighlight();
  const target = dropAt(x, y);
  if (target) target.classList.add("over");
}

function clearDropHighlight() {
  document.querySelectorAll(".drop-target").forEach((target) => target.classList.remove("over"));
}

function checkDrag(quiz) {
  let correct = true;
  document.querySelectorAll(".drop-target").forEach((target) => {
    target.querySelectorAll(".drag-card").forEach((card) => {
      const expected = quiz.pairs[Number(card.dataset.index)][1];
      const ok = expected === target.dataset.target;
      card.classList.toggle("correct", ok);
      card.classList.toggle("wrong", !ok);
      if (!ok) correct = false;
    });
  });
  if (document.querySelectorAll(".drop-slot .drag-card").length !== quiz.pairs.length) correct = false;
  feedback(correct, quiz.feedback);
}

function checkChoice(button, quiz) {
  const selected = Number(button.dataset.answer);
  document.querySelectorAll("[data-answer]").forEach((btn) => {
    btn.disabled = true;
    btn.classList.toggle("correct", Number(btn.dataset.answer) === quiz.answer);
  });
  button.classList.toggle("wrong", selected !== quiz.answer);
  feedback(selected === quiz.answer, quiz.feedback);
}

function checkFill(quiz) {
  const value = normalize($("fillAnswer").value);
  const correct = quiz.answers.some((answer) => normalize(answer) === value);
  feedback(correct, quiz.feedback);
}

function feedback(correct, text) {
  $("quizFeedback").className = `quiz-feedback ${correct ? "good" : "retry"}`;
  $("quizFeedback").textContent = `${correct ? "配對成功。" : "再想想。"}${text}`;
  if (correct) showBigEffect("✓");
}

function rangeControl(id, label, min, max, value) {
  return `<label class="control">${label}<input id="${id}" type="range" min="${min}" max="${max}" value="${value}"><span id="${id}Value">${value}</span></label>`;
}

function bindRanges(callback) {
  document.querySelectorAll(".visual-controls input[type='range']").forEach((input) => input.addEventListener("input", () => {
    const value = $(`${input.id}Value`);
    if (value) value.textContent = input.value;
    callback();
    decorateVisual();
  }));
}

function tiles(total, active) {
  return Array.from({ length: total }, (_, i) => `<span class="tile ${i < active ? "on" : ""}"></span>`).join("");
}

function fmt(value) {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}

function normalize(value) {
  return String(value).trim().replace(/％/g, "%").replace(/\s/g, "");
}

function moveQuiz(delta) {
  const count = lessons[currentFocus].quiz.length;
  currentQuiz = (currentQuiz + delta + count) % count;
  renderQuiz();
}

function openDrawer(id) {
  document.querySelectorAll(".drawer").forEach((drawer) => drawer.classList.toggle("open", drawer.id === id && !drawer.classList.contains("open")));
}

function showBigEffect(text) {
  $("bigEffect").textContent = text;
  $("bigEffect").classList.remove("show");
  void $("bigEffect").offsetWidth;
  $("bigEffect").classList.add("show");
}

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(window.innerWidth * ratio);
  canvas.height = Math.round(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function enablePen(color = penColor) {
  penColor = color;
  disableLaser();
  document.body.classList.add("drawing");
  $("openPen").classList.add("active");
  document.querySelectorAll(".pen-color").forEach((btn) => btn.classList.toggle("active", btn.dataset.color === penColor));
}

function disablePen() {
  drawing = false;
  document.body.classList.remove("drawing");
  $("openPen").classList.remove("active");
}

function enableLaser() {
  disablePen();
  laserMode = true;
  document.body.classList.add("laser");
  $("openLaser").classList.add("active");
  $("laserToggle").textContent = "關閉雷射筆";
}

function disableLaser() {
  laserMode = false;
  document.body.classList.remove("laser");
  $("openLaser").classList.remove("active");
  $("laserToggle").textContent = "開啟雷射筆";
}

function addLaserTrail(x, y) {
  const now = performance.now();
  if (now - lastLaserTrail < 38) return;
  lastLaserTrail = now;
  const size = Number($("laserSize").value) || 54;
  const trail = document.createElement("span");
  trail.className = "laser-trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  trail.style.setProperty("--trail-size", `${size}px`);
  $("laserLayer").appendChild(trail);
  setTimeout(() => trail.remove(), 720);
}

function buildNames() {
  const start = Math.max(1, Number($("rangeStart").value) || 1);
  const end = Math.max(start, Number($("rangeEnd").value) || start);
  $("rangeEnd").value = end;
  $("namesInput").value = Array.from({ length: end - start + 1 }, (_, i) => String(start + i)).join("\n");
}

function updateTimer() {
  $("timerDisplay").textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:${String(timerSeconds % 60).padStart(2, "0")}`;
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
  $("timerToggle").textContent = "開始";
}

document.querySelectorAll(".focus-btn").forEach((btn) => btn.addEventListener("click", () => setFocus(Number(btn.dataset.focus))));
$("prevQuiz").addEventListener("click", () => moveQuiz(-1));
$("nextQuiz").addEventListener("click", () => moveQuiz(1));
$("resetQuiz").addEventListener("click", renderQuiz);
$("openPen").addEventListener("click", () => openDrawer("penDrawer"));
$("openLaser").addEventListener("click", () => openDrawer("laserDrawer"));
$("openTools").addEventListener("click", () => openDrawer("toolDrawer"));
document.querySelectorAll(".close-drawer").forEach((btn) => btn.addEventListener("click", () => $(btn.dataset.close).classList.remove("open")));

document.querySelectorAll(".pen-color").forEach((btn) => btn.addEventListener("click", () => enablePen(btn.dataset.color)));
$("penSize").addEventListener("input", (event) => penSize = Number(event.target.value));
$("clearInk").addEventListener("click", () => ctx.clearRect(0, 0, window.innerWidth, window.innerHeight));
$("closePenMode").addEventListener("click", disablePen);

canvas.addEventListener("pointerdown", (event) => {
  if (!document.body.classList.contains("drawing")) return;
  event.preventDefault();
  drawing = true;
  canvas.setPointerCapture(event.pointerId);
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
});
canvas.addEventListener("pointermove", (event) => {
  if (!drawing || !document.body.classList.contains("drawing")) return;
  event.preventDefault();
  ctx.strokeStyle = penColor;
  ctx.lineWidth = penSize;
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
});
canvas.addEventListener("pointerup", (event) => {
  drawing = false;
  try { canvas.releasePointerCapture(event.pointerId); } catch {}
});
canvas.addEventListener("pointercancel", () => drawing = false);

$("laserToggle").addEventListener("click", () => laserMode ? disableLaser() : enableLaser());
$("laserSize").addEventListener("input", (event) => document.documentElement.style.setProperty("--laser-size", `${event.target.value}px`));
document.addEventListener("pointermove", (event) => {
  if (!laserMode) return;
  $("laserDot").style.left = `${event.clientX}px`;
  $("laserDot").style.top = `${event.clientY}px`;
  addLaserTrail(event.clientX, event.clientY);
});
document.addEventListener("pointerdown", (event) => {
  if (!laserMode) return;
  $("laserDot").style.left = `${event.clientX}px`;
  $("laserDot").style.top = `${event.clientY}px`;
  addLaserTrail(event.clientX, event.clientY);
});

$("buildNames").addEventListener("click", buildNames);
$("rangeStart").addEventListener("change", buildNames);
$("rangeEnd").addEventListener("change", buildNames);
$("drawName").addEventListener("click", () => {
  const names = $("namesInput").value.split(/\n|,|，/).map((n) => n.trim()).filter(Boolean);
  const picked = names.length ? names[Math.floor(Math.random() * names.length)] : "請先輸入名單";
  $("drawResult").textContent = picked;
  showBigEffect(picked);
});
document.querySelectorAll("[data-sec]").forEach((btn) => btn.addEventListener("click", () => {
  timerSeconds = Number(btn.dataset.sec);
  updateTimer();
}));
$("setCustomTime").addEventListener("click", () => {
  timerSeconds = Math.max(1, Number($("customMinutes").value) || 1) * 60;
  updateTimer();
});
$("timerToggle").addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    return;
  }
  timerId = setInterval(() => {
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

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
buildNames();
updateTimer();
setFocus(0);
