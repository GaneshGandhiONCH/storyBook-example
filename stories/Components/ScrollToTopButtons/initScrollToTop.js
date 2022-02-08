export const initScrollToTop = () => {
  // VARS
  const target = document.querySelector('[data-scroll-to-top-button]');
  if (!target) return;

  // LISTENERS
  target.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', function () {
    window.pageYOffset > 400
      ? target.classList.add('scroll-to-top-button-v1--visible')
      : target.classList.remove('scroll-to-top-button-v1--visible');
  })
};