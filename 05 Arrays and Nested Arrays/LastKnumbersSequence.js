function numbers(n, k) {

    let arrNums = [1];

    for(let i = 1; i < n; i++) {
        let tempArray = arrNums.slice(-k);
        let sum = 0;
        for(let num of tempArray) {
            sum += num;
        }
        arrNums.push(sum);
    }
    return arrNums;
}

console.log(numbers(8, 2));