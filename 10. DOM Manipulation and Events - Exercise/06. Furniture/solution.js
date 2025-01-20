/* 
You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor. 
When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, and decoration factor (code example below). 
When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, 
separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".
On the next line, print the total price in the format: "Total price: {totalPrice}" (formatted to the second decimal point). 
Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

Input Example
[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]

*/

function solve() {

  const textAreaInputElement = document.querySelector('#exercise textarea:first-of-type');
  const textAreaOutputElement = document.querySelector('#exercise textarea:last-of-type');
  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');
  const furnitureTbodyElement = document.querySelector('.table tbody');



  generateButtonElement.addEventListener('click', (event) => {

    const furnitures = JSON.parse(textAreaInputElement.value);

    for (const furniture of furnitures) {
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imgElement);

      const namePElement = document.createElement('p');
      namePElement.textContent = furniture.name;
      const nameTdElement = document.createElement('td');
      nameTdElement.appendChild(namePElement);

      const pricePElement = document.createElement('p');
      pricePElement.textContent = furniture.price;
      const priceTdElement = document.createElement('td');
      priceTdElement.appendChild(pricePElement);

      const decFactorPElement = document.createElement('p');
      decFactorPElement.textContent = furniture.decFactor;
      const decFactorTdElement = document.createElement('td');
      decFactorTdElement.appendChild(decFactorPElement);

      const markElement = document.createElement('input');
      markElement.setAttribute('type', 'checkbox');
      const markTdElement = document.createElement('td');
      markTdElement.appendChild(markElement);

      const furnitureTrElement = document.createElement('tr');
      furnitureTrElement.appendChild(imageTdElement);
      furnitureTrElement.appendChild(nameTdElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decFactorTdElement);
      furnitureTrElement.appendChild(markTdElement);

      furnitureTbodyElement.appendChild(furnitureTrElement);

    }
  });

  buyButtonElement.addEventListener('click', (event) => {

      let totalPrice = 0;
      let totalDecFactor = 0;
      let names = [];

      Array.from(furnitureTbodyElement.children)
      .forEach(furnitureTrElement => {
        const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]');
          if (!markInputElement.checked){
            return;
          }

          const name = furnitureTrElement.children[1].textContent;
          const price =  Number(furnitureTrElement.children[2].textContent);
          const decFactor =  Number(furnitureTrElement.children[3].textContent);

          names.push(name);
          totalPrice += price;
          totalDecFactor += decFactor;
      });

      textAreaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
      textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textAreaOutputElement.textContent += `Average decoration factor: ${totalDecFactor / names.length}`;
  });

}