import defineCatSign from '../src/switch-ERROR.js';

test('existing-option', () => {
  expect(defineCatSign('tuxedo')).toBe('libra');
});

test('error-test', () => {
  expect(() => defineCatSign('red')).toThrow('Unknown order state: \'red\'!');
  expect(() => defineCatSign('black')).toThrow();
  expect(() => defineCatSign('white')).toThrow(Error);
});
// (`Unknown order state: '${pattern}'!`);
