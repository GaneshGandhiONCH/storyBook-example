export default {
  title: 'Components/Buttons',
  component: 'Button_version_1',
  argTypes: {
    tag: {
      options: ['input', 'a', 'button'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    size: {
      options: ['button-v1--small', 'button-v1--medium', 'button-v1--large'],
      control: { type: 'select' }
    },
  },
};

const Template = ({ tag, label, size }) => {
  let button;

  if (tag === 'button') {
    button = `<button type="button" class="button-v1 ${size ? size : 'button-v1--medium'}">${label}</button>`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v1 ${size ? size : 'button-v1--medium'}">${label}</a>`;
  }
  else if (tag === 'input') {
    button = `<input type="submit" class="button-v1 ${size ? size : 'button-v1--medium'}" value="${label}" />`;
  }

  return `${button}`;
};

export const Button_version_1 = Template.bind({});
Button_version_1.args = {
  tag: 'button',
  label: 'Button',
  size: 'button-v1--medium',
};