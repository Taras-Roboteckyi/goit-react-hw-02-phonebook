const ContactListItem = props => {
  const { number, name } = props.data;
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
    </li>
  );
};

export default ContactListItem;
