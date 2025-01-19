/* 
Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error".
Do not validate on every keystroke, as it is annoying for the user, consider only change events.
A valid email is considered to be in the format: <name>@<domain>.<extension>
Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style. Submit only the validate() function in Judge.

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function validate() {
    
    const emailInputElement = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    emailInputElement.addEventListener('change', (event) => {
        if (!pattern.test(event.target.value)){
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
}