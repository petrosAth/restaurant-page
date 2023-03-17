import * as utils from '../../utilities.js';
import home from './home.js';
import menu from './menu.js';
import contactUs from './contactUs.js';

const main = () => {
  const main = utils.createNewElement('main', 'content');

  utils.appendChildren([
    [main, home()],
    [document.body, main],
  ]);
};

const changeMain = (page) => {
  const main = document.querySelector('.content');
  const content = {
    home: () => home(),
    menu: () => menu(),
    contactUs: () => contactUs(),
  };

  main.replaceChildren(content[page]());
};

export { main, changeMain };
