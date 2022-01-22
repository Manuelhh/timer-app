class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButtton,
    resetButton,
    callbacks
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButtton = pauseButtton;
    this.resetButton = resetButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.timePassed = 0;

    this.startButton.addEventListener("click", this.start);
    this.pauseButtton.addEventListener("click", this.pause);
    this.resetButton.addEventListener("click", this.reset);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
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
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemainig = this.timeRemainig - 1;
      this.seconds = setInterval((this.timePassed = this.timePassed + 1), 1000);
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemainig() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemainig(time) {
    this.durationInput.value = time;
  }
}
