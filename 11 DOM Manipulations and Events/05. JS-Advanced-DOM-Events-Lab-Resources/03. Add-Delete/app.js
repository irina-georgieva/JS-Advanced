function addItem() {
    let inputEl = document.getElementById('newItemText');
    let listItems = document.getElementById('items');
    
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputEl.value;

    inputEl.value = '';

    let deleteElemenet = document.createElement('a');
    deleteElemenet.href = '#';
    deleteElemenet.textContent = '[Delete]';
    deleteElemenet.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newLiElement.appendChild(deleteElemenet);
    listItems.appendChild(newLiElement);
}