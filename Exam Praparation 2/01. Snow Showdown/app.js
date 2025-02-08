window.addEventListener("load", solve);

function solve() {

   let nameInputElement = document.getElementById('snowman-name');
   let heightInputElement = document.getElementById('snowman-height');
   let locationInputElement = document.getElementById('location');
   let creatorInputElement = document.getElementById('creator-name');
   let selectElement = document.getElementById("special-attribute");

   let bodyElement = document.querySelector('.body');
   let main = document.getElementById("hero");
   let backImageElement = document.getElementById('back-img');

   let addButtonElement = document.querySelector('.add-btn');

   let ulPreviewElement = document.querySelector('.snowman-preview');
   let ulSnowListElement = document.querySelector('.snow-list');

   addButtonElement.addEventListener('click', (e) =>  {
    e.preventDefault();
    if (
      nameInputElement.value === "" ||
      heightInputElement.value === "" ||
      locationInputElement.value === "" ||
      creatorInputElement.value === "" ||
      selectElement.value === ""
    ) {
      return;
    }

    let liSnowmanInfoElement = document.createElement('li');
    liSnowmanInfoElement.setAttribute('class', 'snowman-info');

    let articleElement = document.createElement('article');

    let pNameElement = document.createElement('p');
    pNameElement.textContent = `Name: ${nameInputElement.value}`;

    let pHeightElement = document.createElement('p');
    pHeightElement.textContent = `Height: ${heightInputElement.value}`;

    let pLocationElement = document.createElement('p');
    pLocationElement.textContent = `Location: ${locationInputElement.value}`;

    let pCreatorElement = document.createElement('p');
    pCreatorElement.textContent = `Creator: ${creatorInputElement.value}`;

    let pAttributeElement = document.createElement('p');
    pAttributeElement.textContent = `Attribute: ${selectElement.value}`;

    let divButtonContainer = document.createElement('div');
    divButtonContainer.setAttribute('class', 'btn-container');

    let editButtonElement = document.createElement('button');
    editButtonElement.setAttribute('class', 'edit-btn');
    editButtonElement.textContent = 'Edit';

    
    let nextButtonElement = document.createElement('button');
    nextButtonElement.setAttribute('class', 'next-btn');
    nextButtonElement.textContent = 'Next';

    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pHeightElement);
    articleElement.appendChild(pLocationElement);
    articleElement.appendChild(pCreatorElement);
    articleElement.appendChild(pAttributeElement);

    divButtonContainer.appendChild(editButtonElement);
    divButtonContainer.appendChild(nextButtonElement);

    liSnowmanInfoElement.appendChild(articleElement);
    liSnowmanInfoElement.appendChild(divButtonContainer);

    ulPreviewElement.appendChild(liSnowmanInfoElement);

    let name = nameInputElement.value;
    let height = heightInputElement.value;
    let location = locationInputElement.value;
    let creator = creatorInputElement.value;
    let attribute = selectElement.value;

    nameInputElement.value = '';
    heightInputElement.value = '';
    locationInputElement.value = '';
    creatorInputElement.value = ''; 
    selectElement.value = ''; 

    addButtonElement.disabled = true;

    editButtonElement.addEventListener('click', () => {

      nameInputElement.value = name;
      heightInputElement.value = height;
      locationInputElement.value = location;
      creatorInputElement.value = creator;
      selectElement.value = attribute;

      liSnowmanInfoElement.remove();
      addButtonElement.disabled = false;

    });

    nextButtonElement.addEventListener('click', () => {

      let liSnowmanContentElement = document.createElement('li');
      liSnowmanContentElement.setAttribute('class', 'snowman-content');

     let articleSnowListElement = document.createElement("article");
     articleSnowListElement = articleElement;
     
     let sendButtonElement = document.createElement('button');
     sendButtonElement.setAttribute('class', 'send-btn');
     sendButtonElement.textContent = 'Send';

     articleSnowListElement.appendChild(sendButtonElement);
      
     liSnowmanContentElement.appendChild(articleSnowListElement);
     ulSnowListElement.appendChild(liSnowmanContentElement);

     liSnowmanInfoElement.remove();
      sendButtonElement.addEventListener('click', () => {
        
        main.remove();
        let backButtonElement = document.createElement('button');
        backButtonElement.setAttribute('class', 'back-btn');
        backButtonElement.textContent = 'Back';

        
        bodyElement.appendChild(backButtonElement);
        backImageElement.hidden = false;

        backButtonElement.addEventListener('click', () => {
          window.location.reload();        
        })

      })

    })

   })

}
