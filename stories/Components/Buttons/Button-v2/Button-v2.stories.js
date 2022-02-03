export default {
  title: 'Components/Buttons',
  component: 'Button_version_2',
  argTypes: {
    tag: {
      options: ['input', 'a', 'button'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    size: {
      options: ['button-v2--small', 'button-v2--medium', 'button-v2--large'],
      control: { type: 'select' }
    }
  }
};

const Template = ({ tag, label, size }) => {
  let button;

  if (tag === 'button') {
    button = `<button type="button" class="button-v2 ${size ? size : 'button-v2--medium'}">${label}</button>`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v2 ${size ? size : 'button-v2--medium'}">${label}</a>`;
  }
  else if (tag === 'input') {
    button = `<input type="submit" class="button-v2 ${size ? size : 'button-v2--medium'}" value="${label}" />`;
  }
  
  return `${button}`;
};

export const Button_version_2 = Template.bind({});
Button_version_2.args = {
  tag: 'button',
  label: 'Button',
  size: 'button-v2--medium'
};