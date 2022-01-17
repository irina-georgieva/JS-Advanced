function stars(num){
    
    if(num === undefined){
        num = 5;
    }

    let line = "";

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
        line += '* ';
        }

        console.log(line);
        line = "";
    }
}