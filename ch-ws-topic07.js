/* 澳門四校聯考（JAE）專題突破 100 分鐘限時練習工作紙 · Topic 07 數列求和與代數不等式 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_ws_topic07';
  window.PAPER_REGISTRY = [
  {
    "id": "part-1",
    "year": "Part 1",
    "paper": "單項選擇題",
    "name": "第一部分 · 單項選擇題 (6題 / 30分)",
    "ch": "Part 1",
    "count": 6,
    "color": "#e11d48"
  },
  {
    "id": "part-2",
    "year": "Part 2",
    "paper": "簡答計算題",
    "name": "第二部分 · 簡答計算題 (2題 / 30分)",
    "ch": "Part 2",
    "count": 2,
    "color": "#e11d48"
  },
  {
    "id": "part-3",
    "year": "Part 3",
    "paper": "綜合壓軸題",
    "name": "第三部分 · 綜合壓軸題 (2題 / 40分)",
    "ch": "Part 3",
    "count": 2,
    "color": "#e11d48"
  }
];

  const chapters = [
  {
    "ch": "Part 1",
    "title": "第一部分 · 單項選擇題 (6題 / 30分)",
    "year": "100分鐘工作紙",
    "paper": "單項選擇題",
    "color": "#e11d48",
    "sections": [
      "題 01 ~ 題 06 (每題 5 分)",
      "數列求和與代數不等式 限時突破"
    ],
    "slides": [
      {
        "part": "Part 1",
        "year": "100分鐘工作紙",
        "paper": "單項選擇題",
        "qNum": "題 01",
        "topic": "數列求和與代數不等式 · 等差數列前 $n$ 項和公式 $S_n = n a_1 + \\frac{n(n-1)}{2} d$。",
        "score": "5分",
        "q": "已知等差數列 $\\{a_n\\}$ 的首項 $a_1 = 3$，公差 $d = 2$，則該數列的前 $10$ 項和 $S_{10}$ 為（　　）。",
        "options": [
          "(A) $100$",
          "(B) $110$",
          "(C) $120$",
          "(D) $130$",
          "(E) $140$"
        ],
        "knowledge": {
          "formulas": [
            "S_{10} = 10(3) + \\frac{10 \\times 9}{2}(2) = 30 + 90 = 120"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「等差數列前 $n$ 項和公式 $S_n = n a_1 + \\frac{n(n-1)}{2} d$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "代入等差數列求和公式：",
          "steps": [
            "$$S_{10} = 10(3) + \\frac{10 \\times 9}{2}(2) = 30 + 90 = 120$$",
            "故正確選項為 **(C)**。",
            "---"
          ],
          "ans": "(C)",
          "quickTip": "代數檢驗法或排除法快速驗算。"
        },
        "visual": function (host) {
  host.innerHTML = `
    <div style="font-size:13px; font-weight:800; color:var(--ct); margin-bottom:4px;">
      📊 動態探究：等差數列通項與前 n 項和趨勢
    </div>
    <div id="vis-seq-svg" style="width:100%; max-width:380px;"></div>
    <div class="ictrl">
      <label>項數 n：</label>
      <input type="range" id="seqSl" min="1" max="10" value="6" step="1">
      <span class="ival" id="seqVal">6</span>
    </div>
    <div class="step-txt" id="seqInfo" style="text-align:center; margin-top:4px;">
      首項 a₁ = 2，公差 d = 3，前 n 項和 Sₙ
    </div>
  `;
  const svgHost = host.querySelector('#vis-seq-svg');
  const slider = host.querySelector('#seqSl');
  const valLabel = host.querySelector('#seqVal');
  const info = host.querySelector('#seqInfo');

  function draw(n) {
    valLabel.textContent = n;
    const a1 = 2, d = 3;
    const an = a1 + (n - 1) * d;
    const sn = n * (a1 + an) / 2;
    info.innerHTML = `第 ${n} 項 a_${n} = ${an}，前 ${n} 項和 S_${n} = ${sn}`;

    const W = 360, H = 220, ox = 40, oy = 180, maxVal = a1 + 9 * d, barW = 20;

    let s = `<svg viewBox="0 0 ${W} ${H}" style="background:#0f172a; border-radius:12px;">`;
    s += `<line x1="30" y1="${oy}" x2="330" y2="${oy}" stroke="#475569" stroke-width="1.5"/>`;
    for (let i = 1; i <= n; i++) {
      const val = a1 + (i - 1) * d;
      const h = (val / maxVal) * 140;
      const x = ox + (i - 1) * 28;
      const y = oy - h;
      s += `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="3" fill="#e11d48" opacity="0.85"/>`;
      s += `<text x="${x + barW/2}" y="${y - 4}" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">${val}</text>`;
      s += `<text x="${x + barW/2}" y="${oy + 14}" fill="#94a3b8" font-size="10" text-anchor="middle">${i}</text>`;
    }
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
        "topic": "數列求和與代數不等式 · 等比數列等比中項性質 $b_4^2 = b_2 b_6$。",
        "score": "5分",
        "q": "已知正項等比數列 $\\{b_n\\}$ 滿足 $b_2 = 2$，$b_6 = 32$，則該數列的第四項 $b_4$ 為（　　）。",
        "options": [
          "(A) $4$",
          "(B) $8$",
          "(C) $16$",
          "(D) $2\\sqrt{2}$",
          "(E) $4\\sqrt{2}$"
        ],
        "knowledge": {
          "formulas": [
            "b_4^2 = b_2 b_6 = 2 \\times 32 = 64",
            "b_4 = \\sqrt{64} = 8"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「等比數列等比中項性質 $b_4^2 = b_2 b_6$。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由等比數列性質，下標成等差數列的項構成等比數列：",
          "steps": [
            "$$b_4^2 = b_2 b_6 = 2 \\times 32 = 64$$",
            "因為 $\\{b_n\\}$ 是正項等比數列，所以 $b_4 > 0$：",
            "$$b_4 = \\sqrt{64} = 8$$",
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
        "qNum": "題 03",
        "topic": "數列求和與代數不等式 · 均值不等式（基本不等式）求最值及等號成立條件。",
        "score": "5分",
        "q": "設實數 $x > 0$，則代數式 $x + \\frac{4}{x}$ 的最小值為（　　）。",
        "options": [
          "(A) $2$",
          "(B) $4$",
          "(C) $5$",
          "(D) $8$",
          "(E) $16$"
        ],
        "knowledge": {
          "formulas": [
            "x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 2\\sqrt{4} = 4"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「均值不等式（基本不等式）求最值及等號成立條件。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由基本不等式，對任意 $a, b > 0$ 有 $a + b \\ge 2\\sqrt{ab}$：",
          "steps": [
            "$$x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 2\\sqrt{4} = 4$$",
            "當且僅當 $x = \\frac{4}{x} \\implies x^2 = 4 \\implies x = 2$（因為 $x > 0$）時，等號成立。",
            "故代數式的最小值為 $4$。",
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
        "topic": "數列求和與代數不等式 · 一階線性遞推數列待定係數構造等比數列法。",
        "score": "5分",
        "q": "已知數列 $\\{a_n\\}$ 滿足 $a_1 = 1$，且對任意正整數 $n \\ge 1$ 均有 $a_{n+1} = 2a_n + 1$，則通項 $a_n$ 等於（　　）。",
        "options": [
          "(A) $2^n - 1$",
          "(B) $2^{n-1}$",
          "(C) $2^n + 1$",
          "(D) $2^{n+1} - 3$",
          "(E) $n^2$"
        ],
        "knowledge": {
          "formulas": [
            "a_{n+1} + 1 = 2a_n + 2 = 2(a_n + 1)",
            "b_n = 2 \\cdot 2^{n-1} = 2^n \\implies a_n + 1 = 2^n \\implies a_n = 2^n - 1"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「一階線性遞推數列待定係數構造等比數列法。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "將遞推式兩邊同加 1：",
          "steps": [
            "$$a_{n+1} + 1 = 2a_n + 2 = 2(a_n + 1)$$",
            "令 $b_n = a_n + 1$，則 $b_1 = a_1 + 1 = 1 + 1 = 2$。",
            "數列 $\\{b_n\\}$ 是以 $b_1 = 2$ 為首項、公比 $q = 2$ 的等比數列。",
            "因此：",
            "$$b_n = 2 \\cdot 2^{n-1} = 2^n \\implies a_n + 1 = 2^n \\implies a_n = 2^n - 1$$",
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
        "topic": "數列求和與代數不等式 · 柯西不等式求線性組合極值。",
        "score": "5分",
        "q": "已知實數 $x, y$ 滿足 $x^2 + y^2 = 5$，則代數式 $2x + y$ 的最大值為（　　）。",
        "options": [
          "(A) $\\sqrt{5}$",
          "(B) $2\\sqrt{5}$",
          "(C) $5$",
          "(D) $10$",
          "(E) $25$"
        ],
        "knowledge": {
          "formulas": [
            "(2x + y)^2 = (2x + 1y)^2 \\le (2^2 + 1^2)(x^2 + y^2) = (4 + 1)(5) = 25",
            "-5 \\le 2x + y \\le 5"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「柯西不等式求線性組合極值。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "由二維柯西不等式 $(a x + b y)^2 \\le (a^2 + b^2)(x^2 + y^2)$：",
          "steps": [
            "$$(2x + y)^2 = (2x + 1y)^2 \\le (2^2 + 1^2)(x^2 + y^2) = (4 + 1)(5) = 25$$",
            "兩邊開方得：",
            "$$-5 \\le 2x + y \\le 5$$",
            "當 $\\frac{x}{2} = \\frac{y}{1} \\implies x = 2y$，代入 $4y^2 + y^2 = 5 \\implies y = 1, x = 2$ 時，$2(2) + 1 = 5$ 取得最大值。",
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
        "topic": "數列求和與代數不等式 · 無窮遞縮等比級數求和公式 $S = \\frac{a_1}{1 - q}$（$|q| < 1$）。",
        "score": "5分",
        "q": "無窮等比級數 $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\cdots$ 的極限和為（　　）。",
        "options": [
          "(A) $\\frac{4}{3}$",
          "(B) $\\frac{3}{2}$",
          "(C) $2$",
          "(D) $\\frac{5}{3}$",
          "(E) 發散不存在"
        ],
        "knowledge": {
          "formulas": [
            "S = \\frac{a_1}{1 - q} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心客觀題，著重考查「無窮遞縮等比級數求和公式 $S = \\frac{a_1}{1 - q}$（$|q| < 1$）。」。",
            "<b>解題思維</b>：捕捉已知條件特徵，運用通性通法或秒殺幾何性質快速定位正確選項。"
          ],
          "pitfall": "審題須格外注意符號與定義域約束，防範干擾項陷阱。"
        },
        "solution": {
          "thinking": "首項 $a_1 = 1$，公比 $q = \\frac{1}{3}$。",
          "steps": [
            "因為 $|q| = \\frac{1}{3} < 1$，該級數收斂，其極限和為：",
            "$$S = \\frac{a_1}{1 - q} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$$",
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
    "color": "#e11d48",
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
        "topic": "數列求和與代數不等式 · 題 07 綜合踩點",
        "score": "15分",
        "q": "已知數列 $\\{a_n\\}$ 是首項為 $1$、公差為 $2$ 的等差數列。令數列 $b_n = \\frac{1}{a_n a_{n+1}}$。  \n(a) 寫出數列 $\\{a_n\\}$ 的通項公式，並求其前 $n$ 項和 $S_n$。 (7 分)  \n(b) 求數列 $\\{b_n\\}$ 的前 $n$ 項和 $T_n$，並證明對任意正整數 $n$，均有 $T_n < \\frac{1}{2}$。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a_n = a_1 + (n - 1)d = 1 + 2(n - 1) = 2n - 1",
            "S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n[1 + (2n - 1)]}{2} = \\frac{n(2n)}{2} = n^2"
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
            "**(a)**\n- 等差數列首項 $a_1 = 1$，公差 $d = 2$，通項公式為：\n$$a_n = a_1 + (n - 1)d = 1 + 2(n - 1) = 2n - 1$$ **【M2A1】**\n- 前 $n$ 項和公式：\n$$S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n[1 + (2n - 1)]}{2} = \\frac{n(2n)}{2} = n^2$$ **【M2A2】**",
            "**(b)**\n- 由 (a) 知 $a_n = 2n - 1$，$a_{n+1} = 2(n + 1) - 1 = 2n + 1$。\n數列通項為：\n$$b_n = \\frac{1}{(2n - 1)(2n + 1)}$$ **【M1】**\n- 利用裂項相消法拆項：\n$$b_n = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)$$ **【M2】**\n- 計算前 $n$ 項和 $T_n$：\n$$T_n = b_1 + b_2 + \\cdots + b_n = \\frac{1}{2} \\left[ \\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{2n - 1} - \\frac{1}{2n + 1}\\right) \\right]$$ **【M2】**\n$$T_n = \\frac{1}{2} \\left( 1 - \\frac{1}{2n + 1} \\right) = \\frac{1}{2} \\cdot \\frac{2n}{2n + 1} = \\frac{n}{2n + 1}$$ **【A1】**\n- 證明不等式：\n因為 $n \\in \\mathbb{N}^*$，$2n + 1 > 0$，所以 $\\frac{1}{2(2n + 1)} > 0$。\n$$T_n = \\frac{1}{2} - \\frac{1}{2(2n + 1)} < \\frac{1}{2}$$ **【M1A1】**\n故對任意正整數 $n$，均有 $T_n < \\frac{1}{2}$。\n---"
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
        "topic": "數列求和與代數不等式 · 題 08 綜合踩點",
        "score": "15分",
        "q": "已知正項等比數列 $\\{a_n\\}$ 的前 $n$ 項和為 $S_n$，且 $a_1 = 2$，$S_3 = 14$。  \n(a) 求數列 $\\{a_n\\}$ 的公比 $q$ 及通項公式 $a_n$。 (7 分)  \n(b) 設正實數 $x, y, z$ 滿足 $x + 2y + 3z = 6$，利用柯西不等式證明：  \n$$\\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z} \\ge 6$$ (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "S_3 = a_1 + a_1 q + a_1 q^2 = 2(1 + q + q^2) = 14",
            "1 + q + q^2 = 7 \\implies q^2 + q - 6 = 0"
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
            "**(a)**\n- 等比數列前 3 項和為：\n$$S_3 = a_1 + a_1 q + a_1 q^2 = 2(1 + q + q^2) = 14$$ **【M2】**\n$$1 + q + q^2 = 7 \\implies q^2 + q - 6 = 0$$ **【M1】**\n- 因式分解：\n$$(q + 3)(q - 2) = 0 \\implies q = 2 \\text{ 或 } q = -3$$ **【A2】**\n- 因為數列各項均為正數，公比必須為正：$q = 2$（排除 $q = -3$）。 **【B1】**\n故通項公式為：\n$$a_n = a_1 q^{n-1} = 2 \\cdot 2^{n-1} = 2^n$$ **【A1】**",
            "**(b)**\n- 考察乘積 $(x + 2y + 3z)\\left(\\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z}\\right)$。 **【M2】**\n改寫為向量形式：\n$$x + 2y + 3z = (\\sqrt{x})^2 + (\\sqrt{2y})^2 + (\\sqrt{3z})^2$$\n$$\\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z} = \\left(\\frac{1}{\\sqrt{x}}\\right)^2 + \\left(\\frac{\\sqrt{2}}{\\sqrt{y}}\\right)^2 + \\left(\\frac{\\sqrt{3}}{\\sqrt{z}}\\right)^2$$ **【M2】**\n- 應用三維柯西不等式：\n$$(x + 2y + 3z)\\left(\\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z}\\right) \\ge \\left( \\sqrt{x} \\cdot \\frac{1}{\\sqrt{x}} + \\sqrt{2y} \\cdot \\frac{\\sqrt{2}}{\\sqrt{y}} + \\sqrt{3z} \\cdot \\frac{\\sqrt{3}}{\\sqrt{z}} \\right)^2$$ **【M2】**\n$$= (1 + 2 + 3)^2 = 6^2 = 36$$ **【A1】**\n- 將已知條件 $x + 2y + 3z = 6$ 代入：\n$$6 \\left( \\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z} \\right) \\ge 36 \\implies \\frac{1}{x} + \\frac{2}{y} + \\frac{3}{z} \\ge \\frac{36}{6} = 6$$ **【A1】**\n不等式獲證。（等號當且僅當 $x = y = z = 1$ 時成立）\n---\n## 第三部分：高階綜合壓軸題（共 2 題，每題 20 分，共 40 分）"
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
    "color": "#e11d48",
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
        "topic": "數列求和與代數不等式 · 題 09 綜合踩點",
        "score": "20分",
        "q": "已知等比數列 $\\{a_n\\}$ 的通項為 $a_n = 2^n$。構造差比數列 $c_n = n \\cdot a_n = n \\cdot 2^n$。  \n(a) 利用錯位相減法，求數列 $\\{c_n\\}$ 的前 $n$ 項和 $T_n = \\sum_{k=1}^n k \\cdot 2^k$ 的封閉解析式。 (12 分)  \n(b) 若對所有正整數 $n \\ge 1$，不等式 $T_n + 2 > \\lambda \\cdot 2^n$ 恆成立，求實數 $\\lambda$ 的取值範圍。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "T_n = 1 \\cdot 2^1 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\cdots + n \\cdot 2^n \\quad \\text{—— (1)}",
            "2T_n = 1 \\cdot 2^2 + 2 \\cdot 2^3 + 3 \\cdot 2^4 + \\cdots + (n - 1) \\cdot 2^n + n \\cdot 2^{n+1} \\quad \\text{—— (2)}"
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
            "**(a)**\n- 寫出前 $n$ 項和展開式：\n$$T_n = 1 \\cdot 2^1 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\cdots + n \\cdot 2^n \\quad \\text{—— (1)}$$ **【M2】**\n- 兩邊同乘以公比 $q = 2$：\n$$2T_n = 1 \\cdot 2^2 + 2 \\cdot 2^3 + 3 \\cdot 2^4 + \\cdots + (n - 1) \\cdot 2^n + n \\cdot 2^{n+1} \\quad \\text{—— (2)}$$ **【M2】**\n- 式 (1) 減去式 (2)：\n$$-T_n = 1 \\cdot 2^1 + (2 - 1)2^2 + (3 - 2)2^3 + \\cdots + [n - (n - 1)]2^n - n \\cdot 2^{n+1}$$ **【M3】**\n$$-T_n = (2^1 + 2^2 + 2^3 + \\cdots + 2^n) - n \\cdot 2^{n+1}$$ **【M2】**\n- 括號內為等比數列求和：\n$$2^1 + 2^2 + \\cdots + 2^n = \\frac{2(1 - 2^n)}{1 - 2} = 2(2^n - 1) = 2^{n+1} - 2$$ **【M1A1】**\n- 代入得：\n$$-T_n = 2^{n+1} - 2 - n \\cdot 2^{n+1} = -(n - 1)2^{n+1} - 2$$\n$$T_n = (n - 1)2^{n+1} + 2$$ **【A1】**",
            "**(b)**\n- 將 $T_n$ 表達式代入不等式：\n$$(n - 1)2^{n+1} + 2 + 2 > \\lambda \\cdot 2^n \\implies (n - 1)2^{n+1} + 4 > \\lambda \\cdot 2^n$$ **【M2】**\n- 兩邊同除以 $2^n$（因為 $2^n > 0$）：\n$$2(n - 1) + \\frac{4}{2^n} > \\lambda$$ **【M2】**\n- 記 $g(n) = 2(n - 1) + \\frac{4}{2^n}$（$n \\in \\mathbb{N}^*$）。\n計算前幾項的值：\n- 當 $n = 1$ 時，$g(1) = 2(0) + \\frac{4}{2} = 2$； **【A1】**\n- 當 $n = 2$ 時，$g(2) = 2(1) + \\frac{4}{4} = 2 + 1 = 3$；\n- 當 $n = 3$ 時，$g(3) = 2(2) + \\frac{4}{8} = 4 + 0.5 = 4.5$。\n- 檢驗單調性：\n當 $n \\ge 1$ 時，$g(n + 1) - g(n) = [2n + \\frac{4}{2^{n+1}}] - [2(n - 1) + \\frac{4}{2^n}] = 2 - \\frac{2}{2^n} \\ge 2 - 1 = 1 > 0$。\n因此數列 $\\{g(n)\\}$ 嚴格單調遞增，其最小值在 $n = 1$ 處取得：\n$$g_{\\min} = g(1) = 2$$ **【M2A1】**\n- 要使不等式對所有正整數 $n \\ge 1$ 恆成立，必須且只需：\n$$\\lambda < g_{\\min} = 2$$ **【A1】**\n故實數 $\\lambda$ 的取值範圍為 $(-\\infty, 2)$。\n---"
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
        "topic": "數列求和與代數不等式 · 題 10 綜合踩點",
        "score": "20分",
        "q": "已知數列 $\\{x_n\\}$ 的通項為 $x_n = \\frac{1}{3n - 2}$。定義數列 $v_n = \\frac{1}{(3n - 2)(3n + 1)}$。  \n(a) 求數列 $\\{v_n\\}$ 的前 $n$ 項和 $W_n = \\sum_{k=1}^n v_k$ 的簡化表達式。 (10 分)  \n(b) 證明：對任意正整數 $n \\ge 1$，均有 $\\frac{1}{4} \\le W_n < \\frac{1}{3}$。 (10 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "v_n = \\frac{1}{(3n - 2)(3n + 1)} = \\frac{1}{3} \\left( \\frac{1}{3n - 2} - \\frac{1}{3n + 1} \\right)",
            "W_n = \\frac{1}{3} \\left[ \\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{10}\\right) + \\cdots + \\left(\\frac{1}{3n - 2} - \\frac{1}{3n + 1}\\right) \\right]"
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
            "**(a)**\n- 觀察通項分母因式：$(3n + 1) - (3n - 2) = 3$。利用裂項法拆項：\n$$v_n = \\frac{1}{(3n - 2)(3n + 1)} = \\frac{1}{3} \\left( \\frac{1}{3n - 2} - \\frac{1}{3n + 1} \\right)$$ **【M4】**\n- 展開前 $n$ 項和 $W_n$：\n$$W_n = \\frac{1}{3} \\left[ \\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{10}\\right) + \\cdots + \\left(\\frac{1}{3n - 2} - \\frac{1}{3n + 1}\\right) \\right]$$ **【M3】**\n- 中間項全部抵消：\n$$W_n = \\frac{1}{3} \\left( 1 - \\frac{1}{3n + 1} \\right) = \\frac{1}{3} \\cdot \\frac{3n}{3n + 1} = \\frac{n}{3n + 1}$$ **【M2A1】**",
            "**(b)**\n- 證明左邊 $\\frac{1}{4} \\le W_n$：\n當 $n = 1$ 時，$W_1 = \\frac{1}{3(1) + 1} = \\frac{1}{4}$。 **【M2A1】**\n計算差值 $W_{n+1} - W_n$：\n$$W_{n+1} - W_n = \\frac{n + 1}{3(n + 1) + 1} - \\frac{n}{3n + 1} = \\frac{n + 1}{3n + 4} - \\frac{n}{3n + 1}$$\n$$= \\frac{(n + 1)(3n + 1) - n(3n + 4)}{(3n + 4)(3n + 1)} = \\frac{(3n^2 + 4n + 1) - (3n^2 + 4n)}{(3n + 4)(3n + 1)} = \\frac{1}{(3n + 4)(3n + 1)} > 0$$ **【M3A1】**\n因此數列 $\\{W_n\\}$ 嚴格單調遞增，故其最小值為首項 $W_1 = \\frac{1}{4}$。\n所以對所有正整數 $n$，均有 $W_n \\ge \\frac{1}{4}$。 **【A1】**\n- 證明右邊 $W_n < \\frac{1}{3}$：\n由 (a) 問的表達式：\n$$W_n = \\frac{1}{3} - \\frac{1}{3(3n + 1)}$$ **【M1】**\n因為對任意正整數 $n$，$3(3n + 1) > 0$，所以 $\\frac{1}{3(3n + 1)} > 0$。\n因此：\n$$W_n = \\frac{1}{3} - \\frac{1}{3(3n + 1)} < \\frac{1}{3}$$ **【M1A1】**\n- 綜上所述，對任意正整數 $n \\ge 1$，均有 $\\frac{1}{4} \\le W_n < \\frac{1}{3}$。"
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
