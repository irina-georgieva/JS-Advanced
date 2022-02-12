function types(...input) {
    let argumentsNumbers = {};

    for (const element of input) {
        let currentType = typeof element;
        let currentValue = element;
        console.log(`${currentType}: ${currentValue}`)

        if (!argumentsNumbers.hasOwnProperty(currentType)) {
            argumentsNumbers[currentType] = 1;
        } else {
            argumentsNumbers[currentType] += 1;
        }
    }

    argumentsNumbers = Object.entries(argumentsNumbers)
    .sort((a, b) => b[1] - a[1]);

    argumentsNumbers.forEach(element => console.log(`${element[0]} = ${element[1]}`));

}

//types('cat', 42, function () { console.log('Hello world!'); })
types({ name: 'bob' }, 3.333, 9.999);