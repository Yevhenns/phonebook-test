import React from 'react';
import { useState, useEffect } from 'react';
import { FormItem } from './FormItem/FormItem';

export const Form = ({ onSubmitForm, cancelForm, editingContact }) => {
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
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
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

  useEffect(() => {
  setInput(editingContact)
}, [editingContact])  

  // const editContact = () => {
  //   setInput(editingContact);
  // }

  return (
    <>
      <h2>Register new contact</h2>
      <form onSubmit={handleSubmit}>
        <FormItem
          id={'name'}
          name={'Name'}
          onChange={handleInputChange}
          value={input.name}
        />
        <FormItem
          id={'lastName'}
          name={'Last Name'}
          onChange={handleInputChange}
          value={input.lastName}
        />
        <FormItem
          id={'address'}
          name={'Address'}
          onChange={handleInputChange}
          value={input.address}
        />
        <FormItem
          id={'city'}
          name={'City'}
          onChange={handleInputChange}
          value={input.city}
        />
        <FormItem
          id={'country'}
          name={'Country'}
          onChange={handleInputChange}
          value={input.country}
        />
        <FormItem
          id={'email'}
          name={'Email'}
          onChange={handleInputChange}
          value={input.email}
        />
        <button type="button">Add</button>
        <FormItem
          id={'number'}
          name={'Number'}
          onChange={handleInputChange}
          value={input.number}
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
