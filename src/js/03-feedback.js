import throttle from 'lodash.throttle';

const INPUT_VALUE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onSaveInputValue, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onSaveInputValue(e) {
  localStorage.setItem(
    INPUT_VALUE_KEY,
    JSON.stringify({
      email: refs.email.value,
      message: refs.message.value,
    })
  );
}

function onSubmitForm(e) {
  e.preventDefault();
  refs.form.reset();
}

const objectInputsValues = JSON.parse(localStorage.getItem(INPUT_VALUE_KEY));

function updateInput() {
  refs.email.value = objectInputsValues.email || '';
  refs.message.value = objectInputsValues.message || '';
}
updateInput();
