import anime from 'animejs/lib/anime.es.js';

export const initTab = () => {
  // VARS
  const toggles = document.querySelectorAll('[data-tab-navigation-select]');
  if (!toggles.length) return;
  let duration = 300;
  const activeTabContentClass = 'tab-v1__content--visible';

  // EVENTS
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', handleOnClick, false);
  });

  // HANDLERS
  function handleOnClick() {
    const accordion = this.closest('[data-accordion]');
    const accordionWrapper = accordion.closest('[data-accordions]');
    const isNeedClosePrevious = accordionWrapper.dataset.accordions;

    if (isNeedClosePrevious === 'close-previous') {
      const previousAccordion = accordionWrapper.querySelector(`.${activeClass}`);

      if (previousAccordion) {
        if (previousAccordion === accordion) {
          toggleAccordion(accordion);
        } else {
          closeAccordion(previousAccordion);
          openAccordion(accordion);
        }
      } else {
        toggleAccordion(accordion);
      }
    } else {
      toggleAccordion(accordion);
    }
  }

  // FUNCTIONS
  function openAccordion(accordion) {
    const body = accordion.querySelector('[data-accordion-body]');
    const height = body.scrollHeight;
    accordion.classList.add(activeClass);

    anime({
      targets: body,
      height: [0, height],
      easing: 'linear',
      duration: duration,
      complete: function () {
        body.style.height = 'auto';
      },
    });
  }

  function closeAccordion(accordion) {
    const body = accordion.querySelector('[data-accordion-body]');
    const height = body.scrollHeight;
    body.style.height = `${height}px`;
    accordion.classList.remove(activeClass);

    anime({
      targets: body,
      height: 0,
      easing: 'linear',
      duration: duration,
    });
  }

  function toggleAccordion(accordion) {
    accordion.classList.contains(activeClass) ? closeAccordion(accordion) : openAccordion(accordion);
  }
};
