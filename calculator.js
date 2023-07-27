let num1;
let operator;
let result;

let value = [];
let displayValue;

const screen = document.querySelector(".screen");
screen.textContent = displayValue;

const keys = [...document.querySelectorAll(".btn")];
const ops = [...document.querySelectorAll(".op")];
const equals = document.querySelector(".enter");
const clear = document.querySelector(".clear");


//gather equation values
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", () => {
        value[i] = keys[i].textContent;
        displayValue = value.toString();
        displayValue = displayValue.replaceAll(",", "");
        if (!num1) {
            screen.textContent = displayValue;
        } else {
            screen.textContent = num1 + operator + displayValue;
        }
    });
}

for (let i = 0; i < ops.length; i++) {
        ops[i].addEventListener("click", () => {
            num1 = Number(displayValue);
            operator = ops[i].textContent;
            screen.textContent = num1 + operator;
            displayValue = "";
            value.length = 0;
        });
}




//4 basic math operations function
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


//Operate function
function operate(num1, operator, num2) {
    if (operator == "+") {
        result = add(num1, num2);
        screen.textContent = result;
    } else if (operator == "-") {
        result = subtract(num1, num2);
        screen.textContent = result;
    } else if (operator == "*") {
        result = mult(num1, num2);
        screen.textContent = result;
    } else if (operator == "/") {
        result =  divide(num1, num2);
        screen.textContent = result;
    }
}

//enter button calls operate()
equals.addEventListener("click", () => {
    num2 = Number(displayValue);
    operate(num1, operator, num2);
});

//clear calculator
clear.addEventListener("click", () => {
    num1 = "";
    operator = "";
    num2 = "";
    screen.textContent = "";
    value = value.length = 0;
});