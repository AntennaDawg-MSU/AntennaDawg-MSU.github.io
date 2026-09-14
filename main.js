// main.js

const hwSelect        = document.getElementById("hw-select");
const qSelect         = document.getElementById("q-select");
const partSelect      = document.getElementById("part-select");
const versionSelect   = document.getElementById("version-select");
const promptBox       = document.getElementById("prompt-box");
const inputsContainer = document.getElementById("inputs-container");
const checkBtn        = document.getElementById("check-btn");
const resultDiv       = document.getElementById("result");

let lockedCorrect = [];
let listValues     = {}; // input index -> array of strings the student has added, for type "list"

// ── Helpers ────────────────────────────────────────────────────────────────

function getGuide() {
  const hw = hwSelect.value;
  return (window.homeworkGuides && hw) ? window.homeworkGuides[hw] : null;
}

function getPartData() {
  const guide = getGuide();
  const q     = qSelect.value;
  const part  = partSelect.value;
  if (!guide || !q || !part) return null;
  return guide.questions[q]?.[part] ?? null;
}

function checkNumber(studentVal, correctVal, tolerance) {
  if (isNaN(studentVal)) return false;
  const tol = tolerance ?? 0.02;
  if (correctVal === 0) return Math.abs(studentVal) < 1e-9;
  return Math.abs((studentVal - correctVal) / correctVal) <= tol;
}

function checkText(studentVal, correctVal) {
  return studentVal.trim().toLowerCase() === String(correctVal).trim().toLowerCase();
}

// Order-independent comparison for "list" type inputs (e.g. a set of modes).
// Correct as long as the same items appear the same number of times, in any order.
function checkList(studentArr, correctArr) {
  if (!Array.isArray(studentArr) || !Array.isArray(correctArr)) return false;
  if (studentArr.length !== correctArr.length) return false;
  const norm = arr => arr.map(v => String(v).trim().toLowerCase()).sort();
  const s = norm(studentArr);
  const c = norm(correctArr);
  return s.every((v, i) => v === c[i]);
}

// ── Reset ──────────────────────────────────────────────────────────────────

function resetBelow(level) {
  if (level === "hw") {
    qSelect.innerHTML       = '<option value="">-- Select --</option>';
    versionSelect.innerHTML = '<option value="">-- Select --</option>';
    partSelect.innerHTML    = '<option value="">-- Select --</option>';
  } else if (level === "q") {
    versionSelect.innerHTML = '<option value="">-- Select --</option>';
    partSelect.innerHTML    = '<option value="">-- Select --</option>';
  }
  promptBox.style.display   = "none";
  inputsContainer.innerHTML = "";
  checkBtn.style.display    = "none";
  resultDiv.innerHTML       = "";
  lockedCorrect             = [];
  listValues                = {};
}

// ── Dropdown population ────────────────────────────────────────────────────

hwSelect.addEventListener("change", () => {
  resetBelow("hw");
  const guide = getGuide();
  if (!guide) return;

  Object.keys(guide.questions)
    .sort((a, b) => Number(a) - Number(b))
    .forEach(q => {
      const opt = document.createElement("option");
      opt.value       = q;
      opt.textContent = `Question ${q}`;
      qSelect.appendChild(opt);
    });
});

// Selecting a Question now populates BOTH Version and Part, since version
// letters (a, b, c...) are shared across all parts of a question — only the
// answer key differs per part/version combo.
qSelect.addEventListener("change", () => {
  resetBelow("q");
  const guide = getGuide();
  const q     = qSelect.value;
  if (!guide || !q) return;

  const parts = guide.questions[q];

  // Part options (roman numerals)
  Object.keys(parts).forEach(p => {
    const opt = document.createElement("option");
    opt.value       = p;
    opt.textContent = `Part ${p}`;
    partSelect.appendChild(opt);
  });

  // Version options — pulled from the first part, since version keys are
  // expected to be identical across every part of a given question.
  const firstPart = Object.values(parts)[0];
  if (firstPart) {
    Object.keys(firstPart.versions).sort().forEach(v => {
      const opt = document.createElement("option");
      opt.value       = v;
      opt.textContent = `Version ${v.toUpperCase()}`;
      versionSelect.appendChild(opt);
    });
  }
});

// Once both Version and Part are chosen (in either order), render the inputs.
versionSelect.addEventListener("change", maybeRenderInputs);
partSelect.addEventListener("change", maybeRenderInputs);

function maybeRenderInputs() {
  promptBox.style.display   = "none";
  inputsContainer.innerHTML = "";
  checkBtn.style.display    = "none";
  resultDiv.innerHTML       = "";
  lockedCorrect             = [];
  listValues                = {};

  if (versionSelect.value && partSelect.value) {
    renderInputs();
  }
}

// ── Render input fields ────────────────────────────────────────────────────

function renderInputs() {
  const partData = getPartData();
  const version  = versionSelect.value;
  if (!partData || !version) return;

  promptBox.textContent   = partData.prompt;
  promptBox.style.display = "block";

  partData.inputs.forEach((inp, i) => {
    const group = document.createElement("div");
    group.className = "input-group";
    group.id        = `group-${i}`;

    if (inp.type === "list") {
      listValues[i] = [];

      group.innerHTML = `
        <label for="ans-${i}">${inp.label}</label>
        <div style="display:flex; gap:0.5rem;">
          <input type="text" id="ans-${i}" placeholder="e.g. TE10" autocomplete="off" style="flex:1;" />
          <button type="button" id="add-${i}" style="padding:0 1rem; border-radius:6px; border:1px solid #c1c6c8; background:#0f0f0f; color:#fff; cursor:pointer;">Add</button>
        </div>
        <div id="chips-${i}" style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;"></div>
        <div class="type-hint">Add each mode one at a time — order doesn't matter, just click a chip to remove it.</div>
      `;
      inputsContainer.appendChild(group);

      const textInput = group.querySelector(`#ans-${i}`);
      const addBtn    = group.querySelector(`#add-${i}`);
      const chipsDiv  = group.querySelector(`#chips-${i}`);

      const renderChips = () => {
        chipsDiv.innerHTML = "";
        listValues[i].forEach((val, idx) => {
          const chip = document.createElement("span");
          chip.textContent = `${val} ✕`;
          chip.title = "Click to remove";
          chip.style.cssText = "background:#0f0f0f; color:#fff; padding:0.3rem 0.7rem; border-radius:14px; cursor:pointer; font-size:0.85rem;";
          chip.addEventListener("click", () => {
            if (lockedCorrect.includes(i)) return; // locked once correct
            listValues[i].splice(idx, 1);
            renderChips();
          });
          chipsDiv.appendChild(chip);
        });
      };

      const addValue = () => {
        const val = textInput.value.trim();
        if (!val) return;
        listValues[i].push(val);
        textInput.value = "";
        textInput.focus();
        renderChips();
      };

      addBtn.addEventListener("click", addValue);
      textInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); addValue(); }
      });

    } else {
      const isText = inp.type === "text";
      group.innerHTML = `
        <label for="ans-${i}">${inp.label}</label>
        <input
          type="${isText ? "text" : "number"}"
          id="ans-${i}"
          placeholder=""
          ${isText ? "" : 'step="any"'}
          autocomplete="off"
        />
        <div class="type-hint">
          ${isText
            ? "Text answer — exact match required (case-insensitive)"
            : `Numerical — within ±${((inp.tolerance ?? 0.02) * 100).toFixed(0)}% accepted`}
        </div>
      `;
      inputsContainer.appendChild(group);
    }
  });

  checkBtn.style.display = "block";
}

// ── Check answers ──────────────────────────────────────────────────────────

checkBtn.addEventListener("click", () => {
  const partData = getPartData();
  const version  = versionSelect.value;
  if (!partData || !version) return;

  const correct = partData.versions[version];
  resultDiv.innerHTML = "";

  let allCorrect = true;

  partData.inputs.forEach((inp, i) => {
    const resultRow = document.createElement("div");
    resultRow.className = "result-row";

    if (lockedCorrect.includes(i)) {
      resultRow.className  += " correct";
      resultRow.textContent = `✔ ${inp.label}: Already correct ✓`;
      resultDiv.appendChild(resultRow);
      return;
    }

    if (inp.type === "list") {
      const studentList = listValues[i] || [];
      const isCorrect    = checkList(studentList, correct[i]);

      if (studentList.length === 0) {
        resultRow.className  += " empty";
        resultRow.textContent = `⚠ ${inp.label}: No modes added yet.`;
        allCorrect = false;
      } else if (isCorrect) {
        resultRow.className  += " correct";
        resultRow.textContent = `✔ ${inp.label}: Correct!`;
        lockedCorrect.push(i);
        const group = document.getElementById(`group-${i}`);
        group.querySelector(`#ans-${i}`).disabled = true;
        group.querySelector(`#add-${i}`).disabled = true;
      } else {
        resultRow.className  += " incorrect";
        resultRow.textContent = `✘ ${inp.label}: Incorrect — check your list of modes and try again (right count, right modes).`;
        allCorrect = false;
      }

      resultDiv.appendChild(resultRow);
      return;
    }

    const inputEl   = document.getElementById(`ans-${i}`);
    const raw       = inputEl.value;
    const isText    = inp.type === "text";
    const isCorrect = isText
      ? checkText(raw, correct[i])
      : checkNumber(parseFloat(raw), correct[i], inp.tolerance);

    if (raw === "" || raw === null) {
      resultRow.className  += " empty";
      resultRow.textContent = `⚠ ${inp.label}: No answer entered.`;
      allCorrect = false;
    } else if (isCorrect) {
      resultRow.className  += " correct";
      resultRow.textContent = `✔ ${inp.label}: Correct!`;
      lockedCorrect.push(i);
      inputEl.disabled = true;
    } else {
      resultRow.className  += " incorrect";
      resultRow.textContent = isText
        ? `✘ ${inp.label}: Incorrect — check your wording and try again.`
        : `✘ ${inp.label}: Incorrect — check your value and try again.`;
      allCorrect = false;
    }

    resultDiv.appendChild(resultRow);
  });

// ADD this instead:
  if (lockedCorrect.length === partData.inputs.length) {
    const banner = document.createElement("div");
    banner.className  = "result-row correct";
    resultDiv.appendChild(banner);
  }
});
