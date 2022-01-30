export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_1',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel }) => {
  return `<label class="switcher_version_1">
            <input class="switcher_version_1__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher_version_1__toggle"></span>
            ${withLabel ? `<span class="switcher_version_1__label">${label}</span>` : '' }            
          </label>`;
};

export const Switcher_version_1 = Template.bind({});
Switcher_version_1.args = {
  label: 'Android Switcher',
  inputName: 'checkbox-name',
  checked: true,
  disabled: false,
  withLabel: true,
};