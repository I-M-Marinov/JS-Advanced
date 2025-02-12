window.addEventListener("load", solve);

function solve() {

    let colorsElement = document.getElementById('colors');
    let motorcyclesElement = document.getElementById('motorcycles');
    let dateTimeElement = document.getElementById('datetime');
    let fullNameElement = document.getElementById('full-name');
    let emailElement = document.getElementById('email');

    const testRideButtonElement = document.getElementById('test-ride-btn');

    let ulPreviewList = document.querySelector('#preview-list');
    let ulCompleteList = document.querySelector('#complete-list');


    testRideButtonElement.addEventListener('click', (e) =>{
      e.preventDefault();
        if (
          colorsElement.value === "" ||
          motorcyclesElement.value === "" ||
          dateTimeElement.value === "" ||
          fullNameElement.value === "" ||
          emailElement.value === ""
        ) {
          return;
        }

        let liPreviewElement = document.createElement('li');

        let articleElement = document.createElement('article');

        let pColorElement = document.createElement('p');
        pColorElement.textContent = `Color: ${colorsElement.value}`;

        let pModelElement = document.createElement('p');
        pModelElement.textContent = `Model: ${motorcyclesElement.value}`;

        let pFullNameElement = document.createElement('p');
        pFullNameElement.textContent = `For: ${fullNameElement.value}`;

        let pEmailElement = document.createElement('p');
        pEmailElement.textContent = `Contact: ${emailElement.value}`;

        let pDateTimeElement = document.createElement('p');
        pDateTimeElement.textContent = `Test Ride On: ${dateTimeElement.value}`;

        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'btn-container');


        let editButtonElement = document.createElement('button');
        editButtonElement.setAttribute('class', 'edit-btn');
        editButtonElement.textContent = 'Edit';

        let nextButtonElement = document.createElement('button');
        nextButtonElement.setAttribute('class', 'next-btn');
        nextButtonElement.textContent = 'Next';
        
        articleElement.appendChild(pColorElement);
        articleElement.appendChild(pModelElement);
        articleElement.appendChild(pFullNameElement);
        articleElement.appendChild(pEmailElement);
        articleElement.appendChild(pDateTimeElement);

        divElement.appendChild(editButtonElement);
        divElement.appendChild(nextButtonElement);

        liPreviewElement.appendChild(articleElement);
        liPreviewElement.appendChild(divElement);

        ulPreviewList.appendChild(liPreviewElement);

        let colors = colorsElement.value;
        let motorcycles = motorcyclesElement.value;
        let dateTime = dateTimeElement.value;
        let fullName = fullNameElement.value;
        let email = emailElement.value;

        colorsElement.value = '';
        motorcyclesElement.value = '';
        dateTimeElement.value = '';
        fullNameElement.value = ''; 
        emailElement.value = ''; 

        testRideButtonElement.disabled = true;

        editButtonElement.addEventListener('click', () =>{

          colorsElement.value = colors;
          motorcyclesElement.value = motorcycles;
          dateTimeElement.value = dateTime;
          fullNameElement.value = fullName;
          emailElement.value = email;

          liPreviewElement.remove();
          testRideButtonElement.disabled = false;

        })

        nextButtonElement.addEventListener('click', () => {

          liPreviewElement.remove();

          let liCompleteListElement = document.createElement('li');

          let completeButtonElement = document.createElement('button');
          completeButtonElement.setAttribute('class', 'complete-btn');
          completeButtonElement.textContent = 'Complete';


          articleElement.appendChild(completeButtonElement);
          liCompleteListElement.appendChild(articleElement);

          ulCompleteList.appendChild(liCompleteListElement);

          completeButtonElement.addEventListener('click', () => {

            liCompleteListElement.remove();

            let divDataViewElement = document.querySelector('.data-view');

            let confirmButtonElement = document.createElement('button');
            confirmButtonElement.setAttribute('class', 'confirm-btn');
            confirmButtonElement.textContent = 'Your Test Ride is Confirmed';

            divDataViewElement.appendChild(confirmButtonElement);

            confirmButtonElement.addEventListener('click', () => {
              window.location.reload();        
            })

          })

        })

    })

}
