class SnowSportStore{
    constructor(storeName){
        this.storeName = storeName;
        this.avaialbleEquipment = [];
        this.revenue = 0;
    }

    addEquipment(type, price, condition){

        class Equipment {
            constructor(type, price, condition) {
                this.type = type;
                this.price = price;
                this.condition = condition;
            }
        }

        if(type === '' ||
        price <= 0 || 
        condition === ''
        ){
            throw new Error("Invalid equipment details!")
        }

        let newEquipment = new Equipment(type, price, condition);
        this.avaialbleEquipment.push(newEquipment);

        return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(2)}$.`
    }

    rentEquipment(type, rentalDays){

        let existingEquipment = this.avaialbleEquipment.find(e => e.type === type && e.condition === 'used');

        if(!existingEquipment){
            throw new Error(`${type} is not available for rent!`) ;
        } else { 
            let rentalCost = (existingEquipment.price * 0.1) * rentalDays;
            this.revenue += rentalCost;
            return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(2)}$.`
        }
    }

    sellEquipment(type){
        let existingEquipment = this.avaialbleEquipment.find(e => e.type === type && e.condition === 'new');

        if(!existingEquipment){
            throw new Error(`${type} is not available for purchase!`) ;
        } else {
            let equipmentIndex = this.avaialbleEquipment.indexOf(existingEquipment);
            this.avaialbleEquipment.splice(equipmentIndex, 1);
            this.revenue += existingEquipment.price;
            return `${type} has been sold for ${existingEquipment.price.toFixed(2)}$.`
        }
     
    }

    showRevenue(){
        if(this.revenue === 0){
            return `Nothing has been sold or rented.`;
        } else {
            return `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`;
        }
    }
}


// let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.addEquipment('Helmet', 50, ''));

// let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.rentEquipment('Snowboard', 3));
// console.log(store.rentEquipment('Boots', 3));

// let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.sellEquipment('Ski'));
// console.log(store.sellEquipment('Helmet'));

let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());


