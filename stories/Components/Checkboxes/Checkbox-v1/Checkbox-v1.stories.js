export default {
  title: 'Components/Checkboxes',
  component: 'Checkbox_version_1',
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
  const directionClass = labelToRight ? '' : ' checkbox-v1--reverse'
  return `<label class="checkbox-v1${directionClass}">
            <input class="checkbox-v1__input" 
                  type="checkbox" 
                  name="${inputName}"
                  ${checked ? 'checked' : ''} 
                  ${disabled ? 'disabled' : ''}
            >
            <span class="checkbox-v1__fake-checkbox"></span>
            ${withLabel ? `<span class="checkbox-v1__label">${label}</span>` : ''}
          </label>`;
};

export const Checkbox_version_1 = Template.bind({});
Checkbox_version_1.args = {
  label: 'Checkbox',
  inputName: 'frontuha-bratuha',
  checked: false,
  disabled: false,
  withLabel: true,
  labelToRight: true,
};