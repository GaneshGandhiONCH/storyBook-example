export const initAccordions = () => {
  // VARS
  const accordionsToggler = document.querySelectorAll('[data-accordion-toggler]');
  const activeClass = 'accordion-v1--is-open'

  // LISTENERS
  accordionsToggler.forEach(toggle => {
    toggle.addEventListener('click', handleOnClickToggle, false);
  });

  // HANDLERS
  function handleOnClickToggle() {
    const accordions = this.closest('[data-accordions]');

    if (accordions.dataset.accordions === 'close-previous') {
      closePrevious(this);
      toggle(this);
    } else {
      toggle(this);
    }
  }

  // FUNCTIONS
  function toggle(toggler) {
    const accordion = toggler.closest('[data-accordion]');

    accordion.classList.toggle(activeClass);

    accordion.classList.contains(activeClass)
      ? open(toggler)
      : close(toggler);
  }

  function open(toggler) {
    const accordion = toggler.closest('[data-accordion]');
    const body = accordion.querySelector('[data-accordion-body]');

    body.style.maxHeight = body.scrollHeight + "px";
    setAriaExpanded(accordion, body);
  }

  function close(toggler) {
    const accordion = toggler.closest('[data-accordion]');
    const body = accordion.querySelector('[data-accordion-body]');

    body.style.maxHeight = '';
    setAriaNotExpanded(accordion, body);
  }

  function closePrevious(toggler) {
    const accordions = toggler.closest('[data-accordions]');
    const accordion = toggler.closest('[data-accordion]');
    const activeAccordion = accordions.querySelector(`.${activeClass}`);
    if (!activeAccordion) return;
    const bodyActiveAccordion = activeAccordion.querySelector('[data-accordion-body]');
    const body = accordion.querySelector('[data-accordion-body]');

    // if can close all when close-previous
    if (accordion !== activeAccordion) {
      activeAccordion.classList.remove(activeClass);
    }

    // if can not close all when close-previous
    // activeAccordion.classList.remove(activeClass);

    bodyActiveAccordion.style.maxHeight = null;

    setAriaExpanded(accordion, body);
    setAriaNotExpanded(activeAccordion, bodyActiveAccordion);
  }

  function setAriaExpanded(accordion, accordionBody) {
    accordion.setAttribute('aria-expanded', 'true');
    accordionBody.setAttribute('aria-hidden', 'false');
  }

  function setAriaNotExpanded(accordion, accordionBody) {
    accordion.setAttribute('aria-expanded', 'false');
    accordionBody.setAttribute('aria-hidden', 'true');
  }
}
