import _ from 'lodash';
import { getRandomNumber } from './getRandomNumber';

export const getCell = (cells: number[]) => {
  const newCells = [...cells];
  const num = _.random(1, 10) === 1 ? 4 : 2;
  newCells[getRandomNumber(cells)!] = num;
  return newCells;
};
