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

// 04. Negative / Positive Numbers

// Write a JS function that processes the elements in an array one by one and produces a new array. 
// If the current element is a negative number you must add it to the front of the array (as the first element of the array). 
// Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.

function negativeAndPositiveNumbers(input) {
    let result = [];

    for (let number of input) {
        if (number < 0) {
            result.unshift(number); 
        } else {
            result.push(number); 
        }
    }

    result.forEach(element => console.log(element));
}


negativeAndPositiveNumbers([7, -2, 8, 9]); 
negativeAndPositiveNumbers([3, -2, 0, -1]); 

// 05. Smallest Two Numbers

// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function smallestTwoNumbers(input){

    let sortedArray = input.sort((a, b) => b - a);

    let firstNumber = sortedArray.pop();
    let secondNumber = sortedArray.pop();

    return `${firstNumber} ${secondNumber}`;

}   

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));

// 06. Bigger Half

// You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array, 
// containing only the second half of the input. 
// If there is an odd number of elements in the input, always take the bigger half. For example,
//  if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.
// The input comes as an array of number elements.
// The output is the return value of the function and should be an array of numbers.

function biggerHalf(input){

    let sortedArray = input.sort((a, b) => a - b);
    let resultArray = [];
    let numberOfElements = 0;

    if(sortedArray.length % 2 == 0){
        numberOfElements = sortedArray.length / 2; 
         resultArray = sortedArray.splice(numberOfElements, sortedArray.length-1);

    } else{
        numberOfElements = Math.floor((sortedArray.length / 2) + 1);
         resultArray = sortedArray.splice(numberOfElements-1, sortedArray.length-1);

    }
    return resultArray;
}   

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

// 07. Piece of Pie

// Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. 
// The result of the function should be a new array, containing a section of the original array, starting at the first flavor parameter, 
// and ending at (and including) the second flavor parameter.
// The input comes as three arguments:
// •	An array of strings, representing pie flavors
// •	Two more strings, representing the start and end of the section, respectively
// The output is the return value of the function and should be an array of strings.


function pieceOfPie(array, string1, string2){

    const start = array.indexOf(string1);
    const finish = array.indexOf(string2);
    let resultArray = array.splice(start,finish-start+1);
    return resultArray;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'
   ));

console.log(pieceOfPie(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));


