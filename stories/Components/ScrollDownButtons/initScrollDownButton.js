export const initScrollDownButton = (distance = window.innerHeight) => {
  const button = document.querySelector('[data-scroll-down-button]');

  button.addEventListener('click', function () {
    window.scrollTo({
      top: distance,
      behavior: 'smooth',
    })
  })
}


