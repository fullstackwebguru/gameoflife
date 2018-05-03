import Cell from './cell';

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = [];

    this._init();
  }

  /**
   * randomly initialize board
   *
   * @memberof Board
   */
  _init() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let cell = new Cell(x, y);
        this.cells.push(cell);
      }
    }

    let pool = Array.from({ length: this.cells.length }, (v, k) => k);
    for (let i = 0; i < this.cells.length / 2; i++) {
      let index = Math.floor(pool.length * Math.random());
      let number = pool.splice(index, 1)[0];

      this.cells[number].alive = false;
    }
  }

  /**
   * return neighbour cells
   *
   * @param {Cell} cell
   * @returns {Cell[]}
   * @memberof Board
   */
  getNeighbours(cell) {
    let items = [
      this.cells.find(
        toFind => toFind.x === cell.x - 1 && toFind.y === cell.y + 1
      ),
      this.cells.find(toFind => toFind.x === cell.x && toFind.y === cell.y + 1),
      this.cells.find(
        toFind => toFind.x === cell.x + 1 && toFind.y === cell.y + 1
      ),

      this.cells.find(toFind => toFind.x === cell.x - 1 && toFind.y === cell.y),
      this.cells.find(toFind => toFind.x === cell.x + 1 && toFind.y === cell.y),

      this.cells.find(
        toFind => toFind.x === cell.x - 1 && toFind.y === cell.y - 1
      ),
      this.cells.find(toFind => toFind.x === cell.x && toFind.y === cell.y - 1),
      this.cells.find(
        toFind => toFind.x === cell.x + 1 && toFind.y === cell.y - 1
      )
    ];

    return items.filter(item => item);
  }
}

export default Board;
