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