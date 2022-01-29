function town (input){
    let townData = {};

    for(const data of input){
        let dataArr = data.split(' <-> ');
        let town = dataArr[0];
        let population = Number(dataArr[1]);

        if(!townData[town]){
            townData[town] = 0;
        }

        townData[town] += population;
    }

    for(const town in townData){
        console.log(`${town} : ${townData[town]}`);
    }
}