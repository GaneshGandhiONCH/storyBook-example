export default {
  title: 'Components/Switchers',
  component: 'Switcher_version_4',
  argTypes: {
    inputName: { control: 'text' },
    leftText: { control: 'text' },
    valueFirstRadioButton: { control: 'text' },
    rightText: { control: 'text' },
    valueSecondRadioButton: { control: 'text' },
    isSecondChecked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

const Template = ({
    inputName,
    leftText,
    valueFirstRadioButton,
    rightText,
    valueSecondRadioButton,
    isSecondChecked, disabled
}) => {
  return `<div class="switcher-v4">
            <input class="switcher-v4__input" 
                   type="radio" 
                   ${isSecondChecked ? '' : 'checked'} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
                   value="${valueFirstRadioButton}"
                   data-left-switcher-v4
            >
            <input class="switcher-v4__input" 
                   type="radio" 
                   ${isSecondChecked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
                   value="${valueSecondRadioButton}"
                   data-right-switcher-v4
            >
            <span class="switcher-v4__toggle">
              <span class="switcher-v4__toggle-label">${leftText}</span>
              <span class="switcher-v4__toggle-label">${rightText}</span>
            </span>
          </div>`;
};

export const Switcher_version_4 = Template.bind({});
Switcher_version_4.args = {
  inputName: 'radiobutton-name',
  leftText: 'Month',
  valueFirstRadioButton: 'month-price',
  rightText: 'Year',
  valueSecondRadioButton: 'year-price',
  isSecondChecked: false,
  disabled: false
};