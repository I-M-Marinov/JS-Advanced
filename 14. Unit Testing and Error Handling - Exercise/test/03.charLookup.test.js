import { expect } from 'chai';

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar function tests', () => {

    it('should return the char at the specified index when input is correct', () => {
        expect(lookupChar('test', 3)).to.equal('t');
    });

    it('should return the char at the specified index when input is correct', () => {
        expect(lookupChar('undefined', 4)).to.equal('f');
    });

    it('should return undefined if the first parameter is not a string', () => {
        expect(lookupChar(1, 4)).to.equal(undefined);
    });

    it('should return undefined if the first parameter is not a string', () => {
        expect(lookupChar(true, 4)).to.equal(undefined);
    });

    it('should return undefined if the second parameter is not a number', () => {
        expect(lookupChar('test', 'test')).to.equal(undefined);
    });

    it('should return undefined if the second parameter is not a number', () => {
        expect(lookupChar('test', false)).to.equal(undefined);
    });

    it('should return undefined if the second parameter is not an integer', () => {
        expect(lookupChar('test', 2.5)).to.equal(undefined);
    });

    it('should return "Incorrect index" if the index is out of bounds', () => {
        expect(lookupChar('test', 55)).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if the index is out of bounds', () => {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if the index is out of bounds', () => {
        expect(lookupChar('test', -3)).to.equal('Incorrect index');
    });

});