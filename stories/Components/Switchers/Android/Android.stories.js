export default {
  title: 'Components/Switchers/Android',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel }) => {
  return `<label class="android-switch">
            <input class="android-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="android-switch__toggle"></span>
            ${withLabel ? `<span class="android-switch__label">${label}</span>` : '' }            
          </label>`;
};

export const Android = Template.bind({});
Android.args = {
  label: 'Android Switcher',
  inputName: 'checkbox-name',
  checked: true,
  disabled: false,
  withLabel: true,
};