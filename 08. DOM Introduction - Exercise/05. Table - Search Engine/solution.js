/* 
Write a function that searches in a table by given input.

When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, Student email, and Student course) 
and check if the given input has a match (check for both full words and single letters).
If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string. 
Оtherwise, if there is no match, nothing should happen.
Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) 
from the previous search, for the new search to contain only the new result.

*/

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

         const tableRowElements = document.querySelectorAll('table.container tbody tr');
         const searchFieldElement = document.getElementById('searchField');
         const searchText = searchFieldElement.value;

         
         
         for (const trElement of tableRowElements) {
            const tdElements = trElement.querySelectorAll('td');
            let isSelected = false; 
            trElement.classList.remove('select');

            for (const tdElement of tdElements) {
               if (tdElement.textContent.includes(searchText)){
                     isSelected = true;
                     break;
               }
            }
            if (isSelected){
               trElement.classList.add('select');
            }
         }
      searchFieldElement.value ='';
   }
}