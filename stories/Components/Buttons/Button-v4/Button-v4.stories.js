export default {
  title: 'Components/Buttons',
  component: 'Button_version_4',
  argTypes: {
    tag: {
      options: ['a', 'button'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  }
};

const Template = ({ tag, label, disabled }) => {
  let button;
  const attrDisabled = disabled ? 'disabled' : '';

  if (tag === 'button') {
    button = `<button class="button-v4" type="button" ${attrDisabled}>${label}</button>`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-v4" ${attrDisabled}>${label}</a>`;
  }

  return `${button}`;
};

export const Button_version_4 = Template.bind({});
Button_version_4.args = {
  tag: 'button',
  label: 'Learn More',
  disabled: false
};