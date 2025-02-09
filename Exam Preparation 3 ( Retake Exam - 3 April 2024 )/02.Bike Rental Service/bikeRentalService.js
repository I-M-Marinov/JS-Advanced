class BikeRentalService {
    constructor(name,location){
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes){

        class Bike{
            constructor(brand,quantity,price){
                this.brand = brand;
                this.quantity = quantity;
                this.price = price;
            }
        }

        let result = '';

        for (const line of bikes) {
            let [brand, quantity, price] = line.split('-');
            quantity = parseInt(quantity);
            price = parseFloat(price);
            let newBike = new Bike(brand,quantity,price);

            const existingBike = this.availableBikes.find(b => {
                return b.brand === brand 
            })

            if(existingBike){
                existingBike.quantity += quantity;
                if(existingBike.price < price){
                    existingBike.price = price;
                }

            } else{
                this.availableBikes.push(newBike);         
            }

            result = this.availableBikes.map(b => b.brand).join(", ");
        }

        return `Successfully added ${result}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
    
        for (const line of selectedBikes) {
            let [brand, quantity] = line.split('-');
            quantity = parseInt(quantity); 
    
            let bike = this.availableBikes.find(b => b.brand === brand);
    
            if (!bike || bike.quantity < quantity) {
                return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
            }
    
            totalPrice += quantity * bike.price;
            bike.quantity -= quantity; 
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
    
    

    revision(){
        
        let sortedBikes = this.availableBikes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        
        const bikeInfo = sortedBikes.map(b => `${b.brand} quantity:${b.quantity} price:$${b.price}`);

        return `Available bikes:\n${bikeInfo.join('\n')}\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        
    }


}


// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());




