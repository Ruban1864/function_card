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
  for (let f of flowers) {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update();
}

function update() {
  for (let f of flowers) {
    f.y += f.d;
    if (f.y > canvas.height) {
      f.y = 0;
      f.x = Math.random() * canvas.width;
    }
  }
}
setInterval(draw, 30);

// 🎵 Music Play Button Logic
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

// 🌸 Mobile Tap Zoom + Cinematic Blur Effect
const photo = document.getElementById('photo');
const overlay = document.getElementById('photo-overlay');
let isZoomed = false;

// Works for both desktop (click) and mobile (touch)
photo.addEventListener('click', () => {
  isZoomed = !isZoomed;
  if (isZoomed) {
    photo.classList.add('active');
    overlay.classList.add('active');
  } else {
    photo.classList.remove('active');
    overlay.classList.remove('active');
  }
});

// Close zoom if background is tapped
overlay.addEventListener('click', () => {
  photo.classList.remove('active');
  overlay.classList.remove('active');
  isZoomed = false;
});

