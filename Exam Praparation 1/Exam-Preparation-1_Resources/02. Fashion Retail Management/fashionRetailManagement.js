class FashionRetailInventory{
    constructor(storehouse, location){
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price){
        const existingProduct = this.productStock.find(p => {
            return p.productName === productName && p.size === size
        })

        if(existingProduct){
            existingProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        } else {
            const newProduct = {productName, size, quantity, price};
            this.productStock.push(newProduct);
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct (productName, size){
        const existingProduct = this.productStock.find(p => {
            return p.productName === productName && p.size === size
        })

        if(existingProduct){
            const removedProductIndex = this.productStock.findIndex(p => 
                p.productName === productName && p.size === size
            );
         const removedProduct = this.productStock.splice(removedProductIndex, 1)[0];

            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    }

    findProductsBySize(size){
        let matchingProducts = this.productStock.filter(p => p.size === size);

        if(matchingProducts.length === 0){
            return `There are no products available in that size`;
        } else {
            const productInfo = matchingProducts.map(p => `${p.productName}-${p.quantity} pieces`).join(', ');

            return productInfo;
        }
    }

    listProducts(){
        if(this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`;
        }

        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

        const productInfo = this.productStock.map(p => `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`);

        let result = `${this.storehouse} storehouse in ${this.location} available products:\n${productInfo.join('\n')}`;

        return result;
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));


// const storeHouse = new FashionRetailInventory("East", "Milano");
//   console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
//   console.log(storeHouse.sendProduct("T-Shirt", "M"));
//   console.log(storeHouse.sendProduct("Sweather", "M"));


// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

