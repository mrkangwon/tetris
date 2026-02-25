import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root element not found');
}

app.innerHTML = `
  <div class="layout">
    <canvas id="game-canvas" width="300" height="600" aria-label="Tetris playfield"></canvas>
    <aside class="panel">
      <h1>Tetris</h1>
      <div class="stat"><strong>Score:</strong> <span id="score">0</span></div>
      <div class="stat"><strong>Level:</strong> <span id="level">1</span></div>
      <div class="stat"><strong>Status:</strong> Ready</div>
    </aside>
  </div>
`;

const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas');

if (!canvas) {
  throw new Error('Canvas element not found');
}

const ctx = canvas.getContext('2d');

if (!ctx) {
  throw new Error('2D drawing context unavailable');
}

ctx.strokeStyle = '#2c2c2c';
for (let x = 0; x <= canvas.width; x += 30) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();
}
for (let y = 0; y <= canvas.height; y += 30) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
}
