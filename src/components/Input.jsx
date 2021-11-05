import React from 'react';
import { string, func, objectOf } from 'prop-types';
import '../styles/Input.css';

function Input(props) {
  const {
    wallData, id, label, handleChange,
  } = props;

  return (
    <label
      className="calculator-label"
      htmlFor={id}
    >
      {`${label}:`}
      <input
        id={id}
        className="calculator-input"
        type="text"
        value={wallData[id]}
        onChange={handleChange}
        autoComplete="off"
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
