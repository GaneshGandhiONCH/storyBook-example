import {Hamburger} from "./Hamburger";

export default {
  title: 'Components/Hamburgers/Hamburger_v1'
};

const Template = () => {
  return `<button type="button" class="hamburger-v1" aria-label="Click to toggle mobile menu" data-hamburger>
          <span class="hamburger-v1__line"></span>
          <span class="hamburger-v1__line"></span>
          <span class="hamburger-v1__line"></span>
          <span class="hamburger-v1__line"></span>
         </button>`;
};

export const Hamburger_v1 = Template.bind({});

window.addEventListener('load', function () {
  new Hamburger();
})