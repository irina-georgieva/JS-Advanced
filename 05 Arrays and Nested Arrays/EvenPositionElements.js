function position(arr){
    let arrElements = '';

    for(let i = 0; i < arr.length; i+= 2){
        arrElements += arr[i] + ' ';
    }

    console.log(arrElements);
}

position(['20', '30', '40', '50', '60']);