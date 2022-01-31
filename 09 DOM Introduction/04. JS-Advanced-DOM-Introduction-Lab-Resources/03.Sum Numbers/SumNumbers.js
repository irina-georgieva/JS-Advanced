function calc() {
    let firstNumberEl = document.getElementById('num1');
    let secondNumberEl = document.getElementById('num2');

    let firstNumber = Number(firstNumberEl.value);
    let secondNumber = Number(secondNumberEl.value);

    let sum = firstNumber + secondNumber;

    let resultEl = document.getElementById('sum');
    resultEl.value = sum;
}
