import * as utils from '../../utilities';
import imageBurgerHome from '../../../assets/images/burger-home.jpg';

const home = () => {
  const contentHome = utils.createNewElement('div', { classes: 'content__home' });
  const homeImage = utils.createNewElement('img', { classes: 'home__image' }, { image: imageBurgerHome });
  const homeOrder = utils.createNewElement('div', { classes: 'home__order' });
  const homeOrderTextFirstLine = utils.createNewElement(
    'p',
    { classes: ['home__order__text', 'text__firstLine'] },
    { text: 'The BEST burger ' }
  );
  const homeOrderTextSecondLine = utils.createNewElement(
    'p',
    { classes: ['home__order__text', 'text__secondLine'] },
    { text: 'in town...' }
  );
  const homeOrderButton = utils.createNewElement(
    'button',
    { classes: ['button', 'home__order__button'], id: 'homeButtonOrder' },
    { text: 'Order now' }
  );

  utils.appendChildren([
    [homeOrder, [homeOrderTextFirstLine, homeOrderTextSecondLine, homeOrderButton]],
    [contentHome, homeImage],
    [contentHome, homeOrder],
  ]);

  return contentHome;
  };

export default home;
