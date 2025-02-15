import { assert } from "chai";
import { describe, it } from "mocha";
import homeGardener from "../homeGardener.js";


describe("homeGardener Tests …", function() {
    describe("plantCareInstructions tests", function() {
        it("Returns proper message if the plant type is succulent", function() {
            let result = homeGardener.plantCareInstructions('succulent');
            let resultMsg = "Succulents require minimal watering, indirect sunlight, and well-draining soil.";
            assert.equal(result, resultMsg);
        });

        it("Returns proper message if the plant type is vegetable", function() {
            let result = homeGardener.plantCareInstructions('vegetable');
            let resultMsg = "Vegetables need full sun, regular watering, and nutrient-rich soil.";
            assert.equal(result, resultMsg);
        });

        it("Returns proper message if the plant type is flowering", function() {
            let result = homeGardener.plantCareInstructions('flowering');
            let resultMsg = "Flowering plants require moderate watering, occasional fertilization, and pruning.";
            assert.equal(result, resultMsg);
        });

        it("Returns proper message if the plant type is tree", function() {
            let result = homeGardener.plantCareInstructions('tree');
            let resultMsg = "Trees need deep watering, proper spacing, and regular mulching.";
            assert.equal(result, resultMsg);
        });

        it("Throws an Error if the plant type is invalid", function() {     
            assert.throws(() => {
                homeGardener.plantCareInstructions('invalid');
            }, Error,  "Invalid plant type!");
            assert.throws(() => {
                homeGardener.plantCareInstructions(undefined);
            }, Error,  "Invalid plant type!");
            assert.throws(() => {
                homeGardener.plantCareInstructions(null);
            }, Error,  "Invalid plant type!");
            assert.throws(() => {
                homeGardener.plantCareInstructions(666);
            }, Error,  "Invalid plant type!");
            assert.throws(() => {
                homeGardener.plantCareInstructions([]);
            }, Error,  "Invalid plant type!");
            assert.throws(() => {
                homeGardener.plantCareInstructions({});
            }, Error,  "Invalid plant type!");
        });
     });

     describe("availablePlants tests", function() {
        it("Returns proper message when all input is valid", function() {
            let result = homeGardener.availablePlants([2, 10, 15], 20);
            let resultMsg = `There are 3 plants suitable for your garden height criteria!`;
            assert.equal(result, resultMsg);

            let result1 = homeGardener.availablePlants([2, 10, 15, 18, 20], 25);
            let resultMsg1 = `There are 5 plants suitable for your garden height criteria!`;
            assert.equal(result1, resultMsg1);
        });

        it("Throws an Error if plantSizes is not an array", function() {     
            assert.throws(() => {
                homeGardener.availablePlants(undefined, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants(null, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants(true, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants(0, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants({}, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants(25, 25);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants('10, 15', 25);
            }, Error,  "Invalid Information!");   
        });

        it("Throws an Error if maxHeight is not a number", function() {     
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], '20');
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], null);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], undefined);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], []);
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], {});
            }, Error,  "Invalid Information!");
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], true);
            }, Error,  "Invalid Information!");
            
        });

        it("Throws an Error if plantSizes is an empty array", function() {     
            assert.throws(() => {
                homeGardener.availablePlants([], '20');
            }, Error,  "Invalid Information!");       
        });

        it("Throws an Error if maxHeight is a negative number or zero", function() {     
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], 0);
            }, Error,  "Invalid Information!");       
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], -10);
            }, Error,  "Invalid Information!");    
            assert.throws(() => {
                homeGardener.availablePlants([2, 10, 15], -10000000000);
            }, Error,  "Invalid Information!");       
        });

     });

     describe("gardenExpenses tests", function() {
        it("Returns proper message when all input is valid plus discount", function() {
            let result = homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  true);
            let resultMsg = `You spent $59.40 on tools and seeds with a 10% discount!`;
            assert.equal(result, resultMsg);
        });

        it("Returns proper message when all input is valid without a discout discount", function() {
            let result = homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            let resultMsg = `You spent $66.00 on tools and seeds!`;
            assert.equal(result, resultMsg);
        });

        it("Throws an Error if tools is not an array", function() {     
            assert.throws(() => {
                homeGardener.gardenExpenses(0, ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses({}, ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");    
            assert.throws(() => {
                homeGardener.gardenExpenses('0', ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");    
            assert.throws(() => {
                homeGardener.gardenExpenses(undefined, ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");    
            assert.throws(() => {
                homeGardener.gardenExpenses(null, ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");    
            assert.throws(() => {
                homeGardener.gardenExpenses(false, ['vegetable seeds', 'flower seeds', 'herb seeds'],  false);
            }, Error,  "Invalid Information!");     
        });

        it("Throws an Error if seeds is not an array", function() {     
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], 0,  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], null,  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], undefined,  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], {},  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], false,  false);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], '0',  false);
            }, Error,  "Invalid Information!");      
            
        });

        it("Throws an Error if discounts is not a boolean", function() {     
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  0);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  null);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  undefined);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  []);
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  {});
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  "text");
            }, Error,  "Invalid Information!");      
            assert.throws(() => {
                homeGardener.gardenExpenses(['shovel', 'rake', 'watering can'], ['vegetable seeds', 'flower seeds', 'herb seeds'],  123);
            }, Error,  "Invalid Information!");      
            
        });
     });
});
