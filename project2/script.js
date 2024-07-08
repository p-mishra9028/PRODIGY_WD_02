let timer;
let startTime;
let elapsedTime = 0;
let laps = [];

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  laps = [];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  laps.push(elapsedTime);
  const lapTime = formatTime(elapsedTime);
  const lapList = document.getElementById('laps');
  const li = document.createElement('li');
  li.textContent = `Lap ${laps.length}: ${lapTime}`;
  lapList.insertBefore(li, lapList.firstChild);
}

function updateDisplay() {
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('hours').textContent = formattedTime.hours;
  document.getElementById('minutes').textContent = formattedTime.minutes;
  document.getElementById('seconds').textContent = formattedTime.seconds;
  document.getElementById('milliseconds').textContent = formattedTime.milliseconds;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  const ms = (milliseconds % 1000).toString().padStart(3, '0');
  return { hours, minutes, seconds, milliseconds: ms };
}
