function fruit(fruit, weight, price){
    let fruitType = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightToKilos = fruitWeight / 1000;
    let money = weightToKilos * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weightToKilos.toFixed(2)} kilograms ${fruit}.`);
}