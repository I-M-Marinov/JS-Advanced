
class Brands {
    constructor(brand, model, numberProduced) {
        this.brand = brand;
        this.models = new Map(); 
    }

    addModel(model, numberProduced) {
        if (this.models.has(model)) {
            this.models.set(model, this.models.get(model) + numberProduced);
        } else {
            this.models.set(model, numberProduced);
        }
    }

    toString() {
        let result = `${this.brand}`;
        for (const [model, produced] of this.models) {
            result += `\n###${model} -> ${produced}`;
        }
        return result;
    }
}

function autoEngineeringCompany(array) {
    let brandsMap = new Map();

    for (const line of array) {
        let [brand, model, numberProduced] = line.split(' | ');
        numberProduced = Number(numberProduced);

        if (!brandsMap.has(brand)) {
            brandsMap.set(brand, new Brands(brand));
        }
        brandsMap.get(brand).addModel(model, numberProduced);
    }

    for (const brand of brandsMap.values()) {
        console.log(brand.toString());
    }
}


autoEngineeringCompany(
    ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);

// Output: 

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
