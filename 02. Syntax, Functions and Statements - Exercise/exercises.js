// 01. Fruit

function calculate(fruit, weight, pricePerKg){

    let weightInKg = weight / 1000;
    let price = weightInKg * pricePerKg;
    
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);