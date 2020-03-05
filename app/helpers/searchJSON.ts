import {SearchCriteria} from './../types';

export function searchJSON(
  list: Array<any>,
  criteria: SearchCriteria,
): Array<any> {
  return list.filter(item => {
    const value = item[criteria.term];

    // If it's an array, search for one item to match
    if (Array.isArray(value)) {
      return value.find(x => x === criteria.value) !== undefined;
    }

    // If it's a single value, match that.
    return value === criteria.value;
  });
}
