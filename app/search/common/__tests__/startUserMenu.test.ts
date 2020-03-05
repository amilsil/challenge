import {startUserMenu} from './../startUserMenu';
import {ReadFile, IInputOutput, ISearchHandler} from './../../../types';

const readFile = {} as ReadFile;
const io = {output: (_: string) => {}} as IInputOutput;
const showSearchTerms = () => {};

test('should repeat user menu until exit criteria is met', async () => {
  // Arrange
  const resolveCollectionHandlerMock = jest.fn(
    (_: string): ISearchHandler => null,
  );

  const selectMainOptionMock = jest.fn();
  selectMainOptionMock.mockReturnValueOnce('1').mockReturnValueOnce('quit');

  const selectVariantMock = jest.fn();

  // Act
  await startUserMenu(
    selectMainOptionMock,
    selectVariantMock,
    showSearchTerms,
    resolveCollectionHandlerMock,
    readFile,
    io,
  );

  // Assert
  expect(selectMainOptionMock.mock.calls.length).toBe(2);

  // collection variant is prompted for.
  expect(selectVariantMock.mock.calls.length).toBe(1);

  // collection handler is resolved.
  expect(resolveCollectionHandlerMock.mock.calls.length).toBe(1);
});

test('should search() when a collection is selected through the menu', async () => {
  // Arrange

  const collectionHandlerMock = {search: jest.fn()};
  const resolveCollectionHandlerMock = jest.fn(
    (_: string): ISearchHandler =>
      (collectionHandlerMock as any) as ISearchHandler,
  );

  const selectMainOptionMock = jest.fn();
  selectMainOptionMock.mockReturnValueOnce('1').mockReturnValueOnce('quit');

  const selectVariantMock = jest.fn();
  selectVariantMock.mockReturnValueOnce('1'); // users

  // Act
  await startUserMenu(
    selectMainOptionMock,
    selectVariantMock,
    showSearchTerms,
    resolveCollectionHandlerMock,
    readFile,
    io,
  );

  // Assert
  // collection variant is prompted for.
  expect(selectVariantMock.mock.calls.length).toBe(1);

  // collection handler is resolved.
  expect(resolveCollectionHandlerMock.mock.calls.length).toBe(1);

  // search is called on the collection search handler
  expect(collectionHandlerMock.search.mock.calls.length).toBe(1);
});

test('should show search terms when main menu option 2 is selected', async () => {
  // Arrange

  const collectionHandlerMock = {search: jest.fn()};
  const resolveCollectionHandlerMock = jest.fn(
    (_: string): ISearchHandler =>
      (collectionHandlerMock as any) as ISearchHandler,
  );

  const selectMainOptionMock = jest.fn();
  selectMainOptionMock.mockReturnValueOnce('2').mockReturnValueOnce('quit');

  const showSearchTermsMock = jest.fn();

  const selectVariantMock = jest.fn();
  selectVariantMock.mockReturnValueOnce('1'); // users

  // Act
  await startUserMenu(
    selectMainOptionMock,
    selectVariantMock,
    showSearchTermsMock,
    resolveCollectionHandlerMock,
    readFile,
    io,
  );

  // Assert
  // search is called on the collection search handler
  expect(showSearchTermsMock.mock.calls.length).toBe(1);
});
