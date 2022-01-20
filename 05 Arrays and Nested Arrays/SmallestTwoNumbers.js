function twoNumbers(arr){
    
    let newArr = [];
    arr.sort((a,b) => a - b);

    newArr = arr.slice(0,2);

    console.log(newArr.join(' '));
}

twoNumbers([30, 15, 50, 5]);