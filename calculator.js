let num1;
let num2;
let operator;

const screen = document.querySelector(".screen");
const keys = [...document.querySelectorAll(".btn")];
//const ops = [...document.querySelectorAll(".op")];

const equals = document.querySelector("#enter");
const clear = document.querySelector("#clear");


//gather equation values
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", () => {
        if (!num1) {
            num1 = Number(keys[i].textContent);
            screen.textContent = num1;
        } else if (num1 && !operator) {
            operator = keys[i].textContent;
            screen.textContent = operator;
        } else if (operator && !num2) {
            num2 = Number(keys[i].textContent);
            screen.textContent = num2;
        }
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
    let result; 

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
    if (!num1 || !operator || !num2) {
        screen.textContent = "Sorry. Enter a valid equation including 2 integers and an operator.";
    } else {
        operate(num1, operator, num2);
    }
});

//clear calculator
clear.addEventListener("click", () => {
    num1 = "";
    operator = "";
    num2 = "";
    screen.textContent = "";
})