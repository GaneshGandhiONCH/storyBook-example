import heroImage from './hero-image.svg'

export default {
  title: 'Blocks/Heroes/Hero-2',
};

const Template = () => {
  return `<section class="hero-2 v-container">
    <div class="hero-2__content v-col-6">
      <h1 class="hero-2__title title title-h3">
        Many reasons to get up and start to get back in the business 
      </h1>
      <p class="hero-2__text">
        The harder you work for something, the greater you’ll feel when you achieve it.
      </p>
      <div class="hero-2__buttons">
        <a href="#!" class="hero-2__button button-primary button-primary--medium">
          Learn More
        </a>
        <a href="#!" class="hero-2__button button-outline button-outline--medium">
          Demo
        </a>      
      </div>
      <div class="hero-2__open-modal-video open-modal-video">
        <button class="open-modal-video__button" type="button" aria-label="Click to open modal video">
          <svg width="140" height="81" viewBox="0 0 140 81" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_83_1029)"> <rect y="0.85083" width="140" height="80" rx="4" fill="#0B132A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 40.8508C50 29.8108 58.96 20.8508 70 20.8508C81.04 20.8508 90 29.8108 90 40.8508C90 51.8908 81.04 60.8508 70 60.8508C58.96 60.8508 50 51.8908 50 40.8508ZM78 40.8508L66 31.8508V49.8508L78 40.8508Z" fill="white"/> </g> <defs> <clipPath id="clip0_83_1029"> <rect width="140" height="80" fill="white" transform="translate(0 0.85083)"/> </clipPath> </defs> </svg>
        </button>
        <div class="open-modal-video__content">
          <p class="open-modal-video__title">
            The harder you work for something, the greater you’ll feel when you achieve it.
          </p>
          <p class="open-modal-video__tip">
            Click button to watch preview
          </p>
        </div>        
      </div>
    </div>
    <img src="${heroImage}"
      alt="Running man"
      class="hero-2__img hero-2__img v-col-6"
      loading="lazy"
    >
  </section>`;
};

export const Hero2 = Template.bind({});
