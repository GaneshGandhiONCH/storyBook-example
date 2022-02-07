export default {
  title: 'Components/RadioInputs',
  component: 'Radio_input_version_1',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    inputValue: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
    labelToRight: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, inputValue, checked, disabled, withLabel, labelToRight }) => {
  const directionClass = labelToRight ? '' : ' radio-input-v1--reverse'
  return `<label class="radio-input-v1${directionClass}">
            <input class="radio-input-v1__input" 
                  type="radio" 
                  name="${inputName}"
                  value="${inputValue}"
                  ${checked ? 'checked' : ''} 
                  ${disabled ? 'disabled' : ''}
            >
            <span class="radio-input-v1__fake-radio"></span>
            ${withLabel ? `<span class="radio-input-v1__label">${label}</span>` : ''}
          </label>`;
};

export const Radio_input_version_1 = Template.bind({});
Radio_input_version_1.args = {
  label: 'Radio input',
  inputName: 'inputName',
  inputValue: 'inputValue',
  checked: false,
  disabled: false,
  withLabel: true,
  labelToRight: true,
};