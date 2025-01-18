/* 
An HTML page holds a list of towns, a search box, and a [Search] button. 
Implement the search function to bold and underline the items from the list which include the text from the search box. 
Also, print the number of items the current search matches in the format `${matches} matches found`.
Note: It is necessary to clear the results of the previous search.
Write your JavaScript code in this file:
*/

function search() {
   const searchText = document.getElementById("searchText").value.toLowerCase();
   const listItems = document.getElementById("towns").getElementsByTagName("li");
   let matches = 0;

   for (var i = 0; i < listItems.length; i++) {
       listItems[i].innerHTML = listItems[i].textContent;
       listItems[i].style.fontWeight = 'normal';
       listItems[i].style.textDecoration = 'none';
   }

   for (var i = 0; i < listItems.length; i++) {
       var itemText = listItems[i].textContent.toLowerCase();
       if (itemText.includes(searchText)) {
           matches++;
           let index = itemText.indexOf(searchText);
           let highlightedText = listItems[i].innerHTML.substring(0, index) +
               '<span class="highlight">' + listItems[i].innerHTML.substring(index, index + searchText.length) + '</span>' +
               listItems[i].innerHTML.substring(index + searchText.length);
           listItems[i].innerHTML = highlightedText;
           listItems[i].style.fontWeight = 'bold';
           listItems[i].style.textDecoration = 'underline';
       }
   }
   
   document.getElementById("result").innerHTML = matches + " matches found";
}