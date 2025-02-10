import { assert } from "chai";
import { describe, it } from "mocha";
import workforceManagement from "../workforceManagement.js";


describe("workforceManagement tests", function() {
    describe("recruitStaff tests", function() {

        it("if the recruit is a Developer with less than 4 years of experience", function() {
            let result = workforceManagement.recruitStaff('Ivan Marinov', 'Developer', 1);
            let resultMsg = `Ivan Marinov is not suitable for this role.`;
            assert.equal(result, resultMsg);
        });

        it("if the recruit is a Developer with more than 4 years of experience", function() {
            let result = workforceManagement.recruitStaff('Ivan Marinov', 'Developer', 5);
            let resultMsg = `Ivan Marinov has been successfully recruited for the role of Developer.`;
            assert.equal(result, resultMsg);
        });

        it("if the recruit is a Developer with exactly than 4 years of experience", function() {
            let result = workforceManagement.recruitStaff('Ivan Marinov', 'Developer', 4);
            let resultMsg = `Ivan Marinov has been successfully recruited for the role of Developer.`;
            assert.equal(result, resultMsg);
        });

        it("If role of the recruit is not Developer", function() {
            assert.throws(() => {
                workforceManagement.recruitStaff('Ivan Marinov', 'Full-Stack', 15);
            }, Error, "We are not currently hiring for this role.");
        });

     });

     describe("computeWages tests", function() {
        it("If the hours worked is a valid number return the wage of the employee", function() {
            let result = workforceManagement.computeWages(40);
            let resultMsg = 720;
            assert.equal(result, resultMsg);
        });

        it("If the hours worked is not a number throw an error", function() {
            assert.throws(() => {
                workforceManagement.computeWages(null);
            }, Error, "Invalid hours");
        });

        it("If the hours worked is a negative number throw an error", function() {
            assert.throws(() => {
                workforceManagement.computeWages(-4);
            }, Error, "Invalid hours");
        });

        it("If the hours worked is valid number and over 160 hours return the wage of the employee + 1500 bonus", function() {
            let result = workforceManagement.computeWages(161);
            let resultMsg = 4398;
            assert.equal(result, resultMsg);
        });

        
        it("If the hours worked is exactly 160 hours return the wage of the employee", function() {
            let result = workforceManagement.computeWages(160);
            let resultMsg = 2880;
            assert.equal(result, resultMsg);
        });


     });

     describe("dismissEmployee tests", function() {

        it("If input is valid it removes the employee and returns the correct output", function() {
            let result = workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 2);
            let resultMsg = 'Petar, Ivan';
            assert.equal(result, resultMsg);
        });

        it("If workforce is not an array throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee({}, 2);
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee("null", 2);
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee(0, 2);
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee(undefined, 2);
            }, Error, "Invalid input");
            
            assert.throws(() => {
                workforceManagement.dismissEmployee(false, 2);
            }, Error, "Invalid input");

        });

        it("If employee index is not a number throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], null);
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], undefined);
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], "null");
            }, Error, "Invalid input");

            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], true);
            }, Error, "Invalid input");

        });

        it("If employee index is not an integer number throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 5.5);
            }, Error, "Invalid input");
        });

        it("If employee index is a negative integer number throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], -2);
            }, Error, "Invalid input");
        });

        it("If employee index is equal to the workforce array length throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 3);
            }, Error, "Invalid input");
        });

        it("If employee index is bigger than the workforce array length throws an error", function() {
            assert.throws(() => {
                workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 4);
            }, Error, "Invalid input");
        });

     });
     
});
