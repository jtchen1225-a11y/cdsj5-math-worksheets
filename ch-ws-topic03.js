/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 03 複數代數與複平面幾何 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic03';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#9333ea"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#9333ea"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#9333ea"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#9333ea",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "複數代數與複平面幾何 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "複數代數與複平面幾何 · 複數除法分母有理化、共軛複數概念。",
        "score": "5分",
        "q": "設複數 $z = \\frac{5 + 2i}{2 - i}$（其中 $i$ 為虛數單位），則複數 $z$ 的共軛複數 $\\bar{z}$ 為（　　）。",
        "options": [
          "(A) $\\frac{8}{5} - \\frac{9}{5}i$",
          "(B) $\\frac{8}{5} + \\frac{9}{5}i$",
          "(C) $-\\frac{8}{5} + \\frac{9}{5}i$",
          "(D) $8 - 9i$",
          "(E) $\\frac{12}{5} - \\frac{9}{5}i$"
        ],
        "knowledge": {
          "formulas": [
            "z = \\frac{(5 + 2i)(2 + i)}{(2 - i)(2 + i)} = \\frac{10 + 5i + 4i + 2i^2}{4 - i^2}",
            "z = \\frac{10 + 9i - 2}{4 - (-1)} = \\frac{8 + 9i}{5} = \\frac{8}{5} + \\frac{9}{5}i"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「複數除法分母有理化、共軛複數概念。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (B) 誤算為複數 $z$ 本身，審題不清漏看共軛符號 $\\bar{z}$；   - 選項 (D) 分母未除以 5；   - 選項 (C) 實部虛部符號皆變。  ---"
        },
        "solution": {
          "thinking": "分子分母同乘以分母的共軛複數 $2 + i$：",
          "steps": [
            "$$z = \\frac{(5 + 2i)(2 + i)}{(2 - i)(2 + i)} = \\frac{10 + 5i + 4i + 2i^2}{4 - i^2}$$",
            "因為 $i^2 = -1$，所以：",
            "$$z = \\frac{10 + 9i - 2}{4 - (-1)} = \\frac{8 + 9i}{5} = \\frac{8}{5} + \\frac{9}{5}i$$",
            "共軛複數 $\\bar{z}$ 實部不變、虛部變號，故：",
            "$$\\bar{z} = \\frac{8}{5} - \\frac{9}{5}i$$",
            "故正確選項為 **(A)**。"
          ],
          "ans": "(A)",
          "quickTip": "- 選項 (B) 誤算為複數 $z$ 本身，審題不清漏看共軛符號 $\\bar{z}$；\n  - 選項 (D) 分母未除以 5；\n  - 選項 (C) 實部虛部符號皆變。\n\n---"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      🌌 動態探究：複平面阿根圖與共軛複數對稱性
    </div>
    <div id="vis-cpx-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>幅角 θ (度)：</label>
      <input type="range" id="cpxSl" min="0" max="360" value="60" step="5">
      <span class="ival" id="cpxVal">60°</span>
    </div>
    <div class="step-txt" id="cpxInfo" style="text-align:center; margin-top:4px;">
      複數 z = r(cosθ + i sinθ)，共軛 z̄ 關於實軸對稱
    </div>
  `;
  const svgHost = host.querySelector('#vis-cpx-svg');
  const slider = host.querySelector('#cpxSl');
  const valLabel = host.querySelector('#cpxVal');
  const info = host.querySelector('#cpxInfo');

  function draw(deg) {
    valLabel.textContent = deg + '°';
    const rad = deg * Math.PI / 180, r = 2.0;
    const a = r * Math.cos(rad), b = r * Math.sin(rad);
    info.innerHTML = `z = ${a.toFixed(2)} ${b >= 0 ? '+' : '-'} ${Math.abs(b).toFixed(2)}i，z̄ = ${a.toFixed(2)} ${-b >= 0 ? '+' : '-'} ${Math.abs(b).toFixed(2)}i`;

    const W = 360, H = 220, ox = 180, oy = 110, scale = 40;
    const toX = re => ox + re * scale;
    const toY = im => oy - im * scale;

    let s = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    s += `<line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#475569" stroke-width="1.5"/>`;
    s += `<text x="330" y="${oy - 8}" fill="#94a3b8" font-size="12">Re</text>`;
    s += `<line x1="${ox}" y1="20" x2="${ox}" y2="200" stroke="#475569" stroke-width="1.5"/>`;
    s += `<text x="${ox + 8}" y="30" fill="#94a3b8" font-size="12">Im</text>`;
    s += `<circle cx="${ox}" cy="${oy}" r="${r * scale}" fill="none" stroke="#334155" stroke-dasharray="3,3"/>`;
    s += `<line x1="${ox}" y1="${oy}" x2="${toX(a)}" y2="${toY(b)}" stroke="#a855f7" stroke-width="2.5"/>`;
    s += `<circle cx="${toX(a)}" cy="${toY(b)}" r="5" fill="#a855f7"/>`;
    s += `<text x="${toX(a) + 8}" y="${toY(b) - 6}" fill="#d8b4fe" font-size="12" font-weight="700">z</text>`;
    s += `<line x1="${ox}" y1="${oy}" x2="${toX(a)}" y2="${toY(-b)}" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,2"/>`;
    s += `<circle cx="${toX(a)}" cy="${toY(-b)}" r="4" fill="#ec4899"/>`;
    s += `<text x="${toX(a) + 8}" y="${toY(-b) + 14}" fill="#f472b6" font-size="12" font-weight="700">z̄</text>`;
    s += `</svg>`;
    svgHost.innerHTML = s;
  }
  slider.oninput = () => draw(+slider.value);
  draw(+slider.value);
}
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 02",
        "topic": "複數代數與複平面幾何 · 純虛數的嚴密充要條件、增根排除。",
        "score": "5分",
        "q": "已知實數 $m$ 為常數，複數 $z = (m^2 - 3m + 2) + (m^2 - 1)i$ 為純虛數，則實數 $m$ 的值為（　　）。",
        "options": [
          "(A) $m = 1$",
          "(B) $m = 2$",
          "(C) $m = 1$ 或 $m = 2$",
          "(D) $m = -1$",
          "(E) 不存在這樣的實數 $m$"
        ],
        "knowledge": {
          "formulas": [
            "\\begin{cases} A = \\text{Re}(z) = 0 \\\\ B = \\text{Im}(z) \\ne 0 \\end{cases}",
            "\\begin{cases} m^2 - 3m + 2 = 0 \\\\ m^2 - 1 \\ne 0 \\end{cases}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「純虛數的嚴密充要條件、增根排除。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "複數 $z = A + Bi$（$A, B \\in \\mathbb{R}$）為純虛數的充要條件是：",
          "steps": [
            "$$\\begin{cases} A = \\text{Re}(z) = 0 \\\\ B = \\text{Im}(z) \\ne 0 \\end{cases}$$",
            "代入得：",
            "$$\\begin{cases} m^2 - 3m + 2 = 0 \\\\ m^2 - 1 \\ne 0 \\end{cases}$$",
            "解第一個方程：$(m - 1)(m - 2) = 0 \\implies m = 1 \\text{ 或 } m = 2$。",
            "解第二個不等式：$(m - 1)(m + 1) \\ne 0 \\implies m \\ne 1 \\text{ 且 } m \\ne -1$。",
            "當 $m = 1$ 時，$z = 0 + 0i = 0$ 是實數而非純虛數，必須排除！",
            "因此僅 $m = 2$ 符合條件，此時 $z = 0 + 3i = 3i$ 為純虛數。",
            "故正確選項為 **(B)**。"
          ],
          "ans": "(B)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 03",
        "topic": "複數代數與複平面幾何 · 代數法設 $z = x + yi$ 求解未知複數、複數模長公式。",
        "score": "5分",
        "q": "設複數 $z$ 滿足方程 $(1 + i)z - 2\\bar{z} = -3 + 5i$（其中 $\\bar{z}$ 為 $z$ 的共軛複數），則複數 $z$ 的模長 $|z|$ 等於（　　）。",
        "options": [
          "(A) $\\sqrt{3}$",
          "(B) $2$",
          "(C) $\\sqrt{5}$",
          "(D) $3$",
          "(E) $\\sqrt{10}$"
        ],
        "knowledge": {
          "formulas": [
            "(1 + i)(x + yi) - 2(x - yi) = -3 + 5i",
            "(x - y + (x + y)i) - (2x - 2yi) = (-x - y) + (x + 3y)i = -3 + 5i"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「代數法設 $z = x + yi$ 求解未知複數、複數模長公式。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "設 $z = x + yi$（$x, y \\in \\mathbb{R}$），則 $\\bar{z} = x - yi$。代入原方程：",
          "steps": [
            "$$(1 + i)(x + yi) - 2(x - yi) = -3 + 5i$$",
            "展開左邊：",
            "$$(x - y + (x + y)i) - (2x - 2yi) = (-x - y) + (x + 3y)i = -3 + 5i$$",
            "根據複數相等定理，實部與虛部分別相等：",
            "$$\\begin{cases} -x - y = -3 \\implies x + y = 3 \\quad \\text{—— ①} \\\\ x + 3y = 5 \\quad \\text{—— ②} \\end{cases}$$",
            "由 ② 式減去 ① 式得：$2y = 2 \\implies y = 1$。",
            "代入 ① 式得：$x = 2$。",
            "所以複數 $z = 2 + i$。",
            "其模長 $|z| = \\sqrt{x^2 + y^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5}$。",
            "故正確選項為 **(C)**。",
            "---"
          ],
          "ans": "(C)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 04",
        "topic": "複數代數與複平面幾何 · 阿根圖軌跡方程、垂直平分線幾何特徵。",
        "score": "5分",
        "q": "在複平面上，若滿足方程 $|z - 3 - 4i| = |z + 1 - 2i|$ 的複數 $z = x + yi$（$x, y \\in \\mathbb{R}$），則動點 $(x, y)$ 的軌跡是一條直線，該直線的斜率為（　　）。",
        "options": [
          "(A) $\\frac{1}{2}$",
          "(B) $-\\frac{1}{2}$",
          "(C) $2$",
          "(D) $-2$",
          "(E) $-\\frac{5}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "k_{AB} = \\frac{2 - 4}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}",
            "k = -\\frac{1}{k_{AB}} = -\\frac{1}{1/2} = -2"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「阿根圖軌跡方程、垂直平分線幾何特徵。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "**【幾何直觀速解】**：",
          "steps": [
            "方程 $|z - (3 + 4i)| = |z - (-1 + 2i)|$ 表示動點 $P(x, y)$ 到定點 $A(3, 4)$ 與定點 $B(-1, 2)$ 的距離相等。",
            "因此動點的軌跡為線段 $AB$ 的**垂直平分線**。",
            "線段 $AB$ 所在直線的斜率為：",
            "$$k_{AB} = \\frac{2 - 4}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}$$",
            "垂直平分線與線段 $AB$ 垂直，故其斜率為：",
            "$$k = -\\frac{1}{k_{AB}} = -\\frac{1}{1/2} = -2$$",
            "故正確選項為 **(D)**。",
            "**【代數展開法驗算】**：",
            "$(x - 3)^2 + (y - 4)^2 = (x + 1)^2 + (y - 2)^2 \\implies -6x + 9 - 8y + 16 = 2x + 1 - 4y + 4$",
            "化簡得：$8x + 4y - 20 = 0 \\implies 2x + y - 5 = 0 \\implies y = -2x + 5$，斜率確為 $-2$。",
            "---"
          ],
          "ans": "(D)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 05",
        "topic": "複數代數與複平面幾何 · 複數乘法的幾何意義（模長相乘、幅角相加）。",
        "score": "5分",
        "q": "在複平面上，將對應複數 $z_1 = \\sqrt{3} - i$ 的向量繞原點逆時針旋轉 $75^\\circ$（即 $\\frac{5\\pi}{12}$ 弧度），得到複數 $z_2$，則 $z_2$ 的代數形式為（　　）。",
        "options": [
          "(A) $\\sqrt{2} + \\sqrt{2}i$",
          "(B) $-\\sqrt{2} + \\sqrt{2}i$",
          "(C) $\\sqrt{2} - \\sqrt{2}i$",
          "(D) $1 + \\sqrt{3}i$",
          "(E) $\\sqrt{6} + \\sqrt{2}i$"
        ],
        "knowledge": {
          "formulas": [
            "\\theta_2 = \\theta_1 + 75^\\circ = -30^\\circ + 75^\\circ = 45^\\circ = \\frac{\\pi}{4}",
            "z_2 = 2(\\cos 45^\\circ + i\\sin 45^\\circ) = 2\\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i\\right) = \\sqrt{2} + \\sqrt{2}i"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「複數乘法的幾何意義（模長相乘、幅角相加）。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "複數 $z_1 = \\sqrt{3} - i$ 的模長為 $r = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = 2$。",
          "steps": [
            "點 $(\\sqrt{3}, -1)$ 位於第四象限，$\\cos\\theta_1 = \\frac{\\sqrt{3}}{2}, \\sin\\theta_1 = -\\frac{1}{2}$，幅角主值 $\\theta_1 = -30^\\circ$（即 $-\\frac{\\pi}{6}$）。",
            "將向量繞原點逆時針旋轉 $75^\\circ$，旋轉後的幅角為：",
            "$$\\theta_2 = \\theta_1 + 75^\\circ = -30^\\circ + 75^\\circ = 45^\\circ = \\frac{\\pi}{4}$$",
            "模長保持不變仍為 2。",
            "因此 $z_2$ 的三角形式為：",
            "$$z_2 = 2(\\cos 45^\\circ + i\\sin 45^\\circ) = 2\\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i\\right) = \\sqrt{2} + \\sqrt{2}i$$",
            "故正確選項為 **(A)**。",
            "---"
          ],
          "ans": "(A)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 06",
        "topic": "複數代數與複平面幾何 · 複平面圓周軌跡、三角形不等式與模長極值。",
        "score": "5分",
        "q": "已知複數 $z$ 滿足 $|z - 4 + 3i| = 2$，則模長 $|z|$ 的最大值與最小值分別為（　　）。",
        "options": [
          "(A) 最大值為 7，最小值為 3",
          "(B) 最大值為 5，最小值為 2",
          "(C) 最大值為 9，最小值為 1",
          "(D) 最大值為 7，最小值為 1",
          "(E) 最大值為 6，最小值為 4"
        ],
        "knowledge": {
          "formulas": [
            "|OC| = |4 - 3i| = \\sqrt{4^2 + (-3)^2} = \\sqrt{25} = 5"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「複平面圓周軌跡、三角形不等式與模長極值。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "在複平面上，$|z - (4 - 3i)| = 2$ 表示以點 $C(4, -3)$ 為圓心、以 $R = 2$ 為半徑的圓。",
          "steps": [
            "$|z|$ 表示動點 $z$ 到原點 $O(0, 0)$ 的距離。",
            "原點到圓心 $C$ 的距離為：",
            "$$|OC| = |4 - 3i| = \\sqrt{4^2 + (-3)^2} = \\sqrt{25} = 5$$",
            "由於 $|OC| = 5 > R = 2$，原點在圓外部。",
            "由圓的幾何性質：",
            "- 最大值：$|z|_{\\max} = |OC| + R = 5 + 2 = 7$",
            "- 最小值：$|z|_{\\min} = |OC| - R = 5 - 2 = 3$",
            "故正確選項為 **(A)**。",
            "---",
            "## 第二部分：簡答與計算題（共 2 題，每題 15 分，共 30 分）"
          ],
          "ans": "(A)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      }
    ]
  },
  {
    "ch": "Part 2",
    "title": "第二部分 · 簡答計算題 (2題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "簡答計算題",
    "color": "#9333ea",
    "sections": [
      "題 07 ~ 題 08 (每題 15 分)",
      "規範解答分步踩點"
    ],
    "slides": [
      {
        "part": "Part 2",
        "year": "100分鐘工作紙",
        "paper": "簡答計算題",
        "qNum": "題 07",
        "topic": "複數代數與複平面幾何 · 題 07 綜合踩點",
        "score": "15分",
        "q": "已知複數 $z$ 滿足方程 $3z - \\bar{z} = 4 + 8i$（其中 $\\bar{z}$ 為 $z$ 的共軛複數，$i$ 為虛數單位）。  \n(a) 求複數 $z$ 的代數形式及其模長 $|z|$。 (7 分)  \n(b) 在複平面上，設複數 $z$ 與 $w = \\frac{z^2}{2}$ 分別對應點 $A$ 與點 $B$，原點記為 $O$。求線段 $AB$ 的長度，並求 $\\triangle OAB$ 的面積。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\begin{cases} 2x = 4 \\implies x = 2 \\\\ 4y = 8 \\implies y = 2 \\end{cases}",
            "z^2 = (2 + 2i)^2 = 4 + 8i - 4 = 8i \\implies w = \\frac{8i}{2} = 4i"
          ],
          "points": [
            "<b>大題規範踩點</b>：本題為四校聯考高分把關題，包含嚴格的 M（方法分）、A（計算準確分）與 B（獨立結論分）。",
            "<b>書寫策略</b>：務必寫出關鍵定義定理方程，切忌跳步；數值計算過程保持精確簡潔。"
          ],
          "pitfall": "遺漏定義域討論、推導缺乏定理依據或計算符號錯誤將直接導致失去對應 A 分。"
        },
        "solution": {
          "thinking": "本題分為各小題推進，需按步驟建立關鍵等式並分步採集 M/A/B 評分點。",
          "steps": [
            "- **(a) 小問（7 分）**：\n- 設 $z = x + yi$（$x, y \\in \\mathbb{R}$），則 $\\bar{z} = x - yi$。……【M1】\n- 代入方程：$3(x + yi) - (x - yi) = 4 + 8i$。……【M1】\n- 展開合併實部與虛部：$(3x - x) + (3y + y)i = 2x + 4yi = 4 + 8i$。……【M2】\n- 根據複數相等建立實數方程組：\n$$\\begin{cases} 2x = 4 \\implies x = 2 \\\\ 4y = 8 \\implies y = 2 \\end{cases}$$……【A2】\n- 得出複數 $z = 2 + 2i$。……【A1】\n- 計算模長：$|z| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$。……【A1】",
            "- **(b) 小問（8 分）**：\n- 計算 $w$ 的代數形式：\n$$z^2 = (2 + 2i)^2 = 4 + 8i - 4 = 8i \\implies w = \\frac{8i}{2} = 4i$$……【M2】\n- 寫出複平面對應點坐標：點 $A(2, 2)$，點 $B(0, 4)$。……【B1】\n- 計算線段 $AB$ 的長度：\n$$|AB| = |w - z| = |4i - (2 + 2i)| = |-2 + 2i| = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$……【M2, A1】\n- 計算 $\\triangle OAB$ 的面積：\n- 方法 1（行列式坐標公式）：\n$$S_{\\triangle OAB} = \\frac{1}{2} |x_A y_B - x_B y_A| = \\frac{1}{2} |2 \\times 4 - 0 \\times 2| = \\frac{1}{2} \\times 8 = 4$$……【M1, A1】\n- 方法 2（底乘高）：以 $OB$ 為底，底長為 4；點 $A(2, 2)$ 到虛軸（$y$ 軸）的垂直距離為高 $h = |x_A| = 2$。\n$$S_{\\triangle OAB} = \\frac{1}{2} \\times 4 \\times 2 = 4$$\n---"
          ],
          "ans": "本題為 15分 解答大題，詳見下方官方 M/A/B 分步踩點標註。",
          "quickTip": "官方評分注重邏輯鏈完整度，若遇卡點先寫出對應核心公式以保住 M 分！"
        }
      },
      {
        "part": "Part 2",
        "year": "100分鐘工作紙",
        "paper": "簡答計算題",
        "qNum": "題 08",
        "topic": "複數代數與複平面幾何 · 題 08 綜合踩點",
        "score": "15分",
        "q": "已知複數 $z_0 = -\\sqrt{3} + i$。  \n(a) 求 $z_0$ 的模長 $|z_0|$ 與幅角主值 $\\operatorname{Arg}(z_0) \\in (-\\pi, \\pi]$，並將 $z_0$ 表示為標準三角形式 $r(\\cos\\theta + i\\sin\\theta)$。 (6 分)  \n(b) 利用棣美弗定理（De Moivre's Theorem），計算 $z_0^9$ 的精確代數值。 (4 分)  \n(c) 計算代數式 $T = z_0^6 + \\left(\\frac{4}{\\bar{z}_0}\\right)^6$ 的精確值。 (5 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\cos\\theta = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\theta = \\frac{1}{2} \\implies \\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
            "z_0 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)"
          ],
          "points": [
            "<b>大題規範踩點</b>：本題為四校聯考高分把關題，包含嚴格的 M（方法分）、A（計算準確分）與 B（獨立結論分）。",
            "<b>書寫策略</b>：務必寫出關鍵定義定理方程，切忌跳步；數值計算過程保持精確簡潔。"
          ],
          "pitfall": "遺漏定義域討論、推導缺乏定理依據或計算符號錯誤將直接導致失去對應 A 分。"
        },
        "solution": {
          "thinking": "本題分為各小題推進，需按步驟建立關鍵等式並分步採集 M/A/B 評分點。",
          "steps": [
            "- **(a) 小問（6 分）**：\n- 計算模長：$r = |z_0| = \\sqrt{(-\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = 2$。……【M2】\n- 計算幅角主值：點 $(-\\sqrt{3}, 1)$ 位於第二象限，\n$$\\cos\\theta = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\theta = \\frac{1}{2} \\implies \\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$$……【M2】\n- 寫出標準三角形式：\n$$z_0 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$$……【A2】",
            "- **(b) 小問（4 分）**：\n- 應用棣美弗定理展開 9 次冪：\n$$z_0^9 = 2^9 \\left[ \\cos\\left(9 \\times \\frac{5\\pi}{6}\\right) + i\\sin\\left(9 \\times \\frac{5\\pi}{6}\\right) \\right] = 512 \\left( \\cos\\frac{15\\pi}{2} + i\\sin\\frac{15\\pi}{2} \\right)$$……【M2】\n- 化簡角 $\\frac{15\\pi}{2}$：\n$$\\frac{15\\pi}{2} = 6\\pi + \\frac{3\\pi}{2} = 3 \\times 2\\pi + \\frac{3\\pi}{2}$$\n故 $\\cos\\frac{15\\pi}{2} = 0$，$\\sin\\frac{15\\pi}{2} = -1$。……【M1】\n- 計算得出代數值：\n$$z_0^9 = 512(0 - i) = -512i$$……【A1】",
            "- **(c) 小問（5 分）**：\n- 計算 $z_0^6$：\n$$z_0^6 = 2^6 \\left[ \\cos\\left(6 \\times \\frac{5\\pi}{6}\\right) + i\\sin\\left(6 \\times \\frac{5\\pi}{6}\\right) \\right] = 64(\\cos 5\\pi + i\\sin 5\\pi) = 64(-1 + 0) = -64$$……【M2】\n- 觀察並化簡 $\\frac{4}{\\bar{z}_0}$：\n因為 $z_0 \\bar{z}_0 = |z_0|^2 = 2^2 = 4$，故 $\\frac{4}{\\bar{z}_0} = z_0$！……【M2】\n- 因此 $\\left(\\frac{4}{\\bar{z}_0}\\right)^6 = z_0^6 = -64$。\n- 代入求和：\n$$T = -64 + (-64) = -128$$……【A1】\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
          ],
          "ans": "本題為 15分 解答大題，詳見下方官方 M/A/B 分步踩點標註。",
          "quickTip": "官方評分注重邏輯鏈完整度，若遇卡點先寫出對應核心公式以保住 M 分！"
        }
      }
    ]
  },
  {
    "ch": "Part 3",
    "title": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "year": "100分鐘工作紙",
    "paper": "綜合壓軸題",
    "color": "#9333ea",
    "sections": [
      "題 09 ~ 題 10 (每題 20 分)",
      "高階思維壓軸論證"
    ],
    "slides": [
      {
        "part": "Part 3",
        "year": "100分鐘工作紙",
        "paper": "綜合壓軸題",
        "qNum": "題 09",
        "topic": "複數代數與複平面幾何 · 題 09 綜合踩點",
        "score": "20分",
        "q": "已知複數 $W = -8 - 8\\sqrt{3}i$（其中 $i$ 為虛數單位）。  \n(a) 求 $W$ 的模長 $|W|$ 與幅角主值 $\\operatorname{Arg}(W) \\in (-\\pi, \\pi]$，並將 $W$ 寫成三角極式。 (6 分)  \n(b) 求解複數四次方程 $z^4 = W$，求出全部 4 個複數根 $z_1, z_2, z_3, z_4$，並化為標準代數形式 $a + bi$。 (8 分)  \n(c) 設這 4 個根在複平面（阿根圖）上對應的點分別為 $A, B, C, D$。  \n    (i) 證明四邊形 $ABCD$ 為正方形，並求其面積。 (3 分)  \n    (ii) 設動點 $P$ 對應複數 $w$，且滿足 $|w| = 2$。證明動點 $P$ 到正方形四個頂點的距離平方和 $\\sum_{k=1}^4 |w - z_k|^2$ 為定值，並求出該定值。 (3 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "|W| = \\sqrt{(-8)^2 + (-8\\sqrt{3})^2} = \\sqrt{64 + 192} = \\sqrt{256} = 16",
            "\\cos\\theta = -\\frac{8}{16} = -\\frac{1}{2}, \\quad \\sin\\theta = -\\frac{8\\sqrt{3}}{16} = -\\frac{\\sqrt{3}}{2} \\implies \\theta = -\\frac{2\\pi}{3}"
          ],
          "points": [
            "<b>大題規範踩點</b>：本題為四校聯考高分把關題，包含嚴格的 M（方法分）、A（計算準確分）與 B（獨立結論分）。",
            "<b>書寫策略</b>：務必寫出關鍵定義定理方程，切忌跳步；數值計算過程保持精確簡潔。"
          ],
          "pitfall": "遺漏定義域討論、推導缺乏定理依據或計算符號錯誤將直接導致失去對應 A 分。"
        },
        "solution": {
          "thinking": "本題分為各小題推進，需按步驟建立關鍵等式並分步採集 M/A/B 評分點。",
          "steps": [
            "- **(a) 小問（6 分）**：\n- 計算模長：\n$$|W| = \\sqrt{(-8)^2 + (-8\\sqrt{3})^2} = \\sqrt{64 + 192} = \\sqrt{256} = 16$$……【M2, A1】\n- 計算幅角主值：點 $(-8, -8\\sqrt{3})$ 位於第三象限，\n$$\\cos\\theta = -\\frac{8}{16} = -\\frac{1}{2}, \\quad \\sin\\theta = -\\frac{8\\sqrt{3}}{16} = -\\frac{\\sqrt{3}}{2} \\implies \\theta = -\\frac{2\\pi}{3}$$……【M2】\n- 寫出三角極式：\n$$W = 16\\left[\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right]$$……【A1】",
            "- **(b) 小問（8 分）**：\n- 根據棣美弗定理開方公式，方程 $z^4 = W$ 的 4 個根模長為 $r = \\sqrt[4]{16} = 2$。……【B1】\n- 寫出幅角通式：\n$$\\theta_k = \\frac{-\\frac{2\\pi}{3} + 2k\\pi}{4} = -\\frac{\\pi}{6} + \\frac{k\\pi}{2}, \\quad k = 0, 1, 2, 3$$……【M2】\n- 逐一計算各根的代數形式：\n- $k = 0$: $\\theta_0 = -\\frac{\\pi}{6}$，\n$$z_1 = 2\\left[\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right] = 2\\left(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\right) = \\sqrt{3} - i$$……【A1】\n- $k = 1$: $\\theta_1 = -\\frac{\\pi}{6} + \\frac{\\pi}{2} = \\frac{\\pi}{3}$，\n$$z_2 = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right) = 2\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = 1 + \\sqrt{3}i$$……【A1】\n- $k = 2$: $\\theta_2 = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6}$，\n$$z_3 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right) = 2\\left(-\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right) = -\\sqrt{3} + i$$……【A1】\n- $k = 3$: $\\theta_3 = -\\frac{\\pi}{6} + \\frac{3\\pi}{2} = \\frac{4\\pi}{3}$，\n$$z_4 = 2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right) = 2\\left(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i\\right) = -1 - \\sqrt{3}i$$……【A1】\n*(未化為代數形式 $a+bi$ 扣 2 分)*。",
            "- **(c)(i) 小問（3 分）**：\n- 幾何論證：4 個根的模長均為 2，故對應點 $A, B, C, D$ 均在圓心為原點、半徑為 2 的圓周上；相鄰兩根的幅角差均為 $\\frac{\\pi}{2} = 90^\\circ$，圓心角皆為直角，因此四邊形 $ABCD$ 為內接正方形。……【M1, A1】\n- 面積計算：正方形對角線長為外接圓直徑 $d = 2R = 4$。\n$$S = \\frac{1}{2} d^2 = \\frac{1}{2} \\times 4^2 = 8$$（或邊長 $a = 2\\sqrt{2}$，$S = a^2 = 8$）。……【A1】",
            "- **(c)(ii) 小問（3 分）**：\n- 展開距離平方：\n$$|w - z_k|^2 = (w - z_k)(\\bar{w} - \\bar{z}_k) = |w|^2 - (w\\bar{z}_k + \\bar{w}z_k) + |z_k|^2$$……【M1】\n- 由已知 $|w| = 2 \\implies |w|^2 = 4$，且 $|z_k| = 2 \\implies |z_k|^2 = 4$。\n$$\\sum_{k=1}^4 |w - z_k|^2 = \\sum_{k=1}^4 (4 + 4) - w \\sum_{k=1}^4 \\bar{z}_k - \\bar{w} \\sum_{k=1}^4 z_k$$\n- 由正方形中心對稱性，4 個根之和為 0：\n$$\\sum_{k=1}^4 z_k = (\\sqrt{3} + 1 - \\sqrt{3} - 1) + (-1 + \\sqrt{3} + 1 - \\sqrt{3})i = 0$$\n同理共軛之和亦為 0。……【M1】\n- 因此所求定值為：\n$$\\sum_{k=1}^4 |w - z_k|^2 = 4 \\times 8 - 0 = 32$$……【A1】\n---"
          ],
          "ans": "本題為 20分 解答大題，詳見下方官方 M/A/B 分步踩點標註。",
          "quickTip": "官方評分注重邏輯鏈完整度，若遇卡點先寫出對應核心公式以保住 M 分！"
        }
      },
      {
        "part": "Part 3",
        "year": "100分鐘工作紙",
        "paper": "綜合壓軸題",
        "qNum": "題 10",
        "topic": "複數代數與複平面幾何 · 題 10 綜合踩點",
        "score": "20分",
        "q": "考慮複數方程 $z^3 - 64 = 0$。  \n(a) 將多項式 $z^3 - 64$ 進行因式分解，並求出該方程的 1 個實根與 2 個共軛虛根（用代數形式表示）。 (6 分)  \n(b) 設 (a) 中的兩個虛根為 $\\alpha$ 與 $\\beta$。  \n    (i) 證明：$\\alpha^2 + 4\\alpha + 16 = 0$； (2 分)  \n    (ii) 計算代數式 $\\alpha^6 + \\alpha^3 + 64$ 的值； (2 分)  \n    (iii) 設方程 $z^3 - 64 = 0$ 的三個根在阿根圖中對應點為 $A, B, C$。證明 $\\triangle ABC$ 為正三角形，並求其邊長與面積。 (3 分)  \n(c) 考慮阿根圖中的動點 $z$：  \n    (i) 若動點 $z$ 滿足方程 $|z - 4| = |z - \\alpha|$，求動點 $z$ 軌跡的幾何特徵，並求頂點 $C$ 到該軌跡直線的最短距離； (4 分)  \n    (ii) 若動點 $z$ 滿足不等式 $|z - (6 + 8i)| \\le 3$，求動點 $z$ 到原點距離 $|z|$ 的最大值與最小值。 (3 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "z^3 - 64 = z^3 - 4^3 = (z - 4)(z^2 + 4z + 16) = 0",
            "z = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(16)}}{2} = \\frac{-4 \\pm \\sqrt{-48}}{2} = \\frac{-4 \\pm 4\\sqrt{3}i}{2} = -2 \\pm 2\\sqrt{3}i"
          ],
          "points": [
            "<b>大題規範踩點</b>：本題為四校聯考高分把關題，包含嚴格的 M（方法分）、A（計算準確分）與 B（獨立結論分）。",
            "<b>書寫策略</b>：務必寫出關鍵定義定理方程，切忌跳步；數值計算過程保持精確簡潔。"
          ],
          "pitfall": "遺漏定義域討論、推導缺乏定理依據或計算符號錯誤將直接導致失去對應 A 分。"
        },
        "solution": {
          "thinking": "本題分為各小題推進，需按步驟建立關鍵等式並分步採集 M/A/B 評分點。",
          "steps": [
            "- **(a) 小問（6 分）**：\n- 利用立方差公式因式分解：\n$$z^3 - 64 = z^3 - 4^3 = (z - 4)(z^2 + 4z + 16) = 0$$……【M2】\n- 由 $z - 4 = 0$ 得實根：$z_1 = 4$。……【A1】\n- 由 $z^2 + 4z + 16 = 0$，由二次求根公式：\n$$z = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(16)}}{2} = \\frac{-4 \\pm \\sqrt{-48}}{2} = \\frac{-4 \\pm 4\\sqrt{3}i}{2} = -2 \\pm 2\\sqrt{3}i$$……【M2】\n- 得出兩個共軛虛根：$\\alpha = -2 + 2\\sqrt{3}i$，$\\beta = -2 - 2\\sqrt{3}i$。……【A1】",
            "- **(b)(i) 小問（2 分）**：\n- 因 $\\alpha$ 為方程 $z^3 - 64 = 0$ 的非實數根，必為二次因式 $z^2 + 4z + 16 = 0$ 的根。\n直接代入得：$\\alpha^2 + 4\\alpha + 16 = 0$，證畢。……【A2】",
            "- **(b)(ii) 小問（2 分）**：\n- 因 $\\alpha$ 滿足原方程 $\\alpha^3 - 64 = 0 \\implies \\alpha^3 = 64$。……【M1】\n- 則 $\\alpha^6 = (\\alpha^3)^2 = 64^2 = 4096$。\n- 代入計算：\n$$\\alpha^6 + \\alpha^3 + 64 = 4096 + 64 + 64 = 4224$$……【A1】",
            "- **(b)(iii) 小問（3 分）**：\n- 三個根對應坐標為 $A(4, 0)$，$B(-2, 2\\sqrt{3})$，$C(-2, -2\\sqrt{3})$。\n- 計算三邊距離平方：\n$$|AB|^2 = (-2 - 4)^2 + (2\\sqrt{3} - 0)^2 = 36 + 12 = 48$$\n$$|AC|^2 = (-2 - 4)^2 + (-2\\sqrt{3} - 0)^2 = 36 + 12 = 48$$\n$$|BC|^2 = (-2 - (-2))^2 + (-2\\sqrt{3} - 2\\sqrt{3})^2 = 0 + (-4\\sqrt{3})^2 = 48$$\n三邊長均為 $\\sqrt{48} = 4\\sqrt{3}$，證得 $\\triangle ABC$ 為正三角形。……【M1, A1】\n- 正三角形面積：\n$$S = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 48 = 12\\sqrt{3}$$……【A1】",
            "- **(c)(i) 小問（4 分）**：\n- 幾何特徵：方程 $|z - 4| = |z - \\alpha|$ 表示動點 $z$ 到點 $A(4, 0)$ 與點 $B(-2, 2\\sqrt{3})$ 的距離相等，其幾何軌跡為**線段 $AB$ 的垂直平分線 $L$**。……【M1, B1】\n- 最短距離求法：\n在正三角形 $\\triangle ABC$ 中，頂點 $C$ 到 $A$ 與 $B$ 的距離相等（$|CA| = |CB| = 4\\sqrt{3}$）。\n因此，頂點 $C$ 本身就在線段 $AB$ 的垂直平分線上！……【M1】\n故點 $C$ 滿足軌跡方程，其到直線 $L$ 的最短距離為 **0**。……【A1】\n*(高分思維：利用正三角形外心、垂心、中垂線重合的性質秒殺，無需展開求直線點線距離公式)*。",
            "- **(c)(ii) 小問（3 分）**：\n- 幾何意義：不等式 $|z - (6 + 8i)| \\le 3$ 在阿根圖中表示以點 $K(6, 8)$ 為圓心、半徑 $R = 3$ 的閉圓盤。……【M1】\n- 原點 $O(0, 0)$ 到圓心 $K$ 的距離為：\n$$|OK| = |6 + 8i| = \\sqrt{6^2 + 8^2} = 10$$……【A1】\n- 因為 $|OK| = 10 > R = 3$，原點在圓外部。\n- 最大值：$|z|_{\\max} = |OK| + R = 10 + 3 = 13$\n- 最小值：$|z|_{\\min} = |OK| - R = 10 - 3 = 7$……【A1】\n---"
          ],
          "ans": "本題為 20分 解答大題，詳見下方官方 M/A/B 分步踩點標註。",
          "quickTip": "官方評分注重邏輯鏈完整度，若遇卡點先寫出對應核心公式以保住 M 分！"
        }
      }
    ]
  }
];

  chapters.forEach(c => window.DECK.push(c));
})();
