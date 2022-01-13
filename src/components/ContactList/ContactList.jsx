import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ visibleContact, onDeleteContact }) => {
  return (
    <ul>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ContactListItem key={id} data={{ number, name, id }} onDeleteContact={onDeleteContact} />
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
