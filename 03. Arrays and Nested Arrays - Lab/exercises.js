// 01. Even Position Elements

// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function evenPositionElements(input) {
    let result = '';

    input.forEach((element, index) => {
        if (index % 2 === 0) { 
            result += `${element} `;
        }
    });

    return result.trim();
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));

// 02. Last K Numbers Sequence

// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.

function numbersSequence(n, k) {
    let result = [1]; 

    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k); 
        let sum = result.slice(startIndex, i).reduce((a, b) => a + b, 0);

        result.push(sum); 
    }

    return result; 
}

console.log(numbersSequence(6, 3)); 
console.log(numbersSequence(8, 2)); 

// 03. Sum First Last

// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.

function sumFirstAndLast(input){

    let inputArray = [...input]; 

    let firstNumber = Number(inputArray.shift()); 
    let lastNumber = Number(inputArray.pop()); 

    return firstNumber + lastNumber;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));

