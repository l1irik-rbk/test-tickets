import React, { useEffect, useState } from 'react';
import ticketsRes from './tickets.json';

interface TicketsInt {
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

function App() {
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
    <div className="App">
      <div className="App__wrapper">
        <div className="filters">
          <h3 className="filters__tilte">Колличество пересадок</h3>
          <label>
            <input type="checkbox" name="happy" value="0" />
            Без пересадок
          </label>
          <label>
            <input type="checkbox" name="happy" value="1" />1 пересадка
          </label>
          <label>
            <input type="checkbox" name="happy" value="2" />2 пересадки
          </label>
          <label>
            <input type="checkbox" name="happy" value="3" />3 пересадки
          </label>
        </div>
        <div className="tickets">
          {tickets?.map((ticket, index) => (
            <div key={index} className="ticket">
              <div className="ticket__wrapper">
                <div className="ticket__left-hand">
                  <h4 className="ticket__title">TK</h4>
                  <button className="ticket__price">Купить за 12400</button>
                </div>
                <div className="ticket__right-hand">
                  <div className="ticket__departure">
                    <p className="departure__time">17:20</p>
                    <p className="departure__desk">VVO, Владивосток</p>
                    <p className="departure__date">12.05.18</p>
                  </div>
                  <div className="ticket__stop">
                    <p>1 peresadka</p>
                  </div>
                  <div className="ticket__arrival">
                    <p className="arrival__time">17:20</p>
                    <p className="arrival__desk">VVO, Владивосток</p>
                    <p className="arrival__date">12.05.18</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
