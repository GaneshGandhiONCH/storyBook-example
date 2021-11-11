import './lang-switcher.scss';

export default {
  title: 'Components/LangSwitchers',
  argTypes: {
    current: { control: 'text' },
    firstLang: { control: 'text' },
    secondLang: { control: 'text' }
  },
};

const Template = ({ current, firstLang, secondLang }) => {
  return `<div class="lang-switcher-1" data-switcher-1>
    <button class="lang-switcher-1__current">${current}</button>
    <ul class="lang-switcher-1__list">
      <li class="lang-switcher-1__list-item">
        <a href="#!" class="lang-switcher-1__link">${firstLang}</a>
      </li>
      <li class="lang-switcher-1__list-item">
        <a href="#!" class="lang-switcher-1__link">${secondLang}</a>
      </li>
    </ul>
  </div>`;
};

export const Default = Template.bind({});
Default.args = {
  current: 'ENG',
  firstLang: 'DT',
  secondLang: 'FR'
};