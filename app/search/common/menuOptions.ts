import {IInputOutput} from './../../types';
import {SearchMenuOptions, MainMenuOptions} from './../../constants';

export function selectMainOption(io: IInputOutput) {
  io.output(`
      Type '${MainMenuOptions.EXIT}' to exit at any time.
      Select search options:
      * Press ${MainMenuOptions.SEARCH} to search
      * Press ${MainMenuOptions.SEARCH_TERMS} to show search terms`);

  return io.input('');
}

export function selectVariant(io: IInputOutput) {
  io.output(`
      Select ${SearchMenuOptions.USERS}) Users, ${SearchMenuOptions.TICKETS}) Tickets, ${SearchMenuOptions.ORGANIZATIONS}) Organizations
    `);

  return io.input('');
}

export function showSearchTerms(io: IInputOutput) {
  io.output(`
    USERS
    name, alias, active, verified, tags[], role

    TICKETS
    type, subject, status, priority, tags, via

    ORGANIZATIONS
    name, doman_names
    `);
}
