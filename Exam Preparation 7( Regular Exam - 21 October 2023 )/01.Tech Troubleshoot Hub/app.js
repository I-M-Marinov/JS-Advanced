window.addEventListener('load', solution);

function solution() {
  let employeeElement = document.getElementById('employee');
  let categoryElement = document.getElementById('category');
  let urgencyElement = document.getElementById('urgency');
  let teamElement = document.getElementById('team');
  let descriptionElement = document.getElementById('description');

  let addButtonElement = document.getElementById('add-btn');
  const ulPreviewList = document.querySelector('.preview-list');
  const ulPendingList = document.querySelector('.pending-list');
  const ulResolvedList = document.querySelector('.resolved-list');

  addButtonElement.addEventListener('click', () => {
    if(employeeElement.value === '' ||
      categoryElement.value === '' ||
      urgencyElement.value === '' ||
      teamElement.value === '' ||
      descriptionElement.value === ''){
        return;
      }

      let liProblemContentElement = document.createElement('li');
      liProblemContentElement.classList.add('problem-content');

      let articleElement = document.createElement('article');

      let pEmployeeElement = document.createElement('p');
      pEmployeeElement.textContent = `From: ${employeeElement.value}`;

      let pCategoryElement = document.createElement('p');
      pCategoryElement.textContent = `Category: ${categoryElement.value}`;

      let pUrgencyElement = document.createElement('p');
      pUrgencyElement.textContent = `Urgency: ${urgencyElement.value}`;

      let pTeamElementElement = document.createElement('p');
      pTeamElementElement.textContent = `Assigned to: ${teamElement.value}`;

      let pDescriptionElement = document.createElement('p');
      pDescriptionElement.textContent = `Description: ${descriptionElement.value}`;

      let editButtonElement = document.createElement('button');
      editButtonElement.setAttribute('class', 'edit-btn');
      editButtonElement.textContent = 'Edit';

      let continueButtonElement = document.createElement('button');
      continueButtonElement.setAttribute('class', 'continue-btn');
      continueButtonElement.textContent = 'Continue';

      articleElement.appendChild(pEmployeeElement);
      articleElement.appendChild(pCategoryElement);
      articleElement.appendChild(pUrgencyElement);
      articleElement.appendChild(pTeamElementElement);
      articleElement.appendChild(pDescriptionElement);

      liProblemContentElement.appendChild(articleElement);
      liProblemContentElement.appendChild(editButtonElement);
      liProblemContentElement.appendChild(continueButtonElement);

      ulPreviewList.appendChild(liProblemContentElement);

      let employee = employeeElement.value;
      let category = categoryElement.value;
      let urgency = urgencyElement.value;
      let team = teamElement.value;
      let description = descriptionElement.value;

      employeeElement.value = '';
      categoryElement.value = '';
      urgencyElement.value = '';
      teamElement.value = '';
      descriptionElement.value = ''; 

      addButtonElement.disabled = true;

      editButtonElement.addEventListener('click', () => {

        employeeElement.value = employee;
        categoryElement.value = category;
        urgencyElement.value = urgency;
        teamElement.value = team;
        descriptionElement.value = description; 

        liProblemContentElement.remove();
        addButtonElement.disabled = false;

      })

      continueButtonElement.addEventListener('click', () => {

        addButtonElement.disabled = false;

        editButtonElement.remove();
        continueButtonElement.remove();

        let resolveButtonElement = document.createElement('button');
        resolveButtonElement.setAttribute('class', 'resolve-btn');
        resolveButtonElement.textContent = 'Resolved';

        liProblemContentElement.appendChild(resolveButtonElement);

        ulPendingList.appendChild(liProblemContentElement);

        resolveButtonElement.addEventListener('click', () => {
          resolveButtonElement.remove();

          let clearButtonElement = document.createElement('button');
          clearButtonElement.setAttribute('class', 'clear-btn');
          clearButtonElement.textContent = 'Clear';

          liProblemContentElement.appendChild(clearButtonElement);

          ulResolvedList.appendChild(liProblemContentElement);

          clearButtonElement.addEventListener('click', () => {

            liProblemContentElement.remove();

          })
        })

      })

  })
}


    
    
