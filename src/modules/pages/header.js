import * as utils from '../utilities';
import logoSvg from '../../assets/images/logo.svg';

const header = () => {
  const header = utils.createEl('header', ['header']);
  const logo = utils.createEl('div', ['logo']);
  const logo__img = utils.createEl('img', ['logo__img'], logoSvg);

  utils.appendCh([
    [logo, logo__img],
    [header, logo],
    [document.body, header],
  ]);
};

export default header;
