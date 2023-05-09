import throttle from 'lodash.throttle';

const INPUT_VALUE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onSaveInputValue, 500));
refs.form.addEventListener('submit', onSubmitForm);

let dataForm = {};

function onSaveInputValue(e) {
  dataForm[e.target.name] = e.target.value.trim();
  localStorage.setItem(INPUT_VALUE_KEY, JSON.stringify(dataForm));
}

function onSubmitForm(e) {
  e.preventDefault();

  console.log(dataForm);
  dataForm = {};

  e.target.reset();
  localStorage.removeItem(INPUT_VALUE_KEY);
}

function updateInput() {
  try {
    const data = localStorage.getItem(INPUT_VALUE_KEY);
    if (!data) return;
    dataForm = JSON.parse(data);
    Object.entries(dataForm).forEach(([key, value]) => {
      refs.form.elements[key].value = value;
    })
  } catch (error) {
    console.log(error.message);
  }
}
updateInput();
