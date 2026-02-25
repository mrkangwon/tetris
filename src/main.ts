const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Missing #app root element');
}

app.innerHTML = `
  <main class="layout">
    <canvas id="tetris-canvas" width="300" height="600" aria-label="Tetris board"></canvas>
    <aside class="status-panel">
      <h1>Tetris</h1>
      <p><strong>Score:</strong> 0</p>
      <p><strong>Level:</strong> 1</p>
      <p><strong>Lines:</strong> 0</p>
    </aside>
  </main>
`;

const canvas = document.querySelector<HTMLCanvasElement>('#tetris-canvas');
if (!canvas) {
  throw new Error('Missing tetris canvas');
}

const context = canvas.getContext('2d');
if (!context) {
  throw new Error('Canvas context unavailable');
}

context.fillStyle = '#111827';
context.fillRect(0, 0, canvas.width, canvas.height);
