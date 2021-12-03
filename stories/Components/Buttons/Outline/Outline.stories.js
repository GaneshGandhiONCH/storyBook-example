import './outline.scss';

export default {
  title: 'Components/Buttons/Outline',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'input', 'a'],
      control: { type: 'select' }
    },
    size: {
      options: ['button-outline--small', 'button-outline--medium', 'button-outline--large'],
      control: { type: 'select' }
    }
  }
};

const Template = ({ label, tag, size }) => {
  let button;

  if (tag === 'input') {
    button = `<input type="submit" class="button-outline ${size}" placeholder="${label}" />`;
  }
  else if (tag === 'a') {
    button = `<a href="#!" class="button-outline ${size}">${label}</a>`;
  }
  else if (tag === 'button') {
    button = `<button type="button" class="button-outline ${size}">${label}</button>`;
  }

  return button;
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Submit',
  tag: 'button',
  size: 'button-outline--medium'
};