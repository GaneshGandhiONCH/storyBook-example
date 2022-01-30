export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_7',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    labelOn: { control: 'text' },
    labelOff: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, labelOn, labelOff, checked, disabled, withLabel }) => {
  return `<label class="switcher-v7">
            <input class="switcher-v7__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher-v7__toggle">
              <span class="switcher-v7__toggle-label">${labelOn}</span>
              <span class="switcher-v7__toggle-label">${labelOff}</span>
            </span>   
            ${withLabel ? `<span class="switcher-v7__label">${label}</span>` : ''} 
          </label>`;
};

export const Switcher_version_7 = Template.bind({});
Switcher_version_7.args = {
  label: 'Skewed Switcher',
  inputName: 'checkbox-name',
  labelOn: 'on',
  labelOff: 'off',
  checked: false,
  disabled: false,
  withLabel: true,
};