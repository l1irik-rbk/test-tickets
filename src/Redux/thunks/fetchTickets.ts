import { createAsyncThunk } from '@reduxjs/toolkit';
import { TicketsInt } from '../../components/Ticket/Ticket';
import { sorteTickets } from '../../utils/helpers';

import ticketsRes from '../../tickets.json';

export const fetchTickets = createAsyncThunk(
  'fetchTickets',
  async (filters: number[], { rejectWithValue }) => {
    try {
      // Вместо следующей строки fetch запрос при реальном API
      const tickets = ticketsRes.tickets as TicketsInt[];

      const sortedTickets = [...tickets].sort(sorteTickets) as TicketsInt[];

      if (filters.length) {
        const filteredTickets = [] as TicketsInt[];

        filters.forEach((filter) => {
          const filtered = sortedTickets.filter((a) => a.stops === filter);
          filteredTickets.push(...filtered);
        });

        return filteredTickets.sort(sorteTickets);
      }

      return sortedTickets;
    } catch (error) {
      return rejectWithValue('Error while fetching!');
    }
  }
);
