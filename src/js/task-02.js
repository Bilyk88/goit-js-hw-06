const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const markup = ingredients.map(item => {
  const liItem = document.createElement('li');
  liItem.textContent = item;
  liItem.classList.add('item');
  console.log(liItem);
  return liItem;
  
});

ingredientsList.append(...markup);



