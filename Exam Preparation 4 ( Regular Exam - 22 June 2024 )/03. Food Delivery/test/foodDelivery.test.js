import { assert } from "chai";
import { describe, it } from "mocha";
import foodDelivery from "../foodDelivery.js";


describe("foodDelivery tests", function() {
    describe("getCategory tests", function() {
        it("If category is Vegan return the correct message", function() {
            let result = foodDelivery.getCategory('Vegan');
            let resultMsg = `Dishes that contain no animal products.`;
            assert.equal(result, resultMsg);
        });

        it("If category is Vegetarian return the correct message", function() {
            let result = foodDelivery.getCategory('Vegetarian');
            let resultMsg = `Dishes that contain no meat or fish.`;
            assert.equal(result, resultMsg);
        });

        it("If category is Gluten-Free return the correct message", function() {
            let result = foodDelivery.getCategory('Gluten-Free');
            let resultMsg = `Dishes that contain no gluten.`;
            assert.equal(result, resultMsg);
        });

        it("If category is All return the correct message", function() {
            let result = foodDelivery.getCategory('All');
            let resultMsg = `All available dishes.`;
            assert.equal(result, resultMsg);
        });

        it("If category is not a valid one throw an error", function() {
            assert.throws(() => {
                foodDelivery.getCategory('Fat-Free');
            }, Error, "Invalid Category!");
        });

     });

     describe("addMenuItem tests", function() {
        it("If correct information is given ( 2 items in the array ) to the addMenuItem return the correct message", function() {
            let result = foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], 6);
            let resultMsg = `There are 2 available menu items matching your criteria!`;
            assert.equal(result, resultMsg);
        });

        it("If correct information is given ( 4 items in the array and 2 valid ) to the addMenuItem return the correct message", function() {
            let result = foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}, { name: 'Tarator', price: 7}, { name: 'Chicken-Pot Pie', price: 8}], 6);
            let resultMsg = `There are 2 available menu items matching your criteria!`;
            assert.equal(result, resultMsg);
        });

        it("If maxPrice is exactly 5 return the correct message", function() {
            let result = foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], 5);
            let resultMsg = `There are 2 available menu items matching your criteria!`;
            assert.equal(result, resultMsg);
        });

        it("If maxPrice is less than 5 throw an Error", function() {
            assert.throws(() => {
                foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], 4);
            }, Error, "Invalid Information!");
        });

        it("If maxPrice is not a number throw an Error", function() {
            assert.throws(() => {
                foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], "4");
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], null);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem([{ name: 'Jambalaya', price: 2 }, { name: 'Musaka', price: 3}], ["whatever"]);
            }, Error, "Invalid Information!");
        });

        it("If menuItem is an empty Array throw an Error", function() {
            assert.throws(() => {
                foodDelivery.addMenuItem([], 6);
            }, Error, "Invalid Information!");
        });

        it("If menuItem is not an Array throw an Error", function() {
            assert.throws(() => {
                foodDelivery.addMenuItem({}, 6);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem(5, 6);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem('something', 6);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem(null, 6);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.addMenuItem(undefined, 6);
            }, Error, "Invalid Information!");
        });

     });

     describe("calculateOrderCost tests", function() {

        it("Order with invalid shipping, valid addons and discount throws an Error", function() {
        
            assert.throws(() => {
                foodDelivery.calculateOrderCost(null, ["sauce", "beverage"], true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(undefined, ["sauce", "beverage"], true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost('string', ["sauce", "beverage"], true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(666, ["sauce", "beverage"], true);
            }, Error, "Invalid Information!");
        });

        
        it("Order with invalid shipping, valid addons and no discount throws an Error", function() {
        
            assert.throws(() => {
                foodDelivery.calculateOrderCost(null, ["sauce", "beverage"], false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(undefined, ["sauce", "beverage"], false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost('string', ["sauce", "beverage"], false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(666, ["sauce", "beverage"], false);
            }, Error, "Invalid Information!");
        });

        it("Order with valid shipping, invalid addons and discount throws an Error", function() {
        
            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], false, true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], 0, true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], 'text', true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], undefined, true);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], null, true);
            }, Error, "Invalid Information!");

        });

        it("Order with valid shipping, invalid addons and no discount throws an Error", function() {
        
            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], false, false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], 0, false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], 'text', false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], undefined, false);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], null, false);
            }, Error, "Invalid Information!");

        });

        it("Order with valid shipping, valid addons and invalid discount throws an Error", function() {
        
            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], 0);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], null);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], {});
            }, Error, "Invalid Information!");
  
            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], undefined);
            }, Error, "Invalid Information!");

            assert.throws(() => {
                foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], []);
            }, Error, "Invalid Information!");

        });

        it("Order with standard shipping, sauce and beverage and discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], true);
            let resultMsg = `You spend $6.38 for shipping and addons with a 15% discount!`;
            assert.equal(result, resultMsg);
        });

        it("Order with standard shipping, sauce and discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["standard"], ["sauce"], true);
            let resultMsg = `You spend $3.40 for shipping and addons with a 15% discount!`;
            assert.equal(result, resultMsg);
        });

        it("Order with standard shipping, beverage and discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["standard"], ["beverage"], true);
            let resultMsg = `You spend $5.52 for shipping and addons with a 15% discount!`;
            assert.equal(result, resultMsg);
        });

        it("Order with express shipping, sauce and beverage and discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["express"], ["sauce", "beverage"], true);
            let resultMsg = `You spend $8.07 for shipping and addons with a 15% discount!`;
            assert.equal(result, resultMsg);
        });

        it("Order with express shipping, sauce and beverage and no discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["express"], ["sauce", "beverage"], false);
            let resultMsg = `You spend $9.50 for shipping and addons!`;
            assert.equal(result, resultMsg);
        });

        it("Order with express shipping, sauce and no discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["express"], ["sauce"], false);
            let resultMsg = `You spend $6.00 for shipping and addons!`;
            assert.equal(result, resultMsg);
        });

        it("Order with express shipping, beverage and no discount returns correct message", function() {
            let result = foodDelivery.calculateOrderCost(["express"], ["beverage"], false);
            let resultMsg = `You spend $8.50 for shipping and addons!`;
            assert.equal(result, resultMsg);
        });
     });
     
});
