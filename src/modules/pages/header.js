import * as utils from '../utilities';
import logoSvg from '../../assets/images/logo.svg';

const header = () => {
  const header = utils.createEl('header', ['header']);
  const divLogo = utils.createEl('div', ['logo']);
  const imgLogo = utils.createEl('img', ['logo__img'], logoSvg);

  utils.appendCh([
    [divLogo, imgLogo],
    [header, divLogo],
    [document.body, header],
  ]);
};

export default header;
