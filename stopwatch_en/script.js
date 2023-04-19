const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const millisecond = document.querySelector('.millisecond');
const startBtn = document.getElementById('start');
const lapBtn = document.getElementById('lap');
const resetBtn = document.getElementById('reset');
const lapList = document.getElementById('lap-list');

let startTime;
let elapsedTime = 0;
let timerInterval;

const savedLaps = JSON.parse(localStorage.getItem('laps')) || [];

if (savedLaps.length > 0) {
  savedLaps.forEach(lap => {
    const li = document.createElement('li');
    li.innerText = lap;
    lapList.appendChild(li);
  });
}

function timeToString(time) {
  let ms = time % 1000;
  time = (time - ms) / 1000;
  let secs = time % 60;
  time = (time - secs) / 60;
  let mins = time;

  return {
    minutes: String(mins).padStart(2, '0'),
    seconds: String(secs).padStart(2, '0'),
    milliseconds: String(ms).padStart(3, '0').substring(0, 2)
  };
}

function displayTime() {
  const display = timeToString(elapsedTime);
  minute.textContent = display.minutes;
  second.textContent = display.seconds;
  millisecond.textContent = display.milliseconds;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayTime();
  }, 10);

  startBtn.textContent = 'Stop';
  startBtn.removeEventListener('click', start);
  startBtn.addEventListener('click', pause);

  lapBtn.disabled = false;
  resetBtn.disabled = false;
}

function pause() {
  clearInterval(timerInterval);
  startBtn.textContent = 'Start';
  startBtn.removeEventListener('click', pause);
  startBtn.addEventListener('click', start);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime();

  startBtn.textContent = 'Start';
  startBtn.removeEventListener('click', pause);
  startBtn.addEventListener('click', start);

  lapBtn.disabled = true;
  resetBtn.disabled = true;

  localStorage.removeItem('laps');
  lapList.innerHTML = '';
  savedLaps.length = 0;
}

function lap() {
  const li = document.createElement('li');
  const lapTime = timeToString(elapsedTime);
  li.innerText = `${lapTime.minutes}:${lapTime.seconds}.${lapTime.milliseconds}`;
  lapList.appendChild(li);

  savedLaps.push(li.innerText);
  localStorage.setItem('laps', JSON.stringify(savedLaps));
}

startBtn.addEventListener('click', start);
lapBtn.addEventListener('click', lap);
resetBtn.addEventListener('click', reset);
