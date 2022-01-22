const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButtton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

const callbacks = {
  onStart() {
    console.log("timer started");
  },
  onTick() {
    console.log("Ticked");
  },
  onComplete() {
    console.log("complete");
  },
};

new Timer(durationInput, startButton, pauseButtton, resetButton, callbacks);
