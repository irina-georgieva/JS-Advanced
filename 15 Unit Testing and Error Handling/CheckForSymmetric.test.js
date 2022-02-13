const{expect} = require('chai');
const { isRegExp } = require('util/types');
const isSymmetric = require('./CheckForSymmetry');

describe('Symmetry checker', () => {
    it('returns true for symmetric array', () =>{
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for nonsymmetric array', () =>{
        expect(isSymmetric([1,2,3])).to.be.false;
    });

    it('return false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    
    it('returns false for type-different symmetric arrays', () =>{
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });

    it('returns true for symmetric array of odd number of elements', () =>{
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symmetric array of odd string elements', () =>{
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    });
    
    it('returns false for non-symmetric array of string elements', () =>{
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns true for string parameter', () =>{
        expect(isSymmetric(['abba'])).to.be.true;
    });
});