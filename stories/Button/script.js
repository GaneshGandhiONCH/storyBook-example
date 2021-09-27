export const initButton = () => {
  const button = document.querySelector('[data-button]');

  button?.addEventListener('click', handleOnClickButton, false);

  function handleOnClickButton() {
    console.log(this);
  }
}

setTimeout(() => {
  initButton();
}, 10);

