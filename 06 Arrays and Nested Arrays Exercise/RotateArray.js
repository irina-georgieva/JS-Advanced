function rotation(arr, num){

    for(let i = 0; i < num; i++){
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}