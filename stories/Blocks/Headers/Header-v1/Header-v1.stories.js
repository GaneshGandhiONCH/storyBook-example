import {MobileMenu} from "./MobileMenu";
import Logo from "./logo.svg";

export default {
  title: 'Blocks/Headers',
  component: 'Header_version_1',
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new MobileMenu();
  }, 0)
})

const Template = () => {
  return `<header class="v-container header-v1" data-header>
    <a href="/" class="header-v1__logo-link">
      <img src="${Logo}" class="header-v1__logo" alt="Logotype Company">
    </a>
    <nav class="header-v1__links">
      <ul class="header-v1__list-links">
        <li class="header-v1__list-item">
          <a href="#!" class="header-v1__link">Product</a>
        </li>
        <li class="header-v1__list-item header-v1__list-item--has-submenu" data-header-dropdown-list-wrapper>
          <a href="#!" class="header-v1__link header-v1__link--has-submenu">
            Features
            <span class="header-v1__link-dropdown-arrow" data-header-dropdown-link>
              <svg class="header-v1__link-dropdown-arrow-icon" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.694458 0.5L5.3473 5L10.0002 0.5" />
              </svg>
            </span>      
          </a>
          <ul class="header-v1__sublist" data-header-dropdown-list="close">
            <li class="header-v1__sublist-item">
              <a href="#!" class="header-v1__link">Sed ut perspiciatis unde</a>
            </li>
            <li class="header-v1__sublist-item">
              <a href="#!" class="header-v1__link">Denouncing pleasure</a>
            </li>
            <li class="header-v1__sublist-item">
              <a href="#!" class="header-v1__link">Nor again</a>
            </li>
            <li class="header-v1__sublist-item">
              <a href="#!" class="header-v1__link">At vero eos et</a>
            </li>
            <li class="header-v1__sublist-item">
              <a href="#!" class="header-v1__link">Nam libero tempore</a>
            </li>
          </ul>
        </li>
        <li class="header-v1__list-item">
          <a href="#!" class="header-v1__link">Pricing</a>
        </li>
        <li class="header-v1__list-item">
          <a href="#!" class="header-v1__link">Resources</a>
        </li>              
      </ul>
      <a href="#!" class="header-v1__button button-v1 button-v1--small">Sign up</a>
      <div class="header-v1__lang-switcher lang-switcher-v1" data-switcher>
        <button class="lang-switcher-v1__current" data-switcher-current>
          <span class="lang-switcher-v1__current-name">ENG</span>
          <svg class="lang-switcher-v1__current-icon" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0.694458 0.5L5.3473 5L10.0002 0.5"></path> </svg>
          </button>
          <ul class="lang-switcher-v1__list" data-switcher-list>
            <li class="lang-switcher-v1__list-item">
              <a href="#!" class="lang-switcher-v1__link lang-switcher-v1__link--current">ENG</a>
            </li>
            <li class="lang-switcher-v1__list-item">
              <a href="#!" class="lang-switcher-v1__link">UA</a>
            </li>
            <li class="lang-switcher-v1__list-item">
              <a href="#!" class="lang-switcher-v1__link">FR</a>
            </li>
          </ul>
      </div>
    </nav>
    <button type="button" class="header-v1__hamburger hamburger-v1" data-hamburger>
      <span class="hamburger-v1__line"></span>
      <span class="hamburger-v1__line"></span>
      <span class="hamburger-v1__line"></span>
      <span class="hamburger-v1__line"></span>
    </button>
  </header>`;
};

export const Header_version_1 = Template.bind({});

window.addEventListener('load', () => {
  new MobileMenu();
})