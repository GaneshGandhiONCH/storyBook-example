export function Hamburger() {
  // VARS
  const $this = this;
  const hamburger = document.querySelector('[data-hamburger]');
  const activeClass = 'hamburger-v1--active';

  // LISTENERS
  hamburger?.addEventListener('click', handleOnClickHamburger, false)

  // HANDLERS
  function handleOnClickHamburger() {
    $this.toggle();
  }

  // FUNCTIONS & METHODS
  $this.toggle = () => {
    hamburger.classList.toggle(activeClass);
  }
}