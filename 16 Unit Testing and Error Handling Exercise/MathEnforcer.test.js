const { expect } = require('chai');
const mathEnforcer = require('./MathEnforcer');

describe('Test addFive', () => {
    it('Expect undefined or wrong', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
        expect(mathEnforcer.addFive(false)).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it('Expect proper number outcome', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    });

});

describe('Test subtract', () =>{
    it('Expect undefined or wrong input type', () => {
        expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
        expect(mathEnforcer.subtractTen("asd")).to.be.undefined;
        expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        expect(mathEnforcer.subtractTen(false)).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it('Expect proper number outcome', () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    });
});

describe('Test sum functionality', () =>{
    it('Expect undefined or wrong input type', () => {
        expect(mathEnforcer.sum(true, 5)).to.be.undefined;
        expect(mathEnforcer.sum(5, false)).to.be.undefined;
        expect(mathEnforcer.sum(5,'5')).to.be.undefined;
        expect(mathEnforcer.sum("asd",5)).to.be.undefined;
        expect(mathEnforcer.sum(1, [1,2])).to.be.undefined;
        expect(mathEnforcer.sum([1,2], 1)).to.be.undefined;
        expect(mathEnforcer.sum({}, 2)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
    });

    it('Expect proper number outcome', () => {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        expect(mathEnforcer.sum(-20, -20)).to.be.equal(-40);
        expect(mathEnforcer.sum(20, -30)).to.be.equal(-10);
        expect(mathEnforcer.sum(5.55, 5.55)).to.be.closeTo(11.1, 0.01);
    });
});