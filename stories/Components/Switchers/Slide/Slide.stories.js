export default {
  title: 'Components/Switchers/Slide',
  argTypes: {
    leftText: { control: 'text' },
    rightText: { control: 'text' },
    isSecondChecked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

const Template = ({ leftText, rightText, isSecondChecked, disabled }) => {
  return `<div class="slide-switch">
            <input class="slide-switch__input" 
                   type="radio" 
                   ${isSecondChecked ? '' : 'checked'} 
                   ${disabled ? 'disabled' : ''}
                   name="period-price"
                   value="month-price"
                   data-left-slide-switch
            >
            <input class="slide-switch__input" 
                   type="radio" 
                   ${isSecondChecked ? 'checked' : ''} 
                   ${disabled ? 'disabled' : ''}
                   name="period-price"
                   value="year-price"
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
  leftText: 'Month',
  rightText: 'Year',
  isSecondChecked: false,
  disabled: false
};