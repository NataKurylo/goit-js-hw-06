const categoriesEl = document.querySelectorAll('.item');;
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(category => {
  const categoryEl = category.firstElementChild.textContent;
  console.log('Category:', categoryEl);
  const numberOfElementsEl = category.lastElementChild.children.length;
  console.log('Elements:', numberOfElementsEl);
  // ---------------чи можна це зробити так (без змінних)?------------------
  // console.log('Category:', category.firstElementChild.textContent);
  // console.log('Elements:', category.lastElementChild.children.length);
})