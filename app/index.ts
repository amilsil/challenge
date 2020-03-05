import {readJsonFile, ConsoleIO} from './helpers';
import {
  resolveCollectionHandler,
  selectMainOption,
  selectVariant,
  showSearchTerms,
  startUserMenu,
} from './search';

async function start(): Promise<any> {
  const io = new ConsoleIO();

  await startUserMenu(
    selectMainOption,
    selectVariant,
    showSearchTerms,
    resolveCollectionHandler,
    readJsonFile,
    io,
  );

  io.close();
}

start();
