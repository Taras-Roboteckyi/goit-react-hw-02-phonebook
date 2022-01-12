import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  generateId = nanoid();

  formSubmitHandler = data => {
    const { name } = data;
    const normalizedNameContact = name.toLowerCase();

    const newId = { id: nanoid(), ...data };

    this.state.contacts.filter(contact => {
      return contact.name.toLowerCase() === normalizedNameContact
        ? alert(`${name} is already in contacts.`)
        : contact.name;
    });

    this.setState(previousState => ({
      contacts: [...previousState.contacts, newId],
    }));
    console.log(newId);
  };

  checksContactName = dataName => {
    const { contacts } = this.state;
    const { name } = dataName;
    const normalizedNameContact = name.toLowerCase();

    contacts.filter(contact => {
      /*  if (name.toLowerCase() === normalizedNameContact) {
        return alert(`${name} is already in contacts.`);
      } */
      return contact.name.toLowerCase() === normalizedNameContact
        ? alert(`${name} is already in contacts.`)
        : false;
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;

    const visibleContact = this.getFilterContact();

    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <ContactForm formSubmit={this.formSubmitHandler}></ContactForm>
        </section>

        <section>
          <h2>Contacts</h2>

          <Filter value={filter} onChange={this.changeFilter}></Filter>

          <ContactList visibleContact={visibleContact}></ContactList>
        </section>
      </>
    );
  }
}
