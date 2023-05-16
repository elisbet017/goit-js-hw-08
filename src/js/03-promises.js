const refs = {
  submitBtn: document.querySelector('[type="submit"]'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};
// refs.submitBtn.addEventListener('submit', createPromise);

refs.submitBtn.addEventListener('submit', test);

function test(e) {
  e.preventDefault();
  console.log(refs.delay.value);
}
function createPromise() {
  // console.log(refs.step.value);
  // console.log(refs.amount.value);
  // const shouldResolve = Math.random() > 0.3;
  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
}
