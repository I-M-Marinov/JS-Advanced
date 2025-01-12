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


