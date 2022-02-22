export const initScrollToTop = () => {
  // VARS
  const button = document.querySelector('[data-scroll-to-top-button]');
  if (!button) return;

  // LISTENERS
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', function () {
    toggleButton();
  })

  // INITS
  toggleButton();


  // FUNCTION
  function toggleButton() {
    window.pageYOffset > 400
      ? button.classList.add('scroll-to-top-button-v1--visible')
      : button.classList.remove('scroll-to-top-button-v1--visible');
  }
};