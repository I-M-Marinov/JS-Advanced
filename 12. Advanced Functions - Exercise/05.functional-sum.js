// Write a function that adds a number passed to it to an internal sum and returns 
// itself with its internal sum set to the new value, so it can be chained functionally. 

// Hint: Overwrite toString() of the function. 
 
// Input
// Your function needs to take one numeric argument.

// Output
// Your function needs to return itself with an updated context.


function add(num) {
    let sum = num; 

    function inner(nextNum) {
        sum += nextNum; 
        return inner; 
    }

    inner.toString = function () {
        return sum; 
    };

    return inner;
}

console.log(add(1).toString()); 
console.log(add(1)(6)(-3).toString()); 