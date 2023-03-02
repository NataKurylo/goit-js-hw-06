function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const btnChangeColorEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');


const handleClick = (event) => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = `${currentColor}`;
  nameColorEl.textContent = `${currentColor}`;
};
 
btnChangeColorEl.addEventListener('click', handleClick);



