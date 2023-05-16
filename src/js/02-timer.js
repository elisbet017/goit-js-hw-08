import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dataInput: document.querySelector('[id="datetime-picker"]'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onChooseDate(selectedDates);
  },
};

function onChooseDate(selectedDates) {
  const chooseDate = new Date(selectedDates[0]).getTime();
  if (Date.now() > chooseDate) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  refs.startBtn.removeAttribute('disabled', '');
  refs.startBtn.addEventListener('click', onStartBtnClick);

  function onStartBtnClick() {
    refs.startBtn.setAttribute('disabled', '');
    showTime();
    const intervalId = setInterval(showTime, 1000);
    function showTime() {
      if (Date.now() >= chooseDate) {
        clearInterval(intervalId);
        return;
      }
      const timeLeft = chooseDate - Date.now();
      function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = addLeadingZero(Math.floor(ms / day));
        // Remaining hours
        const hours = addLeadingZero(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = addLeadingZero(
          Math.floor(((ms % day) % hour) / minute)
        );
        // Remaining seconds
        const seconds = addLeadingZero(
          Math.floor((((ms % day) % hour) % minute) / second)
        );

        return { days, hours, minutes, seconds };
      }
      const time = convertMs(timeLeft);

      refs.days.textContent = time.days;
      refs.hours.textContent = time.hours;
      refs.minutes.textContent = time.minutes;
      refs.seconds.textContent = time.seconds;
    }
  }
}

flatpickr(refs.dataInput, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
