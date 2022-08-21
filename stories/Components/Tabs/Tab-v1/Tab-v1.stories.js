// import {initAccordion} from "../initAccordion";

// document.addEventListener('DOMContentLoaded', function () {
//   setTimeout(() => {
//       initAccordion();
//   }, 0)
// })

export default {
  title: 'Components/Tabs',
  component: 'Tab_version_1',
};

const Template = () => {
  return `<div class="tab-v1 v-container" data-tab-v1>
            <div class="tab-v1__navigation">
              <label class="tab-v1__navigation-select-wrap">
                <span class="tab-v1__navigation-select-label">Select tab:</span>
                <select class="tab-v1__navigation-select" data-tab-v1-navigation-select>
                  <option value="tab-1">TAB 1</option>
                  <option value="tab-2">TAB 2</option>
                  <option value="tab-3">TAB 3</option>
                  <option value="tab-4">TAB 4</option>
                  <option value="tab-5">TAB 5</option>
                </select>
              </label>
              <button class="tab-v1__navigation-button" type="button" data-tab-v1-navigation="tab-1">TAB 1</button>
              <button class="tab-v1__navigation-button" type="button" data-tab-v1-navigation="tab-2">TAB 2</button>
              <button class="tab-v1__navigation-button" type="button" data-tab-v1-navigation="tab-3">TAB 3</button>
              <button class="tab-v1__navigation-button" type="button" data-tab-v1-navigation="tab-4">TAB 4</button>
              <button class="tab-v1__navigation-button" type="button" data-tab-v1-navigation="tab-5">TAB 5</button>
            </div>
            <div class="tab-v1__content-wrap">
              <div class="tab-v1__content tab-v1__content--visible" data-tab-v1-content="tab-1">
                <div>TAB 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquid atque beatae, cupiditate dicta doloremque et, harum illo itaque modi neque, nobis numquam quaerat. Commodi exercitationem in similique!</div>
              </div>
              <div class="tab-v1__content" data-tab-v1-content="tab-2">
                <div>TAB 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquid atque beatae, cupiditate dicta doloremque et, harum illo itaque modi neque, nobis numquam quaerat. Commodi exercitationem in similique!</div>              </div>
              <div class="tab-v1__content" data-tab-v1-content="tab-3">
                <div>TAB 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquid atque beatae, cupiditate dicta doloremque et, harum illo itaque modi neque, nobis numquam quaerat. Commodi exercitationem in similique!</div>              </div>
              <div class="tab-v1__content" data-tab-v1-content="tab-4">
                <div>TAB 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquid atque beatae, cupiditate dicta doloremque et, harum illo itaque modi neque, nobis numquam quaerat. Commodi exercitationem in similique!</div>              </div>
              <div class="tab-v1__content" data-tab-v1-content="tab-5">
                <div>TAB 5: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquid atque beatae, cupiditate dicta doloremque et, harum illo itaque modi neque, nobis numquam quaerat. Commodi exercitationem in similique!</div>              </div>
            </div>
          </div>`;
};

export const Tab_version_1 = Template.bind({});

// window.addEventListener('load', function () {
//   if (!document.body.hasAttribute('data-init-accordions')) {
//     document.body.setAttribute('data-init-accordions', '');
//     initAccordion();
//   }
// })