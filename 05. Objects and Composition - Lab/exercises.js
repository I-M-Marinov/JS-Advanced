// 01. City Record

// You will receive a city’s name (string), population (number),
//  and treasury (number) as arguments, which you will need to set as properties of an object and return it.

function createCity(city,population,treasury){
    return {
        name: city,
        population: population,
        treasury: treasury
    };
}

console.log(createCity('Tortuga',7000,15000)); 
console.log(createCity('Santo Domingo',12000,23500)); 

// 02. Town Population

// You have been tasked to create a registry for different towns and their population.

// Input
// The input comes as array of strings. Each element will contain data for
//  a town and its population in the following format: "{townName} <-> {townPopulation}"

// If you receive the same town twice, you should add the given population to the current one.

// Output
// As output, you must print all the towns and their population.

function townRegistry(input) {

    let towns = {};

    for (let entry of input) {

        let [townName, population] = entry.split(' <-> ');
        population = Number(population); 


        if (towns[townName] !== undefined) {
            towns[townName] += population;
        } else {

            towns[townName] = population;
        }
    }

    for (let townName in towns) {
        console.log(`${townName} : ${towns[townName]}`);
    }
}

townRegistry(['Sofia <-> 1200000',
              'Montana <-> 20000',
              'New York <-> 10000000',
              'Washington <-> 2345000',
              'Las Vegas <-> 1000000']);

townRegistry(['Istanbul <-> 100000',
              'Honk Kong <-> 2100004',
              'Jerusalem <-> 2352344',
              'Mexico City <-> 23401925',
              'Istanbul <-> 1000']);