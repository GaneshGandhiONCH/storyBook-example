import heroImage from './hero-image.svg'

export default {
  title: 'Blocks/Heroes/Hero-2',
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    buttonText1: { control: 'text' },
    buttonText2: { control: 'text' },
    videoName: { control: 'text' },
    videoTip: { control: 'text' },
  }
};

const Template = ({title, text, buttonText1, buttonText2, videoName, videoTip}) => {
  return `<section class="hero-2 v-container">
    <div class="hero-2__content">
      <h1 class="hero-2__title title title-h3">${title}</h1>
      <p class="hero-2__text">${text}</p>
      <div class="hero-2__buttons">
        <a href="#!" class="hero-2__button button-primary button-primary--medium">${buttonText1}</a>
        <a href="#!" class="hero-2__button button-outline button-outline--medium">${buttonText2}</a>      
      </div>
      <div class="hero-2__open-modal-video open-modal-video">
        <button class="open-modal-video__button" type="button" aria-label="Click to open modal video" >
          <svg class="open-modal-video__button-icon" width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205933 20C0.205933 8.96 9.62711 0 21.2353 0C32.8436 0 42.2648 8.96 42.2648 20C42.2648 31.04 32.8436 40 21.2353 40C9.62711 40 0.205933 31.04 0.205933 20ZM29.647 20L17.0293 11V29L29.647 20Z" fill="white" ></path> </svg>
        </button>
        <div class="open-modal-video__content">
            <p class="open-modal-video__title">${videoName}</p>
            <p class="open-modal-video__tip">${videoTip}</p>
        </div>
    </div>
    </div>
    <img src="${heroImage}"
      alt="Running man"
      class="hero-2__img"
      loading="lazy"
    >
  </section>`;
};

export const Hero2 = Template.bind({});
Hero2.args = {
  title: 'Many reasons to get up and start to get back in the business',
  text: 'The harder you work for something, the greater you’ll feel when you achieve it.',
  buttonText1: 'Learn More',
  buttonText2: 'Demo',
  videoName: 'The harder you work for something, the greater you’ll feel when you achieve it.',
  videoTip: 'Click button to watch preview',
};