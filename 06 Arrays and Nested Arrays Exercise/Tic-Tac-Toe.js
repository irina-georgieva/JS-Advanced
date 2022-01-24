function ticTacToe(inputMove) {

    let matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let isWin = false;
    let playerX = true;
    let emptySpaces = 9;

    for (let i = 0; i < inputMove.length; i++) {
        debugger;

        let index = inputMove[i].split(' ');
        let row = Number(index[0]);
        let col = Number(index[1]);

        if (matrix[row][col] === 'O' || matrix[row][col] === 'X') {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        matrix[row][col] = playerX ? 'X' : 'O';
        emptySpaces--;

        if ((typeof (matrix[0][0]) !== 'boolean' && (matrix[0][0] == matrix[0][1]) && (matrix[0][1] == matrix[0][2])) ||
            (typeof (matrix[1][0]) !== 'boolean' && (matrix[1][0] == matrix[1][1]) && (matrix[1][1] == matrix[1][2])) ||
            (typeof (matrix[2][0]) !== 'boolean' && (matrix[2][0] == matrix[2][1]) && (matrix[2][1] == matrix[2][2])) ||

            (typeof (matrix[0][0]) !== 'boolean' && (matrix[0][0] == matrix[1][0]) && (matrix[1][0] == matrix[2][0])) ||
            (typeof (matrix[0][1]) !== 'boolean' && (matrix[0][1] == matrix[1][1]) && (matrix[1][1] == matrix[2][1])) ||
            (typeof (matrix[0][2]) !== 'boolean' && (matrix[0][2] == matrix[1][2]) && (matrix[1][2] == matrix[2][2])) ||

            (typeof (matrix[0][0]) !== 'boolean' && (matrix[0][0] == matrix[1][1]) && (matrix[1][1] == matrix[2][2])) ||
            (typeof (matrix[2][0]) !== 'boolean' && (matrix[2][0] == matrix[1][1]) && (matrix[1][1] == matrix[0][2]))) {

            isWin = true;
            break;
        }

        if (emptySpaces == 0) {
            break;
        }

        playerX = !playerX;
    }

    if (isWin) {
        console.log(`Player ${playerX ? 'X' : 'O'} wins!`);
    }else {
        console.log('The game ended! Nobody wins :(');
    }

    for (let i = 0; i < 3; i++) {
        console.log(matrix[i].join('\t'));
    }
}


ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);


ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);