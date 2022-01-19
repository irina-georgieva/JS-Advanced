function roadRadar(speed, area) {
    let speedZone = 0;
    let difference = 0;
    let status;

    if (area == 'motorway') {
        speedZone = 130;
        if (speed > 130) {
            difference = speed - 130;
        }
    }
    else if (area == 'interstate') {        
        speedZone = 90;
        if(speed > 90){
        difference = speed - 90;
        }
    }
    else if (area == 'city') {
        speedZone = 50;
        if(speed > 50){
        difference = speed - 50;
        }
    }
    else if (area == 'residential') {
        speedZone = 20;
        if(speed > 20){
        difference = speed - 20;
        }
    }

    if (difference <= 20) {
        status = 'speeding';
    }
    else if (difference > 20 && difference <= 40) {
        status = 'excessive speeding';
    }
    else {
        status = 'reckless driving';
    }

    if (difference == 0) {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
    else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`);
    }
}