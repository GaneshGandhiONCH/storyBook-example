import {phoneMask} from './phone-mask';

export default {
  title: 'Components/InputMasks',
  component: 'PhoneMask_version_1',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    inputName: { control: 'text' },
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    phoneMask('[data-phone-mask]', '+38 (0', '+38 (0__) ___ __ __');
  }, 0)
})

const Template = ({ label, inputName, value, disabled }) => {
  return `<label class="textfield-v2">
              <input class="textfield-v2__field"
                    type="text"
                    name="${inputName}" 
                    value="${value}"
                    placeholder=" " 
                    ${disabled ? 'disabled' : ''}
                    data-phone-mask
                  >
              <span class="textfield-v2__label">${label}</span>
          </label>`;
};

export const PhoneMask_version_1 = Template.bind({});
PhoneMask_version_1.args = {
  label: 'Enter your phone',
  value: '',
  inputName: 'user-phone',
  disabled: false,
};

window.addEventListener('load', () => {
  phoneMask('[data-phone-mask]', '+38 (', '+38 (___) ___ __ __');
})