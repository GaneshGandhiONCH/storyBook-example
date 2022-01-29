export default {
  title: 'Components/Buttons',
  component: 'Button_version_1',
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['button-v1--small', 'button-v1--medium', 'button-v1--large'],
      control: { type: 'select' }
    }
  },
};

const Template = ({ label, size }) => {
    return `<button type="button" class="button-v1 ${size ? size : 'button-v1--medium'}">${label}</button>`;
};

export const Button_version_1 = Template.bind({});
Button_version_1.args = {
  label: 'Button',
  size: 'button-v1--medium'
};