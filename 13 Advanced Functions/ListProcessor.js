function solve(input) {
    let result = [];
    let commands = {
        add: function (str) {
            result.push(str);
        },
        remove: function(str) {
            result = result.filter(x => x !== str);
        },
        print: function() {
            console.log(result);
        }
    };

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        let commandArg = currentCommand.split(' ');
        let command = commandArg[0];
        let str = commandArg[1];

        commands[command](str);
    }
}



solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);