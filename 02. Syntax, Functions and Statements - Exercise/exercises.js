// 01. Fruit

function calculate(fruit, weight, pricePerKg){

    let weightInKg = weight / 1000;
    let price = weightInKg * pricePerKg;
    
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);

// 02. Greatest Common Divisor – GCD

// Write a function that takes two positive numbers as input and computes the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function gcd(a, b) {
    if (b === 0) {
      console.log(a);
      return;
    }
    return gcd(b, a % b);
  }

  gcd(15,5);
  gcd(2154, 458);

  // 03. Same Numbers

// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function checkDigits(number) {

    const digits = number.toString().split("").map(Number); 
    let allSame = true;
    let sum = 0;
  
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] !== digits[0]) {  
        allSame = false;  
      }
      sum += digits[i]; 
    }
  
    console.log(allSame); 
    console.log(sum); 
}
  
  checkDigits(2222222); 
  checkDigits(1234); 
  