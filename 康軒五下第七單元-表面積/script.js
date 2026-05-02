const infoImageVersion = "20260502-2031";

const lessons = [
  {
    title: "認識表面積",
    goal: "把立體形體每一個面展開，理解所有面的面積總和就是表面積。",
    infoImages: ["assets/deck-page-01.png", "assets/deck-page-02.png"],
    quiz: {
      q: "什麼是表面積？",
      options: ["立體形體所有面的面積總和", "立體形體裡面能裝多少", "立體形體最長邊的長度"],
      answer: 0,
      feedback: "對，表面積就是所有外面的面積加起來。"
    }
  },
  {
    title: "正方體表面積",
    goal: "點選正方體的面，把每一個面的算式收集起來。",
    infoImages: ["assets/deck-page-03.png", "assets/deck-page-04.png"],
    quiz: {
      q: "邊長 4 公分的正方體，表面積是多少？",
      options: ["16 平方公分", "64 平方公分", "96 平方公分"],
      answer: 2,
      feedback: "對。4 × 4 = 16，一共有 6 個面，所以 16 × 6 = 96。"
    }
  },
  {
    title: "長方體表面積",
    goal: "上下、前後、左右三組相對面用同色表示，再把三組面積加起來。",
    infoImages: ["assets/deck-page-05.png", "assets/deck-page-06.png", "assets/deck-page-07.png"],
    quiz: {
      q: "長 5、寬 3、高 2 的長方體，有幾個面要算？",
      options: ["3 個", "6 個", "8 個"],
      answer: 1,
      feedback: "對。長方體有 6 個外面，要全部納入表面積。"
    }
  },
  {
    title: "切開後變化",
    goal: "每切一刀會多出兩個新的正方形或長方形切面，紅色表示新增表面積。",
    infoImages: ["assets/deck-page-08.png"],
    quiz: {
      q: "把長方體切成兩半後，表面積為什麼會增加？",
      options: ["因為多了新的切面", "因為體積變大", "因為每個邊都變長"],
      answer: 0,
      feedback: "對。切口變成新的外面，所以表面積增加。"
    }
  },
  {
    title: "堆疊後變化",
    goal: "重疊在一起的接觸面看不見，紅色標示要扣掉的隱藏面。",
    infoImages: ["assets/deck-page-09.png", "assets/deck-page-10.png", "assets/deck-page-11.png", "assets/deck-page-12.png", "assets/deck-page-13.png"],
    quiz: {
      q: "兩個相同正方體貼在一起時，哪一些面不用算？",
      options: ["兩個接觸的面", "最上面的兩個面", "所有側面"],
      answer: 0,
      feedback: "對。貼在一起的兩個面看不見，所以不算外表面。"
    }
  }
];

let currentFocus = 0;
let timerSeconds = 0;
let timerId = null;
let penColor = "#ffffff";
let penSize = 7;
let drawing = false;
let laserMode = false;
let selectedFaces = new Set();
let cubeExpanded = false;
let cuboidExpanded = false;
let cubeEdge = 4;
let cuboidL = 5;
let cuboidW = 3;
let cuboidH = 2;

const $ = (id) => document.getElementById(id);

function setFocus(index) {
  currentFocus = index;
  selectedFaces = new Set();
  cubeExpanded = false;
  cuboidExpanded = false;
  cubeEdge = 4;
  cuboidL = 5;
  cuboidW = 3;
  cuboidH = 2;
  const lesson = lessons[index];
  $("focusLabel").textContent = `教學重點 ${index + 1}`;
  $("focusTitle").textContent = lesson.title;
  $("focusGoal").textContent = lesson.goal;
  renderInfoImages(lesson.infoImages);
  $("quizQuestion").textContent = lesson.quiz.q;
  $("quizStatus").textContent = "尚未作答";
  $("quizFeedback").textContent = "";
  document.querySelector(".quiz-panel")?.classList.remove("correct");
  renderQuiz();
  renderVisual();
  document.querySelectorAll(".focus-btn").forEach((btn, i) => btn.classList.toggle("active", i === index));
}

function renderInfoImages(images) {
  $("infoFrames").innerHTML = images.map((src, index) => (
    `<img src="${src}?v=${infoImageVersion}" alt="重點整理 ${index + 1}">`
  )).join("");
  $("infoLink").href = `${images[0]}?v=${infoImageVersion}`;
}

function renderQuiz() {
  const quiz = lessons[currentFocus].quiz;
  $("quizOptions").innerHTML = quiz.options.map((option, index) => (
    `<button data-answer="${index}">${option}</button>`
  )).join("");
}

function answerQuiz(index) {
  const quiz = lessons[currentFocus].quiz;
  const correct = index === quiz.answer;
  $("quizStatus").textContent = correct ? "答對" : "再想想";
  $("quizFeedback").textContent = correct ? quiz.feedback : "提示：先回到上面的圖，找出看得到或看不見的面。";
  if (correct) {
    const panel = document.querySelector(".quiz-panel");
    panel.classList.remove("correct");
    void panel.offsetWidth;
    panel.classList.add("correct");
    showBigEffect("✓");
  }
}

function renderVisual() {
  const stage = $("visualStage");
  const controls = $("visualControls");
  controls.className = "visual-controls";
  if (currentFocus === 0) {
    stage.innerHTML = `<div class="visual-wrap">${netSvg(6)}${formulaBox(["表面積 = 面1 + 面2 + 面3 + 面4 + 面5 + 面6"])}</div>`;
    controls.innerHTML = rangeControl("faces", "目前選取面數", 1, 6, 6) + resultBox("所有外面的面積加起來");
    bindRange("faces", (faces) => {
      stage.innerHTML = `<div class="visual-wrap">${netSvg(faces)}${formulaBox([`目前收集 ${faces} 個面`, faces === 6 ? "所有面都收集完成" : "還有外面沒有算到"])}</div>`;
      $("result").textContent = faces === 6 ? "完成：6 個面全部納入" : `還差 ${6 - faces} 個面`;
    });
    $("visualHint").textContent = "調整面數，觀察表面積要收集所有外面";
  } else if (currentFocus === 1) {
    controls.classList.add("compact-inputs");
    stage.innerHTML = cubeInteractive(cubeEdge, cubeExpanded);
    controls.innerHTML = numberControl("edge", "邊長", 1, 99, cubeEdge) + actionButton("toggleCubeNet", cubeExpanded ? "回到正方體" : "展開圖") + resultBox(cubeResultText());
    bindNumber("edge", (value) => { cubeEdge = value; selectedFaces = new Set(); refreshCube(); });
    $("toggleCubeNet").addEventListener("click", () => { cubeExpanded = !cubeExpanded; refreshCube(); });
    $("visualHint").textContent = "按下展開圖，查看 6 個相同正方形";
  } else if (currentFocus === 2) {
    controls.classList.add("vertical-inputs");
    stage.innerHTML = cuboidInteractive(cuboidL, cuboidW, cuboidH, cuboidExpanded);
    controls.innerHTML = numberControl("long", "長", 1, 99, cuboidL) + numberControl("wide", "寬", 1, 99, cuboidW) + numberControl("high", "高", 1, 99, cuboidH) + actionButton("toggleCuboidNet", cuboidExpanded ? "回到長方體" : "展開圖") + resultBox(cuboidResultText());
    bindNumber("long", (value) => { cuboidL = value; selectedFaces = new Set(); refreshCuboid(); });
    bindNumber("wide", (value) => { cuboidW = value; selectedFaces = new Set(); refreshCuboid(); });
    bindNumber("high", (value) => { cuboidH = value; selectedFaces = new Set(); refreshCuboid(); });
    $("toggleCuboidNet").addEventListener("click", () => { cuboidExpanded = !cuboidExpanded; refreshCuboid(); });
    $("visualHint").textContent = "按下展開圖，查看相對面關係";
  } else if (currentFocus === 3) {
    stage.innerHTML = cutSvg(0);
    controls.innerHTML = rangeControl("cuts", "切幾刀", 0, 3, 0) + resultBox("尚未切開");
    bindRange("cuts", (cuts) => {
      stage.innerHTML = cutSvg(cuts);
      $("result").textContent = cuts === 0 ? "尚未切開" : `切 ${cuts} 刀，新增 ${cuts * 2} 個紅色切面`;
    });
    $("visualHint").textContent = "紅色長方形就是新增表面積";
  } else {
    stage.innerHTML = stackSvg(1);
    controls.innerHTML = rangeControl("blocks", "積木數", 1, 4, 1) + resultBox("1 個積木，沒有接觸面");
    bindRange("blocks", (blocks) => {
      stage.innerHTML = stackSvg(blocks);
      const contacts = Math.max(0, blocks - 1);
      $("result").textContent = blocks === 1 ? "1 個積木，沒有接觸面" : `${blocks} 個積木，少算 ${contacts * 2} 個接觸面`;
    });
    $("visualHint").textContent = "紅色面是被藏起來、要扣掉的接觸面";
  }
}

function rangeControl(id, label, min, max, value) {
  return `<label class="control">
    <span class="control-label"><span>${label}</span><span id="${id}Value" class="control-value">${value}</span></span>
    <input id="${id}" type="range" min="${min}" max="${max}" value="${value}">
  </label>`;
}

function numberControl(id, label, min, max, value) {
  return `<label class="control number-control">
    <span class="number-label">${label}:</span>
    <span class="number-sentence">
    <input id="${id}" type="number" min="${min}" max="${max}" value="${value}">
    公分</span>
  </label>`;
}

function actionButton(id, label) {
  return `<div class="control action-control"><button id="${id}" type="button">${label}</button></div>`;
}

function bindRange(id, onInput) {
  const input = $(id);
  const value = $(`${id}Value`);
  input.addEventListener("input", (event) => {
    if (value) value.textContent = event.target.value;
    onInput(Number(event.target.value));
  });
}

function bindNumber(id, onInput) {
  const input = $(id);
  input.addEventListener("input", (event) => {
    const min = Number(event.target.min);
    const max = Number(event.target.max);
    const value = Math.min(max, Math.max(min, Number(event.target.value) || min));
    onInput(value);
  });
  input.addEventListener("change", (event) => {
    const min = Number(event.target.min);
    const max = Number(event.target.max);
    event.target.value = Math.min(max, Math.max(min, Number(event.target.value) || min));
  });
}

function resultBox(text) {
  return `<div class="control result-box"><strong>即時結果</strong><span id="result">${text}</span></div>`;
}

function formulaBox(lines) {
  return `<div class="formula-list">${lines.map(line => `<div>${line}</div>`).join("")}</div>`;
}

function cubeResultText() {
  const area = cubeEdge * cubeEdge;
  return `表面積 = ${cubeEdge} × ${cubeEdge} × 6 = ${area * 6} 平方公分`;
}

function cuboidResultText() {
  const top = cuboidL * cuboidW;
  const front = cuboidL * cuboidH;
  const side = cuboidW * cuboidH;
  return `表面積 = (${top} + ${front} + ${side}) × 2 = ${2 * (top + front + side)} 平方公分`;
}

function refreshCube() {
  $("visualStage").innerHTML = cubeInteractive(cubeEdge, cubeExpanded);
  $("result").textContent = cubeResultText();
}

function refreshCuboid() {
  $("visualStage").innerHTML = cuboidInteractive(cuboidL, cuboidW, cuboidH, cuboidExpanded);
  $("result").textContent = cuboidResultText();
}

function faceFill(id, color) {
  return selectedFaces.has(id) ? color : "rgba(255,255,255,.08)";
}

function cubeFaceFill(id) {
  return selectedFaces.has(id) ? "rgba(255,227,111,.62)" : "rgba(255,255,255,.08)";
}

function cubeInteractive(edge, expanded = false) {
  const area = edge * edge;
  const formulas = [
    `每個面：${edge} × ${edge} = ${area} 平方公分`,
    `6 個面合計：${area} × 6 = ${area * 6} 平方公分`
  ];
  const visual = expanded ? cubeNetSvg(edge) : cubeSolidSvg(edge);
  return `<div class="visual-wrap">
    ${visual}
    ${formulaBox(formulas)}
  </div>`;
}

function cubeHybridSvg(edge, progress, hRotate, vRotate) {
  const t = progress / 100;
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cube">
    <g opacity="${1 - t * .82}" transform="translate(380 250) rotate(${hRotate}) skewY(${vRotate / 7}) scale(${1 - t * .18}) translate(-380 -250)">
      ${cubeSolidBody(edge)}
    </g>
    <g opacity="${t}" transform="translate(380 260) scale(${.72 + t * .28}) translate(-380 -260)">
      ${cubeNetBody(edge)}
    </g>
    <text x="380" y="60" text-anchor="middle" fill="#ffe36f" font-size="38">${progress < 100 ? `邊長 ${edge}` : `正方體完全展開圖：6 個邊長 ${edge} 的正方形`}</text>
    <text x="380" y="485" text-anchor="middle" fill="#9ee6ff" font-size="32">表面積 = ${edge} × ${edge} × 6 = ${edge * edge * 6}</text>
  </svg>`;
}

function cubeSolidBody(edge) {
  return `
    <polygon data-face="1" class="face" points="250,165 380,105 510,165 380,235" fill="${cubeFaceFill(1)}" stroke="#fff7d6" stroke-width="7"/>
    <polygon data-face="2" class="face" points="250,165 250,330 380,405 380,235" fill="${cubeFaceFill(2)}" stroke="#fff7d6" stroke-width="7"/>
    <polygon data-face="3" class="face" points="510,165 510,330 380,405 380,235" fill="${cubeFaceFill(3)}" stroke="#fff7d6" stroke-width="7"/>`;
}

function cubeNetBody(edge) {
  const cells = [[1,0], [0,1], [1,1], [2,1], [3,1], [1,2]];
  return cells.map(([x, y], i) => {
    const id = i + 1;
    return `<rect data-face="${id}" class="face" x="${170 + x * 104}" y="${82 + y * 96}" width="96" height="88" fill="${cubeFaceFill(id)}" stroke="#fff7d6" stroke-width="5"/><text x="${218 + x * 104}" y="${134 + y * 96}" text-anchor="middle" fill="#fff7d6" font-size="28">面${id}</text>`;
  }).join("");
}

function cubeSolidSvg(edge) {
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cube">
    ${cubeSolidBody(edge)}
    <text x="380" y="70" text-anchor="middle" fill="#ffe36f" font-size="44">邊長 ${edge}</text>
    <text x="380" y="485" text-anchor="middle" fill="#9ee6ff" font-size="34">按下展開圖，觀察 6 個相同正方形</text>
  </svg>`;
}

function cubeNetSvg(edge) {
  const cells = [[1,0], [0,1], [1,1], [2,1], [3,1], [1,2]];
  const rects = cells.map(([x, y], i) => {
    const id = i + 1;
    return `<rect data-face="${id}" class="face" x="${170 + x * 104}" y="${82 + y * 96}" width="96" height="88" fill="${cubeFaceFill(id)}" stroke="#fff7d6" stroke-width="5"/><text x="${218 + x * 104}" y="${134 + y * 96}" text-anchor="middle" fill="#fff7d6" font-size="28">面${id}</text>`;
  }).join("");
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cube">
    ${rects}
    <text x="380" y="60" text-anchor="middle" fill="#ffe36f" font-size="38">正方體完全展開圖：6 個邊長 ${edge} 的正方形</text>
    <text x="380" y="485" text-anchor="middle" fill="#9ee6ff" font-size="34">表面積 = ${edge} × ${edge} × 6</text>
  </svg>`;
}

function cuboidInteractive(l, w, h, expanded = false) {
  const faceData = [
    [1, "上面", `${l} × ${w} = ${l * w}`, "rgba(255,227,111,.62)"],
    [2, "下面", `${l} × ${w} = ${l * w}`, "rgba(255,227,111,.62)"],
    [3, "前面", `${l} × ${h} = ${l * h}`, "rgba(158,230,255,.52)"],
    [4, "後面", `${l} × ${h} = ${l * h}`, "rgba(158,230,255,.52)"],
    [5, "左面", `${w} × ${h} = ${w * h}`, "rgba(255,91,91,.48)"],
    [6, "右面", `${w} × ${h} = ${w * h}`, "rgba(255,91,91,.48)"]
  ];
  const formulas = [
    `上下：${l} × ${w} × 2 = ${l * w * 2}`,
    `前後：${l} × ${h} × 2 = ${l * h * 2}`,
    `左右：${w} × ${h} × 2 = ${w * h * 2}`,
    `總表面積 = ${2 * (l * w + l * h + w * h)} 平方公分`
  ];
  const visual = expanded ? cuboidNetSvg(l, w, h) : cuboidSolidSvg(l, w, h);
  return `<div class="visual-wrap">
    ${visual}
    ${formulaBox(formulas)}
  </div>`;
}

function cuboidHybridSvg(l, w, h, progress, hRotate, vRotate) {
  const t = progress / 100;
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cuboid">
    <g opacity="${1 - t * .82}" transform="translate(380 255) rotate(${hRotate}) skewY(${vRotate / 8}) scale(${1 - t * .18}) translate(-380 -255)">
      ${cuboidSolidBody(l, w, h)}
    </g>
    <g opacity="${t}" transform="translate(380 260) scale(${.72 + t * .28}) translate(-380 -260)">
      ${cuboidNetBody(l, w, h)}
    </g>
    <text x="380" y="62" text-anchor="middle" fill="#ffe36f" font-size="36">${progress < 100 ? `長 ${l}、寬 ${w}、高 ${h}` : "長方體完全展開圖"}</text>
    <text x="380" y="472" text-anchor="middle" fill="#9ee6ff" font-size="28">表面積 = (${l}×${w} + ${l}×${h} + ${w}×${h}) × 2 = ${2 * (l * w + l * h + w * h)}</text>
  </svg>`;
}

function cuboidSolidSvg(l, w, h) {
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cuboid">
      ${cuboidSolidBody(l, w, h)}
      <text x="380" y="70" text-anchor="middle" fill="#ffe36f" font-size="42">長 ${l}、寬 ${w}、高 ${h}</text>
      <text x="380" y="486" text-anchor="middle" fill="#9ee6ff" font-size="34">黃：上下　藍：前後　紅：左右</text>
    </svg>`;
}

function cuboidSolidBody(l, w, h) {
  const width = 70 + l * 34;
  const height = 84 + h * 42;
  const depthX = 42 + w * 18;
  const depthY = 24 + w * 12;
  const x = 270;
  const y = 190;
  const p1 = `${x},${y}`;
  const p2 = `${x + width},${y}`;
  const p3 = `${x + width},${y + height}`;
  const p4 = `${x},${y + height}`;
  const p5 = `${x + depthX},${y - depthY}`;
  const p6 = `${x + width + depthX},${y - depthY}`;
  const p7 = `${x + width + depthX},${y + height - depthY}`;
  const p8 = `${x + depthX},${y + height - depthY}`;
  return `<g>
        <polygon data-face="4" class="face" points="${p5} ${p6} ${p7} ${p8}" fill="${faceFill(4, "rgba(158,230,255,.42)")}" stroke="#fff7d6" stroke-width="5" opacity=".7"/>
        <polygon data-face="2" class="face" points="${p4} ${p3} ${p7} ${p8}" fill="${faceFill(2, "rgba(255,227,111,.45)")}" stroke="#fff7d6" stroke-width="5" opacity=".7"/>
        <polygon data-face="6" class="face" points="${p1} ${p5} ${p8} ${p4}" fill="${faceFill(6, "rgba(255,91,91,.38)")}" stroke="#fff7d6" stroke-width="5" opacity=".7"/>
        <polygon data-face="3" class="face" points="${p1} ${p2} ${p3} ${p4}" fill="${faceFill(3, "rgba(158,230,255,.52)")}" stroke="#fff7d6" stroke-width="7"/>
        <polygon data-face="5" class="face" points="${p2} ${p6} ${p7} ${p3}" fill="${faceFill(5, "rgba(255,91,91,.48)")}" stroke="#fff7d6" stroke-width="7"/>
        <polygon data-face="1" class="face" points="${p1} ${p2} ${p6} ${p5}" fill="${faceFill(1, "rgba(255,227,111,.62)")}" stroke="#fff7d6" stroke-width="7"/>
      </g>`;
}

function cuboidNetSvg(l, w, h) {
  return `<svg class="chalk-svg clickable-cube" viewBox="0 0 760 520" data-shape="cuboid">
    ${cuboidNetBody(l, w, h)}
    <text x="380" y="62" text-anchor="middle" fill="#ffe36f" font-size="36">長方體完全展開圖</text>
    <text x="380" y="472" text-anchor="middle" fill="#9ee6ff" font-size="30">上下：${l}×${w}　前後：${l}×${h}　左右：${w}×${h}</text>
  </svg>`;
}

function cuboidNetBody(l, w, h) {
  const x = 118;
  const y = 196;
  const lw = 210;
  const wh = 118;
  const lh = 210;
  const hh = 92;
  return `
    <rect data-face="3" class="face" x="${x + wh}" y="${y}" width="${lw}" height="${hh}" fill="${faceFill(3, "rgba(158,230,255,.52)")}" stroke="#fff7d6" stroke-width="5"/>
    <rect data-face="5" class="face" x="${x}" y="${y}" width="${wh}" height="${hh}" fill="${faceFill(5, "rgba(255,91,91,.48)")}" stroke="#fff7d6" stroke-width="5"/>
    <rect data-face="6" class="face" x="${x + wh + lw}" y="${y}" width="${wh}" height="${hh}" fill="${faceFill(6, "rgba(255,91,91,.38)")}" stroke="#fff7d6" stroke-width="5"/>
    <rect data-face="4" class="face" x="${x + wh + lw + wh}" y="${y}" width="${lw}" height="${hh}" fill="${faceFill(4, "rgba(158,230,255,.42)")}" stroke="#fff7d6" stroke-width="5"/>
    <rect data-face="1" class="face" x="${x + wh}" y="${y - lh / 2}" width="${lw}" height="${lh / 2}" fill="${faceFill(1, "rgba(255,227,111,.62)")}" stroke="#fff7d6" stroke-width="5"/>
    <rect data-face="2" class="face" x="${x + wh}" y="${y + hh}" width="${lw}" height="${lh / 2}" fill="${faceFill(2, "rgba(255,227,111,.45)")}" stroke="#fff7d6" stroke-width="5"/>`;
}

function netSvg(active) {
  const cells = [[1,0], [0,1], [1,1], [2,1], [3,1], [1,2]];
  const rects = cells.map(([x, y], i) => `<rect x="${150 + x * 105}" y="${60 + y * 90}" width="100" height="82" fill="${i < active ? "rgba(255,227,111,.22)" : "transparent"}" stroke="#fff7d6" stroke-width="5"/><text x="${200 + x * 105}" y="${112 + y * 90}" text-anchor="middle" fill="#fff7d6" font-size="28">面${i + 1}</text>`).join("");
  return `<svg class="chalk-svg" viewBox="0 0 760 520">${rects}<text x="380" y="472" text-anchor="middle" fill="#9ee6ff" font-size="38">所有外面的面積加起來</text></svg>`;
}

function cutSvg(cuts) {
  const blockWidth = 420 / (cuts + 1);
  const blocks = Array.from({ length: cuts + 1 }, (_, i) => {
    const x = 165 + i * (blockWidth + 18);
    const redLeft = cuts > 0 && i > 0 ? `<polygon points="${x},180 ${x + 48},154 ${x + 48},320 ${x},348" fill="rgba(255,91,91,.7)" stroke="#ff5b5b" stroke-width="5"/>` : "";
    const redRight = cuts > 0 && i < cuts ? `<polygon points="${x + blockWidth},180 ${x + blockWidth + 48},154 ${x + blockWidth + 48},320 ${x + blockWidth},348" fill="rgba(255,91,91,.7)" stroke="#ff5b5b" stroke-width="5"/>` : "";
    return `<g>
      <polygon points="${x},180 ${x + blockWidth},180 ${x + blockWidth + 48},154 ${x + 48},154" fill="rgba(255,255,255,.05)" stroke="#fff7d6" stroke-width="6"/>
      <polygon points="${x},180 ${x + blockWidth},180 ${x + blockWidth},348 ${x},348" fill="rgba(255,255,255,.04)" stroke="#fff7d6" stroke-width="6"/>
      <polygon points="${x + blockWidth},180 ${x + blockWidth + 48},154 ${x + blockWidth + 48},320 ${x + blockWidth},348" fill="rgba(255,255,255,.03)" stroke="#fff7d6" stroke-width="6"/>
      ${redLeft}${redRight}
    </g>`;
  }).join("");
  const caption = cuts === 0 ? "還沒切：沒有新增切面" : `切 ${cuts} 刀，新增 ${cuts * 2} 個紅色切面`;
  return `<svg class="chalk-svg" viewBox="0 0 760 520">
    ${blocks}
    <text x="380" y="456" text-anchor="middle" fill="#9ee6ff" font-size="38">${caption}</text>
    <text x="380" y="498" text-anchor="middle" fill="#ffe36f" font-size="28">紅色是切開後露出來的新外表面</text>
  </svg>`;
}

function cubeBlock(x, y) {
  return `<g>
    <polygon points="${x},${y} ${x + 78},${y - 42} ${x + 156},${y} ${x + 78},${y + 44}" fill="rgba(255,255,255,.04)" stroke="#fff7d6" stroke-width="6"/>
    <polygon points="${x},${y} ${x},${y + 94} ${x + 78},${y + 140} ${x + 78},${y + 44}" fill="rgba(255,255,255,.03)" stroke="#fff7d6" stroke-width="6"/>
    <polygon points="${x + 156},${y} ${x + 156},${y + 94} ${x + 78},${y + 140} ${x + 78},${y + 44}" fill="rgba(255,255,255,.035)" stroke="#fff7d6" stroke-width="6"/>
  </g>`;
}

function stackSvg(blocks) {
  const x = 302;
  const baseY = 318;
  const pieces = Array.from({ length: blocks }, (_, i) => cubeBlock(x, baseY - i * 92)).join("");
  const contactFaces = Array.from({ length: Math.max(0, blocks - 1) }, (_, i) => {
    const y = baseY - i * 92;
    return `<polygon points="${x},${y} ${x + 78},${y - 42} ${x + 156},${y} ${x + 78},${y + 44}" fill="rgba(255,91,91,.62)" stroke="#ff5b5b" stroke-width="6"/>`;
  }).join("");
  const contacts = Math.max(0, blocks - 1);
  const caption = blocks === 1 ? "1 個積木，沒有接觸面" : `${blocks} 個積木疊在一起，紅色為 ${contacts * 2} 個接觸面`;
  return `<svg class="chalk-svg" viewBox="0 0 760 520">
    ${pieces}
    ${contactFaces}
    <text x="380" y="462" text-anchor="middle" fill="#9ee6ff" font-size="36">${caption}</text>
    <text x="380" y="500" text-anchor="middle" fill="#ffe36f" font-size="28">接觸面藏在中間，計算表面積時要扣掉</text>
  </svg>`;
}

document.querySelectorAll(".focus-btn").forEach((btn, index) => btn.addEventListener("click", () => setFocus(index)));

$("quizOptions").addEventListener("click", (event) => {
  if (event.target.matches("button")) answerQuiz(Number(event.target.dataset.answer));
});

$("visualStage").addEventListener("click", (event) => {
  const face = event.target.closest(".face");
  if (!face) return;
  const id = Number(face.dataset.face);
  selectedFaces.has(id) ? selectedFaces.delete(id) : selectedFaces.add(id);
  if (currentFocus === 1) refreshCube();
  if (currentFocus === 2) refreshCuboid();
});

function openDrawer(id) {
  document.querySelectorAll(".drawer").forEach(drawer => drawer.classList.toggle("open", drawer.id === id && !drawer.classList.contains("open")));
}

$("openPen").addEventListener("click", () => openDrawer("penDrawer"));
$("openTools").addEventListener("click", () => openDrawer("toolDrawer"));
document.querySelectorAll(".close-drawer").forEach(btn => btn.addEventListener("click", () => $(btn.dataset.close).classList.remove("open")));

function buildNames() {
  const start = Math.max(1, Number($("rangeStart").value) || 1);
  const end = Math.max(start, Number($("rangeEnd").value) || 25);
  $("namesInput").value = Array.from({ length: end - start + 1 }, (_, i) => `${start + i}號`).join("\n");
}

$("buildNames").addEventListener("click", buildNames);
buildNames();

$("drawName").addEventListener("click", () => {
  const names = $("namesInput").value.split(/\n|,|，/).map(n => n.trim()).filter(Boolean);
  const picked = names.length ? names[Math.floor(Math.random() * names.length)] : "請先輸入名單";
  $("drawResult").textContent = picked;
  showBigEffect(picked);
});

function showBigEffect(text) {
  $("bigEffect").innerHTML = `<div class="effect-circle">${text}</div>`;
  $("bigEffect").classList.add("show");
  setTimeout(() => $("bigEffect").classList.remove("show"), 520);
}

function showTimeUpEffect() {
  $("bigEffect").innerHTML = `<div class="effect-bell" aria-label="時間到">
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 14c-18 0-31 13-31 33v20L18 83v9h84v-9L91 67V47c0-20-13-33-31-33Z"></path>
      <path d="M47 99c3 7 7 10 13 10s10-3 13-10"></path>
      <path class="bell-lines" d="M24 26 11 39M96 26l13 13"></path>
    </svg>
  </div>`;
  $("bigEffect").classList.add("show");
  playBell();
  setTimeout(() => $("bigEffect").classList.remove("show"), 3000);
}

function playBell() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const audio = new AudioContext();
  const endAt = audio.currentTime + 3;
  let start = audio.currentTime;
  while (start < endAt) {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, start);
    osc.frequency.exponentialRampToValueAtTime(1320, start + 0.12);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.28, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);
    osc.connect(gain).connect(audio.destination);
    osc.start(start);
    osc.stop(start + 0.45);
    start += 0.62;
  }
  setTimeout(() => audio.close(), 3400);
}

document.querySelectorAll("[data-sec]").forEach(btn => btn.addEventListener("click", () => {
  timerSeconds = Number(btn.dataset.sec);
  updateTimer();
}));

$("setCustomTime").addEventListener("click", () => {
  timerSeconds = Math.max(1, Number($("customMinutes").value) || 1) * 60;
  updateTimer();
});

$("timerToggle").addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    $("timerToggle").textContent = "開始";
    return;
  }
  timerId = setInterval(() => {
    if (timerSeconds > 0) timerSeconds -= 1;
    updateTimer();
    if (timerSeconds === 0) {
      clearInterval(timerId);
      timerId = null;
      $("timerToggle").textContent = "開始";
      showTimeUpEffect();
    }
  }, 1000);
  $("timerToggle").textContent = "暫停";
});

$("timerReset").addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerSeconds = 0;
  $("timerToggle").textContent = "開始";
  updateTimer();
});

function updateTimer() {
  const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const s = String(timerSeconds % 60).padStart(2, "0");
  $("timerDisplay").textContent = `${m}:${s}`;
}

const canvas = $("drawLayer");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const saved = ctx.getImageData(0, 0, canvas.width || 1, canvas.height || 1);
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  try { ctx.putImageData(saved, 0, 0); } catch {}
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

$("penSize").addEventListener("input", (event) => penSize = Number(event.target.value));

function activatePen() {
  document.body.classList.add("drawing");
  document.body.classList.remove("laser");
  laserMode = false;
  $("laserToggle").textContent = "開啟雷射筆";
}

$("laserToggle").addEventListener("click", () => {
  laserMode = !laserMode;
  document.body.classList.toggle("laser", laserMode);
  document.body.classList.remove("drawing");
  $("laserToggle").textContent = laserMode ? "關閉雷射筆" : "開啟雷射筆";
});

$("laserSize").addEventListener("input", (event) => {
  $("laserDot").style.width = `${event.target.value}px`;
  $("laserDot").style.height = `${event.target.value}px`;
});

function addLaserTrail(x, y) {
  const size = Number($("laserSize").value) || 42;
  const trail = document.createElement("span");
  trail.className = "laser-trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  trail.style.width = `${size}px`;
  trail.style.height = `${size}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 520);
}

$("clearInk").addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

document.querySelectorAll(".pen-color").forEach(btn => btn.addEventListener("click", () => {
  penColor = btn.dataset.color;
  activatePen();
  document.querySelectorAll(".pen-color").forEach(item => item.classList.toggle("active", item === btn));
}));

canvas.addEventListener("pointerdown", (event) => {
  if (laserMode) return;
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("pointermove", (event) => {
  if (laserMode) {
    $("laserDot").style.left = `${event.clientX}px`;
    $("laserDot").style.top = `${event.clientY}px`;
    addLaserTrail(event.clientX, event.clientY);
    return;
  }
  if (!drawing) return;
  ctx.strokeStyle = penColor;
  ctx.lineWidth = penSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
});

window.addEventListener("pointerup", () => drawing = false);

setFocus(0);
