export const scrollToElem = (targetSelector, offset) => {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  return window.scrollTo({
    top: target.offsetTop + offset,
    behavior: 'smooth'
  })
};