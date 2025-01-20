/* 
You will receive an array of strings. 
For each string, create a div with a paragraph with the string in it. 
Each paragraph is initially hidden (display:none). 
Add a click event listener to each div that displays the hidden paragraph. 
Finally, you should append all divs to the element with an id "content".
*/

function create(words) {

      const stringsArray = Array.from(words);
      const contentElement = document.getElementById('content');
      
      stringsArray.forEach(string => {

         const divElement = document.createElement('div');
         const paragraphElement = document.createElement('p');

         paragraphElement.textContent = string;
         paragraphElement.style.display = 'none';
         divElement.appendChild(paragraphElement);
         contentElement.appendChild(divElement);
        
      });

      const divArray = Array.from(document.querySelectorAll('#content div'));

      divArray.forEach(divElement => divElement.addEventListener('click', (event) => {

         const paragraphElementSecondTime = divElement.querySelector('p');
         paragraphElementSecondTime.style.display = 'inline';

      }));

}
