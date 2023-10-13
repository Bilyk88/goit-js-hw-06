function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

buttonRef.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  spanRef.textContent = color;
  bodyRef.style.backgroundColor = color;

}