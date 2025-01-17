function editElement(element, match, replacer) {

    const parts = element.textContent.split(match);
    element.textContent = parts.join(replacer);
}