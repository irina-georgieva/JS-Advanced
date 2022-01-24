function diagonalMatrix(input) {

    let matrix = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    for (let i = 0; i < matrix.length; i++) {

        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (firstDiagonal === secondDiagonal) {

        for (let i = 0; i < matrix.length; i++) {
            
            for (let j = 0; j < matrix.length; j++) {

                if ((j !== matrix.length - 1 - i) && (j !== i)) {
                    matrix[i][j] = firstDiagonal;
                }
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    }

}