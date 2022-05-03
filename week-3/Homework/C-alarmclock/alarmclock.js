function setAlarm() {
  let counter = document.querySelector('#alarmSet').value;
  let timeInput = document.querySelector('#timeRemaining');
  let minutes;
  let seconds;

  setMinutesAndSeconds();
  const interval = setInterval(reverseCounter, 1000);

  function reverseCounter() {
    if (counter > 0) {
      counter = counter - 1;
      setMinutesAndSeconds();
    } else {
      clearInterval(interval);
      playAlarm();
    }
  }

  function setMinutesAndSeconds() {
    if (counter < 60) {
      minutes = '00';
      seconds = counter;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
    }
    if (counter >= 60) {
      if (counter % 60 === 0) {
        seconds = '00';
        minutes = counter / 60;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
      } else {
        let minutesAndSeconds = (counter / 60).toString();
        minutes = parseInt(minutesAndSeconds.split('.')[0]);
        seconds = counter - minutes * 60;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
      }
    }
    timeInput.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio('alarmsound.mp3');

function setup() {
  document.getElementById('set').addEventListener('click', () => {
    setAlarm();
  });

  document.getElementById('stop').addEventListener('click', () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
