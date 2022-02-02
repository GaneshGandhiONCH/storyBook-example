import {phoneMask} from './phoneMask';

export default {
  title: 'Components/PhoneMasks',
  component: 'PhoneMask_version_1',
  argTypes: {
    mask: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    inputName: { control: 'text' },
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    phoneMask();
  }, 0)
})

const Template = ({ mask, label, inputName, value, disabled }) => {
  return `<label class="textfield-v2">
              <input class="textfield-v2__field"
                    type="tel"
                    name="${inputName}" 
                    value="${value}"
                    placeholder=" " 
                    ${disabled ? 'disabled' : ''}
                    data-phone-mask="${mask}"
                  >
              <span class="textfield-v2__label">${label}</span>
          </label>`;
};

export const PhoneMask_version_1 = Template.bind({});
PhoneMask_version_1.args = {
  mask: '+38 (0__) ___ __ __',
  label: 'Enter phone',
  value: '',
  inputName: 'user-phone',
  disabled: false,
};

window.addEventListener('load', () => {
  phoneMask();
})