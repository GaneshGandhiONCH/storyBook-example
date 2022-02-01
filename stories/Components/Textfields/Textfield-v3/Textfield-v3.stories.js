export default {
  title: 'Components/Textfields',
  component: 'Textfield_version_3',
  argTypes: {
    tag: {
      options: ['input', 'textarea'],
      control: { type: 'select' }
    },
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    inputName: { control: 'text' },
  }
};

const Template = ({ label, inputName, value, disabled, tag }) => {
  const input = `<input class="textfield-v3__field"
                    type="text"
                    name="${inputName}" 
                    value="${value}"
                    placeholder=" " 
                    ${disabled ? 'disabled' : ''}
                  >`;

  const textarea = `<textarea class="textfield-v3__field"
                      name="${inputName}" 
                      placeholder=" " 
                      ${disabled ? 'disabled' : ''}>${value}</textarea>`;

  return `<label class="textfield-v3">
              ${tag === 'textarea' ? textarea : input}
              <span class="textfield-v3__label">${label}</span>
          </label>`;
};

export const Textfield_version_3 = Template.bind({});
Textfield_version_3.args = {
  tag: 'input',
  label: 'Textfield',
  value: '',
  inputName: 'name',
  disabled: false,
};