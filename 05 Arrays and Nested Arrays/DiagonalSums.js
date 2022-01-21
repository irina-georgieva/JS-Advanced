function diagonalSums(matrix) {
    let straightDiagonalSum = 0;
    let reverseDiagonalSum = 0;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i === j) {
                straightDiagonalSum += matrix[i][j];
            }
            if((i + j) === (matrix.length - 1)) {
                reverseDiagonalSum += matrix[i][j];
            }
        }
    }
    console.log(straightDiagonalSum, reverseDiagonalSum);
}