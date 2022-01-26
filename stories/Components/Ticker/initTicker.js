export const initTicker = () => {
  const tickersRight = document.querySelectorAll('[data-ticker-right]');
  const tickersLeft = document.querySelectorAll('[data-ticker-left]');
  const DURATION = 40000;

  tickersRight.forEach(ticker => {
    animateTicker(ticker, DURATION, 'to_right');
  })

  tickersLeft.forEach(ticker => {
    animateTicker(ticker, DURATION);
  })
}

function animateTicker(el, duration, direction = 'to_left') {
  const innerEl = el.querySelector('[data-ticker-inner]');
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);

  direction === 'to_left'
    ? el.prepend(cloneEl)
    : el.appendChild(cloneEl);

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
}