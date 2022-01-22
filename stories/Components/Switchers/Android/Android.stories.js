export default {
  title: 'Components/Switchers/Android',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, checked, disabled, withLabel }) => {
  return `<label class="android-switch">
            <input class="android-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="checkbox-name"
            >
            <span class="android-switch__toggle"></span>
            ${withLabel ? `<span class="android-switch__label">${label}</span>` : '' }            
          </label>`;
};

export const Android = Template.bind({});
Android.args = {
  label: 'Android Switcher',
  checked: true,
  disabled: false,
  withLabel: true,
};