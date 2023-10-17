const inputRef = document.querySelector('#validation-input');

const passwordLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', verifyPassword);

function verifyPassword() {

    if (inputRef.value.trim().length !== passwordLength) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
        
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }

}