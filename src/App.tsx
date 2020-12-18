import React, { useEffect, useRef, useState } from 'react';
import GameGrid from './components/gameGrid/GameGrid';
import Header from './components/header/Header';
import { buildGrid } from './helpers/buildGrid';
import { getCell } from './helpers/getCell';
import { keyPress, checkIfGameOver } from './helpers/cellMovement';
import { getNewNumberIndex } from './helpers/getRandomNumber';

const App = () => {
  const [grid, setGrid] = useState(buildGrid(16, 0));
  const [move, setMove] = useState(keyPress('', grid));
  const [isGameOver, setIsGameOver] = useState(false);

  const prevGrid = useRef<string>();
  const section = useRef<HTMLTableSectionElement>(null);
  const newNumberIndex = useRef<number>();
  const count = useRef(0);
  const didMountRef = useRef(false);

  useEffect(() => {
    setGrid(getCell(getCell(buildGrid(16, 0))));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('bestScore') === null) {
      localStorage.setItem('bestScore', '0');
    }
    if (
      isGameOver &&
      count.current > Number(localStorage.getItem('bestScore'))
    ) {
      localStorage.setItem('bestScore', `${count.current}`);
    }
  }, [isGameOver]);

  useEffect(() => {
    if (didMountRef.current) {
      if (checkIfGameOver(grid) && count.current) {
        setIsGameOver(true);
      }
      count.current = grid.reduce((acc, curr) => acc + curr);
      if (JSON.stringify(grid) !== prevGrid.current) {
        const newGrid = getCell(grid);
        setGrid(newGrid);
        newNumberIndex.current = getNewNumberIndex(grid, newGrid);
      }
    }
    didMountRef.current = true;
    section.current?.focus();
  }, [move]);

  const startNewGame = () => {
    count.current = 0;
    setIsGameOver(false);
    setGrid(getCell(getCell(buildGrid(16, 0))));
    section.current?.focus();
  };

  return (
    <section
      onKeyDown={(e) => {
        prevGrid.current = JSON.stringify(grid);

        setGrid(keyPress(e.key, grid));

        setMove(keyPress(e.key, grid));
      }}
      style={{ height: '100vh', outline: 'none' }}
      ref={section}
      tabIndex={0}
    >
      <Header newGame={startNewGame} count={count.current} />
      <GameGrid
        tryAgain={startNewGame}
        isGameOver={isGameOver}
        newNumberIndex={newNumberIndex.current!}
        grid={grid}
      />
    </section>
  );
};
export default App;
