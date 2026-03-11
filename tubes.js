import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const canvas = document.getElementById('canvas');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const app = TubesCursor(canvas, {
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"],
    lights: {
      intensity: 200,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
    }
  }
});

window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.body.addEventListener('click', () => {
  app.tubes.setColors(randomColors(3));
  app.tubes.setLightsColors(randomColors(4));
});

function randomColors(count) {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}