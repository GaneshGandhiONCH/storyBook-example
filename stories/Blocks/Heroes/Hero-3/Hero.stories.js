import heroImage from './hero-image.jpg'

export default {
  title: 'Blocks/Heroes/Hero-3',
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    buttonText: { control: 'text' }
  }
};

const Template = ({title, text, buttonText}) => {
  return `<section class="hero-3 v-container">
      <h1 class="hero-3__title title title-h1">${title}</h1>
      <img src="${heroImage}" alt="Some Alt Text" class="hero-3__img" loading="lazy">
      <div class="hero-3__content">
        <p class="hero-3__text">${text}</p>
        <a href="#!" class="hero-3__button button-primary button-primary--medium">${buttonText}</a>
      </div>
  </section>`;
};

export const Hero3 = Template.bind({});
Hero3.args = {
  title: 'Build Your <br> Dream <span class="hero-3__title--red">House</span>',
  text: 'The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result',
  buttonText: 'Free Consultation'
};