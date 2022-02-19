const { expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('Tests', () => {

    describe('Test hiringEmployee', function () {
        it('Expect string position to throw an error', () => {
            expect(() => companyAdministration.hiringEmployee('Irina', 'Doctor', 20)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Irina', 'programmer', 15)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Irina', 10, 15)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Irina', false, 15)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Irina', {}, 15)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Arhitect')).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee(5)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee(1.2)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee(true)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee([])).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee({})).to.throw(Error, `We are not looking for workers for this position.`);
        });

        it('Expect years experience to be 3 or more', () => {
            expect(companyAdministration.hiringEmployee('Irina', 'Programmer', 3)).to.equal('Irina was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Irina', 'Programmer', 10)).to.equal('Irina was successfully hired for the position Programmer.');
        });

        it('Expect years experience less than 3 to return message', () => {
            expect(companyAdministration.hiringEmployee('Irina', 'Programmer', 1)).to.equal('Irina is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Irina', 'Programmer', -5)).to.equal('Irina is not approved for this position.');
        })
    });

    describe('Test calculateSalary', function () {
        it('Expext total Amount to calculate rightly', () => {
            expect(companyAdministration.calculateSalary(156)).to.equal(2340);
            expect(companyAdministration.calculateSalary(5)).to.equal(75);
        });

        it('Expext total Amount to calculate rightly for more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(180)).to.equal(3700);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

        it('Expext invalid hours to throw an error', () => {
            expect(() => companyAdministration.calculateSalary(-2)).to.throw(Error, `Invalid hours`);
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, `Invalid hours`);
            expect(() => companyAdministration.calculateSalary(true)).to.throw(Error, `Invalid hours`);
            expect(() => companyAdministration.calculateSalary('Pesho')).to.throw(Error, `Invalid hours`);
            expect(() => companyAdministration.calculateSalary(['test'])).to.throw(Error, `Invalid hours`);
        });
    });

    describe('Test firedEmployee', function () {
        it('Expect array to return correctly', () => {
            expect(companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], 1)).to.equal('Misho, Georgi');
            expect(companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], 2)).to.equal('Misho, Ivan');
        });

        it('Expext invalid array of employees to throw an error', () => {
            expect(() => companyAdministration.firedEmployee({}, 2)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(2, 2)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee('Stefan', 2)).to.throw(Error, `Invalid input`);
        });

        it('Expext invalid index to throw an error', () => {
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], 'Stefan')).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], ['test'])).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], -1)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], 3)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], 10)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], {})).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Misho', 'Ivan', 'Georgi'], true)).to.throw(Error, `Invalid input`);
            expect(() => companyAdministration.firedEmployee(['test1', 'test2'], -1)).to.throw(Error, `Invalid input`);
        });
    });
});


