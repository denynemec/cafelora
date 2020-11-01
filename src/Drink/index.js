import './style.css';

import Layer from '../Layer';

const Drink = ({ id, name, ordered, layers }) => {
  const orderBtn = document.createElement('button');
  orderBtn.className = 'order-btn';
  orderBtn.textContent = 'Objednat';
  orderBtnHandler(orderBtn, ordered);

  const imgElement = document.createElement('img');
  imgElement.src = `/assets/cups/${id}.png`;

  const drinkCupElement = divConstructor('drink__cup', imgElement);

  const h3Element = document.createElement('h3');
  h3Element.textContent = name;

  const drinkInfoElement = divConstructor('drink__info', h3Element);
  drinkInfoElement.innerHTML += getLayersInnerHtml({ layers });

  const drinkProductElement = divConstructor('drink__product', drinkCupElement);
  drinkProductElement.appendChild(drinkInfoElement);

  const drinkElement = divConstructor('drink', drinkProductElement);

  const drinkControlsElement = divConstructor('drink__controls', orderBtn);

  drinkElement.appendChild(drinkControlsElement);

  return drinkElement;
};

const getLayersInnerHtml = ({ layers }) => {
  let layersInnerHtmlString = '';

  layers.forEach((layer) => {
    layersInnerHtmlString += Layer(layer);
  });

  return layersInnerHtmlString;
};

const orderBtnHandler = (orderBtn, ordered) => {
  orderBtn.addEventListener('click', () => {
    const drinkCupElement = document.querySelector('.drink__cup');

    drinkCupElement.classList.toggle('drink__cup--selected');

    if (ordered) {
      orderBtn.textContent = 'Objednat';
    } else {
      orderBtn.textContent = 'Zrušit';
    }

    ordered = !ordered;
  });
};

// util function
// Gets className and child
// Creates div with given class and append child
const divConstructor = (className, child) => {
  const divElement = document.createElement('div');
  divElement.className = className;
  divElement.appendChild(child);

  return divElement;
};
export default Drink;
