import * as utils from '../../utilities';
import imageBurger01 from '../../../assets/images/burger-menu-01.jpg';
import imageBurger02 from '../../../assets/images/burger-menu-02.jpg';

const createMenuItem = (title, desc, image) => {
  const menuItem = utils.createNewElement('div', { classes: 'menu__item' });
  const itemImage = utils.createNewElement('img', { classes: 'item__image' }, image);
  const itemDesc = utils.createNewElement('div', { classes: 'item__desc' });
  const itemDescTitle = utils.createNewElement('h2', { classes: 'item__desc__title' }, title);
  const itemDescText = utils.createNewElement('p', { classes: 'item__desc__text' }, desc);

  utils.appendChildren([
    [itemDesc, [itemDescTitle, itemDescText]],
    [menuItem, [itemDesc, itemImage]],
  ]);

  return menuItem;
};

const menu = () => {
  const contentMenu = utils.createNewElement('div', { classes: 'content__menu' });
  const menuItems = [
    createMenuItem(
      'Classic Burger',
      'Our not-so-basic burger topped with shredded parmesan cheese, arugula, bacon and smoky barbecue sauce',
      imageBurger01
    ),
    createMenuItem(
      'Mushroom Swiss Burger',
      'Ten ounces of angus beef topped with melted swiss cheese, pepper, lettuce, bacon and sautéed mushrooms',
      imageBurger02
    ),
  ];

  utils.appendChildren([[contentMenu, [...menuItems]]]);

  return contentMenu;
};

export default menu;
