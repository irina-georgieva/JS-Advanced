function solve() {
    let [checkButton, clearButton] = document.querySelectorAll('button');
    let table = document.querySelector('table');
    let resultField = document.querySelector('#check p');
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    checkButton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);

    function check() {

        for (let i = 0; i < 3; i++) {
            let firstField = rows[i].children[0].children[0].value;
            let secondField = rows[i].children[1].children[0].value;
            let thirdField = rows[i].children[2].children[0].value;

            let firstCol = rows[0].children[i].children[0].value;
            let secondCol = rows[1].children[i].children[0].value;
            let thirdCol = rows[2].children[i].children[0].value;

            if (firstField === secondField ||
                firstField === thirdField ||
                secondField === thirdField ||
                firstCol === secondCol ||
                firstCol === thirdCol ||
                secondCol === thirdCol) {

                table.style.border = '2px solid red';
                resultField.textContent = "NOP! You are not done yet...";
                resultField.style.color = 'red';                
                break;

            } else {
                table.style.border = '2px solid green';
                resultField.textContent = "You solve it! Congratulations!";
                resultField.style.color = 'green';
            }
        }
    }

    function clear() {
        for (let i = 0; i < 3; i++) {
            rows[i].children[0].children[0].value = '';
            rows[i].children[1].children[0].value = '';
            rows[i].children[2].children[0].value = '';
        }
        table.style.border = 'none';
        resultField.textContent = "";
    }
}