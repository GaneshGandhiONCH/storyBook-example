import './default.scss';
import {Template} from './Template';

export default {
  title: 'Components/Buttons',
  argTypes: {
    label: { control: 'text' },
    tag: {
      options: ['button', 'input', 'a'],
      control: { type: 'select' }
    },
    className: {
      options: ['button-primary', 'button-secondary'],
      control: { type: 'select' }
    },
    textTransform: {
      options: ['button-uppercase', 'button-lowercase', 'button-capitalize'],
      control: { type: 'select' }
    }
  },
};





export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
  className: 'button-primary',
  tag: 'button',
  textTransform: 'button-uppercase'
};