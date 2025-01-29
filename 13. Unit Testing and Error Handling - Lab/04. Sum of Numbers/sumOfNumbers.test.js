const { expect } = require('chai');
const sum = require('sum'); 

describe('sum function tests', () => {
    
    it('should return 6 for [1, 2, 3]', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('should return 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('should return 10 for [10]', () => {
        expect(sum([10])).to.equal(10);
    });

    it('should return -6 for [-1, -2, -3]', () => {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });

    it('should return 6 for ["1", "2", "3"] (string numbers)', () => {
        expect(sum(["1", "2", "3"])).to.equal(6);
    });

    it('should return NaN for ["a", "b", "c"] (non-numeric strings)', () => {
        expect(sum(["a", "b", "c"])).to.be.NaN;
    });

    it('should return 6.6 for [1.1, 2.2, 3.3] (floating point numbers)', () => {
        expect(sum([1.1, 2.2, 3.3])).to.be.closeTo(6.6, 0.0001);
    });

    it('should return 0 when all elements are zero', () => {
        expect(sum([0, 0, 0, 0])).to.equal(0);
    });

    it('should return correct sum for a mix of positive and negative numbers', () => {
        expect(sum([10, -5, 3, -2])).to.equal(6);
    });

    it('should handle large numbers correctly', () => {
        expect(sum([1000000, 2000000, 3000000])).to.equal(6000000);
    });

});
