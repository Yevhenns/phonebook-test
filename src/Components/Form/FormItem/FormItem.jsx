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
        placeholder={'Enter the ' + name}        
        required
      />
    </label>
  );
};
