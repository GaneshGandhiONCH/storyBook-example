import './outline.scss';
import {Template} from '../Template';

export default {
  title: 'Components/Buttons',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'input', 'a'],
      control: { type: 'select' }
    },
    className: {
      options: ['button-outline-primary', 'button-outline-secondary'],
      control: { type: 'select' }
    },
    textTransform: {
      options: ['button-uppercase', 'button-lowercase', 'button-capitalize'],
      control: { type: 'select' }
    }
  },
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Submit',
  className: 'button-outline-primary',
  tag: 'button',
  textTransform: 'button-uppercase'
};