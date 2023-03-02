function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = btnCreateEl.nextElementSibling;
const inputEl = btnCreateEl.previousElementSibling;
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
let elementsOfBoxesEl = [];
  let currentSize = 30
  let zIndex = 1;
    for (let i = 0; i < amount; i += 1) {
      const elementOfBoxesEl = document.createElement('div');
      elementOfBoxesEl.style.cssText = `width: ${currentSize}px; height: ${currentSize}px; background-color: ${getRandomHexColor()}; display: inline-block; margin-top: 20px; position: absolute; z-index: ${zIndex}`;
      elementsOfBoxesEl.push(elementOfBoxesEl);
      currentSize += 10;
      zIndex -= 1;
    }
    boxesEl.append(...elementsOfBoxesEl);
  }
  
btnCreateEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
}); 

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

btnDestroyEl.addEventListener('click', destroyBoxes);

