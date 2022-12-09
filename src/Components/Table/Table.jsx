import { nanoid } from 'nanoid';

export const Table = ({
  addedContacts,
  deleteContact,
  onClickAdd,
  onClickEdit,
}) => {
  return (
    <>
      <h2>Contacts</h2>
      <button type="button" onClick={onClickAdd}>
        Add contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addedContacts.map(contact => (
            <tr key={nanoid()}>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>{contact.address}</td>
              <td>{contact.city}</td>
              <td>{contact.country}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td>
                <button type="button" onClick={() => onClickEdit(contact.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
