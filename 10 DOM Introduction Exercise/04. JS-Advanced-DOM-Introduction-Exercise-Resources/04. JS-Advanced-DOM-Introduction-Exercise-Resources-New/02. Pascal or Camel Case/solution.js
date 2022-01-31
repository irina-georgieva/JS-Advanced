function solve() {
  let textEl = document.getElementById('text').value;
  let conventionEl = document.getElementById('naming-convention').value;
  let result = '';

  if(conventionEl === 'Camel Case'){
    for(let i = 0; i < textEl.length; i++){
        if(textEl[i] === ' '){
          result += textEl[i+1].toUpperCase();
          i++;
        }else{
          result += textEl[i].toLowerCase();
        }
    }
  }else if(conventionEl === 'Pascal Case'){
    result += textEl[0].toUpperCase();
    for(let i = 1; i < textEl.length; i++){
      if(textEl[i] === ' '){
        result += textEl[i+1].toUpperCase();
        i++;
      }else{
        result += textEl[i].toLowerCase();
      }
  }
  }else{
    result = 'Error!';
  }

  let resultEl = document.getElementById('result');
  resultEl.textContent = result;

}