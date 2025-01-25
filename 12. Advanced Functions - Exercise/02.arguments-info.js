// Write a function that displays information about the arguments which are passed to it (type and value) and a summary about the number of each type in the following format: 
// `{argument type}: {argument value}`

// Print each argument description on a new line. 
// At the end print a tally with counts for each type in descending order, each on a new line in the following format:
// `{type} = {count}`

// If two types have the same count, use order of appearance. 

// Do NOT print anything for types that do not appear in the list of arguments.

// Input
// You will receive a series of arguments passed to your function.

// Output
// Print on the console the type and value of each argument passed into your function.


function argumentInfo(...args) {

    const typeCounts = {}; 

    args.forEach(arg => {
        const type = typeof arg; 
        console.log(`${type}: ${arg}`); 

        if (!typeCounts[type]) {
            typeCounts[type] = 0;
        }
        typeCounts[type]++;
    });

    const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);

    sortedTypes.forEach(([type, count]) => {
        console.log(`${type} = ${count}`);
    });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo('catdasda', 425656565, function () { console.log('Hello world!'); }, 5454654654, 'dkjajhsdk');

