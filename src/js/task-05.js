const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputName);

function inputName() {
    outputRef.textContent = inputRef.value;
}
    