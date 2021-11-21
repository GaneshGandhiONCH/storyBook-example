export function LangSwitcher() {
  // VARS
  const $this = this;
  const switchers = document.querySelectorAll('[data-switcher]');
  if (!switchers.length) return;
  const currentsLangs = document.querySelectorAll('[data-switcher-current]');
  const activeListClass = 'lang-switcher-1__list--active';


  // LISTENERS
  currentsLangs.forEach(current => {
    current.addEventListener('click', handleOnClick, false);
  })

  document.addEventListener('click', handleOnClickDocument, false);

  document.addEventListener('scroll', handleOnScroll, false);

  document.addEventListener('keydown', handleOnKeyDown, false);


  // HANDLERS
  function handleOnClick() {
    $this.toggle(this);
  }

  function handleOnClickDocument(e) {
      if(!e.target.closest('[data-switcher]')) {
        $this.closeAll();
      }
  }

  function handleOnScroll() {
    $this.closeAll();
  }

  function handleOnKeyDown(e) {
    if (e.key === "Escape") {
      $this.closeAll();
    }
  }


  // FUNCTIONS & METHODS
  $this.toggle = (button) => {
    const list = button.closest('[data-switcher]').querySelector('[data-switcher-list]');
    list.classList.toggle(activeListClass);
  }

  $this.closeAll = () => {
    const listsLangs = document.querySelectorAll('[data-switcher-list]');
    listsLangs.forEach(list => {
      list.classList.remove(activeListClass);
    })
  }
}