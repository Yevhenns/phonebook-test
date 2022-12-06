import React from 'react';

export const FormItem = ({ name, value, id, onChange }) => {
  return (
    <label>
      {name+':'}
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={'Enter the ' + name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces"
        required
      />
    </label>
  );
};
