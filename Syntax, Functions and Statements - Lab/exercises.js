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