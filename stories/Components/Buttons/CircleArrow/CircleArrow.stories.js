
export default {
  title: 'Components/Buttons/CircleArrow',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'a'],
      control: { type: 'select' }
    },
    size: {
      options: ['', '', ''],
      control: { type: 'select' }
    }
  }
};

const Template = ({ label, tag, size }) => {
  let button;

  if (tag === 'a') {
    button = `<a href="#!" class="circle-arrow-button ${size}">
                <span class="circle-arrow-button__circle">
                  <span class="circle-arrow-button__icon-arrow"></span>
                </span>
                <span class="circle-arrow-button__text">${label}</span>
              </a>`;
  }
  else if (tag === 'button') {
    button = `<button class="circle-arrow-button ${size}" type="button">
                <span class="circle-arrow-button__circle">
                  <span class="circle-arrow-button__icon-arrow"></span>
                </span>
                <span class="circle-arrow-button__text">${label}</span>
              </button>`;
  }

  return button;
};

export const CircleArrow = Template.bind({});
CircleArrow.args = {
  label: 'Learn More',
  tag: 'button',
  size: ''
};