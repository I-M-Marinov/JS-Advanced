// Write a function that composes an object by given properties. 
// The input comes as an array of strings. 
// Every even index of the array represents the name of the food. 
// Every odd index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.

function solve(stringArray){

    let result = {};

    for (let i = 0; i < stringArray.length; i += 2) {

        const key = stringArray[i];
        const value = Number(stringArray[i + 1]); 
        result[key] = value;
    }
    
    console.log(result);
    
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);