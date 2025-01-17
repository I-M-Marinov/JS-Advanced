function extract(content) {

    const contentElement = document.getElementById(content);

    const result = [];
    let temp = '';
    let inParentheses = false;
    let text = contentElement.textContent;

    for (const char of text) {
        if (char === '(') {
            inParentheses = true; 
            temp = ''; 
        } else if (char === ')') {
            if (inParentheses) {
                result.push(temp); 
                inParentheses = false; 
            }
        } else if (inParentheses) {
            temp += char; 
        }
    }

    return result.join('; ');
}

console.log(extract('content'));
