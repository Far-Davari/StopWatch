// vars
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const resumeBtn = document.querySelector("#resume");

let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");
let tens = document.querySelector("#tens");

let minutesIntial = 0;
let secondsInitial = 0;
let tensInitial = 00;

let interval; // store timer values

function startTimer() {
  tensInitial++;

  if (tensInitial <= 9) {
    tens.innerHTML = "0" + tensInitial;
  }
  if (tensInitial > 9) {
    tens.innerHTML = tensInitial;
  }

  if (tensInitial > 99) {
    secondsInitial++;
    seconds.innerHTML = "0" + secondsInitial;
    tensInitial = 0;
    tensInitial.innerHTML = "0" + 0;
  }

  if (secondsInitial > 9) {
    seconds.innerHTML = secondsInitial;
  }

  if (secondsInitial > 59) {
    minutesIntial++;
    minutes.innerHTML = "0" + minutesIntial;
    secondsInitial = 0;
    seconds.innerHTML = "0" + 0;
  }
} 

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10)
});

resumeBtn.addEventListener("click", () => {
  clearInterval(interval);
})

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tensInitial = "00";
  secondsInitial = "00";
  minutesIntial = "00"

  tens.innerHTML = tensInitial;
  seconds.innerHTML = secondsInitial;
  minutes.innerHTML = minutesIntial;
})
