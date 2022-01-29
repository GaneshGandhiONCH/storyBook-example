export default {
  title: 'Components/Buttons',
  component: 'Button_version_3',
  argTypes: {
    label: { control: 'text' },
  }
};

const Template = ({ label }) => {
    return `<button class="button-v3" type="button">
                <span class="button-v3__circle">
                  <span class="button-v3__icon-arrow"></span>
                </span>
                <span class="button-v3__text">${label}</span>
              </button>`;

};

export const Button_version_3 = Template.bind({});
Button_version_3.args = {
  label: 'Learn More',
};