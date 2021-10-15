import './buttons.scss';


export default {
  title: 'Components/Buttons',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};


const Template = ({ label, className }) => {
  return `<button type="button" class="button ${className}">${label}</button>`;
};


export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
  className: 'default-button'
};

export const DefaultOutline = Template.bind({});
DefaultOutline.args = {
  label: 'Submit',
  className: 'default-outline-button'
};