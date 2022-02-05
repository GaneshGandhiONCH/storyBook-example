import anime from "animejs";

export function DropDownLinks() {
  // VARS
  const $this = this;
  const dropdownLinksButtons = document.querySelectorAll('[data-header-dropdown-link]');
  const submenus = document.querySelectorAll('[data-header-dropdown-list]');
  const activeClassArrow = 'header-v1__link-dropdown-arrow--open';
  const activeClass = 'header-v1__sublist--visible-on-focus';

  // LISTENERS
  dropdownLinksButtons.forEach(button => {
    button.addEventListener('click', handleOnClickDropdownButton, false);
  });

  document.addEventListener('keydown', handleOnKeydown);

  document.addEventListener('click', handleOnClickDocument, false);

  document.addEventListener('scroll', handleOnScroll, false);

  // HANDLERS
  function handleOnClickDropdownButton(event) {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      $this.toggleDropdown(this);
    }
  }

  function handleOnKeydown(event) {
    if (event.key === "Tab") {
      setTimeout(() => {
        $this.toggleSubmenuOnTab();
      }, 0);
    }

    if (event.key === "Escape") {
      $this.closeAll();
    }
  }

  function handleOnClickDocument(e) {
    if(!e.target.closest('[data-header-dropdown-list-wrapper]')) {
      $this.closeAll();
    }
  }

  function handleOnScroll() {
    $this.closeAll();
  }

  // FUNCTIONS & METHODS
  $this.toggleDropdown = (button) => {
    const dropdownList = button.closest('[data-header-dropdown-list-wrapper]').querySelector('[data-header-dropdown-list]');
    const stateDropdownList = dropdownList.dataset.headerDropdownList;
    button.classList.toggle(activeClassArrow);

    if (stateDropdownList === 'close') {
      $this.openDropdown(dropdownList);
    } else {
      $this.closeDropdown(dropdownList);
    }
  }

  $this.openDropdown = (dropdownList) => {
    anime({
      targets: dropdownList,
      height: [0, dropdownList.scrollHeight],
      duration: 300,
      easing: 'easeOutExpo',
      complete: function() {
        dropdownList.style.height = 'auto';
        dropdownList.dataset.headerDropdownList = 'open';
      }
    })
  }

  $this.closeDropdown = (dropdownList) => {
    dropdownList.style.height = dropdownList.scrollHeight + 'px';

    anime({
      targets: dropdownList,
      height: [dropdownList.scrollHeight, 0],
      duration: 500,
      easing: 'easeOutExpo',
      complete: function() {
        dropdownList.style.height = '';
        dropdownList.dataset.headerDropdownList = 'close';
      }
    })
  }

  $this.toggleSubmenuOnTab = () => {
    const activeElement = document.activeElement;
    const activeElementContainer = activeElement.closest('[data-header-dropdown-list]');

    if (activeElementContainer) {
      activeElementContainer.classList.add(activeClass)
    } else {
      $this.closeAll();
    }
  }

  $this.closeAll = () => {
    submenus.forEach(submenu => {
      submenu.classList.remove(activeClass);
    })
  }
}