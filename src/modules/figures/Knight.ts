import { Colors } from "../Colors";
import Figure from "../Figure";
import knightB from "../../imgs/figures/knight_b.png";
import knightW from "../../imgs/figures/knight_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class Knight extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? knightB : knightW, FigureNames.KNIGHT, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        if(cell.x - 1 === this.cell.x && cell.y - 2=== this.cell.y) return true;
        if(cell.x + 1 === this.cell.x && cell.y - 2 === this.cell.y) return true;
        if(cell.x + 2 === this.cell.x && cell.y - 1 === this.cell.y) return true;
        if(cell.x - 2 === this.cell.x && cell.y - 1 === this.cell.y) return true;
        if(cell.x + 2 === this.cell.x && cell.y + 1 === this.cell.y) return true;
        if(cell.x - 2 === this.cell.x && cell.y + 1 === this.cell.y) return true;
        if(cell.x - 1 === this.cell.x && cell.y + 2 === this.cell.y) return true;
        if(cell.x + 1 === this.cell.x && cell.y + 2 === this.cell.y) return true;
        return false;
    }
}
