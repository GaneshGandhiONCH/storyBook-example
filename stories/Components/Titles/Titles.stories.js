import './titles.scss';


export default {
  title: 'Components/Titles',
  argTypes: {
    title: { control: 'text' },
    className: {
      options: ['title-h1', 'title-h2', 'title-h3', 'title-h4', 'title-h5', 'title-h6'],
      control: { type: 'select' }
    },
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' }
    },
    alignment: {
      options: ['title-left', 'title-center', 'title-right'],
      control: { type: 'select' }
    },
  },
};


const Template = ({ title, className, tag, alignment }) => {
  return `<${tag} class="title ${className} ${alignment}">${title}</${tag}>`;
};


export const Titles = Template.bind({});
Titles.args = {
  tag: 'h1',
  title: 'This is Title',
  className: 'title-h1',
  alignment: 'title-left'
};