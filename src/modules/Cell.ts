import Board from "./Board";
import { Colors } from "./Colors";
import Figure from "./Figure";
import { FigureNames } from "./FigureNames";

export default class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    available: boolean;
    id: number;
    figure: Figure | null;
    board: Board;
    constructor(id: number, x: number, y: number, color: Colors, figure: Figure | null, available: boolean, board: Board) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.figure = figure;
        this.id = id;
        this.board = board;
        this.available = available;
    }
    canMove(cell: Cell) {
        if(cell.figure?.color === this.figure?.color) return false;
        if(cell.figure?.name === FigureNames.KING) return false;
        if(!this.figure?.canMove(cell)) return false;
        return true;
    }
    checkHorizontalCells(cell: Cell) {  
        if(this.y !== cell.y) return false;
        const min = Math.min(this.x, cell.x);
        const max = Math.max(this.x, cell.x);
        for(let i = max - 1; i > min; i--){
            if(this.board.cells[i][this.y].figure !== null) return false;
        }   
        return true;
    }
    checkVerticalCells(cell: Cell) { 
        if(this.x !== cell.x) return false;
        const min = Math.min(this.y, cell.y);
        const max = Math.max(this.y, cell.y);
        for(let i = max - 1; i > min; i--){
            if(this.board.cells[this.x][i].figure !== null) return false;
        }   
        return true;
    }
    checkDiagonalsCells(cell: Cell) { 
        const absX = Math.abs(cell.x - this.x);
        const absY = Math.abs(cell.y - this.y);
        if(absX !== absY) return false;
        const dy = this.y < cell.y ? 1 : -1;
        const dx = this.x < cell.x ? 1 : -1;
        for(let i = 1; i < absY; i++){
            if(this.board.cells[this.x + dx*i][this.y + dy*i].figure !== null) return false;
        }   
        return true; 
    }
}