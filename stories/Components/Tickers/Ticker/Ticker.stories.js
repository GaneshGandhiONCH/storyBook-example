import {initTickerV1} from "./initTicker";

export default {
  title: 'Components/Tickers/Ticker_v1',
  argTypes: {
    textRightDirection: { control: 'text' },
    textLeftDirection: { control: 'text' },
  }
};

const Template = ({ textRightDirection, textLeftDirection }) => {
  return `<div class="ticker-v1" data-ticker-v1-right>
            <p class="ticker-v1__text" data-ticker-v1-inner>${textRightDirection}</p>
          </div>
          <div class="ticker-v1" data-ticker-v1-left>
            <p class="ticker-v1__text" data-ticker-v1-inner>${textLeftDirection}</p>
          </div>`;
};

export const Ticker_v1 = Template.bind({});
Ticker_v1.args = {
  textRightDirection: '/ Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals / Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals',
  textLeftDirection: '/ Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals / Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals',
};


window.addEventListener('load', () => {
  initTickerV1();
})