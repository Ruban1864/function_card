// Floating flower particles
const canvas = document.getElementById('flowers');
const ctx = canvas.getContext('2d');
let flowers = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 40; i++) {
  flowers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 3,
    d: Math.random() * 1 + 0.3
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 204, 0, 0.6)";
  ctx.beginPath();
  for (let i = 0; i < flowers.length; i++) {
    const f = flowers[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update();
}

function update() {
  for (let i = 0; i < flowers.length; i++) {
    const f = flowers[i];
    f.y += f.d;
    if (f.y > canvas.height) {
      flowers[i] = { x: Math.random() * canvas.width, y: 0, r: f.r, d: f.d };
    }
  }
}
setInterval(draw, 30);
// 🎶 Music Button Play/Pause Logic
const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
let isPlaying = false;

btn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      btn.textContent = "🔇 Pause Music";
    }).catch(err => console.log("Autoplay blocked:", err));
  } else {
    music.pause();
    isPlaying = false;
    btn.textContent = "🔊 Play Music";
  }
});
