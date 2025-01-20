/* 
Write a function that implements SUDOMU (Sudoku inside the DOM).
The rules are simple and they are the same as the typical sudoku game (for more information, click here).
If the table is filled with the right numbers, and the ["Quick Check"] button is clicked.
The table borer should be changed to: "2px solid green". The text content of the paragraph
inside the div with an id "check" must be "You solve it! Congratulations!"
The text color of that paragraph must be green.
Otherwise, when the filled table does not solve the sudomu. 
The table border should be changed to: "2px solid red". The text content of the paragraph inside the div
with an id "check" must be: "NOP! You are not done yet..."
The text color of that paragraph must be red!
The ["Clear"] button clears the whole SUDOMU (removes all numbers) and the paragraph
which contains the messages. It also removes the table border.
*/


function solve() {

    function checkIfValid(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
        isValid = false;
        const magicNumber = 6;

        let firstRow = num1 + num2 + num3;
        let secondRow = num4 + num5 + num6;
        let thirdRow = num7 + num8 + num9;
        let firstColumn = num1 + num4 + num7;
        let secondColumn = num2 + num5 + num8;
        let thirdColumn =  num3 + num6 + num9;

        if (firstRow == magicNumber && secondRow == magicNumber && thirdRow == magicNumber
            && firstColumn == magicNumber && secondColumn == magicNumber && thirdColumn == magicNumber) {
            isValid = true;
        } else {
            return false;
        }

        return isValid;
    }

    const quickCheckButtonElement = document.querySelector('#exercise button:first-of-type');
    const clearButtonElement = document.querySelector('#exercise button:last-of-type');
    const tableElement = document.querySelector('#exercise table');
    const checkIdElement = document.querySelector('#check p');

    const firstNumberElement = document.querySelector('#exercise tbody tr td input');
    const secondNumberElement = document.querySelector('#exercise tbody tr td:nth-child(2) input');
    const thirdNumberElement = document.querySelector('#exercise tbody tr td:last-of-type input');

    const fourthNumberElement = document.querySelector('#exercise tbody tr:nth-child(2) td input');
    const fifthNumberElement = document.querySelector('#exercise tbody tr:nth-child(2) td:nth-child(2) input');
    const sixthNumberElement = document.querySelector('#exercise tbody tr:nth-child(2) td:last-of-type input');

    const seventhNumberElement = document.querySelector('#exercise tbody tr:last-of-type td input');
    const eightNumberElement = document.querySelector('#exercise tbody tr:last-of-type td:nth-child(2) input');
    const ninthNumberElement = document.querySelector('#exercise tbody tr:last-of-type td:last-of-type input');

    


    quickCheckButtonElement.addEventListener('click', () => {

        const one = Number(firstNumberElement.value);
        const two = Number(secondNumberElement.value);
        const three = Number(thirdNumberElement.value);
        const four = Number(fourthNumberElement.value);
        const five = Number(fifthNumberElement.value);
        const six = Number(sixthNumberElement.value);
        const seven = Number(seventhNumberElement.value);
        const eight = Number(eightNumberElement.value);
        const nine = Number(ninthNumberElement.value);

        const isValid = checkIfValid(one, two, three, four, five, six, seven, eight, nine);

        if (isValid) {
            tableElement.style.border = '2px solid green';
            checkIdElement.style.color = 'green';
            checkIdElement.textContent = `You solve it! Congratulations!`;
        } else {
            tableElement.style.border = '2px solid red';
            checkIdElement.style.color = 'red';
            checkIdElement.textContent = `NOP! You are not done yet...`;
        }

    });

    clearButtonElement.addEventListener('click', () => {

        firstNumberElement.value = '';
        secondNumberElement.value = '';
        thirdNumberElement.value = '';
        fourthNumberElement.value = '';
        fifthNumberElement.value = '';
        sixthNumberElement.value = '';
        seventhNumberElement.value = '';
        eightNumberElement.value = '';
        ninthNumberElement.value = '';
        tableElement.style.border = 'none';
        checkIdElement.textContent = '';
    });
}

