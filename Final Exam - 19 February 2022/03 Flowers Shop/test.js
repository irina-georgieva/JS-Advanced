const {expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('Tests', function() {
    describe('calcPriceOfFlowers', function() {
        it('Expect to return result', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 10, 5)).to.equal('You need $50.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 3)).to.be.equal('You need $15.00 to buy Rose!');
        });

        it('Expect flower value to throw error', () => {
            expect(() => flowerShop.calcPriceOfFlowers({}, 10, 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(1, 10, 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers([], 10, 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(true, 10, 5)).to.throw(Error, `Invalid input!`);
        });

        it('Expect price value to throw error', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Tulip', 'one', 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Tulip', {}, 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Tulip', [10], 5)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Tulip', true, 5)).to.throw(Error, `Invalid input!`);

        });

        it('Expect quantity value to throw error', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 1, 'five')).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 1, {})).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 1, [1])).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 1, false)).to.throw(Error, `Invalid input!`);

        });
     });

     describe('checkFlowersAvailable', function (){
        it('Expect method to check array for flower', () => {
            expect(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!');
            expect(flowerShop.checkFlowersAvailable("Lily", ["Lily", "Rose", "Orchid"])).to.equal('The Lily are available!');
            expect(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Orchid", "Lily"])).to.equal('The Lily are available!');
        });

        it('Expect method to check array for not existing flower', () => {
            expect(flowerShop.checkFlowersAvailable("Tulip", ["Rose", "Lily", "Orchid"])).to.equal('The Tulip are sold! You need to purchase more!');
        });
     });

     describe('sellFlowers', function() {
        it('Expect flower array to throw an error', () => {
            expect(() => flowerShop.sellFlowers({}, 1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(true, 1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers('test', 1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(5, 1)).to.throw(Error, `Invalid input!`);
        });

        it('Expect flower index to to throw an error', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {})).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'test')).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], [])).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], false)).to.throw(Error, `Invalid input!`);

            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -2)).to.throw(Error, `Invalid input!`);

            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw(Error, `Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 10)).to.throw(Error, `Invalid input!`);
        });

        it('Expect method to return array without sold florwers', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

     });

});
