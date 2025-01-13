// 01. Print an Array with a Given Delimiter

// The input comes as two parameters – an array of strings and a string. 
// The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, 
// each element separated from the others by the given delimiter.

function printWithDelimiter(array, delimiter) {
console.log(array.join(delimiter));
}

printWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);

printWithDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);

// 02. Print every N-th Element from an Array

// The input comes as two parameters – an array of strings and a number. 
// The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one. 
// If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
// The output is the return value of your function and must be an array.

function printNthOfArray(array, number){

    let resultArray = [];
    for (let i = 0; i < array.length; i += number) {

        resultArray.push(array[i]);
    }

    return resultArray;
}


console.log(printNthOfArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(printNthOfArray(['dsa',
'asd', 
'test', 
'tset'], 
2    
));
console.log(printNthOfArray(['1', 
'2',
'3', 
'4', 
'5'], 
6    
));

// 03. Add and Remove Elements

// Write a JS function that adds and removes numbers to/from an array. 
// You will receive a command which can either be "add" or "remove". 
// The initial number is 1. 
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// Each input command should increase that number, regardless of what it is.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line. 
// In case of an empty array, just print "Empty".

function addRemoveElements(array) {
    let initialNumber = 1; 
    let resultArray = []; 

    for (const command of array) {
        if (command === 'add') {
            resultArray.push(initialNumber); 
        } else if (command === 'remove') {
            resultArray.pop(); 
        }
        initialNumber++; 
    }

    if (resultArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(resultArray.join('\n'));
    }
}

addRemoveElements(['add', 
    'add', 
    'add', 
    'add']
    );
addRemoveElements(['add', 
    'add', 
    'remove', 
    'add', 
    'add']        
    );
addRemoveElements(['remove', 
    'remove', 
    'remove']
    );

    // 04. Rotate Array

// Write a JS function that rotates an array. 
// The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function rotateArray(array,rotations){

    let element = '';
    let result = '';
    for (let i = 0; i < rotations; i++) {
        element = array.pop();
        array.unshift(element);
    }

    for (const element of array) {
        result += `${element} `
    }

    return result.trim();
}

console.log(rotateArray(['1', 
                         '2', 
                         '3', 
                         '4'], 
                          2
                        ));
console.log(rotateArray(['Banana', 
                         'Orange', 
                         'Coconut', 
                         'Apple'], 
                         15
                        ));


// 05. Extract Increasing Subsequence from Array

// Write a function that extracts only those numbers that form a non-decreasing subset. 
// In other words, you start from the first element and continue to the end of the given array of numbers. 
// Any number which is LESS THAN the current biggest one is ignored, 
// alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.

function extractSubset(array) {
    let result = [];
    let currentMax = 0;

    for (let number of array) {
        if (number >= currentMax) {
            result.push(number); 
            currentMax = number; 
        }
    }

    return result;
}

console.log(extractSubset([1, 
                           3, 
                           8, 
                           4, 
                           10, 
                           12, 
                           3, 
                           2, 
                           24]
                          ));
                          
console.log(extractSubset([20, 
                            3, 
                            2, 
                            15,
                            6, 
                            1]
                         ));

