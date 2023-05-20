// ---------- Preserve datat in Local Storage ---------
const contactForm = document.getElementById('contact-form');
const contactEmail = document.getElementById('email-input');
const formName = document.getElementById('Name');
const formMessage = document.getElementById('message');
contactForm.addEventListener('input', () => {
  const formData = {
    name: formName.value,
    email: contactEmail.value,
    message: formMessage.value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formData));
});

function showData() {
  const userData = JSON.parse(localStorage.getItem('contactForm'));
  if (userData) {
    formName.value = userData.name;
    contactEmail.value = userData.email;
    formMessage.value = userData.message;
  }
}
showData();