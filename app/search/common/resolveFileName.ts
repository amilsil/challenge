import {CollectionType} from './../../types';

export const resolveFileName = (collectionType: CollectionType) => {
  return collectionType.toString();
};
