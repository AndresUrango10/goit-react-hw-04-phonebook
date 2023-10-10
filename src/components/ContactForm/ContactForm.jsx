import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { nanoid } from 'nanoid';
import { FormContainer, Form, Input, Button } from './ContactForm.styled';
import Swal from 'sweetalert2';

export class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ?Método para manejar cambios en los campos de entrada.
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // ?Método para manejar el envío del formulario.
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    //*Verificar si los campos de nombre y número estan vacíos.
    if (name.trim() === '' || number.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'RECUERDA',
        text: 'Los campos de nombre y número deben ser completados.',
      });
      return;
    }
    // ?Llama al método 'addContact' del componente padre con los datos del nuevo contacto.
    this.props.addContact({ id: nanoid(), name: name.trim(), number: number.trim() });
    // ?Limpia los campos de entrada después de agregar el contacto.(actualiza)
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Phone Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          <Button type="submit">Add Contact</Button>
        </Form>
      </FormContainer>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};