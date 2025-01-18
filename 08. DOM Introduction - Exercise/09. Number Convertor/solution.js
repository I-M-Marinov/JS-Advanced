/* 
Write a function that converts a decimal number to binary and hexadecimal.
The given number will always be in decimal format. The "From" select menu will only have a Decimal option,
but the "To" select menu will have two options: Binary and Hexadecimal. 
This means that our program should have the functionality to convert decimal to binary and decimal to hexadecimal. 
When you convert to hexadecimal it must be upper case.
Note that the "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') inside before continuing. 
Also, they should have values ('binary' and 'hexadecimal').
*/

function solve() {

    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');

    const converButtonElement = document.querySelector('button');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = "Hexadecimal";
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHexadecimal,
    };

    converButtonElement.addEventListener('click', () => {
        resultElement.value = convertors[selectMenuToElement.value](Number(inputNumberElement.value));
    });

    function convertDecimalToBinary(number){
        let binaryString = number.toString(2);
        return binaryString;
    }

    /* 
                ALTERNATIVE WAY TO CALCULATE THE DECIMAL TO BINARY    
    */

    /* function convertDecimalToBinary(number){
        const result = [];
        while ( number > 0){
            result.push(number % 2);
            number = Math.trunc(number / 2);
        }
        return result.reverse().join('');
    } */

    function convertDecimalToHexadecimal(number){
        
        let hexadecimalString = number.toString(16);
        return hexadecimalString.toUpperCase();
    }
   
}