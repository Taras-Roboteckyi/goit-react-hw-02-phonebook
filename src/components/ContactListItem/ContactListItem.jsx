import PropTypes from 'prop-types';

const ContactListItem = ({ data, onDeleteContact }) => {
  const { number, name, id } = data;

  /* console.log(data); */
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
