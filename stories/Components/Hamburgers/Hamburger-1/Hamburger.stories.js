import './hamburger.scss';
import {Hamburger} from "./Hamburger";

export default {
  title: 'Components/Hamburger'
};

const Template = () => {
  return `<button type="button" class="hamburger-1" data-hamburger>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
   </button>`;
};

export const Default = Template.bind({});

window.addEventListener('load', function () {
  // new Hamburger();
})