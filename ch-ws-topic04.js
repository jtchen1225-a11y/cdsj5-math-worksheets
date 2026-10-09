/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 04 矩陣線性方程組與數學歸納法 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic04';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#059669"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#059669"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#059669"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#059669",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "矩陣線性方程組與數學歸納法 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "矩陣線性方程組與數學歸納法 · 二階逆矩陣伴隨矩陣公式。",
        "score": "5分",
        "q": "已知二階矩陣 $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$，則其逆矩陣 $A^{-1}$ 為（　　）。",
        "options": [
          "(A) $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "(B) $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$",
          "(C) $\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$",
          "(D) $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "(E) $\\begin{pmatrix} 1 & -1 \\\\ -5 & 2 \\end{pmatrix}$"
        ],
        "knowledge": {
          "formulas": [
            "M^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\det(A) = 3(2) - 1(5) = 6 - 5 = 1"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「二階逆矩陣伴隨矩陣公式。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (B) 副對角線未變號；   - 選項 (C) 主對角線符號弄反；   - 選項 (D) 忘記調換主對角線元素。  ---"
        },
        "solution": {
          "thinking": "對於二階矩陣 $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$，若 $\\det(M) = ad - bc \\ne 0$，則：",
          "steps": [
            "$$M^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$",
            "本題中：",
            "$$\\det(A) = 3(2) - 1(5) = 6 - 5 = 1$$",
            "因此：",
            "$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$$",
            "故正確選項為 **(A)**。"
          ],
          "ans": "(A)",
          "quickTip": "- 選項 (B) 副對角線未變號；\n  - 選項 (C) 主對角線符號弄反；\n  - 選項 (D) 忘記調換主對角線元素。\n\n---"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      🟩 動態探究：二階旋轉矩陣線性變換
    </div>
    <div id="vis-mat-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>旋轉角 θ：</label>
      <input type="range" id="matSl" min="0" max="360" value="45" step="5">
      <span class="ival" id="matVal">45°</span>
    </div>
    <div class="step-txt" id="matInfo" style="text-align:center; margin-top:4px;">
      基向量 [1, 0]ᵀ 與 [0, 1]ᵀ 經矩陣變換
    </div>
  `;
  const svgHost = host.querySelector('#vis-mat-svg');
  const slider = host.querySelector('#matSl');
  const valLabel = host.querySelector('#matVal');
  const info = host.querySelector('#matInfo');

  function draw(deg) {
    valLabel.textContent = deg + '°';
    const rad = deg * Math.PI / 180;
    const c = Math.cos(rad), s = Math.sin(rad);
    info.innerHTML = `旋轉矩陣 R(θ) = [[${c.toFixed(2)}, ${(-s).toFixed(2)}], [${s.toFixed(2)}, ${c.toFixed(2)}]]`;

    const W = 360, H = 220, ox = 180, oy = 110, scale = 50;
    const toX = x => ox + x * scale;
    const toY = y => oy - y * scale;

    let sStr = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    sStr += `<line x1="20" y1="${oy}" x2="340" y2="${oy}" stroke="#334155" stroke-width="1.5"/>`;
    sStr += `<line x1="${ox}" y1="20" x2="${ox}" y2="200" stroke="#334155" stroke-width="1.5"/>`;
    sStr += `<line x1="${ox}" y1="${oy}" x2="${toX(c)}" y2="${toY(s)}" stroke="#10b981" stroke-width="3"/>`;
    sStr += `<circle cx="${toX(c)}" cy="${toY(s)}" r="4" fill="#10b981"/>`;
    sStr += `<text x="${toX(c) + 6}" y="${toY(s) - 6}" fill="#6ee7b7" font-size="11" font-weight="700">T(e₁)</text>`;
    sStr += `<line x1="${ox}" y1="${oy}" x2="${toX(-s)}" y2="${toY(c)}" stroke="#06b6d4" stroke-width="3"/>`;
    sStr += `<circle cx="${toX(-s)}" cy="${toY(c)}" r="4" fill="#06b6d4"/>`;
    sStr += `<text x="${toX(-s) + 6}" y="${toY(c) - 6}" fill="#67e8f9" font-size="11" font-weight="700">T(e₂)</text>`;
    sStr += `</svg>`;
    svgHost.innerHTML = sStr;
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
        "topic": "矩陣線性方程組與數學歸納法 · 二階行列式展開與一元二次方程求解。",
        "score": "5分",
        "q": "若二階行列式 $\\begin{vmatrix} x - 1 & 2 \\\\ 3 & x \\end{vmatrix} = 0$，則實數 $x$ 的值為（　　）。",
        "options": [
          "(A) $x = 3$ 或 $x = -2$",
          "(B) $x = -3$ 或 $x = 2$",
          "(C) $x = 6$ 或 $x = -1$",
          "(D) $x = 1$ 或 $x = 6$",
          "(E) $x = 0$"
        ],
        "knowledge": {
          "formulas": [
            "\\begin{vmatrix} x - 1 & 2 \\\\ 3 & x \\end{vmatrix} = x(x - 1) - 2(3) = x^2 - x - 6",
            "x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\text{ 或 } x = -2"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「二階行列式展開與一元二次方程求解。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (B) 因式分解符號弄反；   - 選項 (C) 誤將 $-2 \\times 3$ 算為加法。  ---"
        },
        "solution": {
          "thinking": "由二階行列式定義展開：",
          "steps": [
            "$$\\begin{vmatrix} x - 1 & 2 \\\\ 3 & x \\end{vmatrix} = x(x - 1) - 2(3) = x^2 - x - 6$$",
            "令其等於 0：",
            "$$x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\text{ 或 } x = -2$$",
            "故正確選項為 **(A)**。"
          ],
          "ans": "(A)",
          "quickTip": "- 選項 (B) 因式分解符號弄反；\n  - 選項 (C) 誤將 $-2 \\times 3$ 算為加法。\n\n---"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 03",
        "topic": "矩陣線性方程組與數學歸納法 · 三階行列式按行按列展開法則。",
        "score": "5分",
        "q": "三階行列式 $\\begin{vmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 4 \\\\ 2 & 1 & 5 \\end{vmatrix}$ 的值為（　　）。",
        "options": [
          "(A) $15$",
          "(B) $21$",
          "(C) $27$",
          "(D) $33$",
          "(E) $-11$"
        ],
        "knowledge": {
          "formulas": [
            "\\begin{vmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 4 \\\\ 2 & 1 & 5 \\end{vmatrix} = 1 \\cdot \\begin{vmatrix} 3 & 4 \\\\ 1 & 5 \\end{vmatrix} - 2 \\cdot \\begin{vmatrix} 0 & 4 \\\\ 2 & 5 \\end{vmatrix} + 0 \\cdot \\begin{vmatrix} 0 & 3 \\\\ 2 & 1 \\end{vmatrix}",
            "\\begin{vmatrix} 3 & 4 \\\\ 1 & 5 \\end{vmatrix} = 3(5) - 4(1) = 15 - 4 = 11"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「三階行列式按行按列展開法則。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "按第一行展開：",
          "steps": [
            "$$\\begin{vmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 4 \\\\ 2 & 1 & 5 \\end{vmatrix} = 1 \\cdot \\begin{vmatrix} 3 & 4 \\\\ 1 & 5 \\end{vmatrix} - 2 \\cdot \\begin{vmatrix} 0 & 4 \\\\ 2 & 5 \\end{vmatrix} + 0 \\cdot \\begin{vmatrix} 0 & 3 \\\\ 2 & 1 \\end{vmatrix}$$",
            "計算各二階子式：",
            "$$\\begin{vmatrix} 3 & 4 \\\\ 1 & 5 \\end{vmatrix} = 3(5) - 4(1) = 15 - 4 = 11$$",
            "$$\\begin{vmatrix} 0 & 4 \\\\ 2 & 5 \\end{vmatrix} = 0(5) - 4(2) = 0 - 8 = -8$$",
            "代入得：",
            "$$1(11) - 2(-8) + 0 = 11 + 16 = 27$$",
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
        "topic": "矩陣線性方程組與數學歸納法 · 旋轉矩陣運算與幾何坐標變換。",
        "score": "5分",
        "q": "設矩陣 $R = \\begin{pmatrix} \\cos\\frac{\\pi}{3} & -\\sin\\frac{\\pi}{3} \\\\ \\sin\\frac{\\pi}{3} & \\cos\\frac{\\pi}{3} \\end{pmatrix}$ 表示平面逆時針旋轉 $60^\\circ$ 的變換矩陣。若向量 $\\vec{v} = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$ 經該變換後得到向量 $\\vec{w} = R \\vec{v}$，則 $\\vec{w}$ 的坐標為（　　）。",
        "options": [
          "(A) $\\begin{pmatrix} 1 \\\\ \\sqrt{3} \\end{pmatrix}$",
          "(B) $\\begin{pmatrix} \\sqrt{3} \\\\ 1 \\end{pmatrix}$",
          "(C) $\\begin{pmatrix} 1 \\\\ -\\sqrt{3} \\end{pmatrix}$",
          "(D) $\\begin{pmatrix} 2 \\\\ 2\\sqrt{3} \\end{pmatrix}$",
          "(E) $\\begin{pmatrix} -1 \\\\ \\sqrt{3} \\end{pmatrix}$"
        ],
        "knowledge": {
          "formulas": [
            "R = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix}",
            "\\vec{w} = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{2}(2) + 0 \\\\ \\frac{\\sqrt{3}}{2}(2) + 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ \\sqrt{3} \\end{pmatrix}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「旋轉矩陣運算與幾何坐標變換。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "代入三角函數值：$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$，$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$。",
          "steps": [
            "$$R = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix}$$",
            "計算矩陣與向量乘法：",
            "$$\\vec{w} = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{2}(2) + 0 \\\\ \\frac{\\sqrt{3}}{2}(2) + 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ \\sqrt{3} \\end{pmatrix}$$",
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
        "qNum": "題 05",
        "topic": "矩陣線性方程組與數學歸納法 · 數學歸納法的演繹鏈結構與遞推步長。",
        "score": "5分",
        "q": "用數學歸納法證明某數學命題 $P(n)$。若已證明：  \n(1) 當 $n = 1$ 時命題 $P(1)$ 成立；  \n(2) 假設當 $n = k$（$k \\ge 1$）時 $P(k)$ 成立，可推證 $P(k + 2)$ 也成立。  \n則依據上述證明，能斷定命題 $P(n)$（　　）。",
        "options": [
          "(A) 對所有正整數 $n$ 均成立",
          "(B) 對所有正偶數 $n$ 均成立",
          "(C) 對所有正奇數 $n$ 均成立",
          "(D) 僅對 $n = 1, 2, 3$ 成立",
          "(E) 不能斷定對任何大於 1 的正整數成立"
        ],
        "knowledge": {
          "formulas": [
            "n = 1",
            "n = 1"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「數學歸納法的演繹鏈結構與遞推步長。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "數學歸納法的遞推步長為 2（從 $k$ 到 $k+2$）。",
          "steps": [
            "由基礎步驟 $n = 1$ 成立，根據遞推步驟：",
            "- $n = 1$ 成立 $\\implies n = 1 + 2 = 3$ 成立；",
            "- $n = 3$ 成立 $\\implies n = 3 + 2 = 5$ 成立；",
            "- 依此類推，對所有形如 $2m - 1$（$m \\in \\mathbb{N}^*$）的正奇數均成立。",
            "但由於未驗證 $n = 2$ 的基礎步驟，因此無法斷定對偶數成立。",
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
        "qNum": "題 06",
        "topic": "矩陣線性方程組與數學歸納法 · 線性方程組係數行列式與解的判定準則。",
        "score": "5分",
        "q": "關於 $x, y$ 的二元一次線性方程組 $\\begin{cases} kx + 2y = 1 \\\\ 2x + ky = -1 \\end{cases}$ 無解，則實數常數 $k$ 的值為（　　）。",
        "options": [
          "(A) $k = 2$",
          "(B) $k = -2$",
          "(C) $k = \\pm 2$",
          "(D) $k = 0$",
          "(E) $k = 1$"
        ],
        "knowledge": {
          "formulas": [
            "D = \\begin{vmatrix} k & 2 \\\\ 2 & k \\end{vmatrix} = k^2 - 4",
            "\\begin{cases} 2x + 2y = 1 \\\\ 2x + 2y = -1 \\end{cases}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「線性方程組係數行列式與解的判定準則。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "係數矩陣的行列式為：",
          "steps": [
            "$$D = \\begin{vmatrix} k & 2 \\\\ 2 & k \\end{vmatrix} = k^2 - 4$$",
            "方程組無解或有無窮多解的必要條件是 $D = 0 \\implies k^2 - 4 = 0 \\implies k = \\pm 2$。",
            "- 當 $k = 2$ 時，方程組為：",
            "$$\\begin{cases} 2x + 2y = 1 \\\\ 2x + 2y = -1 \\end{cases}$$",
            "兩方程左邊完全相同但右邊矛盾（$1 \\ne -1$），此時顯然無解！",
            "等等！讓我們認真檢驗 $k = -2$ 與 $k = 2$：",
            "當 $k = 2$ 時：兩式相加得 $4x + 4y = 0 \\implies x + y = 0$，但原式第一式為 $2(x+y) = 1 \\implies x+y = \\frac{1}{2}$，矛盾，無解！",
            "當 $k = -2$ 時：",
            "$$\\begin{cases} -2x + 2y = 1 \\\\ 2x - 2y = -1 \\end{cases}$$",
            "第二式兩邊乘以 $-1$ 得 $-2x + 2y = 1$，與第一式完全一致！此時方程組有**無窮多解**！",
            "因此，只有 $k = 2$ 時方程組無解，而 $k = -2$ 時有無窮多解。",
            "等等，本題中正確選項為 $k = 2$！",
            "故正確選項為 **(A)**。"
          ],
          "ans": "(B)",
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
    "color": "#059669",
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
        "topic": "矩陣線性方程組與數學歸納法 · 題 07 綜合踩點",
        "score": "15分",
        "q": "已知二階矩陣 $A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}$，單位矩陣記為 $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$。  \n(a) 計算矩陣多項式 $A^2 - 5A + 6I$，並由此求出逆矩陣 $A^{-1}$。 (7 分)  \n(b) 利用 (a) 的結論將 $A^4$ 化為 $pA + qI$ 的形式（其中 $p, q$ 為常數），並求出矩陣 $A^4$ 的各項元素。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^2 = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 16 - 2 & -8 - 2 \\\\ 4 + 1 & -2 + 1 \\end{pmatrix} = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix}",
            "A^2 - 5A + 6I = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix} - \\begin{pmatrix} 20 & -10 \\\\ 5 & 5 \\end{pmatrix} + \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = O"
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
            "**(a)**\n- 計算 $A^2$：\n$$A^2 = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 16 - 2 & -8 - 2 \\\\ 4 + 1 & -2 + 1 \\end{pmatrix} = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix}$$ **【M2A1】**\n- 計算 $A^2 - 5A + 6I$：\n$$A^2 - 5A + 6I = \\begin{pmatrix} 14 & -10 \\\\ 5 & -1 \\end{pmatrix} - \\begin{pmatrix} 20 & -10 \\\\ 5 & 5 \\end{pmatrix} + \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = O$$ **【M1A1】**\n- 由 $A^2 - 5A + 6I = O$，兩邊變形得：\n$$A(5I - A) = 6I \\implies A \\left[\\frac{1}{6}(5I - A)\\right] = I$$ **【M1】**\n- 故逆矩陣為：\n$$A^{-1} = \\frac{1}{6}(5I - A) = \\frac{1}{6} \\left[ \\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix} - \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} \\right] = \\frac{1}{6} \\begin{pmatrix} 1 & 2 \\\\ -1 & 4 \\end{pmatrix}$$ **【A1】**",
            "**(b)**\n- 由 (a) 知 $A^2 = 5A - 6I$。 **【M1】**\n- 兩邊乘以 $A$：\n$$A^3 = 5A^2 - 6A = 5(5A - 6I) - 6A = 25A - 30I - 6A = 19A - 30I$$ **【M2】**\n- 再乘以 $A$：\n$$A^4 = 19A^2 - 30A = 19(5A - 6I) - 30A = 95A - 114I - 30A = 65A - 114I$$ **【M2A1】**\n故 $p = 65, q = -114$。\n- 代入矩陣 $A$ 與 $I$ 計算各元素：\n$$A^4 = 65 \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix} - 114 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 260 & -130 \\\\ 65 & 65 \\end{pmatrix} - \\begin{pmatrix} 114 & 0 \\\\ 0 & 114 \\end{pmatrix}$$\n$$= \\begin{pmatrix} 146 & -130 \\\\ 65 & -49 \\end{pmatrix}$$ **【A2】**\n---"
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
        "topic": "矩陣線性方程組與數學歸納法 · 題 08 綜合踩點",
        "score": "15分",
        "q": "用數學歸納法證明：對任意正整數 $n \\ge 1$，代數式 $5^{2n-1} + 1$ 均能被 $6$ 整除。 (15 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "5^{2(1)-1} + 1 = 5^1 + 1 = 6",
            "5^{2k-1} + 1 = 6M \\quad (\\text{其中 } M \\in \\mathbb{Z})"
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
            "- **【第一步：基礎步驟（Base Case）】**\n當 $n = 1$ 時：\n$$5^{2(1)-1} + 1 = 5^1 + 1 = 6$$ **【M2】**\n因為 $6 = 6 \\times 1$，顯然能被 $6$ 整除。\n因此，當 $n = 1$ 時命題成立。 **【A2】**\n- **【第二步：歸納假設（Inductive Hypothesis）】**\n假設當 $n = k$（$k \\ge 1, k \\in \\mathbb{N}^*$）時命題成立，即：\n$$5^{2k-1} + 1 = 6M \\quad (\\text{其中 } M \\in \\mathbb{Z})$$ **【M3】**\n亦即 $5^{2k-1} = 6M - 1$。\n- **【第三步：歸納推導（Inductive Step）】**\n考察當 $n = k + 1$ 時的代數式：\n$$5^{2(k+1)-1} + 1 = 5^{2k+1} + 1 = 5^2 \\cdot 5^{2k-1} + 1 = 25 \\cdot 5^{2k-1} + 1$$ **【M3】**\n將歸納假設 $5^{2k-1} = 6M - 1$ 代入：\n$$25(6M - 1) + 1 = 25 \\cdot 6M - 25 + 1 = 150M - 24$$ **【M2】**\n提取公因數 6：\n$$= 6(25M - 4)$$ **【A2】**\n因為 $M \\in \\mathbb{Z}$，所以 $25M - 4$ 亦為整數。\n因此，當 $n = k + 1$ 時，代數式 $5^{2(k+1)-1} + 1$ 也能被 $6$ 整除。 **【B1】**\n- **【結論】**\n綜上所述，由數學歸納法可知，對任意正整數 $n \\ge 1$，$5^{2n-1} + 1$ 均能被 $6$ 整除。\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
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
    "color": "#059669",
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
        "topic": "矩陣線性方程組與數學歸納法 · 題 09 綜合踩點",
        "score": "20分",
        "q": "設實數 $k$ 為常數，矩陣 $M = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & k & 1 \\\\ 1 & 1 & k^2 \\end{pmatrix}$。  \n(a) 計算行列式 $\\det(M)$，並將其因式分解為最簡形式。 (8 分)  \n(b) 討論關於未知數 $x, y, z$ 的三元一次線性方程組：  \n$$M \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 4 \\end{pmatrix}$$  \n在不同實數 $k$ 取值下解的情況（說明何時有唯一解、無解或有無限多解）。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\det(M) = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & k & 1 \\\\ 1 & 1 & k^2 \\end{vmatrix} = \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & k - 1 & 0 \\\\ 0 & 0 & k^2 - 1 \\end{vmatrix}",
            "\\det(M) = 1 \\cdot (k - 1) \\cdot (k^2 - 1)"
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
            "**(a)**\n- 利用行列式性質進行初等行變換化簡：\n第 2 行減去第 1 行（$R_2 - R_1$），第 3 行減去第 1 行（$R_3 - R_1$）：\n$$\\det(M) = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & k & 1 \\\\ 1 & 1 & k^2 \\end{vmatrix} = \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & k - 1 & 0 \\\\ 0 & 0 & k^2 - 1 \\end{vmatrix}$$ **【M4】**\n- 該行列式已化為上三角行列式，其值等於主對角線元素之積：\n$$\\det(M) = 1 \\cdot (k - 1) \\cdot (k^2 - 1)$$ **【M2】**\n- 因式分解 $k^2 - 1 = (k - 1)(k + 1)$：\n$$\\det(M) = (k - 1) \\cdot (k - 1)(k + 1) = (k - 1)^2 (k + 1)$$ **【A2】**",
            "**(b)**\n- 寫出增廣矩陣：\n$$\\tilde{M} = \\begin{pmatrix} 1 & 1 & 1 & \\big| & 1 \\\\ 1 & k & 1 & \\big| & 2 \\\\ 1 & 1 & k^2 & \\big| & 4 \\end{pmatrix}$$ **【M1】**\n- 進行高斯消元，$R_2 - R_1$ 和 $R_3 - R_1$：\n$$\\begin{pmatrix} 1 & 1 & 1 & \\big| & 1 \\\\ 0 & k - 1 & 0 & \\big| & 1 \\\\ 0 & 0 & k^2 - 1 & \\big| & 3 \\end{pmatrix}$$ **【M3】**\n- **情況一：$\\det(M) \\ne 0$，即 $k \\ne 1$ 且 $k \\ne -1$**\n此時係數行列式非零，主對角線元素均非零，方程組有**唯一解**。 **【A3】**\n*(解為 $y = \\frac{1}{k-1}$，$z = \\frac{3}{k^2-1}$，$x = 1 - y - z$)*\n- **情況二：$k = 1$**\n代入簡化矩陣：\n$$\\begin{pmatrix} 1 & 1 & 1 & \\big| & 1 \\\\ 0 & 0 & 0 & \\big| & 1 \\\\ 0 & 0 & 0 & \\big| & 3 \\end{pmatrix}$$\n第二行對應方程 $0x + 0y + 0z = 1$，此方程顯然矛盾無解！\n故當 $k = 1$ 時，方程組**無解**。 **【A2】**\n- **情況三：$k = -1$**\n代入簡化矩陣：\n$$\\begin{pmatrix} 1 & 1 & 1 & \\big| & 1 \\\\ 0 & -2 & 0 & \\big| & 1 \\\\ 0 & 0 & 0 & \\big| & 3 \\end{pmatrix}$$\n第三行對應方程 $0x + 0y + 0z = 3$，此方程矛盾無解！\n故當 $k = -1$ 時，方程組亦**無解**。 **【A2】**\n- **總結結論**：\n- 當 $k \\ne 1$ 且 $k \\ne -1$ 時，方程組有**唯一解**；\n- 當 $k = 1$ 或 $k = -1$ 時，方程組**無解**；\n- 不存在使方程組有無限多解的實數 $k$。 **【B1】**\n---"
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
        "topic": "矩陣線性方程組與數學歸納法 · 題 10 綜合踩點",
        "score": "20分",
        "q": "(a) 設 $\\theta \\ne m\\pi$（$m \\in \\mathbb{Z}$）。利用數學歸納法證明：對任意正整數 $n \\ge 1$，均有恆等式：  \n$$\\cos\\theta \\cos(2\\theta) \\cos(4\\theta) \\cdots \\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin\\theta}$$ (12 分)  \n(b) 利用 (a) 的結論，計算下列連乘積的精確數值：  \n$$P = \\cos\\frac{\\pi}{7} \\cos\\frac{2\\pi}{7} \\cos\\frac{4\\pi}{7}$$ (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\cos\\theta \\cos(2\\theta) \\cdots \\cos(2^{k-1}\\theta) = \\frac{\\sin(2^k \\theta)}{2^k \\sin\\theta}",
            "\\text{左邊} = [\\cos\\theta \\cos(2\\theta) \\cdots \\cos(2^{k-1}\\theta)] \\cdot \\cos(2^k \\theta)"
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
            "**(a)**\n- **【第一步：基礎步驟】**\n當 $n = 1$ 時：\n左邊 $= \\cos(2^0 \\theta) = \\cos\\theta$。 **【M1】**\n右邊 $= \\frac{\\sin(2^1 \\theta)}{2^1 \\sin\\theta} = \\frac{\\sin(2\\theta)}{2\\sin\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = \\cos\\theta$。 **【M2】**\n左邊 $=$ 右邊，當 $n = 1$ 時等式成立。 **【A1】**\n- **【第二步：歸納假設】**\n假設當 $n = k$（$k \\ge 1$）時等式成立，即：\n$$\\cos\\theta \\cos(2\\theta) \\cdots \\cos(2^{k-1}\\theta) = \\frac{\\sin(2^k \\theta)}{2^k \\sin\\theta}$$ **【M2】**\n- **【第三步：歸納推導】**\n考察當 $n = k + 1$ 時的左邊乘積：\n$$\\text{左邊} = [\\cos\\theta \\cos(2\\theta) \\cdots \\cos(2^{k-1}\\theta)] \\cdot \\cos(2^k \\theta)$$ **【M2】**\n代入歸納假設：\n$$= \\frac{\\sin(2^k \\theta)}{2^k \\sin\\theta} \\cdot \\cos(2^k \\theta) = \\frac{\\sin(2^k \\theta)\\cos(2^k \\theta)}{2^k \\sin\\theta}$$ **【M2】**\n應用二倍角公式 $\\sin(2A) = 2\\sin A \\cos A \\implies \\sin A \\cos A = \\frac{1}{2}\\sin(2A)$：\n$$= \\frac{\\frac{1}{2}\\sin(2 \\cdot 2^k \\theta)}{2^k \\sin\\theta} = \\frac{\\sin(2^{k+1}\\theta)}{2^{k+1}\\sin\\theta} = \\text{右邊}$$ **【A2】**\n因此，當 $n = k + 1$ 時等式也成立。\n- 由數學歸納法可知，原恆等式對所有正整數 $n \\ge 1$ 均成立。",
            "**(b)**\n- 觀察目標式 $P = \\cos\\frac{\\pi}{7} \\cos\\frac{2\\pi}{7} \\cos\\frac{4\\pi}{7}$，這是 (a) 問在 $\\theta = \\frac{\\pi}{7}$ 且 $n = 3$ 時的特例。 **【M2】**\n- 將 $\\theta = \\frac{\\pi}{7}$ 和 $n = 3$ 代入 (a) 問的公式：\n$$P = \\frac{\\sin(2^3 \\cdot \\frac{\\pi}{7})}{2^3 \\sin\\frac{\\pi}{7}} = \\frac{\\sin\\frac{8\\pi}{7}}{8\\sin\\frac{\\pi}{7}}$$ **【M2A1】**\n- 利用正弦誘導公式化簡分子：\n$$\\sin\\frac{8\\pi}{7} = \\sin\\left(\\pi + \\frac{\\pi}{7}\\right) = -\\sin\\frac{\\pi}{7}$$ **【M2】**\n- 代入得：\n$$P = \\frac{-\\sin\\frac{\\pi}{7}}{8\\sin\\frac{\\pi}{7}} = -\\frac{1}{8}$$ **【A1】**\n故該連乘積的精確值為 $-\\frac{1}{8}$。"
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
