const hamburger = document.querySelector('.hamburger-menu');
const hamburgerIcon = hamburger.querySelector('span');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburgerIcon.innerText = hamburgerIcon.innerText === 'menu' ? 'close' : 'menu';
  mobileMenu.classList.toggle('active')
});