/* 
Write a program that detects and displays how far along a gradient the user has moved their mouse. 
The result should be rounded down and displayed as a percentage inside the <div> with id "result". 

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function attachGradientEvents() {
    
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);
        resultElement.textContent = `${progress}%`
    })
}