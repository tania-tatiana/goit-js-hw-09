const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailFrom = form.querySelector('.email-input');
const messageFrom = form.querySelector('.message-textarea');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', event => {
  if (event.target === emailInput) {
    formData.email = event.target.value;
  } else if (event.target === messageTextarea) {
    formData.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state');
});
