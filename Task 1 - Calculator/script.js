let display = document.getElementById("display");
let currentInput = "";

function Number(number) {
  currentInput += number;
  display.value = currentInput;
}

function Operator(operator) {
  currentInput += operator;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
