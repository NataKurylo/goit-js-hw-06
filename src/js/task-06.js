const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', (event) => {
  inputEl.classList.add('invalid');
    if (event.currentTarget.value.trim().length === Number(inputEl.dataset.length)) {
      inputEl.classList.replace('invalid', 'valid');
  } 
});