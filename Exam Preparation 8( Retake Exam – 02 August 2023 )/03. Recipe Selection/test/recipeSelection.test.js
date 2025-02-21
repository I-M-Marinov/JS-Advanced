import { assert } from "chai";
import { describe, it } from "mocha";
import recipeSelection from "../recipeSelection.js";


describe("recipeSelection tests", function() {
    describe("isTypeSuitable tests", function() {

        it("If type is Meat and dietaryRestriction is Vegetarian returns correct message", function() {
            let result = recipeSelection.isTypeSuitable('Meat', 'Vegetarian');
            let messageResult = `This recipe is not suitable for vegetarians`;
            assert.equal(result,messageResult);
        });

        it("If type is Meat and dietaryRestriction is Vegan returns correct message", function() {
            let result = recipeSelection.isTypeSuitable('Meat', 'Vegan');
            let messageResult = `This recipe is not suitable for vegans`;
            assert.equal(result,messageResult);
        });

        it("If type is Dairy and dietaryRestriction is Vegan returns correct message", function() {
            let result = recipeSelection.isTypeSuitable('Meat', 'Vegan');
            let messageResult = `This recipe is not suitable for vegans`;
            assert.equal(result,messageResult);
        });

        it("If type is not Meat or Dairy and dietaryRestriction is Vegan returns correct message", function() {
            let result = recipeSelection.isTypeSuitable('Nuts', 'Vegan');
            let messageResult = `This recipe is suitable for your dietary restriction`;
            assert.equal(result,messageResult);
        });

        it("If type is not Meat and dietaryRestriction is Vegetarian returns correct message", function() {
            let result = recipeSelection.isTypeSuitable('Nuts', 'Vegetarian');
            let messageResult = `This recipe is suitable for your dietary restriction`;
            assert.equal(result,messageResult);
        });

        it("If type  is not a string throw an Error", function() {
            assert.throws(() => {
                recipeSelection.isTypeSuitable(1, 'Vegetarian');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable(false, 'Vegetarian');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable(null, 'Vegetarian');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable(undefined, 'Vegetarian');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable({}, 'Vegetarian');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable([], 'Vegetarian');
            }, Error, 'Invalid input');
        });

        it("If dietaryRestriction is not a string throw an Error", function() {
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', 1);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', null);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', true);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', undefined);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', []);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isTypeSuitable('Nuts', {});
            }, Error, 'Invalid input');
        });
     });

     describe("isItAffordable tests", function() {

        it("If price is less than the budget returns the correct message", function() {
            let result = recipeSelection.isItAffordable(10, 35);
            let messageResult = `Recipe ingredients bought. You have 25$ left`;
            assert.equal(result,messageResult);
        });

        it("If price is exactly the amount of the budget returns the correct message", function() {
            let result = recipeSelection.isItAffordable(10, 10);
            let messageResult = `Recipe ingredients bought. You have 0$ left`;
            assert.equal(result,messageResult);
        });

        it("If price is less than the budget returns the correct message", function() {
            let result = recipeSelection.isItAffordable(20, 10);
            let messageResult = `You don't have enough budget to afford this recipe`;
            assert.equal(result,messageResult);
        });

        it("If price is not a number throw an Error", function() {
            assert.throws(() => {
                recipeSelection.isItAffordable('20', 10);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(null, 10);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(false, 10);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(undefined, 10);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable({}, 10);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable([], 10);
            }, Error, 'Invalid input');
           
        });

        it("If budget is not a number throw an Error", function() {
            assert.throws(() => {
                recipeSelection.isItAffordable(20, '10');
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(20, null);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(20, false);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(20, undefined);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(20, []);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.isItAffordable(20, {});
            }, Error, 'Invalid input');
           
        });
     });

     describe("getRecipesByCategory tests", function() {

        it("If filter correctly filters the category and returs the correct result", function() {
            let result = recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], "Bulgarian");
            let messageResult = ['Mandja'];
            let resultMessage = messageResult[0];
            assert.equal(result,resultMessage);

            let result1 = recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, 
                { title: "Mandja", category: "Bulgarian" }, { title: "Kung Pao Chicken", category: "Asian" }], "Asian");
            let messageResult1 = ['Spicy Tofu Stir-Fry', 'Kung Pao Chicken'];
            let resultMessage1 = messageResult1[0];
            let resultMessage2 = messageResult1[1];
            let resultedMessage1 = result1[0];
            let resultedMessage2 = result1[1];
            assert.equal(resultedMessage1,resultMessage1);
            assert.equal(resultedMessage2,resultMessage2);
        });

        it("If recipes is not an array throw an Error", function() {
            assert.throws(() => {
                recipeSelection.getRecipesByCategory(1, "Bulgarian");
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory(false, "Bulgarian");
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory(null, "Bulgarian");
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory(undefined, "Bulgarian");
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory('1', "Bulgarian");
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory({}, "Bulgarian");
            }, Error, 'Invalid input');
           
           
        });

        it("If category is not a string throw an Error", function() {
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], 1);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], false);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], undefined);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], null);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], []);
            }, Error, 'Invalid input');
            assert.throws(() => {
                recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Mandja", category: "Bulgarian" }], {});
            }, Error, 'Invalid input');
            
           
        });
     });
});
