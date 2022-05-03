//DOM
const carousel = document.createElement('div');
carousel.className = 'carousel';
document.body.appendChild(carousel);
carousel.innerHTML =
  '<div class="title"><h5></h5><h1>Image Slideshow </h1><h5>by DiegoIK</h5></div>' +
  '<div class="content"><img class="image"></div>' +
  '<div class="buttons">' +
  '<button id="butAutoBck"><h3>Auto Back</h3></button>' +
  '<button id="butBck"><h3>Back</h3></button>' +
  '<button id="butStop"><h3>Stop</h3></button>' +
  '<button id="butFwd"><h3>Forward</h3></button>' +
  '<button id="butAutoFwd"><h3>Auto Forward</h3></button>' +
  '</div>' +
  '<div class="inputDiv"><p>Default slideshow time is 2.5 seconds, you can change in milliseconds</p><input class="input"></input></div>';

const butFwd = document.querySelector('#butFwd');
const butBck = document.querySelector('#butBck');
const butAutoFwd = document.querySelector('#butAutoFwd');
const butAutoBck = document.querySelector('#butAutoBck');
const butStop = document.querySelector('#butStop');
const image = document.querySelector('.image');
const delayInput = document.querySelector('input');

butFwd.addEventListener('click', stepForwards);
butBck.addEventListener('click', stepBack);
butStop.addEventListener('click', stop);
butAutoFwd.addEventListener('click', callStepForwardsAuto);
butAutoBck.addEventListener('click', callStepBackAuto);
delayInput.addEventListener('change', timeToDelay);
console.log(delayInput);
//

const images = ['./img/cat1.jpg', './img/cat2.jpg', './img/cat3.jpg', './img/cat4.jpg'];
let indexImage = 0;
let intervalId = undefined;
let delay = 2500;
image.src = images[0];

console.log(delay);
//FUNCTIONS

function showImage() {
  image.src = images[indexImage];
}

function clearInt() {
  if (intervalId != undefined) {
    window.clearInterval(intervalId);
  }
}

function stop() {
  window.clearInterval(intervalId);
  indexImage = 0;
  image.src = images[0];
  delay = 2500;
  delayInput.value = '';
}

function callStepForwardsAuto() {
  clearInt();
  intervalId = stepForwardsAuto();
  console.log(intervalId);
}

function callStepBackAuto() {
  clearInt();
  intervalId = stepBackAuto();
  console.log(intervalId);
}

function stepForwards() {
  clearInt();
  if (indexImage == images.length - 1) {
    indexImage = 0;
  } else {
    indexImage++;
  }
  showImage();
}

function stepBack() {
  clearInt();
  if (indexImage == 0) {
    indexImage = images.length - 1;
  } else {
    indexImage--;
  }
  showImage();
}

function stepForwardsAuto() {
  return setInterval(() => {
    if (indexImage == images.length - 1) {
      indexImage = 0;
    } else {
      indexImage++;
    }
    showImage();
  }, delay);
}

function stepBackAuto() {
  return setInterval(() => {
    if (indexImage == 0) {
      indexImage = images.length - 1;
    } else {
      indexImage--;
    }
    showImage();
  }, delay);
}

function timeToDelay(event) {
  delay = event.target.value;
  return delay;
}
