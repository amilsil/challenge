export type SearchCriteria = {term: string; value: string | boolean};
export type ReadFile = (fileName: string) => Promise<Array<any>>;
export type CollectionType = 'users' | 'tickets' | 'organizations';

export interface IInputOutput {
  close: () => void;
  input: (question: string) => Promise<string>;
  output: (message: string) => void;
}

export interface ISearchHandler {
  search(io: IInputOutput, readFile: ReadFile): Promise<any>;
}
