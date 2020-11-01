import './index.html';
import './style.css';

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
