function solve(input, criteria){
    let emplyees = JSON.parse(input);
    let [prop, value] = criteria.split('-');

    emplyees.filter(x => x[prop] == value)
    .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .forEach(x => console.log(x));

}