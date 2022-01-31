function subtract() {
    let firstNumberEl = document.getElementById('firstNumber');
    let firstNumber = Number(firstNumberEl.value);

    let secondNumberEl = document.getElementById('secondNumber');
    let secondNumber = Number(secondNumberEl.value);

    let result = firstNumber - secondNumber;

    let resultEl = document.getElementById('result');
    resultEl.textContent = result;
}