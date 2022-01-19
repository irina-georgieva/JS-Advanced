function number(num, p1, p2, p3, p4, p5) {
    let input = Number(num);
    let arrComm = [p1, p2, p3, p4, p5];

    for (let i = 0; i < arrComm.length; i++) {
        let currentCom = arrComm[i];
        switch (currentCom) {
            case 'chop': input = input / 2;
                console.log(input); break;
            case 'dice': input = Math.sqrt(input);
                console.log(input); break;
            case 'spice': input = input + 1;
                console.log(input); break;
            case 'bake': input = input * 3;
                console.log(input); break;
            case 'fillet': input = input * 0.8;
                console.log(input); break;
        }
    }
}