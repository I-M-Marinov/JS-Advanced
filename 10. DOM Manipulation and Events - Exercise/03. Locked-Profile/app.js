/* 
In this problem, you should create a JS functionality that shows and hides the additional information about users.

When one of the [Show more] buttons is clicked, the hidden information inside the div should
be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.

If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working! 
Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.
*/

function lockedProfile() {
    
    const userOneHiddenFieldsElelement = document.getElementById('user1HiddenFields'); // first user hidden field element
    const userTwoHiddenFieldsElelement = document.getElementById('user2HiddenFields'); // second user hidden field element
    const userThreeHiddenFieldsElelement = document.getElementById('user3HiddenFields'); // third user hidden field element

    const userOneLockRadio = document.querySelector('input[name="user1Locked"][value="lock"]'); // lock radio button first user
    const userOneUnlockRadio = document.querySelector('input[name="user1Locked"][value="unlock"]'); // unlock radio button first user

    const userTwoLockRadio = document.querySelector('input[name="user2Locked"][value="lock"]'); // lock radio button second user
    const userTwoUnlockRadio = document.querySelector('input[name="user2Locked"][value="unlock"]'); // unlock radio button second user

    const userThreeLockRadio = document.querySelector('input[name="user3Locked"][value="lock"]'); // lock radio button third user
    const userThreeUnlockRadio = document.querySelector('input[name="user3Locked"][value="unlock"]'); // unlock radio button third user

    const firstButtonElement = document.querySelectorAll('button')[0]; // first button 
    const secondButtonElement = document.querySelectorAll('button')[1]; // second button
    const thirdButtonElement = document.querySelectorAll('button')[2]; // third button 
    
    
    firstButtonElement.addEventListener('click', (event) => {

        if (userOneLockRadio.checked) {
            firstButtonElement.setAttribute('disabled', 'disabled');

        } else if (userOneUnlockRadio.checked) {
            firstButtonElement.removeAttribute('disabled');

            if(firstButtonElement.textContent == "Show more"){
                userOneHiddenFieldsElelement.style.display = 'inline';
                firstButtonElement.textContent = "Hide it";
            } else {
                userOneHiddenFieldsElelement.style.display = 'none';
                firstButtonElement.textContent = "Show more";
            }
        }
        firstButtonElement.removeAttribute('disabled');
    });
    secondButtonElement.addEventListener('click', (event) => {

        if (userTwoLockRadio.checked) {
            secondButtonElement.setAttribute('disabled', 'disabled');
        } else if (userTwoUnlockRadio.checked) {
            secondButtonElement.removeAttribute('disabled');

            if(secondButtonElement.textContent == "Show more"){
                userTwoHiddenFieldsElelement.style.display = 'inline';
                secondButtonElement.textContent = "Hide it";
            } else {
                userTwoHiddenFieldsElelement.style.display = 'none';
                secondButtonElement.textContent = "Show more";
            }
        }
        secondButtonElement.removeAttribute('disabled');
    });
    thirdButtonElement.addEventListener('click', (event) => {

        if (userThreeLockRadio.checked) {
            thirdButtonElement.setAttribute('disabled', 'disabled');
        } else if (userThreeUnlockRadio.checked) {
            thirdButtonElement.removeAttribute('disabled');

            if(thirdButtonElement.textContent == "Show more"){
                userThreeHiddenFieldsElelement.style.display = 'inline';
                thirdButtonElement.textContent = "Hide it";
            } else {
                userThreeHiddenFieldsElelement.style.display = 'none';
                thirdButtonElement.textContent = "Show more";
            } 
        }
        thirdButtonElement.removeAttribute('disabled');
    });
    
}