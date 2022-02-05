import {DropDownLinks} from "./DropDownLInks";
import {LangSwitcher} from "../../../Components/LangSwitchers/LangSwitcher-v1/LangSwitcher";
import {Hamburger} from "../../../Components/Hamburgers/Hamburger-v1/Hamburger";
import "../../../global/scripts/scroll-locker";


export function MobileMenu() {
  // INITS
  new DropDownLinks();
  new LangSwitcher();
  // new Hamburger();

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