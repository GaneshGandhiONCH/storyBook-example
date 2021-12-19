export default {
  title: 'Components/OpenModalVideoBlocks/OpenModalVideoBlock-1',
  argTypes: {
    title: { control: 'text' },
    tip: { control: 'text' }
  }
};

const Template = ({ title, tip }) => {
  return `<div class="open-modal-video">
        <button class="open-modal-video__button" type="button" aria-label="Click to open modal video">
          <svg class="open-modal-video__button-icon" width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205933 20C0.205933 8.96 9.62711 0 21.2353 0C32.8436 0 42.2648 8.96 42.2648 20C42.2648 31.04 32.8436 40 21.2353 40C9.62711 40 0.205933 31.04 0.205933 20ZM29.647 20L17.0293 11V29L29.647 20Z" fill="white"/> </svg>        
        </button>
        <div class="open-modal-video__content">
          <p class="open-modal-video__title">
            ${title}
          </p>
          <p class="open-modal-video__tip">
            ${tip}
          </p>
        </div>        
      </div>`;
};

export const Outline = Template.bind({});
Outline.args = {
  title: 'The harder you work for something, the greater you’ll feel when you achieve it.',
  tip: 'Click button to watch preview'
};