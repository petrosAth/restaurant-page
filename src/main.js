import './stylesheets/main.scss';
import pageLoad from './modules/pageLoad';

const load = pageLoad;

(() => {
  const menuButtons = {
    Home: 'menuButtonHome',
    Menu: 'menuButtonMenu',
    ContactUs: 'menuButtonContactUs',
  };

  Object.keys(menuButtons).forEach((button) => {
    console.log(button);
    document.querySelector(`#${menuButtons[button]}`).addEventListener('click', () => {
      load(menuButtons[button]);
    });
  });

  return;
})();
