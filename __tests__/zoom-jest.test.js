import getSquare from '../zoom-jest.js';

test('getSquare', () => {
  expect(getSquare(0)).toBe(0);
  expect(getSquare(3)).toBe(9);
});
