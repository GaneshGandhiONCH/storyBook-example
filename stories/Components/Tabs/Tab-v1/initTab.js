export const initTab = () => {
  // VARS
  const selectsTab = document.querySelectorAll('[data-tab-v1-navigation-select]');
  const buttonsTab = document.querySelectorAll('[data-tab-v1-navigation]');
  if (!selectsTab.length && !buttonsTab.length) return;
  const activeTabNavigationClass = 'tab-v1__navigation-button--active';
  const activeTabContentClass = 'tab-v1__content--visible';

  // EVENTS
  [...selectsTab].forEach(select => {
    select.addEventListener('change', handleOnChangeSelect, false);
  });

  [...buttonsTab].forEach(button => {
    button.addEventListener('click', handleOnClickButton, false);
  })

  // HANDLERS
  function handleOnChangeSelect() {
    const tab = this.closest('[data-tab-v1]');
    const tabContentProperty = this.value;

    toggleActiveButton(tab, tabContentProperty);
    toggleTabContent(tab, tabContentProperty);
  }

  function handleOnClickButton() {
    const tab = this.closest('[data-tab-v1]');
    const tabContentProperty = this.dataset.tabV1Navigation;

    toggleActiveButton(tab, tabContentProperty);
    toggleSelect(tab, tabContentProperty);
    toggleTabContent(tab, tabContentProperty);
  }

  // FUNCTIONS
  function toggleActiveButton(tab, tabContentProperty) {
    const previousTabButton = tab.querySelector(`.${activeTabNavigationClass}[data-tab-v1-navigation]`);
    const nextTabButton = tab.querySelector(`[data-tab-v1-navigation="${tabContentProperty}"]`);

    previousTabButton.classList.remove(activeTabNavigationClass);
    nextTabButton.classList.add(activeTabNavigationClass);
  }

  function toggleSelect(tab, tabContentProperty) {
    const select = tab.querySelector('[data-tab-v1-navigation-select]');
    select.value = tabContentProperty;
  }

  function toggleTabContent(tab, tabContentProperty) {
    const previousTabContent = tab.querySelector(`.${activeTabContentClass}[data-tab-v1-content]`);
    const nextTabContent = tab.querySelector(`[data-tab-v1-content="${tabContentProperty}"]`);

    previousTabContent.classList.remove(activeTabContentClass);
    nextTabContent.classList.add(activeTabContentClass);
  }
};
