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

// 03. City Taxes

// This task is an extension of Problem 1, you may use your solution from that task as a base.

// You will receive a city’s name (string), population (number), and treasury (number) as arguments, 
// which you will need to set as properties of an object and return it. In addition to the input parameters, 
// the object must have a property taxRate with an initial value of 10, and three methods for managing the city:

// · collectTaxes() - Increase treasury by population * taxRate
// · applyGrowth(percentage) - Increase population by given percentage
// · applyRecession(percentage) - Decrease treasury by given percentage

// Round down the values after each calculation.

// Input
// Your solution will receive three valid parameters. The methods that expect parameters will be tested with valid input.

// Output
// Return an object as described above. The methods of the object modify the object and don’t return anything.

function cityTaxes(name, population, treasury) {

    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        }
    };

    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

// 04. Object Factory

// Create a function that can compose objects by copying functions from a given library of functions. 
// You will receive two parameters – a library of functions as an associative array (object) and an array of orders, 
// represented as objects. You must return a new array – the fulfilled orders.
// The first parameter will be an object where each property is a function. You will use this library of functions to compose new objects.

// The second parameter is an array of orders. Each order is an object with the following shape:
// {
//   template: [Object],
//   parts: string[]
// }
// A template is an object that must be copied. The parts array contains the names of required functions as strings.
// You must create and return a new array, by fulfilling all orders from the orders array. 
// To fulfill an order, create a copy of the object’s template and then add to it all functions, 
// listed in the parts array of the order, by taking them from the function library (the first parameter to your solution).

// Input
// You will receive two parameters:
// •	library – an object
// •	orders – an array of objects

// Output
// Your solution must return an array of objects.

function factory(library, orders) {
    const result = [];

    for (const order of orders) {

        const product = { ...order.template };

        for (const part of order.parts) {
            if (library[part]) {
                product[part] = library[part];
            }
        }

        result.push(product);
    }

    return result;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);

  // 05.Assembly Line

  function createAssemblyLine() {
    return {
        hasClima(carObject) {
            carObject.temp = 21;
            carObject.tempSettings = 21;
            carObject.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },

        hasAudio(carObject) {
            carObject.currentTrack = null;
            carObject.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },

        hasParktronic(carObject) {
            carObject.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log(""); 
                }
            };
        },
    };
}



const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(JSON.stringify(myCar));

