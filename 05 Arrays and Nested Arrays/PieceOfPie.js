function pie(arr, flavOne, flavTwo){

    let indexStart = arr.indexOf(flavOne);
    let indexEnd = arr.indexOf(flavTwo);

    let newArr = arr.slice(indexStart, indexEnd+1);

    return newArr;
}