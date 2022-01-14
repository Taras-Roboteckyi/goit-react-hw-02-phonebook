import { Component } from 'react';
import { nanoid } from 'nanoid';

import { FormPhoneBook, LabelPhoneBook, InputPhoneBook, ButtonPhoneBook } from './Form.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleNameChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.formSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;

    return (
      <FormPhoneBook onSubmit={this.handleSubmit}>
        <LabelPhoneBook htmlFor={this.nameInputId}>
          Name
          <InputPhoneBook
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            value={name}
            onChange={this.handleNameChange}
            id={this.nameInputId}
          />
        </LabelPhoneBook>
        <LabelPhoneBook htmlFor={this.numberInputId}>
          Number
          <InputPhoneBook
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
            value={number}
            onChange={this.handleNameChange}
            id={this.numberInputId}
          />
        </LabelPhoneBook>
        <ButtonPhoneBook type="submit">Add contact</ButtonPhoneBook>
      </FormPhoneBook>
    );
  }
}
