function toggle() {
    let button = document.querySelector('.button');
    let textEl = document.querySelector('#extra');

    if(button.textContent === 'More'){
        button.textContent = 'Less';
        textEl.style.display = 'block';
    }else{
        button.textContent = 'More';
        textEl.style.display = 'none';
    }
}