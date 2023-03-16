import * as utils from '../utilities';

const nav = () => {
  const nav = utils.createNewElement('nav', 'menu');
  const ul = utils.createNewElement('ul', 'menu__container');
  const liHome = utils.createNewElement('li', 'menu__option');
  const btnHome = utils.createNewElement('button', ['button', 'menu__button__home'], 'home');
  const liMenu = utils.createNewElement('li', 'menu__option');
  const btnMenu = utils.createNewElement('button', ['button', 'menu__button__menu'], 'menu');
  const liContact = utils.createNewElement('li', 'menu__option');
  const btnContact = utils.createNewElement('button', ['button', 'menu__button__contact'], 'contact us');

  utils.appendChildren([
    [liHome, btnHome],
    [liMenu, btnMenu],
    [liContact, btnContact],
    [ul, [liHome, liMenu, liContact]],
    [nav, ul],
    [document.body, nav],
  ]);
};

export default nav;
