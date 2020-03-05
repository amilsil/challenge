import {searchJSON} from '../searchJSON';

test('Should return false for undefined values', () => {
  const results = searchJSON([{}], {term: 'value', value: true});
  expect(results).not.toBeNull();
  expect(results.length).toBe(0);
});

test('Should search for null values', () => {
  const results = searchJSON([{ value: null }], {term: 'value', value: null});
  expect(results).not.toBeNull();
  expect(results.length).toBe(1);
});

test('Should search for booleans by true/false', () => {
  const content = [{value: true}, {value: true}, {value: false}, {value: true}];
  const results = searchJSON(content, {term: 'value', value: true});
  expect(results).not.toBeNull();
  expect(results.length).toBe(3);
});

test('Should search for strings', () => {
  const content = [
    {value: 'test'},
    {value: 'test'},
    {value: 'another'},
    {value: 'another'},
  ];
  const results = searchJSON(content, {term: 'value', value: 'test'});
  expect(results).not.toBeNull();
  expect(results.length).toBe(2);
});

test('Should search for inner arrays', () => {
  const content: any[] = [
    {value: ['one', 'two', 'three', 'four']},
    {value: ['three', 'four']},
    {value: ['one', 'two']},
  ];
  const results = searchJSON(content, {term: 'value', value: 'one'});
  expect(results).not.toBeNull();
  expect(results.length).toBe(2);
});
