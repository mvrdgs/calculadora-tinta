import React from 'react';
import { string, func, objectOf } from 'prop-types';

function Input(props) {
  const {
    wallData, id, label, handleChange,
  } = props;

  return (
    <label htmlFor={id}>
      {`${label}:`}
      <input
        id={id}
        type="text"
        value={wallData[id]}
        onChange={handleChange}
      />
    </label>
  );
}

Input.propTypes = {
  wallData: objectOf(string),
  id: string,
  label: string,
  handleChange: func,
}.isRequired;

export default Input;
