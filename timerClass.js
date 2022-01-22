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
      this.onStart(this.timeRemainig);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.interval);
    clearInterval(this.seconds);
  };

  reset = () => {
    this.pause();
    this.timeRemainig = this.timeRemainig + this.timePassed;
    this.timePassed = 0;
    if (this.onTick) {
      this.onTick();
    }
  };

  tick = () => {
    if (this.timeRemainig <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemainig = this.timeRemainig - 0.02;
      this.seconds = setInterval(
        (this.timePassed = this.timePassed + 0.02),
        1000
      );
      console.log(this.timePassed);
      if (this.onTick) {
        this.onTick(this.timeRemainig);
      }
    }
  };

  get timeRemainig() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemainig(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
