import {LangSwitcher} from './LangSwitcher';

export default {
  title: 'Components/LangSwitchers',
  component: 'Lang_switcher_version_1',
  argTypes: {
    current: { control: 'text' },
    firstLang: { control: 'text' },
    secondLang: { control: 'text' }
  },
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    new LangSwitcher();
  }, 0)
})

const Template = ({ current, firstLang, secondLang }) => {
  return `<div class="lang-switcher-v1" data-switcher>
    <button class="lang-switcher-v1__current" data-switcher-current="header-switcher">
      <span class="lang-switcher-v1__current-name">${current}</span> 
      <svg class="lang-switcher-v1__current-icon" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.694458 0.5L5.3473 5L10.0002 0.5" />
      </svg>
    </button>
    <ul class="lang-switcher-v1__list" data-switcher-list>
      <li class="lang-switcher-v1__list-item">
        <a href="#!" class="lang-switcher-v1__link lang-switcher-v1__link--current">${current}</a>
      </li>
      <li class="lang-switcher-v1__list-item">
        <a href="#!" class="lang-switcher-v1__link">${firstLang}</a>
      </li>
      <li class="lang-switcher-v1__list-item">
        <a href="#!" class="lang-switcher-v1__link">${secondLang}</a>
      </li>
    </ul>
  </div>`;
};

export const Lang_switcher_version_1 = Template.bind({});
Lang_switcher_version_1.args = {
  current: 'ENG',
  firstLang: 'DT',
  secondLang: 'FR'
};