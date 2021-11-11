import './hamburger.scss';

export default {
  title: 'Components/Hamburger'
};

const Template = () => {
  return `<button type="button" class="hamburger-1">
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
   </button>`;
};

export const Default = Template.bind({});