import * as utils from '../../utilities';

const createFormElement = (element, id, name, required, placeholder, type) => {
  if (id) {
    element.setAttribute('id', id);
  }
  if (name) {
    element.setAttribute('name', name);
  }
  if (required) {
    element.setAttribute('required', required);
  }
  if (placeholder) {
    element.setAttribute('placeholder', placeholder);
  }
  if (type) {
    element.setAttribute('type', type);
  }

  return element;
};

const contactUs = () => {
  const contentContactUs = utils.createNewElement('div', { classes: 'content__contact-us' });
  const contactUsTitle = utils.createNewElement('h2', { classes: 'contact-us__title' }, 'Get in touch');
  const contactUsContainer = utils.createNewElement('div', { classes: 'contact-us__container' });
  const contactUsContact = utils.createNewElement('div', { classes: 'contact-us__contact' });
  const contactAddress = utils.createNewElement('div', { classes: 'contact__address' });
  const addressTitle = utils.createNewElement('h3', { classes: 'address__title' }, 'Address');
  const addressText = utils.createNewElement(
    'p',
    { classes: 'address__text' },
    '12 Street, City Name, ZIP Code, Country'
  );
  const contactPhone = utils.createNewElement('div', { classes: 'contact__phone' });
  const phoneTitle = utils.createNewElement('h3', { classes: 'phone__title' }, 'Phone Number');
  const phoneText = utils.createNewElement('p', { classes: 'phone__text' }, '+1 234 567 890');
  const contactEmail = utils.createNewElement('div', { classes: 'contact__email' });
  const emailTitle = utils.createNewElement('h3', { classes: 'email__title' }, 'Email Address');
  const emailText = utils.createNewElement('p', { classes: 'email__text' }, 'contact@thebest.burger');
  const contactUsBooking = utils.createNewElement('div', { classes: 'contact-us__booking' });
  const bookingForm = utils.createNewElement('form', { classes: 'booking__form' });
  const formPersonalDetails = utils.createNewElement('div', { classes: 'form__personal-details' });
  const formName = utils.createNewElement('div', { classes: 'form__name' });
  const formNameLabel = utils.createNewElement('label', { classes: 'form__name' });
  const formNameInput = createFormElement(
    utils.createNewElement('input'),
    'form__name',
    'name',
    'required',
    'Your Name',
    'text'
  );
  const formEmail = utils.createNewElement('div', { classes: 'form__email' });
  const formEmailLabel = utils.createNewElement('label', { classes: 'form__email' });
  const formEmailInput = createFormElement(
    utils.createNewElement('input'),
    'form__email',
    'email',
    'required',
    'Your Email',
    'text'
  );
  const formSubject = utils.createNewElement('div', { classes: 'form__subject' });
  const formSubjectLabel = utils.createNewElement('label', { classes: 'form__subject' });
  const formSubjectInput = createFormElement(
    utils.createNewElement('input'),
    'form__subject',
    'subject',
    'required',
    'Subject',
    'text'
  );
  const formMessage = utils.createNewElement('div', { classes: 'form__message' });
  const formMessageLabel = utils.createNewElement('label', { classes: 'form__message' });
  const formMessageInput = createFormElement(
    utils.createNewElement('textarea'),
    'form__message',
    'message',
    'required',
    'Message'
  );
  const formButtonContainer = utils.createNewElement('div', { classes: 'form__button-container' });
  const formButton = utils.createNewElement('button', { classes: ['button', 'form__button'] }, 'Place an Order');

  utils.appendChildren([
    [contactAddress, [addressTitle, addressText]],
    [contactPhone, [phoneTitle, phoneText]],
    [contactEmail, [emailTitle, emailText]],
    // [contactFollow, []]
    [formName, [formNameLabel, formNameInput]],
    [formEmail, [formEmailLabel, formEmailInput]],
    [formSubject, [formSubjectLabel, formSubjectInput]],
    [formMessage, [formMessageLabel, formMessageInput]],
    [formButtonContainer, formButton],
    [formPersonalDetails, [formName, formEmail]],
    [bookingForm, [formPersonalDetails, formSubject, formMessage, formButtonContainer]],
    [contactUsBooking, bookingForm],
    [contactUsContact, [contactAddress, contactPhone, contactEmail]],
    [contactUsContainer, [contactUsContact, contactUsBooking]],
    [contentContactUs, [contactUsTitle, contactUsContainer]],
  ]);

  return contentContactUs;
};

export default contactUs;
