function neighbors(arr){

    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (i === arr.length - 1) {
                if (arr[i][j] === arr[i][j + 1]) {
                    count++;
                }
            } else {
                if (arr[i][j] === arr[i + 1][j]) {
                    count++;
                }

                if (arr[i][j] === arr[i][j + 1]) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

neighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]	
);

