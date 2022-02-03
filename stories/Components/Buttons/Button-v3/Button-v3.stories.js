export default {
  title: 'Components/Buttons',
  component: 'Button_version_3',
  argTypes: {
    tag: {
      options: ['a', 'button'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
  }
};

const Template = ({ tag, label }) => {
  let button;

  if (tag === 'button') {
    button = `<button class="button-v3" type="button">
                <span class="button-v3__circle">
                  <span class="button-v3__icon-arrow"></span>
                </span>
                <span class="button-v3__text">${label}</span>
              </button>`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v3">
                <span class="button-v3__circle">
                  <span class="button-v3__icon-arrow"></span>
                </span>
                <span class="button-v3__text">${label}</span>
              </a>`;
  }

  return `${button}`;
};

export const Button_version_3 = Template.bind({});
Button_version_3.args = {
  tag: 'button',
  label: 'Learn More',
};