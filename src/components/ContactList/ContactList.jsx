import ContactListItem from './ContactListItem';

const ContactList = ({ visibleContact }) => {
  return (
    <ul>
      {visibleContact.map(({ name, id, number }) => {
        return <ContactListItem key={id} data={{ number, name }} />;
      })}
    </ul>
  );
};

export default ContactList;
