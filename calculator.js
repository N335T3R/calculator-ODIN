let num1;
let num2;
let operator;

//4 basic math operations function
function add(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(result);
}

function mult(num1, num2) {
    let result = num1 * num2;
    console.log(result);
}

function divide(num1, num2) {
    let result = num1 / num2;
    console.log(result);
}

//Operate function
function operate(num1, operator, num2) {
    if (operator == "+") {
        add(num1, num2);
    } else if (operator == "-") {
        subtract(num1, num2)
    } else if (operator == "*") {
        mult(num1,num2)
    } else if (operator == "/") {
        divide(num1, num2)
    }
}