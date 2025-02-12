class ShadyCarDealership {
   constructor(dealerName){
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
   }

   static Car = class {
        constructor(model, year, mileage, price){
            this.model = model;
            this.year = year;
            this.mileage = mileage;
            this.price = price; 
        }
    };

    addCar(model, year, mileage, price){

        let newCar = new ShadyCarDealership.Car(model, year, mileage, price)

        if(newCar.model === '' ||
            newCar.year < 1950 || 
            newCar.mileage < 0 ||
            newCar.price < 0 ){
             throw new Error("Invalid car!");
        } else {
            this.availableCars.push(newCar);

            return `New car added: ${newCar.model} (${newCar.year}) / ${newCar.mileage} km. - ${newCar.price.toFixed(2)}$`
        }
    }

    sellCar(model, desiredYear) {
    let existingCar = this.availableCars.find(car => car.model === model);

    if (!existingCar) {
        return `${model} was not found!`;
    }

    let soldPrice = existingCar.price;

    if (existingCar.year >= desiredYear) {
    } else if (desiredYear - existingCar.year <= 5) {
        soldPrice *= 0.90;
    } else {
        soldPrice *= 0.80;
    }

    soldPrice = parseFloat(soldPrice.toFixed(2));

    let carIndex = this.availableCars.indexOf(existingCar);
    this.availableCars.splice(carIndex, 1);

    this.soldCars.push(new ShadyCarDealership.Car(existingCar.model, existingCar.year, existingCar.mileage, soldPrice));

    this.revenue += soldPrice;

    return `${existingCar.model} (${existingCar.year}) was sold for ${soldPrice.toFixed(2)}$`;
}

    prepareCarForSale(model){
        let existingCar = this.availableCars.find(c => c.model === model);

        if(!existingCar){
            return `${model} was not found for preparation!`
        }

        existingCar.mileage *= 0.5;
        existingCar.price = existingCar.price + (existingCar.price*0.3);

        return `${existingCar.model} (${existingCar.year}) is prepared for sale with ${existingCar.mileage} km. - ${existingCar.price.toFixed(2)}$`
    }

    salesJournal(criteria) {

        if (criteria !== "year" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
    
        let sortedSoldCars;

        if (criteria === "year") {

            sortedSoldCars = this.soldCars.sort((a, b) => b.year - a.year);

        } else if (criteria === "model") {

            sortedSoldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
 
        const soldCarsDetails = sortedSoldCars
            .map(car => `${car.model} (${car.year}) / ${car.mileage} km. / ${car.price.toFixed(2)}$`)
            .join("\n");
    
        return `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n` +
               `${this.soldCars.length} cars sold:\n${soldCarsDetails}`;
    }
}




// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));



// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.sellCar('Toyota Yaris', 2012));



const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));
