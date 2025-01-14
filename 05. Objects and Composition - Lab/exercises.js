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