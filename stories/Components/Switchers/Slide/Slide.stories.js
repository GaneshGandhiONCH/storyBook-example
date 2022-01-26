export default {
  title: 'Components/Switchers/Slide',
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
  return `<div class="slide-switch">
            <input class="slide-switch__input" 
                   type="radio" 
                   ${isSecondChecked ? '' : 'checked'} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
                   value="${valueFirstRadioButton}"
                   data-left-slide-switch
            >
            <input class="slide-switch__input" 
                   type="radio" 
                   ${isSecondChecked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="${inputName}"
                   value="${valueSecondRadioButton}"
                   data-right-slide-switch
            >
            <span class="slide-switch__toggle">
              <span class="slide-switch__toggle-label">${leftText}</span>
              <span class="slide-switch__toggle-label">${rightText}</span>
            </span>
          </div>`;
};

export const Slide = Template.bind({});
Slide.args = {
  inputName: 'checkbox-name',
  leftText: 'Month',
  valueFirstRadioButton: 'month-price',
  rightText: 'Year',
  valueSecondRadioButton: 'year-price',
  isSecondChecked: false,
  disabled: false
};