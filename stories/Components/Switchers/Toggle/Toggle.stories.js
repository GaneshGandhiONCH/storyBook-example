export default {
  title: 'Components/Switchers/Toggle',
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
  return `<label class="slide-small-switch">
            <input class="slide-small-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : 'checked'} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="slide-small-switch__toggle">
              <span class="slide-small-switch__toggle-label">${leftText}</span>
              <span class="slide-small-switch__toggle-label">${rightText}</span>
            </span>
            ${withLabel ? `<span class="android-switch__label">${label}</span>` : '' } 
          </label>`;
};

export const Toggle = Template.bind({});
Toggle.args = {
  inputName: 'checkbox-name',
  label: 'Android Switcher',
  leftText: 'On',
  rightText: 'Off',
  checked: false,
  disabled: false,
  withLabel: true,
};