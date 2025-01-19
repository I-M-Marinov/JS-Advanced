
// Write a function that highlights the currently active section of a document. 
// There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focused".
// When the focus is lost (blurred), remove the class from the element.

// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


function focused() {
    
    const inputElements = document.querySelectorAll('input[type=text]');
    const inputElementsArray = Array.from(inputElements);

    inputElementsArray.forEach(inputElement => inputElement.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focused');
    }));

    inputElementsArray.forEach(inputElement => inputElement.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focused');
    }));
    
}