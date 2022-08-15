import Filters from './components/Filters/Filters';
import Tickets from './components/Tickets/Tickets';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Filters />
        <Tickets />
      </div>
    </div>
  );
};

export default App;
