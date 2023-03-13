import * as utils from '../utilities';

const nav = () => {
  const nav = utils.createEl('nav', ['menu']);
  const ul = utils.createEl('ul', ['menu__container']);
  const liHome = utils.createEl('li', ['menu__option']);
  const btnHome = utils.createEl('button', ['button', 'menu__button__home'], 'home');
  const liMenu = utils.createEl('li', ['menu__option']);
  const btnMenu = utils.createEl('button', ['button', 'menu__button__menu'], 'menu');
  const liContact = utils.createEl('li', ['menu__option']);
  const btnContact = utils.createEl('button', ['button', 'menu__button__contact'], 'contact us');

  utils.appendCh([
    [liHome, btnHome],
    [liMenu, btnMenu],
    [liContact, btnContact],
    [ul, [liHome, liMenu, liContact]],
    [nav, ul],
    [document.body, nav],
  ]);
};

export default nav;
