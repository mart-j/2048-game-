/* eslint-disable no-param-reassign */
import _ from 'lodash';

export const splitArrayToRows = (cells: number[]) => {
  const newCells = [];
  while (cells.length > 0) {
    newCells.push(cells.splice(0, 4));
  }
  return newCells;
};

export const splitArrayToColumns = (cells: number[]) => {
  const newColumns: number[][] = [[], [], [], []];
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      newColumns[0].push(cells[i]);
      newColumns[1].push(cells[i + 1]);
      newColumns[2].push(cells[i + 2]);
      newColumns[3].push(cells[i + 3]);
    }
  }
  return newColumns;
};

export const mergeLeft = (row: number[]) => {
  const filteredRow = [
    ...row.filter((num) => num),
    ...row.filter((num) => !num),
  ];
  const result = filteredRow.map((num, i) => {
    if (filteredRow[i] === filteredRow[i + 1]) {
      num *= 2;
      filteredRow[i + 1] = 0;
    }
    return num;
  });
  return result;
};

export const mergeRight = (row: number[]) => {
  const filteredRow = [
    ...row.filter((num) => !num),
    ...row.filter((num) => num),
  ];
  const result = filteredRow.reverse().map((num, i) => {
    if (filteredRow[i] === filteredRow[i + 1]) {
      num *= 2;
      filteredRow[i + 1] = 0;
    }
    return num;
  });
  return result.reverse();
};

export const moveLeft = (cells: number[]) => {
  const rows = [...splitArrayToRows(cells)];
  const filteredRows = rows.map((row) => {
    row = mergeLeft(row);
    return [...row.filter((num) => num), ...row.filter((num) => !num)];
  });
  return filteredRows;
};

export const moveRight = (cells: number[]) => {
  const rows = [...splitArrayToRows(cells)];
  const filteredRows = rows.map((row) => {
    row = mergeRight(row);
    return [...row.filter((num) => !num), ...row.filter((num) => num)];
  });
  return filteredRows;
};

export const moveUp = (cells: number[]) => {
  const columns = [...splitArrayToColumns(cells)];
  const filteredColumns = columns.map((col) => {
    col = mergeLeft(col);
    return [...col.filter((num) => num), ...col.filter((num) => !num)];
  });
  const result = splitArrayToColumns(filteredColumns.flat());
  return result;
};

export const moveDown = (cells: number[]) => {
  const columns = [...splitArrayToColumns(cells)];
  const filteredColumns = columns.map((col) => {
    col = mergeRight(col);
    return [...col.filter((num) => !num), ...col.filter((num) => num)];
  });
  const result = splitArrayToColumns(filteredColumns.flat());
  return result;
};

export const keyPress = (arrowKey: string, cells: number[]) => {
  let newGrid: number[] = [...cells];

  if (arrowKey === 'ArrowRight') {
    newGrid = [...moveRight(cells)].flat();
  }

  if (arrowKey === 'ArrowLeft') {
    newGrid = [...moveLeft(cells)].flat();
  }

  if (arrowKey === 'ArrowUp') {
    newGrid = [...moveUp(cells)].flat();
  }
  if (arrowKey === 'ArrowDown') {
    newGrid = [...moveDown(cells)].flat();
  }
  return newGrid;
};

export const checkIfGameOver = (cells: number[]) => {
  const isGameOver =
    _.isEqual(cells, keyPress('ArrowRight', [...cells])) &&
    _.isEqual(cells, keyPress('ArrowLeft', [...cells])) &&
    _.isEqual(cells, keyPress('ArrowUp', [...cells])) &&
    _.isEqual(cells, keyPress('ArrowDown', [...cells]));
  return isGameOver;
};
