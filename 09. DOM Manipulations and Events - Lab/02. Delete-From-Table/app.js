/* 
Write a program that takes an email from an input field and deletes the matching row from a table. 
•	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
•	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
Submit only the deleteByEmail() function in Judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function deleteByEmail() {


    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const trElements = document.querySelectorAll('table#customers tbody tr');

    // Search for the table row element
    const resultTrElement = Array.from(trElements).find(trElement => trElement.children[1].textContent.includes(inputEmailElement.value));

    if (resultTrElement){
        //Delete table row
        resultTrElement.remove();

        // Show deleted text
        resultElement.textContent = "Deleted.";

        // Clear input
        inputEmailElement.value = '';
    } else {
        // if not found display "Not found."
        resultElement.textContent = "Not found.";
    }
}
