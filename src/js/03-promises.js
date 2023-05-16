import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    for (let i = 1; i <= refs.amount.value; i += 1) {
      if ((i = 2)) {
        const firstDelay = refs.delay.value + refs.step.value * i;
        const currentDelay = refs.step.value * i;
        setTimeout(() => {
          createPromise(i, currentDelay);
        }, firstDelay);
      } else {
        setTimeout(() => {
          createPromise(i, currentDelay);
        }, currentDelay);
      }
    }
  }, refs.delay.value);
}
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });

  promise
    .then(result => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(result => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
