import { Colors } from "../Colors";
import Figure from "../Figure";
import queenB from "../../imgs/figures/queen_b.png";
import queenW from "../../imgs/figures/queen_w.png";
import { FigureNames } from "../FigureNames";
import Cell from "../Cell";

export default class Queen extends Figure{
    color: Colors;
    cell: Cell;
    constructor(color: Colors, cell: Cell) {
        super(color, (color === Colors.BLACK) ? queenB : queenW, FigureNames.QUEEN, cell);
        this.color = color;
        this.cell = cell;
    }
    canMove(cell: Cell) {
        return (this.cell.checkVerticalCells(cell) || this.cell.checkHorizontalCells(cell) || this.cell.checkDiagonalsCells(cell));
    }
}
