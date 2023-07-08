import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const submitButton = document.querySelector('.feedback-form > button');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(savedData, 500));
submitButton.addEventListener('click', submitF);

function savedData() {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

if (localStorage.length !== 0) {
  email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
  message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
}

function submitF(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Todos los campos deben ser diligenciados');
  }

  savedData();
  console.log({ email: email.value, message: message.value });

  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
