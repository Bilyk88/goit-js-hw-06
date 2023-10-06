const inputRef = document.querySelector('#validation-input');

const passwordLength = Number(inputRef.dataset.length);
console.log(typeof (passwordLength));

inputRef.addEventListener('blur', verifyPassword);

function verifyPassword() {
    console.log(inputRef.value.length);

    if (inputRef.value.length < passwordLength) {
        inputRef.classList.add('invalid');
        
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }

}