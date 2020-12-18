import { buildGrid } from './buildGrid';

describe('Build Game Grid', () => {
  it('should have 16 cells', () => {
    expect(buildGrid(16, 0)).toHaveLength(16);
  });
  it('cell should be filled with number 0', () => {
    buildGrid(16, 0).forEach((cell) => {
      expect(cell).toEqual(0);
    });
  });
});
