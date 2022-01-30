import {AnimateTickerV1} from "./AnimateTickerV1";

export default {
  title: 'Components/Tickers',
  component: 'Ticker',
  argTypes: {
    text: { control: 'text' },
    direction: {
      options: ['to_right', 'to_left'],
      control: { type: 'select' }
    },
    duration: '40000'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new AnimateTickerV1();
  }, 0)
})

const Template = ({ text, direction, duration }) => {
  return `<div class="ticker-v1" 
               data-ticker
               data-ticker-direction="${direction ? direction : 'to_right'}"
               data-ticker-duration="${duration ? duration : '40000'}"
         >
            <p class="ticker-v1__text" data-ticker-inner>${text}</p>
          </div>`;
};

export const Ticker_version_1 = Template.bind({});
Ticker_version_1.args = {
  text: '/ Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals / Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals',
  direction: 'to_right',
  duration: '40000',
};

window.addEventListener('load', () => {
  new AnimateTickerV1();
})