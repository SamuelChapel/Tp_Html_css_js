const form = document.querySelector("#form");
const emailInput = document.querySelector("#email-input");
const emailConfirmInput = document.querySelector("#email-confirmation-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirmation-input");
const submitButton = document.querySelector("#submit-btn");

console.log(form, emailInput, emailConfirmInput, passwordInput, passwordConfirmInput, submitButton);

const verifyMatchingEmails = () => {
    if(emailInput.value !== emailConfirmInput.value) {
        document.querySelector("#email-confirmation-message").classList.add('error');
        emailInput.validity.valid = false;
    } else {
        document.querySelector("#email-confirmation-message").classList.remove('error');
    }
};

emailInput.addEventListener("input", verifyMatchingEmails);
emailConfirmInput.addEventListener("input", verifyMatchingEmails);

const verifyMatchingPasswords = () => {
    if(passwordInput.value !== passwordConfirmInput.value) {
        document.querySelector("#password-confirmation-message").classList.add('error');
    } else {
        document.querySelector("#password-confirmation-message").classList.remove('error');
    }
}

const verifyPasswordValidity = () => {
    passwordInput.value;
}

passwordInput.addEventListener("input", verifyMatchingPasswords);
passwordInput.addEventListener("input", verifyPasswordValidity)
passwordConfirmInput.addEventListener("input", verifyMatchingPasswords);