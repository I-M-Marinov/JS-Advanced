/* 
Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.
*/

function addItem() {

    const listOfItemsElements = document.querySelector('#items'); 
    const inputElement = document.getElementById('newItemText'); 
    let li = document.createElement("li");
    listOfItemsElements.appendChild(li); 
    li.textContent = inputElement.value; 
    inputElement.value = ''; 

}