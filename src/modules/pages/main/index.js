import * as utils from '../../utilities.js';
import home from './home.js';
import menu from './menu.js';
import contactUs from './contactUs.js';

const main = () => {
  const main = utils.createNewElement('main', { classes: 'content' });

  utils.appendChildren([
    [main, home()],
    [document.body, main],
  ]);
};

const changeMain = (page) => {
  const main = document.querySelector('.content');
  const content = {
    menuButtonHome: () => home(),
    menuButtonMenu: () => menu(),
    menuButtonContactUs: () => contactUs(),
  };

  main.replaceChildren(content[page]());
};

export { main, changeMain };
