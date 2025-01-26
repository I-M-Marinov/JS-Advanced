// Create a function calculator which returns an object that can modify the DOM. The returned object should support the following functionality: 

// •	init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors. 

// •	add () - adds the numerical value of the element corresponding to selector1 to the numerical value 
// of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector. 

// •	subtract () - subtracts the numerical value of the element corresponding to selector1 from the numerical 
// value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// Input 
// There will be no input your function must only provide an object. 

// Output 
// Your function should return an object that meets the specified requirements. 



function calculator() {
    let number1, number2, result;

    return {
        init(selector1, selector2, resultSelector) {
            number1 = document.querySelector(selector1);
            number2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            const value1 = Number(number1.value); 
            const value2 = Number(number2.value); 
            result.value = value1 + value2;
        },
        subtract() {
            const value1 = Number(number1.value); 
            const value2 = Number(number2.value); 
            result.value = value1 - value2;
        }
    };
}


const calculate = calculator(); 
calculate.init ('#num1', '#num2', '#result'); 

document.querySelector('#sumButton').addEventListener('click', () => calculate.add());
document.querySelector('#subtractButton').addEventListener('click', () => calculate.subtract());


