const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = '';
}
function calculate() {
  try {
    const result = eval(display.value);
    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
