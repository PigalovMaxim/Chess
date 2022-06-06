import { Colors } from "../Colors";
import Figure from "../Figure";
import pawnB from "../../imgs/figures/pawn_b.png";
import pawnW from "../../imgs/figures/pawn_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class Pawn extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? pawnB : pawnW, FigureNames.PAWN, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        if(this.color === Colors.WHITE) {
            if(cell.y === this.cell.y - 1 && cell.x === this.cell.x - 1 && cell.figure) return true;
            if(cell.y === this.cell.y - 1 && cell.x === this.cell.x + 1 && cell.figure) return true;
        } else {
            if(cell.y === this.cell.y + 1 && cell.x === this.cell.x - 1 && cell.figure) return true;
            if(cell.y === this.cell.y + 1 && cell.x === this.cell.x + 1 && cell.figure) return true;
        }
        if(cell.x !== this.cell.x) return false;
        if(this.color === Colors.WHITE){
            if(cell.y === this.cell.y - 1 && !cell.figure) return true;
            if(this.cell.y !== 6) return false;
            if(cell.y === this.cell.y - 2 && !cell.figure) return true;
        } else {
            if(cell.y === this.cell.y + 1 && !cell.figure) return true;
            
            if(this.cell.y !== 1) return false;
            if(cell.y === this.cell.y + 2 && !cell.figure) return true;
        }
    }
}
