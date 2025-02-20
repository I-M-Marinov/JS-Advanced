class InventoryManager {
    constructor(capacity){
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    static Item = class {
        constructor(itemName, quantity){
            this.itemName = itemName;
            this.quantity = quantity;
        }
    }

    static checkQuantity = function(quantity) {
        if(quantity <= 0){
            throw new Error("Quantity must be greater than zero.");
        }
    }

    addItem(itemName, quantity){
        
        InventoryManager.checkQuantity(quantity);

        if (this.capacity === 0){
            throw new Error("The inventory is already full.");
        }

        let existingItem = this.items.find(item => item.itemName === itemName);

        if(existingItem){
            existingItem.quantity += quantity;
            return `Added ${quantity} ${existingItem.itemName}(s) to the inventory.`
        } else {
            let newItem = new InventoryManager.Item(itemName, quantity);
            this.items.push(newItem);
            this.capacity--;
            return `Added ${quantity} ${itemName}(s) to the inventory.`
        }
    }

    sellItem(itemName, quantity){
        InventoryManager.checkQuantity(quantity);

        let existingItem = this.items.find(item => item.itemName === itemName);

        if(!existingItem){
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }

        if(quantity > existingItem.quantity){
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        existingItem.quantity -= quantity;

        if(existingItem.quantity === 0){
            let existingItemIndex = this.items.indexOf(existingItem);
            this.items.splice(existingItemIndex, 1);
            this.outOfStock.push(existingItem.itemName);
            
        }

        return  `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity){

        InventoryManager.checkQuantity(quantity);

        let existingItem = this.items.find(item => item.itemName === itemName);

        if(existingItem){
            existingItem.quantity += quantity;
        } else {
            let newItem = new InventoryManager.Item(itemName, quantity);
            this.items.push(newItem);
        }

        let isOutOfStockItem = this.outOfStock.find(item => item.itemName === itemName);

        if(isOutOfStockItem){
            let isOutOfStockItemIndex = this.outOfStock.indexOf(isOutOfStockItem);
            this.outOfStock.splice(isOutOfStockItemIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary(){
        let firstLine = "Current Inventory:";

        const allItems = this.items
        .map(item => `${item.itemName}: ${item.quantity}`)
        .join("\n");

        const allOutOfStockItems = this.outOfStock
        .map(itemName => `${itemName}`)
        .join(", ");

        let result = firstLine + '\n' + allItems;
        if (this.outOfStock.length > 0) {
            result += '\n' + "Out of Stock: " + allOutOfStockItems;
        }

        return result;

    }

}    

/* INPUT 1 */

// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));


/* INPUT 2 */

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.sellItem("Paintbrush", 2));


/* INPUT 3 */

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

/* INPUT 4 */

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
