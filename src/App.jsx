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
  const [editingContact, setEditingContact] = useState({});

  useEffect(() => {
    if (contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

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
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const openForm = () => {
    setRegister(true);
  };

  const cancelForm = () => {
    setRegister(false);
  };

  const editContact = id => {
    setEditingContact(contacts.filter(contact => contact.id === id));
  };

  const con = editingContact[0];

  return (
    <>
      <h1>Phone book</h1>
      {!register && editingContact && (
        <Table
          addedContacts={contacts}
          deleteContact={deleteContact}
          onClickAdd={openForm}
          onClickEdit={editContact}
        />
      )}
      <Form onSubmitForm={formSubmitHandler} cancelForm={cancelForm} />
      <EditForm
        editContact={con}
        onSubmitForm={formSubmitHandler}
        cancelForm={cancelForm}
      />

      {/* {register && (
        <Form onSubmitForm={formSubmitHandler} cancelForm={cancelForm} />
      )} */}
      {/* {editingContact && (
        <Form
          editingContact={editingContact}
          onSubmitForm={formSubmitHandler}
          cancelForm={cancelForm}
        />
      )} */}
    </>
  );
}

export default App;
