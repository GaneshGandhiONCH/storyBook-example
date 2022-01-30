export function AnimateTickerV1() {
  const tickers = document.querySelectorAll('[data-ticker]');
  if (!tickers.length) return;

  tickers.forEach((ticker) => {
    const innerEl = ticker.querySelector('[data-ticker-inner]');
    const duration = +ticker.dataset.tickerDuration;
    const direction = ticker.dataset.tickerDirection;
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);

    direction === 'to_left'
      ? ticker.prepend(cloneEl)
      : ticker.appendChild(cloneEl);

    let start = performance.now();
    let progress;
    let translateX;

    requestAnimationFrame(function step(now) {
      progress = (now - start) / duration;

      if (progress > 1) {
        progress %= 1;
        start = now;
      }

      if (direction === 'to_left') {
        translateX = innerWidth * progress;
        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
      } else {
        translateX = innerWidth * progress - innerWidth;
        innerEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
      }

      requestAnimationFrame(step);
    });
  })
}