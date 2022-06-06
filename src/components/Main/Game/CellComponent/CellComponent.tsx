import Cell from "../../../../modules/Cell";
import cn from "clsx";

import s from "./CellComponent.module.scss";
import { Colors } from "../../../../modules/Colors";

interface CellProps {
    cell: Cell;
    click: (cell: Cell) => void;
    isSelected: boolean;
    rotated: string;
}

const CellComponent = ({cell, click, isSelected, rotated} : CellProps) => {
  return (
    <div
      onClick={() => click(cell)}
      key={cell.id}
      className={cn(
        s.cell,
        cell.color === Colors.BLACK ? s.black : s.white,
        isSelected ? s.choosen : "",
        (cell.available && cell.figure && !isSelected) ? s.available : "",
        rotated
      )}
    >
      {cell.figure ? <img src={cell.figure.img} /> :( cell.available && !isSelected) ? <div className={s.availableCell}/> : <div/>}
    </div>
  );
};

export default CellComponent;