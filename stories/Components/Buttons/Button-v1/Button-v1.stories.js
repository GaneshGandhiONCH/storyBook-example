
export default {
  title: 'Components/Buttons',
  component: 'Button',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'input', 'a'],
      control: { type: 'select' }
    },
    size: {
      options: ['button-v1--small', 'button-v1--medium', 'button-v1--large'],
      control: { type: 'select' }
    }
  },
};

const Template = ({ label, tag, size }) => {
  let button;

  if (tag === 'input') {
    button = `<input type="submit" class="button-v1 ${size}" value="${label}" />`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v1 ${size}">${label}</a>`;
  }
  else if (tag === 'button') {
    button = `<button type="button" class="button-v1 ${size}">${label}</button>`;
  }

  return button;
};

export const Button_version_1 = Template.bind({});
Button_version_1.args = {
  label: 'Submit',
  tag: 'button',
  size: 'button-v1--medium'
};