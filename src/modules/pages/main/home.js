import * as utils from '../../utilities';
import imageBurgerHome from '../../../assets/images/burger-home.jpg';

const home = () => {
  const contentHome = utils.createNewElement('div', 'content__home');
  const homeImage = utils.createNewElement('img', 'home__image', imageBurgerHome);
  const homeBooking = utils.createNewElement('div', 'home__booking');
  const homeBookingTextFirstLine = utils.createNewElement(
    'p',
    ['home__booking__text', 'text__firstLine'],
    'The BEST burger '
  );
  const homeBookingTextSecondLine = utils.createNewElement(
    'p',
    ['home__booking__text', 'text__secondLine'],
    'in town...'
  );
  const homeBookingButton = utils.createNewElement('button', ['button', 'home__booking__button'], 'Order now');

  utils.appendChildren([
    [homeBooking, [homeBookingTextFirstLine, homeBookingTextSecondLine, homeBookingButton]],
    [contentHome, homeImage],
    [contentHome, homeBooking],
  ]);

  return contentHome;
};

export default home;
