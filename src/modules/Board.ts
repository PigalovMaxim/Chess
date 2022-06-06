import Cell from "./Cell";
import { Colors } from "./Colors";
import Pawn from "./figures/Pawn";
import King from "./figures/King";
import Queen from "./figures/Queen";
import Knight from "./figures/Knight";
import Rook from "./figures/Rook";
import Bishop from "./figures/Bishop";

export default class Board {
  cells: Cell[][] = [];
  playerColor: string = Colors.WHITE;
  constructor() {
    this.initCells();
    this.addFigures();
  }
  private initCells() {
    for (let x = 0; x < 8; x++) {
      const row: Cell[] = [];
      for (let y = 0; y < 8; y++) {
        if (x % 2 === 1)
          row.push(
            new Cell(
              Math.random() * 100,
              x,
              y,
              y % 2 === 1 ? Colors.WHITE : Colors.BLACK,
              null,
              false,
              this
            )
          );
        else
          row.push(
            new Cell(
              Math.random() * 100,
              x,
              y,
              y % 2 === 0 ? Colors.WHITE : Colors.BLACK,
              null,
              false,
              this
            )
          );
      }
      this.cells.push(row);
    }
  }
  //Logic
  public getCopy() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.playerColor = this.playerColor;
    return newBoard;
  }
  private moveFigure(target: Cell, selected: Cell){
    this.cells[target.x][target.y].figure = this.cells[selected.x][selected.y].figure;
    this.cells[target.x][target.y].figure!.cell = target;
    this.cells[selected.x][selected.y].figure = null;
  }
  private changeFigures(from: Cell, to: Cell){
    let tmp =  this.cells[to.x][to.y].figure;
    tmp!.cell = this.cells[to.x][to.y].figure!.cell;
    this.cells[to.x][to.y].figure = this.cells[from.x][from.y].figure;
    this.cells[to.x][to.y].figure!.cell = from;
    this.cells[from.x][from.y].figure = tmp;
    this.cells[from.x][from.y].figure!.cell = tmp!.cell;
  }
  private changeSides(){
    for(let y = 0; y < 8; y++){
      for(let x = 0; x < 8; x++){
        if(this.cells[x][y].figure !== null) this.changeFigures(this.cells[x][y], this.cells[7 - x][7 - y]);
      }
    }
  }
  public takeStep(target: Cell, selected: Cell){
    this.moveFigure(target, selected);
    //this.changeSides();
    if(this.playerColor === Colors.WHITE) this.playerColor = Colors.BLACK; else this.playerColor = Colors.WHITE;
  }
  public showAvailableCells(selected: Cell) {
    this.cells.forEach(row => row.forEach(cell => {
      if(!selected.canMove(cell)) return;
      cell.available = true;
    }));
  }
  public clearAvailableCells() {
    this.cells.forEach(row => row.forEach(cell => cell.available = false));
  }
  //Add Figures
  private addFigures() {
    this.addPawns();
    this.addRooks();
    this.addBishops();
    this.addKnights();
    this.addKings();
    this.addQueens();
  }
  private addPawns() {
    for (let i = 0; i < 8; i++) {
      const cell = this.cells[i][1];
      cell.figure = new Pawn(Colors.BLACK, cell);
    }
    for (let i = 0; i < 8; i++) {
      const cell = this.cells[i][6];
      cell.figure = new Pawn(Colors.WHITE, cell);
    }
  }
  private addKnights() {
    this.cells[1][0].figure = new Knight(Colors.BLACK, this.cells[1][0]);
    this.cells[6][0].figure = new Knight(Colors.BLACK, this.cells[6][0]);
    this.cells[1][7].figure = new Knight(Colors.WHITE, this.cells[1][7]);
    this.cells[6][7].figure = new Knight(Colors.WHITE, this.cells[6][7]);
  }
  private addBishops() {
    this.cells[2][0].figure = new Bishop(Colors.BLACK, this.cells[2][0]);
    this.cells[5][0].figure = new Bishop(Colors.BLACK, this.cells[5][0]);
    this.cells[2][7].figure = new Bishop(Colors.WHITE, this.cells[2][7]);
    this.cells[5][7].figure = new Bishop(Colors.WHITE, this.cells[5][7]);
  }
  private addRooks() {
    this.cells[0][0].figure = new Rook(Colors.BLACK, this.cells[0][0]);
    this.cells[7][0].figure = new Rook(Colors.BLACK, this.cells[7][0]);
    this.cells[0][7].figure = new Rook(Colors.WHITE, this.cells[0][7]);
    this.cells[7][7].figure = new Rook(Colors.WHITE, this.cells[7][7]);
  }
  private addKings() {
    this.cells[3][0].figure = new King(Colors.BLACK, this.cells[3][0]);
    this.cells[3][7].figure = new King(Colors.WHITE, this.cells[3][7]);
  }
  private addQueens() {
    this.cells[4][0].figure = new Queen(Colors.BLACK, this.cells[4][0]);
    this.cells[4][7].figure = new Queen(Colors.WHITE, this.cells[4][7]);
  }
}
