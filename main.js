let result = document.getElementById("result");

function insertSymbol(symbol) {
  result.value += symbol;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
