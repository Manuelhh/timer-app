const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButtton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

class Timer {
  constructor(durationInput, startButton, pauseButtton, resetButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButtton = pauseButtton;
    this.resetButton = resetButton;

    this.timePassed = 0;

    this.startButton.addEventListener("click", this.start);
    this.pauseButtton.addEventListener("click", this.pause);
    this.resetButton.addEventListener("click", this.reset);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
    clearInterval(this.seconds);
  };

  reset = () => {
    this.pause();
    this.timeRemainig = this.timeRemainig + this.timePassed;
    this.timePassed = 0;
  };

  tick = () => {
    if (this.timeRemainig <= 0) {
      this.pause();
    } else {
      console.log(this.timePassed);
      this.timeRemainig = this.timeRemainig - 1;
      this.seconds = setInterval((this.timePassed = this.timePassed + 1), 1000);
    }
  };

  get timeRemainig() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemainig(time) {
    this.durationInput.value = time;
  }
}

new Timer(durationInput, startButton, pauseButtton, resetButton);
