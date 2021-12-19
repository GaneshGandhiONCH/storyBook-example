export default {
  title: 'Components/OpenModalVideoBlocks/OpenModalVideoBlock-1',
  argTypes: {
    title: { control: 'text' },
    tip: { control: 'text' }
  }
};

const Template = ({ title, tip }) => {
  return `<div class="hero-2__open-modal-video open-modal-video">
        <button class="open-modal-video__button" type="button" aria-label="Click to open modal video">
          <svg width="140" height="81" viewBox="0 0 140 81" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_83_1029)"> <rect y="0.85083" width="140" height="80" rx="4" fill="#0B132A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 40.8508C50 29.8108 58.96 20.8508 70 20.8508C81.04 20.8508 90 29.8108 90 40.8508C90 51.8908 81.04 60.8508 70 60.8508C58.96 60.8508 50 51.8908 50 40.8508ZM78 40.8508L66 31.8508V49.8508L78 40.8508Z" fill="white"/> </g> <defs> <clipPath id="clip0_83_1029"> <rect width="140" height="80" fill="white" transform="translate(0 0.85083)"/> </clipPath> </defs> </svg>
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