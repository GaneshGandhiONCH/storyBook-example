import {Hamburger} from "../../../Components/Hamburgers/Hamburger-1/Hamburger";
import {DropDownLinks} from "./DropDownLInks";


export function MobileMenu() {
  // INITS
  new Hamburger();
  new DropDownLinks();

  // VARS
  const $this = this;
  const header = document.querySelector('[data-header]');
  const hamburger = document.querySelector('[data-hamburger]');
  const activeClass = 'header-1--open';

  // LISTENERS
  hamburger?.addEventListener('click', handleOnClickHamburger, false);

  // HANDLERS
  function handleOnClickHamburger() {
    $this.toggle();
    header.classList.contains(activeClass) ? disableScroll() : enableScroll();
  }

  // FUNCTIONS & METHODS
  $this.toggle = () => {
    header.classList.toggle(activeClass);
  }
}