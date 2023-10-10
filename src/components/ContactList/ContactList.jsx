import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactUl,ContactLi,DeleteButton } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    // *Filtra los contactos basados en el filtro de búsqueda.
    const { contacts, filter, handleDelete } = this.props;
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    return (
      <ContactUl>
        {filteredContacts.map(contact => (
          <ContactLi key={contact.id}>
            {/* Muestra el nombre, número y un botón para eliminar el contacto. */}
            {contact.name} - {contact.number}
            <DeleteButton onClick={() => handleDelete(contact.id)}>Eliminar</DeleteButton>
          </ContactLi>
        ))}
      </ContactUl>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
