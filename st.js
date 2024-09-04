let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateDisplay, 10);
    running = true;
    startStopBtn.textContent = 'Pause';
}

function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
    startStopBtn.textContent = 'Start';
}

function resetStopwatch() {
    clearInterval(timerInterval);
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.textContent = `${pad (hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startStopwatch();
    } else {
        stopStopwatch();
    }
});

resetBtn.addEventListener('click', resetStopwatch);