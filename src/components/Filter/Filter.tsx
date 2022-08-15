const Filter = ({ value }: { value: number }): JSX.Element => {
  const text =
    value === 0 ? 'Без пересадок' : value === 1 ? `${value} пересадка` : `${value} пересадки`;

  return (
    <label>
      <input type="checkbox" name="stops" value={value} />
      {text}
    </label>
  );
};

export default Filter;
