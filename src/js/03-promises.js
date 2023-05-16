import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  submitBtn: document.querySelector('[type="submit"]'),
  delay: document.querySelector('[name="delay"]').value,
  step: document.querySelector('[name="step"]').value,
  amount: document.querySelector('[name="amount"]').value,
};

refs.submitBtn.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    for (let i = 1; i <= refs.amount; i += 1) {
      createPromise(i, refs.step);
    }
  }, refs.delay);
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
