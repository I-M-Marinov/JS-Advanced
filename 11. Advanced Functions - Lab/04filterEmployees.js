// Write a program that filters the employees of your company. 
// You should print the result in a specific format. 
// You will receive 2 parameters (data, criteria). 
// You should parse the input, find all employees that fulfill the criteria, and print them.

// Input
// You will receive a string with all the employees, and criteria by which you should sort the employees. 
// If the criteria are "all" print all the employees in the given format.

// Output
// The output should be printed on the console.


// ----------------------Alternative solution--------------------
// function filterEmployees(inputJson, filter) {
//     let employees = JSON.parse(inputJson);
//     let [criteria, value] = filter.split('-'); 
//     let result = [];

//     for (const employee of employees) {
//         if (employee[criteria] === value) {
//             result.push(employee);
//         } 
//     }

//     for (let i = 0; i < result.length; i++) {
//         console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`);
//     }
// }


function filterEmployees(inputJson, filter) {
    let employees = JSON.parse(inputJson);
    let [criteria, value] = filter.split('-'); 

    function printEmployees(context) {
        for (let i = 0; i < this.length; i++) {
            console.log(`${i}. ${this[i].first_name} ${this[i].last_name} - ${this[i].email}`);
        }
    }

    if (value === 'all') {
        printEmployees.call(employees);
        return;
    }

    let filteredEmployees = employees.filter(employee => employee[criteria] === value);
    printEmployees.call(filteredEmployees);
}

filterEmployees(`[{

"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, 
{
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
'gender-Female');


filterEmployees(`[{

"id": "1",
"first_name": "Kaylee",
"last_name": "Johnson",
"email": "k0@cnn.com",
"gender": "Female"
}, 
{
"id": "2",
"first_name": "Kizzee",
"last_name": "Johnson",
"email": "kjost1@forbes.com",
"gender": "Female"
}, 
{
"id": "3",
"first_name": "Evanne", 
"last_name": "Maldin", 
"email": "emaldin2@hostgator.com", 
"gender": "Male" 
}, 
{ 
"id": "4", 
 "first_name": "Evanne", 
 "last_name": "Johnson", 
 "email": "ev2@hostgator.com", 
 "gender": "Male" 
 }]`, 
 'last_name-Johnson')