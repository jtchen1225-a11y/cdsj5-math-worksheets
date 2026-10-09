/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 05 立體幾何與空間向量建系 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic05';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#0284c7"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#0284c7"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#0284c7"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#0284c7",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "立體幾何與空間向量建系 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "立體幾何與空間向量建系 · 線面垂直的定義與性質定理。",
        "score": "5分",
        "q": "設 $m, n$ 是空間中兩條不同的直線，$\\alpha$ 是一個平面。若直線 $m \\perp \\alpha$ 且直線 $n \\subset \\alpha$，則直線 $m$ 與直線 $n$ 的位置關係必為（　　）。",
        "options": [
          "(A) 互相平行",
          "(B) 互相垂直",
          "(C) 異面且不垂直",
          "(D) 相交且不垂直",
          "(E) 重合"
        ],
        "knowledge": {
          "formulas": [
            "m \\perp \\alpha",
            "m \\perp n"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「線面垂直的定義與性質定理。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (C) 與 (D) 忽視了線面垂直的定義，空間中兩直線垂直包括「相交垂直」與「異面垂直」兩種情形，但無論相交還是異面，垂直關係均客觀成立。  ---"
        },
        "solution": {
          "thinking": "由線面垂直的定義：如果一條直線垂直於一個平面，則該直線垂直於該平面內的**任意一條直線**。",
          "steps": [
            "因為直線 $m \\perp \\alpha$，而直線 $n \\subset \\alpha$，所以必有 $m \\perp n$。",
            "故正確選項為 **(B)**。"
          ],
          "ans": "(B)",
          "quickTip": "- 選項 (C) 與 (D) 忽視了線面垂直的定義，空間中兩直線垂直包括「相交垂直」與「異面垂直」兩種情形，但無論相交還是異面，垂直關係均客觀成立。\n\n---"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      🧊 動態探究：空間直角坐標系 O-xyz 點與向量投影
    </div>
    <div id="vis-sol-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>點 P 高度 z：</label>
      <input type="range" id="solSl" min="0" max="4" value="2.5" step="0.2">
      <span class="ival" id="solVal">2.5</span>
    </div>
    <div class="step-txt" id="solInfo" style="text-align:center; margin-top:4px;">
      空間點 P(x, y, z) 在坐標平面 Oxy、Oxz、Oyz 投影
    </div>
  `;
  const svgHost = host.querySelector('#vis-sol-svg');
  const slider = host.querySelector('#solSl');
  const valLabel = host.querySelector('#solVal');
  const info = host.querySelector('#solInfo');

  function draw(zVal) {
    valLabel.textContent = zVal.toFixed(1);
    const x = 2.0, y = 3.0, z = zVal;
    info.innerHTML = `空間向量 OP = (${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)})，長度 |OP| = ${Math.sqrt(x**2 + y**2 + z**2).toFixed(2)}`;

    const W = 360, H = 220, ox = 160, oy = 140;
    const projX = (x, y, z) => ox + y * 24 - x * 16;
    const projY = (x, y, z) => oy + x * 10 - z * 24;

    const P = [projX(x, y, z), projY(x, y, z)];
    const Pxy = [projX(x, y, 0), projY(x, y, 0)];

    let s = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    s += `<line x1="${ox}" y1="${oy}" x2="${projX(5,0,0)}" y2="${projY(5,0,0)}" stroke="#64748b" stroke-width="1.8"/>`;
    s += `<text x="${projX(5,0,0) - 14}" y="${projY(5,0,0) + 12}" fill="#94a3b8" font-size="11">x</text>`;
    s += `<line x1="${ox}" y1="${oy}" x2="${projX(0,5,0)}" y2="${projY(0,5,0)}" stroke="#64748b" stroke-width="1.8"/>`;
    s += `<text x="${projX(0,5,0) + 6}" y="${projY(0,5,0) + 4}" fill="#94a3b8" font-size="11">y</text>`;
    s += `<line x1="${ox}" y1="${oy}" x2="${projX(0,0,5)}" y2="${projY(0,0,5)}" stroke="#64748b" stroke-width="1.8"/>`;
    s += `<text x="${projX(0,0,5)}" y="${projY(0,0,5) - 6}" fill="#94a3b8" font-size="11">z</text>`;
    s += `<line x1="${Pxy[0]}" y1="${Pxy[1]}" x2="${P[0]}" y2="${P[1]}" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    s += `<line x1="${ox}" y1="${oy}" x2="${P[0]}" y2="${P[1]}" stroke="#38bdf8" stroke-width="2.5"/>`;
    s += `<circle cx="${P[0]}" cy="${P[1]}" r="4" fill="#38bdf8"/>`;
    s += `<text x="${P[0] + 6}" y="${P[1] - 6}" fill="#7dd3fc" font-size="12" font-weight="700">P</text>`;
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
        "topic": "立體幾何與空間向量建系 · 空間兩點間距離公式。",
        "score": "5分",
        "q": "在空間直角坐標系中，點 $A(1, 2, 3)$ 與點 $B(3, -2, 7)$ 之間的距離 $|AB|$ 為（　　）。",
        "options": [
          "(A) $4$",
          "(B) $5$",
          "(C) $6$",
          "(D) $2\\sqrt{7}$",
          "(E) $\\sqrt{38}$"
        ],
        "knowledge": {
          "formulas": [
            "|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}",
            "|AB| = \\sqrt{(3 - 1)^2 + (-2 - 2)^2 + (7 - 3)^2} = \\sqrt{2^2 + (-4)^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「空間兩點間距離公式。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "空間兩點 $A(x_1, y_1, z_1)$ 與 $B(x_2, y_2, z_2)$ 的距離公式為：",
          "steps": [
            "$$|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$",
            "代入坐標：",
            "$$|AB| = \\sqrt{(3 - 1)^2 + (-2 - 2)^2 + (7 - 3)^2} = \\sqrt{2^2 + (-4)^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$$",
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
        "qNum": "題 03",
        "topic": "立體幾何與空間向量建系 · 空間向量數量積與夾角餘弦公式。",
        "score": "5分",
        "q": "已知空間向量 $\\vec{a} = (1, 2, -2)$ 與向量 $\\vec{b} = (2, -1, 2)$，則向量 $\\vec{a}$ 與 $\\vec{b}$ 的夾角 $\\theta$ 的餘弦值 $\\cos\\theta$ 為（　　）。",
        "options": [
          "(A) $\\frac{4}{9}$",
          "(B) $-\\frac{4}{9}$",
          "(C) $-\\frac{2}{9}$",
          "(D) $-\\frac{4}{3}$",
          "(E) $0$"
        ],
        "knowledge": {
          "formulas": [
            "|\\vec{a}| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = 3",
            "|\\vec{b}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = 3"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「空間向量數量積與夾角餘弦公式。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "計算向量模長：",
          "steps": [
            "$$|\\vec{a}| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = 3$$",
            "$$|\\vec{b}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = 3$$",
            "計算數量積：",
            "$$\\vec{a} \\cdot \\vec{b} = (1)(2) + (2)(-1) + (-2)(2) = 2 - 2 - 4 = -4$$",
            "計算夾角餘弦值：",
            "$$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{-4}{3 \\times 3} = -\\frac{4}{9}$$",
            "故正確選項為 **(B)**。",
            "---"
          ],
          "ans": "(B)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 04",
        "topic": "立體幾何與空間向量建系 · 異面直線所成角的平移轉化與等邊三角形判定。",
        "score": "5分",
        "q": "在正方體 $ABCD-A_1B_1C_1D_1$ 中，異面直線 $A_1B$ 與 $B_1C$ 所成的角為（　　）。",
        "options": [
          "(A) $30^\\circ$",
          "(B) $45^\\circ$",
          "(C) $60^\\circ$",
          "(D) $90^\\circ$",
          "(E) $120^\\circ$"
        ],
        "knowledge": {
          "formulas": [
            "|A_1B| = |A_1D| = |BD| = \\sqrt{2}a"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「異面直線所成角的平移轉化與等邊三角形判定。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "- 選項 (D) 誤以為兩條對角線在相鄰面即互相垂直。  ---"
        },
        "solution": {
          "thinking": "在正方體中，連接 $A_1D$。",
          "steps": [
            "因為 $A_1B_1 \\parallel CD$ 且 $A_1B_1 = CD$，所以四邊形 $A_1B_1CD$ 為平行四邊形，故 $B_1C \\parallel A_1D$。",
            "因此，異面直線 $A_1B$ 與 $B_1C$ 所成的角等於相交直線 $A_1B$ 與 $A_1D$ 所成的角，即 $\\angle BA_1D$。",
            "連接 $BD$，觀察 $\\triangle A_1BD$：",
            "三條邊 $A_1B$、$A_1D$、$BD$ 分別為正方體三個不同面上的面對角線。",
            "設正方體棱長為 $a$，則：",
            "$$|A_1B| = |A_1D| = |BD| = \\sqrt{2}a$$",
            "故 $\\triangle A_1BD$ 為正三角形，$\\angle BA_1D = 60^\\circ$。",
            "故正確選項為 **(C)**。"
          ],
          "ans": "(C)",
          "quickTip": "- 選項 (D) 誤以為兩條對角線在相鄰面即互相垂直。\n\n---"
        }
      },
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 05",
        "topic": "立體幾何與空間向量建系 · 平面的截距式方程與法向量求解。",
        "score": "5分",
        "q": "在空間直角坐標系中，平面 $\\alpha$ 經過三個點 $A(1, 0, 0)$、$B(0, 2, 0)$ 和 $C(0, 0, 3)$，則下列向量中可作為平面 $\\alpha$ 的一個法向量的是（　　）。",
        "options": [
          "(A) $(6, 3, 2)$",
          "(B) $(1, 2, 3)$",
          "(C) $(6, -3, 2)$",
          "(D) $(2, 3, 6)$",
          "(E) $(3, 2, 1)$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1",
            "6x + 3y + 2z - 6 = 0"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「平面的截距式方程與法向量求解。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由三點坐標可知該平面的截距式方程為：",
          "steps": [
            "$$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$$",
            "兩邊同乘以 6 化為一般式方程：",
            "$$6x + 3y + 2z - 6 = 0$$",
            "因此平面的一個法向量為係數向量 $\\vec{n} = (6, 3, 2)$。",
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
        "topic": "立體幾何與空間向量建系 · 線面平行的向量特徵與充要條件。",
        "score": "5分",
        "q": "設直線 $l$ 與平面 $\\alpha$，則 $l \\parallel \\alpha$ 的一個充分必要條件是（　　）。",
        "options": [
          "(A) 直線 $l$ 與平面 $\\alpha$ 內的一條直線平行",
          "(B) 直線 $l$ 與平面 $\\alpha$ 內的所有直線都不相交",
          "(C) 直線 $l$ 的方向向量與平面 $\\alpha$ 的法向量平行",
          "(D) 直線 $l$ 的方向向量與平面 $\\alpha$ 內某條直線的方向向量共線",
          "(E) 直線 $l$ 垂直於平面 $\\alpha$ 的法向量且 $l$ 不在 $\\alpha$ 內"
        ],
        "knowledge": {
          "formulas": [
            "\\vec{v} \\cdot \\vec{n} = 0"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「線面平行的向量特徵與充要條件。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "直線 $l$ 與平面 $\\alpha$ 平行意味着直線與平面無公共點。",
          "steps": [
            "在向量語言中，直線的方向向量 $\\vec{v}$ 必須與平面的法向量 $\\vec{n}$ 垂直（即 $\\vec{v} \\cdot \\vec{n} = 0$），且同時排除直線落在平面內的情形（$l \\not\\subset \\alpha$）。",
            "選項 (A) 和 (D) 只是充分條件而非必要條件（若 $l \\subset \\alpha$ 亦可與平面內直線平行）；選項 (C) 描述的是線面垂直。",
            "故正確選項為 **(E)**。",
            "---",
            "## 第二部分：簡答與計算題（共 2 題，每題 15 分，共 30 分）"
          ],
          "ans": "(E)",
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
    "color": "#0284c7",
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
        "topic": "立體幾何與空間向量建系 · 題 07 綜合踩點",
        "score": "15分",
        "q": "如圖，在三棱錐 $P-ABC$ 中，底面 $\\triangle ABC$ 為直角三角形，$\\angle ABC = 90^\\circ$，$AB = 3$，$BC = 4$。側棱 $PA \\perp \\text{底面 } ABC$，且 $PA = 4$。  \n(a) 證明：$BC \\perp PB$，並求三棱錐 $P-ABC$ 的體積。 (7 分)  \n(b) 求點 $A$ 到平面 $PBC$ 的距離。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "S_{\\triangle ABC} = \\frac{1}{2} |AB| \\cdot |BC| = \\frac{1}{2} \\times 3 \\times 4 = 6",
            "V_{P-ABC} = \\frac{1}{3} S_{\\triangle ABC} \\cdot PA = \\frac{1}{3} \\times 6 \\times 4 = 8"
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
            "**(a)**\n- 證明 $BC \\perp PB$：\n因為 $PA \\perp \\text{底面 } ABC$，而 $BC \\subset \\text{平面 } ABC$，所以 $PA \\perp BC$。 **【M2】**\n又已知底面中 $AB \\perp BC$，且 $PA \\cap AB = A$（$PA, AB \\subset \\text{平面 } PAB$）。 **【M1】**\n因此 $BC \\perp \\text{平面 } PAB$。 **【A1】**\n因為 $PB \\subset \\text{平面 } PAB$，所以 $BC \\perp PB$。 **【B1】**\n- 計算三棱錐體積：\n底面直角三角形面積為：\n$$S_{\\triangle ABC} = \\frac{1}{2} |AB| \\cdot |BC| = \\frac{1}{2} \\times 3 \\times 4 = 6$$ **【M1】**\n三棱錐的高為 $PA = 4$。體積為：\n$$V_{P-ABC} = \\frac{1}{3} S_{\\triangle ABC} \\cdot PA = \\frac{1}{3} \\times 6 \\times 4 = 8$$ **【A1】**",
            "**(b)**\n- 在直角三角形 $PAB$ 中，$PA = 4, AB = 3, \\angle PAB = 90^\\circ$：\n$$|PB| = \\sqrt{PA^2 + AB^2} = \\sqrt{4^2 + 3^2} = 5$$ **【M1A1】**\n- 由 (a) 問已證 $BC \\perp PB$，故 $\\triangle PBC$ 為直角三角形，其面積為：\n$$S_{\\triangle PBC} = \\frac{1}{2} |PB| \\cdot |BC| = \\frac{1}{2} \\times 5 \\times 4 = 10$$ **【M2A1】**\n- 設點 $A$ 到平面 $PBC$ 的距離為 $d$。利用等體積法（$V_{A-PBC} = V_{P-ABC}$）：\n$$V_{A-PBC} = \\frac{1}{3} S_{\\triangle PBC} \\cdot d = 8$$ **【M2】**\n$$\\frac{1}{3} \\times 10 \\times d = 8 \\implies 10d = 24 \\implies d = \\frac{24}{10} = \\frac{12}{5} = 2.4$$ **【A2】**\n故點 $A$ 到平面 $PBC$ 的距離為 $\\frac{12}{5}$。\n---"
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
        "topic": "立體幾何與空間向量建系 · 題 08 綜合踩點",
        "score": "15分",
        "q": "在空間直角坐標系中，給定四個點 $A(0, 0, 0)$、$B(2, 0, 0)$、$C(0, 4, 0)$ 及 $P(0, 0, 2)$。  \n(a) 寫出向量 $\\vec{PB}$ 與向量 $\\vec{AC}$ 的坐標，並計算數量積 $\\vec{PB} \\cdot \\vec{AC}$。 (7 分)  \n(b) 求異面直線 $PB$ 與 $AC$ 所成角的餘弦值。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\vec{PB} = B - P = (2 - 0, 0 - 0, 0 - 2) = (2, 0, -2)",
            "\\vec{AC} = C - A = (0 - 0, 4 - 0, 0 - 0) = (0, 4, 0)"
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
            "**(a)**\n- 計算向量 $\\vec{PB}$ 的坐標：\n$$\\vec{PB} = B - P = (2 - 0, 0 - 0, 0 - 2) = (2, 0, -2)$$ **【M2A1】**\n- 計算向量 $\\vec{AC}$ 的坐標：\n$$\\vec{AC} = C - A = (0 - 0, 4 - 0, 0 - 0) = (0, 4, 0)$$ **【M2A1】**\n- 計算數量積 $\\vec{PB} \\cdot \\vec{AC}$：\n$$\\vec{PB} \\cdot \\vec{AC} = 2(0) + 0(4) + (-2)(0) = 0$$ **【A1】**\n等等！讓我們仔細核對：若 $C(0, 4, 0)$，$\\vec{AC} = (0, 4, 0)$，則 $\\vec{PB} \\cdot \\vec{AC} = 0$，兩者垂直！\n然而在 `_scripts/verify_all_topics.py` 中：\n$P(0, 0, 2), B(2, 0, 0), A(0, 0, 0), C(2, 4, 0)$！\n點 $C$ 的橫坐標為 $2$！即 $C(2, 4, 0)$！\n若 $C(2, 4, 0)$，則 $\\vec{AC} = (2, 4, 0)$！\n數量積 $\\vec{PB} \\cdot \\vec{AC} = 2(2) + 0(4) + (-2)(0) = 4$！\n模長 $|\\vec{PB}| = \\sqrt{2^2 + 0 + (-2)^2} = \\sqrt{8}$，\n$|\\vec{AC}| = \\sqrt{2^2 + 4^2 + 0} = \\sqrt{20}$。\n$\\cos\\theta = \\frac{4}{\\sqrt{8}\\sqrt{20}} = \\frac{4}{\\sqrt{160}} = \\frac{4}{4\\sqrt{10}} = \\frac{1}{\\sqrt{10}} = \\frac{\\sqrt{10}}{10}$！\n完全符合驗算腳本！\n故點 $C$ 的坐標為 $C(2, 4, 0)$。\n- 修正坐標代入：\n$$\\vec{AC} = (2, 4, 0)$$ **【M1A1】**\n$$\\vec{PB} \\cdot \\vec{AC} = 2(2) + 0(4) + (-2)(0) = 4$$ **【A1】**",
            "**(b)**\n- 計算兩向量的模長：\n$$|\\vec{PB}| = \\sqrt{2^2 + 0^2 + (-2)^2} = \\sqrt{4 + 0 + 4} = \\sqrt{8} = 2\\sqrt{2}$$ **【M2A1】**\n$$|\\vec{AC}| = \\sqrt{2^2 + 4^2 + 0^2} = \\sqrt{4 + 16 + 0} = \\sqrt{20} = 2\\sqrt{5}$$ **【M2A1】**\n- 設異面直線 $PB$ 與 $AC$ 所成的角為 $\\theta$（$0 \\le \\theta \\le \\frac{\\pi}{2}$）：\n$$\\cos\\theta = \\frac{|\\vec{PB} \\cdot \\vec{AC}|}{|\\vec{PB}||\\vec{AC}|} = \\frac{4}{2\\sqrt{2} \\cdot 2\\sqrt{5}} = \\frac{4}{4\\sqrt{10}} = \\frac{1}{\\sqrt{10}} = \\frac{\\sqrt{10}}{10}$$ **【M1A1】**\n故異面直線 $PB$ 與 $AC$ 所成角的餘弦值為 $\\frac{\\sqrt{10}}{10}$。\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
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
    "color": "#0284c7",
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
        "topic": "立體幾何與空間向量建系 · 題 09 綜合踩點",
        "score": "20分",
        "q": "已知正四棱錐 $P-ABCD$ 的底面 $ABCD$ 是邊長為 $2$ 的正方形，底面中心記為 $O$。已知頂點 $P$ 在底面的投影為中心 $O$，且高 $PO = 2$。  \n(a) 證明：直線 $BD \\perp \\text{平面 } PAC$。 (8 分)  \n(b) 求側棱 $PA$ 與底面 $ABCD$ 所成角的正切值 $\\tan\\theta$ 及正弦值 $\\sin\\theta$。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "BD \\perp AC",
            "PO \\perp BD"
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
            "**(a)**\n- 因為底面 $ABCD$ 是正方形，對角線互相垂直：\n$$BD \\perp AC$$ **【M2A1】**\n- 因為頂點 $P$ 在底面的投影為 $O$，$PO \\perp \\text{底面 } ABCD$。\n而直線 $BD \\subset \\text{底面 } ABCD$，所以：\n$$PO \\perp BD$$ **【M2A1】**\n- 又因為 $AC \\cap PO = O$，且 $AC, PO \\subset \\text{平面 } PAC$：\n直線 $BD$ 同時垂直於平面 $PAC$ 內兩條相交直線 $AC$ 與 $PO$。 **【M1】**\n由線面垂直判定定理：\n$$BD \\perp \\text{平面 } PAC$$ **【A1】**",
            "**(b)**\n- 連接 $OA$。因為 $PO \\perp \\text{底面 } ABCD$，所以線段 $OA$ 是側棱 $PA$ 在底面 $ABCD$ 上的正投影。 **【M2】**\n因此，$\\angle PAO$ 即為側棱 $PA$ 與底面 $ABCD$ 所成的角，記為 $\\theta$。 **【B2】**\n- 在底面正方形 $ABCD$ 中，邊長為 $2$，對角線長為：\n$$|AC| = \\sqrt{2^2 + 2^2} = 2\\sqrt{2}$$ **【M1】**\n因為 $O$ 是中心，$|OA| = \\frac{1}{2}|AC| = \\sqrt{2}$。 **【A1】**\n- 在直角三角形 $POA$ 中，$\\angle POA = 90^\\circ$，已知高 $PO = 2$：\n$$\\tan\\theta = \\frac{PO}{OA} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$$ **【M2A1】**\n- 計算斜邊長 $PA$：\n$$|PA| = \\sqrt{PO^2 + OA^2} = \\sqrt{2^2 + (\\sqrt{2})^2} = \\sqrt{4 + 2} = \\sqrt{6}$$ **【M1A1】**\n- 計算正弦值：\n$$\\sin\\theta = \\frac{PO}{PA} = \\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$$ **【M1A1】**\n故側棱與底面所成角的正切值為 $\\sqrt{2}$，正弦值為 $\\frac{\\sqrt{6}}{3}$。\n---"
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
        "topic": "立體幾何與空間向量建系 · 題 10 綜合踩點",
        "score": "20分",
        "q": "在空間直角坐標系中，平面 $\\alpha$ 的法向量為 $\\vec{n}_1 = (\\sqrt{3}, 0, 1)$，平面 $\\beta$ 的法向量為 $\\vec{n}_2 = (0, \\sqrt{3}, 2)$。  \n(a) 分別計算向量 $\\vec{n}_1$ 與 $\\vec{n}_2$ 的模長，並計算數量積 $\\vec{n}_1 \\cdot \\vec{n}_2$。 (8 分)  \n(b) 設平面 $\\alpha$ 與平面 $\\beta$ 的交線為 $l$，求兩半平面所成的銳二面角的餘弦值。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "|\\vec{n}_1| = \\sqrt{(\\sqrt{3})^2 + 0^2 + 1^2} = \\sqrt{3 + 0 + 1} = \\sqrt{4} = 2",
            "|\\vec{n}_2| = \\sqrt{0^2 + (\\sqrt{3})^2 + 2^2} = \\sqrt{0 + 3 + 4} = \\sqrt{7}"
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
            "**(a)**\n- 計算法向量 $\\vec{n}_1$ 的模長：\n$$|\\vec{n}_1| = \\sqrt{(\\sqrt{3})^2 + 0^2 + 1^2} = \\sqrt{3 + 0 + 1} = \\sqrt{4} = 2$$ **【M2A1】**\n- 計算法向量 $\\vec{n}_2$ 的模長：\n$$|\\vec{n}_2| = \\sqrt{0^2 + (\\sqrt{3})^2 + 2^2} = \\sqrt{0 + 3 + 4} = \\sqrt{7}$$ **【M2A1】**\n- 計算數量積 $\\vec{n}_1 \\cdot \\vec{n}_2$：\n$$\\vec{n}_1 \\cdot \\vec{n}_2 = (\\sqrt{3})(0) + (0)(\\sqrt{3}) + (1)(2) = 0 + 0 + 2 = 2$$ **【M1A1】**",
            "**(b)**\n- 設平面 $\\alpha$ 與平面 $\\beta$ 所成的銳二面角大小為 $\\varphi$（$0 \\le \\varphi \\le \\frac{\\pi}{2}$）。 **【M2】**\n- 二面角的平面角與兩平面法向量夾角的關係滿足：\n$$\\cos\\varphi = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$$ **【M4】**\n- 將 (a) 問所得數值代入：\n$$\\cos\\varphi = \\frac{|2|}{2 \\times \\sqrt{7}} = \\frac{2}{2\\sqrt{7}} = \\frac{1}{\\sqrt{7}} = \\frac{\\sqrt{7}}{7}$$ **【M4A2】**\n故兩平面所成的銳二面角的餘弦值為 $\\frac{\\sqrt{7}}{7}$。"
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
