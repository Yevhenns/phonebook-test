import { useState, useEffect } from 'react';
import { Form } from './Components/Form/Form';
import { Table } from './Components/Table/Table';
import { EditForm } from './Components/EditForm/EditForm';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [register, setRegister] = useState(false);
  const [edit, setEdit] = useState(false);

  const [editingContact, setEditingContact] = useState({});
  const [contactId, setContactId] = useState(null);

  useEffect(() => {
    if (contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  });

  const formSubmitHandler = (
    name,
    lastName,
    address,
    city,
    country,
    email,
    number
  ) => {
    const newContact = {
      id: nanoid(),
      name,
      lastName,
      address,
      city,
      country,
      email,
      number,
    };
    setContacts([newContact, ...contacts]);
    setRegister(false);
    setEdit(false);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const openForm = () => {
    setRegister(true);
  };

  const cancelForm = () => {
    setRegister(false);
    setEdit(false);
  };

  const editContact = id => {
    setEditingContact(contacts.filter(contact => contact.id === id));
    setContactId(id);
    setEdit(true);
  };

  const editingFormContact = editingContact[0];

  const handleEditFormSubmit = (
    name,
    lastName,
    address,
    city,
    country,
    email,
    number
  ) => {
    const editedContact = {
      id: contactId,
      name,
      lastName,
      address,
      city,
      country,
      email,
      number,
    };
    const index = contacts.findIndex(contact => contact.id === contactId);
    contacts.splice(index, 1, editedContact);
    setContactId(null);

    setRegister(false);
    setEdit(false);
  };

  return (
    <>
      <h1>Phone book</h1>
      {!register && !edit && (
        <Table
          addedContacts={contacts}
          deleteContact={deleteContact}
          onClickAdd={openForm}
          onClickEdit={editContact}
        />
      )}
      {register && (
        <Form
          text="Register a new contact"
          onSubmitForm={formSubmitHandler}
          cancelForm={cancelForm}
        />
      )}
      {edit && (
        <EditForm
          text="Edit the contact"
          editContact={editingFormContact}
          onEditSubmitForm={handleEditFormSubmit}
          cancelForm={cancelForm}
        />
      )}
    </>
  );
}

export default App;
