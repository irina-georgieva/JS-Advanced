function solveFibonaci(){
    let num1 = 1;
    let num2 = 0;

    function nextNumbers(){
        let newNumber = num1 + num2;
        num1 = num2;
        num2 = newNumber;
        return num2;
    };

    return nextNumbers;
}

let fib = solveFibonaci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
