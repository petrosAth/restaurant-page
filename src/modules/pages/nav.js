import * as utils from '../utilities';

const nav = () => {
  const nav = utils.createNewElement('nav', 'nav-menu');
  const ul = utils.createNewElement('ul', 'nav-menu__container');
  const liHome = utils.createNewElement('li', 'nav-menu__option');
  const btnHome = utils.createNewElement('button', ['button', 'nav-menu__button'], 'home');
  const liMenu = utils.createNewElement('li', 'nav-menu__option');
  const btnMenu = utils.createNewElement('button', ['button', 'nav-menu__button'], 'menu');
  const liContact = utils.createNewElement('li', 'nav-menu__option');
  const btnContact = utils.createNewElement('button', ['button', 'nav-menu__button'], 'contact us');

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
