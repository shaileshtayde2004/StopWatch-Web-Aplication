// stopwatch time
let display = document.getElementById("display");

let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

//  numbers for tracking time
let startTime = 0;
let timePassed = 0;
let timer;
let isRunning = false;

// This function changes the numbers into time (HH:MM:SS:MS)
function formatTime(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms % 3600000) / 60000);
  let seconds = Math.floor((ms % 60000) / 1000);
  let milliseconds = ms % 1000;

  // Make numbers always show 2 or 3 digits
  return (
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0') + ":" +
    String(milliseconds).padStart(3, '0')
  );
}


function startTimer() {
  startTime = Date.now() - timePassed;
  timer = setInterval(() => {
    timePassed = Date.now() - startTime;
    display.textContent = formatTime(timePassed);
  }, 10); // Update every 10 milliseconds
  startStopBtn.textContent = "Pause";
  isRunning = true;
}

function stopTimer() {
  clearInterval(timer);
  startStopBtn.textContent = "Start";
  isRunning = false;
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer(); 
  } else {
    startTimer();
  }
});

// for reset button
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timePassed = 0;
  display.textContent = "00:00:00:000";
  startStopBtn.textContent = "Start";
  isRunning = false;
});
