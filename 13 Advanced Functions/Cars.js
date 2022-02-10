function solve(input = []) {
    let result = {};

    let commands = {
        create: function (name) {
            Object.create(result[name] = {});
        },
        inherit: function (name, parent) {
            Object.create(result[name] = {});
            Object.setPrototypeOf(result[name], result[parent]);
        },
        set: function (name, key, value) {
            result[name][key] = value;
        },
        print: function (name) {
            let arr = [];
            for (const key in result[name]) {
                arr.push(`${key}:${result[name][key]}`);
            }
            console.log(arr.join(','));
        },
    };

    for (let carInfo of input) {
        let infoArg = carInfo.split(' ');
        let command = infoArg[0];
        let name = infoArg[1];

        if(command === 'create' && infoArg.length == 2){
            commands.create(name);
        }else if(infoArg[2] === 'inherit'){
            let parent = infoArg[3];
            commands.inherit(name, parent);
        }else if(command === 'set'){
            let key = infoArg[2];
            let value = infoArg[3];
            commands.set(name, key, value);
        }else{
            commands.print(name);
        }
    }

}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])