import './primary.scss';

export default {
  title: 'Components/Buttons/Primary',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'input', 'a'],
      control: { type: 'select' }
    },
    size: {
      options: ['button-primary--small', 'button-primary--medium', 'button-primary--large'],
      control: { type: 'select' }
    }
  },
};

const Template = ({ label, tag, size }) => {
  let button;

  if (tag === 'input') {
    button = `<input type="submit" class="button-primary ${size}" placeholder="${label}" />`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-primary ${size}">${label}</a>`;
  }
  else if (tag === 'button') {
    button = `<button type="button" class="button-primary ${size}">${label}</button>`;
  }

  return button;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  tag: 'button',
  size: 'button-primary--medium'
};