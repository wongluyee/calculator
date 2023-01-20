const currentScreen = document.getElementById('current-screen');
const previousScreen = document.getElementById('previous-screen');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll(".operator-btn");
const clearButton = document.getElementById('clear-btn');
const equalButton = document.getElementById('equal-btn');
const dotButton = document.getElementById('dot-btn');
const deleteButton = document.getElementById('delete-btn');

let num1 = '';
let num2 = '';
let result = '';
let clickedOperator = '';

deleteButton.addEventListener('click', () => {
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1)
})

equalButton.addEventListener('click', () => {
  if (!currentScreen.textContent) return;
  num2 = currentScreen.textContent;
  appendInputToPreviousScreen(num2 + '=');
  result = operate(clickedOperator, num1, num2);
  clearCurrentScreen();
  currentScreen.textContent += result;
})

clearButton.addEventListener('click', () => {
  clearCurrentScreen();
  clearPreviousScreen();
  reset();
});

dotButton.addEventListener('click', () => {
  if (currentScreen.textContent.includes('.'))
  return
  else
  currentScreen.textContent += '.'
});

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (previousScreen.textContent.includes("=") && !currentScreen.textContent.includes(".")) {
      // previousScreen.textContent += currentScreen.textContent;
      clearCurrentScreen();
      clearPreviousScreen();
      reset();
      appendToCurrentScreen(button.textContent)
    } else {
      appendToCurrentScreen(button.textContent)
    }
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (previousScreen.textContent.includes("=")) {
      clearPreviousScreen();
      num1 = currentScreen.textContent;
      clickedOperator = button.textContent;
      clearCurrentScreen();
      appendInputToPreviousScreen(num1 + button.textContent);
    } else {
      num1 = currentScreen.textContent;
      clickedOperator = button.textContent;
      clearCurrentScreen();
      appendInputToPreviousScreen(num1 + button.textContent);
    }
  })
})

function reset() {
  num1 = '';
  num2 = '';
  result = '';
  clickedOperator = '';
}

function clearCurrentScreen() {
  currentScreen.textContent = '';
}

function clearPreviousScreen() {
  previousScreen.textContent = '';
}

function appendToCurrentScreen(input) {
  currentScreen.textContent += input;
}

function appendInputToPreviousScreen(input) {
  previousScreen.textContent += input;
}

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return (b === 0) ? undefined : divide(a, b);
  } else {
    return "Error";
  }
}
