import {initScrollDownButton} from "../initScrollDownButton";

export default {
  title: 'Components/ScrollDownButtons',
  component: 'Scroll_down_button_version_1'
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    initScrollDownButton();
  }, 0)
})

const Template = () => {
  return `<button class="scroll-down-button-v1" type="submit" data-scroll-down-button>
            <span class="scroll-down-button-v1__item"></span>
            <span class="scroll-down-button-v1__item"></span>
            <span class="scroll-down-button-v1__item"></span>
          </button>`;
};

window.addEventListener('load', function () {
  initScrollDownButton();
})

export const Scroll_down_button_version_1 = Template.bind({});