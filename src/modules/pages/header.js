import * as utils from '../utilities';
import logoSvg from '../../assets/images/logo.svg';

const header = () => {
  const header = utils.createNewElement('header', 'header');
  const divLogo = utils.createNewElement('div', 'logo');
  const imgLogo = utils.createNewElement('img', 'logo__img', logoSvg);

  utils.appendChildren([
    [divLogo, imgLogo],
    [header, divLogo],
    [document.body, header],
  ]);
};

export default header;
