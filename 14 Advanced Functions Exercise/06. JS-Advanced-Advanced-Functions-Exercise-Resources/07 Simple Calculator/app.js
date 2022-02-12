function calculator() {
    let firstInput;
    let secondInput;
    let resultElement;

    function init(selector1, selector2, selector3) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resultElement = document.querySelector(selector3);
        console.log(firstInput, secondInput, resultElement);
    }

    function add() {
        resultElement.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultElement.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




