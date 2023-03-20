import * as utils from '../utilities';

const nav = () => {
  const nav = utils.createNewElement('nav', { classes: 'nav-menu' });
  const ul = utils.createNewElement('ul', { classes: 'nav-menu__container' });
  const listHome = utils.createNewElement('li', { classes: 'nav-menu__option' });
  const buttonHome = utils.createNewElement(
    'button',
    { classes: ['button', 'nav-menu__button', 'nav-menu__button__home'], id: 'menuButtonHome' },
    'home'
  );
  const listMenu = utils.createNewElement('li', { classes: 'nav-menu__option' });
  const buttonMenu = utils.createNewElement(
    'button',
    { classes: ['button', 'nav-menu__button', 'nav-menu__button__menu'], id: 'menuButtonMenu' },
    'menu'
  );
  const listContactUs = utils.createNewElement('li', { classes: 'nav-menu__option' });
  const buttonContactUs = utils.createNewElement(
    'button',
    { classes: ['button', 'nav-menu__button', 'nav-menu__button__contactUs'], id: 'menuButtonContactUs' },
    'contact us'
  );

  utils.appendChildren([
    [listHome, buttonHome],
    [listMenu, buttonMenu],
    [listContactUs, buttonContactUs],
    [ul, [listHome, listMenu, listContactUs]],
    [nav, ul],
    [document.body, nav],
  ]);
};

export default nav;
