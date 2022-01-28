
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
      options: ['button-v2--small', 'button-v2--medium', 'button-v2--large'],
      control: { type: 'select' }
    }
  }
};

const Template = ({ label, tag, size }) => {
  let button;

  if (tag === 'input') {
    button = `<input type="submit" class="button-v2 ${size}" placeholder="${label}" />`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v2 ${size}">${label}</a>`;
  }
  else if (tag === 'button') {
    button = `<button type="button" class="button-v2 ${size}">${label}</button>`;
  }

  return button;
};

export const Button_version_2 = Template.bind({});
Button_version_2.args = {
  label: 'Submit',
  tag: 'button',
  size: 'button-v2--medium'
};