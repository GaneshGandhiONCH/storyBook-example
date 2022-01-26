export default {
  title: 'Components/Switchers/Material',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel }) => {
  return `<label class="material-switch">
            <input class="material-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="material-switch__toggle"></span>
            ${withLabel ? `<span class="material-switch__label">${label}</span>` : ''} 
          </label>`;
};

export const Material = Template.bind({});
Material.args = {
  label: 'Material Switcher',
  inputName: 'checkbox-name',
  checked: true,
  disabled: false,
  withLabel: true,
};