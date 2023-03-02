const inputEl = document.querySelector('input');
const textEl = document.querySelector('#text');
 
const handleFontSizeInput = (event) => {
    const currentFontSize = event.currentTarget.value + 'px';
    textEl.style.cssText = `font-size: ${currentFontSize}`;
};

inputEl.addEventListener('input', handleFontSizeInput);