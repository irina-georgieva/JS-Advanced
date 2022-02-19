class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let types = [];

        for (let i = 0; i < vegetables.length; i++) {

            let vegiArgs = vegetables[i].split(' ');
            let type = vegiArgs[0];
            let quantity = Number(vegiArgs[1]);
            let price = Number(vegiArgs[2]);

            let vegi = {
                type,
                quantity,
                price
            };

            if (this.availableProducts.some(x => x.type === type)) {
                let vegi = this.availableProducts.find(x => x.type === type);
                vegi.quantity += quantity;
                if (price > vegi.price) {
                    vegi.price = price;
                }
            } else {
                this.availableProducts.push(vegi);
                types.push(type);
            }

        };

        return `Successfully added ${types.join(', ')}`;

    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let i = 0; i < selectedProducts.length; i++) {
            let currentProduct = selectedProducts[i].split(' ');
            let type = currentProduct[0];
            let quantity = Number(currentProduct[1]);
            if (!this.availableProducts.some(x => x.type === type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                let vegi = this.availableProducts.find(x => x.type === type);

                if (vegi.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }

                totalPrice += vegi.price * quantity;
                vegi.quantity -= quantity;
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    rottingVegetable(type, quantity) {
        let vegiQuantity = Number(quantity);
        if (!this.availableProducts.some(x => x.type === type)) {
            throw new Error(`${type} is not available in the store.`);
        } else {
            let vegi = this.availableProducts.find(x => x.type === type);

            if (vegi.quantity < vegiQuantity) {
                vegi.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else{
                vegi.quantity -= vegiQuantity;
                return  `Some quantity of the ${type} has been removed.`;
            }
        }
    }

    revision() {
        let string = `Available vegetables:\n`;
        this.availableProducts.sort((a,b) => a.price - b.price);

        for (const vegi of this.availableProducts) {
            string += `${vegi.type}-${vegi.quantity}-$${vegi.price}\n`
        }
        
        string += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return string;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

