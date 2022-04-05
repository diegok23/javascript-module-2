//## Part 1

const changeColorBlue = document.querySelector('#blueBtn');
changeColorBlue.addEventListener('click', () => {
  document.querySelector('.jumbotron').style.backgroundColor = '#588fbd';
  document.querySelector('.buttons .btn-primary').style.backgroundColor = '#ffa500';
  document.querySelector('.buttons .btn-secondary').style.backgroundColor = 'black';
  document.querySelector('.buttons .btn-secondary').style.color = 'white';
});

const changeColorOrange = document.querySelector('#orangeBtn');
changeColorOrange.addEventListener('click', () => {
  document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e';
  document.querySelector('.buttons .btn-primary').style.backgroundColor = '#5751fd';
  document.querySelector('.buttons .btn-secondary').style.backgroundColor = '31b0d5';
  document.querySelector('.buttons .btn-secondary').style.color = 'white';
});

const changeColorGreen = document.querySelector('#greenBtn');
changeColorGreen.addEventListener('click', () => {
  document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a';
  document.querySelector('.buttons .btn-primary').style.backgroundColor = 'black';
  document.querySelector('.buttons .btn-secondary').style.backgroundColor = '8c9c08';
});

//## Part 2

const email = document.querySelector('exampleInputEmail1');
const userName = document.querySelector('example-text-input');
const description = document.querySelector('exampleTextarea');
const checkForm = document.querySelector('form');
console.log(exampleInputEmail1);

checkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#exampleInputEmail1');
  const userName = document.querySelector('#example-text-input');
  const description = document.querySelector('#exampleTextarea');

  const isValidEmail = email.value.length > 0 && email.value.includes('@');
  const isValidUserName = userName.value.length > 0;
  const isValidDescription = description.value.length > 0;

  if (isValidEmail && isValidUserName && isValidDescription) {
    email.value = '';
    userName.value = '';
    description.value = '';
    email.style.backgroundColor = '#ffffff';
    userName.style.backgroundColor = '#ffffff';
    description.style.backgroundColor = '#ffffff';
    alert('Thanks for filling out the form');
  } else {
    if (!isValidEmail) {
      email.style.backgroundColor = 'red';
    }
    if (!isValidUserName) {
      userName.style.backgroundColor = 'red';
    } else {
      userName.style.backgroundColor = 'white';
    }
    if (!isValidDescription) {
      description.style.backgroundColor = 'red';
    } else {
      description.style.backgroundColor = 'white';
    }
  }
});
