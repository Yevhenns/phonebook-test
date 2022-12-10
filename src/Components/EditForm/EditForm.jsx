import React from 'react';
import { useState, useEffect } from 'react';
import { FormItem } from '../Form/FormItem/FormItem';

export const EditForm = ({ onSubmitForm, cancelForm, editContact }) => {
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    email: '',
    number: '',
  });

  useEffect(() => {
    if (!editContact) {
      return;
    }
    setInput(editContact);
  }, [editContact]);

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
      {editContact && (
        <>
          <h2>Edit the contact</h2>
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
      )}
    </>
  );
};
