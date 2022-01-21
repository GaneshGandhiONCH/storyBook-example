export default {
  title: 'Components/Switchers/Skewed',
  argTypes: {
    label: { control: 'text' },
    labelOn: { control: 'text' },
    labelOff: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

const Template = ({ label, labelOn, labelOff, checked, disabled }) => {
  return `<label class="skewed-switch">
            <input class="skewed-switch__input" type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <span class="skewed-switch__toggle">
              <span class="skewed-switch__toggle-label">${labelOn}</span>
              <span class="skewed-switch__toggle-label">${labelOff}</span>
            </span>   
            <span class="skewed-switch__label">${label}</span>         
          </label>`;
};

export const Skewed = Template.bind({});
Skewed.args = {
  label: 'Skewed Switcher',
  labelOn: 'on',
  labelOff: 'off',
  checked: false,
  disabled: false
};