let timer;
let time = 0;
let running = false;

function updateTime() {
  const display = document.querySelector('.display');
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  display.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (!running) {
    timer = setInterval(() => {
      time++;
      updateTime();
    }, 1000);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  time = 0;
  updateTime();
  document.querySelector('.laps').innerHTML = '';
}

function lapTimer() {
  const lapsList = document.querySelector('.laps');
  const lapTime = time;
  const lapItem = document.createElement('li');
  const hours = Math.floor(lapTime / 3600);
  const minutes = Math.floor((lapTime % 3600) / 60);
  const seconds = lapTime % 60;
  lapItem.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  lapsList.appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);
