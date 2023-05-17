const hamburger = document.querySelector('.hamburger-menu');
const hamburgerIcon = hamburger.querySelector('span');
const mobileMenu = document.querySelector('.mobile-nav');
const closeHam = document.querySelector('.close-menu');
const closeIcon = closeHam.querySelector('span');
const links = mobileMenu.querySelectorAll('a');

function toggleMenu() {
  hamburgerIcon.innerText = hamburgerIcon.innerText === 'menu' ? 'close' : 'menu';
  mobileMenu.classList.toggle('active');
}

function resetMenu() {
  hamburgerIcon.innerText = 'menu';
  closeIcon.innerText = 'close';
  mobileMenu.classList.remove('active');
}

hamburger.addEventListener('click', toggleMenu);
closeHam.addEventListener('click', resetMenu);

links.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerIcon.innerText = 'menu';
    mobileMenu.classList.remove('active');
  });
});
