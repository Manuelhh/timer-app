const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButtton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const callbacks = {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemainig) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemainig) / duration - perimeter
    );
  },
  onComplete() {
    console.log("complete");
  },
};

new Timer(durationInput, startButton, pauseButtton, resetButton, callbacks);
