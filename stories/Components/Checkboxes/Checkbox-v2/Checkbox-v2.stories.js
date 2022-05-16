export default {
  title: 'Components/Checkboxes',
  component: 'Checkbox_version_2',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
    labelToRight: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, checked, disabled, withLabel, labelToRight }) => {
  const directionClass = labelToRight ? '' : ' checkbox-v2--reverse'
  return `<label class="checkbox-v2${directionClass}">
            <input class="checkbox-v2__input" 
                  type="checkbox" 
                  name="${inputName}"
                  ${checked ? 'checked' : ''} 
                  ${disabled ? 'disabled' : ''}
            >
            <span class="checkbox-v2__fake-checkbox"></span>
            ${withLabel ? `<span class="checkbox-v2__label">${label}</span>` : ''}
          </label>`;
};

export const Checkbox_version_2 = Template.bind({});
Checkbox_version_2.args = {
  label: 'Include support',
  inputName: 'checkbox',
  checked: false,
  disabled: false,
  withLabel: true,
  labelToRight: true,
};