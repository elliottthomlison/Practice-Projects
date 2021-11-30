const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 500, 300)
ctx.strokeRect(95, 95, 510, 310)
ctx.clearRect(150, 150, 400, 200)