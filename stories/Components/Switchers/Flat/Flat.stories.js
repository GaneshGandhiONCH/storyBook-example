export default {
  title: 'Components/Switchers/Flat',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, checked, disabled, withLabel }) => {
  return `<label class="flat-switch">
            <input class="flat-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="checkbox-name"
            >
            <span class="flat-switch__toggle"></span>
            ${withLabel ? `<span class="flat-switch__label">${label}</span>` : ''} 
          </label>`;
};

export const Flat = Template.bind({});
Flat.args = {
  label: 'Flat Switcher',
  checked: false,
  disabled: false,
  withLabel: true,
};