import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TicketsInt } from '../../components/Ticket/Ticket';
import { fetchTickets } from '../thunks/fetchTickets';

const initialState: initialStateI = {
  tickets: [],
  isTicketsLoaded: false,
  hasError: false,
  filters: [],
};

interface initialStateI {
  tickets: TicketsInt[];
  isTicketsLoaded: boolean;
  hasError: boolean;
  filters: number[];
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<number>) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    deleteFilter: (state, action: PayloadAction<number>) => {
      const elementIndex = state.filters.findIndex((element) => element === action.payload);
      state.filters.splice(elementIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action: PayloadAction<TicketsInt[]>) => {
      state.tickets = action.payload;
      state.isTicketsLoaded = true;
      state.hasError = false;
    });
    builder.addCase(fetchTickets.pending, (state) => {
      state.isTicketsLoaded = false;
    });
    builder.addCase(fetchTickets.rejected, (state) => {
      state.isTicketsLoaded = false;
      state.hasError = true;
    });
  },
});

export const { setFilter, deleteFilter } = appSlice.actions;
