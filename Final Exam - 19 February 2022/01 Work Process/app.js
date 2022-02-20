function solve() {
    let firstNameField = document.getElementById('fname');
    let lastNameField = document.getElementById('lname');
    let emailField = document.getElementById('email');
    let dateOfBirthField = document.getElementById('birth');
    let positionField = document.getElementById('position');
    let salaryField = document.getElementById('salary');

    let budgetSum = document.getElementById('sum');

    let tableSection = document.getElementById('tbody');

    let buttonHireWorker = document.getElementById('add-worker');

    buttonHireWorker.addEventListener('click', hireWorker);

    let salarySum = 0;

    function hireWorker(e){
        e.preventDefault();

        if(firstNameField.value !== '' && lastNameField.value !== ''
        && emailField.value !== '' && dateOfBirthField.value !== ''
        && positionField.value !== '' && salaryField.value !== ''){

            let tableTr = document.createElement('tr');
            tableTr.innerHTML = `<td>${firstNameField.value}</td>
            <td>${lastNameField.value}</td>
            <td>${emailField.value}</td>
            <td>${dateOfBirthField.value}</td>
            <td>${positionField.value}</td>
            <td>${Number(salaryField.value)}</td>
            <td><button class='fired'>Fired</button><button class='edit'>Edit</button></td>`;

            tableSection.appendChild(tableTr);

            salarySum += Number(salaryField.value);
            budgetSum.textContent = salarySum.toFixed(2);

            firstNameField.value = '';
            lastNameField.value = '';
            emailField.value = '';
            dateOfBirthField.value = '';
            positionField.value = '';
            salaryField.value = '';

            let editButton = tableTr.querySelector('button.edit');
            let fireButton = tableTr.querySelector('button.fired');

            editButton.addEventListener('click', editWorker);
            fireButton.addEventListener('click', fireWorker);
        }
    }

    function editWorker(e){
        let fullInfo = Array.from(e.target.parentElement.parentElement.querySelectorAll('td'));
        let firstName = fullInfo[0].innerHTML;
        let lastName = fullInfo[1].innerHTML;
        let email = fullInfo[2].innerHTML;
        let dateOfBirth = fullInfo[3].innerHTML;
        let position = fullInfo[4].innerHTML;
        let salary = fullInfo[5].innerHTML;

        firstNameField.value = firstName;
        lastNameField.value = lastName;
        emailField.value = email;
        dateOfBirthField.value = dateOfBirth;
        positionField.value = position;
        salaryField.value = salary;

        salarySum -= Number(salary);
        budgetSum.textContent = salarySum.toFixed(2);

        e.target.parentElement.parentElement.remove();
    }

    function fireWorker(e){
        let fullInfo = Array.from(e.target.parentElement.parentElement.querySelectorAll('td'));
        let salary = fullInfo[5].innerHTML;

        salarySum -= Number(salary);
        budgetSum.textContent = salarySum.toFixed(2);

        e.target.parentElement.parentElement.remove();
    }

}
solve()