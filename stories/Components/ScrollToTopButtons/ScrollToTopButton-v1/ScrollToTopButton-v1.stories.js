import {initScrollToTop} from "../initScrollToTop";

export default {
  title: 'Components/ScrollToTopButtons',
  component: 'Scroll_to_top_buttons_version_1'
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    initScrollToTop();
  }, 0)
})

const Template = () => {
  return `<button class="scroll-to-top-button-v1" type="button" data-scroll-to-top-button>
            <svg class="scroll-to-top-button-v1__icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 0.292969L0.646484 4.64844L0.291016 5L1 5.70703L1.35352 5.35352L5 1.70898L8.64648 5.35352L9 5.70703L9.70898 5L9.35352 4.64844L5 0.292969Z" /> </svg>
          </button>`;
};

window.addEventListener('load', function () {
  initScrollToTop();
})

export const Scroll_to_top_buttons_version_1 = Template.bind({});