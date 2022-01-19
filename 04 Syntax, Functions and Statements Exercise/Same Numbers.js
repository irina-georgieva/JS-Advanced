function numbers(a){
    let inputNumber = a.toString();
    let isSame = true;
    let sumDigits = 0;
    let digitToCompare = inputNumber[0];
    let legthString = inputNumber.length;

    for(let i = 0; i < legthString; i++ ){

        sumDigits += Number(inputNumber[i]);

        if(inputNumber[i] !== digitToCompare){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumDigits);
}