const myArrayCircleEndSliders = [
  '.main-banner',
  '.default.light',
  '.section-client'
];

const active = {
  circleTeamActive: false,
  circleSliderActive: false
};

const menuOpener = document.querySelector('.menu-opener');
const nav = document.querySelector('nav');

menuOpener.addEventListener('click', () =>
  nav.classList.toggle('menu-opener--active')
);

let circle = [];

for (let index in myArrayCircleEndSliders) {
  circle[index] = document.querySelectorAll(
    myArrayCircleEndSliders[index] + ' .slider-pointers .pointer'
  );
}

const sliders = document.querySelector('.sliders');
const duration = '0.5s';

const removeClasses = (...element) => {
  if (active.circleSliderActive) {
    for (let index in element) {
      circle[0][element[index]].classList.remove('active-circle');
    }
  }
  if (active.circleTeamActive) {
    for (let index in element) {
      circle[1][element[index]].classList.remove('active-circle');
    }
  }
};

const addClasses = element => {
  if (active.circleSliderActive) {
    circle[0][element].classList.add('active-circle');
  }
  if (active.circleTeamActive) {
    circle[1][element].classList.add('active-circle');
  }
};

const styleTransitionDuration = prop =>
  (sliders.style.transitionDuration = prop);

const styleMarginLeft = prop => (sliders.style.marginLeft = prop);

for (let index = 0; index < circle.length; index++) {
  circle[0][index].addEventListener('click', function () {
    active.circleSliderActive = true;
    if (index === 0) {
      removeClasses(1, 2);
      addClasses(index);
      styleTransitionDuration(duration);
      styleMarginLeft('0');
    } else if (index === 1) {
      removeClasses(0, 2);
      addClasses(index);
      styleTransitionDuration(duration);
      styleMarginLeft('-100vw');
    } else {
      removeClasses(0, 1);
      addClasses(index);
      styleTransitionDuration(duration);
      styleMarginLeft('-200vw');
    }
  });
}

/* const secondaryCircle = element => {
  
} */

for (let index = 0; index < circle.length; index++) {
  circle[1][index].addEventListener('click', function () {
    active.circleTeamActive = true;
    console.log(active.circleTeamActive);
    if (index === 0) {
      removeClasses(1, 2);
      addClasses(index);
    } else if (index === 1) {
      removeClasses(0, 2);
      addClasses(index);
    } else {
      removeClasses(0, 1);
      addClasses(index);
    }
  });
}
