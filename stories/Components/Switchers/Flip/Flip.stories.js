export default {
  title: 'Components/Switchers/Flip',
  argTypes: {
    label: { control: 'text' },
    inputName: { control: 'text' },
    labelOn: { control: 'text' },
    labelOff: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    withLabel: { control: 'boolean' },
  }
};

const Template = ({ label, inputName, labelOn, labelOff, checked, disabled, withLabel }) => {
  return `<label class="flip-switch">
            <input class="flip-switch__input" 
                   type="checkbox" 
                   ${checked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
            >
            <span class="flip-switch__toggle">
              <span class="flip-switch__toggle-label">${labelOn}</span>
              <span class="flip-switch__toggle-label">${labelOff}</span>
            </span>   
            ${withLabel ? `<span class="flip-switch__label">${label}</span>` : ''} 
          </label>`;
};

export const Flip = Template.bind({});
Flip.args = {
  label: 'Flip Switcher',
  inputName: 'checkbox-name',
  labelOn: 'on',
  labelOff: 'off',
  checked: true,
  disabled: false,
  withLabel: false,
};