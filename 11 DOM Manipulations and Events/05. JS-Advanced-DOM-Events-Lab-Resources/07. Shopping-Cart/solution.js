function solve() {
   let productDetails = document.querySelectorAll('.product');
   let products = Array.from(productDetails);
   let checkoutButton = document.querySelector('.checkout');
   let textArea = document.querySelector('textarea');
   let itemsList = new Set();
   let totalPrice = 0;

   for (const product of products) {
      let currentSection = product.children;
      let productName = currentSection[1].children[0].textContent;
      let addButton = currentSection[2].firstElementChild;
      let productPrice = Number(currentSection[3].textContent);

      addButton.addEventListener('click', function () {
         itemsList.add(productName);
         totalPrice += productPrice;
         textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   let buttons = Array.from(document.querySelectorAll('button'));

   checkoutButton.addEventListener('click', function () {
      buttons.map(x => x.disabled = 'true');
      textArea.value += `You bought ${Array.from(itemsList).join(', ')} for ${totalPrice.toFixed(2)}.`;
   });
}

// function solve() {
//    let productList = Array.from(document.querySelectorAll('.product'));
//    let textArea = document.querySelector('textarea');
//    let checkoutButton = document.querySelector('.checkout');
//    let allButtons = Array.from(document.querySelectorAll('button'));
//    let uniqueItems = new Set();
//    let total = 0;

//    for (const section of productList) {
//       let current = section.children;
//       let product = current[1].children[0].textContent;
//       let button = current[2].firstElementChild;
//       let price = Number(current[3].textContent);

//       button.addEventListener('click', function () {
//          uniqueItems.add(product);
//          textArea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
//          total += price;
//       });

//    }
//    checkoutButton.addEventListener('click', function () {
//       allButtons.map(x => x.disabled = 'true');
//       textArea.value += `You bought ${Array.from(uniqueItems).join(', ')} for ${total.toFixed(2)}.`;
//    });
// }