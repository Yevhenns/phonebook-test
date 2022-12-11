import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
          {addedContacts.map(
            ({ id, name, lastName, address, city, country, email, number }) => (
              <tr key={nanoid()}>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{address}</td>
                <td>{city}</td>
                <td>{country}</td>
                <td>{email}</td>
                <td>{number}</td>
                <td>
                  <button type="button" onClick={() => onClickEdit(id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => deleteContact(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  addedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};
