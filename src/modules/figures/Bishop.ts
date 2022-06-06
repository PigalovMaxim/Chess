import { Colors } from "../Colors";
import Figure from "../Figure";
import bishopB from "../../imgs/figures/bishop_b.png";
import bishopW from "../../imgs/figures/bishop_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class Bishop extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? bishopB : bishopW, FigureNames.BISHOP, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        return this.cell.checkDiagonalsCells(cell);
    }
}
