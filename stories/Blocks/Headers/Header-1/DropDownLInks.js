import anime from "animejs";

export function DropDownLinks() {
  // VARS
  const $this = this;
  const dropdownLinksButtons = document.querySelectorAll('[data-header-dropdpwn-link]');
  const activeClassArrow = 'header-1__link-dropdown-arrow--open';

  // LISTENERS
  dropdownLinksButtons.forEach(button => {
    button.addEventListener('click', handleOnClickDropdownButton, false);
  })

  // HANDLERS
  function handleOnClickDropdownButton(event) {
    event.preventDefault();
    $this.toggleDropdown(this);
  }

  // FUNCTIONS & METHODS
  $this.toggleDropdown = (button) => {
    const dropdownList = button.closest('[data-header-dropdown-list-wrapper]').querySelector('[data-header-dropdpwn-list]');
    const stateDropdownList = dropdownList.dataset.headerDropdpwnList;
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
      duration: 500,
      easing: 'easeOutExpo',
      complete: function() {
        dropdownList.style.height = 'auto';
        dropdownList.dataset.headerDropdpwnList = 'open';
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
        dropdownList.dataset.headerDropdpwnList = 'close';
      }
    })
  }
}