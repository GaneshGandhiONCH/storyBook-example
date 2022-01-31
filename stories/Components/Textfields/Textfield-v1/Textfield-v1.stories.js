export default {
  title: 'Components/Textfields',
  component: 'Textfield_version_1',
  argTypes: {
    tag: {
      options: ['input type="text"', 'textarea'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    inputName: { control: 'text' },
  }
};

const Template = ({ label, inputName, value, disabled, tag }) => {
  const input = `<input class="textfield-v1__field"
                    type="text"
                    name="${inputName}" 
                    value="${value}"
                    placeholder=" " 
                    ${disabled ? 'disabled' : ''}
                  >`;

  const textarea = `<textarea class="textfield-v1__field"
                      name="${inputName}" 
                      placeholder=" " 
                      ${disabled ? 'disabled' : ''}>${value}</textarea>`;

  return `<label class="textfield-v1">
              ${tag === 'input type="text"' ? input : textarea}
              <span class="textfield-v1__label">${label}</span>
          </label>`;
};

export const Textfield_version_1 = Template.bind({});
Textfield_version_1.args = {
  tag: 'input type="text"',
  label: 'Textfield',
  value: '',
  inputName: 'name',
  disabled: false,
};