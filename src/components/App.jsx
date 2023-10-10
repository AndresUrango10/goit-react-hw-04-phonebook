import React, { useState, useEffect } from 'react';
import { nanoid }  from 'nanoid';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import Swal from 'sweetalert2';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const contactExists = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (contactExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${contact.name} ya está en la agenda.`,
      });
      return;
    } else {
      setContacts((prevContacts) => [...prevContacts, contact]);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
