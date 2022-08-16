import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { fetchTickets } from '../../Redux/thunks/fetchTickets';
import Ticket from '../Ticket/Ticket';

import './Tickets.scss';

const Tickets = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isTicketsLoaded, filters, hasError, tickets } = useAppSelector((state) => state.app);

  useEffect(() => {
    // Имитация запроса
    const timeoutID = setTimeout(() => {
      dispatch(fetchTickets(filters));
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [filters]);

  if (hasError) {
    return (
      <div className="tickets">
        <div className="error">Error while fetching! Try to refresh this page!</div>
      </div>
    );
  }
  console.log(isTicketsLoaded);
  return (
    <div className="tickets">
      {isTicketsLoaded ? (
        tickets.map((ticket, index) => <Ticket key={index} ticket={ticket} />)
      ) : (
        <div className="loading">LOADING...</div>
      )}
    </div>
  );
};

export default Tickets;
