const emailInput = document.querySelector("#email-input");
const emailConfirmInput = document.querySelector("#email-confirmation-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirmation-input");

function createMarkup(markupName, text, parent, attributes = []) {
    const markup = document.createElement(markupName);
    markup.textContent = text;
    parent.appendChild(markup);
    for (const attribute of attributes) {
        for (let key in attribute) {
            markup.setAttribute(key, attribute[key]);
        }
    }
    return markup;
}

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
    const formFieldPassword = document.querySelector("#form-field-password");

    document.querySelectorAll('#form-field-password .message.error')
            .forEach(l => l.remove());

    if (passwordInput.value.length < 12) {
        createMarkup("label", "au moins 12 caractères", formFieldPassword, [{class: 'message error'}])
    }

    if (!passwordInput.value?.match(/[A-Z]/) || !passwordInput.value?.match(/[a-z]/)) {
        createMarkup("label", "au moins une minuscule et une majuscule", formFieldPassword, [{class: 'message error'}])
    }

    if (!passwordInput.value?.match(/[a-zA-Z]/)) {
        createMarkup("label", "au moins une lettre", formFieldPassword, [{class: 'message error'}])
    }

    if (!passwordInput.value?.match(/\d/)) {
        createMarkup("label", "au moins un chiffre", formFieldPassword, [{class: 'message error'}])
    }

    if (!passwordInput.value?.match(/[@$!%*?&_]/)) {
        createMarkup("label", "au moins un caractère spécial", formFieldPassword, [{class: 'message error'}])
    }
}

passwordInput.addEventListener("input", verifyMatchingPasswords);
passwordInput.addEventListener("input", verifyPasswordValidity)
passwordConfirmInput.addEventListener("input", verifyMatchingPasswords);