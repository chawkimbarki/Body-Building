// ============================================ Declarations ==================================

const trainers = [
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger1',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger2',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger3',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger4',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger5',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger6',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
];
const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('#burger');
const cross = document.querySelector('.cross-container');
const trainerButton = document.querySelector('.trainer-btn');

// ============================================ Functions ====================================

// this function will toggle the display status of the navigation bar
function displayNavigation() {
  const nav = document.querySelector('#navigation');
  nav.classList.toggle('invisible');
}

// this function will generate trainers in the trainers section
function generateTrainers(start, number) {
  const trainersContainer = document.querySelector('#trainers-container');
  for (let i = start; i < number; i += 1) {
    trainersContainer.innerHTML += `
      <div class="trainer-card">
        <img src="assets/Shapes/chess-board.png" alt="" class="trainer-deco">
        <img src="${trainers[i].image}" alt="" class="trainer-img">
        <div class="trainer-info">
          <h3 class="trainer-name">${trainers[i].name}</h3>
          <h4 class="trainer-occ" >${trainers[i].occupation}</h4>
          <hr>
          <p class="trainer-para">${trainers[i].info}</p>
        </div>
      </div>`;
  }
}

// this function will delete trainers from trainers section
function deleteTrainers(start, number) {
  document.querySelectorAll(`#trainers-container > div:nth-last-child(-n+${number - 2})`).forEach((n) => {
    n.parentNode.removeChild(n);
  });
}

// this function will see if we should delete or add trainers from the trainers section
function trainersChecker() {
  const moreLess = document.querySelector('#moreless');
  const chevron = document.querySelector('#chevron');

  if (moreLess.innerHTML === 'MORE ') {
    generateTrainers(2, trainers.length);
    moreLess.innerHTML = 'LESS ';
  } else {
    deleteTrainers(2, trainers.length);
    moreLess.innerHTML = 'MORE ';
  }
  chevron.classList.toggle('up');
}

// This function will see the screen width, and based on that
// it shows all trainers or just the first two
function widthTester() {
  if (window.innerWidth >= 768) {
    document.getElementById('trainers-container').innerHTML = '';
    generateTrainers(0, trainers.length);
  } else {
    const moreLess = document.querySelector('#moreless');
    const chevron = document.querySelector('#chevron');
    document.getElementById('trainers-container').innerHTML = '';
    generateTrainers(0, 2);
    chevron.classList.remove('up');
    moreLess.innerHTML = 'MORE ';
  }
}

// ======================================== Execution ======================

navLinks.forEach((link) => { link.addEventListener('click', displayNavigation); });
menu.addEventListener('click', displayNavigation);
cross.addEventListener('click', displayNavigation);
trainerButton.addEventListener('click', trainersChecker);

window.addEventListener('resize', widthTester);
