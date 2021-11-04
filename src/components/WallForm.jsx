import React, { useEffect, useState } from 'react';
import { string, func, objectOf } from 'prop-types';

function WallForm(props) {
  const {
    identifier, setFormData, formData, error,
  } = props;
  const [wallData, setWallData] = useState(formData[identifier]);

  console.log(error);

  useEffect(() => {
    setFormData({ ...formData, [identifier]: wallData });
  }, [wallData]);

  const handleChange = async ({ target }) => {
    const { id, value } = target;

    setWallData({ ...wallData, [id]: value });
  };

  return (
    <div>
      <span>{ identifier }</span>
      <label htmlFor="width">
        Largura:
        <input
          id="width"
          type="text"
          value={wallData.width}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="height">
        Altura:
        <input
          id="height"
          type="text"
          value={wallData.height}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="windows">
        Quantidade de janelas:
        <input
          id="windows"
          type="text"
          value={wallData.windows}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="doors">
        Quantidade de portas:
        <input
          id="doors"
          type="text"
          value={wallData.doors}
          onChange={handleChange}
        />
      </label>
      { error && (
        <div>
          <span>{`*${error}`}</span>
        </div>
      )}
    </div>
  );
}

WallForm.propTypes = {
  identifier: string,
  setFormData: func,
  formData: objectOf(objectOf(string)),
  error: string,
}.isRequired;

export default WallForm;
