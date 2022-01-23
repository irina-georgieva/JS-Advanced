function array(input){
    
    let sortedArr = input.sort((a,b) => a.localeCompare(b));
    let count = 1;

    sortedArr.forEach((element) => {
        console.log(`${count}.${element}`);
        count++;
    });
}

array(["John", "Bob", "Christina", "Ema"]);