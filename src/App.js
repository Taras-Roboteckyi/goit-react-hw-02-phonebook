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

    this.findContactName().includes(normalizedNameContact)
      ? alert(`${name} is already in contacts.`)
      : this.setState(previousState => {
          return { contacts: [...previousState.contacts, newId] };
        });

    /* console.log(newId); */
  };

  findContactName = () => {
    const { contacts } = this.state;
    return contacts.map(({ name }) => name.toLowerCase());
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
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

          <ContactList
            visibleContact={visibleContact}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </section>
      </>
    );
  }
}