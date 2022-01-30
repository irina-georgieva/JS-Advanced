function carFactory(input){

    let newCar = {};
    let engine = {};
    let carriage = {};

    newCar.model = input.model;

    if(input.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }else if(input.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    }else{
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = input.carriage;
    carriage.color = input.color;

    if(input.wheelsize % 2 ===0){
        input.wheelsize--;
    }

    newCar.engine = engine;
    newCar.carriage = carriage;
    newCar.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    return newCar;
}