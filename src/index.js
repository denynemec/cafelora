import './index.html';
import './style.css';

import Layer from './Layer';

// 3
const navigationHandlers = () => {
  const navBtn = document.getElementById('nav-btn');

  const navigationLinks = document.querySelectorAll('a');

  const navElement = document.getElementById('nav');

  const navElmentToggle = () => navElement.classList.toggle('nav-closed');

  navBtn.addEventListener('click', navElmentToggle);

  navigationLinks.forEach((navLink) => {
    navLink.addEventListener('click', navElmentToggle);
  });
};

navigationHandlers();

// 4
const orderHandler = () => {
  const orderBtn = document.querySelector('.order-btn');
  let ordered = false;

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

orderHandler();

// 5
const addLayers = ({ layers }) => {
  const drinkInfoElement = document.querySelector('.drink__info');

  let layersInnerHtmlString = '';

  layers.forEach((layer) => {
    layersInnerHtmlString += Layer(layer);
  });

  drinkInfoElement.innerHTML += layersInnerHtmlString;
};

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

addLayers({ layers });
