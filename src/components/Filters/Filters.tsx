import { STOPS } from '../../constants';
import Filter from '../Filter/Filter';

const Filters = (): JSX.Element => {
  return (
    <div className="filters">
      <h3 className="filters__tilte">Колличество пересадок</h3>
      {STOPS.map((stop, index) => (
        <Filter key={index} value={stop.value} />
      ))}
    </div>
  );
};

export default Filters;
