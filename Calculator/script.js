let input = "";
let outputElement = document.getElementById("output");
let inputElement = document.getElementById("input");
// Theme Toggle Logic
const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});
function appendNumber(number) {
  input += number;
  displayInput();
}

function appendOperator(operator) {
  if (input.length > 0 && !isNaN(input[input.length - 1])) {
    input += operator;
    displayInput();
  }
}

function appendDot() {
  let parts = input.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    input += ".";
    displayInput();
  }
}

function clearAll() {
  input = "";
  displayInput();
  displayOutput(0);
}

function deleteLast() {
  input = input.slice(0, -1);
  displayInput();
}

function negate() {
  input = eval(input + "* -1").toString();
  displayInput();
  displayOutput(input);
}

function percentage() {
  input = eval(input + "/ 100").toString();
  displayInput();
  displayOutput(input);
}

function calculate() {
  try {
    let result = eval(input);
    displayOutput(result);
    input = result.toString();
  } catch {
    displayOutput("Error");
  }
}

function displayInput() {
  inputElement.textContent = input;
}

function displayOutput(result) {
  outputElement.textContent = result;
}
