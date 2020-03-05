import {
  CollectionType,
  IInputOutput,
  SearchCriteria,
  ISearchHandler,
  ReadFile,
} from './../../types';
import {resolveFileName} from './resolveFileName';
import {searchJSON} from '../../helpers';

/**
 * Contains common search implmentation that can be customized by
 * a concrete implmentation.
 */
export abstract class BaseSearchHandler implements ISearchHandler {
  protected fileName: string;

  constructor(private collectionType: CollectionType) {
    this.fileName = resolveFileName(this.collectionType);
  }

  public async search(io: IInputOutput, readFile: ReadFile) {
    const criteria = await this.selectSearchCriteria(io);
    const results = await this.makeSearch(readFile, criteria);
    this.printResults(io, results);
  }

  protected async selectSearchCriteria(
    io: IInputOutput,
  ): Promise<{term: string; value: string}> {
    const term = await io.input('term');
    const value = await io.input('value');

    return {term, value};
  }

  protected async makeSearch(
    readFile: ReadFile,
    criteria: SearchCriteria,
  ): Promise<Array<any>> {
    const content = await readFile(this.fileName);
    return searchJSON(content, criteria);
  }

  protected printResults(io: IInputOutput, results: Array<any>) {
    if (results && results.length > 0) {
      io.output('Found following results');
      results.forEach(r => io.output(JSON.stringify(r)));
    } else {
      io.output('No records matched the search criteria');
    }
  }
}
