export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_5',
  argTypes: {
    inputName: { control: 'text' },
    label: { control: 'text' },
    leftText: { control: 'text' },
    rightText: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({inputName, leftText, rightText, checked, disabled, label, withLabel }) => {
  return `<label class="switcher-v5">
            <input class="switcher-v5__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : 'checked'} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="switcher-v5__toggle">
              <span class="switcher-v5__toggle-label">${leftText}</span>
              <span class="switcher-v5__toggle-label">${rightText}</span>
            </span>
            ${withLabel ? `<span class="switcher-v5__label">${label}</span>` : '' } 
          </label>`;
};

export const Switcher_version_5 = Template.bind({});
Switcher_version_5.args = {
  inputName: 'checkbox-name',
  label: 'Android Switcher',
  leftText: 'On',
  rightText: 'Off',
  checked: false,
  disabled: false,
  withLabel: true,
};