let displayValue = '0';
let firstNumber = '';
let operator = '';
let secondNumber = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = '';
  }
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  firstNumber = displayValue;
  operator = op;
  displayValue = '';
  updateDisplay();
}

function calculate() {
  secondNumber = displayValue;
  if (operator && secondNumber !== '') {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        displayValue = (firstNumber + secondNumber).toString();
        break;
      case '-':
        displayValue = (firstNumber - secondNumber).toString();
        break;
      case '*':
        displayValue = (firstNumber * secondNumber).toString();
        break;
      case '/':
        if (secondNumber === 0) {
          displayValue = 'Error: Division by zero';
        } else {
          displayValue = (firstNumber / secondNumber).toString();
        }
        break;
      default:
        displayValue = 'Error';
    }

    // Round long decimals
    displayValue = parseFloat(displayValue).toFixed(2);
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '0';
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
}

// Initialize display
updateDisplay();
