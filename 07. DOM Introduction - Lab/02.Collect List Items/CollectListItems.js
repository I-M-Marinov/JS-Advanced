function extractText() {

    const ulElements = document.getElementsByTagName('li');
    let resultText = "";
    
    for (let i = 0; i < ulElements.length; i++) {
     
        resultText += `${ulElements[i].textContent}\n`
    }

    const resultElement = document.getElementById('result');

    resultElement.textContent = resultText;
}