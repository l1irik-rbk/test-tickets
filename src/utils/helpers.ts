import { TicketsInt } from '../components/Ticket/Ticket';

export const sorteTickets = (a: TicketsInt, b: TicketsInt) => a.price - b.price;

export const getStopsText = (value: number) =>
  value === 0 ? 'Без пересадок' : value === 1 ? `${value} пересадка` : `${value} пересадки`;
