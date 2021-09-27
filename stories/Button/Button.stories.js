import { addCodeExample } from '../helpers/code-example'
import './button.css';
import './script';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = ({ label, className }) => {
  return `<button class="${className}" data-button>${label}</button>`;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button-primary',
};
addCodeExample(Primary, Template)
