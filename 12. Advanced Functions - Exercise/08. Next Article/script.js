// Write a JS program that sequentially displays articles on a web page when the user clicks a button. 
// You will receive an array of strings that will initialize the program. You need to return a function that 
// keeps the initial array in its closure and every time it’s called, it takes the first element from the array 
// and displays it on the web page, inside "article", in div with ID "content". If there are no more elements left, your function should do nothing.
// Your function will be called automatically, there is no need to attach any event listeners.

// Input
// You will receive an array of strings.

// Output
// Return a function that sequentially displays the array elements on the web page.


function getArticleGenerator(articles) {
    
    const contentDiv = document.getElementById('content');

    return function showNext() {

        if (articles.length > 0) {

            const articleText = articles.shift();
            
            const articleElement = document.createElement('article');
            articleElement.textContent = articleText;
            
            contentDiv.appendChild(articleElement);
        }
    };
}






