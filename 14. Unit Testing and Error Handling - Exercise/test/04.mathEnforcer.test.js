import { expect } from 'chai';

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return correct result with a positive number (5) parameter', function(){
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
    });

    describe('addFive', function () {
        it('should return correct result with a positive floating point number (5.5) parameter', function(){
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        })
    });

    describe('addFive', function () {
        it('should return correct result with a negative floating point number (-5.5) parameter', function(){
            expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
        })
    });

    describe('addFive', function () {
        it('should return correct result with a negative number (-5) parameter', function(){
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
    });

    describe('addFive', function () {
        it('should return correct result with zero', function(){
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })
    });

    describe('addFive', function () {
        it('should return undefined if the parameter is not a number', function(){
            expect(mathEnforcer.addFive('zero')).to.equal(undefined);
        })
    });

    describe('addFive', function () {
        it('should return undefined if the parameter is not a number', function(){
            expect(mathEnforcer.addFive(false)).to.equal(undefined);
        })
    });

    describe('subtractTen', function () {
        it('should return correct result with a positive floating point number (55) parameter', function(){
            expect(mathEnforcer.subtractTen(55.5)).to.equal(45.5);
        })
    });

    describe('subtractTen', function () {
        it('should return correct result with a negative floating point number (55) parameter', function(){
            expect(mathEnforcer.subtractTen(-55.5)).to.equal(-65.5);
        })
    });

    describe('subtractTen', function () {
        it('should return correct result with a number (100) parameter', function(){
            expect(mathEnforcer.subtractTen(100)).to.equal(90);
        })
    });

    describe('subtractTen', function () {
        it('should return correct result with zero', function(){
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
    });

    describe('subtractTen', function () {
        it('should return undefined when the parameter is not a number', function(){
            expect(mathEnforcer.subtractTen('false')).to.equal(undefined);
        })
    });

    describe('subtractTen', function () {
        it('should return undefined when the parameter is not a number', function(){
            expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type', function(){
            expect(mathEnforcer.sum(33,66)).to.equal(99);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type', function(){
            expect(mathEnforcer.sum(33,66.9)).to.equal(99.9);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type', function(){
            expect(mathEnforcer.sum(33.3,66)).to.equal(99.3);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type', function(){
            expect(mathEnforcer.sum(33.3,66.6)).to.be.closeTo(99.9, 0.01);
        })
    });


    describe('sum', function () {
        it('should return correct result when both parameters are zero', function(){
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type, but 1st number is negative', function(){
            expect(mathEnforcer.sum(-10,66)).to.equal(56);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type, but 2nd number is negative', function(){
            expect(mathEnforcer.sum(10,-66)).to.equal(-56);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type, 1st number is zero', function(){
            expect(mathEnforcer.sum(0,37)).to.equal(37);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type, but 2nd number is zero', function(){
            expect(mathEnforcer.sum(37,0)).to.equal(37);
        })
    });

    describe('sum', function () {
        it('should return correct result when both parameters are of the correct type and negative', function(){
            expect(mathEnforcer.sum(-5,-12)).to.equal(-17);
        })
    });

    describe('sum', function () {
        it('should return undefined when the first parameter is not a number', function(){
            expect(mathEnforcer.sum(true,-12)).to.equal(undefined);
        })
    });

    describe('sum', function () {
        it('should return undefined when the first parameter is not a number', function(){
            expect(mathEnforcer.sum('seven',-12)).to.equal(undefined);
        })
    });

    describe('sum', function () {
        it('should return undefined when the second parameter is not a number', function(){
            expect(mathEnforcer.sum(66,'seven')).to.equal(undefined);
        })
    });

    describe('sum', function () {
        it('should return undefined when the second parameter is not a number', function(){
            expect(mathEnforcer.sum(66, false)).to.equal(undefined);
        })
    });


  });