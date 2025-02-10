window.addEventListener("load", solve);

function solve() {

    let ticketsElement = document.getElementById('num-tickets');
    let seatingPreferenceElement = document.getElementById('seating-preference');
    let fullNameElement = document.getElementById('full-name');
    let emailElement = document.getElementById('email');
    let phoneNumberElement = document.getElementById('phone-number');

    let purchaseButtonElement = document.querySelector('#purchase-btn');

    let ticketPreviewUlElement = document.getElementById('ticket-preview');
    let ticketPurchseUlElement = document.getElementById('ticket-purchase');
    let divBottomContentElement = document.querySelector('.bottom-content');

    purchaseButtonElement.addEventListener('click', (e) =>{
        e.preventDefault();

        if (ticketsElement.value.trim() === "" ||
            seatingPreferenceElement.value.trim() === "" ||
            fullNameElement.value.trim() === "" ||
            emailElement.value.trim() === "" ||
            phoneNumberElement.value.trim() === ""  ||
            Number(ticketsElement.value.trim()) <= 0
            ) {
                return;
            }

        let liTicketPreviewElement = document.createElement('li');
        liTicketPreviewElement.setAttribute('class', 'ticket-purchase');

        let articleElement = document.createElement('article');

        let pCountElement = document.createElement('p');
        pCountElement.textContent = `Count: ${ticketsElement.value}`;

        let pPreferenceElement = document.createElement('p');
        pPreferenceElement.textContent = `Preference: ${seatingPreferenceElement.value}`;

        let pFullNameElement = document.createElement('p');
        pFullNameElement.textContent = `To: ${fullNameElement.value}`;

        let pEmailElement = document.createElement('p');
        pEmailElement.textContent = `Email: ${emailElement.value}`;

        let pPhoneNumberElement = document.createElement('p');
        pPhoneNumberElement.textContent = `Phone Number: ${phoneNumberElement.value}`;

        let divButtonContainer = document.createElement('div');
        divButtonContainer.setAttribute('class', 'btn-container');

        let editButtonElement = document.createElement('button');
        editButtonElement.setAttribute('class', 'edit-btn');
        editButtonElement.textContent = 'Edit';

        let nextButtonElement = document.createElement('button');
        nextButtonElement.setAttribute('class', 'next-btn');
        nextButtonElement.textContent = 'Next';

        articleElement.appendChild(pCountElement);
        articleElement.appendChild(pPreferenceElement);
        articleElement.appendChild(pFullNameElement);
        articleElement.appendChild(pEmailElement);
        articleElement.appendChild(pPhoneNumberElement);

        divButtonContainer.appendChild(editButtonElement);
        divButtonContainer.appendChild(nextButtonElement);

        liTicketPreviewElement.appendChild(articleElement);
        liTicketPreviewElement.appendChild(divButtonContainer);

        ticketPreviewUlElement.appendChild(liTicketPreviewElement);

        let count = ticketsElement.value;
        let preference = seatingPreferenceElement.value;
        let fullName = fullNameElement.value;
        let email = emailElement.value;
        let phoneNumber = phoneNumberElement.value;

        ticketsElement.value = '';
        seatingPreferenceElement.value = 'seating-preference';
        fullNameElement.value = '';
        emailElement.value = ''; 
        phoneNumberElement.value = ''; 

        purchaseButtonElement.disabled = true;

        editButtonElement.addEventListener('click', () => {

            ticketsElement.value = count;
            seatingPreferenceElement.value = preference;
            fullNameElement.value = fullName;
            emailElement.value = email;
            phoneNumberElement.value = phoneNumber;
      
            liTicketPreviewElement.remove();
            purchaseButtonElement.disabled = false;
      
          });

            nextButtonElement.addEventListener('click', () => {

            liTicketPreviewElement.remove();

            let liTicketPurchaseElement = document.createElement('li');
            liTicketPurchaseElement.setAttribute('class', 'ticket-purchase');
        
            let articleTicketPurchaseElement = document.createElement("article");
            articleTicketPurchaseElement = articleElement;
            
            let buyButtonElement = document.createElement('button');
            buyButtonElement.setAttribute('class', 'buy-btn');
            buyButtonElement.textContent = 'Buy';
        
            articleTicketPurchaseElement.appendChild(buyButtonElement);
            
            liTicketPurchaseElement.appendChild(articleTicketPurchaseElement);
            ticketPurchseUlElement.appendChild(liTicketPurchaseElement);
        


            buyButtonElement.addEventListener('click', () => {

                liTicketPurchaseElement.remove();
        
                let backButtonElement = document.createElement('button');
                backButtonElement.setAttribute('class', 'back-btn');
                backButtonElement.textContent = 'Back';

                let messageH2Element = document.createElement('h2');
                messageH2Element.textContent = 'Thank you for your purchase!';

                divBottomContentElement.appendChild(messageH2Element);
                divBottomContentElement.appendChild(backButtonElement);


        
                backButtonElement.addEventListener('click', () => {
                  window.location.reload();        
                })
        
              })
        })
    })
}
