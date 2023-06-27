class GameBoard {
  constructor() {
    this.egoConsciousnessInternal = this.createCircularBoard();
    this.egoConsciousnessExternal = this.createCircularBoard();
    this.personalUnconsciousInternal = this.createCircularBoard();
    this.collectiveUnconsciousInternal = this.createCircularBoard();
  }

  createCircularBoard() {
    const size = 4; // Size of the board (adjust as needed)
    const board = jsboard.Board({ size: `${size}x${size}` });

    const center = Math.floor(size / 2);

    const grid = jsboard.Grid(size, size, (i, j) => {
      const dx = Math.abs(i - center);
      const dy = Math.abs(j - center);
      const radius = Math.max(dx, dy);
      const position = `(${i},${j})`;
      return { position, radius };
    });

    grid.forEach(({ position, radius }) => {
      const cell = board.cell(position);
      const borderWidth = radius > 0 ? 2 : 0;
      const borderColor = radius === 1 ? 'blue' : 'black';
      cell.set({ borderWidth, borderColor });
    });

    return board;
  }
}

const gameBoard = new GameBoard();

export default gameBoard;
