class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price){

        class Flight{
            constructor(flightNumber, destination, departureTime, price){
                this.flightNumber = flightNumber;
                this.destination = destination;
                this.departureTime = departureTime;
                this.price = price;
            }
        }

        let existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if(existingFlight){
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            let newFlight = new Flight(flightNumber, destination, departureTime, price);
            this.flights.push(newFlight);

            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }

    }

    bookFlight (passengerName, flightNumber){

        let existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if(!existingFlight){
            return `Flight ${flightNumber} is not available for booking.`
        } else {
            this.bookings.push({passengerName, flightNumber});
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking (passengerName, flightNumber){
        let bookingIndex = this.bookings.findIndex(
            booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber
        );

        if(bookingIndex === -1){

            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        } 

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }
    
    showBookings (criteria){

        if(this.bookings.length === 0){
            throw new Error(`No bookings have been made yet.`);
        }

        if(criteria === 'all'){

            const allBookings = this.bookings
            .map(booking => `${booking.passengerName} booked for flight ${booking.flightNumber}.`)
            .join("\n");

            return `All bookings(${this.bookingsCount}):\n` +
                    allBookings;
        } else if (criteria === 'cheap'){

            let cheapFlights = this.flights.filter(flight => flight.price <= 100);

            if(cheapFlights.length === 0){
                return "No cheap bookings found.";
            } else {
                const allCheapFlights = cheapFlights
                .map(flight => `${this.bookings.find(booking => booking.flightNumber === flight.flightNumber).passengerName} booked for flight ${flight.flightNumber}.`)
                .join("\n");

                return "Cheap bookings:\n" 
                + allCheapFlights;
            }
        } else if (criteria === 'expensive') {

            let expensiveFlights = this.flights.filter(flight => flight.price > 100);
        
            if (expensiveFlights.length === 0) {
                return "No expensive bookings found.";
            } else {

                const allExpensiveFlights = expensiveFlights
                    .map(flight => `${this.bookings.find(booking => booking.flightNumber === flight.flightNumber).passengerName} booked for flight ${flight.flightNumber}.`)
                    .join("\n");
        
                return "Expensive bookings:\n" 
                + allExpensiveFlights;
            }
        }
        
    }
}


/* INPUT 1 */

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));


/* INPUT 2 */

// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.bookFlight("Charlie", "CC303"));


/* INPUT 3 */

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

/* INPUT 4 */

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

/* INPUT 5 */

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));

