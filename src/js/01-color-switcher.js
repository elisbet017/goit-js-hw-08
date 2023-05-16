const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
let timerId = null;
refs.btnStop.setAttribute('disabled', '');

refs.btnStart.addEventListener('click', onStartSwitchColor);
refs.btnStop.addEventListener('click', onStopSwitchColor);

function onStartSwitchColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.setAttribute('disabled', '');
  refs.btnStop.removeAttribute('disabled', '');
}

function onStopSwitchColor() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled', '');
  refs.btnStop.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
