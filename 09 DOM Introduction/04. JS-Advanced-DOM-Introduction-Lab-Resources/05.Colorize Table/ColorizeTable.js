function colorize() {
    // let rowEl = document.querySelectorAll('tr:nth-of-type(2n) td');

    // rowEl.forEach(x => {
    //     x.style.backgroundColor = 'teal';
    // });

    let rowEl = document.getElementsByTagName('tr');
    let rowElArr = Array.from(rowEl);
    rowElArr.forEach((x, i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal';
        }
    })
}