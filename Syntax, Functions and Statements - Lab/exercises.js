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

// 04. Circle Area

function solve(input) {
    let result;

    let inputType = typeof(input);

    if(inputType === 'number'){
        result = Math.pow(input,2)*Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

// 05. Math Operations 

function operation(number1, number2, operation){
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                return "Cannot divide by ZERO";
            }
            break;
        case '%':
            if (number2 !== 0) {
                result = number1 % number2;
            } else {
                return "Cannot divide by ZERO";
            }
            break;
        case '**':
            result = number1 ** number2;
            break;
        default:
            return "Error: Invalid operator";
    }

console.log(result);
}

operation(5,6,'+');
operation(3, 5.5, '*');

// 06. Sum of Numbers N…M

function sumRange(n,m){
    let number1 = Number(n);
    let number2 = Number(m);
    let result = 0;

    for (let index = number1; index <= number2; index++) {
        result += index;
        
    }

    return result;
}

console.log(sumRange('3','5'));

// 07. Day of Week

function dayOfWeek(day){
    switch (day) {
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default:
            return "error";
    }
}

console.log(dayOfWeek('Monday'));

// 08. Days in a month

function getDaysInMonth(month, year) {
   
    const date = new Date(year, month, 0); 
    return date.getDate(); 
}

console.log(getDaysInMonth(2, 2023));

// 09. Square of Stars 

function drawRectangle(number) {
   
    if(number === null){
        number = 5;
    }

    let result = "";

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            result += "* "; 
        }
        result += "\n"; 
    }

    return result; 
}

console.log(drawRectangle(6));