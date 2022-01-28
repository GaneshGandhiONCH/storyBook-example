export default {
  title: 'Components/Buttons',
  component: 'Button',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'a'],
      control: { type: 'select' }
    },
  }
};

const Template = ({ label, tag }) => {
  let button;

  if (tag === 'a') {
    button = `<a href="#!" class="button-v3">
                <span class="button-v3__circle">
                  <span class="button-v3__icon-arrow"></span>
                </span>
                <span class="button-v3__text">${label}</span>
              </a>`;
  }
  else if (tag === 'button') {
    button = `<button class="button-v3" type="button">
                <span class="button-v3__circle">
                  <span class="button-v3__icon-arrow"></span>
                </span>
                <span class="button-v3__text">${label}</span>
              </button>`;
  }

  return button;
};

export const Button_version_3 = Template.bind({});
Button_version_3.args = {
  label: 'Learn More',
  tag: 'button',
};