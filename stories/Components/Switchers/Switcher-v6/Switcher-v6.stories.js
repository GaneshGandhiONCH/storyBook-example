export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_6',
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
  return `<label class="switcher-v6">
            <input class="switcher-v6__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher-v6__toggle">
              <span class="switcher-v6__toggle-label">${labelOn}</span>
              <span class="switcher-v6__toggle-label">${labelOff}</span>
            </span>   
            ${withLabel ? `<span class="switcher-v6__label">${label}</span>` : ''} 
          </label>`;
};

export const Switcher_version_6 = Template.bind({});
Switcher_version_6.args = {
  label: 'Flip Switcher',
  inputName: 'checkbox-name',
  labelOn: 'on',
  labelOff: 'off',
  checked: true,
  disabled: false,
  withLabel: false,
};