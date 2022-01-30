export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_2',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel }) => {
  return `<label class="switcher-v-2">
            <input class="switcher-v-2__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher-v-2__toggle"></span>
            ${withLabel ? `<span class="switcher-v-2__label">${label}</span>` : ''} 
          </label>`;
};

export const Switcher_version_2 = Template.bind({});
Switcher_version_2.args = {
  label: 'Flat Switcher',
  inputName: 'checkbox-name',
  checked: false,
  disabled: false,
  withLabel: true,
};