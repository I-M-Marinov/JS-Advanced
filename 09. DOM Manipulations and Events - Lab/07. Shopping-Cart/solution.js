/* 
You will be given some products that you should be able to add to your cart. Each product will have a name, picture, and price.
When the "Add" button is clicked, append the current product to the textarea in the following format: 
"Added {name} for {money} to the cart.\n". 

The price must be fixed to the second digit.

When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart. 
Append the result to the textarea in the following format: 
"You bought {list} for {totalPrice}."

The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.
Also, after clicking over "Checkout" and every from above is done you should disable all buttons.
(You can't add products or checkout again if once the checkout button is clicked).
*/


function solve() {
   
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkOutButton = document.querySelector('button.checkout');
   let totalPrice = 0;
   let uniqueProducts =  {};

   for (const buttonElement of addProductButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', (event) => {
         const productTitle = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent);
         totalPrice += price;
         uniqueProducts[productTitle] = true;

         textAreaElement.textContent += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkOutButton.addEventListener('click', (event) => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));
      event.target.setAttribute('disabled', 'disabled');
      const list = Object.keys(uniqueProducts).join(', ');

      textAreaElement.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
   });

}

