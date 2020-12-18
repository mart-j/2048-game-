import {
  splitArrayToColumns,
  splitArrayToRows,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  keyPress,
  mergeRight,
  mergeLeft,
  checkIfGameOver,
} from './cellMovement';

describe('Cell Movement', () => {
  it('Should return 4 columns', () => {
    const cells = [1, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
    expect(splitArrayToColumns(cells)).toEqual([
      [1, 1, 1, 1],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
  it('Should return 4 rows', () => {
    const cells = [1, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0];
    expect(splitArrayToRows(cells)).toEqual([
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 2, 0, 0],
      [1, 2, 0, 0],
    ]);
  });

  it('Should move left and sum to the left', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(moveLeft(cells)).toEqual([
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [2, 0, 0, 0],
    ]);
  });
  it('Should move Right and merge numbers', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(moveRight(cells)).toEqual([
      [0, 0, 0, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 2],
    ]);
  });

  it('Should move Up', () => {
    const cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
    expect(moveUp(cells)).toEqual([
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  it('Should move Down', () => {
    const cells = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(moveDown(cells)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
    ]);
  });
  it('Should move left on Left and merge Arrow keypress', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(keyPress('ArrowLeft', cells)).toEqual([
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      2,
      0,
      0,
      0,
    ]);
  });

  it('Should move right and merge on Right Arrow keypress', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(keyPress('ArrowRight', cells)).toEqual([
      0,
      0,
      0,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      2,
    ]);
  });
  it('Should move Up on Up Arrow keypress', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(keyPress('ArrowUp', cells)).toEqual([
      2,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
  });
  it('Should move down on Down Arrow keypress', () => {
    const cells = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
    expect(keyPress('ArrowDown', cells)).toEqual([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      1,
      2,
      0,
    ]);
  });
  it('merge right', () => {
    const cells = [4, 4, 4, 2];
    expect(mergeRight(cells)).toEqual([4, 0, 8, 2]);
  });
  it('merge Left', () => {
    const cells = [4, 4, 4, 2];
    expect(mergeLeft(cells)).toEqual([8, 0, 4, 2]);
  });
  it('check if no moves left', () => {
    const cells = [2, 8, 16, 2, 4, 64, 4, 32, 16, 2, 128, 8, 4, 8, 16, 4];
    expect(checkIfGameOver(cells)).toEqual(true);
  });
  it('should have one more move', () => {
    const cells = [2, 8, 16, 2, 2, 64, 4, 32, 16, 2, 128, 8, 4, 8, 16, 4];
    expect(checkIfGameOver(cells)).toEqual(false);
  });
});
