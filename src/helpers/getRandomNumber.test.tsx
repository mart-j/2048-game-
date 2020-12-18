import { getRandomNumber, getNewNumberIndex } from './getRandomNumber';

describe('Get RandomNumber', () => {
  it('Should return 1', () => {
    expect(getRandomNumber([1, 0, 1])).toEqual(1);
  });
  it('Should new number index', () => {
    const first = [0, 0, 0];
    const second = [0, 0, 1];
    expect(getNewNumberIndex(first, second)).toEqual(2);
  });
});
