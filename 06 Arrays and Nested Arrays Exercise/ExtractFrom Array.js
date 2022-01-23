function extract(input) {

    let currentElement = input[0];
    let extractedArray = [];
    extractedArray.push(currentElement);

    for (let i = 1; i <= input.length; i++) {
        if(currentElement <= input[i]){
            extractedArray.push(input[i]);
            currentElement = input[i];
        }
    }

    return extractedArray;
}

extract([1,
    3,
    8,
    4,10,
    12,
    3,
    2,
    24]);