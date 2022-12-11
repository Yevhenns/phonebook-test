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
  const [contactId, setContactId] = useState(null);

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
    setContactId(id);
  };

  const editingFormContact = editingContact[0];

  const handleEditFormSubmit = contact => {
    // const editedContact = contact;
    // const newContacts = [...contacts];

    const index = contacts.findIndex(contact => contact.id === contactId);

    // console.log(index)

    const editedContact = contacts.splice(index, 1, contact)

    contact && console.log(contact);

    // newContacts[index] = editedContact;

    // setContacts(newContacts);
    setContactId(null);
  };

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
      <Form
        text="Register a new contact"
        onSubmitForm={formSubmitHandler}
        cancelForm={cancelForm}
      />
      <EditForm
        text="Edit the contact"
        editContact={editingFormContact}
        onEditSubmitForm={handleEditFormSubmit}
        cancelForm={cancelForm}
      />
    </>
  );
}

export default App;
