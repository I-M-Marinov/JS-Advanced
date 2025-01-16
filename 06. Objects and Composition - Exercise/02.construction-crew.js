// Write a program that receives a worker object as a parameter and modifies its properties. 
// Workers have the following structure:
// {
//   weight: Number,
//   experience: Number,
//   levelOfHydrated: Number,
//   dizziness: Boolean 
// }
// Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 
// If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly. 
// The required amount is 0.1ml per kilogram per year of experience. 
// The required amount must be added to the existing amount (to the levelOfHydrated). 
// Once the water is administered, change the dizziness property to false.
// Workers who do not have dizziness should not be modified in any way. Return them as they were.


function solve(worker){

    if(worker.dizziness === true){

        let requiredAmount = 0.1*worker.weight*worker.experience;
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = false;
    } 

    return worker;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));


console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  ));


console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));
