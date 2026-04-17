'use strict';

const displayMsg = (msg, id, color) => {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    element.textContent = msg;
    element.style.color = color;
};

const validateNameField = (inputId, messageId, label) => {
    const value = document.getElementById(inputId).value.trim();

    if (!value) {
        displayMsg(`${label} is mandatory.`, messageId, 'red');
        return false;
    }

    if (!/^[A-Za-z]{2,}$/.test(value)) {
        displayMsg(`${label} must contain at least 2 letters only.`, messageId, 'red');
        return false;
    }

    displayMsg('', messageId, 'green');
    return true;
};

const fnameValidate = () => validateNameField('fname', 'fnameMsg', 'First name');
const lnameValidate = () => validateNameField('lname', 'lnameMsg', 'Last name');

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

const phoneValidate = () => {
    const phone = document.getElementById('phone').value.trim();

    if (!phone) {
        displayMsg('Phone number is mandatory.', 'phoneMsg', 'red');
        return false;
    }

    if (!/^(?:\+977[- ]?)?9\d{9}$/.test(phone)) {
        displayMsg('Use a valid Nepal mobile number (e.g. 98XXXXXXXX or +97798XXXXXXXX).', 'phoneMsg', 'red');
        return false;
    }

    displayMsg('', 'phoneMsg', 'green');
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

const validForm = () => {
    return fnameValidate() && lnameValidate() && emailValidate() && phoneValidate() && pwdValidate();
};
