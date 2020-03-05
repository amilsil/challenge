import {IInputOutput, ReadFile, ISearchHandler} from './../../types';
import {MainMenuOptions} from './../../constants';

/*
 * Repeats the user menu until the user selects the EXIT option.
 */
export async function startUserMenu(
  selectMainOption: (io: IInputOutput) => Promise<string>,
  selectVariant: (io: IInputOutput) => Promise<string>,
  showSearchTerms: (io: IInputOutput) => void,
  resolveCollectionHandler: (variant: string) => ISearchHandler,
  readFile: ReadFile,
  io: IInputOutput,
) {
  while (true) {
    const selection = await selectMainOption(io);

    if (new RegExp(MainMenuOptions.EXIT).test(selection)) {
      io.output('quitting..');
      break;
    }

    if (new RegExp(MainMenuOptions.SEARCH).test(selection)) {
      const variant = await selectVariant(io);
      const collectionHandler = resolveCollectionHandler(variant);

      if (collectionHandler) {
        await collectionHandler.search(io, readFile);
      }
      continue;
    }

    if (new RegExp(MainMenuOptions.SEARCH_TERMS).test(selection)) {
      showSearchTerms(io);
      continue;
    }

    io.output(`
      "${selection}" is an invalid option
      please select one of the followings.
      `);
  }
}
