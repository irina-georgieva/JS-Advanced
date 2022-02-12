function solve() {

    let [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    let movieSection = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');
    let clearButton = archiveSection.parentElement.querySelector('button');
    clearButton.addEventListener('click', ()=>{
        archiveSection.innerHTML = '';
    })
    let buttonOnScreen = document.querySelector('#container button');
    buttonOnScreen.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();
        if (name !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            let movie = document.createElement('li');
            movie.innerHTML =
                `<span>${name.value}</span>
                <strong>Hall: ${hall.value}</strong >
                <div>
                    <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
                 </div>`;

            movieSection.appendChild(movie);

            let button = movie.querySelector('div button');
            button.addEventListener('click', addToArchive);
            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function addToArchive(e) {
        let inputValue = e.target.parentElement.querySelector('input');
        let ticketPrice = e.target.parentElement.querySelector('strong');
        let movieName = e.target.parentElement.parentElement.querySelector('span')
        if (inputValue.value !== '' && !isNaN(Number(inputValue.value))) {
            let income = Number(inputValue.value) * Number(ticketPrice.textContent);

            let liElement = document.createElement('li');
            liElement.innerHTML = `
            <span>${movieName.textContent}</span>
            <strong>Total amount: ${income.toFixed(2)}</strong>
            <button>Delete</button>`;

            const button = liElement.querySelector('button');
            button.addEventListener('click', deleteEntrie);
            archiveSection.appendChild(liElement);
        }

        e.target.parentElement.parentElement.remove();
    }

    function deleteEntrie(e){

        e.target.parentElement.remove();
        
    }
}