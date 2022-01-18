export default {
  title: 'Components/Switchers/Flat',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

const Template = ({ label, checked, disabled }) => {
  return `<label class="flat-switch">
            <input class="flat-switch__input" type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <span class="flat-switch__toggle"></span>
            <span class="flat-switch__label">${label}</span>
          </label>`;
};

export const Flat = Template.bind({});
Flat.args = {
  label: 'Flat Switcher',
  checked: false,
  disabled: false
};