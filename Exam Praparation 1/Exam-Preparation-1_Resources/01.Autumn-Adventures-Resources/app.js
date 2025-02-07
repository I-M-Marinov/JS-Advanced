window.addEventListener('load', solve);

function solve() {

    const timeInputElement = document.getElementById('time');
    const dateInputElement = document.getElementById('date');
    const placeInputElement = document.getElementById('place');
    const eventNameInputElement = document.getElementById('event-name');
    const emailInputElement = document.getElementById('email');

    const addButtonElement = document.getElementById('add-btn');
    const clearButtonElement = document.getElementById('clear');

    const ulCheckListElement = document.getElementById('check-list');
    const ulUpcomingListElement = document.getElementById('upcoming-list');
    const ulFinishedListElement = document.getElementById('finished-list');

    addButtonElement.addEventListener('click', addEventHandler)

    function addEventHandler(e){
        e.preventDefault();

       if(timeInputElement.value === '' || 
        dateInputElement.value === '' || 
        placeInputElement.value === '' || 
        eventNameInputElement.value === '' || 
        emailInputElement.value === ''){
        return;
       }


    const liEventContentElement = document.createElement('li');
    liEventContentElement.setAttribute('class', 'event-content');

    const articleElement = document.createElement('article');

    const pBeginsElement = document.createElement('p');
    pBeginsElement.textContent = `Begins: ${dateInputElement.value} at: ${timeInputElement.value}`;

    const pInElement = document.createElement('p');
    pInElement.textContent = `In: ${placeInputElement.value}`;

    const pEventElement = document.createElement('p');
    pEventElement.textContent = `Event: ${eventNameInputElement.value}`;

    const pContactElement = document.createElement('p');
    pContactElement.textContent = `Contact: ${emailInputElement.value}`;


    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'Edit';
    editButtonElement.setAttribute('class', 'edit-btn');

    const continueButtonElement = document.createElement('button');
    continueButtonElement.textContent = 'Continue';
    continueButtonElement.setAttribute('class', 'continue-btn');

    articleElement.appendChild(pBeginsElement);
    articleElement.appendChild(pInElement);
    articleElement.appendChild(pEventElement);
    articleElement.appendChild(pContactElement);

    liEventContentElement.appendChild(articleElement);
    liEventContentElement.appendChild(editButtonElement);
    liEventContentElement.appendChild(continueButtonElement);

    ulCheckListElement.appendChild(liEventContentElement);

    const editedTimeElement = timeInputElement.value;
    const editedDateElement = dateInputElement.value;
    const editedPlaceElement = placeInputElement.value;
    const editedNameElement = eventNameInputElement.value;
    const editedEmailElement = emailInputElement.value;

    timeInputElement.value = '';
    dateInputElement.value = '';
    placeInputElement.value = '';
    eventNameInputElement.value = '';
    emailInputElement.value = '';

    addButtonElement.disabled = true;

        editButtonElement.addEventListener('click', () => {

            timeInputElement.value = editedTimeElement;
            dateInputElement.value = editedDateElement;
            placeInputElement.value = editedPlaceElement;
            eventNameInputElement.value = editedNameElement;
            emailInputElement.value = editedEmailElement;

            liEventContentElement.remove();
            addButtonElement.disabled = false;

        });

        continueButtonElement.addEventListener('click', () => {

           const liElementUpcoming = document.createElement('li');
           liElementUpcoming.setAttribute('class', 'event-content');

           let articleElementUpcoming = document.createElement('article');
           articleElementUpcoming = articleElement;
        
            const moveToFinishedBtn = document.createElement('button');
            moveToFinishedBtn.textContent = 'Move to Finished';
            moveToFinishedBtn.setAttribute('class', 'finished-btn');

            liElementUpcoming.appendChild(articleElementUpcoming);
            liElementUpcoming.appendChild(moveToFinishedBtn);

            ulUpcomingListElement.appendChild(liElementUpcoming);

            liEventContentElement.remove();
            addButtonElement.disabled = false;

            moveToFinishedBtn.addEventListener('click', () => {

                const liElementFinished = document.createElement('li');
                liElementFinished.setAttribute('class', 'event-content');
    
               let articleElementFinished = document.createElement('article');
               articleElementFinished = articleElement;
    
               liElementFinished.appendChild(articleElement);
               liElementUpcoming.remove();
    
               ulFinishedListElement.appendChild(liElementFinished);
    
               clearButtonElement.addEventListener('click', () => {
                    liElementFinished.remove();
               });
    
            });

        });
    }
}


    
    
