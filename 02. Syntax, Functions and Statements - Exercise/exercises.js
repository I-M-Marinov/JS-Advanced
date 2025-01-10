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

  // 04. Previous Day

// Write a JS function that calculates the date of the previous day by a given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

  function getPreviousDay(year,month,day){

    const date = new Date(year, month - 1, day); 
    date.setDate(date.getDate() - 1);

    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDay = date.getDate();

    console.log(`${newYear}-${newMonth + 1}-${newDay}`);
    
  }

  getPreviousDay(2016, 9, 30);
  getPreviousDay(2015, 5, 10);
  getPreviousDay(2015, 1, 1);

  // 05. Time to Walk

// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	The second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function calculateTime(steps, lengthOfFootprint, speedInKmH) {

    let speedInMS = speedInKmH * 5 / 18;
    let distanceInMeters = lengthOfFootprint * steps;
    let timeInSeconds = distanceInMeters / speedInMS;

    let  breaks = Math.floor(distanceInMeters / 500);
    let breakTimeInSeconds = breaks * 60;
    let totalTimeInSeconds = timeInSeconds + breakTimeInSeconds;


    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

}

calculateTime(4000, 0.60, 5);
calculateTime(2564, 0.70, 5.5);

// 06. Road Radar

// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.


function checkSpeed(speed, area) {

  const limits = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20,
  };

  const speedLimit = limits[area];
  const difference = speed - speedLimit;

  if (difference <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
      let status;
      if (difference <= 20) {
          status = 'speeding';
      } else if (difference <= 40) {
          status = 'excessive speeding';
      } else {
          status = 'reckless driving';
      }

      console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
  }
}

checkSpeed(40, 'city'); 
checkSpeed(21, 'residential');      
checkSpeed(120, 'interstate'); 
checkSpeed(200, 'motorway'); 
