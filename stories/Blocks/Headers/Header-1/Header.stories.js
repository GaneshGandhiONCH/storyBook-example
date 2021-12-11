import {MobileMenu} from "./MobileMenu";

export default {
  title: 'Blocks/Headers/Header-1',
};

const Template = () => {
  return `<header-1 class="container header-1" data-header>
    <a href="/" class="header-1__logo-link">
      <svg class="header-1__logo" width="119" height="35" viewBox="0 0 119 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M76.5962 29L86.4189 32L94.6906 24L105.03 31L115.887 29L111.234 14.5L94.6906 19.5L85.3849 14.5L75.5622 16L76.5962 29Z" fill="#F1A501"/> <path d="M0 24.064V21.902L6.3258 20.798V23.788C6.35751 25.4134 6.78557 26.64 7.60999 27.468C8.46611 28.2654 9.59176 28.664 10.9869 28.664C12.3504 28.664 13.4285 28.2347 14.2212 27.376C15.0456 26.5174 15.4578 25.3674 15.4578 23.926V1.38604H22.0214V23.926C22.0214 26.9314 20.9909 29.4767 18.9298 31.562C16.8688 33.6474 14.237 34.69 11.0345 34.69C7.70511 34.69 5.02576 33.724 2.99643 31.792C0.998811 29.8294 0 27.2534 0 24.064Z" fill="black"/> <path d="M23.5297 27.836C23.5297 25.904 24.1797 24.3554 25.4797 23.19C26.7798 22.0247 28.4603 21.2887 30.5213 20.982L36.2764 20.154C37.4496 20.0007 38.0362 19.464 38.0362 18.544C38.0362 17.6854 37.6874 16.98 36.9898 16.428C36.3239 15.876 35.3568 15.6 34.0885 15.6C32.7568 15.6 31.6945 15.9527 30.9018 16.658C30.1408 17.3634 29.7128 18.2374 29.6176 19.28L24.0053 18.13C24.2272 16.1674 25.226 14.4347 27.0017 12.932C28.7774 11.4294 31.1238 10.678 34.0409 10.678C37.5289 10.678 40.0972 11.4907 41.7461 13.116C43.3949 14.7107 44.2193 16.7654 44.2193 19.28V30.412C44.2193 31.7614 44.3144 32.9574 44.5047 34H38.7021C38.5435 33.3254 38.4643 32.4207 38.4643 31.286C36.974 33.5247 34.6751 34.644 31.5677 34.644C29.1579 34.644 27.2078 33.9694 25.7175 32.62C24.2589 31.2707 23.5297 29.676 23.5297 27.836ZM32.8995 30.09C34.3897 30.09 35.6105 29.6914 36.5618 28.894C37.5447 28.066 38.0362 26.7167 38.0362 24.846V23.834L32.7568 24.616C30.8226 24.892 29.8555 25.8427 29.8555 27.468C29.8555 28.204 30.125 28.8327 30.664 29.354C31.2031 29.8447 31.9482 30.09 32.8995 30.09Z" fill="black"/> <path d="M69.0045 0.696045V29.906C69.0045 31.4087 69.068 32.7734 69.1948 34H63.1544C62.9958 33.2334 62.9165 32.3594 62.9165 31.378C62.3775 32.3287 61.5214 33.0954 60.3482 33.678C59.2067 34.2607 57.8749 34.552 56.3529 34.552C53.0236 34.552 50.2808 33.4327 48.1246 31.194C46.0002 28.9247 44.9379 26.0727 44.9379 22.638C44.9379 19.2954 45.9843 16.4894 48.0771 14.22C50.2015 11.9507 52.8967 10.816 56.1627 10.816C59.5238 10.816 61.7275 11.7514 62.7739 13.622V0.696045H69.0045ZM51.3113 22.638C51.3113 24.6314 51.8504 26.2107 52.9284 27.376C54.0065 28.5107 55.4017 29.078 57.1139 29.078C58.7945 29.078 60.1738 28.4954 61.2519 27.33C62.3299 26.1647 62.869 24.5854 62.869 22.592C62.869 20.6294 62.3299 19.096 61.2519 17.992C60.1738 16.8574 58.7945 16.29 57.1139 16.29C55.4334 16.29 54.0382 16.8574 52.9284 17.992C51.8504 19.1267 51.3113 20.6754 51.3113 22.638Z" fill="black"/> <path d="M78.3401 27.422C79.5134 28.5567 80.9244 29.124 82.5732 29.124C84.222 29.124 85.6172 28.5567 86.7587 27.422C87.9319 26.2874 88.5185 24.708 88.5185 22.684C88.5185 20.66 87.9319 19.0807 86.7587 17.946C85.6172 16.8114 84.222 16.244 82.5732 16.244C80.9244 16.244 79.5134 16.8114 78.3401 17.946C77.1986 19.0807 76.6279 20.66 76.6279 22.684C76.6279 24.708 77.1986 26.2874 78.3401 27.422ZM73.7742 14.082C76.1206 11.8127 79.0536 10.678 82.5732 10.678C86.0928 10.678 89.01 11.8127 91.3247 14.082C93.6711 16.3514 94.8443 19.2187 94.8443 22.684C94.8443 26.1494 93.6711 29.0167 91.3247 31.286C89.01 33.5554 86.0928 34.69 82.5732 34.69C79.0536 34.69 76.1206 33.5554 73.7742 31.286C71.4594 29.0167 70.3021 26.1494 70.3021 22.684C70.3021 19.2187 71.4594 16.3514 73.7742 14.082Z" fill="black"/> <path d="M102.311 27.422C103.484 28.5567 104.895 29.124 106.544 29.124C108.193 29.124 109.588 28.5567 110.729 27.422C111.903 26.2874 112.489 24.708 112.489 22.684C112.489 20.66 111.903 19.0807 110.729 17.946C109.588 16.8114 108.193 16.244 106.544 16.244C104.895 16.244 103.484 16.8114 102.311 17.946C101.169 19.0807 100.599 20.66 100.599 22.684C100.599 24.708 101.169 26.2874 102.311 27.422ZM97.7449 14.082C100.091 11.8127 103.024 10.678 106.544 10.678C110.064 10.678 112.981 11.8127 115.295 14.082C117.642 16.3514 118.815 19.2187 118.815 22.684C118.815 26.1494 117.642 29.0167 115.295 31.286C112.981 33.5554 110.064 34.69 106.544 34.69C103.024 34.69 100.091 33.5554 97.7449 31.286C95.4302 29.0167 94.2728 26.1494 94.2728 22.684C94.2728 19.2187 95.4302 16.3514 97.7449 14.082Z" fill="black"/> </svg>
    </a>
    <nav class="header-1__links">
      <ul class="header-1__list-links">
        <li class="header-1__list-item">
          <a href="#!" class="header-1__link">Product</a>
        </li>
        <li class="header-1__list-item header-1__list-item--has-submenu" data-header-dropdown-list-wrapper>
          <a href="#!" class="header-1__link header-1__link--has-submenu">
            Features
            <span class="header-1__link-dropdown-arrow" data-header-dropdown-link>
              <svg class="header-1__link-dropdown-arrow-icon" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.694458 0.5L5.3473 5L10.0002 0.5" />
              </svg>
            </span>      
          </a>
          <ul class="header-1__sublist" data-header-dropdown-list="close">
            <li class="header-1__sublist-item">
              <a href="#!" class="header-1__link">Sed ut perspiciatis unde</a>
            </li>
            <li class="header-1__sublist-item">
              <a href="#!" class="header-1__link">Denouncing pleasure</a>
            </li>
            <li class="header-1__sublist-item">
              <a href="#!" class="header-1__link">Nor again</a>
            </li>
            <li class="header-1__sublist-item">
              <a href="#!" class="header-1__link">At vero eos et</a>
            </li>
            <li class="header-1__sublist-item">
              <a href="#!" class="header-1__link">Nam libero tempore</a>
            </li>
          </ul>
        </li>
        <li class="header-1__list-item">
          <a href="#!" class="header-1__link">Pricing</a>
        </li>
        <li class="header-1__list-item">
          <a href="#!" class="header-1__link">Resources</a>
        </li>              
      </ul>
      <a href="#!" class="header-1__button button-outline button-outline--small">Sign up</a>
      <div class="header-1__lang-switcher lang-switcher-1" data-switcher>
        <button class="lang-switcher-1__current" data-switcher-current>
          <span class="lang-switcher-1__current-name">ENG</span>
          <svg class="lang-switcher-1__current-icon" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0.694458 0.5L5.3473 5L10.0002 0.5"></path> </svg>
          </button>
          <ul class="lang-switcher-1__list" data-switcher-list>
            <li class="lang-switcher-1__list-item">
              <a href="#!" class="lang-switcher-1__link lang-switcher-1__link--current">ENG</a>
            </li>
            <li class="lang-switcher-1__list-item">
              <a href="#!" class="lang-switcher-1__link">UA</a>
            </li>
            <li class="lang-switcher-1__list-item">
              <a href="#!" class="lang-switcher-1__link">FR</a>
            </li>
          </ul>
      </div>
    </nav>
    <button type="button" class="header-1__hamburger hamburger-1" data-hamburger>
      <span class="hamburger-1__line"></span>
      <span class="hamburger-1__line"></span>
      <span class="hamburger-1__line"></span>
      <span class="hamburger-1__line"></span>
    </button>
  </header-1>`;
};

export const Header = Template.bind({});

window.addEventListener('load', function () {
  new MobileMenu();
})