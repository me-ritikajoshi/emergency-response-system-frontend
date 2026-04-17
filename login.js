'use strict';

const displayMsg = (msg, id, color) => {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    element.textContent = msg;
    element.style.color = color;
};

const emailValidate = () => {
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!email) {
        displayMsg('Email is mandatory.', 'emailMsg', 'red');
        return false;
    }

    if (!emailPattern.test(email)) {
        displayMsg('Please enter a valid email address.', 'emailMsg', 'red');
        return false;
    }

    displayMsg('', 'emailMsg', 'green');
    return true;
};

const pwdValidate = () => {
    const password = document.getElementById('pwd').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$?!]).{8,100}$/;

    if (!password) {
        displayMsg('Password is mandatory.', 'pwdMsg', 'red');
        return false;
    }

    if (!passwordPattern.test(password)) {
        displayMsg('Use 8+ chars with upper, lower, number and @#$?!.', 'pwdMsg', 'red');
        return false;
    }

    displayMsg('Password format looks good.', 'pwdMsg', 'green');
    return true;
};

const validForm = () => emailValidate() && pwdValidate();
