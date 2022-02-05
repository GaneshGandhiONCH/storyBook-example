export function InitMessenger() {
  // VARS
  const $this = this;
  const chat = document.querySelector('[data-messenger-v1]');
  const activeClass = 'messenger-v1--is-open';
  if (!chat) return;

  // LISTENERS
  chat.addEventListener('click', handleOnClick, false);

  document.addEventListener('keydown', handleOnKeydown);

  document.addEventListener('click', handleOnClickDocument, false);

  // HANDLERS
  function handleOnClick() {
    $this.toggle();
  }

  function handleOnKeydown(event) {
    if (event.key === "Escape") {
      $this.close();
    }

    if (event.key === "Tab") {
      setTimeout(() => {
        $this.toggleOnTab();
      }, 0);
    }
  }

  function handleOnClickDocument(event) {
    if(!event.target.closest('[data-messenger-v1]')) {
      $this.close();
    }
  }

  // METHODS & FUNCTIONS
  $this.toggle = () => {
    chat.classList.contains(activeClass) ? $this.close() : $this.open();
  }

  $this.open = () => {
    chat.classList.add(activeClass);
  }

  $this.close = () => {
    chat.classList.remove(activeClass);
  }

  $this.toggleOnTab = () => {
    const activeElement = document.activeElement;
    const activeElementContainer = activeElement.closest('[data-messenger-v1]');

    activeElementContainer ? $this.open() : $this.close();
  }
}