window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 1;
  drawClock();

  function drawClock() {
    drawFace(ctx, radius)
  }

  const drawFace = () => {
    const grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    grad = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05)
    grad.addColorStop(0, '#333')
    ctx.arc(0, 0, radius, 0, 3 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
};
