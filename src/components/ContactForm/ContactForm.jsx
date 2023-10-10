import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid }  from 'nanoid';
import { FormContainer, Form, Input, Button } from './ContactForm.styled';
import Swal from 'sweetalert2';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'RECUERDA',
        text: 'Los campos de nombre y número deben ser completados.',
      });
      return;
    }

    addContact({ id: nanoid(), name: name.trim(), number: number.trim() });
    setFormData({ name: '', number: '' });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Phone Number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
