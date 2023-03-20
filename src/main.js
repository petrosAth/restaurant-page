import './stylesheets/main.scss';
import pageLoad from './modules/pageLoad';

const orderButton = (setMain) => {
  const orderButton = document.querySelector('#homeButtonOrder');

  orderButton.addEventListener('click', () => {
    setMain('menuButtonContactUs');
  });
};

const menuButtons = (setMain) => {
  const buttonsID = {
    home: 'menuButtonHome',
    menu: 'menuButtonMenu',
    contactUs: 'menuButtonContactUs',
  };

  Object.keys(buttonsID).forEach((page) => {
    document.querySelector(`#${buttonsID[page]}`).addEventListener('click', () => {
      setMain(buttonsID[page]);
      if (page === 'home') {
        orderButton(setMain);
      }
    });
  });
};

(() => {
  const setMain = pageLoad;

  menuButtons(setMain);
  orderButton(setMain);
})();
