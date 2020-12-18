import { getCell } from './getCell';

describe('Get New Cell', () => {
  it('Generates new Cell', () => {
    const cells = [0, 1, 1, 1];
    const result = [2, 1, 1, 1] || [4, 1, 1, 1];
    expect(getCell(cells)).toEqual(result);
  });
});
