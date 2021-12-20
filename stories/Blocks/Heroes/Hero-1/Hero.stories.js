import hero_1 from './hero-images.svg'

export default {
  title: 'Blocks/Heroes/Hero-1',
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    buttonText: { control: 'text' },
  }
};

const Template = ({title, text, buttonText}) => {
  return `<section class="hero-1 v-container">
    <div class="hero-1__content">
      <h1 class="hero-1__title title title-h3">${title}</h1>
      <p class="hero-1__text">${text}</p>
      <img src="${hero_1}"
        alt="Some peoples with phone"
        class="hero-1__img hero-1__img--mobile"
        loading="lazy"
      >
      <a href="#!" class="hero-1__button button-primary button-primary--medium">${buttonText}</a>
    </div>
    <img src="${hero_1}"
      alt="Some peoples with phone"
      class="hero-1__img hero-1__img--desktop"
      loading="lazy"
    >
  </section>`;
};

export const Hero1 = Template.bind({});
Hero1.args = {
  title: 'Want anything to be easy with LaslesVPN.',
  text: 'Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.',
  buttonText: 'Get Started'
};