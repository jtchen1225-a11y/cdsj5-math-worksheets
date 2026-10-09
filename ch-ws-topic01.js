/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 01 解析幾何與圓錐曲線 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic01';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#2563eb"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#2563eb"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#2563eb"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#2563eb",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "解析幾何與圓錐曲線 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "解析幾何與圓錐曲線 · 直線垂直的法向量與係數充要條件。",
        "score": "5分",
        "q": "已知直線 $l_1: 2x - 3y + 5 = 0$ 與直線 $l_2: ax + 4y - 1 = 0$ 互相垂直，則實數 $a$ 的值為（　　）。",
        "options": [
          "(A) $6$",
          "(B) $-6$",
          "(C) $\\frac{8}{3}$",
          "(D) $-\\frac{8}{3}$",
          "(E) $\\frac{5}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "A_1 A_2 + B_1 B_2 = 0",
            "2 \\cdot a + (-3) \\cdot 4 = 0 \\implies 2a - 12 = 0 \\implies a = 6"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「直線垂直的法向量與係數充要條件。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (B) 誤記垂直條件為 $A_1 A_2 - B_1 B_2 = 0$；   - 選項 (C) 誤用平行條件 $A_1 B_2 - A_2 B_1 = 0 \\implies 8 - (-3a) = 0 \\implies a = -\\frac{8}{3}$ 且符號搞錯；   - 選項 (D) 誤將題目當作平行直線求解。  ---"
        },
        "solution": {
          "thinking": "兩直線 $A_1 x + B_1 y + C_1 = 0$ 與 $A_2 x + B_2 y + C_2 = 0$ 互相垂直的充要條件為：",
          "steps": [
            "$$A_1 A_2 + B_1 B_2 = 0$$",
            "代入得：",
            "$$2 \\cdot a + (-3) \\cdot 4 = 0 \\implies 2a - 12 = 0 \\implies a = 6$$",
            "故正確選項為 **(A)**。"
          ],
          "ans": "(A)",
          "quickTip": "- 選項 (B) 誤記垂直條件為 $A_1 A_2 - B_1 B_2 = 0$；\n  - 選項 (C) 誤用平行條件 $A_1 B_2 - A_2 B_1 = 0 \\implies 8 - (-3a) = 0 \\implies a = -\\frac{8}{3}$ 且符號搞錯；\n  - 選項 (D) 誤將題目當作平行直線求解。\n\n---"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 02",
        "topic": "解析幾何與圓錐曲線 · 點到圓的切線長公式、勾股定理幾何性質。",
        "score": "5分",
        "q": "自點 $P(4, 5)$ 向圓 $C: (x - 1)^2 + (y - 1)^2 = 9$ 作切線，切點記為 $T$，則切線段長 $|PT|$ 等於（　　）。",
        "options": [
          "(A) $3$",
          "(B) $4$",
          "(C) $5$",
          "(D) $\\sqrt{34}$",
          "(E) $\\sqrt{7}$"
        ],
        "knowledge": {
          "formulas": [
            "|PC|^2 = (4 - 1)^2 + (5 - 1)^2 = 3^2 + 4^2 = 25",
            "|PT| = \\sqrt{|PC|^2 - r^2} = \\sqrt{25 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「點到圓的切線長公式、勾股定理幾何性質。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (C) 為點 $P$ 到圓心的距離 $|PC| = 5$，漏減半徑平方；   - 選項 (D) 誤將點 $P$ 坐標直接代入圓方程加法算錯；   - 選項 (E) 誤將半徑設為 $9$ 進行運算。  ---"
        },
        "solution": {
          "thinking": "圓 $C$ 的圓心為 $C(1, 1)$，半徑為 $r = \\sqrt{9} = 3$。",
          "steps": [
            "計算點 $P(4, 5)$ 到圓心 $C(1, 1)$ 的距離平方：",
            "$$|PC|^2 = (4 - 1)^2 + (5 - 1)^2 = 3^2 + 4^2 = 25$$",
            "在直角三角形 $PTC$ 中，$\\angle PTC = 90^\\circ$，由勾股定理：",
            "$$|PT| = \\sqrt{|PC|^2 - r^2} = \\sqrt{25 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$",
            "故正確選項為 **(B)**。"
          ],
          "ans": "(B)",
          "quickTip": "- 選項 (C) 為點 $P$ 到圓心的距離 $|PC| = 5$，漏減半徑平方；\n  - 選項 (D) 誤將點 $P$ 坐標直接代入圓方程加法算錯；\n  - 選項 (E) 誤將半徑設為 $9$ 進行運算。\n\n---"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      📐 動態探究：點到圓的切線長公式 $|PT| = \\sqrt{|PC|^2 - r^2}$
    </div>
    <div id="vis-geo-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>點 P 橫坐標 x：</label>
      <input type="range" id="geoSl" min="3" max="8" value="4" step="0.1">
      <span class="ival" id="geoVal">4.0</span>
    </div>
    <div class="step-txt" id="geoInfo" style="text-align:center; margin-top:4px;">
      圓心 C(1, 1)，半徑 r = 3，勾股定理驗證直角三角形 PTC
    </div>
  `;
  const svgHost = host.querySelector('#vis-geo-svg');
  const slider = host.querySelector('#geoSl');
  const valLabel = host.querySelector('#geoVal');
  const info = host.querySelector('#geoInfo');

  function draw(px) {
    valLabel.textContent = px.toFixed(1);
    const py = 5, cx = 1, cy = 1, r = 3;
    const d2 = (px - cx)**2 + (py - cy)**2;
    const d = Math.sqrt(d2);
    const ptLen = Math.sqrt(Math.max(0, d2 - r**2));
    info.innerHTML = `點 P(${px.toFixed(1)}, 5)，距離 |PC| = ${d.toFixed(2)}，切線長 |PT| = ${ptLen.toFixed(2)}`;

    const W = 360, H = 220, ox = 120, oy = 140, scale = 25;
    const toX = x => ox + (x - cx) * scale;
    const toY = y => oy - (y - cy) * scale;

    const C_scr = [toX(cx), toY(cy)];
    const P_scr = [toX(px), toY(py)];

    const alpha = Math.atan2(py - cy, px - cx);
    const beta = Math.acos(Math.min(1, r / d));
    const tx = cx + r * Math.cos(alpha - beta);
    const ty = cy + r * Math.sin(alpha - beta);
    const T_scr = [toX(tx), toY(ty)];

    let s = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    s += `<circle cx="${C_scr[0]}" cy="${C_scr[1]}" r="${r * scale}" fill="rgba(37,99,235,0.1)" stroke="#3b82f6" stroke-width="2"/>`;
    s += `<polygon points="${P_scr[0]},${P_scr[1]} ${T_scr[0]},${T_scr[1]} ${C_scr[0]},${C_scr[1]}" fill="rgba(234,179,8,0.12)" stroke="#eab308" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    s += `<line x1="${P_scr[0]}" y1="${P_scr[1]}" x2="${T_scr[0]}" y2="${T_scr[1]}" stroke="#ef4444" stroke-width="2.5"/>`;
    s += `<line x1="${C_scr[0]}" y1="${C_scr[1]}" x2="${T_scr[0]}" y2="${T_scr[1]}" stroke="#10b981" stroke-width="2"/>`;
    s += `<line x1="${P_scr[0]}" y1="${P_scr[1]}" x2="${C_scr[0]}" y2="${C_scr[1]}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>`;
    s += `<circle cx="${C_scr[0]}" cy="${C_scr[1]}" r="4" fill="#3b82f6"/>`;
    s += `<text x="${C_scr[0] - 14}" y="${C_scr[1] + 16}" fill="#93c5fd" font-size="12" font-weight="700">C(1,1)</text>`;
    s += `<circle cx="${P_scr[0]}" cy="${P_scr[1]}" r="5" fill="#ef4444"/>`;
    s += `<text x="${P_scr[0] + 8}" y="${P_scr[1]}" fill="#fca5a5" font-size="12" font-weight="700">P</text>`;
    s += `<circle cx="${T_scr[0]}" cy="${T_scr[1]}" r="4" fill="#10b981"/>`;
    s += `<text x="${T_scr[0] + 6}" y="${T_scr[1] - 6}" fill="#6ee7b7" font-size="12" font-weight="700">T</text>`;
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
        "qNum": "題 03",
        "topic": "解析幾何與圓錐曲線 · 拋物線第一定義、焦半徑公式。",
        "score": "5分",
        "q": "已知拋物線 $C: y^2 = 8x$ 的焦點為 $F$，點 $P(x_0, y_0)$ 為拋物線上位於第一象限的一點。若 $|PF| = 6$，則點 $P$ 的縱坐標 $y_0$ 為（　　）。",
        "options": [
          "(A) $4$",
          "(B) $4\\sqrt{2}$",
          "(C) $2\\sqrt{2}$",
          "(D) $8$",
          "(E) $2\\sqrt{6}$"
        ],
        "knowledge": {
          "formulas": [
            "|PF| = x_0 + \\frac{p}{2} = x_0 + 2 = 6 \\implies x_0 = 4",
            "y_0^2 = 8 \\times 4 = 32"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「拋物線第一定義、焦半徑公式。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (A) 為橫坐標 $x_0 = 4$，審題不清誤答橫坐標；   - 選項 (C) 誤將 $y_0^2 = 8$ 計算開方。  ---"
        },
        "solution": {
          "thinking": "拋物線標準方程為 $y^2 = 2px = 8x$，故 $2p = 8 \\implies p = 4$，$\\frac{p}{2} = 2$。焦點為 $F(2, 0)$，準線為 $x = -2$。",
          "steps": [
            "由拋物線定義，動點 $P(x_0, y_0)$ 到焦點的距離等於到準線的距離：",
            "$$|PF| = x_0 + \\frac{p}{2} = x_0 + 2 = 6 \\implies x_0 = 4$$",
            "將 $x_0 = 4$ 代入拋物線方程 $y^2 = 8x$ 得：",
            "$$y_0^2 = 8 \\times 4 = 32$$",
            "因為點 $P$ 位於第一象限，故 $y_0 > 0$：",
            "$$y_0 = \\sqrt{32} = 4\\sqrt{2}$$",
            "故正確選項為 **(B)**。"
          ],
          "ans": "(B)",
          "quickTip": "- 選項 (A) 為橫坐標 $x_0 = 4$，審題不清誤答橫坐標；\n  - 選項 (C) 誤將 $y_0^2 = 8$ 計算開方。\n\n---"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 04",
        "topic": "解析幾何與圓錐曲線 · 等軸雙曲線特徵、焦點到漸近線距離幾何不變量。",
        "score": "5分",
        "q": "已知雙曲線 $C: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$（$a > 0, b > 0$）的兩條漸近線互相垂直，且焦點到其漸近線的距離為 $2$，則該雙曲線的實軸長 $2a$ 為（　　）。",
        "options": [
          "(A) $2$",
          "(B) $2\\sqrt{2}$",
          "(C) $4$",
          "(D) $4\\sqrt{2}$",
          "(E) $8$"
        ],
        "knowledge": {
          "formulas": [
            "\\left(\\frac{b}{a}\\right)\\left(-\\frac{b}{a}\\right) = -1 \\implies \\frac{b^2}{a^2} = 1 \\implies b = a",
            "d = \\frac{|b c|}{\\sqrt{a^2 + b^2}} = \\frac{b c}{c} = b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「等軸雙曲線特徵、焦點到漸近線距離幾何不變量。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (A) 誤將實軸長當作實半軸長 $a = 2$；   - 選項 (B) 誤將 $c = 2\\sqrt{2}$ 作為答案；   - 選項 (D) 誤將 $2c = 4\\sqrt{2}$ 作為答案。  ---"
        },
        "solution": {
          "thinking": "雙曲線的漸近線方程為 $y = \\pm \\frac{b}{a}x$。",
          "steps": [
            "兩條漸近線互相垂直，則斜率之積為 $-1$：",
            "$$\\left(\\frac{b}{a}\\right)\\left(-\\frac{b}{a}\\right) = -1 \\implies \\frac{b^2}{a^2} = 1 \\implies b = a$$",
            "即雙曲線為等軸雙曲線。",
            "設焦點為 $F(c, 0)$（其中 $c = \\sqrt{a^2 + b^2} = \\sqrt{2}a$）。漸近線方程化為一般式 $bx - ay = 0$。",
            "焦點 $F(c, 0)$ 到漸近線的距離公式為：",
            "$$d = \\frac{|b c|}{\\sqrt{a^2 + b^2}} = \\frac{b c}{c} = b$$",
            "這是一個重要幾何結論：**雙曲線焦點到漸近線的距離恆等於虛半軸長 $b$**。",
            "由題意 $d = b = 2$，因為 $b = a$，所以 $a = 2$。",
            "實軸長為 $2a = 2 \\times 2 = 4$。",
            "故正確選項為 **(C)**。"
          ],
          "ans": "(C)",
          "quickTip": "- 選項 (A) 誤將實軸長當作實半軸長 $a = 2$；\n  - 選項 (B) 誤將 $c = 2\\sqrt{2}$ 作為答案；\n  - 選項 (D) 誤將 $2c = 4\\sqrt{2}$ 作為答案。\n\n---"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 05",
        "topic": "解析幾何與圓錐曲線 · 橢圓焦點三角形面積公式 $S = b^2 \\tan\\frac{\\theta}{2}$。",
        "score": "5分",
        "q": "設橢圓 $C: \\frac{x^2}{16} + \\frac{y^2}{7} = 1$ 的左、右焦點分別為 $F_1, F_2$。點 $P$ 為橢圓上的一點，若 $\\angle F_1 P F_2 = 60^\\circ$，則 $\\triangle F_1 P F_2$ 的面積為（　　）。",
        "options": [
          "(A) $\\frac{7\\sqrt{3}}{3}$",
          "(B) $7\\sqrt{3}$",
          "(C) $\\frac{16\\sqrt{3}}{3}$",
          "(D) $4\\sqrt{3}$",
          "(E) $\\frac{7}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "S_{\\triangle F_1 P F_2} = b^2 \\tan\\frac{\\theta}{2}",
            "S = 7 \\cdot \\tan 30^\\circ = 7 \\cdot \\frac{\\sqrt{3}}{3} = \\frac{7\\sqrt{3}}{3}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「橢圓焦點三角形面積公式 $S = b^2 \\tan\\frac{\\theta}{2}$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "**【方法一：四校聯考秒殺公式】**",
          "steps": [
            "設橢圓焦點三角形張角 $\\angle F_1 P F_2 = \\theta$，則焦點三角形面積公式為：",
            "$$S_{\\triangle F_1 P F_2} = b^2 \\tan\\frac{\\theta}{2}$$",
            "本題中 $a^2 = 16, b^2 = 7$，$\\theta = 60^\\circ$，故 $\\frac{\\theta}{2} = 30^\\circ$：",
            "$$S = 7 \\cdot \\tan 30^\\circ = 7 \\cdot \\frac{\\sqrt{3}}{3} = \\frac{7\\sqrt{3}}{3}$$",
            "故正確選項為 **(A)**。",
            "**【方法二：餘弦定理與定義法推導】**",
            "由橢圓定義，$|PF_1| + |PF_2| = 2a = 8$。兩邊平方：",
            "$$|PF_1|^2 + |PF_2|^2 + 2|PF_1||PF_2| = 64$$",
            "由餘弦定理，在 $\\triangle F_1 P F_2$ 中，$|F_1 F_2| = 2c = 2\\sqrt{16 - 7} = 2\\sqrt{9} = 6$：",
            "$$|F_1 F_2|^2 = |PF_1|^2 + |PF_2|^2 - 2|PF_1||PF_2|\\cos 60^\\circ$$",
            "$$36 = |PF_1|^2 + |PF_2|^2 - |PF_1||PF_2|$$",
            "兩式相減：",
            "$$64 - 36 = 3|PF_1||PF_2| \\implies 3|PF_1||PF_2| = 28 \\implies |PF_1||PF_2| = \\frac{28}{3}$$",
            "因此三角形面積為：",
            "$$S = \\frac{1}{2}|PF_1||PF_2|\\sin 60^\\circ = \\frac{1}{2} \\cdot \\frac{28}{3} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{7\\sqrt{3}}{3}$$",
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
        "topic": "解析幾何與圓錐曲線 · 橢圓中點弦性質、點差法公式 $k_{AB} \\cdot k_{OM} = -\\frac{b^2}{a^2}$。",
        "score": "5分",
        "q": "已知點 $M(1, 1)$ 是橢圓 $C: \\frac{x^2}{12} + \\frac{y^2}{4} = 1$ 的一條弦 $AB$ 的中點，則弦 $AB$ 所在直線的方程為（　　）。",
        "options": [
          "(A) $x + 3y - 4 = 0$",
          "(B) $3x + y - 4 = 0$",
          "(C) $x - 3y + 2 = 0$",
          "(D) $x + y - 2 = 0$",
          "(E) $3x - y - 2 = 0$"
        ],
        "knowledge": {
          "formulas": [
            "\\begin{cases} \\frac{x_1^2}{12} + \\frac{y_1^2}{4} = 1 \\\\ \\frac{x_2^2}{12} + \\frac{y_2^2}{4} = 1 \\end{cases}",
            "\\frac{x_1^2 - x_2^2}{12} + \\frac{y_1^2 - y_2^2}{4} = 0 \\implies \\frac{(x_1 - x_2)(x_1 + x_2)}{12} + \\frac{(y_1 - y_2)(y_1 + y_2)}{4} = 0"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「橢圓中點弦性質、點差法公式 $k_{AB} \\cdot k_{OM} = -\\frac{b^2}{a^2}$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "設弦端點坐標為 $A(x_1, y_1)$ 和 $B(x_2, y_2)$。兩點均在橢圓上：",
          "steps": [
            "$$\\begin{cases} \\frac{x_1^2}{12} + \\frac{y_1^2}{4} = 1 \\\\ \\frac{x_2^2}{12} + \\frac{y_2^2}{4} = 1 \\end{cases}$$",
            "兩式相減得：",
            "$$\\frac{x_1^2 - x_2^2}{12} + \\frac{y_1^2 - y_2^2}{4} = 0 \\implies \\frac{(x_1 - x_2)(x_1 + x_2)}{12} + \\frac{(y_1 - y_2)(y_1 + y_2)}{4} = 0$$",
            "因為 $M(1, 1)$ 是 $AB$ 中點，所以 $x_1 + x_2 = 2 \\times 1 = 2$，$y_1 + y_2 = 2 \\times 1 = 2$。代入得：",
            "$$\\frac{2(x_1 - x_2)}{12} + \\frac{2(y_1 - y_2)}{4} = 0 \\implies \\frac{x_1 - x_2}{6} + \\frac{y_1 - y_2}{2} = 0$$",
            "兩邊同除以 $x_1 - x_2$：",
            "$$\\frac{1}{6} + \\frac{1}{2} k_{AB} = 0 \\implies \\frac{1}{2} k_{AB} = -\\frac{1}{6} \\implies k_{AB} = -\\frac{1}{3}$$",
            "已知直線過點 $M(1, 1)$，由點斜式：",
            "$$y - 1 = -\\frac{1}{3}(x - 1) \\implies 3(y - 1) = -(x - 1) \\implies x + 3y - 4 = 0$$",
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
    "color": "#2563eb",
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
        "topic": "解析幾何與圓錐曲線 · 題 07 綜合踩點",
        "score": "15分",
        "q": "已知圓 $C$ 的方程為 $x^2 + y^2 - 2x - 4y = 0$，點 $P(4, 3)$ 為圓外一點。  \n(a) 將圓方程化為標準方程，求圓心坐標及半徑，並求過點 $P$ 向圓 $C$ 所引的兩條切線的方程。 (7 分)  \n(b) 設兩切點分別為 $A$ 與 $B$。求切線段長 $|PA|$，並求切點弦 $AB$ 的長度。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "(x^2 - 2x + 1) + (y^2 - 4y + 4) = 1 + 4 \\implies (x - 1)^2 + (y - 2)^2 = 5",
            "y - 3 = k(x - 4) \\iff kx - y + (3 - 4k) = 0"
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
            "**(a)**\n- 配方圓的方程：\n$$(x^2 - 2x + 1) + (y^2 - 4y + 4) = 1 + 4 \\implies (x - 1)^2 + (y - 2)^2 = 5$$\n故圓心坐標為 $C(1, 2)$，半徑為 $r = \\sqrt{5}$。 **【M1A1】**\n- 設過點 $P(4, 3)$ 的直線方程斜率為 $k$：\n$$y - 3 = k(x - 4) \\iff kx - y + (3 - 4k) = 0$$ **【M1】**\n- 直線與圓相切的充要條件是圓心 $C(1, 2)$ 到直線的距離 $d = r = \\sqrt{5}$：\n$$\\frac{|k(1) - 2 + 3 - 4k|}{\\sqrt{k^2 + 1}} = \\frac{|1 - 3k|}{\\sqrt{k^2 + 1}} = \\sqrt{5}$$ **【M1】**\n- 兩邊平方整理：\n$$(1 - 3k)^2 = 5(k^2 + 1) \\implies 9k^2 - 6k + 1 = 5k^2 + 5$$\n$$4k^2 - 6k - 4 = 0 \\implies 2k^2 - 3k - 2 = 0$$ **【M1】**\n$$(2k + 1)(k - 2) = 0 \\implies k_1 = 2, \\quad k_2 = -\\frac{1}{2}$$ **【A1】**\n- 當 $k = 2$ 時，切線方程為 $2x - y - 5 = 0$；\n當 $k = -\\frac{1}{2}$ 時，切線方程為 $-\\frac{1}{2}x - y + (3 + 2) = 0 \\iff x + 2y - 10 = 0$。\n故兩條切線方程分別為 $2x - y - 5 = 0$ 與 $x + 2y - 10 = 0$。 **【A1】**",
            "**(b)**\n- 計算點 $P(4, 3)$ 到圓心 $C(1, 2)$ 的距離：\n$$|PC| = \\sqrt{(4 - 1)^2 + (3 - 2)^2} = \\sqrt{3^2 + 1^2} = \\sqrt{10}$$ **【M1A1】**\n- 在直角三角形 $PAC$ 中（$\\angle PAC = 90^\\circ$）：\n$$|PA| = \\sqrt{|PC|^2 - r^2} = \\sqrt{10 - 5} = \\sqrt{5}$$ **【M1A1】**\n- 設線段 $PC$ 與切點弦 $AB$ 相交於點 $H$。由圓的幾何對稱性，$PC \\perp AB$ 且 $H$ 為 $AB$ 中點。\n在 $\\text{Rt}\\triangle PAC$ 中，利用等面積法求高 $AH$：\n$$S_{\\triangle PAC} = \\frac{1}{2} |PA| \\cdot |AC| = \\frac{1}{2} |PC| \\cdot AH$$ **【M1】**\n$$AH = \\frac{|PA| \\cdot |AC|}{|PC|} = \\frac{\\sqrt{5} \\cdot \\sqrt{5}}{\\sqrt{10}} = \\frac{5}{\\sqrt{10}} = \\frac{\\sqrt{10}}{2}$$ **【M1A1】**\n- 故切點弦長為：\n$$|AB| = 2 \\cdot AH = 2 \\cdot \\frac{\\sqrt{10}}{2} = \\sqrt{10}$$ **【A1】**\n---"
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
        "topic": "解析幾何與圓錐曲線 · 題 08 綜合踩點",
        "score": "15分",
        "q": "已知拋物線 $C: y^2 = 4x$ 的焦點為 $F$。直線 $l$ 過焦點 $F$ 且斜率為 $k = 1$，與拋物線交於 $A, B$ 兩點。  \n(a) 求焦點 $F$ 的坐標，並求弦 $AB$ 的長度。 (7 分)  \n(b) 設坐標原點為 $O$，求 $\\triangle OAB$ 的面積。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "y = x - 1 \\iff x = y + 1",
            "y^2 = 4(y + 1) \\implies y^2 - 4y - 4 = 0"
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
            "**(a)**\n- 拋物線 $y^2 = 4x = 2px \\implies p = 2$，故焦點坐標為 $F(1, 0)$，準線方程為 $x = -1$。 **【B1】**\n- 直線 $l$ 過焦點 $F(1, 0)$ 且斜率 $k = 1$，方程為：\n$$y = x - 1 \\iff x = y + 1$$ **【M1】**\n- 將 $x = y + 1$ 代入拋物線方程 $y^2 = 4x$：\n$$y^2 = 4(y + 1) \\implies y^2 - 4y - 4 = 0$$ **【M1】**\n- 判別式 $\\Delta = (-4)^2 - 4(1)(-4) = 16 + 16 = 32 > 0$。設交點為 $A(x_1, y_1), B(x_2, y_2)$。\n由韋達定理：\n$$y_1 + y_2 = 4, \\quad y_1 y_2 = -4$$ **【A1】**\n- 利用焦半徑之和求弦長 $|AB|$：\n$$x_1 = y_1 + 1, \\quad x_2 = y_2 + 1 \\implies x_1 + x_2 = y_1 + y_2 + 2 = 4 + 2 = 6$$ **【M1A1】**\n$$|AB| = x_1 + x_2 + p = 6 + 2 = 8$$ **【A1】**\n*(另解：用弦長公式 $|AB| = \\sqrt{1 + k^2}\\sqrt{(y_1+y_2)^2 - 4y_1 y_2} = \\sqrt{2}\\sqrt{16+16} = \\sqrt{2}\\sqrt{32} = 8$，同樣給滿分)*",
            "**(b)**\n- 將 $\\triangle OAB$ 沿 $x$ 軸（線段 $OF$）分割為兩個以 $OF$ 為底的三角形：\n$$S_{\\triangle OAB} = S_{\\triangle OFA} + S_{\\triangle OFB} = \\frac{1}{2} |OF| \\cdot |y_1| + \\frac{1}{2} |OF| \\cdot |y_2|$$ **【M2】**\n- 因為 $y_1 y_2 = -4 < 0$，$A, B$ 分居 $x$ 軸兩側，所以 $|y_1| + |y_2| = |y_1 - y_2|$：\n$$S_{\\triangle OAB} = \\frac{1}{2} |OF| \\cdot |y_1 - y_2|$$ **【M2】**\n- 底邊 $|OF| = 1$。計算高差：\n$$|y_1 - y_2| = \\sqrt{(y_1 + y_2)^2 - 4y_1 y_2} = \\sqrt{4^2 - 4(-4)} = \\sqrt{32} = 4\\sqrt{2}$$ **【M1A1】**\n- 代入得面積：\n$$S_{\\triangle OAB} = \\frac{1}{2} \\cdot 1 \\cdot 4\\sqrt{2} = 2\\sqrt{2}$$ **【M1A1】**\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
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
    "color": "#2563eb",
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
        "topic": "解析幾何與圓錐曲線 · 題 09 綜合踩點",
        "score": "20分",
        "q": "已知橢圓 $C: \\frac{x^2}{4} + y^2 = 1$。過原點 $O$ 作兩條互相垂直的射線，分別交橢圓 $C$ 於點 $A$ 與點 $B$。  \n(a) 設射線 $OA$ 的傾斜角為 $\\alpha$（$0 \\le \\alpha < \\frac{\\pi}{2}$）。證明：$\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2}$ 為定值，並求出該定值。 (8 分)  \n(b) 求 $\\triangle OAB$ 面積的取值範圍（即最大值與最小值）。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{r_1^2 \\cos^2\\alpha}{4} + r_1^2 \\sin^2\\alpha = 1 \\implies r_1^2 \\left(\\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha\\right) = 1",
            "\\frac{1}{|OA|^2} = \\frac{1}{r_1^2} = \\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha"
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
            "**(a)**\n- 設射線 $OA$ 的傾斜角為 $\\alpha$，則點 $A$ 的坐標可設為 $(r_1 \\cos\\alpha, r_1 \\sin\\alpha)$，其中 $r_1 = |OA| > 0$。 **【M1】**\n- 因為點 $A$ 在橢圓 $\\frac{x^2}{4} + y^2 = 1$ 上，代入得：\n$$\\frac{r_1^2 \\cos^2\\alpha}{4} + r_1^2 \\sin^2\\alpha = 1 \\implies r_1^2 \\left(\\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha\\right) = 1$$\n$$\\frac{1}{|OA|^2} = \\frac{1}{r_1^2} = \\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha$$ **【M2A1】**\n- 因為射線 $OA \\perp OB$，所以射線 $OB$ 的傾斜角為 $\\alpha + \\frac{\\pi}{2}$。 **【M1】**\n同理點 $B$ 的坐標為 $(r_2 \\cos(\\alpha + \\frac{\\pi}{2}), r_2 \\sin(\\alpha + \\frac{\\pi}{2}))$，其中 $r_2 = |OB| > 0$。代入橢圓方程：\n$$\\frac{1}{|OB|^2} = \\frac{\\cos^2(\\alpha + \\frac{\\pi}{2})}{4} + \\sin^2\\left(\\alpha + \\frac{\\pi}{2}\\right) = \\frac{\\sin^2\\alpha}{4} + \\cos^2\\alpha$$ **【M1A1】**\n- 將兩式相加：\n$$\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2} = \\left(\\frac{\\cos^2\\alpha}{4} + \\sin^2\\alpha\\right) + \\left(\\frac{\\sin^2\\alpha}{4} + \\cos^2\\alpha\\right)$$\n$$= \\frac{\\cos^2\\alpha + \\sin^2\\alpha}{4} + (\\sin^2\\alpha + \\cos^2\\alpha) = \\frac{1}{4} + 1 = \\frac{5}{4}$$ **【A1】**\n此值與傾斜角 $\\alpha$ 無關，故 $\\frac{1}{|OA|^2} + \\frac{1}{|OB|^2}$ 為定值 $\\frac{5}{4}$。",
            "**(b)**\n- 因為 $OA \\perp OB$，$\\triangle OAB$ 是以 $\\angle AOB = 90^\\circ$ 為直角的直角三角形，其面積為：\n$$S = \\frac{1}{2} |OA| \\cdot |OB|$$ **【M1】**\n- 令 $u = \\frac{1}{|OA|^2}$，$v = \\frac{1}{|OB|^2}$，由 (a) 問知 $u + v = \\frac{5}{4}$，且：\n$$u = \\frac{1 - \\sin^2\\alpha}{4} + \\sin^2\\alpha = \\frac{1}{4} + \\frac{3}{4}\\sin^2\\alpha$$\n因為 $0 \\le \\alpha < \\frac{\\pi}{2}$，$\\sin^2\\alpha \\in [0, 1)$，所以 $u \\in [\\frac{1}{4}, 1)$。由對稱性 $u, v \\in [\\frac{1}{4}, 1]$。 **【M2】**\n- 由基本均值不等式：\n$$u \\cdot v \\le \\left(\\frac{u + v}{2}\\right)^2 = \\left(\\frac{5}{8}\\right)^2 = \\frac{25}{64}$$ **【M2】**\n當且僅當 $u = v = \\frac{5}{8}$ 時（即 $\\sin^2\\alpha = \\frac{1}{2} \\implies \\alpha = \\frac{\\pi}{4}$）等號成立。 **【A1】**\n- 因為 $S = \\frac{1}{2}\\frac{1}{\\sqrt{uv}}$，所以當 $uv$ 取最大值 $\\frac{25}{64}$ 時，$S$ 取得最小值：\n$$S_{\\min} = \\frac{1}{2} \\frac{1}{\\sqrt{\\frac{25}{64}}} = \\frac{1}{2} \\cdot \\frac{8}{5} = \\frac{4}{5}$$ **【M2A1】**\n- 另一方面，考察邊界情況：\n$$uv = u\\left(\\frac{5}{4} - u\\right) = -u^2 + \\frac{5}{4}u$$\n此二次函數對稱軸為 $u = \\frac{5}{8}$，開口向下。\n在區間 $[\\frac{1}{4}, 1]$ 的端點 $u = \\frac{1}{4}$（或 $u = 1$）處，$uv$ 取得最小值：\n$$uv = \\frac{1}{4} \\cdot \\left(\\frac{5}{4} - \\frac{1}{4}\\right) = \\frac{1}{4} \\cdot 1 = \\frac{1}{4}$$ **【M2】**\n此時 $S$ 取得最大值：\n$$S_{\\max} = \\frac{1}{2} \\frac{1}{\\sqrt{\\frac{1}{4}}} = \\frac{1}{2} \\cdot 2 = 1$$ **【A1】**\n- 綜上所述，$\\triangle OAB$ 面積的取值範圍為 $\\left[\\frac{4}{5}, 1\\right]$。 **【A1】**\n---"
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
        "topic": "解析幾何與圓錐曲線 · 題 10 綜合踩點",
        "score": "20分",
        "q": "已知雙曲線 $C: 3x^2 - y^2 = 3$ 的右焦點為 $F$。直線 $l$ 經過點 $F$ 且斜率為 $k = 2$，與雙曲線 $C$ 的兩支分別交於 $A, B$ 兩點。  \n(a) 求雙曲線的標準方程、離心率 $e$ 及焦點 $F$ 的坐標；求弦長 $|AB|$。 (10 分)  \n(b) 設點 $P(-2, 0)$ 為左焦點，求 $\\triangle PAB$ 的面積。 (10 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{x^2}{1} - \\frac{y^2}{3} = 1",
            "y = 2(x - 2)"
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
            "**(a)**\n- 方程兩邊同除以 3：\n$$\\frac{x^2}{1} - \\frac{y^2}{3} = 1$$\n此為雙曲線的標準方程，其中 $a^2 = 1, b^2 = 3$。 **【M1A1】**\n- 半焦距 $c = \\sqrt{a^2 + b^2} = \\sqrt{1 + 3} = 2$。\n離心率 $e = \\frac{c}{a} = \\frac{2}{1} = 2$。\n右焦點坐標為 $F(2, 0)$。 **【M1A1】**\n- 直線 $l$ 經過 $F(2, 0)$ 且斜率 $k = 2$，方程為：\n$$y = 2(x - 2)$$ **【M1】**\n- 將直線方程代入雙曲線方程 $3x^2 - y^2 = 3$：\n$$3x^2 - [2(x - 2)]^2 = 3 \\implies 3x^2 - 4(x^2 - 4x + 4) = 3$$\n$$3x^2 - 4x^2 + 16x - 16 = 3 \\implies -x^2 + 16x - 19 = 0 \\iff x^2 - 16x + 19 = 0$$ **【M2】**\n- 判別式 $\\Delta = (-16)^2 - 4(1)(19) = 256 - 76 = 180 > 0$。\n韋達定理：$x_1 + x_2 = 16, x_1 x_2 = 19$。 **【A1】**\n- 弦長公式：\n$$|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + 2^2} \\sqrt{\\Delta} = \\sqrt{5} \\cdot \\sqrt{180}$$ **【M1】**\n$$= \\sqrt{5} \\cdot 6\\sqrt{5} = 6 \\times 5 = 30$$ **【A1】**",
            "**(b)**\n- 點 $P(-2, 0)$ 為左焦點，右焦點為 $F(2, 0)$。兩點均在 $x$ 軸上，線段 $PF$ 的長度為：\n$$|PF| = 2 - (-2) = 4$$ **【M2A1】**\n- 直線 $AB$ 過右焦點 $F$。以 $PF$ 為底邊，將 $\\triangle PAB$ 沿 $x$ 軸拆分為兩個三角形：\n$$S_{\\triangle PAB} = S_{\\triangle PFA} + S_{\\triangle PFB} = \\frac{1}{2} |PF| \\cdot |y_1| + \\frac{1}{2} |PF| \\cdot |y_2|$$ **【M2】**\n- 因為直線斜率為 $2$，且直線與雙曲線兩支分別相交，交點縱坐標滿：\n$$y_1 = 2(x_1 - 2), \\quad y_2 = 2(x_2 - 2)$$\n$y_1 y_2 = 4[x_1 x_2 - 2(x_1 + x_2) + 4] = 4[19 - 2(16) + 4] = 4[19 - 32 + 4] = 4(-9) = -36 < 0$。\n這證明 $A, B$ 分居 $x$ 軸上下兩側，故 $|y_1| + |y_2| = |y_1 - y_2|$。 **【M2】**\n- 計算縱坐標之差：\n$$|y_1 - y_2| = 2 |x_1 - x_2| = 2 \\sqrt{180} = 2 \\cdot 6\\sqrt{5} = 12\\sqrt{5}$$ **【A1】**\n- 計算面積：\n$$S_{\\triangle PAB} = \\frac{1}{2} |PF| \\cdot |y_1 - y_2| = \\frac{1}{2} \\cdot 4 \\cdot 12\\sqrt{5} = 24\\sqrt{5}$$ **【M1A1】**"
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
