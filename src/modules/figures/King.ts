import { Colors } from "../Colors";
import Figure from "../Figure";
import kingB from "../../imgs/figures/king_b.png";
import kingW from "../../imgs/figures/king_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class King extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? kingB : kingW, FigureNames.KING, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        if(cell.x - 1 === this.cell.x && cell.y - 1=== this.cell.y) return true;
        if(cell.x === this.cell.x && cell.y - 1 === this.cell.y) return true;
        if(cell.x + 1 === this.cell.x && cell.y - 1 === this.cell.y) return true;
        if(cell.x - 1 === this.cell.x && cell.y === this.cell.y) return true;
        if(cell.x + 1 === this.cell.x && cell.y === this.cell.y) return true;
        if(cell.x - 1 === this.cell.x && cell.y + 1 === this.cell.y) return true;
        if(cell.x === this.cell.x && cell.y + 1 === this.cell.y) return true;
        if(cell.x + 1 === this.cell.x && cell.y + 1 === this.cell.y) return true;
        return false;
    } 
}
