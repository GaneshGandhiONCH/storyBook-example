export default {
  title: 'Components/Cards/ReviewCards/ReviewCard-1',
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    text: { control: 'text' },
  },
};

const Template = ({ title, date, text }) => {
  return `<div class="review-card-1" style="max-width: 400px;">
            <div class="review-card-1__author"> ${title} </div>
            <div class="review-card-1__info">
                <div class="review-card-1__star"></div>
                <div class="review-card-1__star"></div>
                <div class="review-card-1__star"></div>
                <div class="review-card-1__star"></div>
                <div class="review-card-1__star"></div>
                <div class="review-card-1__date">${date}</div>
            </div>
            <p class="review-card-1__text"> ${text} </p>
        </div>`;
};

export const ReviewCard1 = Template.bind({});
ReviewCard1.args = {
  title: 'Selina Kyle',
  date: '19.10.2021',
  text: 'Hire the best ‘Philmonitor’ he is good… Hire the best ‘Philmonitor’ he is good and swift...very much affordable.. To be honest I will use Philmonitor … Via inSta every time Hire the best I repeat again philmonitor… only.',
};