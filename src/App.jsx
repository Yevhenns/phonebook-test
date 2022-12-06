import { useState, useEffect } from 'react';
import { Form } from './Components/Form/Form';
import { Table } from './Components/Table/Table';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [register, setRegister] = useState(false);

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

  return (
    <>
      <h1>Phone book</h1>
      {
        <Table
          addedContacts={contacts}
          deleteContact={deleteContact}
          onClick={openForm}
        />
      }
      {register && (
        <Form onSubmit={formSubmitHandler} cancelForm={cancelForm} />
      )}
    </>
  );
}

export default App;
