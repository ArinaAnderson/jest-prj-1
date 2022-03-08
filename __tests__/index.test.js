import reverse from '../index.js';

test('reverse', () => {
  expect(reverse('')).toEqual('');
  expect(reverse('hello')).toEqual('olleh');
});
