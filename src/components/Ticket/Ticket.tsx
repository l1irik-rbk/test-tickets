import { getStopsText } from '../../utils/helpers';

import './Ticket.scss';

const Ticket = ({ ticket }: { ticket: TicketsInt }): JSX.Element => {
  const stopsText = getStopsText(ticket.stops);

  return (
    <div className="ticket">
      <div className="ticket__wrapper">
        <div className="ticket__left-hand">
          <h4 className="ticket__title">{ticket.carrier}</h4>
          <button className="ticket__price">Купить за {ticket.price}</button>
        </div>
        <div className="ticket__right-hand">
          <div className="ticket__departure">
            <p className="departure__time">{ticket.departure_time}</p>
            <p className="departure__desk">
              {ticket.origin}, {ticket.origin_name}
            </p>
            <p className="departure__date">{ticket.departure_date}</p>
          </div>
          <div className="ticket__stop">
            <p>{stopsText}</p>
          </div>
          <div className="ticket__arrival">
            <p className="arrival__time">{ticket.arrival_time}</p>
            <p className="arrival__desk">
              {ticket.destination_name}, {ticket.destination}
            </p>
            <p className="arrival__date">{ticket.arrival_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface TicketsInt {
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  departure_date: string;
  departure_time: string;
  destination: string;
  destination_name: string;
  origin: string;
  origin_name: string;
  price: number;
  stops: number;
}

export default Ticket;
