import React, { Component } from 'react';

export class ContactList extends Component {
  handleDelete = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button onClick={() => this.handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
