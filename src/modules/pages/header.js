import * as utils from '../utilities';

const header = () => {
  const header = utils.createNewElement('header', { classes: 'header' });
  const divLogo = utils.createNewElement('div', { classes: 'logo' });

  utils.appendChildren([
    [header, divLogo],
    [document.body, header],
  ]);
};

export default header;
