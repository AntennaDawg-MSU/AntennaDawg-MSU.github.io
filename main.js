// main.js

const hwSelect        = document.getElementById("hw-select");
const qSelect         = document.getElementById("q-select");
const partSelect      = document.getElementById("part-select");
const versionSelect   = document.getElementById("version-select");
const promptBox       = document.getElementById("prompt-box");
const inputsContainer = document.getElementById("inputs-container");
const checkBtn        = document.getElementById("check-btn");
const resultDiv       = document.getElementById("result");

// Tracks which input indices have already been answered correctly
let lockedCorrect = [];

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
  // Handle zero correct answer — use absolute tolerance of 1e-9
  if (correctVal === 0) return Math.abs(studentVal) < 1e-9;
  return Math.abs((studentVal - correctVal) / correctVal) <= tol;
}

function checkText(studentVal, correctVal) {
  return studentVal.trim().toLowerCase() === String(correctVal).trim().toLowerCase();
}

// ── Reset ──────────────────────────────────────────────────────────────────

function resetBelow(level) {
  if (level === "hw") {
    qSelect.innerHTML    = '<option value="">-- Select --</option>';
    partSelect.innerHTML = '<option value="">-- Select --</option>';
    versionSelect.innerHTML = '<option value="">-- Select --</option>';
  }
  if (level === "hw" || level === "q") {
    partSelect.innerHTML = '<option value="">-- Select --</option>';
    versionSelect.innerHTML = '<option value="">-- Select --</option>';
  }
  promptBox.style.display   = "none";
  inputsContainer.innerHTML = "";
  checkBtn.style.display    = "none";
  resultDiv.innerHTML       = "";
  lockedCorrect             = [];
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
      opt.value = q;
      opt.textContent = `Question ${q}`;
      qSelect.appendChild(opt);
    });
});

qSelect.addEventListener("change", () => {
  resetBelow("q");
  const guide = getGuide();
  const q     = qSelect.value;
  if (!guide || !q) return;

  Object.keys(guide.questions[q])
    .sort()
    .forEach(p => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = `Part ${p.toUpperCase()}`;
      partSelect.appendChild(opt);
    });
  Default .sort() results ["I","II","III","IV","V"]
});

partSelect.addEventListener("change", ()=>{ 
  populateVersions();
  renderInputs();
});

function populateVersions() {
  versionSelect.innerHTML   = '<option value="">-- Select --</option>';
  resultDiv.innerHTML       = "";
  promptBox.style.display   = "none";
  inputsContainer.innerHTML = "";   // fixed: was inputContainer
  checkBtn.style.display    = "none";  // fixed: unclosed string
  lockedCorrect             = [];

  const partData = getPartData();   // fixed: was getPartDataq()
  console.log("populateVersions called, partData:", partData)
  if (!partData) return;

  const versionKeys = Object.keys(partData.versions);
  console.log("version keys:", versionKeys); // ADD THIS

  versionKeys.sort().forEach(v => {
    const opt = document.createElement("option");
    opt.value       = v;
    opt.textContent = `Version ${v.toUpperCase()}`;
    versionSelect.appendChild(opt);
  });

  Object.keys(partData.versions)
    .sort()
    .forEach(v => {
      const opt = document.createElement("option");
      opt.value       = v;
      opt.textContent = `Version ${v.toUpperCase()}`;
      versionSelect.appendChild(opt);
    });
}
versionSelect.addEventListener("change", renderInputs);

// ── Render input fields ────────────────────────────────────────────────────

function renderInputs() {
  promptBox.style.display   = "none";
  inputsContainer.innerHTML = "";
  checkBtn.style.display    = "none";
  resultDiv.innerHTML       = "";
  lockedCorrect             = [];

  const partData = getPartData();
  const version  = versionSelect.value;
  if (!partData || !version) return;

  // Show concept prompt
  promptBox.textContent   = partData.prompt;
  promptBox.style.display = "block";

  // Build one input per entry
  partData.inputs.forEach((inp, i) => {
    const isText = inp.type === "text";
    const group  = document.createElement("div");
    group.className = "input-group";
    group.id = `group-${i}`;
    group.innerHTML = `
      <label for="ans-${i}">${inp.label}</label>
      <input
        type="${isText ? "text" : "number"}"
        id="ans-${i}"
        placeholder="Enter ${inp.label}"
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
    const inputEl  = document.getElementById(`ans-${i}`);
    const resultRow = document.createElement("div");
    resultRow.className = "result-row";

    // Already locked from a previous attempt
    if (lockedCorrect.includes(i)) {
      resultRow.className += " correct";
      resultRow.textContent = `✔ ${inp.label}: Already correct ✓`;
      resultDiv.appendChild(resultRow);
      return;
    }

    const raw       = inputEl.value;
    const isText    = inp.type === "text";
    const isCorrect = isText
      ? checkText(raw, correct[i])
      : checkNumber(parseFloat(raw), correct[i], inp.tolerance);

    if (raw === "" || raw === null) {
      resultRow.className += " empty";
      resultRow.textContent = `⚠ ${inp.label}: No answer entered.`;
      allCorrect = false;
    } else if (isCorrect) {
      resultRow.className += " correct";
      resultRow.textContent = `✔ ${inp.label}: Correct!`;
      lockedCorrect.push(i);          // lock this input
      inputEl.disabled = true;        // grey it out visually
    } else {
      resultRow.className += " incorrect";
      resultRow.textContent = isText
        ? `✘ ${inp.label}: Incorrect — check your wording and try again.`
        : `✘ ${inp.label}: Incorrect — check your value and try again.`;
      allCorrect = false;
    }

    resultDiv.appendChild(resultRow);
  });

  // If everything is correct, update the button
  if (allCorrect || lockedCorrect.length === partData.inputs.length) {
    checkBtn.textContent    = "✔ All Correct!";
    checkBtn.style.background = "#0d6e3f";
    checkBtn.disabled       = true;
  }
});
