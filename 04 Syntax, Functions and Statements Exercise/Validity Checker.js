function points(x1, y1, x2, y2) {

    //x1,y1 to 0, 0
    let valueOne = Math.sqrt((0 - x1) ** 2 + (0 - y2) ** 2);
    //x2, y2 to 0,0
    let valueTwo = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    //x1,y1 to x2,y2
    let valueThree = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);

    if (Number.isInteger(valueOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(valueTwo)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(valueThree)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

points(3, 0, 0, 4);