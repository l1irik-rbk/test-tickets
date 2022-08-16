import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { fetchTickets } from '../../Redux/thunks/fetchTickets';
import Ticket from '../Ticket/Ticket';

const Tickets = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tickets, filters } = useAppSelector((state) => state.app);

  useEffect(() => {
    // Имитация запроса
    const timeoutID = setTimeout(() => {
      dispatch(fetchTickets(filters));
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [filters]);

  return (
    <div className="tickets">
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
