import * as utils from '../utilities';

const footer = () => {
  const footer = utils.createNewElement('footer', { classes: 'footer' });
  const footerCredentials = utils.createNewElement('div', { classes: 'footer__credentials' });
  const credentialsText = utils.createNewElement('span', { classes: 'credentials__text' }, 'Developed with ♥ by ');
  const credentialsLink = utils.createNewElement('a', { classes: 'credentials__link' }, 'petrosAth');

  utils.appendChildren([
    [footerCredentials, [credentialsText, credentialsLink]],
    [footer, footerCredentials],
    [document.body, footer],
  ]);
};

export default footer;
