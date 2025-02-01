function validate() {
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    const confirmPasswordElement = document.getElementById('confirm-password');
    const companyCheckboxElement = document.getElementById('company');
    const submitElement = document.getElementById('submit');
    const companyInfoElement = document.getElementById('companyInfo');
    const companyNumberElement = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');
 
    companyCheckboxElement.addEventListener('change', companyInput);
    function companyInput() {
        if(companyCheckboxElement.checked){
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    }
 
    submitElement.addEventListener('click', validateInputs);
    function validateInputs(event) {
        event.preventDefault();
        let isValid = true;
        const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        const passwordRegex = /^\w{5,15}$/;
        const emailRegex = /^.*@.*\..*$/;
        const companyRegex = /^[1-9][0-9][0-9][0-9]$/;
 
        testInput(usernameElement, usernameRegex);
        testInput(emailElement, emailRegex);

        if (passwordMatch()){
            testInput(passwordElement, passwordRegex);
            testInput(confirmPasswordElement, passwordRegex);
        }
        if (companyCheckboxElement.checked) {
            testInput(companyNumberElement, companyRegex);
        }
        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }

        function testInput(input, validator) {
            if (!validator.test((input.value)) || input.value == '') {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        }
        
        function passwordMatch() {
            if (passwordElement.value !== confirmPasswordElement.value) {
                isValid = false;
                passwordElement.style.borderColor = 'red';
                confirmPasswordElement.style.borderColor = 'red';
                return false;
            } else {
                passwordElement.style.borderColor = 'none';
                confirmPasswordElement.style.borderColor = 'none';
                return true;
            }
        }
    }
}