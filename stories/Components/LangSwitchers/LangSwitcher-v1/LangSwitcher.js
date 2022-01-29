export function LangSwitcher() {
  // VARS
  const $this = this;
  const switchers = document.querySelectorAll('[data-switcher]');
  if (!switchers.length) return;
  const activeClass = 'lang-switcher-v1__list--open';

  // LISTENERS
  document.addEventListener('click', handleOnClickDocument, false);

  document.addEventListener('keydown', handleOnKeyDown);


  // HANDLERS
  function handleOnClickDocument(e) {
      if(!e.target.closest('[data-switcher]')) {
        $this.closeAll();
      }
  }

  function handleOnKeyDown(e) {
    if (e.key === "Escape") {
      $this.closeAll();
    }

    if (e.key === "Tab") {
      setTimeout(() => {
        $this.toggleLangSwitcherOnTab();
      }, 0);
    }
  }


  // FUNCTIONS & METHODS
  $this.closeAll = () => {
    switchers.forEach(switcher => {
      switcher.querySelector('[data-switcher-list]').classList.remove(activeClass);
    })
  }

  $this.toggleLangSwitcherOnTab = () => {
    const activeElement = document.activeElement;
    const activeElementContainer = activeElement.closest('[data-switcher-list]');

    activeElementContainer ? activeElementContainer.classList.add(activeClass) : $this.closeAll();
  }
}