import React from 'react';
import PropTypes from 'prop-types';

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

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}