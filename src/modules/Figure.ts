import { Colors } from "./Colors";
import image from "../imgs/figures/king_b.png";
import { FigureNames } from "./FigureNames";
import Cell from "./Cell";

export default class Figure {
  color: Colors;
  img: typeof image;
  name: FigureNames;
  cell: Cell;
  constructor(color: Colors, img: typeof image, name: FigureNames, cell: Cell) {
    this.color = color;
    this.img = img;
    this.name = name;
    this.cell = cell;
  }
  canMove(cell: Cell) {}
  
}
