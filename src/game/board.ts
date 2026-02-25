export type Matrix = number[][];

export function rotateMatrix(matrix: Matrix): Matrix {
  return matrix[0].map((_, columnIndex) => matrix.map((row) => row[columnIndex]).reverse());
}

export function collides(board: Matrix, piece: Matrix, x: number, y: number): boolean {
  for (let pieceY = 0; pieceY < piece.length; pieceY += 1) {
    for (let pieceX = 0; pieceX < piece[pieceY].length; pieceX += 1) {
      if (piece[pieceY][pieceX] === 0) {
        continue;
      }

      const boardY = y + pieceY;
      const boardX = x + pieceX;

      if (boardX < 0 || boardX >= board[0].length || boardY >= board.length) {
        return true;
      }

      if (boardY >= 0 && board[boardY][boardX] !== 0) {
        return true;
      }
    }
  }

  return false;
}

export function clearLines(board: Matrix): { board: Matrix; cleared: number } {
  const width = board[0].length;
  const remainingRows = board.filter((row) => row.some((cell) => cell === 0));
  const cleared = board.length - remainingRows.length;
  const clearedRows = Array.from({ length: cleared }, () => Array(width).fill(0));

  return { board: [...clearedRows, ...remainingRows], cleared };
}
