function addItem() {
    let inputEl = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    let listItems = document.getElementById('items');

    newLiElement.textContent = inputEl.value;

    listItems.appendChild(newLiElement);
}