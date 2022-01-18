export default {
  title: 'Components/Switchers/Android',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

const Template = ({ label, checked, disabled }) => {
  return `<label class="android-switch">
            <input class="android-switch__input" type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <span class="android-switch__toggle"></span>
            <span class="android-switch__label">${label}</span>
          </label>`;
};

export const Android = Template.bind({});
Android.args = {
  label: 'Android',
  checked: true,
  disabled: false
};