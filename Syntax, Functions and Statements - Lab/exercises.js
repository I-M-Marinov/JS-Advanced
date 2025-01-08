// 1. Echo Function

function echo(inputString){
    console.log(inputString.length);
    console.log(inputString);        
}

echo("Hello, SoftUni!");

// 2. String Length

function solve(arr1, arr2, arr3){
    let sumLength; 
    let averageLength;

    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;

    sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    averageLength = Math.floor(sumLength / 3 );

    console.log(sumLength);
    console.log(averageLength);

}

// 03. Largest Number

function solve(num1, num2, num3) {
    let result;

    switch (true) {
        case num1 > num2 && num1 > num3:
            result = `The largest number is ${num1}.`;
            break;
        case num2 > num1 && num2 > num3:
            result = `The largest number is ${num2}.`;
            break;
        case num3 > num1 && num3 > num2:
            result = `The largest number is ${num3}.`;
            break;
        default:
            result = "The numbers are equal or there's no single largest number.";
    }
    console.log(result);
}