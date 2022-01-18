export default {
  title: 'Components/Switchers/Material',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

const Template = ({ label, checked, disabled }) => {
  return `<label class="material-switch">
            <input class="material-switch__input" type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <span class="material-switch__label">${label}</span>
          </label>`;
};

export const Material = Template.bind({});
Material.args = {
  label: 'Switcher',
  checked: true,
  disabled: false
};