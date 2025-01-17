function calc() {
    const firstNumElement = document.getElementById('num1');
    const secondNumElement = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    sumElement.value = Number(firstNumElement.value) + Number(secondNumElement.value);

}
