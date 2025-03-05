const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailForm = form.querySelector('.email-input');
const messageForm = form.querySelector('.message-textarea');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;
  emailForm.value = formData.email;
  messageForm.value = formData.message;
} else {
  emailForm.value = '';
  messageForm.value = '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email') {
    formData.email = value.trim();
  } else if (name === 'message') {
    formData.message = value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

    emailForm.value = '';
    messageForm.value = '';
  }
});
