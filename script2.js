// ============================================ Declarations ==================================

const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('#burger');
const cross = document.querySelector('.cross-container');

// ============================================ Functions ====================================

// this function will toggle the display status of the navigation bar
function displayNavigation() {
  const nav = document.querySelector('#navigation');
  nav.classList.toggle('invisible');
}

// ======================================== Execution ======================

navLinks.forEach((link) => { link.addEventListener('click', displayNavigation); });
menu.addEventListener('click', displayNavigation);
cross.addEventListener('click', displayNavigation);
