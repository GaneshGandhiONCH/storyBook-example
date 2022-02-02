import {initIntlTelInput} from "./initIntlTelInput";

export default {
  title: 'Components/PhoneMasks',
  component: 'PhoneMask_version_2',
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const inputTel = initIntlTelInput('[data-intl-tel-input]');
  }, 0)
})

const Template = () => {
  return `<input type="tel" data-intl-tel-input>`;
};

export const PhoneMask_version_2 = Template.bind({});

window.addEventListener('load', () => {
  const inputTel = initIntlTelInput('[data-intl-tel-input]');
  // inputTel.isValidNumber();
})