function solve() {
    let obj = {
        fighter(name) {
            let obj1 = {
                name: name,
                health: 100,
                stamina: 100,
                fight() {
                    obj1.stamina--;
                    console.log(`${obj1.name} slashes at the foe!`);
                }
            };
            return obj1;
        },
        mage(name) {
            let obj2 = {
                name: name,
                health: 100,
                mana: 100,
                cast(spell) {
                    obj2.mana--;
                    console.log(`${obj2.name} cast ${spell}`);
                }
            };
            return obj2;
        }
    }

    return obj;
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);