import { nanoid } from 'nanoid';

const generateId = nanoid();

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor={generateId}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={onChange}
        id={generateId}
      />
    </label>
  );
};

export default Filter;
