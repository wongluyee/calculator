const currentScreen = document.getElementById('current-screen');
const previousScreen = document.getElementById('previous-screen');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll(".operator-btn");
const clearButton = document.getElementById('clear-btn');
const equalButton = document.getElementById('equal-btn');

let num1 = '';
let num2 = '';
let result = '';
let clickedOperator = '';

equalButton.addEventListener('click', () => {
    if (!currentScreen.textContent) return;
    num2 = currentScreen.textContent;
    appendInputToPreviousScreen(num2 + '=');
    result = operate(clickedOperator, num1, num2);
    clearCurrentScreen();
    currentScreen.textContent += result;
})

function reset(){
  num1 = '';
  num2 = '';
  result = '';
  clickedOperator = '';
}

function clearCurrentScreen(){
  currentScreen.textContent = '';
}

function clearPreviousScreen(){
  previousScreen.textContent = '';
}

clearButton.addEventListener('click', () =>{
  clearCurrentScreen();
  clearPreviousScreen();
  reset();
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentScreen.textContent) {
        previousScreen.textContent += currentScreen.textContent;
        reset();
        clearCurrentScreen();
        appendNumber(button.textContent)
      } else {
        appendNumber(button.textContent)
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

function appendNumber(number) {
  currentScreen.textContent += number;
}

function appendInputToPreviousScreen(input){
  previousScreen.textContent += input;
}

function appendOperator(operator){
    currentScreen.textContent += operator;
}

function add (a, b) {
	return a + b;
};

function subtract (a, b) {
	return a - b;
};

function multiply (a, b) {
	return a * b;
};

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);

    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return (b === 0)? null : divide(a, b);
    } else {
        return "Error";
    }
}
