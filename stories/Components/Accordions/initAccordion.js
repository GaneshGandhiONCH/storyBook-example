import anime from 'animejs/lib/anime.es.js';

export const initAccordion = () => {
  // VARS
  const toggles = document.querySelectorAll('[data-accordion-toggle]');
  if (!toggles.length) return;
  let duration = 300;
  const activeClass = 'is-open-accordion';

  // EVENTS
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', handleOnClick, false);
  });

  // HANDLERS
  function handleOnClick() {
    const accordion = this.closest('[data-accordion]');

    accordion.classList.contains(activeClass) ? closeAccordion(accordion) : openAccordion(accordion);
    changeButtonText(this);
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
};
