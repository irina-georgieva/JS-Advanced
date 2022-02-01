function generateReport() {
    let resultEl = document.getElementById('output');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let checkedBox = Array.from(document.querySelectorAll('input[type=checkbox]'));

    let result = [];

    for (let i = 0; i < rows.length; i++) {
        let info = {};

        for (let j = 0; j < checkedBox.length; j++) {
            if (checkedBox[j].checked) {
                let section = checkedBox[j].name;

                let text = rows[i].textContent.split("\n").map(x => x.trim());
                text.shift();
                text.pop();

                info[section] = text[j];
            }
        }

        result.push(info);
    }

    resultEl.value = JSON.stringify(result);

}