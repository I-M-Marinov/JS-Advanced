import { assert } from "chai";
import { describe, it } from "mocha";
import planYourTrip from "../planYourTrip.js";

describe("planYourTrip Tests", function() {
    describe("choosingDestination tests", function() {

        it("throws an error if the year is not 2024", function() {
            assert.throws(() => {
                planYourTrip.choosingDestination('North Pole', 'Winter', 2025);
            }, Error, "Invalid Year!");

            assert.throws(() => {
                planYourTrip.choosingDestination('North Pole', 'Winter', undefined);
            }, Error, "Invalid Year!");

            assert.throws(() => {
                planYourTrip.choosingDestination('North Pole', 'Winter', null);
            }, Error, "Invalid Year!");
        });

        it("if destination is Ski Resort and season is Winter", function() {
            let result = planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024);
            let resultMsg = `Great choice! The Winter is the perfect time to visit the Ski Resort.`;
            assert.equal(result, resultMsg);
        });

        it("if destination is Ski Resort and season is not Winter", function() {
            let result = planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024);
            let resultMsg = `Consider visiting during the Winter for the best experience at the Ski Resort.`;
            assert.equal(result, resultMsg);
        });

        it("throws an Error for any destination other than Ski Resort", function() {
            assert.throws(() => {
                planYourTrip.choosingDestination('Beach', 'Winter', 2024);
            }, Error, "This destination is not what you are looking for.");
        
            assert.throws(() => {
                planYourTrip.choosingDestination('Jungle', 'Winter', 2024);
            }, Error, "This destination is not what you are looking for.");
        });
     });

     describe("exploreOptions tests", function() {

        it("If activities is not an array throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions('swimming', 1);
            }, Error, "Invalid Information!");
        });

        it("If activities array is empty throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions([], 0);
            }, Error, "Invalid Information!");
        });

        it("If activityIndex is not an integer throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions([ 'swimming', 'fencing'], 5.6);
            }, Error, "Invalid Information!");
        });

        it("If activityIndex is a negative number throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions([ 'swimming', 'fencing'], -1);
            }, Error, "Invalid Information!");
        });

        it("If activityIndex is a number bigger than the length of the activities array throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions([ 'swimming', 'fencing'], 3);
            }, Error, "Invalid Information!");
        });

        it("If activityIndex is equal to the length of the activities array throws an Error", function() {
            assert.throws(() => {
                planYourTrip.exploreOptions([ 'swimming', 'fencing'], 2);
            }, Error, "Invalid Information!");
        });

        it("If all the information is valid removes the targeted index from the array and lists the rest", function() {
            let result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
            let resultMsg = `Skiing, Winter Hiking`;
            assert.equal(result, resultMsg);
        });

     });

     describe("estimateExpenses tests", function() {

        it("If distanceInKilometers is not a number throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses('twentyfive', 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers is a negative number throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(-1, 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers is 0 throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(0, 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers is an array throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses([], 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers is null throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(null, 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers is undefined throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(undefined, 3);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers and fuelCostPerLiter are not numbers throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses('twentyfive', 'three');
            }, Error, "Invalid Information!");

            assert.throws(() => {
                planYourTrip.estimateExpenses([], {});
            }, Error, "Invalid Information!");

            assert.throws(() => {
                planYourTrip.estimateExpenses(null, true);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers and fuelCostPerLiter are 0 throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(0,0);
            }, Error, "Invalid Information!");
        });

        it("If distanceInKilometers and fuelCostPerLiter are negative numbers throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(-2,-10);
            }, Error, "Invalid Information!");
        });

        it("If fuelCostPerLiter is not a number throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(25, 'three');
            }, Error, "Invalid Information!");

            assert.throws(() => {
                planYourTrip.estimateExpenses(25, []);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                planYourTrip.estimateExpenses(25, {});
            }, Error, "Invalid Information!");
        });

        it("If fuelCostPerLiter is a negative number throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(25, -1);
            }, Error, "Invalid Information!");
        });

        it("If fuelCostPerLiter is 0 throws an Error", function() {
            assert.throws(() => {
                planYourTrip.estimateExpenses(25, 0);
            }, Error, "Invalid Information!");
        });

        it("If all the information is valid and distanceInKilometers and fuelCostPerLiter are floating point numbers", function() {
            let result = planYourTrip.estimateExpenses(25.25,10.5);
            let resultMsg = `The trip is budget-friendly, estimated cost is $265.13.`;
            assert.equal(result, resultMsg);
        });

        it("If all the information is valid and distanceInKilometers is integer and fuelCostPerLiter is floating point numbers", function() {
            let result = planYourTrip.estimateExpenses(25.25,10);
            let resultMsg = `The trip is budget-friendly, estimated cost is $252.50.`;
            assert.equal(result, resultMsg);
        });

        it("If all the information is valid and total cost is less than $500", function() {
            let result = planYourTrip.estimateExpenses(50,5);
            let resultMsg = `The trip is budget-friendly, estimated cost is $250.00.`;
            assert.equal(result, resultMsg);
        });

        it("If all the information is valid and total cost is $500", function() {
            let result = planYourTrip.estimateExpenses(50,10);
            let resultMsg = `The trip is budget-friendly, estimated cost is $500.00.`;
            assert.equal(result, resultMsg);
        });

        it("If total cost is just under $500", function() {
            let result = planYourTrip.estimateExpenses(50, 9.95);
            let resultMsg = `The estimated cost for the trip is $497.50, plan accordingly.`;
            assert.equal(result, resultMsg);
        });

        it("If total cost is just above $500", function() {
            let result = planYourTrip.estimateExpenses(50, 10.01);
            let resultMsg = `The estimated cost for the trip is $500.50, plan accordingly.`;
            assert.equal(result, resultMsg);
        });

        it("If all the information is valid and total cost is more than $500", function() {
            let result = planYourTrip.estimateExpenses(50,20);
            let resultMsg = `The estimated cost for the trip is $1000.00, plan accordingly.`;
            assert.equal(result, resultMsg);
        });
     });
     
});
