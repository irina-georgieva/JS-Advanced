function sumTable() {
    let costEl = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(costEl).reduce((a,b) => {
        let currentValue = Number(b.textContent) || 0;
        return a + currentValue;
    }, 0);

    let resultEl = document.getElementById('sum');
    resultEl.textContent = sum;
}