window.addEventListener("load", solve);

function solve() {
  
  let typeElement = document.getElementById('type');
  let intensityElement = document.getElementById('intensity');
  let caloriesElement = document.getElementById('calories');
  let durationElement = document.getElementById('duration');
  let dateElement = document.getElementById('date');

  const addActivityButton = document.getElementById('add-activity');
  const ulPreviewActivityElement = document.getElementById('preview-activity');
  const tBodyActivitiesTableElement = document.getElementById('activities-table');


  addActivityButton.addEventListener('click', (e) => {
    e.preventDefault();
        if (
          typeElement.value === "" ||
          intensityElement.value === "" ||
          caloriesElement.value === "" ||
          durationElement.value === "" || 
          dateElement.value === "" 
        ) {
          return;
        }

        let liPreviewActivityElement = document.createElement('li');

        let articleElement = document.createElement('article');

        let pActivityElement = document.createElement('p');
        pActivityElement.textContent = `Activity: ${typeElement.value}`;

        let pIntensityElement = document.createElement('p');
        pIntensityElement.textContent = `Intensity: ${intensityElement.value}`;

        let pDurationElement = document.createElement('p');
        pDurationElement.textContent = `Duration: ${durationElement.value}`;

        let pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${dateElement.value}`;

        let pCaloriesElement = document.createElement('p');
        pCaloriesElement.textContent = `Calories: ${caloriesElement.value}`;

        let divButtonContainer = document.createElement('div');
        divButtonContainer.setAttribute('class', 'btn-container');

        let editButtonElement = document.createElement('button');
        editButtonElement.setAttribute('class', 'edit-btn');
        editButtonElement.textContent = 'Edit';

        let nextButtonElement = document.createElement('button');
        nextButtonElement.setAttribute('class', 'next-btn');
        nextButtonElement.textContent = 'Next';

        articleElement.appendChild(pActivityElement);
        articleElement.appendChild(pIntensityElement);
        articleElement.appendChild(pDurationElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(pCaloriesElement);

        divButtonContainer.appendChild(editButtonElement);
        divButtonContainer.appendChild(nextButtonElement);

        liPreviewActivityElement.appendChild(articleElement);
        liPreviewActivityElement.appendChild(divButtonContainer);

        let type = typeElement.value;
        let intensity = intensityElement.value;
        let calories = caloriesElement.value;
        let duration = durationElement.value;
        let date = dateElement.value;

          typeElement.value = '';
          intensityElement.value = '';
          caloriesElement.value = '';
          durationElement.value = '';
          dateElement.value = ''; 

        ulPreviewActivityElement.appendChild(liPreviewActivityElement);

        addActivityButton.disabled = true;

        editButtonElement.addEventListener('click', () => {

          typeElement.value = type;
          intensityElement.value = intensity;
          caloriesElement.value =  calories;
          durationElement.value = duration;
          dateElement.value = date; 

          liPreviewActivityElement.remove();
          addActivityButton.disabled = false;

        })

        nextButtonElement.addEventListener('click', () => {

          liPreviewActivityElement.remove();

          let deleteButtonElement = document.createElement('button');
          deleteButtonElement.setAttribute('class', 'delete-btn');
          deleteButtonElement.textContent = 'Delete';

          let trElement = document.createElement('tr');

          let tdTypeCellElement = document.createElement('td');
          tdTypeCellElement.setAttribute('class', 'type-cell');
          tdTypeCellElement.textContent = type;

          let tdDurationCellElement = document.createElement('td');
          tdDurationCellElement.setAttribute('class', 'duration-cell');
          tdDurationCellElement.textContent = duration;

          let tdCaloriesElement = document.createElement('td');
          tdCaloriesElement.setAttribute('class', 'calories-cell');
          tdCaloriesElement.textContent = calories;

          let tdDateCellElement = document.createElement('td');
          tdDateCellElement.setAttribute('class', 'date-cell');
          tdDateCellElement.textContent = date;

          let tdIntensityElement = document.createElement('td');
          tdIntensityElement.setAttribute('class', 'intensity-cell');
          tdIntensityElement.textContent = intensity;

          let tdButtonCellElement = document.createElement('td');
          tdButtonCellElement.setAttribute('class', 'btn-cell');

          tdButtonCellElement.appendChild(deleteButtonElement);

          trElement.appendChild(tdTypeCellElement);
          trElement.appendChild(tdDurationCellElement);
          trElement.appendChild(tdCaloriesElement);
          trElement.appendChild(tdDateCellElement);
          trElement.appendChild(tdIntensityElement);
          trElement.appendChild(tdButtonCellElement);

        addActivityButton.disabled = false;
        tBodyActivitiesTableElement.appendChild(trElement);

        deleteButtonElement.addEventListener('click', () =>{
          trElement.remove();
        })

        })
    })

}
