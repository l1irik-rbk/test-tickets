import { useEffect, useState } from 'react';
import ticketsRes from '../../tickets.json';
import Ticket, { TicketsInt } from '../Ticket/Ticket';

const Tickets = (): JSX.Element => {
  const [tickets, setTickets] = useState<TicketsInt[] | null>(null);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    const tickets = ticketsRes.tickets as TicketsInt[];
    setTickets(tickets);
    console.log(tickets);
  };

  return (
    <div className="tickets">
      {tickets?.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
