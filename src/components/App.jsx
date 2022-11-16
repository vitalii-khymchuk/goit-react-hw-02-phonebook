import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../Box.styled';
import ContactsInput from './ContactsInput';
import ContactsList from './ContactsList';

export class App extends Component {
  state = { contacts: [], filter: '' };

  onFormSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => {
      const currentContacts = prevState.contacts;
      return { contacts: [newContact, ...currentContacts] };
    });
  };

  onContactDelete = contactId => {
    this.setState(prevState => {
      const currentContacts = prevState.contacts;
      return {
        contacts: [...currentContacts].filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const onFormSubmit = this.onFormSubmit;
    const onContactDelete = this.onContactDelete;
    const contacts = this.state.contacts;
    return (
      <>
        <ContactsInput onFormSubmit={onFormSubmit} />
        {contacts[0] && (
          <ContactsList contacts={contacts} onContactDelete={onContactDelete} />
        )}
      </>
    );
  }
}
