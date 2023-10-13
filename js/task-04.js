const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onClickDecrement);
incrementBtn.addEventListener('click', onClickIncrement);

function onClickDecrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
    
}

function onClickIncrement() {
    counterValue += 1;
    counter.textContent = counterValue;
}





