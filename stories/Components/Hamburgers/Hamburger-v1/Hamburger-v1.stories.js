import {Hamburger} from "./Hamburger";

export default {
  title: 'Components/Hamburgers',
  component: 'Hamburger_version_1',
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Hamburger();
  }, 0)
})

const Template = () => {
  return `<button type="button" class="hamburger-v1" aria-label="Click to toggle mobile menu" data-hamburger>
            <span class="hamburger-v1__line"></span>
            <span class="hamburger-v1__line"></span>
            <span class="hamburger-v1__line"></span>
            <span class="hamburger-v1__line"></span>
         </button>`;
};

export const Hamburger_version_1 = Template.bind({});

window.addEventListener('load', () => {
  new Hamburger();
})