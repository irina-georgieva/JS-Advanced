function focused() {
    let sectionElements = document.querySelector('div').children;
    let sections = Array.from(sectionElements);

    for (const section of sections) {
        let inputField = section.children[1];
        
        inputField.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.classList = 'focused';
        });

        inputField.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.classList = '';
        });
    }   

}