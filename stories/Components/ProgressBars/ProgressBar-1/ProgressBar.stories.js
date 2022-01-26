export default {
  title: 'Components/ProgressBars/ProgressBar-1',
  argTypes: {
    title: { control: 'text' },
    percent: { control: 'text' }
  },
};

const Template = ({ title, percent }) => {
  return `<div class="progress-bar-1" style="max-width: 300px">
              <span class="progress-bar-1__title">
                  ${title}
              </span>
              <div class="progress-bar-1__line"></div>
              <div class="progress-bar-1__percent">${percent}</div>
          </div>`;
};

export const ProgressBar1 = Template.bind({});
ProgressBar1.args = {
  title: 'Excellent',
  percent: '87%'
};