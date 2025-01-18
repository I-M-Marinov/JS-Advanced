/* 
You will be given an array of strings, which represents a list of all the restaurants with their workers.

When the [Send] button is clicked:
•	Display the best restaurant of all the added restaurants with its average salary and best salary. 
•	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
•	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
•	Display all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries in descending order.

Input
The input will be received from the given textarea in the form of an array of strings. 
Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

Output
•	The output contains two strings
o	The first one is the best restaurant in the format:
`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
avgSalary and bestSalary must be formatted to the second decimal point.
o	The second one is all the workers in that restaurant in the following format:
`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

Output strings must be set like text content in the following elements:

Constraints
•	The workers will be always unique


*/

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
         
   const textAreaElement = document.querySelector('#inputs textarea');
   const bestRestaurantElement = document.querySelector('#bestRestaurant p');
   const bestWorkersElements = document.querySelector('#workers p');

   const text = JSON.parse(textAreaElement.value);
   let restaurants = {};

// Iterate over each line in the text
for (let i = 0; i < text.length; i++) {
   let line = text[i];
   let [restaurantName, workersWithSalaries] = line.split(' - ');
   let workers = {};

   // Split workers with salaries by comma and then by space space
   let workersArray = workersWithSalaries.split(', ');
   for (let j = 0; j < workersArray.length; j++) {
       let workerInfo = workersArray[j];
       let [worker, salary] = workerInfo.split(' ');
       workers[worker] = parseInt(salary);
   }

   restaurantName = restaurantName.trim();

   if (restaurants.hasOwnProperty(restaurantName)) {   // Check if the restaurant already exists
       Object.assign(restaurants[restaurantName], workers); // Update existing workers with their salaries
   } else {
       restaurants[restaurantName] = workers;  // Add new restaurant with workers
   }
}

let bestRestaurantName = '';
let bestAverageSalary = 0;
let bestSalary = 0;
let bestWorkersInfo = '';

// Calculate average and best salary for each restaurant
for (let restaurant in restaurants) {
   let totalSalary = 0;
   let numWorkers = 0;
   let bestWorkerSalary = 0;
   let workersInfo = '';

   // Iterate over workers of the current restaurant
   for (let worker in restaurants[restaurant]) {
       let salary = restaurants[restaurant][worker];
       totalSalary += salary;
       numWorkers++;
       if (salary > bestWorkerSalary) {
           bestWorkerSalary = salary;
       }
       workersInfo += `Name: ${worker} With Salary: ${salary} `;
   }

   let averageSalary = totalSalary / numWorkers; // Calculate average salary for the given restaurant

   if (averageSalary > bestAverageSalary) {
       bestRestaurantName = restaurant;
       bestAverageSalary = averageSalary;
       bestSalary = bestWorkerSalary;
       bestWorkersInfo = workersInfo;
   }
}

    // Sort workers within the best restaurant based on their salaries in descending order
    let sortedWorkers = Object.entries(restaurants[bestRestaurantName])
    .sort((a, b) => b[1] - a[1])
    .map(([worker, salary]) => `Name: ${worker} With Salary: ${salary} `)
    .join('');

    // Format the output strings
    let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
    let workersOutput = sortedWorkers;

    bestRestaurantElement.textContent = bestRestaurantOutput;
    bestWorkersElements.textContent = workersOutput;
    }
}
