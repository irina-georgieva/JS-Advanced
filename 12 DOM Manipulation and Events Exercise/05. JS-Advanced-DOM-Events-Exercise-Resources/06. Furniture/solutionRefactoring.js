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
  
        row.appendChild(createCell('img', {src: item.img}));
        row.appendChild(createCell('p', {}, item.name));
        row.appendChild(createCell('p', {}, item.price));
        row.appendChild(createCell('p', {}, item.decFactor));
        row.appendChild(createCell('input', {type: checkbox}));
  
        table.appendChild(row);
      } 
    }

    function createCell(nestedTag, props, content){
        const cell = document.createElement('td');
        const nested = document.createElement(nestedTag);
        
        for(let prop in props){
            nested[prop] = props[prop];
        }

        if(content){
            nested.textContent = content;
        }

        cell.appendChild(nested);

        return cell;
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