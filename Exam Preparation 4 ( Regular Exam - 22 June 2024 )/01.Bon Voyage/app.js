window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let fromDateElement = document.getElementById('from-date');
    let toDateElement = document.getElementById('to-date');

    const nextButtonElement = document.getElementById('next-btn');

    let ulInfoList = document.querySelector('.info-list');
    let ulConfirmList = document.querySelector('.confirm-list');
    const statusElement = document.getElementById('status');


    nextButtonElement.addEventListener('click', (e) =>  {
        e.preventDefault();
        if (
            firstNameElement.value === "" ||
            lastNameElement.value === "" ||
            fromDateElement.value === "" ||
            toDateElement.value === ""
        ) {
          return;
        }

        const fromDateAsDate = new Date(fromDateElement.value);
        const toDateAsDate = new Date(toDateElement.value);

        if (fromDateAsDate >= toDateAsDate) {
            return;
        }

        let liVacationContentElement = document.createElement('li');
        liVacationContentElement.setAttribute('class', 'vacation-content');

        let articleElement = document.createElement('article');

        let h3FullNameElement = document.createElement('h3');
        h3FullNameElement.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let pFromDateElement = document.createElement('p');
        pFromDateElement.textContent = `From date: ${fromDateElement.value}`;

        let pToDateElement = document.createElement('p');
        pToDateElement.textContent = `To date: ${toDateElement.value}`;

        let editButtonElement = document.createElement('button');
        editButtonElement.setAttribute('class', 'edit-btn');
        editButtonElement.textContent = 'Edit';

        let continueButtonElement = document.createElement('button');
        continueButtonElement.setAttribute('class', 'continue-btn');
        continueButtonElement.textContent = 'Next';

        articleElement.appendChild(h3FullNameElement);
        articleElement.appendChild(pFromDateElement);
        articleElement.appendChild(pToDateElement);
      
        liVacationContentElement.appendChild(articleElement);
        liVacationContentElement.appendChild(editButtonElement);
        liVacationContentElement.appendChild(continueButtonElement);

        ulInfoList.appendChild(liVacationContentElement);

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let fromDate = fromDateElement.value;
        let toDate = toDateElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        fromDateElement.value = '';
        toDateElement.value = ''; 

        nextButtonElement.disabled = true;

        editButtonElement.addEventListener('click', () =>{

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            fromDateElement.value = fromDate;
            toDateElement.value = toDate;

            liVacationContentElement.remove();
            nextButtonElement.disabled = false;

        })

        continueButtonElement.addEventListener('click', () =>{

            liVacationContentElement.remove();

            let liVacationContentContinueElement = document.createElement('li');
            liVacationContentContinueElement.setAttribute('class', 'vacation-content');

            let confirmButtonElement = document.createElement('button');
            confirmButtonElement.setAttribute('class', 'confirm-btn');
            confirmButtonElement.textContent = 'Confirm';

            let cancelButtonElement = document.createElement('button');
            cancelButtonElement.setAttribute('class', 'cancel-btn');
            cancelButtonElement.textContent = 'Cancel';


            liVacationContentContinueElement.appendChild(articleElement);
            liVacationContentContinueElement.appendChild(confirmButtonElement);
            liVacationContentContinueElement.appendChild(cancelButtonElement);

            ulConfirmList.appendChild(liVacationContentContinueElement);

            confirmButtonElement.addEventListener('click', () => {
                liVacationContentContinueElement.remove();
                nextButtonElement.disabled = false;
                statusElement.classList.add('vacation-confirmed');
                statusElement.textContent = 'Vacation Requested';
            })

            cancelButtonElement.addEventListener('click', () => {
                liVacationContentContinueElement.remove();
                nextButtonElement.disabled = false;
                statusElement.classList.add('vacation-cancelled');
                statusElement.textContent = 'Cancelled Vacation';
            })

            statusElement.addEventListener('click', () => {
                window.location.reload();        
            })
        })
    });
 
}


    
    
