// Local storage
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message');
const allInputs = document.querySelectorAll('input');

const storeData = () => {
  const inputData = {
    inputName: nameInput.value,
    inputEmail: emailInput.value,
    inputText: messageInput.value,
  };
  localStorage.setItem('UserData', JSON.stringify(inputData));
};

const storeData = () => {
  const inputData = {
    inputName: nameInput.value,
    inputEmail: emailInput.value,
    inputText: messageInput.value,
  };
  localStorage.setItem('UserData', JSON.stringify(inputData));
};

allInputs.forEach((input) => {
  input.addEventListener('input', storeData);
});

const prefillData = JSON.parse(localStorage.getItem('UserData'));

if (prefillData) {
  nameInput.value = prefillData.inputName;
  emailInput.value = prefillData.inputEmail;
  messageInput.value = prefillData.inputText;
}
