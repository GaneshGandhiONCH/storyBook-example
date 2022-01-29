export default {
  title: 'Components/Buttons',
  component: 'Button_version_2',
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['button-v2--small', 'button-v2--medium', 'button-v2--large'],
      control: { type: 'select' }
    }
  }
};

const Template = ({ label, size }) => {
  return `<button type="button" class="button-v2 ${size ? size : 'button-v2--medium'}">${label}</button>`;
};

export const Button_version_2 = Template.bind({});
Button_version_2.args = {
  label: 'Button',
  size: 'button-v2--medium'
};