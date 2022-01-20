function half(arr) {
    arr.sort((a, b) => a - b);

    let newArr = [];

    if (arr.length % 2 == 0) {
        newArr = arr.slice(arr.length / 2, arr.length);
    }
    else {
        let biggerHalf = Math.ceil(arr.length / 2);
        newArr = arr.slice(-biggerHalf);
    }

    return newArr;
}

half([3, 19, 14, 7, 2, 19, 6]);