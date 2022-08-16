import { useAppDispatch } from '../../Redux/hooks';
import { deleteFilter, setFilter } from '../../Redux/slices/appSlice';
import { getStopsText } from '../../utils/helpers';

const Filter = ({ value }: { value: number }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(setFilter(value));
      return;
    }

    dispatch(deleteFilter(value));
  };

  const stopsText = getStopsText(value);

  return (
    <label>
      <input type="checkbox" name="stop" value={value} onChange={handleValue} />
      {stopsText}
    </label>
  );
};

export default Filter;
