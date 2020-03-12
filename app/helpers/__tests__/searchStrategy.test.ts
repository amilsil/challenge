import { searchStrategy } from './../searchJSON';

test('should search for item in array correctly', () => {
  const value = ['first', 'second', 'third', 'fourth']
  const result = searchStrategy('first', value);

  expect(result).toBeTruthy();
})
