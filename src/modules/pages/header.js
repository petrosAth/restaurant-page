import * as utils from '../utilities';

const header = () => {
  const header = utils.createNewElement('header', 'header');
  const divLogo = utils.createNewElement('div', 'logo');

  utils.appendChildren([
    [header, divLogo],
    [document.body, header],
  ]);
};

export default header;
