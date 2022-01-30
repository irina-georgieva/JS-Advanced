function store(arr) {

    let result = arr.sort((a, b) => a.localeCompare(b));
    let firstChar = '';

    for (let i = 0; i < result.length; i++) {
        let currentElement = result[i].split(' : ');
        if (result[i][0] !== firstChar) {
            console.log(result[i][0]);
        }

        console.log(`  ${currentElement[0]}: ${currentElement[1]}`);
        firstChar = result[i][0];
    }
}