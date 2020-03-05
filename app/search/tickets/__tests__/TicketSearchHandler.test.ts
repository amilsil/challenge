import {TicketSearchHandler} from './../TicketSearchHandler';

class IoMock {
  input = jest.fn();
  output = jest.fn();
  close = jest.fn();
}

test('should show message when no results are found', async () => {
  const handler = new TicketSearchHandler();

  const io = new IoMock();
  io.input
    .mockReturnValueOnce(Promise.resolve('role'))
    .mockReturnValueOnce(Promise.resolve('admin'));

  const readFileMock = jest.fn();
  readFileMock.mockReturnValue([{}]);

  // Act
  await handler.search(io, readFileMock);

  // Assert
  // Term and value are asked for
  expect(io.input.mock.calls.length).toBe(2);
  expect(io.input.mock.calls[0][0]).toBe('term');
  expect(io.input.mock.calls[1][0]).toBe('value');

  // File is read
  expect(readFileMock.mock.calls.length).toBe(1);

  // A message is shown
  expect(io.output.mock.calls.length).toBe(1);
  expect(io.output.mock.calls[0][0]).toBe(
    'No records matched the search criteria',
  );
});

test('should show results when matching records are found', async () => {
  const handler = new TicketSearchHandler();

  const io = new IoMock();
  io.input
    .mockReturnValueOnce(Promise.resolve('role'))
    .mockReturnValueOnce(Promise.resolve('admin'));

  const readFileMock = jest.fn();
  readFileMock.mockReturnValue([
    {role: 'admin'},
    {role: 'end-user'},
    {role: 'admin'},
  ]);

  // Act
  await handler.search(io, readFileMock);

  // Assert
  // Term and value are asked for
  expect(io.input.mock.calls.length).toBe(2);
  expect(io.input.mock.calls[0][0]).toBe('term');
  expect(io.input.mock.calls[1][0]).toBe('value');

  // File is read
  expect(readFileMock.mock.calls.length).toBe(1);

  // A message is shown
  expect(io.output.mock.calls.length).toBe(3);
  expect(io.output.mock.calls[0][0]).toBe('Found following results');
  expect(io.output.mock.calls[1][0]).toEqual(`{"role":"admin"}`);
  expect(io.output.mock.calls[2][0]).toEqual(`{"role":"admin"}`);
});
