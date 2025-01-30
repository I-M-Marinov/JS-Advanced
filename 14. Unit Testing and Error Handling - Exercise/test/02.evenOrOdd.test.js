import { expect } from 'chai';

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven function tests', () => {
    it('should return undefined when input is a number', () => {
        expect(isOddOrEven(3)).to.equal(undefined);
    });

    it('should return undefined when input is a boolean', () => {
        expect(isOddOrEven(false)).to.equal(undefined);
    });

    it('should return "even" when string length is even (e.g., "onethousands")', () => {
        expect(isOddOrEven('onethousands')).to.equal('even');
    });

    it('should return "even" when string length is even (e.g., "onemillion")', () => {
        expect(isOddOrEven('onemillion')).to.equal('even');
    });

    it('should return "odd" when string length is odd (e.g., "one")', () => {
        expect(isOddOrEven('one')).to.equal('odd');
    });

    it('should return "odd" when string length is odd (e.g., "three")', () => {
        expect(isOddOrEven('three')).to.equal('odd');
    });
});
