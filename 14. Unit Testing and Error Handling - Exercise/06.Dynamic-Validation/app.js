function validate() {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputElement = document.getElementById('email');

    inputElement.addEventListener('change', () => {

        if(!regEx.test(inputElement.value)) {
            inputElement.classList.add('error')
        } else {
            inputElement.removeAttribute('class')
        }
    })
}
