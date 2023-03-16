import * as utils from '../utilities';

const footer = () => {
  const footer = utils.createNewElement('footer', ['footer']);
  const footerCredentials = utils.createNewElement('div', ['footer__credentials']);
  const credentialsText = utils.createNewElement('span', ['credentials__text'], 'Developed with ♥ by ');
  const credentialsLink = utils.createNewElement('a', ['credentials__link'], 'petrosAth');

  utils.appendChildren([
    [footerCredentials, [credentialsText, credentialsLink]],
    [footer, footerCredentials],
    [document.body, footer],
  ]);
};

export default footer;
