function validate() {
    const userNameRegex = /(^[A-Za-z\d]{3,20}$)/;
    const passwordRegex = /(^[\w_]{5,15}$)/;
    const emailRegex = /.*@.*\..*/g
    ///(^[\w]+@[\w]+\.[\w]+$)/;

    let isValidInput = true;
    let isChecked = false;

    let usernameField = document.getElementById('username');
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');
    let emailField = document.getElementById('email')
    let companyField = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(usernameField.value);
        console.log(userNameRegex.test(usernameField.value));
        if (!userNameRegex.test(usernameField.value)) {
            isValidInput = false;
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.border = 'none';
        };

        if (!passwordRegex.test(passwordField.value)) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else {
            passwordField.style.border = 'none';
        };

        if (!passwordRegex.test(confirmPasswordField.value)) {
            isValidInput = false;
            confirmPasswordField.style.borderColor = 'red';
        } else {
            confirmPasswordField.style.border = 'none';
        };

        if (passwordField.value != confirmPasswordField.value) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
        } else {
            passwordField.style.border = 'none';
            confirmPasswordField.style.border = 'none';
        }

        if (!emailRegex.test(emailField.value)) {
            isValidInput = false;
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.border = 'none';
        };

        let validDiv = document.getElementById('valid');

        if (isChecked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                isValidInput = false;
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            };
        }

        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';

        }

    });

    document.getElementById('company').addEventListener('change', (e) => {
        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = 'block';

        } else {
            isChecked = false;
            companyField.style.display = 'none';
        }
    })
}
