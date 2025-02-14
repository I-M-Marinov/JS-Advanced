class Hotel {
    constructor(initialBudget){
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {}; 
    }

    restockSupplies(supplies){
        let messages = [];

        for (const line of supplies) {

            let [supplyName, supplyQuantityString, supplyTotalPriceString] = line.split(' ');

            let supplyQuantity = Number(supplyQuantityString);
            let supplyTotalPrice = Number(supplyTotalPriceString);

            if (supplyTotalPrice > this.initialBudget) {
                messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            } else {

                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }

                this.initialBudget -= supplyTotalPrice;
                messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            }
        }

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {

        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        const parsedSupplies = neededSupplies.map((supply) => {
            const [supplyName, supplyQuantity] = supply.split(' ');
            return { supplyName, supplyQuantity: Number(supplyQuantity) };
        });

        this.roomAvailability[roomType] = {
            neededSupplies: parsedSupplies,
            pricePerNight: pricePerNight,
        };

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {

        if (Object.keys(this.roomAvailability).length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }
    
        let result = Object.entries(this.roomAvailability).map(([roomType, roomDetails]) => {
            return `${roomType} - $ ${roomDetails.pricePerNight}`;
        });
    
        return result.join('\n');
    }

    bookRoom(roomType) {

        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }
    
        const { neededSupplies, pricePerNight } = this.roomAvailability[roomType];
    
        for (const supply of neededSupplies) {
            
            const quantityNeeded = parseInt(supply.supplyQuantity, 10);
    
            if (!this.supplyStock[supply.supplyName] || this.supplyStock[supply.supplyName] < quantityNeeded) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }
    
        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }

}

/* INPUT 1 */

// let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

/* INPUT 2 */

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

/* INPUT 3 */

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

/* INPUT 4 */

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
