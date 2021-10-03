import './button.scss';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
  },
};


const Template = ({ label }) => {
  return `<button type="button" class="primary-button">${label}</button>`;
};


export const Button = Template.bind({});
Button.args = {
  label: 'Submit',
};