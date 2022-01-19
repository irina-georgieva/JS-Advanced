function aggregate(array){
    let sum = 0;
    let sumInverse = 0;
    let concat = "";

    sum = array.reduce((partSum, a) => partSum + a, 0);
    sumInverse = array.reduce((partSum, a) => partSum + 1/a, 0);
    concat = array.join("");

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}