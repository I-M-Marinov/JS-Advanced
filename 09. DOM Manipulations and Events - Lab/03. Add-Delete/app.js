/* 
Extend the previous problem to display a [Delete] link after each list item. 
Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.
*/

function addItem() {
    
    const inputItemElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items'); 
    
    const newInputItemElement = document.createElement('li'); 
    newInputItemElement.textContent = inputItemElement.value; 

    const deleteLinkElement = document.createElement('a'); 
    deleteLinkElement.textContent = "[Delete]";
    deleteLinkElement.href ='#';

    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });
    newInputItemElement.appendChild(deleteLinkElement);
    itemListElement.appendChild(newInputItemElement); 
    inputItemElement.value = ''; 

}