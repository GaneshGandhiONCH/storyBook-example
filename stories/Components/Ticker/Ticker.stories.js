import {initTicker} from "./initTicker";

export default {
  title: 'Components/Ticker',
  argTypes: {
    textRightDirection: { control: 'text' },
    textLeftDirection: { control: 'text' },
  }
};

const Template = ({ textRightDirection, textLeftDirection }) => {
  return `<div class="ticker" data-ticker-right>
            <p class="ticker__text" data-ticker-inner>${textRightDirection}</p>
          </div>
          <div class="ticker" data-ticker-left>
            <p class="ticker__text" data-ticker-inner>${textLeftDirection}</p>
          </div>`;
};

export const Ticker = Template.bind({});
Ticker.args = {
  textRightDirection: '/ Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals / Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals',
  textLeftDirection: '/ Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals / Yet a team of 20 pros / Products working worldwide / Monthly company growth / Challenging marketing / Advanced development / Products for Mobile & Desktop / Friendly team & flexible work conditions / Ambitious goals',
};


window.addEventListener('load', () => {
  initTicker();
})