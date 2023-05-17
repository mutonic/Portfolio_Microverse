const hamburger = document.querySelector('.hamburger-menu');
const hamburgerIcon = hamburger.querySelector('span');
const mobileMenu = document.querySelector('.mobile-nav');
const closeHam = document.querySelector('.close-menu');
const closeIcon = closeHam.querySelector('span');

//  const links = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  hamburgerIcon.innerText = hamburgerIcon.innerText === 'menu' ? 'close' : 'menu';
  mobileMenu.classList.toggle('active');
});

closeHam.addEventListener('click', () => {
  hamburgerIcon.innerText = 'menu';
  closeIcon.innerText = 'close';
  mobileMenu.classList.remove('active');
});
