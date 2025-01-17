// You're tasked to create and print a JSON from a text table. 
// You will receive input as an array of strings, where each string represents a row of a table, 
// with values on the row encompassed by pipes "|" and optionally spaces. 
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
// The Latitude and Longitude columns will always contain valid numbers. 
// Check the examples to get a better understanding of your task.

// Input
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.

// Output
// The output should be an array of objects wrapped in JSON.stringify(). 
// atitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!

function solve(inputArray) {

    const [headers, ...rows] = inputArray;

    const columns = headers.split('|').map(header => header.trim()).filter(header => header !== '');

    const result = rows.map(row => {

        const values = row.split('|').map(value => value.trim()).filter(value => value !== '');

        const townObj = {};

        for (let i = 0; i < columns.length; i++) {
            if (columns[i] === "Latitude" || columns[i] === "Longitude") {
                townObj[columns[i]] = Number(parseFloat(values[i]).toFixed(2)); 
            } else {
                townObj[columns[i]] = values[i];
            }
        }
        
        return townObj;
    });

    return JSON.stringify(result); 
}


console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));

