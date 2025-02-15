window.addEventListener('load', solve);

function solve() {

    let scentTypeElement = document.getElementById('scent-type');
    let budgetElement = document.getElementById('budget');
    let occasionElement = document.getElementById('occasion');
    let brandElement = document.getElementById('brand');
    let skinTypeElement = document.getElementById('skin-type');

    let nextButtonElement = document.querySelector('#next-btn');
    const ulPreferenceListElement = document.querySelector('.preference-list');
    const ulConfirmListElement = document.querySelector('.confirm-list');
    const thanksTextElement  = document.querySelector('#thanks-text');

    nextButtonElement.addEventListener('click', (e) =>{
        e.preventDefault();

        thanksTextElement.textContent = '';

        if (scentTypeElement.value.trim() === "" || 
            budgetElement.value.trim() === "" || 
            occasionElement.value.trim() === "" ||
            brandElement.value.trim() === "" ||
            skinTypeElement.value.trim() === "" 
            ) {
                return;
            }

        let budgetFloat = parseFloat(budgetElement.value);
        if (isNaN(budgetFloat) || budgetFloat < 1) {
            return;
        }

        let liContentElement = document.createElement('li');
        liContentElement.setAttribute('class', 'content');

        let articleElement = document.createElement('article');

        let pScentTypeElement = document.createElement('p');
        pScentTypeElement.textContent = `Scent Type: ${scentTypeElement.value}`;

        let pBudgetElement = document.createElement('p');
        pBudgetElement.textContent = `Budget: ${budgetElement.value} $`;

        let pOccasionElement = document.createElement('p');
        pOccasionElement.textContent = `Occasion: ${occasionElement.value}`;

        let pBrandElementElement = document.createElement('p');
        pBrandElementElement.textContent = `Brand: ${brandElement.value}`;

        let pSkinTypeElementElement = document.createElement('p');
        pSkinTypeElementElement.textContent = `Skin Type: ${skinTypeElement.value}`;

        let editButtonElement = document.createElement('button');
        editButtonElement.setAttribute('class', 'edit-btn');
        editButtonElement.textContent = 'Edit';

        let continueButtonElement = document.createElement('button');
        continueButtonElement.setAttribute('class', 'continue-btn');
        continueButtonElement.textContent = 'Continue';

        articleElement.appendChild(pScentTypeElement);
        articleElement.appendChild(pBudgetElement);
        articleElement.appendChild(pOccasionElement);
        articleElement.appendChild(pBrandElementElement);
        articleElement.appendChild(pSkinTypeElementElement);

        liContentElement.appendChild(articleElement);
        liContentElement.appendChild(editButtonElement);
        liContentElement.appendChild(continueButtonElement);
        
        ulPreferenceListElement.appendChild(liContentElement);

        let scentType = scentTypeElement.value;
        let budget = budgetElement.value;
        let occasion = occasionElement.value;
        let brand = brandElement.value;
        let skinType = skinTypeElement.value;

        scentTypeElement.value = '';
        budgetElement.value = '';
        occasionElement.value = '';
        brandElement.value = '';
        skinTypeElement.value = '';

        nextButtonElement.disabled = true;

            editButtonElement.addEventListener('click', () =>{

                scentTypeElement.value = scentType;
                budgetElement.value = budget;
                occasionElement.value = occasion;
                brandElement.value = brand;
                skinTypeElement.value = skinType;
          
                liContentElement.remove();
                nextButtonElement.disabled = false;
            })

            continueButtonElement.addEventListener('click', () => {

                liContentElement.remove();

                let liConfirmListContentElement = document.createElement('li');
                liConfirmListContentElement.setAttribute('class', 'content');
        
                let articleElement = document.createElement('article');
        
                let pScentTypeElement = document.createElement('p');
                pScentTypeElement.textContent = `Scent Type: ${scentType}`;

                let pBudgetElement = document.createElement('p');
                pBudgetElement.textContent = `Budget: ${budget} $`;

                let pOccasionElement = document.createElement('p');
                pOccasionElement.textContent = `Occasion: ${occasion}`;

                let pBrandElementElement = document.createElement('p');
                pBrandElementElement.textContent = `Brand: ${brand}`;

                let pSkinTypeElementElement = document.createElement('p');
                pSkinTypeElementElement.textContent = `Skin Type: ${skinType}`;

                let confirmButtonElement = document.createElement('button');
                confirmButtonElement.setAttribute('class', 'confirm-btn');
                confirmButtonElement.textContent = 'Confirm';
        
                let cancelButtonElement = document.createElement('button');
                cancelButtonElement.setAttribute('class', 'cancel-btn');
                cancelButtonElement.textContent = 'Cancel';

                articleElement.appendChild(pScentTypeElement);
                articleElement.appendChild(pBudgetElement);
                articleElement.appendChild(pOccasionElement);
                articleElement.appendChild(pBrandElementElement);
                articleElement.appendChild(pSkinTypeElementElement);

                liConfirmListContentElement.appendChild(articleElement);
                liConfirmListContentElement.appendChild(confirmButtonElement);
                liConfirmListContentElement.appendChild(cancelButtonElement);

                ulConfirmListElement.appendChild(liConfirmListContentElement);

                confirmButtonElement.addEventListener('click', () => {

                    liConfirmListContentElement.remove();
                    thanksTextElement.textContent = "Thank you for sharing your preferences!";
                    nextButtonElement.disabled = false;

                })

                cancelButtonElement.addEventListener('click', () => {

                    liConfirmListContentElement.remove();
                    nextButtonElement.disabled = false;
                })
         })
    })

}

    
    
