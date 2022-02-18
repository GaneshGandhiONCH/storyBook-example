export default {
  title: 'Components/Buttons',
  component: 'Button_version_5',
  argTypes: {
    tag: {
      options: ['a', 'button'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    size: {
      options: ['button-v5--small', 'button-v5--medium', 'button-v5--large'],
      control: { type: 'select' }
    },
  },
};

const Template = ({ tag, label, size }) => {
  let button;

  if (tag === 'button') {
    button = `<button type="button" class="button-v5 ${size ? size : 'button-v5--medium'}">
                <span class="button-v5__inner">
                  ${label}
                </span>
              </button>`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v5 ${size ? size : 'button-v5--medium'}">
                <span class="button-v5__inner">
                  ${label}
                </span>
              </a>`;
  }

  return `${button}`;
};

export const Button_version_5 = Template.bind({});
Button_version_5.args = {
  tag: 'button',
  label: 'Button',
  size: 'button-v5--medium',
};