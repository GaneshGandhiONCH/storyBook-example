import {DropDownLinks} from "./DropDownLInks";
import "../../../global/scripts/scroll-locker";


export function MobileMenu() {
  // INITS
  new DropDownLinks();

  // VARS
  const $this = this;
  const header = document.querySelector('[data-header]');
  const hamburger = document.querySelector('[data-hamburger]');
  const activeClass = 'header-v1--open';

  // LISTENERS
  hamburger?.addEventListener('click', handleOnClickHamburger, false);

  // HANDLERS
  function handleOnClickHamburger() {
    $this.toggle();
    header?.classList.contains(activeClass) ? disableScroll() : enableScroll();
  }

  // FUNCTIONS & METHODS
  $this.toggle = () => {
    header?.classList.toggle(activeClass);
  }
}