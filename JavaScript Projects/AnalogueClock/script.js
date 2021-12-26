const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
const radius = canvas.height / 2;
context.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  context.arc(0, 0, radius, 0, 2*Math.PI);
  context.fillStyle = "White";
  context.fill();
}