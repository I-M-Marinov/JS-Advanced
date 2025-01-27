// Use the index.html and app.js files to solve this problem. 
// You have NO permission to directly change the given HTML code (index.html file).

// Write the missing JavaScript code to make the Task Manager Functionality works as follows: 
// When the [Add] button is clicked, first you need to validate the inputs. If any of the input fields are empty, the function doesn’t make anything. 
// After validating the input fields, you need to add the new task (article) in the "Open" section. 


// The article should have two buttons "Start" and "Delete". Be careful to set the classes for the buttons and the parent-div.
// When the [Start] button is clicked, you need to move the Task in the section "In Progress". Be careful with the buttons! 

// When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML. 
// After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". 
// The buttons with their parent div-element should be removed.



function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add');

    const openSection = document.querySelectorAll('section')[1].querySelector('div:last-child'); 
    const inProgressSection = document.getElementById('in-progress'); 
    const completeSection = document.querySelectorAll('section')[3].querySelector('div:last-child'); 

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        const task = taskInput.value.trim();
        const description = descriptionInput.value.trim();
        const date = dateInput.value.trim();
        if (!task || !description || !date) {
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        const actionDiv = document.createElement('div');
        actionDiv.classList.add('flex');

        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('green');
        startButton.addEventListener('click', () => {
            inProgress(article);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', () => {
            article.remove();
        });

        actionDiv.appendChild(startButton);
        actionDiv.appendChild(deleteButton);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(actionDiv);

        openSection.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    });

    function inProgress(article) {
        const actionDiv = article.querySelector('.flex');
        actionDiv.innerHTML = ''; 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', () => {
            article.remove();
        });

        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('orange');
        finishButton.addEventListener('click', () => {
            complete(article);
        });

        actionDiv.appendChild(deleteButton);
        actionDiv.appendChild(finishButton);
        inProgressSection.appendChild(article);
    }

    function complete(article) {
        article.querySelector('.flex').remove(); 
        completeSection.appendChild(article);
    }
}
