import _ from 'lodash';

export const getRandomNumber = (cells: number[]) => {
  const availableCellIndexes = cells
    // eslint-disable-next-line array-callback-return
    // eslint-disable-next-line consistent-return
    .map((num, i) => {
      if (!num) {
        return i;
      }
    })
    .filter((num) => num || num === 0);
  const randomIndex = _.random(availableCellIndexes.length - 1);
  return availableCellIndexes[randomIndex];
};

export const getNewNumberIndex = (first: number[], second: number[]) => {
  let index;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      index = i;
    }
  }
  return index;
};
