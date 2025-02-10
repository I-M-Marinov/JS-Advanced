class BikeRentalService {
    constructor(name,location){
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }
    addBikes(bikes) {
        class Bike {
            constructor(brand, quantity, price) {
                this.brand = brand;
                this.quantity = quantity;
                this.price = price;
            }
        }
    
        let newlyAddedBrands = new Set(); 
    
        for (const line of bikes) {
            let [brand, quantity, price] = line.split('-');
            price = Number(price);
            quantity = Number(quantity);
            
            let existingBike = this.availableBikes.find(b => b.brand === brand);
    
            if (existingBike) {
                existingBike.quantity += quantity;
                if (existingBike.price < price) {
                    existingBike.price = price;
                }
            } else {
                this.availableBikes.push(new Bike(brand, quantity, price));
                newlyAddedBrands.add(brand); 
            }
        }
    
        return `Successfully added ${[...newlyAddedBrands].join(", ")}`;
    }
    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let invalidBrandOrQuantity = false;

        for (const line of selectedBikes) {
            let [brand, quantity] = line.split('-');
            quantity = parseInt(quantity); 
    
            let bike = this.availableBikes.find(b => b.brand === brand);
    
            if (!bike || bike.quantity < quantity) {
                invalidBrandOrQuantity = true;
            } else{
                totalPrice += quantity * parseFloat(bike.price);
                bike.quantity -= quantity; 
            }
        }

        if(invalidBrandOrQuantity){
            return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
        }
    
        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    returnBikes(returnedBikes) {
        let hasInvalidBike = false;
    
        for (const line of returnedBikes) {
            let [brand, quantity] = line.split('-');
            quantity = parseInt(quantity);
    
            let bike = this.availableBikes.find(b => b.brand === brand);
    
            if (bike) {
                bike.quantity += quantity;  
            } else {
                hasInvalidBike = true; 
            }
        }
    
        return hasInvalidBike
            ? "Some of the returned bikes are not from our selection."
            : "Thank you for returning!";
    }
    revision() {
        let result = [];
        result.push(`Available bikes:`);
    
        const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);
    
        for (let bike of sortedBikes) {
          result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
        }
        result.push(
          `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        );
        return result.join(`\n`);
      }
}


// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));


// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));


// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());


const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
