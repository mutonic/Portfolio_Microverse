const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  const checkEmail = document.getElementById('email-input');
  const invalid = document.querySelector('#email-error');
  event.preventDefault();
  if (checkEmail.value !== checkEmail.value.toLowerCase()) {
    invalid.innerText = 'Email should be in lowercase.';
    checkEmail.style.borderColor = 'red';
  } else {
    form.submit();
  }
});
