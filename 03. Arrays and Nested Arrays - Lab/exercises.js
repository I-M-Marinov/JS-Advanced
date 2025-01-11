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
