let firstNameValid = document.getElementById('firstNameValid');
let firstNameInvalid = document.getElementById('firstNameInvalid');
let lastNameValid = document.getElementById('lastNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');
let emailValid = document.getElementById('emailValid');
let emailInvalid = document.getElementById('emailInvalid');
let phoneNumberValid = document.getElementById('phoneNumberValid');
let phoneNumberInvalid = document.getElementById('phoneNumberInvalid');
let stateValid = document.getElementById('stateValid');
let stateInvalid = document.getElementById('stateInvalid');
let zipCodeValid = document.getElementById('zipCodeValid');
let zipCodeInvalid = document.getElementById('zipCodeInvalid');
let checkBoxInvalid = document.getElementById('checkBoxInvalid');

function validate() {
    let firstNameValue = document.getElementById('firstName').value;
    let lastNameValue = document.getElementById('lastName').value;
    let emailValue = document.getElementById('email').value;
    let phoneNumberValue = document.getElementById('phoneNumber').value;
    let stateValue = document.getElementById('state').value;
    let zipCodeValue = document.getElementById('zipCode').value;
    let checkBox = document.getElementById('checkBox').checked;

    if (firstNameValue === '') {
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display = 'none';
    }
    else {
        firstNameValid.style.display = 'block';
        firstNameInvalid.style.display = 'none';
    }

    if (lastNameValue === '') {
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display = 'none';
    }
    else {
        lastNameValid.style.display = 'block';
        lastNameInvalid.style.display = 'none';
    }

    if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.') || emailValue[0] == '@' || emailValue.slice(emailValue.lastIndexOf('.')).length < 3) {
        emailInvalid.style.display = 'block';
        emailValid.style.display = 'none';
    }
    else {
        emailValid.style.display = 'block';
        emailInvalid.style.display = 'none';
    }

    if (phoneNumberValue === '' || phoneNumberValue.length != 10 || Number(phoneNumberValue[0]) < 6) {
        phoneNumberInvalid.style.display = 'block';
        phoneNumberValid.style.display = 'none';
    }
    else {
        phoneNumberValid.style.display = 'block';
        phoneNumberInvalid.style.display = 'none';
    }

    if (stateValue === '') {
        stateInvalid.style.display = 'block';
        stateValid.style.display = 'none';
    }
    else {
        stateValid.style.display = 'block';
        stateInvalid.style.display = 'none';
    }

    if (zipCodeValue === '' || zipCodeValue.length != 6) {
        zipCodeInvalid.style.display = 'block';
        zipCodeValid.style.display = 'none';
    }
    else {
        zipCodeValid.style.display = 'block';
        zipCodeInvalid.style.display = 'none';
    }

    if (checkBox) {
        checkBoxInvalid.style.display = 'none';
    }
    else {
        checkBoxInvalid.style.display = 'block';
    }
}