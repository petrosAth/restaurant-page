import './stylesheets/main.scss';
import pageLoad from './modules/pageLoad';

const load = pageLoad;

(() => {
  const menuButtons = {
    btnHome: '.nav-menu__button__home',
    btnMenu: '.nav-menu__button__menu',
    btnContact: '.nav-menu__button__contactUs',
  };

  Object.keys(menuButtons).forEach((button) => {
    const btn = menuButtons[button];
    document.querySelector(btn).addEventListener('click', () => {
      load(btn.replace('.nav-menu__button__', ''));
    });
  });

  return;
})();
