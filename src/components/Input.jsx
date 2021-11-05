import React from 'react';
import { string, func, objectOf } from 'prop-types';
import '../styles/Input.css';

function Input(props) {
  const {
    wallData, name, label, handleChange, identifier,
  } = props;

  return (
    <label
      className="calculator-label"
      htmlFor={`${identifier}-${name}`}
    >
      {`${label}:`}
      <input
        id={`${identifier}-${name}`}
        name={name}
        className="calculator-input"
        type="text"
        value={wallData[name]}
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
