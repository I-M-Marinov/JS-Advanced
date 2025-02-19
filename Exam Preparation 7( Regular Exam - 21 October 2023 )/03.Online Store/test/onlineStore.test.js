import { assert } from "chai";
import { describe, it } from "mocha";
import onlineStore from "../onlineStore.js";


describe("Online Store Tests", function() {
    describe("isProductAvailable tests", function() {

        it("If product and stockQuantity are correct and quantity is not 0 return the correct message", function() {
            let result = onlineStore.isProductAvailable('Cheese', 10);
            let messageResult = `Great! Cheese is available for purchase.`
            assert.equal(result,messageResult);
        });

        it("If product and stockQuantity are correct and quantity is 0 or less return the correct message", function() {
            let result = onlineStore.isProductAvailable('Cheese', 0);
            let messageResult = `Sorry, Cheese is currently out of stock.`
            assert.equal(result,messageResult);

            let result1 = onlineStore.isProductAvailable('Cheese', -100);
            let messageResult1 = `Sorry, Cheese is currently out of stock.`
            assert.equal(result1,messageResult1);
        });

        it("If product is not a string throws an Error", function() {
            assert.throws(() => {
                onlineStore.isProductAvailable([], 10);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable(10, 10);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable({}, 10);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable(false, 10);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable(null, 10);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable(undefined, 10);
            }, Error, 'Invalid input.');
        });

        it("If stockQuantity is not a number throws an Error", function() {
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", null);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", undefined);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", "null");
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", {});
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", []);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.isProductAvailable("Cheese", true);
            }, Error, 'Invalid input.');

        });
     });
     describe("canAffordProduct tests", function() {

        it("if productPrice and accountBalance are valid and remainingBalance is more than 0 return the correct message", function() {
            let result = onlineStore.canAffordProduct(50, 100);
            let messageResult = `Product purchased. Your remaining balance is $50.`;
            assert.equal(result,messageResult);
        });

        it("if productPrice and accountBalance are valid and remainingBalance is 0 return the correct message", function() {
            let result = onlineStore.canAffordProduct(50, 50);
            let messageResult = `Product purchased. Your remaining balance is $0.`;
            assert.equal(result,messageResult);
        });

        it("if productPrice and accountBalance are valid and remainingBalance is more less than 0 return the correct message", function() {
            let result = onlineStore.canAffordProduct(50, 40);
            let messageResult = "You don't have sufficient funds to buy this product.";
            assert.equal(result,messageResult);
        });

        it("If accountBalance is not a number throws an Error", function() {
            assert.throws(() => {
                onlineStore.canAffordProduct(50, "50");
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(50, false);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(50, null);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(50, undefined);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(50, {});
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(50, []);
            }, Error, 'Invalid input.');

        });

        it("If productPrice is not a number throws an Error", function() {
            assert.throws(() => {
                onlineStore.canAffordProduct('50', 50);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(null, 50);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(undefined, 50);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct({}, 50);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct(false, 50);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.canAffordProduct([], 50);
            }, Error, 'Invalid input.');
            
        });
     });
     describe("getRecommendedProducts tests", function() {

        it("If productList and category are valid and there is a recommended product return the correct message", function() {
            let result = onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], 'Photography');
            let messageResult = `Recommended products in the Photography category: Camera`;
            assert.equal(result,messageResult);
        });

        it("If productList and category are valid and there is no recommended product return the correct message", function() {
            let result = onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], 'DYI');
            let messageResult = `Sorry, we currently have no recommended products in the DYI category.`;
            assert.equal(result,messageResult);
        });

        it("If productList is not an array throws an Error", function() {
            assert.throws(() => {
                onlineStore.getRecommendedProducts(0, 'DYI');
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts('0', 'DYI');
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts(null, 'DYI');
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts(undefined, 'DYI');
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts(false, 'DYI');
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts({}, 'DYI');
            }, Error, 'Invalid input.');

        });

        it("If category is not a string throws an Error", function() {
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], 0);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], null);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], false);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], undefined);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], []);
            }, Error, 'Invalid input.');
            assert.throws(() => {
                onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Keyboard", category: "Computer Peripherials" }], {});
            }, Error, 'Invalid input.');
        });
     });
});
