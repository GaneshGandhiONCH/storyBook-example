import './hamburger.scss';
// import {Hamburger} from "./Hamburger";

export default {
  title: 'Components/Hamburgers/Hamburger-1'
};

const Template = () => {
  return `<button type="button" class="hamburger-1" data-hamburger>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
    <span class="hamburger-1__line"></span>
   </button>`;
};

export const Hamburger_1 = Template.bind({});

window.addEventListener('load', function () {
  // new Hamburger();
})