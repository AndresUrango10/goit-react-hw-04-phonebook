import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Swal from 'sweetalert2';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.addContact = this.addContact.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // Cargar contactos desde el almacenamiento local al montar el componente.
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    // Guardar contactos en el almacenamiento local cada vez que se actualice el estado.
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }



 // *Método para agregar un nuevo contacto al estado 'contacts'.
  addContact = contact => {
    const { contacts } = this.state;

    const contactExists = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    // *Verifica si ya existe un contacto con el mismo nombre.
    if (contactExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${contact.name} ya está en la agenda.`,
      });
      return;
    } else {
      // ?Agrega el nuevo contacto al estado 'contacts'.
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  // ?Método para manejar cambios en el filtro de búsqueda.
  handleFilterChange = newFilter => {
    this.setState({ filter: newFilter });
  };

  // ?Método para eliminar un contacto del estado 'contacts'.
  handleDelete = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
