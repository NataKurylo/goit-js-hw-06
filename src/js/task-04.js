const counterEl = document.querySelector('span');
const btnDecrementEl = counterEl.previousElementSibling;
const btnIncrementEl = counterEl.nextElementSibling;

let counterValue = 0

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});
btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
});