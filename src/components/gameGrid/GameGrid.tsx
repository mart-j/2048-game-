import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './GameGrid.module.scss';

interface Props {
  grid: number[];
  newNumberIndex: number;
  isGameOver: boolean;
  tryAgain: () => void;
}

const GameGrid: FC<Props> = ({
  tryAgain,
  isGameOver,
  grid,
  newNumberIndex,
}) => {
  return (
    <>
      <div className={styles.container}>
        {isGameOver && (
          <div className={styles.gameOver}>
            <div>Game Over!</div>
            <button
              onClick={tryAgain}
            >
              Try again
            </button>
          </div>
        )}
        {grid.map((cell, i) => {
          return (
            <div
              className={classNames({
                [styles.cell]: true,
                [styles[`number-${cell}`]]: cell,
                [styles.newNumber]: i === newNumberIndex,
              })}
              key={`${i}`}
            >
              {cell > 0 && cell}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GameGrid;
