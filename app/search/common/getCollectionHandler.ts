import {OrganisationSearchHandler} from './../organisations';
import {TicketSearchHandler} from './../tickets';
import {UserSearchHandler} from './../users';
import {SearchMenuOptions} from './../../constants';

export function resolveCollectionHandler(variant: string) {
  switch (variant) {
    case SearchMenuOptions.USERS:
      return new UserSearchHandler();
    case SearchMenuOptions.TICKETS:
      return new TicketSearchHandler();
    case SearchMenuOptions.ORGANIZATIONS:
      return new OrganisationSearchHandler();
    default:
      return null;
  }
}
