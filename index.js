const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButtton = document.querySelector("#pause");

class Timer {
  constructor(durationInput, startButton, pauseButtton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButtton = pauseButtton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButtton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemainig <= 0) {
      this.pause();
    } else {
      this.timeRemainig = this.timeRemainig - 1;
    }
  };

  get timeRemainig() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemainig(time) {
    this.durationInput.value = time;
  }
}

new Timer(durationInput, startButton, pauseButtton);
