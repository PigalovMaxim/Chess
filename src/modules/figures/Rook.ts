import { Colors } from "../Colors";
import Figure from "../Figure";
import rookB from "../../imgs/figures/rook_b.png";
import rookW from "../../imgs/figures/rook_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class Rook extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? rookB : rookW, FigureNames.ROOK, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        return (this.cell.checkVerticalCells(cell) || this.cell.checkHorizontalCells(cell));
    }
}
