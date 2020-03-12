import {SearchCriteria} from './../types';

export const searchStrategy = (expectedValue: any, value: any): boolean => {
  // If it's an array, search for one item to match
  if (Array.isArray(value)) {
    return value.find(x => x === expectedValue) !== undefined;
  }

  return value === expectedValue;
};

export function searchJSON(
  list: Array<any>,
  criteria: SearchCriteria,
): Array<any> {
  return list.filter(item => {
    const value = item[criteria.term];

    // If it's a single value, match that.
    //return value === criteria.value;
    return searchStrategy(criteria.value, value);
  });
}
