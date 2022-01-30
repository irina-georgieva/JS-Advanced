function inventory(arr){

    let newHero = [];

    for (const el of arr) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        newHero.push({name, level, items});
    }

    console.log(JSON.stringify(newHero));
}