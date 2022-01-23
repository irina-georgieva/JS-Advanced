function arr(input){
    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortedArray.forEach(element => {
        console.log(element);
    });
}