/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 06 三角函數解三角形與平面幾何 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic06';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#d97706"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#d97706"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#d97706"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#d97706",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "三角函數解三角形與平面幾何 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "三角函數解三角形與平面幾何 · 誘導公式與特殊角三角函數值。",
        "score": "5分",
        "q": "計算 $\\cos\\left(-\\frac{\\pi}{3}\\right) + \\sin\\frac{5\\pi}{6}$ 的值為（　　）。",
        "options": [
          "(A) $0$",
          "(B) $\\frac{1}{2}$",
          "(C) $1$",
          "(D) $\\frac{\\sqrt{3}}{2}$",
          "(E) $\\sqrt{3}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{2} + \\frac{1}{2} = 1"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「誘導公式與特殊角三角函數值。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由偶函數性質：$\\cos(-\\frac{\\pi}{3}) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$。",
          "steps": [
            "由誘導公式：$\\sin\\frac{5\\pi}{6} = \\sin(\\pi - \\frac{\\pi}{6}) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$。",
            "兩者相加：",
            "$$\\frac{1}{2} + \\frac{1}{2} = 1$$",
            "故正確選項為 **(C)**。",
            "---"
          ],
          "ans": "(C)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      📐 動態探究：正弦定理外接圓直徑 2R = a / sin A
    </div>
    <div id="vis-tri-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>頂點 A 位置：</label>
      <input type="range" id="triSl" min="40" max="140" value="90" step="1">
      <span class="ival" id="triVal">90°</span>
    </div>
    <div class="step-txt" id="triInfo" style="text-align:center; margin-top:4px;">
      邊長 a = 4，∠A = 30°，直徑 2R = 8 保持常數
    </div>
  `;
  const svgHost = host.querySelector('#vis-tri-svg');
  const slider = host.querySelector('#triSl');
  const valLabel = host.querySelector('#triVal');
  const info = host.querySelector('#triInfo');

  function draw(deg) {
    valLabel.textContent = deg + '°';
    const W = 360, H = 220, cx = 180, cy = 115, R = 75;
    const bRad = 240 * Math.PI / 180, cRad = 300 * Math.PI / 180;
    const bx = cx + R * Math.cos(bRad), by = cy + R * Math.sin(bRad);
    const cxPt = cx + R * Math.cos(cRad), cyPt = cy + R * Math.sin(cRad);
    const aRad = (-deg) * Math.PI / 180;
    const ax = cx + R * Math.cos(aRad), ay = cy + R * Math.sin(aRad);

    let s = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#475569" stroke-dasharray="4,3"/>`;
    s += `<polygon points="${ax},${ay} ${bx},${by} ${cxPt},${cyPt}" fill="rgba(217,119,6,0.12)" stroke="#d97706" stroke-width="2"/>`;
    s += `<line x1="${bx}" y1="${by}" x2="${cxPt}" y2="${cyPt}" stroke="#ef4444" stroke-width="2.5"/>`;
    s += `<circle cx="${ax}" cy="${ay}" r="5" fill="#f59e0b"/>`;
    s += `<text x="${ax}" y="${ay - 8}" fill="#fde68a" font-size="12" font-weight="700" text-anchor="middle">A(30°)</text>`;
    s += `<text x="${(bx + cxPt)/2}" y="${by + 16}" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle">a = 4</text>`;
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
        "topic": "三角函數解三角形與平面幾何 · 同角三角函數齊次式弦化切法。",
        "score": "5分",
        "q": "已知 $\\tan\\alpha = 2$，則代數式 $\\frac{\\sin\\alpha + 3\\cos\\alpha}{2\\sin\\alpha - \\cos\\alpha}$ 的值等於（　　）。",
        "options": [
          "(A) $\\frac{5}{3}$",
          "(B) $1$",
          "(C) $\\frac{5}{4}$",
          "(D) $3$",
          "(E) $-\\frac{5}{3}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{\\sin\\alpha + 3\\cos\\alpha}{2\\sin\\alpha - \\cos\\alpha} = \\frac{\\frac{\\sin\\alpha}{\\cos\\alpha} + 3}{2\\frac{\\sin\\alpha}{\\cos\\alpha} - 1} = \\frac{\\tan\\alpha + 3}{2\\tan\\alpha - 1}",
            "= \\frac{2 + 3}{2(2) - 1} = \\frac{5}{4 - 1} = \\frac{5}{3}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「同角三角函數齊次式弦化切法。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "分子分母同除以 $\\cos\\alpha$（顯然 $\\cos\\alpha \\ne 0$）：",
          "steps": [
            "$$\\frac{\\sin\\alpha + 3\\cos\\alpha}{2\\sin\\alpha - \\cos\\alpha} = \\frac{\\frac{\\sin\\alpha}{\\cos\\alpha} + 3}{2\\frac{\\sin\\alpha}{\\cos\\alpha} - 1} = \\frac{\\tan\\alpha + 3}{2\\tan\\alpha - 1}$$",
            "代入 $\\tan\\alpha = 2$：",
            "$$= \\frac{2 + 3}{2(2) - 1} = \\frac{5}{4 - 1} = \\frac{5}{3}$$",
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
        "qNum": "題 03",
        "topic": "三角函數解三角形與平面幾何 · 兩角和的正弦展開公式 $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$。",
        "score": "5分",
        "q": "計算 $\\sin 75^\\circ$ 的精確值為（　　）。",
        "options": [
          "(A) $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
          "(B) $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
          "(C) $\\frac{\\sqrt{6} + \\sqrt{2}}{2}$",
          "(D) $\\frac{\\sqrt{3} + 1}{2}$",
          "(E) $\\frac{\\sqrt{2}}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ",
            "= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「兩角和的正弦展開公式 $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "將 $75^\\circ$ 分解為 $45^\\circ + 30^\\circ$：",
          "steps": [
            "$$\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ$$",
            "代入特殊角數值：",
            "$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$",
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
        "topic": "三角函數解三角形與平面幾何 · 二倍角餘弦公式 $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$。",
        "score": "5分",
        "q": "代數式 $\\cos^2 15^\\circ - \\sin^2 15^\\circ$ 的值等於（　　）。",
        "options": [
          "(A) $\\frac{1}{2}$",
          "(B) $\\frac{\\sqrt{2}}{2}$",
          "(C) $\\frac{\\sqrt{3}}{2}$",
          "(D) $1$",
          "(E) $\\frac{\\sqrt{3}}{4}$"
        ],
        "knowledge": {
          "formulas": [
            "\\cos^2 15^\\circ - \\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「二倍角餘弦公式 $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由二倍角公式逆用：",
          "steps": [
            "$$\\cos^2 15^\\circ - \\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$$",
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
        "qNum": "題 05",
        "topic": "三角函數解三角形與平面幾何 · 函數圖形平移「左加右減」針對自變量 $x$ 本身。",
        "score": "5分",
        "q": "將函數 $y = \\sin(2x)$ 的圖形向左平移 $\\frac{\\pi}{6}$ 個單位長度，所得到的函數解析式為（　　）。",
        "options": [
          "(A) $y = \\sin\\left(2x + \\frac{\\pi}{6}\\right)$",
          "(B) $y = \\sin\\left(2x - \\frac{\\pi}{6}\\right)$",
          "(C) $y = \\sin\\left(2x + \\frac{\\pi}{3}\\right)$",
          "(D) $y = \\sin\\left(2x - \\frac{\\pi}{3}\\right)$",
          "(E) $y = \\sin(2x) + \\frac{\\pi}{6}$"
        ],
        "knowledge": {
          "formulas": [
            "y = \\sin\\left[2\\left(x + \\frac{\\pi}{6}\\right)\\right] = \\sin\\left(2x + \\frac{\\pi}{3}\\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「函數圖形平移「左加右減」針對自變量 $x$ 本身。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "向左平移 $\\frac{\\pi}{6}$ 個單位，即將解析式中的自變量 $x$ 替換為 $x + \\frac{\\pi}{6}$：",
          "steps": [
            "$$y = \\sin\\left[2\\left(x + \\frac{\\pi}{6}\\right)\\right] = \\sin\\left(2x + \\frac{\\pi}{3}\\right)$$",
            "故正確選項為 **(C)**。"
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
        "topic": "三角函數解三角形與平面幾何 · 正弦定理基本應用。",
        "score": "5分",
        "q": "在 $\\triangle ABC$ 中，已知內角 $A = 45^\\circ$，$B = 30^\\circ$，邊長 $a = 2\\sqrt{2}$，則邊長 $b$ 等於（　　）。",
        "options": [
          "(A) $\\sqrt{2}$",
          "(B) $2$",
          "(C) $2\\sqrt{3}$",
          "(D) $4$",
          "(E) $\\sqrt{6}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{a}{\\sin A} = \\frac{b}{\\sin B}",
            "\\frac{2\\sqrt{2}}{\\sin 45^\\circ} = \\frac{b}{\\sin 30^\\circ} \\implies \\frac{2\\sqrt{2}}{\\frac{\\sqrt{2}}{2}} = \\frac{b}{\\frac{1}{2}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「正弦定理基本應用。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由正弦定理：",
          "steps": [
            "$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$",
            "代入已知數據：",
            "$$\\frac{2\\sqrt{2}}{\\sin 45^\\circ} = \\frac{b}{\\sin 30^\\circ} \\implies \\frac{2\\sqrt{2}}{\\frac{\\sqrt{2}}{2}} = \\frac{b}{\\frac{1}{2}}$$",
            "$$4 = 2b \\implies b = 2$$",
            "故正確選項為 **(B)**。",
            "---",
            "## 第二部分：簡答與計算題（共 2 題，每題 15 分，共 30 分）"
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
    "color": "#d97706",
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
        "topic": "三角函數解三角形與平面幾何 · 題 07 綜合踩點",
        "score": "15分",
        "q": "已知函數 $f(x) = \\sqrt{3}\\sin(2x) + \\cos(2x)$。  \n(a) 將函數 $f(x)$ 化為 $A\\sin(\\omega x + \\varphi)$ 的形式（其中 $A > 0, \\omega > 0, 0 < \\varphi < \\frac{\\pi}{2}$），並求其最小正週期 $T$。 (7 分)  \n(b) 求函數 $f(x)$ 在閉區間 $\\left[0, \\frac{\\pi}{2}\\right]$ 上的最大值，以及取得該最大值時的 $x$ 值。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "f(x) = 2 \\left( \\frac{\\sqrt{3}}{2}\\sin(2x) + \\frac{1}{2}\\cos(2x) \\right)",
            "f(x) = 2 \\sin\\left(2x + \\frac{\\pi}{6}\\right)"
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
            "**(a)**\n- 提取振幅 $A = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = 2$： **【M2】**\n$$f(x) = 2 \\left( \\frac{\\sqrt{3}}{2}\\sin(2x) + \\frac{1}{2}\\cos(2x) \\right)$$\n- 因為 $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$，$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$，由兩角和的正弦公式：\n$$f(x) = 2 \\sin\\left(2x + \\frac{\\pi}{6}\\right)$$ **【M2A1】**\n其中 $A = 2, \\omega = 2, \\varphi = \\frac{\\pi}{6}$。\n- 計算最小正週期：\n$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2} = \\pi$$ **【M1A1】**",
            "**(b)**\n- 當 $x \\in \\left[0, \\frac{\\pi}{2}\\right]$ 時，考察角 $2x + \\frac{\\pi}{6}$ 的取值範圍：\n$$0 \\le x \\le \\frac{\\pi}{2} \\implies 0 \\le 2x \\le \\pi \\implies \\frac{\\pi}{6} \\le 2x + \\frac{\\pi}{6} \\le \\frac{7\\pi}{6}$$ **【M3A1】**\n- 在區間 $\\left[\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right]$ 上，正弦函數在角等於 $\\frac{\\pi}{2}$ 處取得最大值 1： **【M2】**\n$$2x + \\frac{\\pi}{6} = \\frac{\\pi}{2} \\implies 2x = \\frac{\\pi}{2} - \\frac{\\pi}{6} = \\frac{\\pi}{3} \\implies x = \\frac{\\pi}{6}$$ **【A1】**\n- 此時函數取得最大值：\n$$f_{\\max} = 2 \\sin\\frac{\\pi}{2} = 2 \\times 1 = 2$$ **【A1】**\n故當 $x = \\frac{\\pi}{6}$ 時，函數 $f(x)$ 取得最大值 $2$。\n---"
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
        "topic": "三角函數解三角形與平面幾何 · 題 08 綜合踩點",
        "score": "15分",
        "q": "在 $\\triangle ABC$ 中，內角 $A, B, C$ 所對的邊長分別為 $a, b, c$，已知邊角關係滿足 $(2b - c)\\cos A = a\\cos C$。  \n(a) 求內角 $A$ 的大小。 (7 分)  \n(b) 若邊長 $a = \\sqrt{7}$，且 $\\triangle ABC$ 的面積為 $\\frac{3\\sqrt{3}}{2}$，求邊長 $b$ 與 $c$，並求 $\\triangle ABC$ 的周長。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "(2\\sin B - \\sin C)\\cos A = \\sin A \\cos C",
            "2\\sin B \\cos A - \\sin C \\cos A = \\sin A \\cos C"
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
            "**(a)**\n- 由正弦定理，邊長正比於對角正弦值（$a = 2R\\sin A, b = 2R\\sin B, c = 2R\\sin C$）。代入原式：\n$$(2\\sin B - \\sin C)\\cos A = \\sin A \\cos C$$ **【M2】**\n- 展開並移項：\n$$2\\sin B \\cos A - \\sin C \\cos A = \\sin A \\cos C$$\n$$2\\sin B \\cos A = \\sin A \\cos C + \\cos A \\sin C$$ **【M2】**\n- 應用兩角和公式 $\\sin(A + C) = \\sin A \\cos C + \\cos A \\sin C$：\n$$2\\sin B \\cos A = \\sin(A + C)$$ **【M1】**\n- 在 $\\triangle ABC$ 中，$A + B + C = \\pi \\implies A + C = \\pi - B$，故 $\\sin(A + C) = \\sin B$。代入得：\n$$2\\sin B \\cos A = \\sin B$$ **【M1】**\n- 因為 $B \\in (0, \\pi)$，$\\sin B \\ne 0$，兩邊同除以 $\\sin B$：\n$$2\\cos A = 1 \\implies \\cos A = \\frac{1}{2}$$ **【A1】**\n因為 $A \\in (0, \\pi)$，所以 $A = \\frac{\\pi}{3}$（即 $60^\\circ$）。",
            "**(b)**\n- 由三角形面積公式：\n$$S = \\frac{1}{2}bc\\sin A = \\frac{3\\sqrt{3}}{2}$$ **【M1】**\n$$\\frac{1}{2}bc \\sin 60^\\circ = \\frac{3\\sqrt{3}}{2} \\implies \\frac{1}{2}bc \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{2} \\implies \\frac{\\sqrt{3}}{4}bc = \\frac{3\\sqrt{3}}{2} \\implies bc = 6$$ **【M1A1】**\n- 由餘弦定理：\n$$a^2 = b^2 + c^2 - 2bc\\cos A$$ **【M1】**\n$$(\\sqrt{7})^2 = b^2 + c^2 - 2(6)\\cos 60^\\circ \\implies 7 = b^2 + c^2 - 6 \\implies b^2 + c^2 = 13$$ **【A1】**\n- 聯立求解 $b$ 與 $c$：\n$$(b + c)^2 = b^2 + c^2 + 2bc = 13 + 2(6) = 25 \\implies b + c = 5$$ **【M1A1】**\n由 $b + c = 5$ 且 $bc = 6$，解得 $\\{b, c\\} = \\{3, 2\\}$（即 $b = 3, c = 2$ 或 $b = 2, c = 3$）。 **【A1】**\n- 計算周長：\n$$\\text{周長} = a + b + c = \\sqrt{7} + 5 = 5 + \\sqrt{7}$$ **【A1】**\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
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
    "color": "#d97706",
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
        "topic": "三角函數解三角形與平面幾何 · 題 09 綜合踩點",
        "score": "20分",
        "q": "在 $\\triangle ABC$ 中，內角 $C = \\frac{\\pi}{3}$，邊長 $c = 2$。  \n(a) 求 $\\triangle ABC$ 面積的最大值，以及 $\\triangle ABC$ 周長的最大值。 (8 分)  \n(b) 設點 $D$ 為邊 $AB$ 的中點，求中線 $CD$ 的長度 $|CD|$ 的取值範圍。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "c^2 = a^2 + b^2 - 2ab\\cos C \\implies 4 = a^2 + b^2 - ab",
            "4 = a^2 + b^2 - ab \\ge 2ab - ab = ab \\implies ab \\le 4"
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
            "**(a)**\n- 由餘弦定理：\n$$c^2 = a^2 + b^2 - 2ab\\cos C \\implies 4 = a^2 + b^2 - ab$$ **【M2】**\n- 由均值不等式 $a^2 + b^2 \\ge 2ab$：\n$$4 = a^2 + b^2 - ab \\ge 2ab - ab = ab \\implies ab \\le 4$$ **【M1A1】**\n當且僅當 $a = b = 2$（$\\triangle ABC$ 為等邊三角形）時等號成立。\n- 計算面積最大值：\n$$S = \\frac{1}{2}ab\\sin C = \\frac{1}{2}ab\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{4}ab \\le \\frac{\\sqrt{3}}{4}(4) = \\sqrt{3}$$ **【A1】**\n- 計算周長最大值：\n$$(a + b)^2 = a^2 + b^2 + 2ab = (4 + ab) + 2ab = 4 + 3ab \\le 4 + 3(4) = 16$$ **【M1】**\n$$a + b \\le 4$$\n因此周長為 $a + b + c \\le 4 + 2 = 6$。 **【A1】**\n故面積最大值為 $\\sqrt{3}$，周長最大值為 $6$。",
            "**(b)**\n- 利用中線長公式或中線向量表示：\n在 $\\triangle ABC$ 中，$D$ 為 $AB$ 中點，$\\vec{CD} = \\frac{1}{2}(\\vec{CA} + \\vec{CB})$。 **【M2】**\n兩邊平方：\n$$|CD|^2 = \\frac{1}{4}|\\vec{CA} + \\vec{CB}|^2 = \\frac{1}{4}(a^2 + b^2 + 2\\vec{CA}\\cdot\\vec{CB}) = \\frac{1}{4}(a^2 + b^2 + 2ab\\cos C)$$ **【M2】**\n$$= \\frac{1}{4}\\left( a^2 + b^2 + 2ab \\cdot \\frac{1}{2} \\right) = \\frac{1}{4}(a^2 + b^2 + ab)$$ **【M2】**\n- 由餘弦定理知 $a^2 + b^2 = 4 + ab$，代入中線公式：\n$$|CD|^2 = \\frac{1}{4}(4 + ab + ab) = \\frac{1}{4}(4 + 2ab) = 1 + \\frac{1}{2}ab$$ **【M2A1】**\n- 由 (a) 問知 $ab \\le 4$；又由三角形邊長為正且兩邊之和兩邊之差不等式，$ab > 0$：\n$$0 < ab \\le 4 \\implies 0 < \\frac{1}{2}ab \\le 2 \\implies 1 < 1 + \\frac{1}{2}ab \\le 3$$ **【M2】**\n- 開方得中線長 $|CD|$ 的取值範圍：\n$$1 < |CD| \\le \\sqrt{3}$$ **【A1】**\n故中線 $CD$ 的取值範圍為 $(1, \\sqrt{3}]$。\n---"
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
        "topic": "三角函數解三角形與平面幾何 · 題 10 綜合踩點",
        "score": "20分",
        "q": "在 $\\triangle ABC$ 中，邊長 $AB = 4$，$AC = 8$，內角 $\\angle BAC = 60^\\circ$。  \n(a) 求邊長 $BC$ 的長度，並求 $\\triangle ABC$ 外接圓的半徑 $R$。 (8 分)  \n(b) 設內角 $\\angle BAC$ 的平分線交對邊 $BC$ 於點 $D$，利用面積關係求角平分線段 $AD$ 的長度。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "BC^2 = AB^2 + AC^2 - 2(AB)(AC)\\cos 60^\\circ",
            "BC^2 = 4^2 + 8^2 - 2(4)(8)\\left(\\frac{1}{2}\\right) = 16 + 64 - 32 = 48"
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
            "**(a)**\n- 由餘弦定理計算邊長 $BC$（記為 $a$）：\n$$BC^2 = AB^2 + AC^2 - 2(AB)(AC)\\cos 60^\\circ$$ **【M2】**\n$$BC^2 = 4^2 + 8^2 - 2(4)(8)\\left(\\frac{1}{2}\\right) = 16 + 64 - 32 = 48$$ **【A1】**\n$$BC = \\sqrt{48} = 4\\sqrt{3}$$ **【A1】**\n- 由正弦定理計算外接圓半徑 $R$：\n$$\\frac{BC}{\\sin A} = 2R$$ **【M2】**\n$$\\frac{4\\sqrt{3}}{\\sin 60^\\circ} = 2R \\implies \\frac{4\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = 2R \\implies 8 = 2R \\implies R = 4$$ **【A2】**\n故邊長 $BC = 4\\sqrt{3}$，外接圓半徑 $R = 4$。",
            "**(b)**\n- 因為 $AD$ 為 $\\angle BAC$ 的角平分線，所以：\n$$\\angle BAD = \\angle CAD = \\frac{1}{2}\\angle BAC = 30^\\circ$$ **【B2】**\n- 利用等面積法，大三角形面積等於兩分割小三角形面積之和：\n$$S_{\\triangle ABC} = S_{\\triangle ABD} + S_{\\triangle ACD}$$ **【M4】**\n- 分別寫出面積公式：\n$$S_{\\triangle ABC} = \\frac{1}{2} \\cdot AB \\cdot AC \\cdot \\sin 60^\\circ = \\frac{1}{2} \\cdot 4 \\cdot 8 \\cdot \\frac{\\sqrt{3}}{2} = 8\\sqrt{3}$$ **【M2A1】**\n$$S_{\\triangle ABD} = \\frac{1}{2} \\cdot AB \\cdot AD \\cdot \\sin 30^\\circ = \\frac{1}{2} \\cdot 4 \\cdot AD \\cdot \\frac{1}{2} = AD$$ **【M1】**\n$$S_{\\triangle ACD} = \\frac{1}{2} \\cdot AC \\cdot AD \\cdot \\sin 30^\\circ = \\frac{1}{2} \\cdot 8 \\cdot AD \\cdot \\frac{1}{2} = 2AD$$ **【M1】**\n- 代入面積等式：\n$$AD + 2AD = 8\\sqrt{3} \\implies 3AD = 8\\sqrt{3} \\implies AD = \\frac{8\\sqrt{3}}{3}$$ **【M1A1】**\n故角平分線段 $AD$ 的長度為 $\\frac{8\\sqrt{3}}{3}$。"
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
