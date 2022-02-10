import {initAccordion} from "../initAccordion";

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
      initAccordion();
  }, 0)
})

export default {
  title: 'Components/Accordions',
  component: 'Accordion_version_1',
  argTypes: {
    isNeedClosePrevious: { control: 'boolean' },
    title1: { control: 'text' },
    text1: { control: 'text' },
    title2: { control: 'text' },
    text2: { control: 'text' },
  },
};

const Template = ({ isNeedClosePrevious, title1, text1, title2, text2 }) => {
  return `<div class="accordions-v1 v-container" 
            data-accordions="${isNeedClosePrevious ? 'close-previous' : ''}"
          >
            <div class="accordion-v1" data-accordion>
              <button class="accordion-v1__toggler" data-accordion-toggle>${title1}</button>
              <div class="accordion-v1__body" data-accordion-body>
                <p class="accordion-v1__text">${text1}</p>
              </div>
            </div>
            <div class="accordion-v1" data-accordion>
              <button class="accordion-v1__toggler" data-accordion-toggle>${title2}</button>
              <div class="accordion-v1__body" data-accordion-body>
                <p class="accordion-v1__text">${text2}</p>
              </div>
            </div>
          </div>`;
};

export const Accordion_version_1 = Template.bind({});
Accordion_version_1.args = {
  isNeedClosePrevious: true,
  title1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolorem ea, explicabo harum illum magnam magni natus, numquam omnis quia quibusdam quod repellat sed tempora totam ullam voluptate voluptatem!Alias architecto eligendi ex exercitationem expedita laudantium libero magni maxime odit officia optio pariatur, praesentium quasi, repellat suscipit, veniam vero? Consequuntur, esse ex laboriosam nemo quae quam repellat saepe sunt.A aspernatur at atque aut blanditiis corporis cum deserunt distinctio dolore earum enim eos eum facere facilis illo, illum nisi nostrum officia quae qui reprehenderit.',
  title2: 'Animi blanditiis dolorem ea, explicabo harum illum magnam magni natus?',
  text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolorem ea, explicabo harum illum magnam magni natus, numquam omnis quia quibusdam quod repellat sed tempora totam ullam voluptate voluptatem!Alias architecto eligendi ex exercitationem expedita laudantium libero magni maxime odit officia optio pariatur, praesentium quasi, repellat suscipit, veniam vero? Consequuntur, esse ex laboriosam nemo quae quam repellat saepe sunt.A aspernatur at atque aut blanditiis corporis cum deserunt distinctio dolore earum enim eos eum facere facilis illo, illum nisi nostrum officia quae qui reprehenderit.',
};

window.addEventListener('load', function () {
  if (!document.body.hasAttribute('data-init-accordions')) {
    document.body.setAttribute('data-init-accordions', '');
    initAccordion();
  }
})