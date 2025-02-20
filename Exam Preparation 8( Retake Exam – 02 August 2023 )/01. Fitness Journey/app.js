window.addEventListener('load', solve);

function solve() {

    let nameElement = document.getElementById('name');
    let emailElemenet = document.getElementById('email');
    let contactNumberElement = document.getElementById('contact-number');
    let preferredClassElement = document.getElementById('class-type');
    let preferredTimeElement = document.getElementById('class-time');
  
    const nextButtonElement = document.getElementById('next-btn');
    const ulClassInfoElement = document.querySelector('.class-info');
    const ulConfirmClassElement = document.querySelector('.confirm-class');
    const mainElement = document.getElementById('main');
    const bodyElement = document.getElementById('body');

    nextButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (
            nameElement.value === "" ||
            emailElemenet.value === "" ||
            contactNumberElement.value === "" ||
            preferredClassElement.value === "" || 
            preferredTimeElement.value === "" 
          ) {
            return;
          }

          const liInfoItemElement = document.createElement('li');
          liInfoItemElement.classList.add('info-item');

          const articlePersonalInfoElement = document.createElement('article');
          articlePersonalInfoElement.classList.add('personal-info');

          let pNameElement = document.createElement('p');
          pNameElement.textContent = `${nameElement.value}`;
  
          let pEmailElement = document.createElement('p');
          pEmailElement.textContent = `${emailElemenet.value}`;
  
          let pContactNumberElement = document.createElement('p');
          pContactNumberElement.textContent = `${contactNumberElement.value}`;
  
          let pClassElement = document.createElement('p');
          pClassElement.textContent = `${preferredClassElement.value}`;
  
          let pTimeElement = document.createElement('p');
          pTimeElement.textContent = `${preferredTimeElement.value}`;

          articlePersonalInfoElement.appendChild(pNameElement);
          articlePersonalInfoElement.appendChild(pEmailElement);
          articlePersonalInfoElement.appendChild(pContactNumberElement);
          articlePersonalInfoElement.appendChild(pClassElement);
          articlePersonalInfoElement.appendChild(pTimeElement);

          const editButtonElement = document.createElement('button');
          editButtonElement.setAttribute('class', 'edit-btn');
          editButtonElement.textContent = 'Edit';
  
          const continueButtonElement = document.createElement('button');
          continueButtonElement.setAttribute('class', 'continue-btn');
          continueButtonElement.textContent = 'Continue';

          liInfoItemElement.appendChild(articlePersonalInfoElement);
          liInfoItemElement.appendChild(editButtonElement);
          liInfoItemElement.appendChild(continueButtonElement);

          let name = nameElement.value;
          let email = emailElemenet.value;
          let number = contactNumberElement.value;
          let preferredClass = preferredClassElement.value;
          let time = preferredTimeElement.value;
  

          nameElement.value = '';
          emailElemenet.value = '';
          contactNumberElement.value = '';
          preferredClassElement.value = '';
          preferredTimeElement.value = '';

          ulClassInfoElement.appendChild(liInfoItemElement);

          nextButtonElement.disabled = true;

          editButtonElement.addEventListener('click', () => {

            
          nameElement.value = name;
          emailElemenet.value = email;
          contactNumberElement.value = number;
          preferredClassElement.value = preferredClass;
          preferredTimeElement.value = time;

          liInfoItemElement.remove();
          nextButtonElement.disabled = false;

          })

          continueButtonElement.addEventListener('click', () => {

            const liConfirmClassElement = document.createElement('li');
            liConfirmClassElement.classList.add('confirm-class');

            const cancelButtonElement = document.createElement('button');
            cancelButtonElement.setAttribute('class', 'cancel-btn');
            cancelButtonElement.textContent = 'Cancel';
    
            const confirmButtonElement = document.createElement('button');
            confirmButtonElement.setAttribute('class', 'confirm-btn');
            confirmButtonElement.textContent = 'Confirm';

            liConfirmClassElement.appendChild(articlePersonalInfoElement);
            liConfirmClassElement.appendChild(cancelButtonElement);
            liConfirmClassElement.appendChild(confirmButtonElement);

            liInfoItemElement.remove();

            ulConfirmClassElement.appendChild(liConfirmClassElement);

            cancelButtonElement.addEventListener('click', () => {

                liConfirmClassElement.remove();
                nextButtonElement.disabled = false;

            })

            confirmButtonElement.addEventListener('click', () => {

                mainElement.remove();
                const thankYouElement = document.createElement('h1');
                thankYouElement.setAttribute('id', 'thank-you');
                thankYouElement.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

                const doneButtonElement = document.createElement('button');
                doneButtonElement.setAttribute('id', 'done-btn');
                doneButtonElement.textContent = 'Done';

                bodyElement.appendChild(thankYouElement);
                bodyElement.appendChild(doneButtonElement);

                doneButtonElement.addEventListener('click', () =>{
                    window.location.reload();        
                })

            })

          })

    })

}





