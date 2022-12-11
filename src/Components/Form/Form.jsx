import React from 'react';
import { useState } from 'react';
import { FormItem } from './FormItem/FormItem';
import PropTypes from 'prop-types';

export const Form = ({
  text,
  onSubmitForm,
  cancelForm,
}) => {
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    email: '',
    number: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitForm(
      input.name,
      input.lastName,
      input.address,
      input.city,
      input.country,
      input.email,
      input.number
    );
    setInput({
      name: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      email: '',
      number: '',
    });
  };

  return (
    <>
      <h2>{text}</h2>
      <form onSubmit={handleSubmit}>
        <FormItem
          type="text"
          id={'name'}
          name={'Name'}
          onChange={handleInputChange}
          value={input.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormItem
          type="text"
          id={'lastName'}
          name={'Last Name'}
          onChange={handleInputChange}
          value={input.lastName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormItem
          type="text"
          id={'address'}
          name={'Address'}
          onChange={handleInputChange}
          value={input.address}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormItem
          type="text"
          id={'city'}
          name={'City'}
          onChange={handleInputChange}
          value={input.city}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormItem
          type="text"
          id={'country'}
          name={'Country'}
          onChange={handleInputChange}
          value={input.country}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormItem
          type="email"
          id={'email'}
          name={'Email'}
          onChange={handleInputChange}
          value={input.email}
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        />
        <button type="button">Add</button>
        <FormItem
          type="tel"
          id={'number'}
          name={'Number'}
          onChange={handleInputChange}
          value={input.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <button type="button">Add</button>
        <button type="submit">Save</button>
        <button type="button" onClick={cancelForm}>
          Cancel
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  cancelForm: PropTypes.func.isRequired,
};