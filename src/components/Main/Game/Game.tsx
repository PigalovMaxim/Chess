import { useEffect, useRef, useState } from "react";
import Board from "../../../modules/Board";
import cn from "clsx";
import s from "./Game.module.scss";
import Cell from "../../../modules/Cell";
import CellComponent from "./CellComponent";
import { Colors } from "../../../modules/Colors";

interface GameProps {
  board: Board;
  setBoard: (newBoard: Board) => void;
}

const Game = ({ board, setBoard }: GameProps) => {
  const gameBlock = useRef<HTMLDivElement>(null);
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function click(cell: Cell) {
    if (
      selectedCell !== null &&
      cell.available &&
      (cell.x !== selectedCell.x || cell.y !== selectedCell.y) &&
      selectedCell.figure?.color !== cell.figure?.color
    ) {
      board.takeStep(cell, selectedCell);
      setSelectedCell(null);
      board.clearAvailableCells();
      updateBoard();
      return;
    }
    if (cell.figure?.color !== board.playerColor) return;
    setSelectedCell(cell);
    board.clearAvailableCells();
    board.showAvailableCells(cell);
    updateBoard();
  }
  function updateBoard() {
    setBoard(board.getCopy());
  }
  return (
    <div className={s.wrapper}>
      <div ref={gameBlock} className={cn(s.game_block, (board.playerColor === Colors.BLACK) ? s.rotated : '')}>
        {board.cells.map((value, index) => (
          <div key={index} className={s.row}>
            {value.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                click={click}
                rotated={(board.playerColor === Colors.BLACK) ? s.rotated : ''}
                isSelected={
                  selectedCell?.x === cell.x && selectedCell?.y === cell.y
                }
              />
            ))}
          </div>
        ))}
      </div>
      <h1 className={s.data}>
        Сейчас ходят: {(board.playerColor === Colors.BLACK) ? 'Чёрные' : 'Белые'}
      </h1>
    </div>
  );
};

export default Game;
