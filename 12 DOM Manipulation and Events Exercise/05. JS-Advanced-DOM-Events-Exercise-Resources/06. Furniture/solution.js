function solve() {
  let [inputField, outputField] = document.querySelectorAll('textarea');
  let [generateButton, buyButton] = document.querySelectorAll('button');

  const table = document.querySelector('tbody');
  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  let inputOfficeChair = document.querySelector('input');
  inputOfficeChair.disabled = false;

  function generate() {
    let textInput = JSON.parse(inputField.value);

    for (let item of textInput) {
      let row = document.createElement('tr');
      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decCell = document.createElement('td');
      let checkCell = document.createElement('td');

      const img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      const nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      const priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      const decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decCell.appendChild(decP);

      const check = document.createElement('input');
      check.type = 'checkbox';
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decCell);
      row.appendChild(checkCell);

      table.appendChild(row);
    }
    
    //outputField.disabled = false;

  }

  function buy(){
    let furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(b => b.parentElement.parentElement)
    .map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent)
    }));

    let names = [];
    let total = 0;
    let decFactor = 0;

    for (const item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;

    }
    let result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

    outputField.value = result;
  }
}