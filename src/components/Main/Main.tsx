import { useState } from "react";
import Board from "../../modules/Board";
import cn from "clsx";
import Cell from "../../modules/Cell";
import Game from "./Game";
import Button from "../Button";
import s from "./Main.module.scss";

const Main = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState<Board>( new Board());
  return (
    <main>
      {isGameStarted ? (
        <Game board={board} setBoard={setBoard} />
      ) : (
        <div className={s.controls}>
          <h1 className={s.text}>Реализовано на TypeScript, React, SCSS</h1>
          <Button
            text="Начать игру"
            classnames=""
            click={() => setGameStarted(true)}
          />
        </div>
      )}
    </main>
  );
};

export default Main;
