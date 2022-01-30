export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_3',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel }) => {
  return `<label class="switcher-v3">
            <input class="switcher-v3__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher-v3__toggle"></span>
            ${withLabel ? `<span class="switcher-v3__label">${label}</span>` : ''} 
          </label>`;
};

export const Switcher_version_3 = Template.bind({});
Switcher_version_3.args = {
  label: 'Material Switcher',
  inputName: 'checkbox-name',
  checked: true,
  disabled: false,
  withLabel: true,
};